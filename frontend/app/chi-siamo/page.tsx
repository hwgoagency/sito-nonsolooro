import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ChiSiamo() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-avorio-caldo pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-headline text-5xl md:text-6xl text-verde-petrolio mb-6 text-center">
            La Nostra Storia
          </h1>
          <div className="divider-nso"></div>
          
          <div className="text-verde-petrolio font-body text-lg leading-relaxed space-y-8 mt-12">
            <p>
              Tutto ha inizio in un indimenticabile mese di febbraio del 1997. Due ragazzi giovani, spaventati ma pieni di energia, 
              rilevano un&apos;antica licenza in una delle vie più storiche e affascinanti di Roma: <strong>Via del Pellegrino 193</strong>.
              Nasce così <strong>Non Solo Oro</strong>.
            </p>

            <h2 className="font-headline text-3xl text-oro-antico pt-8">Alessandro e Giuliano: Due Anime di Roma</h2>
            <p>
              Siamo due soci, tanto diversi quanto complementari. Alessandro, nato nel &apos;65 in una famiglia romana verace e cresciuto 
              nelle piazze, conosce bene &quot;la strada&quot; e il vero valore del sudore e dei sacrifici. Giuliano proviene invece dai 
              quartieri bene, portando con sé una nobiltà d&apos;animo e un&apos;eleganza diversa. Dopo più di trent&apos;anni, qualche 
              litigio (che fa parte di ogni vera società) e infiniti sorrisi, la nostra sintonia è il cuore pulsante del negozio.
              Chi entra trova subito energia, empatia e schiettezza.
            </p>

            <h2 className="font-headline text-3xl text-oro-antico pt-8">Una Location Unica al Mondo</h2>
            <p>
              Siamo a pochi passi da Campo de&apos; Fiori. <em>Via del Pellegrino</em>, come si legge sulle guide turistiche e sui 
              nostri antichi libri Bulgari, è una via del 1400. Era la strada che i pellegrini percorrevano per raggiungere il 
              Vaticano. Negli anni ha ospitato botteghe di orafi, depositi, stalle, e ha visto l&apos;evoluzione intera di Roma.
            </p>
            <p>
              Il nostro locale si trova nello storico <strong>Palazzo della Cancelleria</strong>. C&apos;è una particolarità che ci fa 
              sempre sorridere: il negozio sorge in un territorio extra-statale, di pertinenza del Vaticano. È un angolo di storia 
              così antico e vincolato che nessuna legge comunale vi consentirebbe mai l&apos;apertura di un&apos;attività commerciale oggi.
            </p>

            <h2 className="font-headline text-3xl text-oro-antico pt-8">Oltre il Commercio: Storie e Psicologia</h2>
            <p>
              Il nostro non è solo un lavoro di commercio, è <strong>psicologia e umanità</strong>. In questi decenni abbiamo 
              conosciuto di tutto. Facciamo stime in case della politica o dell&apos;alta società, trovando casseforti celate nei posti 
              più impensabili. Ma entriamo anche in case dove i gioielli raccontano i sacrifici di una vita, i risparmi degli anni &apos;50 
              e &apos;70. Ascoltare le storie dietro a quegli oggetti, a volte venduti per necessità in periodi difficili, è la parte 
              più delicata e profonda del nostro mestiere.
            </p>

            <h2 className="font-headline text-3xl text-oro-antico pt-8">Da Roma al Resto del Mondo</h2>
            <p>
              Oggi l&apos;oro ha raggiunto cifre storiche. La clientela è cambiata, accogliamo sportivi, persone illustri e tantissimi 
              turisti che tornano col sorriso. Grazie a Instagram, i nostri pezzi unici hanno varcato i confini di Roma: spediamo 
              in Australia, in California e in tutto il mondo, superando le difficoltà assicurative legate ai preziosi. 
              Siamo fieri di portare l&apos;autenticità della bottega romana in ogni continente.
            </p>

            <p className="pt-8 italic text-notte-profonda text-center text-xl">
              &quot;Entri timoroso, esci con il sorriso. Questa è la garanzia che diamo da trent&apos;anni.&quot;
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
