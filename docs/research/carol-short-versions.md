# Short versions of the 21 carols ("Udvalgte vers")

Research date: 2026-10-21. Scope: for each of the 21 songs in `songs/index.json`, which verses Danes sing when they use a shortened version (songbook versions that leave verses out, church practice, singing around the tree). The result is a proposed `shortVersion` list per song for the app's "Udvalgte vers" mode.

> **No lyrics in this file.** Verses are identified only by number and a few opening words.

Conventions (same as [danish-christmas-carols.md](danish-christmas-carols.md) and [carol-melody-composers.md](carol-melody-composers.md)):

- **App verse N** = index N-1 in the song's `verses` array in `songs/<id>.json`. All lists below use app numbering. Where a source numbers verses differently, the mapping is given.
- **DDS** = *Den Danske Salmebog*. **HSB** = *Højskolesangbogen*, 19th edition. **FK** = the hymn pages on folkekirken.dk, used in place of DDS Online.
- **Source** = a printed songbook or hymnal version documents the shortened version. **All** = the song is short and nobody documents skipping verses, so the whole song is proposed. **Editorial, no source** = no source documents a common short version, so the selection is my own reasoned choice.
- **Unverified** means I couldn't confirm it in a primary or high-trust source.

---

## 1. Summary

- **The app's verse counts match the song files.** All 21 counts in the task list match the `verses` arrays.
- **Only two songs have a documented short version that differs from the app's full text:**
  - **#14 *Højt fra træets grønne top*:** HSB leaves out verses 6 and 7 ([HSB 260][hsb-hoejt]). Proposed `[1, 2, 3, 4, 5, 8]`.
  - **#13 *Hjerte, løft din glædes vinger*:** DDS 114 and HSB 237 print a 6-verse form ([FK 114][fk-hjerte]; [HSB 237][hsb-hjerte]). It contains app verses 1, 3, 5, 6 and 7 and leaves out app verses 2 and 4. Its 6th verse, a closing call to praise, is **not in the app's Wikisource text**. Proposed `[1, 3, 5, 6, 7]`.
- **The hymnals already print most long songs in shortened form.** The app has those same versions, so they give no further shortening:
  - *Dejlig er den himmel blå* has 7 verses, from Grundtvig's 19 ([FK 136][fk-himmel]; [HSB 264][hsb-himmel]).
  - *Det kimer nu til julefest* has 9, from 24 in 1817 ([HSB 241][hsb-kimernu]).
  - *Den yndigste rose er funden* has 8, from Brorson's 11 ([HSB 239][hsb-rose]).
  - DDS/FK print every verse of the other long hymns that the app has: *Et barn er født* (10), *Fra himlen højt* (10), *Her kommer, Jesus* (9) and *Velkommen igen* (8) ([FK][fk-etbarn]).
- **No source documents a standard short version of a long song for church or family use.**
  - The FK and HSB pages say nothing about which verses are usually sung or skipped.
  - The tree-song surveys report only which songs are sung, not which verses ([KD 2007][kd2007]; [DR 2024][dr2024]).
  - A popular family songbook, *ALT for damerne* 2014 (republished on alt.dk in 2021), prints **every** verse of *Et barn er født* (10), *Dejlig er den himmel blå* (7), *Det kimer nu* (9), *Højt fra træets grønne top* (all 8, including 6–7) and *Sikken voldsom trængsel* (7) ([ALT 2014][alt2014]).
  - The only remark on family practice is in a parish magazine. Writing about *Dejlig er jorden*, *Et barn er født* and *Det kimer nu* around the tree, it says: "Måske kun første og sidste vers, så vi kan komme i gang med julegaverne" ([Gedsted-Fjelsø 2022][gedsted]). This is anecdotal, not a documented norm.
- **Result:**
  - 2 lists come from a source.
  - 10 short songs (2–4 verses) keep **all** verses.
  - 9 long songs get an **editorial, no source** selection. Each keeps verse 1 and the closing verse, plus the verses the story needs.

---

## 2. Table

