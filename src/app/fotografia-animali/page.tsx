import type { Metadata } from 'next'
import { LandingLayout, type LandingPageData } from '@/components/gf/LandingLayout'

export const metadata: Metadata = {
  title: 'Fotografo Animali Mortara | GF Memories Studio — Pet Photography Cani & Gatti',
  description: 'Fotografia professionale per animali domestici a Mortara (PV). Cani, gatti, sessioni indoor e outdoor. Immagini autentiche che catturano il carattere del tuo pet. Prenota.',
  keywords: ['fotografo animali Mortara', 'pet photography Pavia', 'foto cane professionale', 'fotografo gatto Lomellina', 'sessione fotografica animali domestici', 'fotografo pet Vigevano', 'foto animali outdoor'],
}

const data: LandingPageData = {
  title: 'Fotografia per animali',
  tagline: 'Il loro carattere, immortalato.',
  subtitle: 'Sessioni dedicate a cani e gatti: pazienti, autentiche, emozionanti.',
  heroImage: '/images/fotografia-cane.jpeg',
  heroImageAlt: 'Fotografia professionale per animali — GF Memories Studio',

  intro: {
    heading: 'Perché il tuo animale merita uno scatto straordinario',
    body: "Gli animali domestici fanno parte della famiglia. Le loro espressioni, i loro gesti, il carattere unico meritano di essere immortalati con la stessa cura dei ritratti umani. Lavoriamo con calma, rispettando i tempi di ogni animale, per ottenere foto vere e cariche di personalità.",
  },

  features: [
    { label: 'Nessuna Forzatura', desc: 'Rispettiamo i loro tempi. Li lasciamo esplorare finché si sentono a casa.' },
    { label: 'Indoor & Outdoor', desc: 'In studio o all\'aperto — scegliamo l\'ambiente dove il tuo animale è più felice.' },
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

  about: {
    heading: 'Pazienti quanto i tuoi animali',
    body: "Non forziamo mai. Lasciamo che ogni animale esplori l'ambiente e si abitui alla nostra presenza, poi cogliamo il momento giusto. Lavoriamo sia in studio che all'aperto. Timido, iperattivo o imprevedibile — ci piacciono le sfide. Il risultato saranno foto che ti faranno commuovere.",
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
      text: "Tre cani contemporaneamente! Sono riusciti a fare foto meravigliose nonostante il caos. Esperienza divertente e risultato super professionale. Torneremo!",
      rating: 5,
    },
  ],

  faq: [
    {
      q: "Come gestite gli animali timidi o agitati?",
      a: "Con molta pazienza e rispettando i loro tempi. Non forziamo mai. Lasciamo che l'animale esplori l'ambiente, poi aspettiamo il momento giusto. Spesso bastano pochi minuti.",
    },
    {
      q: "Posso partecipare io stesso con il mio animale?",
      a: "Assolutamente sì — anzi, te lo consigliamo. Le foto del pet con il suo umano di riferimento sono spesso le più belle e cariche di emozione.",
    },
    {
      q: "Quanto dura una sessione per animali?",
      a: "Tipicamente 45-90 minuti. I tempi dipendono dal carattere dell'animale. Non abbiamo fretta: la qualità viene prima della velocità.",
    },
    {
      q: "Il mio cane deve essere al guinzaglio?",
      a: "Dipende dalla location. In ambienti chiusi o recintati non è necessario. Valutiamo insieme la soluzione migliore per sicurezza e libertà di movimento.",
    },
    {
      q: "Fotografate anche gatti e altri animali?",
      a: "Sì! Fotografiamo cani, gatti e altri animali domestici. Ogni animale ha la sua personalità unica e ci piace catturarla. Contattateci per qualsiasi specie.",
    },
    {
      q: "La sessione si svolge in studio o all'aperto?",
      a: "Entrambi! In studio abbiamo sfondi neutri e luce controllata. All'aperto catturiamo il carattere naturale nel suo ambiente. Scegliamo insieme l'opzione migliore.",
    },
  ],

  mapsLabel: 'Vieni in studio o usciamo insieme',
  ctaHeading: 'Ogni animale ha la sua storia da raccontare',
  ctaBody: "Scrivici su WhatsApp con una foto del tuo pet e raccontaci la sua personalità. Creiamo insieme qualcosa di unico.",
}

export default function FotografiaAnimaliPage() {
  return <LandingLayout data={data} />
}
