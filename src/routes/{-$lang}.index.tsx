import { createFileRoute } from "@tanstack/react-router";

import { PageShell, SectionLabel, UpdateRow } from "@/components/PageShell";
import { linkedin, mailto, showTools, updates } from "@/data/site";
import { LocLink, langParam, seoLinks, ui, useLang, useT } from "@/i18n";

const meta = {
  it: {
    description:
      "Luca Scalvinoni è un UX e product designer e design engineer di Brescia. Da aprile ad agosto 2026 UX & Product Consultant per B4i, l'acceleratore di startup dell'Università Bocconi.",
    ogDescription:
      "Luca Scalvinoni è un UX e product designer e design engineer di Brescia. Da aprile ad agosto 2026 UX & Product Consultant per B4i, l'acceleratore di startup dell'Università Bocconi.",
  },
  en: {
    description:
      "Luca Scalvinoni is a UX and product designer and design engineer based in Brescia, Italy. From April to August 2026 UX & Product Consultant for B4i, the startup accelerator of Bocconi University.",
    ogDescription:
      "Luca Scalvinoni is a UX and product designer and design engineer based in Brescia, Italy. From April to August 2026 UX & Product Consultant for B4i, the startup accelerator of Bocconi University.",
  },
};

export const Route = createFileRoute("/{-$lang}/")({
  head: ({ params }) => {
    const lang = langParam(params.lang);
    return {
      meta: [
        { title: "Luca Scalvinoni — UX Designer" },
        { name: "description", content: meta[lang].description },
        { property: "og:title", content: "Luca Scalvinoni — UX Designer" },
        { property: "og:description", content: meta[lang].ogDescription },
        { property: "og:type", content: "profile" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: seoLinks(lang, "/"),
    };
  },
  component: Index,
});

const social = [
  { label: "Mail", href: mailto },
  { label: "LinkedIn", href: linkedin },
  { label: "Dribbble", href: "https://dribbble.com/Scalvinoni" },
];

function Index() {
  const { lang } = useLang();
  const t = useT();

  return (
    <PageShell>
      <h1 className="sr-only">Luca Scalvinoni</h1>

      {lang === "it" ? (
        <>
          <p className="text-foreground">Un designer che costruisce quello che progetta.</p>

          <p className="mt-6 text-muted-foreground">
            <span className="link-quiet text-foreground">Luca Scalvinoni</span> è un UX e product
            designer e design engineer di Brescia, che porta i progetti dalla ricerca e dal design
            dell'interfaccia fino a prototipi scritti in codice. Sta completando la laurea
            magistrale in User Experience Design in NABA, dove ha concluso tutti gli esami a luglio
            2026 e si laureerà a dicembre 2026, e nel frattempo ha co-fondato Recce Maps, una guida
            digitale per chi segue i rally. Da aprile ad agosto 2026 è stato{" "}
            <span className="text-foreground">UX &amp; Product Consultant</span> per{" "}
            <span className="text-foreground">B4i</span>, il programma di accelerazione per startup
            dell'
            <a
              href="https://www.unibocconi.it/"
              className="link-quiet text-foreground"
              target="_blank"
              rel="noreferrer"
            >
              Università Bocconi
            </a>{" "}
            di Milano, dove ha seguito tre startup su UX e comunicazione, occupandosi di prodotto,
            UX/UI e branding.
          </p>

          <p className="mt-6 text-muted-foreground">
            Ha studiato <span className="text-foreground">web design</span> e{" "}
            <span className="text-foreground">comunicazione d'impresa</span> all'Accademia Santa
            Giulia di Brescia, con un Erasmus in <span className="text-foreground">Media Art</span>{" "}
            a Breslavia. La sua passione per il digitale nasce dalla fotografia e dalla grafica, e
            oggi si muove tra interfacce, design di prodotto e visual design.
          </p>
        </>
      ) : (
        <>
          <p className="text-foreground">A designer who builds what he designs.</p>

          <p className="mt-6 text-muted-foreground">
            <span className="link-quiet text-foreground">Luca Scalvinoni</span> is a UX and product
            designer and design engineer based in Brescia, Italy, who takes his projects from
            research and interface design through to prototypes written in code. He is completing an
            MA in User Experience Design at NABA, where he finished all his exams in July 2026 and
            will graduate in December 2026, and alongside his studies he co-founded Recce Maps, a
            digital guide for rally spectators. From April to August 2026 he worked as{" "}
            <span className="text-foreground">UX &amp; Product Consultant</span> for{" "}
            <span className="text-foreground">B4i</span>, the startup accelerator of{" "}
            <a
              href="https://www.unibocconi.it/"
              className="link-quiet text-foreground"
              target="_blank"
              rel="noreferrer"
            >
              Bocconi University
            </a>{" "}
            in Milan, where he supported three startups across UX and communication, covering
            product, UX/UI and branding.
          </p>

          <p className="mt-6 text-muted-foreground">
            He studied <span className="text-foreground">web design</span> and{" "}
            <span className="text-foreground">business communication</span> at Accademia Santa
            Giulia in Brescia, with an Erasmus in <span className="text-foreground">Media Art</span>{" "}
            in Wrocław. His interest in digital work grew out of photography and graphic design, and
            today he moves between interfaces, product design and visual design.
          </p>
        </>
      )}

      <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem] text-muted-foreground">
        {social.map((item) => (
          <a
            key={item.label}
            href={item.href}
            // ponytail: il mailto non apre una scheda nuova, resterebbe vuota
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noreferrer" : undefined}
            className="link-nav"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <nav className="mt-5 flex gap-x-6 text-[0.95rem] text-muted-foreground">
        <LocLink to="/projects" className="link-nav">
          {t(ui.projects)}
        </LocLink>
        {showTools ? (
          <LocLink to="/tools" className="link-nav">
            {t(ui.toolbox)}
          </LocLink>
        ) : null}
        <LocLink to="/updates" className="link-nav">
          {t(ui.path)}
        </LocLink>
      </nav>

      <section className="mt-20 [@media(max-height:949px)]:mt-12">
        <SectionLabel>{t(ui.lately)}</SectionLabel>
        <ul className="space-y-5">
          {updates
            .filter((item) => item.lately)
            .map((item) => (
              <UpdateRow key={item.title.it} item={item} />
            ))}
        </ul>
        <LocLink
          to="/projects"
          className="link-nav mt-8 inline-block text-[0.95rem] text-muted-foreground"
        >
          {t(ui.seeProjects)}
        </LocLink>
      </section>
    </PageShell>
  );
}
