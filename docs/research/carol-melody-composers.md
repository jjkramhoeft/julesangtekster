# Melody composers of the 21 carols in the app

Research date: 2026-10-21. Scope: who wrote the **melody** of each of the 21 songs in `songs/index.json`, in what year, which alternative melodies the hymnals print, and where attributions are disputed.

> **No lyrics in this file.** It contains only titles, credits and links.

Conventions (same as [danish-christmas-carols.md](danish-christmas-carols.md)):

- **DDS** = *Den Danske Salmebog*. **HSB** = *Højskolesangbogen*, 19th edition. **Koralbog** = *Koralbog til Den Danske Salmebog 2003*.
- **FK** = the hymn pages on folkekirken.dk. These are the Danish church's own pages. Each one shows the DDS number and a "Mel.:" credit, lists alternative melodies, links to DDS Online, and cites Jørgen Kjærgaard's *Salmehåndbog* bd. 2 (Det Kgl. Vajsenhus), the official commentary on DDS 2002 ([FK 99][fk-velkommen]). I use FK in place of DDS Online (see "Source access" below).
- **Unverified** means I couldn't confirm it in a primary or high-trust source.
- Composer life dates come from lex.dk (Den Store Danske) unless another source is cited.

---

## 1. Summary

- **All 21 melodies have a credit.** 18 are confirmed by at least two independent sources, such as FK or HSB together with Wikisource. Three have only weaker support:
  - **#2 Børn og voksne i kærlig krans:** the composer is confirmed, the year is not.
  - **#19 Nu er det jul igen:** it is a folk melody, but its age is unconfirmed.
  - **#20 Sikken voldsom trængsel og alarm:** the composer is disputed.
