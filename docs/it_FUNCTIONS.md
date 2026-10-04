<div align="center">

[English](en_FUNCTIONS.md) · [Български](bg_FUNCTIONS.md) · [Magyar](hu_FUNCTIONS.md) · [Tiếng Việt](vi_FUNCTIONS.md) · [Ελληνικά](el_FUNCTIONS.md) · [Dansk](da_FUNCTIONS.md) · [Bahasa Indonesia](id_FUNCTIONS.md) · [Español (España)](es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](es-419_FUNCTIONS.md) · **Italiano** · [繁體中文](zh-TW_FUNCTIONS.md) · [简体中文](zh-CN_FUNCTIONS.md) · [한국어](ko_FUNCTIONS.md) · [Deutsch](de_FUNCTIONS.md) · [Nederlands](nl_FUNCTIONS.md) · [Norsk](no_FUNCTIONS.md) · [Polski](pl_FUNCTIONS.md) · [Português (Portugal)](pt-PT_FUNCTIONS.md) · [Português (Brasil)](pt-BR_FUNCTIONS.md) · [Română](ro_FUNCTIONS.md) · [Русский](ru_FUNCTIONS.md) · [ไทย](th_FUNCTIONS.md) · [Türkçe](tr_FUNCTIONS.md) · [Українська](uk_FUNCTIONS.md) · [Suomi](fi_FUNCTIONS.md) · [Français](fr_FUNCTIONS.md) · [Čeština](cs_FUNCTIONS.md) · [Svenska](sv_FUNCTIONS.md) · [日本語](ja_FUNCTIONS.md)

</div>

# DemoScope — Riferimento delle funzioni

Riferimento completo delle 143 funzioni di primo livello di `DemoScope.user.js` v1.0.0 (nome, parametri, valore restituito, responsabilità). Torna al [README](../README/it_README.md).

Convenzioni: `—` indica nessun parametro; `void` indica che la funzione viene chiamata per i suoi effetti collaterali.

## Panoramica del comportamento per l’utente

| Sezione | Descrizione |
|---|---|
| Pagine e lingua | Lo script migliora la pagina di benvenuto VACNet (/vacnet), le pagine di revisione (/vacnet/clips), quella degli inviti (/vacnet/createinvite) e lo stato senza clip; non modifica le altre pagine. Supporta 29 lingue: la scelta manuale ha priorità, altrimenti usa Steam ?l= e la lingua del browser. La modalità automatica sincronizza ?l= con il browser. Le pagine di benvenuto e invito condividono selettore lingua e occultamento del nome; dalla pagina iniziale si continua con Enter/Space e il link d’invito può essere nascosto, mostrato e copiato. |
| Revisione, tasti e impostazioni | La revisione offre verdetti rapidi, combinazioni avanzate, randomizzatore disattivato per impostazione predefinita, velocità con Shift, ricerca entro i limiti del segmento, avanzamento per fotogrammi e scorciatoie; Space controlla il video. Enter o Numpad Enter attiva «Continua»; nel modulo, il primo tocco prepara l’azione e il secondo invia i verdetti. Space non invia verdetti. F2 apre le impostazioni per impostazione predefinita e si può cambiare. Le impostazioni includono suoni e volume, cronologia locale e limiti, formato 12/24 ore e visibilità del piè di pagina. |
| Cronologia locale | La cronologia viene salvata solo nel localStorage di questo browser e DemoScope non la carica su un server. Può essere disattivata, importata, esportata in JSON/HTML, unita da backup JSON in un unico report HTML o cancellata. Limiti: 10/20/30/50 voci per chiave e 100/200/300/500 chiavi. Disattivarla impedisce nuove voci ma non elimina quelle esistenti. |
| Coda vuota, piè di pagina e privacy | Quando la coda è vuota vengono mostrati spiegazioni localizzate, l’ora locale della prima rilevazione e il selettore lingua. Il dato di circa 250 demo al giorno è basato su osservazioni, non è un limite impostato da DemoScope; lo script non modifica né aggira limiti VACNet, requisiti d’invito o elaborazione dei verdetti. Il piè di pagina è localizzato; nelle pagine dei clip può mostrare link a feedback e segnalazione, nascondibili separatamente o insieme al copyright. Lingua, cronologia e preferenze restano nel profilo del browser. |

## Localizzazione