| # | Title | App verses | Proposed `shortVersion` | Basis | Sources |
|---|---|---|---|---|---|
| 1 | Barn Jesus i en krybbe lå | 2 | `[1, 2]` | All. Short, no skipping documented. | [FK 103][fk-barnjesus]; [HSB 247][hsb-barnjesus] (both print 2) |
| 2 | Børn og voksne i kærlig krans | 3 | `[1, 2, 3]` | All. Short, no skipping documented. | [Wikisource][ws-boern] |
| 3 | Dejlig er den himmel blå | 7 | `[1, 2, 6, 7]` | **Editorial, no source** | [FK 136][fk-himmel]; [HSB 264][hsb-himmel] (both print all 7) |
| 4 | Dejlig er jorden | 3 | `[1, 2, 3]` | All. Short. Only an anecdotal "first and last" remark ([Gedsted-Fjelsø][gedsted]). | [FK 121][fk-jorden] |
| 5 | Den yndigste rose er funden | 8 | `[1, 2, 3, 7, 8]` | **Editorial, no source** | [FK 122][fk-rose]; [HSB 239][hsb-rose] (both print 8) |
| 6 | Det kimer nu til julefest | 9 | `[1, 2, 3, 6, 9]` | **Editorial, no source.** Keeps the first and last verse, as the anecdotal remark suggests ([Gedsted-Fjelsø][gedsted]). | [FK 94][fk-kimernu]; [HSB 241][hsb-kimernu]; [ALT 2014][alt2014] (all print 9) |
| 7 | En rose så jeg skyde | 2 | `[1, 2]` | All. DDS verse 3 is still protected and isn't in the app. | [FK 117][fk-roseskyde] |
| 8 | Et barn er født i Betlehem | 10 | `[1, 2, 3, 4, 5, 10]` | **Editorial, no source** | [FK 104][fk-etbarn]; [HSB 242][hsb-etbarn]; [ALT 2014][alt2014] (all print 10) |
| 9 | Et lidet barn så lysteligt | 2 | `[1, 2]` | All. Short. | DDS 102 (2 verses, per [earlier note](danish-christmas-carols.md)) |
| 10 | Fra himlen højt kom budskab her | 10 | `[1, 2, 3, 4, 9, 10]` | **Editorial, no source** | [FK 95][fk-frahimlen] (prints 10) |
| 11 | Glade jul, dejlige jul | 4 | `[1, 2, 3, 4]` | All. Short. | [FK 120][fk-glade] |
| 12 | Her kommer, Jesus, dine små | 9 | `[1, 2, 3, 6, 9]` | **Editorial, no source** | [FK 123][fk-herkommer] (prints 9) |
| 13 | Hjerte, løft din glædes vinger | 7 | `[1, 3, 5, 6, 7]` | **Source:** DDS 114 / HSB 237 6-verse form, mapped to app numbering | [FK 114][fk-hjerte]; [HSB 237][hsb-hjerte] |
| 14 | Højt fra træets grønne top | 8 | `[1, 2, 3, 4, 5, 8]` | **Source:** HSB 260 leaves out verses 6–7 | [HSB 260][hsb-hoejt] |
| 15 | I denne søde juletid | 7 | `[1, 2, 5, 7]` | **Editorial, no source** | [HSB 238][hsb-soede] (prints 7) |
| 16 | Julen har bragt velsignet bud | 3 | `[1, 2, 3]` | All. Short. | [FK 119][fk-bragt] |
| 17 | Kimer, I klokker | 3 | `[1, 2, 3]` | All. Short. | [FK 100][fk-kimeri]; [HSB 246][hsb-kimeri] |
| 18 | Lad det klinge sødt i sky | 3 | `[1, 2, 3]` | All. Short. | [HSB 244][hsb-klinge] |
| 19 | Nu er det jul igen | 2 | `[1, 2]` | All. Short (traditional 2-verse version). | [Wikisource][ws-nuerdet] |
| 20 | Sikken voldsom trængsel og alarm | 7 | `[1, 3, 4, 7]` | **Editorial, no source** | [ALT 2014][alt2014] (prints 7) |
| 21 | Velkommen igen, Guds engle små | 8 | `[1, 2, 3, 8]` | **Editorial, no source** | [FK 99][fk-velkommen]; [HSB 243][hsb-velkommen] (both print 8) |

