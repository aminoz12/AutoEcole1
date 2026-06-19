import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'

import Header from '@/components/Header'
import PricingSection from '@/components/PricingSection'
import PermisAccompagneSection from '@/components/PermisAccompagneSection'
import ALaCarteSection from '@/components/ALaCarteSection'
import Footer from '@/components/Footer'
import { createPageMetadata } from '@/lib/seo/metadata'
import { PricingJsonLd, BreadcrumbJsonLd, FAQPageJsonLd } from '@/components/seo/JsonLd'
import { webPlans } from '@/lib/content/pricing-data'
import { pricingFaqs } from '@/lib/content/faq-data'

export const metadata: Metadata = createPageMetadata({
  title: 'Nos Tarifs — Permis & Code',
  description:
    'Découvrez tous les tarifs Auto Ecole Des Paquerettes : formules permis B (boîte manuelle et automatique), packs avec code et Pack Web pour réviser le code en ligne.',
  path: '/tarifs',
  keywords: ['tarifs auto-école', 'prix permis de conduire', 'tarif code de la route Nanterre'],
})

export default function TarifsPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] pt-20">
      <PricingJsonLd />
      <BreadcrumbJsonLd
        items={[
          { name: 'Accueil', path: '/' },
          { name: 'Tarifs', path: '/tarifs' },
        ]}
      />
      <FAQPageJsonLd faqs={pricingFaqs} />
      <Header />

      {/* SEO intro + page H1 */}
      <section className="bg-[#0B0F19] pt-10 lg:pt-14">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-poppins text-3xl font-extrabold text-white sm:text-4xl">
              Tarifs auto-école à <span className="text-primary">Nanterre</span>
            </h1>
            <p className="mx-auto mt-4 text-gray-400">
              Découvrez tous nos tarifs de permis de conduire à Nanterre&nbsp;: formules boîte
              manuelle et automatique, avec ou sans code, conduite accompagnée et prestations
              à l&apos;unité. Des prix transparents, le paiement en plusieurs fois sans frais et
              un accompagnement jusqu&apos;à l&apos;examen — à partir de 899&nbsp;€.
            </p>
          </div>
        </div>
      </section>

      {/* Price comparison table — concise, scannable, table-snippet eligible (AEO) */}
      <section className="bg-[#0B0F19] py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center font-poppins text-2xl font-bold text-white sm:text-3xl">
              Tarifs en un coup d&apos;œil
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm text-gray-300">
                <caption className="sr-only">
                  Comparatif des formules et tarifs du permis de conduire à Nanterre
                </caption>
                <thead>
                  <tr className="bg-white/5 text-white">
                    <th scope="col" className="px-4 py-3 font-semibold">Formule</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Transmission</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Code inclus</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Conduite</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Prix à partir de</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Permis B', 'Boîte manuelle', 'Non', '20 h', '899 €'],
                    ['Permis BEA', 'Boîte automatique', 'Non', '13 h', '799 €'],
                    ['Formule + Code', 'Boîte manuelle', 'Oui (1 an)', '20 h', '899 €'],
                    ['Formule + Code', 'Boîte automatique', 'Oui (1 an)', '13 h', '799 €'],
                    ['Pack Web — 1 mois', '—', 'Code en ligne', '—', '10 €'],
                    ['Pack Web — illimité', '—', 'Code en ligne', '—', '29 €'],
                    ['Leçon à l’unité', '—', '—', '1 h', '60 €'],
                  ].map((row, i) => (
                    <tr key={i} className="border-t border-white/10">
                      <th scope="row" className="px-4 py-3 font-semibold text-white">{row[0]}</th>
                      <td className="px-4 py-3">{row[1]}</td>
                      <td className="px-4 py-3">{row[2]}</td>
                      <td className="px-4 py-3">{row[3]}</td>
                      <td className="px-4 py-3 font-semibold text-primary">{row[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-center text-xs text-gray-500">
              Tous nos permis sont payables en 2 fois sans frais. Détail des formules ci-dessous.
            </p>
          </div>
        </div>
      </section>

      {/* Driving packs — all categories stacked, no tabs */}
      <PricingSection showFinalStretch={false} showAllCategories />

      {/* Permis Accompagné (AAC) */}
      <PermisAccompagneSection />

      {/* À la carte price list */}
      <ALaCarteSection />

      {/* Pack Web prices */}
      <section id="pack-web" className="scroll-mt-28 bg-[#0B0F19] py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-poppins text-3xl font-bold text-white lg:text-4xl">
              Pack Web — <span className="text-primary">Code en ligne</span>
            </h2>
            <p className="mt-4 text-gray-400">
              Révisez le code de la route en ligne sur smartphone, tablette et ordinateur.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            {webPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-3xl border p-8 ${
                  plan.variant === 'primary'
                    ? 'border-primary/40 bg-gradient-to-b from-primary/15 to-white/5'
                    : 'border-secondary/40 bg-gradient-to-b from-secondary/15 to-white/5'
                }`}
              >
                <h3 className="font-poppins text-xl font-semibold text-white">{plan.name}</h3>

                <div className="mt-4 flex items-end gap-1">
                  <span className="font-poppins text-5xl font-bold text-white">{plan.price}</span>
                  <span className="mb-2 text-2xl font-semibold text-gray-300">€</span>
                </div>

                <ul className="mt-6 space-y-3">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3 text-gray-200">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/s-inscrire"
                  className={`mt-8 block rounded-full px-6 py-3 text-center font-poppins font-semibold transition-all duration-300 ${
                    plan.variant === 'primary'
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/25 hover:opacity-90'
                      : 'border border-white/20 bg-white/5 text-white hover:border-primary hover:bg-white/10'
                  }`}
                >
                  Choisir cette offre
                </Link>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-gray-500">
            Besoin d&apos;en savoir plus&nbsp;?{' '}
            <Link href="/prestations-a-l-unite" className="font-semibold text-primary hover:underline">
              Découvrir le Pack Web
            </Link>
          </p>
        </div>
      </section>

      {/* Pricing FAQ — native <details> so every answer stays in the HTML
          (featured-snippet / FAQ rich-result eligible) without client JS. */}
      <section id="faq-tarifs" className="bg-[#0B0F19] py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-poppins text-3xl font-bold text-white lg:text-4xl">
              Questions fréquentes sur nos <span className="text-primary">tarifs</span>
            </h2>

            <div className="mt-10 space-y-4">
              {pricingFaqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-6 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-left font-poppins text-base font-semibold text-white">
                    <h3 className="text-base font-semibold">{faq.question}</h3>
                    <span className="shrink-0 text-primary transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 leading-relaxed text-gray-300">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
