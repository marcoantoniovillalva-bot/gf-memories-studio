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
