<div align="center">

[English](../FUNCTIONS.md) · [Български](bg_FUNCTIONS.md) · [Magyar](hu_FUNCTIONS.md) · [Tiếng Việt](vi_FUNCTIONS.md) · [Ελληνικά](el_FUNCTIONS.md) · **Dansk** · [Bahasa Indonesia](id_FUNCTIONS.md) · [Español (España)](es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](es-419_FUNCTIONS.md) · [Italiano](it_FUNCTIONS.md) · [繁體中文](zh-TW_FUNCTIONS.md) · [简体中文](zh-CN_FUNCTIONS.md) · [한국어](ko_FUNCTIONS.md) · [Deutsch](de_FUNCTIONS.md) · [Nederlands](nl_FUNCTIONS.md) · [Norsk](no_FUNCTIONS.md) · [Polski](pl_FUNCTIONS.md) · [Português (Portugal)](pt-PT_FUNCTIONS.md) · [Português (Brasil)](pt-BR_FUNCTIONS.md) · [Română](ro_FUNCTIONS.md) · [Русский](ru_FUNCTIONS.md) · [ไทย](th_FUNCTIONS.md) · [Türkçe](tr_FUNCTIONS.md) · [Українська](uk_FUNCTIONS.md) · [Suomi](fi_FUNCTIONS.md) · [Français](fr_FUNCTIONS.md) · [Čeština](cs_FUNCTIONS.md) · [Svenska](sv_FUNCTIONS.md) · [日本語](ja_FUNCTIONS.md)

</div>

# DemoScope — funktionsreference

Komplet reference for de 128 funktioner på øverste niveau i `DemoScope.user.js` v1.0.0 (navn, parametre, returværdi, ansvar). Tilbage til [README](../../README/da_README.md).

Konventioner: `—` betyder ingen parametre; `void` betyder, at funktionen kaldes for sine bivirkningers skyld.

## Lokalisering

| Funktion | Parametre | Returnerer | Ansvar |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Indlejret SVG-kode for et flag til et sprog; falder tilbage til et globusikon. |
| `getSavedLocale` | — | `string \| null` | Læser brugerens gemte sprog (`demoscopeLanguage`) fra `localStorage`. |
| `getActiveLocale` | — | `string` | Finder det aktive sprog: gemt valg → Steams `?l=` → browser-/sidesprog → `en`. |
| `getLanguageBadge` | — | `string` | Sprogets eget visningsnavn, f.eks. “English version”, til mærket i sprogvælgeren. |
| `tr` | `key: string` | `string` | Slår en grænsefladetekst op for det aktive sprog (reserve: engelsk, derefter selve nøglen). |
| `inviteText` | `key: string` | `string` | Samme opslag til teksttabellen på invitationssiden. |
| `settingText` | `key: string` | `string` | Samme opslag til teksttabellen i indstillingsdialogen. |
| `getPresetLabel` | `name: string` | `string` | Lokaliseret etiket for en forudindstilling; sammensætter kombinationer som “Bot + Aim”. |
| `buildLanguageOptions` | — | `string (HTML)` | HTML til sprogvalgsknapperne, inklusive posten “auto”. |
| `installLanguageSelector` | `root: HTMLElement` | `void` | Binder popover-sprogvælgeren, placerer den, gemmer valget og genindlæser siden. |

## Lydeffekter og indstillingsdialog

