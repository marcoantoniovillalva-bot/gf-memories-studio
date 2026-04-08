'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('gf_cookies_accepted')
    if (!accepted) {
      // Piccolo delay per non bloccare il rendering
      const timer = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('gf_cookies_accepted', 'true')
    setVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('gf_cookies_accepted', 'false')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Consenso cookie"
      className="
        fixed bottom-0 left-0 right-0 z-50
        bg-brand-text-dark/95 backdrop-blur-sm
        text-white
        px-5 py-5
        md:px-8 md:py-6
        animate-fade-in-up
      "
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
        <p className="font-sans text-sm text-white/80 leading-relaxed flex-1">
          Utilizziamo cookie tecnici e analitici per migliorare la tua esperienza.
          Leggi la nostra{' '}
          <Link
            href="/cookie-policy"
            className="text-brand-gold underline underline-offset-2 hover:text-brand-gold-dark transition-colors"
          >
            Cookie Policy
          </Link>{' '}
          e la{' '}
          <Link
            href="/privacy-policy"
            className="text-brand-gold underline underline-offset-2 hover:text-brand-gold-dark transition-colors"
          >
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={handleDecline}
            className="
              px-4 py-2 text-xs font-sans font-medium uppercase tracking-wider
              border border-white/30 text-white/70 rounded
              hover:border-white/60 hover:text-white
              transition-all duration-300
            "
          >
            Rifiuta
          </button>
          <button
            onClick={handleAccept}
            className="
              px-5 py-2 text-xs font-sans font-semibold uppercase tracking-wider
              bg-brand-gold text-brand-text-dark rounded
              hover:bg-brand-gold-dark
              transition-all duration-300
            "
          >
            Accetta
          </button>
        </div>
      </div>
    </div>
  )
}
