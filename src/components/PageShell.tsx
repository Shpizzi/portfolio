import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { useLang } from "@/i18n";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-background px-6 py-24 md:py-40">
      <div className="mx-auto w-full max-w-[27rem]">
        <LanguageSwitcher />
        {children}
      </div>
    </main>
  );
}

export function LanguageSwitcher() {
  const { lang, setLang } = useLang();

  return (
    <div className="mb-10 flex gap-x-3 text-[0.85rem] uppercase tracking-wide text-muted-foreground">
      {(["it", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={
            lang === code
              ? "text-foreground underline underline-offset-4"
              : "transition-colors hover:text-foreground"
          }
        >
          {code}
        </button>
      ))}
    </div>
  );
}

export function BackHome() {
  return (
    <Link to="/" className="link-quiet text-[0.95rem]">
      Luca Scalvinoni
    </Link>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return <h2 className="mb-5 text-[0.95rem] text-muted-foreground">{children}</h2>;
}

export function ExternalArrow() {
  return <span className="ml-1 align-super text-[0.6em] text-muted-foreground">↗</span>;
}
