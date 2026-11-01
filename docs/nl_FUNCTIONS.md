<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/docs/en_FUNCTIONS.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/docs/bg_FUNCTIONS.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/docs/hu_FUNCTIONS.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/docs/vi_FUNCTIONS.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/docs/el_FUNCTIONS.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/docs/da_FUNCTIONS.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/docs/id_FUNCTIONS.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/docs/es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/docs/es-419_FUNCTIONS.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/docs/it_FUNCTIONS.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/docs/zh-TW_FUNCTIONS.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/docs/zh-CN_FUNCTIONS.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/docs/ko_FUNCTIONS.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/docs/de_FUNCTIONS.md) · **Nederlands** · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/docs/no_FUNCTIONS.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/docs/pl_FUNCTIONS.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/docs/pt-PT_FUNCTIONS.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/docs/pt-BR_FUNCTIONS.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/docs/ro_FUNCTIONS.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/docs/ru_FUNCTIONS.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/docs/th_FUNCTIONS.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/docs/tr_FUNCTIONS.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/docs/uk_FUNCTIONS.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/docs/fi_FUNCTIONS.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/docs/fr_FUNCTIONS.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/docs/cs_FUNCTIONS.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/docs/sv_FUNCTIONS.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/docs/ja_FUNCTIONS.md)

</div>

# DemoScope — Functiereferentie

Volledige referentie van de 217 functies op het hoogste niveau in `DemoScope.user.js` v1.4.0 (naam, parameters, retourwaarde, verantwoordelijkheid). Terug naar de [README](../README.md).

Conventies: `—` betekent geen parameters; `void` betekent dat de functie wordt aangeroepen om haar neveneffecten.

## Overzicht van gebruikersgedrag

| Onderdeel | Beschrijving |
|---|---|
| Ondersteunde pagina’s | Past de VACNet-startpagina (/vacnet), beoordelingspagina’s (/vacnet/clips), uitnodigingspagina (/vacnet/createinvite) en de status zonder clips op de beoordelingspagina aan. Andere pagina’s blijven ongemoeid. |
| Taaktypen | Herkent welk beoordelingsformulier VACNet aanbiedt. Het klassieke formulier (aim assist, wallhack, auto-bhop, bot) krijgt presets en uitgebreide combinaties. De nieuwere taak met één vraag (“Is het onderwerp zonder redelijke twijfel aan het cheaten?”) krijgt een compacte indeling: drie benoemde oordelen op toetsen 1–3, een vergrendelindicator met resterende cliptijd en geen snelle oordelen of combinaties. |
| Taal | Ondersteunt 29 Steam-talen. Een opgeslagen handmatige keuze heeft voorrang; anders volgt het script de Steam-parameter ?l= en daarna de browser- of paginataal. Een taal kiezen in DemoScope geeft ook de bijbehorende ?l= door aan VACNet, zodat de eigen teksten van VACNet dezelfde taal gebruiken. De automatische modus houdt de Steam-taalparameter gelijk aan de browsertaal. |
| Start- en uitnodigingspagina’s | Past beide pagina’s aan, voegt de gedeelde taalkiezer toe en verbergt de accountnaam met een oogschakelaar. Op de startpagina gaat Enter of Spatie verder als een interactief element geen focus heeft. Op de uitnodigingspagina kun je de link verbergen, tonen en kopiëren; ook worden de uitnodigingsvoorwaarden uitgelegd. Een knop × sluit de pagina; Enter werkt als “Klaar” en Esc als ×. |
| Clipbeoordeling | Voegt oordeelpresets en uitgebreide combinaties toe, een standaard uitgeschakelde oordeelrandomizer, instelbare afspeelsnelheid met Shift ingedrukt, zoeken binnen het segment, beeld-voor-beeldstappen en afspeelsneltoetsen. Oordeelcategorieën hebben een knop “?” met gelokaliseerde uitleg. Belangrijke woorden in oordeelknoppen zijn gemarkeerd met de DemoScope-kleuren. |
| Sneltoetsen | Elke sneltoets is een actie in één register en kan worden aangepast via Instellingen → Sneltoetsen. Conflicten worden per pagina opgespoord (uitnodigings- en beoordelingspagina’s overlappen niet) en tonen de actie, groep en beschrijving die de toets al gebruiken; je kunt vervangen, wisselen of annuleren. Elke actie heeft een resetknop en de toetshints op de pagina volgen de toewijzingen. |
| Verzenden | Enter of Numpad Enter (standaard) activeert “Doorgaan”. In het klassieke formulier activeert de eerste druk de actie en verzendt de volgende de oordelen. Bij de taak met één vraag toont het kiezen van een oordeel de eigen bevestiging van VACNet; Enter bevestigt deze. Esc (standaard) drukt op “Annuleren” wanneer een oordeel wacht op bevestiging, of annuleert de eerste druk. Spatie is geen verzendsneltoets. |
| Instellingen | F2 opent standaard het instellingenvenster (aanpasbaar via het sneltoetsvenster). Onderdelen: sneltoetsen, animaties, geluidseffecten en volume, lokale geschiedenis (inschakelen, limieten, 12/24-uursnotatie, back-ups), zichtbaarheid van de voettekst, diagnose en één reset voor geluid, sneltoetsen en animaties. |
| Animaties | De indicatorstip naast DemoScope kan bewegen. Een apart venster biedt zes stijlen (pulseren, ademen, rimpelen, hartslag, baan, knipperen), live voorbeelden, drie snelheden en een aan/uitknop. Als het besturingssysteem verminderde beweging vraagt, staan animaties standaard uit. |
| Lokale geschiedenis | Slaat oordeeloverzichten op in de localStorage van deze browser; DemoScope uploadt ze niet. Geschiedenis kan worden uitgeschakeld, geïmporteerd, als JSON of HTML geëxporteerd, uit JSON-back-ups samengevoegd tot één HTML-verslag of gewist. Instelbare limieten: 10/20/30/50 items per sleutel en 100/200/300/500 sleutels totaal. Uitschakelen voorkomt nieuwe items maar wist bestaande gegevens niet. Geschiedenis wordt alleen voor het klassieke formulier bijgehouden. |
| Lege wachtrij | Vervangt de lege-wachtrijmelding van VACNet door gelokaliseerde uitleg, de lokaal in de browser opgeslagen eerste datum/tijd en een taalkiezer. De tekst over 250 demo’s per dag is informatief en gebaseerd op waargenomen VACNet-gedrag; DemoScope handhaaft of omzeilt deze limiet niet. |
| Voettekst | Gebruikt een gelokaliseerde DemoScope-voettekst. Op clippagina’s kunnen feedback- en meldlinks staan; in Instellingen kun je elke link, de copyrightregel of de hele voettekst verbergen. |
| Foutbestendigheid | Elke instelstap draait afzonderlijk, zodat één fout de rest niet stopt. Belangrijke elementen worden met terugvalopties gezocht. Als de pagina niet meer herkenbaar is, schakelt DemoScope zichzelf op die pagina uit, herstelt de VACNet-indeling en toont een korte melding. Via Instellingen → Diagnose kun je een tekstverslag kopiëren (scriptversie, gevonden verwachte elementen, mislukte stappen en paginstructuur) voor bugmeldingen. |

