import { createFileRoute } from "@tanstack/react-router";

import { BackHome, PageShell, SectionLabel, UpdateRow } from "@/components/PageShell";
import { updates } from "@/data/site";
import { langParam, seoLinks, ui, useT } from "@/i18n";

const meta = {
  it: {
    title: "Percorso — Luca Scalvinoni",
    description:
      "Il percorso di Luca Scalvinoni: consulenza UX all'Università Bocconi, studi in web design a Brescia, Erasmus in Media Art a Breslavia e riconoscimenti.",
    ogDescription: "Esperienze, studi e riconoscimenti di Luca Scalvinoni.",
  },
  en: {
    title: "Journey — Luca Scalvinoni",
    description:
      "Luca Scalvinoni's journey: UX consulting at Bocconi University, web design studies in Brescia, an Erasmus in Media Art in Wrocław, and recognitions.",
    ogDescription: "Experience, studies and recognitions of Luca Scalvinoni.",
  },
};

export const Route = createFileRoute("/{-$lang}/updates")({
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
      links: seoLinks(lang, "/updates"),
    };
  },
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
            <UpdateRow key={item.title.it} item={item} />
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
