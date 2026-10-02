<div align="center">

[English](../FUNCTIONS.md) · [Български](bg_FUNCTIONS.md) · [Magyar](hu_FUNCTIONS.md) · [Tiếng Việt](vi_FUNCTIONS.md) · [Ελληνικά](el_FUNCTIONS.md) · [Dansk](da_FUNCTIONS.md) · [Bahasa Indonesia](id_FUNCTIONS.md) · [Español (España)](es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](es-419_FUNCTIONS.md) · [Italiano](it_FUNCTIONS.md) · [繁體中文](zh-TW_FUNCTIONS.md) · [简体中文](zh-CN_FUNCTIONS.md) · [한국어](ko_FUNCTIONS.md) · [Deutsch](de_FUNCTIONS.md) · **Nederlands** · [Norsk](no_FUNCTIONS.md) · [Polski](pl_FUNCTIONS.md) · [Português (Portugal)](pt-PT_FUNCTIONS.md) · [Português (Brasil)](pt-BR_FUNCTIONS.md) · [Română](ro_FUNCTIONS.md) · [Русский](ru_FUNCTIONS.md) · [ไทย](th_FUNCTIONS.md) · [Türkçe](tr_FUNCTIONS.md) · [Українська](uk_FUNCTIONS.md) · [Suomi](fi_FUNCTIONS.md) · [Français](fr_FUNCTIONS.md) · [Čeština](cs_FUNCTIONS.md) · [Svenska](sv_FUNCTIONS.md) · [日本語](ja_FUNCTIONS.md)

</div>

# DemoScope — Functiereferentie

Volledige referentie van de 128 functies op het hoogste niveau in `DemoScope.user.js` v1.0.0 (naam, parameters, retourwaarde, verantwoordelijkheid). Terug naar de [README](../../README/nl_README.md).

Conventies: `—` betekent geen parameters; `void` betekent dat de functie wordt aangeroepen om haar neveneffecten.

## Lokalisatie

| Functie | Parameters | Retourneert | Verantwoordelijkheid |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Inline SVG-markup van de vlag voor een taal; valt terug op een wereldbolpictogram. |
| `getSavedLocale` | — | `string \| null` | Leest de opgeslagen taal van de gebruiker (`demoscopeLanguage`) uit `localStorage`. |
| `getActiveLocale` | — | `string` | Bepaalt de actieve taal: opgeslagen keuze → Steam `?l=` → browser-/paginataal → `en`. |
| `getLanguageBadge` | — | `string` | De eigen weergavenaam van de taal, bijv. “English version”, voor de badge van de taalkiezer. |
| `tr` | `key: string` | `string` | Zoekt een interfacetekst op voor de actieve taal (terugval: Engels, daarna de sleutel zelf). |
| `inviteText` | `key: string` | `string` | Dezelfde opzoeking voor de tekstentabel van de uitnodigingspagina. |
| `settingText` | `key: string` | `string` | Dezelfde opzoeking voor de tekstentabel van de instellingendialoog. |
| `getPresetLabel` | `name: string` | `string` | Gelokaliseerd label van een preset; stelt combinaties samen zoals “Bot + Aim”. |
| `buildLanguageOptions` | — | `string (HTML)` | Markup van de taalkeuzeknoppen, inclusief de vermelding “auto”. |
| `installLanguageSelector` | `root: HTMLElement` | `void` | Koppelt de popover-taalkiezer, positioneert hem, slaat de keuze op en laadt de pagina opnieuw. |

## Geluidseffecten en instellingendialoog

