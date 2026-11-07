<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/README/README.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/README/bg_README.md) · **Magyar** · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/README/vi_README.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/README/el_README.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/README/da_README.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/README/id_README.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/README/es-ES_README.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/README/es-419_README.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/README/it_README.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/README/zh-TW_README.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/README/zh-CN_README.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/README/ko_README.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/README/de_README.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/README/nl_README.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/README/no_README.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/README/pl_README.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-PT_README.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-BR_README.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/README/ro_README.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/README/ru_README.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/README/th_README.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/README/tr_README.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/README/uk_README.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/README/fi_README.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/README/fr_README.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/README/cs_README.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/README/sv_README.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/README/ja_README.md)

</div>

<br>

<div align="center">

# DemoScope

**Billentyűzetközpontú eszköztár CS2 VACNet-ellenőrzéshez.**<br>
Ítélet-előbeállítások · kliphatárokhoz igazodó lejátszó · átköthető billentyűk · privát helyi előzmények · 29 nyelv.

<br>

[![Verzió](https://img.shields.io/badge/version-1.2.0-3b82f6?style=flat-square)](https://github.com/ebayybe/DemoScope/releases)
[![Licenc](https://img.shields.io/badge/license-GPL--3.0-22c55e?style=flat-square)](https://github.com/ebayybe/DemoScope/blob/main/LICENSE)
[![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-f59e0b?style=flat-square)](#telepítés)
[![Nyelvek](https://img.shields.io/badge/languages-29-8b5cf6?style=flat-square)](#nyelvek)
[![Adatvédelem](https://img.shields.io/badge/telemetry-none-64748b?style=flat-square)](#adatvédelem)

<br>

[**⬇ DemoScope telepítése**](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js)

[Funkciók](#funkciók) · [Telepítés](#telepítés) · [Gyorsbillentyűk](#gyorsbillentyűk) · [Testreszabás](#testreszabás) · [Dokumentáció](https://github.com/ebayybe/DemoScope/blob/main/docs/hu_FUNCTIONS.md) · [Változásnapló](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/hu_CHANGELOG.md)

</div>

<br>

## Képernyőképek

<table>
  <tr>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png" alt="A DemoScope üdvözlőképernyője"></a><br><sub><b>Üdvözlőképernyő</b></sub></td>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png" alt="A DemoScope fő felülete"></a><br><sub><b>Fő felület</b></sub></td>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png" alt="A DemoScope meghívóoldala"></a><br><sub><b>Barát meghívása</b></sub></td>
  </tr>
</table>

## Áttekintés

A DemoScope továbbfejleszti a Counter-Strike VACNet ellenőrző oldalait (`counter-strike.net/vacnet`). Ahelyett, hogy minden rövid klipnél végigkattintanád az ítéleti űrlapot, billentyűzettel dolgozhatsz: ítéleti előbeállítások, a vizsgált szegmensre korlátozott keresősáv, képkockánkénti léptetés, ideiglenes sebességnövelés, kétlépcsős elküldés és saját ítéleteid privát előzményei. Mindkét jelenlegi VACNet-űrlapot ismeri (a klasszikus négykérdésest és az új, egykérdéses feladatot), és védi magát, ha a Valve módosítja az oldalt. Minden helyben, a böngésződben fut.

## Funkciók

| | |
|---|---|
| **Ellenőrzési folyamat** | 5 gyors ítéleti előbeállítás a `1`–`5` billentyűkhöz és további 15 kombináció, opcionális véletlenszerű ítéletválasztó (alapból kikapcsolva), valamint biztonságos, kétlépcsős küldés: `Enter` élesít, a második `Enter` elküldi. `Esc` megszakítja. |
| **Mindkét feladattípus** | Felismeri a klasszikus űrlapot (célzássegítés, wallhack, auto-bhop, bot) és az egykérdéses feladatot („Is the Subject cheating beyond a reasonable doubt?”). Utóbbi tömör elrendezést, `1`–`3` billentyűkkel jelölt ítéleteket és a klip végéig visszaszámláló zárolásjelzőt kap. |
| **Kliphez igazodó lejátszó** | A keresősáv és az idő a klip elejére és végére korlátozódik; ±5 mp-es ugrás, 1/64 mp-es képkockaléptetés, `Shift` nyomva tartásával sebességnövelés (0,5×–4×), némítás és teljes képernyős gyorsbillentyűk. |
| **Saját gyorsbillentyűk** | A 18 művelet bármelyikét átállíthatod külön ablakban. Csere előtt a program megmagyarázza az ütközést (melyik művelet, csoport és funkció), az oldalon lévő billentyűtippek pedig követik a beállításaidat. |
| **Animációk** | Élő előnézetes ablak hat jelzőstílussal, három sebességgel és be/ki kapcsolóval. Alapértelmezés szerint figyelembe veszi a rendszer „mozgás csökkentése” beállítását. |
| **Érthető ítéletek** | Minden ítéletkategória mellett „?” magyarázza el a jelentését; a fontos kifejezések kiemelése miatt a „not” sem marad észrevétlen. |
| **Privát helyi előzmények** | Klipenkénti és meccsenkénti előzmények a `localStorage`-ban, JSON import és export, HTML-jelentések, valamint több biztonsági mentés egyesítése egy jelentésbe. |
| **Meghívóoldal** | Megújult `/vacnet/createinvite` oldal megjelenítés/elrejtés funkcióval, egykattintásos másolással, követelmény-összefoglalóval, bezárógombbal és `Enter` / `Esc` gyorsbillentyűkkel. |
| **29 nyelv** | Először a kiválasztott nyelvet, majd a Steam `?l=` beállítását, végül a böngésző nyelvét használja. A DemoScope-ban választott nyelv a VACNet szövegét is módosítja. |
| **Hangeffektek** | Web Audio-val előállított hangjelzések hangerő-szabályozással, előnézettel és be/ki kapcsolóval. |
| **Redesignálló működés** | A beállítási lépések elkülönülnek, a fontos elemekhez tartalék keresés tartozik, és ha az oldal felismerhetetlenné válik, a DemoScope kikapcsol, a VACNet érintetlenül hagyásával. A hibabejelentéshez egy kattintással diagnosztikai jelentés másolható. |

## Telepítés

1. Telepíts egy userscript-kezelőt, például [Tampermonkeyt](https://www.tampermonkey.net/) vagy [Violentmonkeyt](https://violentmonkey.github.io/). A szkript a `GM_addStyle` és `unsafeWindow` funkciókat használja.
2. [**Telepítsd a DemoScope-ot**](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js), majd erősítsd meg a telepítést a kezelőben.
3. Jelentkezz be a Steambe, és nyisd meg a [counter-strike.net/vacnet](https://www.counter-strike.net/vacnet/) oldalt.
4. Nyiss meg egy ellenőrzendő klipet. A DemoScope automatikusan betöltődik (a `/vacnet/join` oldal ki van zárva).

A frissítések a userscript-kezelőn keresztül érkeznek. A DemoScope Chromium-alapú böngészőkben és Firefoxban működik.

## Gyorsbillentyűk

Az ellenőrző oldalakon működnek, ha a fókusz nincs szerkeszthető mezőn vagy más interaktív vezérlőn. **Az alábbi billentyűk mindegyike módosítható** a **Settings → Hotkeys** menüben.

| Billentyű | Művelet |
|---|---|
| `1` … `5` | Klasszikus űrlap: előbeállítás alkalmazása (1 bot + célzás + wallhack; 2 célzás + wallhack; 3 rage; 4 tiszta játékos; 5 bizonytalan). |
| `1` `2` `3` | Egykérdéses feladat: Cheating / Not sure / No cheats seen. |
| `Enter` | Megerősítés. Klasszikus űrlap: egyszer megnyomva élesít, másodszor elküldi. |
| `Esc` | Megszakítja a megerősítésre váró ítéletet, vagy hatástalanítja az első `Enter`-t. |
| `Shift` (nyomva tartva) | Sebességnövelés (0,5×–4×; alapból 2×, az oldalon választható). |
| `←` `→` | Ugrás 5 másodperccel vissza / előre. |
| `,` `.` | Egy képkocka vissza / előre (1/64 mp). |
| `Space` | Lejátszás / szünet. |
| `M` / `F` | Némítás / teljes képernyő (a videóra duplán kattintva is váltható a teljes képernyő). |
| `F2` | Beállítások megnyitása. |
| `Enter` / `Esc` *(meghívóoldal)* | Kész / bezárás. |

## Testreszabás

A `F2` billentyűvel nyisd meg a beállításokat. A leggyakrabban használttól a ritkábban használatig vannak rendezve:

- **Hotkeys**: külön ablak minden művelettel, cél szerint csoportosítva; egyedi visszaállítás, „Reset all” és konfliktuskezelés **Replace**, **Swap** vagy **Cancel** lehetőséggel. Az `Esc` ugyanúgy hozzárendelhető, mint bármely más billentyű.
- **Animations**: válassz stílust (pulse, breathe, ripple, heartbeat, orbit, blink), sebességet, vagy kapcsold ki az animációkat. Minden kártya élő előnézetet mutat.
- **Sound effects**: be/ki, hangerő (az egérgörgővel is állítható) és hangpróba.
- **Local history**: be/ki, korlátok (10/20/30/50 bejegyzés kulcsonként, 100/200/300/500 kulcs), 12/24 órás időformátum, JSON-mentések és HTML-jelentések.
- **Footer**: visszajelzési hivatkozás, jelentéshivatkozás, szerzői jogi sor vagy a teljes lábléc elrejtése.
- **Diagnostics**: hibabejelentéshez szükséges jelentés másolása (lásd: [Hiba bejelentése](#hiba-bejelentése)).
- **Reset**: egyetlen gomb visszaállítja a hang, a billentyűk és az animációk alapértékeit. Az előzmények megmaradnak.

## Nyelvek

A DemoScope 29 nyelven érhető el: bolgár, kínai (egyszerűsített és hagyományos), cseh, dán, holland, angol, finn, francia, német, görög, magyar, indonéz, olasz, japán, koreai, norvég, lengyel, portugál (Portugália és Brazília), román, orosz, spanyol (Spanyolország és Latin-Amerika), svéd, thai, török, ukrán és vietnámi. Az oldalon lévő választóval bármikor módosíthatod a nyelvet.

## Hiba bejelentése

A Valve előzetes értesítés nélkül módosíthatja a VACNet oldalait. Ha valami nem működik:

1. Nyomd meg a `F2` billentyűt, nyisd meg a **Diagnostics** részt, majd kattints a **Copy diagnostics** gombra.
2. Illeszd be a szöveget egy új [issue-ba](https://github.com/ebayybe/DemoScope/issues), és ha tudsz, csatolj képernyőképet.

A jelentés tartalmazza a szkript verzióját, az időpontot, a böngésző nyelvét és user-agent karakterláncát, a megtalált oldal-elemeket, a sikertelen beállítási lépéseket és az oldal szerkezetét (csak tagek, azonosítók és osztályok). Nem tartalmazza az oldal szövegét, a fióknevet vagy az előzményeket. Ha az oldal felismerhetetlenné válik, a DemoScope ott kikapcsol, és ezt jelzi; a VACNet tovább működik.

## Gyakori kérdések

<details>
<summary><b>A DemoScope azt írja, hogy kikapcsolt ezen az oldalon. Mi történt?</b></summary>

A VACNet oldalának szerkezete megváltozott, ezért a szkript félreállt, nehogy félig felépített felületet hagyjon. Másold ki a diagnosztikát (lásd fent), és nyiss egy issue-t; a frissítés általában hamar elkészül.
</details>

<details>
<summary><b>A VACNet ítéletszövege más nyelvű, mint a DemoScope.</b></summary>

A DemoScope-ban kiválasztott nyelvet a Steam `?l=` paraméterén keresztül kéri le a VACNet. Ha nincs hozzá fordítása, a VACNet az alapértelmezett nyelvére vált, miközben a DemoScope saját feliratai a választott nyelven maradnak.
</details>

<details>
<summary><b>A DemoScope választja ki helyettem az ítéletet?</b></summary>

Nem. Az előbeállítások csak az általad kért ítéletgombokra kattintanak, és a beküldést mindig te erősíted meg. Minden klipet önállóan ellenőrizz, és tartsd be a program szabályait.
</details>

<details>
<summary><b>Az egykérdéses feladatnál is rögzül az előzmény?</b></summary>

Még nem. A helyi előzmény jelenleg csak a klasszikus, négykérdéses űrlaphoz készül.
</details>

<details>
<summary><b>Hogyan állíthatom vissza az alapértelmezett billentyűket?</b></summary>

Használd a módosított billentyű melletti visszaállítás ikont, a Hotkeys ablak **Reset all** gombját vagy a beállítások **Reset** gombját; ez utóbbi a hangot és az animációkat is visszaállítja.
</details>

## Architektúra

A DemoScope egyetlen, önmagát meghívó függvény (`@run-at document-start`, `@noframes`). Az `init()` meghatározza az oldaltípust, ellenőrzi, hogy felismerhető-e, és elindítja az alábbi modulokat. Mind a 217 legfelső szintű függvény teljes leírása — paraméterekkel, visszatérési értékekkel és tárolókulcsokkal — az [hu_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/hu_FUNCTIONS.md) fájlban található.

<details>
<summary><b>Modulok áttekintése</b></summary>

| Modul | Feladat | Fontos függvények |
|---|---|---|
| `Localization` | Felületi nyelv, szövegkeresés, zászlók, nyelvválasztó, a VACNet `?l=` beállításának szinkronizálása | `getActiveLocale`, `tr`, `settingText`, `syncSelectedLanguage`, `installLanguageSelector` |
| `Segment & player` | Kliphatárok olvasása, Video.js/HTML5-lejátszás kezelése, a webhely saját szegmensciklusának letiltása | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | Keresősáv, billentyűtippek, sebességnövelés, képkockaléptetés, gyorsbillentyűk | `installCustomControls`, `installPlayerEnhancements` |
| `Hotkeys` | Műveleti jegyzék, hozzárendelések, konfliktusészlelés, Hotkeys ablak | `getBinding`, `findKeyConflict`, `getActionForEvent`, `ensureHotkeysDialog` |
| `Verdict presets` | Előbeállítások táblája, kijelölési állapot, véletlenszerű alkalmazás | `applyPreset`, `detectActivePreset`, `buildEnhancementBar` |
| `Single-question task` | Címkék, zárolásjelző és az új űrlap billentyűi | `isCheatingMode`, `selectCheatingVerdict`, `updateCheatingLock` |
| `Submit flow` | Kétlépcsős megerősítés, megszakítás, `verdict_labels[]`, azonos eredet ellenőrzése, betöltőréteg | `invokeProceedAction`, `invokeCancelAction`, `submitVerdictForm`, `finishSubmitLoadingWhenReady` |
| `Local history` | Klip- és meccselőzmények, mentések és jelentések | `appendReviewHistory`, `importLocalHistory`, `exportCombinedHistoryReports` |
| `Settings & animations` | Beállítási ablak és alablakok, hang, jelzőanimációk | `ensureSettingsDialog`, `installExtraSettingsSections`, `ensureAnimationsDialog`, `playUiSound` |
| `Invite page` | Megújított oldal, bezárógomb, gyorsbillentyűk | `installInvitePage`, `installInviteExtras` |
| `Resilience` | Elkülönített lépések, tartalék keresések, kikapcsolás, diagnosztika | `safeStep`, `disableDemoScope`, `buildDiagnosticsReport` |
| `Bootstrap` | Belépési pont | `init`, `enhanceLayout` |

</details>

## Adatvédelem

A DemoScope nem küld telemetriát, és nem tölti fel a beállításaidat vagy az előzményeket. Az elküldött ítélet a webhely szokásos űrlapján jut el a VACNethez. A beállítások és az előzmények a böngésződben maradnak: `localStorage`-ban (a kulcsok `demoscope` kezdetűek) és `sessionStorage`-ban. Az előzmények törléséhez válaszd a **Settings → Local history → Clear history** lehetőséget. A diagnosztikai jelentés csak a vágólapra kerül; te döntöd el, megosztod-e.

## Jogi nyilatkozat

A DemoScope nem hivatalos közösségi projekt, nem áll kapcsolatban a Valve Corporationnel, és a Valve nem támogatja. Nem hoz ítéletet helyetted. Minden klipet önállóan ellenőrizz, és tartsd be az ellenőrző program szabályait. Saját felelősségre használd.

## Licenc

A projekt a [GNU GPL v3.0](https://github.com/ebayybe/DemoScope/blob/main/LICENSE) licenc alatt érhető el.

## Köszönetnyilvánítás

- **Az eredeti ötlet és alapfelület:** a skinsales / goodvibes által készített [*CS2 VACNet Review — Player & Layout Enhancements*](https://greasyfork.org/ru/scripts/591778-cs2-vacnet-review-player-layout-enhancements) (MIT).
- **Kapcsolódó koncepció és orosz nyelvű fork:** az authorless által készített [*VACLens RU — CS2 Review Assistant*](https://greasyfork.org/ru/scripts/592414-vaclens-ru-cs2-review-assistant) (MIT).
- **Az architektúra újratervezése, újrafelhasználható keretrendszer, 29 nyelv támogatása és egyéni ítéletsablonok:** ebayybe.
