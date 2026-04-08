import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/gf/Navbar'
import { Footer } from '@/components/gf/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | GF Memories Studio',
  description: 'Informativa sul trattamento dei dati personali ai sensi del GDPR — GF Memories Studio, Mortara (PV).',
  robots: { index: false, follow: false },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-brand-off-white pt-28 pb-20">
        <div className="container-site max-w-3xl">
          {/* Back */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-sans text-xs text-brand-text-light hover:text-brand-blue transition-colors uppercase tracking-wider mb-8"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Torna alla home
          </Link>

          <article className="bg-white rounded-2xl shadow-soft p-8 md:p-12">
            <h1 className="font-serif font-semibold text-brand-text-dark mb-2" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}>
              Privacy Policy
            </h1>
            <p className="font-sans text-brand-text-light text-sm mb-8">
              Ultimo aggiornamento: aprile 2025
            </p>
            <span className="line-gold-left mb-8 block" aria-hidden="true" />

            <div className="font-sans text-brand-text-mid text-base leading-relaxed space-y-6">

              <section>
                <h2 className="font-serif font-semibold text-brand-text-dark text-xl mb-3">
                  1. Titolare del trattamento
                </h2>
                <p>
                  Il titolare del trattamento dei dati personali è <strong>GF Memories Studio</strong>,
                  con sede in Via Luigi Goia, 31 — 27036 Mortara (PV), Italia.
                  Email: <a href="mailto:info@CfStudio.com" className="text-brand-blue hover:underline">info@CfStudio.com</a> — Tel: 327 298 4490.
                </p>
              </section>

              <section>
                <h2 className="font-serif font-semibold text-brand-text-dark text-xl mb-3">
                  2. Tipologie di dati raccolti
                </h2>
                <p>Tra i dati personali raccolti da questo sito, a titolo indicativo e non esaustivo:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li>Dati di navigazione (indirizzo IP, tipo di browser, pagine visitate, ora di accesso)</li>
                  <li>Dati forniti volontariamente dall&apos;utente tramite moduli di contatto o WhatsApp</li>
                  <li>Cookie tecnici e analitici (vedi Cookie Policy)</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif font-semibold text-brand-text-dark text-xl mb-3">
                  3. Finalità del trattamento
                </h2>
                <p>I dati sono trattati per le seguenti finalità:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li>Rispondere a richieste di contatto e preventivi</li>
                  <li>Gestione del rapporto contrattuale con il cliente</li>
                  <li>Analisi statistica anonima delle visite al sito (se consenso cookie è dato)</li>
                  <li>Adempimento di obblighi di legge</li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif font-semibold text-brand-text-dark text-xl mb-3">
                  4. Base giuridica del trattamento
                </h2>
                <p>
                  Il trattamento avviene sulla base del consenso dell&apos;interessato (Art. 6.1.a GDPR),
                  dell&apos;esecuzione di un contratto (Art. 6.1.b GDPR) e dell&apos;adempimento di obblighi
                  di legge (Art. 6.1.c GDPR).
                </p>
              </section>

              <section>
                <h2 className="font-serif font-semibold text-brand-text-dark text-xl mb-3">
                  5. Conservazione dei dati
                </h2>
                <p>
                  I dati di contatto sono conservati per il tempo necessario a soddisfare la richiesta e,
                  nel caso di contratto, per il periodo di legge (10 anni per obblighi fiscali).
                  I dati di navigazione sono conservati per massimo 12 mesi.
                </p>
              </section>

              <section>
                <h2 className="font-serif font-semibold text-brand-text-dark text-xl mb-3">
                  6. Condivisione dei dati
                </h2>
                <p>
                  I dati non sono venduti né ceduti a terzi. Possono essere comunicati esclusivamente a
                  fornitori di servizi tecnici (hosting, email) che agiscono come responsabili del
                  trattamento ai sensi dell&apos;Art. 28 GDPR.
                </p>
              </section>

              <section>
                <h2 className="font-serif font-semibold text-brand-text-dark text-xl mb-3">
                  7. Diritti dell&apos;interessato
                </h2>
                <p>Ai sensi degli artt. 15-22 GDPR, l&apos;interessato ha diritto di:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li>Accedere ai propri dati personali</li>
                  <li>Chiederne la rettifica o la cancellazione</li>
                  <li>Opporsi al trattamento o richiederne la limitazione</li>
                  <li>Richiedere la portabilità dei dati</li>
                  <li>Revocare il consenso in qualsiasi momento</li>
                </ul>
                <p className="mt-3">
                  Per esercitare questi diritti scrivere a:{' '}
                  <a href="mailto:info@CfStudio.com" className="text-brand-blue hover:underline">info@CfStudio.com</a>.
                </p>
              </section>

              <section>
                <h2 className="font-serif font-semibold text-brand-text-dark text-xl mb-3">
                  8. Reclami
                </h2>
                <p>
                  L&apos;interessato ha il diritto di proporre reclamo al Garante per la Protezione dei
                  Dati Personali (Autorità di controllo italiana) seguendo le procedure indicate sul
                  sito{' '}
                  <a
                    href="https://www.garanteprivacy.it"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue hover:underline"
                  >
                    www.garanteprivacy.it
                  </a>.
                </p>
              </section>

              <section>
                <h2 className="font-serif font-semibold text-brand-text-dark text-xl mb-3">
                  9. Cookie
                </h2>
                <p>
                  Per informazioni sui cookie utilizzati consultare la{' '}
                  <Link href="/cookie-policy" className="text-brand-blue hover:underline">
                    Cookie Policy
                  </Link>.
                </p>
              </section>

            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
}
