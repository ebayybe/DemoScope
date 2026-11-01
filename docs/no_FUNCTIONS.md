<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/en_FUNCTIONS.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/bg_FUNCTIONS.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/hu_FUNCTIONS.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/vi_FUNCTIONS.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/el_FUNCTIONS.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/da_FUNCTIONS.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/id_FUNCTIONS.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/es-419_FUNCTIONS.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/it_FUNCTIONS.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/zh-TW_FUNCTIONS.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/zh-CN_FUNCTIONS.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ko_FUNCTIONS.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/de_FUNCTIONS.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/nl_FUNCTIONS.md) · **Norsk** · [Polski](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/pl_FUNCTIONS.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/pt-PT_FUNCTIONS.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/pt-BR_FUNCTIONS.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ro_FUNCTIONS.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ru_FUNCTIONS.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/th_FUNCTIONS.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/tr_FUNCTIONS.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/uk_FUNCTIONS.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/fi_FUNCTIONS.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/fr_FUNCTIONS.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/cs_FUNCTIONS.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/sv_FUNCTIONS.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ja_FUNCTIONS.md)

</div>

# DemoScope — Funksjonsreferanse

Fullstendig referanse for de 217 funksjonene på øverste nivå i `DemoScope.user.js` v1.4.0 (navn, parametere, returverdi, ansvar). Tilbake til [README](../README.md).

Konvensjoner: `—` betyr ingen parametere; `void` betyr at funksjonen kalles for bivirkningenes skyld.

## Oversikt over brukerfunksjoner

| Område | Beskrivelse |
|---|---|
| Støttede sider | Forbedrer VACNets velkomstside (/vacnet), vurderingssider (/vacnet/clips), invitasjonssiden (/vacnet/createinvite) og tilstanden uten klipp på vurderingsruten. Andre sider endres ikke. |
| Oppgavetyper | Oppdager hvilket vurderingsskjema VACNet viser. Det klassiske skjemaet (aim assist, wallhack, auto-bhop, bot) får forhåndsvalg og utvidede kombinasjoner. Den nyere oppgaven med ett spørsmål («Jukser personen uten rimelig tvil?») får i stedet et kompakt oppsett: tre merkede vurderinger på tastene 1–3, en låseindikator med gjenværende klipptid og ingen hurtigvurderinger eller kombinasjoner. |
| Språk | Støtter 29 Steam-språk. Et lagret manuelt valg har prioritet; ellers følger skriptet Steams ?l=-parameter og deretter nettleserens/sidens språk. Et språkvalg i DemoScope sender også tilsvarende ?l= til VACNet, slik at VACNets egne tekster følger valget. Automatisk modus synkroniserer Steams språkparameter med nettleserens språk. |
| Velkomst- og invitasjonssider | Endrer utseendet på begge sidene, legger til den delte språkvelgeren og skjuler kontonavnet med en øyebryter. På velkomstsiden fortsetter Enter eller mellomrom når fokus ikke er på en interaktiv kontroll. På invitasjonssiden kan lenken skjules, vises og kopieres; invitasjonskravene forklares. En ×-knapp lukker siden; Enter tilsvarer «Ferdig» og Esc tilsvarer ×. |
| Klippvurdering | Legger til vurderingsforvalg og utvidede kombinasjoner, en vurderingsrandomisator (av som standard), justerbar avspillingshastighet med Shift, søk begrenset til segmentet, bilde-for-bilde-trinn og avspillingssnarveier. Vurderingskategorier har en «?»-knapp med lokal forklaring. Nøkkelord i vurderingsknappene fremheves med DemoScopes farger. |
| Hurtigtaster | Hver snarvei er en handling i ett felles register og kan tilordnes på nytt under Innstillinger → Hurtigtaster. Konflikter oppdages per side (invitasjon og vurdering overlapper ikke) og viser handlingen, gruppen og beskrivelsen som allerede bruker tasten; du kan erstatte, bytte eller avbryte. Hver handling har en tilbakestillingsknapp, og sidens tastetips følger bindingene dine. |
| Innsending | Enter eller Numpad Enter (standard) aktiverer «Fortsett». I det klassiske skjemaet armerer første trykk handlingen, og neste trykk sender vurderingene. I oppgaven med ett spørsmål viser valg av vurdering VACNets egen bekreftelse, som bekreftes med Enter. Esc (standard) trykker «Avbryt» mens en vurdering venter på bekreftelse, eller avvæpner første trykk. Mellomrom er ikke en snarvei for innsending. |
| Innstillinger | F2 åpner innstillingsdialogen som standard (kan endres i Hurtigtaster-vinduet). Deler: hurtigtaster, animasjoner, lydeffekter og volum, lokal historikk (aktivering, grenser, 12/24-timersformat, sikkerhetskopier), bunntekstvisning, diagnostikk og én felles tilbakestilling for lyd, hurtigtaster og animasjoner. |
| Animasjoner | Punktet ved siden av DemoScope kan animeres. Et eget vindu tilbyr seks stiler (puls, pust, krusning, hjerteslag, bane, blinking), liveforhåndsvisning, tre hastigheter og en av/på-bryter. Hvis operativsystemet ber om redusert bevegelse, er animasjoner slått av ved oppstart. |
| Lokal historikk | Lagrer sammendrag av vurderinger i nettleserens localStorage; DemoScope laster dem ikke opp. Historikken kan deaktiveres, importeres, eksporteres som JSON eller HTML, slås sammen fra JSON-sikkerhetskopier til én HTML-rapport eller tømmes. Grenser kan stilles inn: 10/20/30/50 oppføringer per nøkkel og 100/200/300/500 nøkler totalt. Deaktivering stopper nye oppføringer, men sletter ikke eksisterende data. Historikk registreres bare for det klassiske skjemaet. |
| Tom kø | Erstatter VACNets tom-kø-melding med lokal veiledning, dato/tid for første visning lagret i nettleseren og en språkvelger. Teksten om 250 demoer per dag er til informasjon og basert på observert VACNet-atferd; DemoScope håndhever eller omgår ikke tjenestegrensen. |
| Bunntekst | Bruker en lokalisert DemoScope-bunntekst. På klippsider kan den vise lenker for tilbakemelding og rapportering; innstillingene kan skjule hver lenke, opphavsrettslinjen eller hele bunnteksten. |
| Robusthet | Hvert oppsettstrinn kjører isolert slik at én feil ikke stopper de andre. Viktige elementer søkes med reservealternativer. Hvis siden ikke lenger gjenkjennes, slår DemoScope seg av på siden, gjenoppretter VACNets oppsett og viser en kort melding. Innstillinger → Diagnostikk kopierer en tekstrapport (skriptversjon, forventede elementer som ble funnet, mislykkede trinn og sidestruktur) for feilrapporter. |

