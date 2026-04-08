'use client'

import { useState } from 'react'

interface FaqItem {
  q: string
  a: string
}

export function FaqAccordion({ faq }: { faq: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="flex flex-col gap-0">
      {faq.map((item, i) => {
        const isOpen = open === i
        return (
          <div
            key={i}
            className="reveal"
            style={{
              borderBottom: '1px solid rgba(81,113,138,0.12)',
              transitionDelay: `${i * 50}ms`,
            }}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 py-4 md:py-5 text-left group"
            >
              <span
                className="font-serif font-semibold text-brand-text-dark text-sm md:text-base leading-snug group-hover:text-brand-blue transition-colors duration-200"
              >
                {item.q}
              </span>
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  background: isOpen ? '#51718A' : 'rgba(81,113,138,0.1)',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
                aria-hidden="true"
              >
                <svg
                  className="w-3 h-3"
                  style={{ color: isOpen ? '#DFCF86' : '#51718A' }}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>

            {/* Risposta espandibile */}
            <div
              style={{
                maxHeight: isOpen ? '400px' : '0px',
                overflow: 'hidden',
                transition: 'max-height 0.35s ease',
              }}
            >
              <p className="font-sans text-brand-text-mid text-sm leading-relaxed pb-4 md:pb-5 pr-10">
                {item.a}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