---

## 3. Per-song notes

### Lists based on a source

#### 13. Hjerte, løft din glædes vinger: `[1, 3, 5, 6, 7]`
- **History:**
  - Paul Gerhardt's original has 15 verses.
  - C.J. Brandt's Danish text had 9.
  - HSB once printed 7.
  - From the 18th edition on, HSB "is brought into line with" the DDS 2002 form ([HSB 237][hsb-hjerte]).
  - FK (DDS 114) prints 6 verses ([FK 114][fk-hjerte]).
- **Mapping:** I compared the verse content on FK and HSB with the app text. The app has 7 verses, from Wikisource.

  | DDS/HSB verse | App verse | Opening |
  |---|---|---|
  | 1 | 1 | "Hjerte, løft …" |
  | 2 | 3 | "Gud, vor fader …" |
  | 3 | 5 | "I, som tunge stier …" |
  | 4 | 6 | "Er I fattige …" |
  | 5 | 7 | "Nu, så lad til ham …" |
  | 6 | none | a closing call to fellow Christians to praise, not in the app text |

- **Left out of DDS/HSB:** app verse 2 ("Guddoms-helten …") and app verse 4 ("I et krybberum …").
- **Caveat:** the mapping rests on content summaries of the FK and HSB pages. DDS Online itself was behind a CAPTCHA (see section 4).

#### 14. Højt fra træets grønne top: `[1, 2, 3, 4, 5, 8]`
- HSB leaves out verses 6 and 7, which mention the baby William and the grandfather ([HSB 260][hsb-hoejt]).
- The app numbering is the same as the original's: 6 = "Træets allerbedste zir …", 7 = "O, hvor den er blød og rar …".
- Counter-evidence: the *ALT for damerne* family songbook prints all 8 ([ALT 2014][alt2014]). So families who use other printings may sing all of them.

### Short songs: all verses

- **#1, #2, #4, #7, #9, #11, #16, #17, #18, #19** have 2–4 verses, and no source documents skipping any of them.
  - The current placeholders drop verses, for example `[1]` for *Barn Jesus*, which drops half the song. They should become the full list.
- **#4 *Dejlig er jorden*:** the parish magazine's "maybe only first and last verse" remark ([Gedsted-Fjelsø][gedsted]) is an aside, not a documented practice. Ingemann's three verses are also short.
- **#7 *En rose så jeg skyde*:** DDS 117 has 3 verses. Verse 3 (Uffe Hansen, 1935) is still protected and isn't in the app ([earlier note](danish-christmas-carols.md)). Both of the app's verses are kept.
- **#19 *Nu er det jul igen*:** the app has the traditional 2-verse text, not the 5-verse extended version.

### Editorial selections (no source)

Principle: always keep verse 1 and the closing or doxology verse. Never drop a verse that the next kept verse depends on, for example one starting "Da …", "Så …" or "Men …" that continues the one before it. Aim for roughly half to two-thirds of the song.

