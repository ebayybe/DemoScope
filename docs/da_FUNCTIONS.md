<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/docs/en_FUNCTIONS.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/docs/bg_FUNCTIONS.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/docs/hu_FUNCTIONS.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/docs/vi_FUNCTIONS.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/docs/el_FUNCTIONS.md) · **Dansk** · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/docs/id_FUNCTIONS.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/docs/es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/docs/es-419_FUNCTIONS.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/docs/it_FUNCTIONS.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/docs/zh-TW_FUNCTIONS.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/docs/zh-CN_FUNCTIONS.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/docs/ko_FUNCTIONS.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/docs/de_FUNCTIONS.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/docs/nl_FUNCTIONS.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/docs/no_FUNCTIONS.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/docs/pl_FUNCTIONS.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/docs/pt-PT_FUNCTIONS.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/docs/pt-BR_FUNCTIONS.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/docs/ro_FUNCTIONS.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/docs/ru_FUNCTIONS.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/docs/th_FUNCTIONS.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/docs/tr_FUNCTIONS.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/docs/uk_FUNCTIONS.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/docs/fi_FUNCTIONS.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/docs/fr_FUNCTIONS.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/docs/cs_FUNCTIONS.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/docs/sv_FUNCTIONS.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/docs/ja_FUNCTIONS.md)

</div>

# DemoScope — funktionsreference

Komplet reference for de 217 funktioner på øverste niveau i `DemoScope.user.js` v1.4.0 (navn, parametre, returværdi, ansvar). Tilbage til [README](../README.md).

Konventioner: `—` betyder ingen parametre; `void` betyder, at funktionen kaldes for sine bivirkningers skyld.

## Oversigt over brugeradfærd

| Område | Beskrivelse |
|---|---|
| Understøttede sider | Forbedrer VACNets velkomstside (/vacnet), bedømmelsessider (/vacnet/clips), invitationssiden (/vacnet/createinvite) og tilstanden uden klip på bedømmelsesruten. Andre sider ændres ikke. |
| Opgavetyper | Registrerer, hvilken bedømmelsesformular VACNet viser. Den klassiske formular (aim assist, wallhack, auto-bhop, bot) får forvalg og udvidede kombinationer. Den nyere opgave med ét spørgsmål (”Snyder personen ud over enhver rimelig tvivl?”) får i stedet et kompakt layout: tre mærkede bedømmelser på tasterne 1–3, en låseindikator med klippets resterende tid og ingen hurtige bedømmelser eller kombinationer. |
| Sprog | Understøtter 29 Steam-sprog. Et gemt manuelt valg har forrang; ellers følger scriptet Steams ?l=-parameter og derefter browserens/sidens sprog. Et sprogvalg i DemoScope sender også den tilsvarende ?l= til VACNet, så VACNets egne tekster følger valget. Automatisk tilstand holder Steams sprogparameter synkroniseret med browserens sprog. |
| Velkomst- og invitationssider | Ændrer udseendet på begge sider, tilføjer den fælles sprogvælger og skjuler kontonavnet med en øjenknap. På velkomstsiden fortsætter Enter eller mellemrum, når fokus ikke er på et interaktivt element. På invitationssiden kan linket skjules, vises og kopieres; invitationskravene forklares. En ×-knap lukker siden; Enter svarer til ”Færdig” og Esc til ×. |
| Klipsbedømmelse | Tilføjer bedømmelsesforvalg og udvidede kombinationer, en tilfældighedsfunktion for bedømmelser (fra som standard), justerbar afspilningshastighed med Shift, søgning begrænset til segmentet, billedtrinsvisning og afspilningsgenveje. Bedømmelseskategorier har en ”?”-knap med lokaliseret forklaring. Nøgleord i bedømmelsesknapper fremhæves med DemoScopes farver. |
| Genvejstaster | Hver genvej er en handling i ét fælles register og kan ændres under Indstillinger → Genvejstaster. Konflikter findes per side (invitations- og bedømmelsessider overlapper ikke) og vises med handling, gruppe og beskrivelse for den eksisterende brug af tasten; du kan erstatte, bytte eller annullere. Hver handling har en nulstillingsknap, og sidens tastetips følger dine bindinger. |
| Afsendelse | Enter eller Numpad Enter (standard) aktiverer ”Fortsæt”. I den klassiske formular armerer første tryk handlingen, og næste tryk sender bedømmelserne. I opgaven med ét spørgsmål viser valg af bedømmelse VACNets egen bekræftelse, som bekræftes med Enter. Esc (standard) trykker på ”Annuller”, mens en bedømmelse afventer bekræftelse, eller afvæbner første tryk. Mellemrum er ikke en afsendelsesgenvej. |
| Indstillinger | F2 åbner som standard indstillingsdialogen (kan ændres i genvejstastvinduet). Sektioner: genvejstaster, animationer, lydeffekter og lydstyrke, lokal historik (aktivering, grænser, 12/24-timersformat, sikkerhedskopier), sidefodsvisning, diagnostik og én fælles nulstilling for lyd, genvejstaster og animationer. |
| Animationer | Punktet ved siden af DemoScope kan animeres. Et separat vindue har seks stilarter (puls, vejrtrækning, ringe, hjerteslag, bane, blink), liveforhåndsvisning, tre hastigheder og en til/fra-knap. Hvis operativsystemet beder om reduceret bevægelse, er animationer slået fra fra start. |
| Lokal historik | Gemmer oversigter over bedømmelser i denne browsers localStorage; DemoScope uploader dem ikke. Historik kan slås fra, importeres, eksporteres som JSON eller HTML, samles fra JSON-sikkerhedskopier til én HTML-rapport eller ryddes. Grænser kan indstilles: 10/20/30/50 poster per nøgle og 100/200/300/500 nøgler i alt. Deaktivering stopper nye poster, men sletter ikke eksisterende data. Historik registreres kun for den klassiske formular. |
| Tom kø | Erstatter VACNets tom-kø-meddelelse med lokaliseret vejledning, dato/tid for første visning gemt lokalt i browseren og en sprogvælger. Teksten om 250 demoer om dagen er kun information baseret på observeret VACNet-adfærd; DemoScope håndhæver eller omgår ikke tjenestens grænse. |
| Sidefod | Bruger en lokaliseret DemoScope-sidefod. På klipsider kan den vise links til feedback og rapportering; indstillinger kan skjule hvert link, copyrightlinjen eller hele sidefoden. |
| Robusthed | Hvert opsætningstrin kører isoleret, så én fejl ikke stopper de andre. Vigtige elementer findes med reservevalg. Hvis siden ikke længere genkendes, slår DemoScope sig fra på den side, gendanner VACNets layout og viser en kort meddelelse. Indstillinger → Diagnostik kopierer en tekstrapport (scriptversion, fundne forventede elementer, mislykkede trin og sidestrukturen) til fejlrapporter. |

