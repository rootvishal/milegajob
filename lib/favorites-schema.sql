-- MilegaJob Favorites System - Supabase Schema
-- Run this SQL in your Supabase SQL Editor to create the favorites table

-- Create favorites table
CREATE TABLE IF NOT EXISTS public.favorites (
    id BIGSERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    portal_id INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,

    -- Ensure one favorite per user per portal
    UNIQUE(user_id, portal_id)
);

-- Create index for better query performance
CREATE INDEX IF NOT EXISTS idx_favorites_user_id ON public.favorites(user_id);
CREATE INDEX IF NOT EXISTS idx_favorites_portal_id ON public.favorites(portal_id);
CREATE INDEX IF NOT EXISTS idx_favorites_created_at ON public.favorites(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE public.favorites ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
-- Users can only see their own favorites
CREATE POLICY "Users can view their own favorites" ON public.favorites
    FOR SELECT USING (auth.uid() = user_id);

-- Users can only insert their own favorites
CREATE POLICY "Users can insert their own favorites" ON public.favorites
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Users can only delete their own favorites
CREATE POLICY "Users can delete their own favorites" ON public.favorites
    FOR DELETE USING (auth.uid() = user_id);

-- Grant necessary permissions
GRANT ALL ON public.favorites TO authenticated;
GRANT ALL ON public.favorites TO service_role;

-- Create a view for favorites with portal data (optional, for easier queries)
CREATE OR REPLACE VIEW public.favorites_with_portals AS
SELECT
    f.id,
    f.user_id,
    f.portal_id,
    f.created_at,
    jp.name,
    jp.description,
    jp.url,
    jp.category,
    jp.icon,
    jp.rating,
    jp.specialization,
    jp."builtFor"
FROM public.favorites f
LEFT JOIN public.job_portals jp ON f.portal_id = jp.id;

-- Grant permissions on the view
GRANT SELECT ON public.favorites_with_portals TO authenticated;

-- Note: You'll also need to create the job_portals table with the same structure as your TypeScript interface
-- Here's the job_portals table schema for reference:

CREATE TABLE IF NOT EXISTS public.job_portals (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    url TEXT NOT NULL,
    category TEXT NOT NULL,
    icon TEXT NOT NULL,
    rating DECIMAL(2,1) NOT NULL,
    specialization TEXT,
    "builtFor" TEXT NOT NULL
);

-- Enable RLS on job_portals (read-only for all authenticated users)
ALTER TABLE public.job_portals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can view job portals" ON public.job_portals
    FOR SELECT TO authenticated USING (true);

-- Insert job portals data (you'll need to populate this with your 100 portals)
-- This is just an example - you'll need to insert all your portal data
INSERT INTO public.job_portals (id, name, description, url, category, icon, rating, specialization, "builtFor") VALUES
(1, 'Internshala', 'Best for internships and first jobs across India', 'https://internshala.com', 'Freshers & Entry-Level', '🎓', 4.7, 'Internships & Entry-Level', 'Students and fresh graduates'),
(2, 'Naukri.com', 'Market leader for Indian corporate roles', 'https://www.naukri.com', 'Experienced & Corporate', '📊', 4.7, 'Indian Corporate', 'All corporate professionals')
ON CONFLICT (id) DO NOTHING;

-- Grant permissions on job_portals
GRANT SELECT ON public.job_portals TO authenticated;
