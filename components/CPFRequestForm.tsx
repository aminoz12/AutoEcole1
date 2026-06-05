'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import {
  X,
  User,
  Mail,
  Phone as PhoneIcon,
  Briefcase,
  Car,
  ArrowRight,
  CheckCircle,
} from 'lucide-react'

interface CPFRequestFormProps {
  isOpen: boolean
  onClose: () => void
}

const initialData = {
  fullName: '',
  email: '',
  phone: '',
  status: '',
  licenseType: 'B',
  message: '',
}

export default function CPFRequestForm({ isOpen, onClose }: CPFRequestFormProps) {
  const [formData, setFormData] = useState(initialData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    setError('')

    if (!formData.fullName.trim()) {
      setError('Nom complet requis')
      return false
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError('Email invalide')
      return false
    }
    if (!formData.phone.trim()) {
      setError('Numéro de téléphone requis')
      return false
    }
    if (!formData.status) {
      setError('Veuillez sélectionner votre statut')
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validateForm()) return

    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/cpf-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de l\'envoi')
      }

      setSuccessMessage(
        'Demande CPF envoyée avec succès ! Notre équipe vous recontactera sous 24h pour vous accompagner.'
      )
      setFormData(initialData)
    } catch (err) {
      console.error('CPF request error:', err)
      setError(err instanceof Error ? err.message : 'Une erreur est survenue lors de l\'envoi')
    }

    setLoading(false)
  }

  const handleClose = () => {
    setError('')
    setSuccessMessage('')
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="fixed inset-0 z-[81] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white shadow-2xl pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={handleClose}
                className="absolute right-4 top-4 z-10 rounded-full bg-white/20 p-1 text-white hover:bg-white/30 transition-colors"
                aria-label="Fermer"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Header */}
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-6 text-center text-white">
                <Image
                  src="/cpf.svg"
                  alt="Mon Compte Formation"
                  width={96}
                  height={66}
                  className="mx-auto mb-3 rounded-md bg-white/95 p-1.5"
                />
                <h2 className="font-poppins text-2xl font-bold">Faire ma demande CPF</h2>
                <p className="mt-1 text-sm text-white/90">
                  Financez votre permis dès 100 €. Remplissez ce formulaire, on s&apos;occupe du reste.
                </p>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8">
                {successMessage ? (
                  <div className="flex flex-col items-center gap-4 py-6 text-center">
                    <CheckCircle className="h-12 w-12 text-green-500" />
                    <p className="leading-relaxed text-gray-700">{successMessage}</p>
                    <button
                      type="button"
                      onClick={handleClose}
                      className="mt-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-2.5 font-semibold text-white hover:opacity-90 transition-opacity"
                    >
                      Fermer
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                      <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600">
                        {error}
                      </div>
                    )}

                    {/* Full name */}
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-gray-700">
                        Nom complet *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 transition-all focus:border-transparent focus:ring-2 focus:ring-pink-500"
                          placeholder="Jean Dupont"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-gray-700">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 transition-all focus:border-transparent focus:ring-2 focus:ring-pink-500"
                          placeholder="vous@exemple.com"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-gray-700">
                        Téléphone *
                      </label>
                      <div className="relative">
                        <PhoneIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 transition-all focus:border-transparent focus:ring-2 focus:ring-pink-500"
                          placeholder="06 12 34 56 78"
                        />
                      </div>
                    </div>

                    {/* Status */}
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-gray-700">
                        Votre statut *
                      </label>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        <select
                          name="status"
                          value={formData.status}
                          onChange={handleChange}
                          className="w-full appearance-none rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 transition-all focus:border-transparent focus:ring-2 focus:ring-pink-500"
                        >
                          <option value="">Sélectionnez…</option>
                          <option value="Salarié">Salarié(e)</option>
                          <option value="Indépendant">Indépendant(e)</option>
                          <option value="Demandeur d'emploi">Demandeur d&apos;emploi</option>
                          <option value="Apprenti">Apprenti(e)</option>
                          <option value="Autre">Autre</option>
                        </select>
                      </div>
                    </div>

                    {/* License type */}
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-gray-700">
                        Catégorie de permis
                      </label>
                      <div className="relative">
                        <Car className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        <select
                          name="licenseType"
                          value={formData.licenseType}
                          onChange={handleChange}
                          className="w-full appearance-none rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 transition-all focus:border-transparent focus:ring-2 focus:ring-pink-500"
                        >
                          <option value="B">Catégorie B (Voiture)</option>
                          <option value="A1">Catégorie A1 (Scooter léger)</option>
                          <option value="A2">Catégorie A2 (Scooter)</option>
                          <option value="A">Catégorie A (Moto)</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-gray-700">
                        Message (facultatif)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 transition-all focus:border-transparent focus:ring-2 focus:ring-pink-500"
                        placeholder="Une question ? Précisez votre demande…"
                      />
                    </div>

                    {/* Submit */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={loading}
                      type="submit"
                      className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 py-3 font-semibold text-white transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {loading ? (
                        <>
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          Envoi en cours…
                        </>
                      ) : (
                        <>
                          Envoyer ma demande CPF
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </motion.button>

                    <p className="text-center text-xs text-gray-500">
                      Un conseiller vous recontacte sous 24h pour vous accompagner dans votre démarche.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
