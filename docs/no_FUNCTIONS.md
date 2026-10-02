<div align="center">

[English](../FUNCTIONS.md) · [Български](bg_FUNCTIONS.md) · [Magyar](hu_FUNCTIONS.md) · [Tiếng Việt](vi_FUNCTIONS.md) · [Ελληνικά](el_FUNCTIONS.md) · [Dansk](da_FUNCTIONS.md) · [Bahasa Indonesia](id_FUNCTIONS.md) · [Español (España)](es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](es-419_FUNCTIONS.md) · [Italiano](it_FUNCTIONS.md) · [繁體中文](zh-TW_FUNCTIONS.md) · [简体中文](zh-CN_FUNCTIONS.md) · [한국어](ko_FUNCTIONS.md) · [Deutsch](de_FUNCTIONS.md) · [Nederlands](nl_FUNCTIONS.md) · **Norsk** · [Polski](pl_FUNCTIONS.md) · [Português (Portugal)](pt-PT_FUNCTIONS.md) · [Português (Brasil)](pt-BR_FUNCTIONS.md) · [Română](ro_FUNCTIONS.md) · [Русский](ru_FUNCTIONS.md) · [ไทย](th_FUNCTIONS.md) · [Türkçe](tr_FUNCTIONS.md) · [Українська](uk_FUNCTIONS.md) · [Suomi](fi_FUNCTIONS.md) · [Français](fr_FUNCTIONS.md) · [Čeština](cs_FUNCTIONS.md) · [Svenska](sv_FUNCTIONS.md) · [日本語](ja_FUNCTIONS.md)

</div>

# DemoScope — Funksjonsreferanse

Fullstendig referanse for de 128 funksjonene på øverste nivå i `DemoScope.user.js` v1.0.0 (navn, parametere, returverdi, ansvar). Tilbake til [README](../../README/no_README.md).

Konvensjoner: `—` betyr ingen parametere; `void` betyr at funksjonen kalles for bivirkningenes skyld.

## Lokalisering

| Funksjon | Parametere | Returnerer | Ansvar |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Innebygd SVG-kode for et flagg til et språk; faller tilbake til et globusikon. |
| `getSavedLocale` | — | `string \| null` | Leser brukerens lagrede språk (`demoscopeLanguage`) fra `localStorage`. |
| `getActiveLocale` | — | `string` | Finner det aktive språket: lagret valg → Steams `?l=` → nettleser-/sidespråk → `en`. |
| `getLanguageBadge` | — | `string` | Språkets eget visningsnavn, f.eks. “English version”, til merket i språkvelgeren. |
| `tr` | `key: string` | `string` | Slår opp en grensesnitttekst for det aktive språket (reserve: engelsk, deretter selve nøkkelen). |
| `inviteText` | `key: string` | `string` | Samme oppslag for teksttabellen på invitasjonssiden. |
| `settingText` | `key: string` | `string` | Samme oppslag for teksttabellen i innstillingsdialogen. |
| `getPresetLabel` | `name: string` | `string` | Lokalisert etikett for et forvalg; setter sammen kombinasjoner som “Bot + Aim”. |
| `buildLanguageOptions` | — | `string (HTML)` | HTML for språkvalgknappene, inkludert oppføringen “auto”. |
| `installLanguageSelector` | `root: HTMLElement` | `void` | Binder popover-språkvelgeren, plasserer den, lagrer valget og laster siden på nytt. |

## Lydeffekter og innstillingsdialog