Skriptet endrer ikke VACNets serverregler for invitasjonstilgang, vurderingsbehandling eller visningsgrenser. Lokal historikk, språk og grensesnittinnstillinger forblir i nettleserprofilen.

## Lokalisering

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Innebygd SVG-kode for et flagg til et språk; faller tilbake til et globusikon. |
| `getSavedLocale` | — | `string \| null` | Leser brukerens lagrede språk (`demoscopeLanguage`) fra `localStorage`. |
| `getActiveLocale` | — | `string` | Finner det aktive språket: lagret valg → Steams `?l=` → nettleser-/sidespråk → `en`. |
| `getLanguageBadge` | — | `string` | Språkets eget visningsnavn, f.eks. “English version”, til merket i språkvelgeren. |
| `getBrowserLocale` | — | `string \| null` | Finner det første støttede nettleserspråket, også regionale varianter. |
| `syncAutomaticLanguage` | — | `boolean` | Synkroniserer automatisk ?l= med nettleserspråket og navigerer ved avvik. |
| `getRenderedSteamLanguage` | — | `string \| null` | Leser Steam-språket VACNet faktisk brukte til å vise siden, fra l=-parameteren i sidens stilark- og skriptadresser. |
| `syncSelectedLanguage` | — | `boolean` | Når et språk velges manuelt i DemoScope, lastes siden inn på nytt én gang med den tilhørende ?l= slik at VACNets egne tekster følger valget. Hopper over dette hvis det viste språket allerede stemmer, og hindrer omdirigeringsløkker. Returnerer true hvis navigering fant sted. |
| `tr` | `key: string` | `string` | Slår opp en grensesnitttekst for det aktive språket (reserve: engelsk, deretter selve nøkkelen). |
| `inviteText` | `key: string` | `string` | Samme oppslag for teksttabellen på invitasjonssiden. |
| `settingText` | `key: string` | `string` | Samme oppslag for teksttabellen i innstillingsdialogen. |
| `getPresetLabel` | `name: string` | `string` | Lokalisert etikett for et forvalg; setter sammen kombinasjoner som “Bot + Aim”. |
| `buildLanguageOptions` | `{ activeLocale = getActiveLocale(), selectedLocale = null } = {}` | `string (HTML)` | HTML for språkvalgknappene, inkludert oppføringen “auto”. |
| `installLanguageSelector` | `root: HTMLElement, onLocaleSelect: Function \| null = null` | `void` | Kobler til og plasserer språkvelgeren, lagrer valget og laster siden på nytt; en valgfri callback kan håndtere valget i stedet. |
| `queueNoticeText` | `key: string, locale = getQueueNoticeLocale()` | `string` | Henter lokalisert tekst for tom kø eller bunntekst. |

