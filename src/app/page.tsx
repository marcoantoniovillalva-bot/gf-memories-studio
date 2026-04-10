import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/gf/Navbar'
import { Footer } from '@/components/gf/Footer'
import { ScrollReveal } from '@/components/gf/ScrollReveal'
import { ScrollToTop } from '@/components/gf/ScrollToTop'

export const metadata = {
  title: 'GF Memories Studio | Fotografo Premium a Mortara — Drone & Studio',
  description:
    'Fotografia professionale a Mortara (PV): outdoor, ritratti in studio, animali domestici. Drone, qualità cinematografica. Prenota la tua sessione.',
}

/* ============================================
   HERO — tutto above-the-fold in una viewport
   ============================================ */
function HeroSection() {
  return (
    <section
      aria-label="GF Memories Studio"
      className="relative flex flex-col bg-brand-off-white overflow-hidden"
    >
      <div
        className="flex flex-col items-center w-full px-4 md:px-8 gap-3 mx-auto"
        style={{ paddingTop: '74px', paddingBottom: '20px', maxWidth: '900px' }}
      >

        {/* 1 — HEADLINE */}
        <div className="flex flex-col items-center text-center gap-0.5">
          <h1
            className="font-serif font-semibold text-brand-text-dark leading-[1.05]"
            style={{ fontSize: 'clamp(1.4rem, 4vw, 2.6rem)', letterSpacing: '0.06em' }}
          >
            IMMAGINI AUTENTICHE
          </h1>
          <div className="flex items-center gap-3 my-1">
            <span className="block w-5 h-px" style={{ background: '#DFCF86' }} aria-hidden="true" />
            <span className="font-script italic text-brand-blue text-sm">&amp;</span>
            <span className="block w-5 h-px" style={{ background: '#DFCF86' }} aria-hidden="true" />
          </div>
          <p
            className="font-serif font-semibold leading-[1.05]"
            style={{ fontSize: 'clamp(1rem, 3vw, 2rem)', letterSpacing: '0.06em', color: '#DFCF86' }}
          >
            QUALITÀ CINEMATOGRAFICA
          </p>
        </div>

        {/* 2 — VIDEO */}
        <div
          className="hero-video-wrapper relative w-full overflow-hidden"
          style={{
            borderRadius: '14px',
            maxHeight: 'min(62svh, 560px)',
            background: '#1a1a1a',
            boxShadow: '0 16px 48px rgba(81,113,138,0.22)',
            flexShrink: 0,
          }}
        >
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/video-hero.mp4"
            autoPlay muted loop playsInline
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.04) 0%, transparent 30%, transparent 65%, rgba(0,0,0,0.1) 100%)' }}
          />
        </div>

        {/* 3 — FIRMA + SUBHEADLINE + CTA */}
        <div className="flex flex-col items-center gap-1.5">
          {/* Firma elegante */}
          <p
            className="font-script italic text-brand-blue tracking-wide"
            style={{ fontSize: 'clamp(0.85rem, 2.8vw, 1.15rem)' }}
          >
            GF Memories Studio
          </p>
          <p
            className="font-sans text-brand-text-mid text-center leading-snug"
            style={{ fontSize: 'clamp(0.78rem, 2.4vw, 0.9rem)', maxWidth: '320px' }}
          >
            Drone, studio professionale e luce naturale — per fermare i momenti che contano.
          </p>
          <div className="flex flex-row gap-2 w-full max-w-[300px] mt-1">
            <a
              href="https://wa.link/yflhc8"
              target="_blank" rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 py-3 md:py-2.5 font-sans text-[10px] md:text-[9px] font-bold uppercase tracking-[0.13em] rounded-full btn-luxury-gold"
              style={{ background: '#DFCF86', color: '#3d5568' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 flex-shrink-0" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Contattaci
            </a>
            <a
              href="#servizi"
              className="flex-1 flex items-center justify-center gap-1.5 py-3 md:py-2.5 font-sans text-[10px] md:text-[9px] font-medium uppercase tracking-[0.13em] rounded-full border btn-luxury-outline"
              style={{ borderColor: 'rgba(81,113,138,0.35)', color: '#51718A' }}
            >
              Servizi
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================
   SEZIONE SERVIZI — 3 colonne anche su mobile
   ============================================ */
const services = [
  { title: "All'aperto", tagline: 'Luce naturale', image: '/images/fotografia-aperto.jpeg', href: '/fotografia-allaperto' },
  { title: 'In studio', tagline: 'Eleganza', image: '/images/fotografia-studio.jpeg', href: '/fotografia-studio' },
  { title: 'Animali', tagline: 'Autenticità', image: '/images/fotografia-cane-gatto.jpeg', href: '/fotografia-animali' },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  return (
    <Link
      href={service.href}
      className="group block relative reveal"
      style={{ transitionDelay: `${index * 100}ms` }}
      aria-label={service.title}
    >
      {/* Badge etichetta — sovrapposto fuori dal bordo superiore sinistro dell'immagine */}
      <div
        className="absolute left-3 z-10"
        style={{ top: '-16px' }}
      >
        <div
          style={{
            background: '#192633',
            borderRadius: '100px',
            padding: '7px 14px 7px 14px',
            border: '1px solid rgba(223,207,134,0.2)',
          }}
        >
          <p className="font-script italic leading-none text-brand-gold" style={{ fontSize: 'clamp(0.65rem, 1.8vw, 0.78rem)' }}>
            {service.tagline}
          </p>
          <h3 className="font-serif font-semibold text-white leading-tight" style={{ fontSize: 'clamp(0.88rem, 2.5vw, 1.05rem)' }}>
            {service.title}
          </h3>
        </div>
      </div>

      {/* Immagine — overflow hidden per border-radius */}
      <div
        className="service-card-image relative overflow-hidden w-full"
        style={{
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(81,113,138,0.14)',
          background: '#1a1a1a',
          transition: 'transform 0.35s ease, box-shadow 0.35s ease',
        }}
      >
        <Image src={service.image} alt={service.title} fill quality={95}
          sizes="(max-width: 768px) 90vw, 800px"
          className="object-cover transition-transform duration-600 group-hover:scale-105" />
        <div className="absolute inset-0" aria-hidden="true"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.15) 100%)' }} />
      </div>

      {/* Freccia — in basso a destra fuori dall'immagine */}
      <div
        className="flex justify-end px-2"
        style={{ marginTop: '-18px', position: 'relative', zIndex: 10 }}
      >
        <span
          className="flex items-center justify-center w-8 h-8 flex-shrink-0"
          style={{ background: '#192633', borderRadius: '100px', border: '1px solid rgba(223,207,134,0.22)' }}
        >
          <svg className="w-3.5 h-3.5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </div>
    </Link>
  )
}

