import type { Metadata } from 'next'
import { Suspense } from 'react'

import Header from '@/components/Header'
import RegistrationForm from '@/components/RegistrationForm'
import Footer from '@/components/Footer'
import { createPageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'Inscription en ligne — rappel sous 24 h',
  description:
    'Pré-inscription au permis en 30 secondes : nom, téléphone, formule. Un conseiller vous rappelle sous 24 h ouvrées. Sans engagement, à partir de 799 €.',
  path: '/s-inscrire',
  keywords: ['inscription auto-école Nanterre', 'inscription permis en ligne', 's’inscrire permis de conduire 92'],
})

export default function SInscrire() {
  return (
    <main className="min-h-screen bg-[#0B0F19] pt-20">
      <Header />
      {/* Suspense requis : RegistrationForm lit ?formule= via useSearchParams */}
      <Suspense fallback={<div className="min-h-screen bg-[#0B0F19]" />}>
        <RegistrationForm />
      </Suspense>
      <Footer />
    </main>
  )
}
