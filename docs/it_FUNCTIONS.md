<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/docs/en_FUNCTIONS.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/docs/bg_FUNCTIONS.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/docs/hu_FUNCTIONS.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/docs/vi_FUNCTIONS.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/docs/el_FUNCTIONS.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/docs/da_FUNCTIONS.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/docs/id_FUNCTIONS.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/docs/es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/docs/es-419_FUNCTIONS.md) · **Italiano** · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/docs/zh-TW_FUNCTIONS.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/docs/zh-CN_FUNCTIONS.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/docs/ko_FUNCTIONS.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/docs/de_FUNCTIONS.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/docs/nl_FUNCTIONS.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/docs/no_FUNCTIONS.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/docs/pl_FUNCTIONS.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/docs/pt-PT_FUNCTIONS.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/docs/pt-BR_FUNCTIONS.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/docs/ro_FUNCTIONS.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/docs/ru_FUNCTIONS.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/docs/th_FUNCTIONS.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/docs/tr_FUNCTIONS.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/docs/uk_FUNCTIONS.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/docs/fi_FUNCTIONS.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/docs/fr_FUNCTIONS.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/docs/cs_FUNCTIONS.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/docs/sv_FUNCTIONS.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/docs/ja_FUNCTIONS.md)

</div>

# DemoScope — Riferimento delle funzioni

Riferimento completo delle 217 funzioni di primo livello di `DemoScope.user.js` v1.4.0 (nome, parametri, valore restituito, responsabilità). Torna al [README](../README.md).

Convenzioni: `—` indica nessun parametro; `void` indica che la funzione viene chiamata per i suoi effetti collaterali.

## Panoramica del comportamento per l’utente

| Area | Descrizione |
|---|---|
| Pagine supportate | Migliora la pagina iniziale VACNet (/vacnet), le pagine di revisione (/vacnet/clips), la pagina degli inviti (/vacnet/createinvite) e lo stato senza clip nella pagina di revisione. Non modifica le altre pagine. |
| Tipi di attività | Rileva quale modulo di revisione propone VACNet. Il modulo classico (aim assist, wallhack, auto-bhop, bot) riceve preset e combinazioni estese. La nuova attività con una sola domanda («Il soggetto sta barando oltre ogni ragionevole dubbio?») usa invece un layout compatto: tre verdetti etichettati sui tasti 1–3, un indicatore di blocco con il tempo rimanente del clip e nessun verdetto rapido o combinazione. |
| Lingua | Supporta 29 lingue di Steam. La scelta manuale salvata ha la priorità; altrimenti lo script segue il parametro Steam ?l= e poi la lingua del browser o della pagina. Scegliendo una lingua in DemoScope viene passato a VACNet anche il relativo ?l=, così i testi propri di VACNet seguono la selezione. La modalità automatica mantiene sincronizzato il parametro Steam con la lingua del browser. |
| Pagine iniziali e inviti | Rinnova entrambe le pagine, aggiunge il selettore della lingua condiviso e permette di nascondere il nome dell’account con un pulsante a forma di occhio. Nella pagina iniziale, Invio o Spazio continua quando il focus non è su un controllo interattivo. Nella pagina degli inviti si può nascondere, mostrare e copiare il link; sono spiegati i requisiti. Il pulsante × chiude la pagina; Invio equivale a «Fatto» ed Esc a ×. |
| Revisione dei clip | Aggiunge preset e combinazioni di verdetti, un randomizzatore disattivato per impostazione predefinita, una velocità regolabile tenendo premuto Shift, ricerca limitata al segmento, avanzamento fotogramma per fotogramma e scorciatoie di riproduzione. Le categorie di verdetto hanno un pulsante ? con spiegazione localizzata. Le parole chiave nei pulsanti sono evidenziate con i colori DemoScope. |
| Tasti rapidi | Ogni scorciatoia è un’azione nel registro comune e può essere riassegnata in Impostazioni → Tasti rapidi. I conflitti vengono rilevati per pagina (inviti e revisioni non si sovrappongono) e mostrano l’azione, il gruppo e la descrizione che usano già il tasto; è possibile sostituire, scambiare o annullare. Ogni azione ha un pulsante di ripristino e i suggerimenti nella pagina seguono le assegnazioni. |
| Invio | Invio o Invio del tastierino numerico (predefinito) attiva «Continua». Nel modulo classico il primo tasto arma l’azione e il successivo invia i verdetti. Nell’attività con una sola domanda, la selezione di un verdetto mostra la conferma VACNet, da confermare con Invio. Esc (predefinito) preme «Annulla» mentre un verdetto attende conferma oppure disarma il primo tasto. Spazio non è una scorciatoia di invio. |
| Impostazioni | F2 apre per impostazione predefinita la finestra delle impostazioni (modificabile nella finestra Tasti rapidi). Sezioni: tasti rapidi, animazioni, effetti sonori e volume, cronologia locale (attivazione, limiti, formato 12/24 ore, backup), visibilità del piè di pagina, diagnostica e ripristino unico per suoni, tasti rapidi e animazioni. |
| Animazioni | Il punto accanto a DemoScope può essere animato. Una finestra dedicata offre sei stili (impulso, respiro, onda, battito, orbita, lampeggio), anteprima dal vivo, tre velocità e un interruttore. Se il sistema operativo richiede di ridurre il movimento, le animazioni sono inizialmente disattivate. |
| Cronologia locale | Salva i riepiloghi dei verdetti nel localStorage del browser; DemoScope non li carica online. La cronologia si può disattivare, importare, esportare come JSON o HTML, unire da backup JSON in un unico rapporto HTML oppure cancellare. Limiti configurabili: 10/20/30/50 voci per chiave e 100/200/300/500 chiavi totali. La disattivazione impedisce nuove voci ma non elimina quelle esistenti. La cronologia viene registrata solo per il modulo classico. |
| Coda vuota | Sostituisce il messaggio di coda vuota VACNet con istruzioni localizzate, data e ora della prima visualizzazione salvate nel browser e selettore della lingua. L’indicazione di 250 demo al giorno è informativa e basata sul comportamento osservato di VACNet; DemoScope non impone né aggira tale limite. |
| Piè di pagina | Usa un piè di pagina DemoScope localizzato. Nelle pagine dei clip può mostrare i link per feedback e segnalazioni; dalle impostazioni si può nascondere ciascun link, la riga di copyright o l’intero piè di pagina. |
| Gestione degli errori | Ogni passaggio di inizializzazione è isolato, così un errore non blocca gli altri. Gli elementi principali vengono cercati con alternative di ripiego. Se la pagina non è più riconoscibile, DemoScope si disattiva solo su quella pagina, ripristina il layout VACNet e mostra un breve avviso. Impostazioni → Diagnostica consente di copiare un rapporto di testo (versione dello script, elementi attesi trovati, passaggi non riusciti e struttura della pagina) per segnalare i problemi. |

