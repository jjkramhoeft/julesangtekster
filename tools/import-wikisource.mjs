// Imports public-domain carol texts from Danish Wikisource into songs/.
//
//   node tools/import-wikisource.mjs
//
// The metadata below comes from docs/research/danish-christmas-carols.md.
// Only songs whose text is public domain in Denmark are listed. Requests are
// throttled because Wikisource rate-limits rapid API calls.

import { mkdir, readFile, writeFile } from 'node:fs/promises';

const API = 'https://da.wikisource.org/w/api.php';
const USER_AGENT = 'CarolLyricsImporter/1.0 (https://github.com/jjkramhoeft/julesangtekster)';
const OUT_DIR = new URL('../songs/', import.meta.url);

const SONGS = [
  {
    id: 'hoejt-fra-traeets-groenne-top',
    page: 'Højt fra træets grønne top',
    title: 'Højt fra træets grønne top',
    author: 'Peter Faber',
    year: 1847,
    type: 'julesang',
    composer: 'Emil Horneman, 1848',
    hsb: 260,
    expectedVerses: 8,
    extraInfo:
      'Peter Faber skrev sangen til sin egen familie julen 1847 under titlen »Juletræet«. ' +
      'Emil Hornemans melodi fra 1848 passede til den nye skik med at danse om juletræet. ' +
      'Højskolesangbogen udelader vers 6 og 7, som handler om den lille William og bedstefar.',
  },
  {
    id: 'glade-jul',
    page: 'Glade jul, dejlige jul',
    title: 'Glade jul, dejlige jul',
    author: 'B.S. Ingemann',
    year: 1850,
    type: 'julesalme',
    composer: 'Franz Xaver Gruber, 1818',
    dds: 120,
    hsb: 249,
    expectedVerses: 4,
    extraInfo:
      'Ingemanns tekst er skrevet til Franz Grubers melodi fra 1818, den samme melodi som »Stille Nacht«. ' +
      'Salmen synges om juletræet og afslutter ofte gudstjenesten juleaften.',
  },
  {
    id: 'et-barn-er-foedt-i-betlehem',
    page: 'Et barn er født i Betlehem',
    title: 'Et barn er født i Betlehem',
    author: 'N.F.S. Grundtvig',
    year: 1820,
    type: 'julesalme',
    composer: 'Tysk sang fra ca. 1600, bearbejdet af A.P. Berggreen 1849',
    dds: 104,
    hsb: 242,
    expectedVerses: 10,
    refrainLast: 1,
    extraInfo:
      'Grundtvig skrev salmen i 1820 og igen i 1845 efter den latinske »Puer natus« fra 1300-tallet ' +
      'og ældre danske udgaver fra 1544 og 1569. I 2014 var den danskernes foretrukne sang til at gå om juletræet.',
  },
  {
    id: 'dejlig-er-den-himmel-blaa',
    page: 'Dejlig er den himmel blå',
    title: 'Dejlig er den himmel blå',
    author: 'N.F.S. Grundtvig',
    year: 1810,
    type: 'salme',
    composer: 'J.G. Meidell, ca. 1840',
    dds: 136,
    hsb: 264,
    expectedVerses: 7,
    section: /^==\s*Den korte udgave fra 1853\s*==$/,
    extraInfo:
      'Grundtvig skrev salmen i 1810 med hele 19 vers og forkortede den selv i 1853 til de 7 vers, der synges i dag. ' +
      'I salmebogen hører den til helligtrekonger, men den er en af de mest sungne sange om juletræet.',
  },
  {
    id: 'nu-er-det-jul-igen',
    page: 'Nu er det jul igen',
    title: 'Nu er det jul igen',
    author: 'Traditionel',
    type: 'julesang',
    composer: 'Svensk-dansk folkemelodi',
    expectedVerses: 2,
    startAfter: /vante version/,
    stopAt: /Det følgende er den udvidede tekst/,
    splitEvery: 3,
    firstLine: 'Nu’ det jul igen',
    extraInfo:
      'En gammel folkelig sang fra en fælles dansk-svensk tradition. Melodien kendes fra sanglege i 1700-tallet ' +
      'og er nok endnu ældre. Den synges i rask tempo, når kæden løber gennem huset.',
  },
  {
    id: 'det-kimer-nu-til-julefest',
    page: 'Det kimer nu',
    title: 'Det kimer nu til julefest',
    author: 'N.F.S. Grundtvig',
    year: 1817,
    type: 'julesalme',
    composer: 'C.C.N. Balle, 1850',
    dds: 94,
    hsb: 241,
    expectedVerses: 9,
    extraInfo:
      'Grundtvig skrev salmen i 1817 med inspiration fra Luther og reviderede den i 1852. ' +
      'Melodien er af C.C.N. Balle fra 1850. Den åbner ofte gudstjenesten juleaften.',
  },
  {
    id: 'julen-har-bragt-velsignet-bud',
    page: 'Julen har bragt velsignet bud',
    title: 'Julen har bragt velsignet bud',
    author: 'B.S. Ingemann',
    year: 1839,
    type: 'julesalme',
    composer: 'C.E.F. Weyse, 1841',
    dds: 119,
    hsb: 248,
    expectedVerses: 3,
    extraInfo:
      'Ingemann skrev salmen til børn i 1839 på bestilling fra familien Fenger i Lynge. ' +
      'Han skrev seks korte vers, som Weyse slog sammen til tre, da han satte melodi til i 1841.',
  },
  {
    id: 'dejlig-er-jorden',
    page: 'Dejlig er jorden',
    title: 'Dejlig er jorden',
    author: 'B.S. Ingemann',
    year: 1850,
    type: 'salme',
    composer: 'Schlesisk folkemelodi, 1700-tallet',
    dds: 121,
    hsb: 56,
    expectedVerses: 3,
    extraInfo:
      'Ingemanns salme blev først trykt i 1850 under titlen »Pilgrimssang«. Melodien er en schlesisk folkemelodi ' +
      'fra 1700-tallet. Den kaldes ofte Nordens mest populære salme.',
  },
  {
    id: 'i-denne-soede-juletid',
    page: 'I denne søde juletid',
    title: 'I denne søde juletid',
    author: 'H.A. Brorson',
    year: 1732,
    type: 'julesalme',
    composer: 'C.C.N. Balle, 1855',
    dds: 109,
    hsb: 238,
    expectedVerses: 7,
    extraInfo:
      'Brorson udgav salmen i 1732 i hæftet »Nogle Jule-Psalmer«. Det syvende lovprisningsvers kom til i 1739.',
  },
  {
    id: 'sikken-voldsom-traengsel-og-alarm',
    page: 'Sikken voldsom trængsel og alarm',
    title: 'Sikken voldsom trængsel og alarm',
    author: 'Peter Faber',
    year: 1848,
    type: 'julesang',
    composer: 'Adolf Müller, 1833 (ofte tilskrevet Emil Horneman)',
    expectedVerses: 7,
    refrainLast: 4,
    extraInfo:
      'Også kendt som »Julestemning«. Peter Faber skrev den i 1848, og den blev trykt efter hans død i »Viser og Vers« (1877). ' +
      'Melodien stammer fra Adolf Müllers musik til Nestroys »Lumpazivagabundus« (1833).',
  },
  {
    id: 'velkommen-igen-guds-engle-smaa',
    page: 'Velkommen igen, Guds engle små',
    title: 'Velkommen igen, Guds engle små',
    author: 'N.F.S. Grundtvig',
    year: 1824,
    type: 'julesalme',
    composer: 'A.P. Berggreen, 1832',
    dds: 99,
    hsb: 243,
    expectedVerses: 8,
    extraInfo: 'Grundtvig skrev salmen i 1824. Den synges mest i kirken i julen.',
  },
  {
    id: 'kimer-i-klokker',
    page: 'Kimer, I klokker',
    title: 'Kimer, I klokker',
    author: 'N.F.S. Grundtvig',
    year: 1856,
    type: 'julesalme',
    composer: 'Henrik Rung, 1857',
    dds: 100,
    hsb: 246,
    expectedVerses: 3,
    extraInfo: 'Grundtvig skrev salmen i 1856. Melodien er af Henrik Rung fra 1857.',
  },
  {
    id: 'barn-jesus-i-en-krybbe-laa',
    page: 'Barn Jesus i en Krybbe laae',
    title: 'Barn Jesus i en krybbe lå',
    author: 'H.C. Andersen',
    year: 1832,
    type: 'julesalme',
    composer: 'Niels W. Gade, 1859',
    dds: 103,
    hsb: 247,
    expectedVerses: 2,
    extraInfo:
      'En af de få salmer af H.C. Andersen, skrevet i 1832. Melodien er af Niels W. Gade fra 1859. ' +
      'Teksten her har den oprindelige stavemåde fra 1832.',
  },
  {
    id: 'her-kommer-jesus-dine-smaa',
    page: 'Her kommer, Jesus, dine små',
    title: 'Her kommer, Jesus, dine små',
    author: 'H.A. Brorson',
    year: 1732,
    type: 'julesalme',
    composer: 'J.A.P. Schulz, 1786',
    dds: 123,
    expectedVerses: 9,
    extraInfo:
      'En børnesalme af Brorson fra 1732, bearbejdet i 1850. Melodien er af J.A.P. Schulz fra 1786.',
  },
  {
    id: 'den-yndigste-rose-er-funden',
    page: 'Den yndigste rose er funden',
    title: 'Den yndigste rose er funden',
    author: 'H.A. Brorson',
    year: 1732,
    type: 'julesalme',
    composer: 'Wittenberg / Joseph Klug, 1542',
    dds: 122,
    hsb: 239,
    expectedVerses: 8,
    extraInfo: 'Brorson skrev salmen i 1732. Melodien stammer fra Wittenberg og Joseph Klug, 1542.',
  },
  {
    id: 'hjerte-loeft-din-glaedes-vinger',
    page: 'Hjerte, løft din glædes vinger',
    title: 'Hjerte, løft din glædes vinger',
    author: 'Paul Gerhardt',
    translator: 'C.J. Brandt',
    year: 1878,
    type: 'julesalme',
    composer: 'Johann Crüger, 1653',
    dds: 114,
    hsb: 237,
    expectedVerses: 7,
    extraInfo:
      'C.J. Brandts danske gendigtning fra 1878 af Paul Gerhardts tyske salme fra 1653. ' +
      'Melodien er af Johann Crüger. Den Danske Salmebog har 6 af de 7 vers.',
  },
  {
    id: 'lad-det-klinge-soedt-i-sky',
    page: 'Lad det klinge sødt i sky',
    title: 'Lad det klinge sødt i sky',
    author: 'Claus Mortensen, N.F.S. Grundtvig og Thomas Laub',
    year: 1837,
    type: 'julesalme',
    composer: 'Middelalderlig (Resonet in laudibus), bearbejdet af Thomas Laub 1890',
    dds: 115,
    hsb: 244,
    expectedVerses: 3,
    extraInfo:
      'Salmen går tilbage til en latinsk tekst fra 1300-tallet. Den blev oversat af Claus Mortensen i 1529, ' +
      'gendigtet af Grundtvig i 1837 og bearbejdet af Thomas Laub i 1918.',
  },
  {
    id: 'fra-himlen-hoejt-kom-budskab-her',
    page: 'Fra himlen højt kom budskab her',
    title: 'Fra himlen højt kom budskab her',
    author: 'Martin Luther',
    translator: 'J.L.A. Kolderup-Rosenvinge',
    year: 1845,
    type: 'julesalme',
    composer: 'Tilskrevet Martin Luther, 1539',
    dds: 95,
    expectedVerses: 10,
    extraInfo:
      'Luther skrev den tyske tekst i 1535 til sine egne børn. Hans Tausen lavede en dansk udgave i 1544, ' +
      'og den nuværende tekst er Kolderup-Rosenvinges fra 1845.',
  },
  {
    id: 'et-lidet-barn-saa-lysteligt',
    page: 'Et lidet barn så lysteligt',
    title: 'Et lidet barn så lysteligt',
    author: 'Arvid Pedersen og N.F.S. Grundtvig',
    year: 1529,
    type: 'julesalme',
    composer: '1400-tallet / Joseph Klug, 1533',
    dds: 102,
    expectedVerses: 2,
    extraInfo:
      'Arvid Pedersens danske tekst fra 1529 efter en tysk original fra omkring 1400, bearbejdet af Grundtvig i 1837–1845.',
  },
  {
    id: 'en-rose-saa-jeg-skyde',
    page: 'En rose så jeg skyde',
    title: 'En rose så jeg skyde',
    author: 'Tysk, 1500-tallet',
    translator: 'Thomas Laub',
    year: 1920,
    type: 'julesalme',
    composer: 'Tysk folkemelodi, Köln 1599',
    dds: 117,
    hsb: 236,
    expectedVerses: 2,
    extraInfo:
      'Vers 1–2 er Thomas Laubs oversættelse fra 1920 af en tysk tekst i Praetorius’ udgave fra 1609. ' +
      'Salmebogens vers 3 er oversat af Uffe Hansen i 1935 og er stadig ophavsretligt beskyttet, så det er ikke med her.',
  },
  {
    id: 'boern-og-voksne-i-kaerlig-krans',
    page: 'Børn og voksne i kærlig krans',
    title: 'Børn og voksne i kærlig krans',
    author: 'Elith Reumert',
    year: 1899,
    type: 'julesang',
    composer: 'J.P.E. Hartmann',
    expectedVerses: 3,
    extraInfo:
      'En sang skrevet til at gå om juletræet. Teksten er af Elith Reumert, melodien af J.P.E. Hartmann.',
  },
];

