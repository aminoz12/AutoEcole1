'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    title: 'Permis Accompagné — Boîte manuelle',
    image: '/acc1.png',
    price: '1 100',
    reverse: false, // image left, text right
    features: [
      'Frais de constitution de dossier + démarches préfecture',
      'Séances de code intensif',
      'Leçons de conduite 20h',
      'Fourniture pédagogique (livret apprentissage)',
      'Hors RDV préalable 1h — 60€',
      'Hors RDV pédagogiques (1er RDV 2h 120€, 2ème RDV 2h 120€)',
    ],
  },
  {
    title: 'Permis Accompagné — Boîte automatique',
    image: '/acc2.png',
    price: '1 250',
    reverse: true, // text left, image right
    features: [
      'Frais de constitution de dossier + démarches préfecture',
      'Séances de code intensif',
      'Leçons de conduite 20h',
      'Fourniture pédagogique (livret apprentissage)',
      'Hors RDV préalable 1h — 65€',
      'Hors RDV pédagogiques (1er RDV 2h 130€, 2ème RDV 2h 130€)',
    ],
  },
]

export default function PermisAccompagneSection() {
  return (
    <section id="permis-accompagne" className="scroll-mt-28 bg-[#0B0F19] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-poppins text-3xl font-bold text-white lg:text-4xl">
            Permis <span className="text-primary">Accompagné</span>
          </h2>
          <p className="mt-4 text-gray-400">
            La conduite accompagnée (AAC) : une formation progressive dès 15 ans pour
            maximiser vos chances de réussite.
          </p>
        </div>

        <div className="mx-auto max-w-6xl space-y-16">
          {plans.map((plan) => {
            const ImageBlock = (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-3xl">
                  <Image
                    src={plan.image}
                    alt={plan.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 450px"
                    className="object-cover"
                  />
                </div>
              </motion.div>
            )

            const ContentBlock = (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-poppins text-2xl font-bold text-white lg:text-3xl">
                  {plan.title}
                </h3>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-gray-300">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={2.5} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap items-center gap-6">
                  <div className="flex items-end gap-1">
                    <span className="font-poppins text-5xl font-extrabold text-white">
                      {plan.price}
                    </span>
                    <span className="mb-2 text-2xl font-semibold text-gray-300">€</span>
                  </div>
                  <Link
                    href="/s-inscrire"
                    className="inline-block rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3 font-poppins font-semibold text-white shadow-lg shadow-pink-500/25 transition-opacity hover:opacity-90"
                  >
                    Je m&apos;inscris
                  </Link>
                </div>
              </motion.div>
            )

            return (
              <div
                key={plan.title}
                className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12"
              >
                {plan.reverse ? (
                  <>
                    {ContentBlock}
                    {ImageBlock}
                  </>
                ) : (
                  <>
                    {ImageBlock}
                    {ContentBlock}
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
