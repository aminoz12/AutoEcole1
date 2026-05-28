'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

type PackKey = 'manuelle' | 'auto' | 'manuelle-code' | 'auto-code'

interface Pack {
  title: string
  monthly?: number
  total: number
  popular?: boolean
  features: string[]
}

const packsData: Record<PackKey, Pack[]> = {
  manuelle: [
    {
      title: 'Permis B 20h',
      total: 899,
      features: [
        'Leçons de conduite 20h',
        'Fourniture pédagogique (livret apprentissage)',
        'Paiement en 4 fois sans frais',
        'Suivi pédagogique',
        'Finance avec ton CPF',
        "Date d'examen garantie",
      ],
    },
    {
      title: 'PERMIS B 40H',
      total: 1699,
      features: [
        'Leçons de conduite 40h',
        'Fourniture pédagogique (livret apprentissage)',
        'Paiement en 4 fois sans frais',
        'Suivi pédagogique',
        'Finance avec ton CPF',
        "Date d'examen garantie",
      ],
    },
    {
      title: 'Permis B accéléré 20h',
      total: 1499,
      popular: true,
      features: [
        'Formation pratique en accéléré minimum 20H',
        'Fourniture pédagogique (livret apprentissage)',
        'Paiement en 4 fois sans frais',
        'Suivi pédagogique',
        'Finance avec ton CPF',
        "Date d'examen garantie",
      ],
    },
    {
      title: 'Permis B 30h',
      total: 1399,
      features: [
        'Leçons de conduite 30h',
        'Fourniture pédagogique (livret apprentissage)',
        'Paiement en 4 fois sans frais',
        'Suivi pédagogique',
        'Finance avec ton CPF',
        "Date d'examen garantie",
      ],
    },
  ],
  auto: [
    {
      title: 'Permis BEA 13h',
      total: 799,
      features: [
        'Leçons de conduite 13h',
        'Fourniture pédagogique (livret apprentissage)',
        'Paiement en 4 fois sans frais',
        'Suivi pédagogique',
        'Finance avec ton CPF',
        "Date d'examen garantie",
      ],
    },
    {
      title: 'Permis BEA 20h accéléré',
      total: 1699,
      popular: true,
      features: [
        'Leçons de conduite 20h',
        'Fourniture pédagogique (livret apprentissage)',
        'Paiement en 4 fois sans frais',
        'Suivi pédagogique',
        'Finance avec ton CPF',
        "Date d'examen garantie",
      ],
    },
    {
      title: 'Permis BEA 20h',
      total: 1249,
      features: [
        'Leçons de conduite 20h',
        'Fourniture pédagogique (livret apprentissage)',
        'Paiement en 4 fois sans frais',
        'Suivi pédagogique',
        'Finance avec ton CPF',
        "Date d'examen garantie",
      ],
    },
    {
      title: 'Permis BEA 30h',
      total: 1699,
      features: [
        'Leçons de conduite 30h',
        'Fourniture pédagogique (livret apprentissage)',
        'Paiement en 4 fois sans frais',
        'Suivi pédagogique',
        'Finance avec ton CPF',
        "Date d'examen garantie",
      ],
    },
  ],
  'manuelle-code': [
    {
      title: 'FORMULE 13H CLASSIQUE',
      monthly: 99,
      total: 990,
      features: [
        'Cours de code illimité (1 an)',
        '13h de leçons de conduite',
        'Paiement en 4 fois sans frais',
        'Suivi pédagogique',
        'Finance avec ton CPF',
        "Date d'examen garantie",
      ],
    },
    {
      title: 'FORMULE 20H CLASSIQUE',
      monthly: 130,
      total: 1300,
      popular: true,
      features: [
        'Cours de code illimité (1 an)',
        '20h de leçons de conduite',
        'Paiement en 4 fois sans frais',
        'Suivi pédagogique',
        'Finance avec ton CPF',
        "Date d'examen garantie",
      ],
    },
    {
      title: 'FORMULE 30H CLASSIQUE',
      monthly: 180,
      total: 1800,
      features: [
        'Cours de code illimité (1 an)',
        '30h de leçons de conduite',
        'Paiement en 4 fois sans frais',
        'Suivi pédagogique',
        'Finance avec ton CPF',
        "Date d'examen garantie",
      ],
    },
    {
      title: 'FORMULE 13H ACCÉLÉRÉ',
      monthly: 121,
      total: 1210,
      features: [
        "Date d'examen garantie",
        'Terminez votre formation en 10 jours',
        'Paiement en 4 fois sans frais',
        'Suivi pédagogique',
        'Finance avec ton CPF',
      ],
    },
    {
      title: 'FORMULE 20H ACCÉLÉRÉ',
      monthly: 150,
      total: 1500,
      popular: true,
      features: [
        "Date d'examen garantie",
        'Terminez votre formation en 10 jours',
        'Paiement en 4 fois sans frais',
        'Suivi pédagogique',
        'Finance avec ton CPF',
      ],
    },
    {
      title: 'FORMULE 30H ACCÉLÉRÉ',
      monthly: 205,
      total: 2050,
      features: [
        "Date d'examen garantie",
        'Terminez votre formation en 10 jours',
        'Paiement en 4 fois sans frais',
        'Suivi pédagogique',
        'Finance avec ton CPF',
      ],
    },
  ],
  'auto-code': [
    {
      title: 'FORMULE 13H FR/AAC',
      monthly: 121,
      total: 1210,
      features: [
        "Date d'examen garantie",
        'Terminez votre formation en 10 jours',
        'Paiement en 4 fois sans frais',
        'Suivi pédagogique',
        'Finance avec ton CPF',
      ],
    },
    {
      title: 'FORMULE 20H FR/AAC',
      monthly: 150,
      total: 1500,
      popular: true,
      features: [
        "Date d'examen garantie",
        'Terminez votre formation en 10 jours',
        'Paiement en 4 fois sans frais',
        'Suivi pédagogique',
        'Finance avec ton CPF',
      ],
    },
    {
      title: 'FORMULE 30H FR/AAC',
      monthly: 205,
      total: 2050,
      features: [
        "Date d'examen garantie",
        'Terminez votre formation en 10 jours',
        'Paiement en 4 fois sans frais',
        'Suivi pédagogique',
        'Finance avec ton CPF',
      ],
    },
  ],
}

