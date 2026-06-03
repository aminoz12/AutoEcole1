'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Star, Clock, FastForward, BarChart3, CreditCard } from 'lucide-react'

export default function HeroSection() {
  const features = [
    {
      icon: Clock,
      title: "Jusqu'à 4 heures de formation par jour",
      description: 'Planifiez vos leçons selon vos disponibilités',
    },
    {
      icon: FastForward,
      title: 'Terminez votre formation en 10 jours',
      description: 'Obtenez votre permis rapidement',
    },
    {
      icon: BarChart3,
      title: 'Suivi de formation en temps réel',
      description: "Suivez votre progression via l'app mobile",
    },
    {
      icon: CreditCard,
      title: 'Paiement en 4 ou 10 fois',
      description: 'Financez votre permis en plusieurs fois',
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
            Votre Permis Accéléré En 10 Jours
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight mb-6 max-w-4xl uppercase"
          >
            Ton permis dès 110€ / par mois
            <br />
            Prêt pour{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500">
              l'examen en 14 jours.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-base md:text-lg mb-8 max-w-xl"
          >
            Paiement 10X sans frais, Inscription immédiate.
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
              Voir Les Packs
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </motion.div>

          {/* Rating */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-2"
          >
            <span className="text-white font-bold text-lg">4.9</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span className="text-gray-400 text-sm">+ de 1000 avis</span>
          </motion.div>
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
              className="flex flex-col items-center text-center px-2"
            >
              <feature.icon className="h-5 w-5 text-gray-300 mb-3" />
              <h3 className="text-white text-sm font-semibold mb-1.5">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
