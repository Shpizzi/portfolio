import { createFileRoute, Link } from "@tanstack/react-router";

import { BackHome, PageShell, SectionLabel } from "@/components/PageShell";
import { tools } from "@/data/site";
import { ui, useT } from "@/i18n";

export const Route = createFileRoute("/tools/")({
  head: () => ({
    meta: [
      { title: "Strumenti — Luca Scalvinoni" },
      {
        name: "description",
        content:
          "Piccoli strumenti da tenere a portata: testa o croce, numero casuale, contatore caratteri, contrasto WCAG, lorem ipsum e swatches da incollare in Figma.",
      },
      { property: "og:title", content: "Strumenti — Luca Scalvinoni" },
      {
        property: "og:description",
        content: "Sei strumenti minimi per il lavoro di tutti i giorni.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ToolsIndex,
});

function ToolsIndex() {
  const t = useT();

  return (
    <PageShell>
      <BackHome />
      <h1 className="sr-only">{t(ui.toolbox)}</h1>
      <section className="mt-16">
        <SectionLabel>{t(ui.toolbox)}</SectionLabel>
        <ul className="space-y-3">
          {tools.map((tool) => (
            <li key={tool.slug}>
              <Link to="/tools/$slug" params={{ slug: tool.slug }} className="link-quiet">
                {t(tool.label)}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
