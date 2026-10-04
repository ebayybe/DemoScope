<div align="center">

[English](../README.md) · [Български](bg_README.md) · [Magyar](hu_README.md) · [Tiếng Việt](vi_README.md) · [Ελληνικά](el_README.md) · [Dansk](da_README.md) · [Bahasa Indonesia](id_README.md) · [Español (España)](es-ES_README.md) · [Español (Latinoamérica)](es-419_README.md) · [Italiano](it_README.md) · [繁體中文](zh-TW_README.md) · [简体中文](zh-CN_README.md) · [한국어](ko_README.md) · [Deutsch](de_README.md) · [Nederlands](nl_README.md) · **Norsk** · [Polski](pl_README.md) · [Português (Portugal)](pt-PT_README.md) · [Português (Brasil)](pt-BR_README.md) · [Română](ro_README.md) · [Русский](ru_README.md) · [ไทย](th_README.md) · [Türkçe](tr_README.md) · [Українська](uk_README.md) · [Suomi](fi_README.md) · [Français](fr_README.md) · [Čeština](cs_README.md) · [Svenska](sv_README.md) · [日本語](ja_README.md)

# DemoScope — CS2 Review Toolkit

![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-orange)

**Tastaturfokusert userscript-verktøysett for CS2 VACNet-gjennomgangere: vurderingsforvalg, en segmentbevisst videospiller, forbedringer av invitasjonssiden, lydeffekter og en privat lokal historikk — på 29 språk.**

</div>

## Oversikt

DemoScope oppgraderer gjennomgangssidene til Counter-Strike VACNet (`counter-strike.net/vacnet`). I stedet for å klikke på fire vurderingsgrupper (aim assist, wallhack, auto-bhop, bot) for hvert korte klipp får du en tastaturbasert arbeidsflyt: forhåndsinnstilte vurderinger, en søkelinje begrenset til segmentet som gjennomgås, bilde-for-bilde-steg, midlertidig hastighetsøkning, bekreftelse av innsending i to trinn og en privat historikk over dine egne vurderinger. Alt kjører lokalt i nettleseren din.

## Hovedfunksjoner

- **Vurderingsforvalg** – 5 hurtigforvalg på tastene `1`–`5` pluss 15 utvidede kombinasjoner (aim, wallhack, bhop, bot og blandinger av dem, inkludert «usikker»-varianter).
- **Segmentbevisst spiller** – søkelinje, tidsvisning, hopp på ±5 s og bildesteg på 1/64 s begrenset til start og slutt på klippet.
- **Hold for å akselerere** – hold inne `Shift` for avspilling med justerbar hastighet (0,5×–4×, standard 2×).
- **Trygg innsending i to trinn** – `Enter` gjør knappen klar, et nytt `Enter` sender vurderingene; skjemamål fra andre opphav blokkeres.
- **Grensesnitt på 29 språk** – følger Steams `?l=`-parameter, ditt lagrede valg eller nettleserspråket, med språkvelger på siden.
- **Lokal gjennomgangshistorikk** – historikk per klipp og per spill i `localStorage`; JSON-eksport/-import, HTML-rapport og sammenslåing av mange sikkerhetskopier til én rapport.
- **Forbedret invitasjonsside** – redesignet `/vacnet/createinvite` med vis/skjul og kopiering av invitasjonslenken med ett klikk, pluss en oversikt over kravene.
- **Lydeffekter** – syntetiserte Web Audio-lyder med av/på, lydstyrke og forhåndslytting.
- **Innstillingsdialog** – åpnes med `F2` (kan endres): lyder, snarvei, historikkgrenser, sikkerhetskopier, tilbakestilling.
- **Praktiske detaljer** – innlastingsoverlegg etter innsending, meldinger, skjuling av kontonavn, dialog med gjennomgangsregler og en valgfri vurderings-randomizer (av som standard).

## Installasjon

