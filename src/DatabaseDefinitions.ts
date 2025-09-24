export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          email: string | null
          full_name: string | null
          avatar_url: string | null
          role: string
          is_active: boolean
          newsletter_subscribed: boolean
          newsletter_subscribed_at: string | null
          newsletter_unsubscribed_at: string | null
        }
        Insert: {
          id: string
          created_at?: string
          updated_at?: string
          email?: string | null
          full_name?: string | null
          avatar_url?: string | null
          role?: string
          is_active?: boolean
          newsletter_subscribed?: boolean
          newsletter_subscribed_at?: string | null
          newsletter_unsubscribed_at?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          email?: string | null
          full_name?: string | null
          avatar_url?: string | null
          role?: string
          is_active?: boolean
          newsletter_subscribed?: boolean
          newsletter_subscribed_at?: string | null
          newsletter_unsubscribed_at?: string | null
        }
        Relationships: []
      }
      contact_submissions: {
        Row: {
          id: string
          created_at: string
          first_name: string
          last_name: string
          email: string
          phone: string | null
          company_name: string | null
          message: string
          source: string
          user_agent: string | null
          ip_address: string | null
          status: string
          notes: string | null
          assigned_to: string | null
          contacted_at: string | null
          follow_up_at: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          first_name: string
          last_name: string
          email: string
          phone?: string | null
          company_name?: string | null
          message: string
          source?: string
          user_agent?: string | null
          ip_address?: string | null
          status?: string
          notes?: string | null
          assigned_to?: string | null
          contacted_at?: string | null
          follow_up_at?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          first_name?: string
          last_name?: string
          email?: string
          phone?: string | null
          company_name?: string | null
          message?: string
          source?: string
          user_agent?: string | null
          ip_address?: string | null
          status?: string
          notes?: string | null
          assigned_to?: string | null
          contacted_at?: string | null
          follow_up_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contact_submissions_assigned_to_fkey"
            columns: ["assigned_to"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      newsletter_subscribers: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          email: string
          source: string
          subscribed_at: string | null
          unsubscribed_at: string | null
          is_active: boolean
          first_name: string | null
          last_name: string | null
          user_agent: string | null
          ip_address: string | null
          referrer: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          email: string
          source?: string
          subscribed_at?: string | null
          unsubscribed_at?: string | null
          is_active?: boolean
          first_name?: string | null
          last_name?: string | null
          user_agent?: string | null
          ip_address?: string | null
          referrer?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          email?: string
          source?: string
          subscribed_at?: string | null
          unsubscribed_at?: string | null
          is_active?: boolean
          first_name?: string | null
          last_name?: string | null
          user_agent?: string | null
          ip_address?: string | null
          referrer?: string | null
        }
        Relationships: []
      }
      analytics_events: {
        Row: {
          id: string
          created_at: string
          event_type: string
          event_name: string | null
          page_url: string | null
          page_title: string | null
          referrer: string | null
          session_id: string | null
          user_id: string | null
          anonymous_id: string | null
          user_agent: string | null
          ip_address: string | null
          country: string | null
          city: string | null
          properties: Json
          page_load_time: number | null
        }
        Insert: {
          id?: string
          created_at?: string
          event_type: string
          event_name?: string | null
          page_url?: string | null
          page_title?: string | null
          referrer?: string | null
          session_id?: string | null
          user_id?: string | null
          anonymous_id?: string | null
          user_agent?: string | null
          ip_address?: string | null
          country?: string | null
          city?: string | null
          properties?: Json
          page_load_time?: number | null
        }
        Update: {
          id?: string
          created_at?: string
          event_type?: string
          event_name?: string | null
          page_url?: string | null
          page_title?: string | null
          referrer?: string | null
          session_id?: string | null
          user_id?: string | null
          anonymous_id?: string | null
          user_agent?: string | null
          ip_address?: string | null
          country?: string | null
          city?: string | null
          properties?: Json
          page_load_time?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "analytics_events_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
