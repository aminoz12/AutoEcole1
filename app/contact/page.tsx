import type { Metadata } from 'next'

import Header from '@/components/Header'
import ContactForm from '@/components/ContactForm'
import ContactInfo from '@/components/ContactInfo'
import Footer from '@/components/Footer'
import { createPageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'Contact et horaires — auto-école Nanterre',
  description:
    'Auto École Des Pâquerettes, 375 av. de la République à Nanterre. Tél. 01 46 49 38 90, du lundi au samedi. Conduite jusqu’à 20 h. Devis gratuit.',
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
