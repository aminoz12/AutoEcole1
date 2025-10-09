'use client'

import { motion } from 'framer-motion'
import { Check, Flame, Calendar, Smartphone } from 'lucide-react'

export default function CodeTrainingSection() {
  const features = [
    '+1500 questions conformes à l&apos;examen 2025.',
    '135 fiches de cours claires et faciles à retenir.',
    'Examens blancs avec corrections détaillées.',
    'Suivi de votre progression grâce à un tableau de bord dédié',
  ]

  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Labels */}
            <div className="flex flex-wrap gap-3">
              <div className="bg-green-500 text-white px-4 py-2 text-sm font-bold uppercase tracking-wide">
                APP N°1 DE RÉVISION DU CODE
              </div>
              <div className="bg-amber-700 text-white px-4 py-2 text-sm font-bold uppercase tracking-wide">
                +1M DE TÉLÉCHARGEMENTS
              </div>
            </div>

            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              La formation code qui vous mène droit au <span className="text-primary">40/40</span>.
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Questions conformes à l&apos;examen officiel, fiches de cours, sessions en live et examens blancs : tout est réuni pour vous faire progresser en toute confiance.
            </p>

            {/* Features List */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm sm:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-gray-900 bg-white text-gray-900 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-gray-900 hover:text-white transition-all duration-300 w-full sm:w-auto"
            >
              J&apos;obtiens mon code de la route
            </motion.button>
          </motion.div>

          {/* Right Column - Mobile App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-64 sm:w-72 h-[400px] sm:h-[500px] bg-gray-100 rounded-3xl p-4 sm:p-6 shadow-2xl">
              {/* App Header */}
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Code</h3>
                
                {/* Stats */}
                <div className="space-y-2 mb-4 sm:mb-6">
                  <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-gray-600">
                    <Flame className="h-3 w-3 sm:h-4 sm:w-4 text-orange-500" />
                    <span>0 minute cette semaine</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-gray-600">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500" />
                    <span>0 place d&apos;examen au code valide</span>
                  </div>
                </div>

                {/* Navigation Tabs */}
                <div className="flex bg-gray-200 rounded-lg p-1 mb-4 sm:mb-6">
                  <div className="flex-1 bg-primary text-white py-1 sm:py-2 px-2 sm:px-4 rounded-md text-xs sm:text-sm font-medium text-center">
                    Révisions
                  </div>
                  <div className="flex-1 py-1 sm:py-2 px-2 sm:px-4 text-xs sm:text-sm text-gray-600 text-center">
                    Entraînement
                  </div>
                  <div className="flex-1 py-1 sm:py-2 px-2 sm:px-4 text-xs sm:text-sm text-gray-600 text-center">
                    Examen
                  </div>
                </div>
              </div>

              {/* Phone Screen Content */}
              <div className="bg-gradient-to-br from-yellow-400 via-orange-500 to-green-500 rounded-2xl h-32 sm:h-48 mb-3 sm:mb-4 flex items-center justify-center">
                <Smartphone className="h-12 w-12 sm:h-16 sm:w-16 text-white opacity-80" />
              </div>

              {/* Bottom Content */}
              <div className="text-center">
                <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-2">Top départ !</h4>
                <div className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                  <div className="h-2 bg-gray-300 rounded-full"></div>
                  <div className="h-2 bg-gray-300 rounded-full w-3/4 mx-auto"></div>
                  <div className="h-2 bg-gray-300 rounded-full w-1/2 mx-auto"></div>
                </div>
              </div>

              {/* Bottom Navigation Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gray-900 rounded-b-3xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
