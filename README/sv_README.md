<div align="center">

[English](../README.md) · [Български](bg_README.md) · [Magyar](hu_README.md) · [Tiếng Việt](vi_README.md) · [Ελληνικά](el_README.md) · [Dansk](da_README.md) · [Bahasa Indonesia](id_README.md) · [Español (España)](es-ES_README.md) · [Español (Latinoamérica)](es-419_README.md) · [Italiano](it_README.md) · [繁體中文](zh-TW_README.md) · [简体中文](zh-CN_README.md) · [한국어](ko_README.md) · [Deutsch](de_README.md) · [Nederlands](nl_README.md) · [Norsk](no_README.md) · [Polski](pl_README.md) · [Português (Portugal)](pt-PT_README.md) · [Português (Brasil)](pt-BR_README.md) · [Română](ro_README.md) · [Русский](ru_README.md) · [ไทย](th_README.md) · [Türkçe](tr_README.md) · [Українська](uk_README.md) · [Suomi](fi_README.md) · [Français](fr_README.md) · [Čeština](cs_README.md) · **Svenska** · [日本語](ja_README.md)

# DemoScope — CS2 Review Toolkit

![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-orange)

**Tangentbordsfokuserat userscript-verktyg för CS2 VACNet-granskare: förinställda bedömningar, en segmentmedveten videospelare, förbättringar av inbjudningssidan, ljudeffekter och en privat lokal historik — på 29 språk.**

</div>

## Översikt

DemoScope uppgraderar granskningssidorna i Counter-Strike VACNet (`counter-strike.net/vacnet`). I stället för att klicka på fyra bedömningsgrupper (aim assist, wallhack, auto-bhop, bot) för varje kort klipp får du ett tangentbordsbaserat arbetsflöde: förinställda bedömningar, ett sökfält begränsat till det granskade segmentet, bildruta-för-bildruta-steg, tillfällig hastighetsökning, bekräftelse av inskick i två steg och en privat historik över dina egna bedömningar. Allt körs lokalt i din webbläsare.

## Huvudfunktioner

- **Förinställda bedömningar** – 5 snabbförinställningar på tangenterna `1`–`5` plus 15 utökade kombinationer (aim, wallhack, bhop, bot och blandningar av dem, inklusive “osäker”-varianter).
- **Segmentmedveten spelare** – sökfält, tidsvisning, hopp på ±5 s och bildsteg på 1/64 s begränsade till klippets start och slut.
- **Håll för att accelerera** – håll ned `Shift` för uppspelning med justerbar hastighet (0,5×–4×, standard 2×).
- **Säkert inskick i två steg** – `Enter` gör knappen redo, ett andra `Enter` skickar bedömningarna; formulärmål från annat ursprung blockeras.
- **Gränssnitt på 29 språk** – följer Steams `?l=`-parameter, ditt sparade val eller webbläsarens språk, med språkväljare på sidan.
- **Lokal granskningshistorik** – historik per klipp och per spel i `localStorage`; JSON-export/-import, HTML-rapport och sammanslagning av många säkerhetskopior till en rapport.
- **Förbättrad inbjudningssida** – omgjord `/vacnet/createinvite` med visa/dölj och kopiering av inbjudningslänken med ett klick, samt en sammanfattning av kraven.
- **Ljudeffekter** – syntetiserade Web Audio-ljud med av/på, volym och förhandslyssning.
- **Inställningsdialog** – öppnas med `F2` (kan ändras): ljud, kortkommando, historikgränser, säkerhetskopior, återställning till standard.
- **Bekvämligheter** – laddningsöverlägg efter inskick, aviseringar, växel för att dölja kontonamn, dialog med granskningsregler och en valfri bedömnings-randomiserare (avstängd som standard).

## Installation

