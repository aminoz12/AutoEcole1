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
    unoptimized: false, // Netlify supports Next.js image optimization
  },
  trailingSlash: false,
  transpilePackages: ['@supabase/ssr', '@supabase/supabase-js'],

  async redirects() {
    return [
      {
        source: '/packweb',
        destination: '/prestations-a-l-unite',
        permanent: true,
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
