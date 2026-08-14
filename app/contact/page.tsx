import type { Metadata } from 'next'

import Header from '@/components/Header'
import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'
import Footer from '@/components/Footer'
import { createPageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'Contact auto-école Nanterre — horaires & téléphone',
  description:
    'Appelez l’auto-école Des Paquerettes à Nanterre : 01 46 49 38 90. 375 avenue de la République, bureau du lundi au samedi et conduite jusqu’à 20 h.',
  path: '/contact',
  keywords: ['contact auto-école Nanterre', 'adresse auto-école Nanterre', 'téléphone auto-école 92'],
})

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#0B0F19] pt-20">
      <Header />
      <ContactForm />
      <ContactInfo />
      <Footer />
    </main>
  )
}
