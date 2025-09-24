-- CORE TABLES

-- User profiles
create table public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null,

  -- Basic profile info
  email text,
  full_name text,
  avatar_url text,

  -- Admin/role management
  role text default 'user' check (role in ('admin', 'user')),
  is_active boolean default true,

  -- Newsletter preferences
  newsletter_subscribed boolean default false,
  newsletter_subscribed_at timestamptz,
  newsletter_unsubscribed_at timestamptz,
  newsletter_unsubscribed_reason text
);

-- Contact form submissions
create table public.contact_submissions (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null,

  -- Form data
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text,
  company_name text,
  category text, -- web design, marketing, data engine and other
  message text not null,

  -- Tracking
  source text default 'website',
  user_agent text,
  ip_address inet,
  referrer text,

  -- Status management
  status text default 'new' check (status in ('new', 'contacted', 'qualified', 'closed')),
  notes text,
  assigned_to uuid references public.profiles(id),

  -- Follow-up tracking
  contacted_at timestamptz,
  follow_up_at timestamptz,
  qualified_at timestamptz,
  closed_at timestamptz,
  closed_by uuid references public.profiles(id)
);

-- Newsletter subscribers
create table public.newsletter_subscribers (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null,

  email text unique not null,
  source text default 'website', -- newsletter-signup page, blog, etc.
  first_name text,
  last_name text,

  -- Subscription management
  subscribed_at timestamptz default now(),
  unsubscribed_at timestamptz,
  is_active boolean default true,

  -- Tracking
  user_agent text,
  ip_address inet,
  referrer text
);

-- ANALYTICS

-- Page views and events
create table public.analytics_events (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null,

  -- Event data
  event_type text not null, -- 'page_view', 'form_submit', 'click', etc.
  event_name text,
  event_data jsonb default '{}',

  -- Page/session data
  page_url text,
  page_title text,
  referrer text,
  session_id text,

  -- User identification
  user_id uuid references public.profiles(id),
  anonymous_id text, -- for non-logged-in users

  -- Browser/device data
  user_agent text,
  ip_address inet,
  country text,
  city text,
  device_type text,

  -- flexible JSON for any additional data
  additional_data jsonb default '{}',

  -- Performance data
  page_load_time integer, -- milliseconds
  page_render_time integer, -- milliseconds

  -- Constraint for data integrity
  constraint analytics_events_created_at_check check (created_at <= now())
);

-- ROW LEVEL SECURITY POLICIES

-- Enable RLS on all tables
alter table public.profiles enable row level security;
alter table public.contact_submissions enable row level security;
alter table public.newsletter_subscribers enable row level security;
alter table public.analytics_events enable row level security;

-- Profile permissions
create policy "Users can view own profile" on public.profiles
  for select using (auth.uid() = id);

create policy "Users can update own profile" on public.profiles
  for update using (auth.uid() = id);

create policy "Admins can view all profiles" on public.profiles
  for all using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- Contact submissions
create policy "Admins can manage contact submissions" on public.contact_submissions
  for all using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- Newsletter
create policy "Anyone can subscribe to newsletter" on public.newsletter_subscribers
  for insert with check (true);

create policy "Admins can manage newsletter subscribers" on public.newsletter_subscribers
  for all using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- Analytics
create policy "Anyone can create analytics events" on public.analytics_events
  for insert with check (true);

create policy "Admins can view analytics events" on public.analytics_events
  for select using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role = 'admin'
    )
  );

-- FUNCTIONS AND TRIGGERS

-- Function to handle new user registration
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', new.email)
  );
  return new;
end;
$$;

-- Trigger to create profile on user signup
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Function to update updated_at timestamp
create or replace function public.handle_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- Add updated_at triggers
create trigger handle_updated_at_profiles before update on public.profiles
  for each row execute function public.handle_updated_at();

create trigger handle_updated_at_newsletter before update on public.newsletter_subscribers
  for each row execute function public.handle_updated_at();

create trigger handle_updated_at_contact before update on public.contact_submissions
  for each row execute function public.handle_updated_at();

create trigger handle_updated_at_analytics before update on public.analytics_events
  for each row execute function public.handle_updated_at();

-- =============================================
-- INDEXES FOR PERFORMANCE
-- =============================================

-- Contact submissions indexes
create index idx_contact_submissions_created_at on public.contact_submissions(created_at desc);
create index idx_contact_submissions_status on public.contact_submissions(status);
create index idx_contact_submissions_email on public.contact_submissions(email);

-- Newsletter indexes
create index idx_newsletter_subscribers_email on public.newsletter_subscribers(email);
create index idx_newsletter_subscribers_active on public.newsletter_subscribers(is_active, created_at desc);

-- Analytics indexes (for future queries)
create index idx_analytics_events_created_at on public.analytics_events(created_at desc);
create index idx_analytics_events_type on public.analytics_events(event_type, created_at desc);
create index idx_analytics_events_page on public.analytics_events(page_url, created_at desc);
create index idx_analytics_events_session on public.analytics_events(session_id, created_at desc);
