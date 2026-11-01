<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/README/README.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/README/bg_README.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/README/hu_README.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/README/vi_README.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/README/el_README.md) · **Dansk** · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/README/id_README.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/README/es-ES_README.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/README/es-419_README.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/README/it_README.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/README/zh-TW_README.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/README/zh-CN_README.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/README/ko_README.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/README/de_README.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/README/nl_README.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/README/no_README.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/README/pl_README.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-PT_README.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-BR_README.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/README/ro_README.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/README/ru_README.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/README/th_README.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/README/tr_README.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/README/uk_README.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/README/fi_README.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/README/fr_README.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/README/cs_README.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/README/sv_README.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/README/ja_README.md)

</div>

# DemoScope
[![Version](https://img.shields.io/badge/version-1.4.0-3b82f6?style=flat-square)](https://github.com/ebayybe/DemoScope/releases)
[![License](https://img.shields.io/badge/license-MIT-22c55e?style=flat-square)](https://github.com/ebayybe/DemoScope/blob/main/LICENSE)
[![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-f59e0b?style=flat-square)](#installation)
[![Languages](https://img.shields.io/badge/languages-29-8b5cf6?style=flat-square)](#sprog)
[![Privacy](https://img.shields.io/badge/telemetry-none-64748b?style=flat-square)](#privatliv)

[funktioner](#funktioner) · [installation](#installation) · [genvejstaster](#genvejstaster) · [tilpasning](#tilpasning) · [Documentation](https://github.com/ebayybe/DemoScope/blob/main/docs/en_FUNCTIONS.md) · [Changelog](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/en_CHANGELOG.md)

**Et tastaturbaseret værktøj til gennemgang af CS2 VACNet.**<br>
Forudindstillede afgørelser · klipbevidst afspiller · tilpasselige genvejstaster · privat lokal historik · 29 sprog.

[⬇ Installer DemoScope](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js)

## Skærmbilleder

<table><tr>
<td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png" alt="DemoScope velkomstskærm"></a><br><b>Velkomstskærm</b></td>
<td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png" alt="DemoScope hovedgrænseflade"></a><br><b>Hovedgrænseflade</b></td>
<td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png" alt="DemoScope invitationsside"></a><br><b>Inviter en ven</b></td>
</tr></table>

## Oversigt

DemoScope forbedrer Counter-Strike VACNet-siderne til gennemgang. Brug tastaturet til forudindstillede afgørelser, søgning begrænset til klippet, billedtrin, midlertidig hastighedsforøgelse, indsendelse i to trin og en privat historik over dine afgørelser. Scriptet understøtter både den klassiske formular med fire spørgsmål og den nyere opgave med ét spørgsmål. Hvis Valve ændrer siden, deaktiveres scriptet sikkert. Alt kører lokalt i browseren.

## Funktioner

| | |
|---|---|
| **Gennemgang** | Fem hurtige afgørelser på 1–5 og 15 udvidede kombinationer. Tilfældig afgørelse er valgfri og slået fra som standard. Enter klargør indsendelsen; næste Enter sender. Esc annullerer. |
| **Begge opgavetyper** | Genkender formularen med aim assist, wallhack, auto-bhop og bot samt spørgsmålet “Is the Subject cheating beyond a reasonable doubt?”. Den nye opgave har kompakt layout, valg på 1–3 og en nedtællende låseindikator. |
| **Afspiller** | Søgelinje begrænset til klippets start/slut, spring på ±5 sekunder, billedtrin på 1/64 sekund, Shift-hastighedsboost (0,5×–4×), lydløs og fuldskærm. |
| **Genvejstaster** | Omtildel 18 handlinger i et separat vindue. Konflikter forklares før ændringer, og sidens tastetips følger dine valg. |
| **Animationer** | Live forhåndsvisning med seks indikatorstile, tre hastigheder og tænd/sluk. Følger systemets reducerede bevægelse som standard. |
| **Afgørelser** | Et “?” forklarer kategorierne, og vigtige formuleringer fremhæves. |
| **Lokal historik** | Historik pr. klip og kamp, JSON-import/eksport, HTML-rapporter og sammenlægning af sikkerhedskopier. |
| **Invitationsside** | Redesignet /vacnet/createinvite med vis/skjul, kopiering med ét klik, kravoversigt og Enter/Esc-genveje. |
| **29 sprog** | Bruger dit valg, Steams ?l=-indstilling og derefter browserens sprog. Sprogvalget skifter også VACNets tekst. |
| **Lydeffekter** | Web Audio-signaler med lydstyrke, forhåndslytning og tænd/sluk. |
| **Robusthed** | Isolerede starttrin og reserveopslag. Hvis siden ikke genkendes, deaktiveres DemoScope uden at ændre VACNet. Diagnostik kan kopieres til fejlrapporter. |

## Installation

1. Installer [Tampermonkey](https://www.tampermonkey.net/) eller [Violentmonkey](https://violentmonkey.github.io/). Scriptet bruger GM_addStyle og unsafeWindow.
2. [Installer DemoScope](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js), og bekræft installationen.
3. Log ind på Steam, og åbn [counter-strike.net/vacnet](https://www.counter-strike.net/vacnet/).
4. Åbn et gennemgangsklip. Scriptet starter automatisk; /vacnet/join er undtaget.

Opdateringer leveres gennem din userscript-manager. DemoScope virker i Chromium-baserede browsere og Firefox.

## Genvejstaster

Genvejene virker, når fokus ikke er i et redigerbart felt eller en anden kontrol. **Alle taster kan ændres under Indstillinger → Genvejstaster.**

| Tast | Handling |
|---|---|
| 1–5 | Klassisk formular: profilerne bot + aim + wallhack, aim + wallhack, rage, ren spiller eller usikker. |
| 1–3 | Én opgave: snyd, usikker eller ingen snyd set. |
| Enter | Bekræft; i klassisk formular klargør første tryk, næste sender. |
| Esc | Annuller ventende afgørelse eller nulstil første Enter. |
| Shift (hold) | Hastighed 0,5×–4×, standard 2×. |
| ← → | Spring 5 sekunder tilbage/frem. |
| , . | Gå ét billede (1/64 sekund) tilbage/frem. |
| Space | Afspil/pause. |
| M / F | Lydløs/fuldskærm; dobbeltklik skifter også fuldskærm. |
| F2 | Åbn indstillinger. |
| Enter / Esc (invitation) | Færdig/luk. |

## Tilpasning

Åbn indstillingerne med F2. Genvejstaster kan nulstilles enkeltvis eller samlet; konflikter kan erstattes, byttes eller annulleres. Animationer har seks stilarter, lyd kan slås til/fra og testes, historik har grænser og JSON/HTML-eksport. Du kan skjule elementer i sidefoden. Diagnostik kopieres til fejlrapporter. Nulstilling gendanner lyd, genvejstaster og animationer, men bevarer historikken.

## Sprog

DemoScope understøtter bulgarsk, kinesisk (forenklet og traditionelt), tjekkisk, dansk, hollandsk, engelsk, finsk, fransk, tysk, græsk, ungarsk, indonesisk, italiensk, japansk, koreansk, norsk, polsk, portugisisk (Portugal og Brasilien), rumænsk, russisk, spansk (Spanien og Latinamerika), svensk, thai, tyrkisk, ukrainsk og vietnamesisk. Skift via vælgeren på siden.

## Rapportering af et problem

Valve kan ændre VACNet uden varsel. Tryk F2, åbn **Diagnostik**, vælg **Kopiér diagnostik**, og indsæt teksten i en ny [sag](https://github.com/ebayybe/DemoScope/issues), gerne med et skærmbillede. Rapporten indeholder version, tidspunkt, browsersprog, user-agent, fundne elementer, fejlede starttrin og sidens struktur (tags, id'er og klasser), men ingen sidetekst, kontonavn eller historik. VACNet fortsætter normalt, selv når DemoScope slår sig fra.

## Ofte stillede spørgsmål

<details><summary><b>Hvorfor blev DemoScope deaktiveret?</b></summary>

VACNet-siden er ændret og genkendes ikke længere. Scriptet trækker sig tilbage for ikke at efterlade en halvfærdig side. Kopiér diagnostikken og opret en sag.
</details>

<details><summary><b>Hvorfor har VACNet et andet sprog?</b></summary>

DemoScope sender sproget via Steams ?l=-parameter. Hvis VACNet mangler oversættelsen, bruger den sit standardsprog; DemoScopes etiketter beholder dit valg.
</details>

<details><summary><b>Vælger DemoScope afgørelser for mig?</b></summary>

Nej. Forvalg trykker kun på valgte knapper, og du bekræfter altid indsendelsen. Gennemgå selv hvert klip og følg reglerne.
</details>

<details><summary><b>Gemmes historik for én-spørgsmålsopgaven?</b></summary>

Ikke endnu. Historik gemmes kun for den klassiske formular med fire spørgsmål.
</details>

<details><summary><b>Hvordan gendanner jeg standardtaster?</b></summary>

Brug nulstillingsikonet ved en ændret tast, “Nulstil alle” i genvejstastvinduet eller “Nulstil” i indstillingerne.
</details>

## Arkitektur

DemoScope er én selvkørende funktion ved document-start, ikke i frames. init() vælger sidetype og tilslutter moduler. Referencen til alle 217 funktioner, parametre, returværdier og lagringsnøgler findes i [en_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/en_FUNCTIONS.md).

<details><summary><b>Moduloversigt</b></summary>

| Modul | Ansvar | Funktioner |
|---|---|---|
| Localization | UI-sprog, tekster, flag, sprogvalg og VACNet ?l= | getActiveLocale, tr, settingText, syncSelectedLanguage, installLanguageSelector |
| Segment & player | Klipgrænser, Video.js/HTML5 og segmentloop | parseSegmentBounds, createPlayerAdapter, waitForPlayerAdapter, blockSegmentLoopGuard |
| Player enhancements | Søgelinje, tastetips, hastighed og billedtrin | installCustomControls, installPlayerEnhancements |
| Hotkeys | Handlinger, bindinger, konflikter og vindue | getBinding, findKeyConflict, getActionForEvent, ensureHotkeysDialog |
| Verdict presets | Forvalg og valgtilstand | applyPreset, detectActivePreset, buildEnhancementBar |
| Single-question task | Etiketter, låseindikator og taster | isCheatingMode, selectCheatingVerdict, updateCheatingLock |
| Submit flow | Bekræftelse, annullering og indsendelse | invokeProceedAction, invokeCancelAction, submitVerdictForm, finishSubmitLoadingWhenReady |
| Local history | Historik, sikkerhedskopier og rapporter | appendReviewHistory, importLocalHistory, exportCombinedHistoryReports |
| Settings & animations | Indstillinger, lyd og animationer | ensureSettingsDialog, installExtraSettingsSections, ensureAnimationsDialog, playUiSound |
| Invite page | Invitationsside og genveje | installInvitePage, installInviteExtras |
| Resilience | Fejlisolering, deaktivering og diagnostik | safeStep, disableDemoScope, buildDiagnosticsReport |
| Bootstrap | Startpunkt | init, enhanceLayout |
</details>

## Privatliv

DemoScope sender ingen telemetri og uploader ikke indstillinger eller historik. VACNet modtager afgørelser via sin normale formular. Data bliver i browserens localStorage (nøgler med præfikset demoscope) og sessionStorage. Slet dem under **Indstillinger → Lokal historik → Ryd historik**. Diagnostik kopieres kun til udklipsholderen; du vælger selv, om den deles.

## Ansvarsfraskrivelse

DemoScope er et uofficielt fællesskabsprojekt, ikke tilknyttet eller godkendt af Valve Corporation. Det træffer ikke afgørelser for dig. Gennemgå selv klippene og følg programmets regler. Brug på eget ansvar.

## Licens

Udgivet under [MIT-licensen](https://github.com/ebayybe/DemoScope/blob/main/LICENSE).



