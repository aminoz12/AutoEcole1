-- Update article images to use local images from public folder
-- Run this in your Supabase SQL Editor
-- IMPORTANT: Make sure you've run blog_schema.sql first to create the blog_posts table!

-- Check if table exists (optional check)
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'blog_posts') THEN
    RAISE EXCEPTION 'Table blog_posts does not exist. Please run blog_schema.sql first!';
  END IF;
END $$;

-- 1. Permis/Driving License Articles -> permis.png
UPDATE public.blog_posts 
SET featured_image = '/permis.png'
WHERE slug IN (
  'erreurs-eviter-permis-conduire',
  'permis-boite-automatique-avantages',
  'permis-probatoire-jeune-conducteur',
  'conduite-accompagnee-aac-avantages'
);

-- 2. Code de la Route Articles -> code.png
UPDATE public.blog_posts 
SET featured_image = '/code.png'
WHERE slug IN (
  'panneaux-signalisation-confondus',
  'priorites-intersections-regles'
);

-- 3. Manœuvres/Parking Articles -> im1.png
UPDATE public.blog_posts 
SET featured_image = '/im1.png'
WHERE slug IN (
  'maitriser-creneau-5-etapes',
  'stationnement-regles-astuces'
);

-- 4. Highway/Conduite Articles -> im0.png
UPDATE public.blog_posts 
SET featured_image = '/im0.png'
WHERE slug IN (
  'conduite-autoroute-guide-complet'
);

-- 5. Safety/Sécurité Articles -> im2.png
UPDATE public.blog_posts 
SET featured_image = '/im2.png'
WHERE slug IN (
  'conduite-nuit-conseils-securite',
  'conduite-pluie-securite',
  'alcool-volant-consequences-sanctions',
  'telephone-volant-dangers-sanctions'
);

-- 6. Eco-Conduite/Conseils Articles -> im3.png
UPDATE public.blog_posts 
SET featured_image = '/im3.png'
WHERE slug IN (
  'eco-conduite-economiser-carburant'
);

-- 7. Maintenance/Entretien Articles -> im3.png
UPDATE public.blog_posts 
SET featured_image = '/im3.png'
WHERE slug IN (
  'controle-technique-guide-complet'
);

-- Verify the updates
SELECT 
  slug,
  title,
  category,
  featured_image
FROM public.blog_posts
ORDER BY created_at DESC;

-- Display success message
SELECT 
  '✅ Images des articles mises à jour avec succès !' as message,
  COUNT(*) as total_articles,
  COUNT(CASE WHEN featured_image LIKE '/%.png' THEN 1 END) as local_images
FROM public.blog_posts;