| Funktion | Parametre | Returnerer | Ansvar |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | Linjen “N poster · seneste post: …” i indstillingsdialogen. |
| `soundsEnabled` | — | `boolean` | Om grænsefladelyde er slået til (`demoscopeSoundEffectsEnabled`, standard til). |
| `getSoundVolume` | — | `number (0–1)` | Gemt lydstyrke (`demoscopeSoundEffectsVolume`, standard 0,4). |
| `playUiSound` | `kind = "click"` | `void` | Syntetiserer en kort tonesekvens med Web Audio (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`); kaster aldrig fejl. |
| `readSettingsHotkey` | — | `string` | Gemt `KeyboardEvent.code`, der åbner indstillingsdialogen (standard `F2`). |
| `formatHotkey` | `code: string` | `string` | Læsbart tastenavn (`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | Udtrækker en fysisk tastekode og afbilder ikke-latinske layouts tilbage til `KeyX`; `""`, hvis den ikke kan bruges. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | Sand for taster, som DemoScope eller afspilleren allerede bruger (Enter, mellemrum, piletaster, `M`, `F`, `1`–`5`, …). |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Opretter (én gang) og kobler indstillingsdialogen: lyd, lydstyrke, optagelse af genvej, historikgrænser, eksport/import/rapport/sammenlægning/rydning, nulstilling. |
| `openSettingsDialog` | `opener = null` | `void` | Åbner dialogen med de aktuelle værdier og husker det element, fokus skal vende tilbage til. |
| `installSettingsUi` | — | `void` | Installerer den globale tastelytter i capture-fasen (åbn/luk dialog, omtildeling) og lydhændelserne. |
| `installUiSoundEvents` | — | `void` | Delegeret klik-lytter, der afspiller feedbacklyde for DemoScopes kontroller. |

## Sikkerhedskopier, rapporter og historikgrænser

| Funktion | Parametre | Returnerer | Ansvar |
|---|---|---|---|
| `exportLocalHistory` | — | `void` | Downloader hele historikken som `demoscope-history-YYYY-MM-DD.json`. |
| `downloadHistoryFile` | `content: string, filename: string, mimeType: string` | `void` | Starter en fildownload via en midlertidig Blob-URL. |
| `collectHistoryReportRows` | `store: object` | `Array<{vodId, ts, summary, segment}>` | Fladgør og fjerner dubletter fra historikposter, nyeste først. |
| `exportReadableHistory` | — | `void` | Downloader en selvstændig, lokaliseret HTML-rapport over historikken. |
| `buildReadableHistoryReport` | `rows: Array, reportTitle: string, summaryNote = ""` | `string (HTML document)` | Bygger den escapede HTML til rapporten. |
| `setMergeReportStatus` | `statusElement: HTMLElement, message: string, state: string` | `void` | Opdaterer statuslinjen for sammenlægningsværktøjet (`progress`, `success`, `warning`). |
| `exportCombinedHistoryReports` | `files: FileList \| File[], statusElement: HTMLElement, button: HTMLButtonElement` | `Promise<void>` | Validerer mange JSON-sikkerhedskopier (≤ 5 MB hver, ≤ 100 MB i alt), fjerner dubletter og downloader én samlet HTML-rapport. |
| `isSafeHistoryKey` | `key: string` | `boolean` | Hvidlistetjek af historiknøgler (blokerer `__proto__`, `constructor` og forkert udformede nøgler). |
| `importLocalHistory` | `file: File` | `Promise<void>` | Validerer en JSON-sikkerhedskopi, fletter den ind i den lokale historik (med respekt for grænserne) og opdaterer grænsefladen. |
| `readHistoryLimit` | `storageKey: string, allowedValues: number[], defaultValue: number` | `number` | Læser en numerisk grænse fra `localStorage` og accepterer kun tilladte værdier. |
| `getHistoryPerKeyLimit` | — | `number` | Poster, der gemmes pr. klip-/spilnøgle (10/20/30/50, standard 30). |
| `getHistoryTotalLimit` | — | `number` | Samlet antal gemte klip-/spilnøgler (100/200/300/500, standard 300). |
| `readAdvancedPresetsOpen` | — | `boolean` | Om skuffen med udvidede forudindstillinger blev efterladt åben. |

## Kontonavn og invitationsside

| Funktion | Parametre | Returnerer | Ansvar |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Om Steam-kontonavnet i øjeblikket er skjult. |
| `installAccountNameControl` | — | `void` | Tilføjer en øjekontakt ved siden af log ud-linket og holder den synkroniseret via en `MutationObserver`. |
| `installInvitePage` | — | `boolean` | Gendesigner `/vacnet/createinvite`: kortlayout, vis/skjul og kopiér link (Clipboard API med `execCommand` som reserve), kravliste, sprogvælger. Returnerer `false`, hvis forventede elementer mangler. |

## Klipsegment og afspilleradapter

| Funktion | Parametre | Returnerer | Ansvar |
|---|---|---|---|
| `parseSegmentBounds` | — | `{startTime, endTime, duration} \| null` | Udtrækker `startTime`/`endTime` fra sidens inline-scripts. |
| `formatSegmentTime` | `seconds: number` | `string` | Formaterer sekunder som `m:ss.cc`. |
| `getVideoElement` | — | `HTMLVideoElement \| null` | Finder gennemgangens `<video>`-element. |
| `getVjsPlayer` | — | `Video.js player \| null` | Returnerer sidens Video.js-afspiller, hvis den er tilgængelig og ikke er nedlagt. |
| `createPlayerAdapter` | — | `adapter \| null` | Samlet API oven på Video.js / HTML5-video: `currentTime`, `paused`, `pause`, `play`, `playbackRate(s)`, `muted`, `on`, `isFullscreen`, `requestFullscreen`, `exitFullscreen`. |
| `waitForPlayerAdapter` | `timeoutMs = 20000` | `Promise<adapter>` | Poller hver 100 ms, indtil der findes en afspiller; afviser ved timeout. |
| `clampSegment` | `time: number, bounds: object` | `number` | Begrænser et tidspunkt til klippets grænser. |
| `segmentProgress` | `time: number, bounds: object` | `number (0–1)` | Relativ position i klippet. |
| `installCustomControls` | `player, bounds, refreshDisplay: {current: Function}` | `void` | Tilføjer søgelinjen, tidsvisningen og tastehjælpen under videoen. |
| `pauseLayoutMutations` | `run: Function` | `void` | Kører et callback, mens layoutobservatører er sat på pause (forhindrer feedbackløkker). |
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | Sand, når fokus er i et inputfelt, textarea, select, en knap, et link eller et redigerbart element. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | Etiket for en hastighedsindstilling. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | `<option>`-liste til hastighedsvælgeren (0,5–4×). |
| `readStoredShiftSpeed` | — | `number` | Gemt Shift-hastighed (standard 2×). |
| `readStoredVerdictRandomizer` | — | `boolean` | Gemt tilstand for dom-randomizeren (standard fra). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | Kobler håndtering af afspilningshastighed, segmentbegrænsning/-pause, hjælpere til søgning/billedtrin/lyd fra/fuld skærm og de globale genveje (`1`–`5`, piletaster, `,` `.`, mellemrum, `M`, `F`, Shift). Interne closures: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, hjælpere til tegneløkken. |

## Dom-forudindstillinger

| Funktion | Parametre | Returnerer | Ansvar |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | Vælger “skip” i hver domsgruppe uden valg. |
| `getSelectedVerdictState` | — | `object` | Aktuel værdi (`positive` / `negative` / `skip` / `null`) for `aimassist`, `wallhack`, `autobhop`, `bot`. |
| `detectActivePreset` | — | `string \| null` | Navnet på den forudindstilling, der matcher det aktuelle valg. |
| `syncPresetButtons` | — | `string \| null` | Opdaterer `aria-pressed` på forudindstillingsknapper og mærket for den udvidede forudindstilling. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | Klikker på en forudindstillings radioinput; med randomizeren slået til blandes rækkefølgen, og der ventes 200–600 ms mellem klik. Deaktiverer forudindstillingsknapperne, mens den kører. |
| `normalizeVerdictLabels` | `root = document` | `void` | Fjerner fremhævningsmarkering fra domsetiketter. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Tilføjer lokaliserede titler over hver domsgruppe. |

## Beskeder, sidefod og indlæsning ved indsendelse

| Funktion | Parametre | Returnerer | Ansvar |
|---|---|---|---|
| `hideSiteFooter` | — | `void` | Skjuler webstedets sidefod. |
| `showToast` | `message: string, type = "info", duration = 1800` | `void` | Viser en ikke-blokerende ARIA-live-besked. |
| `markSubmitPending` | — | `void` | Gemmer tidspunktet for indsendelsen og det aktuelle klip-id i `sessionStorage`. |
| `isSubmitPending` | — | `boolean` | Om en indsendelse venter på det næste klip. |
| `clearSubmitPending` | — | `void` | Rydder markørerne for ventende indsendelse. |
| `showSubmitLoadingOverlay` | `message = tr("nextClip")` | `void` | Viser indlæsningsoverlayet på hele siden. |
| `hideSubmitLoadingOverlay` | — | `void` | Skjuler overlayet og rydder ventetilstanden. |
| `bootSubmitLoadingIfPending` | — | `void` | Viser overlayet igen ved sideindlæsning, hvis en indsendelse venter. |
| `isReviewPageReady` | `prevVod: string, startedAt: number` | `boolean` | Sand, når det næste klips grænseflade og medie er klar. |
| `finishSubmitLoadingWhenReady` | — | `Promise<void>` | Venter op til 30 s på det næste klip og skjuler derefter overlayet (fejlbesked ved timeout). |

## Lokalt historiklager

| Funktion | Parametre | Returnerer | Ansvar |
|---|---|---|---|
| `extractVodId` | — | `string` | Udleder klip-/spil-id'et fra video-URL'en. |
| `getGameKey` | — | `string` | Historiknøgle for spillet (`game::<id>`). |
| `getClipKey` | `bounds: object` | `string` | Historiknøgle for ét segment (`<id>:<start>:<end>`). |
| `normalizeHistoryEntry` | `entry: any` | `{ts, summary, segment} \| null` | Validerer og renser én historikpost. |
| `readHistoryEntries` | `store: object, key: string` | `Array` | Normaliserede poster for en nøgle. |
| `getGameHistoryEntries` | `store: object` | `Array` | Poster for det aktuelle spil (understøtter en ældre nøgle). |
| `getClipHistoryEntries` | `store: object, bounds: object` | `Array` | Poster for det aktuelle segment. |
| `formatClipId` | `vodId: string` | `string` | Kort numerisk visnings-id (`#0000000`), hashet fra klip-id'et. |
| `formatRelativeTime` | `timestamp: number` | `string` | Lokaliseret relativ tid (`Intl.RelativeTimeFormat`). |
| `readClipHistoryStore` | — | `object` | Indlæser historikobjektet fra `localStorage` (`{}` ved fejl). |
| `pruneHistoryStore` | `store: object` | `void` | Anvender grænserne pr. nøgle og i alt (ældste nøgler fjernes først). |
| `writeClipHistoryStore` | `store: object` | `boolean` | Beskærer og gemmer; `false` ved kvote-/lagringsfejl. |
| `summarizeCurrentVerdict` | — | `string` | Forudindstillingsnavn for det aktuelle valg eller `mixed`. |
| `formatSummaryLabel` | `summary: string` | `string` | Lokaliseret etiket til et historikresumé. |
| `formatClockTime` | `seconds: number` | `string` | Urformat `m:ss` (eller `x.xs`). |
| `formatHumanSegment` | `bounds: object` | `string` | Læsbart segmentinterval. |
| `formatGameLabel` | — | `string` | Lokaliseret etiket for det aktuelle spil. |
| `historyEntryKey` | `entry: object` | `string` | Identitetsstreng, der bruges til at fjerne dubletter. |
| `formatPriorStat` | `count: number, label: string` | `string` | Linjen “etiket: N” i historikpanelet. |
| `buildHistoryListItems` | `clipEntries: Array, gameEntries: Array, currentSegment: string` | `Array` | Fletter klip-/spilposter til visningselementer. |
| `renderHistoryItem` | `item: object` | `string (HTML)` | HTML for én historikrække. |
| `escapeHtml` | `value: any` | `string` | Escaper `& < > " '`. |
| `buildClipHistoryPanel` | `bounds, gameEntries, clipEntries` | `string (HTML)` | HTML for historikpanelet, inklusive knappen til gennemgangsregler. |
| `ensureClipHistoryPanel` | — | `void` | Opretter panelets beholder, hvis den mangler. |
| `ensureReviewRulesDialog` | — | `void` | Opretter dialogen med gennemgangsregler og binder dens åbn/luk-knapper. |
| `installLocalHistoryButton` | `panel: HTMLElement` | `void` | Binder knappen “lokal historik” (ruller til listen eller viser en besked om tom tilstand). |
| `positionClipHistoryPanel` | — | `void` | Holder panelet som det første element i `.verdicts-container`. |
| `renderClipHistory` | `bounds: object \| null` | `void` | Gentegner historikpanelet for det aktuelle klip. |
| `appendReviewHistory` | `bounds: object \| null` | `void` | Tilføjer resuméet af den aktuelle dom til spillets og klippets historik. |

## Indsendelsesforløb

| Funktion | Parametre | Returnerer | Ansvar |
|---|---|---|---|
| `isLabelingMode` | — | `boolean` | Sand på sider, der viser de fire domsgrupper. |
| `getProceedButton` | — | `HTMLButtonElement \| null` | Den indbyggede indsend-knap, hvis den er synlig og aktiveret. |
| `recordProceedHistoryIfLabeling` | — | `void` | Registrerer historik én gang pr. indsendelse (beskyttet mod genindtræden). |
| `resetProceedArmed` | — | `void` | Afvæbner indsendelsen i to trin. |
| `refreshProceedButtonLabel` | — | `void` | Opdaterer knapetiketten/`Enter`-hjælpen og stilen for klargjort tilstand. |
| `verdictLabelForField` | `field: string, selected: string` | `string \| null` | Afbilder et valg til `guilty_*` / `innocent_*` / `skip_*`. |
| `prepareVerdictFormForSubmit` | — | `boolean` | Bygger skjulte `verdict_labels[]`-felter; viser en fejlbesked og returnerer `false`, hvis en gruppe er uden valg. |
| `isSafeSubmitTarget` | `form: HTMLFormElement` | `boolean` | Tillader kun HTTPS-formularhandlinger med samme oprindelse. |
| `restoreSubmitUi` | — | `void` | Gendanner knapperne efter en mislykket indsendelse. |
| `submitVerdictForm` | `{ recordHistory = false }` | `boolean` | Kører sikkerhedstjekket, viser overlayet og indsender formularen. |
| `submitVerdictsDirect` | — | `boolean` | Forbereder etiketterne og indsender. |
| `invokeProceedAction` | — | `boolean` | Enter-/klikhåndtering: første tryk klargør, andet tryk indsender. |
| `installProceedShortcut` | — | `void` | Lytter i capture-fasen til `Enter`/`NumpadEnter`. |
| `hookProceedButton` | — | `void` | Erstatter klikadfærden for den indbyggede indsend-knap. |
| `installVerdictChangeReset` | — | `void` | Afvæbner indsendelsen og synkroniserer forudindstillingerne igen, når en dom ændres. |
| `scheduleProceedFooterFix` | — | `void` | Forsinket (`requestAnimationFrame`) kald af `fixProceedFooter`. |
| `scheduleVerdictLabelsFix` | — | `void` | Forsinket gen-normalisering af etiketter/titler/standardværdier. |

## Layout og opstart

| Funktion | Parametre | Returnerer | Ansvar |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Bygger linjen til valg af Shift-hastighed. |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | HTML for én forudindstillingsknap. |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | HTML for de udvidede forudindstillingsgrupper. |
| `buildEnhancementBar` | — | `HTMLElement` | Bygger hurtigdomslinjen: forudindstillinger, randomizer-kontakt, udvidet skuffe. |
| `positionShiftSpeedBar` | — | `void` | Holder hastighedslinjen før domslisten. |
| `positionEnhancementBar` | — | `void` | Holder forudindstillingslinjen før indsend-knapperne. |
| `fixProceedFooter` | — | `void` | Omarrangerer sidefod, linjer og indsend-knappen. |
| `enhanceLayout` | — | `void` | Anvender alle layoutændringer og installerer indstillingsgrænsefladen. |
| `watchProceedFooter` | — | `void` | Observerer `.verdicts-container` og planlægger rettelser af sidefoden. |
| `watchVerdictLabels` | — | `void` | Observerer domsetiketterne og planlægger gen-normalisering. |
| `init` | — | `Promise<void>` | Indgangspunkt: kontonavnskontrol → invitations- eller gennemgangsside → layout, observatører, genveje, afspillerforbedringer. |

### Ikke nævnt ovenfor

* **`blockSegmentLoopGuard`** (IIFE, kører ved indlæsning): omslutter sidens `setInterval`, så webstedets indbyggede 100 ms segmentloop-timer erstattes af en tom funktion; DemoScopes egne kontroller håndterer segmentet i stedet.
* **Konstanter og tabeller:** `SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC` (`PRESETS`: 21 definitioner).
