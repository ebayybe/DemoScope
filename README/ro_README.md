<div align="center">

[English](../README.md) · [Български](bg_README.md) · [Magyar](hu_README.md) · [Tiếng Việt](vi_README.md) · [Ελληνικά](el_README.md) · [Dansk](da_README.md) · [Bahasa Indonesia](id_README.md) · [Español (España)](es-ES_README.md) · [Español (Latinoamérica)](es-419_README.md) · [Italiano](it_README.md) · [繁體中文](zh-TW_README.md) · [简体中文](zh-CN_README.md) · [한국어](ko_README.md) · [Deutsch](de_README.md) · [Nederlands](nl_README.md) · [Norsk](no_README.md) · [Polski](pl_README.md) · [Português (Portugal)](pt-PT_README.md) · [Português (Brasil)](pt-BR_README.md) · **Română** · [Русский](ru_README.md) · [ไทย](th_README.md) · [Türkçe](tr_README.md) · [Українська](uk_README.md) · [Suomi](fi_README.md) · [Français](fr_README.md) · [Čeština](cs_README.md) · [Svenska](sv_README.md) · [日本語](ja_README.md)

# DemoScope — CS2 Review Toolkit

![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-orange)

**Set de userscript-uri orientat pe tastatură pentru verificatorii CS2 VACNet: verdicte presetate, player video conștient de segment, îmbunătățiri pentru pagina de invitații, efecte sonore și un istoric local privat — în 29 de limbi.**

</div>

## Prezentare generală

DemoScope îmbunătățește paginile de verificare Counter-Strike VACNet (`counter-strike.net/vacnet`). În loc să dai clic pe patru grupuri de verdict (aim assist, wallhack, auto-bhop, bot) pentru fiecare clip scurt, primești un flux de lucru bazat pe tastatură: verdicte presetate, o bară de derulare limitată la segmentul verificat, avans cadru cu cadru, accelerare temporară, confirmare de trimitere în doi pași și un istoric privat al propriilor verdicte. Totul rulează local, în browserul tău.

## Funcții principale

- **Verdicte presetate** – 5 presetări rapide pe tastele `1`–`5` plus 15 combinații extinse (aim, wallhack, bhop, bot și amestecurile lor, inclusiv variantele „incert”).
- **Player conștient de segment** – bară de derulare, afișaj de timp, salturi de ±5 s și pași de 1/64 s limitate la începutul și sfârșitul clipului.
- **Accelerare prin apăsare lungă** – ține apăsat `Shift` pentru redare la o viteză configurabilă (0,5×–4×, implicit 2×).
- **Trimitere sigură în doi pași** – `Enter` armează butonul, al doilea `Enter` trimite verdictele; țintele de formular din altă origine sunt blocate.
- **Interfață în 29 de limbi** – urmează parametrul Steam `?l=`, alegerea salvată sau limba browserului, cu selector de limbă în pagină.
- **Istoric local al verificărilor** – istoric pe clip și pe joc în `localStorage`; export/import JSON, raport HTML și îmbinarea mai multor copii de siguranță într-un singur raport.
- **Îmbunătățiri pentru pagina de invitații** – `/vacnet/createinvite` redesenată, cu afișare/ascundere și copiere cu un clic a linkului de invitație, plus un rezumat al cerințelor.
- **Efecte sonore** – sunete sintetizate cu Web Audio, cu pornire/oprire, volum și previzualizare.
- **Dialog de setări** – se deschide cu `F2` (reasignabil): sunete, comandă rapidă, limite ale istoricului, copii de siguranță, resetare la valorile implicite.
- **Facilități** – strat de încărcare după trimitere, notificări, comutator pentru ascunderea numelui contului, dialog cu regulile de verificare și un randomizator opțional de verdicte (dezactivat implicit).

## Instalare