| # | Proposed | Dropped | Reasoning (one line) |
|---|---|---|---|
| 3 Dejlig er den himmel blå | `[1, 2, 6, 7]` | 3, 4, 5 | Verse 6 ("Stjernen ledte vise mænd …") retells the wise men's journey in one verse, so 3–5 can go and the sky → star → wise men → God's word arc stays whole. HSB notes the address to the children sits in the last two verses ([HSB 264][hsb-himmel]). |
| 5 Den yndigste rose | `[1, 2, 3, 7, 8]` | 4, 5, 6 | Verse 3 ("Da lod Gud en rose …") answers verse 2 (the fall), so both stay. 4–6 are a connected rebuke-and-repent sequence. 7–8 are the personal ending. |
| 6 Det kimer nu | `[1, 2, 3, 6, 9]` | 4, 5, 7, 8 | 4→5 ("Men verdens ære …") is a linked pair, and 7–8 are Old Testament typology. Keeps bells → shepherds → manger → "Velan, min sjæl" → closing prayer, including first and last ([Gedsted-Fjelsø][gedsted]). |
| 8 Et barn er født | `[1, 2, 3, 4, 5, 10]` | 6, 7, 8, 9 | Verses 6–9 are one continuous heavenly vision, with 7–9 starting "På …"/"Guds engle der …"/"Da …". They can only go as a block. 1–5 tell the Christmas story, and 10 is the doxology. |
| 10 Fra himlen højt | `[1, 2, 3, 4, 9, 10]` | 5, 6, 7, 8 | Keeps the announcement, the sign and the walk with the shepherds (1–4), then the prayer (9) and the doxology (10). 7→8 ("Således …") is a linked pair, so both go. |
| 12 Her kommer, Jesus | `[1, 2, 3, 6, 9]` | 4, 5, 7, 8 | Verse 5 ("Men, Jesus, ak …") answers 4, and 8 ("Så skal det ske …") answers 7, so each pair goes together. Verse 6 ("Så drag os …") follows naturally after the welcome in 3. |
| 15 I denne søde juletid | `[1, 2, 5, 7]` | 3, 4, 6 | Verses 3 ("Vor tak vi vil …"), 4 and 6 are elaborations; no kept verse depends on them. Verse 5 ("Som natten aldrig er så sort …") stands alone and ends with the angels' song. Verse 7 is Brorson's 1739 Halleluja verse ([HSB 238][hsb-soede]). |
| 20 Sikken voldsom trængsel | `[1, 3, 4, 7]` | 2, 5, 6 | Keeps the Christmas Eve story: street → tree → evening → closing "rør blot ikke ved min gamle jul". Verse 2 is topical 1848 references, and 5–6 move on to Christmas morning and the days after. |
| 21 Velkommen igen | `[1, 2, 3, 8]` | 4, 5, 6, 7 | Verses 4–7 are one chain (the children → "Så drømme de …" → "Da vågne de …" → "Da vandre Guds engle …"). It can't be cut part-way. Verse 8 ("O, måtte vi …") is the closing prayer. The alternative that keeps the chain is `[1, 4, 5, 6, 7, 8]`. |

---

## 4. Source access on 2026-10-21

- **DDS Online returned a CAPTCHA** (`SG-Captcha: challenge`), so DDS verse counts come from FK. FK doesn't cover DDS 102 (#9) or 109 (#15). For those, HSB and the earlier note are used.
- **hojskolesangbogen.dk story pages** were read for #1, #3, #5, #6, #8, #13, #14, #15, #17 and #21. The URL letter groups are irregular (`a-c`, `d`, `e-g`, `h-i`, `j-l`, `v`).
- **The *ALT for damerne* 2014 songbook** is a scanned PDF linked from the alt.dk article. I checked the verse counts visually from the page images.

---

## 5. Unverified items

