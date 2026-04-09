'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import type { GalleryImage } from './LandingLayout'

export function LightboxGallery({ images }: { images: GalleryImage[] }) {
  const [open, setOpen] = useState<number | null>(null)
  const [touchStart, setTouchStart] = useState<number | null>(null)

  const prev = useCallback(() => {
    setOpen(i => i !== null ? (i - 1 + images.length) % images.length : null)
  }, [images.length])

  const next = useCallback(() => {
    setOpen(i => i !== null ? (i + 1) % images.length : null)
  }, [images.length])

  const close = useCallback(() => setOpen(null), [])

  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, prev, next, close])

  useEffect(() => {
    document.body.style.overflow = open !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* ── GRID CLICCABILE ─────────────────── */}
      <div className="grid grid-cols-3 gap-1.5 md:gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setOpen(i)}
            className="relative overflow-hidden reveal group cursor-zoom-in"
            style={{
              borderRadius: '8px',
              aspectRatio: '4/5',
              transitionDelay: `${Math.min(i * 60, 300)}ms`,
              border: 'none',
              padding: 0,
            }}
            aria-label={`Visualizza foto: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill quality={90}
              sizes="(max-width: 768px) 33vw, 380px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Expand overlay on hover */}
            <div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'rgba(15,30,41,0.38)' }}
            >
              <svg className="w-6 h-6 text-white drop-shadow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
              </svg>
            </div>
          </button>
        ))}
      </div>

      {/* ── LIGHTBOX ────────────────────────── */}
      {open !== null && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ background: 'rgba(10,18,26,0.97)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Galleria a schermo intero"
        >
          {/* Image + nav area */}
          <div
            className="relative flex items-center justify-center w-full h-full"
            onClick={e => e.stopPropagation()}
            onTouchStart={e => setTouchStart(e.touches[0].clientX)}
            onTouchEnd={e => {
              if (touchStart === null) return
              const delta = e.changedTouches[0].clientX - touchStart
              if (Math.abs(delta) > 48) { delta < 0 ? next() : prev() }
              setTouchStart(null)
            }}
          >
            {/* Image wrapper */}
            <div
              className="relative"
              style={{
                width: 'min(92vw, 900px)',
                height: 'min(80svh, 700px)',
              }}
            >
              <Image
                src={images[open].src}
                alt={images[open].alt}
                fill quality={95}
                sizes="(max-width: 768px) 92vw, 900px"
                className="object-contain"
                priority
              />
            </div>

            {/* Prev button */}
            <button
              onClick={e => { e.stopPropagation(); prev() }}
              className="absolute left-2 md:left-6 flex items-center justify-center w-10 h-10 rounded-full transition-all hover:scale-110"
              style={{ background: 'rgba(81,113,138,0.7)', border: '1px solid rgba(223,207,134,0.2)' }}
              aria-label="Foto precedente"
            >
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Next button */}
            <button
              onClick={e => { e.stopPropagation(); next() }}
              className="absolute right-2 md:right-6 flex items-center justify-center w-10 h-10 rounded-full transition-all hover:scale-110"
              style={{ background: 'rgba(81,113,138,0.7)', border: '1px solid rgba(223,207,134,0.2)' }}
              aria-label="Foto successiva"
            >
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-4 right-4 flex items-center justify-center w-9 h-9 rounded-full transition-all hover:scale-110"
            style={{ background: 'rgba(81,113,138,0.7)', border: '1px solid rgba(223,207,134,0.2)' }}
            aria-label="Chiudi galleria"
          >
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Caption + counter */}
          <div className="absolute bottom-5 left-0 right-0 flex flex-col items-center gap-3">
            {/* Dot navigation */}
            <div className="flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={e => { e.stopPropagation(); setOpen(i) }}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === open ? '20px' : '6px',
                    height: '6px',
                    background: i === open ? '#DFCF86' : 'rgba(255,255,255,0.3)',
                  }}
                  aria-label={`Foto ${i + 1}`}
                />
              ))}
            </div>
            {/* Counter text */}
            <p className="font-sans text-white/40" style={{ fontSize: '10px', letterSpacing: '0.18em' }}>
              {open + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
