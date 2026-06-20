import { siteConfig, absoluteUrl } from '@/lib/seo/site-config'
import { packCategories, packsData, webPlans } from '@/lib/content/pricing-data'

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
        // First-party verified reviews shown on the homepage hero ("4.9 · +de 300 avis vérifiés").
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '300',
          bestRating: '5',
          worstRating: '3',
        },
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

export function BreadcrumbJsonLd({ items }: { items: { name: string; path: string }[] }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: absoluteUrl(item.path),
        })),
      }}
    />
  )
}

// Product/Offer schema for the pricing page. Built from the same data the UI renders
// (lib/content/pricing-data.ts) so the structured prices can never drift from the page.
export function PricingJsonLd() {
  const seller = { '@id': `${siteConfig.url}/#organization` }

  const courseProducts = packCategories.flatMap((category) =>
    packsData[category.key].map((pack) => ({
      '@type': 'Product',
      name: `${pack.title} — ${category.label}`,
      description: pack.features.map((f) => f.trim()).join(' · '),
      category: 'Permis de conduire',
      brand: { '@type': 'Brand', name: siteConfig.name },
      offers: {
        '@type': 'Offer',
        price: pack.total,
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        url: absoluteUrl('/tarifs'),
        seller,
      },
    })),
  )

  const webProducts = webPlans.map((plan) => ({
    '@type': 'Product',
    name: plan.name,
    description: plan.perks.map((p) => p.trim()).join(' · '),
    category: 'Code de la route en ligne',
    brand: { '@type': 'Brand', name: siteConfig.name },
    offers: {
      '@type': 'Offer',
      price: Number(plan.price),
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: absoluteUrl('/tarifs'),
      seller,
    },
  }))

  const products = [...courseProducts, ...webProducts]

  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: `Tarifs et formules — ${siteConfig.name}`,
        itemListElement: products.map((product, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: product,
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
        author: {
          '@type': 'Person',
          name: authorName,
          jobTitle: 'Responsable pédagogique',
          worksFor: { '@id': `${siteConfig.url}/#organization` },
        },
        publisher: { '@id': `${siteConfig.url}/#organization` },
        inLanguage: 'fr-FR',
        ...(image && { image: absoluteUrl(image) }),
        mainEntityOfPage: absoluteUrl(`/blog/${slug}`),
        // Voice-search: point answer engines at the headline + article body.
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', '.prose'],
        },
      }}
    />
  )
}

// HowTo schema for genuinely step-by-step articles. Note: Google retired HowTo
// rich results in 2023 — this primarily helps answer/voice engines (AEO), not
// Google rich snippets.
export function HowToJsonLd({
  name,
  description,
  url,
  steps,
}: {
  name: string
  description: string
  url: string
  steps: { name: string; text: string }[]
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name,
        description,
        inLanguage: 'fr-FR',
        mainEntityOfPage: url,
        step: steps.map((s, i) => ({
          '@type': 'HowToStep',
          position: i + 1,
          name: s.name,
          text: s.text,
        })),
      }}
    />
  )
}
