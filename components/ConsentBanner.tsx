'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { Cookie } from 'lucide-react'

// Bandeau de consentement (RGPD / CNIL). Les traceurs ne sont charges
// qu'apres acceptation : avant cela, aucun script GTM, GA4, Meta ou Ahrefs
// n'est injecte. Le refus est aussi simple que l'acceptation, comme l'exige
// la CNIL, et le choix est memorise 6 mois.
const STORAGE_KEY = 'cookie-consent-v1'
const SIX_MONTHS_MS = 1000 * 60 * 60 * 24 * 182

type Choice = 'granted' | 'denied' | null

function readStoredChoice(): Choice {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const { value, at } = JSON.parse(raw) as { value: Choice; at: number }
    if (!at || Date.now() - at > SIX_MONTHS_MS) return null
    return value === 'granted' || value === 'denied' ? value : null
  } catch {
    return null
  }
}

export default function ConsentBanner() {
  const [choice, setChoice] = useState<Choice>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    setChoice(readStoredChoice())
    setReady(true)
  }, [])

  const decide = (value: Exclude<Choice, null>) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ value, at: Date.now() }))
    } catch {
      /* navigation privee : le choix vaut pour la session */
    }
    setChoice(value)
  }

  if (!ready) return null

  return (
    <>
      {choice === 'granted' && <TrackingScripts />}

      {choice === null && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Gestion des cookies"
          className="fixed inset-x-0 bottom-0 z-[200] border-t border-white/10 bg-[#0B0F19]/98 p-4 backdrop-blur-md md:bottom-4 md:left-4 md:right-auto md:max-w-md md:rounded-2xl md:border"
        >
          <div className="mx-auto flex max-w-3xl flex-col gap-3">
            <div className="flex items-start gap-3">
              <Cookie className="mt-0.5 h-5 w-5 shrink-0 text-purple-400" />
              <p className="text-sm leading-relaxed text-gray-300">
                Nous utilisons des cookies de mesure d&apos;audience pour comprendre
                comment notre site est utilise. Vous pouvez refuser sans perdre
                l&apos;acces au site.{' '}
                <Link
                  href="/mentions-legales"
                  className="text-purple-300 underline-offset-4 hover:text-white hover:underline"
                >
                  En savoir plus
                </Link>
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => decide('denied')}
                className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Refuser
              </button>
              <button
                type="button"
                onClick={() => decide('granted')}
                className="rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-pink-500/25 transition-opacity hover:opacity-90"
              >
                Accepter
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Les mentions legales doivent permettre de revenir sur son choix */}
      <button
        type="button"
        id="reopen-cookie-consent"
        hidden
        onClick={() => {
          try {
            localStorage.removeItem(STORAGE_KEY)
          } catch {
            /* ignore */
          }
          setChoice(null)
        }}
      />
    </>
  )
}

function TrackingScripts() {
  return (
    <>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-5X3WZNWF');`}
      </Script>

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-4PRT0D2ZX6" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-4PRT0D2ZX6');`}
      </Script>

      <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1738889900556313');
        fbq('track', 'PageView');`}
      </Script>

      <Script
        src="https://analytics.ahrefs.com/analytics.js"
        data-key="+X78nAL97Jv1QUgZW6I5xQ"
        strategy="afterInteractive"
      />
    </>
  )
}