1. Installera en userscript-hanterare som [Tampermonkey](https://www.tampermonkey.net/) eller [Violentmonkey](https://violentmonkey.github.io/) (skriptet använder `GM_addStyle` och `unsafeWindow`).
2. [Installera DemoScope](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js) och bekräfta installationen i din hanterare.
3. Logga in på Steam och öppna <https://www.counter-strike.net/vacnet/>.
4. Öppna ett klipp för granskning — DemoScope laddas automatiskt (sidan `/vacnet/join` är undantagen).

## Användning

Kortkommandona fungerar på granskningssidor så länge fokus inte är i ett inmatningsfält, en knapp, en länk eller en rullgardinslista.

| Tangent | Åtgärd |
|---|---|
| `1` … `5` | Använd en förinställd bedömning: 1 bot + aim + wallhack, 2 aim + wallhack, 3 rage, 4 ren spelare, 5 osäker |
| `Shift` (hold) | Håll ned för hastighetsökning (0,5×–4×, standard 2×, kan väljas på sidan) |
| `←` `→` | Hoppa 5 sekunder bakåt / framåt |
| `,` `.` | En bildruta (1/64 s) bakåt / framåt |
| `Space` | Spela / pausa |
| `M` / `F` | Ljud av / helskärm (dubbelklick på videon växlar också helskärm) |
| `Enter` ×2 | Tryck en gång för att göra skicka-knappen redo, tryck igen för att skicka bedömningarna |
| `F2` | Öppna inställningsdialogen (kan ändras) |

## Arkitektur och funktionsöversikt

DemoScope är en enda självanropande funktion (`@run-at document-start`, `@noframes`). `init()` väljer mellan inbjudningssidan och granskningssidan och kopplar ihop modulerna nedan. Den fullständiga referensen för alla 143 funktioner — namn, ansvar, parametrar och returvärde — finns i [sv_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/sv_FUNCTIONS.md).

| Modul | Ansvar | Nyckelfunktioner |
|---|---|---|
| `Localization` | Avgör gränssnittets språk, slår upp texter, ritar flaggor och språkväljaren | `getActiveLocale`, `tr`, `settingText`, `inviteText`, `getPresetLabel`, `installLanguageSelector` |
| `Segment & player` | Läser klippets start/slut från sidan, omsluter Video.js-/HTML5-uppspelning, inaktiverar sidans inbyggda segmentloop-timer | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | Eget sökfält, tangenttips, Shift-acceleration, bildsteg, kortkommandon | `installCustomControls`, `installPlayerEnhancements`, `isShortcutBlocked` |
| `Verdict presets` | Förinställningstabell, valtillstånd, tillämpning av förinställningar med valfri slumpmässig ordning och fördröjningar | `applyPreset`, `detectActivePreset`, `syncPresetButtons`, `applyDefaultVerdicts`, `buildEnhancementBar` |
| `Submit flow` | Enter i två steg, bygger `verdict_labels[]`, same-origin-kontroll, laddningsöverlägg | `invokeProceedAction`, `prepareVerdictFormForSubmit`, `submitVerdictForm`, `isSafeSubmitTarget`, `finishSubmitLoadingWhenReady` |
| `Local history` | Lagrar, rensar och visar historik per klipp och per spel i `localStorage` | `readClipHistoryStore`, `writeClipHistoryStore`, `appendReviewHistory`, `renderClipHistory` |
| `Backups & reports` | JSON-export/-import, HTML-rapport, sammanslagen rapport från många säkerhetskopior | `exportLocalHistory`, `importLocalHistory`, `exportReadableHistory`, `exportCombinedHistoryReports` |
| `Settings & sound` | Inställningsdialog, ändringsbart kortkommando, Web Audio-ljudsignaler | `ensureSettingsDialog`, `openSettingsDialog`, `installSettingsUi`, `playUiSound` |
| `Invite page` | Omgjord `/vacnet/createinvite`: visa/dölj och kopiera länk, krav | `installInvitePage` |
| `Layout & UI helpers` | Aviseringar, dold sidfot, layoutobservatörer, kontonamnsväxel | `enhanceLayout`, `showToast`, `watchProceedFooter`, `installAccountNameControl` |
| `Bootstrap` | Startpunkt: väljer sidtyp och startar modulerna | `init` |

## Lokala data och integritet

DemoScope skickar ingen telemetri. Inställningar och historik stannar i webbläsarens `localStorage` (nycklar som börjar med `demoscope`) och `sessionStorage`. Använd alternativet för att rensa historiken i inställningsdialogen för att ta bort den.

## Ansvarsfriskrivning

DemoScope är ett inofficiellt communityprojekt som inte är knutet till eller godkänt av Valve Corporation. Det avgör aldrig en bedömning åt dig — granska varje klipp själv och följ granskningsprogrammets regler. Användning sker på egen risk.

## License

Utgiven under [MIT](../LICENSE)-licensen.