interface PricingSectionProps {
  transmissionType?: 'manuelle' | 'auto'
  setTransmissionType?: (type: 'manuelle' | 'auto') => void
}

const tabs: { key: PackKey; label: string }[] = [
  { key: 'manuelle', label: 'Boîte Manuelle' },
  { key: 'auto', label: 'Boîte Auto' },
  { key: 'manuelle-code', label: 'Boîte Manuelle + CODE' },
  { key: 'auto-code', label: 'Boîte Auto + CODE' },
]

export default function PricingSection(_props: PricingSectionProps) {
  const [activeTab, setActiveTab] = useState<PackKey>('manuelle')
  const packs = useMemo(() => packsData[activeTab], [activeTab])

  return (
    <section id="tarifs" className="py-20 md:py-28 relative overflow-hidden bg-[#0B0F19]">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3">
            Choisis ta formule,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500">
              au meilleur prix.
            </span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Des offres flexibles et adaptées à tes besoins
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-[#151b2e] border border-white/10 rounded-full p-1.5 whitespace-nowrap">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative px-3 sm:px-5 py-2.5 rounded-full text-[10px] sm:text-xs font-bold tracking-wider transition-colors whitespace-nowrap ${
                  activeTab === tab.key ? 'text-gray-900' : 'text-gray-300 hover:text-white'
                }`}
              >
                {activeTab === tab.key && (
                  <motion.span
                    layoutId="pack-tab-pill"
                    className="absolute inset-0 bg-white rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto"
          >
            {packs.map((pack) => (
              <div
                key={pack.title}
                className={`relative bg-[#151b2e] border rounded-2xl p-7 flex flex-col ${
                  pack.popular
                    ? 'border-purple-500/40 shadow-2xl shadow-purple-500/10'
                    : 'border-white/10'
                } ${activeTab === 'manuelle' || activeTab === 'auto' ? 'min-h-[420px]' : ''}`}
              >
                {pack.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[10px] font-semibold px-3 py-1 rounded-full shadow-lg">
                    Formule recommandée par 80% de nos élèves
                  </div>
                )}

                <h3 className="text-white text-center text-base font-bold tracking-wide mb-6 mt-2">
                  {pack.title}
                </h3>

                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-extrabold text-white">{pack.total}€</span>
                  </div>
                </div>

                <motion.a
                  href="/auth"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-gradient-to-r from-purple-600 to-purple-400 text-white text-center text-sm font-semibold py-3 px-8 rounded-full shadow-lg shadow-purple-500/25 mb-6 flex items-center justify-center gap-2 w-max mx-auto"
                >
                  <Check className="h-4 w-4" />
                  Je m'inscris
                </motion.a>

                <ul className="space-y-2.5 border-t border-white/10 pt-5">
                  {pack.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-gray-300">
                      <Check className="h-4 w-4 text-purple-400 flex-shrink-0" strokeWidth={2.5} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="#cpf"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-semibold transition-colors"
          >
            Je finance mon permis avec le CPF
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