## Lydeffekter og innstillingsdialog

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | Linjen “N oppføringer · siste oppføring: …” i innstillingsdialogen. |
| `soundsEnabled` | — | `boolean` | Om grensesnittlyder er slått på (`demoscopeSoundEffectsEnabled`, standard på). |
| `getSoundVolume` | — | `number (0–1)` | Lagret lydstyrke (`demoscopeSoundEffectsVolume`, standard 0,4). |
| `playUiSound` | `kind = "click"` | `void` | Syntetiserer en kort tonesekvens med Web Audio (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`); kaster aldri feil. |
| `readSettingsHotkey` | — | `string` | Lagret `KeyboardEvent.code` som åpner innstillingsdialogen (standard `F2`). |
| `formatHotkey` | `code: string` | `string` | Lesbart tastenavn (`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | Henter ut en fysisk tastekode og avbilder ikke-latinske oppsett tilbake til `KeyX`; `""` hvis den ikke kan brukes. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | Sann for taster som DemoScope eller spilleren allerede bruker (Enter, mellomrom, piltaster, `M`, `F`, `1`–`5`, …). |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Oppretter og kobler innstillingene: lyd og volum, forhåndsvisning, hurtigtast, lokal historikk og grenser, tidsformat, JSON-import/-eksport, HTML-eksport/sammenslåing, tøm historikk, bunntekstvisning og tilbakestilling. |
| `openSettingsDialog` | `opener = null` | `void` | Åpner dialogen med gjeldende verdier og husker elementet fokus skal tilbake til. |
| `installSettingsUi` | — | `void` | Installerer den globale tastelytteren i capture-fasen (åpne/lukke dialog, ny tildeling) og lydhendelsene. |
| `installUiSoundEvents` | — | `void` | Delegert klikklytter som spiller tilbakemeldingslyder for DemoScopes kontroller. |
| `ensureSettingsLayoutStyles` | — | `void` | Legger til stilene for innstillingsvinduet: venstrejusterte seksjoner og rader med sammendragsmerker. |
| `refreshSettingsSummaries` | — | `void` | Oppdaterer sammendragsmerkene for Hurtigtaster («Endret: N» / «Standard») og Animasjoner («Stil · hastighet» / «Av»). |
| `installExtraSettingsSections` | `settingsDialog: HTMLDialogElement` | `void` | Legger til Hurtigtaster og Animasjoner øverst, samt Diagnostikk og Tilbakestill nederst. Skjuler den tidligere blokken for innstillingstasten, som nå endres i Hurtigtaster-vinduet. |

## Sikkerhetskopier, rapporter og historikkgrenser

| Funktion | Parameter | Rückgabe | Aufgabe |
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

## Kontonavn og invitasjonsside

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Om Steam-kontonavnet for øyeblikket er skjult. |
| `installAccountNameControl` | — | `void` | Legger til en øyebryter ved siden av utloggingslenken og holder den synkronisert via en `MutationObserver`. |
| `installInvitePage` | — | `boolean` | Redesigner `/vacnet/createinvite`: kortlayout, vis/skjul og kopiering av lenken (Clipboard API med `execCommand` som reserve), kravliste, språkvelger. Returnerer `false` hvis forventede elementer mangler. |
| `installInviteExtras` | `card: HTMLElement, doneLink: HTMLElement \| null` | `void` | Legger til lukkeknappen (×) og en lytter i capture-fasen for handlingene inviteDone (standard Enter) og inviteClose (standard Esc). Ignorerer taster når en knapp, lenke, et felt, en dialog eller språkliste har fokus. |
| `refreshInviteKeyLabels` | — | `void` | Tegner «Ferdig»-etiketten på nytt med tastemerket og verktøytipset for × fra gjeldende bindinger. |
| `installWelcomePage` | — | `boolean` | Utformer velkomstsiden, legger til profilering og språkvelger; Enter/Space fortsetter; returnerer false hvis elementer mangler. |

## Klippsegment og spilleradapter

| Funktion | Parameter | Rückgabe | Aufgabe |
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
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | Returnerer true når fokus er i et inndatafelt, textarea, select eller redigerbar tekst. |
| `isPlayerShortcutBlocked` | `target: EventTarget` | `boolean` | Som isShortcutBlocked, men slipper gjennom radioknapper for vurderinger fordi fokuset blir på radioknappen etter et klikk. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | Etikett for et hastighetsvalg. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | `<option>`-liste for hastighetsvelgeren (0,5–4×). |
| `readStoredShiftSpeed` | — | `number` | Lagret Shift-hastighet (standard 2×). |
| `readStoredVerdictRandomizer` | — | `boolean` | Lagret tilstand for vurderings-randomizeren (standard av). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | Kobler håndtering av avspillingshastighet, segmentbegrensning/-pause, hjelpere for søk/bildesteg/demping/fullskjerm og de globale snarveiene (`1`–`5`, piltaster, `,` `.`, mellomrom, `M`, `F`, Shift). Interne closures: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, hjelpere for tegnesløyfen. |

## Vurderingsforvalg

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | Velger “skip” i hver vurderingsgruppe uten valg. |
| `getSelectedVerdictState` | — | `object` | Gjeldende verdi (`positive` / `negative` / `skip` / `null`) for `aimassist`, `wallhack`, `autobhop`, `bot`. |
| `detectActivePreset` | — | `string \| null` | Navnet på forvalget som samsvarer med gjeldende valg. |
| `syncPresetButtons` | — | `string \| null` | Oppdaterer `aria-pressed` på forvalgsknappene og merket for det utvidede forvalget. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | Klikker på et forvalgs radioinndata; med randomizeren på blandes rekkefølgen, og det ventes 200–600 ms mellom klikk. Deaktiverer forvalgsknappene mens den kjører. |
| `readAdvancedPresetsOpen` | — | `boolean` | Om skuffen med utvidede forvalg ble stående åpen. |
| `normalizeVerdictLabels` | `root = document` | `void` | Fjerner uthevingsmarkering fra vurderingsetikettene. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Legger til lokaliserte titler over hver vurderingsgruppe. |
| `ensureVerdictHelp` | `block: HTMLElement, titleEl: HTMLElement, title: string, field: string` | `void` | Oppretter «?»-knappen og forklaringsboksen for en vurderingsgruppe med DemoScopes egen lokaliserte tekst; VACNets tekst er bare reserve. |
| `closeVerdictHelp` | `except = null` | `void` | Lukker alle åpne forklaringsbokser unntatt den angitte. |
| `installVerdictHelpHandlers` | — | `void` | Installerer én gang delegert håndtering av klikk, klikk utenfor boksen og Esc for forklaringsboksene. |

## Meldinger, bunntekst og innlasting ved innsending

| Funktion | Parameter | Rückgabe | Aufgabe |
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

| Funktion | Parameter | Rückgabe | Aufgabe |
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
| `isLocalHistoryEnabled` | — | `boolean` | Leser om lokal historikk er aktivert; aktivert som standard. |
| `readTimeFormat` | — | `string` | Leser tidsformat: automatisk, 12 eller 24 timer. |
| `formatQueueFirstSeen` | `timestamp: number, locale = getActiveLocale()` | `string` | Formaterer tidspunktet for første registrering etter språk og tidsformat. |
| `getQueueNoticeLocale` | — | `string` | Returnerer aktivt språk for meldingen om tom kø. |
| `migrateEmptyQueueLanguage` | — | `boolean` | Flytter det gamle språkvalget til den felles innstillingen og synkroniserer URL. |
| `updateEmptyQueueTimestamp` | — | `void` | Oppdaterer vist tidspunkt for første registrering. |

## Innsendingsflyt

| Funktion | Parameter | Rückgabe | Aufgabe |
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
| `submitVerdictForm` | `{ recordHistory = false } = {}` | `boolean` | Kjører sikkerhetssjekken, viser overlegget og sender inn skjemaet. |
| `submitVerdictsDirect` | — | `boolean` | Forbereder etikettene og sender inn. |
| `invokeProceedAction` | — | `boolean` | Enter-/klikkhåndterer: første trykk klargjør, andre trykk sender inn. |
| `installProceedShortcut` | — | `void` | Lytter i capture-fasen for `Enter`/`NumpadEnter`. |
| `invokeCancelAction` | — | `boolean` | Avvæpner det første trykket i totrinnsinnsendingen eller klikker på den synlige «Avbryt»-knappen; returnerer false hvis ingenting kan avbrytes. |
| `refreshCancelButtonLabel` | — | `void` | Legger til eller oppdaterer tastemerket på «Avbryt»-knappen. |
| `hookProceedButton` | — | `void` | Erstatter klikkatferden til den innebygde innsendingsknappen. |
| `installVerdictChangeReset` | — | `void` | Avvæpner innsendingen og synkroniserer forvalgene på nytt når en vurdering endres. |
| `scheduleProceedFooterFix` | — | `void` | Forsinket (`requestAnimationFrame`) kall til `fixProceedFooter`. |
| `scheduleVerdictLabelsFix` | — | `void` | Forsinket renormalisering av etiketter/titler/standardverdier. |

## Hurtigtastregister og tilordning

| Handling | Standard | Gruppe | Funksjon |
|---|---|---|---|
| `playPause` | `Space` | Playback | Setter klippet på pause eller fortsetter avspillingen. |
| `mute` | `M` | Playback | Slår lyden av eller på. |
| `fullscreen` | `F` | Playback | Slår fullskjermmodus av eller på. |
| `seekBack` / `seekForward` | `←` / `→` | Navigering | Hopper 5 sekunder bakover eller fremover. |
| `frameBack` / `frameForward` | `,` / `.` | Navigering | Går én bilderamme tilbake eller frem. |
| `speedBoost` | `Shift` | Navigation | Spiller av raskere mens tasten holdes nede (den eneste handlingen som kan bruke Shift). |
| `quick1` … `quick5` | `1` … `5` | Vurderinger | Klassisk skjema: forhåndsvalg 1–5. Oppgave med ett spørsmål: Cheating / Usikker / Ingen juks sett (1–3). |
| `proceed` | `Enter` | Submission | Bekrefter vurderingen eller aktiverer og sender det klassiske skjemaet. |
| `cancel` | `Esc` | Submission | Trykker «Avbryt» eller avvæpner det første Enter-trykket. |
| `inviteDone` | `Enter` | Invite page | Forlater invitasjonssiden (samme som «Ferdig»). |
| `inviteClose` | `Esc` | Invite page | Samme som ×-knappen. |
| `settings` | `F2` | Interface | Åpner eller lukker innstillingsvinduet. |

Bindinger lagres som KeyboardEvent.code-verdier under demoscopeKeybindings (bare avvik fra standard; innstillingstasten har sin egen oppføring). Venstre og høyre modifikatortast regnes som én tast, og det numeriske tastaturet speiler hovedraden. Taster som ikke kan bindes: Tab, Ctrl, Alt, Meta, Caps Lock, ContextMenu, F5, F11, F12. Konflikter er avgrenset til områdene review, invite og global; den globale innstillingstasten kolliderer med alle.

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `fmt` | `template: string, vars = {}` | `string` | Bytter ut {name}-plassholdere i en lokalisert mal. |
| `isModalOpen` | — | `boolean` | Er true mens en dialog er åpen; sidens hurtigtaster er inaktive da. |
| `normalizeKeyCode` | `code: string` | `string` | Slår sammen venstre og høyre modifikatortaster og mapper talltastene på numerisk tastatur og NumpadEnter til tilsvarende taster på hovedtastaturet. |
| `formatKeyLabel` | `code: string` | `string` | Lesbart visningsnavn for en tast (ArrowLeft → ←, KeyM → M, Escape → Esc). |
| `loadKeyOverrides` | — | `object` | Leser og validerer lagrede tastetilordninger (bufret; returnerer {} ved feil). |
| `saveKeyOverrides` | `overrides: object` | `void` | Lagrer tilordningene eller fjerner oppføringen når alt bruker standardverdiene. |
| `getBinding` | `id: string` | `string` | Gjeldende tast for en handling; tom streng hvis ingen tast er tilordnet. |
| `setBinding` | `id: string, code: string` | `void` | Lagrer en tast for en handling (tom kode fjerner tilordningen); standardverdier lagres ikke. |
| `resetAllBindings` | — | `void` | Tilbakestiller alle tastetilordninger, inkludert innstillingstasten, til standard. |
| `findKeyConflict` | `id: string, code: string` | `object \| null` | Ser etter konflikt med en tast som allerede er i bruk innenfor det aktuelle området. |
| `getActionForEvent` | `event: KeyboardEvent, scope = currentKeyScope()` | `string \| null` | Finner handlingen som hører til en tastaturhendelse. |
| `keyScopeOf` | `id: string` | `string` | Området for en handling: review, invite eller global. |
| `keyScopesOverlap` | `a: string, b: string` | `boolean` | Er true hvis to områder kan overlappe (samme område eller ett av dem er global). |
| `currentKeyScope` | — | `string` | invite på invitasjonssiden, ellers review. |
| `validateKeyForAction` | `id: string, code: string` | `string` | Returnerer tom streng hvis tasten kan tilordnes, reserved for nettleser-/navigasjonstaster eller shift hvis Shift velges for en handling som ikke krever at tasten holdes nede. |
| `quickRangeLabel` | `count: number` | `string` | Etikett for tastene til hurtigvurdering (1–5 hvis urørt, ellers tilordnede taster). |
| `buildHintsInnerMarkup` | — | `string (HTML)` | Lager tastetipsene under videoen fra gjeldende tilordninger. |
| `refreshKeyLabels` | — | `void` | Oppdaterer alle tasteetiketter på siden: tips, merker for forhåndsvalg og vurderinger, Fortsett/Avbryt/invitasjon og innstillingssammendrag. |
| `ensureDemoscopeDialogStyles` | — | `void` | Legger til den felles stilen for Hurtigtaster- og Animasjoner-vinduene. |
| `hkActionName` | `id: string` | `string` | Lokalisert handlingsnavn. |
| `hkGroupName` | `group: string` | `string` | Lokalisert gruppenavn. |
| `hkActionDescription` | `id: string` | `string` | Lokalisert beskrivelse av handlingen (hurtigvurderinger beskrives for begge oppgavetyper). |
| `hkSetMessage` | `text: string, warn = false` | `void` | Setter statuslinjen i Hurtigtaster-vinduet. |
| `hkCancelCapture` | — | `void` | Avslutter tastefangstmodus. |
| `hkRowMarkup` | `action: object` | `string (HTML)` | Markup for én handlingsrad, inkludert konfliktpanelet hvis en konflikt venter. |
| `renderHotkeys` | — | `void` | Tegner hele vinduet på nytt og beholder rulleposisjonen. |
| `hkCommit` | `actionId: string, code: string, mode = "replace"` | `void` | Tilordner en tast; replace frigjør tasten fra den andre handlingen, swap bytter tastene. |
| `hkRequestAssign` | `actionId: string, code: string` | `void` | Tilordner en tast direkte eller åpner konfliktpanelet (Erstatt / Bytt / Avbryt) hvis tasten allerede er i bruk. |
| `ensureHotkeysDialog` | — | `HTMLDialogElement` | Oppretter Hurtigtaster-vinduet og tastaturlytteren i capture-fasen (Esc kan tilordnes og lukker ikke vinduet under tastefangst). |
| `openHotkeysDialog` | — | `void` | Åpner Hurtigtaster-vinduet. |

## Animasjoner

Seks stiler for indikatorprikken (pulse, breathe, ripple, heartbeat, orbit, blink), tre hastigheter (0,6× / 1× / 1,7×) og en av/på-bryter, lagret i demoscopeAnimStyle, demoscopeAnimSpeed og demoscopeAnimEnabled. Aktiv stil angis med data-ds-anim på html (off når deaktivert); stilarket styrer prikken og forhåndsvisningene.

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `readStorage` | `key: string` | `string \| null` | Sikker lesing fra localStorage. |
| `writeStorage` | `key: string, value: string \| null` | `void` | Sikker skriving til localStorage (null fjerner nøkkelen). |
| `animEnabled` | — | `boolean` | Lagret på/av-status; av som standard hvis systemet ber om redusert bevegelse. |
| `animStyle` | — | `string` | Lagret stil (standard pulse). |
| `animSpeedKey` | — | `string` | Lagret hastighet (slow / normal / fast; standard normal). |
| `ensureAnimationStyles` | — | `void` | Legger til keyframes og regler som deles av den animerte prikken og forhåndsvisningsprikkene. |
| `applyAnimationSettings` | — | `void` | Bruker stil, hastighet og på/av på html og oppdaterer innstillingssammendraget. |
| `ensureAnimationsDialog` | — | `HTMLDialogElement` | Oppretter Animasjoner-vinduet med bryter, hastighet, stilkort med liveforhåndsvisning og tilbakestilling. |
| `openAnimationsDialog` | — | `void` | Åpner Animasjoner-vinduet. |
| `ensureUiPolishStyles` | — | `void` | Legger til mørke, smale rullefelt og color-scheme: dark for vinduer og vurderingslisten (Chromium ville ellers vist et lyst felt). |

## Oppgave med ett spørsmål

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `isCheatingMode` | — | `boolean` | Er true når siden viser skjemaet med ett spørsmål (#verdictbuttons_cheating). |
| `selectCheatingVerdict` | `kind: string` | `void` | Klikker på alternativknappen Cheating / Usikker / Ingen juks sett (positive / skip / negative). Hvis valget er låst, spilles en feillyd, og låsekortet ristes. |
| `localizeCheatingVerdicts` | — | `void` | Skriver om de tre etikettene til DemoScopes språk og tegner tastemerker med CSS, slik at VACNets bekreftelseslinje ikke viser tastens tall. Klargjør også låsekortet. |
| `updateCheatingLock` | — | `void` | Oppdaterer låsekortet («de to andre vurderingene låses opp når klippet slutter · m:ss igjen») og fremdriftslinjen. Skjuler kortet når valgene låses opp eller en vurdering velges. |
| `startCheatingLockWatcher` | — | `void` | Starter 250-ms-timeren som kaller updateCheatingLock. |

## Robusthet og diagnostikk

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `recordFailure` | `step: string, error: any` | `void` | Logger et mislykket trinn (på en begrenset liste) til diagnostikkrapporten. |
| `safeStep` | `step: string, fn: Function, fallback?: any` | `any` | Kjører et oppsettstrinn; ved feil logges det og reserveverdien returneres slik at senere trinn kan fortsette. |
| `getVideoContainer` | — | `HTMLElement \| null` | Finner videobeholderen eller, som reserve, det overordnede elementet til spilleren eller videoelementet. |
| `getVerdictContainer` | — | `HTMLElement \| null` | Finner vurderingsbeholderen eller det overordnede elementet til den første vurderingsblokken. |
| `getSubmitArea` | — | `HTMLElement \| null` | Finner området for innsending/bekreftelse (#submitbuttons, .submitbuttons eller det overordnede elementet til send-knappen). |
| `hasVerdictForm` | — | `boolean` | Er true hvis minst én alternativknapp for vurdering finnes. |
| `removeEnhancements` | — | `void` | Fjerner DemoScopes paneler, klasser og bunntekstendringer, og gjenoppretter VACNets bunntekst. |
| `disableDemoScope` | `reason: string` | `void` | Slår av DemoScope på denne siden: ruller tilbake endringene, beholder bare innstillingsvinduet og viser en melding én gang per årsak per økt. |
| `isOwnNode` | `el: Element` | `boolean` | Er true for elementer opprettet av DemoScope (utelates fra struktur­rapporten). |
| `elementSignature` | `el: Element` | `string` | Signaturen tag#id.class[…] som brukes i struktur­rapporten; inneholder ingen tekst. |
| `skeletonOf` | `root: Element, maxDepth = 7, maxNodes = 170` | `string` | Kompakt, innrykket tre av tagger, ID-er og klasser (identiske søsken slås sammen som ×N). |
| `captureOriginalSkeleton` | — | `void` | Lagrer sidens struktur før DemoScope gjør endringer. |
| `buildDiagnosticsReport` | — | `string` | Lager rapporten med versjon, side, språk og nettleser, oppgavetype, 22 elementkontroller (ok / MISSING), mislykkede trinn og strukturen før/etter DemoScope. Ingen sidetekst eller kontodata. |
| `fallbackCopyText` | `text: string` | `boolean` | Kopierer tekst via et midlertidig tekstfelt når Clipboard API ikke er tilgjengelig. |
| `copyDiagnostics` | `statusEl: HTMLElement, textarea: HTMLTextAreaElement` | `Promise<void>` | Kopierer rapporten; hvis kopieringen feiler, vises teksten i et markerbart felt. |

## Layout og oppstart

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Bygger linjen for valg av Shift-hastighet. |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | HTML for én forvalgsknapp. |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | HTML for de utvidede forvalgsgruppene. |
| `buildEnhancementBar` | — | `HTMLElement` | Bygger hurtigvurderingslinjen: forvalg, randomizer-bryter, utvidet skuff. |
| `positionShiftSpeedBar` | — | `void` | Holder hastighetslinjen foran vurderingslisten. |
| `positionEnhancementBar` | — | `void` | Holder forvalgslinjen foran innsendingsknappene. |
| `fixProceedFooter` | — | `void` | Omorganiserer bunntekst, linjer og innsendingsknappen. |
| `enhanceLayout` | — | `void` | Bruker alle layoutendringer og installerer innstillingsgrensesnittet. |
| `ensureReviewStructure` | — | `void` | Normaliserer VACNets markup: legger vurderingsblokker i .verdicts-container-inner, flytter #submitbuttons inn i beholderen og speiler klipptelleren i toppmerkingen. Fungerer med både gammel og redesignet markup. |
| `watchProceedFooter` | — | `void` | Observerer `.verdicts-container` og planlegger rettinger av bunnteksten. |
| `watchVerdictLabels` | — | `void` | Observerer vurderingsetikettene og planlegger renormalisering. |
| `readFooterPreference` | `storageKey: string` | `boolean` | Leser bunntekstens synlighetsvalg fra localStorage. |
| `saveFooterPreference` | `storageKey: string, hidden: boolean` | `void` | Lagrer bunntekstens synlighetsvalg. |
| `applyFooterPreferences` | `footer: HTMLElement \| null = document.querySelector(".demoscope-custom-footer")` | `void` | `void` |
| `installDemoScopeFooter` | `withClipLinks: boolean, locale = getActiveLocale(), showFeedback = true` | `HTMLElement` | Oppretter eller oppdaterer lokalisert bunntekst med valgfrie lenker og bruker innstillingene. |
| `installEmptyQueueNotice` | — | `boolean` | Erstatter meldingen om tom kø med lokalisert veiledning, tidspunkt, språkvelger og bunntekst. |
| `init` | — | `Promise<void>` | Inngangspunkt: kontonavnkontroll → invitasjons- eller gjennomgangsside → layout, observatører, snarveier, spillerforbedringer. |

installWelcomePage og installInvitePage returnerer false hvis nødvendige VACNet-elementer mangler. installEmptyQueueNotice returnerer false hvis siden ikke viser tom kø.

### Øvrige elementer

* **blockSegmentLoopGuard** (IIFE, kjører ved innlasting): erstatter nettstedets innebygde 100-ms-timer for segmentløkken med en tom funksjon; DemoScopes egne kontroller håndterer segmentet.
* **Konstanter og tabeller:** SUPPORTED_LOCALES, FLAG_SVG, UI_TEXT_ROWS, INVITE_TEXT_ROWS, SETTINGS_TEXT_ROWS, PRESETS, PRESET_KEYS, PRESET_TONES, ADVANCED_PRESET_GROUPS, SHIFT_SPEEDS, FRAME_STEP og ARROW_JUMP_SEC (21 PRESETS-definisjoner); lagt til etter v1.0.0: KEY_ACTIONS, KEY_GROUPS, KEY_ACTION_BY_ID, KEY_ACTION_SCOPE, RESERVED_KEY_CODES, CHEATING_KEYS, VERDICT_SECTION_TITLES, VERDICT_SECTION_HELP, ANIM_STYLES og ANIM_SPEEDS.
* **Modultilstand:** diag (mislykkede trinn, grunn til deaktivering og sidens opprinnelige struktur), hkState (hurtigtastvinduets tilstand) og konstanten SCRIPT_VERSION brukt i diagnostikkrapporten.
* **Tekster:** all synlig tekst finnes i de lokaliserte tabellene ovenfor; vinduene som ble lagt til i v1.2.0–v1.4.0 er oversatt til alle 29 språk.

## Lagringsnøkler

| Nøkkel | Lagring | Formål |
|---|---|---|
| `demoscopeLanguage`, `demoscopeLanguageAuto` | `localStorage` | Valgt språk / automatisk modus. |
| `demoscopeKeybindings` | `localStorage` | Hurtigtaster som avviker fra standard (JSON). |
| `demoscopeSettingsHotkey` | `localStorage` | Tast som åpner innstillingene (none hvis fjernet). |
| `demoscopeAnimEnabled`, `demoscopeAnimStyle`, `demoscopeAnimSpeed` | `localStorage` | Innstillinger for indikatoranimasjon. |
| `demoscopeSoundEffectsEnabled`, `demoscopeSoundEffectsVolume` | `localStorage` | Lydinnstillinger. |
| `demoscopeClipHistory` og nøkler for historikkgrenser/-format | `localStorage` | Lokal vurderingshistorikk og innstillingene for den. |
| `demoscopeSubmitPending`, `demoscopeSubmitPrevVod`, `demoscopeLangSyncTried`, `demoscopeDisabledNotice` | `sessionStorage` | Ventende innsending, beskyttelse for språksynkronisering og engangsmelding om deaktivering. |



