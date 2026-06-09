'use client'

import { Fragment, useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Map, Users, CalendarCheck, Phone } from 'lucide-react'
import { siteConfig } from '@/lib/seo/site-config'

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
        ' Paiement en 2 fois sans frais',
        'Suivi pédagogique',
      ],
    },
    {
      title: 'PERMIS B 40H',
      total: 1699,
      features: [
        'Leçons de conduite 40h',
        'Fourniture pédagogique (livret apprentissage)',
        ' Paiement en 2 fois sans frais',
        'Suivi pédagogique',
      ],
    },
    {
      title: 'Permis B accéléré 20h',
      total: 1499,
      popular: true,
      features: [
        'Formation pratique en accéléré minimum 20H',
        'Fourniture pédagogique (livret apprentissage)',
        ' Paiement en 2 fois sans frais',
        'Suivi pédagogique',
      ],
    },
    {
      title: 'Permis B 30h',
      total: 1399,
      features: [
        'Leçons de conduite 30h',
        'Fourniture pédagogique (livret apprentissage)',
        ' Paiement en 2 fois sans frais',
        'Suivi pédagogique',
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
        ' Paiement en 2 fois sans frais',
        'Suivi pédagogique',
      ],
    },
    {
      title: 'Permis BEA 20h accéléré',
      total: 1699,
      popular: true,
      features: [
        'Leçons de conduite 20h',
        'Fourniture pédagogique (livret apprentissage)',
        ' Paiement en 2 fois sans frais',
        'Suivi pédagogique',
      ],
    },
    {
      title: 'Permis BEA 20h',
      total: 1249,
      features: [
        'Leçons de conduite 20h',
        'Fourniture pédagogique (livret apprentissage)',
        ' Paiement en 2 fois sans frais',
        'Suivi pédagogique',
      ],
    },
    {
      title: 'Permis BEA 30h',
      total: 1699,
      features: [
        'Leçons de conduite 30h',
        'Fourniture pédagogique (livret apprentissage)',
        ' Paiement en 2 fois sans frais',
        'Suivi pédagogique',
      ],
    },
    {
      title: 'FORMULE 20H ACCÉLÉRÉ',
      monthly: 150,
      total: 1500,
      features: [
        'Terminez votre formation en 10 jours',
        ' Paiement en 2 fois sans frais',
        'Suivi pédagogique',
      ],
    },
    {
      title: 'Permis BEA 13h accéléré',
      total: 1199,
      features: [
        'Leçons de conduite 13h',
        'Fourniture pédagogique (livret apprentissage)',
        'Paiement en 2 fois sans frais',
        'Suivi pédagogique',
      ],
    },
  ],
  'manuelle-code': [
    {
      title: 'FORMULE 20H',
      total: 899,
      features: [
        'Cours de code illimité (1 an)',
        '20h de leçons de conduite',
        'Paiement en 2 fois sans frais',
        'Suivi pédagogique',
      ],
    },
    {
      title: 'FORMULE 30H',
      total: 1399,
      features: [
        'Cours de code illimité (1 an)',
        '30h de leçons de conduite',
        'Paiement en 2 fois sans frais',
        'Suivi pédagogique',
      ],
    },
    {
      title: 'FORMULE 20H ACCÉLÉRÉ',
      total: 1490,
      features: [
        'Terminez votre formation rapidement',
        'Paiement en 2 fois sans frais',
        'Suivi pédagogique',
      ],
    },
    {
      title: 'FORMULE 40H',
      total: 1699,
      features: [
        'Cours de code illimité (1 an)',
        '40h de leçons de conduite',
        'Paiement en 2 fois sans frais',
        'Suivi pédagogique',
      ],
    },
  ],
  'auto-code': [
    {
      title: 'FORMULE 13H',
      total: 799,
      features: [
        'Cours de code illimité (1 an)',
        '13h de leçons de conduite',
        'Paiement en 2 fois sans frais',
        'Suivi pédagogique',
      ],
    },
    {
      title: 'FORMULE 20H',
      total: 1249,
      features: [
        'Cours de code illimité (1 an)',
        '20h de leçons de conduite',
        'Paiement en 2 fois sans frais',
        'Suivi pédagogique',
      ],
    },
    {
      title: 'FORMULE 20H ACCÉLÉRÉ',
      total: 1740,
      features: [
        'Terminez votre formation rapidement',
        'Paiement en 2 fois sans frais',
        'Suivi pédagogique',
      ],
    },
    {
      title: 'FORMULE 30H',
      total: 1749,
      features: [
        'Cours de code illimité (1 an)',
        '30h de leçons de conduite',
        'Paiement en 2 fois sans frais',
        'Suivi pédagogique',
      ],
    },
  ],
}

