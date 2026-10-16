import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import WhatsAppButton from '@/components/WhatsAppButton'
import StickyMobileCTA from '@/components/StickyMobileCTA'
import ConsentBanner from '@/components/ConsentBanner'
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/seo/JsonLd'
import { createPageMetadata } from '@/lib/seo/metadata'
import { siteConfig } from '@/lib/seo/site-config'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
})

// Cible la requête principale « auto-école Nanterre ». Le mot-clé est placé en
// tête de title et de description, la marque en fin.
export const metadata: Metadata = createPageMetadata({
  title: 'Auto-école à Nanterre — permis dès 799 €, noté 4,9/5',
  description:
    'Permis B à Nanterre dès 799 € : boîte auto ou manuelle, code de la route inclus 1 an, paiement en 2 fois. 4,9/5 sur +300 avis. Rappel sous 24 h.',
  path: '/',
  keywords: ['auto-école Nanterre', 'permis accéléré Nanterre', 'auto-école CPF Nanterre', 'permis B 92'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        {/* Les traceurs (GTM, GA4, Meta Pixel, Ahrefs) ne sont plus charges ici :
            ils sont injectes par ConsentBanner uniquement apres consentement,
            conformement aux regles CNIL sur la mesure d'audience. */}
      </head>
      <body className="antialiased">
        {/* Site-wide business + website entity so every page (tarifs, contact, blog…)
            carries the LocalBusiness/DrivingSchool graph, not just the homepage. */}
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        {children}
        <WhatsAppButton />
        <StickyMobileCTA />
        <ConsentBanner />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#fff',
              color: '#363636',
              padding: '16px',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            },
            success: {
              iconTheme: {
                primary: '#10b981',
                secondary: '#fff',
              },
            },
            error: {
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  )
}
