<div align="center">

[English](../README.md) · [Български](bg_README.md) · [Magyar](hu_README.md) · [Tiếng Việt](vi_README.md) · [Ελληνικά](el_README.md) · [Dansk](da_README.md) · [Bahasa Indonesia](id_README.md) · [Español (España)](es-ES_README.md) · [Español (Latinoamérica)](es-419_README.md) · [Italiano](it_README.md) · [繁體中文](zh-TW_README.md) · [简体中文](zh-CN_README.md) · [한국어](ko_README.md) · [Deutsch](de_README.md) · **Nederlands** · [Norsk](no_README.md) · [Polski](pl_README.md) · [Português (Portugal)](pt-PT_README.md) · [Português (Brasil)](pt-BR_README.md) · [Română](ro_README.md) · [Русский](ru_README.md) · [ไทย](th_README.md) · [Türkçe](tr_README.md) · [Українська](uk_README.md) · [Suomi](fi_README.md) · [Français](fr_README.md) · [Čeština](cs_README.md) · [Svenska](sv_README.md) · [日本語](ja_README.md)

# DemoScope — CS2 Review Toolkit

![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-orange)

**Toetsenbordgerichte userscript-toolkit voor CS2 VACNet-beoordelaars: oordeelpresets, een segmentbewuste videospeler, verbeteringen voor de uitnodigingspagina, geluidseffecten en een privé lokale geschiedenis — in 29 talen.**

</div>

## Overzicht

DemoScope verbetert de beoordelingspagina's van Counter-Strike VACNet (`counter-strike.net/vacnet`). In plaats van voor elke korte clip vier oordeelgroepen (aim assist, wallhack, auto-bhop, bot) aan te klikken, krijg je een werkwijze die draait om het toetsenbord: vooraf ingestelde oordelen, een zoekbalk beperkt tot het beoordeelde segment, beeld-voor-beeld stappen, tijdelijke versnelling, een bevestiging in twee stappen en een privégeschiedenis van je eigen oordelen. Alles draait lokaal in je browser.

## Belangrijkste functies

- **Oordeelpresets** – 5 snelle presets op de toetsen `1`–`5` plus 15 uitgebreide combinaties (aim, wallhack, bhop, bot en hun mengvormen, inclusief “onzeker”-varianten).
- **Segmentbewuste speler** – zoekbalk, tijdsweergave, sprongen van ±5 s en beeldstappen van 1/64 s, beperkt tot het begin en einde van de clip.
- **Ingedrukt houden om te versnellen** – houd `Shift` ingedrukt om af te spelen op een instelbare snelheid (0,5×–4×, standaard 2×).
- **Veilig verzenden in twee stappen** – `Enter` maakt de knop gereed, een tweede `Enter` verstuurt de oordelen; formulierdoelen met een andere oorsprong worden geblokkeerd.
- **Interface in 29 talen** – volgt de `?l=`-parameter van Steam, je opgeslagen keuze of de browsertaal, met een taalkiezer op de pagina.
- **Lokale beoordelingsgeschiedenis** – geschiedenis per clip en per game in `localStorage`; JSON-export/-import, HTML-rapport en het samenvoegen van veel back-ups tot één rapport.
- **Verbeterde uitnodigingspagina** – opnieuw ontworpen `/vacnet/createinvite` met tonen/verbergen en met één klik kopiëren van de uitnodigingslink, plus een overzicht van de vereisten.
- **Geluidseffecten** – gesynthetiseerde Web Audio-geluiden met aan/uit, volume en voorbeluisteren.
- **Instellingendialoog** – open met `F2` (aanpasbaar): geluiden, sneltoets, geschiedenislimieten, back-ups, standaardwaarden herstellen.
- **Gemak** – laadoverlay na verzenden, meldingen, schakelaar om de accountnaam te verbergen, dialoog met beoordelingsregels en een optionele oordeel-randomizer (standaard uit).

## Installatie