1. **Whether families actually skip verses 6–7 of *Højt fra træets grønne top*.** HSB does, the ALT family songbook doesn't, and no survey covers it.
2. **The exact DDS 114 verse order** (#13). It is inferred from FK and HSB content summaries. DDS Online itself wasn't reachable.
3. **The text of DDS/HSB verse 6 of *Hjerte, løft*.** It is not in the app's Wikisource source, and whether it is Brandt's (PD) is unverified. If it is added later, it should go into `shortVersion` too.
4. **That the app's 8 verses of *Den yndigste rose* are the same 8 as DDS 122 / HSB 239.** The counts match, but I didn't compare them verse by verse.
5. **Any church guidance** (diocese, folkekirken.dk, Kristeligt Dagblad) on which verses of the long hymns are usually sung on Christmas Eve. None was found. All 9 editorial lists are unverified as "common practice".
6. **The "first and last verse" family habit.** It comes from one parish magazine aside ([Gedsted-Fjelsø][gedsted]), not a survey.

---

## 6. Sources

### Hymnals and songbooks
- `fk-*`: folkekirken.dk hymn pages (DDS text and number):
  - `fk-barnjesus`: <https://www.folkekirken.dk/tro/salmer/barn-jesus-i-en-krybbe-laa> (DDS 103)
  - `fk-himmel`: <https://www.folkekirken.dk/tro/salmer/dejlig-er-den-himmel-blaa> (DDS 136, 7 verses)
  - `fk-jorden`: <https://www.folkekirken.dk/tro/salmer/dejlig-er-jorden> (DDS 121)
  - `fk-rose`: <https://www.folkekirken.dk/tro/salmer/den-yndigste-rose-er-funden> (DDS 122, 8 verses)
  - `fk-kimernu`: <https://www.folkekirken.dk/tro/salmer/det-kimer-nu-til-julefest> (DDS 94, 9 verses)
  - `fk-roseskyde`: <https://www.folkekirken.dk/tro/salmer/en-rose-saa-jeg-skyde> (DDS 117)
  - `fk-etbarn`: <https://www.folkekirken.dk/tro/salmer/et-barn-er-foedt-i-betlehem> (DDS 104, 10 verses)
  - `fk-frahimlen`: <https://www.folkekirken.dk/tro/salmer/fra-himlen-hoejt-kom-budskab-her> (DDS 95, 10 verses)
  - `fk-glade`: <https://www.folkekirken.dk/tro/salmer/glade-jul-dejlige-jul> (DDS 120)
  - `fk-herkommer`: <https://www.folkekirken.dk/tro/salmer/her-kommer-jesus-dine-smaa> (DDS 123, 9 verses)
  - `fk-hjerte`: <https://www.folkekirken.dk/tro/salmer/hjerte-loeft-din-glaedes-vinger> (DDS 114, 6 verses)
  - `fk-bragt`: <https://www.folkekirken.dk/tro/salmer/julen-har-bragt-velsignet-bud> (DDS 119)
  - `fk-kimeri`: <https://www.folkekirken.dk/tro/salmer/kimer-i-klokker-ja-kimer-foer-dag-i-det-dunkle> (DDS 100)
  - `fk-velkommen`: <https://www.folkekirken.dk/tro/salmer/velkommen-igen-guds-engle-smaa> (DDS 99, 8 verses)
- `hsb-*`: Højskolesangbogen "Historier om sangene" (base `https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/`):
  - `hsb-hoejt`: `…/h-i/hoejt-fra-traeets-groenne-top` (leaves out verses 6–7)
  - `hsb-hjerte`: `…/h-i/hjerte-loeft-din-glaedes-vinger` (15 → 9 → 7 → DDS 2002 form)
  - `hsb-himmel`: `…/d/dejlig-er-den-himmel-blaa` (19 → 7)
  - `hsb-kimernu`: `…/d/det-kimer-nu-til-julefest` (24 → 9)
  - `hsb-rose`: `…/d/den-yndigste-rose-er-funden` (11 → 8: original verses 1, 2, 4, 6, 7, 8, 11 plus one composite verse)
  - `hsb-etbarn`: `…/e-g/et-barn-er-foedt-i-betlehem` (all 10)
  - `hsb-soede`: `…/h-i/i-denne-soede-juletid` (6 + praise verse = 7)
  - `hsb-velkommen`: `…/v/velkommen-igen-guds-engle-smaa` (8)
  - `hsb-kimeri`: `…/j-l/kimer-i-klokker` (3)
  - `hsb-klinge`: `…/j-l/lad-det-klinge-soedt-i-sky` (3)
  - `hsb-barnjesus`: `…/a-c/barn-jesus-i-en-krybbe-laa` (2)
- `alt2014`: *ALT for damerne* julesanghæfte 2014, PDF linked from <https://www.alt.dk/bolig/danske-julesange-julesanghaefte-til-juleaften/1697439> (23 Dec 2021). Prints all verses of the songs checked.

### Practice and surveys
- `gedsted`: *Kirkebladet Gedsted-Fjelsø* nr. 1, Dec 2022–Feb 2023, article "Julesalmer": <https://sogn.dk/uploads/Gedsted-Fjelsoe_nr._1-2023_2.korr_03.pdf>
- `kd2007`: <https://www.kristeligt-dagblad.dk/kirke-tro/her-er-danskernes-favoritter-til-rundt-om-tr%C3%A6et> (no verse data)
- `dr2024`: <https://www.dr.dk/nyheder/kultur/hver-fjerde-af-os-danser-ikke-om-juletraeet-til-gengaeld-har-mange-faaet-nye> (no verse data)

### Texts
- `ws-boern`: <https://da.wikisource.org/wiki/B%C3%B8rn_og_voksne_i_k%C3%A6rlig_krans>
- `ws-nuerdet`: <https://da.wikisource.org/wiki/Nu_er_det_jul_igen>

[fk-barnjesus]: https://www.folkekirken.dk/tro/salmer/barn-jesus-i-en-krybbe-laa
[fk-himmel]: https://www.folkekirken.dk/tro/salmer/dejlig-er-den-himmel-blaa
[fk-jorden]: https://www.folkekirken.dk/tro/salmer/dejlig-er-jorden
[fk-rose]: https://www.folkekirken.dk/tro/salmer/den-yndigste-rose-er-funden
[fk-kimernu]: https://www.folkekirken.dk/tro/salmer/det-kimer-nu-til-julefest
[fk-roseskyde]: https://www.folkekirken.dk/tro/salmer/en-rose-saa-jeg-skyde
[fk-etbarn]: https://www.folkekirken.dk/tro/salmer/et-barn-er-foedt-i-betlehem
[fk-frahimlen]: https://www.folkekirken.dk/tro/salmer/fra-himlen-hoejt-kom-budskab-her
[fk-glade]: https://www.folkekirken.dk/tro/salmer/glade-jul-dejlige-jul
[fk-herkommer]: https://www.folkekirken.dk/tro/salmer/her-kommer-jesus-dine-smaa
[fk-hjerte]: https://www.folkekirken.dk/tro/salmer/hjerte-loeft-din-glaedes-vinger
[fk-bragt]: https://www.folkekirken.dk/tro/salmer/julen-har-bragt-velsignet-bud
[fk-kimeri]: https://www.folkekirken.dk/tro/salmer/kimer-i-klokker-ja-kimer-foer-dag-i-det-dunkle
[fk-velkommen]: https://www.folkekirken.dk/tro/salmer/velkommen-igen-guds-engle-smaa
[hsb-hoejt]: https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/h-i/hoejt-fra-traeets-groenne-top
[hsb-hjerte]: https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/h-i/hjerte-loeft-din-glaedes-vinger
[hsb-himmel]: https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/d/dejlig-er-den-himmel-blaa
[hsb-kimernu]: https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/d/det-kimer-nu-til-julefest
[hsb-rose]: https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/d/den-yndigste-rose-er-funden
[hsb-etbarn]: https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/e-g/et-barn-er-foedt-i-betlehem
[hsb-soede]: https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/h-i/i-denne-soede-juletid
[hsb-velkommen]: https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/v/velkommen-igen-guds-engle-smaa
[hsb-kimeri]: https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/j-l/kimer-i-klokker
[hsb-klinge]: https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/j-l/lad-det-klinge-soedt-i-sky
[hsb-barnjesus]: https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/a-c/barn-jesus-i-en-krybbe-laa
[alt2014]: https://www.alt.dk/bolig/danske-julesange-julesanghaefte-til-juleaften/1697439
[gedsted]: https://sogn.dk/uploads/Gedsted-Fjelsoe_nr._1-2023_2.korr_03.pdf
[kd2007]: https://www.kristeligt-dagblad.dk/kirke-tro/her-er-danskernes-favoritter-til-rundt-om-tr%C3%A6et
[dr2024]: https://www.dr.dk/nyheder/kultur/hver-fjerde-af-os-danser-ikke-om-juletraeet-til-gengaeld-har-mange-faaet-nye
[ws-boern]: https://da.wikisource.org/wiki/B%C3%B8rn_og_voksne_i_k%C3%A6rlig_krans
[ws-nuerdet]: https://da.wikisource.org/wiki/Nu_er_det_jul_igen
