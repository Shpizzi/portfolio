import type { Localized } from "@/i18n";

export type ProjectItem = {
  slug: string;
  title: string;
  category: Localized<string>;
  year: string;
  href?: string;
  image?: string;
  hidden?: boolean;
  links?: { label: string; url: string }[];
  summary: Localized<string>;
  description: Localized<string[]>;
  tech: Localized<string[]>;
};

const media = "/media";

const uxui: Localized<string> = { it: "UX/UI", en: "UX/UI" };
const graphic: Localized<string> = { it: "Graphic Design", en: "Graphic Design" };
const service: Localized<string> = { it: "Service Design", en: "Service Design" };
const brand: Localized<string> = { it: "Brand Identity", en: "Brand Identity" };
const web: Localized<string> = { it: "Web & SEO", en: "Web & SEO" };

export const projects: ProjectItem[] = [
  {
    slug: "recce-maps",
    title: "Recce Maps",
    category: service,
    year: "2026",
    href: "https://reccemaps.com",
    links: [
      { label: "reccemaps.com", url: "https://reccemaps.com" },
      { label: "shop.reccemaps.com", url: "https://shop.reccemaps.com" },
      {
        label: "Behance",
        url: "https://www.behance.net/gallery/256215023/Recce-Maps-Platform-Branding-UXUI",
      },
      { label: "Instagram @recce.world", url: "https://www.instagram.com/recce.world" },
    ],
    summary: {
      it: "Una guida digitale per chi segue i rally dal bordo strada, co-fondata con tre amici e cresciuta in un anno fino a oltre 1.600 ordini e a una partnership ufficiale con il WRC Croatia Rally.",
      en: "A digital guide for rally spectators, co-founded with three friends and grown in one year to more than 1,600 orders and an official partnership with WRC Croatia Rally.",
    },
    description: {
      it: [
        "## Il problema",
        "Un rally si guarda dal bordo di strade che vengono chiuse molto prima del passaggio della prima vettura, quindi **la giornata di uno spettatore dipende da scelte fatte in anticipo**, ovvero dove parcheggiare fuori dalle chiusure, quale sentiero porta alla prova e quali curve sono spettacolari e allo stesso tempo dentro un'area pubblica. Queste informazioni sono sparse tra documenti ufficiali, portali dei percorsi e forum, e arrivano sul telefono come PDF da ingrandire all'infinito o come mappe piene di segnaposto che non dicono nulla su accessi e sicurezza, mentre **quasi 4 spettatori su 5 arrivano dall'estero** e la guida deve quindi essere pronta prima del viaggio e leggibile nella loro lingua.",
        "## La soluzione",
        "Recce nasce come progetto collaterale di un canale YouTube dedicato ai rally, dove le mappe fatte per divertimento e condivise gratis hanno suggerito l'idea di trasformarle in un prodotto. Ogni guida è un livello di Google My Maps che si apre nell'app che gli spettatori hanno già, così **non c'è nulla da installare** e la navigazione verso un parcheggio è a un tocco di distanza, e partire da My Maps ha permesso di **testare il servizio con acquirenti reali prima di scrivere una riga di software nostro**. Ogni prova è disegnata con le curve classificate dal pieno al tornante e centinaia di punti scelti a mano sono divisi in 6 tipi, ciascuno con icona e colore propri, dato che i limiti di una piattaforma che non controllavamo sono diventati le regole del linguaggio visivo del prodotto. Un kit costa circa 5 € e contiene la mappa, una guida in PDF e l'accesso a una community Telegram che resta aperta durante l'evento.",
        "## Cosa ho fatto",
        "Ho co-fondato il progetto con tre amici che realizzano le mappe e i video, mentre **io ho progettato e costruito tutto quello che sta intorno**, dal brand al sito in italiano e inglese, dallo store alle campagne Meta fino all'assistenza clienti. Ho portato lo store su Shopify con vetrine in due lingue e **prezzi locali in 30 mercati e 10 valute**, e ho **automatizzato la consegna delle mappe**, che prima richiedeva di condividere a mano ogni file con l'account Google dell'acquirente, così gli ordini arrivano sul telefono dello spettatore senza che nessuno debba intervenire. Le campagne Meta, con un budget di pochi euro al giorno e contenuti localizzati per fan di diversi paesi, hanno superato le **175.000 visualizzazioni**.",
        "Una volta che vendita e consegna giravano da sole, la parte lenta era la produzione delle mappe, che richiedeva al team **circa 15 giorni di lavoro** per rally tra tracciare le prove, posizionare i punti, scrivere le descrizioni e tradurle. Ho progettato e costruito **l'MVP di uno strumento interno** che importa il percorso ufficiale, offre un editor per i punti e genera bozze delle descrizioni e delle traduzioni a partire da un **archivio di oltre 3.000 descrizioni** scritte per le mappe precedenti, così che una mappa richieda **un paio di giorni invece di 15**.",
        "## Risultati",
        "In 7 rally del 2026 Recce ha raccolto **oltre 1.600 ordini**, con 3 checkout su 4 completati da fuori Italia, ed è cresciuta attraverso le collaborazioni con gli organizzatori fino alla **partnership ufficiale con il WRC Croatia Rally**, una tappa del mondiale FIA, che ha incluso la promozione sui canali ufficiali della gara e ha reso la Croazia la guida più venduta del catalogo.",
      ],
      en: [
        "## The problem",
        "A rally is watched from the side of roads that close well before the first car, so **a spectator's day depends on choices made in advance**, such as where to park outside the closures, which path leads to the stage and which corners are both spectacular and inside a public area. That information is scattered across official documents, route portals and forums, and it reaches the phone as a PDF to zoom endlessly or as a map full of pins that say nothing about access or safety, while **almost 4 spectators in 5 come from outside Italy**, so the guide has to be ready before the trip and readable in their own language.",
        "## The solution",
        "Recce started as a side project of a rally channel on YouTube, where maps made for fun and shared for free gave us the idea of turning them into a product. Each guide is a Google My Maps layer that opens in the app spectators already have, so **there is nothing to install** and navigation to a parking area is one tap away, and starting from My Maps meant the service could be **tested with real buyers before writing any software of our own**. Every stage is drawn with each corner classified from flat out to hairpin and hundreds of hand-picked points are sorted into 6 types, each with its own icon and colour, since the limits of a platform we did not control became the rules of the product's visual language. A kit costs around €5 and holds the map, a PDF guide and access to a Telegram community that stays open during the event.",
        "## What I did",
        "I co-founded the project with three friends who make the maps and the videos, while **I designed and built everything around them**, from the brand to the website in Italian and English, from the store to the Meta campaigns and customer care. I moved the store to Shopify with storefronts in two languages and **local prices in 30 markets and 10 currencies**, and I **automated the delivery of the maps**, which used to mean sharing every file by hand with the buyer's Google account, so orders reach the spectator's phone without anyone stepping in. The Meta ads, on a budget of a few euros a day with assets localised for fans from several countries, gathered more than **175,000 views**.",
        "Once selling and delivering ran on their own, the slow part was making the maps, which took the team **about 15 working days** per rally between tracing stages, placing points, writing descriptions and translating them. I designed and built **an MVP of an internal tool** that imports the official route, offers an editor for the points and drafts descriptions and translations from an **archive of 3,000+ descriptions** written for earlier maps, so that a map takes **a couple of days instead of 15**.",
        "## Results",
        "Across 7 rallies in 2026 Recce took **more than 1,600 orders**, with 3 checkouts in 4 completed from outside Italy, and grew through collaborations with organisers up to an **official partnership with WRC Croatia Rally**, a round of the FIA World Rally Championship, which included promotion on the rally's official channels and made Croatia the best-selling guide in the catalogue.",
      ],
    },
    tech: {
      it: [
        "Product e information design",
        "Art direction e brand",
        "WordPress",
        "Shopify",
        "n8n",
        "Google My Maps",
        "Meta Ads",
        "PWA",
        "PostgreSQL",
        "Integrazioni API e LLM",
      ],
      en: [
        "Product and information design",
        "Art direction and brand",
        "WordPress",
        "Shopify",
        "n8n",
        "Google My Maps",
        "Meta Ads",
        "PWA",
        "PostgreSQL",
        "API and LLM integrations",
      ],
    },
  },
  {
    slug: "cartografie-della-storia",
    title: "Cartografie della Storia — Archivio Corriere della Sera",
    category: uxui,
    year: "2026",
    links: [{ label: "Fondazione Corriere della Sera", url: "https://fondazionecorriere.corriere.it" }],
    summary: {
      it: "Il ripensamento del sistema digitale dell'archivio storico del Corriere della Sera: da magazzino per specialisti a mappa narrativa da attraversare, con un prototipo navigabile e un ecosistema di comunicazione. Progetto di gruppo per il corso Sistemi editoriali per l'arte, NABA.",
      en: "A rethink of the digital system behind Corriere della Sera's historical archive: from a warehouse for specialists to a narrative map to travel through, with a navigable prototype and a communication ecosystem. Group project for the Editorial Systems for the Arts course at NABA.",
    },
    description: {
      it: [
        "## Il problema",
        "Il Corriere della Sera racconta l'Italia dal 1876 e il suo archivio in via Solferino conserva **1,2 milioni di reperti digitalizzati, 54.000 prime pagine e oltre 12.000 collezioni**, ma è consultabile quasi solo su appuntamento e da ricercatori che sanno già cosa cercare. Il sistema digitale in costruzione è pensato per specialisti, quindi il pubblico curioso resta fuori, mentre le visite online agli archivi nazionali sono cresciute del 600% in cinque anni. La domanda di ricerca era **come rendere l'archivio accessibile a utenti con bisogni, ritmi e obiettivi diversi**, valorizzando quello che esiste già.",
        "## La ricerca",
        "Abbiamo lavorato su quattro livelli, ovvero desk research sulla Fondazione, competitor analysis su BBC Archive, Europeana e GNM Archive con comparable come Atlas Obscura e Google Arts & Culture, una **visita etnografica in via Solferino con interviste alle curatrici** e infine la sintesi in personas e journey map. Tre frasi delle archiviste sono diventate i principi del progetto, e in particolare che **il patrimonio non è il singolo documento ma le relazioni tra i documenti**, che l'archivio ha una grammatica propria e che il digitale deve raccontare, non solo mostrare oggetti belli.",
        "## La soluzione",
        "Un sistema editoriale digitale che trasforma l'archivio in una **mappa narrativa interattiva**, dove si esplorano le connessioni tra eventi, persone e temi seguendo percorsi costruiti sui propri interessi. Lo stesso sistema serve due utenti opposti: il curioso trova ingressi multipli, la prima pagina del giorno in cui è nato e percorsi curati, mentre il professionista ha ricerca full-text sugli OCR, filtri, citazioni in formato Chicago o APA e raccolte tematiche. L'architettura si regge su cinque aree, i wireframe sono stati **testati in due round con utenti reali e sulle linee guida WCAG**, e il design system parla la lingua del giornale con i caratteri Solferino e Brera. Il **prototipo web navigabile ottiene 100/100 nel test di accessibilità Lighthouse** e aggiunge un widget di personalizzazione, un lettore vocale e descrizioni automatiche delle immagini.",
        "Intorno al sistema abbiamo disegnato un ecosistema di sei canali che si rimandano l'uno all'altro: una newsletter che racconta l'archivio stesso, il podcast **A Mano** che parte ogni volta da un oggetto fisico, un canale YouTube, manifesti in città, l'evento annuale **La notte dell'Archivio** e un ponte fisico-digitale con QR e NFC sui reperti. Il piano di realizzazione prevede 15 persone e 24 settimane in sei fasi, dall'idea al go-live.",
        "## Il mio ruolo",
        "Progetto in quattro con Maria Chieregato, Yating Hu e Giampaolo Zirone. Ho seguito in particolare **l'architettura dell'informazione e il prototipo navigabile**, costruito in React e pubblicato online perché la giuria potesse provarlo da sola.",
      ],
      en: [
        "## The problem",
        "Corriere della Sera has been telling Italy's story since 1876 and its archive in via Solferino holds **1.2 million digitised items, 54,000 front pages and more than 12,000 collections**, yet it can be consulted almost only by appointment and by researchers who already know what they are looking for. The digital system under construction is designed for specialists, so the curious public stays out, while online visits to national archives grew by 600% in five years. The research question was **how to make the archive accessible to users with different needs, paces and goals**, building on what already exists.",
        "## The research",
        "We worked on four levels: desk research on the Foundation, a competitor analysis of BBC Archive, Europeana and GNM Archive with comparables such as Atlas Obscura and Google Arts & Culture, an **ethnographic visit to via Solferino with interviews to the curators**, and finally a synthesis into personas and journey maps. Three sentences from the archivists became the project's principles, above all that **the heritage is not the single document but the relationships between documents**, that the archive has a grammar of its own and that digital has to tell a story, not just show beautiful objects.",
        "## The solution",
        "A digital editorial system that turns the archive into an **interactive narrative map**, where people explore the connections between events, people and themes along paths built on their own interests. The same system serves two opposite users: the curious visitor finds multiple entry points, the front page of the day they were born and curated paths, while the professional gets full-text search on OCR, filters, citations in Chicago or APA format and thematic collections. The architecture rests on five areas, the wireframes were **tested in two rounds with real users and against WCAG guidelines**, and the design system speaks the newspaper's language with the Solferino and Brera typefaces. The **navigable web prototype scores 100/100 on the Lighthouse accessibility test** and adds a personalisation widget, a voice reader and automatic image descriptions.",
        "Around the system we designed an ecosystem of six channels that point to one another: a newsletter about the archive itself, the podcast **A Mano** that starts every episode from a physical object, a YouTube channel, posters in the city, the yearly event **La notte dell'Archivio** and a physical-digital bridge with QR and NFC tags on the items. The delivery plan calls for 15 people and 24 weeks in six phases, from idea to go-live.",
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
    slug: "guido",
    title: "Guido — From bureaucracy to dialogue",
    category: uxui,
    year: "2026",
    href: "https://ux-design-awards.com/winners/2026-2-guido-from-bureaucracy-to-dialogue",
    links: [
      {
        label: "UX Design Awards 2026",
        url: "https://ux-design-awards.com/winners/2026-2-guido-from-bureaucracy-to-dialogue",
      },
    ],
    summary: {
      it: "Un sistema unico e accessibile che accompagna i cittadini nelle pratiche della pubblica amministrazione, con traduzione in linguaggio semplice, procedure guidate e un totem phygital. Nominato agli UX Design Awards 2026, categoria New Talent.",
      en: "A single, accessible system that guides citizens through public administration procedures, with plain-language translation, guided steps and a phygital totem. Nominated at the UX Design Awards 2026, New Talent category.",
    },
    description: {
      it: [
        "## Il problema",
        "Ogni pratica con la pubblica amministrazione passa da sportelli, portali e moduli diversi, scritti in una lingua che la maggior parte delle persone non capisce. Il risultato è che **il cittadino non sa da dove cominciare, cosa gli serve e a chi chiedere**, e la burocrazia diventa una barriera prima ancora che un servizio.",
        "## La soluzione",
        "Guido è un **hub unico che collega i servizi pubblici** e li rende leggibili. Un assistente basato su AI **traduce i documenti amministrativi in linguaggio semplice**, le procedure vengono scomposte in passaggi guidati e gli appuntamenti si prenotano dallo stesso posto. Per chi non ha o non vuole uno smartphone, un **totem phygital installato nei luoghi civici** offre lo stesso accesso di persona. Il passaggio che dà il nome al progetto è questo: dalla burocrazia al dialogo.",
        "## Il mio ruolo",
        "Progetto sviluppato in NABA con Nicola Sorgesa e Giampaolo Zirone, con la guida di Gabriele Ruscelli. Ho lavorato sulla **ricerca, sui flussi e sul prototipo** del sistema.",
        "## Risultati",
        "Guido è stato **nominato agli UX Design Awards 2026 nella categoria New Talent**, nelle sezioni Platform & Community e Citizens & Society.",
      ],
      en: [
        "## The problem",
        "Every procedure with public administration goes through different counters, portals and forms, written in a language most people do not understand. The result is that **citizens do not know where to start, what they need or whom to ask**, and bureaucracy becomes a barrier before it is a service.",
        "## The solution",
        "Guido is a **single hub that connects public services** and makes them readable. An AI assistant **translates administrative documents into plain language**, procedures are broken down into guided steps and appointments are booked from the same place. For people who do not have or do not want a smartphone, a **phygital totem installed in civic locations** offers the same access in person. That shift is what gives the project its name: from bureaucracy to dialogue.",
        "## My role",
        "Developed at NABA with Nicola Sorgesa and Giampaolo Zirone, mentored by Gabriele Ruscelli. I worked on the **research, the flows and the prototype** of the system.",
        "## Results",
        "Guido was **nominated at the UX Design Awards 2026 in the New Talent category**, in the Platform & Community and Citizens & Society sections.",
      ],
    },
    tech: {
      it: ["UX research", "Service design", "User flow", "Figma", "Prototipazione", "Integrazione AI"],
      en: ["UX research", "Service design", "User flows", "Figma", "Prototyping", "AI integration"],
    },
  },
  {
    slug: "antevo",
    title: "Antevo — naming e brand identity",
    category: brand,
    year: "2026",
    href: "https://antevo.ai",
    links: [{ label: "antevo.ai", url: "https://antevo.ai" }],
    summary: {
      it: "Il rebrand di Evoclin, spin-off di Bicocca e San Raffaele che sviluppa software clinico AI per l'oncologia di precisione: dal problema del nome al naming, all'identità e al pitch deck, come consulente UX e product per B4i, l'acceleratore dell'Università Bocconi.",
      en: "The rebrand of Evoclin, a Bicocca and San Raffaele spin-off building AI clinical software for precision oncology: from the naming problem to the new name, the identity and the pitch deck, as UX and product consultant for B4i, Bocconi University's accelerator.",
    },
    description: {
      it: [
        "## Il problema",
        "Evoclin sviluppa software che parte dai dati genomici già raccolti negli ospedali per **prevedere come evolverà un tumore**, con framework validati su oltre 35.000 casi e due premi nazionali alle spalle. Il nome però aveva due problemi concreti: **suonava come \"EvoClean\"**, cioè un detergente, ed **esisteva già un prodotto cosmetico con lo stesso nome**. Per una startup che si presenta a ospedali e investitori la credibilità viene prima di tutto, e il rebrand era la priorità del batch.",
        "## Cosa ho fatto",
        "Ho seguito Evoclin come consulente nel Batch XIII di B4i. Sono partito dal brand sprint dei founder e dal brief dell'agenzia senior e li ho **sintetizzati in un brand brief unico** con valori, personalità e vincoli, in particolare che il nuovo nome non dovesse suonare cosmetico né farmaceutico. Ho sviluppato **sette proposte di naming, ognuna con un concetto tracciabile**, una verifica dei domini e dei conflitti con altri marchi, e le ho discusse con il team in più giri. In parallelo ho **riorganizzato il pitch deck** su gerarchia e leggibilità, e ho preparato quattro direzioni di brand identity da cui derivare logo, palette, tipografia e tono di voce.",
        "## Risultati",
        "Il team ha scelto **Antevo**, da \"ante\" ed \"evo\": anticipare l'evoluzione del tumore, mantenendo la radice che collega il nuovo nome ai paper e ai premi già firmati come Evoclin. La società oggi si chiama Antevo S.r.l. e vive su antevo.ai, mentre il nuovo deck è stato definito dal team \"molto meglio\" e \"molto pulito\" ed è diventato la base della presentazione agli investitori.",
      ],
      en: [
        "## The problem",
        "Evoclin builds software that starts from genomic data hospitals already collect to **predict how a tumour will evolve**, with frameworks validated on more than 35,000 cases and two national awards behind it. The name, though, had two concrete problems: **it sounded like \"EvoClean\"**, a detergent, and **a cosmetic product with the same name already existed**. For a startup pitching to hospitals and investors credibility comes first, and the rebrand was the batch's top priority.",
        "## What I did",
        "I worked with Evoclin as a consultant in B4i's Batch XIII. I started from the founders' brand sprint and the senior agency's brief and **merged them into a single brand brief** with values, personality and constraints, above all that the new name must not sound cosmetic or pharmaceutical. I developed **seven naming proposals, each with a traceable concept**, a check of domains and conflicts with other brands, and discussed them with the team over several rounds. In parallel I **reworked the pitch deck** for hierarchy and readability, and prepared four brand identity directions from which to derive logo, palette, typography and tone of voice.",
        "## Results",
        "The team chose **Antevo**, from \"ante\" and \"evo\": anticipating the tumour's evolution, while keeping the root that ties the new name to the papers and awards already signed as Evoclin. The company is now Antevo S.r.l. and lives at antevo.ai, while the new deck was called \"much better\" and \"very clean\" by the team and became the base of the investor presentation.",
      ],
    },
    tech: {
      it: ["Naming", "Brand strategy", "Brand identity", "Pitch deck", "Figma", "Workshop e brand sprint"],
      en: ["Naming", "Brand strategy", "Brand identity", "Pitch deck", "Figma", "Workshops and brand sprint"],
    },
  },
  {
    slug: "evasurgica",
    title: "Evasurgica — expert review UX/UI e pitch",
    category: uxui,
    year: "2026",
    summary: {
      it: "Expert review dell'interfaccia di un sistema AR per la chirurgia mini-invasiva e robotica, più due pitch deck distinti per investitori e cliniche, alla vigilia dei trial clinici. Consulenza per B4i, l'acceleratore dell'Università Bocconi.",
      en: "An expert review of the interface of an AR system for minimally invasive and robotic surgery, plus two separate pitch decks for investors and clinics, on the eve of clinical trials. Consulting for B4i, Bocconi University's accelerator.",
    },
    description: {
      it: [
        "## Il problema",
        "Evasurgica vende software e carrello per la chirurgia mini-invasiva e robotica: il sistema **sovrappone un modello 3D del paziente all'immagine endoscopica in realtà aumentata**, così che il chirurgo identifichi le strutture anatomiche più in fretta e con meno complicanze. Il prodotto era tecnicamente solido e già testato, ma **la comunicazione visiva e il pitch non erano all'altezza della tecnologia**, proprio mentre stavano per partire i trial clinici e bisognava convincere ospedali pubblici e cliniche private.",
        "## Cosa ho fatto",
        "Ho raccolto i materiali esistenti e organizzato un **walkthrough del software con il team**, per capire come si usa davvero in sala: l'hardware non è touch, si lavora con una tastiera medical grade e uno space mouse dal lettino operatorio, in ambiente sterile, e questo cambia tutte le regole di usabilità. Da lì ho condotto una **expert review UX/UI dell'applicativo**, con un benchmark dei software affini e una serie di schermate prima e dopo che motivano ogni intervento sui fondamenti dell'usabilità, non sull'estetica. Sul pitch ho separato quello che era un ibrido tra deck da leggere e presentazione da parlare in **due versioni distinte, una per gli investitori e una per cliniche e ospedali**, intervenendo su gerarchia tipografica, leggibilità e struttura senza stravolgere l'identità.",
      ],
      en: [
        "## The problem",
        "Evasurgica sells software and a cart for minimally invasive and robotic surgery: the system **overlays a 3D model of the patient onto the endoscopic image in augmented reality**, so the surgeon identifies anatomical structures faster and with fewer complications. The product was technically solid and already tested, but **its visual communication and pitch were not up to the technology**, just as clinical trials were about to start and public hospitals and private clinics had to be convinced.",
        "## What I did",
        "I gathered the existing materials and set up a **walkthrough of the software with the team**, to understand how it is really used in the operating room: the hardware is not touch, you work with a medical-grade keyboard and a space mouse from the operating table, in a sterile environment, and that changes every usability rule. From there I ran an **expert UX/UI review of the application**, with a benchmark of similar software and a series of before-and-after screens that justify each change on usability fundamentals, not on aesthetics. On the pitch I split what was a hybrid between a deck to read and a presentation to speak into **two separate versions, one for investors and one for clinics and hospitals**, working on typographic hierarchy, readability and structure without changing the identity.",
      ],
    },
    tech: {
      it: ["Expert review", "Euristiche di usabilità", "Benchmark", "Figma", "Pitch deck", "Design per ambienti sterili"],
      en: ["Expert review", "Usability heuristics", "Benchmark", "Figma", "Pitch deck", "Design for sterile environments"],
    },
  },
  {
    slug: "pclab",
    title: "PCLab — redesign SEO del sito",
    category: web,
    year: "2026",
    href: "https://pclab.bs.it",
    links: [{ label: "pclab.bs.it", url: "https://pclab.bs.it" }],
    summary: {
      it: "Il nuovo sito di PCLab, azienda di assistenza IT in provincia di Brescia: da poche pagine generiche a una struttura di circa trenta pagine costruite sulle ricerche reali dei clienti, con tema WordPress su misura, migrazione senza perdere posizionamento e PageSpeed mobile da 78 a 93.",
      en: "The new website of PCLab, an IT services company in the Brescia area: from a few generic pages to a structure of about thirty pages built on what customers actually search for, with a custom WordPress theme, a migration that kept rankings intact and mobile PageSpeed from 78 to 93.",
    },
    description: {
      it: [
        "## Il problema",
        "PCLab fa assistenza informatica, cybersecurity, cloud e reti per le aziende della provincia di Brescia, ma il sito raccontava i servizi con **poche pagine macro** che non corrispondevano a come le aziende cercano davvero, cioè con query precise e locali come \"assistenza server Brescia\" o \"backup cloud\". Chi arrivava da Google trovava una pagina generica, e chi cercava un servizio specifico spesso non arrivava proprio.",
        "## La soluzione",
        "Sono partito da una ricerca sulle parole chiave del settore per disegnare una **struttura di circa trenta pagine orientate alle ricerche reali**, con due livelli di servizi, pagine per settore, pagine per i brand partner e una sezione di domande frequenti che risponde alle domande informative senza cannibalizzare quelle transazionali. Il sito gira su un **tema WordPress scritto su misura**, con tipi di contenuto dedicati, breadcrumb, dati strutturati e sitemap che si aggiornano da soli quando si aggiunge una pagina.",
        "## Cosa ho fatto",
        "Ho progettato e costruito tutto, dal tema alla migrazione. Il passaggio alla nuova struttura ha comportato **65 rinomine di URL e 99 redirect**, verificati uno per uno perché non si perdesse il posizionamento esistente, con i link interni riscritti via script. Dopo il go-live ho lavorato sulle prestazioni, con font ottimizzati, CSS minificati e cache lato server, portando il **punteggio PageSpeed mobile da 78 a 93**, e ho impostato il monitoraggio SEO con Search Console e gli eventi di conversione in GA4.",
        "## Risultati",
        "Il sito è online da luglio 2026 con la struttura completa, tutti i vecchi indirizzi rispondono con un redirect diretto e le pagine servizio si posizionano sulle query locali per cui sono state progettate.",
      ],
      en: [
        "## The problem",
        "PCLab provides IT support, cybersecurity, cloud and networking to companies in the Brescia area, but the website described its services with **a handful of broad pages** that did not match how businesses actually search, that is with precise, local queries such as \"server support Brescia\" or \"cloud backup\". People coming from Google landed on a generic page, and those looking for a specific service often did not land at all.",
        "## The solution",
        "I started from keyword research for the sector to design a **structure of about thirty pages oriented to real searches**, with two levels of services, pages per industry, pages for partner brands and a FAQ section that answers informational questions without cannibalising the transactional ones. The site runs on a **custom-written WordPress theme**, with dedicated content types, breadcrumbs, structured data and sitemaps that update themselves when a page is added.",
        "## What I did",
        "I designed and built everything, from the theme to the migration. Moving to the new structure meant **65 URL renames and 99 redirects**, checked one by one so that existing rankings were not lost, with internal links rewritten by script. After go-live I worked on performance, with optimised fonts, minified CSS and server-side caching, taking the **mobile PageSpeed score from 78 to 93**, and set up SEO monitoring with Search Console and conversion events in GA4.",
        "## Results",
        "The site has been live since July 2026 with the full structure, every old address answers with a direct redirect and the service pages rank for the local queries they were designed for.",
      ],
    },
    tech: {
      it: ["SEO e keyword research", "Information architecture", "WordPress", "PHP", "Rank Math", "Search Console", "GA4", "Plesk"],
      en: ["SEO and keyword research", "Information architecture", "WordPress", "PHP", "Rank Math", "Search Console", "GA4", "Plesk"],
    },
  },
  {
    slug: "muba-arborea",
    title: "MUBA — Museo della Bonifica di Arborea",
    category: graphic,
    year: "2025",
    links: [{ label: "museoarborea.it", url: "https://www.museoarborea.it/" }],
    summary: {
      it: "Art direction e comunicazione digitale per il museo comunale di Arborea, in Sardegna: identità visiva, sito, app, podcast e strategia social per raccontare la storia di una città nata da una bonifica e da una migrazione interna. Progetto di corso in NABA con Giampaolo Zirone.",
      en: "Art direction and digital communication for the municipal museum of Arborea, Sardinia: visual identity, website, app, podcast and social strategy to tell the story of a town born from land reclamation and internal migration. Course project at NABA with Giampaolo Zirone.",
    },
    description: {
      it: [
        "## Il contesto",
        "Il MUBA è allestito nei locali dell'ex Mulino di Arborea, un esempio di archeologia industriale che conserva ancora le attrezzature per la macinazione del grano. Raccoglie i documenti della bonifica della piana del Sassu e della città, **fondata nel 1928 e popolata da famiglie arrivate dal Veneto, dal Friuli, dalla Romagna e dalla Sicilia** per un esperimento di migrazione interna unico per l'epoca. È una storia di visione e di fatica che gli abitanti sentono ancora propria, ma **la comunicazione del museo non la racconta**, e fuori dalla Sardegna quasi nessuno la conosce.",
        "## La soluzione",
        "Il brief del corso chiedeva l'art direction e la comunicazione digitale di un brand culturale, con l'obiettivo di coinvolgere emotivamente e non solo di informare. Abbiamo costruito **un'identità visiva digitale con logo adattivo, palette, tipografia per web e mobile e tono di voce**, documentata in linee guida brevi, e da lì il sito, l'app mobile e la strategia social. L'estensione immersiva è un **podcast che dà voce ai veri testimoni della trasformazione del territorio**, registrato nei luoghi reali e senza set, affiancato da una newsletter e da un'esplorazione in realtà aumentata degli spazi del Mulino.",
        "## Il mio ruolo",
        "Progetto in due con Giampaolo Zirone, con la ricerca condivisa e il lavoro diviso tra identità, digitale e contenuti.",
      ],
      en: [
        "## The context",
        "MUBA is housed in the former Mill of Arborea, an example of industrial archaeology that still keeps the machinery once used to grind wheat. It collects the documents of the reclamation of the Sassu plain and of the town, **founded in 1928 and settled by families from Veneto, Friuli, Romagna and Sicily** in an internal migration experiment unique for its time. It is a story of vision and hard work that residents still feel as their own, but **the museum's communication does not tell it**, and outside Sardinia almost nobody knows it.",
        "## The solution",
        "The course brief asked for the art direction and digital communication of a cultural brand, with the goal of engaging emotionally rather than just informing. We built **a digital visual identity with an adaptive logo, palette, web and mobile typography and tone of voice**, documented in short guidelines, and from there the website, the mobile app and the social strategy. The immersive extension is a **podcast that gives voice to the real witnesses of the territory's transformation**, recorded in real places with no set, alongside a newsletter and an augmented-reality exploration of the Mill's spaces.",
        "## My role",
        "A two-person project with Giampaolo Zirone, with shared research and the work split between identity, digital and content.",
      ],
    },
    tech: {
      it: ["Art direction", "Brand identity", "Design system", "Figma", "UI web e mobile", "Podcast e contenuti", "Strategia social"],
      en: ["Art direction", "Brand identity", "Design system", "Figma", "Web and mobile UI", "Podcast and content", "Social strategy"],
    },
  },
  {
    slug: "teseo",
    title: "Teseo — riparare invece di sostituire",
    category: service,
    year: "2026",
    summary: {
      it: "Un servizio che rimette in vita gli oggetti a cui manca un pezzo, collegando i ricambi come file digitali a una rete di FabLab e stampanti 3D di quartiere, raccontato in cielo da uno spettacolo di 200 droni. Progetto di gruppo in NABA.",
      en: "A service that brings back to life objects missing a single part, connecting spare parts as digital files to a network of neighbourhood FabLabs and 3D printers, told in the sky by a 200-drone show. Group project at NABA.",
    },
    description: {
      it: [
        "## Il problema",
        "Gli oggetti hanno punti deboli progettati per cedere, e quando cedono **basta un ingranaggio, una clip o una manopola per buttare via tutto**, perché dopo qualche anno il ricambio non si trova più. Esiste già una rete distribuita di FabLab, makerspace e riparatori capace di stampare quel pezzo localmente, ma nessuno la vede. Il sondaggio e le interviste che abbiamo condotto sulle abitudini di riparazione lo confermano: le persone preferirebbero riparare, e **quello che le ferma è non sapere dove trovare il pezzo e a chi rivolgersi**.",
        "## La soluzione",
        "Teseo prende il nome dal paradosso della nave: l'identità di un oggetto sta nelle relazioni tra le parti, non nelle parti, e **un oggetto riparato resta lo stesso oggetto anche se porta i segni di chi l'ha rimesso insieme**. Il servizio collega chi ha un oggetto fermo, i file digitali dei ricambi e la stampante 3D più vicina, che sia un FabLab o un privato disposto a stampare per il quartiere, così che la riparazione diventi più semplice e più vicina dell'acquisto.",
        "Per raccontarlo abbiamo progettato **Enactive Sky — Memoria Materiale**, uno spettacolo di 60 secondi con 200 droni che rappresentano un oggetto archetipo lungo il suo ciclo di vita: coesione, stress, frattura, attesa, il segnale che arriva dalla rete, la ricomposizione strato per strato come in una stampa 3D, e infine la cicatrice, che resta più luminosa del resto come nel kintsugi giapponese. Ogni fase è descritta con i parametri dello sciame, dalle forze ai colori, così che la lettura sia immediata senza didascalie.",
        "## Il mio ruolo",
        "Progetto di gruppo con Yating Hu e i compagni di corso. Ho lavorato sulla ricerca con gli utenti, sul concept del servizio e sulla **progettazione dello spettacolo, dal system feedback allo storyboard di interazione**.",
      ],
      en: [
        "## The problem",
        "Objects have weak points designed to fail, and when they do **a single gear, clip or knob is enough to throw the whole thing away**, because after a few years the spare part can no longer be found. A distributed network of FabLabs, makerspaces and repairers able to print that part locally already exists, but nobody sees it. The survey and interviews we ran on repair habits confirm it: people would rather repair, and **what stops them is not knowing where to find the part and whom to ask**.",
        "## The solution",
        "Teseo takes its name from the ship paradox: an object's identity lies in the relationships between its parts, not in the parts, and **a repaired object is still the same object even if it carries the marks of whoever put it back together**. The service connects the person with a broken object, the digital files of the spare parts and the nearest 3D printer, whether a FabLab or a private owner willing to print for the neighbourhood, so that repairing becomes simpler and closer than buying.",
        "To tell the story we designed **Enactive Sky — Memoria Materiale**, a 60-second show with 200 drones representing an archetypal object through its life cycle: cohesion, stress, fracture, waiting, the signal coming from the network, the layer-by-layer rebuild as in a 3D print, and finally the scar, which stays brighter than the rest as in Japanese kintsugi. Every phase is described with the swarm's parameters, from forces to colours, so that the reading is immediate with no captions.",
        "## My role",
        "A group project with Yating Hu and coursemates. I worked on user research, on the service concept and on the **design of the show, from the system feedback to the interaction storyboard**.",
      ],
    },
    tech: {
      it: ["Service design", "UX research e sondaggi", "Concept design", "Storyboard", "Blender e geometry nodes", "Figma"],
      en: ["Service design", "UX research and surveys", "Concept design", "Storyboard", "Blender and geometry nodes", "Figma"],
    },
  },
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
// togliergli quella riga.
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
