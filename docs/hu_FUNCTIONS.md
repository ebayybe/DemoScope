<div align="center">

[English](../FUNCTIONS.md) · [Български](bg_FUNCTIONS.md) · **Magyar** · [Tiếng Việt](vi_FUNCTIONS.md) · [Ελληνικά](el_FUNCTIONS.md) · [Dansk](da_FUNCTIONS.md) · [Bahasa Indonesia](id_FUNCTIONS.md) · [Español (España)](es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](es-419_FUNCTIONS.md) · [Italiano](it_FUNCTIONS.md) · [繁體中文](zh-TW_FUNCTIONS.md) · [简体中文](zh-CN_FUNCTIONS.md) · [한국어](ko_FUNCTIONS.md) · [Deutsch](de_FUNCTIONS.md) · [Nederlands](nl_FUNCTIONS.md) · [Norsk](no_FUNCTIONS.md) · [Polski](pl_FUNCTIONS.md) · [Português (Portugal)](pt-PT_FUNCTIONS.md) · [Português (Brasil)](pt-BR_FUNCTIONS.md) · [Română](ro_FUNCTIONS.md) · [Русский](ru_FUNCTIONS.md) · [ไทย](th_FUNCTIONS.md) · [Türkçe](tr_FUNCTIONS.md) · [Українська](uk_FUNCTIONS.md) · [Suomi](fi_FUNCTIONS.md) · [Français](fr_FUNCTIONS.md) · [Čeština](cs_FUNCTIONS.md) · [Svenska](sv_FUNCTIONS.md) · [日本語](ja_FUNCTIONS.md)

</div>

# DemoScope — függvényreferencia

A `DemoScope.user.js` v1.0.0 mind a(z) 128 legfelső szintű függvényének teljes leírása (név, paraméterek, visszatérési érték, feladat). Vissza a [README](../../README/hu_README.md) oldalra.

Jelölések: a `—` paraméter nélküli függvényt jelent; a `void` azt, hogy a függvényt a mellékhatásai miatt hívják.

## Lokalizáció

| Függvény | Paraméterek | Visszatérés | Feladat |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Egy nyelv zászlójának beágyazott SVG-kódja; ha nincs, földgömb ikont ad. |
| `getSavedLocale` | — | `string \| null` | Beolvassa a felhasználó mentett nyelvét (`demoscopeLanguage`) a `localStorage`-ból. |
| `getActiveLocale` | — | `string` | Meghatározza az aktív nyelvet: mentett választás → Steam `?l=` → böngésző/oldal nyelve → `en`. |
| `getLanguageBadge` | — | `string` | A nyelv saját megjelenített neve, pl. „English version”, a nyelvválasztó jelvényéhez. |
| `tr` | `key: string` | `string` | Felületi szöveget keres az aktív nyelvhez (tartalék: angol, majd maga a kulcs). |
| `inviteText` | `key: string` | `string` | Ugyanez a keresés a meghívóoldal szövegtáblájára. |
| `settingText` | `key: string` | `string` | Ugyanez a keresés a beállítások ablak szövegtáblájára. |
| `getPresetLabel` | `name: string` | `string` | Egy sablon lokalizált felirata; összeállítja az olyan kombinációkat, mint a „Bot + Aim”. |
| `buildLanguageOptions` | — | `string (HTML)` | A nyelvválasztó gombok HTML-je, az „auto” bejegyzéssel együtt. |
| `installLanguageSelector` | `root: HTMLElement` | `void` | Összeköti a felugró nyelvválasztót, elhelyezi, elmenti a választást és újratölti az oldalt. |

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
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Létrehozza (egyszer) és bekábelezi a beállítások ablakot: hang, hangerő, gyorsbillentyű-rögzítés, előzménykorlátok, export/import/jelentés/egyesítés/törlés, visszaállítás. |
| `openSettingsDialog` | `opener = null` | `void` | Megnyitja az ablakot az aktuális értékekkel, és megjegyzi, melyik elemre kell visszaadni a fókuszt. |
| `installSettingsUi` | — | `void` | Telepíti a globális, capture fázisú billentyűfigyelőt (ablak megnyitása/bezárása, újrakötés) és a hangeseményeket. |
| `installUiSoundEvents` | — | `void` | Delegált kattintásfigyelő, amely visszajelző hangokat játszik a DemoScope vezérlőihez. |

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
| `readAdvancedPresetsOpen` | — | `boolean` | Nyitva maradt-e a bővített sablonok fiókja. |

## Fióknév és meghívóoldal

| Függvény | Paraméterek | Visszatérés | Feladat |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Jelenleg el van-e rejtve a Steam-fióknév. |
| `installAccountNameControl` | — | `void` | Szem alakú kapcsolót ad a kijelentkezési link mellé, és `MutationObserver`-rel szinkronban tartja. |
| `installInvitePage` | — | `boolean` | Átalakítja a `/vacnet/createinvite` oldalt: kártyaelrendezés, link megjelenítése/elrejtése és másolása (Clipboard API `execCommand` tartalékkal), követelménylista, nyelvválasztó. `false`-t ad, ha a várt elemek hiányoznak. |

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
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | Igaz, ha a fókusz beviteli mezőben, szövegmezőben, választólistában, gombon, hivatkozáson vagy szerkeszthető elemen van. |
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
| `normalizeVerdictLabels` | `root = document` | `void` | Eltávolítja a kiemelő jelölést az ítéletfeliratokról. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Lokalizált címeket ad minden ítéletcsoport fölé. |

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
| `submitVerdictForm` | `{ recordHistory = false }` | `boolean` | Biztonsági ellenőrzést futtat, megjeleníti a betöltési réteget, és beküldi az űrlapot. |
| `submitVerdictsDirect` | — | `boolean` | Előkészíti a címkéket és beküld. |
| `invokeProceedAction` | — | `boolean` | Enter/kattintás kezelő: az első lenyomás élesít, a második beküld. |
| `installProceedShortcut` | — | `void` | Capture fázisú `Enter`/`NumpadEnter` figyelő. |
| `hookProceedButton` | — | `void` | Lecseréli a natív beküldés gomb kattintási viselkedését. |
| `installVerdictChangeReset` | — | `void` | Hatástalanítja a beküldést, és újraszinkronizálja a sablonokat, ha egy ítélet megváltozik. |
| `scheduleProceedFooterFix` | — | `void` | `fixProceedFooter` késleltetett (`requestAnimationFrame`) hívása. |
| `scheduleVerdictLabelsFix` | — | `void` | Késleltetett címke-/cím-/alapértelmezés-újranormalizálás. |

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
| `watchProceedFooter` | — | `void` | Figyeli a `.verdicts-container` elemet, és ütemezi a lábléc javításait. |
| `watchVerdictLabels` | — | `void` | Figyeli az ítéletfeliratokat, és ütemezi az újranormalizálást. |
| `init` | — | `Promise<void>` | Belépési pont: fióknév-vezérlő → meghívó- vagy ellenőrző oldal → elrendezés, figyelők, gyorsbillentyűk, lejátszó-fejlesztések. |

### A fentiekben nem szereplők

* **`blockSegmentLoopGuard`** (IIFE, betöltéskor fut): becsomagolja az oldal `setInterval` függvényét, így a webhely natív, 100 ms-os szegmensismétlő időzítője egy üres függvényre cserélődik; a szegmenst a DemoScope saját vezérlői kezelik.
* **Konstansok és táblák:** `SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC` (`PRESETS`: 21 definíció).
