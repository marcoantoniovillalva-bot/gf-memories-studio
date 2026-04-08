'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NAV_LINKS = [
  { label: "Fotografia all'aperto", href: '/fotografia-allaperto' },
  { label: 'Studio', href: '/fotografia-studio' },
  { label: 'Animali', href: '/fotografia-animali' },
]

/* navbar height: pill 56px + top offset 12px = 68px clearance */
export const NAVBAR_CLEARANCE = 68

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onPointer = (e: PointerEvent) => {
      const panel = document.getElementById('nav-panel')
      if (panel && !panel.contains(e.target as Node)) setMenuOpen(false)
    }
    const t = setTimeout(() => document.addEventListener('pointerdown', onPointer), 50)
    return () => { clearTimeout(t); document.removeEventListener('pointerdown', onPointer) }
  }, [menuOpen])

  return (
    <>
      {/* ── FLOATING PILL HEADER ────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center pt-3 px-4 pointer-events-none">
        <nav
          className="pointer-events-auto w-full max-w-[680px] flex items-center justify-between px-4 md:px-6 transition-all duration-500"
          style={{
            height: '56px',
            borderRadius: '100px',
            background: scrolled
              ? 'rgba(81,113,138,0.97)'
              : 'rgba(81,113,138,0.88)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            boxShadow: scrolled
              ? '0 8px 32px rgba(81,113,138,0.35), 0 0 0 1px rgba(223,207,134,0.15)'
              : '0 4px 20px rgba(81,113,138,0.25)',
          }}
          aria-label="Navigazione principale"
        >
          {/* Desktop left links */}
          <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
            <li>
              <Link href="/fotografia-allaperto"
                className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-white/65 hover:text-brand-gold transition-colors duration-300">
                All&apos;aperto
              </Link>
            </li>
            <li>
              <Link href="/fotografia-studio"
                className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-white/65 hover:text-brand-gold transition-colors duration-300">
                Studio
              </Link>
            </li>
          </ul>

          {/* Logo — centered */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 flex items-center"
            aria-label="GF Memories Studio — home"
          >
            <Image
              src="/logo trasparente.png"
              alt="GF Memories Studio"
              width={44}
              height={44}
              priority
              quality={95}
              className="w-12 h-12 md:w-10 md:h-10 object-contain"
            />
          </Link>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/fotografia-animali"
              className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-white/65 hover:text-brand-gold transition-colors duration-300">
              Animali
            </Link>
            <a
              href="https://wa.link/yflhc8"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 font-sans text-[10px] font-semibold uppercase tracking-[0.16em] text-[#192633] rounded-full btn-luxury-gold"
              style={{ background: '#DFCF86' }}
            >
              Prenota
            </a>
          </div>

          {/* Mobile: logo placeholder (spacer) + hamburger */}
          <div className="md:hidden flex items-center justify-between w-full">
            {/* spacer left */}
            <div className="w-8" aria-hidden="true" />
            {/* logo is absolute-centered, rendered above */}
            {/* hamburger right */}
            <button
              id="hamburger-btn"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
              className="flex flex-col gap-[5px] p-1"
            >
              <span className={`block h-px bg-brand-gold transition-all duration-300 origin-center ${menuOpen ? 'w-5 rotate-45 translate-y-[9px]' : 'w-5'}`} />
              <span className={`block h-px bg-brand-gold/60 transition-all duration-300 ${menuOpen ? 'opacity-0 w-0' : 'w-3.5'}`} />
              <span className={`block h-px bg-brand-gold transition-all duration-300 origin-center ${menuOpen ? 'w-5 -rotate-45 -translate-y-[9px]' : 'w-5'}`} />
            </button>
          </div>
        </nav>
      </header>

      {/* ── MENU MODAL FLOTTANTE ─────────────────────── */}

      {/* Backdrop sfocato */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 md:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', background: 'rgba(40,65,82,0.45)' }}
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
      />

      {/* Pannello centrato */}
      <div
        id="nav-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Menu di navigazione"
        aria-hidden={!menuOpen}
        className={`
          fixed z-50 md:hidden
          left-1/2 -translate-x-1/2
          w-[88vw] max-w-sm
          transition-all duration-350
          ${menuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'}
        `}
        style={{
          top: '76px',
          borderRadius: '20px',
          background: 'rgba(81,113,138,0.97)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '0 24px 64px rgba(10,18,26,0.5), 0 0 0 1px rgba(223,207,134,0.14)',
        }}
      >
        {/* Header panel */}
        <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b" style={{ borderColor: 'rgba(223,207,134,0.1)' }}>
          <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-white/35">Menu</span>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Chiudi menu"
            className="text-white/40 hover:text-brand-gold transition-colors p-1"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <ul className="list-none m-0 p-0 flex flex-col" role="list">
          {NAV_LINKS.map((link, i) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between px-5 py-4 group transition-colors hover:bg-white/5"
                style={{
                  borderBottom: i < NAV_LINKS.length - 1 ? '1px solid rgba(223,207,134,0.08)' : 'none',
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateX(0)' : 'translateX(-8px)',
                  transition: `opacity 0.3s ease ${60 + i * 50}ms, transform 0.3s ease ${60 + i * 50}ms, background 0.2s`,
                }}
              >
                <span className="font-sans text-sm font-medium text-white/85 group-hover:text-brand-gold transition-colors">
                  {link.label}
                </span>
                <svg className="w-3.5 h-3.5 text-brand-gold/50 group-hover:text-brand-gold group-hover:translate-x-0.5 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA panel */}
        <div
          className="px-5 pt-3 pb-5"
          style={{
            opacity: menuOpen ? 1 : 0,
            transition: 'opacity 0.35s ease 200ms',
          }}
        >
          <a
            href="https://wa.link/yflhc8"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 font-sans text-xs font-bold uppercase tracking-[0.18em] rounded-full btn-luxury-gold"
            style={{ background: '#DFCF86', color: '#3d5568' }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Prenota su WhatsApp
          </a>
        </div>
      </div>
    </>
  )
}
