<div align="center">

[English](../README.md) · [Български](bg_README.md) · [Magyar](hu_README.md) · [Tiếng Việt](vi_README.md) · [Ελληνικά](el_README.md) · **Dansk** · [Bahasa Indonesia](id_README.md) · [Español (España)](es-ES_README.md) · [Español (Latinoamérica)](es-419_README.md) · [Italiano](it_README.md) · [繁體中文](zh-TW_README.md) · [简体中文](zh-CN_README.md) · [한국어](ko_README.md) · [Deutsch](de_README.md) · [Nederlands](nl_README.md) · [Norsk](no_README.md) · [Polski](pl_README.md) · [Português (Portugal)](pt-PT_README.md) · [Português (Brasil)](pt-BR_README.md) · [Română](ro_README.md) · [Русский](ru_README.md) · [ไทย](th_README.md) · [Türkçe](tr_README.md) · [Українська](uk_README.md) · [Suomi](fi_README.md) · [Français](fr_README.md) · [Čeština](cs_README.md) · [Svenska](sv_README.md) · [日本語](ja_README.md)

# DemoScope — CS2 Review Toolkit

![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-orange)

**Tastaturfokuseret userscript-værktøjssæt til CS2 VACNet-gennemgange: dom-forudindstillinger, en segmentbevidst videoafspiller, forbedringer af invitationssiden, lydeffekter og en privat lokal historik — på 29 sprog.**

</div>

## Oversigt

DemoScope opgraderer Counter-Strike VACNet-gennemgangssiderne (`counter-strike.net/vacnet`). I stedet for at klikke på fire domsgrupper (aim assist, wallhack, auto-bhop, bot) for hvert kort klip får du et tastaturbaseret arbejdsforløb: forudindstillede domme, en søgelinje begrænset til det gennemgåede segment, billede-for-billede-trin, midlertidig hastighedsforøgelse, bekræftelse af indsendelse i to trin og en privat historik over dine egne domme. Alt kører lokalt i din browser.

## Hovedfunktioner

- **Dom-forudindstillinger** – 5 hurtige forudindstillinger på tasterne `1`–`5` plus 15 udvidede kombinationer (aim, wallhack, bhop, bot og deres blandinger, inkl. “usikker”-varianter).
- **Segmentbevidst afspiller** – søgelinje, tidsvisning, spring på ±5 s og billedtrin på 1/64 s begrænset til klippets start og slut.
- **Hold for at accelerere** – hold `Shift` nede for afspilning med indstillelig hastighed (0,5×–4×, standard 2×).
- **Sikker indsendelse i to trin** – `Enter` gør knappen klar, et andet `Enter` sender dommene; formularmål fra andre oprindelser blokeres.
- **Grænseflade på 29 sprog** – følger Steams `?l=`-parameter, dit gemte valg eller browserens sprog, med sprogvælger på siden.
- **Lokal gennemgangshistorik** – historik pr. klip og pr. spil i `localStorage`; JSON-eksport/-import, HTML-rapport og sammenlægning af mange sikkerhedskopier i én rapport.
- **Forbedret invitationsside** – redesignet `/vacnet/createinvite` med vis/skjul og kopiering af invitationslinket med ét klik samt en oversigt over kravene.
- **Lydeffekter** – syntetiserede Web Audio-lyde med til/fra, lydstyrke og forhåndslytning.
- **Indstillingsdialog** – åbnes med `F2` (kan ændres): lyde, genvej, historikgrænser, sikkerhedskopier, nulstilling.
- **Praktiske detaljer** – indlæsningsoverlay efter indsendelse, beskeder, skjul kontonavn, dialog med gennemgangsregler og en valgfri dom-randomizer (slået fra som standard).

## Installation

