import type { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'

import Header from '@/components/Header'
import PricingSection from '@/components/PricingSection'
import PermisAccompagneSection from '@/components/PermisAccompagneSection'
import ALaCarteSection from '@/components/ALaCarteSection'
import Footer from '@/components/Footer'
import { createPageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'Nos Tarifs — Permis & Code',
  description:
    'Découvrez tous les tarifs Auto Ecole Des Paquerettes : formules permis B (boîte manuelle et automatique), packs avec code et Pack Web pour réviser le code en ligne.',
  path: '/tarifs',
  keywords: ['tarifs auto-école', 'prix permis de conduire', 'tarif code de la route Nanterre'],
})

const webPlans = [
  {
    name: 'Pack Web — Accès illimité',
    price: '29',
    variant: 'primary' as const,
    perks: [
      'Révisez le code où vous voulez, quand vous voulez',
      'Accès illimité sans date limite',
      'Plus de 2000 questions',
      'Exercices liés au code de la route',
    ],
  },
  {
    name: 'Pack Web — Accès 1 mois',
    price: '10',
    variant: 'secondary' as const,
    perks: [
      'Révisez le code où vous voulez, quand vous voulez',
      'Accès illimité pendant 1 mois',
      'Plus de 2000 questions',
      'Exercices liés au code de la route',
    ],
  },
]

export default function TarifsPage() {
  return (
    <main className="min-h-screen bg-[#0B0F19] pt-20">
      <Header />

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

      <Footer />
    </main>
  )
}
