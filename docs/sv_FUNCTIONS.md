<div align="center">

[English](../FUNCTIONS.md) · [Български](bg_FUNCTIONS.md) · [Magyar](hu_FUNCTIONS.md) · [Tiếng Việt](vi_FUNCTIONS.md) · [Ελληνικά](el_FUNCTIONS.md) · [Dansk](da_FUNCTIONS.md) · [Bahasa Indonesia](id_FUNCTIONS.md) · [Español (España)](es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](es-419_FUNCTIONS.md) · [Italiano](it_FUNCTIONS.md) · [繁體中文](zh-TW_FUNCTIONS.md) · [简体中文](zh-CN_FUNCTIONS.md) · [한국어](ko_FUNCTIONS.md) · [Deutsch](de_FUNCTIONS.md) · [Nederlands](nl_FUNCTIONS.md) · [Norsk](no_FUNCTIONS.md) · [Polski](pl_FUNCTIONS.md) · [Português (Portugal)](pt-PT_FUNCTIONS.md) · [Português (Brasil)](pt-BR_FUNCTIONS.md) · [Română](ro_FUNCTIONS.md) · [Русский](ru_FUNCTIONS.md) · [ไทย](th_FUNCTIONS.md) · [Türkçe](tr_FUNCTIONS.md) · [Українська](uk_FUNCTIONS.md) · [Suomi](fi_FUNCTIONS.md) · [Français](fr_FUNCTIONS.md) · [Čeština](cs_FUNCTIONS.md) · **Svenska** · [日本語](ja_FUNCTIONS.md)

</div>

# DemoScope — Funktionsreferens

Fullständig referens för de 128 funktionerna på översta nivån i `DemoScope.user.js` v1.0.0 (namn, parametrar, returvärde, ansvar). Tillbaka till [README](../../README/sv_README.md).

Konventioner: `—` betyder inga parametrar; `void` betyder att funktionen anropas för sina biverkningars skull.

## Lokalisering

| Funktion | Parametrar | Returnerar | Ansvar |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Inbäddad SVG-kod för en flagga till ett språk; faller tillbaka på en globikon. |
| `getSavedLocale` | — | `string \| null` | Läser användarens sparade språk (`demoscopeLanguage`) från `localStorage`. |
| `getActiveLocale` | — | `string` | Avgör det aktiva språket: sparat val → Steams `?l=` → webbläsar-/sidspråk → `en`. |
| `getLanguageBadge` | — | `string` | Språkets eget visningsnamn, t.ex. “English version”, till märket i språkväljaren. |
| `tr` | `key: string` | `string` | Slår upp en gränssnittstext för det aktiva språket (reserv: engelska, därefter själva nyckeln). |
| `inviteText` | `key: string` | `string` | Samma uppslagning för teksttabellen på inbjudningssidan. |
| `settingText` | `key: string` | `string` | Samma uppslagning för teksttabellen i inställningsdialogen. |
| `getPresetLabel` | `name: string` | `string` | Lokaliserad etikett för en förinställning; sätter ihop kombinationer som “Bot + Aim”. |
| `buildLanguageOptions` | — | `string (HTML)` | HTML för språkvalsknapparna, inklusive posten “auto”. |
| `installLanguageSelector` | `root: HTMLElement` | `void` | Binder popover-språkväljaren, placerar den, sparar valet och laddar om sidan. |

## Ljudeffekter och inställningsdialog

