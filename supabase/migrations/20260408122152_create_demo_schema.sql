-- ============================================================
-- Demo Schema: demo_gf memories studio
-- Isolato da public (Marketizzati) — sicuro da droppare dopo
-- ============================================================

CREATE SCHEMA IF NOT EXISTS demo_gf memories studio;

-- Abilita RLS sullo schema demo
ALTER DEFAULT PRIVILEGES IN SCHEMA demo_gf memories studio
  GRANT ALL ON TABLES TO anon, authenticated;

-- Imposta search_path per le funzioni
SET search_path TO demo_gf memories studio, public;

-- ✅ Aggiungi le tue tabelle qui sotto
-- Esempio:
-- CREATE TABLE demo_gf memories studio.profiles (
--   id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
--   email TEXT UNIQUE NOT NULL,
--   created_at TIMESTAMPTZ DEFAULT NOW()
-- );
