import { createFileRoute } from "@tanstack/react-router";

import { PageShell, SectionLabel, UpdateRow } from "@/components/PageShell";
import { linkedin, mailto, updates } from "@/data/site";
import { LocLink, langParam, seoLinks, ui, useLang, useT } from "@/i18n";

const meta = {
  it: {
    description:
      "Luca Scalvinoni è un UX designer di Brescia. Fino ad agosto 2026 UX & Product Consultant per B4i, l'acceleratore di startup dell'Università Bocconi.",
    ogDescription:
      "UX designer di Brescia. UX & Product Consultant per B4i, l'acceleratore startup della Bocconi: tre startup su prodotto, UX/UI e branding.",
  },
  en: {
    description:
      "Luca Scalvinoni is a UX designer based in Brescia, Italy. Until August 2026 UX & Product Consultant for B4i, the startup accelerator of Bocconi University.",
    ogDescription:
      "UX designer based in Brescia, Italy. UX & Product Consultant for B4i, Bocconi's startup accelerator: three startups across product, UX/UI and branding.",
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
          <p className="text-muted-foreground">
            <span className="link-quiet text-foreground">Luca Scalvinoni</span> è un UX designer di
            Brescia, in Italia. Fino ad agosto 2026 è stato{" "}
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
          <p className="text-muted-foreground">
            <span className="link-quiet text-foreground">Luca Scalvinoni</span> is a UX designer
            based in Brescia, Italy. Until August 2026 he worked as a{" "}
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
        {/* ponytail: staccato dai contatti con un ml-4, senza un secondo <nav> */}
        <a
          href="https://www.geoguessr.com/user/59a8651656e5a24cf0c50fb8"
          target="_blank"
          rel="noreferrer"
          className="ml-4 link-nav"
        >
          GeoGuessr
        </a>
      </nav>

      <nav className="mt-5 flex gap-x-6 text-[0.95rem] text-muted-foreground">
        <LocLink to="/projects" className="link-nav">
          {t(ui.projects)}
        </LocLink>
        <LocLink to="/tools" className="link-nav">
          {t(ui.toolbox)}
        </LocLink>
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
