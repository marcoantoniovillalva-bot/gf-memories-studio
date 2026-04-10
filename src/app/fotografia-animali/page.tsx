import type { Metadata } from 'next'
import { LandingLayout, type LandingPageData } from '@/components/gf/LandingLayout'

export const metadata: Metadata = {
  title: 'Fotografo Cani e Gatti a Mortara | GF Memories Studio — Pet Photography Pavia',
  description: 'Fotografo specializzato in cani e gatti a Mortara (PV). Sessioni indoor e outdoor, approccio paziente, ritratti autentici. Pavia, Garlasco, Vigevano, Abbiategrasso. Contattami.',
  keywords: ['fotografo cani', 'fotografo gatti', 'fotografo animali Mortara', 'fotografo cani Pavia', 'fotografo gatti Pavia', 'pet photography Lomellina', 'foto cane professionale', 'fotografo animali Garlasco', 'fotografo pet Vigevano', 'sessione fotografica animali domestici'],
  openGraph: {
    title: 'Fotografo Cani e Gatti a Mortara | GF Memories Studio',
    description: 'Fotografo specializzato in cani e gatti a Mortara (PV). Sessioni indoor e outdoor. Pavia, Garlasco, Vigevano, Abbiategrasso.',
    images: [{ url: '/open-graph-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/open-graph-image.png'] },
}

const data: LandingPageData = {
  title: 'Fotografia per animali',
  tagline: 'Il loro carattere, immortalato.',
  subtitle: 'Sessioni dedicate a cani e gatti: pazienti, autentiche, emozionanti.',
  heroImage: '/images/fotografia-cane.jpeg',
  heroImageAlt: 'Fotografia professionale per animali — GF Memories Studio',

  intro: {
    heading: 'Perché il tuo animale merita uno scatto straordinario',
    body: "Gli animali domestici fanno parte della famiglia. Le loro espressioni, i loro gesti, il carattere unico meritano di essere immortalati con la stessa cura dei ritratti umani. Lavoro con calma, rispettando i tempi di ogni animale, per ottenere foto vere e cariche di personalità.",
  },

  features: [
    { label: 'Nessuna Forzatura', desc: 'Rispetto i loro tempi. Li lascio esplorare finché si sentono a casa.' },
    { label: 'Indoor & Outdoor', desc: "In studio o all'aperto — scelgo l'ambiente dove il tuo animale è più felice." },
    { label: 'Carattere Immortalato', desc: 'Ogni scatto racconta la loro personalità unica: vivace, tenera o imprevedibile.' },
  ],

  gallery: [
    { src: '/images/fotografia-cane.jpeg', alt: 'Ritratto cane professionale' },
    { src: '/images/fotografia-cane-gatto.jpeg', alt: 'Foto cane e gatto insieme' },
    { src: '/images/fotografia-cane-donna.jpeg', alt: 'Donna con cane outdoor' },
    { src: '/images/foto-animali1.jpeg', alt: 'Fotografia animali domestici' },
    { src: '/images/foto-animali2.jpeg', alt: 'Pet photography professionale' },
    { src: '/images/foto-animali3.jpeg', alt: 'Ritratto animale domestico' },
  ],

  aboutTheme: 'animals' as const,

  about: {
    heading: 'Giorgio — paziente quanto i tuoi animali',
    body: "Mi chiamo Giorgio e so bene quanto gli animali siano parte della famiglia — per questo li fotografo con la stessa cura che riservo alle persone. Con mia moglie Silvana al mio fianco ho trasformato la mia passione in un lavoro. Non forzo mai: aspetto che ogni animale si senta a suo agio, poi scatto. Opero a Mortara (PV), sia in studio che all'aperto, e sono disponibile per trasferte. Il risultato saranno immagini che ti faranno commuovere.",
    image: '/images/fotografia-cane-donna.jpeg',
    imageAlt: 'Sessione fotografica con animali domestici GF Memories',
  },

  reviews: [
    {
      author: 'Elena P.',
      location: 'Vigevano',
      text: "Il mio golden retriever era agitato all'inizio, in pochi minuti si è calmato e le foto sono venute stupende. Professionalità e pazienza eccezionali.",
      rating: 5,
    },
    {
      author: 'Andrea L.',
      location: 'Pavia',
      text: "Sessione con il mio gatto — sì, un gatto! Pensavo fosse impossibile ma il risultato è stato incredibile. Foto bellissime, piene di carattere e spontaneità.",
      rating: 5,
    },
    {
      author: 'Valentina G.',
      location: 'Mortara',
      text: "Tre cani contemporaneamente! Foto meravigliose nonostante il caos. Esperienza divertente e risultato super professionale. Torneremo!",
      rating: 5,
    },
  ],

  faq: [
    {
      q: "Come gestisci gli animali timidi o agitati?",
      a: "Con molta pazienza e rispettando i loro tempi. Non forzo mai. Lascio che l'animale esplori l'ambiente, poi aspetto il momento giusto. Spesso bastano pochi minuti.",
    },
    {
      q: "Posso partecipare io stesso con il mio animale?",
      a: "Assolutamente sì — anzi, te lo consiglio. Le foto del pet con il suo umano di riferimento sono spesso le più belle e cariche di emozione.",
    },
    {
      q: "Quanto dura una sessione per animali?",
      a: "Tipicamente 45-90 minuti. I tempi dipendono dal carattere dell'animale. Non ho fretta: la qualità viene prima della velocità.",
    },
    {
      q: "Il mio cane deve essere al guinzaglio?",
      a: "Dipende dalla location. In ambienti chiusi o recintati non è necessario. Valutiamo insieme la soluzione migliore per sicurezza e libertà di movimento.",
    },
    {
      q: "Fotografi anche gatti e altri animali?",
      a: "Sì! Fotografo cani, gatti e altri animali domestici. Ogni animale ha la sua personalità unica e mi piace catturarla. Contattami per qualsiasi specie.",
    },
    {
      q: "La sessione si svolge in studio o all'aperto?",
      a: "Entrambi! In studio ho sfondi neutri e luce controllata. All'aperto catturo il carattere naturale nel suo ambiente. Scegliamo insieme l'opzione migliore.",
    },
  ],

  mapsLabel: 'Vieni in studio o usciamo insieme',
  ctaHeading: 'Ogni animale ha la sua storia da raccontare',
  ctaBody: "Scrivimi su WhatsApp con una foto del tuo pet e raccontami la sua personalità. Creiamo insieme qualcosa di unico.",
}

export default function FotografiaAnimaliPage() {
  return <LandingLayout data={data} />
}
