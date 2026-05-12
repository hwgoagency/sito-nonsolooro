import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const reviews = [
    {
      name: "Chiara Bassanini",
      text: "Un piccolo mondo di infinite meraviglie. Gioielleria, argenti, piccoli oggetti di corallo, avorio, giada, pietre dure, deliziose antichità...",
      rating: 5,
    },
    {
      name: "Giuseppe Davide Pappalardo",
      text: "E' la prima volta che acquisto da questa gioielleria. Esperienza eccellente su tutti i punti di vista. Personale gentile pronto a rispondere ad ogni quesito.",
      rating: 5,
    },
    {
      name: "Ronil Shah",
      text: "Really cool spot with two friendly guys who aren't pushy about trying to sell, which I really appreciated. Bought very unique pieces from here...",
      rating: 5,
    },
  ];

  return (
    <>
      <Navbar />
      
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center justify-center bg-verde-petrolio pt-20">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] mix-blend-overlay"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <div className="mb-8 flex justify-center">
              <Image 
                src="/logo-v3.png" 
                alt="Logo Non Solo Oro" 
                width={180} 
                height={180} 
                className="h-32 w-auto object-contain"
              />
            </div>
            <h1 className="font-headline text-5xl md:text-7xl text-avorio-caldo mb-6 leading-tight">
              Valore che dura <br /> <span className="italic text-oro-antico">nel tempo.</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-grigio-platino mb-12 max-w-2xl mx-auto leading-relaxed">
              Dal 1997 nel cuore di Roma, a Campo de&apos; Fiori. 
              Selezioniamo i metalli e le pietre più preziose, per offrirvi gioielli unici e valutazioni trasparenti.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="#gioielleria" className="btn-primary w-full sm:w-auto text-center">
                Scopri la Gioielleria
              </Link>
              <Link href="#compro-oro" className="btn-secondary w-full sm:w-auto text-center">
                Valutazione Gratuita
              </Link>
            </div>
          </div>
        </section>

        {/* ESTRATTO STORIA */}
        <section className="py-24 bg-avorio-caldo text-verde-petrolio relative">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-headline text-4xl md:text-5xl mb-8">Una Bottega Storica Romana</h2>
            <div className="divider-nso-double"></div>
            <p className="font-body text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mt-8">
              Non Solo Oro non vende solo metalli preziosi: vende fiducia, memoria e valore nel tempo. 
              L&apos;autenticità è il nostro marchio di fabbrica.
            </p>
            <div className="mt-8">
              <Link href="/chi-siamo" className="text-oro-antico hover:text-verde-petrolio font-body uppercase tracking-widest text-sm transition-colors border-b border-oro-antico pb-1">
                Scopri la nostra storia
              </Link>
            </div>
          </div>
        </section>

        {/* GIOIELLERIA (Preview) */}
        <section id="gioielleria" className="py-24 bg-verde-petrolio text-avorio-caldo">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="font-body text-sm uppercase tracking-[0.15em] text-oro-antico">Lusso Romano Classico</span>
              <h2 className="font-headline text-4xl md:text-6xl mt-4 mb-6">Gioielleria & Preziosi</h2>
              <div className="divider-nso"></div>
              <p className="font-body text-lg text-grigio-platino max-w-2xl mx-auto">
                Un pezzo unico per chi sa riconoscere il valore autentico. Nel cuore di Roma, selezioniamo solo ciò che merita di durare.
              </p>
              <div className="mt-8">
                <Link href="/gioielleria" className="btn-secondary inline-block">
                  Scopri le Perizie e la Collezione
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { src: "/instagram/2026-05-05_08-33-08_UTC.jpg", title: "Novità da Instagram" },
                { src: "/instagram/2026-04-28_14-05-41_UTC.jpg", title: "Nuovi Arrivi" },
                { src: "/instagram/2023-12-02_15-43-30_UTC_1.jpg", title: "Selezione Bottega" }
              ].map((item, idx) => (
                <div key={idx} className="card-product group cursor-pointer p-6 flex flex-col items-center text-center">
                  <div className="w-full aspect-square bg-notte-profonda rounded mb-6 relative overflow-hidden group-hover:shadow-lg transition-all">
                    <Image 
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="card-product__label mb-2">Collezione Esclusiva</span>
                  <h3 className="card-product__title">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPRO ORO (Preview) */}
        <section id="compro-oro" className="py-24 bg-notte-profonda text-avorio-caldo">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-body text-sm uppercase tracking-[0.15em] text-oro-antico">Quotazioni Ufficiali</span>
              <h2 className="font-headline text-4xl md:text-5xl mt-4 mb-6">Compro Oro & Valutazione Metalli</h2>
              <p className="font-body text-lg text-grigio-platino leading-relaxed mb-8">
                Valutazione gratuita e immediata. Prezzi aggiornati ogni giorno al corso ufficiale. 
                Siamo i professionisti di fiducia per vendere il tuo oro e argento in totale sicurezza.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/compro-oro" className="btn-primary inline-block text-center">Scopri il Processo</Link>
                <Link href="/contatti" className="btn-secondary inline-block text-center border-grigio-platino text-grigio-platino hover:bg-grigio-platino hover:text-notte-profonda">Richiedi Valutazione</Link>
              </div>
            </div>
            <div className="bg-verde-petrolio p-10 rounded shadow-dark border border-oro-antico/20">
              <h3 className="font-headline text-3xl text-oro-antico mb-6 text-center">Perché Sceglierci?</h3>
              <p className="font-body text-grigio-platino leading-relaxed text-center italic">
                &quot;Professionalità e gentilezza. Giuliano e Alessandro sono due persone meravigliose, 
                professionalmente preparatissimi e di una trasparenza unica.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* RECENSIONI (Preview) */}
        <section className="py-24 bg-avorio-caldo text-verde-petrolio">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="font-headline text-4xl md:text-5xl text-center mb-4">Dicono di Noi</h2>
            <div className="divider-nso"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {reviews.map((review, idx) => (
                <div key={idx} className="bg-white p-8 shadow-sm rounded border border-grigio-platino/30 flex flex-col justify-between">
                  <div>
                    <div className="flex text-oro-antico mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <p className="font-body italic text-notte-profonda/80 leading-relaxed mb-6">
                      &quot;{review.text}&quot;
                    </p>
                  </div>
                  <h4 className="font-headline font-bold text-lg">{review.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
