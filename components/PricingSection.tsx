'use client'

import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion'
import { Check, Star, Clock, Car, GraduationCap } from 'lucide-react'
import { useMemo } from 'react'

interface PricingPlan {
  name: string;
  price: string;
  icon: LucideIcon;
  color: string;
  borderColor: string;
  bgGradient: string;
  popular: boolean;
  features: string[];
  subtitle?: string; // Optional subtitle property
}

interface PricingSectionProps {
  transmissionType: 'manuelle' | 'auto'
  setTransmissionType: (type: 'manuelle' | 'auto') => void
}

export default function PricingSection({ transmissionType, setTransmissionType }: PricingSectionProps) {
  // Manual transmission plans
  const manualPlans: PricingPlan[] = [
    {
      name: 'Permis B 20h',
      price: '899',
      icon: Car,
      color: 'from-blue-500 to-blue-600',
      borderColor: 'border-blue-200',
      bgGradient: 'bg-gradient-to-br from-blue-50 to-blue-100/50',
      popular: false,
      features: [
        'Frais de constitution de dossier + démarches préfecture',
        'Cours de code collectif illimité (pendant 1 an)',
        'Leçons de conduite 20h',
        'Fourniture pédagogique (livret apprentissage)',
      ],
    },
    {
      name: 'Permis B accéléré (intensif) 20h',
      price: '1 559',
      icon: Clock,
      color: 'from-purple-500 to-purple-600',
      borderColor: 'border-purple-200',
      bgGradient: 'bg-gradient-to-br from-purple-50 to-purple-100/50',
      popular: true,
      features: [
        'Frais de constitution de dossier + démarches préfecture',
        'Séances de code intensif',
        'Formation pratique en accéléré minimum 20H',
        'Fourniture pédagogique (livret apprentissage)',
      ],
    },
    {
      name: 'Permis B 30h',
      price: '1 449',
      icon: GraduationCap,
      color: 'from-orange-500 to-orange-600',
      borderColor: 'border-orange-200',
      bgGradient: 'bg-gradient-to-br from-orange-50 to-orange-100/50',
      popular: false,
      features: [
        'Frais de constitution de dossier + démarches préfecture',
        'Cours de code collectif illimité (pendant 1 an)',
        'Leçons de conduite 30h',
        'Fourniture pédagogique (livret apprentissage)',
      ],
    },
    {
      name: 'Permis conduite accompagnée',
      price: '1 100',
      icon: Star,
      color: 'from-green-500 to-green-600',
      borderColor: 'border-green-200',
      bgGradient: 'bg-gradient-to-br from-green-50 to-green-100/50',
      popular: false,
      features: [
        'Frais de constitution de dossier + démarches préfecture',
        'Cours de code collectif illimité (pendant 1 an)',
        'Leçons de conduite 20h',
        'Fourniture pédagogique (livret apprentissage)',
        'Hors RDV préalable 1h - 60€',
        'Hors RDV pédagogiques (1er RDV 2h- 120€ / 2ème RDV 2h - 120€)',
      ],
    },
  ]

  // Automatic transmission plans (BEA)
  const autoPlans: PricingPlan[] = [
    {
      name: 'Permis BEA 20h accéléré',
      price: '1 749',
      icon: Clock,
      color: 'from-purple-500 to-purple-600',
      borderColor: 'border-purple-200',
      bgGradient: 'bg-gradient-to-br from-purple-50 to-purple-100/50',
      popular: true,
      features: [
        'Frais de constitution de dossier + démarches préfecture',
        'Séances de code intensif',
        'Leçons de conduite minimum 20h',
        'Fourniture pédagogique (livret apprentissage)',
      ],
    },
    {
      name: 'Permis BEA 30h',
      price: '1 749',
      icon: GraduationCap,
      color: 'from-orange-500 to-orange-600',
      borderColor: 'border-orange-200',
      bgGradient: 'bg-gradient-to-br from-orange-50 to-orange-100/50',
      popular: false,
      features: [
        'Frais de constitution de dossier + démarches préfecture',
        'Cours de code collectif illimité (pendant 1 an)',
        'Leçons de conduite 30h',
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
        'Frais de constitution de dossier + démarches préfecture',
        'Cours de code collectif illimité (pendant 1 an)',
        'Leçons de conduite 20h',
        'Fourniture pédagogique (livret apprentissage)',
      ],
    },
    {
      name: 'Permis conduite accompagnée',
      price: '1 250',
      icon: Star,
      color: 'from-green-500 to-green-600',
      borderColor: 'border-green-200',
      bgGradient: 'bg-gradient-to-br from-green-50 to-green-100/50',
      popular: false,
      features: [
        'Frais de constitution de dossier + démarches préfecture',
        'Cours de code collectif illimité (pendant 1 an)',
        'Leçons de conduite 20h',
        'Fourniture pédagogique (livret apprentissage)',
        'Hors RDV préalable 1h - 65€',
        'Hors RDV pédagogiques (1er RDV 2h- 130€ / 2ème RDV 2h - 130€)',
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
    <section id="tarifs" className="section-padding bg-gradient-to-b from-neutral to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
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
            Nos leçons de conduite avec <span className="text-primary">code</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Choisissez la formule qui correspond le mieux à vos besoins et à votre budget
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
                className={`relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 ${plan.borderColor} overflow-hidden flex flex-col ${
                  plan.popular ? 'ring-4 ring-purple-200 ring-opacity-50 lg:scale-105' : ''
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute top-4 right-4 z-20">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1 + index * 0.05, duration: 0.2 }}
                      className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg"
                    >
                      <Star className="h-3 w-3 fill-current" />
                      <span>POPULAIRE</span>
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
                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight min-h-[56px]">
                      {plan.name}
                    </h3>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
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
                  <ul className="space-y-3 mb-6 flex-grow">
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
                    className={`w-full py-4 rounded-xl font-bold text-base transition-all duration-300 block text-center text-white shadow-lg hover:shadow-xl whitespace-nowrap mt-auto ${
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
