import Link from 'next/link'
import Image from 'next/image'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CallbackForm from '@/components/CallbackForm'
import { JsonLd, BreadcrumbJsonLd, FAQPageJsonLd } from '@/components/seo/JsonLd'
import { siteConfig, absoluteUrl } from '@/lib/seo/site-config'
import {
  accelerePath,
  accelereSharedFaqs,
  type AccelereCity,
} from '@/lib/content/permis-accelere-data'
import {
  AccelereOffersGrid,
  AccelereSteps,
  AccelereFaqList,
  AccelereCta,
  AccelereCityLinks,
} from './AccelereSections'

// Gabarit des pages /permis-accelere/<ville>. Le contenu propre à chaque
// ville (H1, intro, FAQ locale) vit dans lib/content/permis-accelere-data.ts.
export default function AccelereCityPage({ city }: { city: AccelereCity }) {
  const path = accelerePath(city)
  const faqs = [city.faq, ...accelereSharedFaqs]

  return (
    <main className="min-h-screen bg-[#0B0F19] pt-20">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': `${absoluteUrl(path)}#service`,
          serviceType: 'Formation accélérée au permis de conduire',
          name: `Permis accéléré près de ${city.name} — ${siteConfig.name}`,
          description: city.metaDescription,
          url: absoluteUrl(path),
          provider: { '@id': `${siteConfig.url}/#organization` },
          areaServed: { '@type': 'City', name: city.name },
          availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl: absoluteUrl('/s-inscrire'),
            servicePhone: `+33${siteConfig.phoneTel.replace(/^0/, '')}`,
          },
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Accueil', path: '/' },
          { name: 'Permis accéléré', path: '/permis-accelere' },
          { name: city.name, path },
        ]}
      />
      <FAQPageJsonLd faqs={faqs} />
      <Header />

      {/* Hero */}
      <section className="bg-[#0B0F19] pt-10 lg:pt-14">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 font-poppins text-sm font-semibold uppercase tracking-wider text-primary">
              Permis accéléré — {city.name}
            </p>
            <h1 className="font-poppins text-3xl font-extrabold text-white sm:text-4xl">
              {city.h1}
            </h1>
            <p className="mx-auto mt-4 text-gray-400">
              Stage intensif code + conduite, boîte manuelle ou automatique, date d’examen
              prioritaire — à l’Auto École Des Pâquerettes, 375 avenue de la République à Nanterre.
            </p>
            <div className="mt-6">
              <AccelereCta />
            </div>
          </div>
        </div>
      </section>

      {/* Visuel */}
      <section className="pt-10">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-xl overflow-hidden rounded-2xl border border-white/10">
            <Image
              src="/permisaccimages/PERMISACC.jpeg"
              alt={`Permis accéléré près de ${city.name} — Auto École Des Pâquerettes, Nanterre`}
              width={1240}
              height={1240}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Intro locale */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-6 text-gray-300">
            {city.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Forfaits */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-center font-poppins text-2xl font-bold text-white sm:text-3xl">
              Nos formules de permis accéléré
            </h2>
            <AccelereOffersGrid />
          </div>
        </div>
      </section>

      {/* Déroulé */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-8 text-center font-poppins text-2xl font-bold text-white sm:text-3xl">
              Comment se déroule le stage&nbsp;?
            </h2>
            <AccelereSteps />
          </div>
        </div>
      </section>

      {/* Capture de lead */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <CallbackForm
              source={`accelere:${city.slug}`}
              title={`Un permis accéléré depuis ${city.name} ? On vous rappelle`}
              subtitle="Laissez votre numéro — un conseiller vous rappelle sous 24 h ouvrées pour construire votre planning intensif."
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 font-poppins text-2xl font-bold text-white sm:text-3xl">
              Questions fréquentes — permis accéléré {city.name}
            </h2>
            <AccelereFaqList faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Maillage interne */}
      <section className="py-10 pb-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-6">
            <AccelereCityLinks currentSlug={city.slug} />
            {city.cityPageSlug && (
              <p className="text-sm text-gray-400">
                Toutes nos formations près de chez vous&nbsp;:{' '}
                <Link
                  href={`/auto-ecole-${city.cityPageSlug}`}
                  className="text-primary underline-offset-4 hover:underline"
                >
                  auto-école près de {city.name}
                </Link>
                .
              </p>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