Lo script non modifica le regole VACNet lato server per gli inviti, l’elaborazione dei verdetti o i limiti di visualizzazione. Cronologia locale, lingua e preferenze dell’interfaccia restano nel profilo del browser.

## Localizzazione

| Funzione | Parametri | Restituisce | Descrizione |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Markup SVG inline della bandiera di una lingua; in assenza usa un'icona a globo. |
| `getSavedLocale` | — | `string \| null` | Legge la lingua salvata dall'utente (`demoscopeLanguage`) da `localStorage`. |
| `getActiveLocale` | — | `string` | Determina la lingua attiva: scelta salvata → Steam `?l=` → lingua del browser/pagina → `en`. |
| `getLanguageBadge` | — | `string` | Nome di visualizzazione proprio della lingua, ad es. “English version”, per il badge del selettore di lingua. |
| `getBrowserLocale` | — | `string \| null` | Rileva la prima lingua supportata del browser, incluse le varianti regionali. |
| `syncAutomaticLanguage` | — | `boolean` | In modalità automatica sincronizza ?l= con la lingua del browser e naviga se differiscono. |
| `getRenderedSteamLanguage` | — | `string \| null` | Legge la lingua Steam effettivamente usata da VACNet per la pagina, ricavandola dal parametro l= negli URL dei fogli di stile e degli script. |
| `syncSelectedLanguage` | — | `boolean` | Quando si sceglie manualmente una lingua in DemoScope, ricarica una sola volta la pagina con il relativo ?l= affinché anche i testi VACNet seguano la scelta. Salta il ricaricamento se la lingua visualizzata è già corretta e previene i cicli di reindirizzamento. Restituisce true se avviene una navigazione. |
| `tr` | `key: string` | `string` | Cerca una stringa dell'interfaccia per la lingua attiva (ripiego: inglese, poi la chiave stessa). |
| `inviteText` | `key: string` | `string` | Stessa ricerca per la tabella delle stringhe della pagina inviti. |
| `settingText` | `key: string` | `string` | Stessa ricerca per la tabella delle stringhe della finestra delle impostazioni. |
| `getPresetLabel` | `name: string` | `string` | Etichetta localizzata di un preset; compone combinazioni come “Bot + Aim”. |
| `buildLanguageOptions` | `{ activeLocale = getActiveLocale(), selectedLocale = null } = {}` | `string (HTML)` | Markup dei pulsanti di scelta della lingua, inclusa la voce “auto”. |
| `installLanguageSelector` | `root: HTMLElement, onLocaleSelect: Function \| null = null` | `void` | Collega e posiziona il selettore della lingua, salva la scelta e ricarica la pagina; una callback facoltativa può gestire la selezione al suo posto. |
| `queueNoticeText` | `key: string, locale = getQueueNoticeLocale()` | `string` | Cerca il testo localizzato per la coda vuota o il piè di pagina. |

