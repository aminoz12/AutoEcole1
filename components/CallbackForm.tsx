'use client'

import { useState } from 'react'
import { Phone as PhoneIcon, User, CheckCircle, ArrowRight } from 'lucide-react'
import { trackLead } from '@/lib/analytics'

interface CallbackFormProps {
  /** Where the form is embedded, e.g. "city:argenteuil" or "blog" — sent in the email + analytics */
  source: string
  /** Compact variant for sidebars (default false) */
  compact?: boolean
  title?: string
  subtitle?: string
}

// Mini-formulaire « on vous rappelle » : 2 champs seulement, pensé pour
// convertir les visiteurs SEO là où ils atterrissent (pages villes, blog)
// sans les renvoyer vers le formulaire d'inscription complet.
export default function CallbackForm({
  source,
  compact = false,
  title = 'On vous rappelle gratuitement',
  subtitle = 'Laissez votre numéro — un conseiller vous rappelle sous 24 h ouvrées pour répondre à vos questions.',
}: CallbackFormProps) {
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    if (!fullName.trim()) {
      setError('Votre prénom ou nom est requis')
      return
    }
    if (!/^(\+33|0)[1-9]([ .-]?\d{2}){4}$/.test(phone.trim())) {
      setError('Numéro de téléphone invalide (ex : 06 12 34 56 78)')
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName: fullName.trim(), phone: phone.trim(), source }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.error || "Erreur lors de l'envoi")

      trackLead('callback', { source })
      setSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue, réessayez ou appelez-nous.')
    }
    setLoading(false)
  }

  if (success) {
    return (
      <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-6 text-center">
        <CheckCircle className="mx-auto mb-3 h-8 w-8 text-green-400" />
        <p className="font-poppins font-semibold text-white">Demande bien reçue !</p>
        <p className="mt-1 text-sm text-gray-300">
          Un conseiller vous rappelle sous 24 h ouvrées.
        </p>
      </div>
    )
  }

  return (
    <div className={`rounded-2xl border border-purple-500/30 bg-gradient-to-br from-[#151b2e] to-[#1a1030] ${compact ? 'p-5' : 'p-6 sm:p-8'}`}>
      <h3 className={`font-poppins font-bold text-white ${compact ? 'text-lg' : 'text-xl sm:text-2xl'}`}>
        {title}
      </h3>
      <p className="mt-2 text-sm text-gray-400">{subtitle}</p>

      {error && (
        <p className="mt-3 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-300">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className={`mt-4 gap-3 ${compact ? 'flex flex-col' : 'flex flex-col sm:flex-row sm:items-stretch'}`}>
        <div className="relative flex-1">
          <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Votre prénom"
            autoComplete="name"
            className="w-full rounded-full border border-white/15 bg-[#0B0F19] py-3 pl-9 pr-4 text-sm text-white placeholder-gray-500 focus:border-transparent focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="relative flex-1">
          <PhoneIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="06 12 34 56 78"
            autoComplete="tel"
            inputMode="tel"
            className="w-full rounded-full border border-white/15 bg-[#0B0F19] py-3 pl-9 pr-4 text-sm text-white placeholder-gray-500 focus:border-transparent focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 font-poppins text-sm font-semibold text-white shadow-lg shadow-pink-500/25 transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? (
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          ) : (
            <>
              Être rappelé(e)
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </form>

      <p className="mt-3 text-xs text-gray-500">
        Gratuit et sans engagement. Vos coordonnées ne sont jamais partagées.
      </p>
    </div>
  )
}
