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
  }
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
}

export function trackLead(form: string, params: Record<string, unknown> = {}) {
  trackEvent('generate_lead', { form, ...params })
}