## Effetti sonori e finestra delle impostazioni

| Funzione | Parametri | Restituisce | Descrizione |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | Riga “N voci · ultima voce: …” mostrata nella finestra delle impostazioni. |
| `soundsEnabled` | — | `boolean` | Indica se i suoni UI sono attivi (`demoscopeSoundEffectsEnabled`, attivi per impostazione predefinita). |
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
| `ensureSettingsLayoutStyles` | — | `void` | Inserisce gli stili della finestra delle impostazioni: sezioni allineate a sinistra e righe con indicatori di riepilogo. |
| `refreshSettingsSummaries` | — | `void` | Aggiorna gli indicatori di riepilogo per le voci Tasti rapidi («Modificati: N» / «Predefiniti») e Animazioni («Stile · velocità» / «Disattivate»). |
| `installExtraSettingsSections` | `settingsDialog: HTMLDialogElement` | `void` | Aggiunge in alto le sezioni Tasti rapidi e Animazioni, quindi Diagnostica e Ripristino in fondo. Nasconde il precedente blocco del tasto delle impostazioni, ora modificabile dalla finestra Tasti rapidi. |

## Backup, report e limiti della cronologia

| Funzione | Parametri | Restituisce | Descrizione |
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

## Nome account e pagina inviti

| Funzione | Parametri | Restituisce | Descrizione |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Indica se il nome dell'account Steam è attualmente nascosto. |
| `installAccountNameControl` | — | `void` | Aggiunge un interruttore a forma di occhio accanto al link di logout e lo mantiene sincronizzato tramite un `MutationObserver`. |
| `installInvitePage` | — | `boolean` | Ridisegna `/vacnet/createinvite`: layout a scheda, mostra/nascondi e copia del link (Clipboard API con ripiego `execCommand`), elenco dei requisiti, selettore di lingua. Restituisce `false` se mancano gli elementi attesi. |
| `installInviteExtras` | `card: HTMLElement, doneLink: HTMLElement \| null` | `void` | Aggiunge il pulsante di chiusura (×) e un listener in fase di cattura per le azioni inviteDone (predefinita Enter) e inviteClose (predefinita Esc). Ignora i tasti quando hanno il focus un pulsante, un link, un campo, una finestra di dialogo o l’elenco delle lingue. |
| `refreshInviteKeyLabels` | — | `void` | Aggiorna l’etichetta «Fatto» con il badge del tasto e il suggerimento di × in base alle assegnazioni correnti. |
| `installWelcomePage` | — | `boolean` | Rinnova la pagina di benvenuto, aggiunge marchio e selettore lingua; Invio/Spazio continua; restituisce false se mancano elementi. |

## Segmento della clip e adattatore del lettore

| Funzione | Parametri | Restituisce | Descrizione |
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
| `isPlayerShortcutBlocked` | `target: EventTarget` | `boolean` | Come isShortcutBlocked, ma consente i pulsanti radio del verdetto, perché il focus resta sul pulsante dopo il clic. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | Etichetta di un'opzione di velocità. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | Elenco di `<option>` per il selettore di velocità (0,5–4×). |
| `readStoredShiftSpeed` | — | `number` | Velocità Shift salvata (predefinita 2×). |
| `readStoredVerdictRandomizer` | — | `boolean` | Stato salvato del randomizzatore dei verdetti (predefinito disattivato). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | Collega la gestione della velocità di riproduzione, il vincolo/pausa del segmento, gli helper di ricerca/avanzamento fotogramma/muto/schermo intero e le scorciatoie globali (`1`–`5`, frecce, `,` `.`, Spazio, `M`, `F`, Shift). Closure interne: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, helper del ciclo di disegno. |