| Funzione | Parametri | Restituisce | Responsabilità |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Markup SVG inline della bandiera di una lingua; in assenza usa un'icona a globo. |
| `getSavedLocale` | — | `string \| null` | Legge la lingua salvata dall'utente (`demoscopeLanguage`) da `localStorage`. |
| `getActiveLocale` | — | `string` | Determina la lingua attiva: scelta salvata → Steam `?l=` → lingua del browser/pagina → `en`. |
| `getLanguageBadge` | — | `string` | Nome di visualizzazione proprio della lingua, ad es. “English version”, per il badge del selettore di lingua. |
| `tr` | `key: string` | `string` | Cerca una stringa dell'interfaccia per la lingua attiva (ripiego: inglese, poi la chiave stessa). |
| `inviteText` | `key: string` | `string` | Stessa ricerca per la tabella delle stringhe della pagina inviti. |
| `settingText` | `key: string` | `string` | Stessa ricerca per la tabella delle stringhe della finestra delle impostazioni. |
| `getPresetLabel` | `name: string` | `string` | Etichetta localizzata di un preset; compone combinazioni come “Bot + Aim”. |
| `buildLanguageOptions` | `{ activeLocale = getActiveLocale(), selectedLocale = null } = {}` | `string (HTML)` | Markup dei pulsanti di scelta della lingua, inclusa la voce “auto”. |
| `installLanguageSelector` | `root: HTMLElement, onLocaleSelect: Function \| null = null` | `void` | Collega e posiziona il selettore della lingua, salva la scelta e ricarica la pagina; una callback facoltativa può gestire la selezione al suo posto. |

## Effetti sonori e finestra delle impostazioni

