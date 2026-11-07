<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/en_CHANGELOG.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/bg_CHANGELOG.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/hu_CHANGELOG.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/vi_CHANGELOG.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/el_CHANGELOG.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/da_CHANGELOG.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/id_CHANGELOG.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-ES_CHANGELOG.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-419_CHANGELOG.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/it_CHANGELOG.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-TW_CHANGELOG.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-CN_CHANGELOG.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ko_CHANGELOG.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/de_CHANGELOG.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/nl_CHANGELOG.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/no_CHANGELOG.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pl_CHANGELOG.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-PT_CHANGELOG.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-BR_CHANGELOG.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ro_CHANGELOG.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ru_CHANGELOG.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/th_CHANGELOG.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/tr_CHANGELOG.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/uk_CHANGELOG.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fi_CHANGELOG.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fr_CHANGELOG.md) · **Čeština** · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/sv_CHANGELOG.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ja_CHANGELOG.md)

</div>

# DemoScope v1.2.0

Vydání se samoobranou: DemoScope nyní zvládá změny stránky VACNet, místo aby se uprostřed práce rozbil, a informuje uživatele i vývojáře o tom, co se stalo.

Vylepšení nastavení, stránky pozvánky a textů verdiktů.

Klávesové zkratky, animace a oprava načítání.

Podpora úlohy VACNet s jednou otázkou.

Kompatibilita s přepracovanou kontrolní stránkou VACNet.

### Přidáno

- **Izolované kroky nastavení.** Každý krok rozvržení a instalace běží samostatně. Chyba se zaznamená a ostatní kroky pokračují.
- **Záložní vyhledávání** kontejneru videa, kontejneru verdiktu a oblasti odeslání. Pokud VACNet přejmenuje třídu kontejneru videa, DemoScope jej najde přes prvek přehrávače.
- **Bezpečné vypnutí.** Pokud chybí video nebo formulář verdiktu, případně selže alespoň pět kroků nastavení, DemoScope vrátí vlastní změny, obnoví zápatí VACNet, ponechá jen okno nastavení a zobrazí jednorázové oznámení. Stránka s prázdnou frontou se nadále rozpozná a toto chování nespustí.
- **Diagnostická zpráva** (Settings → Diagnostics → Copy diagnostics): verze, čas, jazyk a prohlížeč, typ stránky a úlohy, 22 kontrol prvků (`ok` / `MISSING`), zaznamenané chyby kroků a struktura stránky před změnami DemoScope a po nich. Struktura obsahuje jen značky, ID a třídy, nikdy text stránky. Pokud je schránka blokovaná, zpráva se zobrazí ve výběrovém poli.
- Před vyhodnocením částečně vykreslené stránky čeká až 2 s.

- **Tlačítko zavření stránky pozvánky.** Symbol × v rohu karty se vrátí ke klipům stejně jako „Done“.
- **Klávesové zkratky stránky pozvánky:** `Enter` provede „Done“, `Esc` stránku zavře. Ignorují se, když je zaměřené tlačítko, odkaz, pole, dialog nebo seznam jazyků. Lze je změnit v Hotkeys ve skupině „Invite page“.
- **Konflikty kláves podle stránky.** Stránka pozvánky nemá přehrávač, proto `Enter` / `Esc` nekolidují se stejnými klávesami stránky kontroly. Klávesa nastavení zůstává globální.
- **Tmavé, tenké posuvníky** v nastavení, podoknech a seznamu verdiktů; nastaveno je také tmavé color-scheme.

- **Okno Hotkeys** (Settings → Hotkeys): všech 18 zkratek lze změnit, jsou seskupeny podle akce a mají popis a tlačítko resetu. „Reset all“ vyžaduje druhé potvrzení.
  - **Řešení konfliktů.** U obsazené klávesy se zobrazí akce, skupina a účel; lze vybrat Replace, Swap nebo Cancel.
  - `Esc` lze přiřadit a během zachytávání klávesy nezavírá okno. Odmítají se `Tab`, modifikační klávesy, Caps Lock, `F5`, `F11` a `F12`; `Shift` je povolen jen pro drženou akci „Speed boost“.
  - Nápověda pod videem, značky i tlačítka Continue/Cancel odpovídají přiřazeným klávesám.
- `Esc` zruší verdikt čekající na potvrzení a první `Enter` při dvoufázovém odeslání.
- **Okno Animations** (Settings → Animations): šest stylů, živý náhled, tři rychlosti a přepínač. Pokud systém žádá omezení pohybu, animace se spustí vypnuté.
- `Enter` a `Esc` fungují i při zaměřeném přepínači verdiktu.

- **Úloha s jednou otázkou.** VACNet někdy zobrazí „Is the Subject cheating beyond a reasonable doubt?“ s odpověďmi Cheating / Uncertain / No cheats seen. DemoScope ji rozpozná a přepne do kompaktního rozvržení bez rychlých verdiktů, rozšířených kombinací a náhodného výběru.
- Popisky verdiktů v jazyce DemoScope, značky kláves `1–3` a odpovídající zkratky.
- **Indikátor zamčení.** Uncertain a No cheats seen se odemknou po skončení klipu. Karta ukazuje zbývající čas a průběh; zamčené možnosti jsou ztlumené a stisk klávesy přehraje chybový zvuk a zatřese kartou.
- Nápověda pod videem nyní ukazuje `Enter` a `1–3`; tlačítka verdiktů jsou vyšší.

- **Vlastní vysvětlení DemoScope** pro čtyři kategorie verdiktů ve všech 29 jazycích. Vyskakovací vysvětlení „?“ již nezávisí na anglickém textu VACNet, který se objevuje například v ukrajinštině.