| Funktion | Parametrar | Returnerar | Ansvar |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | Raden “N poster · senaste post: …” i inställningsdialogen. |
| `soundsEnabled` | — | `boolean` | Om gränssnittsljud är påslagna (`demoscopeSoundEffectsEnabled`, standard på). |
| `getSoundVolume` | — | `number (0–1)` | Sparad ljudvolym (`demoscopeSoundEffectsVolume`, standard 0,4). |
| `playUiSound` | `kind = "click"` | `void` | Syntetiserar en kort tonsekvens med Web Audio (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`); kastar aldrig fel. |
| `readSettingsHotkey` | — | `string` | Sparad `KeyboardEvent.code` som öppnar inställningsdialogen (standard `F2`). |
| `formatHotkey` | `code: string` | `string` | Läsbart tangentnamn (`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | Hämtar en fysisk tangentkod och avbildar icke-latinska layouter tillbaka till `KeyX`; `""` om den inte går att använda. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | Sant för tangenter som DemoScope eller spelaren redan använder (Enter, mellanslag, piltangenter, `M`, `F`, `1`–`5`, …). |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Skapar (en gång) och kopplar inställningsdialogen: ljud, volym, inspelning av kortkommando, historikgränser, export/import/rapport/sammanslagning/rensning, återställning. |
| `openSettingsDialog` | `opener = null` | `void` | Öppnar dialogen med aktuella värden och kommer ihåg elementet som fokus ska återgå till. |
| `installSettingsUi` | — | `void` | Installerar den globala tangentlyssnaren i capture-fasen (öppna/stänga dialogen, ny tilldelning) och ljudhändelserna. |
| `installUiSoundEvents` | — | `void` | Delegerad klicklyssnare som spelar upp återkopplingsljud för DemoScopes kontroller. |

## Säkerhetskopior, rapporter och historikgränser

| Funktion | Parametrar | Returnerar | Ansvar |
|---|---|---|---|
| `exportLocalHistory` | — | `void` | Laddar ned hela historiken som `demoscope-history-YYYY-MM-DD.json`. |
| `downloadHistoryFile` | `content: string, filename: string, mimeType: string` | `void` | Startar en filnedladdning via en tillfällig Blob-URL. |
| `collectHistoryReportRows` | `store: object` | `Array<{vodId, ts, summary, segment}>` | Plattar ut och tar bort dubbletter bland historikposter, nyaste först. |
| `exportReadableHistory` | — | `void` | Laddar ned en fristående, lokaliserad HTML-rapport över historiken. |
| `buildReadableHistoryReport` | `rows: Array, reportTitle: string, summaryNote = ""` | `string (HTML document)` | Bygger den escapade HTML-koden för rapporten. |
| `setMergeReportStatus` | `statusElement: HTMLElement, message: string, state: string` | `void` | Uppdaterar statusraden för sammanslagningsverktyget (`progress`, `success`, `warning`). |
| `exportCombinedHistoryReports` | `files: FileList \| File[], statusElement: HTMLElement, button: HTMLButtonElement` | `Promise<void>` | Validerar många JSON-säkerhetskopior (≤ 5 MB vardera, ≤ 100 MB totalt), tar bort dubbletter bland posterna och laddar ned en samlad HTML-rapport. |
| `isSafeHistoryKey` | `key: string` | `boolean` | Vitlistekontroll av historiknycklar (blockerar `__proto__`, `constructor` och felformade nycklar). |
| `importLocalHistory` | `file: File` | `Promise<void>` | Validerar en JSON-säkerhetskopia, slår ihop den med den lokala historiken (med respekt för gränserna) och uppdaterar gränssnittet. |
| `readHistoryLimit` | `storageKey: string, allowedValues: number[], defaultValue: number` | `number` | Läser en numerisk gräns från `localStorage` och godtar bara tillåtna värden. |
| `getHistoryPerKeyLimit` | — | `number` | Poster som sparas per klipp-/spelnyckel (10/20/30/50, standard 30). |
| `getHistoryTotalLimit` | — | `number` | Totalt antal sparade klipp-/spelnycklar (100/200/300/500, standard 300). |
| `readAdvancedPresetsOpen` | — | `boolean` | Om lådan med utökade förinställningar lämnades öppen. |

## Kontonamn och inbjudningssida

| Funktion | Parametrar | Returnerar | Ansvar |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Om Steam-kontonamnet för tillfället är dolt. |
| `installAccountNameControl` | — | `void` | Lägger till en ögonväxel bredvid utloggningslänken och håller den synkroniserad via en `MutationObserver`. |
| `installInvitePage` | — | `boolean` | Gör om `/vacnet/createinvite`: kortlayout, visa/dölj och kopiera länken (Clipboard API med `execCommand` som reserv), kravlista, språkväljare. Returnerar `false` om förväntade element saknas. |

## Klippsegment och spelaradapter

| Funktion | Parametrar | Returnerar | Ansvar |
|---|---|---|---|
| `parseSegmentBounds` | — | `{startTime, endTime, duration} \| null` | Hämtar `startTime`/`endTime` från sidans inbäddade skript. |
| `formatSegmentTime` | `seconds: number` | `string` | Formaterar sekunder som `m:ss.cc`. |
| `getVideoElement` | — | `HTMLVideoElement \| null` | Hittar granskningens `<video>`-element. |
| `getVjsPlayer` | — | `Video.js player \| null` | Returnerar sidans Video.js-spelare om den finns och inte har förstörts. |
| `createPlayerAdapter` | — | `adapter \| null` | Enhetligt API ovanpå Video.js / HTML5-video: `currentTime`, `paused`, `pause`, `play`, `playbackRate(s)`, `muted`, `on`, `isFullscreen`, `requestFullscreen`, `exitFullscreen`. |
| `waitForPlayerAdapter` | `timeoutMs = 20000` | `Promise<adapter>` | Pollar var 100 ms tills en spelare finns; avvisar vid timeout. |
| `clampSegment` | `time: number, bounds: object` | `number` | Begränsar en tidpunkt till klippets gränser. |
| `segmentProgress` | `time: number, bounds: object` | `number (0–1)` | Relativ position inom klippet. |
| `installCustomControls` | `player, bounds, refreshDisplay: {current: Function}` | `void` | Lägger till sökfältet, tidsvisningen och tangenttipsen under videon. |
| `pauseLayoutMutations` | `run: Function` | `void` | Kör en återanropsfunktion medan layoutobservatörer är pausade (förhindrar återkopplingsloopar). |
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | Sant när fokus är i ett inmatningsfält, textområde, en rullgardinslista, knapp, länk eller redigerbart element. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | Etikett för ett hastighetsalternativ. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | `<option>`-lista för hastighetsväljaren (0,5–4×). |
| `readStoredShiftSpeed` | — | `number` | Sparad Shift-hastighet (standard 2×). |
| `readStoredVerdictRandomizer` | — | `boolean` | Sparat tillstånd för bedömnings-randomiseraren (standard av). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | Kopplar hantering av uppspelningshastighet, segmentbegränsning/-paus, hjälpfunktioner för sökning/bildsteg/ljud av/helskärm och de globala kortkommandona (`1`–`5`, piltangenter, `,` `.`, mellanslag, `M`, `F`, Shift). Interna closures: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, hjälpfunktioner för ritloopen. |

## Förinställda bedömningar

| Funktion | Parametrar | Returnerar | Ansvar |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | Väljer “skip” i varje bedömningsgrupp utan val. |
| `getSelectedVerdictState` | — | `object` | Aktuellt värde (`positive` / `negative` / `skip` / `null`) för `aimassist`, `wallhack`, `autobhop`, `bot`. |
| `detectActivePreset` | — | `string \| null` | Namnet på den förinställning som matchar aktuellt val. |
| `syncPresetButtons` | — | `string \| null` | Uppdaterar `aria-pressed` på förinställningsknapparna och märket för den utökade förinställningen. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | Klickar på en förinställnings radioinmatningar; med randomiseraren på blandas ordningen och 200–600 ms väntas mellan klicken. Inaktiverar förinställningsknapparna medan den körs. |
| `normalizeVerdictLabels` | `root = document` | `void` | Tar bort markeringskod från bedömningsetiketterna. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Lägger till lokaliserade rubriker ovanför varje bedömningsgrupp. |

## Aviseringar, sidfot och laddning vid inskick

| Funktion | Parametrar | Returnerar | Ansvar |
|---|---|---|---|
| `hideSiteFooter` | — | `void` | Döljer webbplatsens sidfot. |
| `showToast` | `message: string, type = "info", duration = 1800` | `void` | Visar en icke-blockerande ARIA-live-avisering. |
| `markSubmitPending` | — | `void` | Sparar tidpunkten för inskicket och aktuellt klipp-id i `sessionStorage`. |
| `isSubmitPending` | — | `boolean` | Om ett inskick väntar på nästa klipp. |
| `clearSubmitPending` | — | `void` | Rensar markörerna för väntande inskick. |
| `showSubmitLoadingOverlay` | `message = tr("nextClip")` | `void` | Visar laddningsöverlägget över hela sidan. |
| `hideSubmitLoadingOverlay` | — | `void` | Döljer överlägget och rensar väntetillståndet. |
| `bootSubmitLoadingIfPending` | — | `void` | Visar överlägget igen vid sidinläsning om ett inskick väntar. |
| `isReviewPageReady` | `prevVod: string, startedAt: number` | `boolean` | Sant när nästa klipps gränssnitt och media är redo. |
| `finishSubmitLoadingWhenReady` | — | `Promise<void>` | Väntar upp till 30 s på nästa klipp och döljer sedan överlägget (felavisering vid timeout). |

## Lokalt historiklager

| Funktion | Parametrar | Returnerar | Ansvar |
|---|---|---|---|
| `extractVodId` | — | `string` | Härleder klipp-/spel-id från video-URL:en. |
| `getGameKey` | — | `string` | Historiknyckel för spelet (`game::<id>`). |
| `getClipKey` | `bounds: object` | `string` | Historiknyckel för ett segment (`<id>:<start>:<end>`). |
| `normalizeHistoryEntry` | `entry: any` | `{ts, summary, segment} \| null` | Validerar och rensar en historikpost. |
| `readHistoryEntries` | `store: object, key: string` | `Array` | Normaliserade poster för en nyckel. |
| `getGameHistoryEntries` | `store: object` | `Array` | Poster för aktuellt spel (stöder en äldre nyckel). |
| `getClipHistoryEntries` | `store: object, bounds: object` | `Array` | Poster för aktuellt segment. |
| `formatClipId` | `vodId: string` | `string` | Kort numeriskt visnings-id (`#0000000`), hashat från klipp-id:t. |
| `formatRelativeTime` | `timestamp: number` | `string` | Lokaliserad relativ tid (`Intl.RelativeTimeFormat`). |
| `readClipHistoryStore` | — | `object` | Läser in historikobjektet från `localStorage` (`{}` vid fel). |
| `pruneHistoryStore` | `store: object` | `void` | Tillämpar gränserna per nyckel och totalt (äldsta nycklar tas bort först). |
| `writeClipHistoryStore` | `store: object` | `boolean` | Beskär och sparar; `false` vid kvot-/lagringsfel. |
| `summarizeCurrentVerdict` | — | `string` | Förinställningsnamn för aktuellt val, eller `mixed`. |
| `formatSummaryLabel` | `summary: string` | `string` | Lokaliserad etikett för ett historiksammandrag. |
| `formatClockTime` | `seconds: number` | `string` | Klockformat `m:ss` (eller `x.xs`). |
| `formatHumanSegment` | `bounds: object` | `string` | Läsbart segmentintervall. |
| `formatGameLabel` | — | `string` | Lokaliserad etikett för aktuellt spel. |
| `historyEntryKey` | `entry: object` | `string` | Identitetssträng som används för att ta bort dubbletter. |
| `formatPriorStat` | `count: number, label: string` | `string` | Raden “etikett: N” i historikpanelen. |
| `buildHistoryListItems` | `clipEntries: Array, gameEntries: Array, currentSegment: string` | `Array` | Slår ihop klipp-/spelposter till visningsobjekt. |
| `renderHistoryItem` | `item: object` | `string (HTML)` | HTML för en historikrad. |
| `escapeHtml` | `value: any` | `string` | Escapar `& < > " '`. |
| `buildClipHistoryPanel` | `bounds, gameEntries, clipEntries` | `string (HTML)` | HTML för historikpanelen, inklusive knappen för granskningsregler. |
| `ensureClipHistoryPanel` | — | `void` | Skapar panelens behållare om den saknas. |
| `ensureReviewRulesDialog` | — | `void` | Skapar dialogen med granskningsregler och binder dess öppna/stäng-knappar. |
| `installLocalHistoryButton` | `panel: HTMLElement` | `void` | Binder knappen “lokal historik” (rullar till listan eller visar en avisering när den är tom). |
| `positionClipHistoryPanel` | — | `void` | Håller panelen som första element i `.verdicts-container`. |
| `renderClipHistory` | `bounds: object \| null` | `void` | Ritar om historikpanelen för aktuellt klipp. |
| `appendReviewHistory` | `bounds: object \| null` | `void` | Lägger till sammandraget av aktuell bedömning i spelets och klippets historik. |

## Inskickningsflöde

| Funktion | Parametrar | Returnerar | Ansvar |
|---|---|---|---|
| `isLabelingMode` | — | `boolean` | Sant på sidor som visar de fyra bedömningsgrupperna. |
| `getProceedButton` | — | `HTMLButtonElement \| null` | Den inbyggda skicka-knappen om den är synlig och aktiverad. |
| `recordProceedHistoryIfLabeling` | — | `void` | Registrerar historik en gång per inskick (skyddat mot återinträde). |
| `resetProceedArmed` | — | `void` | Avväpnar inskicket i två steg. |
| `refreshProceedButtonLabel` | — | `void` | Uppdaterar knappetiketten/`Enter`-tipset och stilen för klarmarkerat läge. |
| `verdictLabelForField` | `field: string, selected: string` | `string \| null` | Avbildar ett val på `guilty_*` / `innocent_*` / `skip_*`. |
| `prepareVerdictFormForSubmit` | — | `boolean` | Bygger dolda `verdict_labels[]`-fält; visar en felavisering och returnerar `false` om någon grupp saknar val. |
| `isSafeSubmitTarget` | `form: HTMLFormElement` | `boolean` | Tillåter bara HTTPS-formuläråtgärder med samma ursprung. |
| `restoreSubmitUi` | — | `void` | Återställer knapparna efter ett misslyckat inskick. |
| `submitVerdictForm` | `{ recordHistory = false }` | `boolean` | Kör säkerhetskontrollen, visar överlägget och skickar formuläret. |
| `submitVerdictsDirect` | — | `boolean` | Förbereder etiketterna och skickar. |
| `invokeProceedAction` | — | `boolean` | Enter-/klickhanterare: första trycket klarmarkerar, andra trycket skickar. |
| `installProceedShortcut` | — | `void` | Lyssnare i capture-fasen för `Enter`/`NumpadEnter`. |
| `hookProceedButton` | — | `void` | Ersätter klickbeteendet för den inbyggda skicka-knappen. |
| `installVerdictChangeReset` | — | `void` | Avväpnar inskicket och synkar förinställningarna igen när en bedömning ändras. |
| `scheduleProceedFooterFix` | — | `void` | Fördröjt (`requestAnimationFrame`) anrop av `fixProceedFooter`. |
| `scheduleVerdictLabelsFix` | — | `void` | Fördröjd omnormalisering av etiketter/rubriker/standardvärden. |

## Layout och uppstart

| Funktion | Parametrar | Returnerar | Ansvar |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Bygger raden för val av Shift-hastighet. |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | HTML för en förinställningsknapp. |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | HTML för de utökade förinställningsgrupperna. |
| `buildEnhancementBar` | — | `HTMLElement` | Bygger snabbbedömningsraden: förinställningar, randomiserarväxel, utökad låda. |
| `positionShiftSpeedBar` | — | `void` | Håller hastighetsraden före bedömningslistan. |
| `positionEnhancementBar` | — | `void` | Håller förinställningsraden före skicka-knapparna. |
| `fixProceedFooter` | — | `void` | Ordnar om sidfoten, raderna och skicka-knappen. |
| `enhanceLayout` | — | `void` | Tillämpar alla layoutändringar och installerar inställningsgränssnittet. |
| `watchProceedFooter` | — | `void` | Observerar `.verdicts-container` och schemalägger korrigeringar av sidfoten. |
| `watchVerdictLabels` | — | `void` | Observerar bedömningsetiketterna och schemalägger omnormalisering. |
| `init` | — | `Promise<void>` | Startpunkt: kontonamnskontroll → inbjudnings- eller granskningssida → layout, observatörer, kortkommandon, spelarförbättringar. |

### Inte listat ovan

* **`blockSegmentLoopGuard`** (IIFE, körs vid inläsning): omsluter `setInterval` på sidan så att webbplatsens inbyggda 100 ms segmentloop-timer ersätts av en tom funktion; DemoScopes egna kontroller hanterar segmentet i stället.
* **Konstanter och tabeller:** `SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC` (`PRESETS`: 21 definitioner).
