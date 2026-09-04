import { useState, type ReactNode } from "react";

import { useT, type Localized } from "@/i18n";
import {
  contrastRatio,
  loremParagraphs,
  parseHexList,
  randomInt,
  swatchesSvg,
  wcagVerdict,
} from "@/lib/tools";

// Un componente per strumento. La pagina che li ospita è src/routes/tools.$slug.tsx,
// l'elenco e gli slug stanno in src/data/site.ts.
// ponytail: le stringhe stanno qui e non in i18n.tsx, le usa solo questo file.
// I nomi degli strumenti no: quelli servono anche all'indice, e stanno in src/data/site.ts.
const tx = {
  flip: { it: "lancia", en: "flip" },
  heads: { it: "Testa", en: "Heads" },
  tails: { it: "Croce", en: "Tails" },
  from: { it: "da", en: "from" },
  to: { it: "a", en: "to" },
  draw: { it: "estrai", en: "draw" },
  countPlaceholder: {
    it: "Incolla qui il testo…",
    en: "Paste your text here…",
  },
  characters: { it: "caratteri", en: "characters" },
  words: { it: "parole", en: "words" },
  titleTag: { it: "title", en: "title" },
  metaTag: { it: "meta description", en: "meta description" },
  text: { it: "testo", en: "text" },
  background: { it: "sfondo", en: "background" },
  normalText: { it: "testo normale", en: "normal text" },
  largeText: { it: "testo grande", en: "large text" },
  sample: {
    it: "Il contrasto si vede meglio su una frase vera che su un quadrato.",
    en: "Contrast reads better on a real sentence than on a square.",
  },
  paragraphs: { it: "paragrafi", en: "paragraphs" },
  generate: { it: "genera", en: "generate" },
  copySvg: { it: "copia SVG", en: "copy SVG" },
  copy: { it: "copia", en: "copy" },
  copied: { it: "copiato", en: "copied" },
  copyFailed: { it: "copia non riuscita", en: "copy failed" },
} satisfies Record<string, Localized<string>>;

/* ---------- pezzi condivisi ---------- */

function Action({ onClick, children }: { onClick: () => void; children: ReactNode }) {
  return (
    <button type="button" onClick={onClick} className="link-quiet text-foreground">
      {children}
    </button>
  );
}

const fieldClass =
  "border-b border-border bg-transparent py-1 text-foreground outline-none transition-colors focus:border-foreground";

function useCopy() {
  const [state, setState] = useState<"" | "ok" | "ko">("");

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setState("ok");
    } catch {
      // Succede fuori da HTTPS o se il browser nega il permesso.
      setState("ko");
    }
    setTimeout(() => setState(""), 1600);
  };

  return { copy, state };
}

function CopyButton({ text, label }: { text: string; label: string }) {
  const t = useT();
  const { copy, state } = useCopy();

  return (
    <span className="flex items-baseline gap-x-3">
      <Action onClick={() => copy(text)}>{label}</Action>
      {state ? (
        <span className="text-[0.85rem] text-muted-foreground">
          {state === "ok" ? t(tx.copied) : t(tx.copyFailed)}
        </span>
      ) : null}
    </span>
  );
}

/* ---------- gli strumenti ---------- */

export function CoinFlip() {
  const t = useT();
  const [side, setSide] = useState<"heads" | "tails" | null>(null);

  return (
    <>
      <div className="flex items-baseline gap-x-4">
        <Action onClick={() => setSide(Math.random() < 0.5 ? "heads" : "tails")}>
          {t(tx.flip)}
        </Action>
        <span aria-live="polite" className="text-foreground">
          {side ? t(side === "heads" ? tx.heads : tx.tails) : null}
        </span>
      </div>
    </>
  );
}

export function RandomNumber() {
  const t = useT();
  const [min, setMin] = useState("1");
  const [max, setMax] = useState("100");
  const [value, setValue] = useState<number | null>(null);

  return (
    <>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
        <label className="text-muted-foreground">
          {t(tx.from)}{" "}
          <input
            type="number"
            value={min}
            onChange={(e) => setMin(e.target.value)}
            className={`${fieldClass} w-16 tabular-nums`}
          />
        </label>
        <label className="text-muted-foreground">
          {t(tx.to)}{" "}
          <input
            type="number"
            value={max}
            onChange={(e) => setMax(e.target.value)}
            className={`${fieldClass} w-20 tabular-nums`}
          />
        </label>
        <Action onClick={() => setValue(randomInt(Number(min) || 0, Number(max) || 0))}>
          {t(tx.draw)}
        </Action>
        <span aria-live="polite" className="tabular-nums text-foreground">
          {value}
        </span>
      </div>
    </>
  );
}