| Funzione | Parametri | Restituisce | Responsabilità |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | Riga “N voci · ultima voce: …” mostrata nella finestra delle impostazioni. |
| `soundsEnabled` | — | `boolean` | Indica se i suoni dell'interfaccia sono attivi (`demoscopeSoundEffectsEnabled`, attivi di default). |
| `getSoundVolume` | — | `number (0–1)` | Volume audio salvato (`demoscopeSoundEffectsVolume`, predefinito 0,4). |
| `playUiSound` | `kind = "click"` | `void` | Sintetizza una breve sequenza di toni con Web Audio (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`); non genera mai errori. |
| `readSettingsHotkey` | — | `string` | `KeyboardEvent.code` salvato che apre la finestra delle impostazioni (predefinito `F2`). |
| `formatHotkey` | `code: string` | `string` | Nome leggibile di un tasto (`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | Estrae il codice del tasto fisico, riportando a `KeyX` i layout non latini; `""` se non utilizzabile. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | Vero per i tasti già usati da DemoScope o dal lettore (Invio, Spazio, frecce, `M`, `F`, `1`–`5`, …). |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Crea e collega le impostazioni: suoni e volume, anteprima, scorciatoia, cronologia locale e limiti, formato orario, importazione/esportazione JSON, esportazione/unione HTML, cancellazione cronologia, visibilità piè di pagina e ripristino. |
| `openSettingsDialog` | `opener = null` | `void` | Apre la finestra con i valori correnti e ricorda l'elemento a cui restituire il focus. |
| `installSettingsUi` | — | `void` | Installa l'ascoltatore globale dei tasti in fase di cattura (apertura/chiusura della finestra, riassegnazione) e gli eventi sonori. |
| `installUiSoundEvents` | — | `void` | Ascoltatore di clic delegato che riproduce suoni di riscontro per i controlli di DemoScope. |

## Backup, report e limiti della cronologia

| Funzione | Parametri | Restituisce | Responsabilità |
|---|---|---|---|
| `exportLocalHistory` | — | `void` | Scarica l'intera cronologia come `demoscope-history-YYYY-MM-DD.json`. |
| `downloadHistoryFile` | `content: string, filename: string, mimeType: string` | `void` | Avvia il download di un file tramite un URL Blob temporaneo. |
| `collectHistoryReportRows` | `store: object` | `Array<{vodId, ts, summary, segment}>` | Appiattisce e deduplica le voci della cronologia, dalla più recente. |
| `exportReadableHistory` | — | `void` | Scarica un report HTML autonomo e localizzato della cronologia. |
| `buildReadableHistoryReport` | `rows: Array, reportTitle: string, summaryNote = ""` | `string (HTML document)` | Costruisce il markup HTML del report con i caratteri escapati. |
| `setMergeReportStatus` | `statusElement: HTMLElement, message: string, state: string` | `void` | Aggiorna la riga di stato dello strumento di unione (`progress`, `success`, `warning`). |
| `exportCombinedHistoryReports` | `files: FileList \| File[], statusElement: HTMLElement, button: HTMLButtonElement` | `Promise<void>` | Convalida molti backup JSON (≤ 5 MB ciascuno, ≤ 100 MB in totale), deduplica le voci e scarica un unico report HTML combinato. |
| `isSafeHistoryKey` | `key: string` | `boolean` | Controllo con lista di elementi consentiti per le chiavi della cronologia (blocca `__proto__`, `constructor` e chiavi malformate). |
| `importLocalHistory` | `file: File` | `Promise<void>` | Convalida un backup JSON, lo unisce alla cronologia locale (rispettando i limiti) e aggiorna l'interfaccia. |
| `readHistoryLimit` | `storageKey: string, allowedValues: number[], defaultValue: number` | `number` | Legge un limite numerico da `localStorage`, accettando solo valori consentiti. |
| `getHistoryPerKeyLimit` | — | `number` | Voci conservate per chiave di clip/partita (10/20/30/50, predefinito 30). |
| `getHistoryTotalLimit` | — | `number` | Numero totale di chiavi di clip/partita conservate (100/200/300/500, predefinito 300). |
| `readAdvancedPresetsOpen` | — | `boolean` | Indica se il cassetto dei preset estesi era rimasto aperto. |

## Nome account e pagina inviti

| Funzione | Parametri | Restituisce | Responsabilità |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Indica se il nome dell'account Steam è attualmente nascosto. |
| `installAccountNameControl` | — | `void` | Aggiunge un interruttore a forma di occhio accanto al link di logout e lo mantiene sincronizzato tramite un `MutationObserver`. |
| `installInvitePage` | — | `boolean` | Ridisegna `/vacnet/createinvite`: layout a scheda, mostra/nascondi e copia del link (Clipboard API con ripiego `execCommand`), elenco dei requisiti, selettore di lingua. Restituisce `false` se mancano gli elementi attesi. |

## Segmento della clip e adattatore del lettore

| Funzione | Parametri | Restituisce | Responsabilità |
|---|---|---|---|
| `parseSegmentBounds` | — | `{startTime, endTime, duration} \| null` | Estrae `startTime`/`endTime` dagli script inline della pagina. |
| `formatSegmentTime` | `seconds: number` | `string` | Formatta i secondi come `m:ss.cc`. |
| `getVideoElement` | — | `HTMLVideoElement \| null` | Trova l'elemento `<video>` della revisione. |
| `getVjsPlayer` | — | `Video.js player \| null` | Restituisce il lettore Video.js della pagina se disponibile e non distrutto. |
| `createPlayerAdapter` | — | `adapter \| null` | API unificata su Video.js / video HTML5: `currentTime`, `paused`, `pause`, `play`, `playbackRate(s)`, `muted`, `on`, `isFullscreen`, `requestFullscreen`, `exitFullscreen`. |
| `waitForPlayerAdapter` | `timeoutMs = 20000` | `Promise<adapter>` | Controlla ogni 100 ms finché esiste un lettore; rifiuta allo scadere del tempo. |
| `clampSegment` | `time: number, bounds: object` | `number` | Limita un istante ai confini della clip. |
| `segmentProgress` | `time: number, bounds: object` | `number (0–1)` | Posizione relativa all'interno della clip. |
| `installCustomControls` | `player, bounds, refreshDisplay: {current: Function}` | `void` | Aggiunge la barra di ricerca, l'indicatore del tempo e i suggerimenti dei tasti sotto il video. |
| `pauseLayoutMutations` | `run: Function` | `void` | Esegue una callback mentre gli osservatori del layout sono sospesi (evita cicli di retroazione). |
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | Restituisce true se il focus è in un input, textarea, select o testo modificabile. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | Etichetta di un'opzione di velocità. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | Elenco di `<option>` per il selettore di velocità (0,5–4×). |
| `readStoredShiftSpeed` | — | `number` | Velocità Shift salvata (predefinita 2×). |
| `readStoredVerdictRandomizer` | — | `boolean` | Stato salvato del randomizzatore dei verdetti (predefinito disattivato). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | Collega la gestione della velocità di riproduzione, il vincolo/pausa del segmento, gli helper di ricerca/avanzamento fotogramma/muto/schermo intero e le scorciatoie globali (`1`–`5`, frecce, `,` `.`, Spazio, `M`, `F`, Shift). Closure interne: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, helper del ciclo di disegno. |

## Verdetti predefiniti

| Funzione | Parametri | Restituisce | Responsabilità |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | Seleziona “skip” in ogni gruppo di verdetto senza selezione. |
| `getSelectedVerdictState` | — | `object` | Valore corrente (`positive` / `negative` / `skip` / `null`) di `aimassist`, `wallhack`, `autobhop`, `bot`. |
| `detectActivePreset` | — | `string \| null` | Nome del preset corrispondente alla selezione corrente. |
| `syncPresetButtons` | — | `string \| null` | Aggiorna `aria-pressed` sui pulsanti dei preset e il badge del preset esteso. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | Fa clic sugli input radio di un preset; con il randomizzatore attivo mescola l'ordine e attende 200–600 ms tra i clic. Disattiva i pulsanti dei preset mentre è in esecuzione. |
| `normalizeVerdictLabels` | `root = document` | `void` | Rimuove il markup di evidenziazione dalle etichette dei verdetti. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Aggiunge titoli localizzati sopra ogni gruppo di verdetto. |

## Notifiche, footer e caricamento all'invio

| Funzione | Parametri | Restituisce | Responsabilità |
|---|---|---|---|
| `hideSiteFooter` | — | `void` | Nasconde il footer del sito. |
| `showToast` | `message: string, type = "info", duration = 1800` | `void` | Mostra una notifica non bloccante con ARIA-live. |
| `markSubmitPending` | — | `void` | Salva in `sessionStorage` l'istante dell'invio e l'id della clip corrente. |
| `isSubmitPending` | — | `boolean` | Indica se un invio è in attesa della clip successiva. |
| `clearSubmitPending` | — | `void` | Cancella i marcatori di invio in sospeso. |
| `showSubmitLoadingOverlay` | `message = tr("nextClip")` | `void` | Mostra l'overlay di caricamento a pagina intera. |
| `hideSubmitLoadingOverlay` | — | `void` | Nasconde l'overlay e cancella lo stato di attesa. |
| `bootSubmitLoadingIfPending` | — | `void` | Mostra di nuovo l'overlay al caricamento della pagina se c'è un invio in sospeso. |
| `isReviewPageReady` | `prevVod: string, startedAt: number` | `boolean` | Vero quando interfaccia e contenuti multimediali della clip successiva sono pronti. |
| `finishSubmitLoadingWhenReady` | — | `Promise<void>` | Attende fino a 30 s la clip successiva, poi nasconde l'overlay (notifica di errore allo scadere). |

## Archivio della cronologia locale

| Funzione | Parametri | Restituisce | Responsabilità |
|---|---|---|---|
| `extractVodId` | — | `string` | Ricava l'id della clip/partita dall'URL del video. |
| `getGameKey` | — | `string` | Chiave della cronologia per la partita (`game::<id>`). |
| `getClipKey` | `bounds: object` | `string` | Chiave della cronologia per un segmento (`<id>:<start>:<end>`). |
| `normalizeHistoryEntry` | `entry: any` | `{ts, summary, segment} \| null` | Convalida e ripulisce una voce della cronologia. |
| `readHistoryEntries` | `store: object, key: string` | `Array` | Voci normalizzate per una chiave. |
| `getGameHistoryEntries` | `store: object` | `Array` | Voci della partita corrente (supporta una chiave legacy). |
| `getClipHistoryEntries` | `store: object, bounds: object` | `Array` | Voci del segmento corrente. |
| `formatClipId` | `vodId: string` | `string` | Id numerico breve da mostrare (`#0000000`), ottenuto con hash dall'id della clip. |
| `formatRelativeTime` | `timestamp: number` | `string` | Tempo relativo localizzato (`Intl.RelativeTimeFormat`). |
| `readClipHistoryStore` | — | `object` | Carica l'oggetto della cronologia da `localStorage` (`{}` in caso di errore). |
| `pruneHistoryStore` | `store: object` | `void` | Applica i limiti per chiave e totali (le chiavi più vecchie vengono eliminate per prime). |
| `writeClipHistoryStore` | `store: object` | `boolean` | Sfolta e salva; `false` in caso di errori di quota/archiviazione. |
| `summarizeCurrentVerdict` | — | `string` | Nome del preset della selezione corrente, oppure `mixed`. |
| `formatSummaryLabel` | `summary: string` | `string` | Etichetta localizzata per il riepilogo di una cronologia. |
| `formatClockTime` | `seconds: number` | `string` | Formato orologio `m:ss` (o `x.xs`). |
| `formatHumanSegment` | `bounds: object` | `string` | Intervallo del segmento leggibile. |
| `formatGameLabel` | — | `string` | Etichetta localizzata della partita corrente. |
| `historyEntryKey` | `entry: object` | `string` | Stringa di identità usata per la deduplicazione. |
| `formatPriorStat` | `count: number, label: string` | `string` | Riga “etichetta: N” nel pannello della cronologia. |
| `buildHistoryListItems` | `clipEntries: Array, gameEntries: Array, currentSegment: string` | `Array` | Unisce le voci di clip/partita in elementi da mostrare. |
| `renderHistoryItem` | `item: object` | `string (HTML)` | Markup di una riga della cronologia. |
| `escapeHtml` | `value: any` | `string` | Esegue l'escape di `& < > " '`. |
| `buildClipHistoryPanel` | `bounds, gameEntries, clipEntries` | `string (HTML)` | Markup del pannello della cronologia, incluso il pulsante delle regole di revisione. |
| `ensureClipHistoryPanel` | — | `void` | Crea il contenitore del pannello se manca. |
| `ensureReviewRulesDialog` | — | `void` | Crea la finestra delle regole di revisione e collega i suoi pulsanti di apertura/chiusura. |
| `installLocalHistoryButton` | `panel: HTMLElement` | `void` | Collega il pulsante “cronologia locale” (scorre fino all'elenco o mostra una notifica di stato vuoto). |
| `positionClipHistoryPanel` | — | `void` | Mantiene il pannello come primo elemento in `.verdicts-container`. |
| `renderClipHistory` | `bounds: object \| null` | `void` | Ridisegna il pannello della cronologia per la clip corrente. |
| `appendReviewHistory` | `bounds: object \| null` | `void` | Aggiunge il riepilogo del verdetto corrente alla cronologia della partita e della clip. |

## Flusso di invio

| Funzione | Parametri | Restituisce | Responsabilità |
|---|---|---|---|
| `isLabelingMode` | — | `boolean` | Vero nelle pagine che mostrano i quattro gruppi di verdetto. |
| `getProceedButton` | — | `HTMLButtonElement \| null` | Il pulsante di invio nativo, se visibile e abilitato. |
| `recordProceedHistoryIfLabeling` | — | `void` | Registra la cronologia una volta per invio (protetto dalla rientranza). |
| `resetProceedArmed` | — | `void` | Disarma l'invio in due passaggi. |
| `refreshProceedButtonLabel` | — | `void` | Aggiorna l'etichetta del pulsante, il suggerimento `Enter` e lo stile dello stato armato. |
| `verdictLabelForField` | `field: string, selected: string` | `string \| null` | Associa una selezione a `guilty_*` / `innocent_*` / `skip_*`. |
| `prepareVerdictFormForSubmit` | — | `boolean` | Costruisce gli input nascosti `verdict_labels[]`; mostra una notifica di errore e restituisce `false` se un gruppo non ha selezione. |
| `isSafeSubmitTarget` | `form: HTMLFormElement` | `boolean` | Consente solo azioni di modulo HTTPS della stessa origine. |
| `restoreSubmitUi` | — | `void` | Ripristina i pulsanti dopo un invio non riuscito. |
| `submitVerdictForm` | `{ recordHistory = false } = {}` | `boolean` | Esegue il controllo di sicurezza, mostra l'overlay e invia il modulo. |
| `submitVerdictsDirect` | — | `boolean` | Prepara le etichette e invia. |
| `invokeProceedAction` | — | `boolean` | Gestore di Invio/clic: la prima pressione arma, la seconda invia. |
| `installProceedShortcut` | — | `void` | Ascoltatore in fase di cattura per `Enter`/`NumpadEnter`. |
| `hookProceedButton` | — | `void` | Sostituisce il comportamento al clic del pulsante di invio nativo. |
| `installVerdictChangeReset` | — | `void` | Disarma l'invio e risincronizza i preset quando un verdetto cambia. |
| `scheduleProceedFooterFix` | — | `void` | Chiamata differita (`requestAnimationFrame`) di `fixProceedFooter`. |
| `scheduleVerdictLabelsFix` | — | `void` | Rinormalizzazione differita di etichette/titoli/valori predefiniti. |

## Layout e avvio

| Funzione | Parametri | Restituisce | Responsabilità |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Costruisce la barra di selezione della velocità Shift. |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | Markup di un pulsante di preset. |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | Markup dei gruppi di preset estesi. |
| `buildEnhancementBar` | — | `HTMLElement` | Costruisce la barra del verdetto rapido: preset, interruttore del randomizzatore, cassetto esteso. |
| `positionShiftSpeedBar` | — | `void` | Mantiene la barra della velocità prima dell'elenco dei verdetti. |
| `positionEnhancementBar` | — | `void` | Mantiene la barra dei preset prima dei pulsanti di invio. |
| `fixProceedFooter` | — | `void` | Riorganizza footer, barre e pulsante di invio. |
| `enhanceLayout` | — | `void` | Applica tutte le modifiche al layout e installa l'interfaccia delle impostazioni. |
| `watchProceedFooter` | — | `void` | Osserva `.verdicts-container` e pianifica le correzioni del footer. |
| `watchVerdictLabels` | — | `void` | Osserva le etichette dei verdetti e pianifica la rinormalizzazione. |
| `init` | — | `Promise<void>` | Punto di ingresso: controllo del nome account → pagina inviti o di revisione → layout, osservatori, scorciatoie, miglioramenti del lettore. |

### Integrazione dell’implementazione attuale

> Le 15 nuove funzioni rilevano e sincronizzano la lingua, localizzano l’avviso di coda vuota, rinnovano la pagina di benvenuto, gestiscono cronologia locale e orario e aggiornano le opzioni di visibilità del piè di pagina.

| Funzione | Parametri | Restituisce | Responsabilità |
|---|---|---|---|
| `getBrowserLocale` | — | `string \| null` | Rileva la prima lingua supportata del browser, incluse le varianti regionali. |
| `syncAutomaticLanguage` | — | `boolean` | In modalità automatica sincronizza ?l= con la lingua del browser e naviga se differiscono. |
| `queueNoticeText` | `key: string, locale = getQueueNoticeLocale()` | `string` | Cerca il testo localizzato per la coda vuota o il piè di pagina. |
| `installWelcomePage` | — | `boolean` | Rinnova la pagina di benvenuto, aggiunge marchio e selettore lingua; Invio/Spazio continua; restituisce false se mancano elementi. |
| `isLocalHistoryEnabled` | — | `boolean` | Legge se la cronologia locale è attiva; lo è per impostazione predefinita. |
| `readTimeFormat` | — | `string` | Legge il formato orario preferito: automatico, 12 o 24 ore. |
| `formatQueueFirstSeen` | `timestamp: number, locale = getActiveLocale()` | `string` | Formatta l’ora della prima rilevazione secondo lingua e formato scelti. |
| `getQueueNoticeLocale` | — | `string` | Restituisce la lingua attiva dell’avviso di coda vuota. |
| `migrateEmptyQueueLanguage` | — | `boolean` | Migra la vecchia preferenza nella scelta comune e sincronizza l’URL. |
| `updateEmptyQueueTimestamp` | — | `void` | Aggiorna l’ora di prima rilevazione visualizzata. |
| `readFooterPreference` | `storageKey: string` | `boolean` | Legge da localStorage la preferenza di visibilità del piè di pagina. |
| `saveFooterPreference` | `storageKey: string, hidden: boolean` | `void` | Salva la preferenza di visibilità del piè di pagina. |
| `applyFooterPreferences` | `footer: HTMLElement | null = document.querySelector(".demoscope-custom-footer")` | `void` | Applica le preferenze a link, copyright e intero piè di pagina, inclusa l’opzione per nascondere tutto. |
| `installDemoScopeFooter` | `withClipLinks: boolean, locale = getActiveLocale(), showFeedback = true` | `HTMLElement` | Crea o aggiorna il piè localizzato, con link facoltativi, e applica le preferenze. |
| `installEmptyQueueNotice` | — | `boolean` | Sostituisce il messaggio di coda vuota con istruzioni localizzate, ora, selettore lingua e piè. |

### Non elencato sopra

* **`blockSegmentLoopGuard`** (IIFE, eseguita al caricamento): avvolge `setInterval` nella pagina in modo che il timer nativo di loop del segmento da 100 ms del sito venga sostituito da una funzione vuota; il segmento è gestito dai controlli propri di DemoScope.
* **Costanti e tabelle:** `SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC` (`PRESETS`: 21 definizioni).
