<div align="center">

[English](../README.md) · [Български](bg_README.md) · [Magyar](hu_README.md) · [Tiếng Việt](vi_README.md) · [Ελληνικά](el_README.md) · [Dansk](da_README.md) · [Bahasa Indonesia](id_README.md) · [Español (España)](es-ES_README.md) · [Español (Latinoamérica)](es-419_README.md) · **Italiano** · [繁體中文](zh-TW_README.md) · [简体中文](zh-CN_README.md) · [한국어](ko_README.md) · [Deutsch](de_README.md) · [Nederlands](nl_README.md) · [Norsk](no_README.md) · [Polski](pl_README.md) · [Português (Portugal)](pt-PT_README.md) · [Português (Brasil)](pt-BR_README.md) · [Română](ro_README.md) · [Русский](ru_README.md) · [ไทย](th_README.md) · [Türkçe](tr_README.md) · [Українська](uk_README.md) · [Suomi](fi_README.md) · [Français](fr_README.md) · [Čeština](cs_README.md) · [Svenska](sv_README.md) · [日本語](ja_README.md)

# DemoScope — CS2 Review Toolkit

![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-orange)

**Toolkit userscript incentrato sulla tastiera per i revisori di CS2 VACNet: verdetti predefiniti, lettore video con gestione del segmento, miglioramenti alla pagina inviti, effetti sonori e cronologia locale privata — in 29 lingue.**

</div>

## Panoramica

DemoScope potenzia le pagine di revisione di Counter-Strike VACNet (`counter-strike.net/vacnet`). Invece di cliccare su quattro gruppi di verdetto (aim assist, wallhack, auto-bhop, bot) per ogni clip breve, ottieni un flusso di lavoro basato sulla tastiera: verdetti predefiniti, una barra di ricerca limitata al segmento revisionato, avanzamento fotogramma per fotogramma, accelerazione temporanea, conferma di invio in due passaggi e una cronologia privata dei tuoi verdetti. Tutto viene eseguito localmente nel browser.

## Funzionalità principali

- **Verdetti predefiniti** – 5 preset rapidi sui tasti `1`–`5` più 15 combinazioni estese (aim, wallhack, bhop, bot e le loro combinazioni, incluse le varianti «incerto»).
- **Lettore con gestione del segmento** – barra di ricerca, indicatore del tempo, salti di ±5 s e passi di 1/64 s limitati all'inizio e alla fine della clip.
- **Accelerazione a pressione** – tieni premuto `Shift` per riprodurre a velocità configurabile (0,5×–4×, predefinita 2×).
- **Invio sicuro in due passaggi** – `Enter` arma il pulsante, un secondo `Enter` invia i verdetti; le destinazioni dei moduli di altra origine sono bloccate.
- **Interfaccia in 29 lingue** – segue il parametro `?l=` di Steam, la scelta salvata o la lingua del browser, con selettore della lingua nella pagina.
- **Cronologia delle revisioni locale** – cronologia per clip e per partita in `localStorage`; esportazione/importazione JSON, report HTML e unione di più backup in un unico report.
- **Miglioramenti alla pagina inviti** – `/vacnet/createinvite` ridisegnata con mostra/nascondi e copia con un clic del link di invito, più un riepilogo dei requisiti.
- **Effetti sonori** – toni sintetizzati con Web Audio con interruttore, volume e anteprima.
- **Finestra delle impostazioni** – si apre con `F2` (modificabile): suoni, scorciatoia, limiti della cronologia, backup, ripristino dei valori predefiniti.
- **Comodità** – schermata di caricamento dopo l'invio, notifiche, pulsante per nascondere il nome account, finestra con le regole di revisione e randomizzatore dei verdetti opzionale (disattivato di default).

## Installazione

