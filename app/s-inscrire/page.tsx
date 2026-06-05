import type { Metadata } from 'next'

import Header from '@/components/Header'

import RegistrationForm from '@/components/RegistrationForm'

import Footer from '@/components/Footer'

import { createPageMetadata } from '@/lib/seo/metadata'



export const metadata: Metadata = createPageMetadata({

  title: 'Inscription en ligne',

  description:

    'Inscrivez-vous à Auto Ecole Des Paquerettes en quelques minutes. Demande de permis B, boîte manuelle ou automatique à Nanterre. Réponse rapide de notre équipe.',

  path: '/s-inscrire',

  keywords: ['inscription auto-école', 'demande permis de conduire en ligne'],

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

