import type { Metadata } from 'next'

import Header from '@/components/Header'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import { createPageMetadata } from '@/lib/seo/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'Contactez-nous',
  description:
    'Contactez Auto Ecole Des Paquerettes pour toute question sur nos formations de conduite. Notre équipe vous répond rapidement à Nanterre.',
  path: '/contact',
  keywords: ['contact auto-école', 'question permis de conduire'],
})

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#0B0F19] pt-20">
      <Header />
      <ContactForm />
      <Footer />
    </main>
  )
}
