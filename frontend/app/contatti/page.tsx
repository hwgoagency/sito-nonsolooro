import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function Contatti() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-avorio-caldo pt-32 pb-24 text-verde-petrolio">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="font-headline text-5xl md:text-6xl mb-6 text-verde-petrolio">
            Contatti
          </h1>
          <div className="divider-nso"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16 text-left">
            <div className="bg-white p-10 rounded shadow-sm border border-grigio-platino/30">
              <h2 className="font-headline text-3xl text-oro-antico mb-6">Dove Siamo</h2>
              <address className="not-italic font-body text-lg text-verde-petrolio leading-relaxed space-y-4">
                <p>
                  <strong>Non Solo Oro</strong><br/>
                  Via del Pellegrino<br/>
                  Zona Campo de&apos; Fiori<br/>
                  00186 Roma RM, Italia
                </p>
                <p className="pt-4">
                  Passa in bottega per una valutazione gratuita o per scoprire le nostre collezioni. 
                  L&apos;accoglienza e la discrezione sono il nostro punto di forza.
                </p>
              </address>
              
              <h2 className="font-headline text-3xl text-oro-antico mt-10 mb-6">Contatti Diretti</h2>
              <div className="flex flex-col space-y-3">
                <a 
                  href="mailto:Nonsoloro97@libero.it" 
                  className="font-body text-verde-petrolio hover:text-oro-antico underline transition-colors text-lg"
                >
                  Email: Nonsoloro97@libero.it
                </a>
                <a 
                  href="https://www.instagram.com/nonsoloororoma/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-body text-verde-petrolio hover:text-oro-antico underline transition-colors text-lg"
                >
                  Instagram: @nonsoloororoma
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
