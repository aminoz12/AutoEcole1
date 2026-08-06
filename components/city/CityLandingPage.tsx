import Link from 'next/link'
import { MapPin, Clock, Car, CheckCircle2, HelpCircle, ChevronRight } from 'lucide-react'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { JsonLd, BreadcrumbJsonLd, FAQPageJsonLd } from '@/components/seo/JsonLd'
import { siteConfig, absoluteUrl } from '@/lib/seo/site-config'
import { cities, cityPath, type City } from '@/lib/content/cities-data'

// Local-SEO landing page shared by every /auto-ecole-<ville> route. All the
// city-specific substance lives in lib/content/cities-data.ts.
export default function CityLandingPage({ city }: { city: City }) {
  const path = cityPath(city)
  const otherCities = cities.filter((c) => c.slug !== city.slug)

  return (
    <main className="min-h-screen bg-[#0B0F19] pt-20">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': `${absoluteUrl(path)}#service`,
          serviceType: 'Formation au permis de conduire',
          name: `Auto-école près de ${city.name} — ${siteConfig.name}`,
          description: city.metaDescription,
          url: absoluteUrl(path),
          provider: { '@id': `${siteConfig.url}/#organization` },
          areaServed: { '@type': 'City', name: city.schemaName },
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
          { name: `Auto-école près de ${city.name}`, path },
        ]}
      />
      <FAQPageJsonLd faqs={city.faqs} />
      <Header />

      {/* Hero */}
      <section className="bg-[#0B0F19] pt-10 lg:pt-14">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 font-poppins text-sm font-semibold uppercase tracking-wider text-primary">
              {city.department}
            </p>
            <h1 className="font-poppins text-3xl font-extrabold text-white sm:text-4xl">
              Auto-école près de <span className="text-primary">{city.name}</span>
            </h1>
            <p className="mx-auto mt-4 text-gray-400">
              Permis B, permis accéléré, boîte automatique, code de la route et financement CPF —
              votre auto-école de confiance à quelques minutes de {city.name}, au 375 avenue de la
              République à Nanterre.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/s-inscrire"
                className="rounded-full bg-gradient-to-r from-purple-600 to-purple-400 px-8 py-3 text-center font-poppins font-semibold text-white shadow-lg shadow-purple-500/25 transition hover:opacity-90"
              >
                S’inscrire en ligne
              </Link>
              <Link
                href="/tarifs"
                className="rounded-full border border-white/20 bg-white/5 px-8 py-3 text-center font-poppins font-semibold text-white transition hover:border-primary hover:bg-white/10"
              >
                Voir nos tarifs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key facts */}
      <section className="py-10 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
              <Car className="mx-auto mb-2 h-6 w-6 text-primary" />
              <div className="font-poppins text-xl font-bold text-white">≈ {city.driveTime}</div>
              <div className="mt-1 text-sm text-gray-400">en voiture {city.fromCity}</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
              <MapPin className="mx-auto mb-2 h-6 w-6 text-primary" />
              <div className="font-poppins text-xl font-bold text-white">{city.distanceKm} km</div>
              <div className="mt-1 text-sm text-gray-400">de notre agence de Nanterre</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
              <Clock className="mx-auto mb-2 h-6 w-6 text-primary" />
              <div className="font-poppins text-xl font-bold text-white">10h – 20h</div>
              <div className="mt-1 text-sm text-gray-400">conduite en semaine, samedi 9h–15h</div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl space-y-6 text-gray-300">
            <h2 className="font-poppins text-2xl font-bold text-white sm:text-3xl">
              Votre permis de conduire à deux pas de {city.name}
            </h2>
            {city.intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Access */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-poppins text-2xl font-bold text-white sm:text-3xl">
              Comment venir {city.fromCity}&nbsp;?
            </h2>
            <ul className="mt-6 space-y-4">
              {city.access.map((item) => (
                <li
                  key={item.mode}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <div className="font-poppins font-semibold text-white">{item.mode}</div>
                    <p className="mt-1 text-sm text-gray-400">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="text-sm text-gray-400">Quartiers desservis&nbsp;:</span>
              {city.neighborhoods.map((n) => (
                <span
                  key={n}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-300"
                >
                  {n}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-poppins text-2xl font-bold text-white sm:text-3xl">
              Pourquoi les élèves de {city.name} nous choisissent
            </h2>
            <ul className="mt-6 space-y-4">
              {city.whyUs.map((reason) => (
                <li key={reason.slice(0, 40)} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-gray-400">
              Toutes nos formations sont détaillées sur la page{' '}
              <Link href="/tarifs" className="text-primary underline-offset-4 hover:underline">
                tarifs et formules
              </Link>{' '}
              — permis B en boîte manuelle ou automatique, permis accéléré, conduite accompagnée et
              code de la route. Une question&nbsp;? Passez par la page{' '}
              <Link href="/contact" className="text-primary underline-offset-4 hover:underline">
                contact
              </Link>{' '}
              ou appelez-nous au{' '}
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="text-primary underline-offset-4 hover:underline"
              >
                {siteConfig.phone}
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-poppins text-2xl font-bold text-white sm:text-3xl">
              Questions fréquentes — {city.name}
            </h2>
            <div className="mt-6 space-y-4">
              {city.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="flex items-start gap-3 font-poppins font-semibold text-white">
                    <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    {faq.question}
                  </h3>
                  <p className="mt-3 pl-8 text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other cities */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-poppins text-xl font-bold text-white">
              Nous accueillons aussi les élèves de…
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {otherCities.map((c) => (
                <Link
                  key={c.slug}
                  href={cityPath(c)}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition hover:border-primary hover:text-white"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
            <h2 className="font-poppins text-2xl font-bold text-white">
              Prêt à passer votre permis&nbsp;?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-gray-400">
              Rejoignez les élèves de {city.name} qui ont obtenu leur permis avec nous — inscription
              en ligne en quelques minutes.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/s-inscrire"
                className="rounded-full bg-gradient-to-r from-purple-600 to-purple-400 px-8 py-3 text-center font-poppins font-semibold text-white shadow-lg shadow-purple-500/25 transition hover:opacity-90"
              >
                S’inscrire en ligne
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/20 bg-white/5 px-8 py-3 text-center font-poppins font-semibold text-white transition hover:border-primary hover:bg-white/10"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
