import type { Metadata } from 'next'
import { Playfair_Display, Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import { WhatsAppButton } from '@/components/gf/WhatsAppButton'
import { CookieBanner } from '@/components/gf/CookieBanner'

/* ============================================
   GOOGLE FONTS
   ============================================ */
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

/* ============================================
   METADATA SEO
   ============================================ */
export const metadata: Metadata = {
  metadataBase: new URL('https://gf-memories-studio-marcos-projects-e20e28f1.vercel.app'),
  title: 'GF Memories Studio | Fotografo Professionista a Mortara — Cani, Book, Outdoor',
  description:
    'Fotografo professionista a Mortara (PV): cani, gatti, book fotografici, ritratti outdoor. Servizi per Pavia, Garlasco, Vigevano, Abbiategrasso e tutta la Lomellina. Drone certificato. Prenota su WhatsApp.',
  keywords: [
    'fotografo vicino a me',
    'fotografo cani',
    'fotografo gatti',
    'fotografo per book',
    'fotografo Mortara',
    'fotografo Pavia',
    'fotografo Garlasco',
    'fotografo Abbiategrasso',
    'fotografo Vigevano',
    'fotografo professionista',
    'studio fotografico Mortara',
    'fotografia animali domestici',
    'servizio fotografico famiglia',
    'fotografo outdoor',
    'fotografo drone Mortara',
    'GF Memories Studio',
    'fotografia professionale Lomellina',
  ],
  authors: [{ name: 'GF Memories Studio' }],
  openGraph: {
    title: 'GF Memories Studio | Fotografo a Mortara — Cani, Book, Outdoor',
    description:
      'Fotografo professionista a Mortara (PV). Cani, gatti, book, ritratti outdoor con drone. Pavia, Garlasco, Vigevano, Abbiategrasso.',
    type: 'website',
    locale: 'it_IT',
    siteName: 'GF Memories Studio',
    url: 'https://gf-memories-studio-marcos-projects-e20e28f1.vercel.app',
    images: [
      {
        url: '/open-graph-image.png',
        width: 1200,
        height: 630,
        alt: 'GF Memories Studio — Fotografo Professionista a Mortara, Pavia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GF Memories Studio | Fotografo a Mortara — Cani, Book, Outdoor',
    description:
      'Fotografo professionista a Mortara (PV). Cani, gatti, book, ritratti outdoor con drone. Pavia, Garlasco, Vigevano, Abbiategrasso.',
    images: ['/open-graph-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/open-graph-image.png',
    apple: '/open-graph-image.png',
    shortcut: '/open-graph-image.png',
  },
  // Google Analytics — da attivare con il proprio Measurement ID
  // verification: { google: 'YOUR_GOOGLE_VERIFICATION_ID' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="it"
      className={`${playfair.variable} ${cormorant.variable} ${inter.variable}`}
    >
      <head>
        <meta name="theme-color" content="#51718A" />
        {/* Google Analytics placeholder — sostituire G-XXXXXXXXXX con il proprio ID */}
        {/*
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
        */}
      </head>
      <body className="font-sans bg-brand-off-white text-brand-text-dark antialiased">
        {children}
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  )
}
