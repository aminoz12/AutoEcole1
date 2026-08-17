/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: '*.supabase.co',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    unoptimized: false, // Vercel optimizes Next.js images natively
  },
  trailingSlash: false,
  transpilePackages: ['@supabase/ssr', '@supabase/supabase-js'],

  async redirects() {
    return [
      // Force canonical host: www -> apex (301)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.autoecoledespaquerettes.fr' }],
        destination: 'https://autoecoledespaquerettes.fr/:path*',
        permanent: true,
      },
      {
        source: '/packweb',
        destination: '/prestations-a-l-unite',
        permanent: true,
      },
      // Obsolete price sheet from the previous site. Send visitors and crawlers
      // to the current, maintained pricing page instead.
      {
        source: '/_files/ugd/7479d7_aa91e48815a442d7b21ea51dd9546fa5.pdf',
        destination: '/tarifs',
        permanent: true,
      },

      // ---- URLs de l'ancien site (signalées en 404 par la Search Console) ----
      // Elles restent explorées par Google : sans 301, l'antériorité SEO
      // accumulée dessus est perdue et les 404 s'accumulent dans le rapport
      // d'indexation.
      { source: '/home', destination: '/', permanent: true },
      { source: '/apropos', destination: '/a-propos', permanent: true },
      // L'ancien site avait plusieurs variantes /about-N (2, 3 et 5 reçoivent
      // encore des impressions). Un motif les couvre toutes, y compris celles
      // qu'on n'a pas vues passer dans la Search Console.
      { source: '/about', destination: '/a-propos', permanent: true },
      { source: '/about-:n', destination: '/a-propos', permanent: true },
      { source: '/alacarte', destination: '/prestations-a-l-unite', permanent: true },
      { source: '/nosformations', destination: '/tarifs', permanent: true },
      { source: '/boitemanuelle', destination: '/tarifs', permanent: true },
      { source: '/boiteautomatique', destination: '/tarifs', permanent: true },
      // Variante accentuée réellement indexée. Next.js compare le chemin
      // percent-encodé : un « î » littéral dans `source` ne matche jamais.
      { source: '/bo%C3%AEteautomatique', destination: '/tarifs', permanent: true },
      { source: '/bo%C3%AEtemanuelle', destination: '/tarifs', permanent: true },
      { source: '/formationssanscode', destination: '/tarifs', permanent: true },
      { source: '/permis-professionnel', destination: '/tarifs', permanent: true },
      // Legacy blog path: /post/* -> /blog/*
      {
        source: '/post/:slug*',
        destination: '/blog/:slug*',
        permanent: true,
      },
      // Retitled post: keep the old indexed URL alive
      {
        source: '/blog/code-route-nouvelles-regles-2024',
        destination: '/blog/code-route-nouvelles-regles-2026',
        permanent: true,
      },
      // De-accented slug: redirect the old accented URL -> ASCII.
      // Doit être percent-encodé (voir la note sur /bo%C3%AEteautomatique) :
      // la version avec « é » littéral ne matchait pas et renvoyait un 404.
      {
        source: '/blog/comment-g%C3%A9rer-son-stress-pour-r%C3%A9ussir-l-examen-de-conduite',
        destination: '/blog/comment-gerer-son-stress-pour-reussir-l-examen-de-conduite',
        permanent: true,
      },
    ]
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },
  
  // Optimize webpack for better memory usage
  webpack: (config, { isServer }) => {
    // Reduce memory pressure
    config.optimization = {
      ...config.optimization,
      moduleIds: 'deterministic',
    }

    // Disable gzip compression of the persistent cache. With large deps
    // (three.js / @react-three) the cache pack can exceed Node's max buffer
    // size, causing "Array buffer allocation failed" during dev/build.
    if (config.cache && typeof config.cache === 'object') {
      config.cache.compression = false
    }

    // Don't bundle react-quill on server side
    if (isServer) {
      config.externals = [...(config.externals || []), 'react-quill']
    }

    return config
  },
  
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['react-quill', 'lucide-react', 'framer-motion'],
  },
}

module.exports = nextConfig
