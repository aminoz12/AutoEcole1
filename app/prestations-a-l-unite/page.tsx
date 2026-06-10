import type { Metadata } from 'next'

import Header from '@/components/Header'
import PackWebContent from '@/components/PackWebContent'
import Footer from '@/components/Footer'
import { createPageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'Pack Web — Code de la route en ligne',
  description:
    'Révisez le code de la route en ligne avec le Pack Web Auto Ecole Des Paquerettes : plus de 2000 questions, cours et tests d’entraînement accessibles sur smartphone, tablette et ordinateur.',
  path: '/prestations-a-l-unite',
  keywords: ['code de la route en ligne', 'pack web code', 'réviser le code Nanterre'],
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
