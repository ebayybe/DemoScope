<div align="center">

[English](../FUNCTIONS.md) · [Български](bg_FUNCTIONS.md) · [Magyar](hu_FUNCTIONS.md) · [Tiếng Việt](vi_FUNCTIONS.md) · [Ελληνικά](el_FUNCTIONS.md) · [Dansk](da_FUNCTIONS.md) · [Bahasa Indonesia](id_FUNCTIONS.md) · [Español (España)](es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](es-419_FUNCTIONS.md) · [Italiano](it_FUNCTIONS.md) · [繁體中文](zh-TW_FUNCTIONS.md) · [简体中文](zh-CN_FUNCTIONS.md) · [한국어](ko_FUNCTIONS.md) · [Deutsch](de_FUNCTIONS.md) · [Nederlands](nl_FUNCTIONS.md) · [Norsk](no_FUNCTIONS.md) · [Polski](pl_FUNCTIONS.md) · [Português (Portugal)](pt-PT_FUNCTIONS.md) · [Português (Brasil)](pt-BR_FUNCTIONS.md) · [Română](ro_FUNCTIONS.md) · [Русский](ru_FUNCTIONS.md) · [ไทย](th_FUNCTIONS.md) · [Türkçe](tr_FUNCTIONS.md) · [Українська](uk_FUNCTIONS.md) · [Suomi](fi_FUNCTIONS.md) · [Français](fr_FUNCTIONS.md) · **Čeština** · [Svenska](sv_FUNCTIONS.md) · [日本語](ja_FUNCTIONS.md)

</div>

# DemoScope — Přehled funkcí

Úplný přehled všech 128 funkcí nejvyšší úrovně v `DemoScope.user.js` v1.0.0 (název, parametry, návratová hodnota, odpovědnost). Zpět na [README](../../README/cs_README.md).

Konvence: `—` znamená bez parametrů; `void` znamená, že se funkce volá kvůli svým vedlejším účinkům.

## Lokalizace

| Funkce | Parametry | Vrací | Odpovědnost |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Vložený SVG kód vlajky pro jazyk; pokud chybí, vrátí ikonu zeměkoule. |
| `getSavedLocale` | — | `string \| null` | Načte uložený jazyk uživatele (`demoscopeLanguage`) z `localStorage`. |
| `getActiveLocale` | — | `string` | Určí aktivní jazyk: uložená volba → Steam `?l=` → jazyk prohlížeče/stránky → `en`. |
| `getLanguageBadge` | — | `string` | Vlastní zobrazovaný název jazyka, např. „English version“, pro odznak ve výběru jazyka. |
| `tr` | `key: string` | `string` | Vyhledá řetězec rozhraní pro aktivní jazyk (záloha: angličtina, poté samotný klíč). |
| `inviteText` | `key: string` | `string` | Totéž vyhledávání pro tabulku řetězců stránky pozvánek. |
| `settingText` | `key: string` | `string` | Totéž vyhledávání pro tabulku řetězců dialogu nastavení. |
| `getPresetLabel` | `name: string` | `string` | Lokalizovaný popisek předvolby; skládá kombinace jako „Bot + Aim“. |
| `buildLanguageOptions` | — | `string (HTML)` | HTML tlačítek pro výběr jazyka včetně položky „auto“. |
| `installLanguageSelector` | `root: HTMLElement` | `void` | Propojí vyskakovací výběr jazyka, umístí ho, uloží volbu a znovu načte stránku. |

## Zvukové efekty a dialog nastavení

