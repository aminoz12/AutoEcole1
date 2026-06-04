'use client'

import { motion } from 'framer-motion'
import { Flame, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function PromoBanner() {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] text-white text-[11px] sm:text-xs py-2"
      style={{
        background:
          'linear-gradient(90deg, #1e3a8a 0%, #6d28d9 35%, #db2777 65%, #ef4444 100%)',
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 sm:gap-3"
        >
          <span className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider">
            <Flame className="h-3.5 w-3.5 text-amber-300" fill="currentColor" />
            Offre limitée
            <Flame className="h-3.5 w-3.5 text-amber-300" fill="currentColor" />
          </span>
          <span className="hidden sm:inline text-white/95 font-semibold uppercase tracking-wide">
            1 h de conduite offerte à Nanterre
          </span>
          <Link
            href="/s-inscrire"
            className="inline-flex items-center gap-1 bg-black/30 backdrop-blur-sm hover:bg-black/40 transition-colors font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full"
          >
            Plus que 3 places cette semaine
            <ChevronRight className="h-3 w-3" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
