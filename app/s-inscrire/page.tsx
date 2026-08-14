import type { Metadata } from 'next'

import Header from '@/components/Header'

import RegistrationForm from '@/components/RegistrationForm'

import Footer from '@/components/Footer'

import { createPageMetadata } from '@/lib/seo/metadata'



export const metadata: Metadata = createPageMetadata({

  title: 'Inscription au permis à Nanterre — en ligne',

  description:

    'Inscrivez-vous au permis de conduire à Nanterre en quelques minutes : permis B boîte manuelle ou automatique et formule accélérée. CPF selon éligibilité. Nous ouvrons votre dossier ANTS.',

  path: '/s-inscrire',

  keywords: ['inscription auto-école Nanterre', 'inscription permis en ligne', 's’inscrire permis de conduire 92'],

})



export default function SInscrire() {

  return (

    <main className="min-h-screen bg-[#0B0F19] pt-20">

      <Header />

      <RegistrationForm />

      <Footer />

    </main>

  )

}

