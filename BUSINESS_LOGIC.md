# BUSINESS_LOGIC.md — GF Memories Studio

> Sito web per studio fotografico professionale | Mortara (PV), Italia

---

## 1. Problema di Business

**Il contesto:** Un fotografo professionista specializzato in ritratti di animali domestici, book fotografici e outdoor ha bisogno di una presenza online che trasmetta la qualità del suo lavoro e converta visitatori in clienti.

**Obiettivi:**
- Mostrare il portfolio in modo cinematografico e luxury
- Generare richieste di preventivo e prenotazioni via WhatsApp
- Posizionarsi su Google per ricerche locali (Mortara, Pavia, Garlasco, Vigevano)
- Costruire fiducia con prove sociali (recensioni, storia del brand)

---

## 2. Soluzione

**Proposta di valore:** Un sito marketing performante, mobile-first, con galleria ad alta qualità, lightbox interattiva, sezioni servizi espandibili e CTA WhatsApp — ottimizzato per SEO locale e ricerche "fotografo + città".

**Flusso principale:**
1. Visitatore arriva da Google (SEO locale) o Instagram
2. Hero cinematografico cattura l'attenzione
3. Sezione servizi espandibile guida verso la specialità cercata
4. Galleria con lightbox mostra la qualità del lavoro
5. CTA WhatsApp converte il visitatore in lead diretto
6. Recensioni e storia personale (Giorgio & Silvana) costruiscono fiducia

---

## 3. Utenti Target

| Segmento | Bisogno |
|---|---|
| Proprietari di cani/gatti | Ritratto professionale del proprio animale |
| Coppie/famiglie | Book fotografico outdoor o in studio |
| Aziende locali | Foto prodotto o eventi corporate |

**Area geografica:** Mortara (PV), Pavia, Garlasco, Vigevano, Abbiategrasso

---

## 4. Pagine e Struttura

```
/                          → Homepage (hero + servizi + galleria + CTA)
/fotografia-animali        → Specialità: ritratti cani e gatti
/fotografia-studio         → Studio fotografico: book, ritratti
/fotografia-allaperto      → Outdoor: paesaggi, drone
/cookie-policy             → Cookie policy GDPR
/privacy-policy            → Privacy policy GDPR
```

---

## 5. Tech Stack

| Layer | Tecnologia |
|---|---|
| Framework | Next.js 16 (App Router) + React 19 + TypeScript |
| Styling | Tailwind CSS 3.4 + sistema colori brand custom |
| Auth | Supabase SSR (area prenotazioni futura) |
| Immagini | Next.js Image (2× retina, lazy loading, WebP) |
| Animazioni | CSS scroll-driven + ScrollReveal custom |
| SEO | Open Graph, Twitter Cards, JSON-LD LocalBusiness, sitemap |
| Deployment | Vercel |

---

## 6. Design System

- **Font:** Serif (headline) + Script (accenti) + Sans (corpo)
- **Colori:** Off-white brand (`#FAF9F6`), oro accento (`#DFCF86`), blu brand
- **Stile:** Luxury, cinematografico, warm — ispirato a brand fotografici premium

---

## 7. KPI di Successo

- Posizionamento Google per "fotografo animali Mortara/Pavia"
- Click su CTA WhatsApp (tasso conversione)
- Core Web Vitals: LCP < 2.5s, CLS < 0.1
- Richieste di preventivo mensili

---

## 8. Note Sviluppo

- Le immagini vanno servite in formato WebP con `sizes` prop corretti per evitare blur su schermi retina
- Il cookie banner rispetta GDPR italiano
- Il lightbox supporta swipe mobile, tastiera e fullscreen
- Instagram link punta al profilo ufficiale dello studio