Scriptet ændrer ikke VACNets serverregler om invitationsadgang, behandling af bedømmelser eller visningsgrænser. Lokal historik, sprog og grænsefladeindstillinger forbliver i browserprofilen.

## Lokalisering

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Indlejret SVG-kode for et flag til et sprog; falder tilbage til et globusikon. |
| `getSavedLocale` | — | `string \| null` | Læser brugerens gemte sprog (`demoscopeLanguage`) fra `localStorage`. |
| `getActiveLocale` | — | `string` | Finder det aktive sprog: gemt valg → Steams `?l=` → browser-/sidesprog → `en`. |
| `getLanguageBadge` | — | `string` | Sprogets eget visningsnavn, f.eks. “English version”, til mærket i sprogvælgeren. |
| `getBrowserLocale` | — | `string \| null` | Finder browserens første understøttede sprog, også regionale varianter. |
| `syncAutomaticLanguage` | — | `boolean` | Synkroniserer automatisk ?l= med browsersproget og navigerer ved forskel. |
| `getRenderedSteamLanguage` | — | `string \| null` | Læser det Steam-sprog, som VACNet faktisk brugte til at vise siden, fra parameteren l= i sidens stylesheet- og script-URL’er. |
| `syncSelectedLanguage` | — | `boolean` | Når et sprog vælges manuelt i DemoScope, indlæses siden én gang igen med det tilsvarende ?l=, så VACNets egne tekster følger valget. Springer over, hvis det viste sprog allerede passer, og forhindrer omdirigeringsløkker. Returnerer true, hvis der blev navigeret. |
| `tr` | `key: string` | `string` | Slår en grænsefladetekst op for det aktive sprog (reserve: engelsk, derefter selve nøglen). |
| `inviteText` | `key: string` | `string` | Samme opslag til teksttabellen på invitationssiden. |
| `settingText` | `key: string` | `string` | Samme opslag til teksttabellen i indstillingsdialogen. |
| `getPresetLabel` | `name: string` | `string` | Lokaliseret etiket for en forudindstilling; sammensætter kombinationer som “Bot + Aim”. |
| `buildLanguageOptions` | `{ activeLocale = getActiveLocale(), selectedLocale = null } = {}` | `string (HTML)` | HTML til sprogvalgsknapperne, inklusive posten “auto”. |
| `installLanguageSelector` | `root: HTMLElement, onLocaleSelect: Function \| null = null` | `void` | Forbinder og placerer sprogvælgeren, gemmer valget og genindlæser siden; en valgfri callback kan håndtere valget i stedet. |
| `queueNoticeText` | `key: string, locale = getQueueNoticeLocale()` | `string` | Finder lokaliseret tekst til tom kø eller sidefod. |

