import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/gf/Navbar'
import { Footer } from '@/components/gf/Footer'

export const metadata: Metadata = {
  title: 'Cookie Policy | GF Memories Studio',
  description: 'Informativa sull\'uso dei cookie sul sito GF Memories Studio — conformità GDPR.',
  robots: { index: false, follow: false },
}

export default function CookiePolicyPage() {
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
              Cookie Policy
            </h1>
            <p className="font-sans text-brand-text-light text-sm mb-8">
              Ultimo aggiornamento: aprile 2025
            </p>
            <span className="line-gold-left mb-8 block" aria-hidden="true" />

            <div className="font-sans text-brand-text-mid text-base leading-relaxed space-y-6">

              <section>
                <h2 className="font-serif font-semibold text-brand-text-dark text-xl mb-3">
                  1. Cosa sono i cookie
                </h2>
                <p>
                  I cookie sono piccoli file di testo che i siti web visitati inviano al browser dell&apos;utente,
                  dove vengono memorizzati per essere ritrasmessi alla visita successiva. Permettono al sito di
                  riconoscere il dispositivo e memorizzare alcune informazioni.
                </p>
              </section>

              <section>
                <h2 className="font-serif font-semibold text-brand-text-dark text-xl mb-3">
                  2. Cookie utilizzati da questo sito
                </h2>

                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-brand-off-white">
                        <th className="text-left p-3 border border-brand-gray-soft font-semibold text-brand-text-dark">Nome</th>
                        <th className="text-left p-3 border border-brand-gray-soft font-semibold text-brand-text-dark">Tipo</th>
                        <th className="text-left p-3 border border-brand-gray-soft font-semibold text-brand-text-dark">Durata</th>
                        <th className="text-left p-3 border border-brand-gray-soft font-semibold text-brand-text-dark">Finalità</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border border-brand-gray-soft font-mono text-xs">gf_cookies_accepted</td>
                        <td className="p-3 border border-brand-gray-soft">Tecnico</td>
                        <td className="p-3 border border-brand-gray-soft">Persistente (localStorage)</td>
                        <td className="p-3 border border-brand-gray-soft">Memorizza la preferenza dell&apos;utente sul consenso cookie</td>
                      </tr>
                      <tr className="bg-brand-off-white/50">
                        <td className="p-3 border border-brand-gray-soft font-mono text-xs">_ga, _gid</td>
                        <td className="p-3 border border-brand-gray-soft">Analitico (terze parti)</td>
                        <td className="p-3 border border-brand-gray-soft">2 anni / 24 ore</td>
                        <td className="p-3 border border-brand-gray-soft">Google Analytics — statistiche di navigazione anonime (attivo solo con consenso)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="font-serif font-semibold text-brand-text-dark text-xl mb-3">
                  3. Cookie tecnici
                </h2>
                <p>
                  I cookie tecnici sono necessari al corretto funzionamento del sito e non richiedono il
                  consenso dell&apos;utente ai sensi del Provvedimento del Garante Privacy dell&apos;8 maggio 2014
                  e del Regolamento UE 2016/679 (GDPR).
                </p>
              </section>

              <section>
                <h2 className="font-serif font-semibold text-brand-text-dark text-xl mb-3">
                  4. Cookie analitici di terze parti
                </h2>
                <p>
                  Il sito utilizza Google Analytics con IP anonimizzato per raccogliere statistiche
                  aggregate sulle visite. Questi cookie vengono installati solo se l&apos;utente ha
                  prestato il consenso tramite il banner presente nella prima visita.
                </p>
                <p className="mt-3">
                  Per maggiori informazioni: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Privacy Policy Google</a>. Per disattivare il tracciamento di Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Google Analytics Opt-out</a>.
                </p>
              </section>

              <section>
                <h2 className="font-serif font-semibold text-brand-text-dark text-xl mb-3">
                  5. Come gestire i cookie
                </h2>
                <p>
                  L&apos;utente può rifiutare i cookie analitici tramite il banner al primo accesso.
                  È possibile modificare la preferenza in qualsiasi momento svuotando il localStorage
                  del browser e visitando nuovamente il sito.
                </p>
                <p className="mt-3">
                  In alternativa, la maggior parte dei browser permette di configurare le preferenze
                  sui cookie nelle impostazioni. Di seguito i link alle guide dei principali browser:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Safari</a></li>
                  <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Microsoft Edge</a></li>
                </ul>
              </section>

              <section>
                <h2 className="font-serif font-semibold text-brand-text-dark text-xl mb-3">
                  6. Titolare del trattamento
                </h2>
                <p>
                  GF Memories Studio — Via Luigi Goia, 31, 27036 Mortara (PV).{' '}
                  Email: <a href="mailto:info@CfStudio.com" className="text-brand-blue hover:underline">info@CfStudio.com</a>.
                </p>
                <p className="mt-3">
                  Per informazioni più ampie consultare la{' '}
                  <Link href="/privacy-policy" className="text-brand-blue hover:underline">
                    Privacy Policy
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
