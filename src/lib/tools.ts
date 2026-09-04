// Funzioni pure dietro la pagina /tools. Stanno qui, e non dentro il componente,
// solo perché così tools.check.ts le può verificare senza montare React.

export function randomInt(min: number, max: number): number {
  const lo = Math.ceil(Math.min(min, max));
  const hi = Math.floor(Math.max(min, max));
  return lo + Math.floor(Math.random() * (hi - lo + 1));
}

/** Estrae i colori da un testo incollato: accetta #abc, #aabbcc, con o senza cancelletto. */
export function parseHexList(text: string): string[] {
  const found = text.match(/#?\b(?:[0-9a-f]{6}|[0-9a-f]{3})\b/gi) ?? [];
  return found.map((raw) => {
    const hex = raw.replace("#", "").toLowerCase();
    const full =
      hex.length === 3
        ? hex
            .split("")
            .map((c) => c + c)
            .join("")
        : hex;
    return `#${full}`;
  });
}

function channels(hex: string): [number, number, number] {
  const h = parseHexList(hex)[0]?.slice(1) ?? "000000";
  return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
}

/** Luminanza relativa secondo WCAG 2.1. */
export function luminance(hex: string): number {
  const linear = (v: number) => {
    const c = v / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  };
  const [r, g, b] = channels(hex);
  return 0.2126 * linear(r) + 0.7152 * linear(g) + 0.0722 * linear(b);
}

/** Rapporto di contrasto WCAG, da 1 (identici) a 21 (nero su bianco). */
export function contrastRatio(a: string, b: string): number {
  const la = luminance(a);
  const lb = luminance(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

export type WcagVerdict = { normal: string; large: string };

export function wcagVerdict(ratio: number): WcagVerdict {
  return {
    normal: ratio >= 7 ? "AAA" : ratio >= 4.5 ? "AA" : "—",
    large: ratio >= 4.5 ? "AAA" : ratio >= 3 ? "AA" : "—",
  };
}

/** SVG di quadrati affiancati: incollato in Figma diventa un rettangolo per colore. */
export function swatchesSvg(colors: string[], size = 88, gap = 8): string {
  const width = colors.length * size + Math.max(0, colors.length - 1) * gap;
  const rects = colors
    .map(
      (c, i) =>
        `<rect x="${i * (size + gap)}" y="0" width="${size}" height="${size}" fill="${c}"/>`,
    )
    .join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${size}" viewBox="0 0 ${width} ${size}">${rects}</svg>`;
}

const LOREM =
  `lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut
   labore et dolore magna aliqua enim ad minim veniam quis nostrud exercitation ullamco laboris
   nisi aliquip ex ea commodo consequat duis aute irure in reprehenderit voluptate velit esse
   cillum eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt culpa qui
   officia deserunt mollit anim id est laborum`.split(/\s+/);

export function loremParagraphs(count: number, wordsPer = 42): string[] {
  return Array.from({ length: Math.max(1, count) }, () => {
    const words = Array.from(
      { length: wordsPer },
      () => LOREM[Math.floor(Math.random() * LOREM.length)],
    );
    const text = words.join(" ");
    return text.charAt(0).toUpperCase() + text.slice(1) + ".";
  });
}