## Lydeffekter og indstillingsdialog

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | Linjen “N poster · seneste post: …” i indstillingsdialogen. |
| `soundsEnabled` | — | `boolean` | Om grænsefladelyde er slået til (`demoscopeSoundEffectsEnabled`, standard til). |
| `getSoundVolume` | — | `number (0–1)` | Gemt lydstyrke (`demoscopeSoundEffectsVolume`, standard 0,4). |
| `playUiSound` | `kind = "click"` | `void` | Syntetiserer en kort tonesekvens med Web Audio (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`); kaster aldrig fejl. |
| `readSettingsHotkey` | — | `string` | Gemt `KeyboardEvent.code`, der åbner indstillingsdialogen (standard `F2`). |
| `formatHotkey` | `code: string` | `string` | Læsbart tastenavn (`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | Udtrækker en fysisk tastekode og afbilder ikke-latinske layouts tilbage til `KeyX`; `""`, hvis den ikke kan bruges. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | Sand for taster, som DemoScope eller afspilleren allerede bruger (Enter, mellemrum, piletaster, `M`, `F`, `1`–`5`, …). |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Opretter og forbinder indstillingerne: lyd og lydstyrke, forhåndsvisning, genvejstast, lokal historik og grænser, tidsformat, JSON-import/eksport, HTML-eksport/sammenlægning, ryd historik, sidefodssynlighed og nulstilling. |
| `openSettingsDialog` | `opener = null` | `void` | Åbner dialogen med de aktuelle værdier og husker det element, fokus skal vende tilbage til. |
| `installSettingsUi` | — | `void` | Installerer den globale tastelytter i capture-fasen (åbn/luk dialog, omtildeling) og lydhændelserne. |
| `installUiSoundEvents` | — | `void` | Delegeret klik-lytter, der afspiller feedbacklyde for DemoScopes kontroller. |
| `ensureSettingsLayoutStyles` | — | `void` | Tilføjer indstillingsvinduets typografi: venstrejusterede sektioner og rækker med opsummeringsmærker. |
| `refreshSettingsSummaries` | — | `void` | Opdaterer opsummeringsmærkerne for Genvejstaster („Ændret: N“ / „Standard“) og Animationer („Stil · hastighed“ / „Fra“). |
| `installExtraSettingsSections` | `settingsDialog: HTMLDialogElement` | `void` | Tilføjer Genvejstaster og Animationer øverst samt Diagnostik og Nulstil nederst. Skjuler den tidligere blok for indstillingstasten, som nu ændres i genvejstastvinduet. |

## Sikkerhedskopier, rapporter og historikgrænser

| Funktion | Parameter | Rückgabe | Aufgabe |
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

## Kontonavn og invitationsside

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Om Steam-kontonavnet i øjeblikket er skjult. |
| `installAccountNameControl` | — | `void` | Tilføjer en øjekontakt ved siden af log ud-linket og holder den synkroniseret via en `MutationObserver`. |
| `installInvitePage` | — | `boolean` | Gendesigner `/vacnet/createinvite`: kortlayout, vis/skjul og kopiér link (Clipboard API med `execCommand` som reserve), kravliste, sprogvælger. Returnerer `false`, hvis forventede elementer mangler. |
| `installInviteExtras` | `card: HTMLElement, doneLink: HTMLElement \| null` | `void` | Tilføjer lukknappen (×) og en lytter i capture-fasen for inviteDone (standard Enter) og inviteClose (standard Esc). Ignorerer taster, når en knap, et link, et felt, en dialog eller sprogliste har fokus. |
| `refreshInviteKeyLabels` | — | `void` | Tegner „Færdig“-etiketten igen med tastemærket og værktøjstippet for × ud fra de aktuelle bindinger. |
| `installWelcomePage` | — | `boolean` | Tilpasser velkomstsiden med branding og sprogvælger; Enter/Space fortsætter; false hvis elementer mangler. |

## Klipsegment og afspilleradapter

| Funktion | Parameter | Rückgabe | Aufgabe |
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
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | Returnerer true, når fokus er i et input, textarea, select eller redigerbar tekst. |
| `isPlayerShortcutBlocked` | `target: EventTarget` | `boolean` | Som isShortcutBlocked, men lader radiofelter for bedømmelser slippe igennem, fordi fokus bliver på radiofeltet efter et klik. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | Etiket for en hastighedsindstilling. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | `<option>`-liste til hastighedsvælgeren (0,5–4×). |
| `readStoredShiftSpeed` | — | `number` | Gemt Shift-hastighed (standard 2×). |
| `readStoredVerdictRandomizer` | — | `boolean` | Gemt tilstand for dom-randomizeren (standard fra). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | Kobler håndtering af afspilningshastighed, segmentbegrænsning/-pause, hjælpere til søgning/billedtrin/lyd fra/fuld skærm og de globale genveje (`1`–`5`, piletaster, `,` `.`, mellemrum, `M`, `F`, Shift). Interne closures: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, hjælpere til tegneløkken. |

## Dom-forudindstillinger

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | Vælger “skip” i hver domsgruppe uden valg. |
| `getSelectedVerdictState` | — | `object` | Aktuel værdi (`positive` / `negative` / `skip` / `null`) for `aimassist`, `wallhack`, `autobhop`, `bot`. |
| `detectActivePreset` | — | `string \| null` | Navnet på den forudindstilling, der matcher det aktuelle valg. |
| `syncPresetButtons` | — | `string \| null` | Opdaterer `aria-pressed` på forudindstillingsknapper og mærket for den udvidede forudindstilling. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | Klikker på en forudindstillings radioinput; med randomizeren slået til blandes rækkefølgen, og der ventes 200–600 ms mellem klik. Deaktiverer forudindstillingsknapperne, mens den kører. |
| `readAdvancedPresetsOpen` | — | `boolean` | Om skuffen med udvidede forudindstillinger blev efterladt åben. |
| `normalizeVerdictLabels` | `root = document` | `void` | Fjerner fremhævningsmarkering fra domsetiketter. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Tilføjer lokaliserede titler over hver domsgruppe. |
| `ensureVerdictHelp` | `block: HTMLElement, titleEl: HTMLElement, title: string, field: string` | `void` | Opretter knappen „?“ og forklaringspopuppet for en bedømmelsesgruppe med DemoScopes egen lokaliserede tekst; VACNets formulering er kun reserve. |
| `closeVerdictHelp` | `except = null` | `void` | Lukker alle åbne forklaringspopups undtagen den angivne. |
| `installVerdictHelpHandlers` | — | `void` | Installerer én gang delegeret håndtering af klik, klik uden for popup og Esc for popups. |

## Beskeder, sidefod og indlæsning ved indsendelse

| Funktion | Parameter | Rückgabe | Aufgabe |
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

| Funktion | Parameter | Rückgabe | Aufgabe |
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
| `isLocalHistoryEnabled` | — | `boolean` | Læser om lokal historik er slået til; standard er til. |
| `readTimeFormat` | — | `string` | Læser tidsformat: automatisk, 12 eller 24 timer. |
| `formatQueueFirstSeen` | `timestamp: number, locale = getActiveLocale()` | `string` | Formaterer første registreringstid efter sprog og tidsformat. |
| `getQueueNoticeLocale` | — | `string` | Returnerer sproget for beskeden om tom kø. |
| `migrateEmptyQueueLanguage` | — | `boolean` | Flytter tidligere sprogvalg til fælles indstilling og synkroniserer URL. |
| `updateEmptyQueueTimestamp` | — | `void` | Opdaterer vist tidspunkt for første registrering. |

## Indsendelsesforløb

| Funktion | Parameter | Rückgabe | Aufgabe |
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
| `submitVerdictForm` | `{ recordHistory = false } = {}` | `boolean` | Kører sikkerhedstjekket, viser overlayet og indsender formularen. |
| `submitVerdictsDirect` | — | `boolean` | Forbereder etiketterne og indsender. |
| `invokeProceedAction` | — | `boolean` | Enter-/klikhåndtering: første tryk klargør, andet tryk indsender. |
| `installProceedShortcut` | — | `void` | Lytter i capture-fasen til `Enter`/`NumpadEnter`. |
| `invokeCancelAction` | — | `boolean` | Afvæbner første tryk i totrinsafsendelsen eller klikker på den synlige „Annuller“-knap; returnerer false, hvis intet kan annulleres. |
| `refreshCancelButtonLabel` | — | `void` | Tilføjer eller opdaterer tastemærket på „Annuller“-knappen. |
| `hookProceedButton` | — | `void` | Erstatter klikadfærden for den indbyggede indsend-knap. |
| `installVerdictChangeReset` | — | `void` | Afvæbner indsendelsen og synkroniserer forudindstillingerne igen, når en dom ændres. |
| `scheduleProceedFooterFix` | — | `void` | Forsinket (`requestAnimationFrame`) kald af `fixProceedFooter`. |
| `scheduleVerdictLabelsFix` | — | `void` | Forsinket gen-normalisering af etiketter/titler/standardværdier. |

## Genvejstastregister og ændring af bindinger

| Handling | Standard | Gruppe | Funktion |
|---|---|---|---|
| `playPause` | `Space` | Playback | Sætter klippet på pause eller genoptager afspilningen. |
| `mute` | `M` | Playback | Slår lyden fra eller til igen. |
| `fullscreen` | `F` | Playback | Slår fuldskærm til eller fra. |
| `seekBack` / `seekForward` | `←` / `→` | Navigation | Springer 5 sekunder tilbage eller frem. |
| `frameBack` / `frameForward` | `,` / `.` | Navigation | Går én billedramme tilbage eller frem. |
| `speedBoost` | `Shift` | Navigation | Afspiller hurtigere, mens tasten holdes nede (den eneste handling, der kan bruge Shift). |
| `quick1` … `quick5` | `1` … `5` | Bedømmelser | Klassisk formular: forvalg 1–5. Opgave med ét spørgsmål: Cheating / Ikke sikker / Intet snyd set (1–3). |
| `proceed` | `Enter` | Submission | Bekræfter bedømmelsen eller aktiverer og sender den klassiske formular. |
| `cancel` | `Esc` | Submission | Trykker på „Annuller“ eller afvæbner det første Enter-tryk. |
| `inviteDone` | `Enter` | Invite page | Forlader invitationssiden (samme som „Færdig“). |
| `inviteClose` | `Esc` | Invite page | Samme funktion som ×-knappen. |
| `settings` | `F2` | Interface | Åbner eller lukker indstillingsvinduet. |

Bindinger gemmes som KeyboardEvent.code-værdier under demoscopeKeybindings (kun ændringer fra standard; indstillingstasten har sin egen post). Venstre og højre modifikatortast tæller som én tast, og det numeriske tastatur svarer til hovedrækken. Taster, der ikke kan bindes: Tab, Ctrl, Alt, Meta, Caps Lock, ContextMenu, F5, F11, F12. Konflikter er afgrænset til områderne review, invite og global; den globale indstillingstast er i konflikt med alle.

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `fmt` | `template: string, vars = {}` | `string` | Erstatter {name}-pladsholdere i en lokaliseret skabelon. |
| `isModalOpen` | — | `boolean` | Er true, mens en dialog er åben; sidens genvejstaster er inaktive imens. |
| `normalizeKeyCode` | `code: string` | `string` | Samler venstre og højre modifikatortaster og mapper taltasterne på det numeriske tastatur samt NumpadEnter til tilsvarende taster på hovedtastaturet. |
| `formatKeyLabel` | `code: string` | `string` | Læsbar visning af en tast (ArrowLeft → ←, KeyM → M, Escape → Esc). |
| `loadKeyOverrides` | — | `object` | Læser og validerer gemte tastetildelinger (cachelagres; returnerer {} ved fejl). |
| `saveKeyOverrides` | `overrides: object` | `void` | Gemmer tastetildelingerne eller fjerner posten, når alt er standard. |
| `getBinding` | `id: string` | `string` | Aktuel tast for en handling; tom streng, hvis den ikke er tildelt. |
| `setBinding` | `id: string, code: string` | `void` | Gemmer en tast til en handling (en tom kode fjerner tildelingen); standardværdier gemmes ikke. |
| `resetAllBindings` | — | `void` | Gendanner alle tastetildelinger, inklusive indstillingstasten, til standard. |
| `findKeyConflict` | `id: string, code: string` | `object \| null` | Søger efter konflikt med en tast, der allerede bruges inden for det relevante område. |
| `getActionForEvent` | `event: KeyboardEvent, scope = currentKeyScope()` | `string \| null` | Finder handlingen, der hører til en tastaturhændelse. |
| `keyScopeOf` | `id: string` | `string` | En handlings område: review, invite eller global. |
| `keyScopesOverlap` | `a: string, b: string` | `boolean` | Er true, hvis to områder kan overlappe (samme område eller et af dem er global). |
| `currentKeyScope` | — | `string` | invite på invitationssiden, ellers review. |
| `validateKeyForAction` | `id: string, code: string` | `string` | Returnerer tom streng, hvis tasten kan tildeles, reserved for browser-/navigationstaster eller shift, hvis Shift vælges til en handling, der ikke kræver at tasten holdes nede. |
| `quickRangeLabel` | `count: number` | `string` | Etiket for hurtigbedømmelsestasterne (1–5, hvis de ikke er ændret, ellers de tildelte taster). |
| `buildHintsInnerMarkup` | — | `string (HTML)` | Opretter tastetipsene under videoen ud fra de aktuelle tildelinger. |
| `refreshKeyLabels` | — | `void` | Opdaterer alle tasteetiketter på siden: tips, mærker for forvalg og bedømmelser, Fortsæt/Annuller/invitation og indstillingsopsummeringer. |
| `ensureDemoscopeDialogStyles` | — | `void` | Tilføjer den fælles stil for vinduerne Genvejstaster og Animationer. |
| `hkActionName` | `id: string` | `string` | Lokaliseret handlingsnavn. |
| `hkGroupName` | `group: string` | `string` | Lokaliseret gruppenavn. |
| `hkActionDescription` | `id: string` | `string` | Lokaliseret beskrivelse af handlingen (hurtigbedømmelser forklares for begge opgavetyper). |
| `hkSetMessage` | `text: string, warn = false` | `void` | Angiver statuslinjen i genvejstastvinduet. |
| `hkCancelCapture` | — | `void` | Afslutter tasteregistrering. |
| `hkRowMarkup` | `action: object` | `string (HTML)` | Markup for en handlingsrække, inklusive konfliktpanelet, hvis der er en konflikt. |
| `renderHotkeys` | — | `void` | Tegner hele vinduet igen og bevarer rullepositionen. |
| `hkCommit` | `actionId: string, code: string, mode = "replace"` | `void` | Tildeler en tast; replace frigør den fra den anden handling, swap bytter tasterne. |
| `hkRequestAssign` | `actionId: string, code: string` | `void` | Tildeler en tast direkte eller åbner konfliktpanelet (Erstat / Byt / Annuller), hvis tasten allerede bruges. |
| `ensureHotkeysDialog` | — | `HTMLDialogElement` | Opretter genvejstastvinduet og tastaturlytteren i capture-fasen (Esc kan tildeles og lukker ikke vinduet under registrering). |
| `openHotkeysDialog` | — | `void` | Åbner genvejstastvinduet. |

## Animationer

Seks stilarter for indikatorprikken (pulse, breathe, ripple, heartbeat, orbit, blink), tre hastigheder (0,6× / 1× / 1,7×) og en til/fra-knap, gemt i demoscopeAnimStyle, demoscopeAnimSpeed og demoscopeAnimEnabled. Den aktive stil angives med data-ds-anim på html (off når deaktiveret); stylesheetet styrer prikken og forhåndsvisningerne.

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `readStorage` | `key: string` | `string \| null` | Sikker læsning fra localStorage. |
| `writeStorage` | `key: string, value: string \| null` | `void` | Sikker skrivning til localStorage (null fjerner nøglen). |
| `animEnabled` | — | `boolean` | Gemt til/fra-status; fra som standard, hvis systemet beder om mindre bevægelse. |
| `animStyle` | — | `string` | Gemt stil (pulse som standard). |
| `animSpeedKey` | — | `string` | Gemt hastighed (slow / normal / fast; normal som standard). |
| `ensureAnimationStyles` | — | `void` | Tilføjer keyframes og regler, som deles af den animerede prik og forhåndsvisningsprikkerne. |
| `applyAnimationSettings` | — | `void` | Anvender stil, hastighed og til/fra på html og opdaterer indstillingsoversigten. |
| `ensureAnimationsDialog` | — | `HTMLDialogElement` | Opretter animationsvinduet med kontakt, hastighed, stilkort med liveforhåndsvisning og nulstilling. |
| `openAnimationsDialog` | — | `void` | Åbner animationsvinduet. |
| `ensureUiPolishStyles` | — | `void` | Tilføjer mørke, smalle rullepaneler og color-scheme: dark til vinduer og bedømmelseslisten (Chromium ville ellers vise et lyst panel). |

## Opgave med ét spørgsmål

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `isCheatingMode` | — | `boolean` | Er true, når siden viser formularen med ét spørgsmål (#verdictbuttons_cheating). |
| `selectCheatingVerdict` | `kind: string` | `void` | Klikker på alternativknappen Cheating / Ikke sikker / Ingen snyd set (positive / skip / negative). Hvis valget er låst, afspilles en fejltone, og låsekortet rystes. |
| `localizeCheatingVerdicts` | — | `void` | Omskriver de tre etiketter til DemoScopes sprog og tegner tastemærker med CSS, så VACNets bekræftelse ikke indeholder tastens tal. Forbereder også låsekortet. |
| `updateCheatingLock` | — | `void` | Opdaterer låsekortet (”de to andre bedømmelser låses op, når klippet slutter · m:ss tilbage”) og statusbjælken. Skjuler det, når valgene låses op, eller en bedømmelse vælges. |
| `startCheatingLockWatcher` | — | `void` | Starter 250-ms-timeren, der kalder updateCheatingLock. |

## Robusthed og diagnostik

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `recordFailure` | `step: string, error: any` | `void` | Logger et mislykket trin (på en liste med begrænset længde) til diagnostikrapporten. |
| `safeStep` | `step: string, fn: Function, fallback?: any` | `any` | Kører et opsætningstrin; ved fejl logges den, og reserveværdien returneres, så de næste trin fortsætter. |
| `getVideoContainer` | — | `HTMLElement \| null` | Finder videobeholderen eller som reserve dens overordnede element for afspilleren eller videoelementet. |
| `getVerdictContainer` | — | `HTMLElement \| null` | Finder bedømmelsesbeholderen eller det overordnede element for den første bedømmelsesblok. |
| `getSubmitArea` | — | `HTMLElement \| null` | Finder afsendelses-/bekræftelsesområdet (#submitbuttons, .submitbuttons eller det overordnede element for send-knappen). |
| `hasVerdictForm` | — | `boolean` | Er true, hvis der findes mindst én alternativknap til bedømmelse. |
| `removeEnhancements` | — | `void` | Fjerner DemoScopes paneler, klasser og sidefodsændringer og gendanner VACNets sidefod. |
| `disableDemoScope` | `reason: string` | `void` | Slår DemoScope fra på siden: ruller ændringer tilbage, beholder kun indstillingsvinduet og viser en meddelelse én gang per årsag og session. |
| `isOwnNode` | `el: Element` | `boolean` | Er true for elementer, som DemoScope har oprettet (udelades fra struktur­rapporten). |
| `elementSignature` | `el: Element` | `string` | Signaturen tag#id.class[…] til struktur­rapporten; den indeholder ingen tekst. |
| `skeletonOf` | `root: Element, maxDepth = 7, maxNodes = 170` | `string` | Kompakt, indrykket træ af tags, ID’er og klasser (identiske søskende samles som ×N). |
| `captureOriginalSkeleton` | — | `void` | Gemmer sidens struktur, før DemoScope ændrer noget. |
| `buildDiagnosticsReport` | — | `string` | Opretter rapporten med version, side, sprog og browser, opgavetype, 22 elementkontroller (ok / MISSING), mislykkede trin og strukturen før/efter DemoScope. Ingen sidetekst eller kontodata. |
| `fallbackCopyText` | `text: string` | `boolean` | Kopierer tekst via et midlertidigt tekstfelt, når Clipboard API ikke er tilgængelig. |
| `copyDiagnostics` | `statusEl: HTMLElement, textarea: HTMLTextAreaElement` | `Promise<void>` | Kopierer rapporten; hvis kopiering mislykkes, vises teksten i et felt, hvor den kan markeres. |

## Layout og opstart

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Bygger linjen til valg af Shift-hastighed. |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | HTML for én forudindstillingsknap. |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | HTML for de udvidede forudindstillingsgrupper. |
| `buildEnhancementBar` | — | `HTMLElement` | Bygger hurtigdomslinjen: forudindstillinger, randomizer-kontakt, udvidet skuffe. |
| `positionShiftSpeedBar` | — | `void` | Holder hastighedslinjen før domslisten. |
| `positionEnhancementBar` | — | `void` | Holder forudindstillingslinjen før indsend-knapperne. |
| `fixProceedFooter` | — | `void` | Omarrangerer sidefod, linjer og indsend-knappen. |
| `enhanceLayout` | — | `void` | Anvender alle layoutændringer og installerer indstillingsgrænsefladen. |
| `ensureReviewStructure` | — | `void` | Normaliserer VACNets markup: indpakker bedømmelsesblokke i .verdicts-container-inner, flytter #submitbuttons ind i beholderen og spejler kliptælleren i mærket i sidehovedet. Virker med både gammel og redesignet markup. |
| `watchProceedFooter` | — | `void` | Observerer `.verdicts-container` og planlægger rettelser af sidefoden. |
| `watchVerdictLabels` | — | `void` | Observerer domsetiketterne og planlægger gen-normalisering. |
| `readFooterPreference` | `storageKey: string` | `boolean` | Læser sidefodens synlighedsvalg fra localStorage. |
| `saveFooterPreference` | `storageKey: string, hidden: boolean` | `void` | Gemmer sidefodens synlighedsvalg. |
| `applyFooterPreferences` | `footer: HTMLElement \| null = document.querySelector(".demoscope-custom-footer")` | `void` | `void` |
| `installDemoScopeFooter` | `withClipLinks: boolean, locale = getActiveLocale(), showFeedback = true` | `HTMLElement` | Opretter eller opdaterer lokaliseret sidefod med valgfrie links og anvender valgene. |
| `installEmptyQueueNotice` | — | `boolean` | Erstatter besked om tom kø med lokaliseret vejledning, tidspunkt, sprogvælger og sidefod. |
| `init` | — | `Promise<void>` | Indgangspunkt: kontonavnskontrol → invitations- eller gennemgangsside → layout, observatører, genveje, afspillerforbedringer. |

installWelcomePage og installInvitePage returnerer false, hvis nødvendige VACNet-elementer mangler. installEmptyQueueNotice returnerer false, hvis siden ikke viser tom kø.

### Øvrige elementer

* **blockSegmentLoopGuard** (IIFE, kører ved indlæsning): erstatter webstedets indbyggede 100-ms-timer for segmentløkken med en tom funktion; DemoScopes egne kontroller håndterer segmentet.
* **Konstanter og tabeller:** SUPPORTED_LOCALES, FLAG_SVG, UI_TEXT_ROWS, INVITE_TEXT_ROWS, SETTINGS_TEXT_ROWS, PRESETS, PRESET_KEYS, PRESET_TONES, ADVANCED_PRESET_GROUPS, SHIFT_SPEEDS, FRAME_STEP og ARROW_JUMP_SEC (21 PRESETS-definitioner); tilføjet efter v1.0.0: KEY_ACTIONS, KEY_GROUPS, KEY_ACTION_BY_ID, KEY_ACTION_SCOPE, RESERVED_KEY_CODES, CHEATING_KEYS, VERDICT_SECTION_TITLES, VERDICT_SECTION_HELP, ANIM_STYLES og ANIM_SPEEDS.
* **Modultilstand:** diag (mislykkede trin, årsag til deaktivering og sidens oprindelige struktur), hkState (genvejstastvinduets tilstand) og konstanten SCRIPT_VERSION til diagnostikrapporten.
* **Tekster:** al synlig tekst ligger i de lokaliserede tabeller ovenfor; vinduerne fra v1.2.0–v1.4.0 er oversat til alle 29 sprog.

## Lageringsnøgler

| Nøgle | Hvor | Formål |
|---|---|---|
| `demoscopeLanguage`, `demoscopeLanguageAuto` | `localStorage` | Valgt sprog / automatisk tilstand. |
| `demoscopeKeybindings` | `localStorage` | Genvejstaster, der afviger fra standard (JSON). |
| `demoscopeSettingsHotkey` | `localStorage` | Tast, der åbner indstillingerne (none, hvis fjernet). |
| `demoscopeAnimEnabled`, `demoscopeAnimStyle`, `demoscopeAnimSpeed` | `localStorage` | Indstillinger for indikatoranimation. |
| `demoscopeSoundEffectsEnabled`, `demoscopeSoundEffectsVolume` | `localStorage` | Lydindstillinger. |
| `demoscopeClipHistory` og nøgler til historikgrænser/-format | `localStorage` | Lokal bedømmelseshistorik og dens indstillinger. |
| `demoscopeSubmitPending`, `demoscopeSubmitPrevVod`, `demoscopeLangSyncTried`, `demoscopeDisabledNotice` | `sessionStorage` | Ventende afsendelse, beskyttelse af sprogsynkronisering og engangsmeddelelse om deaktivering. |




