'use client'

import { Fragment, useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowRight, Map, Users, CalendarCheck } from 'lucide-react'

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
        'Éligible au financement CPF',
        "Date d'examen prioritaire",
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
        'Éligible au financement CPF',
        "Date d'examen prioritaire",
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
        'Éligible au financement CPF',
        "Date d'examen prioritaire",
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
        'Éligible au financement CPF',
        "Date d'examen prioritaire",
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
        'Éligible au financement CPF',
        "Date d'examen prioritaire",
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
        'Éligible au financement CPF',
        "Date d'examen prioritaire",
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
        'Éligible au financement CPF',
        "Date d'examen prioritaire",
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
        'Éligible au financement CPF',
        "Date d'examen prioritaire",
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
        'Éligible au financement CPF',
        "Date d'examen prioritaire",
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
        'Éligible au financement CPF',
        "Date d'examen prioritaire",
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
        'Éligible au financement CPF',
        "Date d'examen prioritaire",
      ],
    },
    {
      title: 'FORMULE 13H ACCÉLÉRÉ',
      monthly: 121,
      total: 1210,
      features: [
        "Date d'examen prioritaire",
        'Terminez votre formation en 10 jours',
        'Paiement en 4 fois sans frais',
        'Suivi pédagogique',
        'Éligible au financement CPF',
      ],
    },
    {
      title: 'FORMULE 20H ACCÉLÉRÉ',
      monthly: 150,
      total: 1500,
      popular: true,
      features: [
        "Date d'examen prioritaire",
        'Terminez votre formation en 10 jours',
        'Paiement en 4 fois sans frais',
        'Suivi pédagogique',
        'Éligible au financement CPF',
      ],
    },
    {
      title: 'FORMULE 30H ACCÉLÉRÉ',
      monthly: 205,
      total: 2050,
      features: [
        "Date d'examen prioritaire",
        'Terminez votre formation en 10 jours',
        'Paiement en 4 fois sans frais',
        'Suivi pédagogique',
        'Éligible au financement CPF',
      ],
    },
  ],
  'auto-code': [
    {
      title: 'FORMULE 13H FR/AAC',
      monthly: 121,
      total: 1210,
      features: [
        "Date d'examen prioritaire",
        'Terminez votre formation en 10 jours',
        'Paiement en 4 fois sans frais',
        'Suivi pédagogique',
        'Éligible au financement CPF',
      ],
    },
    {
      title: 'FORMULE 20H FR/AAC',
      monthly: 150,
      total: 1500,
      popular: true,
      features: [
        "Date d'examen prioritaire",
        'Terminez votre formation en 10 jours',
        'Paiement en 4 fois sans frais',
        'Suivi pédagogique',
        'Éligible au financement CPF',
      ],
    },
    {
      title: 'FORMULE 30H FR/AAC',
      monthly: 205,
      total: 2050,
      features: [
        "Date d'examen prioritaire",
        'Terminez votre formation en 10 jours',
        'Paiement en 4 fois sans frais',
        'Suivi pédagogique',
        'Éligible au financement CPF',
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
            Nos formules permis,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500">
              transparentes et sans surprise.
            </span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Boîte manuelle, automatique ou avec code — choisissez la formule adaptée à votre profil
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
            {tabs.map((tab, index) => (
              <Fragment key={tab.key}>
                {index > 0 && <span aria-hidden="true" className="h-8 w-px shrink-0 bg-gradient-to-b from-white/0 via-white/30 to-white/0" />}
                <button
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
              </Fragment>
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
                    Formule la plus choisie — 80 % de nos élèves
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
                  href="/s-inscrire"
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

        {/* Final Stretch Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-24 mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-3">
            La dernière ligne droite :
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500">
              réussir votre examen du permis
            </span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-3xl mx-auto">
            Une fois vos heures de base validées, nous basculons en mode{' '}
            <span className="text-blue-400 font-semibold">préparation intensive</span> avec un{' '}
            <span className="text-blue-400 font-semibold">coaching personnalisé</span> jusqu'au jour J.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {[
            {
              num: 1,
              title: 'Immersion sur parcours d\'examen',
              desc: 'Vos dernières heures se déroulent sur les circuits officiels de votre centre d\'examen, virage par virage, dans des conditions réelles.',
              icon: Map,
            },
            {
              num: 2,
              title: 'Examen blanc avec moniteur',
              desc: 'Un test complet en conditions réelles pour arriver serein le jour de l\'examen, sans stress ni mauvaise surprise.',
              icon: Users,
            },
            {
              num: 3,
              title: 'Date d\'examen prioritaire',
              desc: 'Dès que vous êtes prêt(e), nous réservons votre créneau d\'examen. Pas d\'attente inutile — vous passez au bon moment.',
              icon: CalendarCheck,
            },
          ].map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.num}
                className="bg-[#151b2e]/80 border border-white/10 rounded-2xl p-7 flex flex-col relative overflow-hidden"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 text-purple-300 text-sm font-bold">
                    {card.num}
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-gray-300" />
                  </div>
                </div>
                <h3 className="text-base font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-pink-500">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            )
          })}
        </motion.div>

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
            Financer mon permis avec le CPF
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}