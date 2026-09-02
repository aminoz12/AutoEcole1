'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { User, Phone as PhoneIcon, Mail, ArrowRight, Star, ShieldCheck, Clock, Lock } from 'lucide-react'
import { trackLead } from '@/lib/analytics'

// Le formulaire ne demande que l'essentiel pour déclencher un rappel :
// nom + téléphone + formule (email facultatif). Adresse, date de naissance et
// pièces du dossier sont collectées ensuite, au téléphone — chaque champ
// supplémentaire ici coûte des leads.
const LICENSE_OPTIONS = [
  'Boîte Automatique',
  'Boîte Manuelle',
] as const

// Mapping des catégories tarifs → valeur du select, pour pré-remplir la
// formule quand l'élève arrive depuis une carte de prix (?formule=...).
// Le détail du pack (Permis B 20H, AAC…) arrive via ?pack=.
const FORMULE_PARAM_MAP: Record<string, (typeof LICENSE_OPTIONS)[number]> = {
  auto: 'Boîte Automatique',
  manuelle: 'Boîte Manuelle',
}

export default function RegistrationForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    licenseType: 'Boîte Automatique' as string,
  })
  const [packName, setPackName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Pré-sélection de la formule depuis la carte de prix cliquée
  useEffect(() => {
    const formule = searchParams.get('formule')
    const pack = searchParams.get('pack')
    if (formule && FORMULE_PARAM_MAP[formule]) {
      setFormData((prev) => ({ ...prev, licenseType: FORMULE_PARAM_MAP[formule] }))
    }
    if (pack) setPackName(pack)
  }, [searchParams])

  const validateForm = () => {
    setError('')

    if (!formData.fullName.trim()) {
      setError('Votre nom est requis')
      return false
    }

    if (!/^(\+33|0)[1-9]([ .-]?\d{2}){4}$/.test(formData.phone.trim())) {
      setError('Numéro de téléphone invalide (ex : 06 12 34 56 78)')
      return false
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Email invalide')
      return false
    }

    return true
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/submit-registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          licenseType: packName
            ? `${formData.licenseType} — ${packName}`
            : formData.licenseType,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Erreur lors de l'envoi")
      }

      trackLead('inscription', { formule: formData.licenseType, pack: packName || undefined })
      router.push('/merci')
      return
    } catch (error) {
      console.error('Registration error:', error)
      setError(error instanceof Error ? error.message : "Une erreur est survenue lors de l'envoi")
      setLoading(false)
    }
  }

  return (
    <section id="registration-form" className="min-h-screen bg-[#0B0F19] px-4 pb-16 pt-32">
      <div className="container mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden rounded-2xl bg-white shadow-2xl"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-8 text-center text-white">
            <h1 className="mb-2 text-3xl font-bold md:text-4xl">Pré-inscription en ligne</h1>
            <p className="text-white/90">
              30 secondes suffisent — un conseiller vous rappelle sous 24 h ouvrées.
            </p>
            {/* Preuve sociale au point de décision */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm">
              <span className="font-bold">4,9</span>
              <span className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-[#FBBC05] text-[#FBBC05]" />
                ))}
              </span>
              <span>+ de 300 avis Google</span>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-8 md:p-10">
            {packName && (
              <div className="mb-6 rounded-lg border border-purple-200 bg-purple-50 px-4 py-3 text-sm text-purple-800">
                Formule choisie : <strong>{packName}</strong>
              </div>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-600"
              >
                {error}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Nom complet *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    autoComplete="name"
                    className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 transition-all focus:border-transparent focus:ring-2 focus:ring-pink-500"
                    placeholder="Jean Dupont"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Téléphone *
                </label>
                <div className="relative">
                  <PhoneIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                    inputMode="tel"
                    className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 transition-all focus:border-transparent focus:ring-2 focus:ring-pink-500"
                    placeholder="06 12 34 56 78"
                  />
                </div>
                <p className="mt-1.5 text-xs text-gray-500">
                  C&apos;est sur ce numéro que notre conseiller vous rappelle.
                </p>
              </div>

              {/* License Type */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Boîte souhaitée *
                </label>
                <select
                  name="licenseType"
                  value={formData.licenseType}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 transition-all focus:border-transparent focus:ring-2 focus:ring-pink-500"
                >
                  {LICENSE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <p className="mt-1.5 text-xs text-gray-500">
                  Pas sûr(e) de votre choix ? Pas grave — on en parle ensemble au téléphone.
                </p>
              </div>

              {/* Email (optional) */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email <span className="font-normal text-gray-400">(facultatif)</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 transition-all focus:border-transparent focus:ring-2 focus:ring-pink-500"
                    placeholder="vous@exemple.com"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                type="submit"
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 py-3.5 text-base font-semibold text-white transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Être rappelé(e) sous 24 h
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </motion.button>

              {/* Réassurance au point de commitment */}
              <div className="mt-6 grid grid-cols-1 gap-2 text-xs text-gray-500 sm:grid-cols-3">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-green-500" />
                  Sans engagement
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 shrink-0 text-green-500" />
                  Rappel sous 24 h ouvrées
                </div>
                <div className="flex items-center gap-1.5">
                  <Lock className="h-4 w-4 shrink-0 text-green-500" />
                  Données confidentielles
                </div>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