| Funkce | Parametry | Vrací | Odpovědnost |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | Řádek „N záznamů · poslední záznam: …“ zobrazený v dialogu nastavení. |
| `soundsEnabled` | — | `boolean` | Zda jsou zvuky rozhraní zapnuté (`demoscopeSoundEffectsEnabled`, ve výchozím stavu zapnuto). |
| `getSoundVolume` | — | `number (0–1)` | Uložená hlasitost zvuku (`demoscopeSoundEffectsVolume`, výchozí 0,4). |
| `playUiSound` | `kind = "click"` | `void` | Pomocí Web Audio syntetizuje krátkou sekvenci tónů (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`); nikdy nevyhodí chybu. |
| `readSettingsHotkey` | — | `string` | Uložený `KeyboardEvent.code`, který otevírá dialog nastavení (výchozí `F2`). |
| `formatHotkey` | `code: string` | `string` | Čitelný název klávesy (`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | Získá kód fyzické klávesy, nelatinská rozložení mapuje zpět na `KeyX`; `""`, pokud je nepoužitelný. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | Pravda pro klávesy, které DemoScope nebo přehrávač již používají (Enter, mezerník, šipky, `M`, `F`, `1`–`5`, …). |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Vytvoří (jednou) a propojí dialog nastavení: zvuk, hlasitost, zachycení zkratky, limity historie, export/import/report/sloučení/vymazání, obnovení výchozích hodnot. |
| `openSettingsDialog` | `opener = null` | `void` | Otevře dialog s aktuálními hodnotami a zapamatuje si prvek, kterému se vrátí fokus. |
| `installSettingsUi` | — | `void` | Nainstaluje globální posluchač kláves ve fázi capture (otevření/zavření dialogu, přiřazení nové klávesy) a zvukové události. |
| `installUiSoundEvents` | — | `void` | Delegovaný posluchač kliknutí, který přehrává zvuky zpětné vazby pro ovládací prvky DemoScope. |

## Zálohy, reporty a limity historie

| Funkce | Parametry | Vrací | Odpovědnost |
|---|---|---|---|
| `exportLocalHistory` | — | `void` | Stáhne celou historii jako `demoscope-history-YYYY-MM-DD.json`. |
| `downloadHistoryFile` | `content: string, filename: string, mimeType: string` | `void` | Spustí stažení souboru pomocí dočasné adresy Blob URL. |
| `collectHistoryReportRows` | `store: object` | `Array<{vodId, ts, summary, segment}>` | Zploští a odstraní duplicity ze záznamů historie, nejnovější první. |
| `exportReadableHistory` | — | `void` | Stáhne samostatný lokalizovaný HTML report historie. |
| `buildReadableHistoryReport` | `rows: Array, reportTitle: string, summaryNote = ""` | `string (HTML document)` | Sestaví HTML kód reportu s escapovanými znaky. |
| `setMergeReportStatus` | `statusElement: HTMLElement, message: string, state: string` | `void` | Aktualizuje stavový řádek nástroje pro slučování (`progress`, `success`, `warning`). |
| `exportCombinedHistoryReports` | `files: FileList \| File[], statusElement: HTMLElement, button: HTMLButtonElement` | `Promise<void>` | Ověří mnoho JSON záloh (každá ≤ 5 MB, celkem ≤ 100 MB), odstraní duplicity záznamů a stáhne jeden společný HTML report. |
| `isSafeHistoryKey` | `key: string` | `boolean` | Kontrola klíčů historie podle seznamu povolených (blokuje `__proto__`, `constructor` a chybně utvořené klíče). |
| `importLocalHistory` | `file: File` | `Promise<void>` | Ověří JSON zálohu, sloučí ji s místní historií (s respektováním limitů) a obnoví rozhraní. |
| `readHistoryLimit` | `storageKey: string, allowedValues: number[], defaultValue: number` | `number` | Načte číselný limit z `localStorage` a přijímá pouze povolené hodnoty. |
| `getHistoryPerKeyLimit` | — | `number` | Záznamy uchovávané na klíč klipu/hry (10/20/30/50, výchozí 30). |
| `getHistoryTotalLimit` | — | `number` | Celkový počet uchovávaných klíčů klipů/her (100/200/300/500, výchozí 300). |
| `readAdvancedPresetsOpen` | — | `boolean` | Zda zůstala otevřená zásuvka rozšířených předvoleb. |

## Název účtu a stránka pozvánek

| Funkce | Parametry | Vrací | Odpovědnost |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Zda je název účtu Steam právě skrytý. |
| `installAccountNameControl` | — | `void` | Přidá přepínač ve tvaru oka vedle odkazu pro odhlášení a udržuje ho synchronizovaný pomocí `MutationObserver`. |
| `installInvitePage` | — | `boolean` | Přepracuje `/vacnet/createinvite`: kartové rozvržení, zobrazení/skrytí a kopírování odkazu (Clipboard API se zálohou `execCommand`), seznam požadavků, výběr jazyka. Vrací `false`, pokud chybí očekávané prvky. |

## Segment klipu a adaptér přehrávače

| Funkce | Parametry | Vrací | Odpovědnost |
|---|---|---|---|
| `parseSegmentBounds` | — | `{startTime, endTime, duration} \| null` | Získá `startTime`/`endTime` z vložených skriptů stránky. |
| `formatSegmentTime` | `seconds: number` | `string` | Naformátuje sekundy jako `m:ss.cc`. |
| `getVideoElement` | — | `HTMLVideoElement \| null` | Najde prvek `<video>` kontrolovaného klipu. |
| `getVjsPlayer` | — | `Video.js player \| null` | Vrátí přehrávač Video.js stránky, pokud je dostupný a nebyl zničen. |
| `createPlayerAdapter` | — | `adapter \| null` | Jednotné API nad Video.js / HTML5 videem: `currentTime`, `paused`, `pause`, `play`, `playbackRate(s)`, `muted`, `on`, `isFullscreen`, `requestFullscreen`, `exitFullscreen`. |
| `waitForPlayerAdapter` | `timeoutMs = 20000` | `Promise<adapter>` | Dotazuje se každých 100 ms, dokud přehrávač neexistuje; při vypršení času odmítne. |
| `clampSegment` | `time: number, bounds: object` | `number` | Omezí čas na hranice klipu. |
| `segmentProgress` | `time: number, bounds: object` | `number (0–1)` | Relativní pozice uvnitř klipu. |
| `installCustomControls` | `player, bounds, refreshDisplay: {current: Function}` | `void` | Přidá posuvník, zobrazení času a nápovědu kláves pod video. |
| `pauseLayoutMutations` | `run: Function` | `void` | Spustí zpětné volání, zatímco jsou pozorovatelé rozvržení pozastaveni (zabraňuje smyčkám zpětné vazby). |
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | Pravda, pokud je fokus v poli pro zadávání, textarea, select, tlačítku, odkazu nebo upravitelném prvku. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | Popisek volby rychlosti. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | Seznam `<option>` pro výběr rychlosti (0,5–4×). |
| `readStoredShiftSpeed` | — | `number` | Uložená rychlost při Shiftu (výchozí 2×). |
| `readStoredVerdictRandomizer` | — | `boolean` | Uložený stav randomizéru verdiktů (ve výchozím stavu vypnuto). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | Propojí zpracování rychlosti přehrávání, omezení/pozastavení segmentu, pomocné funkce pro posun/krok po snímcích/ztlumení/celou obrazovku a globální klávesové zkratky (`1`–`5`, šipky, `,` `.`, mezerník, `M`, `F`, Shift). Vnitřní uzávěry: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, pomocné funkce kreslicí smyčky. |

## Předvolby verdiktů

| Funkce | Parametry | Vrací | Odpovědnost |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | Vybere „skip“ v každé skupině verdiktů bez výběru. |
| `getSelectedVerdictState` | — | `object` | Aktuální hodnota (`positive` / `negative` / `skip` / `null`) pro `aimassist`, `wallhack`, `autobhop`, `bot`. |
| `detectActivePreset` | — | `string \| null` | Název předvolby, která odpovídá aktuálnímu výběru. |
| `syncPresetButtons` | — | `string \| null` | Aktualizuje `aria-pressed` na tlačítkách předvoleb a odznak rozšířené předvolby. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | Klikne na přepínače předvolby; při zapnutém randomizéru zamíchá pořadí a mezi kliknutími čeká 200–600 ms. Po dobu běhu zakáže tlačítka předvoleb. |
| `normalizeVerdictLabels` | `root = document` | `void` | Odstraní zvýrazňující značky z popisků verdiktů. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Přidá lokalizované nadpisy nad každou skupinu verdiktů. |

## Oznámení, zápatí a načítání při odeslání

| Funkce | Parametry | Vrací | Odpovědnost |
|---|---|---|---|
| `hideSiteFooter` | — | `void` | Skryje zápatí webu. |
| `showToast` | `message: string, type = "info", duration = 1800` | `void` | Zobrazí neblokující oznámení ARIA-live. |
| `markSubmitPending` | — | `void` | Uloží do `sessionStorage` čas odeslání a ID aktuálního klipu. |
| `isSubmitPending` | — | `boolean` | Zda odeslání čeká na další klip. |
| `clearSubmitPending` | — | `void` | Vymaže značky čekajícího odeslání. |
| `showSubmitLoadingOverlay` | `message = tr("nextClip")` | `void` | Zobrazí celostránkový překryv načítání. |
| `hideSubmitLoadingOverlay` | — | `void` | Skryje překryv a vymaže stav čekání. |
| `bootSubmitLoadingIfPending` | — | `void` | Při načtení stránky znovu zobrazí překryv, pokud je odeslání v čekání. |
| `isReviewPageReady` | `prevVod: string, startedAt: number` | `boolean` | Pravda, pokud jsou rozhraní a média dalšího klipu připravené. |
| `finishSubmitLoadingWhenReady` | — | `Promise<void>` | Čeká až 30 s na další klip, poté skryje překryv (při vypršení času chybové oznámení). |

## Místní úložiště historie

| Funkce | Parametry | Vrací | Odpovědnost |
|---|---|---|---|
| `extractVodId` | — | `string` | Odvodí ID klipu/hry z URL videa. |
| `getGameKey` | — | `string` | Klíč historie pro hru (`game::<id>`). |
| `getClipKey` | `bounds: object` | `string` | Klíč historie pro jeden segment (`<id>:<start>:<end>`). |
| `normalizeHistoryEntry` | `entry: any` | `{ts, summary, segment} \| null` | Ověří a vyčistí jeden záznam historie. |
| `readHistoryEntries` | `store: object, key: string` | `Array` | Normalizované záznamy pro klíč. |
| `getGameHistoryEntries` | `store: object` | `Array` | Záznamy pro aktuální hru (podporuje starý klíč). |
| `getClipHistoryEntries` | `store: object, bounds: object` | `Array` | Záznamy pro aktuální segment. |
| `formatClipId` | `vodId: string` | `string` | Krátké číselné zobrazované ID (`#0000000`) vytvořené hashem z ID klipu. |
| `formatRelativeTime` | `timestamp: number` | `string` | Lokalizovaný relativní čas (`Intl.RelativeTimeFormat`). |
| `readClipHistoryStore` | — | `object` | Načte objekt historie z `localStorage` (`{}` při chybě). |
| `pruneHistoryStore` | `store: object` | `void` | Použije limity na klíč i celkové limity (nejstarší klíče se zahodí jako první). |
| `writeClipHistoryStore` | `store: object` | `boolean` | Ořízne a uloží; `false` při chybách kvóty/úložiště. |
| `summarizeCurrentVerdict` | — | `string` | Název předvolby pro aktuální výběr nebo `mixed`. |
| `formatSummaryLabel` | `summary: string` | `string` | Lokalizovaný popisek souhrnu historie. |
| `formatClockTime` | `seconds: number` | `string` | Formát hodin `m:ss` (nebo `x.xs`). |
| `formatHumanSegment` | `bounds: object` | `string` | Čitelný rozsah segmentu. |
| `formatGameLabel` | — | `string` | Lokalizovaný popisek aktuální hry. |
| `historyEntryKey` | `entry: object` | `string` | Identifikační řetězec používaný k odstranění duplicit. |
| `formatPriorStat` | `count: number, label: string` | `string` | Řádek „popisek: N“ v panelu historie. |
| `buildHistoryListItems` | `clipEntries: Array, gameEntries: Array, currentSegment: string` | `Array` | Sloučí záznamy klipů/her do zobrazovaných položek. |
| `renderHistoryItem` | `item: object` | `string (HTML)` | HTML jednoho řádku historie. |
| `escapeHtml` | `value: any` | `string` | Escapuje `& < > " '`. |
| `buildClipHistoryPanel` | `bounds, gameEntries, clipEntries` | `string (HTML)` | HTML panelu historie včetně tlačítka pravidel kontroly. |
| `ensureClipHistoryPanel` | — | `void` | Vytvoří kontejner panelu, pokud chybí. |
| `ensureReviewRulesDialog` | — | `void` | Vytvoří dialog pravidel kontroly a propojí jeho tlačítka pro otevření/zavření. |
| `installLocalHistoryButton` | `panel: HTMLElement` | `void` | Propojí tlačítko „místní historie“ (posune na seznam nebo zobrazí oznámení o prázdném stavu). |
| `positionClipHistoryPanel` | — | `void` | Udržuje panel jako první prvek v `.verdicts-container`. |
| `renderClipHistory` | `bounds: object \| null` | `void` | Znovu vykreslí panel historie pro aktuální klip. |
| `appendReviewHistory` | `bounds: object \| null` | `void` | Připojí souhrn aktuálního verdiktu k historii hry a klipu. |

## Průběh odeslání

| Funkce | Parametry | Vrací | Odpovědnost |
|---|---|---|---|
| `isLabelingMode` | — | `boolean` | Pravda na stránkách, které zobrazují čtyři skupiny verdiktů. |
| `getProceedButton` | — | `HTMLButtonElement \| null` | Nativní tlačítko odeslání, pokud je viditelné a povolené. |
| `recordProceedHistoryIfLabeling` | — | `void` | Zaznamená historii jednou na odeslání (chráněno proti opětovnému vstupu). |
| `resetProceedArmed` | — | `void` | Odzbrojí dvoukrokové odeslání. |
| `refreshProceedButtonLabel` | — | `void` | Aktualizuje popisek tlačítka/nápovědu `Enter` a styl připraveného stavu. |
| `verdictLabelForField` | `field: string, selected: string` | `string \| null` | Namapuje výběr na `guilty_*` / `innocent_*` / `skip_*`. |
| `prepareVerdictFormForSubmit` | — | `boolean` | Sestaví skrytá pole `verdict_labels[]`; zobrazí chybové oznámení a vrátí `false`, pokud některá skupina nemá výběr. |
| `isSafeSubmitTarget` | `form: HTMLFormElement` | `boolean` | Povoluje pouze akce formulářů přes HTTPS se stejným původem. |
| `restoreSubmitUi` | — | `void` | Obnoví tlačítka po neúspěšném odeslání. |
| `submitVerdictForm` | `{ recordHistory = false }` | `boolean` | Provede bezpečnostní kontrolu, zobrazí překryv načítání a odešle formulář. |
| `submitVerdictsDirect` | — | `boolean` | Připraví popisky a odešle. |
| `invokeProceedAction` | — | `boolean` | Obsluha Enteru/kliknutí: první stisk připraví, druhý odešle. |
| `installProceedShortcut` | — | `void` | Posluchač ve fázi capture pro `Enter`/`NumpadEnter`. |
| `hookProceedButton` | — | `void` | Nahradí chování při kliknutí nativního tlačítka odeslání. |
| `installVerdictChangeReset` | — | `void` | Odzbrojí odeslání a znovu synchronizuje předvolby, když se verdikt změní. |
| `scheduleProceedFooterFix` | — | `void` | Odložené (`requestAnimationFrame`) volání `fixProceedFooter`. |
| `scheduleVerdictLabelsFix` | — | `void` | Odložená renormalizace popisků/nadpisů/výchozích hodnot. |

## Rozvržení a spuštění

| Funkce | Parametry | Vrací | Odpovědnost |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Sestaví lištu pro výběr rychlosti Shift. |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | HTML jednoho tlačítka předvolby. |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | HTML skupin rozšířených předvoleb. |
| `buildEnhancementBar` | — | `HTMLElement` | Sestaví lištu rychlých verdiktů: předvolby, přepínač randomizéru, rozšířená zásuvka. |
| `positionShiftSpeedBar` | — | `void` | Udržuje lištu rychlosti před seznamem verdiktů. |
| `positionEnhancementBar` | — | `void` | Udržuje lištu předvoleb před tlačítky odeslání. |
| `fixProceedFooter` | — | `void` | Přeuspořádá zápatí, lišty a tlačítko odeslání. |
| `enhanceLayout` | — | `void` | Použije všechny změny rozvržení a nainstaluje rozhraní nastavení. |
| `watchProceedFooter` | — | `void` | Pozoruje `.verdicts-container` a plánuje opravy zápatí. |
| `watchVerdictLabels` | — | `void` | Pozoruje popisky verdiktů a plánuje renormalizaci. |
| `init` | — | `Promise<void>` | Vstupní bod: ovládání názvu účtu → stránka pozvánek nebo kontroly → rozvržení, pozorovatelé, zkratky, vylepšení přehrávače. |

### Neuvedeno výše

* **`blockSegmentLoopGuard`** (IIFE, spouští se při načtení): obalí `setInterval` na stránce, takže nativní 100ms časovač smyčky segmentu webu je nahrazen prázdnou funkcí; segment místo něj řídí vlastní ovládací prvky DemoScope.
* **Konstanty a tabulky:** `SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC` (`PRESETS`: 21 definic).
