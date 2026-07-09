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
      // De-accented slug: redirect the old accented URL -> ASCII
      {
        source: '/blog/comment-gérer-son-stress-pour-réussir-l-examen-de-conduite',
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
