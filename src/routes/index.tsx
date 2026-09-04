import { createFileRoute, Link } from "@tanstack/react-router";

import { ExternalArrow, PageShell, SectionLabel } from "@/components/PageShell";
import { updates } from "@/data/site";
import { ui, useLang, useT } from "@/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luca Scalvinoni — UX Designer" },
      {
        name: "description",
        content:
          "Luca Scalvinoni è un UX designer di Brescia, UX Consultant all'Università Bocconi di Milano fino ad agosto 2026.",
      },
      { property: "og:title", content: "Luca Scalvinoni — UX Designer" },
      {
        property: "og:description",
        content:
          "UX designer di Brescia, UX Consultant all'Università Bocconi fino ad agosto 2026. Progetti di UX/UI e graphic design.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/luca-scalvinoni/" },
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
            <span className="link-quiet text-foreground">Luca Scalvinoni</span> è un UX
            designer di Brescia, in Italia. Fino ad agosto 2026 è stato{" "}
            <span className="text-foreground">UX Consultant</span> all'
            <a
              href="https://www.unibocconi.it/"
              className="link-quiet text-foreground"
              target="_blank"
              rel="noreferrer"
            >
              Università Bocconi
            </a>{" "}
            di Milano, dove si è occupato di prodotti digitali.
          </p>

          <p className="mt-6 text-muted-foreground">
            Ha studiato web design e comunicazione d'impresa all'
            <a
              href="https://www.accademiasantagiulia.it/"
              className="link-quiet text-foreground"
              target="_blank"
              rel="noreferrer"
            >
              Accademia Santa Giulia
            </a>{" "}
            di Brescia, con un Erasmus in Media Art a Breslavia. La sua passione per il
            digitale nasce dalla fotografia e dalla grafica, e oggi si muove tra
            interfacce, design di prodotto e visual design.
          </p>
        </>
      ) : (
        <>
          <p className="text-muted-foreground">
            <span className="link-quiet text-foreground">Luca Scalvinoni</span> is a UX
            designer based in Brescia, Italy. Until August 2026 he worked as a{" "}
            <span className="text-foreground">UX Consultant</span> at{" "}
            <a
              href="https://www.unibocconi.it/"
              className="link-quiet text-foreground"
              target="_blank"
              rel="noreferrer"
            >
              Bocconi University
            </a>{" "}
            in Milan, focusing on digital products.
          </p>

          <p className="mt-6 text-muted-foreground">
            He studied web design and business communication at{" "}
            <a
              href="https://www.accademiasantagiulia.it/"
              className="link-quiet text-foreground"
              target="_blank"
              rel="noreferrer"
            >
              Accademia Santa Giulia
            </a>{" "}
            in Brescia, with an Erasmus in Media Art in Wrocław. His interest in digital
            work grew out of photography and graphic design, and today he moves between
            interfaces, product design and visual design.
          </p>
        </>
      )}

      <nav className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem] text-muted-foreground">
        {social.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            {item.label}
          </a>
        ))}
        {/* ponytail: staccato dai contatti con un ml-4, senza un secondo <nav> */}
        <a
          href="https://www.geoguessr.com/user/59a8651656e5a24cf0c50fb8"
          target="_blank"
          rel="noreferrer"
          className="ml-4 transition-colors hover:text-foreground"
        >
          GeoGuessr
        </a>
      </nav>

      <nav className="mt-5 flex gap-x-6 text-[0.95rem] text-muted-foreground">
        <Link to="/projects" className="transition-colors hover:text-foreground">
          {t(ui.projects)}
        </Link>
        <Link to="/updates" className="transition-colors hover:text-foreground">
          {t(ui.path)}
        </Link>
      </nav>

      <section className="mt-20">
        <SectionLabel>{t(ui.recentPath)}</SectionLabel>
        <ul className="space-y-5">
          {updates.map((item) => (
            <li key={item.title.it}>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-quiet"
                >
                  {t(item.title)}
                  <ExternalArrow />
                </a>
              ) : (
                <span>{t(item.title)}</span>
              )}
              <div className="text-[0.95rem] text-muted-foreground">
                {t(item.date)} · {t(item.kind)} · {t(item.venue)}
              </div>
            </li>
          ))}
        </ul>
        <Link
          to="/projects"
          className="mt-8 inline-block text-[0.95rem] text-muted-foreground transition-colors hover:text-foreground"
        >
          {t(ui.seeProjects)}
        </Link>
      </section>
    </PageShell>
  );
}
