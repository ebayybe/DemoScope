<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/docs/en_FUNCTIONS.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/docs/bg_FUNCTIONS.md) · **Magyar** · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/docs/vi_FUNCTIONS.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/docs/el_FUNCTIONS.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/docs/da_FUNCTIONS.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/docs/id_FUNCTIONS.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/docs/es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/docs/es-419_FUNCTIONS.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/docs/it_FUNCTIONS.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/docs/zh-TW_FUNCTIONS.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/docs/zh-CN_FUNCTIONS.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/docs/ko_FUNCTIONS.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/docs/de_FUNCTIONS.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/docs/nl_FUNCTIONS.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/docs/no_FUNCTIONS.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/docs/pl_FUNCTIONS.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/docs/pt-PT_FUNCTIONS.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/docs/pt-BR_FUNCTIONS.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/docs/ro_FUNCTIONS.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/docs/ru_FUNCTIONS.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/docs/th_FUNCTIONS.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/docs/tr_FUNCTIONS.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/docs/uk_FUNCTIONS.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/docs/fi_FUNCTIONS.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/docs/fr_FUNCTIONS.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/docs/cs_FUNCTIONS.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/docs/sv_FUNCTIONS.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/docs/ja_FUNCTIONS.md)

</div>

# DemoScope — függvényreferencia

A `DemoScope.user.js` v1.4.0 mind a(z) 217 legfelső szintű függvényének teljes leírása (név, paraméterek, visszatérési érték, feladat). Vissza a [README](../README.md) oldalra.

Jelölések: a `—` paraméter nélküli függvényt jelent; a `void` azt, hogy a függvényt a mellékhatásai miatt hívják.

## Felhasználói működés áttekintése

| Terület | Leírás |
|---|---|
| Támogatott oldalak | Kiegészíti a VACNet üdvözlőoldalát (`/vacnet`), ellenőrzőoldalait (`/vacnet/clips`), meghívóoldalát (`/vacnet/createinvite`) és az ellenőrzőoldal klip nélküli állapotát. Más oldalakat nem módosít. |
| Feladattípusok | Felismeri a VACNet által megjelenített űrlapot. A **klasszikus űrlaphoz** (aim assist, wallhack, auto-bhop, bot) előbeállításokat és kombinációkat ad. Az **egykérdéses feladat** tömör nézetet használ három, `1`–`3` billentyűhöz rendelt ítélettel és a hátralévő klipidőt jelző zárral; gyors ítéletek és kombinációk nélkül. |
| Nyelv | A Steam 29 nyelvét támogatja. A mentett kézi választás az elsődleges; ennek hiányában a Steam `?l=` paraméterét, majd a böngésző/oldal nyelvét használja. A DemoScope választása a hozzá illő `?l=` értéket a VACNetnek is átadja. Automatikus módban a Steam nyelve a böngészőhöz igazodik. |
| Üdvözlő- és meghívóoldalak | Átalakítja a két oldal megjelenését, közös nyelvválasztót és szemgombot ad a fióknév elrejtésére. Az üdvözlőoldalon Enter vagy Space továbblép, ha nincs vezérlő fókuszban. A meghívólink elrejthető, megjeleníthető és másolható, a feltételek pedig olvashatók; × bezárja az oldalt, Enter a „Done”, Esc a × műveletét végzi. |
| Klipek ellenőrzése | Ítélet-előbeállításokat és kombinációkat, alapból kikapcsolt véletlenszerűsítőt, Shift nyomva tartásakor állítható sebességet, szegmensen belüli keresést, képkockánkénti léptetést és lejátszási gyorsbillentyűket ad. A „?” lokalizált magyarázatot nyit; a fontos kifejezések DemoScope-színekkel emelkednek ki. |
| Gyorsbillentyűk | Minden billentyűparancs közös jegyzékbeli művelet, és a **Beállítások → Gyorsbillentyűk** ablakban módosítható. Az ütközéseket oldalanként ellenőrzi; a meghívó- és ellenőrzőoldalak nem ütköznek. Megmutatja az adott billentyűt használó műveletet, csoportot és leírást. A hozzárendelés cserélhető, felcserélhető vagy megszakítható; minden művelet visszaállítható. |
| Beküldés | Az `Enter` vagy `Numpad Enter` indítja a „Continue” műveletet. A klasszikus űrlapon az első lenyomás előkészít, a második beküld. Egy kérdésnél az ítélet kiválasztása VACNet-megerősítést jelenít meg, amely Enterrel hagyható jóvá. Az `Esc` megszakítja a függő megerősítést vagy az első lenyomást. A Space nem küld be. |
| Beállítások | Alapértelmezés szerint az `F2` nyitja meg (a Gyorsbillentyűk ablakban módosítható). Tartalmaz gyorsbillentyűket, animációkat, hangot és hangerőt, helyi előzményeket és korlátaikat, 12/24 órás formátumot, mentéseket, láblécet, diagnosztikát és közös visszaállítást. |
| Animációk | A DemoScope melletti jelzőpont hat stílussal animálható (pulse, breathe, ripple, heartbeat, orbit, blink), élő előnézettel, három sebességgel és kapcsolóval. Rendszerszintű mozgáscsökkentés esetén induláskor ki van kapcsolva. |
| Helyi előzmények | Az ítéletösszefoglalókat a böngésző `localStorage` tárában menti, feltöltés nélkül. Importálható, JSON/HTML formában exportálható, több JSON-mentésből egy HTML-jelentéssé egyesíthető, törölhető vagy kikapcsolható. Korlát: kulcsonként 10/20/30/50, összesen 100/200/300/500 kulcs. Kikapcsoláskor új adat nem készül, a régi megmarad; csak a klasszikus űrlap kerül naplózásra. |
| Üres sor | A VACNet üres sorról szóló üzenetét honosított útmutatóra, böngészőben tárolt első megjelenési időre és nyelvválasztóra cseréli. A napi 250 demó megfigyelésen alapuló tájékoztatás; a DemoScope nem kényszeríti ki és nem kerüli meg a szolgáltatáskorlátot. |
| Lábléc | Honosított DemoScope-láblécet használ. A klipoldalakon visszajelzési és jelentési linkeket mutathat; külön elrejthetők a linkek, a szerzői jogi sor vagy az egész lábléc. |
| Hibatűrés | A beállítási lépések külön futnak, a fontos elemekhez tartalék keresés tartozik. Ha az oldal nem ismerhető fel, a DemoScope ott kikapcsol, visszaállítja a VACNet elrendezését és értesítést mutat. A **Beállítások → Diagnosztika** hibajelentéshez másolható jelentést készít a verzióról, talált elemekről, hibás lépésekről és oldalstruktúráról. |

