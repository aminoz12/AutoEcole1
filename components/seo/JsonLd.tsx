import { siteConfig, absoluteUrl } from '@/lib/seo/site-config'

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[]
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'DrivingSchool',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        email: siteConfig.email,
        telephone: `+33${siteConfig.phoneTel.replace(/^0/, '')}`,
        image: absoluteUrl('/logoautoecol.png'),
        address: {
          '@type': 'PostalAddress',
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.city,
          postalCode: siteConfig.address.postalCode,
          addressRegion: siteConfig.address.region,
          addressCountry: siteConfig.address.country,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: siteConfig.address.geo.lat,
          longitude: siteConfig.address.geo.lng,
        },
        areaServed: [
          'Nanterre',
          'Rueil-Malmaison',
          'Courbevoie',
          'Colombes',
          'Puteaux',
          'Suresnes',
          'La Garenne-Colombes',
          'Houilles',
          'Bezons',
        ].map((name) => ({ '@type': 'City', name })),
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
            opens: '10:00',
            closes: '14:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
            opens: '15:30',
            closes: '19:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Friday',
            opens: '10:00',
            closes: '13:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Friday',
            opens: '15:30',
            closes: '19:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '10:00',
            closes: '14:00',
          },
        ],
        priceRange: '€€',
        ...(Object.values(siteConfig.social).length > 0 && {
          sameAs: Object.values(siteConfig.social),
        }),
      }}
    />
  )
}

export function WebSiteJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        inLanguage: 'fr-FR',
        publisher: { '@id': `${siteConfig.url}/#organization` },
      }}
    />
  )
}

export function FAQPageJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }}
    />
  )
}

export function BlogPostingJsonLd({
  title,
  description,
  slug,
  publishedAt,
  authorName,
  image,
}: {
  title: string
  description: string
  slug: string
  publishedAt: string
  authorName: string
  image?: string | null
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: title,
        description,
        url: absoluteUrl(`/blog/${slug}`),
        datePublished: publishedAt,
        dateModified: publishedAt,
        author: { '@type': 'Organization', name: authorName },
        publisher: { '@id': `${siteConfig.url}/#organization` },
        inLanguage: 'fr-FR',
        ...(image && { image: absoluteUrl(image) }),
        mainEntityOfPage: absoluteUrl(`/blog/${slug}`),
      }}
    />
  )
}
