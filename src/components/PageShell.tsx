import { Link, useRouter, type LinkProps } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

import { ui, useLang, useT } from "@/i18n";
import { cachedNowPlaying, nowPlaying, type Track } from "@/lib/now-playing";

export function PageShell({ children }: { children: ReactNode }) {
  const { lang } = useLang();
  // Il fade serve al cambio lingua, non al primo caricamento: su una pagina di solo
  // testo partire da opacità 0 si legge come lentezza, non come cura.
  const firstRender = useRef(true);
  useEffect(() => {
    firstRender.current = false;
  }, []);

  return (
    <main className="page-pad min-h-screen bg-background px-6">
      <div className="mx-auto w-full max-w-[27rem]">
        <LanguageSwitcher />
        {/* key su lang: React rimonta il blocco e l'animazione riparte a ogni cambio. */}
        <div
          key={lang}
          className={firstRender.current ? undefined : "animate-in fade-in duration-300"}
        >
          {children}
        </div>
      </div>
    </main>
  );
}

export function LanguageSwitcher() {
  const { lang, setLang } = useLang();

  return (
    <div className="mb-10 flex items-center gap-x-3 text-[0.85rem] uppercase tracking-wide text-muted-foreground">
      {(["it", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          // La transizione sta sulla base: prima stava solo sul ramo inattivo,
          // così attivo→inattivo sfumava e inattivo→attivo scattava.
          className={`transition-colors ${
            lang === code ? "text-brand underline underline-offset-4" : "hover:text-foreground"
          }`}
        >
          {code}
        </button>
      ))}
      <NowPlaying />
    </div>
  );
}

// Il pallino distingue i due casi senza doverlo scrivere: pieno e pulsante mentre
// suona, spento se è solo l'ultimo brano ascoltato.
function NowPlaying() {
  // Se la richiesta è già stata fatta in questa sessione il brano c'è subito:
  // cambiando pagina la riga resta piena invece di ricaricarsi.
  const [track, setTrack] = useState<Track | null | undefined>(cachedNowPlaying);

  useEffect(() => {
    if (track !== undefined) return;
    void nowPlaying().then(setTrack);
  }, [track]);

  // Nessun timer prima di mostrarlo: undefined è anche lo stato del prerender,
  // quindi lo scheletro sta già nell'HTML e si vede dal primo paint, prima che
  // il JS parta. È lì che su mobile il testo sembrava comparire dal nulla.
  if (track === undefined) {
    return (
      <span aria-hidden className="ml-auto flex items-center gap-x-2">
        <span className="h-2 w-48 animate-pulse rounded-full bg-muted" />
        <span className="size-1.5 shrink-0 rounded-full bg-muted" />
      </span>
    );
  }

  if (!track) return null;

  return (
    <a
      href={track.url}
      target="_blank"
      rel="noreferrer"
      title={`${track.artist} — ${track.title}`}
      className="link-nav ml-auto flex min-w-0 items-center gap-x-2 normal-case tracking-normal"
    >
      {/* Il titolo si tronca presto: un brano lungo si mangerebbe tutta la riga. */}
      <span className="max-w-[16rem] truncate">
        {track.artist} — {track.title}
      </span>
      <span
        aria-hidden
        className={
          track.playing
            ? "size-1.5 shrink-0 animate-pulse rounded-full bg-brand"
            : "size-1.5 shrink-0 rounded-full bg-border"
        }
      />
    </a>
  );
}

// In cima a ogni pagina interna: "Indietro" torna alla pagina di prima, come il tasto del
// browser, e sotto in piccolo c'è il percorso. `to` è la pagina madre, omesso se è la home.
export function BackLink({
  to,
  children,
  crumbs = true,
}: {
  to?: NonNullable<LinkProps["to"]>;
  children?: ReactNode;
  crumbs?: boolean;
}) {
  const t = useT();
  const router = useRouter();
  return (
    <div className="text-muted-foreground">
      <button
        type="button"
        className="link-nav text-[0.95rem]"
        // Chi arriva da un link esterno non ha una pagina di prima: va alla pagina madre.
        onClick={() =>
          window.history.length > 1 ? router.history.back() : router.navigate({ to: to ?? "/" })
        }
      >
        {t(ui.back)}
      </button>
      {crumbs ? (
        <nav aria-label="Breadcrumb" className="mt-1 text-[0.8rem]">
          <ol className="flex flex-wrap gap-x-1.5">
            <li>
              <Link to="/" className="link-nav">
                Home
              </Link>
            </li>
            {to ? (
              <>
                <li aria-hidden>/</li>
                <li>
                  <Link to={to} className="link-nav">
                    {children}
                  </Link>
                </li>
              </>
            ) : null}
          </ol>
        </nav>
      ) : null}
    </div>
  );
}

export function BackHome({ crumbs = true }: { crumbs?: boolean }) {
  return <BackLink crumbs={crumbs} />;
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return <h2 className="mb-5 text-[0.95rem] text-muted-foreground">{children}</h2>;
}

// Il group sta sull'ancora che la contiene, non qui: senza, la freccia resta ferma.
export function ExternalArrow() {
  return (
    <span className="ml-1 inline-block align-super text-[0.6em] text-muted-foreground transition-transform duration-150 group-hover:-translate-y-px">
      ↗
    </span>
  );
}
