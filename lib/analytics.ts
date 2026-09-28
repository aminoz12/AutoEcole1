// Lightweight GTM/GA4 event helper. Every conversion-relevant interaction
// funnels through here so GTM triggers and GA4 conversions can be configured
// against a stable set of event names:
//   generate_lead   — a form was successfully submitted (params: form, formule?)
//   phone_click     — a tel: link was tapped (params: location)
//   whatsapp_click  — the WhatsApp CTA was tapped (params: location)
//   cta_click       — a notable CTA was clicked (params: location, target)

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
  }
}

// Miroir Meta Pixel : nos événements de conversion sont renvoyés au pixel
// sous leurs noms standard Meta, pour que les campagnes Facebook/Instagram
// puissent optimiser sur les leads et pas seulement les PageView.
const META_EVENT_MAP: Record<string, string> = {
  generate_lead: 'Lead',
  phone_click: 'Contact',
  whatsapp_click: 'Contact',
}

export function trackEvent(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === 'undefined') return
  // For GTM (custom-event triggers, if ever configured there)
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...params })
  // Straight to GA4 (G-4PRT0D2ZX6 is configured via gtag in layout.tsx) — the
  // events show up in GA4 with no GTM configuration. If GA4 event tags are
  // ever added in GTM for these same events, remove this line to avoid
  // double counting.
  window.gtag?.('event', event, params)
  // Meta Pixel (init in layout.tsx)
  const metaEvent = META_EVENT_MAP[event]
  if (metaEvent) window.fbq?.('track', metaEvent, params)
}

export function trackLead(form: string, params: Record<string, unknown> = {}) {
  trackEvent('generate_lead', { form, ...params })
}
