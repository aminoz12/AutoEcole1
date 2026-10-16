'use client'

import { useState } from 'react'
import { Phone as PhoneIcon, User, CheckCircle, ArrowRight, Star, ShieldCheck } from 'lucide-react'
import { trackLead, trackEvent } from '@/lib/analytics'
import { siteConfig } from '@/lib/seo/site-config'
import { isValidFrenchPhone, formatPhone } from '@/lib/phone'

interface CallbackFormProps {
  /** Where the form is embedded, e.g. "city:argenteuil" or "blog" — sent in the email + analytics */
  source: string
  /** Compact variant for sidebars (default false) */
  compact?: boolean
  title?: string
  subtitle?: string
  /** Photo popup: the surrounding dialog supplies its heading and copy. */
  variant?: 'default' | 'popup'
}

// Mini-formulaire « on vous rappelle » : 2 champs seulement, pensé pour
// convertir les visiteurs SEO là où ils atterrissent (pages villes, blog)
// sans les renvoyer vers le formulaire d'inscription complet.
export default function CallbackForm({
  source,
  compact = false,
  title = 'On vous rappelle gratuitement',
  subtitle = 'Laissez votre numéro — un conseiller vous rappelle sous 24 h ouvrées pour répondre à vos questions.',
  variant = 'default',
}: CallbackFormProps) {
  const isPopup = variant === 'popup'
  const inputClass = isPopup
    ? 'w-full rounded-full border border-white/30 bg-[#0B0F19]/80 py-3.5 pl-9 pr-4 text-base text-white placeholder-gray-400 outline-none backdrop-blur-md focus:border-purple-300 focus:ring-2 focus:ring-purple-400/50'
    : 'w-full rounded-full border border-white/15 bg-[#0B0F19] py-3 pl-9 pr-4 text-sm text-white placeholder-gray-500 focus:border-transparent focus:ring-2 focus:ring-purple-500'
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
    if (!isValidFrenchPhone(phone)) {
      setError('Numéro de téléphone invalide (ex : 06 12 34 56 78)')
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/callback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName: fullName.trim(), phone: formatPhone(phone), source }),
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
      <div role="status" className="rounded-2xl border border-green-500/30 bg-[#10251f]/95 p-6 text-center">
        <CheckCircle className="mx-auto mb-3 h-8 w-8 text-green-400" />
        <p className="font-poppins font-semibold text-white">Demande bien reçue !</p>
        <p className="mt-1 text-sm text-gray-300">
          Un conseiller vous rappelle sous 24 h ouvrées, depuis le {siteConfig.phone}.
        </p>
        <p className="mt-3 text-xs text-gray-400">
          Besoin d’une réponse tout de suite ? Appelez-nous directement.
        </p>
      </div>
    )
  }

  return (
    <div className={isPopup ? '' : `rounded-2xl border border-purple-500/30 bg-gradient-to-br from-[#151b2e] to-[#1a1030] ${compact ? 'p-5' : 'p-6 sm:p-8'}`}>
      {!isPopup && <>
      <h3 className={`font-poppins font-bold text-white ${compact ? 'text-lg' : 'text-xl sm:text-2xl'}`}>
        {title}
      </h3>
      <p className="mt-2 text-sm text-gray-400">{subtitle}</p>

      {/* Preuve sociale juste au-dessus des champs : c'est l’endroit
          où le visiteur décide de donner son numéro ou non. */}
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-400">
        <span className="inline-flex items-center gap-1.5">
          <span className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-[#FBBC05] text-[#FBBC05]" />
            ))}
          </span>
          <strong className="text-white">4,9/5</strong> sur +300 avis Google
        </span>
        <span className="inline-flex items-center gap-1.5">
          <ShieldCheck className="h-3.5 w-3.5 text-green-400" />
          451 permis obtenus
        </span>
      </div>
      </>}

      {error && (
        <p role="alert" className="mt-3 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-300">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className={`gap-3 ${isPopup ? 'grid grid-cols-1 sm:grid-cols-2' : `mt-4 ${compact ? 'flex flex-col' : 'flex flex-col sm:flex-row sm:items-stretch'}`}`}>
        <div className="relative flex-1">
          <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            aria-label="Votre prénom"
            name="fullName"
            required
            maxLength={100}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Votre prénom"
            autoComplete="name"
            className={inputClass}
          />
        </div>
        <div className="relative flex-1">
          <PhoneIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <input
            type="tel"
            aria-label="Votre téléphone"
            name="phone"
            required
            maxLength={25}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="06 12 34 56 78"
            autoComplete="tel"
            inputMode="tel"
            className={inputClass}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          aria-busy={loading}
          className={`flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-poppins text-sm font-semibold shadow-lg transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-300 disabled:cursor-not-allowed disabled:opacity-50 ${isPopup ? 'sm:col-span-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-pink-500/40 ring-1 ring-white/20' : 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-pink-500/25'}`}
        >
          {loading ? (
            <><span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" /> Envoi en cours…</>
          ) : (
            <>
              {isPopup ? 'Être rappelé gratuitement' : 'Être rappelé(e)'}
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </form>

      {isPopup ? <p className="mt-4 text-center text-xs leading-relaxed text-gray-300">
        Sans engagement · Rappel sous 24 h ouvrées
        <span className="mt-1 block text-gray-400">Vos coordonnées servent à vous recontacter.{' '}
          <a href="/mentions-legales" className="underline underline-offset-2 hover:text-white">Confidentialité</a>
        </span>
      </p> : <>
      <p className="mt-3 text-xs text-gray-500">
        Gratuit et sans engagement · Aucune carte bancaire · Vos coordonnées ne sont jamais partagées.
      </p>
      </>}
      <p className={`mt-2 text-xs ${isPopup ? 'text-center text-gray-300' : 'text-gray-500'}`}>
        Vous préférez appeler ?{' '}
        <a
          href={`tel:${siteConfig.phoneTel}`}
          onClick={() => trackEvent('phone_click', { location: `callback:${source}` })}
          className="font-semibold text-purple-300 underline-offset-4 hover:text-white hover:underline"
        >
          {siteConfig.phone}
        </a>
      </p>
    </div>
  )
}