1. Installeer een userscript-manager zoals [Tampermonkey](https://www.tampermonkey.net/) of [Violentmonkey](https://violentmonkey.github.io/) (het script gebruikt `GM_addStyle` en `unsafeWindow`).
2. [Installeer DemoScope](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js) en bevestig de installatie in je manager.
3. Log in op Steam en open <https://www.counter-strike.net/vacnet/>.
4. Open een te beoordelen clip — DemoScope wordt automatisch geladen (de pagina `/vacnet/join` is uitgesloten).

## Gebruik

Sneltoetsen werken op beoordelingspagina's zolang de focus niet in een invoerveld, knop, link of keuzelijst staat.

| Toets | Actie |
|---|---|
| `1` … `5` | Een oordeelpreset toepassen: 1 bot + aim + wallhack, 2 aim + wallhack, 3 rage, 4 schone speler, 5 onzeker |
| `Shift` (hold) | Ingedrukt houden voor versnelling (0,5×–4×, standaard 2×, te kiezen op de pagina) |
| `←` `→` | 5 seconden terug / vooruit springen |
| `,` `.` | Eén beeld (1/64 s) terug / vooruit |
| `Space` | Afspelen / pauzeren |
| `M` / `F` | Dempen / volledig scherm (dubbelklikken op de video schakelt ook volledig scherm in) |
| `Enter` ×2 | Eén keer drukken om de verzendknop gereed te maken, nogmaals om de oordelen te versturen |
| `F2` | De instellingendialoog openen (aanpasbaar) |

## Architectuur en functie-overzicht

DemoScope is één zelfaanroepende functie (`@run-at document-start`, `@noframes`). `init()` kiest tussen de uitnodigingspagina en de beoordelingspagina en koppelt de onderstaande modules. De volledige referentie van alle 143 functies — naam, verantwoordelijkheid, parameters en retourwaarde — staat in [nl_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/nl_FUNCTIONS.md).

| Module | Verantwoordelijkheid | Belangrijkste functies |
|---|---|---|
| `Localization` | Bepaalt de interfacetaal, zoekt teksten op, tekent vlaggen en de taalkiezer | `getActiveLocale`, `tr`, `settingText`, `inviteText`, `getPresetLabel`, `installLanguageSelector` |
| `Segment & player` | Leest begin/einde van de clip uit de pagina, verpakt Video.js-/HTML5-weergave, schakelt de native segmentlus-timer van de site uit | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | Eigen zoekbalk, toetshints, Shift-versnelling, beeldstappen, sneltoetsen | `installCustomControls`, `installPlayerEnhancements`, `isShortcutBlocked` |
| `Verdict presets` | Presettabel, selectiestatus, presets toepassen met optioneel willekeurige volgorde en vertragingen | `applyPreset`, `detectActivePreset`, `syncPresetButtons`, `applyDefaultVerdicts`, `buildEnhancementBar` |
| `Submit flow` | Enter in twee stappen, bouwt `verdict_labels[]`, same-origin-controle, laadoverlay | `invokeProceedAction`, `prepareVerdictFormForSubmit`, `submitVerdictForm`, `isSafeSubmitTarget`, `finishSubmitLoadingWhenReady` |
| `Local history` | Slaat geschiedenis per clip en per game op in `localStorage`, snoeit en toont die | `readClipHistoryStore`, `writeClipHistoryStore`, `appendReviewHistory`, `renderClipHistory` |
| `Backups & reports` | JSON-export/-import, HTML-rapport, samengevoegd rapport uit veel back-ups | `exportLocalHistory`, `importLocalHistory`, `exportReadableHistory`, `exportCombinedHistoryReports` |
| `Settings & sound` | Instellingendialoog, aanpasbare sneltoets, Web Audio-geluidssignalen | `ensureSettingsDialog`, `openSettingsDialog`, `installSettingsUi`, `playUiSound` |
| `Invite page` | Opnieuw ontworpen `/vacnet/createinvite`: uitnodigingslink tonen/verbergen en kopiëren, vereisten | `installInvitePage` |
| `Layout & UI helpers` | Meldingen, footer verbergen, layoutwaarnemers, accountnaamschakelaar | `enhanceLayout`, `showToast`, `watchProceedFooter`, `installAccountNameControl` |
| `Bootstrap` | Startpunt: bepaalt het paginatype en start de modules | `init` |

## Lokale gegevens en privacy

DemoScope verstuurt geen telemetrie. Instellingen en geschiedenis blijven in de `localStorage` van je browser (sleutels die beginnen met `demoscope`) en in `sessionStorage`. Gebruik de optie om de geschiedenis te wissen in de instellingendialoog om de geschiedenis te verwijderen.

## Disclaimer

DemoScope is een onofficieel communityproject en is niet gelieerd aan of goedgekeurd door Valve Corporation. Het beslist nooit een oordeel voor je — beoordeel elke clip zelf en volg de regels van het beoordelingsprogramma. Gebruik op eigen risico.

## License

Uitgebracht onder de [MIT](../LICENSE)-licentie.