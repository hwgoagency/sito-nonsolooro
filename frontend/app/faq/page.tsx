import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FAQ() {
  const faqs = [
    {
      q: "Come avviene la valutazione del mio oro?",
      a: "La valutazione è gratuita e trasparente. Esaminiamo il metallo in tua presenza, ne verifichiamo la caratura e lo pesiamo con bilance certificate. Per lo scarto destinato alla fusione, la precisione è garantita dal saggio in fonderia che determina il titolo esatto dell'oro dopo la fusione in lingotto."
    },
    {
      q: "Quali sono le modalità di pagamento?",
      a: "Nel rispetto delle leggi vigenti, per importi fino a 499€ è possibile il pagamento in contanti. Per cifre superiori, il pagamento avviene esclusivamente tramite bonifico bancario istantaneo o ordinario, garantendo massima sicurezza e tracciabilità per entrambe le parti."
    },
    {
      q: "È sicuro vendere oro? Quali documenti servono?",
      a: "Assolutamente sì. Operiamo seguendo rigide normative anti-ricettazione. Per ogni transazione è obbligatorio presentare un documento d'identità valido. Ogni operazione viene registrata per tutelare sia il negozio che il cliente."
    },
    {
      q: "Valutate anche gioielli con pietre preziose o antichi?",
      a: "Certamente. Utilizziamo il listino internazionale Rapaport per la valutazione dei diamanti e analizziamo con cura purezza, taglio e colore di smeraldi, rubini e zaffiri. Grazie ai nostri libri storici, identifichiamo punzoni e marchi per valorizzare pezzi d'epoca e antiquariato."
    },
    {
      q: "Effettuate spedizioni fuori Roma o all'estero?",
      a: "Sì, grazie alla nostra visibilità su Instagram spediamo in tutto il mondo, dall'Australia alla California. Utilizziamo spedizionieri specializzati in valori con copertura assicurativa completa per garantire che il tuo acquisto arrivi in totale sicurezza."
    },
    {
      q: "Fate stime a domicilio per eredità o svuoto casa?",
      a: "Sì, effettuiamo perizie e stime a domicilio in tutta Roma per interi lotti che includono non solo gioielli e argenteria, ma anche mobili antichi, quadri e ceramiche, avvalendoci di una rete di esperti d'arte di nostra fiducia."
    },
    {
      q: "Posso avere una garanzia sull'autenticità?",
      a: "Ogni gioiello di rilievo che vendiamo è accompagnato da un nostro certificato di autenticità, firmato e spesso sigillato con la nostra ceralacca, che ne attesta le caratteristiche, la provenienza e la storia."
    }
  ];

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-verde-petrolio pt-32 pb-24 text-avorio-caldo">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-headline text-5xl md:text-6xl text-center mb-6 text-oro-antico">
            Domande Frequenti
          </h1>
          <div className="divider-nso"></div>
          
          <div className="space-y-8 mt-12">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-notte-profonda p-8 rounded border border-oro-antico/20">
                <h3 className="font-headline text-2xl text-oro-antico mb-4">{faq.q}</h3>
                <p className="font-body text-grigio-platino leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