export function CharacterCount() {
  const t = useT();
  const [text, setText] = useState("");
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;

  // Le soglie oltre cui Google taglia. Sotto: quanto manca, sopra: quanto avanza.
  const limits = [
    { label: t(tx.titleTag), max: 60 },
    { label: t(tx.metaTag), max: 155 },
  ];

  return (
    <>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
        placeholder={t(tx.countPlaceholder)}
        className={`${fieldClass} w-full resize-y placeholder:text-muted-foreground`}
      />
      <div className="mt-2 flex flex-wrap gap-x-4 text-[0.85rem] text-muted-foreground">
        <span className="tabular-nums text-foreground">
          {text.length} {t(tx.characters)}
        </span>
        <span className="tabular-nums">
          {words} {t(tx.words)}
        </span>
        {limits.map((limit) => (
          <span key={limit.label} className="tabular-nums">
            {limit.label}{" "}
            <span className={text.length > limit.max ? "text-foreground" : undefined}>
              {text.length}/{limit.max}
            </span>
          </span>
        ))}
      </div>
    </>
  );
}

export function Contrast() {
  const t = useT();
  const [fg, setFg] = useState("#767676");
  const [bg, setBg] = useState("#ffffff");
  const ratio = contrastRatio(fg, bg);
  const verdict = wcagVerdict(ratio);

  return (
    <>
      <div className="flex flex-wrap gap-x-5 gap-y-2">
        {[
          { label: t(tx.text), value: fg, set: setFg },
          { label: t(tx.background), value: bg, set: setBg },
        ].map((input) => (
          <label key={input.label} className="flex items-center gap-x-2 text-muted-foreground">
            <input
              type="color"
              value={input.value}
              onChange={(e) => input.set(e.target.value)}
              aria-label={input.label}
              className="h-6 w-6 cursor-pointer rounded-sm border border-border bg-transparent"
            />
            <span className="tabular-nums">{input.value}</span>
          </label>
        ))}
      </div>

      <p className="mt-3 rounded-sm px-3 py-3" style={{ backgroundColor: bg, color: fg }}>
        {t(tx.sample)}
      </p>

      <div className="mt-2 flex flex-wrap gap-x-4 text-[0.85rem] text-muted-foreground">
        <span className="tabular-nums text-foreground">{ratio.toFixed(2)}:1</span>
        <span>
          {t(tx.normalText)} <span className="text-foreground">{verdict.normal}</span>
        </span>
        <span>
          {t(tx.largeText)} <span className="text-foreground">{verdict.large}</span>
        </span>
      </div>
    </>
  );
}

export function Lorem() {
  const t = useT();
  const [count, setCount] = useState("2");
  const [text, setText] = useState("");

  return (
    <>
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-2">
        <label className="text-muted-foreground">
          <input
            type="number"
            min={1}
            max={20}
            value={count}
            onChange={(e) => setCount(e.target.value)}
            className={`${fieldClass} w-14 tabular-nums`}
          />{" "}
          {t(tx.paragraphs)}
        </label>
        <Action onClick={() => setText(loremParagraphs(Number(count) || 1).join("\n\n"))}>
          {t(tx.generate)}
        </Action>
        {text ? <CopyButton text={text} label={t(tx.copy)} /> : null}
      </div>
      {text ? <p className="mt-3 whitespace-pre-line text-muted-foreground">{text}</p> : null}
    </>
  );
}

export function Swatches() {
  const t = useT();
  const [input, setInput] = useState("#1a1a1a\n#767676\n#e5e5e5");
  const colors = parseHexList(input);

  return (
    <>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={3}
        className={`${fieldClass} w-full resize-y`}
      />
      {colors.length ? (
        <>
          <div className="mt-3 flex flex-wrap gap-2">
            {colors.map((color, i) => (
              <span
                key={`${color}-${i}`}
                title={color}
                className="h-10 w-10 rounded-sm border border-border"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <div className="mt-3">
            <CopyButton text={swatchesSvg(colors)} label={t(tx.copySvg)} />
          </div>
        </>
      ) : null}
    </>
  );
}
