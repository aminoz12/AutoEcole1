import { siteConfig, absoluteUrl } from '@/lib/seo/site-config'
import { packCategories, packsData, webPlans } from '@/lib/content/pricing-data'
import { cities } from '@/lib/content/cities-data'

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
  const services = [
    {
      name: 'Permis B boîte manuelle',
      description: 'Formation au permis B en boîte manuelle à Nanterre.',
      url: absoluteUrl('/tarifs'),
    },
    {
      name: 'Permis B boîte automatique',
      description: 'Formation au permis B sur véhicule à boîte automatique (BEA).',
      url: absoluteUrl('/tarifs'),
    },
    {
      name: 'Permis accéléré',
      description: 'Formation intensive au permis B selon les disponibilités.',
      url: absoluteUrl('/tarifs'),
    },
    {
      name: 'Conduite accompagnée',
      description: 'Apprentissage anticipé de la conduite (AAC) à partir de 15 ans.',
      url: absoluteUrl('/tarifs'),
    },
    {
      name: 'Code de la route en ligne',
      description: 'Préparation au code de la route en ligne.',
      url: absoluteUrl('/prestations-a-l-unite'),
    },
  ]

  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'DrivingSchool',
        '@id': `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        legalName: siteConfig.business.legalName,
        description: siteConfig.description,
        url: siteConfig.url,
        email: siteConfig.email,
        telephone: `+33${siteConfig.phoneTel.replace(/^0/, '')}`,
        image: absoluteUrl('/logoautoecol.png'),
        logo: absoluteUrl('/logoautoecol.png'),
        hasMap: siteConfig.social.google,
        foundingDate: siteConfig.business.foundingDate,
        identifier: [
          {
            '@type': 'PropertyValue',
            propertyID: 'SIREN',
            value: siteConfig.business.siren,
          },
          {
            '@type': 'PropertyValue',
            propertyID: 'SIRET',
            value: siteConfig.business.siret,
          },
          {
            '@type': 'PropertyValue',
            propertyID: 'RCS',
            value: siteConfig.business.rcs,
          },
        ],
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
        // Nanterre + every city that has a local landing page. Puteaux,
        // Suresnes et Houilles ont désormais la leur : les lister à la main en
        // plus créerait des doublons dans le graphe.
        areaServed: ['Nanterre', ...cities.map((c) => c.schemaName)].map((name) => ({
          '@type': 'City',
          name,
        })),
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
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `Formations proposées par ${siteConfig.name}`,
          itemListElement: services.map((service) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service.name,
              description: service.description,
              serviceType: service.name,
              url: service.url,
            },
          })),
        },
        // Note: Google doesn't allow self-serving aggregateRating on LocalBusiness/
        // Organization types — it's ineligible for star snippets and triggers a
        // "Invalid object type for field <parent_node>" error in the Review Snippets
        // report. The "4.9 · +de 300 avis vérifiés" claim stays in the homepage hero UI.
        // sameAs = toutes les URLs décrivant la même entité : réseaux sociaux,
        // fiche Google et annuaires tiers. Ce sont ces fiches que Google et les
        // moteurs de réponse recoupent pour recommander un commerce local ; les
        // déclarer ici rend le rattachement explicite au lieu d'être deviné.
        sameAs: [...Object.values(siteConfig.social), ...siteConfig.directories],
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

// Driving lessons are services, not physical retail products. Keep their exact prices
// in schema without sending Google Merchant listing signals such as shipping or returns.
export function PricingJsonLd() {
  const provider = { '@id': `${siteConfig.url}/#organization` }

  const courseServices = packCategories.flatMap((category) =>
    packsData[category.key].map((pack) => ({
      '@type': 'Service',
      name: `${pack.title} — ${category.label}`,
      description: pack.features.map((f) => f.trim()).join(' · '),
      serviceType: 'Formation au permis de conduire',
      provider,
      areaServed: {
        '@type': 'City',
        name: siteConfig.address.city,
      },
      offers: {
        '@type': 'Offer',
        price: pack.total,
        priceCurrency: 'EUR',
        url: absoluteUrl('/tarifs'),
      },
    })),
  )

  const webServices = webPlans.map((plan) => ({
    '@type': 'Service',
    name: plan.name,
    description: plan.perks.map((p) => p.trim()).join(' · '),
    serviceType: 'Préparation au code de la route en ligne',
    provider,
    areaServed: {
      '@type': 'City',
      name: siteConfig.address.city,
    },
    offers: {
      '@type': 'Offer',
      price: Number(plan.price),
      priceCurrency: 'EUR',
      url: absoluteUrl('/tarifs'),
    },
  }))

  const services = [...courseServices, ...webServices]

  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: `Tarifs et formules — ${siteConfig.name}`,
        itemListElement: services.map((service, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: service,
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
  reviewedAt,
  reviewer,
  image,
}: {
  title: string
  description: string
  slug: string
  publishedAt: string
  reviewedAt?: string
  reviewer?: { name: string; role: string; credential: string }
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
        dateModified: reviewedAt || publishedAt,
        author: {
          '@type': 'Organization',
          '@id': `${siteConfig.url}/#organization`,
          name: siteConfig.name,
          url: siteConfig.url,
        },
        publisher: { '@id': `${siteConfig.url}/#organization` },
        ...(reviewedAt && reviewer && {
          reviewedBy: {
            '@type': 'Organization',
            name: reviewer.name,
            description: `${reviewer.role} — ${reviewer.credential}`,
            url: siteConfig.url,
          },
        }),
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
