<div align="center">

[English](../FUNCTIONS.md) · [Български](bg_FUNCTIONS.md) · [Magyar](hu_FUNCTIONS.md) · [Tiếng Việt](vi_FUNCTIONS.md) · [Ελληνικά](el_FUNCTIONS.md) · [Dansk](da_FUNCTIONS.md) · [Bahasa Indonesia](id_FUNCTIONS.md) · [Español (España)](es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](es-419_FUNCTIONS.md) · [Italiano](it_FUNCTIONS.md) · [繁體中文](zh-TW_FUNCTIONS.md) · [简体中文](zh-CN_FUNCTIONS.md) · [한국어](ko_FUNCTIONS.md) · [Deutsch](de_FUNCTIONS.md) · [Nederlands](nl_FUNCTIONS.md) · [Norsk](no_FUNCTIONS.md) · [Polski](pl_FUNCTIONS.md) · [Português (Portugal)](pt-PT_FUNCTIONS.md) · [Português (Brasil)](pt-BR_FUNCTIONS.md) · **Română** · [Русский](ru_FUNCTIONS.md) · [ไทย](th_FUNCTIONS.md) · [Türkçe](tr_FUNCTIONS.md) · [Українська](uk_FUNCTIONS.md) · [Suomi](fi_FUNCTIONS.md) · [Français](fr_FUNCTIONS.md) · [Čeština](cs_FUNCTIONS.md) · [Svenska](sv_FUNCTIONS.md) · [日本語](ja_FUNCTIONS.md)

</div>

# DemoScope — Referință funcții

Referință completă pentru cele 128 funcții de nivel superior din `DemoScope.user.js` v1.0.0 (nume, parametri, valoare returnată, responsabilitate). Înapoi la [README](../../README/ro_README.md).

Convenții: `—` înseamnă fără parametri; `void` înseamnă că funcția este apelată pentru efectele ei secundare.

## Localizare

| Funcție | Parametri | Returnează | Responsabilitate |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Cod SVG inline pentru steagul unei limbi; în lipsă, returnează o pictogramă de glob. |
| `getSavedLocale` | — | `string \| null` | Citește limba salvată a utilizatorului (`demoscopeLanguage`) din `localStorage`. |
| `getActiveLocale` | — | `string` | Stabilește limba activă: alegere salvată → Steam `?l=` → limba browserului/paginii → `en`. |
| `getLanguageBadge` | — | `string` | Numele de afișare propriu al limbii, de ex. „English version”, pentru insigna selectorului de limbă. |
| `tr` | `key: string` | `string` | Caută un text al interfeței pentru limba activă (rezervă: engleza, apoi cheia însăși). |
| `inviteText` | `key: string` | `string` | Aceeași căutare pentru tabelul de texte al paginii de invitații. |
| `settingText` | `key: string` | `string` | Aceeași căutare pentru tabelul de texte al dialogului de setări. |
| `getPresetLabel` | `name: string` | `string` | Eticheta localizată a unei presetări; compune combinații precum „Bot + Aim”. |
| `buildLanguageOptions` | — | `string (HTML)` | HTML-ul butoanelor de alegere a limbii, inclusiv intrarea „auto”. |
| `installLanguageSelector` | `root: HTMLElement` | `void` | Leagă selectorul de limbă de tip popover, îl poziționează, salvează alegerea și reîncarcă pagina. |

## Efecte sonore și dialogul de setări

