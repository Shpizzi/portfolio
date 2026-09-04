import { createFileRoute, Link } from "@tanstack/react-router";

import { BackHome, PageShell, SectionLabel } from "@/components/PageShell";
import { visibleProjects } from "@/data/site";
import { ui, useT } from "@/i18n";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Progetti — Luca Scalvinoni" },
      {
        name: "description",
        content:
          "Progetti di UX/UI e graphic design di Luca Scalvinoni: flussi di sottoscrizione, dashboard, concept design e branding.",
      },
      { property: "og:title", content: "Progetti — Luca Scalvinoni" },
      {
        property: "og:description",
        content: "Progetti di UX/UI e graphic design di Luca Scalvinoni.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),

  component: Projects,
});

function Projects() {
  const t = useT();

  return (
    <PageShell>
      <BackHome />
      <h1 className="sr-only">{t(ui.projects)}</h1>
      <section className="mt-16">
        <SectionLabel>{t(ui.projects)}</SectionLabel>
        {visibleProjects.length === 0 ? (
          <p className="text-[0.95rem] text-muted-foreground">{t(ui.projectsEmpty)}</p>
        ) : null}
        <ul className="space-y-10">
          {visibleProjects.map((project) => (
            <li key={project.slug}>
              {project.image ? (
                <Link
                  to="/projects/$slug"
                  params={{ slug: project.slug }}
                  className="mb-3 block overflow-hidden rounded-sm bg-muted"
                >
                  <img
                    src={project.image}
                    alt={`${t(ui.previewAlt)} — ${project.title}`}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                  />
                </Link>
              ) : null}
              <Link
                to="/projects/$slug"
                params={{ slug: project.slug }}
                className="link-quiet"
              >
                {project.title}
              </Link>
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
