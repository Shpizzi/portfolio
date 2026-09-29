import { createFileRoute, Link, notFound, useNavigate, useRouter } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

import { BackLink, PageShell, SectionLabel } from "@/components/PageShell";
import { mailto, visibleProjects, type ProjectItem } from "@/data/site";
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
      <BackLink to="/projects">{t(ui.projects)}</BackLink>
      <h1 className="mt-16 text-[1.05rem]">{t(ui.notFound)}</h1>
      <p className="mt-3 text-muted-foreground">{t(ui.notFoundBody)}</p>
    </PageShell>
  );
}

function linkify(text: string) {
  const parts = text.split(/\[(.+?)\]\((.+?)\)/g);
  return parts.map((part, i) =>
    i % 3 === 1 ? (
      <a key={i} href={parts[i + 1]} target="_blank" rel="noreferrer" className="link-quiet">
        {part}
      </a>
    ) : i % 3 === 2 ? null : (
      part
    ),
  );
}

// ponytail: nei paragrafi `## ` apre un titolo, `> ` una frase in evidenza, `![alt](src)` un'immagine o un video, `@font Nome` un campione di carattere, `@palette` una palette, **testo** evidenzia e [testo](url) apre un link esterno, niente markdown completo
function emphasize(text: string, lead = false) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 && lead ? (
      // Nelle frasi in evidenza il testo è già pieno: le parole chiave si sottolineano.
      <span
        key={i}
        className="underline decoration-[var(--project-accent,currentColor)] decoration-dotted decoration-2 underline-offset-[5px]"
      >
        {linkify(part)}
      </span>
    ) : i % 2 ? (
      <strong key={i} className="font-medium text-foreground">
        {linkify(part)}
      </strong>
    ) : (
      linkify(part)
    ),
  );
}

// `@palette Etichetta: #hex #hex …` nei paragrafi di una scheda.
function Palette({ spec }: { spec: string }) {
  const [label, colors = ""] = spec.split(": ");
  return (
    <figure>
      <figcaption className="text-[0.85rem]">{label}</figcaption>
      <div className="mt-2 flex overflow-hidden rounded-sm border border-border">
        {colors.split(" ").map((color) => (
          <div key={color} className="h-16 flex-1" style={{ backgroundColor: color }} />
        ))}
      </div>
    </figure>
  );
}

// `@font Famiglia: Etichetta` nei paragrafi di una scheda.
// Campione centrato: le righe escono dai due lati e sfumano nel fondo della pagina.
function FontSpecimen({ spec }: { spec: string }) {
  const [family, label = family] = spec.split(": ");
  return (
    <figure>
      <figcaption className="text-[0.85rem]">{label}</figcaption>
      <div
        aria-hidden
        className="mt-2 flex flex-col items-center overflow-hidden text-[clamp(1.6rem,8vw,2.1rem)] leading-[1.15] whitespace-nowrap text-foreground"
        style={{
          fontFamily: `"${family}", sans-serif`,
          maskImage: "linear-gradient(to right, transparent, black 22%, black 78%, transparent)",
        }}
      >
        <div>AaBbCcDdEeFfGgHhIiJjKkLlMmNn</div>
        <div>0123456789&@#%€$!?*+=</div>
      </div>
    </figure>
  );
}

