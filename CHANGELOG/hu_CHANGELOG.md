<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/en_CHANGELOG.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/bg_CHANGELOG.md) · **Magyar** · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/vi_CHANGELOG.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/el_CHANGELOG.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/da_CHANGELOG.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/id_CHANGELOG.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-ES_CHANGELOG.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-419_CHANGELOG.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/it_CHANGELOG.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-TW_CHANGELOG.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-CN_CHANGELOG.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ko_CHANGELOG.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/de_CHANGELOG.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/nl_CHANGELOG.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/no_CHANGELOG.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pl_CHANGELOG.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-PT_CHANGELOG.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-BR_CHANGELOG.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ro_CHANGELOG.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ru_CHANGELOG.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/th_CHANGELOG.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/tr_CHANGELOG.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/uk_CHANGELOG.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fi_CHANGELOG.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fr_CHANGELOG.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/cs_CHANGELOG.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/sv_CHANGELOG.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ja_CHANGELOG.md)

</div>

# DemoScope v1.2.0

Önvédelmi kiadás: a DemoScope most már kezeli a VACNet oldalának változásait ahelyett, hogy félúton hibával leállna, és jelzi neked és a fejlesztőnek, mi történt.

A beállítások, a meghívóoldal és az ítéletszövegek finomítása.

Gyorsbillentyűk, animációk és betöltési javítás.

A VACNet egykérdéses feladatának támogatása.

Kompatibilitás a VACNet átalakított ellenőrző oldalával.

### Hozzáadva

- **Elszigetelt beállítási lépések.** Minden elrendezési és telepítési lépés önállóan fut. Hiba esetén rögzíti azt, majd a további lépések folytatódnak.
- **Tartalék keresés** a videókonténerhez, az ítélet konténeréhez és a beküldési területhez. Ha a VACNet átnevezi a videókonténer osztályát, a DemoScope a lejátszó elemén keresztül találja meg.
- **Biztonságos kikapcsolás.** Ha hiányzik a videó vagy az ítéletűrlap, vagy legalább öt beállítási lépés sikertelen, a DemoScope visszavonja a saját módosításait, visszaállítja a VACNet láblécét, csak a beállítások ablakát hagyja meg, és egyszeri értesítést jelenít meg. Az üres várólistás oldal felismerése változatlan, és nem váltja ki ezt.
- **Diagnosztikai jelentés** (Settings → Diagnostics → Copy diagnostics): verzió, idő, nyelv, böngésző, oldal- és feladattípus, 22 elemellenőrzés (`ok` / `MISSING`), rögzített lépéshibák, valamint az oldal szerkezete a DemoScope módosítása előtt és után. A szerkezeti adatok csak tageket, azonosítókat és osztályokat tartalmaznak, oldalszöveget nem. Ha a vágólap nem érhető el, a jelentés kijelölhető mezőben jelenik meg.
- Legfeljebb 2 s várakozás a részben betöltött oldal ellenőrzése előtt.

- **Bezárás gomb a meghívóoldalon.** A kártya sarkában lévő × a „Done” művelethez hasonlóan visszatér a klipekhez.
- **Meghívóoldali gyorsbillentyűk:** `Enter` végrehajtja a „Done” műveletet, `Esc` pedig bezárja az oldalt. Gomb, hivatkozás, mező, párbeszédpanel vagy a nyelvlista fókusza esetén nem működnek. A Hotkeys ablak „Invite page” csoportjában átállíthatók.
- **Oldalfüggő billentyűütközések.** A meghívóoldalon nincs lejátszó, így az ottani `Enter` / `Esc` nem ütközik az ellenőrző oldal azonos billentyűivel. A beállítások billentyűje továbbra is globális.
- **Sötét, vékony görgetősávok** a beállításokban, az alablakokban és az ítéletlistában; a color-scheme is sötét.

