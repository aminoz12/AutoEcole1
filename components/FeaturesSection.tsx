'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Car, FileText, Shield, Home, ArrowRight } from 'lucide-react'

export default function FeaturesSection() {
  const services = [
    {
      icon: FileText,
      title: 'CODE DE LA ROUTE',
      description: 'Questions conformes à l\'examen officiel 2025.',
      price: 'DÈS 14,99€',
      button: 'ACCÈS ILLIMITÉ',
      iconColor: 'text-red-500',
      bgColor: 'bg-red-50',
    },
    {
      icon: Car,
      title: 'PERMIS DE CONDUIRE',
      description: '30% moins cher qu\'en auto-école traditionnelle.',
      price: 'DÈS 459,99€',
      originalPrice: '559,99€ 4X SANS FRAIS',
      button: 'DÉCOUVRIR',
      iconColor: 'text-pink-500',
      bgColor: 'bg-pink-50',
      featured: true,
    },
    {
      icon: Shield,
      title: 'ASSURANCE AUTO',
      description: 'Notée 4,7/5 avec déjà +100000 assurés.',
      saving: 'ÉCONOMIE MOYENNE DE 430€',
      button: 'ET + POUR LES ANCIENS ÉLÈVES',
      iconColor: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Home,
      title: 'ASSURANCE HABITATION',
      description: 'Une couverture solide pensée pour chaque imprévu.',
      price: 'DÈS 2,17€',
      button: '100% EN LIGNE',
      iconColor: 'text-red-500',
      bgColor: 'bg-red-50',
    },
  ]

  return (
    <section id="formations" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Le Permis en Toute Confiance.
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Votre <span className="text-primary">Succès</span>, Notre <span className="text-primary">Mission</span>.
          </h3>
        </motion.div>

        {/* Yellow Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-yellow-400 text-black py-2 sm:py-3 px-4 sm:px-6 rounded-lg mb-6 sm:mb-8 text-center font-bold text-sm sm:text-lg inline-block"
        >
          -100€ AVEC LE CODE → AUTO25
        </motion.div>

        {/* Services Grid - 4 column layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-start">
          {/* Service Cards */}
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8 text-center group cursor-pointer relative shadow-sm hover:shadow-lg transition-all duration-300 h-80 sm:h-96"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-12 h-12 sm:w-16 sm:h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:shadow-lg transition-all duration-300`}
              >
                <service.icon className={`h-6 w-6 sm:h-8 sm:w-8 ${service.iconColor}`} />
              </motion.div>

              {/* Title */}
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Price or Saving */}
              {service.price && (
                <div className="mb-4">
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                    {service.price}
                  </div>
                  {service.originalPrice && (
                    <div className="text-xs sm:text-sm text-gray-500 line-through">
                      {service.originalPrice}
                    </div>
                  )}
                </div>
              )}

              {service.saving && (
                <div className="mb-4">
                  <div className="text-xs sm:text-sm font-semibold text-green-600">
                    {service.saving}
                  </div>
                </div>
              )}

            </motion.div>
          ))}
        </div>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            {/* Stat 1 - Auto-école agréée */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gray-400"></div>
          <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Agréée par l&apos;État
          </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Certification officielle garantissant la qualité de notre formation
              </p>
            </motion.div>

            {/* Stat 2 - 50.000 élèves */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gray-400"></div>
          <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            +50.000
          </div>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            d&apos;élèves accompagnés avec succès
          </p>
            </motion.div>

            {/* Stat 3 - 10 ans d'expertise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gray-400"></div>
          <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            +10 ans
          </div>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            d&apos;expertise en sécurité routière
          </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Section Separator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500 font-medium">
                Et bien plus encore.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
