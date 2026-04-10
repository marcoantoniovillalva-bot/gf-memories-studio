import type { Metadata } from 'next'
import { LandingLayout, type LandingPageData } from '@/components/gf/LandingLayout'

export const metadata: Metadata = {
  title: 'Fotografo Studio Mortara | GF Memories Studio — Ritratti & Book Professionali',
  description: 'Sessioni fotografiche in studio a Mortara (PV). Ritratti, book professionali per LinkedIn, attori e modelli. Luce controllata, attrezzatura top. Prenota.',
  keywords: ['fotografo studio Mortara', 'book fotografico Pavia', 'ritratti studio professionali', 'fotografo ritratti Lomellina', 'book attore Pavia', 'fotografo aziendale Mortara', 'studio fotografico Mortara'],
}

const data: LandingPageData = {
  title: 'Fotografia in studio',
  tagline: 'Controllo. Eleganza. Precisione.',
  subtitle: 'Luce perfetta, sfondi curati e attrezzatura professionale per ritratti senza compromessi.',
  heroImage: '/images/fotografia-studio.jpeg',
  heroImageAlt: 'Sessione fotografica in studio — GF Memories Studio',

  intro: {
    heading: "La perfezione tecnica al servizio dell'emozione",
    body: "In studio controlliamo ogni variabile — luce, sfondo, composizione — per ottenere immagini precise e allo stesso tempo umane. Ritratti aziendali, book per attori e modelli, foto per LinkedIn o uso personale: ogni sessione è progettata attorno a te.",
  },

  features: [
    { label: 'Luce Controllata', desc: 'Setup professionale con luci calibrate per ogni volto e ogni look.' },
    { label: 'Stile su Misura', desc: 'Sfondi, composizioni e mood scelti insieme per rispecchiare la tua personalità.' },
    { label: 'Post-Produzione Raffinata', desc: 'Retouching elegante e non invasivo — il meglio di te, in modo autentico.' },
  ],

  gallery: [
    { src: '/images/fotografia-studio.jpeg', alt: 'Ritratto professionale in studio' },
    { src: '/images/chi-siamo.jpeg', alt: 'Sessione studio premium' },
    { src: '/images/foto-studio1.jpeg', alt: 'Book fotografico in studio' },
    { src: '/images/foto-studio2.jpeg', alt: 'Ritratto in studio professionale' },
    { src: '/images/foto-studio3.jpeg', alt: 'Sessione fotografica studio' },
    { src: '/images/foto-animali2.jpeg', alt: 'Pet photography in studio' },
  ],

  about: {
    heading: 'Un ambiente pensato per metterti a tuo agio',
    body: "Lo studio è confortevole e professionale allo stesso tempo. Lavoreremo insieme per trovare le pose e le espressioni più naturali — senza forzature. La post-produzione cura ogni dettaglio per un risultato raffinato e autentico che ti rappresenti davvero.",
    image: '/images/fotografia-studio.jpeg',
    imageAlt: 'Studio fotografico professionale GF Memories',
  },

  reviews: [
    {
      author: 'Francesca C.',
      location: 'Vigevano',
      text: "Book per LinkedIn. Sono rimasta stupita: le foto sono naturali, curate, eleganti. Non mi aspettavo un risultato così raffinato. Lo consiglio a tutti.",
      rating: 5,
    },
    {
      author: 'Roberto M.',
      location: 'Pavia',
      text: "Ritratto aziendale. Servizio impeccabile, ambiente accogliente, risultato sopra le aspettative. Tornerò sicuramente per il prossimo aggiornamento del profilo.",
      rating: 5,
    },
    {
      author: 'Martina R.',
      location: 'Mortara',
      text: "Mi sono sentita a mio agio fin da subito nonostante fossi imbarazzata. Le foto sono venute bellissime, naturali e professionali allo stesso tempo.",
      rating: 5,
    },
  ],

  faq: [
    {
      q: "Cosa posso fotografare in studio?",
      a: "Ritratti personali, book professionali per attori e modelli, foto per LinkedIn e uso aziendale, servizi maternity, boudoir e molto altro. Contattaci per discutere il tuo progetto.",
    },
    {
      q: "Quanto dura una sessione in studio?",
      a: "Le sessioni durano tipicamente 1-2 ore. La durata esatta dipende dal tipo di servizio e dal numero di outfit o scenari che vuoi includere.",
    },
    {
      q: "Come mi devo preparare?",
      a: "Ti consiglieremo su abbigliamento e preparazione prima della sessione. In generale: riposa bene la notte prima, vesti qualcosa in cui ti senti autentico e porta più cambi se vuoi varietà.",
    },
    {
      q: "Le foto vengono ritoccate?",
      a: "Sì. La post-produzione è inclusa e curata nel dettaglio. Correggiamo luce, colori e dettagli per un risultato finale raffinato ma naturale.",
    },
    {
      q: "Posso usare le foto per uso commerciale?",
      a: "Sì. Forniamo le immagini in alta risoluzione adatte a qualsiasi uso — stampa, web, portfolio, social. I diritti d'uso sono inclusi per uso personale e professionale.",
    },
    {
      q: "Siete attrezzati per riprese video in studio?",
      a: "Sì, offriamo anche servizi video in studio. Contattateci per maggiori dettagli e preventivi personalizzati.",
    },
  ],

  mapsLabel: 'Il nostro studio a Mortara',
  ctaHeading: 'Il tuo ritratto perfetto ti aspetta',
  ctaBody: "Prenota su WhatsApp. Discutiamo insieme l'idea e creiamo qualcosa che ti rappresenti davvero.",
}

export default function FotografiaStudioPage() {
  return <LandingLayout data={data} />
}
