<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/docs/en_FUNCTIONS.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/docs/bg_FUNCTIONS.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/docs/hu_FUNCTIONS.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/docs/vi_FUNCTIONS.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/docs/el_FUNCTIONS.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/docs/da_FUNCTIONS.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/docs/id_FUNCTIONS.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/docs/es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/docs/es-419_FUNCTIONS.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/docs/it_FUNCTIONS.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/docs/zh-TW_FUNCTIONS.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/docs/zh-CN_FUNCTIONS.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/docs/ko_FUNCTIONS.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/docs/de_FUNCTIONS.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/docs/nl_FUNCTIONS.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/docs/no_FUNCTIONS.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/docs/pl_FUNCTIONS.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/docs/pt-PT_FUNCTIONS.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/docs/pt-BR_FUNCTIONS.md) · **Română** · [Русский](https://github.com/ebayybe/DemoScope/blob/main/docs/ru_FUNCTIONS.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/docs/th_FUNCTIONS.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/docs/tr_FUNCTIONS.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/docs/uk_FUNCTIONS.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/docs/fi_FUNCTIONS.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/docs/fr_FUNCTIONS.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/docs/cs_FUNCTIONS.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/docs/sv_FUNCTIONS.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/docs/ja_FUNCTIONS.md)

</div>

# DemoScope — Referință funcții

Referință completă pentru cele 217 funcții de nivel superior din `DemoScope.user.js` v1.4.0 (nume, parametri, valoare returnată, responsabilitate). Înapoi la [README](../README.md).

Convenții: `—` înseamnă fără parametri; `void` înseamnă că funcția este apelată pentru efectele ei secundare.

## Prezentarea comportamentului pentru utilizator

| Domeniu | Descriere |
|---|---|
| Pagini acceptate | Îmbunătățește pagina de bun venit VACNet (/vacnet), paginile de revizuire (/vacnet/clips), pagina de invitație (/vacnet/createinvite) și starea fără clipuri de pe pagina de revizuire. Nu modifică paginile fără legătură. |
| Tipuri de sarcini | Detectează formularul de revizuire oferit de VACNet. Formularul clasic (aim assist, wallhack, auto-bhop, bot) primește presetări și combinații extinse. Sarcina nouă cu o singură întrebare („Subiectul trișează dincolo de orice îndoială rezonabilă?”) folosește un aspect compact: trei verdicte etichetate pe tastele 1–3, un indicator de blocare cu timpul rămas al clipului și fără verdicte rapide sau combinații. |
| Limbă | Acceptă 29 de limbi Steam. Alegerea manuală salvată are prioritate; altfel, scriptul urmează parametrul Steam ?l=, apoi limba browserului/paginii. Alegerea unei limbi în DemoScope transmite parametrul ?l= corespunzător și către VACNet, pentru ca textele proprii VACNet să urmeze alegerea. Modul automat sincronizează parametrul de limbă Steam cu limba browserului. |
| Pagini de bun venit și invitații | Rearanjează ambele pagini, adaugă selectorul comun de limbă și ascunde numele contului cu un comutator în formă de ochi. Pagina de bun venit continuă la Enter sau Space când focalizarea nu este pe un control interactiv. Pe pagina de invitație, linkul poate fi ascuns, afișat și copiat, iar cerințele sunt explicate. Butonul × închide pagina; Enter înseamnă „Gata”, iar Esc acționează ca ×. |
| Revizuirea clipurilor | Adaugă presetări și combinații extinse de verdicte, un selector aleator dezactivat implicit, viteză Shift configurabilă, căutare limitată la segment, deplasare cadru cu cadru și comenzi rapide pentru redare. Categoriile de verdict au butonul „?” cu explicație localizată. Expresiile-cheie din butoane sunt evidențiate în paleta DemoScope. |
| Taste rapide | Fiecare comandă rapidă este o acțiune în registrul comun și poate fi reatribuită din Setări → Taste rapide. Conflictele sunt detectate separat pe pagini (invitațiile și revizuirile nu se suprapun) și arată acțiunea, grupul și descrierea care folosesc deja tasta; poți înlocui, schimba sau anula. Fiecare acțiune are buton de resetare, iar indiciile de pe pagină urmează atribuirile. |
| Trimitere | Enter sau Numpad Enter (implicit) activează „Continuă”. În formularul clasic, prima apăsare armează acțiunea, iar următoarea trimite verdictele. Pentru sarcina cu o singură întrebare, selectarea unui verdict afișează confirmarea VACNet, pe care o confirmi cu Enter. Esc (implicit) apasă „Anulează” când un verdict așteaptă confirmarea sau dezarmează prima apăsare. Space nu este comandă de trimitere. |
| Setări | F2 deschide implicit fereastra setărilor (poate fi schimbată din fereastra Taste rapide). Secțiuni: taste rapide, animații, efecte sonore și volum, istoric local (activare, limite, format de 12/24 de ore, copii de rezervă), vizibilitatea subsolului, diagnosticare și o resetare comună pentru sunet, taste rapide și animații. |
| Animații | Punctul indicator de lângă DemoScope poate fi animat. O fereastră separată oferă șase stiluri (puls, respirație, ondulare, bătăi de inimă, orbită, clipire), previzualizare live, trei viteze și comutator pornit/oprit. Dacă sistemul cere reducerea mișcării, animațiile pornesc dezactivate. |
| Istoric local | Salvează rezumatele verdictelor în localStorage-ul browserului; DemoScope nu le încarcă online. Istoricul poate fi dezactivat, importat, exportat în JSON sau HTML, combinat din copii JSON într-un singur raport HTML ori șters. Limite configurabile: 10/20/30/50 de intrări per cheie și 100/200/300/500 de chei în total. Dezactivarea oprește intrările noi, fără să șteargă datele existente. Istoricul se înregistrează doar pentru formularul clasic. |
| Coadă goală | Înlocuiește mesajul de coadă goală VACNet cu îndrumări localizate, data și ora primei afișări salvate local în browser și un selector de limbă. Textul despre 250 de demo-uri pe zi este informativ și se bazează pe comportamentul observat VACNet; DemoScope nu impune și nu ocolește această limită. |
| Subsol | Folosește un subsol DemoScope localizat. Pe paginile clipurilor poate afișa linkuri pentru feedback și raportare; setările pot ascunde fiecare link, linia de drepturi de autor sau întregul subsol. |
| Rezistență la erori | Fiecare etapă de inițializare rulează separat, astfel încât o eroare să nu le oprească pe celelalte. Elementele importante sunt căutate cu variante de rezervă. Dacă pagina nu mai este recunoscută, DemoScope se dezactivează pe acea pagină, restaurează aspectul VACNet și afișează o notificare scurtă. Setări → Diagnosticare permite copierea unui raport text (versiunea scriptului, elementele așteptate găsite, pașii eșuați și structura paginii) pentru raportarea problemelor. |

Scriptul nu modifică regulile VACNet de pe server privind invitațiile, procesarea verdictelor sau limitele de vizionare. Istoricul local, limba și preferințele interfeței rămân în profilul browserului.

## Localizare

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Cod SVG inline pentru steagul unei limbi; în lipsă, returnează o pictogramă de glob. |
| `getSavedLocale` | — | `string \| null` | Citește limba salvată a utilizatorului (`demoscopeLanguage`) din `localStorage`. |
| `getActiveLocale` | — | `string` | Stabilește limba activă: alegere salvată → Steam `?l=` → limba browserului/paginii → `en`. |
| `getLanguageBadge` | — | `string` | Numele de afișare propriu al limbii, de ex. „English version”, pentru insigna selectorului de limbă. |
| `getBrowserLocale` | — | `string \| null` | Detectează prima limbă acceptată a browserului, inclusiv variantele regionale. |
| `syncAutomaticLanguage` | — | `boolean` | În modul automat sincronizează ?l= cu limba browserului și navighează dacă diferă. |
| `getRenderedSteamLanguage` | — | `string \| null` | Citește limba Steam în care VACNet a afișat efectiv pagina, pe baza parametrului l= din adresele foilor de stil și ale scripturilor paginii. |
| `syncSelectedLanguage` | — | `boolean` | După alegerea manuală a unei limbi în DemoScope, reîncarcă pagina o singură dată cu parametrul ?l= corespunzător, astfel încât și textele VACNet să folosească acea limbă. Omite reîncărcarea dacă limba afișată este deja corectă și previne buclele de redirecționare. Returnează true dacă a avut loc navigarea. |
| `tr` | `key: string` | `string` | Caută un text al interfeței pentru limba activă (rezervă: engleza, apoi cheia însăși). |
| `inviteText` | `key: string` | `string` | Aceeași căutare pentru tabelul de texte al paginii de invitații. |
| `settingText` | `key: string` | `string` | Aceeași căutare pentru tabelul de texte al dialogului de setări. |
| `getPresetLabel` | `name: string` | `string` | Eticheta localizată a unei presetări; compune combinații precum „Bot + Aim”. |
| `buildLanguageOptions` | `{ activeLocale = getActiveLocale(), selectedLocale = null } = {}` | `string (HTML)` | HTML-ul butoanelor de alegere a limbii, inclusiv intrarea „auto”. |
| `installLanguageSelector` | `root: HTMLElement, onLocaleSelect: Function \| null = null` | `void` | Conectează și poziționează selectorul de limbă, salvează alegerea și reîncarcă pagina; un callback opțional poate gestiona selecția în locul acestuia. |
| `queueNoticeText` | `key: string, locale = getQueueNoticeLocale()` | `string` | Caută textul localizat pentru coada goală sau subsol. |

## Efecte sonore și dialogul de setări

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | Rândul „N intrări · ultima intrare: …” afișat în dialogul de setări. |
| `soundsEnabled` | — | `boolean` | Dacă sunetele interfeței sunt activate (`demoscopeSoundEffectsEnabled`, implicit activate). |
| `getSoundVolume` | — | `number (0–1)` | Volumul sunetului salvat (`demoscopeSoundEffectsVolume`, implicit 0,4). |
| `playUiSound` | `kind = "click"` | `void` | Sintetizează o scurtă secvență de tonuri cu Web Audio (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`); nu aruncă niciodată erori. |
| `readSettingsHotkey` | — | `string` | `KeyboardEvent.code` salvat care deschide dialogul de setări (implicit `F2`). |
| `formatHotkey` | `code: string` | `string` | Nume lizibil al unei taste (`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | Extrage codul tastei fizice, mapând aranjamentele non-latine înapoi la `KeyX`; `""` dacă nu poate fi folosit. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | Adevărat pentru tastele pe care DemoScope sau playerul le folosesc deja (Enter, Space, săgeți, `M`, `F`, `1`–`5`, …). |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Creează și conectează setările: sunete și volum, previzualizare, scurtătură, istoric local și limite, formatul orei, import/export JSON, export/combinare HTML, ștergerea istoricului, vizibilitatea subsolului și resetare. |
| `openSettingsDialog` | `opener = null` | `void` | Deschide dialogul cu valorile curente și reține elementul căruia i se returnează focusul. |
| `installSettingsUi` | — | `void` | Instalează ascultătorul global de taste în faza capture (deschidere/închidere dialog, reasignare) și evenimentele de sunet. |
| `installUiSoundEvents` | — | `void` | Ascultător de clicuri delegat care redă sunete de feedback pentru controalele DemoScope. |
| `ensureSettingsLayoutStyles` | — | `void` | Adaugă stilurile ferestrei de setări: secțiuni aliniate la stânga și rânduri cu indicatori de rezumat. |
| `refreshSettingsSummaries` | — | `void` | Actualizează indicatorii rezumatelor pentru comenzile rapide („Modificate: N” / „Implicite”) și animații („Stil · viteză” / „Dezactivate”). |
| `installExtraSettingsSections` | `settingsDialog: HTMLDialogElement` | `void` | Adaugă sus secțiunile Comenzi rapide și Animații, apoi Diagnosticare și Resetare jos. Ascunde vechiul bloc al comenzii rapide pentru setări, care se modifică acum din fereastra Comenzi rapide. |

## Copii de siguranță, rapoarte și limite ale istoricului

| Funktion | Parameter | Rückgabe | Aufgabe |
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

## Numele contului și pagina de invitații

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Dacă numele contului Steam este ascuns în prezent. |
| `installAccountNameControl` | — | `void` | Adaugă un comutator în formă de ochi lângă linkul de deconectare și îl menține sincronizat printr-un `MutationObserver`. |
| `installInvitePage` | — | `boolean` | Reproiectează `/vacnet/createinvite`: aspect pe card, afișare/ascundere și copiere a linkului (Clipboard API cu rezervă `execCommand`), listă de cerințe, selector de limbă. Returnează `false` dacă lipsesc elementele așteptate. |
| `installInviteExtras` | `card: HTMLElement, doneLink: HTMLElement \| null` | `void` | Adaugă butonul de închidere (×) și un ascultător în faza de capturare pentru acțiunile inviteDone (implicit Enter) și inviteClose (implicit Esc). Ignoră tastele când un buton, link, câmp, dialog sau lista de limbi are focalizarea. |
| `refreshInviteKeyLabels` | — | `void` | Redesenează eticheta „Gata” cu insigna tastei și indiciul pentru × conform atribuirilor curente. |
| `installWelcomePage` | — | `boolean` | Rearanjează pagina de întâmpinare, adaugă identitatea și selectorul de limbă; Enter/Space continuă; returnează false dacă lipsesc elemente. |

## Segmentul clipului și adaptorul playerului

| Funktion | Parameter | Rückgabe | Aufgabe |
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
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | Returnează true dacă focalizarea este într-un câmp, textarea, select sau text editabil. |
| `isPlayerShortcutBlocked` | `target: EventTarget` | `boolean` | Ca isShortcutBlocked, dar permite butoanele radio pentru verdict, deoarece focalizarea rămâne pe un astfel de buton după clic. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | Eticheta unei opțiuni de viteză. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | Listă de `<option>` pentru selectorul de viteză (0,5–4×). |
| `readStoredShiftSpeed` | — | `number` | Viteza Shift salvată (implicit 2×). |
| `readStoredVerdictRandomizer` | — | `boolean` | Starea salvată a randomizatorului de verdicte (implicit dezactivat). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | Conectează gestionarea vitezei de redare, limitarea/pauza segmentului, ajutoarele pentru derulare/pas pe cadre/dezactivare sunet/ecran complet și comenzile rapide globale de la tastatură (`1`–`5`, săgeți, `,` `.`, Space, `M`, `F`, Shift). Closure-uri interne: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, ajutoare pentru bucla de desenare. |

## Verdicte presetate

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | Selectează „skip” în fiecare grup de verdict fără selecție. |
| `getSelectedVerdictState` | — | `object` | Valoarea curentă (`positive` / `negative` / `skip` / `null`) pentru `aimassist`, `wallhack`, `autobhop`, `bot`. |
| `detectActivePreset` | — | `string \| null` | Numele presetării care corespunde selecției curente. |
| `syncPresetButtons` | — | `string \| null` | Actualizează `aria-pressed` pe butoanele de presetări și insigna presetării extinse. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | Dă clic pe intrările radio ale unei presetări; cu randomizatorul activat, amestecă ordinea și așteaptă 200–600 ms între clicuri. Dezactivează butoanele de presetări cât rulează. |
| `readAdvancedPresetsOpen` | — | `boolean` | Dacă sertarul presetărilor extinse a fost lăsat deschis. |
| `normalizeVerdictLabels` | `root = document` | `void` | Elimină marcajul de evidențiere din etichetele de verdict. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Adaugă titluri localizate deasupra fiecărui grup de verdict. |
| `ensureVerdictHelp` | `block: HTMLElement, titleEl: HTMLElement, title: string, field: string` | `void` | Creează butonul „?” și fereastra explicativă pentru un grup de verdicte folosind textul localizat DemoScope; formularea VACNet este doar o alternativă. |
| `closeVerdictHelp` | `except = null` | `void` | Închide toate ferestrele explicative deschise, cu excepția celei indicate. |
| `installVerdictHelpHandlers` | — | `void` | Instalează o singură dată gestionarea delegată a clicurilor, a clicurilor în afara ferestrei și a tastei Esc pentru aceste explicații. |

## Notificări, subsol și încărcare la trimitere

| Funktion | Parameter | Rückgabe | Aufgabe |
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

| Funktion | Parameter | Rückgabe | Aufgabe |
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
| `isLocalHistoryEnabled` | — | `boolean` | Citește dacă istoricul local este activ; implicit este activ. |
| `readTimeFormat` | — | `string` | Citește formatul orei: automat, 12 sau 24 de ore. |
| `formatQueueFirstSeen` | `timestamp: number, locale = getActiveLocale()` | `string` | Formatează momentul primei detectări conform limbii și formatului orei. |
| `getQueueNoticeLocale` | — | `string` | Returnează limba activă a notificării cozii goale. |
| `migrateEmptyQueueLanguage` | — | `boolean` | Mută preferința veche de limbă în setarea comună și sincronizează URL-ul. |
| `updateEmptyQueueTimestamp` | — | `void` | Actualizează ora primei detectări afișată. |

## Fluxul de trimitere

| Funktion | Parameter | Rückgabe | Aufgabe |
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
| `submitVerdictForm` | `{ recordHistory = false } = {}` | `boolean` | Rulează verificarea de siguranță, afișează stratul de încărcare și trimite formularul. |
| `submitVerdictsDirect` | — | `boolean` | Pregătește etichetele și trimite. |
| `invokeProceedAction` | — | `boolean` | Handler pentru Enter/clic: prima apăsare armează, a doua trimite. |
| `installProceedShortcut` | — | `void` | Ascultător în faza capture pentru `Enter`/`NumpadEnter`. |
| `invokeCancelAction` | — | `boolean` | Dezarmează prima apăsare a trimiterii în doi pași sau apasă butonul vizibil „Anulează”; returnează false dacă nu există nimic de anulat. |
| `refreshCancelButtonLabel` | — | `void` | Adaugă sau actualizează insigna tastei pe butonul „Anulează”. |
| `hookProceedButton` | — | `void` | Înlocuiește comportamentul la clic al butonului nativ de trimitere. |
| `installVerdictChangeReset` | — | `void` | Dezarmează trimiterea și resincronizează presetările când se schimbă un verdict. |
| `scheduleProceedFooterFix` | — | `void` | Apel amânat (`requestAnimationFrame`) al `fixProceedFooter`. |
| `scheduleVerdictLabelsFix` | — | `void` | Renormalizare amânată a etichetelor/titlurilor/valorilor implicite. |

## Registrul și remaparea comenzilor rapide

| Acțiune | Implicit | Grup | Funcție |
|---|---|---|---|
| `playPause` | `Space` | Playback | Întrerupe sau reia redarea clipului. |
| `mute` | `M` | Playback | Dezactivează sau reactivează sunetul. |
| `fullscreen` | `F` | Playback | Activează sau închide modul ecran complet. |
| `seekBack` / `seekForward` | `←` / `→` | Navigare | Sare 5 secunde înapoi sau înainte. |
| `frameBack` / `frameForward` | `,` / `.` | Navigare | Deplasează un cadru înapoi sau înainte. |
| `speedBoost` | `Shift` | Navigation | Redă mai repede cât timp tasta este ținută apăsată (singura acțiune care poate folosi Shift). |
| `quick1` … `quick5` | `1` … `5` | Verdicte | Formular clasic: presetări 1–5. Sarcina cu o singură întrebare: Cheating / Nu sunt sigur / Nu am văzut trișare (1–3). |
| `proceed` | `Enter` | Submission | Confirmă verdictul sau armează și trimite formularul clasic. |
| `cancel` | `Esc` | Submission | Apasă „Anulează” sau dezarmează prima apăsare Enter. |
| `inviteDone` | `Enter` | Invite page | Părăsește pagina de invitație (echivalent cu „Gata”). |
| `inviteClose` | `Esc` | Invite page | Are același efect ca butonul ×. |
| `settings` | `F2` | Interface | Deschide sau închide fereastra de setări. |

Atribuirile sunt salvate ca valori KeyboardEvent.code în demoscopeKeybindings (doar modificările față de valorile implicite; tasta setărilor are propria intrare). Modificatorii din stânga și dreapta contează ca o singură tastă, iar tastatura numerică oglindește rândul principal. Taste care nu pot fi atribuite: Tab, Ctrl, Alt, Meta, Caps Lock, ContextMenu, F5, F11, F12. Conflictele sunt delimitate de domeniile review, invite și global; tasta globală de setări intră în conflict cu toate.

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `fmt` | `template: string, vars = {}` | `string` | Înlocuiește marcajele {name} dintr-un șablon localizat. |
| `isModalOpen` | — | `boolean` | Este true cât timp un element dialog este deschis; comenzile rapide ale paginii rămân inactive în acest interval. |
| `normalizeKeyCode` | `code: string` | `string` | Unește modificatorii din stânga și din dreapta și asociază cifrele tastaturii numerice și NumpadEnter cu tastele corespunzătoare din rândul principal. |
| `formatKeyLabel` | `code: string` | `string` | Numele afișat al unei taste (ArrowLeft → ←, KeyM → M, Escape → Esc). |
| `loadKeyOverrides` | — | `object` | Citește și validează atribuirile salvate (memorate în cache; {} în caz de eroare). |
| `saveKeyOverrides` | `overrides: object` | `void` | Salvează atribuirile sau șterge intrarea când toate valorile sunt implicite. |
| `getBinding` | `id: string` | `string` | Tasta curentă a unei acțiuni; șir gol dacă nu este atribuită. |
| `setBinding` | `id: string, code: string` | `void` | Salvează o tastă pentru o acțiune (un cod gol anulează atribuirea); valorile implicite nu sunt salvate. |
| `resetAllBindings` | — | `void` | Restabilește toate atribuirile, inclusiv tasta de setări, la valorile implicite. |
| `findKeyConflict` | `id: string, code: string` | `object \| null` | Caută conflicte cu o tastă deja folosită în domeniul relevant. |
| `getActionForEvent` | `event: KeyboardEvent, scope = currentKeyScope()` | `string \| null` | Identifică acțiunea asociată unui eveniment de tastatură. |
| `keyScopeOf` | `id: string` | `string` | Domeniul unei acțiuni: review, invite sau global. |
| `keyScopesOverlap` | `a: string, b: string` | `boolean` | Este true dacă două domenii se pot suprapune (același domeniu sau unul este global). |
| `currentKeyScope` | — | `string` | invite pe pagina de invitație, review în celelalte cazuri. |
| `validateKeyForAction` | `id: string, code: string` | `string` | Returnează șir gol dacă tasta poate fi atribuită, reserved pentru taste de browser/navigare sau shift dacă Shift este ales pentru o acțiune care nu se activează la apăsare continuă. |
| `quickRangeLabel` | `count: number` | `string` | Eticheta tastelor pentru verdicte rapide (1–5 dacă nu au fost schimbate, altfel tastele atribuite). |
| `buildHintsInnerMarkup` | — | `string (HTML)` | Construiește indiciile de taste de sub videoclip pe baza atribuirilor curente. |
| `refreshKeyLabels` | — | `void` | Actualizează toate etichetele tastelor din pagină: indicii, insignele presetărilor și verdictelor, Continuă/Anulează/invitație și rezumatele setărilor. |
| `ensureDemoscopeDialogStyles` | — | `void` | Adaugă aspectul comun al ferestrelor Comenzi rapide și Animații. |
| `hkActionName` | `id: string` | `string` | Numele localizat al acțiunii. |
| `hkGroupName` | `group: string` | `string` | Numele localizat al grupului. |
| `hkActionDescription` | `id: string` | `string` | Descrierea localizată a acțiunii (verdictele rapide sunt explicate pentru ambele tipuri de sarcini). |
| `hkSetMessage` | `text: string, warn = false` | `void` | Setează linia de stare a ferestrei Comenzi rapide. |
| `hkCancelCapture` | — | `void` | Iese din modul de capturare a tastei. |
| `hkRowMarkup` | `action: object` | `string (HTML)` | Markup pentru un rând de acțiune, inclusiv panoul de conflict atunci când există unul. |
| `renderHotkeys` | — | `void` | Redenează întreaga fereastră și păstrează poziția de derulare. |
| `hkCommit` | `actionId: string, code: string, mode = "replace"` | `void` | Atribuie o tastă; replace eliberează acțiunea cealaltă, swap schimbă tastele între ele. |
| `hkRequestAssign` | `actionId: string, code: string` | `void` | Atribuie direct o tastă sau deschide panoul de conflict (Înlocuiește / Schimbă / Anulează) dacă tasta este deja folosită. |
| `ensureHotkeysDialog` | — | `HTMLDialogElement` | Creează fereastra Comenzi rapide și ascultătorul de tastatură în faza de capturare (Esc poate fi atribuită și nu închide fereastra în timpul capturării). |
| `openHotkeysDialog` | — | `void` | Deschide fereastra Comenzi rapide. |

## Animații

Șase stiluri pentru punctul indicator (pulse, breathe, ripple, heartbeat, orbit, blink), trei viteze (0,6× / 1× / 1,7×) și un comutator, salvate în demoscopeAnimStyle, demoscopeAnimSpeed și demoscopeAnimEnabled. Stilul activ este setat prin data-ds-anim pe html (off când este dezactivat); foaia de stil controlează punctul și previzualizările.

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `readStorage` | `key: string` | `string \| null` | Citire sigură din localStorage. |
| `writeStorage` | `key: string, value: string \| null` | `void` | Scriere sigură în localStorage (null șterge cheia). |
| `animEnabled` | — | `boolean` | Starea salvată de activare/dezactivare; implicit dezactivată dacă sistemul solicită reducerea mișcării. |
| `animStyle` | — | `string` | Stilul salvat (implicit pulse). |
| `animSpeedKey` | — | `string` | Viteza salvată (slow / normal / fast; implicit normal). |
| `ensureAnimationStyles` | — | `void` | Adaugă cadrele-cheie și regulile comune punctului animat și punctelor de previzualizare. |
| `applyAnimationSettings` | — | `void` | Aplică stilul, viteza și starea pe html, apoi actualizează rezumatul setărilor. |
| `ensureAnimationsDialog` | — | `HTMLDialogElement` | Creează fereastra Animații cu comutator, viteză, carduri de stil cu previzualizare live și resetare. |
| `openAnimationsDialog` | — | `void` | Deschide fereastra Animații. |
| `ensureUiPolishStyles` | — | `void` | Adaugă bare de derulare întunecate și subțiri și color-scheme: dark pentru ferestre și lista verdictelor (altfel Chromium ar afișa o bară deschisă). |

## Sarcina cu o singură întrebare

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `isCheatingMode` | — | `boolean` | Este true când pagina afișează formularul cu o singură întrebare (#verdictbuttons_cheating). |
| `selectCheatingVerdict` | `kind: string` | `void` | Apasă butonul radio Cheating / Nu sunt sigur / Nu am văzut trișare (positive / skip / negative). Dacă opțiunea este blocată, redă un sunet de eroare și scutură cardul de blocare. |
| `localizeCheatingVerdicts` | — | `void` | Rescrie cele trei etichete în limba DemoScope și desenează cu CSS insignele tastelor, astfel încât confirmarea VACNet să nu includă cifra tastei. Pregătește și cardul de blocare. |
| `updateCheatingLock` | — | `void` | Actualizează cardul de blocare („celelalte două verdicte se deblochează la finalul clipului · m:ss rămase”) și bara de progres. Îl ascunde când opțiunile se deblochează sau este ales un verdict. |
| `startCheatingLockWatcher` | — | `void` | Pornește temporizatorul de 250 ms care apelează updateCheatingLock. |

## Rezistență și diagnosticare

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `recordFailure` | `step: string, error: any` | `void` | Înregistrează un pas eșuat (într-o listă limitată) pentru raportul de diagnosticare. |
| `safeStep` | `step: string, fn: Function, fallback?: any` | `any` | Rulează un pas de configurare; la eroare îl înregistrează și returnează valoarea alternativă, astfel încât pașii următori să continue. |
| `getVideoContainer` | — | `HTMLElement \| null` | Găsește containerul video sau, ca alternativă, părintele playerului ori al elementului video. |
| `getVerdictContainer` | — | `HTMLElement \| null` | Găsește containerul verdictelor sau părintele primului bloc de verdict. |
| `getSubmitArea` | — | `HTMLElement \| null` | Găsește zona de trimitere/confirmare (#submitbuttons, .submitbuttons sau părintele butonului de trimitere). |
| `hasVerdictForm` | — | `boolean` | Este true dacă există cel puțin un buton radio pentru verdict. |
| `removeEnhancements` | — | `void` | Elimină panourile, clasele și modificările de subsol ale DemoScope și restaurează subsolul VACNet. |
| `disableDemoScope` | `reason: string` | `void` | Dezactivează DemoScope pe această pagină: anulează modificările, păstrează doar fereastra setărilor și afișează un mesaj o dată pentru fiecare motiv în sesiunea curentă. |
| `isOwnNode` | `el: Element` | `boolean` | Este true pentru elementele create de DemoScope (excluse din raportul structurii). |
| `elementSignature` | `el: Element` | `string` | Semnătura tag#id.class[…] folosită în raportul structurii; nu conține text. |
| `skeletonOf` | `root: Element, maxDepth = 7, maxNodes = 170` | `string` | Arbore compact, indentat, de etichete, ID-uri și clase (elementele-soră identice sunt grupate ca ×N). |
| `captureOriginalSkeleton` | — | `void` | Înregistrează structura paginii înainte ca DemoScope să o modifice. |
| `buildDiagnosticsReport` | — | `string` | Generează raportul cu versiune, pagină, limbă și browser, tipul sarcinii, 22 de verificări ale elementelor (ok / MISSING), pași eșuați și structura înainte/după DemoScope. Nu include textul paginii sau date de cont. |
| `fallbackCopyText` | `text: string` | `boolean` | Copiază textul printr-o zonă temporară când Clipboard API nu este disponibilă. |
| `copyDiagnostics` | `statusEl: HTMLElement, textarea: HTMLTextAreaElement` | `Promise<void>` | Copiază raportul; dacă nu reușește, afișează textul într-un câmp selectabil. |

## Aspect și pornire

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Construiește bara selectorului de viteză Shift. |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | HTML-ul unui buton de presetare. |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | HTML-ul grupurilor de presetări extinse. |
| `buildEnhancementBar` | — | `HTMLElement` | Construiește bara de verdict rapid: presetări, comutator de randomizare, sertar extins. |
| `positionShiftSpeedBar` | — | `void` | Menține bara de viteză înaintea listei de verdicte. |
| `positionEnhancementBar` | — | `void` | Menține bara de presetări înaintea butoanelor de trimitere. |
| `fixProceedFooter` | — | `void` | Rearanjează subsolul, barele și butonul de trimitere. |
| `enhanceLayout` | — | `void` | Aplică toate modificările de aspect și instalează interfața de setări. |
| `ensureReviewStructure` | — | `void` | Normalizează markup-ul VACNet: încadrează blocurile verdictelor în .verdicts-container-inner, mută #submitbuttons în container și reflectă contorul clipurilor în insigna antetului. Funcționează cu markup-ul vechi și cel reproiectat. |
| `watchProceedFooter` | — | `void` | Observă `.verdicts-container` și programează corecturi ale subsolului. |
| `watchVerdictLabels` | — | `void` | Observă etichetele de verdict și programează renormalizarea. |
| `readFooterPreference` | `storageKey: string` | `boolean` | Citește din localStorage preferința de vizibilitate a subsolului. |
| `saveFooterPreference` | `storageKey: string, hidden: boolean` | `void` | Salvează preferința de vizibilitate a subsolului. |
| `applyFooterPreferences` | `footer: HTMLElement \| null = document.querySelector(".demoscope-custom-footer")` | `void` | `void` |
| `installDemoScopeFooter` | `withClipLinks: boolean, locale = getActiveLocale(), showFeedback = true` | `HTMLElement` | Creează sau actualizează subsolul localizat, cu linkuri opționale, apoi aplică preferințele. |
| `installEmptyQueueNotice` | — | `boolean` | Înlocuiește mesajul cozii goale cu instrucțiuni localizate, oră, selector de limbă și subsol. |
| `init` | — | `Promise<void>` | Punct de intrare: controlul numelui contului → pagina de invitații sau de verificare → aspect, observatori, comenzi rapide, îmbunătățiri ale playerului. |

installWelcomePage și installInvitePage returnează false dacă lipsesc elemente necesare ale paginii VACNet. installEmptyQueueNotice returnează false dacă pagina nu afișează starea de coadă goală.

### Alte elemente nelistate mai sus

* **blockSegmentLoopGuard** (IIFE, rulează la încărcare): înlocuiește cu o funcție fără efect temporizatorul nativ de 100 ms al site-ului pentru ciclul segmentului; comenzile DemoScope gestionează segmentul.
* **Constante și tabele:** SUPPORTED_LOCALES, FLAG_SVG, UI_TEXT_ROWS, INVITE_TEXT_ROWS, SETTINGS_TEXT_ROWS, PRESETS, PRESET_KEYS, PRESET_TONES, ADVANCED_PRESET_GROUPS, SHIFT_SPEEDS, FRAME_STEP și ARROW_JUMP_SEC (21 de definiții PRESETS); adăugate după v1.0.0: KEY_ACTIONS, KEY_GROUPS, KEY_ACTION_BY_ID, KEY_ACTION_SCOPE, RESERVED_KEY_CODES, CHEATING_KEYS, VERDICT_SECTION_TITLES, VERDICT_SECTION_HELP, ANIM_STYLES și ANIM_SPEEDS.
* **Starea modulului:** diag (pași eșuați, motivul dezactivării și structura inițială a paginii), hkState (starea ferestrei Comenzi rapide) și constanta SCRIPT_VERSION folosită în raportul de diagnosticare.
* **Texte:** toate textele vizibile sunt în tabelele localizate de mai sus; ferestrele adăugate în v1.2.0–v1.4.0 sunt traduse în toate cele 29 de limbi.

## Chei de stocare

| Cheie | Unde | Scop |
|---|---|---|
| `demoscopeLanguage`, `demoscopeLanguageAuto` | `localStorage` | Limba aleasă / modul automat. |
| `demoscopeKeybindings` | `localStorage` | Comenzi rapide diferite de valorile implicite (JSON). |
| `demoscopeSettingsHotkey` | `localStorage` | Tasta care deschide setările (none dacă a fost eliminată). |
| `demoscopeAnimEnabled`, `demoscopeAnimStyle`, `demoscopeAnimSpeed` | `localStorage` | Setările animației indicatorului. |
| `demoscopeSoundEffectsEnabled`, `demoscopeSoundEffectsVolume` | `localStorage` | Setările sunetului. |
| `demoscopeClipHistory` și cheile pentru limitele/formatul istoricului | `localStorage` | Istoric local al revizuirilor și setările sale. |
| `demoscopeSubmitPending`, `demoscopeSubmitPrevVod`, `demoscopeLangSyncTried`, `demoscopeDisabledNotice` | `sessionStorage` | Starea de încărcare a trimiterii, protecția sincronizării limbii și notificarea unică de dezactivare. |




