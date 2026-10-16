'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image, { getImageProps } from 'next/image'
import { ArrowUpRight, X } from 'lucide-react'
import CallbackForm from './CallbackForm'
import { useScrollLock } from '@/lib/useScrollLock'
import { trackEvent } from '@/lib/analytics'
import { dismissPopup, isPopupSuppressed, markFormStarted, markPopupSeen, POPUP_LEAD_EVENT } from '@/lib/popup-session'

const DELAY_MS = 25_000
const FIELD_SELECTOR = 'input:not([type="hidden"]), textarea, select, [contenteditable="true"]'
const { props: desktopImage } = getImageProps({
  src: '/popup-image.png', width: 1585, height: 992,
  alt: 'Une élève célèbre son permis devant une voiture de l’auto-école des Pâquerettes',
  sizes: '(max-width: 767px) 100vw, (max-width: 1144px) calc(100vw - 64px), 1080px',
})
const { props: mobileImage } = getImageProps({
  src: '/popup-image-mobile.png', width: 1024, height: 1536, alt: '', sizes: '100vw',
})

export default function CPFPopup() {
  const [phase, setPhase] = useState<'waiting' | 'banner' | 'dialog' | 'closed'>('waiting')
  const dialogRef = useRef<HTMLDialogElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const isOpen = phase === 'dialog'
  useScrollLock(isOpen)

  const close = useCallback(() => {
    dismissPopup()
    setPhase('closed')
    trackEvent('popup_dismiss', { popup: 'permis-callback' })
  }, [])

  // Starting a form suppresses promotion for the session, even after blur.
  // Merely focusing a field defers the automatic trigger.
  useEffect(() => {
    const onInput = (event: Event) => {
      const target = event.target
      if (!(target instanceof Element) || !target.matches(FIELD_SELECTOR) || target.closest('[data-permis-popup]')) return
      markFormStarted()
      setPhase((current) => current === 'dialog' ? current : 'closed')
    }
    const onFocus = (event: FocusEvent) => {
      const target = event.target
      if (target instanceof Element && target.matches(FIELD_SELECTOR) && !target.closest('[data-permis-popup]')) {
        setPhase((current) => current === 'banner' ? 'closed' : current)
      }
    }
    const onLead = () => {
      // Keep the popup's own success confirmation visible.
      setPhase((current) => current === 'dialog' ? current : 'closed')
    }
    document.addEventListener('input', onInput, true)
    document.addEventListener('change', onInput, true)
    document.addEventListener('focusin', onFocus)
    window.addEventListener(POPUP_LEAD_EVENT, onLead)
    return () => {
      document.removeEventListener('input', onInput, true)
      document.removeEventListener('change', onInput, true)
      document.removeEventListener('focusin', onFocus)
      window.removeEventListener(POPUP_LEAD_EVENT, onLead)
    }
  }, [])

  useEffect(() => {
    if (phase !== 'waiting' || isPopupSuppressed()) return
    let elapsed = false
    let reachedScrollDepth = false
    let shown = false
    let interval: ReturnType<typeof setInterval> | undefined
    const check = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      if (scrollable > 0 && window.scrollY / scrollable >= 0.4) reachedScrollDepth = true
      if (shown || !elapsed || !reachedScrollDepth || document.visibilityState !== 'visible' || isPopupSuppressed()) return
      if (document.activeElement?.matches(FIELD_SELECTOR)) return
      const otherDialog = Array.from(document.querySelectorAll('[role="dialog"], dialog[open], [aria-modal="true"]'))
        .some((element) => element.getClientRects().length > 0)
      if (otherDialog || document.body.style.overflow === 'hidden') return
      shown = true
      markPopupSeen()
      const mobile = window.matchMedia('(max-width: 767px)').matches
      setPhase(mobile ? 'banner' : 'dialog')
      trackEvent('popup_view', { popup: 'permis-callback', format: mobile ? 'banner' : 'dialog' })
    }
    const timer = setTimeout(() => {
      elapsed = true
      check()
      interval = setInterval(check, 1000)
    }, DELAY_MS)
    check()
    window.addEventListener('scroll', check, { passive: true })
    document.addEventListener('visibilitychange', check)
    return () => {
      clearTimeout(timer)
      clearInterval(interval)
      window.removeEventListener('scroll', check)
      document.removeEventListener('visibilitychange', check)
    }
  }, [phase])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!isOpen || !dialog) return
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null
    dialog.showModal() // Native focus containment and inert background.
    titleRef.current?.focus({ preventScroll: true })
    return () => {
      dialog.close()
      if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true })
    }
  }, [isOpen])

  return (
    <>
      {phase === 'banner' && (
        <aside data-permis-popup aria-label="Un conseil pour votre permis" className="fixed inset-x-3 bottom-[calc(5rem+env(safe-area-inset-bottom))] z-[95] mx-auto flex max-w-md items-center gap-3 rounded-2xl border border-white/20 bg-[#141a28] p-3 pr-11 text-white shadow-2xl shadow-black/40">
          <Image src="/popup-image-mobile.png" alt="" width={64} height={80} sizes="64px" className="h-20 w-16 shrink-0 rounded-xl object-cover object-[60%_35%]" />
          <div className="min-w-0">
            <p className="font-poppins text-sm font-semibold">Bientôt vous au volant ?</p>
            <p className="mt-0.5 text-xs text-gray-400">Un conseil, sans engagement.</p>
            <button type="button" onClick={() => { setPhase('dialog'); trackEvent('popup_open', { popup: 'permis-callback', format: 'mobile' }) }} aria-haspopup="dialog" className="mt-2 inline-flex min-h-8 items-center gap-1 text-xs font-semibold text-purple-200 underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-300">
              Être rappelé gratuitement <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>
          <button type="button" onClick={close} aria-label="Fermer l’invitation" className="absolute right-1 top-1 flex h-10 w-10 items-center justify-center rounded-full text-gray-300 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-300">
            <X className="h-4 w-4" />
          </button>
        </aside>
      )}
      {isOpen && (
        <dialog ref={dialogRef} data-permis-popup aria-labelledby="permis-popup-title" aria-describedby="permis-popup-description"
          onCancel={(event) => { event.preventDefault(); close() }}
          onClick={(event) => {
            if (event.target !== event.currentTarget) return
            const bounds = event.currentTarget.getBoundingClientRect()
            if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) close()
          }}
          className="fixed inset-0 m-auto max-h-[92dvh] w-[calc(100%-1.5rem)] max-w-[1080px] overflow-y-auto overscroll-contain rounded-[24px] border border-white/15 bg-[#101520] p-0 text-white shadow-2xl backdrop:bg-[#090f1c]/65 backdrop:backdrop-blur-sm md:w-[calc(100%-4rem)] md:rounded-[32px]">
          <div className="relative isolate overflow-hidden rounded-[inherit]">
            <div className="relative h-[200px] sm:h-[240px] md:absolute md:inset-0 md:h-full">
              <picture>
                <source media="(max-width: 767px)" srcSet={mobileImage.srcSet} sizes={mobileImage.sizes} />
                {/* Different supplied crops for mobile and desktop. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img {...desktopImage} alt={desktopImage.alt} className="absolute inset-0 h-full w-full object-cover object-[center_32%] md:object-center" />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-[#101520] via-transparent to-black/10 md:bg-none" />
              <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(9,14,24,0.96)_0%,rgba(9,14,24,0.88)_32%,rgba(9,14,24,0.60)_52%,rgba(9,14,24,0.08)_76%,rgba(9,14,24,0.02)_100%)] md:block" />
            </div>
            <button type="button" onClick={close} aria-label="Fermer la fenêtre" className="absolute right-3 top-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#172033] shadow-lg transition hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-300 md:right-5 md:top-5">
              <X className="h-5 w-5" />
            </button>
            <div className="relative z-10 -mt-5 px-5 pb-6 sm:px-8 md:mt-0 md:flex md:min-h-[580px] md:w-[59%] md:flex-col md:justify-center md:px-10 md:py-12 lg:px-12">
              <p className="mb-5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80 md:mb-10">
                <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" /> Auto-école des Pâquerettes
              </p>
              <h2 ref={titleRef} tabIndex={-1} id="permis-popup-title" className="font-poppins text-[30px] font-bold leading-[1.12] tracking-tight outline-none sm:text-4xl lg:text-[46px]">
                Bientôt vous<br />au volant ?
              </h2>
              <p id="permis-popup-description" className="mb-6 mt-4 max-w-md text-sm leading-relaxed text-gray-200 md:mb-7 md:text-base">
                Budget, disponibilités, boîte auto ou manuelle : trouvons ensemble la formule qui vous correspond.
              </p>
              <CallbackForm source="popup:permis" variant="popup" />
            </div>
          </div>
        </dialog>
      )}
    </>
  )
}