## Lokalizáció

| Függvény | Paraméterek | Visszatérés | Feladat |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Egy nyelv zászlójának beágyazott SVG-kódja; ha nincs, földgömb ikont ad. |
| `getSavedLocale` | — | `string \| null` | Beolvassa a felhasználó mentett nyelvét (`demoscopeLanguage`) a `localStorage`-ból. |
| `getActiveLocale` | — | `string` | Meghatározza az aktív nyelvet: mentett választás → Steam `?l=` → böngésző/oldal nyelve → `en`. |
| `getLanguageBadge` | — | `string` | A nyelv saját megjelenített neve, pl. „English version”, a nyelvválasztó jelvényéhez. |
| `getBrowserLocale` | — | `string \| null` | Megkeresi a böngésző első támogatott nyelvét, a regionális változatokat is beleértve. |
| `syncAutomaticLanguage` | — | `boolean` | Automatikus módban a böngésző nyelvéhez igazítja a ?l= paramétert, eltéréskor navigál. |
| `getRenderedSteamLanguage` | — | `string \| null` | A lap saját stíluslap- és script-URL-jeiben lévő l= paraméterből olvassa ki, milyen nyelven jelenítette meg ténylegesen a VACNet az oldalt. |
| `syncSelectedLanguage` | — | `boolean` | A DemoScope-ban kézzel választott nyelv után egyszer újrakéri az oldalt a megfelelő ?l= paraméterrel, hogy a VACNet szövege is ezt a nyelvet használja. Ha a nyelv már egyezik, kihagyja; megelőzi az átirányítási hurkot. Navigáció esetén true értéket ad vissza. |
| `tr` | `key: string` | `string` | Felületi szöveget keres az aktív nyelvhez (tartalék: angol, majd maga a kulcs). |
| `inviteText` | `key: string` | `string` | Ugyanez a keresés a meghívóoldal szövegtáblájára. |
| `settingText` | `key: string` | `string` | Ugyanez a keresés a beállítások ablak szövegtáblájára. |
| `getPresetLabel` | `name: string` | `string` | Egy sablon lokalizált felirata; összeállítja az olyan kombinációkat, mint a „Bot + Aim”. |
| `buildLanguageOptions` | `{ activeLocale = getActiveLocale(), selectedLocale = null } = {}` | `string (HTML)` | A nyelvválasztó gombok HTML-je, az „auto” bejegyzéssel együtt. |
| `installLanguageSelector` | `root: HTMLElement, onLocaleSelect: Function \| null = null` | `void` | Beköti és elhelyezi a nyelvválasztót, menti a választást és újratölti az oldalt; opcionális callback kezelheti helyette a választást. |
| `queueNoticeText` | `key: string, locale = getQueueNoticeLocale()` | `string` | Lokalizált szöveget keres az üres várólistához vagy a lábléchez. |

## Hangeffektek és beállítások ablak