async function fetchPage(title) {
  const url = new URL(API);
  url.search = new URLSearchParams({
    action: 'parse',
    format: 'json',
    formatversion: '2',
    redirects: '1',
    prop: 'wikitext|revid',
    page: title,
  });
  const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
  if (!res.ok) throw new Error(`${title}: HTTP ${res.status}`);
  const json = await res.json();
  if (json.error) throw new Error(`${title}: ${json.error.info}`);
  return json.parse;
}

function stripTemplates(text) {
  let prev;
  do {
    prev = text;
    text = text.replace(/\{\{[^{}]*\}\}/g, '');
  } while (text !== prev);
  return text;
}

function cleanLine(line) {
  return line
    .replace(/\[\[(?:[^|\]]*\|)?([^\]]*)\]\]/g, '$1')
    .replace(/'{2,}/g, '')
    .replace(/´/g, '’')
    .replace(/\|\|:\s*/g, '//: ')
    .replace(/\s*:\|\|/g, ' ://')
    .replace(/\/\/:\s*/g, '//: ')
    .replace(/\s*:\/\//g, ' ://')
    .replace(/\s+/g, ' ')
    .trim();
}

// Picks the lines that hold the song text, out of the whole page.
function textLines(wikitext, song) {
  let lines = stripTemplates(wikitext).split('\n');
  const rule = lines.findIndex((l) => /^-{4,}\s*$/.test(l));
  if (rule >= 0) lines = lines.slice(rule + 1);

  if (song.section) {
    const start = lines.findIndex((l) => song.section.test(l.trim()));
    lines = lines.slice(start + 1);
    const end = lines.findIndex((l) => /^==.*==$/.test(l.trim()));
    if (end >= 0) lines = lines.slice(0, end);
  } else {
    const start = lines.findIndex((l) => /^==\s*Tekst(en)?\s*==$/.test(l.trim()));
    if (start >= 0) lines = lines.slice(start + 1);
  }
  if (song.startAfter) lines = lines.slice(lines.findIndex((l) => song.startAfter.test(l)) + 1);
  if (song.stopAt) lines = lines.slice(0, lines.findIndex((l) => song.stopAt.test(l)));

  return lines.filter(
    (l) =>
      !/^\s*\[\[(Kategori|[a-z]{2,3}):/i.test(l) &&
      !/^\s*<\/?poem>\s*$/.test(l) &&
      !/^\s*(Melodien til|Den kendte melodi)/.test(l),
  );
}

// Turns the page's lines into stanzas. A blank line, a double <br>, or a bare
// verse number separates stanzas. Lines indented with ":" are the chorus.
function parseStanzas(lines) {
  const stanzas = [];
  let current = [];
  const flush = () => {
    if (current.length) stanzas.push(current);
    current = [];
  };
  for (const raw of lines) {
    const doubleBreak = /<br\s*\/?>\s*<br\s*\/?>\s*$/i.test(raw);
    const text = raw.replace(/<br\s*\/?>/gi, '');
    if (!text.trim() || /^\s*\d+\.?\s*$/.test(text)) {
      flush();
      continue;
    }
    const chorus = /^\s*:/.test(text);
    current.push({ text: cleanLine(text.replace(/^\s*:/, '')), chorus });
    if (doubleBreak) flush();
  }
  flush();
  return stanzas;
}

function buildSong(song, number, parsed) {
  const stanzas = parseStanzas(textLines(parsed.wikitext, song));

  const chorusLines = stanzas[0].filter((l) => l.chorus).map((l) => l.text);
  let verses = stanzas.map((s) => s.filter((l) => !l.chorus).map((l) => l.text));

  if (song.splitEvery) {
    const all = verses.flat();
    verses = [];
    for (let i = 0; i < all.length; i += song.splitEvery) verses.push(all.slice(i, i + song.splitEvery));
  }
  if (song.refrainLast) {
    verses = verses.map((lines) => ({
      lines: lines.slice(0, -song.refrainLast),
      refrain: lines.slice(-song.refrainLast),
    }));
  }

  const firstVerse = Array.isArray(verses[0]) ? verses[0] : verses[0].lines;
  const firstLine = song.firstLine ?? firstVerse[0].replace(/^\/\/:\s*/, '').replace(/[,;:.!]+$/, '');

  if (verses.length !== song.expectedVerses) {
    console.warn(`  ! ${song.title}: ${verses.length} verses, expected ${song.expectedVerses}`);
  }

  return {
    id: song.id,
    idNumber: number,
    title: song.title,
    firstLine,
    type: song.type,
    author: song.author,
    translator: song.translator ?? null,
    year: song.year ?? null,
    composer: song.composer ?? null,
    dds: song.dds ?? null,
    hsb: song.hsb ?? null,
    extraInfo: song.extraInfo,
    source: {
      name: 'Wikisource',
      url: `https://da.wikisource.org/w/index.php?oldid=${parsed.revid}`,
      revision: parsed.revid,
      license: 'Public domain (ophavsretsloven § 63)',
    },
    chorus: chorusLines.length ? chorusLines : null,
    verses,
  };
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Songs are numbered in Danish alphabetical order of their titles (æ, ø, å last).
const byTitle = new Intl.Collator('da').compare;
const ordered = [...SONGS].sort((a, b) => byTitle(a.title, b.title));

// The verses for "Udvalgte vers" are chosen by hand in songs/index.json, so keep
// the existing choice. New songs start with the odd-numbered verses.
const previous = new Map();
try {
  const old = JSON.parse(await readFile(new URL('index.json', OUT_DIR), 'utf8'));
  for (const s of old) previous.set(s.id, s.shortVersion);
} catch {}
const oddVerses = (count) => Array.from({ length: count }, (_, i) => i + 1).filter((n) => n % 2 === 1);

await mkdir(OUT_DIR, { recursive: true });
const index = [];
for (const [i, song] of ordered.entries()) {
  const number = i + 1;
  console.log(`${number}. ${song.title}`);
  const data = buildSong(song, number, await fetchPage(song.page));
  await writeFile(new URL(`${song.id}.json`, OUT_DIR), JSON.stringify(data, null, 2) + '\n');
  index.push({
    id: data.id,
    idNumber: data.idNumber,
    title: data.title,
    firstLine: data.firstLine,
    author: data.author,
    composer: data.composer,
    verseCount: data.verses.length,
    shortVersion: previous.get(data.id) ?? oddVerses(data.verses.length),
  });
  await sleep(1500);
}
// Keep each verse list on one line, e.g. "shortVersion": [1, 3, 5], so it is easy to edit.
const indexJson = JSON.stringify(index, null, 2).replace(
  /("shortVersion": )\[([^\]]*)\]/g,
  (_, key, inner) => `${key}[${inner.split(',').map((n) => n.trim()).filter(Boolean).join(', ')}]`,
);
await writeFile(new URL('index.json', OUT_DIR), indexJson + '\n');
console.log(`Wrote ${index.length} songs.`);
