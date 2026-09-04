import { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

export type Lang = "it" | "en";

export type Localized<T> = { it: T; en: T };

const STORAGE_KEY = "lang";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue>({
  lang: "it",
  setLang: () => {},
});

function detectLang(): Lang {
  if (typeof window === "undefined") return "it";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "it" || stored === "en") return stored;
  const preferred = window.navigator.languages?.[0] ?? window.navigator.language ?? "it";
  return preferred.toLowerCase().startsWith("it") ? "it" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Server render and first client render always use "it" to avoid a
  // hydration mismatch; the browser preference is applied right after.
  const [lang, setLangState] = useState<Lang>("it");

  useEffect(() => {
    const detected = detectLang();
    setLangState(detected);
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, next);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}

export function useT() {
  const { lang } = useLang();
  return useCallback(<T,>(value: Localized<T>) => value[lang], [lang]);
}

export const ui = {
  projects: { it: "Progetti", en: "Projects" },
  toolbox: { it: "Strumenti", en: "Tools" },
  path: { it: "Percorso", en: "Journey" },
  recentPath: { it: "Percorso recente", en: "Recent journey" },
  seeProjects: { it: "vedi i progetti", en: "see the projects" },
  tools: { it: "Strumenti e tecnologie", en: "Tools and technologies" },
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
  projectsEmpty: {
    it: "Le schede sono in aggiornamento, tornano presto.",
    en: "The case studies are being updated, back soon.",
  },
} satisfies Record<string, Localized<string>>;
