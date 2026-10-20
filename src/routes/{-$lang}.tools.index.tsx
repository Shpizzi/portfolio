import { createFileRoute, notFound } from "@tanstack/react-router";

import { BackHome, PageShell, SectionLabel } from "@/components/PageShell";
import { showTools, tools } from "@/data/site";
import { LocLink, langParam, seoLinks, ui, useT } from "@/i18n";

const meta = {
  it: {
    title: "Strumenti — Luca Scalvinoni",
    description:
      "Piccoli strumenti da tenere a portata: testa o croce, numero casuale, contatore caratteri, contrasto WCAG, lorem ipsum e swatches da incollare in Figma.",
    ogDescription: "Sei strumenti minimi per il lavoro di tutti i giorni.",
  },
  en: {
    title: "Tools — Luca Scalvinoni",
    description:
      "Small tools to keep at hand: coin flip, random number, character count, WCAG contrast and lorem ipsum.",
    ogDescription: "Minimal tools for everyday work.",
  },
};

export const Route = createFileRoute("/{-$lang}/tools/")({
  beforeLoad: () => {
    if (!showTools) throw notFound();
  },
  head: ({ params }) => {
    const lang = langParam(params.lang);
    return {
      meta: [
        { title: meta[lang].title },
        { name: "description", content: meta[lang].description },
        { property: "og:title", content: meta[lang].title },
        { property: "og:description", content: meta[lang].ogDescription },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: seoLinks(lang, "/tools"),
    };
  },
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
              <LocLink to={`/tools/${tool.slug}`} className="link-quiet">
                {t(tool.label)}
              </LocLink>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