## Verdetti predefiniti

| Funzione | Parametri | Restituisce | Descrizione |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | Seleziona “skip” in ogni gruppo di verdetto senza selezione. |
| `getSelectedVerdictState` | — | `object` | Valore corrente (`positive` / `negative` / `skip` / `null`) di `aimassist`, `wallhack`, `autobhop`, `bot`. |
| `detectActivePreset` | — | `string \| null` | Nome del preset corrispondente alla selezione corrente. |
| `syncPresetButtons` | — | `string \| null` | Aggiorna `aria-pressed` sui pulsanti dei preset e il badge del preset esteso. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | Fa clic sugli input radio di un preset; con il randomizzatore attivo mescola l'ordine e attende 200–600 ms tra i clic. Disattiva i pulsanti dei preset mentre è in esecuzione. |
| `readAdvancedPresetsOpen` | — | `boolean` | Indica se il cassetto dei preset estesi era rimasto aperto. |
| `normalizeVerdictLabels` | `root = document` | `void` | Rimuove il markup di evidenziazione dalle etichette dei verdetti. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Aggiunge titoli localizzati sopra ogni gruppo di verdetto. |
| `ensureVerdictHelp` | `block: HTMLElement, titleEl: HTMLElement, title: string, field: string` | `void` | Crea il pulsante «?» e il riquadro esplicativo per un gruppo di verdetti usando il testo localizzato di DemoScope; quello VACNet è solo un ripiego. |
| `closeVerdictHelp` | `except = null` | `void` | Chiude tutti i riquadri esplicativi aperti tranne quello indicato. |
| `installVerdictHelpHandlers` | — | `void` | Installa una sola volta la gestione delegata dei clic, dei clic esterni e di Esc per i riquadri. |

## Notifiche, footer e caricamento all'invio

| Funzione | Parametri | Restituisce | Descrizione |
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

| Funzione | Parametri | Restituisce | Descrizione |
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
| `isLocalHistoryEnabled` | — | `boolean` | Legge se la cronologia locale è attiva; lo è per impostazione predefinita. |
| `readTimeFormat` | — | `string` | Legge il formato orario preferito: automatico, 12 o 24 ore. |
| `formatQueueFirstSeen` | `timestamp: number, locale = getActiveLocale()` | `string` | Formatta l’ora della prima rilevazione secondo lingua e formato scelti. |
| `getQueueNoticeLocale` | — | `string` | Restituisce la lingua attiva dell’avviso di coda vuota. |
| `migrateEmptyQueueLanguage` | — | `boolean` | Migra la vecchia preferenza nella scelta comune e sincronizza l’URL. |
| `updateEmptyQueueTimestamp` | — | `void` | Aggiorna l’ora di prima rilevazione visualizzata. |

## Flusso di invio

| Funzione | Parametri | Restituisce | Descrizione |
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
| `invokeCancelAction` | — | `boolean` | Annulla il primo passaggio dell’invio in due fasi oppure fa clic sul pulsante «Annulla» visibile; restituisce false se non c’è nulla da annullare. |
| `refreshCancelButtonLabel` | — | `void` | Aggiunge o aggiorna il badge del tasto sul pulsante «Annulla». |
| `hookProceedButton` | — | `void` | Sostituisce il comportamento al clic del pulsante di invio nativo. |
| `installVerdictChangeReset` | — | `void` | Disarma l'invio e risincronizza i preset quando un verdetto cambia. |
| `scheduleProceedFooterFix` | — | `void` | Chiamata differita (`requestAnimationFrame`) di `fixProceedFooter`. |
| `scheduleVerdictLabelsFix` | — | `void` | Rinormalizzazione differita di etichette/titoli/valori predefiniti. |

## Registro e rimappatura dei tasti rapidi

