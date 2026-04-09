import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '@/components/gf/Navbar'
import { Footer } from '@/components/gf/Footer'
import { ScrollReveal } from '@/components/gf/ScrollReveal'
import { ScrollToTop } from '@/components/gf/ScrollToTop'
import { FaqAccordion } from '@/components/gf/FaqAccordion'

/* ── TYPES ─────────────────────────────────── */
export interface Review {
  author: string
  location: string
  text: string
  rating: number
}

export interface FaqItem {
  q: string
  a: string
}

export interface GalleryImage {
  src: string
  alt: string
}

export interface LandingPageData {
  /* SEO */
  title: string
  tagline: string
  subtitle: string
  heroImage: string
  heroImageAlt: string
  /* Content */
  intro: { heading: string; body: string }
  process?: { step: string; label: string; desc: string }[]
  gallery: GalleryImage[]
  about: { heading: string; body: string; image: string; imageAlt: string }
  reviews: Review[]
  faq: FaqItem[]
  /* CTA */
  ctaHeading: string
  ctaBody: string
  /* Maps */
  mapsLabel?: string
}

/* ── HERO ───────────────────────────────────── */
function ServiceHero({ data }: { data: LandingPageData }) {
  return (
    <section
      className="relative overflow-hidden bg-brand-text-dark"
      aria-label={`Hero — ${data.title}`}
      style={{ height: '100svh', minHeight: '520px' }}
    >
      <Image
        src={data.heroImage}
        alt={data.heroImageAlt}
        fill priority quality={90}
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: 'center 30%' }}
      />
      {/* gradient: più opaco in alto per leggibilità con navbar */}
      <div className="absolute inset-0" aria-hidden="true"
        style={{ background: 'linear-gradient(to bottom, rgba(25,38,51,0.55) 0%, rgba(0,0,0,0.15) 45%, rgba(26,26,26,0.72) 100%)' }} />

      {/* Back */}
      <div className="absolute z-10" style={{ top: '84px', left: '20px' }}>
        <Link href="/" className="inline-flex items-center gap-1.5 font-sans text-[10px] uppercase tracking-[0.16em] text-white/70 hover:text-white transition-colors">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Home
        </Link>
      </div>

      {/* Content — centered below navbar */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5 z-10" style={{ paddingTop: '80px' }}>
        <p className="font-script italic text-brand-gold text-xl md:text-2xl mb-3 animate-fade-in">
          {data.tagline}
        </p>
        <h1
          className="font-serif font-semibold text-white leading-tight animate-fade-in-up"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.6rem)', textShadow: '0 2px 24px rgba(0,0,0,0.5)', letterSpacing: '0.03em' }}
        >
          {data.title}
        </h1>
        {data.subtitle && (
          <p className="font-sans text-white/80 text-sm md:text-base max-w-sm mt-4 leading-relaxed animate-fade-in">
            {data.subtitle}
          </p>
        )}
        <a href="#intro" className="mt-8 flex flex-col items-center gap-1 animate-fade-in" style={{ animationDelay: '600ms' }} aria-hidden="true">
          <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-white/40">scopri</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </a>
      </div>
    </section>
  )
}

/* ── INTRO ──────────────────────────────────── */
function IntroSection({ data }: { data: LandingPageData }) {
  return (
    <section id="intro" className="bg-brand-off-white section-padding" aria-label="Introduzione">
      <div className="container-site max-w-2xl text-center mx-auto reveal">
        <span className="line-gold mb-6 block mx-auto" aria-hidden="true" />
        <h2 className="font-serif font-semibold text-brand-text-dark mb-4" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)' }}>
          {data.intro.heading}
        </h2>
        <p className="font-sans text-brand-text-mid text-base leading-relaxed">
          {data.intro.body}
        </p>
      </div>
    </section>
  )
}

