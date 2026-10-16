import type { Metadata } from 'next'

import Header from '@/components/Header'
import PackWebContent from '@/components/PackWebContent'
import Footer from '@/components/Footer'
import { createPageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'Code de la route en ligne dès 10 €',
  description:
    'Révisez le code où vous voulez : plus de 2 000 questions, tests d’entraînement et cours en ligne. 10 € le mois ou 29 € en accès illimité, sans date limite.',
  path: '/prestations-a-l-unite',
  keywords: ['code de la route en ligne', 'réviser le code Nanterre', 'entraînement code de la route', 'pack web code'],
})

export default function PrestationsPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <Header />
      <PackWebContent />
      <Footer />
    </main>
  )
}
