'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, MessageCircle } from 'lucide-react'
import { siteConfig } from '@/lib/seo/site-config'
import { trackEvent } from '@/lib/analytics'

// Barre d'action fixe en bas d'écran sur mobile : pour une auto-école locale,
// l'appel est le premier canal de conversion — il doit être accessible en un
// tap depuis n'importe quelle page.
export default function StickyMobileCTA() {
  const pathname = usePathname()

  // Pas de barre sur la page de confirmation ni dans l'admin/dashboard
  if (
    pathname === '/merci' ||
    pathname.startsWith('/admin') ||
    pathname.startsWith('/dashboard') ||
    pathname.startsWith('/auth')
  ) {
    return null
  }

  const onRegistrationPage = pathname === '/s-inscrire'
  const whatsappHref = `https://wa.me/${siteConfig.whatsapp.replace('+', '')}?text=${encodeURIComponent(
    'Bonjour, je souhaite des renseignements sur vos formations permis.'
  )}`

  return (
    <>
      {/* Spacer so the fixed bar never hides footer content */}
      <div className="h-16 md:hidden" aria-hidden="true" />

      <div className="fixed inset-x-0 bottom-0 z-[90] border-t border-white/10 bg-[#0B0F19]/95 backdrop-blur-md md:hidden">
        <div className="grid h-16 grid-cols-3 items-stretch gap-px">
          <a
            href={`tel:${siteConfig.phoneTel}`}
            onClick={() => trackEvent('phone_click', { location: 'sticky_bar' })}
            className="flex flex-col items-center justify-center gap-0.5 text-white active:bg-white/10"
          >
            <Phone className="h-5 w-5 text-green-400" />
            <span className="text-[11px] font-semibold">Appeler</span>
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent('whatsapp_click', { location: 'sticky_bar' })}
            className="flex flex-col items-center justify-center gap-0.5 text-white active:bg-white/10"
          >
            <MessageCircle className="h-5 w-5 text-[#25D366]" />
            <span className="text-[11px] font-semibold">WhatsApp</span>
          </a>
          {onRegistrationPage ? (
            <a
              href="#registration-form"
              className="flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600 text-white"
            >
              <span className="text-sm font-bold leading-tight">Je commence</span>
              <span className="text-[11px] font-semibold leading-tight text-white/85">dès 799 €</span>
            </a>
          ) : (
            <Link
              href="/s-inscrire"
              onClick={() => trackEvent('cta_click', { location: 'sticky_bar', target: 's-inscrire' })}
              className="flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600 text-white"
            >
              <span className="text-sm font-bold leading-tight">Je commence</span>
              <span className="text-[11px] font-semibold leading-tight text-white/85">dès 799 €</span>
            </Link>
          )}
        </div>
        {/* iOS safe-area */}
        <div className="h-[env(safe-area-inset-bottom)] bg-[#0B0F19]" />
      </div>
    </>
  )
}