/* ── GALLERY — 3 col mobile ─────────────────── */
function GallerySection({ images }: { images: GalleryImage[] }) {
  return (
    <section className="bg-white py-10 md:py-16" aria-label="Galleria fotografica">
      <div className="container-site">
        <div className="text-center mb-6 reveal">
          <span className="font-sans uppercase text-brand-blue/55" style={{ fontSize: '9px', letterSpacing: '0.24em' }}>Galleria</span>
          <h2 className="font-serif font-semibold text-brand-text-dark mt-2" style={{ fontSize: 'clamp(1.3rem, 3vw, 2rem)' }}>
            I nostri scatti
          </h2>
          <span className="line-gold mt-3 block mx-auto" aria-hidden="true" />
        </div>
        {/* 3 col su mobile, max 4 col su desktop */}
        <div className="grid grid-cols-3 md:grid-cols-3 gap-1.5 md:gap-3">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative overflow-hidden reveal"
              style={{ borderRadius: '8px', aspectRatio: '4/5', transitionDelay: `${Math.min(i * 60, 300)}ms` }}
            >
              <Image src={img.src} alt={img.alt} fill quality={90}
                sizes="(max-width: 768px) 33vw, 380px"
                className="object-cover transition-transform duration-700 hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── ABOUT / PROCESSO ───────────────────────── */
const APPROACH_PILLARS = [
  {
    label: 'Autenticità',
    desc: 'Nessuna posa forzata',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    label: 'Qualità Cinematic',
    desc: 'Luce & post-produzione',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
      </svg>
    ),
  },
  {
    label: 'Drone Certificato',
    desc: 'Prospettive uniche dall\'alto',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
  },
  {
    label: 'Cura del Dettaglio',
    desc: 'Ogni scatto è unico',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
]

function AboutSection({ data }: { data: LandingPageData }) {
  return (
    <section className="bg-brand-off-white py-12 md:py-20" aria-label={data.about.heading}>
      <div className="container-site">
        <div
          className="grid grid-cols-1 md:grid-cols-2 overflow-hidden reveal"
          style={{
            borderRadius: '20px',
            background: '#fff',
            boxShadow: '0 12px 48px rgba(81,113,138,0.12)',
            border: '1px solid rgba(81,113,138,0.08)',
          }}
        >
          {/* Immagine */}
          <div className="relative order-1" style={{ minHeight: '200px', maxHeight: '320px', height: '100%' }}>
            <div className="relative w-full h-full" style={{ minHeight: '200px' }}>
              <Image
                src="/images/chi-siamo.jpeg"
                alt="La famiglia Frunza — GF Memories Studio"
                fill quality={92}
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover"
                style={{ objectPosition: 'center 20%' }}
              />
              <div className="absolute inset-0 hidden md:block" aria-hidden="true"
                style={{ background: 'linear-gradient(to right, transparent 70%, #fff 100%)' }} />
            </div>
          </div>

          {/* Pilastri visivi */}
          <div className="flex flex-col gap-4 p-6 md:p-10 order-2">
            <span className="font-sans uppercase text-brand-blue/55" style={{ fontSize: '9px', letterSpacing: '0.24em' }}>
              Il nostro approccio
            </span>
            <h2 className="font-serif font-semibold text-brand-text-dark" style={{ fontSize: 'clamp(1.3rem, 3vw, 2rem)' }}>
              {data.about.heading}
            </h2>
            <span className="line-gold-left" aria-hidden="true" />

            {/* 2×2 grid visivo */}
            <div className="grid grid-cols-2 gap-2.5 mt-1">
              {APPROACH_PILLARS.map((p) => (
                <div
                  key={p.label}
                  className="flex flex-col gap-1.5 p-3.5"
                  style={{
                    background: '#F9F7F4',
                    borderRadius: '12px',
                    border: '1px solid rgba(81,113,138,0.09)',
                  }}
                >
                  <span className="text-brand-blue">{p.icon}</span>
                  <p className="font-serif font-semibold text-brand-text-dark" style={{ fontSize: 'clamp(0.75rem, 1.8vw, 0.9rem)', lineHeight: 1.2 }}>
                    {p.label}
                  </p>
                  <p className="font-sans text-brand-text-light" style={{ fontSize: '11px', lineHeight: 1.4 }}>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            <a href="https://wa.link/yflhc8" target="_blank" rel="noopener noreferrer"
              className="btn-primary self-start mt-2">
              Prenota ora
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── REVIEWS ────────────────────────────────── */
function ReviewsSection({ reviews }: { reviews: Review[] }) {
  return (
    <section style={{ background: '#192633' }} aria-label="Recensioni clienti" className="py-14 md:py-20">
      <div className="container-site">
        <div className="text-center mb-10 reveal">
          <span className="font-sans uppercase text-brand-gold/60" style={{ fontSize: '9px', letterSpacing: '0.24em' }}>Recensioni</span>
          <h2 className="font-serif font-semibold text-white mt-2" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>
            Cosa dicono i clienti
          </h2>
          <span className="block w-10 h-px mx-auto mt-3" style={{ background: '#DFCF86' }} aria-hidden="true" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 p-5 rounded-2xl reveal"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(223,207,134,0.12)',
                transitionDelay: `${i * 100}ms`,
              }}
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: r.rating }).map((_, s) => (
                  <svg key={s} className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#DFCF86" aria-hidden="true">
                    <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ))}
              </div>
              <p className="font-script italic text-white/85 text-lg leading-snug">&ldquo;{r.text}&rdquo;</p>
              <div className="mt-auto pt-2 border-t" style={{ borderColor: 'rgba(223,207,134,0.1)' }}>
                <p className="font-sans font-semibold text-brand-gold text-xs">{r.author}</p>
                <p className="font-sans text-white/40 text-[10px] mt-0.5">{r.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── FAQ ────────────────────────────────────── */
function FaqSection({ faq }: { faq: FaqItem[] }) {
  return (
    <section className="bg-white section-padding" aria-label="Domande frequenti">
      <div className="container-site max-w-2xl mx-auto">
        <div className="text-center mb-8 reveal">
          <span className="font-sans uppercase text-brand-blue/55" style={{ fontSize: '9px', letterSpacing: '0.24em' }}>FAQ</span>
          <h2 className="font-serif font-semibold text-brand-text-dark mt-2" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>
            Domande frequenti
          </h2>
          <span className="line-gold mt-3 block mx-auto" aria-hidden="true" />
        </div>
        <FaqAccordion faq={faq} />
      </div>
    </section>
  )
}

/* ── MAPS ───────────────────────────────────── */
function MapsSection({ label }: { label?: string }) {
  return (
    <section className="bg-brand-off-white py-14 md:py-20" aria-label="Dove siamo">
      <div className="container-site">
        <div className="text-center mb-8 reveal">
          <span className="font-sans uppercase text-brand-blue/55" style={{ fontSize: '9px', letterSpacing: '0.24em' }}>Dove siamo</span>
          <h2 className="font-serif font-semibold text-brand-text-dark mt-2" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>
            {label ?? 'Vieni a trovarci'}
          </h2>
          <p className="font-sans text-brand-text-mid text-sm mt-2">Via Luigi Goia, 31 — 27036 Mortara (PV)</p>
          <span className="line-gold mt-3 block mx-auto" aria-hidden="true" />
        </div>
        <div className="relative w-full overflow-hidden reveal" style={{ borderRadius: '16px', height: '280px', boxShadow: '0 8px 32px rgba(81,113,138,0.15)' }}>
          <iframe
            title="GF Memories Studio — Mappa"
            src="https://maps.google.com/maps?q=Via+Luigi+Goia+31+Mortara+PV&output=embed&z=15"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="flex justify-center mt-5">
          <a
            href="https://maps.google.com/?q=Via+Luigi+Goia+31+Mortara+PV"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-[0.14em] text-brand-blue hover:text-brand-blue-dark transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            Apri in Google Maps
          </a>
        </div>
      </div>
    </section>
  )
}

/* ── CTA FINALE ─────────────────────────────── */
function CtaSection({ heading, body }: { heading: string; body: string }) {
  return (
    <section
      className="relative overflow-hidden section-padding"
      style={{ background: '#F9F7F4' }}
      aria-label="Prenota la tua sessione"
    >
      {/* Subtle gold & blue radial glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ backgroundImage: 'radial-gradient(ellipse at 15% 60%, rgba(81,113,138,0.1) 0%, transparent 55%), radial-gradient(ellipse at 85% 40%, rgba(223,207,134,0.12) 0%, transparent 55%)' }} />

      <div className="container-site relative text-center">
        <div className="max-w-xl mx-auto flex flex-col items-center gap-4 reveal">
          {/* Gold line top */}
          <span className="line-gold block mx-auto" aria-hidden="true" />

          <span className="font-script italic text-brand-blue text-xl md:text-2xl mt-2">Pronto a iniziare?</span>
          <h2 className="font-serif font-semibold text-brand-text-dark" style={{ fontSize: 'clamp(1.7rem, 4vw, 2.8rem)' }}>
            {heading}
          </h2>
          <p className="font-sans text-brand-text-mid text-sm md:text-base leading-relaxed max-w-md">{body}</p>

          <a href="https://wa.link/yflhc8" target="_blank" rel="noopener noreferrer"
            className="btn-luxury-gold mt-2 inline-flex items-center gap-2 px-8 py-3.5 font-sans font-bold uppercase tracking-[0.14em] rounded-full"
            style={{ fontSize: '11px', background: '#DFCF86', color: '#0f1e29' }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Scrivici su WhatsApp
          </a>

          {/* Gold line bottom */}
          <span className="line-gold block mx-auto mt-2" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}

/* ── MAIN EXPORT ────────────────────────────── */
export function LandingLayout({ data }: { data: LandingPageData }) {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main id="main-content">
        {/* 1. Hero — desiderio */}
        <ServiceHero data={data} />
        {/* 2. Intro — chiarezza proposta */}
        <IntroSection data={data} />
        {/* 3. Gallery — prova visiva */}
        <GallerySection images={data.gallery} />
        {/* 4. About / processo — fiducia */}
        <AboutSection data={data} />
        {/* 5. Recensioni — social proof */}
        <ReviewsSection reviews={data.reviews} />
        {/* 6. FAQ — rimozione obiezioni */}
        <FaqSection faq={data.faq} />
        {/* 7. Dove siamo — info pratica */}
        <MapsSection label={data.mapsLabel} />
        {/* 8. CTA — conversione */}
        <CtaSection heading={data.ctaHeading} body={data.ctaBody} />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
