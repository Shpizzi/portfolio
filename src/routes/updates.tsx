import { createFileRoute } from "@tanstack/react-router";

import { BackHome, ExternalArrow, PageShell, SectionLabel } from "@/components/PageShell";
import { updates } from "@/data/site";
import { ui, useT } from "@/i18n";

export const Route = createFileRoute("/updates")({
  head: () => ({
    meta: [
      { title: "Percorso — Luca Scalvinoni" },
      {
        name: "description",
        content:
          "Il percorso di Luca Scalvinoni: consulenza UX all'Università Bocconi, studi in web design a Brescia, Erasmus in Media Art a Breslavia e riconoscimenti.",
      },
      { property: "og:title", content: "Percorso — Luca Scalvinoni" },
      {
        property: "og:description",
        content: "Esperienze, studi e riconoscimenti di Luca Scalvinoni.",
      },

      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Updates,
});

function Updates() {
  const t = useT();

  return (
    <PageShell>
      <BackHome />
      <h1 className="sr-only">{t(ui.path)}</h1>
      <section className="mt-16">
        <SectionLabel>{t(ui.path)}</SectionLabel>
        <ul className="space-y-5">
          {updates.map((item) => (
            <li key={item.title.it}>
              {item.href ? (
                <a href={item.href} target="_blank" rel="noreferrer" className="group link-quiet">
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
      </section>
    </PageShell>
  );
}
