'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, User, Phone as PhoneIcon, MapPin, Calendar, ArrowRight, CheckCircle } from 'lucide-react'

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    dateOfBirth: '',
    licenseType: 'B',
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const validateForm = () => {
    setError('')

    if (!formData.fullName.trim()) {
      setError('Nom complet requis')
      return false
    }

    if (!formData.email.trim()) {
      setError('Email requis')
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

    if (!formData.address.trim()) {
      setError('Adresse requise')
      return false
    }

    if (!formData.city.trim()) {
      setError('Ville requise')
      return false
    }

    if (!formData.dateOfBirth) {
      setError('Date de naissance requise')
      return false
    }

    return true
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)
    setError('')

    try {
      // Send data to API route
      const response = await fetch('/api/submit-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de l\'envoi')
      }

      // Show success message
      setSuccessMessage(
        'Demande envoyée avec succès ! Notre équipe vous recontactera sous 24h.'
      )

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        dateOfBirth: '',
        licenseType: 'B',
      })

      setTimeout(() => {
        setSuccessMessage('')
      }, 5000)
    } catch (error) {
      console.error('Registration error:', error)
      setError(error instanceof Error ? error.message : 'Une erreur est survenue lors de l\'envoi')
    }

    setLoading(false)
  }

  return (
    <section className="min-h-screen pt-32 pb-16 px-4 bg-[#0B0F19]">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-8 text-white text-center">
            <motion.h1
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-2"
            >
              Inscrivez-vous en ligne
            </motion.h1>
            <p className="text-white/90">
              Remplissez le formulaire — notre équipe vous recontacte sous 24 h pour finaliser votre dossier.
            </p>
          </div>

          {/* Form Content */}
          <div className="p-8 md:p-10">
            {/* Success Message */}
            {successMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-50 border border-green-200 text-green-600 rounded-lg flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p className="flex-1">{successMessage}</p>
              </motion.div>
            )}

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm"
              >
                {error}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    placeholder="Jean Dupont"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    placeholder="vous@exemple.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone *
                </label>
                <div className="relative">
                  <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Adresse *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                    placeholder="123 Rue de la Paix"
                  />
                </div>
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ville *
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  placeholder="Paris"
                />
              </div>

              {/* Date of Birth */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date de naissance *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* License Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Catégorie de permis *
                </label>
                <select
                  name="licenseType"
                  value={formData.licenseType}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                >
                  <option value="B">Catégorie B (Voiture)</option>
                  <option value="A1">Catégorie A1 (Scooter léger)</option>
                  <option value="A2">Catégorie A2 (Scooter)</option>
                  <option value="A">Catégorie A (Moto)</option>
                </select>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-8"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white/30 border-t-white" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer ma demande d'inscription
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </motion.button>

              {/* Info text */}
              <p className="text-center text-gray-600 text-sm mt-6">
                Un conseiller vous contactera sous 24 h pour confirmer votre inscription et présenter nos formules.
              </p>
            </form>
          </div>
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white text-center border border-white/20">
            <div className="text-3xl font-bold text-pink-500 mb-2">100%</div>
            <p className="text-sm text-gray-300">Formulaire sécurisé, réponse sous 24 h</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white text-center border border-white/20">
            <div className="text-3xl font-bold text-pink-500 mb-2">CPF</div>
            <p className="text-sm text-gray-300">Financement possible dès 100 €</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white text-center border border-white/20">
            <div className="text-3xl font-bold text-pink-500 mb-2">4,9/5</div>
            <p className="text-sm text-gray-300">Note moyenne de nos élèves</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