1. Installer en userscript-behandler som [Tampermonkey](https://www.tampermonkey.net/) eller [Violentmonkey](https://violentmonkey.github.io/) (skriptet bruker `GM_addStyle` og `unsafeWindow`).
2. [Installer DemoScope](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js) og bekreft installasjonen i behandleren.
3. Logg på Steam og åpne <https://www.counter-strike.net/vacnet/>.
4. Åpne et klipp til gjennomgang — DemoScope lastes automatisk (siden `/vacnet/join` er unntatt).

## Bruk

Snarveiene fungerer på gjennomgangssider så lenge fokus ikke er i et inndatafelt, en knapp, en lenke eller en nedtrekksliste.

| Tast | Handling |
|---|---|
| `1` … `5` | Bruk et vurderingsforvalg: 1 bot + aim + wallhack, 2 aim + wallhack, 3 rage, 4 ren spiller, 5 usikker |
| `Shift` (hold) | Hold inne for hastighetsøkning (0,5×–4×, standard 2×, kan velges på siden) |
| `←` `→` | Hopp 5 sekunder tilbake / frem |
| `,` `.` | Ett bilde (1/64 s) tilbake / frem |
| `Space` | Spill av / pause |
| `M` / `F` | Demp / fullskjerm (dobbeltklikk på videoen bytter også fullskjerm) |
| `Enter` ×2 | Trykk én gang for å gjøre innsendingsknappen klar, trykk igjen for å sende vurderingene |
| `F2` | Åpne innstillingsdialogen (kan endres) |

## Arkitektur og funksjonsoversikt

DemoScope er én selvkallende funksjon (`@run-at document-start`, `@noframes`). `init()` velger mellom invitasjonssiden og gjennomgangssiden og kobler sammen modulene nedenfor. Den fullstendige referansen for alle 143 funksjonene — navn, ansvar, parametere og returverdi — finnes i [no_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/no_FUNCTIONS.md).

| Modul | Ansvar | Nøkkelfunksjoner |
|---|---|---|
| `Localization` | Bestemmer grensesnittspråket, slår opp tekster, tegner flagg og språkvelgeren | `getActiveLocale`, `tr`, `settingText`, `inviteText`, `getPresetLabel`, `installLanguageSelector` |
| `Segment & player` | Leser start/slutt for klippet fra siden, pakker inn Video.js-/HTML5-avspilling, deaktiverer sidens innebygde segmentløkke-timer | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | Egen søkelinje, tastehint, Shift-akselerasjon, bildesteg, snarveier | `installCustomControls`, `installPlayerEnhancements`, `isShortcutBlocked` |
| `Verdict presets` | Forvalgstabell, valgtilstand, bruk av forvalg med valgfri tilfeldig rekkefølge og forsinkelser | `applyPreset`, `detectActivePreset`, `syncPresetButtons`, `applyDefaultVerdicts`, `buildEnhancementBar` |
| `Submit flow` | Enter i to trinn, bygger `verdict_labels[]`, same-origin-kontroll, innlastingsoverlegg | `invokeProceedAction`, `prepareVerdictFormForSubmit`, `submitVerdictForm`, `isSafeSubmitTarget`, `finishSubmitLoadingWhenReady` |
| `Local history` | Lagrer, beskjærer og viser historikk per klipp og per spill i `localStorage` | `readClipHistoryStore`, `writeClipHistoryStore`, `appendReviewHistory`, `renderClipHistory` |
| `Backups & reports` | JSON-eksport/-import, HTML-rapport, samlet rapport fra mange sikkerhetskopier | `exportLocalHistory`, `importLocalHistory`, `exportReadableHistory`, `exportCombinedHistoryReports` |
| `Settings & sound` | Innstillingsdialog, snarvei som kan endres, Web Audio-lydsignaler | `ensureSettingsDialog`, `openSettingsDialog`, `installSettingsUi`, `playUiSound` |
| `Invite page` | Redesignet `/vacnet/createinvite`: vis/skjul og kopier invitasjonslenke, krav | `installInvitePage` |
| `Layout & UI helpers` | Meldinger, skjult bunntekst, layoutobservatører, kontonavn-bryter | `enhanceLayout`, `showToast`, `watchProceedFooter`, `installAccountNameControl` |
| `Bootstrap` | Inngangspunkt: velger sidetype og starter modulene | `init` |

## Lokale data og personvern

DemoScope sender ikke telemetri. Innstillinger og historikk blir værende i nettleserens `localStorage` (nøkler som starter med `demoscope`) og `sessionStorage`. Bruk valget for å slette historikk i innstillingsdialogen for å fjerne historikken.

## Ansvarsfraskrivelse

DemoScope er et uoffisielt fellesskapsprosjekt som ikke er tilknyttet eller godkjent av Valve Corporation. Det avgjør aldri en vurdering for deg — gjennomgå hvert klipp selv og følg reglene for gjennomgangsprogrammet. Bruk på eget ansvar.

## License

Utgitt under [MIT](../LICENSE)-lisensen.