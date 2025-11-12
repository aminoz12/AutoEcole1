'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Star, Users, Award } from 'lucide-react'

export default function HeroSection() {
  const stats = [
    { icon: Users, value: '2,500+', label: 'Élèves formés' },
    { icon: Star, value: '4.9/5', label: 'Note moyenne' },
    { icon: Award, value: '95%', label: 'Taux de réussite' },
  ]

  return (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden pt-32 md:pt-40 lg:pt-48">
      {/* Clean White Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white"></div>
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${encodeURIComponent('8B5CF6')}' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-secondary/5 to-transparent rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Apprenez à{' '}
                <span className="text-primary">conduire</span>{' '}
                avec les meilleurs
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                AutoEcole Pro vous accompagne dans votre apprentissage avec des moniteurs 
                expérimentés, des véhicules modernes et des tarifs compétitifs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center space-x-2 text-base sm:text-lg w-full sm:w-auto"
              >
                <span>Commencer maintenant</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-base sm:text-lg w-full sm:w-auto"
              >
                Voir nos tarifs
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/hero.png"
                alt="Élève en cours de conduite avec moniteur"
                width={600}
                height={400}
                className="w-full h-auto scale-110 sm:scale-125"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-xl shadow-lg p-3 sm:p-4 max-w-xs"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Excellent service</div>
                  <div className="text-xs sm:text-sm text-gray-600">Moniteur très patient</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -top-16 -right-4 sm:-top-20 sm:-right-6 bg-white rounded-xl shadow-lg p-3 sm:p-4 max-w-xs"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Permis obtenu</div>
                  <div className="text-xs sm:text-sm text-gray-600">Du premier coup !</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