Het script verandert de serverregels van VACNet voor uitnodigingen, de verwerking van oordelen of de kijklimieten niet. Lokale geschiedenis, taal en interfacevoorkeuren blijven in het browserprofiel.

## Lokalisatie

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Inline SVG-markup van de vlag voor een taal; valt terug op een wereldbolpictogram. |
| `getSavedLocale` | — | `string \| null` | Leest de opgeslagen taal van de gebruiker (`demoscopeLanguage`) uit `localStorage`. |
| `getActiveLocale` | — | `string` | Bepaalt de actieve taal: opgeslagen keuze → Steam `?l=` → browser-/paginataal → `en`. |
| `getLanguageBadge` | — | `string` | De eigen weergavenaam van de taal, bijv. “English version”, voor de badge van de taalkiezer. |
| `getBrowserLocale` | — | `string \| null` | Vindt de eerste ondersteunde browsertaal, inclusief regionale varianten. |
| `syncAutomaticLanguage` | — | `boolean` | Synchroniseert in automatische modus ?l= met de browsertaal en navigeert bij verschil. |
| `getRenderedSteamLanguage` | — | `string \| null` | Leest de Steam-taal waarin VACNet de pagina daadwerkelijk heeft weergegeven, aan de hand van de parameter l= in de stylesheet- en script-URL’s van de pagina. |
| `syncSelectedLanguage` | — | `boolean` | Wanneer in DemoScope handmatig een taal is gekozen, wordt de pagina één keer opnieuw geladen met de bijbehorende ?l= zodat ook de VACNet-teksten die taal gebruiken. Slaat dit over als de weergegeven taal al klopt en voorkomt omleidingslussen. Geeft true terug als er een navigatie plaatsvond. |
| `tr` | `key: string` | `string` | Zoekt een interfacetekst op voor de actieve taal (terugval: Engels, daarna de sleutel zelf). |
| `inviteText` | `key: string` | `string` | Dezelfde opzoeking voor de tekstentabel van de uitnodigingspagina. |
| `settingText` | `key: string` | `string` | Dezelfde opzoeking voor de tekstentabel van de instellingendialoog. |
| `getPresetLabel` | `name: string` | `string` | Gelokaliseerd label van een preset; stelt combinaties samen zoals “Bot + Aim”. |
| `buildLanguageOptions` | `{ activeLocale = getActiveLocale(), selectedLocale = null } = {}` | `string (HTML)` | Markup van de taalkeuzeknoppen, inclusief de vermelding “auto”. |
| `installLanguageSelector` | `root: HTMLElement, onLocaleSelect: Function \| null = null` | `void` | Koppelt en positioneert de taalkiezer, slaat de keuze op en laadt de pagina opnieuw; een optionele callback kan de selectie afhandelen. |
| `queueNoticeText` | `key: string, locale = getQueueNoticeLocale()` | `string` | Zoekt gelokaliseerde tekst voor de lege wachtrij of voettekst. |

