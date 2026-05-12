import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Gioielleria() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-verde-petrolio pt-32 pb-24 text-avorio-caldo">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-headline text-5xl md:text-6xl text-oro-antico mb-6 text-center">
            Gioielleria e Perizie
          </h1>
          <div className="divider-nso"></div>
          
          <div className="font-body text-lg leading-relaxed space-y-8 mt-12 text-grigio-platino">
            <p>
              Nel nostro negozio transitano pezzi di storia: gioielli europei antichi, creazioni indiane, 
              monili dell&apos;Africa settentrionale e capolavori artigianali del Novecento. Maneggiare un gioiello che ha 
              magari più di cento anni è un&apos;emozione che ci accompagna da sempre.
            </p>

            <h2 className="font-headline text-3xl text-oro-antico pt-8">Il Linguaggio Segreto dei Punzoni</h2>
            <p>
              Ogni gioiello di valore ha una storia, e noi la leggiamo attraverso i <strong>punzoni</strong>. 
              Si tratta di minuscoli bolli impressi nel metallo che raccontano la provenienza, il titolo dell&apos;oro, 
              l&apos;anno di produzione e persino l&apos;artigiano che l&apos;ha forgiato. Grazie a una vasta collezione di 
              <em>libri storici del settore</em> che possediamo in negozio, incrociamo le date e risaliamo ai 
              maestri orafi originali.
            </p>
            <p>
              Quando vi vendiamo un oggetto di valore, la sua storia vi viene consegnata nero su bianco: 
              lo accompagniamo con un <strong>certificato di garanzia sigillato con ceralacca</strong>, a prova della sua autenticità.
            </p>

            <h2 className="font-headline text-3xl text-oro-antico pt-8">Pietre Preziose: Diamanti, Zaffiri, Smeraldi e Rubini</h2>
            <p>
              Non c&apos;è vero gioiello senza le grandi pietre preziose o le affascinanti semipreziose (topazi, acquemarine, ametiste, granati). 
              Quando valutiamo una gemma, non ci affidiamo al caso:
            </p>
            <ul className="space-y-4 list-disc pl-6">
              <li>Valutiamo il <strong>taglio, il colore e la purezza</strong>.</li>
              <li>Per i diamanti ci affidiamo alle quotazioni internazionali del <strong>Listino Rapaport</strong>.</li>
              <li>Siamo esperti nell&apos;individuare alterazioni. Ad esempio, nel passato andavano di moda le cosiddette <em>"doppiette"</em>, pietre composte per metà da vetro e per metà da una lamina di smeraldo vero, montate in modo da sembrare un pezzo unico. Oggi, con i nostri strumenti, analizziamo ogni singola inclusione.</li>
            </ul>

            <h2 className="font-headline text-3xl text-oro-antico pt-8">Argenti, Antiquariato e Stime a Domicilio</h2>
            <p>
              Oltre all&apos;oro, l&apos;<strong>argento</strong> segue lo stesso processo di ricerca storica e selezione. 
              Siamo chiamati spesso a fare stime a domicilio in tutta Roma, dove non valutiamo solo preziosi.
            </p>
            <p>
              Capita spesso che un cliente debba svuotare un immobile storico: in questi casi, ci avvaliamo di una rete di 
              collaboratori ed esperti d&apos;arte di nostra massima fiducia. Così riusciamo a gestire interi blocchi, che includono 
              mobili antichi, quadri, ceramiche (escludendo gli avori, per chiare questioni etiche odierne), 
              offrendo un servizio completo, sicuro e altamente qualificato.
            </p>

            <div className="mt-12 text-center">
              <Link href="/contatti" className="btn-secondary inline-block">
                Contattaci per una Perizia
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
