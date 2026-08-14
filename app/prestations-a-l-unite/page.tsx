import type { Metadata } from 'next'

import Header from '@/components/Header'
import PackWebContent from '@/components/PackWebContent'
import Footer from '@/components/Footer'
import { createPageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'Code de la route en ligne — Pack Web',
  description:
    'Révisez le code de la route en ligne depuis Nanterre : cours, séries de questions et tests d’entraînement accessibles sur smartphone, tablette et ordinateur, en accès illimité.',
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