| Azione | Predefinito | Gruppo | Funzione |
|---|---|---|---|
| `playPause` | `Space` | Playback | Mette in pausa il clip o riprende la riproduzione. |
| `mute` | `M` | Playback | Disattiva o riattiva l’audio. |
| `fullscreen` | `F` | Playback | Attiva o esce dalla modalità a schermo intero. |
| `seekBack` / `seekForward` | `←` / `→` | Navigazione | Salta indietro o avanti di 5 secondi. |
| `frameBack` / `frameForward` | `,` / `.` | Navigazione | Avanza o torna indietro di un fotogramma. |
| `speedBoost` | `Shift` | Navigation | Aumenta la velocità di riproduzione finché il tasto è premuto (unica azione che può usare Shift). |
| `quick1` … `quick5` | `1` … `5` | Verdetti | Modulo classico: preset da 1 a 5. Attività con una domanda: Barare / Non so / Nessun trucco rilevato; tasti da 1 a 3. |
| `proceed` | `Enter` | Submission | Conferma il verdetto oppure arma e invia il modulo classico. |
| `cancel` | `Esc` | Submission | Preme «Annulla» o annulla il primo Enter. |
| `inviteDone` | `Enter` | Invite page | Esce dalla pagina d’invito (equivale a «Fatto»). |
| `inviteClose` | `Esc` | Invite page | Equivale al pulsante ×. |
| `settings` | `F2` | Interface | Apre o chiude la finestra delle impostazioni. |

Le assegnazioni sono memorizzate come valori KeyboardEvent.code in demoscopeKeybindings (solo le modifiche rispetto ai predefiniti; il tasto delle impostazioni ha una voce separata). I modificatori sinistro e destro valgono come un solo tasto e il tastierino numerico rispecchia la riga principale. Tasti non assegnabili: Tab, Ctrl, Alt, Meta, Caps Lock, ContextMenu, F5, F11, F12. I conflitti sono limitati agli ambiti review, invite e global; il tasto globale delle impostazioni entra in conflitto con tutti.

| Funzione | Parametri | Restituisce | Descrizione |
|---|---|---|---|
| `fmt` | `template: string, vars = {}` | `string` | Sostituisce i segnaposto {name} in un modello localizzato. |
| `isModalOpen` | — | `boolean` | Vale true mentre è aperto qualsiasi elemento dialog; in tal caso i tasti rapidi della pagina non si attivano. |
| `normalizeKeyCode` | `code: string` | `string` | Raggruppa i modificatori sinistro e destro sotto lo stesso tasto e associa le cifre del tastierino e NumpadEnter ai tasti equivalenti della tastiera principale. |
| `formatKeyLabel` | `code: string` | `string` | Nome visualizzato di un tasto (ArrowLeft → ←, KeyM → M, Escape → Esc). |
| `loadKeyOverrides` | — | `object` | Legge e convalida le assegnazioni salvate (memorizzate in cache; restituisce {} in caso di errore). |
| `saveKeyOverrides` | `overrides: object` | `void` | Salva le assegnazioni oppure rimuove la voce se tutte corrispondono ai valori predefiniti. |
| `getBinding` | `id: string` | `string` | Tasto attualmente assegnato a un’azione; stringa vuota se non è assegnato. |
| `setBinding` | `id: string, code: string` | `void` | Salva un tasto per un’azione (un codice vuoto annulla l’assegnazione); i valori predefiniti non vengono memorizzati. |
| `resetAllBindings` | — | `void` | Ripristina i valori predefiniti di tutte le assegnazioni, compreso il tasto delle impostazioni. |
| `findKeyConflict` | `id: string, code: string` | `object \| null` | Cerca conflitti con un tasto già assegnato nell’ambito pertinente. |
| `getActionForEvent` | `event: KeyboardEvent, scope = currentKeyScope()` | `string \| null` | Individua l’azione associata a un evento della tastiera. |
| `keyScopeOf` | `id: string` | `string` | Ambito di un’azione: review, invite o global. |
| `keyScopesOverlap` | `a: string, b: string` | `boolean` | Vale true quando due ambiti possono entrare in conflitto (stesso ambito o uno dei due è global). |
| `currentKeyScope` | — | `string` | invite nella pagina d’invito, review negli altri casi. |
| `validateKeyForAction` | `id: string, code: string` | `string` | Restituisce una stringa vuota se il tasto può essere assegnato, reserved per i tasti del browser/navigazione, oppure shift se Shift è scelto per un’azione che non si attiva tenendo premuto il tasto. |
| `quickRangeLabel` | `count: number` | `string` | Etichetta dei tasti per i verdetti rapidi (1–5 se invariati, altrimenti i tasti assegnati). |
| `buildHintsInnerMarkup` | — | `string (HTML)` | Crea i suggerimenti sui tasti mostrati sotto il video in base alle assegnazioni correnti. |
| `refreshKeyLabels` | — | `void` | Aggiorna tutte le etichette dei tasti nella pagina: suggerimenti, badge dei preset e dei verdetti, Continua/Annulla/invito e riepiloghi delle impostazioni. |
| `ensureDemoscopeDialogStyles` | — | `void` | Inserisce lo stile condiviso delle finestre Tasti rapidi e Animazioni. |
| `hkActionName` | `id: string` | `string` | Nome localizzato dell’azione. |
| `hkGroupName` | `group: string` | `string` | Nome localizzato del gruppo. |
| `hkActionDescription` | `id: string` | `string` | Descrizione localizzata dell’azione (i verdetti rapidi sono descritti per entrambi i tipi di attività). |
| `hkSetMessage` | `text: string, warn = false` | `void` | Imposta la riga di stato della finestra Tasti rapidi. |
| `hkCancelCapture` | — | `void` | Esce dalla modalità di acquisizione del tasto. |
| `hkRowMarkup` | `action: object` | `string (HTML)` | Markup di una riga di azione, incluso il pannello dei conflitti quando necessario. |
| `renderHotkeys` | — | `void` | Ridisegna l’intera finestra mantenendo la posizione di scorrimento. |
| `hkCommit` | `actionId: string, code: string, mode = "replace"` | `void` | Assegna un tasto; replace libera l’altra azione, swap scambia i rispettivi tasti. |
| `hkRequestAssign` | `actionId: string, code: string` | `void` | Assegna direttamente un tasto oppure apre il pannello dei conflitti (Sostituisci / Scambia / Annulla) se è già occupato. |
| `ensureHotkeysDialog` | — | `HTMLDialogElement` | Crea la finestra Tasti rapidi e il relativo listener di tastiera in fase di cattura (Esc può essere assegnato e non chiude la finestra durante l’acquisizione). |
| `openHotkeysDialog` | — | `void` | Apre la finestra Tasti rapidi. |

