import type { Localized } from "@/i18n";

export type ProjectItem = {
  slug: string;
  title: string;
  category: Localized<string>;
  year: string;
  href?: string;
  image?: string;
  hidden?: boolean;
  summary: Localized<string>;
  description: Localized<string[]>;
  tech: Localized<string[]>;
};

const media = "/media";

const uxui: Localized<string> = { it: "UX/UI", en: "UX/UI" };
const graphic: Localized<string> = { it: "Graphic Design", en: "Graphic Design" };

export const projects: ProjectItem[] = [
  {
    slug: "dazn-pass-subscription-ux-flow",
    hidden: true,
    title: "DAZN Pass subscription UX Flow",
    category: uxui,
    year: "2025",
    href: "https://luca.scalvinoni.com/portfolio/dazn-pass-subscription-ux-flow/",
    image: `${media}/dazn-pass-subscription-ux-flow.jpg`,
    summary: {
      it: "Un flusso di sottoscrizione ripensato per far capire in pochi secondi cosa si compra, quanto costa e per quanto tempo.",
      en: "A subscription flow rebuilt so people understand in seconds what they are buying, at what price and for how long.",
    },
    description: {
      it: [
        "Sottoscrivere un pass sportivo dovrebbe essere semplice quanto comprare un biglietto: si sceglie l'evento, si paga, si guarda. Nella pratica il percorso si riempie di piani sovrapposti, condizioni scritte in piccolo e passaggi che sembrano ripetersi. Il progetto parte proprio da qui, ricostruendo l'intero percorso dalla scelta del piano fino alla conferma del pagamento.",
        "Il lavoro è stato organizzato in tre momenti: la mappatura del flusso esistente per individuare i punti in cui l'utente si ferma o torna indietro, la riscrittura della gerarchia delle informazioni su ogni schermata e infine la prototipazione interattiva per verificare il ritmo del percorso e non solo le singole pagine.",
        "Il confronto tra i piani è stato ridotto a poche variabili davvero decisive — durata, contenuti inclusi, prezzo finale — mentre il riepilogo dell'ordine accompagna l'utente fino all'ultimo passaggio, così che il totale non sia mai una sorpresa. Ogni azione riceve un feedback immediato: stati di caricamento, conferme e messaggi d'errore scritti in linguaggio umano.",
        "Il risultato è un percorso più corto nella percezione più che nel numero di schermate, con un tono di voce diretto e una struttura riutilizzabile anche per altri tipi di abbonamento.",
      ],
      en: [
        "Subscribing to a sports pass should feel as simple as buying a ticket: pick the event, pay, watch. In practice the journey fills up with overlapping plans, small print and steps that seem to repeat. The project starts exactly there, rebuilding the whole path from plan selection to payment confirmation.",
        "The work was organised in three stages: mapping the existing flow to find where people hesitate or go back, rewriting the information hierarchy on every screen, and finally interactive prototyping to test the rhythm of the journey rather than isolated pages.",
        "Plan comparison was reduced to the few variables that actually decide the choice — duration, included content, final price — while the order summary follows the user to the last step, so the total is never a surprise. Every action gets immediate feedback: loading states, confirmations and error messages written in plain language.",
        "The result is a journey that feels shorter rather than one with fewer screens, with a direct tone of voice and a structure that can be reused for other subscription types.",
      ],
    },
    tech: {
      it: ["Figma", "User flow e mappatura", "Prototipazione interattiva", "Design system", "UX writing"],
      en: ["Figma", "User flow mapping", "Interactive prototyping", "Design system", "UX writing"],
    },
  },
  {
    slug: "crypto-dashboard-landing-page-ui",
    hidden: true,
    title: "Crypto Dashboard & Landing page UI",
    category: uxui,
    year: "2025",
    href: "https://luca.scalvinoni.com/portfolio/crypto-dashboard-landing-page-ui/",
    image: `${media}/crypto-dashboard-landing-page-ui.png`,
    summary: {
      it: "Una dashboard per il monitoraggio di asset digitali e la landing page che la introduce, costruite sullo stesso linguaggio visivo.",
      en: "A dashboard for tracking digital assets and the landing page that introduces it, built on one shared visual language.",
    },
    description: {
      it: [
        "Le interfacce finanziarie tendono a mostrare tutto insieme: grafici, saldi, variazioni, storico delle operazioni. Il progetto affronta questa densità decidendo cosa deve essere leggibile a colpo d'occhio e cosa può restare a un livello più profondo.",
        "La dashboard è organizzata su una griglia modulare: in alto il valore complessivo del portafoglio con la variazione nel tempo, al centro l'andamento dei singoli asset, in basso le transazioni recenti. I colori sono usati con parsimonia e solo per segnalare direzione e stato, mai come decorazione.",
        "La landing page riprende tipografia, spaziature e componenti della dashboard, mostrando anteprime reali del prodotto invece di illustrazioni generiche. La continuità tra promessa e prodotto è il tema centrale del progetto.",
        "L'intero sistema è pensato in modo responsive, con i grafici che si semplificano progressivamente sugli schermi più piccoli mantenendo leggibili i numeri chiave.",
      ],
      en: [
        "Financial interfaces tend to show everything at once: charts, balances, changes, transaction history. The project tackles that density by deciding what must be readable at a glance and what can live one level deeper.",
        "The dashboard sits on a modular grid: total portfolio value and its change over time at the top, individual asset performance in the middle, recent transactions below. Colour is used sparingly, only to signal direction and state, never as decoration.",
        "The landing page reuses the dashboard's typography, spacing and components, showing real product views instead of generic illustrations. Continuity between promise and product is the core theme of the project.",
        "The whole system is responsive, with charts simplifying progressively on smaller screens while the key numbers stay readable.",
      ],
    },
    tech: {
      it: ["Figma", "Data visualization", "Design system", "Layout responsive", "Dark mode"],
      en: ["Figma", "Data visualization", "Design system", "Responsive layout", "Dark mode"],
    },
  },
  {
    slug: "greeting-card-builder-web-app-ui-concept-design",
    hidden: true,
    title: "Greeting Card Builder web app UI Concept Design",
    category: uxui,
    year: "2025",
    href: "https://luca.scalvinoni.com/portfolio/greeting-card-builder-web-app-ui-concept-design/",
    image: `${media}/greeting-card-builder-web-app-ui-concept-design.jpg`,
    summary: {
      it: "Concept di una web app per comporre biglietti d'auguri, dove l'anteprima è sempre al centro e gli strumenti restano a portata di mano.",
      en: "A concept for a web app to compose greeting cards, where the preview stays centre stage and the tools stay within reach.",
    },
    description: {
      it: [
        "Gli editor creativi hanno un problema ricorrente: più opzioni offrono, meno le persone sanno da dove iniziare. Il concept parte da un punto opposto — poche scelte, ordinate, con un risultato visibile fin dal primo secondo.",
        "L'interfaccia mette il biglietto al centro della schermata, a dimensione reale, mentre gli strumenti di personalizzazione — testo, colore, immagini, decorazioni — restano su una colonna laterale organizzata per fasi. Chi ha fretta parte da un modello, chi vuole sperimentare apre i controlli avanzati.",
        "Ogni modifica si riflette immediatamente sull'anteprima, con micro-interazioni che confermano l'azione senza interrompere il flusso creativo. Il percorso si chiude con l'anteprima di stampa e la condivisione, presentate come un unico passaggio finale.",
        "Il concept include una libreria di componenti riutilizzabili — campi, selettori, pannelli — pensata per far crescere il prodotto senza moltiplicare gli stili.",
      ],
      en: [
        "Creative editors share one recurring problem: the more options they offer, the less people know where to start. The concept begins from the opposite end — few, well-ordered choices and a visible result from the first second.",
        "The interface puts the card at the centre of the screen, at real size, while the customisation tools — text, colour, images, decorations — sit in a side column organised by stage. People in a hurry start from a template; those who want to experiment open the advanced controls.",
        "Every change is reflected immediately in the preview, with micro-interactions that confirm the action without interrupting the creative flow. The journey ends with print preview and sharing, presented as one final step.",
        "The concept includes a reusable component library — fields, selectors, panels — designed to let the product grow without multiplying styles.",
      ],
    },
    tech: {
      it: ["Figma", "UI concept", "Component library", "Micro-interazioni", "Prototipazione"],
      en: ["Figma", "UI concept", "Component library", "Micro-interactions", "Prototyping"],
    },
  },
  {
    slug: "iot-home-ui",
    hidden: true,
    title: "IoT Smart Home Concept Design",
    category: uxui,
    year: "2025",
    href: "https://luca.scalvinoni.com/portfolio/iot-home-ui/",
    image: `${media}/iot-home-ui.jpg`,
    summary: {
      it: "Un pannello di controllo per la casa connessa, organizzato per stanze e scenari invece che per dispositivi.",
      en: "A control panel for the connected home, organised by rooms and scenes instead of by devices.",
    },
    description: {
      it: [
        "Le app per la casa intelligente elencano spesso i dispositivi come una lista di oggetti tecnici. Le persone però ragionano per luoghi e per momenti della giornata: la cucina al mattino, il soggiorno la sera, la casa quando si esce.",
        "Il concept riorganizza l'interfaccia attorno a questa logica. La schermata principale raccoglie lo stato generale — luci accese, temperatura, sicurezza — e propone gli scenari più usati come azioni singole. Dalle stanze si accede al controllo dettagliato di ogni dispositivo.",
        "Le azioni frequenti sono raggiungibili con un tocco, mentre le regolazioni fini restano disponibili senza affollare la vista principale. L'interfaccia è pensata in dark mode, adatta all'uso serale e agli schermi sempre accesi dei pannelli domestici.",
        "Iconografia e microcopy sono stati progettati insieme, per rendere immediatamente riconoscibile lo stato di ogni cosa anche a distanza.",
      ],
      en: [
        "Smart home apps often list devices as a catalogue of technical objects. People, however, think in places and moments: the kitchen in the morning, the living room at night, the whole house when leaving.",
        "The concept reorganises the interface around that logic. The main screen gathers the overall state — lights, temperature, security — and offers the most used scenes as single actions. Rooms lead to detailed control of each device.",
        "Frequent actions are one tap away, while fine adjustments stay available without crowding the main view. The interface is designed in dark mode, suited to evening use and to the always-on screens of home panels.",
        "Iconography and microcopy were designed together, so the state of everything is recognisable at a glance, even from a distance.",
      ],
    },
    tech: {
      it: ["Figma", "UI concept", "Iconografia", "Dark mode", "Design mobile e tablet"],
      en: ["Figma", "UI concept", "Iconography", "Dark mode", "Mobile and tablet design"],
    },
  },
  {
    slug: "takt-design-catalog",
    hidden: true,
    title: "TAKT Design catalog",
    category: graphic,
    year: "2024",
    href: "https://luca.scalvinoni.com/portfolio/takt-design-catalog/",
    image: `${media}/takt-design-catalog.webp`,
    summary: {
      it: "Catalogo editoriale per una collezione di arredi, costruito su una griglia costante che lascia respirare le immagini.",
      en: "An editorial catalogue for a furniture collection, built on a constant grid that lets the images breathe.",
    },
    description: {
      it: [
        "Il catalogo di un marchio di arredo deve fare due cose insieme: raccontare un'idea di casa e fornire informazioni precise su ogni prodotto. Il progetto alterna quindi pagine narrative, con immagini d'ambiente a piena pagina, e pagine tecniche con misure, materiali e varianti.",
        "Tutto poggia su una griglia unica, che resta invariata per l'intero volume: cambia il contenuto, non l'impianto. Questa costanza permette alle fotografie di avere spazio senza che il libro perda ritmo.",
        "La scelta tipografica segue il carattere essenziale della collezione: un unico carattere, poche dimensioni, gerarchie costruite con peso e spaziatura invece che con effetti grafici.",
        "Il file è stato preparato per la stampa con attenzione a margini, abbondanze e gestione del colore, e declinato anche in versione digitale sfogliabile.",
      ],
      en: [
        "A furniture brand's catalogue has to do two things at once: tell an idea of home and give precise information about each product. The project alternates narrative pages, with full-page room photography, and technical pages with dimensions, materials and variants.",
        "Everything rests on a single grid that stays unchanged through the whole volume: the content changes, the structure doesn't. That consistency gives the photographs room without the book losing rhythm.",
        "The typographic choice follows the essential character of the collection: one typeface, few sizes, hierarchy built with weight and spacing rather than graphic effects.",
        "The file was prepared for print with care for margins, bleed and colour management, and also adapted into a digital, browsable version.",
      ],
    },
    tech: {
      it: ["InDesign", "Photoshop", "Impaginazione editoriale", "Tipografia", "Preparazione per la stampa"],
      en: ["InDesign", "Photoshop", "Editorial layout", "Typography", "Print production"],
    },
  },
  {
    slug: "italian-passport-redesign",
    hidden: true,
    title: "Italian E-Passport redesign",
    category: uxui,
    year: "2024",
    href: "https://luca.scalvinoni.com/portfolio/italian-passport-redesign/",
    image: `${media}/italian-passport-redesign.webp`,
    summary: {
      it: "Il passaporto italiano ripensato come documento contemporaneo, in equilibrio tra identità nazionale e leggibilità dei dati.",
      en: "The Italian passport rethought as a contemporary document, balancing national identity with data legibility.",
    },
    description: {
      it: [
        "Un passaporto è insieme un oggetto simbolico e uno strumento di lettura dati. Il redesign lavora su entrambi i piani: la copertina e le pagine interne raccontano un'identità, mentre la pagina anagrafica deve restare leggibile da persone e da lettori ottici.",
        "Il progetto definisce un sistema grafico coerente — copertina, pagine visto, filigrane, iconografia — ispirato al patrimonio visivo italiano ma tradotto in un linguaggio pulito e attuale, lontano dall'effetto cartolina.",
        "Sulla pagina dei dati la gerarchia è stata ricostruita per rendere immediati nome, date e numero del documento, rispettando le proporzioni e le zone di lettura previste dagli standard internazionali.",
        "Il lavoro si chiude con mockup che mostrano il documento nell'uso reale: aperto, in mano, sotto un controllo di frontiera.",
      ],
      en: [
        "A passport is both a symbolic object and a data-reading tool. The redesign works on both levels: the cover and inner pages tell an identity, while the data page must stay readable for people and for optical readers alike.",
        "The project defines a coherent graphic system — cover, visa pages, watermarks, iconography — drawn from Italian visual heritage but translated into a clean, current language, far from postcard clichés.",
        "On the data page the hierarchy was rebuilt to make name, dates and document number immediate, while respecting the proportions and reading zones set by international standards.",
        "The work closes with mockups showing the document in real use: open, in hand, at a border check.",
      ],
    },
    tech: {
      it: ["Illustrator", "InDesign", "Sistema grafico", "Tipografia", "Mockup e presentazione"],
      en: ["Illustrator", "InDesign", "Graphic system", "Typography", "Mockups and presentation"],
    },
  },
  {
    slug: "fast-food-landing-page",
    hidden: true,
    title: "Fast Food landing page",
    category: uxui,
    year: "2023",
    href: "https://luca.scalvinoni.com/portfolio/fast-food-landing-page/",
    image: `${media}/fast-food-landing-page.webp`,
    summary: {
      it: "Una landing page costruita attorno al menu e all'ordine, pensata prima di tutto per il telefono.",
      en: "A landing page built around the menu and the order, designed for the phone first.",
    },
    description: {
      it: [
        "Chi cerca un fast food ha una domanda sola: cosa posso ordinare e quanto ci metto. La pagina risponde subito, mettendo in apertura i piatti principali e l'invito a ordinare, senza introduzioni superflue.",
        "La struttura procede per sezioni brevi — menu, promozioni, orari e posizione — ognuna con un solo messaggio e un'immagine generosa. La fotografia è l'elemento portante: piatti in primo piano, luce calda, sfondi neutri.",
        "Il layout nasce in versione mobile, dove avviene la maggior parte degli ordini, e si estende poi al desktop; il pulsante d'ordine resta sempre raggiungibile durante lo scorrimento.",
        "Colori e tipografia sono tarati su alto contrasto, per restare leggibili anche all'aperto e su schermi con poca luminosità.",
      ],
      en: [
        "Anyone looking for a fast food place has one question: what can I order and how long will it take. The page answers immediately, opening with the signature dishes and the order call to action, with no unnecessary introduction.",
        "The structure runs through short sections — menu, offers, opening hours and location — each with a single message and a generous image. Photography carries the page: dishes up close, warm light, neutral backgrounds.",
        "The layout starts from the mobile version, where most orders happen, and extends to desktop; the order button stays reachable throughout the scroll.",
        "Colour and typography are tuned for high contrast, so the page stays readable outdoors and on dim screens.",
      ],
    },
    tech: {
      it: ["Figma", "Mobile first", "Art direction fotografica", "Landing page design", "UX writing"],
      en: ["Figma", "Mobile first", "Photographic art direction", "Landing page design", "UX writing"],
    },
  },
  {
    slug: "medieval-bestiary-redesign",
    hidden: true,
    title: "Medieval Bestiary redesign",
    category: uxui,
    year: "2023",
    href: "https://luca.scalvinoni.com/portfolio/progetto-3/",
    image: `${media}/medieval-bestiary-redesign.jpg`,
    summary: {
      it: "Un bestiario medievale tradotto in un'esperienza digitale di consultazione, tra manoscritto e leggibilità sullo schermo.",
      en: "A medieval bestiary turned into a digital reading experience, between manuscript and on-screen legibility.",
    },
    description: {
      it: [
        "Il progetto porta online un corpus di illustrazioni e testi antichi, materiale affascinante ma difficile da consultare: nomi latini, varianti, rimandi tra creature e simboli.",
        "La navigazione è costruita su due assi complementari: per creatura, con schede che raccolgono immagine, descrizione e fonti, e per tema, per attraversare il bestiario seguendo simboli e significati.",
        "Il linguaggio visivo cita il manoscritto — texture della carta, capilettera, impaginazione a colonne — ma le scelte tipografiche privilegiano la lettura sullo schermo, con corpi ampi e righe misurate.",
        "Le illustrazioni originali sono trattate come contenuto principale, con viste ingrandibili che permettono di apprezzarne il dettaglio.",
      ],
      en: [
        "The project brings a corpus of ancient illustrations and texts online: fascinating material, but hard to navigate — Latin names, variants, cross-references between creatures and symbols.",
        "Navigation is built on two complementary axes: by creature, with entries gathering image, description and sources, and by theme, to move through the bestiary following symbols and meanings.",
        "The visual language quotes the manuscript — paper texture, drop caps, column layout — while the typographic choices favour on-screen reading, with generous sizes and measured line lengths.",
        "The original illustrations are treated as primary content, with zoomable views that let their detail come through.",
      ],
    },
    tech: {
      it: ["Figma", "Web design", "Architettura dell'informazione", "Tipografia", "Art direction"],
      en: ["Figma", "Web design", "Information architecture", "Typography", "Art direction"],
    },
  },
  {
    slug: "scalvinoni-bakery-branding",
    hidden: true,
    title: "Scalvinoni bakery Branding",
    category: graphic,
    year: "2023",
    href: "https://luca.scalvinoni.com/portfolio/progetto-2/",
    image: `${media}/scalvinoni-bakery-branding.jpg`,
    summary: {
      it: "Identità visiva completa per una forneria, dal marchio ai packaging fino al manuale d'uso.",
      en: "A complete visual identity for a bakery, from the mark to the packaging and the brand manual.",
    },
    description: {
      it: [
        "Il progetto costruisce l'identità di una forneria a partire dal suo carattere: un lavoro artigianale, quotidiano, fatto di gesti ripetuti. Il marchio traduce questa idea in una forma semplice e riconoscibile anche a piccole dimensioni.",
        "Attorno al marchio è stato definito un sistema completo: palette, tipografia, trattamento delle immagini e regole di composizione. Le applicazioni comprendono insegne, sacchetti, etichette, carta da banco e materiali di comunicazione.",
        "I packaging sono stati progettati tenendo conto dei materiali reali — carta avana, stampa a uno o due colori — per mantenere coerenza senza costi di produzione elevati.",
        "Il brand manual raccoglie usi corretti ed errati, misure minime e varianti, così che l'identità resti coerente anche quando a usarla è chi lavora ogni giorno nel negozio.",
      ],
      en: [
        "The project builds a bakery's identity starting from its character: craft work, daily, made of repeated gestures. The mark translates that idea into a simple shape that stays recognisable at small sizes.",
        "Around the mark sits a complete system: palette, typography, image treatment and composition rules. Applications include signage, bags, labels, counter paper and communication material.",
        "The packaging was designed around real materials — kraft paper, one or two colour printing — to keep everything coherent without high production costs.",
        "The brand manual collects correct and incorrect uses, minimum sizes and variants, so the identity stays consistent even in the hands of the people working in the shop every day.",
      ],
    },
    tech: {
      it: ["Illustrator", "InDesign", "Brand identity", "Packaging", "Brand manual"],
      en: ["Illustrator", "InDesign", "Brand identity", "Packaging", "Brand manual"],
    },
  },
];

