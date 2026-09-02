import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Phone, MessageCircle, Clock } from 'lucide-react'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { createPageMetadata } from '@/lib/seo/metadata'
import { siteConfig } from '@/lib/seo/site-config'

// Page de confirmation après soumission d'un formulaire. Sert aussi de point
// de conversion propre : configurer GA4/Ads sur l'événement `generate_lead`
// (déjà poussé au submit) ou sur la page vue /merci.
export const metadata: Metadata = createPageMetadata({
  title: 'Demande envoyée — merci !',
  description: 'Votre demande a bien été envoyée. Un conseiller vous recontacte sous 24 h ouvrées.',
  path: '/merci',
  noIndex: true,
})

export default function MerciPage() {
  const whatsappHref = `https://wa.me/${siteConfig.whatsapp.replace('+', '')}?text=${encodeURIComponent(
    'Bonjour, je viens d’envoyer une demande sur votre site.'
  )}`

  return (
    <main className="min-h-screen bg-[#0B0F19] pt-20">
      <Header />

      <section className="px-4 py-16 sm:py-24">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/15">
            <CheckCircle className="h-10 w-10 text-green-400" />
          </div>

          <h1 className="font-poppins text-3xl font-extrabold text-white sm:text-4xl">
            Merci, votre demande est bien envoyée !
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-gray-400">
            Un conseiller de l&apos;Auto École Des Pâquerettes vous recontacte{' '}
            <strong className="text-white">sous 24 h ouvrées</strong> pour finaliser votre dossier
            et répondre à toutes vos questions.
          </p>

          <div className="mx-auto mt-10 grid max-w-lg gap-4 text-left sm:grid-cols-1">
            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-purple-400" />
              <div>
                <div className="font-poppins font-semibold text-white">Et maintenant ?</div>
                <p className="mt-1 text-sm text-gray-400">
                  Gardez votre téléphone à portée de main — nous appelons depuis le{' '}
                  {siteConfig.phone}. Préparez vos questions sur les formules et le planning.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-10 text-sm text-gray-400">Une question urgente ? Contactez-nous directement :</p>
          <div className="mt-4 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${siteConfig.phoneTel}`}
              className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3.5 font-poppins font-semibold text-white shadow-lg shadow-pink-500/25 transition-opacity hover:opacity-90"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 font-poppins font-semibold text-white transition hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366]" />
              WhatsApp
            </a>
          </div>

          <Link
            href="/"
            className="mt-10 inline-block text-sm text-gray-500 underline-offset-4 hover:text-gray-300 hover:underline"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
