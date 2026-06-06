'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

// 7 student photos: /public/review1.jpeg … /public/review7.jpeg
const reviews = Array.from({ length: 7 }, (_, i) => `/review${i + 1}.jpeg`)

// Responsive visibility: keep the inner cards always, reveal outer pairs on larger screens
function visibilityClass(i: number, count: number) {
  const fromEdge = Math.min(i, count - 1 - i)
  if (fromEdge === 0) return 'hidden lg:block'
  if (fromEdge === 1) return 'hidden sm:block'
  return ''
}

const highlights = [
  {
    title: 'Une équipe à l’écoute',
    desc: 'Des moniteurs patients et pédagogues qui s’adaptent à votre rythme jusqu’à la réussite.',
  },
  {
    title: 'Des résultats concrets',
    desc: 'Code et permis obtenus rapidement grâce à un suivi personnalisé et des formules claires.',
  },
  {
    title: 'Recommandée par nos élèves',
    desc: 'Des centaines d’avis positifs : nos élèves nous recommandent à leur entourage.',
  },
]

export default function StudentReviewsSection() {
  const center = (reviews.length - 1) / 2

  return (
    <section className="relative overflow-hidden bg-[#0B0F19] py-12 md:py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-poppins text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            Ils nous ont fait confiance,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500">
              ils ont réussi&nbsp;!
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-gray-400">
            Des centaines d’élèves formés et accompagnés jusqu’au jour J —
            voici quelques-uns de leurs visages.
          </p>
        </motion.div>

        {/* Fanned portraits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-14 flex items-center justify-center gap-4 sm:gap-6 lg:gap-8"
        >
          {reviews.map((src, i) => {
            const offset = i - center
            // Gentle vertical arc only — uniform size keeps the spacing even
            const translateY = Math.pow(Math.abs(offset), 2) * 7
            return (
              <div
                key={src}
                className={`relative aspect-[9/16] w-24 shrink-0 overflow-hidden rounded-2xl shadow-xl ring-1 ring-white/10 sm:w-36 lg:w-44 ${visibilityClass(
                  i,
                  reviews.length
                )}`}
                style={{
                  transform: `translateY(${translateY}px)`,
                }}
              >
                <Image
                  src={src}
                  alt={`Avis élève ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 33vw, 200px"
                  className="object-cover"
                />
              </div>
            )
          })}
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-0"
        >
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className={`px-6 text-center ${i > 0 ? 'md:border-l md:border-white/10' : ''}`}
            >
              <h3 className="font-poppins text-lg font-semibold text-white">{item.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-14 flex justify-center"
        >
          <motion.a
            href="/s-inscrire"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 py-3 pl-7 pr-3 font-poppins font-semibold text-white shadow-lg shadow-pink-500/25 transition-opacity hover:opacity-90"
          >
            Rejoignez-Nous
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
              <ArrowRight className="h-4 w-4" />
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
