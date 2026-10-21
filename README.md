# Carol Lyrics

A simple, phone-first browser app for showing the lyrics of Danish Christmas carols (*julesalmer og julesange*) on Christmas Eve.

## Why

On Danish Christmas Eve (*juleaften*), families join hands and walk around the Christmas tree singing carols (*at gå rundt om juletræet*). Every year the same problem comes up: not everyone knows the lyric to all the verses, and the song booklets have different versions.

This app puts the lyrics on the phone in someone's pocket. It is made for that one evening: dimmed lights, candles on the tree. The phones backlit screen and ability to zoom, pan and set font size helps with readability.

## Intended use

1. A QR code links to the app, for easy access 
1. When it is time to dance around the tree, the song leader (*forsangeren*) picks the first song from the index.
2. The screen stays on, the text is big enough to read at arm's length in candlelight, and moving to the next verse or song takes a single swipe or tap.
4. Another family member can open the same app on their phone and follow along on their own.

## Features

### Must have
- **Readable in the dark**: black and white with a green accent, following the phone's light/dark setting; high contrast, large text.
- **Adjustable text size**: pinch to zoom.
- **Screen stays awake** while a song is open (Screen Wake Lock API, where the browser supports it).
- **One-hand navigation**: swipe left/right or tap the screen edges to move between songs; scroll vertically through verses.
- **Danish UI**: all text in the app is in Danish.
- **No login, no ads, no tracking.**
- **Index page of all the Carols**

### Nice to have
- **Both title and number** for carols (some titles are quite similar)
- **Verse numbers** shown clearly, so "let's skip to verse 4" works.
- **A Short Version switch** (*Udvalgte vers* / *Alle vers*) to show only a predefined set of verses for each carol
- **Chorus** (*omkvæd*) written out in each verse as plain text, like the rest of the lyrics.
- **An info pop up** for each carol with meta data and a short story about the carol

### Not in scope
- Music, melodies or sheet music.
- User accounts or syncing between devices.

## Songs

The app ships with 21 carols, numbered in Danish alphabetical order. Their texts are imported from Danish Wikisource and are in the public domain: every author and translator died more than 70 years ago (ophavsretsloven § 63). The research behind the list, including the popular songs that had to be left out, is in [docs/research/danish-christmas-carols.md](docs/research/danish-christmas-carols.md).

| # | Title | Text |
| --- | --- | --- |
| 1 | Barn Jesus i en krybbe lå | H.C. Andersen |
| 2 | Børn og voksne i kærlig krans | Elith Reumert |
| 3 | Dejlig er den himmel blå | N.F.S. Grundtvig |
| 4 | Dejlig er jorden | B.S. Ingemann |
| 5 | Den yndigste rose er funden | H.A. Brorson |
| 6 | Det kimer nu til julefest | N.F.S. Grundtvig |
| 7 | En rose så jeg skyde (verses 1–2) | Thomas Laub |
| 8 | Et barn er født i Betlehem | N.F.S. Grundtvig |
| 9 | Et lidet barn så lysteligt | Arvid Pedersen and N.F.S. Grundtvig |
| 10 | Fra himlen højt kom budskab her | Martin Luther, Danish text J.L.A. Kolderup-Rosenvinge |
| 11 | Glade jul, dejlige jul | B.S. Ingemann |
| 12 | Her kommer, Jesus, dine små | H.A. Brorson |
| 13 | Hjerte, løft din glædes vinger | Paul Gerhardt, Danish text C.J. Brandt |
| 14 | Højt fra træets grønne top | Peter Faber |
| 15 | I denne søde juletid | H.A. Brorson |
| 16 | Julen har bragt velsignet bud | B.S. Ingemann |
| 17 | Kimer, I klokker | N.F.S. Grundtvig |
| 18 | Lad det klinge sødt i sky | Claus Mortensen, N.F.S. Grundtvig and Thomas Laub |
| 19 | Nu er det jul igen | Traditional |
| 20 | Sikken voldsom trængsel og alarm | Peter Faber |
| 21 | Velkommen igen, Guds engle små | N.F.S. Grundtvig |

### Copyright

The app is for private and non-commersial use - in the users on home: So Copyright do not apply.

In practice, a site on GitHub Pages is public, so the app only ships texts that are free of copyright. *På loftet sidder nissen* and *Nu tændes tusind julelys* are on hold until their Danish translators are identified, and verse 3 of *En rose så jeg skyde* is protected until 2065.

## Technical approach

