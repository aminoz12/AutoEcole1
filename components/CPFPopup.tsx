'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { X, Phone } from 'lucide-react'
import { useScrollLock } from '@/lib/useScrollLock'

const STORAGE_KEY = 'echec-permis-popup-dismissed'

export default function CPFPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return

    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  // Lock background scroll while the popup is open (shared, ref-counted)
  useScrollLock(isOpen)

  const handleClose = () => {
    setIsOpen(false)
    sessionStorage.setItem(STORAGE_KEY, 'true')
  }

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
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/90 via-[#0B0F19]/85 to-[#1a0b22]/90" />

              {/* Close */}
              <button
                type="button"
                onClick={handleClose}
                className="absolute top-3 right-3 z-10 rounded-full bg-white/10 p-1.5 text-white/80 hover:bg-white/20 hover:text-white transition-colors"
                aria-label="Fermer"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Content */}
              <div className="relative z-10 px-6 py-9 text-center sm:px-9 sm:py-11">
                <h2 className="font-poppins text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                  🚗 Échec au permis&nbsp;?
                  <span className="mt-1 block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400">
                    Ne baissez pas les bras&nbsp;!
                  </span>
                </h2>

                <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed text-gray-200 sm:text-base">
                  Vous avez raté votre examen du permis de conduire&nbsp;? Pas de panique,
                  une solution existe. Contactez-nous dès maintenant et bénéficiez d&apos;un
                  accompagnement personnalisé pour retrouver rapidement une nouvelle date
                  d&apos;examen et mettre toutes les chances de votre côté.
                </p>

                <Link
                  href="/contact"
                  onClick={handleClose}
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-7 py-3.5 font-poppins text-sm font-semibold text-white shadow-lg shadow-pink-500/25 transition-opacity hover:opacity-90 sm:text-base"
                >
                  <Phone className="h-4 w-4" />
                  Contactez-nous dès aujourd&apos;hui&nbsp;!
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