## Animazioni

Sei stili del punto indicatore (pulse, breathe, ripple, heartbeat, orbit, blink), tre velocità (0,6× / 1× / 1,7×) e un interruttore, salvati in demoscopeAnimStyle, demoscopeAnimSpeed e demoscopeAnimEnabled. Lo stile attivo viene impostato tramite data-ds-anim su html; il foglio di stile gestisce il punto e le anteprime.

| Funzione | Parametri | Restituisce | Descrizione |
|---|---|---|---|
| `readStorage` | `key: string` | `string \| null` | Lettura sicura da localStorage. |
| `writeStorage` | `key: string, value: string \| null` | `void` | Scrittura sicura in localStorage (null rimuove la chiave). |
| `animEnabled` | — | `boolean` | Stato di attivazione salvato; disattivato per impostazione predefinita quando il sistema richiede di ridurre le animazioni. |
| `animStyle` | — | `string` | Stile salvato (pulse per impostazione predefinita). |
| `animSpeedKey` | — | `string` | Velocità salvata (slow / normal / fast; normal per impostazione predefinita). |
| `ensureAnimationStyles` | — | `void` | Inserisce i fotogrammi chiave e le regole condivise dal punto animato e dai punti di anteprima. |
| `applyAnimationSettings` | — | `void` | Applica stile, velocità e stato a html e aggiorna il riepilogo delle impostazioni. |
| `ensureAnimationsDialog` | — | `HTMLDialogElement` | Crea la finestra Animazioni con interruttore, velocità, schede degli stili con anteprima dal vivo e ripristino. |
| `openAnimationsDialog` | — | `void` | Apre la finestra Animazioni. |
| `ensureUiPolishStyles` | — | `void` | Aggiunge barre di scorrimento scure e sottili e color-scheme: dark alle finestre e all’elenco dei verdetti (Chromium altrimenti mostrerebbe una barra chiara). |

## Attività con una sola domanda