- **Named 19th-century Danish composers wrote 9 of the 21 melodies,** or 10 counting Berggreen's arrangement in #8. Some of them wrote more than one:
  - C.C.N. Balle: 2 (#6, #15)
  - C.E.F. Weyse: 1, plus an alternative melody for #3 and #21
  - A.P. Berggreen: 1, plus one adaptation (#8)
  - Emil Horneman, Niels W. Gade, Henrik Rung, J.P.E. Hartmann and J.G. Meidell: 1 each
- **Most of the rest are older German melodies.** They come from the Reformation period, or are anonymous folk tunes (Silesian, Cologne). Two foreign composers are named: Johann Crüger (German, 1653) and Franz Gruber (Austrian, 1818). The German-born J.A.P. Schulz, who worked in Copenhagen, wrote one (1786).
- **"Klug", "Schumann", "Lossius" and "Köln" usually name a printed source, not a composer.**
  - Hymnals write credits like "Wittenberg / Joseph Klug 1542" or "Valentin Schumann 1539". These name the hymnal or printer where the melody first appears.
  - HSB says the *Den yndigste rose* melody "is found in" Joseph Klug's *Geistliche Lieder* of 1542 ([HSB 239][hsb-rose]).
  - Hymnology Archive identifies Valten Schumann as the *publisher* of the 1539 Leipzig hymnal in which the *Vom Himmel hoch* tune first appeared. It attributes the tune itself to Luther ([Hymnology Archive][ha-vomhimmel]).
  - The table keeps the hymnals' wording.
- **Five hymns have more than one melody in the hymnals: #3, #8, #9, #15 and #21.** For three of them, HSB or FK says which melody is most used:
  - #3: Meidell's
  - #8: Berggreen's
  - #21: Berggreen's
  - No source specifically says which melody is used *around the tree*.
- **One real dispute: #20 *Sikken voldsom trængsel og alarm*.** It is often credited to Emil Horneman. Wikisource and a University of Copenhagen musicologist quoted in Kristeligt Dagblad (2024) credit Adolf Müller, from Nestroy's *Lumpazivagabundus* (1833). Horneman published the sheet music ([Wikisource][ws-sikken]; [KD 2024][kd2024]).

### Source access on 2026-10-21

- **dendanskesalmebogonline.dk was blocked.** Every page, including the mobile site, returned a bot-check (CAPTCHA) redirect, so I couldn't re-read DDS's own melody credits.
  - The official folkekirken.dk pages cover 13 of the 18 DDS hymns. The Koralbog's alphabetical register covers melody counts.
  - DDS 102, 109 and 115 (#9, #15, #18) are not on folkekirken.dk. For those, the earlier note's DDS readings are reported, and marked as not re-checked.
- **Det Kgl. Bibliotek was down for maintenance** (from 15:45 on 21/10, back the morning of 22/10). Its Hartmann works catalogue (HartW) couldn't be searched for #2.
- **hymnary.org tune pages returned HTTP 403** to scripted requests. Two person pages were read through a fetch tool.

---

## 2. Table

| # | Title | Melody by | Year | Alternatives in the hymnals | Sources |
|---|---|---|---|---|---|
| 1 | Barn Jesus i en krybbe lå | Niels W. Gade (1817–1890) | 1859 | none | [FK 103][fk-barnjesus], [HSB 247][hsb-barnjesus], [WS][ws-barnjesus], [lex][lex-gade] |
| 2 | Børn og voksne i kærlig krans | J.P.E. Hartmann (1805–1900) | **unverified** (probably 1888) | – | [WS][ws-boern], [DFI][dfi-boern], [lex][lex-hartmann] |
| 3 | Dejlig er den himmel blå | Jacob G. Meidell (dates **unverified**) | c. 1840 | C.E.F. Weyse (c. 1837); Thomas Laub (1917; WS says 1914) | [FK 136][fk-himmel], [HSB 264][hsb-himmel], [WS][ws-himmel], [Koralbog][koral] |
| 4 | Dejlig er jorden | Silesian folk melody | 18th c. | none | [FK 121][fk-jorden], [HSB 56][hsb-jorden], [WS][ws-jorden] |
| 5 | Den yndigste rose er funden | German; "Wittenberg / Joseph Klug" (from Klug's *Geistliche Lieder*) | 1542 | none | [FK 122][fk-rose], [HSB 239][hsb-rose], [WS][ws-rose-funden] |
| 6 | Det kimer nu til julefest | C.C.N. Balle (1806–1855) | 1850 | none in DDS; HSB says it has been sung to other melodies | [FK 94][fk-kimernu], [HSB 241][hsb-kimernu], [WS][ws-kimernu], [hymnary][hymnary-balle] |
| 7 | En rose så jeg skyde | German folk melody, Köln (Cologne) | 1599 | none | [FK 117][fk-roseskyde], [HSB 236][hsb-roseskyde], [WS][ws-rose-skyde] |
| 8 | Et barn er født i Betlehem | German song c. 1600, arranged by A.P. Berggreen (1801–1880) | 1849 | 15th-c. melody / Lossius 1553 (the original *Puer natus* melody) | [FK 104][fk-etbarn], [HSB 242][hsb-etbarn], [Koralbog][koral], [lex julemusik][lex-julemusik] |
| 9 | Et lidet barn så lysteligt | 15th-c. melody / Joseph Klug | 1533 | C.C.N. Balle, 1855 (the one on Wikisource) | [Koralbog][koral], [WS][ws-lidetbarn]; DDS 102 not re-checked |
| 10 | Fra himlen højt kom budskab her | "Valentin Schumann 1539" (the *Vom Himmel hoch* tune, attributed to Martin Luther, 1483–1546) | 1539 | none | [FK 95][fk-frahimlen], [WS][ws-frahimlen], [Hymnology Archive][ha-vomhimmel], [HSB 241][hsb-kimernu] |
| 11 | Glade jul, dejlige jul | Franz Xaver Gruber (1787–1863) | 1818 | none | [FK 120][fk-glade], [HSB 249][hsb-glade], [WS][ws-glade], [lex][lex-gruber] |
| 12 | Her kommer, Jesus, dine små | J.A.P. Schulz (1747–1800) | 1786 | none | [FK 123][fk-herkommer], [WS][ws-herkommer], [lex][lex-schulz] |
| 13 | Hjerte, løft din glædes vinger | Johann Crüger (1598–1662) | 1653 | none | [FK 114][fk-hjerte], [HSB 237][hsb-hjerte], [WS][ws-hjerte], [lex][lex-cruger] |
| 14 | Højt fra træets grønne top | Emil Horneman (1809–1870) | 1848 | none | [HSB 260][hsb-hoejt], [WS][ws-hoejt], [KD 2024][kd2024], [lex][lex-horneman] |
| 15 | I denne søde juletid | C.C.N. Balle (1806–1855) | 1855 | 15th-c. melody / Klug 1533 (shared with #9) | [HSB 238][hsb-soede], [WS][ws-soede], [Koralbog][koral]; DDS 109 not re-checked |
| 16 | Julen har bragt velsignet bud | C.E.F. Weyse (1774–1842) | 1841 | none | [FK 119][fk-bragt], [HSB 248][hsb-bragt], [WS][ws-bragt], [lex][lex-weyse] |
| 17 | Kimer, I klokker | Henrik Rung (1807–1871) | 1857 | none | [FK 100][fk-kimeri], [HSB 246][hsb-kimeri], [WS][ws-kimeri], [lex][lex-rung] |
| 18 | Lad det klinge sødt i sky | Medieval carol (*Resonet in laudibus*, 13th–14th c.), printed by Joseph Klug; arranged by Thomas Laub 1890 | 1543 | none | [HSB 244][hsb-klinge], [WS][ws-klinge], [Koralbog][koral], [lex julemusik][lex-julemusik] |
| 19 | Nu er det jul igen | Swedish/Danish folk melody | **unverified** | – | [WS][ws-nuerdet]; weak: [da.wikipedia][wp-nuerdet], [sv.wikipedia][svwp-nuardet] |
| 20 | Sikken voldsom trængsel og alarm | **Disputed.** Adolf Müller sen. (1801–1886), from Nestroy's *Lumpazivagabundus*, vs. Emil Horneman | 1833 (Müller) | – | [WS][ws-sikken], [KD 2024][kd2024], [ÖML][oeml-mueller] |
| 21 | Velkommen igen, Guds engle små | A.P. Berggreen (1801–1880) | 1832 | C.E.F. Weyse, 1838 | [FK 99][fk-velkommen], [HSB 243][hsb-velkommen], [WS][ws-velkommen], [Koralbog][koral] |

---

## 3. Per-song notes (only where needed)

#### 2. Børn og voksne i kærlig krans
- **Composer:** Wikisource names J.P.E. Hartmann ([WS][ws-boern]). So does the Danish Film Institute's music database, for the 1934 film *Nøddebo Præstegaard* ([DFI][dfi-boern]).
- **Year: unverified.**
  - DFI gives the text as 1899. It gives the melody as "1988", which must be a typo because Hartmann died in 1900 ([DFI][dfi-boern]; [lex][lex-hartmann]).
  - Search-engine summaries of da.wikipedia say the song was written for the play *Nøddebo Præstegård*, first performed on 26 December 1888 at Folketeatret (weak, not read directly).
  - Wikisource dates the text "ca. 1888" ([WS][ws-boern]), which contradicts the app's year of 1899.
- **To confirm:** Det Kgl. Bibliotek's HartW catalogue (kb.dk/dcm/hartw) was offline on the research date.

#### 3. Dejlig er den himmel blå
- **Three melodies.** FK lists Weyse (c. 1837), Meidell (c. 1840) and Laub (1917) ([FK 136][fk-himmel]). The Koralbog register also has three entries: Weyse, Meidell and Laub ([Koralbog][koral]). Wikisource gives notation for all three ([WS][ws-himmel]).
- **Most used:** Meidell's. HSB says Weyse and Laub both wrote good melodies, but Meidell's has completely taken the lead. It is the only melody in HSB ([HSB 264][hsb-himmel]).
- **Date conflicts:**
  - Wikisource dates Meidell's melody 1846. FK and HSB say c. 1840.
  - Wikisource dates Laub's melody 1914. FK says 1917.
  - The FK/HSB dates are used here.
- **Meidell:** FK calls him "Jacob G. Meidell". Hymnary.org gives "Meidell, Jacob Gerhard" with no dates ([hymnary][hymnary-meidell]). HSB says he is known only for this one melody ([HSB 264][hsb-himmel]). His life dates are **unverified**. Secondary web sources suggest 1778–1857, but I found no primary confirmation.

#### 5. Den yndigste rose er funden and 18. Lad det klinge sødt i sky
- **"Klug" is a printed source, not a composer.** Joseph Klug was a Wittenberg printer. HSB says the *Den yndigste rose* melody "is found in" Klug's *Geistliche Lieder*, 1542 ([HSB 239][hsb-rose]), and Wikisource says the same ([WS][ws-rose-funden]).
- **Danmarkshistorien says "composed by" Klug.** Its transcription page (Aarhus University) describes the music as composed by Joseph Klug in 1542 ([danmarkshistorien][dkh-rose]). That wording is looser than the hymnals' credit.
- **Lad det klinge sødt i sky:**
  - HSB says the melody is a 13th–14th-century carol, credits it as "Joseph Klug, 1543", and says Thomas Laub arranged it in 1890 ([HSB 244][hsb-klinge]).
  - Wikisource and lex.dk identify it as the *Resonet in laudibus* melody ([WS][ws-klinge]; [lex julemusik][lex-julemusik]).
  - The earlier note read DDS 115 as "pre-Reformation, Joseph Klug 1543". That reading was not re-checked.

#### 6. Det kimer nu til julefest
- HSB says the hymn has been sung to several melodies. Balle's (1850) is the most used ([HSB 241][hsb-kimernu]).
- HSB thinks Grundtvig probably wrote it for the *Fra himlen højt* melody (Schumann, 1539) ([HSB 241][hsb-kimernu]).
- The Koralbog register has only one entry, presumably Balle's ([Koralbog][koral]).

#### 7. En rose så jeg skyde
- The melody comes from Köln, 1599 ([FK 117][fk-roseskyde]; [HSB 236][hsb-roseskyde]).
- HSB notes that Praetorius' *Musae Sioniae* (1609) has the melody too, and calls it folk in origin ([HSB 236][hsb-roseskyde]).
- Wikisource writes "Cöln, 1599" and says it couldn't establish whether "Cöln" is a place or a person ([WS][ws-rose-skyde]). FK and HSB both treat it as the city.

#### 8. Et barn er født i Betlehem
- **Two melodies.** FK lists two: "15. årh./Lossius 1553" and "Tysk vise omkring 1600/A.P. Berggreen 1849" ([FK 104][fk-etbarn]). The Koralbog register has the same two ([Koralbog][koral]).
- **The familiar melody is Berggreen's.** HSB prints only Berggreen's 1849 arrangement of the German folk song. It says the medieval *Puer natus* melody is hardly used any more ([HSB 242][hsb-etbarn]). Lex.dk also credits Berggreen, 1849, based on a 17th-century German song melody ([lex julemusik][lex-julemusik]).
- **Wikisource disagrees in its details.** Its credit field says "Ukendt", and its intro calls the melody 17th-century German ([WS][ws-etbarn]).

#### 9. Et lidet barn så lysteligt and 15. I denne søde juletid
- **These two hymns share the same pair of melodies.** Wikisource says so on both pages ([WS 9][ws-lidetbarn]; [WS 15][ws-soede]). The Koralbog indexes the pair once, as "Et lidet barn så lysteligt (Melodi fra 15. årh. / Klug)" and "Et lidet barn så lysteligt (Balle)" ([Koralbog][koral]). That explains why *I denne søde juletid* has no entry of its own.
- **Which melody each hymn is sung to:**
  - *I denne søde juletid*: Balle's 1855 melody, according to HSB and Wikisource ([HSB 238][hsb-soede]; [WS][ws-soede]). HSB prints only this one.
  - *Et lidet barn så lysteligt*: the Koralbog lists the 15th-c./Klug melody first. Wikisource gives Balle's ([WS][ws-lidetbarn]).
- **DDS readings not re-checked.** The earlier note read DDS 102 and DDS 109 as giving both melodies, but in opposite order. DDS 102 has 15th c./Klug 1533 first and Balle 1855 second. DDS 109 has Balle 1855 first and 15th c./Klug 1533 second.
- **Balle's dates** come from the header of his hymnary.org page (1806–1855). The biography text on the same page says 1885 once, which looks like a typo ([hymnary][hymnary-balle]).

#### 10. Fra himlen højt kom budskab her
- **The credit names a printer.** FK and Wikisource give "Valentin Schumann 1539" ([FK 95][fk-frahimlen]; [WS][ws-frahimlen]).
- **Schumann published the hymnal.** Hymnology Archive says the *Vom Himmel hoch* tune first appeared in Valten Schumann's *Geistliche Lieder* (Leipzig, 1539). It attributes the tune to Luther on stylistic grounds, though not with certainty ([Hymnology Archive][ha-vomhimmel]).
- **Lex.dk agrees.** Its entry on Christmas music says Luther wrote both the text and the melody of *Vom Himmel hoch* ([lex julemusik][lex-julemusik]).

#### 12. Her kommer, Jesus, dine små
- The credit "J.A.P. Schulz 1786" is in both FK and Wikisource ([FK 123][fk-herkommer]; [WS][ws-herkommer]).
- I found no independent source that dates the melody to 1786. Schulz worked in Copenhagen from 1787 as court Kapellmeister ([lex][lex-schulz]).
- The melody's original German song is not identified here (**unverified**). Don't assume it is the *Ihr Kinderlein, kommet* tune (1794): no source links the two.

#### 14. Højt fra træets grønne top
- Horneman wrote the melody in 1848 ([HSB 260][hsb-hoejt]; [KD 2024][kd2024]; [WS][ws-hoejt]).
- Faber's family first sang the 1847 text to an existing melody. Faber then asked Horneman for an original one ([HSB 260][hsb-hoejt]; [KD 2024][kd2024]).

#### 19. Nu er det jul igen
- Wikisource credits a "Svensk/dansk folkemelodi" ([WS][ws-nuerdet]). Swedish Wikipedia gives the composer as unknown and the melody as "folkmelodi" ([sv.wikipedia][svwp-nuardet], weak). No one claims a named composer.
- **The melody's age is unverified.**
  - Danish Wikipedia's infobox says "before 1700". Its text says the melody is known from 18th-century singing games. Neither claim has its own source ([da.wikipedia][wp-nuerdet], weak).
  - Swedish Wikipedia links to a c. 1840 manuscript notation by Nils Johan Nyberg in Svenskt visarkiv. I didn't open that record.
- **App text to check:** the app's `extraInfo` for this song repeats the "sanglege i 1700-tallet" claim. That claim rests only on Danish Wikipedia.

#### 20. Sikken voldsom trængsel og alarm (disputed)
- **Adolf Müller.**
  - Wikisource credits Adolf Müller. It explains that the melody comes from the 1833 Viennese magic play *Der böse Geist Lumpacivagabundus*, by Johann Nestroy with music by Müller, with small changes and a middle section cut in the Danish version ([WS][ws-sikken]).
  - Kristeligt Dagblad (21 Dec 2024) quotes Jens Hesselager, a musicologist at the University of Copenhagen. He says the melody is by the Austrian composer Adolf Müller, and that crediting Horneman is wrong ([KD 2024][kd2024]).
  - Müller's dates are 7 Oct 1801 – 29 Jul 1886 ([Österreichisches Musiklexikon][oeml-mueller]). That lexicon confirms he wrote stage music for Nestroy, but doesn't name *Lumpazivagabundus* specifically.
- **Emil Horneman.**
  - The melody "is often" credited to Horneman, or to Faber himself ([WS][ws-sikken]).
  - Horneman published the song with piano accompaniment through his firm Horneman & Erslev ([WS][ws-sikken]; [KD 2024][kd2024]). That is a likely source of the attribution.
  - Wikisource says it's unknown whether Faber, or Faber with Horneman's help, adapted the melody for the Danish text ([WS][ws-sikken]).
- **Verdict:** the original melody is Müller's (1833). Any Danish adaptation is of unknown authorship. The song isn't in DDS or HSB, so no hymnal credit was available to check.

#### 21. Velkommen igen, Guds engle små
- **Two melodies.** FK lists Berggreen (1832) and Weyse (1838) ([FK 99][fk-velkommen]). HSB prints both, Berggreen's as the a-melody and Weyse's as the b-melody ([HSB 243][hsb-velkommen]). The Koralbog register has both ([Koralbog][koral]).
- **Most used:** Berggreen's. HSB calls it "den mest kendte og anvendte" (the best known and most used) and says it suits community singing. It says Weyse's suits choirs ([HSB 243][hsb-velkommen]).
- **Weyse's version began as a choral piece.** Lex.dk lists *Velkommen igen Guds engle små* among Weyse songs originally written for choir ([lex][lex-weyse]).
- **Wikisource's main credit** is Weyse 1838, with Berggreen 1832 as a second notation ([WS][ws-velkommen]).

---

## 4. Unverified items

1. **#2 Børn og voksne i kærlig krans:** the year of Hartmann's melody. It is probably 1888, for *Nøddebo Præstegård*. Check Det Kgl. Bibliotek's HartW catalogue once it is back online.
2. **#3 Dejlig er den himmel blå:** Jacob Gerhard Meidell's life dates. Also the exact years of Meidell's melody (c. 1840 vs. 1846) and Laub's (1917 vs. 1914).
3. **#19 Nu er det jul igen:** the age and origin of the folk melody ("before 1700" and "18th-century singing games" come only from Danish Wikipedia). Also the c. 1840 Nyberg notation in Svenskt visarkiv, which I didn't open.
4. **#12 Her kommer, Jesus, dine små:** the year 1786. It comes from FK and Wikisource, both probably derived from DDS. I found no independent musicological source.
5. **#9, #15 and #18:** DDS 102, 109 and 115 couldn't be re-read because of the bot check. The melody credits here rest on HSB, Wikisource and the Koralbog register.
6. **#20 Sikken voldsom trængsel og alarm:** I found no primary music source, such as Müller's 1833 score or Horneman & Erslev's print, that settles who adapted the melody for the Danish text.
7. **C.C.N. Balle's death year.** The hymnary.org header says 1855, but its biography says 1885 once. No lex.dk article for him was found.
8. **Lossius 1553 (#8):** presumably Lucas Lossius' *Psalmodia*. This identification is my inference, not stated by FK.

---

## 5. Sources

### Official hymnal pages (folkekirken.dk)
Each page gives the DDS number, a "Mel.:" credit and any alternative melodies, and cites J. Kjærgaard, *Salmehåndbog* bd. 2 (Det Kgl. Vajsenhus).
- `fk-barnjesus`: <https://www.folkekirken.dk/tro/salmer/barn-jesus-i-en-krybbe-laa> (DDS 103)
- `fk-himmel`: <https://www.folkekirken.dk/tro/salmer/dejlig-er-den-himmel-blaa> (DDS 136)
- `fk-jorden`: <https://www.folkekirken.dk/tro/salmer/dejlig-er-jorden> (DDS 121)
- `fk-rose`: <https://www.folkekirken.dk/tro/salmer/den-yndigste-rose-er-funden> (DDS 122)
- `fk-kimernu`: <https://www.folkekirken.dk/tro/salmer/det-kimer-nu-til-julefest> (DDS 94)
- `fk-roseskyde`: <https://www.folkekirken.dk/tro/salmer/en-rose-saa-jeg-skyde> (DDS 117)
- `fk-etbarn`: <https://www.folkekirken.dk/tro/salmer/et-barn-er-foedt-i-betlehem> (DDS 104)
- `fk-frahimlen`: <https://www.folkekirken.dk/tro/salmer/fra-himlen-hoejt-kom-budskab-her> (DDS 95)
- `fk-glade`: <https://www.folkekirken.dk/tro/salmer/glade-jul-dejlige-jul> (DDS 120)
- `fk-herkommer`: <https://www.folkekirken.dk/tro/salmer/her-kommer-jesus-dine-smaa> (DDS 123)
- `fk-hjerte`: <https://www.folkekirken.dk/tro/salmer/hjerte-loeft-din-glaedes-vinger> (DDS 114)
- `fk-bragt`: <https://www.folkekirken.dk/tro/salmer/julen-har-bragt-velsignet-bud> (DDS 119)
- `fk-kimeri`: <https://www.folkekirken.dk/tro/salmer/kimer-i-klokker-ja-kimer-foer-dag-i-det-dunkle> (DDS 100)
- `fk-velkommen`: <https://www.folkekirken.dk/tro/salmer/velkommen-igen-guds-engle-smaa> (DDS 99)

### Koralbog
- `koral`: <http://www.thor-callesen.com/koralbog/pdf/reg_kds.pdf>. This is the alphabetical register of *Koralbog til Den Danske Salmebog 2003*, hosted on an organist's private site. Use it for melody counts and names only.

### Højskolesangbogen (story pages, "Fakta om" box)
Base: `https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/`
- `hsb-barnjesus`: `…/a-c/barn-jesus-i-en-krybbe-laa` (247)
- `hsb-himmel`: `…/d/dejlig-er-den-himmel-blaa` (264)
- `hsb-jorden`: `…/d/dejlig-er-jorden` (56)
- `hsb-rose`: `…/d/den-yndigste-rose-er-funden` (239)
- `hsb-kimernu`: `…/d/det-kimer-nu-til-julefest` (241)
- `hsb-roseskyde`: `…/e-g/en-rose-saa-jeg-skyde` (236)
- `hsb-etbarn`: `…/e-g/et-barn-er-foedt-i-betlehem` (242)
- `hsb-glade`: `…/e-g/glade-jul` (249–251)
- `hsb-hjerte`: `…/h-i/hjerte-loeft-din-glaedes-vinger` (237)
- `hsb-hoejt`: `…/h-i/hoejt-fra-traeets-groenne-top` (260)
- `hsb-soede`: `…/h-i/i-denne-soede-juletid` (238)
- `hsb-bragt`: `…/j-l/julen-har-bragt-velsignet-bud` (248)
- `hsb-kimeri`: `…/j-l/kimer-i-klokker` (246)
- `hsb-klinge`: `…/j-l/lad-det-klinge-soedt-i-sky` (244)
- `hsb-velkommen`: `…/v/velkommen-igen-guds-engle-smaa` (243)

### Wikisource (da), "Sang Infomation" Komponist field
These are the exact revisions the app imported, read via the MediaWiki API.
- `ws-barnjesus` (oldid 40829), `ws-boern` (84226), `ws-himmel` (431199), `ws-jorden` (35365), `ws-rose-funden` (34249), `ws-kimernu` (35361), `ws-rose-skyde` (431254), `ws-etbarn` (35721), `ws-lidetbarn` (431260), `ws-frahimlen` (431273), `ws-glade` (36046), `ws-herkommer` (36930), `ws-hjerte` (431320), `ws-hoejt` (35519), `ws-soede` (37604), `ws-bragt` (66021), `ws-kimeri` (431366), `ws-klinge` (431379), `ws-nuerdet` (431428), `ws-sikken` (67490), `ws-velkommen` (431568)

### Encyclopedias and reference
- `lex-julemusik`: <https://lex.dk/julemusik> (Den Store Danske, "julemusik")
- Composer articles with life dates:
  - `lex-gade`: <https://lex.dk/Niels_W._Gade>
  - `lex-hartmann`: <https://lex.dk/J.P.E._Hartmann>
  - `lex-weyse`: <https://lex.dk/C.E.F._Weyse>
  - `lex-rung`: <https://lex.dk/Henrik_Rung>
  - `lex-horneman`: <https://lex.dk/Emil_Horneman>
  - `lex-schulz`: <https://lex.dk/Johann_Abraham_Peter_Schulz>
  - `lex-gruber`: <https://lex.dk/Franz_Xaver_Gruber>
  - `lex-cruger`: <https://lex.dk/Johann_Cr%C3%BCger>
  - `lex-berggreen`: <https://lex.dk/A.P._Berggreen>
  - `lex-laub`: <https://lex.dk/Thomas_Laub>
- `dkh-rose`: <https://danmarkshistorien.lex.dk/Transskription_Julesalmen_%E2%80%9CDen_yndigste_rose_er_funden%E2%80%9D> (danmarkshistorien.dk, Aarhus University)
- `oeml-mueller`: <https://www.musiklexikon.ac.at/ml/musik_M/Mueller_Familie_1.xml> (Österreichisches Musiklexikon, Müller family; Adolf Müller sen.)
- `hymnary-balle`: <https://hymnary.org/person/Balle_CCN>
- `hymnary-meidell`: <https://hymnary.org/person/Meidell_Jacob>
- `ha-vomhimmel`: <https://www.hymnologyarchive.com/vom-himmel-hoch> (Hymnology Archive, C. Fenner et al., 2024)

### Press and databases
- `kd2024`: <https://www.kristeligt-dagblad.dk/kultur/nodehandleren-fra-amagertorv-satte-musik-til-borgerskabets-julefest> (Kristeligt Dagblad, M. Mikkelsen, 21 Dec 2024, quoting J. Hesselager, University of Copenhagen)
- `dfi-boern`: <https://www.dfi.dk/viden-om-film/filmdatabasen/musik/198> (Danish Film Institute, Filmdatabasen)

### Weak (Wikipedia; only where nothing better was found)
- `wp-nuerdet`: <https://da.wikipedia.org/wiki/Nu_er_det_jul_igen>
- `svwp-nuardet`: <https://sv.wikipedia.org/wiki/Nu_%C3%A4r_det_jul_igen>

### Not reachable on 2026-10-21
- Den Danske Salmebog Online (`https://www.dendanskesalmebogonline.dk/salme/{nr}`): bot-check redirect.
- Det Kgl. Bibliotek, HartW catalogue (`https://www.kb.dk/dcm/hartw/`): maintenance outage.

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
[koral]: http://www.thor-callesen.com/koralbog/pdf/reg_kds.pdf
[hsb-barnjesus]: https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/a-c/barn-jesus-i-en-krybbe-laa
[hsb-himmel]: https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/d/dejlig-er-den-himmel-blaa
[hsb-jorden]: https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/d/dejlig-er-jorden
[hsb-rose]: https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/d/den-yndigste-rose-er-funden
[hsb-kimernu]: https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/d/det-kimer-nu-til-julefest
[hsb-roseskyde]: https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/e-g/en-rose-saa-jeg-skyde
[hsb-etbarn]: https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/e-g/et-barn-er-foedt-i-betlehem
[hsb-glade]: https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/e-g/glade-jul
[hsb-hjerte]: https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/h-i/hjerte-loeft-din-glaedes-vinger
[hsb-hoejt]: https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/h-i/hoejt-fra-traeets-groenne-top
[hsb-soede]: https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/h-i/i-denne-soede-juletid
[hsb-bragt]: https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/j-l/julen-har-bragt-velsignet-bud
[hsb-kimeri]: https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/j-l/kimer-i-klokker
[hsb-klinge]: https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/j-l/lad-det-klinge-soedt-i-sky
[hsb-velkommen]: https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/v/velkommen-igen-guds-engle-smaa
[ws-barnjesus]: https://da.wikisource.org/w/index.php?oldid=40829
[ws-boern]: https://da.wikisource.org/w/index.php?oldid=84226
[ws-himmel]: https://da.wikisource.org/w/index.php?oldid=431199
[ws-jorden]: https://da.wikisource.org/w/index.php?oldid=35365
[ws-rose-funden]: https://da.wikisource.org/w/index.php?oldid=34249
[ws-kimernu]: https://da.wikisource.org/w/index.php?oldid=35361
[ws-rose-skyde]: https://da.wikisource.org/w/index.php?oldid=431254
[ws-etbarn]: https://da.wikisource.org/w/index.php?oldid=35721
[ws-lidetbarn]: https://da.wikisource.org/w/index.php?oldid=431260
[ws-frahimlen]: https://da.wikisource.org/w/index.php?oldid=431273
[ws-glade]: https://da.wikisource.org/w/index.php?oldid=36046
[ws-herkommer]: https://da.wikisource.org/w/index.php?oldid=36930
[ws-hjerte]: https://da.wikisource.org/w/index.php?oldid=431320
[ws-hoejt]: https://da.wikisource.org/w/index.php?oldid=35519
[ws-soede]: https://da.wikisource.org/w/index.php?oldid=37604
[ws-bragt]: https://da.wikisource.org/w/index.php?oldid=66021
[ws-kimeri]: https://da.wikisource.org/w/index.php?oldid=431366
[ws-klinge]: https://da.wikisource.org/w/index.php?oldid=431379
[ws-nuerdet]: https://da.wikisource.org/w/index.php?oldid=431428
[ws-sikken]: https://da.wikisource.org/w/index.php?oldid=67490
[ws-velkommen]: https://da.wikisource.org/w/index.php?oldid=431568
[lex-julemusik]: https://lex.dk/julemusik
[lex-gade]: https://lex.dk/Niels_W._Gade
[lex-hartmann]: https://lex.dk/J.P.E._Hartmann
[lex-weyse]: https://lex.dk/C.E.F._Weyse
[lex-rung]: https://lex.dk/Henrik_Rung
[lex-horneman]: https://lex.dk/Emil_Horneman
[lex-schulz]: https://lex.dk/Johann_Abraham_Peter_Schulz
[lex-gruber]: https://lex.dk/Franz_Xaver_Gruber
[lex-cruger]: https://lex.dk/Johann_Cr%C3%BCger
[lex-berggreen]: https://lex.dk/A.P._Berggreen
[lex-laub]: https://lex.dk/Thomas_Laub
[dkh-rose]: https://danmarkshistorien.lex.dk/Transskription_Julesalmen_%E2%80%9CDen_yndigste_rose_er_funden%E2%80%9D
[oeml-mueller]: https://www.musiklexikon.ac.at/ml/musik_M/Mueller_Familie_1.xml
[hymnary-balle]: https://hymnary.org/person/Balle_CCN
[hymnary-meidell]: https://hymnary.org/person/Meidell_Jacob
[ha-vomhimmel]: https://www.hymnologyarchive.com/vom-himmel-hoch
[kd2024]: https://www.kristeligt-dagblad.dk/kultur/nodehandleren-fra-amagertorv-satte-musik-til-borgerskabets-julefest
[dfi-boern]: https://www.dfi.dk/viden-om-film/filmdatabasen/musik/198
[wp-nuerdet]: https://da.wikipedia.org/wiki/Nu_er_det_jul_igen
[svwp-nuardet]: https://sv.wikipedia.org/wiki/Nu_%C3%A4r_det_jul_igen