interface PricingSectionProps {
  transmissionType?: 'manuelle' | 'auto'
  setTransmissionType?: (type: 'manuelle' | 'auto') => void
  /** Show the "dernière ligne droite" exam-prep block + CTA (default true) */
  showFinalStretch?: boolean
  /** Show every category stacked (no tab buttons) — default false */
  showAllCategories?: boolean
}

function PackCard({ pack, catKey }: { pack: Pack; catKey: PackKey }) {
  return (
    <div
      className={`relative bg-[#151b2e] border rounded-2xl p-7 flex flex-col ${
        pack.popular
          ? 'border-purple-500/40 shadow-2xl shadow-purple-500/10'
          : 'border-white/10'
      } ${catKey === 'manuelle' || catKey === 'auto' ? 'min-h-[420px]' : ''}`}
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
        className="bg-gradient-to-r from-purple-600 to-purple-400 text-white text-center text-sm font-semibold py-3 px-8 rounded-full shadow-lg shadow-purple-500/25 mb-4 flex items-center justify-center gap-2 w-max mx-auto"
      >
        <Check className="h-4 w-4" />
        Je m&apos;inscris
      </motion.a>

      <motion.a
        href={
          catKey === 'manuelle' || catKey === 'auto'
            ? '/Pieces_a_fournir_simple.pdf'
            : '/Pieces_a_fournir.pdf'
        }
        download
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="bg-white/10 hover:bg-white/20 text-white text-center text-sm font-semibold py-2.5 px-6 rounded-full border border-white/20 mb-6 flex items-center justify-center gap-2 w-max mx-auto transition-all"
      >
        📄 Piéces à fournir
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
  )
}

const tabs: { key: PackKey; label: string }[] = [
  { key: 'manuelle', label: 'Boîte Manuelle - SANS CODE' },
  { key: 'auto', label: 'Boîte Auto - SANS CODE' },
  { key: 'manuelle-code', label: 'Boîte Manuelle + CODE' },
  { key: 'auto-code', label: 'Boîte Auto + CODE' },
]

export default function PricingSection({
  showFinalStretch = true,
  showAllCategories = false,
}: PricingSectionProps) {
  const [activeTab, setActiveTab] = useState<PackKey>('manuelle')
  const packs = useMemo(() => packsData[activeTab], [activeTab])

  return (
    <section id="tarifs" className="py-12 md:py-16 relative overflow-hidden bg-[#0B0F19]">
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

        {!showAllCategories && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12 flex justify-center px-4"
          >
            <div className="grid w-full max-w-md grid-cols-2 gap-2 rounded-2xl border border-white/20 bg-[#151b2e] p-2 shadow-lg md:inline-flex md:w-auto md:max-w-none md:gap-0 md:rounded-full">
              {tabs.map((tab, index) => (
                <Fragment key={tab.key}>
                  {index > 0 && <span aria-hidden="true" className="hidden md:block h-8 w-px shrink-0 bg-gradient-to-b from-white/0 via-white/30 to-white/0" />}
                  <button
                    onClick={() => setActiveTab(tab.key)}
                    className={`relative w-full md:w-auto px-3 sm:px-6 py-2.5 sm:py-3 rounded-full text-[11px] sm:text-sm font-bold tracking-wide leading-tight transition-all whitespace-normal md:whitespace-nowrap ${
                      activeTab === tab.key ? 'text-gray-900' : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {activeTab === tab.key && (
                      <motion.span
                        layoutId="pack-tab-pill"
                        className="absolute inset-0 bg-white rounded-full shadow-lg"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                </Fragment>
              ))}
            </div>
          </motion.div>
        )}

        {showAllCategories ? (
          <div className="max-w-7xl mx-auto space-y-16">
            {tabs.map((tab) => (
              <div key={tab.key} id={tab.key} className="scroll-mt-28">
                <h3 className="text-center text-xl sm:text-2xl font-bold text-white mb-8">
                  {tab.label}
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {packsData[tab.key].map((pack) => (
                    <PackCard key={pack.title} pack={pack} catKey={tab.key} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
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
                <PackCard key={pack.title} pack={pack} catKey={activeTab} />
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        {/* Final Stretch Section */}
        {showFinalStretch && (
        <>
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
            Une fois vos compétences validées, nous basculons en préparation à l'examen avec un coaching personnalisé jusqu'au jour J.
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
        >
          <motion.a
            href="/s-inscrire"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-to-r from-purple-600 to-purple-400 text-white text-center text-sm font-semibold py-3 px-8 rounded-full shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2"
          >
            <Check className="h-4 w-4" />
            Je m'inscris
          </motion.a>

          <motion.a
            href={`tel:${siteConfig.phoneTel}`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white/10 hover:bg-white/20 text-white text-center text-sm font-semibold py-3 px-8 rounded-full border border-white/20 flex items-center justify-center gap-2 transition-all"
          >
            <Phone className="h-4 w-4" />
            Nous appeler
          </motion.a>
        </motion.div>
        </>
        )}
      </div>
    </section>
  )
}