| Függvény | Paraméterek | Visszatérés | Feladat |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | A beállítások ablakban látható „N bejegyzés · utolsó bejegyzés: …” sor. |
| `soundsEnabled` | — | `boolean` | Be vannak-e kapcsolva a felület hangjai (`demoscopeSoundEffectsEnabled`, alapértelmezés: be). |
| `getSoundVolume` | — | `number (0–1)` | A mentett hangerő (`demoscopeSoundEffectsVolume`, alapértelmezés 0,4). |
| `playUiSound` | `kind = "click"` | `void` | Rövid hangsorozatot szintetizál Web Audióval (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`); soha nem dob hibát. |
| `readSettingsHotkey` | — | `string` | A beállítások ablakot megnyitó, mentett `KeyboardEvent.code` (alapértelmezés `F2`). |
| `formatHotkey` | `code: string` | `string` | Olvasható billentyűnév (`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | Kinyeri a fizikai billentyűkódot, a nem latin kiosztásokat visszaképezi `KeyX` alakra; használhatatlan esetben `""`. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | Igaz azokra a billentyűkre, amelyeket a DemoScope vagy a lejátszó már használ (Enter, szóköz, nyilak, `M`, `F`, `1`–`5`, …). |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Létrehozza és összekapcsolja a beállításokat: hangok és hangerő, próba, gyorsbillentyű, helyi előzmények és korlátok, időformátum, JSON-import/export, HTML-export/összefűzés, előzmények törlése, lábléc láthatósága és visszaállítás. |
| `openSettingsDialog` | `opener = null` | `void` | Megnyitja az ablakot az aktuális értékekkel, és megjegyzi, melyik elemre kell visszaadni a fókuszt. |
| `installSettingsUi` | — | `void` | Telepíti a globális, capture fázisú billentyűfigyelőt (ablak megnyitása/bezárása, újrakötés) és a hangeseményeket. |
| `installUiSoundEvents` | — | `void` | Delegált kattintásfigyelő, amely visszajelző hangokat játszik a DemoScope vezérlőihez. |
| `ensureSettingsLayoutStyles` | — | `void` | Beilleszti a beállításablak stílusait: balra igazított szakaszok és összefoglaló jelvényes sorok. |
| `refreshSettingsSummaries` | — | `void` | Frissíti a Gyorsbillentyűk és Animációk sorok összefoglaló jelvényeit. |
| `installExtraSettingsSections` | `settingsDialog: HTMLDialogElement` | `void` | Hozzáadja a Gyorsbillentyűk, Animációk, Diagnosztika és Visszaállítás szakaszokat, a régi beállításbillentyű-blokkot pedig elrejti. |

## Mentések, jelentések és előzménykorlátok

| Függvény | Paraméterek | Visszatérés | Feladat |
|---|---|---|---|
| `exportLocalHistory` | — | `void` | Letölti a teljes előzményt `demoscope-history-YYYY-MM-DD.json` néven. |
| `downloadHistoryFile` | `content: string, filename: string, mimeType: string` | `void` | Fájlletöltést indít egy ideiglenes Blob URL-en keresztül. |
| `collectHistoryReportRows` | `store: object` | `Array<{vodId, ts, summary, segment}>` | Kilapítja és duplikátummentesíti az előzménybejegyzéseket, legújabbal kezdve. |
| `exportReadableHistory` | — | `void` | Letölti az előzmények önálló, lokalizált HTML-jelentését. |
| `buildReadableHistoryReport` | `rows: Array, reportTitle: string, summaryNote = ""` | `string (HTML document)` | Felépíti a kiescapelt HTML-jelentést. |
| `setMergeReportStatus` | `statusElement: HTMLElement, message: string, state: string` | `void` | Frissíti az egyesítő eszköz állapotsorát (`progress`, `success`, `warning`). |
| `exportCombinedHistoryReports` | `files: FileList \| File[], statusElement: HTMLElement, button: HTMLButtonElement` | `Promise<void>` | Ellenőrzi a sok JSON-mentést (fájlonként ≤ 5 MB, összesen ≤ 100 MB), kiszűri a duplikátumokat, és letölt egy közös HTML-jelentést. |
| `isSafeHistoryKey` | `key: string` | `boolean` | Fehérlistás ellenőrzés az előzménykulcsokra (blokkolja a `__proto__`, `constructor` és hibás kulcsokat). |
| `importLocalHistory` | `file: File` | `Promise<void>` | Ellenőriz egy JSON-mentést, egyesíti a helyi előzménnyel (a korlátok betartásával), és frissíti a felületet. |
| `readHistoryLimit` | `storageKey: string, allowedValues: number[], defaultValue: number` | `number` | Számszerű korlátot olvas a `localStorage`-ból, csak megengedett értékeket fogadva el. |
| `getHistoryPerKeyLimit` | — | `number` | Klip-/játékkulcsonként megőrzött bejegyzések (10/20/30/50, alapértelmezés 30). |
| `getHistoryTotalLimit` | — | `number` | Összesen megőrzött klip-/játékkulcsok száma (100/200/300/500, alapértelmezés 300). |

## Fióknév és meghívóoldal

| Függvény | Paraméterek | Visszatérés | Feladat |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Jelenleg el van-e rejtve a Steam-fióknév. |
| `installAccountNameControl` | — | `void` | Szem alakú kapcsolót ad a kijelentkezési link mellé, és `MutationObserver`-rel szinkronban tartja. |
| `installInvitePage` | — | `boolean` | Átalakítja a `/vacnet/createinvite` oldalt: kártyaelrendezés, link megjelenítése/elrejtése és másolása (Clipboard API `execCommand` tartalékkal), követelménylista, nyelvválasztó. `false`-t ad, ha a várt elemek hiányoznak. |
| `installInviteExtras` | `card: HTMLElement, doneLink: HTMLElement \| null` | `void` | Hozzáadja a bezárás (×) gombot és a rögzítési fázisú listenert az inviteDone és inviteClose műveletekhez. Figyelmen kívül hagyja a billentyűket, ha gomb, hivatkozás, mező, modális ablak vagy nyelvlista van fókuszban. |
| `refreshInviteKeyLabels` | — | `void` | Az aktuális billentyű-hozzárendelések alapján frissíti a „Done” feliratot és a × súgóját. |
| `installWelcomePage` | — | `boolean` | Átalakítja az üdvözlőoldalt, márkajelzést és nyelvválasztót ad hozzá; Enter/Space folytat; hiányzó elemeknél false értéket ad. |

## Klipszegmens és lejátszóadapter

| Függvény | Paraméterek | Visszatérés | Feladat |
|---|---|---|---|
| `parseSegmentBounds` | — | `{startTime, endTime, duration} \| null` | Kinyeri a `startTime`/`endTime` értéket az oldal beágyazott szkriptjeiből. |
| `formatSegmentTime` | `seconds: number` | `string` | A másodperceket `m:ss.cc` formátumra alakítja. |
| `getVideoElement` | — | `HTMLVideoElement \| null` | Megkeresi az ellenőrzés `<video>` elemét. |
| `getVjsPlayer` | — | `Video.js player \| null` | Visszaadja az oldal Video.js lejátszóját, ha elérhető és nincs megszüntetve. |
| `createPlayerAdapter` | — | `adapter \| null` | Egységes API a Video.js / HTML5 videó fölött: `currentTime`, `paused`, `pause`, `play`, `playbackRate(s)`, `muted`, `on`, `isFullscreen`, `requestFullscreen`, `exitFullscreen`. |
| `waitForPlayerAdapter` | `timeoutMs = 20000` | `Promise<adapter>` | 100 ms-onként lekérdezi, hogy van-e lejátszó; időtúllépéskor elutasít. |
| `clampSegment` | `time: number, bounds: object` | `number` | A megadott időt a klip határai közé szorítja. |
| `segmentProgress` | `time: number, bounds: object` | `number (0–1)` | Relatív pozíció a klipen belül. |
| `installCustomControls` | `player, bounds, refreshDisplay: {current: Function}` | `void` | Hozzáadja a keresősávot, az időkijelzést és a billentyűsúgót a videó alá. |
| `pauseLayoutMutations` | `run: Function` | `void` | Visszahívást futtat, miközben az elrendezésfigyelők fel vannak függesztve (megelőzi a visszacsatolási hurkokat). |
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | Igaz értéket ad, ha a fókusz beviteli mezőn, textarea-n, selecten vagy szerkeszthető szövegen van. |
| `isPlayerShortcutBlocked` | `target: EventTarget` | `boolean` | Az isShortcutBlocked függvényhez hasonló, de átengedi az ítélet rádiógombjait, mert kattintás után rajtuk marad a fókusz. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | Egy sebességopció felirata. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | `<option>` lista a sebességválasztóhoz (0,5–4×). |
| `readStoredShiftSpeed` | — | `number` | Mentett Shift-sebesség (alapértelmezés 2×). |
| `readStoredVerdictRandomizer` | — | `boolean` | Az ítélet-randomizáló mentett állapota (alapértelmezés: ki). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | Bekábelezi a lejátszási sebesség kezelését, a szegmens korlátozását/szüneteltetését, a keresés/képkockalépés/némítás/teljes képernyő segédeit és a globális gyorsbillentyűket (`1`–`5`, nyilak, `,` `.`, szóköz, `M`, `F`, Shift). Belső zárványok: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, rajzolási ciklus segédei. |

## Ítéletsablonok

| Függvény | Paraméterek | Visszatérés | Feladat |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | A „skip” értéket választja minden olyan ítéletcsoportban, ahol nincs kijelölés. |
| `getSelectedVerdictState` | — | `object` | A `aimassist`, `wallhack`, `autobhop`, `bot` aktuális értéke (`positive` / `negative` / `skip` / `null`). |
| `detectActivePreset` | — | `string \| null` | Az aktuális kijelöléssel egyező sablon neve. |
| `syncPresetButtons` | — | `string \| null` | Frissíti az `aria-pressed` attribútumot a sablongombokon és a bővített sablon jelvényét. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | Rákattint egy sablon rádiógombjaira; bekapcsolt randomizálónál megkeveri a sorrendet, és kattintások között 200–600 ms-ot vár. Futás közben letiltja a sablongombokat. |
| `readAdvancedPresetsOpen` | — | `boolean` | Nyitva maradt-e a bővített sablonok fiókja. |
| `normalizeVerdictLabels` | `root = document` | `void` | Eltávolítja a kiemelő jelölést az ítéletfeliratokról. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Lokalizált címeket ad minden ítéletcsoport fölé. |
| `ensureVerdictHelp` | `block: HTMLElement, titleEl: HTMLElement, title: string, field: string` | `void` | Létrehozza a „?” gombot és az ítéletcsoport magyarázó buborékát a DemoScope honosított szövegével. |
| `closeVerdictHelp` | `except = null` | `void` | A megadott kivételével bezárja az összes nyitott magyarázó buborékot. |
| `installVerdictHelpHandlers` | — | `void` | Egyszer telepíti a buborékok delegált kattintás-, külső kattintás- és Esc-kezelőit. |

## Értesítések, lábléc és beküldés közbeni betöltés

| Függvény | Paraméterek | Visszatérés | Feladat |
|---|---|---|---|
| `hideSiteFooter` | — | `void` | Elrejti a webhely láblécét. |
| `showToast` | `message: string, type = "info", duration = 1800` | `void` | Nem blokkoló, ARIA-live értesítést jelenít meg. |
| `markSubmitPending` | — | `void` | Elmenti a beküldés időpontját és az aktuális klip azonosítóját a `sessionStorage`-ba. |
| `isSubmitPending` | — | `boolean` | Vár-e egy beküldés a következő klipre. |
| `clearSubmitPending` | — | `void` | Törli a függő beküldés jelzőit. |
| `showSubmitLoadingOverlay` | `message = tr("nextClip")` | `void` | Megjeleníti a teljes oldalas betöltési réteget. |
| `hideSubmitLoadingOverlay` | — | `void` | Elrejti a réteget és törli a függő állapotot. |
| `bootSubmitLoadingIfPending` | — | `void` | Oldalbetöltéskor újra megjeleníti a réteget, ha van függő beküldés. |
| `isReviewPageReady` | `prevVod: string, startedAt: number` | `boolean` | Igaz, ha a következő klip felülete és médiája készen áll. |
| `finishSubmitLoadingWhenReady` | — | `Promise<void>` | Legfeljebb 30 s-ot vár a következő klipre, majd elrejti a réteget (időtúllépéskor hibaértesítés). |

## Helyi előzménytár

| Függvény | Paraméterek | Visszatérés | Feladat |
|---|---|---|---|
| `extractVodId` | — | `string` | A videó URL-jéből származtatja a klip-/játékazonosítót. |
| `getGameKey` | — | `string` | Előzménykulcs a játékhoz (`game::<id>`). |
| `getClipKey` | `bounds: object` | `string` | Előzménykulcs egy szegmenshez (`<id>:<start>:<end>`). |
| `normalizeHistoryEntry` | `entry: any` | `{ts, summary, segment} \| null` | Ellenőriz és megtisztít egy előzménybejegyzést. |
| `readHistoryEntries` | `store: object, key: string` | `Array` | Egy kulcs normalizált bejegyzései. |
| `getGameHistoryEntries` | `store: object` | `Array` | Az aktuális játék bejegyzései (támogat egy régi kulcsot). |
| `getClipHistoryEntries` | `store: object, bounds: object` | `Array` | Az aktuális szegmens bejegyzései. |
| `formatClipId` | `vodId: string` | `string` | Rövid, számokból álló megjelenítési azonosító (`#0000000`), a klipazonosítóból képzett hash alapján. |
| `formatRelativeTime` | `timestamp: number` | `string` | Lokalizált relatív idő (`Intl.RelativeTimeFormat`). |
| `readClipHistoryStore` | — | `object` | Betölti az előzményobjektumot a `localStorage`-ból (`{}` hiba esetén). |
| `pruneHistoryStore` | `store: object` | `void` | Alkalmazza a kulcsonkénti és az összesített korlátot (a legrégebbi kulcsok esnek ki először). |
| `writeClipHistoryStore` | `store: object` | `boolean` | Nyes és ment; kvóta-/tárolási hiba esetén `false`. |
| `summarizeCurrentVerdict` | — | `string` | Az aktuális kijelölés sablonneve, vagy `mixed`. |
| `formatSummaryLabel` | `summary: string` | `string` | Lokalizált felirat egy előzmény-összegzéshez. |
| `formatClockTime` | `seconds: number` | `string` | `m:ss` (vagy `x.xs`) óraformátum. |
| `formatHumanSegment` | `bounds: object` | `string` | Olvasható szegmenstartomány. |
| `formatGameLabel` | — | `string` | Az aktuális játék lokalizált felirata. |
| `historyEntryKey` | `entry: object` | `string` | A duplikátumok kiszűrésére használt azonosítósztring. |
| `formatPriorStat` | `count: number, label: string` | `string` | „felirat: N” sor az előzménypanelen. |
| `buildHistoryListItems` | `clipEntries: Array, gameEntries: Array, currentSegment: string` | `Array` | Egy megjelenítendő listává egyesíti a klip- és játékbejegyzéseket. |
| `renderHistoryItem` | `item: object` | `string (HTML)` | Egy előzménysor HTML-je. |
| `escapeHtml` | `value: any` | `string` | Kiescapeli ezeket: `& < > " '`. |
| `buildClipHistoryPanel` | `bounds, gameEntries, clipEntries` | `string (HTML)` | Az előzménypanel HTML-je, az ellenőrzési szabályok gombjával együtt. |
| `ensureClipHistoryPanel` | — | `void` | Létrehozza a panel tárolóját, ha hiányzik. |
| `ensureReviewRulesDialog` | — | `void` | Létrehozza az ellenőrzési szabályok ablakát, és összeköti a megnyitó/bezáró gombjait. |
| `installLocalHistoryButton` | `panel: HTMLElement` | `void` | Összeköti a „helyi előzmény” gombot (a listához görget, vagy üres állapot esetén értesítést mutat). |
| `positionClipHistoryPanel` | — | `void` | A panelt a `.verdicts-container` első elemeként tartja. |
| `renderClipHistory` | `bounds: object \| null` | `void` | Újrarendereli az előzménypanelt az aktuális klipre. |
| `appendReviewHistory` | `bounds: object \| null` | `void` | Hozzáfűzi az aktuális ítélet összegzését a játék és a klip előzményéhez. |
| `isLocalHistoryEnabled` | — | `boolean` | Beolvassa, hogy aktív-e a helyi előzmény; alapértelmezés szerint aktív. |
| `readTimeFormat` | — | `string` | Beolvassa az időformátumot: automatikus, 12 vagy 24 órás. |
| `formatQueueFirstSeen` | `timestamp: number, locale = getActiveLocale()` | `string` | A nyelv és az időformátum szerint formázza az első észlelés idejét. |
| `getQueueNoticeLocale` | — | `string` | Visszaadja az üres várólista értesítésének aktív nyelvét. |
| `migrateEmptyQueueLanguage` | — | `boolean` | A régi nyelvválasztást a közös beállításba helyezi át, és szinkronizálja az URL-t. |
| `updateEmptyQueueTimestamp` | — | `void` | Frissíti az első észlelés megjelenített idejét. |

## Beküldési folyamat

| Függvény | Paraméterek | Visszatérés | Feladat |
|---|---|---|---|
| `isLabelingMode` | — | `boolean` | Igaz azokon az oldalakon, amelyek a négy ítéletcsoportot mutatják. |
| `getProceedButton` | — | `HTMLButtonElement \| null` | A natív beküldés gomb, ha látható és engedélyezett. |
| `recordProceedHistoryIfLabeling` | — | `void` | Beküldésenként egyszer rögzíti az előzményt (újrabelépés elleni védelemmel). |
| `resetProceedArmed` | — | `void` | Hatástalanítja a kétlépcsős beküldést. |
| `refreshProceedButtonLabel` | — | `void` | Frissíti a gomb feliratát/`Enter` súgóját és az élesített állapot stílusát. |
| `verdictLabelForField` | `field: string, selected: string` | `string \| null` | Egy kijelölést `guilty_*` / `innocent_*` / `skip_*` értékre képez le. |
| `prepareVerdictFormForSubmit` | — | `boolean` | Rejtett `verdict_labels[]` mezőket épít; ha bármelyik csoport kitöltetlen, hibaértesítést mutat, és `false`-t ad. |
| `isSafeSubmitTarget` | `form: HTMLFormElement` | `boolean` | Csak azonos eredetű, HTTPS űrlapműveleteket enged. |
| `restoreSubmitUi` | — | `void` | Sikertelen beküldés után visszaállítja a gombokat. |
| `submitVerdictForm` | `{ recordHistory = false } = {}` | `boolean` | Biztonsági ellenőrzést futtat, megjeleníti a betöltési réteget, és beküldi az űrlapot. |
| `submitVerdictsDirect` | — | `boolean` | Előkészíti a címkéket és beküld. |
| `invokeProceedAction` | — | `boolean` | Enter/kattintás kezelő: az első lenyomás élesít, a második beküld. |
| `installProceedShortcut` | — | `void` | Capture fázisú `Enter`/`NumpadEnter` figyelő. |
| `invokeCancelAction` | — | `boolean` | Visszavonja a kétlépéses beküldés első billentyűnyomásának előkészítését, vagy rákattint a látható „Cancel” gombra; ha nincs mit megszakítani, false értéket ad vissza. |
| `refreshCancelButtonLabel` | — | `void` | Hozzáadja vagy frissíti a „Cancel” gomb billentyűjelvényét. |
| `hookProceedButton` | — | `void` | Lecseréli a natív beküldés gomb kattintási viselkedését. |
| `installVerdictChangeReset` | — | `void` | Hatástalanítja a beküldést, és újraszinkronizálja a sablonokat, ha egy ítélet megváltozik. |
| `scheduleProceedFooterFix` | — | `void` | `fixProceedFooter` késleltetett (`requestAnimationFrame`) hívása. |
| `scheduleVerdictLabelsFix` | — | `void` | Késleltetett címke-/cím-/alapértelmezés-újranormalizálás. |

## Gyorsbillentyűk jegyzéke és módosítása

| Action | Default | Group | Leírás |
|---|---|---|---|
| `playPause` | `Space` | Playback | Szünetelteti vagy folytatja a klip lejátszását. |
| `mute` | `M` | Playback | Elnémítja vagy visszakapcsolja a hangot. |
| `fullscreen` | `F` | Playback | Belép a teljes képernyős módba, vagy kilép belőle. |
| `seekBack` / `seekForward` | `←` / `→` | Navigáció | 5 másodpercet ugrik vissza / előre. |
| `frameBack` / `frameForward` | `,` / `.` | Navigáció | Egy képkockát lép vissza / előre. |
| `speedBoost` | `Shift` | Navigation | A billentyű nyomva tartása alatt felgyorsítja a lejátszást; ez az egyetlen művelet, amely használhatja a Shiftet. |
| `quick1` … `quick5` | `1` … `5` | Ítéletek | Klasszikus űrlap: 1–5 előbeállítás. Egykérdéses feladat: Cheating / Not sure / No cheats seen (`1`–`3`). |
| `proceed` | `Enter` | Submission | Megerősíti az ítéletet, vagy előkészíti és beküldi a klasszikus űrlapot. |
| `cancel` | `Esc` | Submission | Megnyomja a „Cancel” gombot, vagy visszavonja az első Enter billentyűnyomást. |
| `inviteDone` | `Enter` | Invite page | A „Done” gombhoz hasonlóan kilép a meghívóoldalról. |
| `inviteClose` | `Esc` | Invite page | A × gombbal azonos műveletet hajt végre. |
| `settings` | `F2` | Interface | Megnyitja vagy bezárja a beállítási párbeszédablakot. |

A hozzárendelések `KeyboardEvent.code` értékként a `demoscopeKeybindings` alatt tárolódnak (csak az alapértéktől eltérő módosítások; a beállításbillentyű saját bejegyzést kap). A bal/jobb módosítók egy billentyűnek számítanak, a numerikus billentyűzet a fő sort tükrözi. Nem rendelhető hozzá: `Tab`, `Ctrl`, `Alt`, `Meta`, `Caps Lock`, `ContextMenu`, `F5`, `F11`, `F12`. A hatókörök elkülönülnek: `review`, `invite` és a mindennel ütköző beállítási `global` billentyű.

| Függvény | Paraméterek | Visszatérés | Feladat |
|---|---|---|---|
| `fmt` | `template: string, vars = {}` | `string` | Kicseréli a {name} helyőrzőket egy honosított sablonban. |
| `isModalOpen` | — | `boolean` | true értéket ad vissza, ha bármelyik <dialog> nyitva van; ilyenkor az oldal gyorsbillentyűi nem működnek. |
| `normalizeKeyCode` | `code: string` | `string` | Egyesíti a bal és jobb oldali módosító billentyűket, a numerikus billentyűzet számjegyeit és a NumpadEntert pedig a fő billentyűsor megfelelőire képezi le. |
| `formatKeyLabel` | `code: string` | `string` | Egy billentyű megjelenített neve (ArrowLeft → ←, KeyM → M, Escape → Esc). |
| `loadKeyOverrides` | — | `object` | Beolvassa és ellenőrzi a mentett hozzárendeléseket (gyorsítótárazva; hiba esetén {}). |
| `saveKeyOverrides` | `overrides: object` | `void` | Elmenti a hozzárendeléseket, vagy törli a bejegyzést, ha mindegyik alapértelmezett. |
| `getBinding` | `id: string` | `string` | Visszaadja a művelet aktuális billentyűjét; hozzárendelés hiányában üres karakterláncot ad. |
| `setBinding` | `id: string, code: string` | `void` | Billentyűt ment a művelethez; üres kód esetén törli a hozzárendelést, az alapértelmezett értékeket nem menti. |
| `resetAllBindings` | — | `void` | Minden hozzárendelést, a beállításbillentyűt is beleértve, visszaállít az alapértékre. |
| `findKeyConflict` | `id: string, code: string` | `object \| null` | Megkeresi az átfedő hatókörben ugyanazt a billentyűt használó másik műveletet. |
| `getActionForEvent` | `event: KeyboardEvent, scope = currentKeyScope()` | `string \| null` | A billentyűzeteseményt a jelenlegi oldalhatókör műveletazonosítójára oldja fel. |
| `keyScopeOf` | `id: string` | `string` | A művelet hatóköre: review, invite vagy global. |
| `keyScopesOverlap` | `a: string, b: string` | `boolean` | true értéket ad vissza, ha két hatókör ütközhet (azonosak, vagy az egyik global). |
| `currentKeyScope` | — | `string` | A meghívóoldalon invite, egyébként review értéket ad vissza. |
| `validateKeyForAction` | `id: string, code: string` | `string` | Engedélyezhető billentyűnél üres karakterláncot, böngésző/navigációs billentyűnél reserved, nem nyomva tartandó művelet Shift-hozzárendelésekor shift értéket ad. |
| `quickRangeLabel` | `count: number` | `string` | A gyors ítéletbillentyűk felirata: változatlanul 1–5, egyébként a hozzárendelt billentyűk. |
| `buildHintsInnerMarkup` | — | `string (HTML)` | A jelenlegi hozzárendelések alapján elkészíti a videó alatti billentyűtippeket. |
| `refreshKeyLabels` | — | `void` | Frissíti az oldalon az összes billentyűfeliratot: tippek, jelvények, Folytatás/Mégse/Meghívó és beállítás-összefoglalók. |
| `ensureDemoscopeDialogStyles` | — | `void` | Beilleszti a Gyorsbillentyűk és Animációk ablakok közös megjelenését. |
| `hkActionName` | `id: string` | `string` | A művelet honosított neve. |
| `hkGroupName` | `group: string` | `string` | A csoport honosított neve. |
| `hkActionDescription` | `id: string` | `string` | Honosított leírás arról, mit tesz a művelet; a gyors ítéleteket mindkét feladattípushoz ismerteti. |
| `hkSetMessage` | `text: string, warn = false` | `void` | Beállítja a Gyorsbillentyűk ablak állapotsorának szövegét. |
| `hkCancelCapture` | — | `void` | Kilép a billentyűrögzítési módból. |
| `hkRowMarkup` | `action: object` | `string (HTML)` | Egy műveletsor HTML-jelölését készíti el, szükség esetén a függőben lévő ütközési panellel együtt. |
| `renderHotkeys` | — | `void` | Újrarajzolja az egész ablakot, miközben megőrzi a görgetési pozíciót. |
| `hkCommit` | `actionId: string, code: string, mode = "replace"` | `void` | Billentyűt rendel hozzá; a replace megszünteti a másik művelet hozzárendelését, a swap pedig felcseréli a billentyűket. |
| `hkRequestAssign` | `actionId: string, code: string` | `void` | Közvetlenül hozzárendel egy billentyűt, vagy foglaltság esetén megnyitja az ütközési panelt (Replace / Swap / Cancel). |
| `ensureHotkeysDialog` | — | `HTMLDialogElement` | Létrehozza a Gyorsbillentyűk ablakot és a rögzítési fázis billentyűfigyelőjét; rögzítés közben az Esc hozzárendelhető, és nem zárja be az ablakot. |
| `openHotkeysDialog` | — | `void` | Megnyitja a Gyorsbillentyűk ablakot. |

## Animációk

A jelző hat stílusa (`pulse`, `breathe`, `ripple`, `heartbeat`, `orbit`, `blink`), három sebessége (0,6× / 1× / 1,7×) és be/ki állapota a `demoscopeAnimStyle`, `demoscopeAnimSpeed`, `demoscopeAnimEnabled` kulcsokban tárolódik. Az aktív stílust a `<html>` `data-ds-anim` értéke adja (`off`, ha ki van kapcsolva); a stíluslap a pontot és az előnézeteket is vezérli.

| Függvény | Paraméterek | Visszatérés | Feladat |
|---|---|---|---|
| `readStorage` | `key: string` | `string \| null` | Biztonságosan beolvassa a localStorage értékét. |
| `writeStorage` | `key: string, value: string \| null` | `void` | Biztonságosan ír a localStorage-ba; null érték esetén eltávolítja a kulcsot. |
| `animEnabled` | — | `boolean` | A mentett animációs állapot; csökkentett mozgást kérő rendszerbeállítás esetén alapértelmezés szerint ki van kapcsolva. |
| `animStyle` | — | `string` | A mentett stílus (alapértelmezés: pulse). |
| `animSpeedKey` | — | `string` | A mentett sebesség (slow / normal / fast; alapértelmezés: normal). |
| `ensureAnimationStyles` | — | `void` | Beilleszti az indikátorpont és az előnézeti pontok közös keyframe-jeit és szabályait. |
| `applyAnimationSettings` | — | `void` | Alkalmazza a stílust, sebességet és be/ki állapotot a <html> elemre, majd frissíti a beállítás-összefoglalót. |
| `ensureAnimationsDialog` | — | `HTMLDialogElement` | Létrehozza az Animációk ablakot kapcsolóval, sebességgel, élő előnézetet mutató stíluskártyákkal és visszaállítással. |
| `openAnimationsDialog` | — | `void` | Megnyitja az Animációk ablakot. |
| `ensureUiPolishStyles` | — | `void` | Sötét, vékony görgetősávokat és color-scheme: dark beállítást ad az ablakokhoz és az ítéletlistához. |

## Egykérdéses feladat

| Függvény | Paraméterek | Visszatérés | Feladat |
|---|---|---|---|
| `isCheatingMode` | — | `boolean` | true értéket ad vissza, ha az oldal az egykérdéses űrlapot mutatja (#verdictbuttons_cheating). |
| `selectCheatingVerdict` | `kind: string` | `void` | A Cheating / Not sure / No cheats seen választógombra kattint; zárolt lehetőség esetén hibahangot játszik le és megrázza a zárolási kártyát. |
| `localizeCheatingVerdicts` | — | `void` | A három feliratot DemoScope nyelvére cseréli, a billentyűjelvényeket CSS-sel rajzolja meg, így a VACNet megerősítő sora nem tartalmazza a billentyű számát. A zárolási kártyát is előkészíti. |
| `updateCheatingLock` | — | `void` | Frissíti a zárolási kártyát és folyamatjelzőt a másik két ítélet feloldásáig hátralévő idővel; feloldás vagy ítéletválasztás után elrejti őket. |
| `startCheatingLockWatcher` | — | `void` | Elindít egy 250 ms-onként futó időzítőt, amely meghívja az updateCheatingLock függvényt. |

## Hibatűrés és diagnosztika

| Függvény | Paraméterek | Visszatérés | Feladat |
|---|---|---|---|
| `recordFailure` | `step: string, error: any` | `void` | Rögzíti a sikertelen lépést a diagnosztikai jelentéshez; a bejegyzések száma korlátozott. |
| `safeStep` | `step: string, fn: Function, fallback?: any` | `any` | Futtat egy beállítási lépést; hiba esetén naplózza, és tartalékértéket ad vissza, hogy a következő lépések folytatódjanak. |
| `getVideoContainer` | — | `HTMLElement \| null` | Megkeresi a videó tárolóját; hiányában a lejátszó vagy a <video> elem szülőjét használja. |
| `getVerdictContainer` | — | `HTMLElement \| null` | Megkeresi az ítélettárolót; hiányában az első ítéletblokk szülőjét használja. |
| `getSubmitArea` | — | `HTMLElement \| null` | Megkeresi a beküldési/megerősítési területet (#submitbuttons, .submitbuttons vagy a beküldés gombjának szülője). |
| `hasVerdictForm` | — | `boolean` | true értéket ad vissza, ha legalább egy ítéletválasztó rádiógomb létezik. |
| `removeEnhancements` | — | `void` | Eltávolítja a DemoScope paneljeit, osztályait és láblécmódosításait, majd visszaállítja a VACNet láblécét. |
| `disableDemoScope` | `reason: string` | `void` | Kikapcsolja a DemoScope-ot ezen az oldalon, visszavonja a módosításokat, csak a beállításablakot hagyja meg, és munkamenetenként okonként egyszer értesítést mutat. |
| `isOwnNode` | `el: Element` | `boolean` | true értéket ad vissza a DemoScope által létrehozott elemekre; ezek kimaradnak a szerkezeti jelentésből. |
| `elementSignature` | `el: Element` | `string` | A szerkezeti jelentés tag#id.class[…] aláírása; szöveget nem tartalmaz. |
| `skeletonOf` | `root: Element, maxDepth = 7, maxNodes = 170` | `string` | Tömör, behúzott fa a tagekről, azonosítókról és osztályokról; az azonos testvéreket ×N formában vonja össze. |
| `captureOriginalSkeleton` | — | `void` | Rögzíti az oldal szerkezetét a DemoScope módosításai előtt. |
| `buildDiagnosticsReport` | — | `string` | Jelentést készít a verzióról, oldalról, nyelvről és böngészőről, feladattípusról, 22 elemellenőrzésről, lépéshibákról, valamint a DemoScope előtti és utáni szerkezetről. Nem tartalmaz oldalszöveget vagy fiókadatokat. |
| `fallbackCopyText` | `text: string` | `boolean` | Ideiglenes szövegmezővel másol, ha a Clipboard API nem érhető el. |
| `copyDiagnostics` | `statusEl: HTMLElement, textarea: HTMLTextAreaElement` | `Promise<void>` | Kimásolja a jelentést; sikertelenségkor kijelölhető mezőben jeleníti meg a szöveget. |

## Elrendezés és indítás

| Függvény | Paraméterek | Visszatérés | Feladat |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Felépíti a Shift-sebességválasztó sávot. |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | Egy sablongomb HTML-je. |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | A bővített sabloncsoportok HTML-je. |
| `buildEnhancementBar` | — | `HTMLElement` | Felépíti a gyorsítélet-sávot: sablonok, randomizáló kapcsoló, bővített fiók. |
| `positionShiftSpeedBar` | — | `void` | A sebességsávot az ítéletlista előtt tartja. |
| `positionEnhancementBar` | — | `void` | A sablonsávot a beküldés gombok előtt tartja. |
| `fixProceedFooter` | — | `void` | Átrendezi a láblécet, a sávokat és a beküldés gombot. |
| `enhanceLayout` | — | `void` | Alkalmazza az összes elrendezésváltozást, és telepíti a beállítási felületet. |
| `ensureReviewStructure` | — | `void` | Normalizálja a VACNet jelölését: az ítéletblokkokat .verdicts-container-inner elembe csomagolja, a #submitbuttons elemet a tárolóba helyezi, a klipszámlálót pedig a fejlécjelvényben is megjeleníti. A régi és az új jelöléssel is működik. |
| `watchProceedFooter` | — | `void` | Figyeli a `.verdicts-container` elemet, és ütemezi a lábléc javításait. |
| `watchVerdictLabels` | — | `void` | Figyeli az ítéletfeliratokat, és ütemezi az újranormalizálást. |
| `readFooterPreference` | `storageKey: string` | `boolean` | Beolvassa a lábléc láthatósági beállítását a localStorage-ból. |
| `saveFooterPreference` | `storageKey: string, hidden: boolean` | `void` | Elmenti a lábléc láthatósági beállítását. |
| `applyFooterPreferences` | `footer: HTMLElement \| null = document.querySelector(".demoscope-custom-footer")` | `void` | `void` |
| `installDemoScopeFooter` | `withClipLinks: boolean, locale = getActiveLocale(), showFeedback = true` | `HTMLElement` | Létrehozza vagy frissíti a lokalizált láblécet, opcionális hivatkozásokkal, majd alkalmazza a beállításokat. |
| `installEmptyQueueNotice` | — | `boolean` | Az üres várólista üzenetét lokalizált útmutatóval, idővel, nyelvválasztóval és lábléccel helyettesíti. |
| `init` | — | `Promise<void>` | Belépési pont: fióknév-vezérlő → meghívó- vagy ellenőrző oldal → elrendezés, figyelők, gyorsbillentyűk, lejátszó-fejlesztések. |

Az `installWelcomePage` és az `installInvitePage` `false` értéket ad vissza, ha hiányoznak a VACNet szükséges oldalelemei. Az `installEmptyQueueNotice` akkor ad vissza `false` értéket, ha nem üres a sor.

### A fentiekben nem szereplő elemek

* **`blockSegmentLoopGuard`** (IIFE, betöltéskor fut): körülveszi az oldal `setInterval` függvényét, és az oldal natív 100 ms-os szegmensidőzítőjét üres műveletre cseréli; a szegmenst ezután a DemoScope saját vezérlői kezelik.
* **Konstansok és táblázatok:** `SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC` (`PRESETS`: 21 definitions); added since v1.0.0: `KEY_ACTIONS`, `KEY_GROUPS`, `KEY_ACTION_BY_ID`, `KEY_ACTION_SCOPE`, `RESERVED_KEY_CODES`, `CHEATING_KEYS`, `VERDICT_SECTION_TITLES`, `VERDICT_SECTION_HELP`, `ANIM_STYLES`, `ANIM_SPEEDS`.
* **Modulállapot:** `diag` (step failures, the switch-off reason and the original page structure), `hkState` (state of the Hotkeys window) and the `SCRIPT_VERSION` constant used by the diagnostics report.
* **Szövegek:** minden felhasználónak megjelenő szöveg a fenti honosított táblákban található; a v1.2.0–v1.4.0 ablakai mind a 29 nyelven elérhetők.

## Tárolási kulcsok

| Kulcs | Helye | Célja |
|---|---|---|
| `demoscopeLanguage`, `demoscopeLanguageAuto` | `localStorage` | Választott nyelv / automatikus mód. |
| `demoscopeKeybindings` | `localStorage` | Az alapértékektől eltérő gyorsbillentyűk (JSON). |
| `demoscopeSettingsHotkey` | `localStorage` | A beállítási párbeszédablakot megnyitó billentyű (eltávolítva: none). |
| `demoscopeAnimEnabled`, `demoscopeAnimStyle`, `demoscopeAnimSpeed` | `localStorage` | Jelzőanimáció beállításai. |
| `demoscopeSoundEffectsEnabled`, `demoscopeSoundEffectsVolume` | `localStorage` | Hangbeállítások. |
| `demoscopeClipHistory` és az előzménykorlát/-formátum kulcsai | `localStorage` | Helyi ellenőrzési előzmények és beállításaik. |
| `demoscopeSubmitPending`, `demoscopeSubmitPrevVod`, `demoscopeLangSyncTried`, `demoscopeDisabledNotice` | `sessionStorage` | Beküldési betöltési állapot, nyelvszinkron-védelem és egyszeri kikapcsolási értesítés. |