| Functie | Parameters | Retourneert | Verantwoordelijkheid |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | De regel “N items · laatste item: …” in de instellingendialoog. |
| `soundsEnabled` | — | `boolean` | Of interfacegeluiden zijn ingeschakeld (`demoscopeSoundEffectsEnabled`, standaard aan). |
| `getSoundVolume` | — | `number (0–1)` | Opgeslagen geluidsvolume (`demoscopeSoundEffectsVolume`, standaard 0,4). |
| `playUiSound` | `kind = "click"` | `void` | Synthetiseert met Web Audio een korte toonreeks (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`); geeft nooit een fout. |
| `readSettingsHotkey` | — | `string` | Opgeslagen `KeyboardEvent.code` die de instellingendialoog opent (standaard `F2`). |
| `formatHotkey` | `code: string` | `string` | Leesbare toetsnaam (`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | Haalt een fysieke toetscode op en zet niet-Latijnse indelingen terug naar `KeyX`; `""` als onbruikbaar. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | Waar voor toetsen die DemoScope of de speler al gebruikt (Enter, spatie, pijlen, `M`, `F`, `1`–`5`, …). |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Maakt (eenmalig) de instellingendialoog en koppelt hem: geluid, volume, sneltoets opnemen, geschiedenislimieten, exporteren/importeren/rapport/samenvoegen/wissen, resetten. |
| `openSettingsDialog` | `opener = null` | `void` | Opent de dialoog met de huidige waarden en onthoudt het element waaraan de focus wordt teruggegeven. |
| `installSettingsUi` | — | `void` | Installeert de globale toetsluisteraar in de capture-fase (dialoog openen/sluiten, toets opnieuw toewijzen) en de geluidsgebeurtenissen. |
| `installUiSoundEvents` | — | `void` | Gedelegeerde klikluisteraar die feedbackgeluiden afspeelt voor DemoScope-bediening. |

## Back-ups, rapporten en geschiedenislimieten

| Functie | Parameters | Retourneert | Verantwoordelijkheid |
|---|---|---|---|
| `exportLocalHistory` | — | `void` | Downloadt de hele geschiedenis als `demoscope-history-YYYY-MM-DD.json`. |
| `downloadHistoryFile` | `content: string, filename: string, mimeType: string` | `void` | Start een bestandsdownload via een tijdelijke Blob-URL. |
| `collectHistoryReportRows` | `store: object` | `Array<{vodId, ts, summary, segment}>` | Maakt geschiedenisitems plat en ontdubbelt ze, nieuwste eerst. |
| `exportReadableHistory` | — | `void` | Downloadt een zelfstandig, gelokaliseerd HTML-rapport van de geschiedenis. |
| `buildReadableHistoryReport` | `rows: Array, reportTitle: string, summaryNote = ""` | `string (HTML document)` | Bouwt de geëscapete HTML-markup van het rapport. |
| `setMergeReportStatus` | `statusElement: HTMLElement, message: string, state: string` | `void` | Werkt de statusregel van het samenvoegprogramma bij (`progress`, `success`, `warning`). |
| `exportCombinedHistoryReports` | `files: FileList \| File[], statusElement: HTMLElement, button: HTMLButtonElement` | `Promise<void>` | Valideert veel JSON-back-ups (elk ≤ 5 MB, totaal ≤ 100 MB), ontdubbelt items en downloadt één gecombineerd HTML-rapport. |
| `isSafeHistoryKey` | `key: string` | `boolean` | Whitelistcontrole voor geschiedenissleutels (blokkeert `__proto__`, `constructor` en misvormde sleutels). |
| `importLocalHistory` | `file: File` | `Promise<void>` | Valideert een JSON-back-up, voegt die samen met de lokale geschiedenis (met inachtneming van de limieten) en ververst de UI. |
| `readHistoryLimit` | `storageKey: string, allowedValues: number[], defaultValue: number` | `number` | Leest een numerieke limiet uit `localStorage` en accepteert alleen toegestane waarden. |
| `getHistoryPerKeyLimit` | — | `number` | Items die per clip-/gamesleutel worden bewaard (10/20/30/50, standaard 30). |
| `getHistoryTotalLimit` | — | `number` | Totaal aantal bewaarde clip-/gamesleutels (100/200/300/500, standaard 300). |
| `readAdvancedPresetsOpen` | — | `boolean` | Of de lade met uitgebreide presets open was gelaten. |

## Accountnaam en uitnodigingspagina

| Functie | Parameters | Retourneert | Verantwoordelijkheid |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Of de Steam-accountnaam momenteel verborgen is. |
| `installAccountNameControl` | — | `void` | Voegt een oogschakelaar toe naast de uitloglink en houdt die gesynchroniseerd via een `MutationObserver`. |
| `installInvitePage` | — | `boolean` | Herontwerpt `/vacnet/createinvite`: kaartindeling, tonen/verbergen en kopiëren van de link (Clipboard API met `execCommand`-terugval), vereistenlijst, taalkiezer. Geeft `false` terug als verwachte elementen ontbreken. |

## Clipsegment en speleradapter

| Functie | Parameters | Retourneert | Verantwoordelijkheid |
|---|---|---|---|
| `parseSegmentBounds` | — | `{startTime, endTime, duration} \| null` | Haalt `startTime`/`endTime` uit de inline scripts van de pagina. |
| `formatSegmentTime` | `seconds: number` | `string` | Formatteert seconden als `m:ss.cc`. |
| `getVideoElement` | — | `HTMLVideoElement \| null` | Zoekt het `<video>`-element van de beoordeling. |
| `getVjsPlayer` | — | `Video.js player \| null` | Geeft de Video.js-speler van de pagina terug als die beschikbaar is en niet is verwijderd. |
| `createPlayerAdapter` | — | `adapter \| null` | Eén API bovenop Video.js / HTML5-video: `currentTime`, `paused`, `pause`, `play`, `playbackRate(s)`, `muted`, `on`, `isFullscreen`, `requestFullscreen`, `exitFullscreen`. |
| `waitForPlayerAdapter` | `timeoutMs = 20000` | `Promise<adapter>` | Peilt elke 100 ms tot er een speler bestaat; wijst af bij time-out. |
| `clampSegment` | `time: number, bounds: object` | `number` | Beperkt een tijdstip tot de grenzen van de clip. |
| `segmentProgress` | `time: number, bounds: object` | `number (0–1)` | Relatieve positie binnen de clip. |
| `installCustomControls` | `player, bounds, refreshDisplay: {current: Function}` | `void` | Voegt de zoekbalk, tijdsweergave en toetshints onder de video toe. |
| `pauseLayoutMutations` | `run: Function` | `void` | Voert een callback uit terwijl layoutwaarnemers zijn onderdrukt (voorkomt terugkoppelingslussen). |
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | Waar wanneer de focus in een invoerveld, tekstvak, keuzelijst, knop, link of bewerkbaar element staat. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | Label van een snelheidsoptie. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | `<option>`-lijst voor de snelheidskiezer (0,5–4×). |
| `readStoredShiftSpeed` | — | `number` | Opgeslagen Shift-snelheid (standaard 2×). |
| `readStoredVerdictRandomizer` | — | `boolean` | Opgeslagen status van de oordeel-randomizer (standaard uit). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | Koppelt de afhandeling van afspeelsnelheid, segmentbegrenzing/-pauze, hulpfuncties voor zoeken/beeldstap/dempen/volledig scherm en de globale sneltoetsen (`1`–`5`, pijlen, `,` `.`, spatie, `M`, `F`, Shift). Interne closures: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, hulpfuncties van de tekenlus. |

## Oordeelpresets

| Functie | Parameters | Retourneert | Verantwoordelijkheid |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | Selecteert “skip” in elke oordeelgroep zonder selectie. |
| `getSelectedVerdictState` | — | `object` | Huidige waarde (`positive` / `negative` / `skip` / `null`) van `aimassist`, `wallhack`, `autobhop`, `bot`. |
| `detectActivePreset` | — | `string \| null` | Naam van de preset die overeenkomt met de huidige selectie. |
| `syncPresetButtons` | — | `string \| null` | Werkt `aria-pressed` bij op de presetknoppen en de badge van de uitgebreide preset. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | Klikt de radio-invoer van een preset aan; met randomizer aan wordt de volgorde geschud en wordt 200–600 ms tussen klikken gewacht. Schakelt de presetknoppen uit tijdens het uitvoeren. |
| `normalizeVerdictLabels` | `root = document` | `void` | Verwijdert markeringsmarkup uit oordeellabels. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Voegt gelokaliseerde titels boven elke oordeelgroep toe. |

## Meldingen, footer en laden bij verzenden

| Functie | Parameters | Retourneert | Verantwoordelijkheid |
|---|---|---|---|
| `hideSiteFooter` | — | `void` | Verbergt de footer van de site. |
| `showToast` | `message: string, type = "info", duration = 1800` | `void` | Toont een niet-blokkerende ARIA-live-melding. |
| `markSubmitPending` | — | `void` | Slaat het verzendmoment en de huidige clip-id op in `sessionStorage`. |
| `isSubmitPending` | — | `boolean` | Of een verzending op de volgende clip wacht. |
| `clearSubmitPending` | — | `void` | Wist de markeringen voor een openstaande verzending. |
| `showSubmitLoadingOverlay` | `message = tr("nextClip")` | `void` | Toont de laadoverlay over de hele pagina. |
| `hideSubmitLoadingOverlay` | — | `void` | Verbergt de overlay en wist de wachtstatus. |
| `bootSubmitLoadingIfPending` | — | `void` | Toont de overlay opnieuw bij het laden van de pagina als er een verzending openstaat. |
| `isReviewPageReady` | `prevVod: string, startedAt: number` | `boolean` | Waar wanneer de UI en media van de volgende clip klaar zijn. |
| `finishSubmitLoadingWhenReady` | — | `Promise<void>` | Wacht maximaal 30 s op de volgende clip en verbergt dan de overlay (foutmelding bij time-out). |

## Lokale geschiedenisopslag

| Functie | Parameters | Retourneert | Verantwoordelijkheid |
|---|---|---|---|
| `extractVodId` | — | `string` | Leidt de clip-/game-id af uit de video-URL. |
| `getGameKey` | — | `string` | Geschiedenissleutel voor de game (`game::<id>`). |
| `getClipKey` | `bounds: object` | `string` | Geschiedenissleutel voor één segment (`<id>:<start>:<end>`). |
| `normalizeHistoryEntry` | `entry: any` | `{ts, summary, segment} \| null` | Valideert en schoont één geschiedenisitem op. |
| `readHistoryEntries` | `store: object, key: string` | `Array` | Genormaliseerde items voor een sleutel. |
| `getGameHistoryEntries` | `store: object` | `Array` | Items voor de huidige game (ondersteunt een oude sleutel). |
| `getClipHistoryEntries` | `store: object, bounds: object` | `Array` | Items voor het huidige segment. |
| `formatClipId` | `vodId: string` | `string` | Korte numerieke weergave-id (`#0000000`), gehasht uit de clip-id. |
| `formatRelativeTime` | `timestamp: number` | `string` | Gelokaliseerde relatieve tijd (`Intl.RelativeTimeFormat`). |
| `readClipHistoryStore` | — | `object` | Laadt het geschiedenisobject uit `localStorage` (`{}` bij fout). |
| `pruneHistoryStore` | `store: object` | `void` | Past de limieten per sleutel en in totaal toe (oudste sleutels vallen als eerste weg). |
| `writeClipHistoryStore` | `store: object` | `boolean` | Snoeit en slaat op; `false` bij quota-/opslagfouten. |
| `summarizeCurrentVerdict` | — | `string` | Presetnaam van de huidige selectie, of `mixed`. |
| `formatSummaryLabel` | `summary: string` | `string` | Gelokaliseerd label voor een geschiedenissamenvatting. |
| `formatClockTime` | `seconds: number` | `string` | Klokformaat `m:ss` (of `x.xs`). |
| `formatHumanSegment` | `bounds: object` | `string` | Leesbaar segmentbereik. |
| `formatGameLabel` | — | `string` | Gelokaliseerd label van de huidige game. |
| `historyEntryKey` | `entry: object` | `string` | Identiteitsstring die voor ontdubbeling wordt gebruikt. |
| `formatPriorStat` | `count: number, label: string` | `string` | Regel “label: N” in het geschiedenispaneel. |
| `buildHistoryListItems` | `clipEntries: Array, gameEntries: Array, currentSegment: string` | `Array` | Voegt clip-/gameitems samen tot weer te geven items. |
| `renderHistoryItem` | `item: object` | `string (HTML)` | Markup van één geschiedenisrij. |
| `escapeHtml` | `value: any` | `string` | Escapet `& < > " '`. |
| `buildClipHistoryPanel` | `bounds, gameEntries, clipEntries` | `string (HTML)` | Markup van het geschiedenispaneel, inclusief de knop voor de beoordelingsregels. |
| `ensureClipHistoryPanel` | — | `void` | Maakt de paneelcontainer aan als die ontbreekt. |
| `ensureReviewRulesDialog` | — | `void` | Maakt de dialoog met beoordelingsregels aan en koppelt de open-/sluitknoppen. |
| `installLocalHistoryButton` | `panel: HTMLElement` | `void` | Koppelt de knop “lokale geschiedenis” (scrolt naar de lijst of toont een melding bij een lege lijst). |
| `positionClipHistoryPanel` | — | `void` | Houdt het paneel als eerste in `.verdicts-container`. |
| `renderClipHistory` | `bounds: object \| null` | `void` | Rendert het geschiedenispaneel opnieuw voor de huidige clip. |
| `appendReviewHistory` | `bounds: object \| null` | `void` | Voegt de samenvatting van het huidige oordeel toe aan de geschiedenis van game en clip. |

## Verzendproces

| Functie | Parameters | Retourneert | Verantwoordelijkheid |
|---|---|---|---|
| `isLabelingMode` | — | `boolean` | Waar op pagina's die de vier oordeelgroepen tonen. |
| `getProceedButton` | — | `HTMLButtonElement \| null` | De native verzendknop als die zichtbaar en ingeschakeld is. |
| `recordProceedHistoryIfLabeling` | — | `void` | Legt de geschiedenis één keer per verzending vast (beveiligd tegen herhaalde aanroep). |
| `resetProceedArmed` | — | `void` | Onttrekt de tweestapsverzending aan de gereed-stand. |
| `refreshProceedButtonLabel` | — | `void` | Werkt het knoplabel/de `Enter`-hint en de stijl van de gereed-stand bij. |
| `verdictLabelForField` | `field: string, selected: string` | `string \| null` | Zet een selectie om naar `guilty_*` / `innocent_*` / `skip_*`. |
| `prepareVerdictFormForSubmit` | — | `boolean` | Bouwt verborgen `verdict_labels[]`-invoer; toont een foutmelding en geeft `false` terug als een groep niet is ingesteld. |
| `isSafeSubmitTarget` | `form: HTMLFormElement` | `boolean` | Staat alleen HTTPS-formulieracties met dezelfde oorsprong toe. |
| `restoreSubmitUi` | — | `void` | Herstelt de knoppen na een mislukte verzending. |
| `submitVerdictForm` | `{ recordHistory = false }` | `boolean` | Voert de veiligheidscontrole uit, toont de overlay en verzendt het formulier. |
| `submitVerdictsDirect` | — | `boolean` | Bereidt de labels voor en verzendt. |
| `invokeProceedAction` | — | `boolean` | Enter-/klikhandler: eerste druk maakt gereed, tweede druk verzendt. |
| `installProceedShortcut` | — | `void` | Capture-fase-luisteraar voor `Enter`/`NumpadEnter`. |
| `hookProceedButton` | — | `void` | Vervangt het klikgedrag van de native verzendknop. |
| `installVerdictChangeReset` | — | `void` | Haalt de verzending uit de gereed-stand en synchroniseert presets opnieuw wanneer een oordeel verandert. |
| `scheduleProceedFooterFix` | — | `void` | Gedebounced (`requestAnimationFrame`) aanroep van `fixProceedFooter`. |
| `scheduleVerdictLabelsFix` | — | `void` | Gedebounced hernormalisatie van labels/titels/standaardwaarden. |

## Layout en opstarten

| Functie | Parameters | Retourneert | Verantwoordelijkheid |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Bouwt de keuzebalk voor de Shift-snelheid. |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | Markup voor één presetknop. |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | Markup van de uitgebreide presetgroepen. |
| `buildEnhancementBar` | — | `HTMLElement` | Bouwt de snelle-oordeelbalk: presets, randomizerschakelaar, uitgebreide lade. |
| `positionShiftSpeedBar` | — | `void` | Houdt de snelheidsbalk vóór de oordeellijst. |
| `positionEnhancementBar` | — | `void` | Houdt de presetbalk vóór de verzendknoppen. |
| `fixProceedFooter` | — | `void` | Herschikt footer, balken en verzendknop. |
| `enhanceLayout` | — | `void` | Past alle layoutwijzigingen toe en installeert de instellingen-UI. |
| `watchProceedFooter` | — | `void` | Observeert `.verdicts-container` en plant footercorrecties in. |
| `watchVerdictLabels` | — | `void` | Observeert de oordeellabels en plant hernormalisatie in. |
| `init` | — | `Promise<void>` | Startpunt: accountnaambediening → uitnodigings- of beoordelingspagina → layout, waarnemers, sneltoetsen, spelerverbeteringen. |

### Hierboven niet vermeld

* **`blockSegmentLoopGuard`** (IIFE, draait bij het laden): verpakt `setInterval` op de pagina zodat de native segmentlus-timer van 100 ms van de site wordt vervangen door een lege functie; de eigen bediening van DemoScope regelt het segment.
* **Constanten en tabellen:** `SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC` (`PRESETS`: 21 definities).