1. Instalează un manager de userscript-uri precum [Tampermonkey](https://www.tampermonkey.net/) sau [Violentmonkey](https://violentmonkey.github.io/) (scriptul folosește `GM_addStyle` și `unsafeWindow`).
2. [Instalează DemoScope](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js) și confirmă instalarea în manager.
3. Conectează-te la Steam și deschide <https://www.counter-strike.net/vacnet/>.
4. Deschide un clip de verificat — DemoScope se încarcă automat (pagina `/vacnet/join` este exclusă).

## Utilizare

Comenzile rapide funcționează pe paginile de verificare atât timp cât focusul nu este într-un câmp de introducere, buton, link sau listă de selecție.

| Tastă | Acțiune |
|---|---|
| `1` … `5` | Aplică un verdict presetat: 1 bot + aim + wallhack, 2 aim + wallhack, 3 rage, 4 jucător curat, 5 incert |
| `Shift` (hold) | Ține apăsat pentru accelerare (0,5×–4×, implicit 2×, selectabilă în pagină) |
| `←` `→` | Salt de 5 secunde înapoi / înainte |
| `,` `.` | Un cadru (1/64 s) înapoi / înainte |
| `Space` | Redare / pauză |
| `M` / `F` | Dezactivare sunet / ecran complet (dublu clic pe video comută și ecranul complet) |
| `Enter` ×2 | Apasă o dată pentru a arma butonul de trimitere, apasă din nou pentru a trimite verdictele |
| `F2` | Deschide dialogul de setări (reasignabil) |

## Arhitectură și detalierea funcțiilor

DemoScope este o singură funcție autoapelată (`@run-at document-start`, `@noframes`). `init()` alege între pagina de invitații și pagina de verificare și conectează modulele de mai jos. Referința completă pentru toate cele 143 funcții — nume, responsabilitate, parametri și valoare returnată — se află în [ro_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/ro_FUNCTIONS.md).

| Modul | Responsabilitate | Funcții cheie |
|---|---|---|
| `Localization` | Stabilește limba interfeței, caută texte, desenează steaguri și selectorul de limbă | `getActiveLocale`, `tr`, `settingText`, `inviteText`, `getPresetLabel`, `installLanguageSelector` |
| `Segment & player` | Citește începutul/sfârșitul clipului din pagină, încapsulează redarea Video.js/HTML5, dezactivează cronometrul nativ de buclă a segmentului al site-ului | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | Bară de derulare proprie, indicii de taste, accelerare cu Shift, avans pe cadre, comenzi rapide | `installCustomControls`, `installPlayerEnhancements`, `isShortcutBlocked` |
| `Verdict presets` | Tabel de presetări, starea selecției, aplicarea presetărilor cu ordine și întârzieri aleatorii opționale | `applyPreset`, `detectActivePreset`, `syncPresetButtons`, `applyDefaultVerdicts`, `buildEnhancementBar` |
| `Submit flow` | Enter în doi pași, construiește `verdict_labels[]`, verificare de aceeași origine, strat de încărcare | `invokeProceedAction`, `prepareVerdictFormForSubmit`, `submitVerdictForm`, `isSafeSubmitTarget`, `finishSubmitLoadingWhenReady` |
| `Local history` | Stochează, curăță și afișează istoricul pe clip și pe joc în `localStorage` | `readClipHistoryStore`, `writeClipHistoryStore`, `appendReviewHistory`, `renderClipHistory` |
| `Backups & reports` | Export/import JSON, raport HTML, raport combinat din mai multe copii | `exportLocalHistory`, `importLocalHistory`, `exportReadableHistory`, `exportCombinedHistoryReports` |
| `Settings & sound` | Dialog de setări, comandă rapidă reasignabilă, semnale sonore Web Audio | `ensureSettingsDialog`, `openSettingsDialog`, `installSettingsUi`, `playUiSound` |
| `Invite page` | `/vacnet/createinvite` redesenată: afișare/ascundere și copiere link, cerințe | `installInvitePage` |
| `Layout & UI helpers` | Notificări, ascunderea subsolului, observatori de aspect, comutator pentru numele contului | `enhanceLayout`, `showToast`, `watchProceedFooter`, `installAccountNameControl` |
| `Bootstrap` | Punct de intrare: alege tipul paginii și pornește modulele | `init` |

## Date locale și confidențialitate

DemoScope nu trimite telemetrie. Setările și istoricul rămân în `localStorage` al browserului (chei care încep cu `demoscope`) și în `sessionStorage`. Folosește opțiunea de ștergere a istoricului din dialogul de setări pentru a-l elimina.

## Declinarea responsabilității

DemoScope este un proiect comunitar neoficial, fără legătură cu Valve Corporation și neaprobat de aceasta. Nu decide niciodată un verdict în locul tău — verifică personal fiecare clip și respectă regulile programului de verificare. Utilizare pe propria răspundere.

## License

Publicat sub licența [MIT](../LICENSE).