// ponytail: un progetto con `hidden: true` sparisce dall'elenco, dal prerender e dalla
// sitemap, e la sua pagina risponde 404. I dati restano qui: per rimetterlo online basta
// togliergli quella riga. Ora sono nascosti tutti.
export const visibleProjects = projects.filter((project) => !project.hidden);

export type ToolItem = {
  slug: string;
  label: Localized<string>;
  summary: Localized<string>;
};

// I componenti stanno in src/components/tools.tsx: qui solo dati, perché
// vite.config.ts importa questo file e non può tirarsi dentro del JSX.
export const tools: ToolItem[] = [
  {
    slug: "coin-flip",
    label: { it: "Testa o croce", en: "Coin flip" },
    summary: {
      it: "Una moneta, quando serve decidere e basta.",
      en: "A coin, for when you just need to decide.",
    },
  },
  {
    slug: "random-number",
    label: { it: "Numero casuale", en: "Random number" },
    summary: {
      it: "Un numero fra due estremi, estremi inclusi.",
      en: "A number between two bounds, bounds included.",
    },
  },
  {
    slug: "character-count",
    label: { it: "Contatore caratteri", en: "Character count" },
    summary: {
      it: "Caratteri e parole, con le soglie di title e meta description.",
      en: "Characters and words, against the title and meta description limits.",
    },
  },
  {
    slug: "contrast-checker",
    label: { it: "Contrasto WCAG", en: "WCAG contrast" },
    summary: {
      it: "Due colori, il rapporto di contrasto e i livelli AA e AAA.",
      en: "Two colours, their contrast ratio and the AA and AAA levels.",
    },
  },
  {
    slug: "lorem-ipsum",
    label: { it: "Lorem ipsum", en: "Lorem ipsum" },
    summary: {
      it: "Paragrafi di riempimento da copiare.",
      en: "Filler paragraphs to copy.",
    },
  },
];