- **Hotkeys ablak** (Settings → Hotkeys): mind a 18 billentyűparancs átállítható, műveletcsoportokba rendezve, leírással és visszaállító gombbal. A „Reset all” megerősítést kér.
  - **Ütközéskezelés.** Foglalt billentyűnél megjelenik a hozzá tartozó művelet, csoport és leírás; választható a Replace, Swap vagy Cancel.
  - Az `Esc` kiosztható, és billentyűrögzítéskor nem zárja be az ablakot. A `Tab`, módosítóbillentyűk, Caps Lock, `F5`, `F11` és `F12` nem fogadható el; a `Shift` csak a nyomva tartásos „Speed boost” művelethez használható.
  - A videó alatti súgók, jelvények és Continue/Cancel gombok követik a beállításokat.
- Az `Esc` megszakítja a megerősítésre váró ítéletet, illetve a kétlépcsős beküldés első `Enter` lépését.
- **Animations ablak** (Settings → Animations): hat stílus, élő előnézet, három sebesség és be/ki kapcsoló. A csökkentett mozgás rendszerbeállítás esetén alapból ki van kapcsolva.
- Az `Enter` és `Esc` akkor is működik, amikor egy ítélet rádiógombja van fókuszban.

- **Egykérdéses feladat.** A VACNet néha ezt kérdezi: „Is the Subject cheating beyond a reasonable doubt?”, a válaszok pedig Cheating / Uncertain / No cheats seen. A DemoScope felismeri, és tömör elrendezésre vált gyors ítéletek, bővített kombinációk és véletlenszerűsítő nélkül.
- DemoScope-ítéletfeliratok a saját nyelvén, `1–3` billentyűjelvényekkel és gyorsbillentyűkkel.
- **Zárolásjelző.** Az Uncertain és No cheats seen csak a klip végén oldódik fel. A kártya mutatja a hátralévő időt és a folyamatot; a zárolt opciók halványak, billentyűjük megnyomása hibahangot játszik le és megrázza a kártyát.
- A videó alatti súgó `Enter` és `1–3` billentyűkre vált; az ítéletgombok magasabbak.

- **A DemoScope saját magyarázatai** a négy ítéletkategóriához mind a 29 nyelven. A VACNet kérdése néhány nyelven (például ukránul) angol marad, ezért a „?” súgók már nem attól függnek.

- **„?” súgógomb** az AIM ASSIST, WALL HACK, AUTO BHOP és BOT mellett. Rövid magyarázatot nyit; kívülre kattintva, újra kattintva vagy `Esc` megnyomásával zárható. Nem kap billentyűzetfókuszt, így az `Enter` és `Space` megőrzi az ellenőrzési funkcióját.

### Módosítva

- **Újratervezett beállítási ablak.** A szakaszok használati gyakoriság szerint követik egymást: Hotkeys, Animations, Sound effects, Local history, Footer, Diagnostics (az 1.2.0-ban hozzáadva), Reset. A Hotkeys és Animations sorai frissülő összefoglalót mutatnak.
- **Egyetlen visszaállítás mindenhez.** Visszaállítja a hangot, a hangerőt, a gyorsbillentyűket és az animációkat; az előzmények megmaradnak.
- A beállítási ablak billentyűje mostantól a Hotkeys ablakban szerkeszthető.
- **Az ítélet megerősítő szövege már nem tartalmazza a billentyű számát.** Így elkerülhető a „2Not sure” és „3No cheats seen”; a jelvény CSS-sel készül.
- Az egykérdéses feladat 2. opciója mostantól „Not sure”, VACNet szövegéhez illő egyes szám első személyben.

- **Visszatért a kulcskifejezések kiemelése** az ítéletgombokon: a keresett kifejezés félkövér narancssárga, a negatív válaszok „not” szava visszafogott kék. A kijelölt gombok olvashatók maradnak.
- A `normalizeVerdictLabels` most már csak a b jelölést bontja ki, így a kiemelés megmarad.

A HTML-elem: `<b>`.

- A portál fejlécét és az utasításkártyát elrejti; a klipszámláló a fejléc jelvényében is megjelenik.
- A Continue gomb a panel aljára rögzül, hosszú fordítások mellett is látható.

Technikai szelektorok: `.verdicts-container-inner`, `#submitbuttons`.

### Javítva

