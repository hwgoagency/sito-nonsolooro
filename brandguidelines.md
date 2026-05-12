# Brand Guidelines — Non Solo Oro Roma

## Identità del Brand

**Nome:** Non Solo Oro  
**Sede:** Via del Pellegrino, Roma — zona Campo de' Fiori  
**Fondato:** 1997  
**Concept:** Gioielleria di quartiere con un'anima da bottega storica romana. Non Solo Oro non vende solo metalli preziosi: vende fiducia, memoria e valore nel tempo. Il cliente non è un consumatore occasionale — è qualcuno che porta con sé un ricordo, un'eredità, o una decisione importante.  
**Payoff:** *Valore che dura nel tempo*  
**Tono di voce:** Autorevole ma mai freddo. Preciso come un orafo, caldo come un commerciante di quartiere storico. Parla da esperto, non da venditore. Trasmette competenza e rassicurazione, soprattutto sul compro oro e la valutazione dei metalli.

---

## Palette Colori

Usa **esclusivamente** questi colori. Derivati direttamente dall'identità visiva del logo.

### Colori Principali

| Nome | HEX | RGB | Uso principale |
|---|---|---|---|
| **Verde Petrolio** | `#1A4A5A` | R:26 G:74 B:90 | Background principale, header, sezioni istituzionali |
| **Oro Antico** | `#C9A84C` | R:201 G:168 B:76 | CTA, titoli su sfondo scuro, elementi decorativi, accenti preziosi |
| **Avorio Caldo** | `#F5EDD8` | R:245 G:237 B:216 | Background sezioni chiare, testi su sfondi scuri (alternativa) |

### Colori Secondari

| Nome | HEX | RGB | Uso principale |
|---|---|---|---|
| **Notte Profonda** | `#0D2430` | R:13 G:36 B:48 | Footer, overlay, massimo contrasto su sfondi scuri |
| **Oro Chiaro** | `#E8C97A` | R:232 G:201 B:122 | Hover state oro, sfumature luminose, glitter effect leggero |
| **Grigio Platino** | `#C0BEB8` | R:192 G:190 B:184 | Elementi secondari, didascalie, separatori neutri |

### CSS Custom Properties (da inserire in `:root`)

```css
:root {
  /* Colori primari */
  --color-verde-petrolio:  #1A4A5A;
  --color-oro-antico:      #C9A84C;
  --color-avorio-caldo:    #F5EDD8;

  /* Colori secondari */
  --color-notte-profonda:  #0D2430;
  --color-oro-chiaro:      #E8C97A;
  --color-grigio-platino:  #C0BEB8;

  /* Alias semantici */
  --color-background-dark: var(--color-verde-petrolio);
  --color-background-light: var(--color-avorio-caldo);
  --color-text-on-dark:    var(--color-avorio-caldo);
  --color-text-on-light:   var(--color-verde-petrolio);
  --color-accent:          var(--color-oro-antico);
  --color-accent-hover:    var(--color-oro-chiaro);
  --color-footer:          var(--color-notte-profonda);
}
```

### Regole d'uso colori

- Il **Verde Petrolio** è il colore identitario del brand. È il background dominante nelle sezioni istituzionali e nel header.
- L'**Oro Antico** è il colore dell'azione e del valore: bottoni primari, titoli su sfondo scuro, elementi che devono evocare preziosità.
- L'**Avorio Caldo** sostituisce il bianco puro in tutte le sezioni chiare. Il bianco puro `#FFFFFF` non è mai usato — abbassa il senso di preziosità.
- Il **Notte Profonda** si usa per il footer e gli overlay che richiedono massimo contrasto.
- Il **Grigio Platino** è un colore neutro di servizio: non evoca valore, usarlo con parsimonia e mai come colore dominante.
- Non usare mai l'Oro Antico come colore di sfondo per interi blocchi di testo — è un accento, non una base.

---

## Tipografia

### Font Stack

| Ruolo | Font | Stile | Note |
|---|---|---|---|
| **Logotipo** | Custom (file SVG/PNG originale) | Serif maiuscolo | Non replicabile via CSS. Usare sempre l'asset originale. |
| **Headline / Titoli principali** | `Cormorant Garamond` | Semibold / Bold | Serif elegante con proporzioni da incisione. Evoca oreficeria storica. |
| **Body / Testi di servizio** | `Josefin Sans` | Light / Regular | Condensato, geometrico, leggibile. Contrasta bene con il serif delle headline. |
| **Fallback sicuro** | `Georgia, serif` | — | Solo come fallback in assenza di Cormorant. |

