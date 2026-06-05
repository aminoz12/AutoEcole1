'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const intro = {
  lead: 'Le PackWeb vous permet de vous préparer à l’examen du code de la route à distance.',
  rest:
    ' Il regroupe l’ensemble des savoirs à maîtriser pour réussir le code de la route. Chaque sujet est validé par un exercice permettant la validation des acquis au fil de l’apprentissage.',
  middle:
    'Vous y retrouvez les contenus d’un livre de code, tests d’examen, cours théoriques de conduite accompagnée, cours conduite économique ou cours d’examen pratique. Les cours ont été étudiés pour être utilisés simplement et librement, avec une simple connexion à Internet, à partir du site Internet de votre école de conduite.',
}

const illimite = {
  title: 'PACK WEB –\nACCÈS ILLIMITÉ',
  perks: [
    'Révisez le code de la route où vous voulez et quand vous voulez',
    'Accès illimité sans date limite',
    'Plus de 2000 questions',
    'Exercices liés au code de la route',
  ],
  price: '29',
}

const unMois = {
  title: 'PACK WEB –\nACCÈS 1 MOIS',
  perks: [
    'Révisez le code de la route où vous voulez et quand vous voulez',
    'Accès illimité pendant 1 mois',
    'Plus de 2000 questions',
    'Exercices liés au code de la route',
  ],
  price: '10',
}

function PriceQuadrant({
  plan,
  variant,
}: {
  plan: typeof illimite
  variant: 'primary' | 'secondary'
}) {
  const bg =
    variant === 'primary'
      ? 'bg-gradient-to-br from-primary to-[#8f0f78]'
      : 'bg-gradient-to-br from-secondary to-[#03365a]'
  const priceColor = variant === 'primary' ? 'text-primary' : 'text-secondary'

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`group relative flex min-h-[360px] flex-col items-center justify-center overflow-hidden px-8 py-14 text-white lg:min-h-[480px] ${bg}`}
    >
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-black/10 blur-2xl" />

      <div className="relative z-10 flex flex-col items-center">
        <h2 className="whitespace-pre-line text-center font-poppins text-xl font-bold uppercase tracking-wide lg:text-2xl">
          {plan.title}
        </h2>
        <span className="mt-4 h-1 w-12 rounded-full bg-white/50" />

        <ul className="mt-8 space-y-3 text-sm lg:text-base">
          {plan.perks.map((perk) => (
            <li key={perk} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span className="leading-snug">{perk}</span>
            </li>
          ))}
        </ul>

        <a
          href="/s-inscrire"
          className="mt-10 flex h-28 w-28 flex-col items-center justify-center rounded-full bg-white shadow-xl ring-4 ring-white/30 transition-transform duration-300 hover:scale-105 lg:h-32 lg:w-32"
        >
          <span className={`font-poppins text-3xl font-bold leading-none lg:text-4xl ${priceColor}`}>
            {plan.price}
            <span className="align-top text-xl">€</span>
          </span>
          <span className={`mt-1 text-[10px] font-semibold uppercase tracking-wide ${priceColor} opacity-70`}>
            S&apos;inscrire
          </span>
        </a>
      </div>
    </motion.div>
  )
}

function IllustrationQuadrant({
  src,
  alt,
  glow,
  fill = false,
}: {
  src: string
  alt: string
  glow: string
  fill?: boolean
}) {
  if (fill) {
    return (
      <div className="relative min-h-[360px] overflow-hidden lg:min-h-[480px]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    )
  }

  return (
    <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-gradient-to-br from-white to-[#f5f6f8] p-10 lg:min-h-[480px]">
      <div className={`pointer-events-none absolute h-64 w-64 rounded-full blur-3xl ${glow}`} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <Image
          src={src}
          alt={alt}
          width={360}
          height={360}
          className="h-auto w-auto max-h-72 object-contain drop-shadow-xl"
        />
      </motion.div>
    </div>
  )
}

export default function PackWebContent() {
  return (
    <>
      {/* Intro */}
      <section className="relative overflow-hidden bg-[#0B0F19] pb-14 pt-10 lg:pb-20 lg:pt-12">
        {/* Decorative accents */}
        <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative mx-auto max-w-3xl text-center"
          >
            <span className="inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 font-poppins text-xs font-semibold uppercase tracking-wide text-primary">
              Le code de la route en ligne
            </span>

            <h1 className="mt-5 font-poppins text-4xl font-bold leading-tight text-white lg:text-5xl">
              Pack Web, <span className="text-primary">c&apos;est quoi&nbsp;?</span>
            </h1>
            <span className="mx-auto mt-5 block h-1.5 w-24 rounded-full bg-gradient-to-r from-primary to-secondary" />

            {/* Lead */}
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-300">
              <span className="font-semibold text-white">{intro.lead}</span>
              <span className="text-gray-400">{intro.rest}</span>
            </p>

            {/* Body */}
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-400">
              {intro.middle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2x2 quadrant grid */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        {/* Top-left: photo (next to Accès illimité) */}
        <IllustrationQuadrant
          src="/webpack1.jpeg"
          alt="Réviser le code de la route depuis son smartphone"
          glow="bg-primary/10"
          fill
        />

        {/* Top-right: Accès illimité */}
        <PriceQuadrant plan={illimite} variant="primary" />

        {/* Bottom-left: Accès 1 mois */}
        <PriceQuadrant plan={unMois} variant="secondary" />

        {/* Bottom-right: photo (next to Accès 1 mois) */}
        <IllustrationQuadrant
          src="/webpack2.jpeg"
          alt="Panneaux du code de la route"
          glow="bg-secondary/10"
          fill
        />
      </section>
    </>
  )
}