function QuoteStrip() {
  return (
    <section style={{ background: '#192633' }} aria-hidden="true">
      <div className="container-site py-8 md:py-12 text-center">
        <div className="reveal">
          <span className="line-gold mb-5 block mx-auto" />
          <blockquote>
            <p
              className="font-script italic text-brand-gold leading-snug"
              style={{ fontSize: 'clamp(1.25rem, 3.8vw, 2rem)' }}
            >
              &ldquo;Trasformiamo momenti in memorie.&rdquo;
            </p>
            <cite
              className="font-sans not-italic text-white/30 uppercase block mt-3"
              style={{ fontSize: '9px', letterSpacing: '0.26em' }}
            >
              — GF Memories Studio, Mortara
            </cite>
          </blockquote>
          <span className="line-gold mt-5 block mx-auto" />
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section id="servizi" className="bg-white pb-16 md:pb-20 pt-3 md:pt-14" aria-label="I nostri servizi fotografici">
      <div className="container-site">
        <div className="text-center mb-6 md:mb-10 reveal">
          <span className="font-sans uppercase text-brand-blue/55" style={{ fontSize: '9px', letterSpacing: '0.24em' }}>
            Cosa facciamo
          </span>
          <h2 className="font-serif font-semibold text-brand-text-dark mt-2 mb-3"
            style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.4rem)', letterSpacing: '0.04em' }}>
            I nostri servizi
          </h2>
          <span className="line-gold" aria-hidden="true" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5 pt-5">
          {services.map((s, i) => <ServiceCard key={s.href} service={s} index={i} />)}
        </div>

        {/* Mobile-only CTA */}
        <div className="flex justify-center mt-6 md:hidden reveal">
          <a
            href="https://wa.link/yflhc8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 font-sans font-semibold uppercase btn-luxury-gold"
            style={{
              fontSize: '10px',
              letterSpacing: '0.2em',
              background: '#DFCF86',
              color: '#0f1e29',
              borderRadius: '100px',
            }}
          >
            Prenota la tua sessione
          </a>
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <QuoteStrip />
        <ServicesSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
