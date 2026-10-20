import type { Localized } from "@/i18n";

export type ProjectItem = {
  slug: string;
  title: Localized<string>;
  category: Localized<string>;
  year: string;
  href?: string;
  image?: string;
  gallery?: string[];
  /** Colore della selezione del testo nella scheda, di solito il colore del brand. */
  accent?: string;
  hidden?: boolean;
  /** Finisce nel secondo gruppo dell'elenco progetti ("Altri lavori"). */
  other?: true;
  links?: { label: string | Localized<string>; url: string }[];
  /** Riga di sintesi mostrata in cima alla scheda, massimo due righe. */
  tldr?: Localized<string>;
  summary: Localized<string>;
  description: Localized<string[]>;
  tech: Localized<string[]>;
};

export const mailto = "mailto:luca@scalvinoni.com";
export const linkedin = "https://www.linkedin.com/in/luca-scalvinoni/";

const media = "/media";

const uxui: Localized<string> = { it: "UX/UI", en: "UX/UI" };
const graphic: Localized<string> = { it: "Graphic Design", en: "Graphic Design" };
const service: Localized<string> = { it: "Service Design", en: "Service Design" };
const brand: Localized<string> = { it: "Brand Identity", en: "Brand Identity" };
const artDirection: Localized<string> = { it: "Art Direction", en: "Art Direction" };
const web: Localized<string> = { it: "Web & SEO", en: "Web & SEO" };