- **Tlačítko nápovědy „?“** vedle AIM ASSIST, WALL HACK, AUTO BHOP a BOT zobrazí vysvětlení. Zavře se kliknutím mimo něj, opětovným kliknutím nebo `Esc`. Nepřebírá fokus klávesnice, takže `Enter` a `Space` zachovají funkce kontroly.

### Změněno

- **Přepracované okno nastavení.** Sekce jsou seřazeny podle četnosti použití: Hotkeys, Animations, Sound effects, Local history, Footer, Diagnostics (přidáno ve v1.2.0), Reset. Hotkeys a Animations zobrazují průběžně aktualizované souhrny.
- **Jedno resetování všeho.** Obnoví zvuk, hlasitost, zkratky a animace; historie zůstane zachována.
- Klávesu okna nastavení lze nyní změnit v Hotkeys.
- **Číslo klávesy bylo odstraněno z potvrzovacího textu verdiktu.** Tím se předejde textům „2Not sure“ a „3No cheats seen“; značka klávesy se vykresluje pomocí CSS.
- Možnost 2 úlohy s jednou otázkou nyní zní „Not sure“ a používá první osobu stejně jako text VACNet.

- **Vráceno zvýraznění klíčových frází** v tlačítkách verdiktu: hledaná fráze je tučná a oranžová, „not“ v záporných odpovědích tlumeně modré. Vybraná tlačítka zůstávají čitelná.
- `normalizeVerdictLabels` nyní odstraňuje pouze značku b, takže formát zvýraznění zůstane zachován.

HTML prvek: `<b>`.

- Hlavička portálu a karta pokynů jsou skryté; počítadlo klipů se zobrazuje i ve značce hlavičky.
- Continue je přichycené dole a viditelné i při dlouhých překladech.

Technické selektory: `.verdicts-container-inner`, `#submitbuttons`.

### Opraveno

- **Dlouhé „loading next clip“** po odeslání úlohy s jednou otázkou: kontrola již nečeká na chybějící pole `aimassist`, přijímá formulář verdiktu a metadata médií, spouští se dříve a na stránkách bez klipu po 3 sekundách tiše zavře překryv.
- Klávesové zkratky stránky (`Space`, `Enter` atd.) již neovládají stránku za otevřeným dialogem.

- Tlačítko Local history má velikost jako okolní značky, nezalamuje se, dlouhé popisky zkracuje a řádek značek se zalomí místo zúžení.

- **Text verdiktů zůstával v jazyce prohlížeče** po změně jazyka v DemoScope. VACNet používá parametr Steam `?l=`, zatímco DemoScope měnil jen vlastní popisky. Stránka kontroly se nyní otevře s vybraným `?l=`; pokud parametr chybí, načte se znovu jednou. Jazyk použitý VACNet se čte z `l=` v URL CSS a skriptů; omezení na jeden pokus brání smyčce přesměrování, pokud jazyk není podporován.

- **`Space`, `M` a `F` vypadaly nefunkčně**, protože VACNet / Video.js zpracovaly stejnou klávesu podruhé. DemoScope je nyní zachytává.
- Ve Firefoxu uvolnění `Space` již neaktivuje zaměřené tlačítko přehrávače.
- Zkratky přehrávače fungují i při zaměřeném přepínači verdiktu.

- **Panel se po změnách VACNet sestavil jen částečně:** nová hlavička portálu, karta pokynů, mřížka, odstranění verdicts-container-inner a přesunutí submitbuttons způsobily chybu `insertBefore`. Krok `ensureReviewStructure` normalizuje značky pro staré i nové rozvržení.

### Lokalizace

- 6 nových řetězců pro diagnostiku, výsledky kopírování a oznámení o vypnutí ve všech 29 jazycích.

- 12 nových řetězců pro souhrny, reset, akce stránky pozvánky a „Not sure“ ve všech 29 jazycích.

Nastavení CSS: `color-scheme: dark`.

Tlačítko „Done“ také zobrazuje přiřazenou klávesu.

- Okna Hotkeys a Animations (77 řetězců na jazyk) jsou nyní přeložena i do zbývajících 27 jazyků; dříve byla pouze v angličtině a ruštině.

- Hotkeys a Animations byly nejprve v angličtině a ruštině; ostatní překlady přibyly ve v1.2.0.

Šest stylů: pulse, breathe, ripple, heartbeat, orbit a blink.

- 5 nových řetězců (popisky, název, vysvětlení a zpráva o zamčení) ve všech 29 jazycích.

# DemoScope v1.0.0

První veřejné vydání userscriptu DemoScope pro kontrolní stránky CS2 VACNet.

### Přidáno
- Rozhraní ve 29 jazycích, automatický výběr jazyka, pět rychlých předvoleb verdiktu a 15 rozšířených kombinací.
- Ovládání videa po segmentech, krokování po snímcích, zrychlení `Shift`, přehrávání/pozastavení `Space`, ztlumení `M`, celá obrazovka `F` a dvoufázové odeslání verdiktu klávesou `Enter`.
- Nastavitelná místní historie kontrol, import/export JSON, HTML reporty a sloučení několika JSON záloh do jedné zprávy.
- Vylepšená stránka pozvánky, nastavení zvuku, zkratka nastavení, skrytí názvu účtu, dialog pravidel kontroly a volitelný randomizér verdiktu (ve výchozím stavu vypnutý).

### Soukromí
- Bez telemetrie; místní nastavení a historie se nenahrávají. Odeslané verdikty putují do VACNet přes běžný formulář webu.