| Funcție | Parametri | Returnează | Responsabilitate |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | Rândul „N intrări · ultima intrare: …” afișat în dialogul de setări. |
| `soundsEnabled` | — | `boolean` | Dacă sunetele interfeței sunt activate (`demoscopeSoundEffectsEnabled`, implicit activate). |
| `getSoundVolume` | — | `number (0–1)` | Volumul sunetului salvat (`demoscopeSoundEffectsVolume`, implicit 0,4). |
| `playUiSound` | `kind = "click"` | `void` | Sintetizează o scurtă secvență de tonuri cu Web Audio (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`); nu aruncă niciodată erori. |
| `readSettingsHotkey` | — | `string` | `KeyboardEvent.code` salvat care deschide dialogul de setări (implicit `F2`). |
| `formatHotkey` | `code: string` | `string` | Nume lizibil al unei taste (`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | Extrage codul tastei fizice, mapând aranjamentele non-latine înapoi la `KeyX`; `""` dacă nu poate fi folosit. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | Adevărat pentru tastele pe care DemoScope sau playerul le folosesc deja (Enter, Space, săgeți, `M`, `F`, `1`–`5`, …). |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Creează (o singură dată) și conectează dialogul de setări: sunet, volum, captarea comenzii rapide, limite ale istoricului, export/import/raport/îmbinare/ștergere, resetare. |
| `openSettingsDialog` | `opener = null` | `void` | Deschide dialogul cu valorile curente și reține elementul căruia i se returnează focusul. |
| `installSettingsUi` | — | `void` | Instalează ascultătorul global de taste în faza capture (deschidere/închidere dialog, reasignare) și evenimentele de sunet. |
| `installUiSoundEvents` | — | `void` | Ascultător de clicuri delegat care redă sunete de feedback pentru controalele DemoScope. |

## Copii de siguranță, rapoarte și limite ale istoricului

| Funcție | Parametri | Returnează | Responsabilitate |
|---|---|---|---|
| `exportLocalHistory` | — | `void` | Descarcă întregul istoric ca `demoscope-history-YYYY-MM-DD.json`. |
| `downloadHistoryFile` | `content: string, filename: string, mimeType: string` | `void` | Declanșează descărcarea unui fișier printr-un URL Blob temporar. |
| `collectHistoryReportRows` | `store: object` | `Array<{vodId, ts, summary, segment}>` | Aplatizează și elimină duplicatele din intrările istoricului, cele mai noi primele. |
| `exportReadableHistory` | — | `void` | Descarcă un raport HTML independent și localizat al istoricului. |
| `buildReadableHistoryReport` | `rows: Array, reportTitle: string, summaryNote = ""` | `string (HTML document)` | Construiește codul HTML al raportului, cu caracterele scăpate. |
| `setMergeReportStatus` | `statusElement: HTMLElement, message: string, state: string` | `void` | Actualizează linia de stare a instrumentului de îmbinare (`progress`, `success`, `warning`). |
| `exportCombinedHistoryReports` | `files: FileList \| File[], statusElement: HTMLElement, button: HTMLButtonElement` | `Promise<void>` | Validează multe copii JSON (≤ 5 MB fiecare, ≤ 100 MB în total), elimină intrările duplicate și descarcă un singur raport HTML combinat. |
| `isSafeHistoryKey` | `key: string` | `boolean` | Verificare pe listă albă a cheilor istoricului (blochează `__proto__`, `constructor` și cheile malformate). |
| `importLocalHistory` | `file: File` | `Promise<void>` | Validează o copie JSON, o îmbină în istoricul local (respectând limitele) și reîmprospătează interfața. |
| `readHistoryLimit` | `storageKey: string, allowedValues: number[], defaultValue: number` | `number` | Citește o limită numerică din `localStorage`, acceptând doar valorile permise. |
| `getHistoryPerKeyLimit` | — | `number` | Intrări păstrate pe cheie de clip/joc (10/20/30/50, implicit 30). |
| `getHistoryTotalLimit` | — | `number` | Numărul total de chei de clip/joc păstrate (100/200/300/500, implicit 300). |
| `readAdvancedPresetsOpen` | — | `boolean` | Dacă sertarul presetărilor extinse a fost lăsat deschis. |

## Numele contului și pagina de invitații

| Funcție | Parametri | Returnează | Responsabilitate |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Dacă numele contului Steam este ascuns în prezent. |
| `installAccountNameControl` | — | `void` | Adaugă un comutator în formă de ochi lângă linkul de deconectare și îl menține sincronizat printr-un `MutationObserver`. |
| `installInvitePage` | — | `boolean` | Reproiectează `/vacnet/createinvite`: aspect pe card, afișare/ascundere și copiere a linkului (Clipboard API cu rezervă `execCommand`), listă de cerințe, selector de limbă. Returnează `false` dacă lipsesc elementele așteptate. |

## Segmentul clipului și adaptorul playerului

| Funcție | Parametri | Returnează | Responsabilitate |
|---|---|---|---|
| `parseSegmentBounds` | — | `{startTime, endTime, duration} \| null` | Extrage `startTime`/`endTime` din scripturile inline ale paginii. |
| `formatSegmentTime` | `seconds: number` | `string` | Formatează secundele ca `m:ss.cc`. |
| `getVideoElement` | — | `HTMLVideoElement \| null` | Găsește elementul `<video>` al verificării. |
| `getVjsPlayer` | — | `Video.js player \| null` | Returnează playerul Video.js al paginii, dacă este disponibil și nu a fost distrus. |
| `createPlayerAdapter` | — | `adapter \| null` | API unificat peste Video.js / video HTML5: `currentTime`, `paused`, `pause`, `play`, `playbackRate(s)`, `muted`, `on`, `isFullscreen`, `requestFullscreen`, `exitFullscreen`. |
| `waitForPlayerAdapter` | `timeoutMs = 20000` | `Promise<adapter>` | Interoghează la fiecare 100 ms până apare un player; respinge la expirarea timpului. |
| `clampSegment` | `time: number, bounds: object` | `number` | Limitează un moment de timp la granițele clipului. |
| `segmentProgress` | `time: number, bounds: object` | `number (0–1)` | Poziția relativă în interiorul clipului. |
| `installCustomControls` | `player, bounds, refreshDisplay: {current: Function}` | `void` | Adaugă bara de derulare, afișajul de timp și indiciile de taste sub video. |
| `pauseLayoutMutations` | `run: Function` | `void` | Rulează o funcție de apel invers cât timp observatorii de aspect sunt suspendați (previne buclele de feedback). |
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | Adevărat când focusul este într-un câmp de introducere, textarea, select, buton, link sau element editabil. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | Eticheta unei opțiuni de viteză. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | Listă de `<option>` pentru selectorul de viteză (0,5–4×). |
| `readStoredShiftSpeed` | — | `number` | Viteza Shift salvată (implicit 2×). |
| `readStoredVerdictRandomizer` | — | `boolean` | Starea salvată a randomizatorului de verdicte (implicit dezactivat). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | Conectează gestionarea vitezei de redare, limitarea/pauza segmentului, ajutoarele pentru derulare/pas pe cadre/dezactivare sunet/ecran complet și comenzile rapide globale de la tastatură (`1`–`5`, săgeți, `,` `.`, Space, `M`, `F`, Shift). Closure-uri interne: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, ajutoare pentru bucla de desenare. |

## Verdicte presetate

| Funcție | Parametri | Returnează | Responsabilitate |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | Selectează „skip” în fiecare grup de verdict fără selecție. |
| `getSelectedVerdictState` | — | `object` | Valoarea curentă (`positive` / `negative` / `skip` / `null`) pentru `aimassist`, `wallhack`, `autobhop`, `bot`. |
| `detectActivePreset` | — | `string \| null` | Numele presetării care corespunde selecției curente. |
| `syncPresetButtons` | — | `string \| null` | Actualizează `aria-pressed` pe butoanele de presetări și insigna presetării extinse. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | Dă clic pe intrările radio ale unei presetări; cu randomizatorul activat, amestecă ordinea și așteaptă 200–600 ms între clicuri. Dezactivează butoanele de presetări cât rulează. |
| `normalizeVerdictLabels` | `root = document` | `void` | Elimină marcajul de evidențiere din etichetele de verdict. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Adaugă titluri localizate deasupra fiecărui grup de verdict. |

## Notificări, subsol și încărcare la trimitere

| Funcție | Parametri | Returnează | Responsabilitate |
|---|---|---|---|
| `hideSiteFooter` | — | `void` | Ascunde subsolul site-ului. |
| `showToast` | `message: string, type = "info", duration = 1800` | `void` | Afișează o notificare neblocantă ARIA-live. |
| `markSubmitPending` | — | `void` | Salvează în `sessionStorage` momentul trimiterii și id-ul clipului curent. |
| `isSubmitPending` | — | `boolean` | Dacă o trimitere așteaptă clipul următor. |
| `clearSubmitPending` | — | `void` | Șterge marcajele de trimitere în așteptare. |
| `showSubmitLoadingOverlay` | `message = tr("nextClip")` | `void` | Afișează stratul de încărcare pe toată pagina. |
| `hideSubmitLoadingOverlay` | — | `void` | Ascunde stratul și șterge starea de așteptare. |
| `bootSubmitLoadingIfPending` | — | `void` | Afișează din nou stratul la încărcarea paginii dacă există o trimitere în așteptare. |
| `isReviewPageReady` | `prevVod: string, startedAt: number` | `boolean` | Adevărat când interfața și conținutul media al clipului următor sunt gata. |
| `finishSubmitLoadingWhenReady` | — | `Promise<void>` | Așteaptă până la 30 s clipul următor, apoi ascunde stratul (notificare de eroare la expirarea timpului). |

## Stocarea istoricului local

| Funcție | Parametri | Returnează | Responsabilitate |
|---|---|---|---|
| `extractVodId` | — | `string` | Deduce id-ul clipului/jocului din URL-ul videoclipului. |
| `getGameKey` | — | `string` | Cheia istoricului pentru joc (`game::<id>`). |
| `getClipKey` | `bounds: object` | `string` | Cheia istoricului pentru un segment (`<id>:<start>:<end>`). |
| `normalizeHistoryEntry` | `entry: any` | `{ts, summary, segment} \| null` | Validează și curăță o intrare din istoric. |
| `readHistoryEntries` | `store: object, key: string` | `Array` | Intrări normalizate pentru o cheie. |
| `getGameHistoryEntries` | `store: object` | `Array` | Intrări pentru jocul curent (acceptă o cheie veche). |
| `getClipHistoryEntries` | `store: object, bounds: object` | `Array` | Intrări pentru segmentul curent. |
| `formatClipId` | `vodId: string` | `string` | Id numeric scurt de afișare (`#0000000`), obținut prin hash din id-ul clipului. |
| `formatRelativeTime` | `timestamp: number` | `string` | Timp relativ localizat (`Intl.RelativeTimeFormat`). |
| `readClipHistoryStore` | — | `object` | Încarcă obiectul istoricului din `localStorage` (`{}` la eroare). |
| `pruneHistoryStore` | `store: object` | `void` | Aplică limitele pe cheie și totale (cele mai vechi chei sunt eliminate primele). |
| `writeClipHistoryStore` | `store: object` | `boolean` | Taie și salvează; `false` la erori de cotă/stocare. |
| `summarizeCurrentVerdict` | — | `string` | Numele presetării selecției curente sau `mixed`. |
| `formatSummaryLabel` | `summary: string` | `string` | Etichetă localizată pentru un rezumat al istoricului. |
| `formatClockTime` | `seconds: number` | `string` | Format de ceas `m:ss` (sau `x.xs`). |
| `formatHumanSegment` | `bounds: object` | `string` | Interval de segment lizibil. |
| `formatGameLabel` | — | `string` | Etichetă localizată pentru jocul curent. |
| `historyEntryKey` | `entry: object` | `string` | Șir de identitate folosit pentru eliminarea duplicatelor. |
| `formatPriorStat` | `count: number, label: string` | `string` | Rândul „etichetă: N” din panoul istoricului. |
| `buildHistoryListItems` | `clipEntries: Array, gameEntries: Array, currentSegment: string` | `Array` | Îmbină intrările de clip/joc în elemente de afișat. |
| `renderHistoryItem` | `item: object` | `string (HTML)` | HTML-ul unui rând din istoric. |
| `escapeHtml` | `value: any` | `string` | Scapă caracterele `& < > " '`. |
| `buildClipHistoryPanel` | `bounds, gameEntries, clipEntries` | `string (HTML)` | HTML-ul panoului istoricului, inclusiv butonul regulilor de verificare. |
| `ensureClipHistoryPanel` | — | `void` | Creează containerul panoului dacă lipsește. |
| `ensureReviewRulesDialog` | — | `void` | Creează dialogul regulilor de verificare și leagă butoanele lui de deschidere/închidere. |
| `installLocalHistoryButton` | `panel: HTMLElement` | `void` | Leagă butonul „istoric local” (derulează la listă sau afișează o notificare când este gol). |
| `positionClipHistoryPanel` | — | `void` | Menține panoul ca prim element în `.verdicts-container`. |
| `renderClipHistory` | `bounds: object \| null` | `void` | Redesenează panoul istoricului pentru clipul curent. |
| `appendReviewHistory` | `bounds: object \| null` | `void` | Adaugă rezumatul verdictului curent la istoricul jocului și al clipului. |

## Fluxul de trimitere

| Funcție | Parametri | Returnează | Responsabilitate |
|---|---|---|---|
| `isLabelingMode` | — | `boolean` | Adevărat pe paginile care afișează cele patru grupuri de verdict. |
| `getProceedButton` | — | `HTMLButtonElement \| null` | Butonul nativ de trimitere, dacă este vizibil și activat. |
| `recordProceedHistoryIfLabeling` | — | `void` | Înregistrează istoricul o singură dată per trimitere (protejat împotriva reintrării). |
| `resetProceedArmed` | — | `void` | Dezarmează trimiterea în doi pași. |
| `refreshProceedButtonLabel` | — | `void` | Actualizează eticheta butonului/indiciul `Enter` și stilul stării armate. |
| `verdictLabelForField` | `field: string, selected: string` | `string \| null` | Mapează o selecție la `guilty_*` / `innocent_*` / `skip_*`. |
| `prepareVerdictFormForSubmit` | — | `boolean` | Construiește câmpurile ascunse `verdict_labels[]`; afișează o notificare de eroare și returnează `false` dacă vreun grup nu are selecție. |
| `isSafeSubmitTarget` | `form: HTMLFormElement` | `boolean` | Permite doar acțiuni de formular HTTPS de aceeași origine. |
| `restoreSubmitUi` | — | `void` | Restaurează butoanele după o trimitere eșuată. |
| `submitVerdictForm` | `{ recordHistory = false }` | `boolean` | Rulează verificarea de siguranță, afișează stratul de încărcare și trimite formularul. |
| `submitVerdictsDirect` | — | `boolean` | Pregătește etichetele și trimite. |
| `invokeProceedAction` | — | `boolean` | Handler pentru Enter/clic: prima apăsare armează, a doua trimite. |
| `installProceedShortcut` | — | `void` | Ascultător în faza capture pentru `Enter`/`NumpadEnter`. |
| `hookProceedButton` | — | `void` | Înlocuiește comportamentul la clic al butonului nativ de trimitere. |
| `installVerdictChangeReset` | — | `void` | Dezarmează trimiterea și resincronizează presetările când se schimbă un verdict. |
| `scheduleProceedFooterFix` | — | `void` | Apel amânat (`requestAnimationFrame`) al `fixProceedFooter`. |
| `scheduleVerdictLabelsFix` | — | `void` | Renormalizare amânată a etichetelor/titlurilor/valorilor implicite. |

## Aspect și pornire

| Funcție | Parametri | Returnează | Responsabilitate |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Construiește bara selectorului de viteză Shift. |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | HTML-ul unui buton de presetare. |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | HTML-ul grupurilor de presetări extinse. |
| `buildEnhancementBar` | — | `HTMLElement` | Construiește bara de verdict rapid: presetări, comutator de randomizare, sertar extins. |
| `positionShiftSpeedBar` | — | `void` | Menține bara de viteză înaintea listei de verdicte. |
| `positionEnhancementBar` | — | `void` | Menține bara de presetări înaintea butoanelor de trimitere. |
| `fixProceedFooter` | — | `void` | Rearanjează subsolul, barele și butonul de trimitere. |
| `enhanceLayout` | — | `void` | Aplică toate modificările de aspect și instalează interfața de setări. |
| `watchProceedFooter` | — | `void` | Observă `.verdicts-container` și programează corecturi ale subsolului. |
| `watchVerdictLabels` | — | `void` | Observă etichetele de verdict și programează renormalizarea. |
| `init` | — | `Promise<void>` | Punct de intrare: controlul numelui contului → pagina de invitații sau de verificare → aspect, observatori, comenzi rapide, îmbunătățiri ale playerului. |

### Nelistate mai sus

* **`blockSegmentLoopGuard`** (IIFE, rulează la încărcare): învelește `setInterval` pe pagină astfel încât cronometrul nativ de buclă a segmentului de 100 ms al site-ului să fie înlocuit cu o funcție goală; segmentul este gestionat de controalele proprii ale DemoScope.
* **Constante și tabele:** `SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC` (`PRESETS`: 21 de definiții).
