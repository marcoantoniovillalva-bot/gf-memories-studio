import Link from 'next/link'

export function Footer() {
  return (
    <footer
      role="contentinfo"
      style={{ background: '#0f1e29' }}
    >
      {/* Gold top border */}
      <div className="w-full h-px" style={{ background: 'linear-gradient(90deg, transparent, #DFCF86, transparent)' }} />

      <div className="container-site pt-10 pb-8">

        {/* GRID — 2 colonne */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 mb-12 pt-4">

          {/* Colonna 1 — Servizi */}
          <div className="flex flex-col gap-3 md:gap-4">
            <h3
              className="font-sans font-semibold uppercase text-white/50"
              style={{ fontSize: '9px', letterSpacing: '0.24em' }}
            >
              Servizi
            </h3>
            <ul className="flex flex-col gap-2 list-none m-0 p-0">
              {[
                { label: "Fotografia all'aperto", href: '/fotografia-allaperto' },
                { label: 'Ritratti in studio', href: '/fotografia-studio' },
                { label: 'Fotografia per animali', href: '/fotografia-animali' },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-sans text-sm text-white/55 hover:text-brand-gold transition-colors duration-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonna 2 — Contatti */}
          <div className="flex flex-col gap-3 md:gap-4 md:items-end md:text-right">
            <h3
              className="font-sans font-semibold uppercase text-white/50"
              style={{ fontSize: '9px', letterSpacing: '0.24em' }}
            >
              Contatti
            </h3>
            <ul className="flex flex-col gap-2 list-none m-0 p-0">
              <li>
                <a
                  href="https://maps.google.com/?q=Via+Luigi+Goia+31+Mortara+PV"
                  target="_blank" rel="noopener noreferrer"
                  className="font-sans text-sm text-white/55 hover:text-brand-gold transition-colors duration-300"
                >
                  Via Luigi Goia, 31 — Mortara (PV)
                </a>
              </li>
              <li>
                <a href="tel:3272984490" className="font-sans text-sm text-white/55 hover:text-brand-gold transition-colors duration-300">
                  327 298 4490
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/gfmemoriesstudio"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-sans text-sm text-white/55 hover:text-brand-gold transition-colors duration-300"
                >
                  <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @gfmemoriesstudio
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(223,207,134,0.1)' }}
        >
          <p className="font-sans text-white/25 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} GF Memories Studio · Tutti i diritti riservati
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="font-sans text-xs text-white/25 hover:text-white/50 transition-colors">
              Privacy
            </Link>
            <Link href="/cookie-policy" className="font-sans text-xs text-white/25 hover:text-white/50 transition-colors">
              Cookie
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
