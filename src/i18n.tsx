import { Link, useRouterState } from "@tanstack/react-router";
import { useCallback } from "react";
import type { ReactNode } from "react";

export type Lang = "it" | "en";

export type Localized<T> = { it: T; en: T };

export const siteUrl = "https://luca.scalvinoni.com";

// ponytail: la lingua sta nell'URL (/en/...), non in uno stato: il prerender di /en
// esce già in inglese e non c'è nessun flash né mismatch di idratazione.
export function langFromPath(pathname: string): Lang {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "it";
}

/** Percorso senza prefisso lingua, sempre con `/` iniziale. */
export function stripLang(pathname: string): string {
  return langFromPath(pathname) === "en" ? pathname.slice(3) || "/" : pathname;
}

export function localePath(lang: Lang, path: string): string {
  if (lang === "it") return path;
  return path === "/" ? "/en" : `/en${path}`;
}

// Le pagine statiche stanno in cartelle (`/projects/index.html`) e il server
// risponde con lo slash finale: canonical e sitemap devono usare la stessa forma.
const absolute = (lang: Lang, path: string) => {
  const p = localePath(lang, path);
  return `${siteUrl}${p.endsWith("/") ? p : `${p}/`}`;
};

/** Canonical autoreferenziale + hreflang it/en/x-default per `path` (italiano, senza prefisso). */
export function seoLinks(lang: Lang, path: string) {
  return [
    { rel: "canonical", href: absolute(lang, path) },
    { rel: "alternate", hrefLang: "it", href: absolute("it", path) },
    { rel: "alternate", hrefLang: "en", href: absolute("en", path) },
    { rel: "alternate", hrefLang: "x-default", href: absolute("it", path) },
  ];
}

const CHOSEN = "lang";

export function rememberLang(lang: Lang) {
  try {
    window.sessionStorage.setItem(CHOSEN, lang);
  } catch {
    // storage bloccato: la lingua resta quella dell'URL
  }
}

export function chosenLang(): Lang | null {
  try {
    const v = window.sessionStorage.getItem(CHOSEN);
    return v === "it" || v === "en" ? v : null;
  } catch {
    return null;
  }
}

/** `lang` dal parametro opzionale `{-$lang}` di una rotta. */
export const langParam = (lang?: string): Lang => (lang === "en" ? "en" : "it");

export function useLang() {
  const lang = useRouterState({ select: (s) => langFromPath(s.location.pathname) });
  return { lang };
}

/** Link interno che mantiene la lingua corrente: `to` è un percorso italiano, es. `/projects/guido`. */
export function LocLink({
  to,
  children,
  ...props
}: {
  to: string;
  children: ReactNode;
  className?: string;
  viewTransition?: boolean;
}) {
  const { lang } = useLang();
  return (
    <Link to={localePath(lang, to) as never} {...props}>
      {children}
    </Link>
  );
}

export function useT() {
  const { lang } = useLang();
  return useCallback(<T,>(value: Localized<T>) => value[lang], [lang]);
}

export const ui = {
  projects: { it: "Progetti", en: "Projects" },
  toolbox: { it: "Strumenti", en: "Tools" },
  path: { it: "Percorso", en: "Journey" },
  lately: { it: "Ultimamente", en: "Lately" },
  seeProjects: { it: "vedi i progetti", en: "see the projects" },
  back: { it: "Indietro", en: "Back" },
  links: { it: "Risorse utili", en: "Useful resources" },
  ctaContact: { it: "Scrivimi", en: "Get in touch" },
  ctaOr: {
    it: ", oppure continua a scorrere per il prossimo progetto.",
    en: ", or keep scrolling for the next project.",
  },
  nextProject: { it: "Prossimo progetto", en: "Next project" },
  notFound: { it: "Progetto non trovato", en: "Project not found" },
  notFoundBody: {
    it: "Questo progetto non esiste o è stato spostato.",
    en: "This project doesn't exist or has been moved.",
  },
  previewAlt: { it: "Anteprima del progetto", en: "Project preview" },
  toolNotFound: { it: "Strumento non trovato", en: "Tool not found" },
  toolNotFoundBody: {
    it: "Questo strumento non esiste o è stato spostato.",
    en: "This tool doesn't exist or has been moved.",
  },
  pageNotFound: { it: "Pagina non trovata", en: "Page not found" },
  pageNotFoundBody: {
    it: "La pagina che cerchi non esiste o è stata spostata.",
    en: "The page you're looking for doesn't exist or has been moved.",
  },
  goHome: { it: "Torna alla home", en: "Go home" },
  errorTitle: { it: "Questa pagina non si è caricata", en: "This page didn't load" },
  errorBody: {
    it: "Qualcosa è andato storto da parte nostra. Prova ad aggiornare o torna alla home.",
    en: "Something went wrong on our end. You can try refreshing or head back home.",
  },
  tryAgain: { it: "Riprova", en: "Try again" },
  projectsEmpty: {
    it: "Le schede sono in aggiornamento, tornano presto.",
    en: "The case studies are being updated, back soon.",
  },
} satisfies Record<string, Localized<string>>;
