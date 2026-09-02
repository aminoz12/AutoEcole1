'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { X, Phone, Check } from 'lucide-react'
import { useScrollLock } from '@/lib/useScrollLock'
import { siteConfig } from '@/lib/seo/site-config'
import { trackEvent } from '@/lib/analytics'

const STORAGE_KEY = 'offre-permis-popup-dismissed'

// Popup d'offre : porte le prix d'appel et pousse vers l'inscription. Ne
// s'affiche qu'une fois par session, après 8 s (le temps de lire le hero).
export default function CPFPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return

    const timer = setTimeout(() => {
      setIsOpen(true)
      trackEvent('popup_view', { popup: 'offre-permis' })
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  // Lock background scroll while the popup is open (shared, ref-counted)
  useScrollLock(isOpen)

  const handleClose = () => {
    setIsOpen(false)
    sessionStorage.setItem(STORAGE_KEY, 'true')
  }

  const bullets = [
    'Boîte automatique 13 h dès 799 €',
    'Code de la route inclus pendant 1 an',
    'Paiement en 2 fois sans frais',
    'Un conseiller vous rappelle sous 24 h',
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[70] bg-black/60"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="fixed inset-0 z-[71] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="relative max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl shadow-2xl pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Background image (dimmed so the text stays dominant) */}
              <Image
                src="/popup.png"
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, 448px"
                className="object-cover pointer-events-none"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/90 via-[#0B0F19]/85 to-[#1a0b22]/90 pointer-events-none" />

              {/* Close */}
              <button
                type="button"
                onClick={handleClose}
                className="absolute top-3 right-3 z-30 rounded-full bg-white/15 p-2 text-white hover:bg-white/25 transition-colors"
                aria-label="Fermer"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Content */}
              <div className="relative z-10 px-6 py-9 text-center sm:px-9 sm:py-11">
                <h2 className="font-poppins text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                  Votre permis
                  <span className="mt-1 block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400">
                    dès 799&nbsp;€
                  </span>
                </h2>

                <ul className="mx-auto mt-6 max-w-xs space-y-3 text-left">
                  {bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-sm text-gray-200 sm:text-base">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-pink-400" strokeWidth={3} />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/s-inscrire"
                  onClick={() => {
                    trackEvent('cta_click', { location: 'popup', target: 's-inscrire' })
                    handleClose()
                  }}
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-7 py-3.5 font-poppins text-sm font-semibold text-white shadow-lg shadow-pink-500/25 transition-opacity hover:opacity-90 sm:text-base"
                >
                  Je commence mon permis
                </Link>

                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  onClick={() => trackEvent('phone_click', { location: 'popup' })}
                  className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-300 underline-offset-4 hover:text-white hover:underline"
                >
                  <Phone className="h-4 w-4" />
                  ou appelez-nous : {siteConfig.phone}
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
