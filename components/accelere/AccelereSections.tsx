import Link from 'next/link'
import { ClipboardCheck, Gauge, CalendarCheck, HelpCircle, Phone } from 'lucide-react'

import { PackCard } from '@/components/PricingSection'
import { siteConfig } from '@/lib/seo/site-config'
import {
  accelereOffers,
  accelereCities,
  accelerePath,
} from '@/lib/content/permis-accelere-data'

// Blocs partagés entre /permis-accelere et ses déclinaisons par ville.

export function AccelereOffersGrid() {
  return (
    <>
      <p className="md:hidden text-center text-xs text-gray-500 mb-3">
        Faites glisser pour comparer les formules →
      </p>
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-2 xl:grid-cols-4 md:gap-5 md:overflow-visible">
        {accelereOffers.map(({ pack, catKey, transmission }) => (
          <div
            key={`${catKey}-${pack.title}`}
            className="w-[82%] shrink-0 snap-center sm:w-[55%] md:w-auto md:shrink"
          >
            <div className="mb-2 text-center">
              <span className="inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-300">
                {transmission}
              </span>
            </div>
            <PackCard pack={pack} catKey={catKey} />
          </div>
        ))}
      </div>
    </>
  )
}

const steps = [
  {
    icon: ClipboardCheck,
    title: '1. Évaluation et planning',
    desc: 'Pré-inscription en 30 secondes, évaluation de départ sous quelques jours, puis un planning intensif construit avec vous — dates connues dès le début.',
  },
  {
    icon: Gauge,
    title: '2. Code intensif + conduite rapprochée',
    desc: 'Séances de code intensif jusqu’à l’examen théorique, et plusieurs séances de conduite par semaine avec le même moniteur, sur les parcours réels du secteur.',
  },
  {
    icon: CalendarCheck,
    title: '3. Examen blanc, puis le jour J',
    desc: 'Un examen blanc en conditions réelles valide votre niveau, et nous réservons votre date d’examen dès que vous êtes prêt(e) — pas d’attente inutile.',
  },
]

export function AccelereSteps() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {steps.map((step) => {
        const Icon = step.icon
        return (
          <div key={step.title} className="rounded-2xl border border-white/10 bg-[#151b2e]/80 p-7">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
              <Icon className="h-6 w-6 text-purple-400" />
            </div>
            <h3 className="mb-2 font-poppins text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">{step.desc}</p>
          </div>
        )
      })}
    </div>
  )
}

export function AccelereFaqList({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <div key={faq.question} className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="flex items-start gap-3 font-poppins font-semibold text-white">
            <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            {faq.question}
          </h3>
          <p className="mt-3 pl-8 text-gray-400">{faq.answer}</p>
        </div>
      ))}
    </div>
  )
}

export function AccelereCta() {
  return (
    <div className="flex flex-col justify-center gap-4 sm:flex-row">
      <Link
        href="/s-inscrire"
        className="rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3.5 text-center font-poppins font-semibold text-white shadow-lg shadow-pink-500/25 transition hover:opacity-90"
      >
        Je commence mon permis accéléré
      </Link>
      <a
        href={`tel:${siteConfig.phoneTel}`}
        className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-center font-poppins font-semibold text-white transition hover:bg-white/10"
      >
        <Phone className="h-4 w-4" />
        {siteConfig.phone}
      </a>
    </div>
  )
}

/** Maillage interne des pages accéléré (pas de lien dans le footer : le
    crawl passe par ici et par le sitemap). */
export function AccelereCityLinks({ currentSlug }: { currentSlug?: string }) {
  const others = accelereCities.filter((c) => c.slug !== currentSlug)
  return (
    <div>
      <h2 className="font-poppins text-xl font-bold text-white">
        Permis accéléré autour de chez vous
      </h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {currentSlug && (
          <Link
            href="/permis-accelere"
            className="rounded-full border border-purple-500/40 bg-purple-500/10 px-4 py-2 text-sm text-purple-200 transition hover:border-primary hover:text-white"
          >
            Permis accéléré à Nanterre
          </Link>
        )}
        {others.map((c) => (
          <Link
            key={c.slug}
            href={accelerePath(c)}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition hover:border-primary hover:text-white"
          >
            {c.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