### Import (Google Fonts)

```css
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Josefin+Sans:wght@300;400;600&display=swap');
```

### CSS Typography Variables

```css
:root {
  --font-headline: 'Cormorant Garamond', 'Georgia', serif;
  --font-body:     'Josefin Sans', 'Arial', sans-serif;

  /* Scale tipografica */
  --text-xs:    0.75rem;    /* 12px */
  --text-sm:    0.875rem;   /* 14px */
  --text-base:  1rem;       /* 16px */
  --text-lg:    1.125rem;   /* 18px */
  --text-xl:    1.25rem;    /* 20px */
  --text-2xl:   1.5rem;     /* 24px */
  --text-3xl:   1.875rem;   /* 30px */
  --text-4xl:   2.25rem;    /* 36px */
  --text-5xl:   3rem;       /* 48px */
  --text-6xl:   4rem;       /* 64px */
}
```

### Regole tipografiche

- **Cormorant Garamond è il font del prestigio.** Usato per headline, titoli di sezione, citazioni evocative, payoff. Dimensione minima: 24px. Può essere usato in corsivo per enfasi emozionale.
- **Josefin Sans è il font dell'informazione.** Testi di corpo, prezzi, orari, descrizioni di servizio, navigazione. Uppercase con `letter-spacing: 0.12em` per etichette e label.
- **Gerarchia chiara:** Headline grandi (Cormorant, 40–64px) + corpo leggibile (Josefin, 15–18px). Non mescolare i due font nella stessa frase.
- **Line-height corpo:** `1.7` per massima leggibilità su sfondi scuri.
- **Colore testo default su sfondo scuro:** `var(--color-avorio-caldo)`.
- **Colore testo default su sfondo chiaro:** `var(--color-verde-petrolio)`.
- Non usare Cormorant Garamond in dimensioni inferiori a 18px — perde leggibilità.

---

## Stile Visivo & Estetica

### Direzione estetica

**Lusso romano classico.** L'estetica si ispira alle boutique storiche del centro di Roma, alle insegne in ottone delle gioiellerie di Via Condotti, all'editoria di gioielleria degli anni '80 italiani. Sobrio, prezioso, mai ostentato. Il brand non urla la propria qualità — la mostra attraverso la cura dei dettagli.

### Texture e atmosfera

- Usare texture di carta vellutata o seta (`noise overlay`) per dare profondità alle sezioni scure. Opacità: 4–8%.
- I bordi decorativi usano linee sottili singole o doppie in `var(--color-oro-antico)`.
- `border-radius` contenuto: max `4px` per elementi UI. Il brand è solido e preciso.
- Ombreggiature: preferire `box-shadow` con tinta verde-scura o oro calda, mai ombre grigie neutre.

```css
/* Ombre calde Non Solo Oro */
--shadow-gold:    0 4px 24px rgba(201, 168, 76, 0.18);
--shadow-gold-lg: 0 8px 48px rgba(201, 168, 76, 0.28);
--shadow-dark:    0 4px 24px rgba(13, 36, 48, 0.35);
```

### Logotipo — regole d'uso

Il logotipo è composto da tre elementi inscindibili:
1. **Il diamante** — simbolo del valore e della rarità
2. **I rami d'alloro** — simbolo della tradizione e del riconoscimento
3. **Il nome + anno di fondazione** — ancora di autorevolezza e heritage

- Usare sempre il file SVG/PNG originale. Mai ricreare il logo via CSS o font.
- Su sfondo scuro (Verde Petrolio, Notte Profonda): logo in versione oro.
- Su sfondo chiaro (Avorio Caldo): logo in versione Verde Petrolio o versione bicolor.
- Spazio di rispetto minimo attorno al logo: equivalente all'altezza della lettera "N" del nome.
- Dimensione minima di utilizzo: 100px di larghezza (stampa: 30mm).
- Non modificare le proporzioni. Non applicare filtri o effetti digitali moderni.
- Non usare il solo diamante come logo — il brand è l'insieme completo.

### Fotografia (linee guida)

