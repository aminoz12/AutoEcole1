import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/seo/site-config'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url.replace(/\/$/, '')

  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/blog', '/blog/', '/s-inscrire'],
        disallow: ['/admin', '/dashboard', '/reserver', '/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
