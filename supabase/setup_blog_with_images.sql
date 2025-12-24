-- Complete Blog Setup with Local Images
-- Run this in your Supabase SQL Editor
-- This script creates the blog schema and sets up articles with local images

-- Step 1: Create blog_posts table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.blog_posts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured_image TEXT,
  author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name TEXT NOT NULL,
  category TEXT,
  tags TEXT[],
  is_featured BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT false,
  seo_title TEXT,
  seo_description TEXT,
  seo_keywords TEXT[],
  views_count INTEGER DEFAULT 0,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Step 2: Create blog_categories table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.blog_categories (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Step 3: Create indexes
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON public.blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON public.blog_posts(is_published, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_posts_featured ON public.blog_posts(is_featured, is_published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_author ON public.blog_posts(author_id);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON public.blog_posts(category);

-- Step 4: Enable Row Level Security
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_categories ENABLE ROW LEVEL SECURITY;

-- Step 5: Create RLS Policies (drop and recreate to avoid conflicts)
DROP POLICY IF EXISTS "Anyone can view published blog posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Authenticated users can view all blog posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Authenticated users can create blog posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Authors can update their own blog posts" ON public.blog_posts;
DROP POLICY IF EXISTS "Authors can delete their own blog posts" ON public.blog_posts;

CREATE POLICY "Anyone can view published blog posts" ON public.blog_posts
  FOR SELECT USING (is_published = true);

CREATE POLICY "Authenticated users can view all blog posts" ON public.blog_posts
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can create blog posts" ON public.blog_posts
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authors can update their own blog posts" ON public.blog_posts
  FOR UPDATE USING (auth.uid() = author_id OR auth.role() = 'authenticated');

CREATE POLICY "Authors can delete their own blog posts" ON public.blog_posts
  FOR DELETE USING (auth.uid() = author_id OR auth.role() = 'authenticated');

-- Step 6: Create update trigger function
CREATE OR REPLACE FUNCTION public.update_blog_post_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Step 7: Create trigger
DROP TRIGGER IF EXISTS blog_post_updated_at ON public.blog_posts;
CREATE TRIGGER blog_post_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW EXECUTE FUNCTION public.update_blog_post_updated_at();

-- Step 8: Insert categories
INSERT INTO public.blog_categories (name, slug, description) VALUES
  ('Code de la route', 'code-route', 'Tout sur le code de la route'),
  ('Permis de conduire', 'permis-conduire', 'Conseils pour réussir votre permis'),
  ('Sécurité routière', 'securite-routiere', 'Conseils de sécurité sur la route'),
  ('Assurance auto', 'assurance-auto', 'Informations sur l''assurance automobile'),
  ('Actualités', 'actualites', 'Dernières actualités du monde automobile'),
  ('Conseils', 'conseils', 'Conseils pratiques pour conducteurs'),
  ('Manœuvres', 'manoeuvres', 'Techniques de manœuvres et stationnement'),
  ('Conduite', 'conduite', 'Techniques de conduite'),
  ('Réglementation', 'reglementation', 'Règles et réglementation'),
  ('Formation', 'formation', 'Formation et apprentissage'),
  ('Entretien', 'entretien', 'Entretien du véhicule'),
  ('Types de Permis', 'types-permis', 'Différents types de permis')
ON CONFLICT (slug) DO NOTHING;

-- Step 9: Update existing articles with local images (if they exist)
UPDATE public.blog_posts 
SET featured_image = '/permis.png'
WHERE slug IN (
  'erreurs-eviter-permis-conduire',
  'permis-boite-automatique-avantages',
  'permis-probatoire-jeune-conducteur',
  'conduite-accompagnee-aac-avantages'
) AND featured_image IS NOT NULL;

UPDATE public.blog_posts 
SET featured_image = '/code.png'
WHERE slug IN (
  'panneaux-signalisation-confondus',
  'priorites-intersections-regles'
) AND featured_image IS NOT NULL;

UPDATE public.blog_posts 
SET featured_image = '/im1.png'
WHERE slug IN (
  'maitriser-creneau-5-etapes',
  'stationnement-regles-astuces'
) AND featured_image IS NOT NULL;

UPDATE public.blog_posts 
SET featured_image = '/im0.png'
WHERE slug IN (
  'conduite-autoroute-guide-complet'
) AND featured_image IS NOT NULL;

UPDATE public.blog_posts 
SET featured_image = '/im2.png'
WHERE slug IN (
  'conduite-nuit-conseils-securite',
  'conduite-pluie-securite',
  'alcool-volant-consequences-sanctions',
  'telephone-volant-dangers-sanctions'
) AND featured_image IS NOT NULL;

UPDATE public.blog_posts 
SET featured_image = '/im3.png'
WHERE slug IN (
  'eco-conduite-economiser-carburant',
  'controle-technique-guide-complet'
) AND featured_image IS NOT NULL;

-- Step 10: Verify setup
SELECT 
  '✅ Blog setup completed successfully!' as message,
  (SELECT COUNT(*) FROM public.blog_posts) as total_articles,
  (SELECT COUNT(*) FROM public.blog_categories) as total_categories,
  (SELECT COUNT(*) FROM public.blog_posts WHERE featured_image LIKE '/%.png') as articles_with_local_images;

