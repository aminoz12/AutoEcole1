// No personal data is stored here: only display/interaction flags and timestamps.
const SEEN_KEY = 'permis-popup-seen'
const DISMISSED_KEY = 'permis-popup-dismissed-at'
const LEAD_KEY = 'permis-popup-lead-at'
const FORM_KEY = 'permis-popup-form-started'
export const POPUP_LEAD_EVENT = 'permis:lead-submitted'
export const POPUP_COOLDOWN_MS = 7 * 24 * 60 * 60 * 1000

let seen = false
let formStarted = false
let converted = false

function read(storage: 'localStorage' | 'sessionStorage', key: string) {
  try { return window[storage].getItem(key) } catch { return null }
}

function write(storage: 'localStorage' | 'sessionStorage', key: string, value: string) {
  try { window[storage].setItem(key, value) } catch { /* In-memory flags still apply. */ }
}

export function isPopupSuppressed() {
  if (seen || formStarted || converted) return true
  if (read('sessionStorage', SEEN_KEY) || read('sessionStorage', FORM_KEY) || read('sessionStorage', 'offre-permis-popup-dismissed')) return true
  return [DISMISSED_KEY, LEAD_KEY].some((key) => {
    const timestamp = Number(read('localStorage', key))
    return timestamp > 0 && Date.now() - timestamp < POPUP_COOLDOWN_MS
  })
}

export function markPopupSeen() {
  seen = true
  write('sessionStorage', SEEN_KEY, 'true')
}

export function dismissPopup() {
  markPopupSeen()
  write('localStorage', DISMISSED_KEY, String(Date.now()))
}

export function markFormStarted() {
  formStarted = true
  write('sessionStorage', FORM_KEY, 'true')
}

export function markLeadSubmitted() {
  converted = true
  write('localStorage', LEAD_KEY, String(Date.now()))
  window.dispatchEvent(new Event(POPUP_LEAD_EVENT))
}
