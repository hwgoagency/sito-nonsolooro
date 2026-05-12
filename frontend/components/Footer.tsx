import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-notte-profonda text-avorio-caldo py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="mb-6">
            <Image 
              src="/logo-v3.png" 
              alt="Non Solo Oro" 
              width={140} 
              height={140} 
              className="h-20 w-auto object-contain"
            />
          </div>
          <p className="text-sm leading-relaxed text-grigio-platino mb-6">
            Bottega storica romana dal 1997. Non vendiamo solo metalli preziosi,
            vendiamo fiducia, memoria e valore nel tempo.
          </p>
          <a
            href="https://www.instagram.com/nonsoloororoma/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-oro-antico hover:text-oro-chiaro uppercase tracking-widest text-xs font-semibold"
          >
            Seguici su Instagram
          </a>
        </div>

        <div>
          <h4 className="font-headline text-xl text-oro-antico mb-6">I Nostri Servizi</h4>
          <ul className="space-y-4 text-sm text-grigio-platino">
            <li>
              <Link href="#gioielleria" className="hover:text-avorio-caldo transition-colors">
                Gioielleria e Preziosi
              </Link>
            </li>
            <li>
              <Link href="#compro-oro" className="hover:text-avorio-caldo transition-colors">
                Compro Oro e Valutazione
              </Link>
            </li>
            <li>
              <Link href="#contatti" className="hover:text-avorio-caldo transition-colors">
                Richiedi un Appuntamento
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline text-xl text-oro-antico mb-6">Dove Siamo</h4>
          <address className="not-italic text-sm text-grigio-platino space-y-2">
            <p>Via del Pellegrino</p>
            <p>Zona Campo de&apos; Fiori</p>
            <p>00186 Roma RM, Italia</p>
          </address>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-verde-petrolio flex flex-col md:flex-row justify-between items-center text-xs text-grigio-platino">
        <p>&copy; {new Date().getFullYear()} Non Solo Oro. Tutti i diritti riservati.</p>
        <p className="mt-4 md:mt-0">Valore che dura nel tempo.</p>
      </div>
    </footer>
  );
}
