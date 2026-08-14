import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import WhatsAppButton from '@/components/WhatsAppButton'
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
  title: 'Auto-école à Nanterre — Permis B dès 899 € | Des Pâquerettes',
  description:
    'Auto-école à Nanterre (92) : permis B boîte manuelle ou automatique, formation accélérée, code de la route et financement CPF. Forfait 20h dès 899 €, 4,9/5 sur Google.',
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
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5X3WZNWF');
          `}
        </Script>

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4PRT0D2ZX6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4PRT0D2ZX6');
          `}
        </Script>

        {/* Ahrefs Analytics */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="+X78nAL97Jv1QUgZW6I5xQ"
          strategy="afterInteractive"
        />
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5X3WZNWF"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* Site-wide business + website entity so every page (tarifs, contact, blog…)
            carries the LocalBusiness/DrivingSchool graph, not just the homepage. */}
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        {children}
        <WhatsAppButton />
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