- **Hosszan tartó „loading next clip”** egykérdéses feladat beküldésekor: a készenléti ellenőrzés többé nem vár a hiányzó `aimassist` mezőre; bármely ítéletűrlapot és médiametaadatot elfogad, korábban indul, a klip nélküli oldalon pedig 3 másodperc után csendben bezárja az átfedést.
- Az oldal gyorsbillentyűi (`Space`, `Enter` stb.) többé nem működnek a nyitott párbeszédpanel mögötti oldalon.

- A Local history gomb mérete most egyezik a szomszédos jelvényekével, nem tördel, a túl hosszú feliratokat rövidíti, és a jelvénysor tördelődik összenyomódás helyett.

- **Az ítéletszöveg a böngésző nyelvén maradt** a DemoScope nyelvének módosítása után. A VACNet a Steam `?l=` paraméterét használja, a DemoScope pedig korábban csak a saját feliratait módosította. Az ellenőrző oldal most a kiválasztott `?l=` értékkel nyílik meg; ha hiányzik, egyszer újratölti. A VACNet tényleges nyelvét a CSS- és script-URL-ek `l=` paramétere alapján olvassa ki; az egyszeri korlát megakadályozza az átirányítási ciklust, ha a nyelv nem támogatott.

- **A `Space`, `M` és `F` látszólag nem működött**, mert a VACNet / Video.js ugyanazt a billentyűt még egyszer feldolgozta. A DemoScope most elfogja őket.
- Firefoxban a `Space` felengedése többé nem aktiválja a fókuszban lévő lejátszógombot.
- A lejátszó gyorsbillentyűi ítélet-rádiógomb fókusza mellett is működnek.

- **A panel csak részben épült fel** a VACNet átalakítása után: az új fejléc, utasításkártya, rácselrendezés, a verdicts-container-inner elhagyása és a submitbuttons áthelyezése hibát okozott az `insertBefore` műveletben. Az `ensureReviewStructure` lépés normalizálja a jelölést, így a régi és új elrendezés is működik.

### Lokalizáció

- 6 új szöveg a diagnosztikához, a másolás eredményéhez és a kikapcsolási értesítéshez mind a 29 nyelven.

- 12 új szöveg az összefoglalókhoz, a visszaállításhoz, a meghívóoldal műveleteihez és a „Not sure” felirathoz mind a 29 nyelven.

CSS-beállítás: `color-scheme: dark`.

A „Done” gomb a hozzárendelt billentyűt is megjeleníti.

- A Hotkeys és Animations ablak (nyelvenként 77 szöveg) most már a további 27 nyelven is le van fordítva; korábban csak angolul és oroszul volt elérhető.

- A Hotkeys és Animations eredetileg angolul és oroszul készült; a többi fordítás az 1.2.0-ben került be.

A hat stílus: pulse, breathe, ripple, heartbeat, orbit és blink.

- 5 új szöveg (feliratok, cím, magyarázat, zárolási üzenet) mind a 29 nyelven.

# DemoScope v1.0.0

A DemoScope első nyilvános kiadása, felhasználói szkript a CS2 VACNet ellenőrző oldalaihoz.

### Hozzáadva
- 29 nyelvű felület, automatikus nyelvválasztás, öt gyors ítélet és 15 bővített kombináció.
- Szakaszalapú videóvezérlés, képkockánkénti léptetés, `Shift` gyorsítás, `Space` lejátszás/szünet, `M` némítás, `F` teljes képernyő, kétlépcsős ítéletbeküldés `Enter`rel.
- Beállítható helyi előzmények, JSON import/export, HTML-jelentések és több JSON-mentés egyesítése.
- Fejlesztett meghívóoldal, hangbeállítások, beállítási gyorsbillentyű, fióknév-elrejtés, ellenőrzési szabályok párbeszédablaka és opcionális véletlenszerű ítélet (alapból kikapcsolva).

### Adatvédelem
- Nincs telemetria; a helyi beállítások és előzmények nem kerülnek feltöltésre. A beküldött ítéletek a szokásos webhelyűrlapon jutnak el a VACNethez.