export const projects: ProjectItem[] = [
  {
    slug: "recce-maps",
    title: { it: "Recce Maps", en: "Recce Maps" },
    category: service,
    year: "2026",
    href: "https://reccemaps.com",
    image: `${media}/recce-maps-spectator-map.webp`,
    gallery: [`${media}/recce-maps-website-full.webp`],
    accent: "#0f39d3",
    links: [
      { label: "reccemaps.com", url: "https://reccemaps.com" },
      { label: "shop.reccemaps.com", url: "https://shop.reccemaps.com" },
      {
        label: "Behance",
        url: "https://www.behance.net/gallery/256215023/Recce-Maps-Platform-Branding-UXUI",
      },
      { label: "Instagram @recce.world", url: "https://www.instagram.com/recce.world" },
    ],
    tldr: {
      it: "Guida digitale per chi segue i rally dal bordo strada, co-fondata e portata in pochi mesi a oltre 1.600 ordini.",
      en: "A digital guide for rally spectators, co-founded and taken to over 1,600 orders in a few months.",
    },
    summary: {
      it: "Una guida digitale per chi segue i rally dal bordo strada, co-fondata con tre amici e cresciuta in pochi mesi fino a oltre 1.600 ordini e a una collaborazione con il WRC Croatia Rally.",
      en: "A digital guide for rally spectators, co-founded with three friends and grown in a few months to more than 1,600 orders and a collaboration with WRC Croatia Rally.",
    },
    description: {
      it: [
        "## Il problema",
        "> La giornata di chi guarda un rally si decide **in anticipo**, molto prima che passi la prima vettura.",
        "Le strade chiudono molto prima del passaggio e le informazioni su parcheggi, sentieri e aree pubbliche sono sparse tra documenti ufficiali e forum, mentre **quasi 4 spettatori su 5 arrivano dall'estero** e devono **organizzarsi** prima del viaggio.",
        `![Un rally si decide prima che passi la prima vettura: dove parcheggio, da dove guardo](${media}/recce-maps-rally-day.webp)`,
        "## La soluzione",
        "> Una guida che si apre in Google Maps, con **niente da installare** e niente da imparare.",
        "Ogni guida è una mappa che si apre in Google Maps, l'app che gli spettatori hanno già, con le curve classificate dal pieno al tornante e centinaia di punti scelti a mano, e appoggiarsi a Maps ha permesso anche di **testare il servizio con acquirenti reali** fin da subito.",
        `![Basta il telefono: nessuna app da installare, nessun account da creare, niente da imparare](${media}/recce-maps-all-you-need-is-your-phone.mp4)`,
        "## Cosa ho fatto",
        "> Ho co-fondato Recce Maps con tre amici, e mentre il servizio l'abbiamo progettato insieme, dal branding alla vendita sul web fino all'MVP, **alcune parti le ho seguite io dall'inizio alla fine**.",
        "Ho progettato brand, sito e store, ho **automatizzato la consegna delle mappe** e gestito le campagne Meta.",
        "Ho poi costruito l'MVP di uno strumento interno che prepara le bozze a partire da un archivio di oltre 3.000 descrizioni, così da poter **ridurre drasticamente i tempi di produzione** di una mappa e avere una coerenza tra i punti.",
        `![Editor interno delle mappe Recce: le prove del Croatia Rally sulla mappa, l'elenco dei livelli e il riepilogo di un punto spettatori](${media}/recce-maps-map-editor.webp)`,
        "## Risultati",
        "> Oltre **1.600 ordini** in 7 rally e una collaborazione con il **WRC Croatia Rally**.",
        "Da gennaio abbiamo coperto **7 rally**, con ogni mappa disponibile in **almeno due lingue** e fino a quattro. Per il WRC Croatia Rally, tappa del mondiale FIA, abbiamo collaborato con gli organizzatori della gara, mentre le campagne sui social hanno superato le **175.000 visualizzazioni** e **3 ordini su 4** (contro quasi 4 spettatori su 5) arrivano da fuori Italia.",
        "## Cosa è cambiato dopo il lancio",
        "Ogni guida è una mappa di Google My Maps, e siccome non avevamo budget e dovevamo tenere bassi i costi di pagamento e di consegna, la prima versione mandava il link alla mappa dentro un PDF allegato all'ordine. Molti clienti ci hanno scritto perché non riuscivano ad aprire la mappa, soprattutto perché non avevano un account Google o avevano usato un'altra email al checkout, e questo ci ha fatto capire che la consegna faceva parte del prodotto e che il PDF dava un'immagine poco professionale.",
        "Ho ricostruito la consegna con n8n, le API di Google Cloud e Shopify, così ogni cliente riceve per email un link personale che aggiunge la mappa al proprio account Google in modo permanente, mentre ogni accesso viene tracciato e usato per il marketing e l'assistenza clienti. Per il problema degli account ho costruito un'automazione che invia un modulo precompilato quando un cliente deve cambiare l'email collegata alla mappa, e che incrocia i dati di Shopify, di Google e dell'email così che nessuno del team debba gestire il cambio a mano.",
      ],
      en: [
        "## The problem",
        "> A rally spectator's day is decided **in advance**, long before the first car goes by.",
        "Roads close well before the cars arrive and the information on parking, paths and public areas is scattered across official documents and forums, while **almost 4 spectators in 5 come from outside Italy** and have to **plan** before the trip.",
        `![A rally day is decided before the first car: where do I park, where do I watch](${media}/recce-maps-rally-day.webp)`,
        "## The solution",
        "> A guide that opens in Google Maps, with **nothing to install** and nothing to learn.",
        "Each guide is a map that opens in Google Maps, the app spectators already have, with every corner classified from flat out to hairpin and hundreds of hand-picked points, and relying on Maps also lets us **test the service with real buyers** from the start.",
        `![All you need is your phone: no apps to install, no account to create, no learning curve](${media}/recce-maps-all-you-need-is-your-phone.mp4)`,
        "## What I did",
        "> I co-founded Recce Maps with three friends, and while we designed the whole service together, from the branding to selling online to the MVP, **some parts were mine from start to finish**.",
        "I designed the brand, the website and the store, **automated the delivery of the maps** and ran the Meta campaigns.",
        "I then built the MVP of an internal tool that drafts each map from an archive of 3,000+ descriptions, so as to **drastically cut the time it takes to produce** a map and keep the points consistent with one another.",
        `![Recce's internal map editor: the Croatia Rally stages on the map, the layer list and the summary of a spectator point](${media}/recce-maps-map-editor.webp)`,
        "## Results",
        "> More than **1,600 orders** across 7 rallies and a collaboration with **WRC Croatia Rally**.",
        "Since January we have covered **7 rallies**, with every map available in **at least two languages** and up to four. For WRC Croatia Rally, a round of the FIA world championship, we worked with the organisers of the event, while the social campaigns gathered more than **175,000 views** and **3 orders in 4** (against almost 4 spectators in 5) come from outside Italy.",
        "## What changed after launch",
        "Each guide is a Google My Maps map, and because we had no budget and needed to keep payment and delivery costs low, the first version sent the map link inside a PDF attached to the order. Many customers wrote to us because they could not open the map, mostly because they had no Google account or had used a different email at checkout, which showed us that delivery was part of the product and that the PDF looked unprofessional.",
        "I rebuilt the delivery with n8n, the Google Cloud APIs and Shopify, so that each customer now receives a personal link by email which adds the map to their own Google account permanently, while every access is tracked and used for marketing and customer support. For the account problem I built an automation that sends a prefilled form when a customer needs to change the email linked to the map, and which cross-checks Shopify, Google and the email address so that nobody on the team has to handle the change by hand.",
      ],
    },
    tech: {
      it: [
        "Product e information design",
        "Art direction e brand",
        "Shopify",
        "n8n",
        "Meta Ads",
        "PWA",
        "Integrazioni LLM",
      ],
      en: [
        "Product and information design",
        "Art direction and brand",
        "Shopify",
        "n8n",
        "Meta Ads",
        "PWA",
        "LLM integrations",
      ],
    },
  },
  {
    slug: "guido",
    title: { it: "Guido: dalla burocrazia al dialogo", en: "Guido: From bureaucracy to dialogue" },
    category: uxui,
    year: "2026",
    href: "https://ux-design-awards.com/winners/2026-2-guido-from-bureaucracy-to-dialogue",
    image: `${media}/guido-totem-app-screens.webp`,
    accent: "#3b6e5a",
    gallery: [`${media}/guido-ui-components.webp`],
    links: [
      {
        label: "UX Design Awards 2026",
        url: "https://ux-design-awards.com/winners/2026-2-guido-from-bureaucracy-to-dialogue",
      },
      {
        label: "Behance",
        url: "https://www.behance.net/gallery/256179379/From-bureaucracy-to-dialogue-with-Guido",
      },
    ],
    tldr: {
      it: "Un sistema unico che guida i cittadini nelle pratiche della PA in linguaggio semplice. Nominato agli UX Design Awards 2026.",
      en: "One system that guides citizens through public-administration procedures in plain language. Nominated at the UX Design Awards 2026.",
    },
    summary: {
      it: "Un sistema unico e accessibile che accompagna i cittadini nelle pratiche della pubblica amministrazione, con traduzione in linguaggio semplice, procedure guidate e un totem phygital. Nominato agli UX Design Awards 2026, categoria New Talent.",
      en: "A single, accessible system that guides citizens through public administration procedures, with plain-language translation, guided steps and a phygital totem. Nominated at the UX Design Awards 2026, New Talent category.",
    },
    description: {
      it: [
        "## Il problema",
        "> Per fare una pratica il cittadino deve capire **da solo** dove andare, cosa portare e cosa c'è scritto nei documenti.",
        "Ogni pratica con la pubblica amministrazione passa da sportelli, portali e moduli diversi, scritti in una lingua che la maggior parte delle persone non capisce. Il risultato è che **il cittadino non sa da dove cominciare, cosa gli serve e a chi chiedere**, e la burocrazia diventa una barriera prima ancora che un servizio.",
        `![Uso dei servizi online della PA: Italia 55%, media UE 70%, obiettivo UE 2030 85%](${media}/guido-online-pa-service-usage.webp)`,
        "## La soluzione",
        "> Un solo posto dove la burocrazia viene tradotta in **linguaggio semplice** e spiegata un passo alla volta.",
        "Guido è un **hub unico che collega i servizi pubblici** e li rende leggibili. Un assistente basato su AI **traduce i documenti amministrativi in linguaggio semplice**, le procedure vengono scomposte in passaggi guidati e gli appuntamenti si prenotano dallo stesso posto. Per chi non ha o non vuole uno smartphone, un **totem phygital installato nei luoghi civici** offre lo stesso accesso di persona. Il passaggio che dà il nome al progetto è questo: dalla burocrazia al dialogo.",
        "@flow Il percorso al totem | Accesso: ci si identifica con l'identità digitale | Servizio: si sceglie la pratica da fare | Spiegazione: l'assistente traduce i documenti in linguaggio semplice | Passaggi: la procedura è scomposta in step guidati | Appuntamento: si prenota dallo stesso posto e si segue lo stato della pratica",
        "## Accessibilità",
        "> Un servizio pubblico deve poter essere usato da **chiunque**, e sul totem è l'interfaccia ad **adattarsi** alla persona.",
        "Dal pulsante Accessibilità, sempre presente in basso, ognuno sceglie l'aiuto di cui ha bisogno. Con la modalità per la **mobilità ridotta l'interfaccia si sposta nella parte bassa dello schermo**, così chi è in carrozzina o non arriva in alto raggiunge tutti i comandi. Per chi è **ipovedente il contrasto aumenta**, mentre per chi ha un **disturbo dell'attenzione si riduce**, e le due palette rispettano entrambe le WCAG 2.1 ai livelli AA e AAA. Il carattere è **Inclusive Sans**, disegnato per la leggibilità, con lettere che non si confondono tra loro.",
        `![Menu Accessibilità del totem con le tre modalità: mobilità, ipovisione e ADHD](${media}/guido-accessibility-menu.webp)`,
        "@font Inclusive Sans: Carattere · Inclusive Sans",
        "@palette Alto contrasto · WCAG 2.1 AA e AAA: #0f1e19 #d7e7e2 #1f7a5c #e9f2ef #f1f2f1",
        "@palette Basso contrasto · WCAG 2.1 AA e AAA: #313e39 #d8dfdc #5f7f74 #e3e8e6 #e6e9e8",
        "## Risultati",
        "> Una **nomination agli UX Design Awards 2026**, categoria New Talent.",
        "Guido è stato **nominato agli [UX Design Awards 2026](https://ux-design-awards.com/winners/2026-2-guido-from-bureaucracy-to-dialogue) nella categoria New Talent**, nelle sezioni Platform & Community e Citizens & Society. Il progetto è stato sviluppato in NABA con Nicola Sorgesa e Giampaolo Zirone, con la guida di Gabriele Ruscelli.",
        `![Demo del totem di Guido: accesso con identità digitale, scelta del servizio e stato della pratica](${media}/guido-demo.mp4)`,
        "## Il mio ruolo",
        "Progetto in tre con Nicola Sorgesa e Giampaolo Zirone, con la guida di Gabriele Ruscelli. Abbiamo lavorato insieme su tutte le fasi del progetto, dalla ricerca con gli utenti ai flussi, all'interfaccia, al prototipo e alla presentazione, e all'interno di questo lavoro comune ho seguito in particolare **la ricerca, sia qualitativa sia quantitativa**, tra interviste, user test, stesura del questionario e pulizia dei dati, e ho costruito **il design system** insieme a un altro compagno.",
      ],
      en: [
        "## The problem",
        "> To get anything done, citizens have to work out **on their own** where to go, what to bring and what the documents say.",
        "Every procedure with public administration goes through different counters, portals and forms, written in a language most people do not understand. The result is that **citizens do not know where to start, what they need or whom to ask**, and bureaucracy becomes a barrier before it is a service.",
        `![Online PA service usage: Italy 55%, EU average 70%, EU 2030 target 85%](${media}/guido-online-pa-service-usage.webp)`,
        "## The solution",
        "> One place where bureaucracy is translated into **plain language** and explained one step at a time.",
        "Guido is a **single hub that connects public services** and makes them readable. An AI assistant **translates administrative documents into plain language**, procedures are broken down into guided steps and appointments are booked from the same place. For people who do not have or do not want a smartphone, a **phygital totem installed in civic locations** offers the same access in person. That shift is what gives the project its name: from bureaucracy to dialogue.",
        "@flow The journey at the totem | Login: identify with digital identity | Service: choose the procedure to complete | Explanation: the assistant translates documents into plain language | Steps: the procedure is broken into guided steps | Appointment: book from the same place and follow the request status",
        "## Accessibility",
        "> A public service has to work for **anyone**, and on the totem it is the interface that **adapts** to the person.",
        "From the Accessibility button, always available at the bottom, people choose the help they need. In the **reduced mobility mode the interface moves to the lower part of the screen**, so wheelchair users and anyone who cannot reach high get to every control. For people with **low vision the contrast increases**, while for people with **attention disorders it decreases**, and both palettes meet WCAG 2.1 at AA and AAA levels. The typeface is **Inclusive Sans**, designed for legibility, with letters that cannot be mistaken for one another.",
        `![Accessibility menu on the totem with its three modes: mobility, low vision and ADHD](${media}/guido-accessibility-menu.webp)`,
        "@font Inclusive Sans: Typeface · Inclusive Sans",
        "@palette High contrast · WCAG 2.1 AA and AAA: #0f1e19 #d7e7e2 #1f7a5c #e9f2ef #f1f2f1",
        "@palette Low contrast · WCAG 2.1 AA and AAA: #313e39 #d8dfdc #5f7f74 #e3e8e6 #e6e9e8",
        "## Results",
        "> A **nomination at the UX Design Awards 2026**, New Talent category.",
        "Guido was **nominated at the [UX Design Awards 2026](https://ux-design-awards.com/winners/2026-2-guido-from-bureaucracy-to-dialogue) in the New Talent category**, in the Platform & Community and Citizens & Society sections. The project was developed at NABA with Nicola Sorgesa and Giampaolo Zirone, mentored by Gabriele Ruscelli.",
        `![Demo of Guido's totem: digital identity login, service selection and request status](${media}/guido-demo.mp4)`,
        "## My role",
        "A three-person project with Nicola Sorgesa and Giampaolo Zirone, mentored by Gabriele Ruscelli. The three of us worked together on every phase of the project, from user research to flows, interface, prototype and presentation, and within that shared work I focused on **the research, both qualitative and quantitative**, from interviews and user tests to writing the questionnaire and cleaning the data, and built **the design system** together with another teammate.",
      ],
    },
    tech: {
      it: ["UX research", "Service design", "User flow", "Figma", "Prototipazione", "Integrazione AI"],
      en: ["UX research", "Service design", "User flows", "Figma", "Prototyping", "AI integration"],
    },
  },
  {
    slug: "cartografie-della-storia",
    title: { it: "Cartografie della Storia: Archivio Corriere della Sera", en: "Cartografie della Storia: Corriere della Sera Archive" },
    category: uxui,
    year: "2026",
    image: `${media}/cartografie-cover.webp`,
    links: [
      { label: { it: "Prototipo", en: "Prototype" }, url: "https://archivio-corriere.vercel.app/" },
      {
        label: { it: "Archivio del Corriere oggi", en: "Corriere archive today" },
        url: "https://archivio.corriere.it/Archivio/interface/landing.html",
      },
    ],
    tldr: {
      it: "L'archivio storico del Corriere trasformato in una mappa narrativa, con un prototipo navigabile da 100/100 in accessibilità.",
      en: "Corriere's historical archive turned into a narrative map, with a navigable prototype scoring 100/100 on accessibility.",
    },
    summary: {
      it: "Il ripensamento del sistema digitale dell'archivio storico del Corriere della Sera: da magazzino per specialisti a mappa narrativa da attraversare, con un prototipo navigabile e un ecosistema di comunicazione. Progetto di gruppo per il corso Sistemi editoriali per l'arte, NABA.",
      en: "A rethink of the digital system behind Corriere della Sera's historical archive: from a warehouse for specialists to a narrative map to travel through, with a navigable prototype and a communication ecosystem. Group project for the Editorial Systems for the Arts course at NABA.",
    },
    description: {
      it: [
        "## Il problema",
        "> Un archivio con **1,2 milioni di reperti** che quasi nessuno, fuori dagli specialisti, riesce a consultare.",
        "Il Corriere della Sera racconta l'Italia dal 1876 e il suo archivio in via Solferino conserva **1,2 milioni di reperti digitalizzati, 54.000 prime pagine e oltre 12.000 collezioni**, ma è consultabile quasi solo su appuntamento e da ricercatori che sanno già cosa cercare. Il sistema digitale in costruzione è pensato per specialisti, quindi il pubblico curioso resta fuori, mentre le visite online agli archivi nazionali sono cresciute del 600% in cinque anni. La domanda di ricerca era **come rendere l'archivio accessibile a utenti con bisogni, ritmi e obiettivi diversi**, valorizzando quello che esiste già.",
        `![1,2 milioni di reperti digitalizzati, 54.000 prime pagine e 12.454 collezioni: i numeri dell'archivio del Corriere](${media}/cartografie-archive-numbers.webp)`,
        "## La ricerca",
        "> Il patrimonio non è il singolo documento ma **le relazioni tra i documenti**.",
        "Abbiamo lavorato su quattro livelli, ovvero desk research sulla Fondazione, competitor analysis su BBC Archive, Europeana e GNM Archive con comparable come Atlas Obscura e Google Arts & Culture, una **visita etnografica in via Solferino con interviste alle curatrici** e infine la sintesi in personas e journey map. Tre frasi delle archiviste sono diventate i principi del progetto, e in particolare che **il patrimonio non è il singolo documento ma le relazioni tra i documenti**, che l'archivio ha una grammatica propria e che il digitale deve raccontare, non solo mostrare oggetti belli.",
        `![Cosa ci hanno insegnato le archiviste: la logica prima dell'estetica, il valore nelle connessioni, una grammatica propria](${media}/cartografie-curators-quotes.webp)`,
        "## La soluzione",
        "> Dall'archivio come magazzino a una **mappa narrativa** da attraversare.",
        `![Ogni documento è un punto di partenza: persone, periodi storici, temi e luoghi collegati in una mappa narrativa](${media}/cartografie-narrative-map.webp)`,
        "Un sistema editoriale digitale che trasforma l'archivio in una **mappa narrativa interattiva**, dove si esplorano le connessioni tra eventi, persone e temi seguendo percorsi costruiti sui propri interessi. Lo stesso sistema serve due utenti opposti: il curioso trova ingressi multipli, la prima pagina del giorno in cui è nato e percorsi curati, mentre il professionista ha ricerca full-text sugli OCR, filtri, citazioni in formato Chicago o APA e raccolte tematiche. L'architettura si regge su cinque aree, i wireframe sono stati **testati in due round con utenti reali e sulle linee guida WCAG**, e il design system parla la lingua del giornale con i caratteri Solferino e Brera. Il **prototipo web navigabile ottiene 100/100 nel test di accessibilità Lighthouse** e aggiunge un widget di personalizzazione, un lettore vocale e descrizioni automatiche delle immagini.",
        `![Esigenze diverse, percorsi diversi: il curioso e il professionista a confronto in quattro tappe, dall'accesso al dopo](${media}/cartografie-user-journey.webp)`,
        `![Prototipo e test: nove schermate chiave, due round con utenti reali e 100 su 100 nel test di accessibilità Lighthouse](${media}/cartografie-prototype-testing.webp)`,
        "Intorno al sistema abbiamo disegnato un ecosistema di sei canali che si rimandano l'uno all'altro: una newsletter che racconta l'archivio stesso, il podcast **A Mano** che parte ogni volta da un oggetto fisico, un canale YouTube, manifesti in città, l'evento annuale **La notte dell'Archivio** e un ponte fisico-digitale con QR e NFC sui reperti. Il piano di realizzazione prevede 15 persone e 24 settimane in sei fasi, dall'idea al go-live.",
        `![I sei canali dell'ecosistema: newsletter, podcast A Mano, YouTube e Reels, manifesti in città, La notte dell'Archivio ed etichette QR/NFC](${media}/cartografie-six-channels.webp)`,
        "## Il mio ruolo",
        "Progetto in quattro con Maria Chieregato, Yating Hu e Giampaolo Zirone. Ho seguito in particolare **l'architettura dell'informazione e il prototipo navigabile**, costruito in React e pubblicato online perché la giuria potesse provarlo da sola.",
      ],
      en: [
        "## The problem",
        "> An archive of **1.2 million items** that almost nobody outside the specialists can consult.",
        "Corriere della Sera has been telling Italy's story since 1876 and its archive in via Solferino holds **1.2 million digitised items, 54,000 front pages and more than 12,000 collections**, yet it can be consulted almost only by appointment and by researchers who already know what they are looking for. The digital system under construction is designed for specialists, so the curious public stays out, while online visits to national archives grew by 600% in five years. The research question was **how to make the archive accessible to users with different needs, paces and goals**, building on what already exists.",
        `![1.2 million digitised items, 54,000 front pages and 12,454 collections: the archive in numbers](${media}/cartografie-archive-numbers.webp)`,
        "## The research",
        "> The heritage is not the single document but **the relationships between documents**.",
        "We worked on four levels: desk research on the Foundation, a competitor analysis of BBC Archive, Europeana and GNM Archive with comparables such as Atlas Obscura and Google Arts & Culture, an **ethnographic visit to via Solferino with interviews to the curators**, and finally a synthesis into personas and journey maps. Three sentences from the archivists became the project's principles, above all that **the heritage is not the single document but the relationships between documents**, that the archive has a grammar of its own and that digital has to tell a story, not just show beautiful objects.",
        `![What the curators taught us: logic over aesthetics, value in connections, a grammar of its own](${media}/cartografie-curators-quotes.webp)`,
        "## The solution",
        "> From the archive as a warehouse to a **narrative map** to travel through.",
        `![Every document is a starting point: people, historical periods, topics and places linked in a narrative map](${media}/cartografie-narrative-map.webp)`,
        "A digital editorial system that turns the archive into an **interactive narrative map**, where people explore the connections between events, people and themes along paths built on their own interests. The same system serves two opposite users: the curious visitor finds multiple entry points, the front page of the day they were born and curated paths, while the professional gets full-text search on OCR, filters, citations in Chicago or APA format and thematic collections. The architecture rests on five areas, the wireframes were **tested in two rounds with real users and against WCAG guidelines**, and the design system speaks the newspaper's language with the Solferino and Brera typefaces. The **navigable web prototype scores 100/100 on the Lighthouse accessibility test** and adds a personalisation widget, a voice reader and automatic image descriptions.",
        `![Different needs, different paths: the curious and the professional compared across four stages, from access to after](${media}/cartografie-user-journey.webp)`,
        `![Prototype and testing: nine key screens, two rounds with real users and 100 out of 100 on the Lighthouse accessibility test](${media}/cartografie-prototype-testing.webp)`,
        "Around the system we designed an ecosystem of six channels that point to one another: a newsletter about the archive itself, the podcast **A Mano** that starts every episode from a physical object, a YouTube channel, posters in the city, the yearly event **La notte dell'Archivio** and a physical-digital bridge with QR and NFC tags on the items. The delivery plan calls for 15 people and 24 weeks in six phases, from idea to go-live.",
        `![The six channels of the ecosystem: newsletter, A Mano podcast, YouTube and Reels, city posters, Night of the Archive and QR/NFC labels](${media}/cartografie-six-channels.webp)`,
        "## My role",
        "A four-person project with Maria Chieregato, Yating Hu and Giampaolo Zirone. I focused on **the information architecture and the navigable prototype**, built in React and published online so the jury could try it on their own.",
      ],
    },
    tech: {
      it: [
        "UX research e interviste",
        "Information architecture",
        "Design system",
        "Figma",
        "React",
        "Accessibilità WCAG",
        "Service e content design",
      ],
      en: [
        "UX research and interviews",
        "Information architecture",
        "Design system",
        "Figma",
        "React",
        "WCAG accessibility",
        "Service and content design",
      ],
    },
  },
  {
    slug: "evasurgica",
    title: { it: "Evasurgica: redesign UX/UI e pitch", en: "Evasurgica: UX/UI redesign and pitch" },
    category: uxui,
    year: "2026",
    image: `${media}/evasurgica-cover.webp`,
    links: [{ label: "evasurgica.it", url: "https://evasurgica.it/" }],
    tldr: {
      it: "Redesign dell'interfaccia di un sistema AR per la chirurgia e due pitch deck per investitori e cliniche.",
      en: "Redesign of an AR surgery system's interface, plus two pitch decks for investors and clinics.",
    },
    summary: {
      it: "Redesign completo dell'interfaccia di Navi, sistema di navigazione AR per la chirurgia mini-invasiva e robotica, a partire dal brandbook, e due pitch deck distinti per investitori e cliniche, alla vigilia dei trial clinici. Consulenza per B4i, l'acceleratore dell'Università Bocconi.",
      en: "A full redesign of the interface of Navi, an AR navigation system for minimally invasive and robotic surgery, starting from the brandbook, plus two separate pitch decks for investors and clinics, on the eve of clinical trials. Consulting for B4i, Bocconi University's accelerator.",
    },
    description: {
      it: [
        "## Il problema",
        "> Un prodotto solido, ma con **un'interfaccia mai progettata** e un pitch non all'altezza.",
        "Evasurgica è una startup che sviluppa Navi, un sistema di navigazione chirurgica per la chirurgia mini-invasiva e robotica: **sovrappone il modello 3D del paziente all'immagine endoscopica in realtà aumentata**, così che il chirurgo identifichi le strutture anatomiche più in fretta e con meno complicanze. Il prodotto era tecnicamente solido e validato in studi preclinici, e il team aveva già un brandbook, ma **l'interfaccia era stata costruita a mano seguendolo, senza una vera progettazione UX/UI**. Anche il pitch non era all'altezza della tecnologia, proprio mentre si preparavano i trial clinici e bisognava convincere investitori, ospedali e cliniche.",
        `![Il carrello di Evasurgica in sala di test: monitor endoscopico, schermo di navigazione e space mouse 3D](${media}/evasurgica-device.webp)`,
        "## Cosa ho fatto",
        "> **Tutti i dati rilevanti a schermo**, senza perdere visibilità e gerarchia.",
        "Ho lavorato con i founder in una serie di **workshop per far emergere le vere criticità dell'esperienza dell'intero sistema**, non solo dello schermo. La sfida principale era **mantenere a schermo la quantità di dati rilevanti senza perdere visibilità e gerarchia**, tenendo conto delle interazioni con i dispositivi medici, come lo space mouse 3D e gli indicatori 3D, in sala operatoria e in ambiente sterile.",
        `![L'interfaccia di Evasurgica: il modello 3D del paziente sovrapposto all'immagine endoscopica](${media}/evasurgica-build-loop.mp4)`,
        `![Gli strumenti: selezione dei tool, vista 2D/3D e assistente](${media}/evasurgica-ui-tools.webp)`,
        `![Gli indicatori di stato: 3D mouse, indicatore e camera](${media}/evasurgica-ui-status.webp)`,
        "Da qui ho fatto un'**analisi UX/UI dell'applicativo**, con un benchmark dei software affini, e ho **ridisegnato completamente l'interfaccia** partendo dal brandbook esistente, con schermate prima e dopo che motivano ogni intervento sui fondamenti dell'usabilità. ",
        "@flow Il processo di redesign | Workshop: con i founder, per far emergere le criticità dell'intero sistema | Analisi: UX/UI dell'applicativo e benchmark dei software affini | Redesign: interfaccia ridisegnata dal brandbook | Prima e dopo: ogni intervento motivato sull'usabilità | Pitch: review esterne e due versioni, per investitori e per cliniche",
        `![Una schermata dell'applicativo prima e dopo la revisione](${media}/evasurgica-before-after.mp4)`,
        "Sul pitch ho lavorato a stretto contatto con i cofondatori: dopo diverse **review di colleghi esterni** abbiamo definito i punti critici e ridotto il racconto a ciò che serve davvero, **comunicando l'idea con chiarezza e mettendo in evidenza i punti fondamentali per i possibili investitori**, senza perdersi in dettagli poco utili. Ne sono nate due versioni distinte, una per gli investitori e una per cliniche e ospedali.",
      ],
      en: [
        "## The problem",
        "> A solid product, but with **an interface that was never designed** and a pitch that fell short.",
        "Evasurgica is a startup developing Navi, a surgical navigation system for minimally invasive and robotic surgery: it **overlays the patient's 3D model onto the endoscopic image in augmented reality**, so the surgeon identifies anatomical structures faster and with fewer complications. The product was technically solid and validated in preclinical studies, and the team already had a brandbook, but **the interface had been built by hand following it, without proper UX/UI design**. The pitch was not up to the technology either, just as clinical trials were being prepared and investors, hospitals and clinics had to be convinced.",
        `![The Evasurgica cart in the test room: endoscope monitor, navigation screen and 3D space mouse](${media}/evasurgica-device.webp)`,
        "## What I did",
        "> **All the relevant data on screen**, without losing visibility and hierarchy.",
        "I worked with the founders in a series of **workshops to bring out the real pain points of the experience of the whole system**, not just the screen. The main challenge was **keeping the relevant data on screen without losing visibility and hierarchy**, while accounting for interactions with medical devices such as the 3D space mouse and 3D pointers, in the operating room and in a sterile environment.",
        `![Evasurgica's interface: the patient's 3D model overlaid on the endoscopic image](${media}/evasurgica-build-loop.mp4)`,
        `![The tools: tool selection, 2D/3D view and assistant](${media}/evasurgica-ui-tools.webp)`,
        `![The status indicators: 3D mouse, indicator and camera](${media}/evasurgica-ui-status.webp)`,
        "From there I ran a **UX/UI analysis of the application**, with a benchmark of similar software, and **completely redesigned the interface** starting from the existing brandbook, with before-and-after screens that justify each change on usability fundamentals. ",
        "@flow The redesign process | Workshops: with the founders, to bring out the pain points of the whole system | Analysis: UX/UI analysis of the application and benchmark of similar software | Redesign: interface redrawn from the brandbook | Before and after: each change justified on usability | Pitch: outside reviews and two versions, for investors and for clinics",
        `![An application screen before and after the review](${media}/evasurgica-before-after.mp4)`,
        "On the pitch I worked closely with the co-founders: after several **reviews by outside colleagues** we defined the critical points and cut the story down to what really matters, **conveying the idea clearly and putting the key points for prospective investors up front**, without getting lost in unhelpful detail. This produced two separate versions, one for investors and one for clinics and hospitals.",
      ],
    },
    tech: {
      it: ["Analisi UX/UI", "Euristiche di usabilità", "Benchmark", "Figma", "Pitch deck", "Design per ambienti sterili"],
      en: ["UX/UI analysis", "Usability heuristics", "Benchmark", "Figma", "Pitch deck", "Design for sterile environments"],
    },
  },
  {
    slug: "teseo",
    title: { it: "Teseo: riparare invece di sostituire", en: "Teseo: repair instead of replace" },
    category: service,
    year: "2026",
    image: `${media}/teseo-cover.webp`,
    links: [{ label: { it: "Prototipo", en: "Prototype" }, url: "https://teseo-eight.vercel.app/" }],
    tldr: {
      it: "Un servizio che collega ricambi digitali e stampanti 3D di quartiere per riparare invece di sostituire.",
      en: "A service linking digital spare parts to neighbourhood 3D printers to repair instead of replace.",
    },
    summary: {
      it: "Un servizio che rimette in vita gli oggetti a cui manca un pezzo, collegando i ricambi come file digitali a una rete di FabLab e stampanti 3D di quartiere. Progetto di gruppo in NABA.",
      en: "A service that brings back to life objects missing a single part, connecting spare parts as digital files to a network of neighbourhood FabLabs and 3D printers. Group project at NABA.",
    },
    description: {
      it: [
        "## Il problema",
        "> Basta **un ingranaggio o una clip** per buttare via un oggetto intero.",
        "Gli oggetti hanno punti deboli progettati per cedere, e quando cedono **basta un ingranaggio, una clip o una manopola per buttare via tutto**, perché dopo qualche anno il ricambio non si trova più. Il produttore non lo offre, il negozio non lo conosce e nessuno sa a chi chiederlo.",
        "Abbiamo costruito la ricerca su un sondaggio di 96 risposte sulle abitudini di riparazione, affiancato da interviste. **L'82% ha cercato un ricambio senza trovarlo e il 43% ha buttato un oggetto intero per un singolo pezzo mancante.** Le persone preferirebbero riparare: quello che le ferma è non sapere dove trovare il pezzo e a chi rivolgersi. Il 56% si dice disposto a fare più che il semplice utente, stampando per altri, condividendo modelli 3D o lavorando in uno spazio di stampa.",
        "La capacità per farlo esiste già. Abbiamo mappato **30 nodi tra Milano e provincia**: FabLab e makerspace, produttori di ricambi orfani, servizi di stampa conto terzi. Si concentrano attorno a Bovisa e Dergano, vicino al Politecnico, e lasciano un vuoto a est, da Segrate in poi. **Solo il 7% dei rispondenti sa di averne uno vicino a casa.** La mappa copre un campione rappresentativo, non l'insieme completo: i registri e Google Places hanno limiti noti, e OpenDot, uno dei FabLab più importanti della città, è emerso solo al secondo passaggio.",
        "Il quadro è quello dell'Industria 5.0 e dell'Environment-Centered Design: produrre in locale e su richiesta al posto di scorte, spedizioni e sostituzioni complete. Per un componente da 30 g in PETG su una sedia da ufficio, la nostra stima è di circa 20 kg di CO₂ se si butta la sedia contro 0,5 kg se si ripara, **oltre il 95% in meno**.",
        "Siamo partiti da tre direzioni emerse dalla ricerca sulle tecnologie abilitanti: un ecosistema IIoT civico, un sistema AR per il restauro architettonico e una piattaforma di ricambi stampati in 3D. Abbiamo portato avanti la terza perché è quella in cui produzione locale, fine dell'obsolescenza e riduzione dei trasporti si tengono insieme, e perché dà alle aziende un ruolo coerente con il diritto alla riparazione.",
        "## La soluzione",
        "> Riparare diventa **più semplice e più vicino** dell'acquistare.",
        "Teseo prende il nome dal paradosso della nave: l'identità di un oggetto sta nelle relazioni tra le parti, non nelle parti, e **un oggetto riparato resta lo stesso oggetto anche se porta i segni di chi l'ha rimesso insieme**. Il servizio collega chi ha un oggetto fermo, i file digitali dei ricambi e la stampante 3D più vicina, che sia un FabLab o un privato disposto a stampare per il quartiere, così che la riparazione diventi più semplice e più vicina dell'acquisto.",
        "Si fotografa l'oggetto rotto. La computer vision riconosce il pezzo che manca, il sistema recupera il modello 3D o lo ricostruisce, e il lavoro passa al laboratorio certificato più vicino. Il ricambio si ritira in un punto di raccolta del quartiere, senza spedizioni. Quando un modello non esiste, la richiesta passa alla community con una ricompensa per chi lo disegna. La certificazione dei laboratori risponde al timore più diffuso, quello sulla qualità del pezzo stampato.",
        `![Si inquadra l'oggetto rotto con il telefono e il sistema riconosce il pezzo che manca](${media}/teseo-scan.webp)`,
        "@flow Il flusso di riparazione | Scansione: si fotografa l'oggetto rotto | Riconoscimento: la computer vision individua il pezzo che manca | Modello 3D: il sistema lo recupera o lo ricostruisce | Laboratorio: lo stampa il FabLab certificato più vicino | Ritiro: il pezzo si ritira nel quartiere, senza spedizioni",
        "Le tre domande progettuali che hanno guidato il lavoro riguardano **l'innesco** (come far partire la riparazione nel momento in cui l'oggetto si rompe), **la capacità nascosta** (come rendere visibile la rete di chi può stampare) e **il movente** (come far sentire l'effetto di una riparazione). Ciascuna ha un componente: scansione e riconoscimento, rete di FabLab con matching e certificazione, payoff e dashboard dell'impatto. Il servizio si rivolge a tre persone: Giulia, pragmatica e contraria allo spreco, va guidata; Marco, affezionato ai suoi oggetti e diffidente, va rassicurato; Roberto, maker con una stampante e tempo libero, va messo in condizione di essere riconosciuto per quello che sa fare.",
        "## Il prototipo",
        "> Un servizio che **funziona nel browser**, dalla scansione al laboratorio.",
        "Il prototipo funziona nel browser. La scansione riconosce una moka con un modello di visione in locale, un viewer wireframe mostra la parte stampata che cresce strato dopo strato, e due dashboard speculari, una per chi ripara e una per il FabLab con la coda di stampa, chiudono il ciclo.",
        `![La dashboard di chi ripara: progetti in corso, notifiche ed eventi della community](${media}/teseo-dashboard.webp)`,
        `![La landing del prototipo: «Unisciti alla rete che sistema»](${media}/teseo-landing.webp)`,
        "@palette Colori di Teseo: #3F7308 #F1F6E8 #18280E #B2EB76",
        "## Alla Milano Digital Week",
        "> Esposto allo **STEP FuturAbility District**, dal 30 settembre al 4 ottobre.",
        "Teseo è stato esposto alla Milano Digital Week 2026, allo STEP FuturAbility District, dal 30 settembre al 4 ottobre, con un'installazione immersiva e una pitch session con gli studenti del MA in User Experience Design di NABA.",
        `![L'installazione di Teseo allo STEP: colonne luminose con il wordmark, la mappa della rete FabLab e gli oggetti da riparare](${media}/teseo-mdw26-1.webp)`,
        `![Il modello 3D di una sedia da ufficio proiettato su una colonna dell'installazione, accanto al testo sul paradosso della nave di Teseo](${media}/teseo-mdw26-chair.webp)`,
        `![La pitch session Beyond the Interface alla Milano Digital Week, moderata da Emiliano Audisio](${media}/teseo-mdw26-2.webp)`,
        `![Il pitch di Teseo sul palco della Milano Digital Week](${media}/teseo-mdw26-pitch.webp)`,
        "## Il mio ruolo",
        "Progetto di gruppo con Stefano Vergani. Ho condotto il sondaggio e le interviste, mappato la rete dei FabLab, costruito personas, empathy map e user journey, e definito il concept del servizio e la sua architettura. Con Stefano ho creato su Figma il **design system e le schermate** del servizio, e ho poi portato io il design nel **prototipo funzionante**.",
      ],
      en: [
        "## The problem",
        "> **A single gear or clip** is enough to throw a whole object away.",
        "Objects have weak points designed to fail, and when they do **a single gear, clip or knob is enough to throw the whole thing away**, because after a few years the spare part can no longer be found. The manufacturer doesn't offer it, the shop doesn't know it and nobody knows whom to ask.",
        "We built the research on a 96-response survey on repair habits, alongside interviews. **82% had looked for a spare part without finding it and 43% had thrown away a whole object over a single missing piece.** People would rather repair: what stops them is not knowing where to find the part and whom to turn to. 56% say they are willing to do more than just use the service, by printing for others, sharing 3D models or working in a print space.",
        "The capacity to do it already exists. We mapped **30 nodes across Milan and its province**: FabLabs and makerspaces, makers of orphaned spare parts, third-party printing services. They cluster around Bovisa and Dergano, near the Politecnico, and leave a gap to the east, from Segrate onwards. **Only 7% of respondents know there is one near their home.** The map covers a representative sample, not the full set: registries and Google Places have known limits, and OpenDot, one of the city's most important FabLabs, only surfaced on the second pass.",
        "The frame is Industry 5.0 and Environment-Centered Design: producing locally and on demand instead of stock, shipping and full replacements. For a 30 g PETG component on an office chair, our estimate is about 20 kg of CO₂ if the chair is thrown away against 0.5 kg if it is repaired, **over 95% less**.",
        "We started from three directions that emerged from the research on enabling technologies: a civic IIoT ecosystem, an AR system for architectural restoration and a platform of 3D-printed spare parts. We pursued the third because it is where local production, the end of obsolescence and fewer transports hold together, and because it gives companies a role consistent with the right to repair.",
        "## The solution",
        "> Repairing becomes **simpler and closer** than buying.",
        "Teseo takes its name from the ship paradox: an object's identity lies in the relationships between its parts, not in the parts, and **a repaired object is still the same object even if it carries the marks of whoever put it back together**. The service connects the person with a broken object, the digital files of the spare parts and the nearest 3D printer, whether a FabLab or a private owner willing to print for the neighbourhood, so that repairing becomes simpler and closer than buying.",
        "You photograph the broken object. Computer vision recognises the missing part, the system retrieves the 3D model or rebuilds it, and the job goes to the nearest certified lab. The spare part is collected at a neighbourhood pickup point, with no shipping. When no model exists, the request goes to the community with a reward for whoever draws it. Lab certification answers the most common worry, the quality of the printed part.",
        `![The broken object is framed with the phone and the system recognises the missing part](${media}/teseo-scan.webp)`,
        "@flow The repair flow | Scan: photograph the broken object | Recognition: computer vision spots the missing part | 3D model: the system retrieves or rebuilds it | Lab: the nearest certified FabLab prints it | Pickup: collect the part in the neighbourhood, no shipping",
        "The three design questions that guided the work concern **the trigger** (how to start the repair at the moment the object breaks), **the hidden capacity** (how to make the network of people who can print visible) and **the motive** (how to let people feel the effect of a repair). Each has a component: scanning and recognition, a FabLab network with matching and certification, a payoff and an impact dashboard. The service addresses three people: Giulia, pragmatic and against waste, needs guiding; Marco, attached to his objects and wary, needs reassuring; Roberto, a maker with a printer and spare time, needs to be recognised for what he can do.",
        "## The prototype",
        "> A service that **runs in the browser**, from scan to lab.",
        "The prototype runs in the browser. Scanning recognises a moka pot with a vision model running locally, a wireframe viewer shows the printed part growing layer by layer, and two mirrored dashboards, one for the person repairing and one for the FabLab with its print queue, close the loop.",
        `![The dashboard for the person repairing: ongoing projects, notifications and community events](${media}/teseo-dashboard.webp)`,
        `![The prototype landing page: join the network that fixes things](${media}/teseo-landing.webp)`,
        "@palette Teseo colours: #3F7308 #F1F6E8 #18280E #B2EB76",
        "## At Milano Digital Week",
        "> Exhibited at **STEP FuturAbility District**, from 30 September to 4 October.",
        "Teseo was exhibited at Milano Digital Week 2026, at STEP FuturAbility District, from 30 September to 4 October, with an immersive installation and a pitch session with NABA's MA in User Experience Design students.",
        `![The Teseo installation at STEP: lit columns with the wordmark, the FabLab network map and the objects to repair](${media}/teseo-mdw26-1.webp)`,
        `![The 3D model of an office chair projected on a column of the installation, next to the text on the Ship of Theseus paradox](${media}/teseo-mdw26-chair.webp)`,
        `![The Beyond the Interface pitch session at Milano Digital Week, moderated by Emiliano Audisio](${media}/teseo-mdw26-2.webp)`,
        `![The Teseo pitch on stage at Milano Digital Week](${media}/teseo-mdw26-pitch.webp)`,
        "## My role",
        "A group project with Stefano Vergani. I ran the survey and interviews, mapped the FabLab network, built personas, empathy map and user journey, and defined the service concept and its architecture. With Stefano I created the **design system and the screens** of the service in Figma, and I then brought the design into the **working prototype** myself.",
      ],
    },
    tech: {
      it: ["Service design", "UX research e sondaggi", "Concept design", "Design system", "Figma"],
      en: ["Service design", "UX research and surveys", "Concept design", "Design system", "Figma"],
    },
  },
  {
    slug: "pclab",
    other: true,
    title: { it: "PCLab: redesign SEO del sito", en: "PCLab: SEO website redesign" },
    category: web,
    year: "2026",
    href: "https://pclab.bs.it",
    links: [{ label: "pclab.bs.it", url: "https://pclab.bs.it" }],
    tldr: {
      it: "Nuovo sito per un'azienda IT bresciana: tema su misura, migrazione senza perdere posizionamento, PageSpeed mobile da 78 a 93.",
      en: "New website for a Brescia IT company: custom theme, migration with rankings intact, mobile PageSpeed from 78 to 93.",
    },
    summary: {
      it: "Il nuovo sito di PCLab, azienda di assistenza IT in provincia di Brescia: da poche pagine generiche a una struttura di circa trenta pagine costruite sulle ricerche reali dei clienti, con tema WordPress su misura, migrazione senza perdere posizionamento e PageSpeed mobile da 78 a 93.",
      en: "The new website of PCLab, an IT services company in the Brescia area: from a few generic pages to a structure of about thirty pages built on what customers actually search for, with a custom WordPress theme, a migration that kept rankings intact and mobile PageSpeed from 78 to 93.",
    },
    description: {
      it: [
        "## Il problema",
        "> Le aziende cercano con **query precise e locali**, il sito rispondeva con poche pagine generiche.",
        "PCLab fa assistenza informatica, cybersecurity, cloud e reti per le aziende della provincia di Brescia, ma il sito raccontava i servizi con **poche pagine macro** che non corrispondevano a come le aziende cercano davvero, cioè con query precise e locali come \"assistenza server Brescia\" o \"backup cloud\". Chi arrivava da Google trovava una pagina generica, e chi cercava un servizio specifico spesso non arrivava proprio.",
        "## La soluzione",
        "> Circa **trenta pagine** costruite sulle ricerche reali dei clienti.",
        "Sono partito da una ricerca sulle parole chiave del settore per disegnare una **struttura di circa trenta pagine orientate alle ricerche reali**, con due livelli di servizi, pagine per settore, pagine per i brand partner e una sezione di domande frequenti che risponde alle domande informative senza cannibalizzare quelle transazionali. Il sito gira su un **tema WordPress scritto su misura**, con tipi di contenuto dedicati, breadcrumb, dati strutturati e sitemap che si aggiornano da soli quando si aggiunge una pagina.",
        "## Cosa ho fatto",
        "> **65 rinomine e 99 redirect** senza perdere il posizionamento, e PageSpeed mobile da **78 a 93**.",
        "Ho progettato e costruito tutto, dal tema alla migrazione. Il passaggio alla nuova struttura ha comportato **65 rinomine di URL e 99 redirect**, verificati uno per uno perché non si perdesse il posizionamento esistente, con i link interni riscritti via script. Dopo il go-live ho lavorato sulle prestazioni, con font ottimizzati, CSS minificati e cache lato server, portando il **punteggio PageSpeed mobile da 78 a 93**, e ho impostato il monitoraggio SEO con Search Console e gli eventi di conversione in GA4.",
        "## Risultati",
        "> Online da luglio 2026, con **tutti i vecchi indirizzi** che rispondono con un redirect.",
        "Il sito è online da luglio 2026 con la struttura completa, tutti i vecchi indirizzi rispondono con un redirect diretto e le pagine servizio si posizionano sulle query locali per cui sono state progettate.",
      ],
      en: [
        "## The problem",
        "> Businesses search with **precise, local queries**; the site answered with a few generic pages.",
        "PCLab provides IT support, cybersecurity, cloud and networking to companies in the Brescia area, but the website described its services with **a handful of broad pages** that did not match how businesses actually search, that is with precise, local queries such as \"server support Brescia\" or \"cloud backup\". People coming from Google landed on a generic page, and those looking for a specific service often did not land at all.",
        "## The solution",
        "> About **thirty pages** built on what customers actually search for.",
        "I started from keyword research for the sector to design a **structure of about thirty pages oriented to real searches**, with two levels of services, pages per industry, pages for partner brands and a FAQ section that answers informational questions without cannibalising the transactional ones. The site runs on a **custom-written WordPress theme**, with dedicated content types, breadcrumbs, structured data and sitemaps that update themselves when a page is added.",
        "## What I did",
        "> **65 renames and 99 redirects** with rankings intact, and mobile PageSpeed from **78 to 93**.",
        "I designed and built everything, from the theme to the migration. Moving to the new structure meant **65 URL renames and 99 redirects**, checked one by one so that existing rankings were not lost, with internal links rewritten by script. After go-live I worked on performance, with optimised fonts, minified CSS and server-side caching, taking the **mobile PageSpeed score from 78 to 93**, and set up SEO monitoring with Search Console and conversion events in GA4.",
        "## Results",
        "> Live since July 2026, with **every old address** answering with a redirect.",
        "The site has been live since July 2026 with the full structure, every old address answers with a direct redirect and the service pages rank for the local queries they were designed for.",
      ],
    },
    tech: {
      it: ["SEO e keyword research", "Information architecture", "WordPress", "PHP", "Rank Math", "Search Console", "GA4", "Plesk"],
      en: ["SEO and keyword research", "Information architecture", "WordPress", "PHP", "Rank Math", "Search Console", "GA4", "Plesk"],
    },
  },
  {
    slug: "antevo",
    // ponytail: oscurato per ora; togliere `hidden` per ripubblicarla
    hidden: true,
    other: true,
    title: { it: "Antevo: naming e brand identity", en: "Antevo: naming and brand identity" },
    category: brand,
    year: "2026",
    href: "https://antevo.ai",
    links: [{ label: "antevo.ai", url: "https://antevo.ai" }],
    tldr: {
      it: "Naming, identità e pitch deck per un software clinico AI di oncologia: da Evoclin nasce Antevo.",
      en: "Naming, identity and pitch deck for an AI clinical software in oncology: Evoclin becomes Antevo.",
    },
    summary: {
      it: "Il rebrand di Evoclin, spin-off di Bicocca e San Raffaele che sviluppa software clinico AI per l'oncologia di precisione: dal problema del nome al naming, all'identità e al pitch deck, come consulente UX e product per B4i, l'acceleratore dell'Università Bocconi.",
      en: "The rebrand of Evoclin, a Bicocca and San Raffaele spin-off building AI clinical software for precision oncology: from the naming problem to the new name, the identity and the pitch deck, as UX and product consultant for B4i, Bocconi University's accelerator.",
    },
    description: {
      it: [
        "## Il problema",
        "> Un nome che suonava come un **detergente** e che esisteva già su un prodotto cosmetico.",
        "Evoclin sviluppa software che parte dai dati genomici già raccolti negli ospedali per **prevedere come evolverà un tumore**, con framework validati su oltre 35.000 casi e due premi nazionali alle spalle. Il nome però aveva due problemi concreti: **suonava come \"EvoClean\"**, cioè un detergente, ed **esisteva già un prodotto cosmetico con lo stesso nome**. Per una startup che si presenta a ospedali e investitori la credibilità viene prima di tutto, e il rebrand era la priorità del batch.",
        "## Cosa ho fatto",
        "> Dal brief unico a **sette proposte di naming**, quattro direzioni di identità e un nuovo pitch deck.",
        "Ho seguito Evoclin come consulente nel Batch XIII di B4i. Sono partito dal brand sprint dei founder e dal brief dell'agenzia senior e li ho **sintetizzati in un brand brief unico** con valori, personalità e vincoli, in particolare che il nuovo nome non dovesse suonare cosmetico né farmaceutico. Ho sviluppato **sette proposte di naming, ognuna con un concetto tracciabile**, una verifica dei domini e dei conflitti con altri marchi, e le ho discusse con il team in più giri. In parallelo ho **riorganizzato il pitch deck** su gerarchia e leggibilità, e ho preparato quattro direzioni di brand identity da cui derivare logo, palette, tipografia e tono di voce.",
        "@flow Il processo di rebrand | Brief: brand sprint dei founder e brief dell'agenzia in un unico documento | Naming: sette proposte, ognuna con un concetto tracciabile | Verifica: domini e conflitti con altri marchi | Confronto: più giri di discussione con il team | Identità e deck: quattro direzioni di brand e pitch deck riorganizzato",
        "## Risultati",
        "> Da Evoclin nasce **Antevo**: anticipare l'evoluzione del tumore.",
        "Il team ha scelto **Antevo**, da \"ante\" ed \"evo\": anticipare l'evoluzione del tumore, mantenendo la radice che collega il nuovo nome ai paper e ai premi già firmati come Evoclin. La società oggi si chiama Antevo S.r.l. e vive su antevo.ai, mentre il nuovo deck è stato definito dal team \"molto meglio\" e \"molto pulito\" ed è diventato la base della presentazione agli investitori.",
      ],
      en: [
        "## The problem",
        "> A name that sounded like a **detergent** and already existed on a cosmetic product.",
        "Evoclin builds software that starts from genomic data hospitals already collect to **predict how a tumour will evolve**, with frameworks validated on more than 35,000 cases and two national awards behind it. The name, though, had two concrete problems: **it sounded like \"EvoClean\"**, a detergent, and **a cosmetic product with the same name already existed**. For a startup pitching to hospitals and investors credibility comes first, and the rebrand was the batch's top priority.",
        "## What I did",
        "> From a single brief to **seven naming proposals**, four identity directions and a new pitch deck.",
        "I worked with Evoclin as a consultant in B4i's Batch XIII. I started from the founders' brand sprint and the senior agency's brief and **merged them into a single brand brief** with values, personality and constraints, above all that the new name must not sound cosmetic or pharmaceutical. I developed **seven naming proposals, each with a traceable concept**, a check of domains and conflicts with other brands, and discussed them with the team over several rounds. In parallel I **reworked the pitch deck** for hierarchy and readability, and prepared four brand identity directions from which to derive logo, palette, typography and tone of voice.",
        "@flow The rebrand process | Brief: founders' brand sprint and agency brief merged into one document | Naming: seven proposals, each with a traceable concept | Checks: domains and conflicts with other brands | Review: several rounds of discussion with the team | Identity and deck: four brand directions and a reworked pitch deck",
        "## Results",
        "> Evoclin becomes **Antevo**: anticipating the tumour's evolution.",
        "The team chose **Antevo**, from \"ante\" and \"evo\": anticipating the tumour's evolution, while keeping the root that ties the new name to the papers and awards already signed as Evoclin. The company is now Antevo S.r.l. and lives at antevo.ai, while the new deck was called \"much better\" and \"very clean\" by the team and became the base of the investor presentation.",
      ],
    },
    tech: {
      it: ["Naming", "Brand strategy", "Brand identity", "Pitch deck", "Figma", "Workshop e brand sprint"],
      en: ["Naming", "Brand strategy", "Brand identity", "Pitch deck", "Figma", "Workshops and brand sprint"],
    },
  },
  {
    slug: "muba-arborea",
    other: true,
    title: { it: "MUBA: Museo della Bonifica di Arborea", en: "MUBA: Arborea Land Reclamation Museum" },
    category: artDirection,
    year: "2025",
    image: `${media}/muba-cover.webp`,
    accent: "#e52d28",
    links: [
      { label: "Behance", url: "https://www.behance.net/gallery/256179223/MUBA-Past-Future-Present" },
      { label: { it: "Prototipo", en: "Prototype" }, url: "https://muba-website.vercel.app/" },
    ],
    tldr: {
      it: "Rebranding completo di un museo: identità, sito, app, biglietteria, podcast e piano editoriale, pronto per il cliente.",
      en: "Complete museum rebranding: identity, website, app, ticketing, podcast and editorial plan, ready for the client.",
    },
    summary: {
      it: "Rebranding completo del museo di Arborea, in Sardegna: ricerca, identità visiva con illustrazioni e animazioni, sito storytelling, app nativa, biglietteria online, podcast e piano editoriale. Pronto da consegnare al cliente.",
      en: "Complete rebranding of the museum of Arborea, Sardinia: research, a visual identity with illustrations and animations, a storytelling website, a native app, online ticketing, a podcast and an editorial plan. Ready to hand over to the client.",
    },
    description: {
      it: [
        "## Il contesto",
        "> Una città **fondata nel 1928** da famiglie arrivate da quattro regioni.",
        "Il MUBA è allestito nell'ex Mulino di Arborea e racconta la bonifica della piana del Sassu e la città, **fondata nel 1928 da famiglie arrivate da Veneto, Friuli, Romagna e Sicilia**, un esperimento di migrazione interna unico per l'epoca.",
        "## La sfida",
        "> Un museo che racconta una storia viva, ma **in una sola direzione**: il visitatore guarda, legge e se ne va.",
        "Fuori dalla Sardegna quasi nessuno la conosce, e la comunicazione del museo non la racconta. Ho curato la ricerca su branding, tono di voce e personalità: tre cluster di pubblico, nove personas, cinque musei a confronto su diciotto fattori. **Nessuno usa l'ironia e la condivisione è quasi inesplorata**, ed è lì che il MUBA poteva stare.",
        "## L'idea",
        "> Un museo che non guardi soltanto. **Lo vivi.**",
        "Tre verbi: **scoprire**, **connettersi**, **lasciare il proprio segno**. A parlare è una nonna disegnata a mano, con un tono caldo e ironico, e la promessa del brand è scritta in italiano, veneto e sardo.",
        `![Proposta di valore del MUBA: scopri, connettiti, lascia il tuo segno](${media}/muba-value-proposition.webp)`,
        "## L'identità",
        "> Antracite e crema con **un solo accento: il rosso bonifica**.",
        "Come art director ho costruito un'identità a tutto tondo: un logo con la B allungata, **antracite e crema con un solo accento, il rosso bonifica**, fotografie d'archivio in bianco e nero, illustrazioni e animazioni disegnate su misura.",
        "@palette Colori del MUBA: #2b2b2b #faefdc #e52d28",
        `![La nuova identità del MUBA: logo esteso, logo breve e sigillo nei tre colori](${media}/muba-identity.webp)`,
        "## Sito e MUBApp",
        "> Un sito che racconta e una **app** che accompagna nel museo.",
        "Ho ridisegnato il sito attorno allo storytelling, con una sitemap rivista da zero e nuove pagine e funzioni: museo digitale, digitalizzazione dei reperti, **prenotazione online dei biglietti**. La **MUBApp** nativa rende l'esplorazione più consapevole, con audioguida, mappa e scansione dei pezzi.",
        `![La MUBApp: guida del museo con l'elenco delle opere e la tab bar](${media}/muba-app.webp)`,
        "## Comunicazione",
        "> Il podcast **Ciacolate** dà voce a chi ha visto cambiare la terra.",
        "Il podcast **Ciacolate**, dal motto veneto \"ciacolare e ciacoleremo\", \"chiacchieriamo e continueremo a farlo\", dà voce a chi ha visto cambiare la terra. Un piano editoriale ad hoc di mostre, incontri e annunci usa la stessa grammatica visiva. Il progetto è pronto da consegnare al cliente.",
        `![Ciacolate, il podcast del MUBA: copertina e due episodi](${media}/muba-podcast.webp)`,
      ],
      en: [
        "## The context",
        "> A town **founded in 1928** by families from four regions.",
        "MUBA is housed in the former Mill of Arborea and tells the story of the reclamation of the Sassu plain and of the town, **founded in 1928 by families from Veneto, Friuli, Romagna and Sicily**, an internal migration experiment unique for its time.",
        "## The challenge",
        "> A museum that tells a living story, but **in one direction only**: visitors look, read and leave.",
        "Outside Sardinia almost nobody knows it, and the museum's communication does not tell it. I led the research on branding, tone of voice and personality: three audience clusters, nine personas, five museums compared across eighteen factors. **None uses irony and sharing is barely explored**, and that is where MUBA could stand.",
        "## The idea",
        "> A museum you don't just look at. **You live it.**",
        "Three verbs: **discover**, **connect**, **leave your mark**. The voice is a hand-drawn grandmother, warm and ironic, and the brand promise is written in Italian, Venetan and Sardinian.",
        `![MUBA value proposition: discover, connect, leave your mark](${media}/muba-value-proposition.webp)`,
        "## The identity",
        "> Charcoal and cream with **a single accent: reclamation red**.",
        "As art director I built a complete identity: a logo with a stretched B, **charcoal and cream with a single accent, reclamation red**, black-and-white archive photographs, custom-drawn illustrations and animations.",
        "@palette MUBA colours: #2b2b2b #faefdc #e52d28",
        `![The new MUBA identity: full logo, short logo and seal in the three colours](${media}/muba-identity.webp)`,
        "## Website and MUBApp",
        "> A website that tells the story and an **app** that guides you through the museum.",
        "I redesigned the website around storytelling, with a sitemap rebuilt from scratch and new pages and features: a digital museum, digitised artefacts, **online ticket booking**. The native **MUBApp** makes exploring more mindful, with an audio guide, a map and item scanning.",
        `![The MUBApp: museum guide with the list of works and the tab bar](${media}/muba-app.webp)`,
        "## Communication",
        "> The **Ciacolate** podcast gives a voice to those who watched the land change.",
        "The podcast **Ciacolate**, from the Venetan motto \"ciacolare e ciacoleremo\", \"we chat, and we'll keep chatting\", gives a voice to those who watched the land change. A tailor-made editorial plan of exhibitions, talks and announcements shares the same visual grammar. The project is ready to hand over to the client.",
        `![Ciacolate, the MUBA podcast: cover and two episodes](${media}/muba-podcast.webp)`,
      ],
    },
    tech: {
      it: ["Art direction", "Brand identity", "Design system", "Figma", "UI web e mobile", "Podcast e contenuti", "Strategia social"],
      en: ["Art direction", "Brand identity", "Design system", "Figma", "Web and mobile UI", "Podcast and content", "Social strategy"],
    },
  },
  {
    slug: "evoclin",
    // ponytail: nascosto finché i [da completare] non sono compilati; togliere `hidden` per pubblicarla
    hidden: true,
    title: { it: "Evoclin: rebrand e UX/UI della demo", en: "Evoclin: rebrand and demo UX/UI" },
    category: uxui,
    year: "2026",
    tldr: {
      it: "Rebrand completo e UX/UI della demo che una startup medicale ha presentato agli investitori, portando una grande quantità di dati clinici dentro una gerarchia chiara.",
      en: "Complete rebrand and UX/UI of the demo that a medical startup presented to investors, bringing a large amount of clinical data into a clear hierarchy.",
    },
    summary: {
      it: "Rebrand completo e UX/UI della demo per gli investitori di Evoclin, startup medicale nell'acceleratore B4i dell'Università Bocconi.",
      en: "Complete rebrand and UX/UI of the investor demo for Evoclin, a medical startup in the B4i accelerator of Bocconi University.",
    },
    description: {
      it: [
        "[Immagine di copertina: da completare]",
        "## Il problema",
        "Evoclin è una startup medicale del programma di accelerazione B4i dell'Università Bocconi, e [da completare: cosa fa il prodotto e per chi]. La sua demo doveva mostrare agli investitori una grande quantità di dati clinici, mentre [da completare: cosa non funzionava nella versione precedente della demo o del brand].",
        "[Immagine: da completare, per esempio la demo prima del redesign]",
        "## Cosa ho fatto",
        "Come UX & Product Consultant per B4i ho seguito il rebrand completo di Evoclin e la UX/UI della demo presentata agli investitori, portando una grande quantità di dati clinici dentro una gerarchia chiara così che [da completare: cosa doveva capire per primo chi guardava la demo]. [da completare: come hai lavorato, con chi e in quali fasi]",
        "[Immagine: da completare, nuovo brand]",
        "[Immagine: da completare, schermate della demo]",
      ],
      en: [
        "[Immagine di copertina: da completare]",
        "## The problem",
        "Evoclin is a medical startup in B4i, the acceleration programme of Bocconi University, and [da completare: cosa fa il prodotto e per chi]. Its demo had to show investors a large amount of clinical data, while [da completare: cosa non funzionava nella versione precedente della demo o del brand].",
        "[Immagine: da completare, per esempio la demo prima del redesign]",
        "## What I did",
        "As UX & Product Consultant for B4i I worked on a complete rebrand of Evoclin and on the UX/UI of the demo presented to investors, bringing a large amount of clinical data into a clear hierarchy so that [da completare: cosa doveva capire per primo chi guardava la demo]. [da completare: come hai lavorato, con chi e in quali fasi]",
        "[Immagine: da completare, nuovo brand]",
        "[Immagine: da completare, schermate della demo]",
      ],
    },
    tech: {
      it: ["[da completare: strumenti e ambiti, per esempio Branding, UX/UI]"],
      en: ["[da completare: strumenti e ambiti, per esempio Branding, UX/UI]"],
    },
  },
  {
    slug: "dazn-pass-subscription-ux-flow",
    hidden: true,
    title: { it: "DAZN Pass subscription UX Flow", en: "DAZN Pass subscription UX Flow" },
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
      it: [
        "Figma",
        "User flow e mappatura",
        "Prototipazione interattiva",
        "Design system",
        "UX writing",
      ],
      en: ["Figma", "User flow mapping", "Interactive prototyping", "Design system", "UX writing"],
    },
  },
  {
    slug: "crypto-dashboard-landing-page-ui",
    hidden: true,
    title: { it: "Crypto Dashboard & Landing page UI", en: "Crypto Dashboard & Landing page UI" },
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
    title: { it: "Greeting Card Builder web app UI Concept Design", en: "Greeting Card Builder web app UI Concept Design" },
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
    title: { it: "IoT Smart Home Concept Design", en: "IoT Smart Home Concept Design" },
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
    title: { it: "TAKT Design catalog", en: "TAKT Design catalog" },
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
      it: [
        "InDesign",
        "Photoshop",
        "Impaginazione editoriale",
        "Tipografia",
        "Preparazione per la stampa",
      ],
      en: ["InDesign", "Photoshop", "Editorial layout", "Typography", "Print production"],
    },
  },
  {
    slug: "italian-passport-redesign",
    hidden: true,
    title: { it: "Italian E-Passport redesign", en: "Italian E-Passport redesign" },
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
    title: { it: "Fast Food landing page", en: "Fast Food landing page" },
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
      it: [
        "Figma",
        "Mobile first",
        "Art direction fotografica",
        "Landing page design",
        "UX writing",
      ],
      en: [
        "Figma",
        "Mobile first",
        "Photographic art direction",
        "Landing page design",
        "UX writing",
      ],
    },
  },
  {
    slug: "medieval-bestiary-redesign",
    hidden: true,
    title: { it: "Medieval Bestiary redesign", en: "Medieval Bestiary redesign" },
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
    title: { it: "Scalvinoni bakery Branding", en: "Scalvinoni bakery Branding" },
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
// togliergli quella riga.
export const visibleProjects = projects.filter((project) => !project.hidden);

export type ToolItem = {
  slug: string;
  label: Localized<string>;
  summary: Localized<string>;
};

// I componenti stanno in src/components/tools.tsx: qui solo dati, perché
// vite.config.ts importa questo file e non può tirarsi dentro del JSX.
// ponytail: false nasconde la sezione Strumenti (link, prerender e rotte); true la riporta com'era
export const showTools = false;

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
  /** Senza date/kind/venue la voce è la sola riga di titolo. */
  date?: Localized<string>;
  kind?: Localized<string>;
  venue?: Localized<string>;
  href?: string;
  /** Pagina interna (percorso italiano, senza prefisso lingua); ha la precedenza su `href`. */
  to?: string;
  /** Compare in "Ultimamente" nella home. */
  lately?: true;
};