- Toni caldi, sfondo neutro scuro o texture naturale (legno scuro, marmo, velluto).
- Soggetti preferiti: gioielli su superficie materica, mani che tengono un pezzo, dettagli ravvicinati dell'oreficeria, vetrine storiche.
- Evitare: sfondi bianchi sterili da e-commerce, luce fredda/bluastra, editing eccessivamente patinato.
- Post-processing: contrasto medio-alto, toni giallo-caldi nelle luci, desaturazione leggerissima del blu.
- Per il compro oro: fotografia più documentale e diretta — trasmette trasparenza e onestà.

---

## Comunicazione per Linea di Servizio

Il brand ha due anime comunicative distinte. È fondamentale non confonderle.

### Gioielleria — posizionamento aspirazionale

Tono: evocativo, identitario, emozionale. Non si vende un gioiello, si vende un momento della vita.

> ✅ *"Un pezzo unico per chi sa riconoscere il valore autentico."*  
> ✅ *"Nel cuore di Roma, dal 1997, selezioniamo solo ciò che merita di durare."*  
> ❌ *"Gioielli a prezzi convenienti."*  
> ❌ *"Scopri le nostre offerte."*

- Usare copy lungo su landing page e materiali istituzionali — racconta la storia, il luogo, la selezione.
- Le promozioni esistono ma si comunicano con discrezione: mai "SCONTO" in grassetto, ma "selezione esclusiva" o "condizioni riservate".

### Compro Oro & Metalli Preziosi — posizionamento transazionale

Tono: diretto, rassicurante, professionale. Il cliente ha già deciso di vendere — ha bisogno di fiducia, non di convincimento emotivo.

> ✅ *"Valutazione gratuita e immediata. Prezzi aggiornati ogni giorno al corso ufficiale."*  
> ✅ *"Dal 1997 a Campo de' Fiori: trasparenza, rispetto, pagamento immediato."*  
> ❌ *"Portiamo il massimo valore alle tue memorie."* (troppo astratto per chi vuole certezze)

- Copy breve, claim chiari su: trasparenza della quotazione, pagamento immediato, esperienza e affidabilità.
- Google Ads e Meta Ads su domanda attiva: intercettare chi cerca "compro oro Roma", "valutazione gioielli Roma centro".
- Geotargeting: raggio stretto su Campo de' Fiori, Trastevere, Prati, Pigneto — bacino realistico per un negozio fisico.

---

## Componenti UI — Stile

### Bottoni

```css
/* Bottone primario */
.btn-primary {
  background-color: var(--color-oro-antico);
  color: var(--color-notte-profonda);
  font-family: var(--font-body);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 14px 36px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.25s ease, transform 0.1s ease;
}
.btn-primary:hover {
  background-color: var(--color-oro-chiaro);
  transform: translateY(-1px);
}

/* Bottone secondario (outline oro su scuro) */
.btn-secondary {
  background-color: transparent;
  color: var(--color-oro-antico);
  border: 1.5px solid var(--color-oro-antico);
  font-family: var(--font-body);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  padding: 12px 34px;
  border-radius: 3px;
  cursor: pointer;
  transition: all 0.25s ease;
}
.btn-secondary:hover {
  background-color: var(--color-oro-antico);
  color: var(--color-notte-profonda);
}
```

### Separatori decorativi

```css
/* Separatore oro — sezione nobile */
.divider-nso {
  border: none;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    var(--color-oro-antico) 25%,
    var(--color-oro-antico) 75%,
    transparent
  );
  margin: 48px auto;
  max-width: 160px;
}

/* Separatore doppio per sezioni hero */
.divider-nso-double {
  width: 120px;
  margin: 32px auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.divider-nso-double::before,
.divider-nso-double::after {
  content: '';
  display: block;
  height: 1px;
  background: var(--color-oro-antico);
  opacity: 0.7;
}
.divider-nso-double::before { opacity: 1; }
```

### Card prodotto / gioiello

```css
.card-product {
  background-color: var(--color-verde-petrolio);
  border: 1px solid rgba(201, 168, 76, 0.25);
  border-radius: 4px;
  overflow: hidden;
  transition: box-shadow 0.3s ease, transform 0.2s ease;
}
.card-product:hover {
  box-shadow: var(--shadow-gold-lg);
  transform: translateY(-3px);
}
.card-product__label {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--color-oro-antico);
}
.card-product__title {
  font-family: var(--font-headline);
  font-size: var(--text-xl);
  color: var(--color-avorio-caldo);
}
```