## Geluidseffecten en instellingendialoog

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | De regel “N items · laatste item: …” in de instellingendialoog. |
| `soundsEnabled` | — | `boolean` | Of interfacegeluiden zijn ingeschakeld (`demoscopeSoundEffectsEnabled`, standaard aan). |
| `getSoundVolume` | — | `number (0–1)` | Opgeslagen geluidsvolume (`demoscopeSoundEffectsVolume`, standaard 0,4). |
| `playUiSound` | `kind = "click"` | `void` | Synthetiseert met Web Audio een korte toonreeks (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`); geeft nooit een fout. |
| `readSettingsHotkey` | — | `string` | Opgeslagen `KeyboardEvent.code` die de instellingendialoog opent (standaard `F2`). |
| `formatHotkey` | `code: string` | `string` | Leesbare toetsnaam (`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | Haalt een fysieke toetscode op en zet niet-Latijnse indelingen terug naar `KeyX`; `""` als onbruikbaar. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | Waar voor toetsen die DemoScope of de speler al gebruikt (Enter, spatie, pijlen, `M`, `F`, `1`–`5`, …). |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Maakt de instellingen en koppelt de bediening: geluid en volume, voorbeeld, sneltoets, lokale geschiedenis en limieten, tijdnotatie, JSON-import/export, HTML-export/samenvoegen, geschiedenis wissen, voettekstzichtbaarheid en reset. |
| `openSettingsDialog` | `opener = null` | `void` | Opent de dialoog met de huidige waarden en onthoudt het element waaraan de focus wordt teruggegeven. |
| `installSettingsUi` | — | `void` | Installeert de globale toetsluisteraar in de capture-fase (dialoog openen/sluiten, toets opnieuw toewijzen) en de geluidsgebeurtenissen. |
| `installUiSoundEvents` | — | `void` | Gedelegeerde klikluisteraar die feedbackgeluiden afspeelt voor DemoScope-bediening. |
| `ensureSettingsLayoutStyles` | — | `void` | Voegt de stijlen van het instellingenvenster toe: links uitgelijnde secties en regels met overzichtsbadges. |
| `refreshSettingsSummaries` | — | `void` | Werkt de overzichtsbadges bij voor Sneltoetsen (‘Gewijzigd: N’ / ‘Standaard’) en Animaties (‘Stijl · snelheid’ / ‘Uit’). |
| `installExtraSettingsSections` | `settingsDialog: HTMLDialogElement` | `void` | Voegt bovenaan de onderdelen Sneltoetsen en Animaties toe, en onderaan Diagnose en Opnieuw instellen. Verbergt het oude blok voor de instellingensneltoets; die pas je nu aan in het sneltoetsvenster. |

## Back-ups, rapporten en geschiedenislimieten

| Funktion | Parameter | Rückgabe | Aufgabe |
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

## Accountnaam en uitnodigingspagina

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Of de Steam-accountnaam momenteel verborgen is. |
| `installAccountNameControl` | — | `void` | Voegt een oogschakelaar toe naast de uitloglink en houdt die gesynchroniseerd via een `MutationObserver`. |
| `installInvitePage` | — | `boolean` | Herontwerpt `/vacnet/createinvite`: kaartindeling, tonen/verbergen en kopiëren van de link (Clipboard API met `execCommand`-terugval), vereistenlijst, taalkiezer. Geeft `false` terug als verwachte elementen ontbreken. |
| `installInviteExtras` | `card: HTMLElement, doneLink: HTMLElement \| null` | `void` | Voegt de knop Sluiten (×) toe en een listener in de capture-fase voor inviteDone (standaard Enter) en inviteClose (standaard Esc). Negeert toetsen wanneer een knop, link, veld, dialoog of de taallijst focus heeft. |
| `refreshInviteKeyLabels` | — | `void` | Vernieuwt het label ‘Klaar’ met de sneltoetsbadge en de tooltip van × volgens de huidige toewijzingen. |
| `installWelcomePage` | — | `boolean` | Past de welkomstpagina aan, voegt huisstijl en taalkiezer toe; Enter/Space gaat verder; geeft false terug als elementen ontbreken. |

## Clipsegment en speleradapter

| Funktion | Parameter | Rückgabe | Aufgabe |
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
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | Geeft true terug als de focus in een invoerveld, textarea, select of bewerkbare tekst staat. |
| `isPlayerShortcutBlocked` | `target: EventTarget` | `boolean` | Net als isShortcutBlocked, maar laat radio-opties voor oordelen door, omdat de focus na een klik op de radio-optie blijft staan. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | Label van een snelheidsoptie. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | `<option>`-lijst voor de snelheidskiezer (0,5–4×). |
| `readStoredShiftSpeed` | — | `number` | Opgeslagen Shift-snelheid (standaard 2×). |
| `readStoredVerdictRandomizer` | — | `boolean` | Opgeslagen status van de oordeel-randomizer (standaard uit). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | Koppelt de afhandeling van afspeelsnelheid, segmentbegrenzing/-pauze, hulpfuncties voor zoeken/beeldstap/dempen/volledig scherm en de globale sneltoetsen (`1`–`5`, pijlen, `,` `.`, spatie, `M`, `F`, Shift). Interne closures: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, hulpfuncties van de tekenlus. |

## Oordeelpresets

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | Selecteert “skip” in elke oordeelgroep zonder selectie. |
| `getSelectedVerdictState` | — | `object` | Huidige waarde (`positive` / `negative` / `skip` / `null`) van `aimassist`, `wallhack`, `autobhop`, `bot`. |
| `detectActivePreset` | — | `string \| null` | Naam van de preset die overeenkomt met de huidige selectie. |
| `syncPresetButtons` | — | `string \| null` | Werkt `aria-pressed` bij op de presetknoppen en de badge van de uitgebreide preset. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | Klikt de radio-invoer van een preset aan; met randomizer aan wordt de volgorde geschud en wordt 200–600 ms tussen klikken gewacht. Schakelt de presetknoppen uit tijdens het uitvoeren. |
| `readAdvancedPresetsOpen` | — | `boolean` | Of de lade met uitgebreide presets open was gelaten. |
| `normalizeVerdictLabels` | `root = document` | `void` | Verwijdert markeringsmarkup uit oordeellabels. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Voegt gelokaliseerde titels boven elke oordeelgroep toe. |
| `ensureVerdictHelp` | `block: HTMLElement, titleEl: HTMLElement, title: string, field: string` | `void` | Maakt de knop ‘?’ en de uitlegpop-up voor een oordeelgroep met de eigen vertaling van DemoScope; VACNets tekst is alleen een terugvaloptie. |
| `closeVerdictHelp` | `except = null` | `void` | Sluit alle open uitlegpop-ups behalve de opgegeven pop-up. |
| `installVerdictHelpHandlers` | — | `void` | Installeert eenmalig gedelegeerde afhandeling van klikken, klikken buiten de pop-up en Esc voor de pop-ups. |

## Meldingen, footer en laden bij verzenden

| Funktion | Parameter | Rückgabe | Aufgabe |
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

| Funktion | Parameter | Rückgabe | Aufgabe |
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
| `isLocalHistoryEnabled` | — | `boolean` | Leest of lokale geschiedenis is ingeschakeld; standaard ingeschakeld. |
| `readTimeFormat` | — | `string` | Leest de tijdnotatie: automatisch, 12- of 24-uurs. |
| `formatQueueFirstSeen` | `timestamp: number, locale = getActiveLocale()` | `string` | Formatteert het tijdstip van de eerste detectie volgens taal en tijdnotatie. |
| `getQueueNoticeLocale` | — | `string` | Geeft de actieve taal van de melding over de lege wachtrij terug. |
| `migrateEmptyQueueLanguage` | — | `boolean` | Verplaatst de oude taalkeuze naar de gedeelde instelling en synchroniseert de URL. |
| `updateEmptyQueueTimestamp` | — | `void` | Vernieuwt het weergegeven tijdstip van de eerste detectie. |

## Verzendproces

| Funktion | Parameter | Rückgabe | Aufgabe |
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
| `submitVerdictForm` | `{ recordHistory = false } = {}` | `boolean` | Voert de veiligheidscontrole uit, toont de overlay en verzendt het formulier. |
| `submitVerdictsDirect` | — | `boolean` | Bereidt de labels voor en verzendt. |
| `invokeProceedAction` | — | `boolean` | Enter-/klikhandler: eerste druk maakt gereed, tweede druk verzendt. |
| `installProceedShortcut` | — | `void` | Capture-fase-luisteraar voor `Enter`/`NumpadEnter`. |
| `invokeCancelAction` | — | `boolean` | Annuleert de eerste stap van de tweestapsverzending of klikt op de zichtbare knop ‘Annuleren’; geeft false terug als er niets te annuleren is. |
| `refreshCancelButtonLabel` | — | `void` | Voegt de sneltoetsbadge aan de knop ‘Annuleren’ toe of werkt deze bij. |
| `hookProceedButton` | — | `void` | Vervangt het klikgedrag van de native verzendknop. |
| `installVerdictChangeReset` | — | `void` | Haalt de verzending uit de gereed-stand en synchroniseert presets opnieuw wanneer een oordeel verandert. |
| `scheduleProceedFooterFix` | — | `void` | Gedebounced (`requestAnimationFrame`) aanroep van `fixProceedFooter`. |
| `scheduleVerdictLabelsFix` | — | `void` | Gedebounced hernormalisatie van labels/titels/standaardwaarden. |

## Sneltoetsregister en opnieuw toewijzen

| Actie | Standaard | Groep | Functie |
|---|---|---|---|
| `playPause` | `Space` | Playback | Pauzeert de clip of hervat het afspelen. |
| `mute` | `M` | Playback | Dempt of herstelt het geluid. |
| `fullscreen` | `F` | Playback | Schakelt volledig scherm in of uit. |
| `seekBack` / `seekForward` | `←` / `→` | Navigatie | Springt 5 seconden terug of vooruit. |
| `frameBack` / `frameForward` | `,` / `.` | Navigatie | Gaat één beeld terug of vooruit. |
| `speedBoost` | `Shift` | Navigation | Speelt sneller af zolang de toets wordt ingedrukt (de enige actie die Shift kan gebruiken). |
| `quick1` … `quick5` | `1` … `5` | Oordelen | Klassiek formulier: presets 1–5. Taak met één vraag: Cheating / Niet zeker / Geen cheats gezien (1–3). |
| `proceed` | `Enter` | Submission | Bevestigt het oordeel of activeert en verzendt het klassieke formulier. |
| `cancel` | `Esc` | Submission | Drukt op ‘Annuleren’ of annuleert de eerste druk op Enter. |
| `inviteDone` | `Enter` | Invite page | Verlaat de uitnodigingspagina (hetzelfde als ‘Klaar’). |
| `inviteClose` | `Esc` | Invite page | Hetzelfde als de knop ×. |
| `settings` | `F2` | Interface | Opent of sluit het instellingenvenster. |

Toewijzingen worden als KeyboardEvent.code-waarden opgeslagen onder demoscopeKeybindings (alleen wijzigingen ten opzichte van de standaard; de instellingentoets heeft een eigen vermelding). Linker- en rechtermodificatietoetsen tellen als één toets; het numerieke toetsenblok komt overeen met de hoofdtoetsen. Niet toe te wijzen toetsen: Tab, Ctrl, Alt, Meta, Caps Lock, ContextMenu, F5, F11, F12. Conflicten gelden per gebied: review, invite en global; de globale instellingentoets conflicteert met alle acties.

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `fmt` | `template: string, vars = {}` | `string` | Vervangt {name}-plaatsaanduidingen in een gelokaliseerde sjabloontekst. |
| `isModalOpen` | — | `boolean` | Is true zolang er een dialog openstaat; sneltoetsen voor de pagina blijven dan inactief. |
| `normalizeKeyCode` | `code: string` | `string` | Voegt linker- en rechtermodificatietoetsen samen en koppelt de cijfers van het numerieke toetsenblok en NumpadEnter aan de overeenkomstige hoofdtoetsen. |
| `formatKeyLabel` | `code: string` | `string` | Weergavenaam van een toets (ArrowLeft → ←, KeyM → M, Escape → Esc). |
| `loadKeyOverrides` | — | `object` | Leest en valideert de opgeslagen toetskoppelingen (gecached; {} bij fouten). |
| `saveKeyOverrides` | `overrides: object` | `void` | Slaat de toetskoppelingen op of verwijdert de opslag wanneer alles op de standaard staat. |
| `getBinding` | `id: string` | `string` | Huidige toets voor een actie; lege tekenreeks als er geen toets is toegewezen. |
| `setBinding` | `id: string, code: string` | `void` | Slaat een toets op voor een actie (een lege code verwijdert de toewijzing); standaardwaarden worden niet opgeslagen. |
| `resetAllBindings` | — | `void` | Zet alle toetskoppelingen, inclusief de instellingentoets, terug naar de standaardwaarden. |
| `findKeyConflict` | `id: string, code: string` | `object \| null` | Zoekt naar conflicten met een al gebruikte toets binnen de betreffende reikwijdte. |
| `getActionForEvent` | `event: KeyboardEvent, scope = currentKeyScope()` | `string \| null` | Bepaalt welke actie bij een toetsenbordgebeurtenis hoort. |
| `keyScopeOf` | `id: string` | `string` | Reikwijdte van een actie: review, invite of global. |
| `keyScopesOverlap` | `a: string, b: string` | `boolean` | Is true als twee reikwijdtes elkaar kunnen overlappen (dezelfde reikwijdte of een van beide is global). |
| `currentKeyScope` | — | `string` | invite op de uitnodigingspagina, anders review. |
| `validateKeyForAction` | `id: string, code: string` | `string` | Geeft een lege tekenreeks als de toets mag worden toegewezen, reserved voor browser- en navigatietoetsen, of shift als Shift is gekozen voor een actie die niet werkt bij ingedrukt houden. |
| `quickRangeLabel` | `count: number` | `string` | Label voor snelbeoordelingstoetsen (1–5 als ze ongewijzigd zijn, anders de toegewezen toetsen). |
| `buildHintsInnerMarkup` | — | `string (HTML)` | Maakt de sneltoetshints onder de video op basis van de huidige koppelingen. |
| `refreshKeyLabels` | — | `void` | Werkt alle toetslabels op de pagina bij: hints, badges voor sjablonen en oordelen, Doorgaan/Annuleren/uitnodiging en instellingensamenvattingen. |
| `ensureDemoscopeDialogStyles` | — | `void` | Voegt de gedeelde vormgeving toe voor de vensters Sneltoetsen en Animaties. |
| `hkActionName` | `id: string` | `string` | Gelokaliseerde actienaam. |
| `hkGroupName` | `group: string` | `string` | Gelokaliseerde groepsnaam. |
| `hkActionDescription` | `id: string` | `string` | Gelokaliseerde uitleg van een actie (snelbeoordelingen voor beide taaktypen). |
| `hkSetMessage` | `text: string, warn = false` | `void` | Stelt de statusregel van het sneltoetsvenster in. |
| `hkCancelCapture` | — | `void` | Verlaat de toetsregistratiemodus. |
| `hkRowMarkup` | `action: object` | `string (HTML)` | Markup voor een actieregel, inclusief het conflictpaneel als er een conflict is. |
| `renderHotkeys` | — | `void` | Tekent het hele venster opnieuw en behoudt de scrollpositie. |
| `hkCommit` | `actionId: string, code: string, mode = "replace"` | `void` | Wijst een toets toe; replace maakt de andere actie vrij, swap wisselt de toetsen om. |
| `hkRequestAssign` | `actionId: string, code: string` | `void` | Wijst een toets direct toe of opent bij een bezette toets het conflictpaneel (Vervangen / Wisselen / Annuleren). |
| `ensureHotkeysDialog` | — | `HTMLDialogElement` | Maakt het sneltoetsvenster en de toetsenbordlistener in de capture-fase (Esc kan worden toegewezen en sluit het venster niet tijdens registratie). |
| `openHotkeysDialog` | — | `void` | Opent het sneltoetsvenster. |

## Animaties

Zes stijlen voor de indicatorstip (pulse, breathe, ripple, heartbeat, orbit, blink), drie snelheden (0,6× / 1× / 1,7×) en een aan/uitknop, opgeslagen in demoscopeAnimStyle, demoscopeAnimSpeed en demoscopeAnimEnabled. De actieve stijl wordt ingesteld via data-ds-anim op html; de stylesheet stuurt de stip en voorbeelden aan.

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `readStorage` | `key: string` | `string \| null` | Veilig lezen uit localStorage. |
| `writeStorage` | `key: string, value: string \| null` | `void` | Veilig schrijven naar localStorage (null verwijdert de sleutel). |
| `animEnabled` | — | `boolean` | Opgeslagen aan/uit-status; standaard uit als het systeem vraagt om minder beweging. |
| `animStyle` | — | `string` | Opgeslagen stijl (standaard pulse). |
| `animSpeedKey` | — | `string` | Opgeslagen snelheid (slow / normal / fast; standaard normal). |
| `ensureAnimationStyles` | — | `void` | Voegt de keyframes en regels toe die de bewegende stip en de voorbeeldstippen delen. |
| `applyAnimationSettings` | — | `void` | Past stijl, snelheid en aan/uit toe op html en werkt het instellingsoverzicht bij. |
| `ensureAnimationsDialog` | — | `HTMLDialogElement` | Maakt het animatievenster met schakelaar, snelheid, stijlkaarten met live voorbeelden en reset. |
| `openAnimationsDialog` | — | `void` | Opent het animatievenster. |
| `ensureUiPolishStyles` | — | `void` | Voegt donkere, smalle schuifbalken en color-scheme: dark toe aan vensters en de oordelenlijst (Chromium zou anders een lichte balk tonen). |

## Taak met één vraag

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `isCheatingMode` | — | `boolean` | Is true wanneer de pagina het formulier met één vraag toont (#verdictbuttons_cheating). |
| `selectCheatingVerdict` | `kind: string` | `void` | Klikt de radio voor Cheating / Niet zeker / Geen cheats gezien (positive / skip / negative). Als de optie nog vergrendeld is, klinkt een fouttoon en schudt de vergrendelkaart. |
| `localizeCheatingVerdicts` | — | `void` | Herschrijft de drie labels in de DemoScope-taal en tekent de sneltoetsbadges met CSS, zodat de bevestiging van VACNet nooit het toetsnummer bevat. Bereidt ook de vergrendelkaart voor. |
| `updateCheatingLock` | — | `void` | Werkt de vergrendelkaart (‘de andere twee oordelen komen vrij als de clip eindigt · m:ss resterend’) en de voortgangsbalk bij. Verbergt de kaart zodra de opties zijn vrijgegeven of een oordeel is gekozen. |
| `startCheatingLockWatcher` | — | `void` | Start de timer van 250 ms die updateCheatingLock aanroept. |

## Foutbestendigheid en diagnose

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `recordFailure` | `step: string, error: any` | `void` | Logt een mislukte stap (met een maximumaantal) voor het diagnoserapport. |
| `safeStep` | `step: string, fn: Function, fallback?: any` | `any` | Voert een installatiestap uit; bij een fout wordt die vastgelegd en de terugvalwaarde teruggegeven zodat volgende stappen doorgaan. |
| `getVideoContainer` | — | `HTMLElement \| null` | Vindt de videohouder, of anders het bovenliggende element van de speler of video. |
| `getVerdictContainer` | — | `HTMLElement \| null` | Vindt de oordeelhouder, of anders het bovenliggende element van het eerste oordeelblok. |
| `getSubmitArea` | — | `HTMLElement \| null` | Vindt het verzend-/bevestigingsgebied (#submitbuttons, .submitbuttons of het bovenliggende element van de verzendknop). |
| `hasVerdictForm` | — | `boolean` | Is true als er minstens één radio voor een oordeel aanwezig is. |
| `removeEnhancements` | — | `void` | Verwijdert de panelen, klassen en voettekstwijzigingen van DemoScope en herstelt de voettekst van VACNet. |
| `disableDemoScope` | `reason: string` | `void` | Schakelt DemoScope op deze pagina uit: maakt wijzigingen ongedaan, laat alleen het instellingenvenster staan en toont per reden en sessie eenmaal een melding. |
| `isOwnNode` | `el: Element` | `boolean` | Is true voor elementen die DemoScope heeft aangemaakt (uitgesloten van het structuurverslag). |
| `elementSignature` | `el: Element` | `string` | Handtekening tag#id.class[…] voor het structuurverslag; bevat geen tekst. |
| `skeletonOf` | `root: Element, maxDepth = 7, maxNodes = 170` | `string` | Compacte ingesprongen boom van tags, id’s en klassen (gelijke siblingelementen worden samengevouwen als ×N). |
| `captureOriginalSkeleton` | — | `void` | Legt de paginstructuur vast voordat DemoScope iets wijzigt. |
| `buildDiagnosticsReport` | — | `string` | Maakt een verslag met versie, pagina, taal en browser, taaktype, 22 elementcontroles (ok / MISSING), mislukte stappen en de structuur voor en na DemoScope. Bevat geen pagin tekst of accountgegevens. |
| `fallbackCopyText` | `text: string` | `boolean` | Kopieert tekst via een tijdelijk tekstveld als de Clipboard-API niet beschikbaar is. |
| `copyDiagnostics` | `statusEl: HTMLElement, textarea: HTMLTextAreaElement` | `Promise<void>` | Kopieert het verslag; als dat mislukt, wordt de tekst in een selecteerbaar vak getoond. |

## Layout en opstarten

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Bouwt de keuzebalk voor de Shift-snelheid. |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | Markup voor één presetknop. |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | Markup van de uitgebreide presetgroepen. |
| `buildEnhancementBar` | — | `HTMLElement` | Bouwt de snelle-oordeelbalk: presets, randomizerschakelaar, uitgebreide lade. |
| `positionShiftSpeedBar` | — | `void` | Houdt de snelheidsbalk vóór de oordeellijst. |
| `positionEnhancementBar` | — | `void` | Houdt de presetbalk vóór de verzendknoppen. |
| `fixProceedFooter` | — | `void` | Herschikt footer, balken en verzendknop. |
| `enhanceLayout` | — | `void` | Past alle layoutwijzigingen toe en installeert de instellingen-UI. |
| `ensureReviewStructure` | — | `void` | Normaliseert de VACNet-markup: zet oordeelblokken in .verdicts-container-inner, verplaatst #submitbuttons naar de houder en toont de clipsteller ook in de kopbadge. Werkt met de oude en vernieuwde markup. |
| `watchProceedFooter` | — | `void` | Observeert `.verdicts-container` en plant footercorrecties in. |
| `watchVerdictLabels` | — | `void` | Observeert de oordeellabels en plant hernormalisatie in. |
| `readFooterPreference` | `storageKey: string` | `boolean` | Leest de zichtbaarheidsvoorkeur van de voettekst uit localStorage. |
| `saveFooterPreference` | `storageKey: string, hidden: boolean` | `void` | Slaat de zichtbaarheidsvoorkeur van de voettekst op. |
| `applyFooterPreferences` | `footer: HTMLElement \| null = document.querySelector(".demoscope-custom-footer")` | `void` | `void` |
| `installDemoScopeFooter` | `withClipLinks: boolean, locale = getActiveLocale(), showFeedback = true` | `HTMLElement` | Maakt of werkt de gelokaliseerde voettekst bij, met optionele links, en past voorkeuren toe. |
| `installEmptyQueueNotice` | — | `boolean` | Vervangt de melding over de lege wachtrij door gelokaliseerde uitleg, tijd, taalkiezer en voettekst. |
| `init` | — | `Promise<void>` | Startpunt: accountnaambediening → uitnodigings- of beoordelingspagina → layout, waarnemers, sneltoetsen, spelerverbeteringen. |

installWelcomePage en installInvitePage geven false terug als verplichte VACNet-pagina-elementen ontbreken. installEmptyQueueNotice geeft false terug als de pagina geen lege wachtrij toont.

### Niet hierboven vermelde onderdelen

* **blockSegmentLoopGuard** (IIFE, actief bij het laden): vervangt de native 100-ms-timer voor de segmentlus door een lege functie; de bediening van DemoScope beheert het segment.
* **Constanten en tabellen:** SUPPORTED_LOCALES, FLAG_SVG, UI_TEXT_ROWS, INVITE_TEXT_ROWS, SETTINGS_TEXT_ROWS, PRESETS, PRESET_KEYS, PRESET_TONES, ADVANCED_PRESET_GROUPS, SHIFT_SPEEDS, FRAME_STEP en ARROW_JUMP_SEC (21 PRESETS-definities); toegevoegd sinds v1.0.0: KEY_ACTIONS, KEY_GROUPS, KEY_ACTION_BY_ID, KEY_ACTION_SCOPE, RESERVED_KEY_CODES, CHEATING_KEYS, VERDICT_SECTION_TITLES, VERDICT_SECTION_HELP, ANIM_STYLES en ANIM_SPEEDS.
* **Moduletoestand:** diag (mislukte stappen, reden voor uitschakelen en oorspronkelijke paginstructuur), hkState (status van het sneltoetsvenster) en de constante SCRIPT_VERSION voor het diagnoserapport.
* **Teksten:** alle zichtbare teksten staan in de gelokaliseerde tabellen hierboven; vensters toegevoegd in v1.2.0–v1.4.0 zijn vertaald in alle 29 talen.

## Opslagsleutels

| Sleutel | Opslag | Doel |
|---|---|---|
| `demoscopeLanguage`, `demoscopeLanguageAuto` | `localStorage` | Gekozen taal en automatische modus. |
| `demoscopeKeybindings` | `localStorage` | Sneltoetsen die afwijken van de standaard (JSON). |
| `demoscopeSettingsHotkey` | `localStorage` | Toets om het instellingenvenster te openen (none als verwijderd). |
| `demoscopeAnimEnabled`, `demoscopeAnimStyle`, `demoscopeAnimSpeed` | `localStorage` | Instellingen voor de indicatoranimatie. |
| `demoscopeSoundEffectsEnabled`, `demoscopeSoundEffectsVolume` | `localStorage` | Geluidsinstellingen. |
| `demoscopeClipHistory` and history limit/format keys | `localStorage` | Lokale beoordelingsgeschiedenis en bijbehorende instellingen. |
| `demoscopeSubmitPending`, `demoscopeSubmitPrevVod`, `demoscopeLangSyncTried`, `demoscopeDisabledNotice` | `sessionStorage` | Laadstatus na verzenden, beveiliging voor taalsynchronisatie en eenmalige melding over uitschakelen. |



