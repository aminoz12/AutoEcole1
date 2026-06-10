'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X } from 'lucide-react'
import CPFRequestForm from './CPFRequestForm'

const STORAGE_KEY = 'cpf-popup-dismissed'

export default function CPFPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return

    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  // Lock background scroll while the popup is open
  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [isOpen])

  const handleClose = () => {
    setIsOpen(false)
    sessionStorage.setItem(STORAGE_KEY, 'true')
  }

  const handleOpenForm = () => {
    setIsOpen(false)
    sessionStorage.setItem(STORAGE_KEY, 'true')
    setShowForm(true)
  }

  return (
    <>
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
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
              className="relative bg-white rounded-2xl shadow-2xl max-w-xs sm:max-w-lg w-full max-h-[90vh] overflow-y-auto p-5 sm:p-8 text-center pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={handleClose}
                className="absolute top-3 right-3 p-1.5 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label="Fermer"
              >
                <X className="h-5 w-5" />
              </button>

              <Image
                src="/cpf.svg"
                alt="Mon Compte Formation"
                width={124}
                height={86}
                className="mx-auto mb-4 h-auto w-16 sm:mb-6 sm:w-28"
              />

              <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-4 leading-tight">
                Financez votre permis avec le CPF à partir de{' '}
                <span className="text-primary">100 €</span>
              </h2>

              <p className="text-xs sm:text-base text-gray-700 mb-5 sm:mb-8 leading-relaxed">
                Salarié, indépendant, demandeur d&apos;emploi ou apprenti : utilisez vos droits
                CPF sur Mon Compte Formation pour financer tout ou partie de votre permis de
                conduire. Nous vous accompagnons dans chaque étape de la demande.
              </p>

              <button
                type="button"
                onClick={handleOpenForm}
                className="inline-block w-full sm:w-auto bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-semibold hover:opacity-90 transition-opacity shadow-lg"
              >
                M&apos;inscrire et faire ma demande CPF
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>

    <CPFRequestForm isOpen={showForm} onClose={() => setShowForm(false)} />
    </>
  )
}