| Funksjon | Parametere | Returnerer | Ansvar |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | Linjen “N oppføringer · siste oppføring: …” i innstillingsdialogen. |
| `soundsEnabled` | — | `boolean` | Om grensesnittlyder er slått på (`demoscopeSoundEffectsEnabled`, standard på). |
| `getSoundVolume` | — | `number (0–1)` | Lagret lydstyrke (`demoscopeSoundEffectsVolume`, standard 0,4). |
| `playUiSound` | `kind = "click"` | `void` | Syntetiserer en kort tonesekvens med Web Audio (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`); kaster aldri feil. |
| `readSettingsHotkey` | — | `string` | Lagret `KeyboardEvent.code` som åpner innstillingsdialogen (standard `F2`). |
| `formatHotkey` | `code: string` | `string` | Lesbart tastenavn (`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | Henter ut en fysisk tastekode og avbilder ikke-latinske oppsett tilbake til `KeyX`; `""` hvis den ikke kan brukes. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | Sann for taster som DemoScope eller spilleren allerede bruker (Enter, mellomrom, piltaster, `M`, `F`, `1`–`5`, …). |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Oppretter (én gang) og kobler innstillingsdialogen: lyd, lydstyrke, opptak av snarvei, historikkgrenser, eksport/import/rapport/sammenslåing/sletting, tilbakestilling. |
| `openSettingsDialog` | `opener = null` | `void` | Åpner dialogen med gjeldende verdier og husker elementet fokus skal tilbake til. |
| `installSettingsUi` | — | `void` | Installerer den globale tastelytteren i capture-fasen (åpne/lukke dialog, ny tildeling) og lydhendelsene. |
| `installUiSoundEvents` | — | `void` | Delegert klikklytter som spiller tilbakemeldingslyder for DemoScopes kontroller. |

## Sikkerhetskopier, rapporter og historikkgrenser

| Funksjon | Parametere | Returnerer | Ansvar |
|---|---|---|---|
| `exportLocalHistory` | — | `void` | Laster ned hele historikken som `demoscope-history-YYYY-MM-DD.json`. |
| `downloadHistoryFile` | `content: string, filename: string, mimeType: string` | `void` | Starter en filnedlasting via en midlertidig Blob-URL. |
| `collectHistoryReportRows` | `store: object` | `Array<{vodId, ts, summary, segment}>` | Flater ut og fjerner duplikater fra historikkoppføringer, nyeste først. |
| `exportReadableHistory` | — | `void` | Laster ned en frittstående, lokalisert HTML-rapport over historikken. |
| `buildReadableHistoryReport` | `rows: Array, reportTitle: string, summaryNote = ""` | `string (HTML document)` | Bygger den escapede HTML-koden til rapporten. |
| `setMergeReportStatus` | `statusElement: HTMLElement, message: string, state: string` | `void` | Oppdaterer statuslinjen til sammenslåingsverktøyet (`progress`, `success`, `warning`). |
| `exportCombinedHistoryReports` | `files: FileList \| File[], statusElement: HTMLElement, button: HTMLButtonElement` | `Promise<void>` | Validerer mange JSON-sikkerhetskopier (≤ 5 MB hver, ≤ 100 MB totalt), fjerner duplikater og laster ned én samlet HTML-rapport. |
| `isSafeHistoryKey` | `key: string` | `boolean` | Hvitlistesjekk av historikknøkler (blokkerer `__proto__`, `constructor` og feilformede nøkler). |
| `importLocalHistory` | `file: File` | `Promise<void>` | Validerer en JSON-sikkerhetskopi, slår den sammen med den lokale historikken (med respekt for grensene) og oppdaterer grensesnittet. |
| `readHistoryLimit` | `storageKey: string, allowedValues: number[], defaultValue: number` | `number` | Leser en numerisk grense fra `localStorage` og godtar bare tillatte verdier. |
| `getHistoryPerKeyLimit` | — | `number` | Oppføringer som beholdes per klipp-/spillnøkkel (10/20/30/50, standard 30). |
| `getHistoryTotalLimit` | — | `number` | Totalt antall klipp-/spillnøkler som beholdes (100/200/300/500, standard 300). |
| `readAdvancedPresetsOpen` | — | `boolean` | Om skuffen med utvidede forvalg ble stående åpen. |

## Kontonavn og invitasjonsside

| Funksjon | Parametere | Returnerer | Ansvar |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Om Steam-kontonavnet for øyeblikket er skjult. |
| `installAccountNameControl` | — | `void` | Legger til en øyebryter ved siden av utloggingslenken og holder den synkronisert via en `MutationObserver`. |
| `installInvitePage` | — | `boolean` | Redesigner `/vacnet/createinvite`: kortlayout, vis/skjul og kopiering av lenken (Clipboard API med `execCommand` som reserve), kravliste, språkvelger. Returnerer `false` hvis forventede elementer mangler. |

## Klippsegment og spilleradapter

| Funksjon | Parametere | Returnerer | Ansvar |
|---|---|---|---|
| `parseSegmentBounds` | — | `{startTime, endTime, duration} \| null` | Henter ut `startTime`/`endTime` fra sidens inline-skript. |
| `formatSegmentTime` | `seconds: number` | `string` | Formaterer sekunder som `m:ss.cc`. |
| `getVideoElement` | — | `HTMLVideoElement \| null` | Finner gjennomgangens `<video>`-element. |
| `getVjsPlayer` | — | `Video.js player \| null` | Returnerer sidens Video.js-spiller hvis den er tilgjengelig og ikke fjernet. |
| `createPlayerAdapter` | — | `adapter \| null` | Enhetlig API oppå Video.js / HTML5-video: `currentTime`, `paused`, `pause`, `play`, `playbackRate(s)`, `muted`, `on`, `isFullscreen`, `requestFullscreen`, `exitFullscreen`. |
| `waitForPlayerAdapter` | `timeoutMs = 20000` | `Promise<adapter>` | Poller hvert 100 ms til det finnes en spiller; avviser ved tidsavbrudd. |
| `clampSegment` | `time: number, bounds: object` | `number` | Begrenser et tidspunkt til klippets grenser. |
| `segmentProgress` | `time: number, bounds: object` | `number (0–1)` | Relativ posisjon i klippet. |
| `installCustomControls` | `player, bounds, refreshDisplay: {current: Function}` | `void` | Legger til søkelinjen, tidsvisningen og tastehintene under videoen. |
| `pauseLayoutMutations` | `run: Function` | `void` | Kjører en tilbakekalling mens layoutobservatørene er satt på pause (hindrer tilbakekoblingssløyfer). |
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | Sann når fokus er i et inndatafelt, tekstområde, en nedtrekksliste, knapp, lenke eller redigerbart element. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | Etikett for et hastighetsvalg. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | `<option>`-liste for hastighetsvelgeren (0,5–4×). |
| `readStoredShiftSpeed` | — | `number` | Lagret Shift-hastighet (standard 2×). |
| `readStoredVerdictRandomizer` | — | `boolean` | Lagret tilstand for vurderings-randomizeren (standard av). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | Kobler håndtering av avspillingshastighet, segmentbegrensning/-pause, hjelpere for søk/bildesteg/demping/fullskjerm og de globale snarveiene (`1`–`5`, piltaster, `,` `.`, mellomrom, `M`, `F`, Shift). Interne closures: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, hjelpere for tegnesløyfen. |

## Vurderingsforvalg

| Funksjon | Parametere | Returnerer | Ansvar |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | Velger “skip” i hver vurderingsgruppe uten valg. |
| `getSelectedVerdictState` | — | `object` | Gjeldende verdi (`positive` / `negative` / `skip` / `null`) for `aimassist`, `wallhack`, `autobhop`, `bot`. |
| `detectActivePreset` | — | `string \| null` | Navnet på forvalget som samsvarer med gjeldende valg. |
| `syncPresetButtons` | — | `string \| null` | Oppdaterer `aria-pressed` på forvalgsknappene og merket for det utvidede forvalget. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | Klikker på et forvalgs radioinndata; med randomizeren på blandes rekkefølgen, og det ventes 200–600 ms mellom klikk. Deaktiverer forvalgsknappene mens den kjører. |
| `normalizeVerdictLabels` | `root = document` | `void` | Fjerner uthevingsmarkering fra vurderingsetikettene. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Legger til lokaliserte titler over hver vurderingsgruppe. |

## Meldinger, bunntekst og innlasting ved innsending

| Funksjon | Parametere | Returnerer | Ansvar |
|---|---|---|---|
| `hideSiteFooter` | — | `void` | Skjuler nettstedets bunntekst. |
| `showToast` | `message: string, type = "info", duration = 1800` | `void` | Viser en ikke-blokkerende ARIA-live-melding. |
| `markSubmitPending` | — | `void` | Lagrer tidspunktet for innsendingen og gjeldende klipp-id i `sessionStorage`. |
| `isSubmitPending` | — | `boolean` | Om en innsending venter på neste klipp. |
| `clearSubmitPending` | — | `void` | Fjerner markørene for ventende innsending. |
| `showSubmitLoadingOverlay` | `message = tr("nextClip")` | `void` | Viser innlastingsoverlegget på hele siden. |
| `hideSubmitLoadingOverlay` | — | `void` | Skjuler overlegget og fjerner ventetilstanden. |
| `bootSubmitLoadingIfPending` | — | `void` | Viser overlegget igjen ved sideinnlasting hvis en innsending venter. |
| `isReviewPageReady` | `prevVod: string, startedAt: number` | `boolean` | Sann når neste klipps grensesnitt og medier er klare. |
| `finishSubmitLoadingWhenReady` | — | `Promise<void>` | Venter opptil 30 s på neste klipp og skjuler deretter overlegget (feilmelding ved tidsavbrudd). |

## Lokalt historikklager

| Funksjon | Parametere | Returnerer | Ansvar |
|---|---|---|---|
| `extractVodId` | — | `string` | Utleder klipp-/spill-id fra video-URL-en. |
| `getGameKey` | — | `string` | Historikknøkkel for spillet (`game::<id>`). |
| `getClipKey` | `bounds: object` | `string` | Historikknøkkel for ett segment (`<id>:<start>:<end>`). |
| `normalizeHistoryEntry` | `entry: any` | `{ts, summary, segment} \| null` | Validerer og renser én historikkoppføring. |
| `readHistoryEntries` | `store: object, key: string` | `Array` | Normaliserte oppføringer for en nøkkel. |
| `getGameHistoryEntries` | `store: object` | `Array` | Oppføringer for gjeldende spill (støtter en eldre nøkkel). |
| `getClipHistoryEntries` | `store: object, bounds: object` | `Array` | Oppføringer for gjeldende segment. |
| `formatClipId` | `vodId: string` | `string` | Kort numerisk visnings-id (`#0000000`), hashet fra klipp-id-en. |
| `formatRelativeTime` | `timestamp: number` | `string` | Lokalisert relativ tid (`Intl.RelativeTimeFormat`). |
| `readClipHistoryStore` | — | `object` | Laster historikkobjektet fra `localStorage` (`{}` ved feil). |
| `pruneHistoryStore` | `store: object` | `void` | Bruker grensene per nøkkel og totalt (eldste nøkler fjernes først). |
| `writeClipHistoryStore` | `store: object` | `boolean` | Beskjærer og lagrer; `false` ved kvote-/lagringsfeil. |
| `summarizeCurrentVerdict` | — | `string` | Forvalgsnavn for gjeldende valg, eller `mixed`. |
| `formatSummaryLabel` | `summary: string` | `string` | Lokalisert etikett for et historikksammendrag. |
| `formatClockTime` | `seconds: number` | `string` | Klokkeformat `m:ss` (eller `x.xs`). |
| `formatHumanSegment` | `bounds: object` | `string` | Lesbart segmentområde. |
| `formatGameLabel` | — | `string` | Lokalisert etikett for gjeldende spill. |
| `historyEntryKey` | `entry: object` | `string` | Identitetsstreng som brukes til å fjerne duplikater. |
| `formatPriorStat` | `count: number, label: string` | `string` | Linjen “etikett: N” i historikkpanelet. |
| `buildHistoryListItems` | `clipEntries: Array, gameEntries: Array, currentSegment: string` | `Array` | Slår sammen klipp-/spilloppføringer til visningselementer. |
| `renderHistoryItem` | `item: object` | `string (HTML)` | HTML for én historikkrad. |
| `escapeHtml` | `value: any` | `string` | Escaper `& < > " '`. |
| `buildClipHistoryPanel` | `bounds, gameEntries, clipEntries` | `string (HTML)` | HTML for historikkpanelet, inkludert knappen for gjennomgangsregler. |
| `ensureClipHistoryPanel` | — | `void` | Oppretter panelbeholderen hvis den mangler. |
| `ensureReviewRulesDialog` | — | `void` | Oppretter dialogen med gjennomgangsregler og binder åpne/lukke-knappene. |
| `installLocalHistoryButton` | `panel: HTMLElement` | `void` | Binder knappen “lokal historikk” (ruller til listen eller viser en melding når den er tom). |
| `positionClipHistoryPanel` | — | `void` | Holder panelet som første element i `.verdicts-container`. |
| `renderClipHistory` | `bounds: object \| null` | `void` | Tegner historikkpanelet på nytt for gjeldende klipp. |
| `appendReviewHistory` | `bounds: object \| null` | `void` | Legger sammendraget av gjeldende vurdering til i spillets og klippets historikk. |

## Innsendingsflyt

| Funksjon | Parametere | Returnerer | Ansvar |
|---|---|---|---|
| `isLabelingMode` | — | `boolean` | Sann på sider som viser de fire vurderingsgruppene. |
| `getProceedButton` | — | `HTMLButtonElement \| null` | Den innebygde innsendingsknappen hvis den er synlig og aktivert. |
| `recordProceedHistoryIfLabeling` | — | `void` | Registrerer historikk én gang per innsending (beskyttet mot gjeninntreden). |
| `resetProceedArmed` | — | `void` | Avvæpner innsendingen i to trinn. |
| `refreshProceedButtonLabel` | — | `void` | Oppdaterer knappeetiketten/`Enter`-hintet og stilen for klargjort tilstand. |
| `verdictLabelForField` | `field: string, selected: string` | `string \| null` | Avbilder et valg til `guilty_*` / `innocent_*` / `skip_*`. |
| `prepareVerdictFormForSubmit` | — | `boolean` | Bygger skjulte `verdict_labels[]`-felt; viser en feilmelding og returnerer `false` hvis en gruppe mangler valg. |
| `isSafeSubmitTarget` | `form: HTMLFormElement` | `boolean` | Tillater bare HTTPS-skjemahandlinger med samme opphav. |
| `restoreSubmitUi` | — | `void` | Gjenoppretter knappene etter en mislykket innsending. |
| `submitVerdictForm` | `{ recordHistory = false }` | `boolean` | Kjører sikkerhetssjekken, viser overlegget og sender inn skjemaet. |
| `submitVerdictsDirect` | — | `boolean` | Forbereder etikettene og sender inn. |
| `invokeProceedAction` | — | `boolean` | Enter-/klikkhåndterer: første trykk klargjør, andre trykk sender inn. |
| `installProceedShortcut` | — | `void` | Lytter i capture-fasen for `Enter`/`NumpadEnter`. |
| `hookProceedButton` | — | `void` | Erstatter klikkatferden til den innebygde innsendingsknappen. |
| `installVerdictChangeReset` | — | `void` | Avvæpner innsendingen og synkroniserer forvalgene på nytt når en vurdering endres. |
| `scheduleProceedFooterFix` | — | `void` | Forsinket (`requestAnimationFrame`) kall til `fixProceedFooter`. |
| `scheduleVerdictLabelsFix` | — | `void` | Forsinket renormalisering av etiketter/titler/standardverdier. |

## Layout og oppstart

| Funksjon | Parametere | Returnerer | Ansvar |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Bygger linjen for valg av Shift-hastighet. |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | HTML for én forvalgsknapp. |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | HTML for de utvidede forvalgsgruppene. |
| `buildEnhancementBar` | — | `HTMLElement` | Bygger hurtigvurderingslinjen: forvalg, randomizer-bryter, utvidet skuff. |
| `positionShiftSpeedBar` | — | `void` | Holder hastighetslinjen foran vurderingslisten. |
| `positionEnhancementBar` | — | `void` | Holder forvalgslinjen foran innsendingsknappene. |
| `fixProceedFooter` | — | `void` | Omorganiserer bunntekst, linjer og innsendingsknappen. |
| `enhanceLayout` | — | `void` | Bruker alle layoutendringer og installerer innstillingsgrensesnittet. |
| `watchProceedFooter` | — | `void` | Observerer `.verdicts-container` og planlegger rettinger av bunnteksten. |
| `watchVerdictLabels` | — | `void` | Observerer vurderingsetikettene og planlegger renormalisering. |
| `init` | — | `Promise<void>` | Inngangspunkt: kontonavnkontroll → invitasjons- eller gjennomgangsside → layout, observatører, snarveier, spillerforbedringer. |

### Ikke nevnt ovenfor

* **`blockSegmentLoopGuard`** (IIFE, kjører ved innlasting): omslutter `setInterval` på siden slik at nettstedets innebygde 100 ms segmentløkke-timer erstattes av en tom funksjon; DemoScopes egne kontroller håndterer segmentet i stedet.
* **Konstanter og tabeller:** `SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC` (`PRESETS`: 21 definisjoner).
