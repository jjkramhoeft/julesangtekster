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
- **Readable in the dark**: dark theme by default, high contrast, large text.
- **Adjustable text size**: a plus/minus control or pinch to zoom, remembered between visits.
- **Screen stays awake** while a song is open (Screen Wake Lock API, where the browser supports it).
- **One-hand navigation**: swipe left/right or tap the screen edges to move between songs; scroll vertically through verses.
- **Danish UI**: all text in the app is in Danish.
- **No login, no ads, no tracking.**
- **Index page of all the Carols**

### Nice to have
- **Search** by title or first line.
- **Both title and number** for carols (some titles are quite similar)
- **Verse numbers** shown clearly, so "let's skip to verse 4" works.
- **A Short Version button** to easly hide a predifined set of verses for eash carol
- **Chorus** (*omkvæd*) shown in a distinct style, so it is clear when to repeat it.
- **An info pop up** for each carol with meta data and a short story about the carol

### Not in scope
- Music, melodies or sheet music.
- User accounts or syncing between devices.

## Songs

The app ships with traditional carols commonly sung around the tree, for example:

| Title | Lyrics |
| --- | --- |
| Højt fra træets grønne top | Peter Faber |
| Glade jul, dejlige jul | B.S. Ingemann |
| Dejlig er den himmel blå | N.F.S. Grundtvig |
| Et barn er født i Betlehem | Translated by N.F.S. Grundtvig |
| Det kimer nu til julefest | N.F.S. Grundtvig |
| Julen har bragt velsignet bud | B.S. Ingemann |
| I denne søde juletid | H.A. Brorson |
| Nu er det jul igen | Traditional |
| Sikken voldsom trængsel og alarm | Peter Faber |

### Copyright

The app is for private and non-commersial use - in the users on home: So Copyright do not apply.

## Technical approach

- Plain HTML, CSS and JavaScript or typeScript.
- Songs are stored as one data file per song in `songs/`, with title, author, translator, source and verses (with an optional info text).
- A web app manifest and a service worker make the app installable and offline-capable. 
- Settings (text size, tonight's programme) are stored in the browser's `localStorage`.
- Hosted as a static site, for example on GitHub Pages.

### Planned structure

```
index.html          App shell
styles.css          Layout and dark/light theme
app.js              Navigation, settings, wake lock
sw.js               Service worker for offline use
manifest.webmanifest
songs/
  index.json        List of songs
  hoejt-fra-traeets-groenne-top.json
  ...
```

### Song file format

```json
{
  "id": "glade-jul",
  "idNumber": 1,
  "title": "Glade jul, dejlige jul",
  "author": "B.S. Ingemann",
  "translator": null,
  "year": 1850,
  "extraInfo": "Skrevet Ingemann på hans præstegård i Næstved.",
  "verses": [
    ["line 1", "line 2", "line 3", "line 4"],
    ["line 1", "line 2", "line 3", "line 4"]
  ]
}
```

## Running locally

The app needs to be served over HTTP (not opened as a file) for the service worker to work. Any static file server will do, for example:

```bash
npx serve .
```

Then open the shown address on your phone, on the same network as your computer.

## Adding a song

1. Add a new JSON file to `songs/` using the format above.
2. Add the song to `songs/index.json`.
