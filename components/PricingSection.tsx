'use client'

import { Fragment, useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Map, Users, CalendarCheck, Phone, X, AlertCircle } from 'lucide-react'
import { siteConfig } from '@/lib/seo/site-config'
import { packsData, packCategories as tabs, type Pack, type PackKey } from '@/lib/content/pricing-data'
import { useScrollLock } from '@/lib/useScrollLock'
import { trackEvent } from '@/lib/analytics'

interface PricingSectionProps {
  transmissionType?: 'manuelle' | 'auto'
  setTransmissionType?: (type: 'manuelle' | 'auto') => void
  /** Show the "dernière ligne droite" exam-prep block + CTA (default true) */
  showFinalStretch?: boolean
  /** Show every category stacked (no tab buttons) — default false */
  showAllCategories?: boolean
}

function PackCard({ pack, catKey }: { pack: Pack; catKey: PackKey }) {
  // Popup de confirmation (packs avec confirmNote, ex. Représentation Rapide) :
  // l'élève coche qu'il a lu le rappel avant d'accéder au formulaire.
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [acknowledged, setAcknowledged] = useState(false)
  useScrollLock(confirmOpen)

  const signupHref = `/s-inscrire?formule=${catKey}&pack=${encodeURIComponent(pack.title)}`

  const closeConfirm = () => {
    setConfirmOpen(false)
    setAcknowledged(false)
  }

  const proceed = () => {
    trackEvent('cta_click', { location: 'pricing_confirm_popup', target: 's-inscrire' })
    window.location.href = signupHref
  }

  return (
    <div
      className={`relative bg-[#151b2e] border rounded-2xl p-7 flex flex-col min-h-[420px] ${
        pack.popular
          ? 'border-purple-500/40 shadow-2xl shadow-purple-500/10'
          : 'border-white/10'
      }`}
    >
      {pack.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gradient-to-r from-purple-500 to-pink-500 text-white text-[10px] font-semibold px-3 py-1 rounded-full shadow-lg">
          Formule la plus choisie
        </div>
      )}

      <h3 className="text-white text-center text-base font-bold tracking-wide mb-6 mt-2">
        {pack.title}
      </h3>

      <div className="text-center mb-6">
        {pack.fromPrice && (
          <div className="text-xs font-medium uppercase tracking-wide text-gray-400 mb-1">
            À partir de
          </div>
        )}
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-5xl font-extrabold text-white">{pack.total}€</span>
        </div>
      </div>

      {/* Le lien porte la formule + le pack pour pré-remplir le formulaire :
          l'élève ne re-choisit pas ce qu'il vient de cliquer */}
      {pack.confirmNote ? (
        <motion.button
          type="button"
          onClick={() => setConfirmOpen(true)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="bg-gradient-to-r from-purple-600 to-purple-400 text-white text-center text-sm font-semibold py-3 px-8 rounded-full shadow-lg shadow-purple-500/25 mb-6 flex items-center justify-center gap-2 w-max mx-auto"
        >
          <Check className="h-4 w-4" />
          Je m&apos;inscris
        </motion.button>
      ) : (
        <motion.a
          href={signupHref}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="bg-gradient-to-r from-purple-600 to-purple-400 text-white text-center text-sm font-semibold py-3 px-8 rounded-full shadow-lg shadow-purple-500/25 mb-6 flex items-center justify-center gap-2 w-max mx-auto"
        >
          <Check className="h-4 w-4" />
          Je m&apos;inscris
        </motion.a>
      )}

      <ul className="space-y-2.5 border-t border-white/10 pt-5">
        {pack.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
            <Check className="mt-0.5 h-4 w-4 text-purple-400 flex-shrink-0" strokeWidth={2.5} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Popup de confirmation */}
      <AnimatePresence>
        {confirmOpen && pack.confirmNote && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[120] bg-black/60"
              onClick={closeConfirm}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              className="fixed inset-0 z-[121] flex items-center justify-center p-4 pointer-events-none"
            >
              <div
                role="dialog"
                aria-modal="true"
                aria-label={`Avant de vous inscrire — ${pack.title}`}
                className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#151b2e] p-7 shadow-2xl pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={closeConfirm}
                  className="absolute top-3 right-3 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
                  aria-label="Fermer"
                >
                  <X className="h-4 w-4" />
                </button>

                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/15">
                    <AlertCircle className="h-5 w-5 text-amber-400" />
                  </div>
                  <h4 className="font-poppins text-lg font-bold text-white">
                    Avant de vous inscrire
                  </h4>
                </div>

                <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                  <input
                    type="checkbox"
                    checked={acknowledged}
                    onChange={(e) => setAcknowledged(e.target.checked)}
                    className="mt-0.5 h-5 w-5 shrink-0 accent-purple-500"
                  />
                  <span className="text-sm leading-relaxed text-gray-300">
                    {pack.confirmNote}
                  </span>
                </label>

                <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={closeConfirm}
                    className="rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Annuler
                  </button>
                  <button
                    type="button"
                    onClick={proceed}
                    disabled={!acknowledged}
                    className="rounded-full bg-gradient-to-r from-purple-600 to-purple-400 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/25 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    J&apos;ai compris
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

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
            Code de la route inclus dans toutes nos formules — choisissez votre boîte, manuelle ou automatique
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
                <p className="md:hidden text-center text-xs text-gray-500 mb-3">
                  Faites glisser pour comparer les formules →
                </p>{/* le pt-4 du carrousel laisse dépasser le badge « Formule la plus choisie » */}
                {/* Mobile : carrousel horizontal (snap) pour éviter 6 cartes empilées ;
                    dès md : grille classique */}
                <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 pt-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:px-0 md:pt-0 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-5 md:overflow-visible">
                  {packsData[tab.key].map((pack) => (
                    <div key={pack.title} className="grid w-[82%] shrink-0 snap-center sm:w-[55%] md:w-auto md:shrink">
                      <PackCard pack={pack} catKey={tab.key} />
                    </div>
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
              className="max-w-6xl mx-auto"
            >
              <p className="md:hidden text-center text-xs text-gray-500 mb-3">
                Faites glisser pour comparer les formules →
              </p>
              {/* Mobile : carrousel horizontal (snap) ; dès md : grille classique */}
              <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory -mx-4 px-4 pt-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:px-0 md:pt-0 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-5 md:overflow-visible">
                {packs.map((pack) => (
                  <div key={pack.title} className="grid w-[82%] shrink-0 snap-center sm:w-[55%] md:w-auto md:shrink">
                    <PackCard pack={pack} catKey={activeTab} />
                  </div>
                ))}
              </div>
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
            href="/contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-to-r from-purple-600 to-purple-400 text-white text-center text-sm font-semibold py-3 px-8 rounded-full shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2"
          >
            <Check className="h-4 w-4" />
            Contactez-Nous
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

          {/* Lien contextuel vers la page qui doit se positionner sur
              « prix / tarifs permis Nanterre ». L'ancre porte le mot-clé. */}
          <motion.a
            href="/tarifs"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white/10 hover:bg-white/20 text-white text-center text-sm font-semibold py-3 px-8 rounded-full border border-white/20 flex items-center justify-center gap-2 transition-all"
          >
            Tous les tarifs du permis à Nanterre
          </motion.a>
        </motion.div>
        </>
        )}
      </div>
    </section>
  )
}