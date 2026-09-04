import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { PageShell, SectionLabel } from "@/components/PageShell";
import { visibleProjects, type ProjectItem } from "@/data/site";
import { ui, useT } from "@/i18n";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }): ProjectItem => {
    const project = visibleProjects.find((item) => item.slug === params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Progetto non trovato — Luca Scalvinoni" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.title} — Luca Scalvinoni`;
    const description = loaderData.summary.it;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
        ...(loaderData.image
          ? [
              { property: "og:image", content: loaderData.image },
              { name: "twitter:image", content: loaderData.image },
            ]
          : []),
      ],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectDetail,
});

function ProjectNotFound() {
  const t = useT();
  return (
    <PageShell>
      <Link to="/projects" className="link-quiet text-[0.95rem]">
        {t(ui.projects)}
      </Link>
      <h1 className="mt-16 text-[1.05rem]">{t(ui.notFound)}</h1>
      <p className="mt-3 text-muted-foreground">{t(ui.notFoundBody)}</p>
    </PageShell>
  );
}

function ProjectDetail() {
  const project = Route.useLoaderData() as ProjectItem | undefined;
  const t = useT();

  if (!project) return <ProjectNotFound />;

  return (
    <PageShell>
      <Link to="/projects" className="link-quiet text-[0.95rem]">
        {t(ui.projects)}
      </Link>

      <article className="mt-16">
        <h1 className="text-[1.05rem]">{project.title}</h1>
        <div className="mt-1 text-[0.95rem] text-muted-foreground">
          {t(project.category)} · {project.year}
        </div>

        {project.image ? (
          <img
            src={project.image}
            alt={`${t(ui.previewAlt)} — ${project.title}`}
            loading="lazy"
            className="mt-8 aspect-[4/3] w-full rounded-sm bg-muted object-cover grayscale transition-all duration-500 hover:grayscale-0"
          />
        ) : null}

        <div className="mt-8 space-y-5 text-muted-foreground">
          {t(project.description).map((paragraph: string) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <section className="mt-16">
          <SectionLabel>{t(ui.tools)}</SectionLabel>
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-[0.95rem] text-muted-foreground">
            {t(project.tech).map((item: string) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </article>
    </PageShell>
  );
}
