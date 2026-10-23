# Danish Christmas carols for juleaften: catalogue and sources

Research date: 2026-10-21. Scope: the *julesalmer* and *julesange* Danes most commonly sing on Christmas Eve, especially while walking around the tree, plus where the full text of every verse is published.

> **No lyrics in this file.** It contains only titles, first lines, metadata and links. The verse texts are to be imported later from the sources linked here (see [Source suitability](#source-suitability-for-importing-verse-texts)).

Conventions:

- **DDS** = *Den Danske Salmebog*, as published on dendanskesalmebogonline.dk. The number is the hymn number.
- **HSB** = *Højskolesangbogen*, 19th edition. The number is the song number.
- **PD** = public domain in Denmark in 2026. Under ophavsretsloven § 63, protection lasts 70 years after the end of the year the author died, so an author or translator who died in **1955 or earlier** is free in 2026 ([lovguiden § 63][law63]). Under § 63, stk. 3, an anonymously published work is protected for 70 years from the end of the year it was published ([lovguiden § 63][law63]). Every author **and** translator of the text has to qualify. Melodies don't matter, because the app shows no music (see README).
- Verse counts come from the cited page. Where sources disagree, both counts are given.
- **Unverified** means I couldn't confirm it in a primary or high-trust source.

---

## 1. Summary

- **Ranking basis.** Two independent surveys produced the same ten songs:
  - **Zapera for Kristeligt Dagblad, December 2007.** 989 representative Danes. Respondents who walk around the tree on Christmas Eve were asked which songs they sing ([Kristeligt Dagblad 2007][kd2007]).
  - **PriceRunner, December 2014.** More than 2,000 respondents. Same ten songs in a different order ([PriceRunner 2014][pr2014]).
  - These ten form the **core**. Kristeligt Dagblad's editorial overview of the best-known *julesalmer* names the main church hymns in the wider set ([religion.dk][reldk]; [Kristeligt Dagblad 2017][kd2017]).
- **Catalogue size: 29 carols.** That is 10 core and 19 "and then some".
  - **26 are fully PD in 2026.**
  - **1 is partly PD.** In *En rose så jeg skyde*, verse 3 is protected until the end of 2064.
  - **2 have unconfirmed PD status** because the Danish translator is unknown or their dates are unknown: *På loftet sidder nissen* and *Nu tændes tusind julelys*. Hold both until this is resolved.
- **Surprise finding.** *Juletræet med sin pynt* (1938/39), which looks modern, is **PD since 1 January 2024**. Its author Mogens Lorentzen died 7 February 1953 ([lex.dk Lorentzen][lex-lorentzen]). *Der er noget i luften* (1911) is PD too. Vilhelm Gregersen died in 1929 ([hymnary.org][hymnary-gregersen]).
- **Best import source.** **Danish Wikisource** covers 21 of the 29. It uses modern spelling, separates stanzas with blank lines, marks the texts as PD, and has a MediaWiki API. Use **Kalliope** (reuse explicitly permitted) for original first-edition texts. Use **dendanskesalmebogonline.dk** only to *check* hymnal versions and verse counts. Its terms forbid copying.
- **Dancing around the tree is common but not universal.** In a 2024 Epinion survey for DR, 26% of those celebrating Christmas didn't expect to walk around the tree ([DR 2024][dr2024]). A 2013 YouGov survey found that 82% of Danes sing hymns at Christmas ([Bibelselskabet 2013][bibel2013]).

---

## 2. Core carols (ranked)

Ranked by the 2007 Zapera survey ([KD 2007][kd2007]). The 2014 rank comes from PriceRunner ([PR 2014][pr2014]).

| # | Title (= first line unless noted) | Type | 2007 % | 2014 rank | Text by (died) | Year | DDS | HSB | Verses | PD 2026 | Full text |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Højt fra træets grønne top | julesang | 89 % | 3 | Peter Faber (†1877) | 1847 | – | 260 | 8 (HSB: 6) | ✅ | [Wikisource][ws-hoejt], [Kalliope][kal-juletraeet] |
| 2 | Glade jul, dejlige jul | julesalme | 74 % | 9 | B.S. Ingemann (†1862) | 1850 | 120 | 249 | 4 | ✅ | [Wikisource][ws-glade], [Kalliope][kal-glade] |
| 3 | Et barn er født i Betlehem | julesalme | 70 % | 1 | N.F.S. Grundtvig (†1872), after Latin *Puer natus* | 1820/1845 | 104 | 242 | 10 | ✅ | [Wikisource][ws-etbarn] |
| 4 | Dejlig er den himmel blå | salme (Epiphany) | 62 % | 10 | N.F.S. Grundtvig (†1872) | 1810/1853 | 136 | 264 | 7 (1810 original: 19) | ✅ | [Wikisource][ws-himmel] |
| 5 | Nu er det jul igen | julesang (folk) | 56 % | 2 | Traditional; extended text attr. Mads Hansen (dates unverified) | pre-1700 tune | – | – | 2 (extended: 5) | ✅ | [Wikisource][ws-nuerdet] |
| 6 | Det kimer nu til julefest | julesalme | 53 % | 8 | N.F.S. Grundtvig (†1872) | 1817/1852 | 94 | 241 | 9 | ✅ | [Wikisource][ws-kimernu] |
| 7 | Julen har bragt velsignet bud | julesalme | 51 % | 7 | B.S. Ingemann (†1862) | 1839 | 119 | 248 | 3 | ✅ | [Wikisource][ws-bragt] |
| 8 | På loftet sidder nissen (first line: *På loftet sidder nissen med sin julegrød*) | julesang (children) | 47 % | 5 | Margrethe Munthe (†1931), Norwegian original; **Danish translator unknown** | 1911 | – | – | 3 (unverified) | ⚠️ unverified | no high-trust source found |
| 9 | Dejlig er jorden | salme | 47 % | 4 | B.S. Ingemann (†1862) | 1850 | 121 | 56 | 3 | ✅ | [Wikisource][ws-jorden] |
| 10 | Juletræet med sin pynt | julesang | 33 % | 6 | Mogens Lorentzen (†1953) | 1938/1939 | – | 259 | 5 | ✅ (since 2024) | [HSB story page][hsb-juletraeet] (shows text; not a PD source) |

All ten were reported as songs sung while walking around the tree ([KD 2007][kd2007]). Regional favourites in 2014 ([PR 2014][pr2014]):

- Sønderjylland: *Højt fra træets grønne top*
- Copenhagen: *Et barn er født i Betlehem*
- Rest of Sjælland: *Nu er det jul igen*

## 3. "And then some" (wider set)

These aren't in the survey top ten. Most are hymns that Kristeligt Dagblad lists as most often sung at church Christmas services ([religion.dk][reldk]) or that appear in the DDS "Jul" section ([DDS Jul list][dds-jul]).

| # | Title (= first line unless noted) | Type / typical use | Text by (died) | Year | DDS | HSB | Verses | PD 2026 | Full text |
|---|---|---|---|---|---|---|---|---|---|
| 11 | I denne søde juletid | julesalme; listed in project README | H.A. Brorson (†1764) | 1732/1739 | 109 | 238 | 7 | ✅ | [Wikisource][ws-soede], [Kalliope (1732)][kal-soede] |
| 12 | Sikken voldsom trængsel og alarm | julesang; listed in project README | Peter Faber (†1877) | 1848 | – | – | 7 | ✅ | [Wikisource][ws-sikken], [Kalliope][kal-julestemning] |
| 13 | Velkommen igen, Guds engle små | julesalme (church) | N.F.S. Grundtvig (†1872) | 1824 | 99 | 243 | 8 | ✅ | [Wikisource][ws-velkommen] |
| 14 | Kimer, I klokker (first line: *Kimer, I klokker! ja, kimer før dag i det dunkle*) | julesalme | N.F.S. Grundtvig (†1872) | 1856 | 100 | 246 | 3 | ✅ | [Wikisource][ws-kimeri] |
| 15 | Barn Jesus i en krybbe lå | julesalme | H.C. Andersen (†1875) | 1832 | 103 | 247 | 2 | ✅ | [Wikisource][ws-barnjesus] (1832 spelling) |
| 16 | Her kommer, Jesus, dine små | julesalme (children) | H.A. Brorson (†1764), revised 1850 | 1732 | 123 | – | 9 | ✅ | [Wikisource][ws-herkommer], [Kalliope (1732)][kal-herkommer] |
| 17 | Mit hjerte altid vanker | julesalme (often 2nd Christmas Day) | H.A. Brorson (†1764) | 1732 | 125 | 240 | 9 | ✅ | [Kalliope (1732)][kal-mithjerte] (not on Wikisource) |
| 18 | Den yndigste rose er funden | julesalme (church) | H.A. Brorson (†1764) | 1732 | 122 | 239 | 8 | ✅ | [Wikisource][ws-rose-funden], [Kalliope (1732)][kal-rose] |
| 19 | Hjerte, løft din glædes vinger | julesalme (church) | Paul Gerhardt; Danish text C.J. Brandt (†1889) | 1653/1878 | 114 | 237 | DDS 6, Wikisource 7 | ✅ | [Wikisource][ws-hjerte] |
| 20 | Julen har englelyd | julesalme (church) | Grundtvig (†1872), Ingemann (†1862) | 1837/1851/1854 | 118 | 245 | 3 | ✅ | not on Wikisource; [HSB story][hsb-englelyd] shows text |
| 21 | Lad det klinge sødt i sky | julesalme | Latin 14th c., Claus Mortensen, Grundtvig, Thomas Laub (†1927) | 1529–1918 | 115 | 244 | 3 | ✅ | [Wikisource][ws-klinge] |
| 22 | Fra Himlen højt kom budskab her | julesalme | Luther; Danish J.L.A. Kolderup-Rosenvinge (†1850) | 1535/1845 | 95 | – | 10 | ✅ | [Wikisource][ws-frahimlen] |
| 23 | Et lidet barn så lysteligt | julesalme | Arvid Pedersen 1529; Grundtvig (†1872) | 1529–1845 | 102 | – | 2 | ✅ | [Wikisource][ws-lidetbarn] |
| 24 | Lovet være du, Jesus Krist | julesalme | Luther, Claus Mortensen (?), Grundtvig (†1872) | 1523–1845 | 108 | 235 | 6 | ✅ | DDS only (view-only); not on Wikisource |
| 25 | Venner! sagde Guds engel blidt | julesalme (church) | N.F.S. Grundtvig (†1872) | 1846/1857 | 105 | – | 5 | ✅ | DDS only (view-only); not on Wikisource |
| 26 | Der er noget i luften | Advent/Christmas song | Vilhelm Gregersen (†1929) | 1911 | – | 232 | 4 | ✅ | no PD full-text source found (unverified) |
| 27 | En rose så jeg skyde | julesalme | Th. Laub (†1927) v.1–2; **Uffe Hansen (†1994) v.3** | 1920/1935 | 117 | 236 | 3 (2 PD) | ⚠️ partial | [Wikisource][ws-rose-skyde] (v.1–2 only) |
| 28 | Nu tændes tusind julelys | julesang | Emmy Köhler (†1925); Danish: **Linda Lehun (dates unknown)** | 1898 | – | 255 | 4 | ⚠️ unverified | hold until translator is cleared |
| 29 | Børn og voksne i kærlig krans | tree song (niche) | Elith Reumert (†1934) | 1899 | – | – | 3 | ✅ | [Wikisource][ws-boern] |

---

## 4. Per-carol details

Every fact below is followed by its source. "DDS page" means the hymn's own page on dendanskesalmebogonline.dk.

### Core

#### 1. Højt fra træets grønne top
- **Type:** julesang. Sung while walking around the tree ([KD 2007][kd2007]). HSB says Horneman's melody reflects the new custom of dancing around the tree ([HSB story][hsb-hoejt]).
- **Text:** Peter Faber, Christmas 1847. He wrote it as an occasional song for his own family ([HSB story][hsb-hoejt]; [lex.dk Faber][lex-faber]). Original title "Juletræet" ([da.wikipedia][wp-hoejt]). It was printed in *Viser og Vers* (1877) ([Kalliope][kal-juletraeet]). Faber lived 1810–1877 ([lex.dk Faber][lex-faber]).
- **Melody:** Emil Horneman (1809–1870), 1848 ([lex.dk Horneman][lex-horneman]; [HSB story][hsb-hoejt]).
- **Verses:** 8 in the original ([HSB story][hsb-hoejt]; [Wikisource][ws-hoejt]). **HSB leaves out verses 6 and 7**, which mention the baby William and the grandfather ([HSB story][hsb-hoejt]). Expect families to skip these two as well (unverified).
- **Numbers:** HSB 260 ([HSB list][hsb-list]). Not in DDS.
- **PD:** yes. Author died 1877.
- **Full text:**
  - [Wikisource][ws-hoejt] (8 stanzas, blank-line separated, PD notice).
  - [Kalliope][kal-juletraeet] (1877 *Viser og Vers* text).

#### 2. Glade jul, dejlige jul
- **Type:** julesalme. Sung around the tree ([KD 2007][kd2007]) and often closes the Christmas Eve service ([religion.dk][reldk]).
- **Text:** B.S. Ingemann, 1850 (DDS also lists 1852) ([DDS 120][dds120]). DDS credits Ingemann alone, with no translator. Ingemann lived 1789–1862 ([lex.dk Ingemann][lex-ingemann]).
- **Melody:** Franz Gruber, 1818 ([DDS 120][dds120]).
- **Verses:** 4 ([DDS 120][dds120]; [Wikisource][ws-glade]).
- **Numbers:** DDS 120, HSB 249 ([HSB list][hsb-list]).
- **PD:** yes.
- **Full text:** [Wikisource][ws-glade]; [Kalliope][kal-glade]; DDS 120 (view only).

#### 3. Et barn er født i Betlehem
- **Type:** julesalme. Ranked first for dancing around the tree in 2014 ([PR 2014][pr2014]) and named as a tree favourite by [religion.dk][reldk].
- **Text:** N.F.S. Grundtvig, 1820 and 1845, after the Latin *Puer natus* (14th c.) and earlier Danish versions from 1544 and 1569 ([DDS 104][dds104]). Grundtvig lived 1783–1872 ([lex.dk Grundtvig][lex-grundtvig]).
- **Melody:** 15th century / Lossius 1553. Alternative: German folk tune / A.P. Berggreen 1849 ([DDS 104][dds104]).
- **Verses:** 10, each with a refrain line ([DDS 104][dds104]; [Wikisource][ws-etbarn]).
- **Numbers:** DDS 104, HSB 242 ([HSB list][hsb-list]).
- **PD:** yes.
- **Full text:** [Wikisource][ws-etbarn]; DDS 104 (view only).

#### 4. Dejlig er den himmel blå
- **Type:** an Epiphany hymn in DDS's "Helligtrekonger" section ([DDS 136][dds136]), but a tree favourite ([KD 2007][kd2007]; [religion.dk][reldk]).
- **Text:** N.F.S. Grundtvig, 1810. Shortened by Grundtvig himself in 1853 ([DDS 136][dds136]; [HSB story][hsb-himmel]).
- **Melody:** J.G. Meidell, c. 1840, is the HSB melody. Alternatives are C.E.F. Weyse (c. 1837) and Thomas Laub (1917) ([DDS 136][dds136]; [HSB story][hsb-himmel]).
- **Verses:** 7 in the 1853/hymnal version. The 1810 original has 19 ([Wikisource][ws-himmel], which has both versions; [religion.dk][reldk]).
- **Numbers:** DDS 136, HSB 264 ([HSB list][hsb-list]).
- **PD:** yes.
- **Full text:** [Wikisource][ws-himmel]. Import the "kort udgave fra 1853" section.

#### 5. Nu er det jul igen
- **Type:** folk *julesang*. Often sung while dancing around the tree, at a brisk pace ([en.wikipedia][enwp-nuardet]; [KD 2007][kd2007]).
- **Text:** traditional and anonymous. The tune is known from 18th-century singing games and is dated "before 1700" ([da.wikipedia][wp-nuerdet]). A longer version, "Nu har vi jul igen", is attributed to the Funen folk poet Mads Hansen of Vester Skerninge ([da.wikipedia][wp-nuerdet]; [Wikisource][ws-nuerdet]).
  - **Unverified:** Mads Hansen's dates. A Danish Wikipedia article on a poet Mads Hansen gives 1834–1880, but it doesn't link him to this song, so he may be a different person ([da.wikipedia Mads Hansen][wp-madshansen]). Wikisource marks the text PD-old-70 ([Wikisource][ws-nuerdet]).
- **Melody:** Swedish/Danish folk melody ([Wikisource][ws-nuerdet]).
- **Verses:** traditional version 2 stanzas. Extended version 5 ([Wikisource][ws-nuerdet]).
- **Numbers:** not in DDS. Not in HSB 19 ([HSB list][hsb-list]).
- **PD:** yes. The traditional text is anonymous and centuries old. The extended text is very likely PD, but its author's dates are unverified.
- **Full text:** [Wikisource][ws-nuerdet] (both versions).

#### 6. Det kimer nu til julefest
- **Type:** julesalme. Sung around the tree ([KD 2007][kd2007]) and often opens the Christmas Eve service ([religion.dk][reldk]).
- **Text:** N.F.S. Grundtvig, 1817, revised 1852, inspired by Luther 1535 ([DDS 94][dds94]).
- **Melody:** C.C.N. Balle, 1850 ([DDS 94][dds94]).
- **Verses:** 9 ([DDS 94][dds94]; [Wikisource][ws-kimernu]; [HSB story][hsb-kimernu]).
- **Numbers:** DDS 94, HSB 241.
- **PD:** yes.
- **Full text:** [Wikisource][ws-kimernu] (page title "Det kimer nu").

#### 7. Julen har bragt velsignet bud
- **Type:** julesalme written for children. Sung around the tree ([KD 2007][kd2007]; [HSB story][hsb-bragt]).
- **Text:** B.S. Ingemann, 1839 ([DDS 119][dds119]). It was commissioned by the Fenger family in Lynge ([religion.dk][reldk]).
- **Melody:** C.E.F. Weyse, 1841 ([DDS 119][dds119]).
- **Verses:** 3. Ingemann wrote six short verses, and Weyse merged them into three when he set the melody ([HSB story][hsb-bragt]).
- **Numbers:** DDS 119, HSB 248.
- **PD:** yes.
- **Full text:** [Wikisource][ws-bragt].

#### 8. På loftet sidder nissen
- **First line:** *På loftet sidder nissen med sin julegrød*.
- **Type:** children's *julesang*. Sung around the tree ([KD 2007][kd2007]). In 2014 it was the second favourite in Sønderjylland ([PR 2014][pr2014]).
- **Text:** Norwegian original by Margrethe Munthe (1860–1931), "Nissen og rotterne", published 1911 in *Saa leker vi litt!* ([no.wikipedia][nowp-nissen]; [snl.no][snl-munthe]; [da.wikipedia][wp-nissen]).
- **Danish translator: unknown/unverified.** No source names one ([no.wikipedia][nowp-nissen]; [da.wikipedia][wp-nissen]; [duda.dk][duda-nissen]).
- **Melody:** from the Berlin song "Holzauktion" (1892), by Franz Meißner, often credited to Otto Teich ([no.wikipedia][nowp-nissen]; [da.wikipedia][wp-nissen]).
- **Verses:** the Danish text is set out as 3 stanzas on [duda.dk][duda-nissen] (secondary source, unverified).
- **PD:** **unverified.** Munthe's original is PD. The status of the Danish text depends on its unknown translator. If it was published anonymously before 1956, it is PD under § 63, stk. 3 ([lovguiden § 63][law63]). **Recommendation:** don't ship it until the translator or first Danish printing is found. Det Kgl. Bibliotek's catalogue is the place to check.
- **Full text:** no high-trust source found. Only lyric aggregator sites.
- **Update 2026-10-23: added to the app.** The Norwegian original is on [Norwegian Wikisource][nows-nissen] (revision 5784), marked as Munthe's text. A Danish blog says the Danish text changes only a few words (*loftet* for *låven*). It says no Danish author has put their name to it, and that it is printed in *De små synger* ([jenscornelius.dk][jc-nissen]). *De små synger* was first published in 1948 ([da.wikipedia][wp-desmaa]), but it is unconfirmed that the song is in the first edition. On that basis the Danish text is treated as an anonymous adaptation of a PD text. Still open: a confirmed Danish printing before 1956.

#### 9. Dejlig er jorden
- **Type:** salme in DDS's "Jesu fødsel" section ([DDS 121][dds121]). Sung around the tree ([KD 2007][kd2007]). [religion.dk][reldk] calls it the most popular hymn in the Nordic countries.
- **Text:** B.S. Ingemann, 1850, first printed as "Pilgrimssang" ([DDS 121][dds121]; [religion.dk][reldk]).
- **Melody:** Silesian melody, 18th century ([DDS 121][dds121]; [HSB story][hsb-jorden]).
- **Verses:** 3 ([DDS 121][dds121]; [Wikisource][ws-jorden]).
- **Numbers:** DDS 121. HSB 56, where it is not in the Christmas section ([HSB list][hsb-list]).
- **PD:** yes.
- **Full text:** [Wikisource][ws-jorden].

#### 10. Juletræet med sin pynt
- **Type:** *julesang*. Sung around the tree ([KD 2007][kd2007]; [PR 2014][pr2014]).
- **Text:** Mogens Lorentzen (4 Apr 1892 – 7 Feb 1953) ([lex.dk Lorentzen][lex-lorentzen]).
  - Year: Lex.dk dates the song to 1938 and says it was printed in his 1939 collection *og så videre* ([lex.dk Lorentzen][lex-lorentzen]). HSB gives 1939 ([HSB story][hsb-juletraeet]).
- **Melody:** Egil Harder, 1940 ([HSB story][hsb-juletraeet]). The melody is irrelevant for text rights.
- **Verses:** 5 ([HSB story][hsb-juletraeet]; [da.wikipedia][wp-juletraeet]).
- **Numbers:** HSB 259.
- **PD:** **yes, since 1 January 2024** (author died 1953, plus 70 years) ([lovguiden § 63][law63]). It is not yet on Wikisource (checked against [Kategori:Julesange][ws-cat]).
- **Full text:** the [HSB story page][hsb-juletraeet] shows all 5 verses. HSB is reference only (see section 6). For import, find a PD printing such as the 1939 *og så videre* (unverified).

### And then some

#### 11. I denne søde juletid
- **Type:** julesalme, listed in the project README. Not in either survey.
- **Text:** H.A. Brorson (1694–1764), 1732, with a seventh verse of praise added in 1739 ([DDS 109][dds109]; [HSB story][hsb-soede]; [lex.dk Brorson][lex-brorson]).
- **Melody:** C. Balle 1855. Alternative: 15th-c./Klug 1533 ([DDS 109][dds109]).
- **Verses:** 7 ([DDS 109][dds109]; [Wikisource][ws-soede]).
- **Numbers:** DDS 109, HSB 238.
- **PD:** yes.
- **Full text:** [Wikisource][ws-soede]; [Kalliope][kal-soede] (1732 original, 6 verses, old spelling).

#### 12. Sikken voldsom trængsel og alarm
- **Type:** *julesang*, listed in the project README. Also known as "Julestemning" ([da.wikipedia][wp-sikken]).
- **Text:** Peter Faber, 1848. Printed after his death in *Viser og Vers* (1877) ([da.wikipedia][wp-sikken]; [lex.dk Faber][lex-faber]; [Kalliope][kal-julestemning]).
- **Melody:** Adolf Müller's tune from Nestroy's *Lumpazivagabundus* (1833). It is often credited to Emil Horneman, which is uncertain ([da.wikipedia][wp-sikken]; [Wikisource][ws-sikken]).
- **Verses:** 7, each with a refrain ([Wikisource][ws-sikken]; [da.wikipedia][wp-sikken]).
- **Numbers:** not in DDS. Not in HSB 19 ([HSB list][hsb-list]).
- **PD:** yes.
- **Full text:** [Wikisource][ws-sikken]; [Kalliope][kal-julestemning].

#### 13. Velkommen igen, Guds engle små
- **Text:** N.F.S. Grundtvig, 1824 ([DDS 99][dds99]).
- **Melody:** A.P. Berggreen 1832 or C.E.F. Weyse 1838 ([DDS 99][dds99]).
- **Verses:** 8 ([DDS 99][dds99]; [Wikisource][ws-velkommen]).
- **Use:** church ([religion.dk][reldk]).
- **Numbers:** DDS 99, HSB 243.
- **PD:** yes.
- **Full text:** [Wikisource][ws-velkommen].

#### 14. Kimer, I klokker
- **Text:** N.F.S. Grundtvig, 1856 ([DDS 100][dds100]).
- **Melody:** Henrik Rung, 1857 ([DDS 100][dds100]).
- **Verses:** 3 ([DDS 100][dds100]; [Wikisource][ws-kimeri]).
- **Numbers:** DDS 100, HSB 246.
- **PD:** yes.
- **Full text:** [Wikisource][ws-kimeri].

#### 15. Barn Jesus i en krybbe lå
- **Text:** H.C. Andersen (1805–1875), 1832 ([DDS 103][dds103]; [lex.dk Andersen][lex-hca]).
- **Melody:** Niels W. Gade, 1859 ([DDS 103][dds103]).
- **Verses:** 2 ([DDS 103][dds103]; [Wikisource][ws-barnjesus]).
- **Numbers:** DDS 103, HSB 247.
- **PD:** yes.
- **Full text:** [Wikisource][ws-barnjesus]. The page uses the 1832 spelling, titled "Barn Jesus i en Krybbe laae".

#### 16. Her kommer, Jesus, dine små
- **Text:** H.A. Brorson, 1732, revised 1850 ([DDS 123][dds123]). Who made the 1850 revision is unverified.
- **Melody:** J.A.P. Schulz, 1786 ([DDS 123][dds123]).
- **Verses:** 9 ([DDS 123][dds123]; [Wikisource][ws-herkommer]).
- **Numbers:** DDS 123.
- **PD:** yes.
- **Full text:** [Wikisource][ws-herkommer]; [Kalliope][kal-herkommer] (1732 original, "HEr kommer dine Arme Smaa").

#### 17. Mit hjerte altid vanker
- **Text:** H.A. Brorson, 1732 ([DDS 125][dds125]).
- **Melody:** Carl Nielsen 1914. Alternative: Strassburg 1539 ([DDS 125][dds125]).
- **Verses:** 9 ([DDS 125][dds125]).
- **Use:** often sung on 2nd Christmas Day ([religion.dk][reldk]).
- **Numbers:** DDS 125, HSB 240.
- **PD:** yes.
- **Full text:** [Kalliope][kal-mithjerte] (1732 original). There is no Wikisource page (API lookup failed).

#### 18. Den yndigste rose er funden
- **Text:** H.A. Brorson, 1732 ([DDS 122][dds122]).
- **Melody:** Wittenberg / Joseph Klug, 1542 ([DDS 122][dds122]).
- **Verses:** 8 ([DDS 122][dds122]; [Wikisource][ws-rose-funden]).
- **Numbers:** DDS 122, HSB 239.
- **PD:** yes.
- **Full text:** [Wikisource][ws-rose-funden]; [Kalliope][kal-rose].

#### 19. Hjerte, løft din glædes vinger
- **Text:** Paul Gerhardt, 1653; Danish text by C.J. Brandt (1817–1889), 1878 ([DDS 114][dds114]; [lex.dk Brandt][lex-brandt]; [HSB story][hsb-hjerte]).
- **Melody:** Johann Crüger, 1653 ([DDS 114][dds114]).
- **Verses:** **DDS 6, Wikisource 7** ([DDS 114][dds114]; [Wikisource][ws-hjerte]). Check which verse DDS leaves out before import.
- **Numbers:** DDS 114, HSB 237.
- **PD:** yes.
- **Full text:** [Wikisource][ws-hjerte].

#### 20. Julen har englelyd
- **Text:** based on a Latin-Danish text from 1569. N.F.S. Grundtvig 1837 and 1851, B.S. Ingemann 1854 ([DDS 118][dds118]).
- **Melody:** A.P. Berggreen, 1852 ([DDS 118][dds118]).
- **Verses:** 3 ([DDS 118][dds118]).
- **Numbers:** DDS 118, HSB 245.
- **PD:** yes.
- **Full text:** not in Wikisource's Julesange category ([Kategori:Julesange][ws-cat]). The [HSB story page][hsb-englelyd] shows the text (reference only).

#### 21. Lad det klinge sødt i sky
- **Text:** Latin 14th c.; Claus Mortensen 1529; N.F.S. Grundtvig 1837; Thomas Laub (1852–1927) 1918 ([DDS 115][dds115]; [lex.dk Laub][lex-laub]).
- **Melody:** pre-Reformation, Joseph Klug 1543 ([DDS 115][dds115]).
- **Verses:** 3 ([DDS 115][dds115]).
- **Numbers:** DDS 115, HSB 244.
- **PD:** yes.
- **Full text:** [Wikisource][ws-klinge].

#### 22. Fra Himlen højt kom budskab her
- **Text:** Martin Luther 1535; Hans Tausen 1544; Danish 1569; J.L.A. Kolderup-Rosenvinge (1792–1850) 1845 ([DDS 95][dds95]; [Wikisource][ws-frahimlen]; [lex.dk][lex-kolderup]).
- **Melody:** Valentin Schumann, 1539 ([DDS 95][dds95]).
- **Verses:** 10 ([DDS 95][dds95]; [Wikisource][ws-frahimlen]).
- **Numbers:** DDS 95.
- **PD:** yes.
- **Full text:** [Wikisource][ws-frahimlen].

#### 23. Et lidet barn så lysteligt
- **Text:** Arvid Pedersen 1529, from a German original c. 1400; N.F.S. Grundtvig 1837, 1843 and 1845 ([DDS 102][dds102]).
- **Melody:** 15th c./Klug 1533. Alternative: Balle 1855 ([DDS 102][dds102]).
- **Verses:** 2 ([DDS 102][dds102]).
- **Numbers:** DDS 102.
- **PD:** yes.
- **Full text:** [Wikisource][ws-lidetbarn].

#### 24. Lovet være du, Jesus Krist
- **Text:** German 15th c.; Luther 1523; Claus Mortensen (?) 1528; N.F.S. Grundtvig 1837 and 1845 ([DDS 108][dds108]).
- **Melody:** Johann Walter 1524. Alternative: Danish folk melody 1814 ([DDS 108][dds108]).
- **Verses:** 6 ([DDS 108][dds108]).
- **Numbers:** DDS 108, HSB 235.
- **PD:** yes.
- **Full text:** DDS 108 (view only). No Wikisource page in the category.

#### 25. Venner! sagde Guds engel blidt
- **Text:** N.F.S. Grundtvig 1846, revised 1857 ([DDS 105][dds105]).
- **Melody:** Henrik Rung, 1857 ([DDS 105][dds105]).
- **Verses:** 5 ([DDS 105][dds105]).
- **Use:** church ([religion.dk][reldk]).
- **Numbers:** DDS 105.
- **PD:** yes.
- **Full text:** DDS 105 (view only). No Wikisource page in the category.

#### 26. Der er noget i luften
- **Type:** Advent song that is widely sung in December ([hymnary.org][hymnary-gregersen]; [HSB story][hsb-luften]).
- **Text and melody:** Vilhelm Gregersen, 1911 ([HSB story][hsb-luften]). Gregersen was a pastor in Hornslet and lived 1848–1929 ([hymnary.org][hymnary-gregersen]). hymnary.org's header also shows 1828 as his birth year, a conflict, but his death year is not disputed.
- **Verses:** 4 ([HSB story][hsb-luften]).
- **Numbers:** HSB 232 (Advent section).
- **PD:** yes. Author died 1929.
- **Full text:** no PD online source found (unverified). The 1911 collection could be searched in Det Kgl. Bibliotek's holdings.

#### 27. En rose så jeg skyde (partly protected)
- **Text:** verses 1–2 are Thomas Laub's 1920 translation of a German 16th-c. text in Praetorius' 1609 version. Verse 3 is Uffe Hansen's 1935 translation of F. Layriz's 1844 verse ([DDS 117][dds117]; [Wikisource][ws-rose-skyde]).
  - Laub died 1927 ([lex.dk Laub][lex-laub]). **Uffe Hansen died 11 Sep 1994** ([Grundtvig-Studier obituary][uffe]).
- **Melody:** Köln 1599 ([DDS 117][dds117]).
- **Verses:** 3 in DDS. **Only verses 1–2 are PD.** Verse 3 is protected until the end of 2064 ([lovguiden § 63][law63]).
- **Numbers:** DDS 117, HSB 236.
- **Full text:** [Wikisource][ws-rose-skyde] shows only verses 1–2.

#### 28. Nu tændes tusind julelys (on hold)
- **Text:** Swedish original by Emmy Köhler (1858–1925), 1898 ([en.wikipedia Köhler][enwp-kohler]; [HSB story][hsb-nutaendes]).
- **Danish translation:** by Linda Lehun according to HSB ([HSB story][hsb-nutaendes]). **Her dates are unverified.**
- **Verses:** 4 (the HSB article discusses verse 1 and "the following three verses") ([HSB story][hsb-nutaendes]).
- **Numbers:** HSB 255.
- **PD:** **unverified.** Hold until the translator's death year is confirmed to be 1955 or earlier, or until an older anonymous translation published before 1956 is found.

#### 29. Børn og voksne i kærlig krans
- **Type:** a song written for walking around the tree, but not attested as widely sung (niche).
- **Text:** Elith Reumert (1855–1934) ([Wikisource][ws-boern]; [lex.dk Reumert][lex-reumert]). Wikisource files it under 1899 ([Wikisource][ws-boern]).
- **Melody:** J.P.E. Hartmann ([Wikisource][ws-boern]).
- **Verses:** 3 ([Wikisource][ws-boern]).
- **PD:** yes.
- **Full text:** [Wikisource][ws-boern].

---

## 5. Popular carols deliberately excluded (still protected or status unknown)

| Song | Why excluded | Source |
|---|---|---|
| *Lille Messias* (HSB 258) | Text by Johannes Møllehave, 1989. He died 10 May 2021. | [HSB story][hsb-messias]; [lex.dk Møllehave][lex-mollehave] |
| *Decembernat* (HSB 261) | Text by Iben Krogsdal, 2009. HSB prints it "med kunstnerens tilladelse". | [HSB story][hsb-decembernat] |
| *Kom, alle kristne* (DDS 112) | Danish version from 1981. Translator not named on the DDS page. | [DDS 112][dds112] |
| *En rose så jeg skyde*, verse 3 | Uffe Hansen died 1994. Verses 1–2 can be used. | [DDS 117][dds117]; [obituary][uffe] |
| *Bjældeklang* (Danish "Jingle Bells") | Danish text attributed to Otto Leisner, 1947, by a weak secondary source. Leisner died 2008. | [skagenonline (weak)][skagen-bjaelde]; [lex.dk Leisner][lex-leisner] |
| *Nu tændes tusind julelys* | Danish translator Linda Lehun has unknown dates. On hold. | [HSB story][hsb-nutaendes] |
| *På loftet sidder nissen* | Danish translator unknown. **Added 2026-10-23** as an anonymous adaptation of Munthe's PD text (see section 2, #8). | [no.wikipedia][nowp-nissen] |
| *Musevisa* / Danish "Musevisen" | The Norwegian original is by Alf Prøysen (1914–1970), 1946. The Danish version's credits are unverified. | [en.wikipedia Musevisa][enwp-musevisa] |
| Modern pop julesange (*Tinka*, *Lille store verden*, *I en stjerneregn af sne*, and Danish versions of *Rudolph*, *Last Christmas* and similar) | 20th/21st-century works, all protected. Individual credits not researched. | [IFPI streaming top 10 via Gaffa][gaffa2019] |
| *O, du dejlige grønne træ* | **Not protected any more.** Hans Ahlmann (1881–1952) became PD on 1 January 2023, but Wikisource still withholds the text. Not popular enough to include. | [Wikisource][ws-odejlige] |

Also unverified: the credits of *Til julebal i Nisseland*. No reliable source was found, so treat it as protected.

---

## 6. Source suitability for importing verse texts

| Source | Coverage here | Structure | Spelling and version | Terms / licence | Verdict |
|---|---|---|---|---|---|
| **Danish Wikisource** (da.wikisource.org) | 21 of 29 (see [Kategori:Julesange][ws-cat]) | One page per song. Stanzas separated by blank lines. Refrains marked `//: … ://`. A "Sang Infomation" template holds author/composer. Wikitext is available through the MediaWiki API (`action=parse&prop=wikitext`). | Mostly modern spelling and the hymnal version. Exceptions: *Barn Jesus* uses 1832 spelling; *Dejlig er den himmel blå* has the 1810 and 1853 versions on one page. Source editions are rarely cited. | Pages carry a PD notice (author died before 1956) plus CC BY-SA 4.0 for the page ([Wikisource Glade jul][ws-glade]). | **Best primary import source.** Rate-limited: I got HTTP 429 after a few rapid calls, so throttle and send a User-Agent. Check verse counts against DDS. |
| **Kalliope** (kalliope.org) | Faber's two songs, Brorson's 1732 *Nogle Jule-Psalmer* (*I denne søde juletid*, *Mit hjerte altid vanker*, *Den yndigste rose*, *Her kommer…*), Ingemann's *Glade jul* | One page per poem, with source edition and page numbers. Pages embed a structured JSON blob (`__NEXT_DATA__`). | First-edition texts in old spelling, for example the 1732 Brorson, which differs from the hymnal versions. | Holds PD works only. The site says its content may be used for any purpose ([Kalliope om][kal-about]). | **Best for originals and as a fallback** (the only free source for *Mit hjerte altid vanker*). Spelling needs modernising. |
| **Den Danske Salmebog Online** (dendanskesalmebogonline.dk) | All DDS hymns (21 of 29) | `/salme/{nr}` with numbered verses, credit line and melody. Christmas list at [/salmertil/jul][dds-jul]. | The authoritative modern hymnal version. | **Copying, printing, downloading or saving is not permitted**, rights are reserved, and the material is licensed via KODA/NCB ([vilkår][dds-terms]). Copying is allowed only under a Copydan Tekst & Node agreement ([rettigheder][dds-copyright]). | **Reference only.** Use it to confirm DDS number, credits and verse count. Never scrape it. |
| **Højskolesangbogen** "Historier om sangene" (hojskolesangbogen.dk) | Most of the HSB 19 Christmas section (#235–264) | URL pattern `/om-sangbogen/historier-om-sangene/{letter-group}/{slug}`. Credits plus history. The full text is shown for some songs only. | The HSB version, which can omit verses (for example verses 6–7 of *Højt fra træets grønne top*). | No open licence. Texts are shown "med kunstnerens tilladelse" for protected songs ([Decembernat][hsb-decembernat]). | **Reference only.** Good for history and verse-omission notes. [Full song list][hsb-list]. |
| **Det Kgl. Bibliotek text portal** (tekster.kb.dk: ADL, *Grundtvigs Værker*) | Grundtvig's printed works and older literature | Critical editions (TEI-based) | Original versions, for example Grundtvig's 1817 *Det kimer nu*, which differs from the hymnal | The licence page wasn't reachable (unverified) ([tekster.kb.dk][kb-tekster]) | **Use to check originals.** Not needed for import if Wikisource covers the song. |

**Recommendation:**

1. Import from Wikisource through the API, throttled.
2. Record the Wikisource page and revision ID in each song's `source` field.
3. Check each verse count against DDS (hymns) or HSB (songs).
4. For *Mit hjerte altid vanker*, use Kalliope's 1732 text and modernise the spelling. Or wait until the song is added to Wikisource.
5. For *Juletræet med sin pynt*, *Julen har englelyd*, *Lovet være du, Jesus Krist*, *Venner! sagde Guds engel blidt* and *Der er noget i luften*, there is no free online copy yet. Find a PD printed edition first, or transcribe one and add it to Wikisource.

---

## 7. Unverified items (to follow up)

1. The Danish translator of *På loftet sidder nissen* and the year of first Danish printing.
2. Linda Lehun's dates (*Nu tændes tusind julelys*), or an older Danish translation.
3. Mads Hansen's identity and dates (extended *Nu er det jul igen*).
4. Who revised *Her kommer, Jesus, dine små* in 1850.
5. Which verse DDS leaves out of *Hjerte, løft din glædes vinger* (Wikisource has 7, DDS 6).
6. Whether families usually sing all 8 verses of *Højt fra træets grønne top* or skip 6–7 as HSB does.
7. Where to find a PD online text for *Juletræet med sin pynt*, *Julen har englelyd*, *Lovet være du, Jesus Krist*, *Venner! sagde Guds engel blidt* and *Der er noget i luften*.
8. The Danish credits for *Bjældeklang*, *Musevisen* and *Til julebal i Nisseland* (excluded either way).
9. Whether families sing the "and then some" hymns around the tree. The surveys cover only the top ten. Use around the tree is documented only for the core ten and for *Et barn er født*, *Glade jul* and *Dejlig er den himmel blå* ([religion.dk][reldk]).
10. The terms of use for the tekster.kb.dk text portal.
11. The verse counts in this file come from automated readings of each page, without the lyrics. Recount when importing.

---

## 8. Sources

### Surveys and rankings
- `kd2007`: <https://www.kristeligt-dagblad.dk/kirke-tro/her-er-danskernes-favoritter-til-rundt-om-tr%C3%A6et> (Zapera for Kristeligt Dagblad, Dec 2007, n=989)
- `pr2014`: <https://www.mynewsdesk.com/dk/pricerunner-danmark/pressreleases/julen-mest-populaere-sange-1099828> (PriceRunner, 17 Dec 2014, n>2,000)
- `reldk`: <https://www.religion.dk/julens-salmer/se-oversigt-over-10-kendte-julesalmer> (Kristeligt Dagblad/Religion.dk overview, 2005, updated 2017)
- `kd2017`: <https://www.kristeligt-dagblad.dk/religion/her-er-de-mest-kendte-julesalmer> (16 Dec 2017)
- `dr2024`: <https://www.dr.dk/nyheder/kultur/hver-fjerde-af-os-danser-ikke-om-juletraeet-til-gengaeld-har-mange-faaet-nye> (Epinion for DR, 24 Dec 2024)
- `bibel2013`: <https://www.bibelselskabet.dk/danskerne-elsker-julens-salmer> (YouGov, 2013, n=1,005)
- `gaffa2019`: <https://gaffa.dk/nyheder/2019/december/top-10-her-er-danskernes-foretrukne-jule-sange/> (IFPI streaming 2018)

### Den Danske Salmebog Online
- `dds-jul`: <https://www.dendanskesalmebogonline.dk/salmertil/jul>
- `dds-terms`: <https://www.dendanskesalmebogonline.dk/vilkaar-for-brug-af-siden>
- `dds-copyright`: <https://www.dendanskesalmebogonline.dk/copyright>
- Hymn pages:
  - `dds94`: <https://www.dendanskesalmebogonline.dk/salme/94>
  - `dds95`: <https://www.dendanskesalmebogonline.dk/salme/95>
  - `dds99`: <https://www.dendanskesalmebogonline.dk/salme/99>
  - `dds100`: <https://www.dendanskesalmebogonline.dk/salme/100>
  - `dds102`: <https://www.dendanskesalmebogonline.dk/salme/102>
  - `dds103`: <https://www.dendanskesalmebogonline.dk/salme/103>
  - `dds104`: <https://www.dendanskesalmebogonline.dk/salme/104>
  - `dds105`: <https://www.dendanskesalmebogonline.dk/salme/105>
  - `dds108`: <https://www.dendanskesalmebogonline.dk/salme/108>
  - `dds109`: <https://www.dendanskesalmebogonline.dk/salme/109>
  - `dds112`: <https://www.dendanskesalmebogonline.dk/salme/112>
  - `dds114`: <https://www.dendanskesalmebogonline.dk/salme/114>
  - `dds115`: <https://www.dendanskesalmebogonline.dk/salme/115>
  - `dds117`: <https://www.dendanskesalmebogonline.dk/salme/117>
  - `dds118`: <https://www.dendanskesalmebogonline.dk/salme/118>
  - `dds119`: <https://www.dendanskesalmebogonline.dk/salme/119>
  - `dds120`: <https://www.dendanskesalmebogonline.dk/salme/120>
  - `dds121`: <https://www.dendanskesalmebogonline.dk/salme/121>
  - `dds122`: <https://www.dendanskesalmebogonline.dk/salme/122>
  - `dds123`: <https://www.dendanskesalmebogonline.dk/salme/123>
  - `dds125`: <https://www.dendanskesalmebogonline.dk/salme/125>
  - `dds136`: <https://www.dendanskesalmebogonline.dk/salme/136>

### Højskolesangbogen (19th edition)
- `hsb-list`: <https://hojskolesangbogen.dk/om-sangbogen/historie-om-bogen/19-udgave/liste-over-alle-sangene>
- Story pages (base: `https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/`):
  - `hsb-hoejt`: `…/h-i/hoejt-fra-traeets-groenne-top`
  - `hsb-juletraeet`: `…/j-l/juletraeet-med-sin-pynt`
  - `hsb-himmel`: `…/d/dejlig-er-den-himmel-blaa`
  - `hsb-kimernu`: `…/d/det-kimer-nu-til-julefest`
  - `hsb-bragt`: `…/j-l/julen-har-bragt-velsignet-bud`
  - `hsb-jorden`: `…/d/dejlig-er-jorden`
  - `hsb-soede`: `…/h-i/i-denne-soede-juletid`
  - `hsb-hjerte`: `…/h-i/hjerte-loeft-din-glaedes-vinger`
  - `hsb-englelyd`: `…/j-l/julen-har-englelyd`
  - `hsb-luften`: `…/d/der-er-noget-i-luften`
  - `hsb-nutaendes`: `…/m-n/nu-taendes-tusind-julelys`
  - `hsb-messias`: `…/j-l/lille-messias`
  - `hsb-decembernat`: `…/d/decembernat`

### Wikisource (da)
- `ws-cat`: <https://da.wikisource.org/wiki/Kategori:Julesange>
- Song pages:
  - `ws-hoejt`: <https://da.wikisource.org/wiki/H%C3%B8jt_fra_tr%C3%A6ets_gr%C3%B8nne_top>
  - `ws-glade`: <https://da.wikisource.org/wiki/Glade_jul,_dejlige_jul>
  - `ws-etbarn`: <https://da.wikisource.org/wiki/Et_barn_er_f%C3%B8dt_i_Betlehem>
  - `ws-himmel`: <https://da.wikisource.org/wiki/Dejlig_er_den_himmel_bl%C3%A5>
  - `ws-nuerdet`: <https://da.wikisource.org/wiki/Nu_er_det_jul_igen>
  - `ws-kimernu`: <https://da.wikisource.org/wiki/Det_kimer_nu>
  - `ws-bragt`: <https://da.wikisource.org/wiki/Julen_har_bragt_velsignet_bud>
  - `ws-jorden`: <https://da.wikisource.org/wiki/Dejlig_er_jorden>
  - `ws-soede`: <https://da.wikisource.org/wiki/I_denne_s%C3%B8de_juletid>
  - `ws-sikken`: <https://da.wikisource.org/wiki/Sikken_voldsom_tr%C3%A6ngsel_og_alarm>
  - `ws-velkommen`: <https://da.wikisource.org/wiki/Velkommen_igen,_Guds_engle_sm%C3%A5>
  - `ws-kimeri`: <https://da.wikisource.org/wiki/Kimer,_I_klokker>
  - `ws-barnjesus`: <https://da.wikisource.org/wiki/Barn_Jesus_i_en_Krybbe_laae>
  - `ws-herkommer`: <https://da.wikisource.org/wiki/Her_kommer,_Jesus,_dine_sm%C3%A5>
  - `ws-rose-funden`: <https://da.wikisource.org/wiki/Den_yndigste_rose_er_funden>
  - `ws-hjerte`: <https://da.wikisource.org/wiki/Hjerte,_l%C3%B8ft_din_gl%C3%A6des_vinger>
  - `ws-klinge`: <https://da.wikisource.org/wiki/Lad_det_klinge_s%C3%B8dt_i_sky>
  - `ws-frahimlen`: <https://da.wikisource.org/wiki/Fra_himlen_h%C3%B8jt_kom_budskab_her>
  - `ws-lidetbarn`: <https://da.wikisource.org/wiki/Et_lidet_barn_s%C3%A5_lysteligt>
  - `ws-rose-skyde`: <https://da.wikisource.org/wiki/En_rose_s%C3%A5_jeg_skyde>
  - `ws-boern`: <https://da.wikisource.org/wiki/B%C3%B8rn_og_voksne_i_k%C3%A6rlig_krans>
  - `ws-odejlige`: <https://da.wikisource.org/wiki/O,_du_dejlige_gr%C3%B8nne_tr%C3%A6>

### Kalliope
- `kal-about`: <https://kalliope.org/da/about/kalliope>
- Text pages:
  - `kal-juletraeet`: <https://kalliope.org/da/text/faber1999071102> (Faber, "Juletræet")
  - `kal-julestemning`: <https://kalliope.org/da/text/faber1999061104> (Faber, "Julestemning")
  - `kal-glade`: <https://kalliope.org/da/text/ingesmann2001010710> (Ingemann, "Glade Jul")
  - `kal-soede`: <https://kalliope.org/da/text/brorson1732a1>
  - `kal-mithjerte`: <https://kalliope.org/da/text/brorson1732a2>
  - `kal-rose`: <https://kalliope.org/da/text/brorson1732a5>
  - `kal-herkommer`: <https://kalliope.org/da/text/brorson1732a6>

### Other text portals
- `kb-tekster`: <https://tekster.kb.dk/>

### Biographical (death years)
- `lex-faber`: <https://lex.dk/Peter_Faber>
- `lex-horneman`: <https://lex.dk/Emil_Horneman>
- `lex-grundtvig`: <https://lex.dk/N.F.S._Grundtvig>
- `lex-ingemann`: <https://lex.dk/B.S._Ingemann>
- `lex-brorson`: <https://lex.dk/Hans_Adolph_Brorson>
- `lex-hca`: <https://lex.dk/H.C._Andersen>
- `lex-lorentzen`: <https://lex.dk/Mogens_Lorentzen>
- `lex-brandt`: <https://lex.dk/C.J._Brandt>
- `lex-laub`: <https://lex.dk/Thomas_Laub>
- `lex-kolderup`: <https://lex.dk/J.L.A._Kolderup-Rosenvinge>
- `lex-reumert`: <https://lex.dk/Elith_Reumert>
- `lex-leisner`: <https://lex.dk/Otto_Leisner>
- `lex-mollehave`: <https://lex.dk/Johannes_M%C3%B8llehave>
- `snl-munthe`: <https://snl.no/Margrethe_Munthe>
- `enwp-kohler`: <https://en.wikipedia.org/wiki/Emmy_K%C3%B6hler>
- `uffe`: <https://tidsskrift.dk/grs/article/view/16174> (obituary of Uffe Hansen, 1894–1994)
- `hymnary-gregersen`: <https://hymnary.org/person/Gregersen_Vilhelm>

### Encyclopedia and secondary
- `wp-hoejt`: <https://da.wikipedia.org/wiki/H%C3%B8jt_fra_tr%C3%A6ets_gr%C3%B8nne_top>
- `wp-sikken`: <https://da.wikipedia.org/wiki/Sikken_voldsom_tr%C3%A6ngsel_og_alarm>
- `wp-juletraeet`: <https://da.wikipedia.org/wiki/Juletr%C3%A6et_med_sin_pynt>
- `wp-nuerdet`: <https://da.wikipedia.org/wiki/Nu_er_det_jul_igen>
- `wp-madshansen`: <https://da.wikipedia.org/wiki/Mads_Hansen_(digter)>
- `wp-nissen`: <https://da.wikipedia.org/wiki/P%C3%A5_loftet_sidder_nissen>
- `nowp-nissen`: <https://no.wikipedia.org/wiki/P%C3%A5_l%C3%A5ven_sitter_nissen>
- `enwp-nuardet`: <https://en.wikipedia.org/wiki/Nu_%C3%A4r_det_jul_igen>
- `enwp-musevisa`: <https://en.wikipedia.org/wiki/Musevisa>
- `duda-nissen`: <https://duda.dk/tema/jul/julesange/paa-loftet-sidder-nissen/>
- `skagen-bjaelde`: <https://www.skagenonline.dk/faq/hvem-har-oversat-jingle-bells-til-dansk> (weak FAQ source)

### Law
- `law63`: <https://www.lovguiden.dk/loven/ophavsretsloven/63> (ophavsretsloven § 63, LBK nr 1093 af 20/08/2023)

[kd2007]: https://www.kristeligt-dagblad.dk/kirke-tro/her-er-danskernes-favoritter-til-rundt-om-tr%C3%A6et
[pr2014]: https://www.mynewsdesk.com/dk/pricerunner-danmark/pressreleases/julen-mest-populaere-sange-1099828
[reldk]: https://www.religion.dk/julens-salmer/se-oversigt-over-10-kendte-julesalmer
[kd2017]: https://www.kristeligt-dagblad.dk/religion/her-er-de-mest-kendte-julesalmer
[dr2024]: https://www.dr.dk/nyheder/kultur/hver-fjerde-af-os-danser-ikke-om-juletraeet-til-gengaeld-har-mange-faaet-nye
[bibel2013]: https://www.bibelselskabet.dk/danskerne-elsker-julens-salmer
[gaffa2019]: https://gaffa.dk/nyheder/2019/december/top-10-her-er-danskernes-foretrukne-jule-sange/
[dds-jul]: https://www.dendanskesalmebogonline.dk/salmertil/jul
[dds-terms]: https://www.dendanskesalmebogonline.dk/vilkaar-for-brug-af-siden
[dds-copyright]: https://www.dendanskesalmebogonline.dk/copyright
[dds94]: https://www.dendanskesalmebogonline.dk/salme/94
[dds95]: https://www.dendanskesalmebogonline.dk/salme/95
[dds99]: https://www.dendanskesalmebogonline.dk/salme/99
[dds100]: https://www.dendanskesalmebogonline.dk/salme/100
[dds102]: https://www.dendanskesalmebogonline.dk/salme/102
[dds103]: https://www.dendanskesalmebogonline.dk/salme/103
[dds104]: https://www.dendanskesalmebogonline.dk/salme/104
[dds105]: https://www.dendanskesalmebogonline.dk/salme/105
[dds108]: https://www.dendanskesalmebogonline.dk/salme/108
[dds109]: https://www.dendanskesalmebogonline.dk/salme/109
[dds112]: https://www.dendanskesalmebogonline.dk/salme/112
[dds114]: https://www.dendanskesalmebogonline.dk/salme/114
[dds115]: https://www.dendanskesalmebogonline.dk/salme/115
[dds117]: https://www.dendanskesalmebogonline.dk/salme/117
[dds118]: https://www.dendanskesalmebogonline.dk/salme/118
[dds119]: https://www.dendanskesalmebogonline.dk/salme/119
[dds120]: https://www.dendanskesalmebogonline.dk/salme/120
[dds121]: https://www.dendanskesalmebogonline.dk/salme/121
[dds122]: https://www.dendanskesalmebogonline.dk/salme/122
[dds123]: https://www.dendanskesalmebogonline.dk/salme/123
[dds125]: https://www.dendanskesalmebogonline.dk/salme/125
[dds136]: https://www.dendanskesalmebogonline.dk/salme/136
[hsb-list]: https://hojskolesangbogen.dk/om-sangbogen/historie-om-bogen/19-udgave/liste-over-alle-sangene
[hsb-hoejt]: https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/h-i/hoejt-fra-traeets-groenne-top
[hsb-juletraeet]: https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/j-l/juletraeet-med-sin-pynt
[hsb-himmel]: https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/d/dejlig-er-den-himmel-blaa
[hsb-kimernu]: https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/d/det-kimer-nu-til-julefest
[hsb-bragt]: https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/j-l/julen-har-bragt-velsignet-bud
[hsb-jorden]: https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/d/dejlig-er-jorden
[hsb-soede]: https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/h-i/i-denne-soede-juletid
[hsb-hjerte]: https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/h-i/hjerte-loeft-din-glaedes-vinger
[hsb-englelyd]: https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/j-l/julen-har-englelyd
[hsb-luften]: https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/d/der-er-noget-i-luften
[hsb-nutaendes]: https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/m-n/nu-taendes-tusind-julelys
[hsb-messias]: https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/j-l/lille-messias
[hsb-decembernat]: https://hojskolesangbogen.dk/om-sangbogen/historier-om-sangene/d/decembernat
[ws-cat]: https://da.wikisource.org/wiki/Kategori:Julesange
[ws-hoejt]: https://da.wikisource.org/wiki/H%C3%B8jt_fra_tr%C3%A6ets_gr%C3%B8nne_top
[ws-glade]: https://da.wikisource.org/wiki/Glade_jul,_dejlige_jul
[ws-etbarn]: https://da.wikisource.org/wiki/Et_barn_er_f%C3%B8dt_i_Betlehem
[ws-himmel]: https://da.wikisource.org/wiki/Dejlig_er_den_himmel_bl%C3%A5
[ws-nuerdet]: https://da.wikisource.org/wiki/Nu_er_det_jul_igen
[ws-kimernu]: https://da.wikisource.org/wiki/Det_kimer_nu
[ws-bragt]: https://da.wikisource.org/wiki/Julen_har_bragt_velsignet_bud
[ws-jorden]: https://da.wikisource.org/wiki/Dejlig_er_jorden
[ws-soede]: https://da.wikisource.org/wiki/I_denne_s%C3%B8de_juletid
[ws-sikken]: https://da.wikisource.org/wiki/Sikken_voldsom_tr%C3%A6ngsel_og_alarm
[ws-velkommen]: https://da.wikisource.org/wiki/Velkommen_igen,_Guds_engle_sm%C3%A5
[ws-kimeri]: https://da.wikisource.org/wiki/Kimer,_I_klokker
[ws-barnjesus]: https://da.wikisource.org/wiki/Barn_Jesus_i_en_Krybbe_laae
[ws-herkommer]: https://da.wikisource.org/wiki/Her_kommer,_Jesus,_dine_sm%C3%A5
[ws-rose-funden]: https://da.wikisource.org/wiki/Den_yndigste_rose_er_funden
[ws-hjerte]: https://da.wikisource.org/wiki/Hjerte,_l%C3%B8ft_din_gl%C3%A6des_vinger
[ws-klinge]: https://da.wikisource.org/wiki/Lad_det_klinge_s%C3%B8dt_i_sky
[ws-frahimlen]: https://da.wikisource.org/wiki/Fra_himlen_h%C3%B8jt_kom_budskab_her
[ws-lidetbarn]: https://da.wikisource.org/wiki/Et_lidet_barn_s%C3%A5_lysteligt
[ws-rose-skyde]: https://da.wikisource.org/wiki/En_rose_s%C3%A5_jeg_skyde
[ws-boern]: https://da.wikisource.org/wiki/B%C3%B8rn_og_voksne_i_k%C3%A6rlig_krans
[ws-odejlige]: https://da.wikisource.org/wiki/O,_du_dejlige_gr%C3%B8nne_tr%C3%A6
[kal-about]: https://kalliope.org/da/about/kalliope
[kal-juletraeet]: https://kalliope.org/da/text/faber1999071102
[kal-julestemning]: https://kalliope.org/da/text/faber1999061104
[kal-glade]: https://kalliope.org/da/text/ingesmann2001010710
[kal-soede]: https://kalliope.org/da/text/brorson1732a1
[kal-mithjerte]: https://kalliope.org/da/text/brorson1732a2
[kal-rose]: https://kalliope.org/da/text/brorson1732a5
[kal-herkommer]: https://kalliope.org/da/text/brorson1732a6
[kb-tekster]: https://tekster.kb.dk/
[lex-faber]: https://lex.dk/Peter_Faber
[lex-horneman]: https://lex.dk/Emil_Horneman
[lex-grundtvig]: https://lex.dk/N.F.S._Grundtvig
[lex-ingemann]: https://lex.dk/B.S._Ingemann
[lex-brorson]: https://lex.dk/Hans_Adolph_Brorson
[lex-hca]: https://lex.dk/H.C._Andersen
[lex-lorentzen]: https://lex.dk/Mogens_Lorentzen
[lex-brandt]: https://lex.dk/C.J._Brandt
[lex-laub]: https://lex.dk/Thomas_Laub
[lex-kolderup]: https://lex.dk/J.L.A._Kolderup-Rosenvinge
[lex-reumert]: https://lex.dk/Elith_Reumert
[lex-leisner]: https://lex.dk/Otto_Leisner
[lex-mollehave]: https://lex.dk/Johannes_M%C3%B8llehave
[snl-munthe]: https://snl.no/Margrethe_Munthe
[enwp-kohler]: https://en.wikipedia.org/wiki/Emmy_K%C3%B6hler
[uffe]: https://tidsskrift.dk/grs/article/view/16174
[hymnary-gregersen]: https://hymnary.org/person/Gregersen_Vilhelm
[wp-hoejt]: https://da.wikipedia.org/wiki/H%C3%B8jt_fra_tr%C3%A6ets_gr%C3%B8nne_top
[wp-sikken]: https://da.wikipedia.org/wiki/Sikken_voldsom_tr%C3%A6ngsel_og_alarm
[wp-juletraeet]: https://da.wikipedia.org/wiki/Juletr%C3%A6et_med_sin_pynt
[wp-nuerdet]: https://da.wikipedia.org/wiki/Nu_er_det_jul_igen
[wp-madshansen]: https://da.wikipedia.org/wiki/Mads_Hansen_(digter)
[wp-nissen]: https://da.wikipedia.org/wiki/P%C3%A5_loftet_sidder_nissen
[nowp-nissen]: https://no.wikipedia.org/wiki/P%C3%A5_l%C3%A5ven_sitter_nissen
[enwp-nuardet]: https://en.wikipedia.org/wiki/Nu_%C3%A4r_det_jul_igen
[enwp-musevisa]: https://en.wikipedia.org/wiki/Musevisa
[duda-nissen]: https://duda.dk/tema/jul/julesange/paa-loftet-sidder-nissen/
[nows-nissen]: https://no.wikisource.org/w/index.php?oldid=5784
[jc-nissen]: https://www.jenscornelius.dk/tysk-satire-blev-til-paa-loftet-sidder-nissen-med-sin-julegroed/
[wp-desmaa]: https://da.wikipedia.org/wiki/De_sm%C3%A5_synger
[skagen-bjaelde]: https://www.skagenonline.dk/faq/hvem-har-oversat-jingle-bells-til-dansk
[law63]: https://www.lovguiden.dk/loven/ophavsretsloven/63
