'use client'

import { motion } from 'framer-motion'
import { Check, Star, Clock, Car, GraduationCap, Zap } from 'lucide-react'
import { useMemo } from 'react'

interface PricingWithoutCodeSectionProps {
  transmissionType: 'manuelle' | 'auto'
  setTransmissionType: (type: 'manuelle' | 'auto') => void
}

export default function PricingWithoutCodeSection({ transmissionType, setTransmissionType }: PricingWithoutCodeSectionProps) {
  // Manual transmission plans
  const manualPlans = [
    {
      name: 'Permis B 20h',
      price: '899',
      icon: Car,
      color: 'from-blue-500 to-blue-600',
      borderColor: 'border-blue-200',
      bgGradient: 'bg-gradient-to-br from-blue-50 to-blue-100/50',
      popular: false,
      features: [
        'Leçons de conduite 20h',
        'Fourniture pédagogique (livret apprentissage)',
      ],
    },
    {
      name: 'PERMIS B 40H',
      price: '1 699',
      icon: GraduationCap,
      color: 'from-indigo-500 to-indigo-600',
      borderColor: 'border-indigo-200',
      bgGradient: 'bg-gradient-to-br from-indigo-50 to-indigo-100/50',
      popular: false,
      features: [
        'Leçons de conduite 40h',
        'Fourniture pédagogique (livret apprentissage)',
      ],
    },
    {
      name: 'Permis B accéléré 20h',
      subtitle: '(intense)',
      price: '1 499',
      icon: Zap,
      color: 'from-amber-500 to-amber-600',
      borderColor: 'border-amber-200',
      bgGradient: 'bg-gradient-to-br from-amber-50 to-amber-100/50',
      popular: true,
      features: [
        'Formation pratique en accéléré minimum 20H',
        'Fourniture pédagogique (livret apprentissage)',
      ],
    },
    {
      name: 'Permis B 30h',
      price: '1 399',
      icon: Clock,
      color: 'from-teal-500 to-teal-600',
      borderColor: 'border-teal-200',
      bgGradient: 'bg-gradient-to-br from-teal-50 to-teal-100/50',
      popular: false,
      features: [
        'Leçons de conduite 30h',
        'Fourniture pédagogique (livret apprentissage)',
      ],
    },
  ]

  // Automatic transmission plans (BEA)
  const autoPlans = [
    {
      name: 'Permis BEA 13h',
      price: '799',
      icon: Car,
      color: 'from-blue-500 to-blue-600',
      borderColor: 'border-blue-200',
      bgGradient: 'bg-gradient-to-br from-blue-50 to-blue-100/50',
      popular: false,
      features: [
        'Leçons de conduite 13h',
        'Fourniture pédagogique (livret apprentissage)',
      ],
    },
    {
      name: 'Permis BEA 20h accéléré',
      price: '1 699',
      icon: Zap,
      color: 'from-amber-500 to-amber-600',
      borderColor: 'border-amber-200',
      bgGradient: 'bg-gradient-to-br from-amber-50 to-amber-100/50',
      popular: true,
      features: [
        'Leçons de conduite 20h',
        'Fourniture pédagogique (livret apprentissage)',
      ],
    },
    {
      name: 'Permis BEA 20h',
      price: '1 249',
      icon: Car,
      color: 'from-blue-500 to-blue-600',
      borderColor: 'border-blue-200',
      bgGradient: 'bg-gradient-to-br from-blue-50 to-blue-100/50',
      popular: false,
      features: [
        'Leçons de conduite 20h',
        'Fourniture pédagogique (livret apprentissage)',
      ],
    },
    {
      name: 'Permis BEA 30h',
      price: '1 699',
      icon: Clock,
      color: 'from-teal-500 to-teal-600',
      borderColor: 'border-teal-200',
      bgGradient: 'bg-gradient-to-br from-teal-50 to-teal-100/50',
      popular: false,
      features: [
        'Leçons de conduite 30h',
        'Fourniture pédagogique (livret apprentissage)',
      ],
    },
  ]

  const pricingPlans = useMemo(() => {
    return transmissionType === 'auto' ? autoPlans : manualPlans
  }, [transmissionType])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="tarifs-sans-code" className="pt-8 pb-16 md:pt-12 md:pb-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nos leçons de conduite <span className="text-primary">sans code</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Pour ceux qui ont déjà obtenu leur code de la route
          </p>
          
          {/* Transmission Type Toggle Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4 mb-12"
          >
            <motion.button
              whileHover={{ scale: transmissionType === 'manuelle' ? 1 : 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setTransmissionType('manuelle')}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 whitespace-nowrap ${
                transmissionType === 'manuelle'
                  ? 'bg-primary text-white shadow-2xl ring-4 ring-primary/30 scale-105'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300 shadow-md'
              }`}
            >
              Boîte Manuelle
            </motion.button>
            <motion.button
              whileHover={{ scale: transmissionType === 'auto' ? 1 : 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setTransmissionType('auto')}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 whitespace-nowrap ${
                transmissionType === 'auto'
                  ? 'bg-primary text-white shadow-2xl ring-4 ring-primary/30 scale-105'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300 shadow-md'
              }`}
            >
              Boîte Auto
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          key={transmissionType}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto"
        >
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <motion.div
                key={`${transmissionType}-${plan.name}`}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                layout
                className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 ${plan.borderColor} overflow-hidden ${
                  plan.popular ? 'ring-4 ring-amber-200 ring-opacity-50 lg:scale-105' : ''
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute top-4 right-4 z-20">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1 + index * 0.05, duration: 0.2 }}
                      className="bg-gradient-to-r from-amber-600 to-amber-500 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg"
                    >
                      <Zap className="h-3 w-3 fill-current" />
                      <span>INTENSE</span>
                    </motion.div>
                  </div>
                )}

                {/* Header with gradient */}
                <div className={`${plan.bgGradient} pt-8 pb-6 px-6 relative overflow-hidden`}>
                  {/* Decorative circles */}
                  <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${plan.color} rounded-full opacity-20 blur-2xl`}></div>
                  <div className={`absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-br ${plan.color} rounded-full opacity-20 blur-xl`}></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${plan.color} text-white shadow-lg mb-4`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight min-h-[56px]">
                      {plan.name}
                      {plan.subtitle && (
                        <span className="block text-sm font-normal text-gray-600 mt-1">
                          {plan.subtitle}
                        </span>
                      )}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  {/* Price */}
                  <div className="text-center mb-6 pb-6 border-b-2 border-gray-100">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-900 tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-xl text-gray-500 ml-2">€</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-6 min-h-[140px]">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 + featureIndex * 0.03, duration: 0.3 }}
                        className="flex items-start space-x-3"
                      >
                        <div className={`flex-shrink-0 mt-0.5 p-1 rounded-full bg-gradient-to-br ${plan.color} opacity-10`}>
                          <Check className={`h-4 w-4 text-white rounded-full p-0.5 bg-gradient-to-br ${plan.color}`} strokeWidth={3} />
                        </div>
                        <span className="text-sm text-gray-700 leading-relaxed flex-1">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.a
                    href="/auth"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 rounded-xl font-bold text-base transition-all duration-300 block text-center text-white shadow-lg hover:shadow-xl whitespace-nowrap ${
                      plan.popular
                        ? `bg-gradient-to-r ${plan.color} hover:opacity-90`
                        : `bg-gradient-to-r ${plan.color} hover:opacity-90`
                    }`}
                  >
                    Réserver maintenant
                  </motion.a>
                </div>

                {/* Bottom accent line */}
                <div className={`h-1 bg-gradient-to-r ${plan.color}`}></div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