- Plain HTML, CSS and JavaScript. No build step and no dependencies at runtime, apart from a vendored QR code generator ([vendor/qrcode.js](vendor/qrcode.js), MIT).
- Songs are stored as one data file per song in `songs/`, with title, author, translator, source and verses (with an optional info text).
- A web app manifest and a service worker make the app installable and offline-capable. Every song is cached on the first visit, so it works without signal by the tree.
- The only stored setting is the *Udvalgte vers* / *Alle vers* switch, kept in the browser's `localStorage`. Light/dark follows the system setting.
- Hosted as a static site, for example on GitHub Pages. All paths are relative, so it works from a sub-path such as `/julesangtekster/`.

### Structure

```
index.html            App shell
styles.css            Layout and light/dark theme
app.js                Navigation, wake lock, QR code
sw.js                 Service worker for offline use
manifest.webmanifest
icons/                App icons (SVG and PNG)
vendor/qrcode.js      QR code generator (Kazuhiko Arase, MIT)
songs/
  index.json          List of songs
  hoejt-fra-traeets-groenne-top.json
  ...
tools/
  import-wikisource.mjs   Imports the song texts from Wikisource
  serve.mjs               Small static server for local testing
```

### How the app is used

- **Index:** a list of all songs in alphabetical order, numbered 1–21, under the title *Juletræssange*. Swiping on a song page follows the same order.
- **Udvalgte vers / Alle vers:** the switch under the title picks whether song pages show only the selected verses (left) or every verse (right). The choice is remembered on the phone. Verse numbers keep their original numbering, so skipped verses are visible as gaps.
- **Song:** swipe left/right, or tap the left or right edge of the text, to change song. ☰ at the top left goes back to the index.
- **Pinch** to make the text bigger. While the page is zoomed, swiping is turned off so you can pan.
- **ⓘ** at the top right shows facts and a short story about the song.
- **QR code** at the bottom of the index points to the app's address, so the rest of the family can scan it and open the app.

### Song file format

```json
{
  "id": "glade-jul",
  "idNumber": 11,
  "title": "Glade jul, dejlige jul",
  "firstLine": "Glade jul, dejlige jul",
  "type": "julesalme",
  "author": "B.S. Ingemann",
  "translator": null,
  "year": 1850,
  "composer": "Franz Xaver Gruber, 1818",
  "dds": 120,
  "hsb": 249,
  "extraInfo": "Ingemanns tekst er skrevet til …",
  "source": { "name": "Wikisource", "url": "https://da.wikisource.org/w/index.php?oldid=36046", "revision": 36046, "license": "…" },
  "chorus": null,
  "verses": [
    ["line 1", "line 2", "line 3", "line 4"],
    { "lines": ["line 1", "line 2"], "refrain": ["refrain line"] }
  ]
}
```

- `verses`: each verse is a list of lines, or an object with `lines` and a verse-specific `refrain`. Refrain lines are shown as ordinary lines.
- `chorus`: lines repeated after every verse (*omkvæd*), shown as ordinary lines, or `null`.
- The verses for *Udvalgte vers* are not in the song file; they are the `shortVersion` list in `songs/index.json` (see below).
- Repeats are written `//: … ://` (and may span several lines); the app writes the marked lines out twice.
- `composer`: who wrote the melody, in Danish (shown as *Melodi* in the info pop-up). Sources are in [docs/research/carol-melody-composers.md](docs/research/carol-melody-composers.md).
- `dds` and `hsb` are the numbers in *Den Danske Salmebog* and *Højskolesangbogen*.

## Running locally

The app has to be served over HTTP (not opened as a file). The repo has a tiny server with no dependencies:

```bash
node tools/serve.mjs
```

It prints the address on your network, which you can open on a phone on the same Wi-Fi. Any other static server, such as `npx serve .`, works too.

Browsers only run service workers on `localhost` or over HTTPS, so offline mode and installing to the home screen work on the hosted HTTPS site, not on a phone pointed at your computer's IP address.

When you change the app shell (HTML, CSS or JS), bump `VERSION` in [sw.js](sw.js) so installed copies pick up the change.

## Adding a song

- **From Wikisource:** add an entry to `SONGS` in [tools/import-wikisource.mjs](tools/import-wikisource.mjs) and run `node tools/import-wikisource.mjs`. This rewrites every song file and `songs/index.json`, and warns if a verse count does not match `expectedVerses`.
- **By hand:** add a JSON file to `songs/` using the format above, and add the song to `songs/index.json` (`id`, `idNumber`, `title`, `firstLine`, `author`, `composer`, `verseCount`, `shortVersion`).

### Choosing the verses for *Udvalgte vers*

Each entry in `songs/index.json` has a `shortVersion` list with the verse numbers to show when the switch is on *Udvalgte vers*, for example `"shortVersion": [1, 3, 5, 7]`. To start with, every song uses its odd-numbered verses; edit the lists by hand to pick better ones. Re-running the importer keeps your lists, and new songs start with their odd verses.

Only add songs whose text is in the public domain, or that you have permission to publish.
