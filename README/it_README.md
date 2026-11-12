<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/README/README.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/README/bg_README.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/README/hu_README.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/README/vi_README.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/README/el_README.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/README/da_README.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/README/id_README.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/README/es-ES_README.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/README/es-419_README.md) · **Italiano** · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/README/zh-TW_README.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/README/zh-CN_README.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/README/ko_README.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/README/de_README.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/README/nl_README.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/README/no_README.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/README/pl_README.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-PT_README.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-BR_README.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/README/ro_README.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/README/ru_README.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/README/th_README.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/README/tr_README.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/README/uk_README.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/README/fi_README.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/README/fr_README.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/README/cs_README.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/README/sv_README.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/README/ja_README.md)

</div>

<br>

<div align="center">

# DemoScope

**Strumenti per la revisione di CS2 VACNet, progettati per la tastiera.**<br>
Preset dei verdetti · player che rispetta i limiti della clip · tasti rimappabili · cronologia locale privata · 29 lingue.

<br>

[![Versione](https://img.shields.io/badge/version-v1.2.0-3b82f6?style=flat-square)](https://github.com/ebayybe/DemoScope/releases)
[![Licenza](https://img.shields.io/badge/license-GPL--3.0-22c55e?style=flat-square)](https://github.com/ebayybe/DemoScope/blob/main/LICENSE)
[![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-f59e0b?style=flat-square)](#installazione)
[![Lingue](https://img.shields.io/badge/languages-29-8b5cf6?style=flat-square)](#lingue)
[![Privacy](https://img.shields.io/badge/telemetry-none-64748b?style=flat-square)](#privacy)

<br>

[**⬇ Installa DemoScope**](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js)

[Funzionalità](#funzionalità) · [Installazione](#installazione) · [Scorciatoie](#scorciatoie-da-tastiera) · [Personalizzazione](#personalizzazione) · [Documentazione](https://github.com/ebayybe/DemoScope/blob/main/docs/it_FUNCTIONS.md) · [Changelog](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/it_CHANGELOG.md)

</div>

<br>

## Schermate

<table>
  <tr>
    <td align="center" width="25%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png" alt="Schermata di benvenuto di DemoScope"></a><br><sub><b>Schermata di benvenuto</b></sub></td>
    <td align="center" width="25%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png" alt="Interfaccia principale di DemoScope"></a><br><sub><b>Interfaccia principale</b></sub></td>
    <td align="center" width="25%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/2_DemoScope.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/2_DemoScope.png" alt="Interfaccia di revisione delle clip"></a><br><sub><b>Interfaccia di revisione delle clip</b></sub></td>
    <td align="center" width="25%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png" alt="Pagina di invito di DemoScope"></a><br><sub><b>Invita un amico</b></sub></td>
  </tr>
</table>

## Panoramica

DemoScope migliora le pagine di revisione Counter-Strike VACNet (`counter-strike.net/vacnet`). Invece di fare clic sul modulo dei verdetti per ogni breve clip, puoi usare la tastiera: preset dei verdetti, barra di ricerca limitata al segmento esaminato, avanzamento per fotogrammi, accelerazione temporanea, invio in due passaggi e cronologia privata dei tuoi verdetti. Supporta entrambi i moduli VACNet attuali (quello classico con quattro domande e la nuova attività con una domanda) e resiste alle modifiche della pagina. Tutto viene eseguito localmente nel browser.

## Funzionalità

| | |
|---|---|
| **Flusso di revisione** | 5 preset rapidi con `1`–`5` e altre 15 combinazioni estese, randomizzatore di verdetti opzionale (disattivato per impostazione predefinita) e invio sicuro in due passaggi: `Enter` prepara, una seconda pressione invia. `Esc` annulla. |
| **Entrambi i tipi di attività** | Rileva il modulo classico (assistenza alla mira, wallhack, auto-bhop, bot) e l'attività con una domanda (“Is the Subject cheating beyond a reasonable doubt?”). Quest'ultima usa un layout compatto, verdetti etichettati su `1`–`3` e un indicatore di blocco che fa il conto alla rovescia fino alla fine della clip. |
| **Player consapevole della clip** | Barra di ricerca e tempo limitati all'inizio e alla fine della clip, salti di ±5 s, avanzamento di 1/64 s per fotogramma, accelerazione tenendo premuto `Shift` (0,5×–4×), scorciatoie per silenziamento e schermo intero. |
| **Scorciatoie personalizzabili** | Riassegna una qualsiasi delle 18 azioni in una finestra dedicata. Prima di sostituire un tasto vengono spiegati i conflitti (azione, gruppo e funzione); tutti i suggerimenti dei tasti seguono le tue assegnazioni. |
| **Animazioni** | Finestra con anteprima in tempo reale, sei stili di indicatore, tre velocità e interruttore. Rispetta per impostazione predefinita l'opzione di sistema “riduci movimento”. |
| **Verdetti chiari** | Un pulsante “?” accanto a ogni categoria spiega il significato; le frasi chiave vengono evidenziate per non perdere di vista “not”. |
| **Cronologia locale privata** | Cronologia per clip e partita in `localStorage`, importazione/esportazione JSON, report HTML e unione di più backup in un unico report. |
| **Pagina di invito** | Pagina `/vacnet/createinvite` ridisegnata, con mostra/nascondi, copia con un clic, riepilogo dei requisiti, pulsante di chiusura e scorciatoie `Enter` / `Esc`. |
| **29 lingue** | Segue prima la lingua scelta, poi l'impostazione Steam `?l=` e infine quella del browser. Scegliere una lingua in DemoScope cambia anche il testo di VACNet. |
| **Effetti sonori** | Segnali sintetizzati con Web Audio, controllo del volume, anteprima e interruttore. |
| **Pronto ai redesign** | I passaggi di configurazione sono isolati, gli elementi chiave hanno ricerche alternative e, se la pagina non è più riconoscibile, DemoScope si disattiva senza modificare VACNet. Un clic copia un report diagnostico per segnalare problemi. |

## Installazione

1. Installa un gestore di userscript come [Tampermonkey](https://www.tampermonkey.net/) o [Violentmonkey](https://violentmonkey.github.io/). Lo script usa `GM_addStyle` e `unsafeWindow`.
2. [**Installa DemoScope**](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js) e conferma l'installazione nel gestore.
3. Accedi a Steam e apri [counter-strike.net/vacnet](https://www.counter-strike.net/vacnet/).
4. Apri una clip di revisione. DemoScope si carica automaticamente (la pagina `/vacnet/join` è esclusa).

Gli aggiornamenti arrivano tramite il gestore di userscript. DemoScope funziona nei browser basati su Chromium e in Firefox.

## Scorciatoie da tastiera

Le scorciatoie funzionano nelle pagine di revisione quando il focus non è in un campo modificabile o in un altro controllo interattivo. **Ogni tasto qui sotto può essere modificato** in **Settings → Hotkeys**.

| Tasto | Azione |
|---|---|
| `1` … `5` | Modulo classico: applica un preset (1 bot + mira + wallhack; 2 mira + wallhack; 3 rage; 4 giocatore pulito; 5 incerto). |
| `1` `2` `3` | Attività con una domanda: Cheating / Not sure / No cheats seen. |
| `Enter` | Conferma. Nel modulo classico: premi una volta per preparare il pulsante, di nuovo per inviare. |
| `Esc` | Annulla il verdetto in attesa di conferma o disattiva la prima pressione di `Enter`. |
| `Shift` (tieni premuto) | Accelerazione (0,5×–4×, 2× predefinito, selezionabile nella pagina). |
| `←` `→` | Salta 5 secondi indietro / avanti. |
| `,` `.` | Avanza o torna indietro di un fotogramma (1/64 s). |
| `Space` | Riproduci / pausa. |
| `M` / `F` | Silenzia / schermo intero (anche un doppio clic sul video attiva/disattiva lo schermo intero). |
| `F2` | Apri la finestra delle impostazioni. |
| `Enter` / `Esc` *(pagina di invito)* | Fatto / chiudi. |

## Personalizzazione

Apri le impostazioni con `F2`. Le sezioni sono ordinate da quelle più usate a quelle meno usate:

- **Hotkeys**: finestra dedicata con tutte le azioni raggruppate per scopo, ripristino per singola azione, “Reset all” e gestione dei conflitti con **Replace**, **Swap** o **Cancel**. `Esc` può essere assegnato come qualsiasi altro tasto.
- **Animations**: scegli stile (pulse, breathe, ripple, heartbeat, orbit, blink), velocità o disattiva le animazioni. Ogni scheda mostra un'anteprima dal vivo.
- **Sound effects**: attivazione/disattivazione, volume (regolabile anche con la rotellina del mouse) e pulsante di prova.
- **Local history**: attivazione/disattivazione, limiti (10/20/30/50 voci per chiave, 100/200/300/500 chiavi), formato orario 12/24 ore, backup JSON e report HTML.
- **Footer**: nascondi il link per il feedback, quello del report, la riga del copyright o l'intero piè di pagina.
- **Diagnostics**: copia un report da allegare alle segnalazioni (vedi [Segnalare un problema](#segnalare-un-problema)).
- **Reset**: un pulsante ripristina le impostazioni predefinite di audio, scorciatoie e animazioni. La cronologia viene mantenuta.

## Lingue

DemoScope è disponibile in 29 lingue: bulgaro, cinese (semplificato e tradizionale), ceco, danese, olandese, inglese, finlandese, francese, tedesco, greco, ungherese, indonesiano, italiano, giapponese, coreano, norvegese, polacco, portoghese (Portogallo e Brasile), rumeno, russo, spagnolo (Spagna e America Latina), svedese, thailandese, turco, ucraino e vietnamita. Puoi cambiare lingua in qualsiasi momento dal selettore nella pagina.

## Segnalare un problema

Valve può modificare le pagine VACNet senza preavviso. Se qualcosa smette di funzionare:

1. Premi `F2`, apri **Diagnostics** e fai clic su **Copy diagnostics**.
2. Incolla il testo in una nuova [segnalazione](https://github.com/ebayybe/DemoScope/issues), allegando uno screenshot se possibile.

Il report contiene versione dello script, orario, lingua e user-agent del browser, elementi della pagina trovati, passaggi di configurazione non riusciti e struttura della pagina (solo tag, ID e classi). Non contiene testo della pagina, nome dell'account né cronologia. Se la pagina non è più riconoscibile, DemoScope si disattiva lì e lo segnala; VACNet continua a funzionare normalmente.

## Domande frequenti

<details>
<summary><b>DemoScope dice che si è disattivato su questa pagina. Che cosa è successo?</b></summary>

La pagina VACNet non corrisponde più a ciò che DemoScope si aspetta, quindi lo script si è fatto da parte invece di lasciare un'interfaccia a metà. Copia la diagnostica (vedi sopra) e apri una segnalazione; di solito l'aggiornamento arriva presto.
</details>

<details>
<summary><b>Il testo dei verdetti VACNet è in una lingua diversa da quella di DemoScope.</b></summary>

Scegliendo una lingua in DemoScope, VACNet viene richiesta in quella lingua tramite il parametro Steam `?l=`. Se VACNet non ha una traduzione disponibile, usa la propria lingua predefinita, mentre le etichette di DemoScope restano nella lingua scelta.
</details>

<details>
<summary><b>DemoScope sceglie i verdetti al posto mio?</b></summary>

No. I preset fanno clic solo sui pulsanti di verdetto che hai scelto e sei sempre tu a confermare l'invio. Esamina personalmente ogni clip e rispetta le regole del programma.
</details>

<details>
<summary><b>La cronologia viene registrata per l'attività con una domanda?</b></summary>

Non ancora. Al momento la cronologia locale viene registrata solo per il modulo classico con quattro domande.
</details>

<details>
<summary><b>Come ripristino i tasti predefiniti?</b></summary>

Usa l'icona di ripristino accanto a un tasto modificato, **Reset all** nella finestra Hotkeys oppure **Reset** nelle impostazioni; quest'ultima opzione ripristina anche audio e animazioni.
</details>

## Architettura

DemoScope è un'unica funzione auto-invocante (`@run-at document-start`, `@noframes`). `init()` determina il tipo di pagina, verifica che sia riconoscibile e collega i moduli qui sotto. Il riferimento completo di tutte le 217 funzioni di primo livello, compresi parametri, valori restituiti e chiavi di archiviazione, si trova in [it_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/it_FUNCTIONS.md).

<details>
<summary><b>Panoramica dei moduli</b></summary>

| Modulo | Responsabilità | Funzioni principali |
|---|---|---|
| `Localization` | Lingua UI, ricerca delle stringhe, bandiere, selettore della lingua e sincronizzazione di `?l=` con VACNet | `getActiveLocale`, `tr`, `settingText`, `syncSelectedLanguage`, `installLanguageSelector` |
| `Segment & player` | Legge i limiti della clip, adatta Video.js/HTML5 e disattiva il ciclo di segmenti nativo del sito | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | Barra di ricerca, suggerimenti dei tasti, accelerazione, avanzamento frame e scorciatoie | `installCustomControls`, `installPlayerEnhancements` |
| `Hotkeys` | Registro azioni, associazioni, rilevamento conflitti e finestra Hotkeys | `getBinding`, `findKeyConflict`, `getActionForEvent`, `ensureHotkeysDialog` |
| `Verdict presets` | Tabella dei preset, stato di selezione, applicazione casuale | `applyPreset`, `detectActivePreset`, `buildEnhancementBar` |
| `Single-question task` | Etichette, indicatore di blocco e tasti per il nuovo modulo | `isCheatingMode`, `selectCheatingVerdict`, `updateCheatingLock` |
| `Submit flow` | Conferma in due passaggi, annullamento, `verdict_labels[]`, controllo same-origin, livello di caricamento | `invokeProceedAction`, `invokeCancelAction`, `submitVerdictForm`, `finishSubmitLoadingWhenReady` |
| `Local history` | Cronologia per clip e partita, backup e report | `appendReviewHistory`, `importLocalHistory`, `exportCombinedHistoryReports` |
| `Settings & animations` | Finestra impostazioni e sottofinestre, suoni, animazioni degli indicatori | `ensureSettingsDialog`, `installExtraSettingsSections`, `ensureAnimationsDialog`, `playUiSound` |
| `Invite page` | Pagina ridisegnata, pulsante di chiusura e scorciatoie | `installInvitePage`, `installInviteExtras` |
| `Resilience` | Passaggi isolati, ricerche alternative, spegnimento, diagnostica | `safeStep`, `disableDemoScope`, `buildDiagnosticsReport` |
| `Bootstrap` | Punto di ingresso | `init`, `enhanceLayout` |

</details>

## Privacy

DemoScope non invia telemetria né carica impostazioni o cronologia. Quando invii un verdetto, VACNet lo riceve tramite il normale modulo del sito. Impostazioni e cronologia restano nel browser: in `localStorage` (chiavi che iniziano con `demoscope`) e `sessionStorage`. Usa **Settings → Local history → Clear history** per cancellare la cronologia. Il report diagnostico viene solo copiato negli appunti; decidi tu se condividerlo.

## Esclusione di responsabilità

DemoScope è un progetto comunitario non ufficiale, non affiliato a Valve Corporation né approvato da essa. Non decide mai un verdetto al posto tuo. Esamina personalmente ogni clip e rispetta le regole del programma. Usalo a tuo rischio.

## Licenza

Rilasciato con licenza [GNU GPL v3.0](https://github.com/ebayybe/DemoScope/blob/main/LICENSE).

## Ringraziamenti

- **Idea iniziale e interfaccia di base:** [*CS2 VACNet Review — Player & Layout Enhancements*](https://greasyfork.org/ru/scripts/591778-cs2-vacnet-review-player-layout-enhancements) di skinsales / goodvibes (MIT).
- **Concetto correlato e fork in lingua russa:** [*VACLens RU — CS2 Review Assistant*](https://greasyfork.org/ru/scripts/592414-vaclens-ru-cs2-review-assistant) di authorless (MIT).
- **Revisione dell’architettura, framework riutilizzabile, supporto a 29 lingue e preset di verdetto personalizzati:** ebayybe.