export type UpdateItem = {
  title: Localized<string>;
  date: Localized<string>;
  kind: Localized<string>;
  venue: Localized<string>;
  href?: string;
};

export const updates: UpdateItem[] = [
  {
    title: {
      it: "Laurea magistrale in User Experience Design",
      en: "MA in User Experience Design",
    },
    date: { it: "2026 — oggi", en: "2026 — present" },
    kind: { it: "Formazione", en: "Education" },
    venue: {
      it: "NABA, Nuova Accademia di Belle Arti — Design della Comunicazione",
      en: "NABA, Nuova Accademia di Belle Arti — Communication Design",
    },
  },
  {
    title: {
      it: "UX & Product Consultant for B4i Acceleration",
      en: "UX & Product Consultant for B4i Acceleration",
    },
    date: { it: "Apr 2026 — Ago 2026", en: "Apr 2026 — Aug 2026" },
    kind: { it: "Consulenza", en: "Consulting" },
    venue: { it: "Università Bocconi, Milano", en: "Bocconi University, Milan" },
  },
  {
    title: {
      it: "Nomination UX Design Awards — New Talent",
      en: "UX Design Awards Nomination — New Talent",
    },
    date: { it: "2026", en: "2026" },
    kind: { it: "Riconoscimento", en: "Recognition" },
    venue: { it: "UX Design Awards", en: "UX Design Awards" },
    href: "https://ux-design-awards.com/winners/2026-2-guido-from-bureaucracy-to-dialogue",
  },
  {
    title: {
      it: "RECCE — piattaforma digitale per gli spettatori dei rally",
      en: "RECCE — a Digital Platform for Rally Spectators",
    },
    date: { it: "2025", en: "2025" },
    kind: { it: "Progetto", en: "Project" },
    venue: { it: "Prodotto digitale", en: "Digital Product" },
    href: "https://linkedin.com/company/recceworld",
  },
  {
    title: {
      it: "Shot e concept design pubblicati su Dribbble",
      en: "Shots and Concept Design Published on Dribbble",
    },
    date: { it: "2023 — oggi", en: "2023 — present" },
    kind: { it: "Design", en: "Design" },
    venue: { it: "Dribbble", en: "Dribbble" },
    href: "https://dribbble.com/Scalvinoni",
  },
  {
    title: { it: "Erasmus in Media Art", en: "Erasmus in Media Art" },
    date: { it: "2022", en: "2022" },
    kind: { it: "Studio", en: "Studies" },
    venue: { it: "Breslavia, Polonia", en: "Wrocław, Poland" },
  },
  {
    title: {
      it: "Laurea triennale in Web Design e Comunicazione d'Impresa",
      en: "BA in Web Design and Business Communication",
    },
    date: { it: "2020 — 2023", en: "2020 — 2023" },
    kind: { it: "Formazione", en: "Education" },
    venue: {
      it: "Accademia Santa Giulia, Brescia",
      en: "Accademia Santa Giulia, Brescia",
    },
  },
];
