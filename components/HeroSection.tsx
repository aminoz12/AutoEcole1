'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'
import AuthModal from './auth/AuthModal'

export default function HeroSection() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const features = [
    {
      icon: '/icon1.png',
      title: "On s'adapte à votre planning",
      description: 'Des créneaux flexibles, adaptés à votre emploi du temps',
    },
    {
      icon: '/icon2.png',
      title: 'Votre permis dans les meilleures conditions',
      description: 'Des formules adaptées à votre rythme',
    },
    {
      icon: '/icon3.png',
      title: 'Suivi pédagogique',
      description: 'Un suivi clair de votre progression à chaque cours',
    },
    {
      icon: '/icon4.png',
      title: 'Paiement en 2 fois',
      description: 'Facilitez le financement de votre permis',
    },
  ]

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden pt-32 md:pt-36 bg-[#0B0F19]">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero.png"
          alt="Intérieur d'une voiture"
          fill
          className="object-cover scale-110 brightness-[0.25] translate-y-16"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/80 via-[#0B0F19]/60 to-[#0B0F19]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 flex-1 flex flex-col">
        {/* Main content - centered */}
        <div className="flex-1 flex flex-col justify-center items-center text-center">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm md:text-base mb-6"
          >
            Auto-école agréée — Nanterre
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-6 max-w-4xl uppercase"
          >
            Auto-école à Nanterre — Votre permis dès 899€
            <br />
            Prêt pour{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500">
              l'examen en Quelques Semaines
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-base md:text-lg mb-8 max-w-xl"
          >
            Paiement en 2 fois sans frais · Renseignement en ligne immédiat · Boîte Manuelle ou Automatique
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <motion.a
              href="#tarifs"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3.5 rounded-full font-semibold text-base hover:opacity-90 transition-all duration-300 shadow-lg shadow-pink-500/25 flex items-center justify-center gap-2"
            >
              Découvrir nos formules
              <ArrowRight className="h-4 w-4" />
            </motion.a>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/s-inscrire"
                className="bg-white text-gray-900 px-8 py-3.5 rounded-full font-semibold text-base hover:bg-gray-100 transition-all duration-300 shadow-lg shadow-white/25 flex items-center justify-center gap-2 inline-flex"
              >
                Je m'inscris
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Google Rating Badge */}
          <motion.a
            href="https://www.google.com/search?q=auto+ecole+des+paquerettes+nanterre"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.03 }}
            className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 shadow-lg shadow-black/20 ring-1 ring-black/5"
          >
            {/* Google "G" logo */}
            <svg className="h-5 w-5 shrink-0" viewBox="0 0 48 48" aria-hidden="true">
              <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" />
              <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" />
              <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24s.85 6.91 2.34 9.88l7.35-5.7z" />
              <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z" />
            </svg>

            <div className="flex items-center gap-2 leading-none">
              <span className="text-[#3c4043] font-bold text-base">4,9</span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-[#FBBC05] fill-[#FBBC05]" />
                ))}
              </div>
              <span className="text-[#5f6368] text-sm whitespace-nowrap">+ de 300 avis vérifiés</span>
            </div>
          </motion.a>
        </div>

        {/* Bottom Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl mx-auto pb-8 mt-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col items-start text-left px-2 transition-transform duration-300"
            >
              {/* Icon */}
              <div className="mb-4">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={44}
                  height={44}
                  className="h-11 w-11 object-contain"
                />
              </div>
              <h3 className="text-white font-semibold text-sm mb-1.5">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </section>
  )
}
