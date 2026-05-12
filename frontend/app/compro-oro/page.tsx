import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ComproOro() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-avorio-caldo pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-headline text-5xl md:text-6xl text-verde-petrolio mb-6 text-center">
            Compro Oro e Valutazioni
          </h1>
          <div className="divider-nso"></div>
          
          <div className="text-verde-petrolio font-body text-lg leading-relaxed space-y-8 mt-12">
            <p>
              In un mercato complesso come quello dei metalli preziosi, la parola d&apos;ordine è <strong>Trasparenza</strong>. 
              Da quando abbiamo iniziato negli anni &apos;90, pagando le vecchie sterline 60.000 lire, ad oggi che l&apos;oro sfiora i mille euro, 
              abbiamo sempre considerato l&apos;oro il <em>bene rifugio per eccellenza</em>.
            </p>

            <h2 className="font-headline text-3xl text-oro-antico pt-8">Il Processo di Valutazione e Fusione</h2>
            <p>
              Cosa succede all&apos;oro che ci vendete? La procedura è rigorosa e affascinante. L&apos;oro che acquistiamo e che destiniamo allo scarto 
              viene preparato e inviato in fonderia. Qui viene fuso a temperature estreme e ridotto a un <strong>lingotto</strong>. 
            </p>
            <p>
              Da questo lingotto viene estratta una piccolissima quantità che andrà in analisi. Questo passaggio è cruciale perché 
              determina il <strong>titolo esatto dell&apos;oro</strong>. In Italia lo standard della gioielleria è il 750 (18 carati), ma spesso capita 
              di incappare in oro basso o in carature più alte: il saggio in fonderia ci dà la verità assoluta.
            </p>

            <h2 className="font-headline text-3xl text-oro-antico pt-8">La Massima Tutela Legale</h2>
            <p>
              Non lasciamo nulla al caso. Ogni operazione di compro oro è tracciata tramite una documentazione stringente:
            </p>
            <ul className="space-y-4 list-disc pl-6">
              <li><strong>Registrazione:</strong> Identifichiamo il venditore con documento d&apos;identità, annotando origine e provenienza degli oggetti per tutelare noi e il cliente da ogni rischio di ricettazione.</li>
              <li><strong>Pagamenti Sicuri:</strong> Come previsto dalla legge, i pagamenti in contanti sono limitati (attualmente fino a 499€). Per importi superiori, operiamo esclusivamente tramite <strong>bonifico bancario tracciato</strong>.</li>
              <li><strong>Quotazioni Trasparenti:</strong> Il pagamento si basa sulla quotazione ufficiale dell&apos;oro in borsa del giorno stesso, calcolata sul titolo effettivo meno la nostra chiara percentuale di intermediazione.</li>
            </ul>

            <h2 className="font-headline text-3xl text-oro-antico pt-8">Perché Venderlo o Investire?</h2>
            <p>
              Ascoltiamo le storie di tutti. C&apos;è chi vende vecchi ricordi rimasti nel cassetto, chi chiude gioiellerie, o chi, in momenti 
              di difficoltà, converte il sudore dei propri genitori in liquidità. Noi siamo lì non solo come commercianti, ma come 
              consulenti (e un po&apos; psicologi), per accompagnarvi nel momento in cui decidete di separarvi da un ricordo prezioso, 
              assicurandoci che riceviate la valutazione più onesta e corretta sul mercato.
            </p>

            <div className="mt-12 text-center">
              <Link href="/contatti" className="btn-primary inline-block">
                Richiedi una Valutazione
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
