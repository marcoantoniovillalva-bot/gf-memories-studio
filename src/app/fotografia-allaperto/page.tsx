import type { Metadata } from 'next'
import { LandingLayout, type LandingPageData } from '@/components/gf/LandingLayout'

export const metadata: Metadata = {
  title: "Fotografo Outdoor a Mortara | GF Memories Studio — Famiglia, Ritratti, Drone Pavia",
  description: "Fotografo vicino a te per sessioni outdoor a Mortara e provincia di Pavia. Ritratti in luce naturale, servizio fotografico famiglia, coppie, drone certificato. Garlasco, Vigevano, Abbiategrasso. Prenota.",
  keywords: ['fotografo vicino a me', 'servizio fotografico famiglia', 'fotografo outdoor Mortara', 'fotografo Garlasco', 'fotografo Vigevano', 'fotografo Abbiategrasso', 'fotografo drone Mortara', 'fotografo Pavia outdoor', 'ritratti luce naturale Lomellina', 'fotografo coppia Pavia'],
  openGraph: {
    title: "Fotografo Outdoor a Mortara | GF Memories Studio",
    description: "Sessioni outdoor a Mortara, Pavia, Garlasco, Vigevano, Abbiategrasso. Famiglia, ritratti, drone certificato.",
    images: [{ url: '/open-graph-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['/open-graph-image.png'] },
}

const data: LandingPageData = {
  title: "Fotografia all'aperto",
  tagline: 'Respira. Sorridi. Lasciati fotografare.',
  subtitle: 'Luce naturale, paesaggi autentici e momenti che non si possono mettere in posa.',
  heroImage: '/images/fotografia-aperto.jpeg',
  heroImageAlt: "Sessione fotografica all'aperto — GF Memories Studio",

  intro: {
    heading: 'La luce giusta cambia tutto',
    body: "Non c'è studio che possa eguagliare il calore del sole al tramonto o la morbidezza di una giornata nuvolosa. La fotografia outdoor coglie la luce vera — e trasforma momenti ordinari in immagini che restano. Ritratti romantici, sessioni di famiglia, book in contesti suggestivi: siamo lì con te.",
  },

  features: [
    { label: 'Luce Naturale', desc: 'Golden hour, nuvole morbide, colori autentici — la luce che nessuno studio può replicare.' },
    { label: 'Location su Misura', desc: 'Campi dorati, borghi storici, riva del fiume — scegliamo insieme il posto perfetto.' },
    { label: 'Drone Certificato', desc: 'Prospettive aeree uniche che trasformano ogni paesaggio in qualcosa di straordinario.' },
  ],

  gallery: [
    { src: '/images/fotografia-aperto.jpeg', alt: "Ritratto all'aperto con luce naturale" },
    { src: '/images/fotografia-bacio-cane-donna.jpeg', alt: 'Coppia con cane outdoor' },
    { src: '/images/fotografia-cane-donna.jpeg', alt: 'Donna con cane in esterno' },
    { src: '/images/foto-aperto1.jpeg', alt: 'Sessione fotografica outdoor' },
    { src: '/images/foto-aperto2.jpeg', alt: 'Ritratto esterno luce naturale' },
    { src: '/images/foto-aperto3.jpeg', alt: 'Fotografia outdoor autentica' },
  ],

  about: {
    heading: 'Ogni luogo racconta una storia',
    body: "Scegliamo insieme la location perfetta — campi dorati, borghi storici, riva del fiume, campagna lodigiana. Ci adattiamo alla luce del momento e al carattere delle persone. Con drone certificato offriamo anche prospettive aeree uniche che trasformano qualsiasi paesaggio in qualcosa di straordinario.",
    image: '/images/fotografia-aperto.jpeg',
    imageAlt: "Fotografo all'aperto in azione — GF Memories Studio",
  },

  reviews: [
    {
      author: 'Giulia M.',
      location: 'Mortara (PV)',
      text: "Sessione meravigliosa al tramonto. Le foto sono venute esattamente come speravo — naturali, calde, piene di emozione. Ci hanno messi immediatamente a nostro agio.",
      rating: 5,
    },
    {
      author: 'Luca e Sara T.',
      location: 'Vigevano',
      text: "Abbiamo fatto la sessione pre-matrimonio in campagna. Un'esperienza bellissima. Le foto sono stupende — le mostriamo a tutti con orgoglio.",
      rating: 5,
    },
    {
      author: 'Alessia B.',
      location: 'Pavia',
      text: "Le foto con il drone hanno reso tutto magico. Non avrei mai immaginato un risultato così bello. Assolutamente consigliatissimi per qualsiasi occasione.",
      rating: 5,
    },
  ],

  faq: [
    {
      q: "Quanto costa una sessione fotografica all'aperto?",
      a: "Il costo varia in base alla durata e alle specifiche della sessione. Contattaci su WhatsApp per ricevere un preventivo personalizzato senza impegno.",
    },
    {
      q: "Cosa succede se il giorno della sessione c'è cattivo tempo?",
      a: "Nessun problema: spostiamo la data a costo zero. La luce è tutto nella fotografia outdoor e non scenderemo a compromessi sulla qualità.",
    },
    {
      q: "Dove si svolgono le sessioni outdoor?",
      a: "Lavoriamo a Mortara, Vigevano, Pavia e in tutta la Lomellina. Scegliamo insieme la location: campagna, borghi storici, rive del Ticino o location personali.",
    },
    {
      q: "Quante foto ricevo al termine della sessione?",
      a: "Selezioniamo e ritocchiamo le migliori immagini della sessione. Riceverai una galleria digitale ad alta risoluzione, pronta da stampare o condividere.",
    },
    {
      q: "Il drone è incluso nel servizio?",
      a: "Le riprese con drone sono disponibili come aggiunta alla sessione standard. Ci occupiamo di tutte le autorizzazioni necessarie.",
    },
    {
      q: "Come mi devo preparare per la sessione?",
      a: "Non esiste una regola fissa: vesti come ti senti a tuo agio. Possiamo aiutarti con qualche consiglio sulle palette colori prima della sessione.",
    },
  ],

  mapsLabel: 'Studio a Mortara, shooting ovunque',
  ctaHeading: 'Il tuo momento merita di essere immortalato',
  ctaBody: "Scrivici su WhatsApp e raccontaci la tua idea. Troviamo insieme la luce e il posto perfetti — risposta entro poche ore.",
}

export default function FotografiaAllapertoPage() {
  return <LandingLayout data={data} />
}
