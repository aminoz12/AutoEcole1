'use client'

import { useEffect } from 'react'

// Shared reference count so multiple overlays (CPF promo + CPF form) never
// leave <body> stuck with overflow:hidden when they hand off to each other.
let lockCount = 0

export function useScrollLock(active: boolean) {
  useEffect(() => {
    if (!active) return

    lockCount += 1
    document.body.style.overflow = 'hidden'

    return () => {
      lockCount = Math.max(0, lockCount - 1)
      if (lockCount === 0) {
        document.body.style.overflow = ''
      }
    }
  }, [active])
}
