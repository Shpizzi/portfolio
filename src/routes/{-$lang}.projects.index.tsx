import { createFileRoute } from "@tanstack/react-router";

import { BackLink, PageShell, SectionLabel } from "@/components/PageShell";
import { visibleProjects } from "@/data/site";
import { LocLink, langParam, seoLinks, ui, useT } from "@/i18n";

const meta = {
  it: {
    title: "Progetti — Luca Scalvinoni",
    description:
      "Progetti di UX/UI e graphic design di Luca Scalvinoni: flussi di sottoscrizione, dashboard, concept design e branding.",
    ogDescription: "Progetti di UX/UI e graphic design di Luca Scalvinoni.",
  },
  en: {
    title: "Projects — Luca Scalvinoni",
    description:
      "UX/UI and graphic design projects by Luca Scalvinoni: subscription flows, dashboards, concept design and branding.",
    ogDescription: "UX/UI and graphic design projects by Luca Scalvinoni.",
  },
};

export const Route = createFileRoute("/{-$lang}/projects/")({
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
      links: seoLinks(lang, "/projects"),
    };
  },

  component: Projects,
});

function Projects() {
  const t = useT();

  return (
    <PageShell>
      <BackLink strict current={t(ui.projects)} />
      <h1 className="sr-only">{t(ui.projects)}</h1>
      <section className="mt-16">
        <SectionLabel>{t(ui.projects)}</SectionLabel>
        {visibleProjects.length === 0 ? (
          <p className="text-[0.95rem] text-muted-foreground">{t(ui.projectsEmpty)}</p>
        ) : null}
        <ul className="space-y-10">
          {visibleProjects.filter((project) => !project.other).map((project) => (
            <li key={project.slug}>
              {project.image ? (
                <LocLink
                  to={`/projects/${project.slug}`}
                  className="mb-3 block overflow-hidden rounded-sm bg-muted"
                >
                  <img
                    src={project.image}
                    alt={`${t(ui.previewAlt)} — ${t(project.title)}`}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </LocLink>
              ) : null}
              <LocLink to={`/projects/${project.slug}`} className="link-quiet">
                {t(project.title)}
              </LocLink>
              <div className="text-[0.95rem] text-muted-foreground">
                {t(project.category)} · {project.year}
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-16">
          <SectionLabel>{t(ui.otherWork)}</SectionLabel>
        </div>
        <ul className="space-y-10">
          {visibleProjects.filter((project) => project.other).map((project) => (
            <li key={project.slug}>
              {project.image ? (
                <LocLink
                  to={`/projects/${project.slug}`}
                  className="mb-3 block overflow-hidden rounded-sm bg-muted"
                >
                  <img
                    src={project.image}
                    alt={`${t(ui.previewAlt)} — ${t(project.title)}`}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </LocLink>
              ) : null}
              <LocLink to={`/projects/${project.slug}`} className="link-quiet">
                {t(project.title)}
              </LocLink>
              <div className="text-[0.95rem] text-muted-foreground">
                {t(project.category)} · {project.year}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
