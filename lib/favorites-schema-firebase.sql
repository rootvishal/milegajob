-- MilegaJob Favorites – Firebase UID (use with Firebase Auth + API routes)
-- Run this in Supabase SQL Editor. API routes verify Firebase ID token and use service role.

-- Drop existing table if you previously used auth.users; otherwise create fresh.
-- CREATE TABLE IF NOT EXISTS public.favorites (...)

CREATE TABLE IF NOT EXISTS public.favorites (
    id BIGSERIAL PRIMARY KEY,
    user_id TEXT NOT NULL,
    portal_id INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    UNIQUE(user_id, portal_id)
);

CREATE INDEX IF NOT EXISTS idx_favorites_user_id ON public.favorites(user_id);
CREATE INDEX IF NOT EXISTS idx_favorites_portal_id ON public.favorites(portal_id);
CREATE INDEX IF NOT EXISTS idx_favorites_created_at ON public.favorites(created_at DESC);

ALTER TABLE public.favorites ENABLE ROW LEVEL SECURITY;

-- Service role bypasses RLS. API routes use SUPABASE_SERVICE_ROLE_KEY and filter by user_id (Firebase UID).
-- Optional: allow anon/authenticated to do nothing so only service role can read/write.
CREATE POLICY "Service role only" ON public.favorites
    FOR ALL USING (false) WITH CHECK (false);

GRANT ALL ON public.favorites TO service_role;