| Funzione | Parametri | Restituisce | Descrizione |
|---|---|---|---|
| `isCheatingMode` | — | `boolean` | Vale true quando la pagina mostra il modulo con una sola domanda (#verdictbuttons_cheating). |
| `selectCheatingVerdict` | `kind: string` | `void` | Fa clic sul pulsante radio Truffa / Non so / Nessun trucco rilevato (positive / skip / negative). Se l’opzione è ancora bloccata, riproduce un suono di errore e fa vibrare la scheda di blocco. |
| `localizeCheatingVerdicts` | — | `void` | Riscrive le tre etichette nella lingua DemoScope e disegna via CSS i badge dei tasti, così la conferma VACNet non mostra la cifra del tasto rapido. Prepara anche la scheda di blocco. |
| `updateCheatingLock` | — | `void` | Aggiorna la scheda di blocco («gli altri due verdetti si sbloccano al termine del clip · m:ss rimanenti») e la barra di avanzamento. La nasconde quando le opzioni si sbloccano o viene scelto un verdetto. |
| `startCheatingLockWatcher` | — | `void` | Avvia il timer da 250 ms che richiama updateCheatingLock. |

## Affidabilità e diagnostica

| Funzione | Parametri | Restituisce | Descrizione |
|---|---|---|---|
| `recordFailure` | `step: string, error: any` | `void` | Registra un passaggio non riuscito (in un elenco limitato) per il rapporto diagnostico. |
| `safeStep` | `step: string, fn: Function, fallback?: any` | `any` | Esegue un passaggio di configurazione; in caso di errore lo registra e restituisce il valore di ripiego, così i passaggi successivi continuano. |
| `getVideoContainer` | — | `HTMLElement \| null` | Trova il contenitore video oppure, come ripiego, l’elemento genitore del player o del tag video. |
| `getVerdictContainer` | — | `HTMLElement \| null` | Trova il contenitore dei verdetti oppure il genitore del primo blocco di verdetto. |
| `getSubmitArea` | — | `HTMLElement \| null` | Trova l’area di invio/conferma (#submitbuttons, .submitbuttons oppure il genitore del pulsante di invio). |
| `hasVerdictForm` | — | `boolean` | Vale true se è presente almeno un pulsante radio per i verdetti. |
| `removeEnhancements` | — | `void` | Rimuove pannelli, classi e modifiche al piè di pagina di DemoScope, quindi ripristina il piè di pagina VACNet. |
| `disableDemoScope` | `reason: string` | `void` | Disattiva DemoScope in questa pagina: annulla le modifiche, mantiene solo la finestra delle impostazioni e mostra un avviso una volta per motivo e sessione. |
| `isOwnNode` | `el: Element` | `boolean` | Vale true per gli elementi creati da DemoScope (esclusi dal rapporto sulla struttura). |
| `elementSignature` | `el: Element` | `string` | Firma tag#id.class[…] usata nel rapporto sulla struttura; non contiene testo. |
| `skeletonOf` | `root: Element, maxDepth = 7, maxNodes = 170` | `string` | Albero compatto e indentato di tag, ID e classi (i fratelli identici sono raggruppati come ×N). |
| `captureOriginalSkeleton` | — | `void` | Registra la struttura della pagina prima che DemoScope la modifichi. |
| `buildDiagnosticsReport` | — | `string` | Genera il rapporto con versione, pagina, lingua e browser, tipo di attività, 22 controlli degli elementi (ok / MISSING), passaggi non riusciti e struttura prima/dopo DemoScope. Non include testo della pagina né dati dell’account. |
| `fallbackCopyText` | `text: string` | `boolean` | Copia il testo tramite un’area temporanea quando l’API Clipboard non è disponibile. |
| `copyDiagnostics` | `statusEl: HTMLElement, textarea: HTMLTextAreaElement` | `Promise<void>` | Copia il rapporto; se la copia non riesce, mostra il testo in un campo selezionabile. |

## Layout e avvio

| Funzione | Parametri | Restituisce | Descrizione |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Costruisce la barra di selezione della velocità Shift. |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | Markup di un pulsante di preset. |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | Markup dei gruppi di preset estesi. |
| `buildEnhancementBar` | — | `HTMLElement` | Costruisce la barra del verdetto rapido: preset, interruttore del randomizzatore, cassetto esteso. |
| `positionShiftSpeedBar` | — | `void` | Mantiene la barra della velocità prima dell'elenco dei verdetti. |
| `positionEnhancementBar` | — | `void` | Mantiene la barra dei preset prima dei pulsanti di invio. |
| `fixProceedFooter` | — | `void` | Riorganizza footer, barre e pulsante di invio. |
| `enhanceLayout` | — | `void` | Applica tutte le modifiche al layout e installa l'interfaccia delle impostazioni. |
| `ensureReviewStructure` | — | `void` | Normalizza il markup VACNet: racchiude i blocchi dei verdetti in .verdicts-container-inner, sposta #submitbuttons nel contenitore e riporta il contatore dei clip nel badge dell’intestazione. Compatibile con il markup vecchio e quello ridisegnato. |
| `watchProceedFooter` | — | `void` | Osserva `.verdicts-container` e pianifica le correzioni del footer. |
| `watchVerdictLabels` | — | `void` | Osserva le etichette dei verdetti e pianifica la rinormalizzazione. |
| `readFooterPreference` | `storageKey: string` | `boolean` | Legge da localStorage la preferenza di visibilità del piè di pagina. |
| `saveFooterPreference` | `storageKey: string, hidden: boolean` | `void` | Salva la preferenza di visibilità del piè di pagina. |
| `applyFooterPreferences` | `footer: HTMLElement \| null = document.querySelector(".demoscope-custom-footer")` | `void` | `void` |
| `installDemoScopeFooter` | `withClipLinks: boolean, locale = getActiveLocale(), showFeedback = true` | `HTMLElement` | Crea o aggiorna il piè localizzato, con link facoltativi, e applica le preferenze. |
| `installEmptyQueueNotice` | — | `boolean` | Sostituisce il messaggio di coda vuota con istruzioni localizzate, ora, selettore lingua e piè. |
| `init` | — | `Promise<void>` | Punto di ingresso: controllo del nome account → pagina inviti o di revisione → layout, osservatori, scorciatoie, miglioramenti del lettore. |

installWelcomePage e installInvitePage restituiscono false se mancano elementi VACNet necessari. installEmptyQueueNotice restituisce false se la pagina non mostra una coda vuota.

### Altri elementi non elencati sopra

* **blockSegmentLoopGuard** (IIFE, eseguita al caricamento): sostituisce con una funzione vuota il timer nativo di 100 ms usato dal sito per il ciclo del segmento; i controlli DemoScope gestiscono il segmento.
* **Costanti e tabelle:** SUPPORTED_LOCALES, FLAG_SVG, UI_TEXT_ROWS, INVITE_TEXT_ROWS, SETTINGS_TEXT_ROWS, PRESETS, PRESET_KEYS, PRESET_TONES, ADVANCED_PRESET_GROUPS, SHIFT_SPEEDS, FRAME_STEP e ARROW_JUMP_SEC (21 definizioni in PRESETS); aggiunti dopo v1.0.0: KEY_ACTIONS, KEY_GROUPS, KEY_ACTION_BY_ID, KEY_ACTION_SCOPE, RESERVED_KEY_CODES, CHEATING_KEYS, VERDICT_SECTION_TITLES, VERDICT_SECTION_HELP, ANIM_STYLES e ANIM_SPEEDS.
* **Stato del modulo:** diag (passaggi non riusciti, motivo della disattivazione e struttura iniziale della pagina), hkState (stato della finestra Tasti rapidi) e costante SCRIPT_VERSION usata nel rapporto diagnostico.
* **Testi:** tutte le stringhe visibili sono nelle tabelle localizzate sopra; le finestre aggiunte da v1.2.0 a v1.4.0 sono tradotte in tutte le 29 lingue.

## Chiavi di archiviazione

| Chiave | Archiviazione | Scopo |
|---|---|---|
| `demoscopeLanguage`, `demoscopeLanguageAuto` | `localStorage` | Lingua scelta / modalità automatica. |
| `demoscopeKeybindings` | `localStorage` | Tasti rapidi diversi dai valori predefiniti (JSON). |
| `demoscopeSettingsHotkey` | `localStorage` | Tasto che apre le impostazioni (none se rimosso). |
| `demoscopeAnimEnabled`, `demoscopeAnimStyle`, `demoscopeAnimSpeed` | `localStorage` | Impostazioni di animazione del punto indicatore. |
| `demoscopeSoundEffectsEnabled`, `demoscopeSoundEffectsVolume` | `localStorage` | Impostazioni audio. |
| `demoscopeClipHistory` e chiavi per limiti e formato cronologia | `localStorage` | Cronologia locale delle revisioni e impostazioni correlate. |
| `demoscopeSubmitPending`, `demoscopeSubmitPrevVod`, `demoscopeLangSyncTried`, `demoscopeDisabledNotice` | `sessionStorage` | Stato di caricamento post-invio, protezione della sincronizzazione linguistica e avviso di disattivazione mostrato una volta. |