export const updates: UpdateItem[] = [
  {
    title: {
      it: "Laurea magistrale in User Experience Design",
      en: "MA in User Experience Design",
    },
    date: { it: "Ott 2024 — Dic 2026 (prevista)", en: "Oct 2024 — Dec 2026 (expected)" },
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
      it: "Recce Maps · oltre 1.600 ordini in 7 rally, 3 su 4 da fuori Italia, e una collaborazione con il WRC Croatia Rally",
      en: "Recce Maps · more than 1,600 orders across 7 rallies, 3 in 4 from outside Italy, and a collaboration with WRC Croatia Rally",
    },
    date: { it: "2026", en: "2026" },
    kind: { it: "Prodotto", en: "Product" },
    venue: { it: "Recce Maps", en: "Recce Maps" },
    to: "/projects/recce-maps",
    lately: true,
  },
  {
    title: {
      it: "Nomination UX Design Awards: New Talent",
      en: "UX Design Awards Nomination: New Talent",
    },
    date: { it: "2026", en: "2026" },
    kind: { it: "Riconoscimento", en: "Recognition" },
    venue: { it: "UX Design Awards", en: "UX Design Awards" },
    href: "https://ux-design-awards.com/winners/2026-2-guido-from-bureaucracy-to-dialogue",
    lately: true,
  },
  {
    title: {
      it: "Milano Digital Week 2026 · Teseo esposto allo STEP FuturAbility District, 30 settembre - 4 ottobre 2026",
      en: "Milano Digital Week 2026 · Teseo exhibited at STEP FuturAbility District, 30 Sep - 4 Oct 2026",
    },
    to: "/projects/teseo",
    lately: true,
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