1. Installa un gestore di userscript come [Tampermonkey](https://www.tampermonkey.net/) o [Violentmonkey](https://violentmonkey.github.io/) (lo script usa `GM_addStyle` e `unsafeWindow`).
2. [Installa DemoScope](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js) e conferma l'installazione nel gestore.
3. Accedi a Steam e apri <https://www.counter-strike.net/vacnet/>.
4. Apri una clip da revisionare: DemoScope si carica automaticamente (la pagina `/vacnet/join` è esclusa).

## Utilizzo

Le scorciatoie funzionano nelle pagine di revisione quando il focus non è in un campo di input, pulsante, link o menu a tendina.

| Tasto | Azione |
|---|---|
| `1` … `5` | Applica un verdetto predefinito: 1 bot + aim + wallhack, 2 aim + wallhack, 3 rage, 4 giocatore pulito, 5 incerto |
| `Shift` (hold) | Tieni premuto per accelerare (0,5×–4×, predefinita 2×, selezionabile nella pagina) |
| `←` `→` | Salta 5 secondi indietro / avanti |
| `,` `.` | Un fotogramma (1/64 s) indietro / avanti |
| `Space` | Riproduci / pausa |
| `M` / `F` | Silenzia / schermo intero (anche il doppio clic sul video attiva lo schermo intero) |
| `Enter` ×2 | Premi una volta per armare il pulsante di invio, premi di nuovo per inviare i verdetti |
| `F2` | Apri la finestra delle impostazioni (modificabile) |

## Architettura e dettaglio delle funzioni

DemoScope è un'unica funzione autoinvocata (`@run-at document-start`, `@noframes`). `init()` sceglie tra la pagina inviti e la pagina di revisione e collega i moduli qui sotto. Il riferimento completo di tutte le 143 funzioni documentate — nome, responsabilità, parametri e valore restituito — si trova in [it_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/it_FUNCTIONS.md).

| Modulo | Responsabilità | Funzioni chiave |
|---|---|---|
| `Localization` | Determina la lingua dell'interfaccia, cerca le stringhe, disegna bandiere e selettore lingua | `getActiveLocale`, `tr`, `settingText`, `inviteText`, `getPresetLabel`, `installLanguageSelector` |
| `Segment & player` | Legge inizio/fine della clip dalla pagina, incapsula la riproduzione Video.js/HTML5, disattiva il timer nativo di loop del segmento | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | Barra di ricerca personalizzata, suggerimenti tasti, accelerazione con Shift, avanzamento per fotogrammi, scorciatoie | `installCustomControls`, `installPlayerEnhancements`, `isShortcutBlocked` |
| `Verdict presets` | Tabella dei preset, stato della selezione, applicazione dei preset con ordine e ritardi casuali opzionali | `applyPreset`, `detectActivePreset`, `syncPresetButtons`, `applyDefaultVerdicts`, `buildEnhancementBar` |
| `Submit flow` | Enter in due passaggi, costruisce `verdict_labels[]`, controllo same-origin, schermata di caricamento | `invokeProceedAction`, `prepareVerdictFormForSubmit`, `submitVerdictForm`, `isSafeSubmitTarget`, `finishSubmitLoadingWhenReady` |
| `Local history` | Salva, sfoltisce e mostra la cronologia per clip e per partita in `localStorage` | `readClipHistoryStore`, `writeClipHistoryStore`, `appendReviewHistory`, `renderClipHistory` |
| `Backups & reports` | Esportazione/importazione JSON, report HTML, report unificato da più backup | `exportLocalHistory`, `importLocalHistory`, `exportReadableHistory`, `exportCombinedHistoryReports` |
| `Settings & sound` | Finestra delle impostazioni, scorciatoia modificabile, segnali sonori Web Audio | `ensureSettingsDialog`, `openSettingsDialog`, `installSettingsUi`, `playUiSound` |
| `Invite page` | `/vacnet/createinvite` ridisegnata: mostra/nascondi e copia del link, requisiti | `installInvitePage` |
| `Layout & UI helpers` | Notifiche, nascondimento del footer, osservatori del layout, interruttore del nome account | `enhanceLayout`, `showToast`, `watchProceedFooter`, `installAccountNameControl` |
| `Bootstrap` | Punto di ingresso: sceglie il tipo di pagina e avvia i moduli | `init` |

## Dati locali e privacy

DemoScope non invia telemetria. Impostazioni e cronologia restano nel `localStorage` del browser (chiavi che iniziano con `demoscope`) e nel `sessionStorage`. Usa l'opzione di cancellazione della cronologia nella finestra delle impostazioni per eliminarla.

## Avvertenza

DemoScope è un progetto comunitario non ufficiale, non affiliato né approvato da Valve Corporation. Non decide mai un verdetto al posto tuo: rivedi ogni clip di persona e rispetta le regole del programma di revisione. Usalo a tuo rischio.

## License

Rilasciato con licenza [MIT](../LICENSE).