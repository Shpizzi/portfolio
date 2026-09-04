// Controllo delle funzioni pure di /tools. Si lancia con:
//   node src/lib/tools.check.ts
// ponytail: assert nudi invece di un test runner, il progetto non ne ha uno.
import assert from "node:assert/strict";

import { contrastRatio, loremParagraphs, parseHexList, randomInt, wcagVerdict } from "./tools.ts";

// parseHexList: forma corta, forma lunga, cancelletto opzionale, testo sporco
assert.deepEqual(parseHexList("#fff"), ["#ffffff"]);
assert.deepEqual(parseHexList("1a1a1a"), ["#1a1a1a"]);
assert.deepEqual(parseHexList("#FF0000, #00ff00\n0000ff"), ["#ff0000", "#00ff00", "#0000ff"]);
assert.deepEqual(parseHexList("nessun colore qui"), []);

// contrastRatio: gli estremi noti della scala WCAG
assert.equal(Math.round(contrastRatio("#000000", "#ffffff")), 21);
assert.equal(Math.round(contrastRatio("#ffffff", "#ffffff")), 1);
// simmetrico: l'ordine degli argomenti non conta
assert.equal(contrastRatio("#000", "#fff"), contrastRatio("#fff", "#000"));
// il grigio di riferimento a 4.5:1 passa AA ma non AAA
const grigio = contrastRatio("#767676", "#ffffff");
assert.ok(grigio >= 4.5 && grigio < 7, `atteso fra 4.5 e 7, ottenuto ${grigio}`);
assert.equal(wcagVerdict(grigio).normal, "AA");
assert.equal(wcagVerdict(21).normal, "AAA");
assert.equal(wcagVerdict(2).normal, "—");
// testo grande: la soglia scende a 3
assert.equal(wcagVerdict(3.2).large, "AA");
assert.equal(wcagVerdict(2.9).large, "—");

// randomInt: sempre dentro l'intervallo, estremi inclusi, argomenti invertiti tollerati
const estratti = new Set<number>();
for (let i = 0; i < 3000; i++) {
  const n = randomInt(1, 6);
  assert.ok(Number.isInteger(n) && n >= 1 && n <= 6, `fuori intervallo: ${n}`);
  estratti.add(n);
}
assert.equal(estratti.size, 6, "dopo 3000 lanci devono uscire tutti e sei i valori");
assert.equal(randomInt(4, 4), 4);
for (let i = 0; i < 100; i++) assert.ok(randomInt(9, 2) >= 2 && randomInt(9, 2) <= 9);

// loremParagraphs: quantità richiesta, maiuscola iniziale, punto finale
const paragrafi = loremParagraphs(3);
assert.equal(paragrafi.length, 3);
assert.ok(paragrafi.every((p) => /^[A-Z].*\.$/.test(p)));
assert.equal(loremParagraphs(0).length, 1, "sotto 1 si torna comunque un paragrafo");

console.log("tools.check.ts: tutto ok");
