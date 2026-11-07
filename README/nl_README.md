<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/README/README.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/README/bg_README.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/README/hu_README.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/README/vi_README.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/README/el_README.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/README/da_README.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/README/id_README.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/README/es-ES_README.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/README/es-419_README.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/README/it_README.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/README/zh-TW_README.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/README/zh-CN_README.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/README/ko_README.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/README/de_README.md) · **Nederlands** · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/README/no_README.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/README/pl_README.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-PT_README.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-BR_README.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/README/ro_README.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/README/ru_README.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/README/th_README.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/README/tr_README.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/README/uk_README.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/README/fi_README.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/README/fr_README.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/README/cs_README.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/README/sv_README.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/README/ja_README.md)

</div>

<br>

<div align="center">

# DemoScope

**Een toetsenbordgerichte beoordelingstool voor CS2 VACNet.**<br>
Verdicteinstellingen · speler die rekening houdt met clipgrenzen · aanpasbare toetsen · privé lokale geschiedenis · 29 talen.

<br>

[![Versie](https://img.shields.io/badge/version-1.2.0-3b82f6?style=flat-square)](https://github.com/ebayybe/DemoScope/releases)
[![Licentie](https://img.shields.io/badge/license-GPL--3.0-22c55e?style=flat-square)](https://github.com/ebayybe/DemoScope/blob/main/LICENSE)
[![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-f59e0b?style=flat-square)](#installatie)
[![Talen](https://img.shields.io/badge/languages-29-8b5cf6?style=flat-square)](#talen)
[![Privacy](https://img.shields.io/badge/telemetry-none-64748b?style=flat-square)](#privacy)

<br>

[**⬇ DemoScope installeren**](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js)

[Functies](#functies) · [Installatie](#installatie) · [Sneltoetsen](#sneltoetsen) · [Aanpassen](#aanpassen) · [Documentatie](https://github.com/ebayybe/DemoScope/blob/main/docs/nl_FUNCTIONS.md) · [Wijzigingslog](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/nl_CHANGELOG.md)

</div>

<br>

## Schermafbeeldingen

<table>
  <tr>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png" alt="Welkomstscherm van DemoScope"></a><br><sub><b>Welkomstscherm</b></sub></td>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png" alt="Hoofdinterface van DemoScope"></a><br><sub><b>Hoofdinterface</b></sub></td>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png" alt="Uitnodigingspagina van DemoScope"></a><br><sub><b>Een vriend uitnodigen</b></sub></td>
  </tr>
</table>

## Overzicht

DemoScope verbetert de Counter-Strike VACNet-beoordelingspagina’s (`counter-strike.net/vacnet`). In plaats van voor elke korte clip door het verdictoordeel te klikken, werk je met het toetsenbord: verdictepreset, een zoekbalk binnen de clip, stap voor stap door frames, tijdelijk versnellen, indienen in twee stappen en een privégeschiedenis van je eigen verdicten. Het ondersteunt beide huidige VACNet-formulieren (de klassieke versie met vier vragen en de nieuwe taak met één vraag) en beschermt zichzelf wanneer Valve de pagina wijzigt. Alles draait lokaal in je browser.

## Functies

| | |
|---|---|
| **Beoordelingsproces** | 5 snelle verdictepreset op `1`–`5` en 15 uitgebreide combinaties, optionele willekeurige verdicten (standaard uit) en veilig indienen in twee stappen: `Enter` activeert de knop, een tweede `Enter` verzendt. `Esc` annuleert. |
| **Beide taaktypen** | Herkent het klassieke formulier (aim assist, wallhack, auto-bhop, bot) en de taak met één vraag (“Is the Subject cheating beyond a reasonable doubt?”). Deze krijgt een compacte indeling met gelabelde verdicten op `1`–`3` en een vergrendelingsindicator tot het einde van de clip. |
| **Clipbewuste speler** | Zoekbalk en tijdweergave binnen het begin en einde van de clip, sprongen van ±5 s, frame-stappen van 1/64 s, versnellen door `Shift` ingedrukt te houden (0,5×–4×), sneltoetsen voor dempen en volledig scherm. |
| **Sneltoetsen naar wens** | Wijs elk van de 18 acties opnieuw toe in een apart venster. Conflicten worden uitgelegd vóór vervanging (actie, groep en functie), en alle toetsaanwijzingen op de pagina volgen jouw instellingen. |
| **Animaties** | Venster met livevoorbeeld, zes indicatorstijlen, drie snelheden en een aan/uit-schakelaar. Houdt standaard rekening met de systeeminstelling ‘minder beweging’. |
| **Begrijpelijke verdicten** | Een ‘?’ naast elke verdictecategorie geeft uitleg; belangrijke woordgroepen worden gemarkeerd zodat ‘not’ niet over het hoofd wordt gezien. |
| **Privé lokale geschiedenis** | Geschiedenis per clip en wedstrijd in `localStorage`, JSON importeren en exporteren, HTML-rapporten en meerdere back-ups samenvoegen tot één rapport. |
| **Uitnodigingspagina** | Vernieuwde pagina `/vacnet/createinvite` met tonen/verbergen, kopiëren met één klik, overzicht met vereisten, sluitknop en `Enter` / `Esc`-sneltoetsen. |
| **29 talen** | Volgt eerst jouw keuze, dan de Steam-instelling `?l=` en daarna de browsertaal. Een taal kiezen in DemoScope verandert ook VACNets eigen tekst. |
| **Geluidseffecten** | Gegenereerde Web Audio-signalen met volume, voorbeeld en aan/uit-schakelaar. |
| **Bestand tegen herontwerpen** | Configuratiestappen zijn geïsoleerd, belangrijke elementen hebben alternatieve zoekmethoden en als de pagina onherkenbaar wordt, schakelt DemoScope zichzelf uit zonder VACNet aan te passen. Met één klik kopieer je een diagnose voor bugmeldingen. |

## Installatie

1. Installeer een userscriptmanager zoals [Tampermonkey](https://www.tampermonkey.net/) of [Violentmonkey](https://violentmonkey.github.io/). Het script gebruikt `GM_addStyle` en `unsafeWindow`.
2. [**DemoScope installeren**](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js) en bevestig de installatie in de manager.
3. Meld je aan bij Steam en open [counter-strike.net/vacnet](https://www.counter-strike.net/vacnet/).
4. Open een beoordelingsclip. DemoScope wordt automatisch geladen (de pagina `/vacnet/join` wordt overgeslagen).

Updates worden via je userscriptmanager geleverd. DemoScope werkt in Chromium-browsers en Firefox.

## Sneltoetsen

Sneltoetsen werken op beoordelingspagina’s wanneer een bewerkbaar veld of ander interactief element niet de focus heeft. **Elke toets hieronder kan worden aangepast** via **Settings → Hotkeys**.

| Toets | Actie |
|---|---|
| `1` … `5` | Klassiek formulier: preset toepassen (1 bot + aim + wallhack; 2 aim + wallhack; 3 rage; 4 schone speler; 5 onzeker). |
| `1` `2` `3` | Taak met één vraag: Cheating / Not sure / No cheats seen. |
| `Enter` | Bevestigen. Klassiek formulier: één keer indrukken om de knop te activeren, nogmaals om te verzenden. |
| `Esc` | Een verdict dat op bevestiging wacht annuleren, of de eerste `Enter` ongedaan maken. |
| `Shift` (ingedrukt houden) | Versnellen (0,5×–4×, standaard 2×, instelbaar op de pagina). |
| `←` `→` | 5 seconden terug / vooruit springen. |
| `,` `.` | Eén frame terug / vooruit (1/64 s). |
| `Space` | Afspelen / pauzeren. |
| `M` / `F` | Dempen / volledig scherm (dubbelklikken op video wisselt ook volledig scherm). |
| `F2` | Het instellingenvenster openen. |
| `Enter` / `Esc` *(uitnodigingspagina)* | Gereed / sluiten. |

## Aanpassen

Open instellingen met `F2`. De onderdelen zijn gerangschikt van meest naar minst gebruikt:

- **Hotkeys**: apart venster met alle acties, gegroepeerd op doel, reset per actie, ‘Reset all’ en conflictopties **Replace**, **Swap** of **Cancel**. `Esc` kan net als elke andere toets worden toegewezen.
- **Animations**: kies een stijl (pulse, breathe, ripple, heartbeat, orbit, blink), snelheid of schakel animaties uit. Elke kaart toont een livevoorbeeld.
- **Sound effects**: aan/uit, volume (ook met het muiswiel aanpasbaar) en een testknop.
- **Local history**: in-/uitschakelen, limieten (10/20/30/50 vermeldingen per sleutel, 100/200/300/500 sleutels), 12/24-uursnotatie, JSON-back-ups en HTML-rapporten.
- **Footer**: verberg de feedbacklink, rapportlink, copyrightregel of de volledige voettekst.
- **Diagnostics**: kopieer een rapport voor bugmeldingen (zie [Een probleem melden](#een-probleem-melden)).
- **Reset**: één knop zet geluid, sneltoetsen en animaties terug naar de standaardinstellingen. Je geschiedenis blijft behouden.

## Talen

DemoScope ondersteunt 29 talen: Bulgaars, Chinees (vereenvoudigd en traditioneel), Tsjechisch, Deens, Nederlands, Engels, Fins, Frans, Duits, Grieks, Hongaars, Indonesisch, Italiaans, Japans, Koreaans, Noors, Pools, Portugees (Portugal en Brazilië), Roemeens, Russisch, Spaans (Spanje en Latijns-Amerika), Zweeds, Thai, Turks, Oekraïens en Vietnamees. Je kunt de taal op elk moment wijzigen via de keuzelijst op de pagina.

## Een probleem melden

Valve kan VACNet-pagina’s zonder aankondiging wijzigen. Als iets niet meer werkt:

1. Druk op `F2`, open **Diagnostics** en klik op **Copy diagnostics**.
2. Plak de tekst in een nieuw [issue](https://github.com/ebayybe/DemoScope/issues), zo mogelijk met een schermafbeelding.

Het rapport bevat de scriptversie, het tijdstip, de browsertaal en user-agent, welke pagina-elementen zijn gevonden, mislukte configuratiestappen en de paginstructuur (alleen tags, ID’s en klassen). Het bevat geen pagin tekst, accountnaam of geschiedenis. Als de pagina niet meer herkenbaar is, schakelt DemoScope zich daar uit en meldt dat; VACNet blijft normaal werken.

## Veelgestelde vragen

<details>
<summary><b>DemoScope zegt dat het op deze pagina is uitgeschakeld. Wat is er gebeurd?</b></summary>

De VACNet-pagina komt niet meer overeen met wat DemoScope verwacht. Het script heeft zichzelf uitgeschakeld om een half opgebouwde interface te voorkomen. Kopieer de diagnose (zie hierboven) en open een issue; een update volgt meestal snel.
</details>

<details>
<summary><b>De tekst van VACNet-verdicts staat in een andere taal dan DemoScope.</b></summary>

Als je een taal kiest in DemoScope, vraagt het VACNet om die taal via Steams parameter `?l=`. Als VACNet geen vertaling heeft, gebruikt het zijn standaardtaal; de eigen labels van DemoScope blijven in jouw gekozen taal.
</details>

<details>
<summary><b>Kiest DemoScope de verdicts voor mij?</b></summary>

Nee. Presets klikken alleen op de verdictknoppen die jij hebt gekozen, en jij bevestigt altijd de verzending. Beoordeel elke clip zelf en volg de regels van het programma.
</details>

<details>
<summary><b>Wordt de geschiedenis voor de taak met één vraag opgeslagen?</b></summary>

Nog niet. De lokale geschiedenis wordt momenteel alleen bijgehouden voor het klassieke formulier met vier vragen.
</details>

<details>
<summary><b>Hoe herstel ik de standaardtoetsen?</b></summary>

Gebruik het resetpictogram naast een gewijzigde toets, **Reset all** in het Hotkeys-venster of **Reset** in het instellingenvenster. Die laatste optie zet ook geluid en animaties terug.
</details>

## Architectuur

DemoScope is één zelfaanroepende functie (`@run-at document-start`, `@noframes`). `init()` bepaalt het paginatype, controleert of het herkenbaar is en initialiseert de modules hieronder. De volledige referentie van alle 217 functies op topniveau, inclusief parameters, retourwaarden en opslagsleutels, staat in [nl_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/nl_FUNCTIONS.md).

<details>
<summary><b>Moduleoverzicht</b></summary>

| Module | Verantwoordelijkheid | Belangrijkste functies |
|---|---|---|
| `Localization` | UI-taal, tekst zoeken, vlaggen, taalkeuze en synchronisatie van VACNets `?l=` | `getActiveLocale`, `tr`, `settingText`, `syncSelectedLanguage`, `installLanguageSelector` |
| `Segment & player` | Leest clipgrenzen, verpakt Video.js/HTML5-afspelen en schakelt de native segmentlus uit | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | Zoekbalk, toetshintten, versnellen, frame-stappen en sneltoetsen | `installCustomControls`, `installPlayerEnhancements` |
| `Hotkeys` | Actieregister, bindingen, conflictcontrole en Hotkeys-venster | `getBinding`, `findKeyConflict`, `getActionForEvent`, `ensureHotkeysDialog` |
| `Verdict presets` | Presettabel, selectiestatus en willekeurige toepassing | `applyPreset`, `detectActivePreset`, `buildEnhancementBar` |
| `Single-question task` | Labels, vergrendelingsindicator en toetsen voor het nieuwe formulier | `isCheatingMode`, `selectCheatingVerdict`, `updateCheatingLock` |
| `Submit flow` | Bevestiging in twee stappen, annuleren, `verdict_labels[]`, controle van dezelfde origin en laadoverlay | `invokeProceedAction`, `invokeCancelAction`, `submitVerdictForm`, `finishSubmitLoadingWhenReady` |
| `Local history` | Geschiedenis per clip en wedstrijd, back-ups en rapporten | `appendReviewHistory`, `importLocalHistory`, `exportCombinedHistoryReports` |
| `Settings & animations` | Instellingenvenster en subvensters, geluid, indicatoranimaties | `ensureSettingsDialog`, `installExtraSettingsSections`, `ensureAnimationsDialog`, `playUiSound` |
| `Invite page` | Vernieuwde pagina, sluitknop en sneltoetsen | `installInvitePage`, `installInviteExtras` |
| `Resilience` | Geïsoleerde stappen, alternatieve zoekmethoden, uitschakeling en diagnostiek | `safeStep`, `disableDemoScope`, `buildDiagnosticsReport` |
| `Bootstrap` | Startpunt | `init`, `enhanceLayout` |

</details>

## Privacy

DemoScope verstuurt geen telemetrie en uploadt geen instellingen of geschiedenis. Wanneer je een verdict indient, ontvangt VACNet dit via het normale formulier van de site. Instellingen en geschiedenis blijven in je browser: in `localStorage` (sleutels die met `demoscope` beginnen) en `sessionStorage`. Gebruik **Settings → Local history → Clear history** om de geschiedenis te wissen. Het diagnoserapport wordt alleen naar je klembord gekopieerd; jij beslist of je het deelt.

## Disclaimer

DemoScope is een onofficieel communityproject, niet verbonden aan of goedgekeurd door Valve Corporation. Het kiest nooit een verdict voor jou. Beoordeel elke clip zelf en volg de regels van het reviewprogramma. Gebruik op eigen risico.

## Licentie

Uitgebracht onder de [GNU GPL v3.0](https://github.com/ebayybe/DemoScope/blob/main/LICENSE)-licentie.

## Dankbetuigingen

- **Oorspronkelijk idee en basisinterface:** [*CS2 VACNet Review — Player & Layout Enhancements*](https://greasyfork.org/ru/scripts/591778-cs2-vacnet-review-player-layout-enhancements) van skinsales / goodvibes (MIT).
- **Verwant concept en Russischtalige fork:** [*VACLens RU — CS2 Review Assistant*](https://greasyfork.org/ru/scripts/592414-vaclens-ru-cs2-review-assistant) van authorless (MIT).
- **Herziening van de architectuur, herbruikbaar framework, ondersteuning voor 29 talen en aangepaste oordeelpresets:** ebayybe.