// In fondo alla scheda c'è il nome del progetto successivo. Arrivati al fondo, continuare a
// scorrere non sposta quasi più la pagina, come l'elastico di iOS: riempie la barra, e quando
// è piena la pagina diventa quella.
function NextProject({ current }: { current: ProjectItem }) {
  const t = useT();
  const navigate = useNavigate();
  const section = useRef<HTMLElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const index = visibleProjects.findIndex((item) => item.slug === current.slug);
  const next = visibleProjects[(index + 1) % visibleProjects.length] ?? current;

  useEffect(() => {
    const page = section.current?.closest("main");
    if (!page || !bar.current) return;
    const fill = bar.current;

    // Quanto scroll "a vuoto" serve per cambiare pagina, e di quanto al massimo si sposta la pagina.
    const target = 700;
    const stretch = 110;
    let pull = 0;
    let armed = false;
    let lastWheel = 0;
    let touchStart: number | null = null;
    let release: ReturnType<typeof setTimeout> | undefined;
    let done = false;

    const atBottom = () =>
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

    const render = (settle: boolean) => {
      const duration = settle ? "450ms" : "80ms";
      // Stessa curva dell'elastico di iOS: più tiri, meno si muove.
      const offset = (1 - 1 / ((pull * 0.55) / stretch + 1)) * stretch;
      page.style.transition = `translate ${duration} cubic-bezier(0.22, 1, 0.36, 1)`;
      page.style.translate = pull ? `0 ${-offset}px` : "";
      fill.style.transition = `scale ${duration} ease-out`;
      fill.style.scale = `${Math.min(pull / target, 1)} 1`;
    };

    const add = (amount: number) => {
      if (done) return;
      pull = Math.max(0, pull + amount);
      render(false);
      clearTimeout(release);
      if (pull >= target) {
        done = true;
        void navigate({
          to: "/projects/$slug",
          params: { slug: next.slug },
          viewTransition: true,
        });
        return;
      }
      // Se ci si ferma prima, tutto torna al suo posto.
      release = setTimeout(() => {
        pull = 0;
        render(true);
      }, 250);
    };

    const onWheel = (event: WheelEvent) => {
      const gap = event.timeStamp - lastWheel;
      lastWheel = event.timeStamp;
      if (!atBottom()) {
        armed = false;
        return;
      }
      // L'inerzia di uno scroll partito più su non conta: serve un gesto nuovo, fatto dal fondo.
      if (!armed && gap > 120) armed = true;
      if (armed && (event.deltaY > 0 || pull > 0)) add(event.deltaY);
    };

    const onTouchStart = (event: TouchEvent) => {
      touchStart = atBottom() ? (event.touches[0]?.clientY ?? null) : null;
    };
    const onTouchMove = (event: TouchEvent) => {
      const y = event.touches[0]?.clientY;
      if (touchStart === null || y === undefined) return;
      add((touchStart - y) * 1.5);
      touchStart = y;
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      clearTimeout(release);
      page.style.translate = "";
      page.style.transition = "";
    };
  }, [navigate, next.slug]);

  return (
    <section ref={section} className="mt-16 pb-16">
      <Link to="/projects/$slug" params={{ slug: next.slug }} viewTransition className="block">
        <div className="text-[0.85rem] text-muted-foreground">{t(ui.nextProject)}</div>
        <div className="mt-2 text-[1.3rem] leading-snug">{next.title.split(" — ")[0]}</div>
      </Link>
      <div aria-hidden className="mt-4 h-0.5 bg-border">
        <div ref={bar} className="h-full origin-left bg-foreground" style={{ scale: "0 1" }} />
      </div>
    </section>
  );
}

function Zoomable({
  src,
  alt,
  className,
  onOpen,
}: {
  src: string;
  alt: string;
  className: string;
  onOpen: (img: HTMLImageElement) => void;
}) {
  return (
    <button
      type="button"
      className="block w-full cursor-zoom-in"
      onClick={(e) => onOpen(e.currentTarget.firstElementChild as HTMLImageElement)}
    >
      <img src={src} alt={alt} loading="lazy" className={className} />
    </button>
  );
}

// ponytail: <dialog> nativo + View Transitions, l'immagine si espande dal punto in cui si trova.
// Dove l'API manca o con prefers-reduced-motion si apre senza animazione.
function useLightbox() {
  const dialog = useRef<HTMLDialogElement>(null);
  const origin = useRef<HTMLImageElement | null>(null);
  const [image, setImage] = useState<{ src: string; alt: string } | null>(null);

  const transition = (update: () => void) => {
    if (!document.startViewTransition || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      update();
      return Promise.resolve();
    }
    return document.startViewTransition(() => flushSync(update)).finished;
  };

  const open = (img: HTMLImageElement) => {
    origin.current = img;
    img.style.viewTransitionName = "lightbox";
    transition(() => {
      img.style.viewTransitionName = "";
      setImage({ src: img.currentSrc || img.src, alt: img.alt });
      dialog.current?.showModal();
    });
  };

  const close = () => {
    const img = origin.current;
    transition(() => {
      dialog.current?.close();
      setImage(null);
      if (img) img.style.viewTransitionName = "lightbox";
    }).finally(() => {
      if (img) img.style.viewTransitionName = "";
    });
  };

  return {
    open,
    dialog: (
      // Esc e focus li gestisce <dialog>; il click ovunque chiude.
      <dialog
        ref={dialog}
        onClick={close}
        onCancel={(e) => {
          e.preventDefault();
          close();
        }}
        className="m-auto max-h-none max-w-none cursor-zoom-out bg-transparent p-0 outline-none backdrop:bg-black/85"
      >
        {image ? (
          <img
            src={image.src}
            alt={image.alt}
            style={{ viewTransitionName: "lightbox" }}
            className="max-h-[92dvh] max-w-[94vw] rounded-sm object-contain"
          />
        ) : null}
      </dialog>
    ),
  };
}