### Navbar

- Background: `var(--color-notte-profonda)` sticky, con leggero effetto blur allo scroll.
- Logo: sempre il file SVG/PNG originale, versione oro.
- Link di navigazione: `Josefin Sans`, uppercase, `letter-spacing: 0.1em`, colore `var(--color-avorio-caldo)`.
- Hover sui link: colore `var(--color-oro-antico)`, transizione 0.2s.
- CTA in navbar: bottone outline oro.

---

## Spacing & Layout

```css
:root {
  --space-xs:   4px;
  --space-sm:   8px;
  --space-md:   16px;
  --space-lg:   24px;
  --space-xl:   40px;
  --space-2xl:  64px;
  --space-3xl:  96px;
  --space-4xl:  128px;

  --container-max:     1200px;
  --container-padding: 24px;
}
```

- Le sezioni principali hanno `padding-top` e `padding-bottom` di almeno `var(--space-3xl)`.
- Layout prevalentemente a due colonne su desktop, colonna singola su mobile.
- Spazio negativo abbondante — la preziosità si respira anche nel silenzio visivo.
- Nessun layout affollato o con troppi elementi in competizione visiva.

---

## Social Media — Linee Guida Visive

### Instagram (canale prioritario)

- **Feed:** alternare scatti di prodotto su sfondo Verde Petrolio e scatti su texture neutre calde (velluto bordeaux, marmo travertino).
- **Palette post:** rispettare i 5 colori ufficiali. Nessun filtro che alteri la dominante verde/oro.
- **Typography nei post:** Cormorant Garamond per headline overlay, Josefin Sans per claim brevi e tag prodotto.
- **Stories:** template fisso con bordo oro sottile e logo in alto a sinistra. CTA sempre in basso.
- **Reels:** brevi (15–30s), produzione curata. Non improvvisati. Musica ambient italiana o classica leggera — no trend audio generici.

### Tono nei caption

- Gioielleria: copy evocativo, emoji con moderazione (massimo 1–2 per post, preferire 💛 ✨ o nessuno).
- Compro oro: copy diretto, no emoji eccessive, call to action chiaro ("Prenota la tua valutazione gratuita — link in bio").

---

## Cosa NON fare

- ❌ Non usare mai il bianco puro `#FFFFFF` come sfondo. Avorio Caldo è il minimo su sfondi chiari.
- ❌ Non usare font sans-serif generici (Inter, Roboto, Arial) — contraddicono il posizionamento premium.
- ❌ Non usare gradienti moderni, neon, glassmorphism o palette fredde.
- ❌ Non modificare proporzioni o colori del logotipo.
- ❌ Non usare il solo diamante o i soli rami d'alloro come elemento isolato — il logo è inscindibile.
- ❌ Non comunicare "risparmio", "outlet" o "prezzi bassi" per la linea gioielleria — distrugge il posizionamento.
- ❌ Non usare l'Oro Antico come colore di sfondo per blocchi testuali estesi.
- ❌ Non mescolare il tono aspirazionale della gioielleria con il tono transazionale del compro oro nello stesso materiale.
- ❌ Non pubblicare contenuti foto/video con luci fredde o sfondi bianchi sterili.
- ❌ Non usare stock photo generiche — ogni immagine deve essere autentica e contestualizzata.

---

## Checklist pre-pubblicazione

- [ ] Background usa `var(--color-verde-petrolio)` o `var(--color-avorio-caldo)`, mai bianco puro
- [ ] Font caricati correttamente (Cormorant Garamond e Josefin Sans da Google Fonts)
- [ ] Palette rispetta esclusivamente i 6 colori ufficiali
- [ ] Logotipo caricato come SVG/PNG originale, non ricreato
- [ ] Tono di voce coerente con la linea di servizio (aspirazionale vs transazionale)
- [ ] Nessun elemento con estetica "tech/moderna" in conflitto col brand
- [ ] Fotografia con toni caldi e coerenti con la direzione estetica
- [ ] Responsive: layout fluido, nessun overflow su mobile
- [ ] Contrasto testo/sfondo accessibile (min. WCAG AA)
- [ ] Copy gioielleria: zero riferimenti a "prezzo basso", "sconto", "offerta"
- [ ] Copy compro oro: chiaro su trasparenza, quotazione, pagamento immediato