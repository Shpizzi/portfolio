import { createFileRoute, notFound } from "@tanstack/react-router";
import type { ComponentType } from "react";

import { BackLink, PageShell } from "@/components/PageShell";
import { CharacterCount, CoinFlip, Contrast, Lorem, RandomNumber } from "@/components/tools";
// `summary` non compare più in pagina: sopravvive solo come meta description.
import { tools, type ToolItem } from "@/data/site";
import { ui, useT } from "@/i18n";

// L'unico punto in cui uno slug incontra il suo componente. Aggiungendo uno
// strumento vanno toccati due posti: l'elenco in src/data/site.ts e questa mappa.
const components: Record<string, ComponentType> = {
  "coin-flip": CoinFlip,
  "random-number": RandomNumber,
  "character-count": CharacterCount,
  "contrast-checker": Contrast,
  "lorem-ipsum": Lorem,
};

export const Route = createFileRoute("/tools/$slug")({
  loader: ({ params }): ToolItem => {
    const tool = tools.find((item) => item.slug === params.slug);
    if (!tool || !components[tool.slug]) throw notFound();
    return tool;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Strumento non trovato — Luca Scalvinoni" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.label.it} — Luca Scalvinoni`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.summary.it },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.summary.it },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ToolNotFound,
  component: ToolDetail,
});

function ToolNotFound() {
  const t = useT();
  return (
    <PageShell>
      <BackLink to="/tools">{t(ui.toolbox)}</BackLink>
      <h1 className="mt-16 text-[1.05rem]">{t(ui.toolNotFound)}</h1>
      <p className="mt-3 text-muted-foreground">{t(ui.toolNotFoundBody)}</p>
    </PageShell>
  );
}

function ToolDetail() {
  const tool = Route.useLoaderData() as ToolItem | undefined;
  const t = useT();

  if (!tool) return <ToolNotFound />;
  const Tool = components[tool.slug];
  if (!Tool) return <ToolNotFound />;

  return (
    <PageShell>
      <BackLink to="/tools">{t(ui.toolbox)}</BackLink>

      <article className="mt-16">
        <h1 className="text-[1.05rem]">{t(tool.label)}</h1>
        <div className="mt-8">
          <Tool />
        </div>
      </article>
    </PageShell>
  );
}