1. Installer en userscript-manager som [Tampermonkey](https://www.tampermonkey.net/) eller [Violentmonkey](https://violentmonkey.github.io/) (scriptet bruger `GM_addStyle` og `unsafeWindow`).
2. [Installer DemoScope](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js), og bekræft installationen i din manager.
3. Log ind på Steam, og åbn <https://www.counter-strike.net/vacnet/>.
4. Åbn et klip til gennemgang — DemoScope indlæses automatisk (siden `/vacnet/join` er undtaget).

## Brug

Genvejene virker på gennemgangssider, når fokus ikke er i et inputfelt, en knap, et link eller en rulleliste.

| Tast | Handling |
|---|---|
| `1` … `5` | Anvend en dom-forudindstilling: 1 bot + aim + wallhack, 2 aim + wallhack, 3 rage, 4 ren spiller, 5 usikker |
| `Shift` (hold) | Hold nede for hastighedsforøgelse (0,5×–4×, standard 2×, kan vælges på siden) |
| `←` `→` | Spring 5 sekunder tilbage / frem |
| `,` `.` | Ét billede (1/64 s) tilbage / frem |
| `Space` | Afspil / pause |
| `M` / `F` | Lyd fra / fuld skærm (dobbeltklik på videoen skifter også fuld skærm) |
| `Enter` ×2 | Tryk én gang for at gøre indsend-knappen klar, tryk igen for at sende dommene |
| `F2` | Åbn indstillingsdialogen (kan ændres) |

## Arkitektur og funktionsoversigt

DemoScope er én selvkaldende funktion (`@run-at document-start`, `@noframes`). `init()` vælger mellem invitationssiden og gennemgangssiden og forbinder modulerne nedenfor. Den komplette reference for alle 143 funktioner — navn, ansvar, parametre og returværdi — findes i [da_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/da_FUNCTIONS.md).

| Modul | Ansvar | Nøglefunktioner |
|---|---|---|
| `Localization` | Finder grænsefladens sprog, slår tekster op, tegner flag og sprogvælgeren | `getActiveLocale`, `tr`, `settingText`, `inviteText`, `getPresetLabel`, `installLanguageSelector` |
| `Segment & player` | Læser klippets start/slut fra siden, omslutter Video.js/HTML5-afspilning, deaktiverer sidens indbyggede segmentloop-timer | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | Egen søgelinje, tasthjælp, Shift-acceleration, billedtrin, genveje | `installCustomControls`, `installPlayerEnhancements`, `isShortcutBlocked` |
| `Verdict presets` | Forudindstillingstabel, valgtilstand, anvendelse af forudindstilling med valgfri tilfældig rækkefølge og forsinkelser | `applyPreset`, `detectActivePreset`, `syncPresetButtons`, `applyDefaultVerdicts`, `buildEnhancementBar` |
| `Submit flow` | Enter i to trin, bygger `verdict_labels[]`, same-origin-kontrol, indlæsningsoverlay | `invokeProceedAction`, `prepareVerdictFormForSubmit`, `submitVerdictForm`, `isSafeSubmitTarget`, `finishSubmitLoadingWhenReady` |
| `Local history` | Gemmer, begrænser og viser historik pr. klip og pr. spil i `localStorage` | `readClipHistoryStore`, `writeClipHistoryStore`, `appendReviewHistory`, `renderClipHistory` |
| `Backups & reports` | JSON-eksport/-import, HTML-rapport, samlet rapport fra mange sikkerhedskopier | `exportLocalHistory`, `importLocalHistory`, `exportReadableHistory`, `exportCombinedHistoryReports` |
| `Settings & sound` | Indstillingsdialog, genvej der kan ændres, Web Audio-lydsignaler | `ensureSettingsDialog`, `openSettingsDialog`, `installSettingsUi`, `playUiSound` |
| `Invite page` | Redesignet `/vacnet/createinvite`: vis/skjul og kopiér invitationslink, krav | `installInvitePage` |
| `Layout & UI helpers` | Beskeder, skjult sidefod, layoutobservatører, kontonavn-skift | `enhanceLayout`, `showToast`, `watchProceedFooter`, `installAccountNameControl` |
| `Bootstrap` | Indgangspunkt: vælger sidetype og starter modulerne | `init` |

## Lokale data og privatliv

DemoScope sender ingen telemetri. Indstillinger og historik forbliver i browserens `localStorage` (nøgler, der starter med `demoscope`) og `sessionStorage`. Brug indstillingen til at rydde historik i indstillingsdialogen for at fjerne historikken.

## Ansvarsfraskrivelse

DemoScope er et uofficielt fællesskabsprojekt, der ikke er tilknyttet eller godkendt af Valve Corporation. Det afgør aldrig en dom for dig — gennemgå hvert klip selv, og følg gennemgangsprogrammets regler. Brug sker på eget ansvar.

## License

Udgivet under [MIT](../LICENSE)-licensen.