function ProjectDetail() {
  const project = Route.useLoaderData() as ProjectItem | undefined;
  const t = useT();
  const lightbox = useLightbox();

  if (!project) return <ProjectNotFound />;

  return (
    <PageShell>
      <BackLink to="/projects">{t(ui.projects)}</BackLink>

      <article
        className="mt-16"
        style={{ "--project-accent": project.accent } as React.CSSProperties}
      >
        <h1 className="text-[1.05rem]">{project.title}</h1>
        <div className="mt-1 text-[0.95rem] text-muted-foreground">
          {t(project.category)} · {project.year}
        </div>

        {/* ponytail: tag solo visivi, diventano link quando esisterà una pagina per filtrare */}
        <ul className="mt-4 flex flex-wrap gap-1.5 text-[0.8rem] text-muted-foreground">
          {t(project.tech).map((item: string) => (
            <li key={item} className="rounded-full border border-border px-2.5 py-0.5">
              {item}
            </li>
          ))}
        </ul>

        {project.image ? (
          <Zoomable
            src={project.image}
            alt={`${t(ui.previewAlt)} — ${project.title}`}
            onOpen={lightbox.open}
            className="mt-8 aspect-[4/3] w-full rounded-sm bg-muted object-cover"
          />
        ) : null}

        <div className="mt-8 space-y-5 text-muted-foreground">
          {t(project.description).map((paragraph: string) =>
            paragraph.startsWith("## ") ? (
              <h2 key={paragraph} className="pt-6 text-[0.95rem] text-foreground">
                {paragraph.slice(3)}
              </h2>
            ) : paragraph.startsWith("> ") ? (
              <p key={paragraph} className="text-[1.3rem] leading-snug text-foreground">
                {emphasize(paragraph.slice(2), true)}
              </p>
            ) : paragraph.startsWith("@font ") ? (
              <FontSpecimen key={paragraph} spec={paragraph.slice(6)} />
            ) : paragraph.startsWith("@palette ") ? (
              <Palette key={paragraph} spec={paragraph.slice(9)} />
            ) : paragraph.startsWith("![") && paragraph.endsWith(".mp4)") ? (
              <video
                key={paragraph}
                src={paragraph.slice(paragraph.indexOf("](") + 2, -1)}
                aria-label={paragraph.slice(2, paragraph.indexOf("]("))}
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-sm bg-muted"
              />
            ) : paragraph.startsWith("![") ? (
              <Zoomable
                key={paragraph}
                src={paragraph.slice(paragraph.indexOf("](") + 2, -1)}
                alt={paragraph.slice(2, paragraph.indexOf("]("))}
                onOpen={lightbox.open}
                className="w-full rounded-sm bg-muted"
              />
            ) : (
              <p key={paragraph}>{emphasize(paragraph)}</p>
            ),
          )}
        </div>

        {project.gallery?.length ? (
          <div className="mt-16 space-y-4">
            {project.gallery.map((src, i) => (
              <Zoomable
                key={src}
                src={src}
                alt={`${t(ui.previewAlt)} — ${project.title} (${i + 2})`}
                onOpen={lightbox.open}
                className="w-full rounded-sm bg-muted"
              />
            ))}
          </div>
        ) : null}

        {project.links?.length ? (
          <section className="mt-16">
            <SectionLabel>{t(ui.links)}</SectionLabel>
            <ul className="flex flex-wrap gap-x-4 gap-y-2 text-[0.95rem]">
              {project.links.map((link) => (
                <li key={link.url}>
                  <a href={link.url} target="_blank" rel="noreferrer" className="link-quiet">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </article>

      <p className="mt-24 border-t border-border pt-10 text-[1.3rem] leading-snug text-foreground">
        <a href={mailto} className="link-quiet">
          {t(ui.ctaContact)}
        </a>
        {t(ui.ctaOr)}
      </p>

      <NextProject current={project} />

      {lightbox.dialog}
    </PageShell>
  );
}
