# No Visuals Website

## Features

- User Authentication: Sign up, sign out, forgot password, email verification, and oAuth. Powered by Supabase Auth. GDPR cookie warning for European users.
- Marketing Page with SEO optimization and Sitemap
- Blog engine with rich formatting, RSS and SEO optimization.
- User Dashboard with user profile, user settings, update email/password, billing, and more
- Subscriptions powered by Stripe Checkout
- Pricing page
- Emails: send emails to users, including template support
- Search: lightning fast site search, without a backend
- Contact-us form
- Billing portal: self serve to change card, upgrade, cancel, or download receipts
- Onboarding flow after signup: collect user data, and select a payment plan
- Style toolkit: theming and UI components
- Responsive: designed for mobile and desktop.
- Extensible: all the tools you need to make additional marketing pages, UI components, admin portals, database backends, API endpoints, and more.

## Tech Stack

- Web Framework: SvelteKit
- CSS / Styling
  - Framework: TailwindCSS
  - Component library: DaisyUI
- Suggested Hosting Stack
  - Host + CDN: Cloudflare Pages
  - Serverless compute: Cloudflare Workers
  - Authentication: Supabase Auth
  - Database: Supabase Postgres
- Payments
  - Stripe Checkout
  - Stripe Portal

## Adding
- Describe your site with a name, description and base URL in in `src/config.ts:`. These values are used for SEO.
- Content
  - Add actual content for marketing homepage
  - Add actual content for your blog (or delete the blog)
    - Update all fields in `src/routes/(marketing)/blog/posts.ts`, and replace the post pages under `src/routes/(marketing)/blog/posts` to align to the urls from `posts.ts`.
    - Alternatively remove the blog by removing the src/routes/(marketing)/blog directory, and remove any links to the blog in the header and footer. You can always bring it back later.
  - Add any pages you want on top of our boiler plate (about, terms of service, etc). Be sure to add links to them in the header, mobile menu header, and footer as appropriate (`src/routes/(marketing)/+layout.svelte`).
  - Note: if you add any dynamic content to the main marketing page, pricing page or blog, be sure to set `prerender = false` in the appropriate `+page.ts` file. These are currently pre-rendered and served as static assets for performance reasons, but that will break if you add server side rendering requirements.
- Update SEO content
  - Update title and meta description tags for every public page. We include generic ones using your site name (`src/config.ts`), but the more specific these are the better.
  - This done automatically for blog posts from `posts.ts` metadata
- Style
  - Theme: Update the theme to match your brand, or use one of the built in themes from DaisyUI (see `app.css`). DaisyUI can automatically use a dark mode theme on systems with dark mode enabled (disabled by default) -- to enable if remove `themes: false;` and specify a dark mode theme. Docs: https://daisyui.com/docs/themes/
  - Update the marketing page layout `src/routes/(marketing)/+layout.svelte`: customize design, delete unwanted pages from header and footer
  - Style: make it your own look and feel.
  - Update the favicon in the `/static/` directory
  - The Authentication UI should automatically update based on your DaisyUI style, but check out the login in pages, and further design tweaks can be made in `src/routes/(marketing)/login/login_config.ts` (see [Auth UI](https://supabase.com/docs/guides/auth/auth-helpers/auth-ui#customization) for options).
- Site Search: any [prerendered](https://kit.svelte.dev/docs/page-options#prerender) content will automatically be indexed by the site search. To exclude a page, add it to `excludePaths` in `src/lib/build_index.ts`.
- Functionality
  - Add actual SaaS functionality!
  - Replace the admin dashboard with real content (`/src/routes/(admin)/account/+page.svelte`).
  - Add API endpoints and database tables as needed to deliver your SaaS product.
- Analytics: optionally add analytics to your project. [guide](/analytics_docs.md)
