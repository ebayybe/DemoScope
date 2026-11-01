<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/README/README.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/README/bg_README.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/README/hu_README.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/README/vi_README.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/README/el_README.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/README/da_README.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/README/id_README.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/README/es-ES_README.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/README/es-419_README.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/README/it_README.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/README/zh-TW_README.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/README/zh-CN_README.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/README/ko_README.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/README/de_README.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/README/nl_README.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/README/no_README.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/README/pl_README.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-PT_README.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-BR_README.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/README/ro_README.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/README/ru_README.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/README/th_README.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/README/tr_README.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/README/uk_README.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/README/fi_README.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/README/fr_README.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/README/cs_README.md) · **Svenska** · [日本語](https://github.com/ebayybe/DemoScope/blob/main/README/ja_README.md)

</div>

# DemoScope
[![Version](https://img.shields.io/badge/version-1.4.0-3b82f6?style=flat-square)](https://github.com/ebayybe/DemoScope/releases)
[![License](https://img.shields.io/badge/license-MIT-22c55e?style=flat-square)](https://github.com/ebayybe/DemoScope/blob/main/LICENSE)
[![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-f59e0b?style=flat-square)](#installation)
[![Languages](https://img.shields.io/badge/languages-29-8b5cf6?style=flat-square)](#språk)
[![Privacy](https://img.shields.io/badge/telemetry-none-64748b?style=flat-square)](#integritet)

[funktioner](#funktioner) · [installation](#installation) · [kortkommandon](#kortkommandon) · [anpassning](#anpassning) · [Documentation](https://github.com/ebayybe/DemoScope/blob/main/docs/sv_FUNCTIONS.md) · [Changelog](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/sv_CHANGELOG.md)

**Ett tangentbordsfokuserat verktyg för granskning av CS2 VACNet.**<br>
Förinställda bedömningar · klippmedveten spelare · anpassningsbara snabbtangenter · privat lokal historik · 29 språk.

[⬇ Installera DemoScope](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js)

## Skärmbilder

<table><tr>
<td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png" alt="DemoScopes välkomstskärm"></a><br><b>Välkomstskärm</b></td>
<td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png" alt="DemoScopes huvudgränssnitt"></a><br><b>Huvudgränssnitt</b></td>
<td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png" alt="DemoScopes inbjudningssida"></a><br><b>Bjud in en vän</b></td>
</tr></table>

## Översikt

DemoScope förbättrar Counter-Strike VACNets granskningssidor. Använd tangentbordet för förinställda bedömningar, sökning begränsad till klippet, bildrutevis stegning, tillfällig hastighetsökning, inskickning i två steg och en privat historik över dina egna bedömningar. Skriptet stöder både det klassiska formuläret med fyra frågor och den nyare uppgiften med en fråga. Om Valve ändrar sidan stängs skriptet av på ett säkert sätt. Allt körs lokalt i webbläsaren.

## Funktioner

| | |
|---|---|
| **Granskningsflöde** | Fem snabba val på 1–5 och 15 utökade kombinationer. Slumpmässig bedömning är valfri och av som standard. Enter förbereder inskickningen; nästa Enter skickar. Esc avbryter. |
| **Båda uppgiftstyperna** | Känner igen det klassiska formuläret (aim assist, wallhack, auto-bhop, bot) och frågan ”Is the Subject cheating beyond a reasonable doubt?”. Den nya uppgiften har kompakt layout, val märkta 1–3 och en låsindikator som räknar ner till klippets slut. |
| **Klippmedveten spelare** | Tidslinjen begränsas till klippets början/slut, hopp på ±5 sekunder, bildruteinsteg på 1/64 sekund, Shift-hastighetsökning (0,5×–4×), ljud av och helskärmsgenväg. |
| **Snabbtangenter** | Tilldela om 18 åtgärder i ett eget fönster. Konflikter förklaras innan något ersätts och sidans tangenttips följer dina val. |
| **Animationer** | Liveförhandsvisning med sex indikatorstilar, tre hastigheter och av/på. Följer som standard systemets inställning för minskad rörelse. |
| **Tydliga bedömningar** | Ett ”?” förklarar varje kategori och viktiga formuleringar markeras så att ”inte” inte missas. |
| **Privat lokal historik** | Historik per klipp och match, JSON-import/export, HTML-rapporter och sammanslagning av säkerhetskopior. |
| **Inbjudningssida** | Omdesignad /vacnet/createinvite med visa/dölj, kopiering med ett klick, kravöversikt, stängknapp samt Enter/Esc-genvägar. |
| **29 språk** | Använder ditt val, Steams ?l=-inställning och därefter webbläsarens språk. Språkvalet ändrar också VACNets text. |
| **Ljudeffekter** | Syntetiska Web Audio-signaler med volym, förhandslyssning och av/på. |
| **Tåligt vid omdesign** | Isolerade startsteg och reservsökningar. Om sidan inte känns igen stänger DemoScope av sig utan att ändra VACNet. Diagnostik kan kopieras till felrapporter. |

## Installation

1. Installera [Tampermonkey](https://www.tampermonkey.net/) eller [Violentmonkey](https://violentmonkey.github.io/). Skriptet använder GM_addStyle och unsafeWindow.
2. [Installera DemoScope](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js) och bekräfta installationen.
3. Logga in på Steam och öppna [counter-strike.net/vacnet](https://www.counter-strike.net/vacnet/).
4. Öppna ett granskningsklipp. Skriptet startar automatiskt; /vacnet/join är undantagen.

Uppdateringar levereras via userscript-hanteraren. DemoScope fungerar i Chromium-baserade webbläsare och Firefox.

## Kortkommandon

Genvägarna fungerar när fokus inte ligger i ett redigerbart fält eller en annan kontroll. **Alla tangenter kan ändras under Inställningar → Snabbtangenter.**

| Tangent | Åtgärd |
|---|---|
| 1–5 | Klassisk form: förval för bot + aim + wallhack, aim + wallhack, rage, ren spelare eller osäker. |
| 1–3 | En fråga: fusk / osäker / inget fusk upptäckt. |
| Enter | Bekräfta; i klassisk form förbereder första trycket och nästa skickar. |
| Esc | Avbryt väntande bedömning eller återställ första Enter. |
| Shift (håll) | Hastighet 0,5×–4×, standard 2×. |
| ← → | Hoppa 5 sekunder bakåt/framåt. |
| , . | Gå en bildruta (1/64 sekund) bakåt/framåt. |
| Space | Spela upp/pausa. |
| M / F | Ljud av/fullskärm; dubbelklick växlar också fullskärm. |
| F2 | Öppna inställningarna. |
| Enter / Esc (inbjudningssida) | Klar/stäng. |

## Anpassning

Öppna inställningarna med F2. Snabbtangenter kan återställas enskilt eller alla på en gång; konflikter kan ersättas, bytas eller avbrytas. Animationer har sex stilar och tre hastigheter. Ljud kan stängas av, justeras och testas. Lokal historik har gränser och JSON-/HTML-export. Dölj valfria delar av sidfoten. Diagnostik kopieras för felrapporter. Återställning återställer ljud, tangenter och animationer, men behåller historiken.

## Språk

DemoScope stöder bulgariska, kinesiska (förenklad och traditionell), tjeckiska, danska, nederländska, engelska, finska, franska, tyska, grekiska, ungerska, indonesiska, italienska, japanska, koreanska, norska, polska, portugisiska (Portugal och Brasilien), rumänska, ryska, spanska (Spanien och Latinamerika), svenska, thailändska, turkiska, ukrainska och vietnamesiska. Byt när som helst via språkvalet på sidan.

## Rapportera ett problem

Valve kan ändra VACNet utan förvarning. Tryck F2, öppna **Diagnostik**, välj **Kopiera diagnostik** och klistra in texten i ett nytt [ärende](https://github.com/ebayybe/DemoScope/issues), gärna med en skärmbild. Rapporten innehåller version, tid, webbläsarspråk, user-agent, hittade element, startfel och sidans struktur (taggar, id:n och klasser), men ingen sidtext, kontonamn eller historik. VACNet fungerar normalt även om DemoScope stänger av sig.

## Vanliga frågor

<details><summary><b>Varför inaktiverades DemoScope på sidan?</b></summary>

VACNet-sidan har ändrats och känns inte längre igen. Skriptet stänger av sig för att inte lämna sidan halvfärdig. Kopiera diagnostiken och skapa ett ärende.
</details>

<details><summary><b>Varför har VACNet ett annat språk?</b></summary>

DemoScope begär språket via Steams ?l=-parameter. Om VACNet saknar översättningen använder tjänsten sitt standardspråk, medan DemoScopes etiketter behåller ditt val.
</details>

<details><summary><b>Väljer DemoScope bedömningar åt mig?</b></summary>

Nej. Förvalen klickar bara på valda bedömningsknappar, och du bekräftar alltid inskickningen. Granska varje klipp själv och följ programmets regler.
</details>

<details><summary><b>Sparas historik för uppgiften med en fråga?</b></summary>

Inte ännu. Lokal historik sparas bara för det klassiska formuläret med fyra frågor.
</details>

<details><summary><b>Hur återställer jag standardtangenterna?</b></summary>

Använd återställningsikonen bredvid en ändrad tangent, ”Återställ alla” i snabbfönstret eller ”Återställ” i inställningarna.
</details>

## Arkitektur

DemoScope är en självstartande funktion vid document-start och körs inte i frames. init() väljer sidtyp, kontrollerar sidan och ansluter modulerna. Referensen för alla 217 toppnivåfunktioner, parametrar, returvärden och lagringsnycklar finns i [sv_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/sv_FUNCTIONS.md).

<details><summary><b>Modulöversikt</b></summary>

| Modul | Ansvar | Viktiga funktioner |
|---|---|---|
| Localization | UI-språk, texter, flaggor, språkval och VACNet ?l= | getActiveLocale, tr, settingText, syncSelectedLanguage, installLanguageSelector |
| Segment & player | Klippgränser, Video.js/HTML5 och segmentloop | parseSegmentBounds, createPlayerAdapter, waitForPlayerAdapter, blockSegmentLoopGuard |
| Player enhancements | Tidslinje, tangenttips, hastighet och bildrutor | installCustomControls, installPlayerEnhancements |
| Hotkeys | Åtgärder, bindningar, konflikter och fönster | getBinding, findKeyConflict, getActionForEvent, ensureHotkeysDialog |
| Verdict presets | Förval och valt läge | applyPreset, detectActivePreset, buildEnhancementBar |
| Single-question task | Etiketter, låsindikator och tangenter | isCheatingMode, selectCheatingVerdict, updateCheatingLock |
| Submit flow | Bekräftelse, avbrytning och inskickning | invokeProceedAction, invokeCancelAction, submitVerdictForm, finishSubmitLoadingWhenReady |
| Local history | Historik, säkerhetskopior och rapporter | appendReviewHistory, importLocalHistory, exportCombinedHistoryReports |
| Settings & animations | Inställningar, ljud och animationer | ensureSettingsDialog, installExtraSettingsSections, ensureAnimationsDialog, playUiSound |
| Invite page | Inbjudningssida och genvägar | installInvitePage, installInviteExtras |
| Resilience | Isolerade steg, reservsökning och diagnostik | safeStep, disableDemoScope, buildDiagnosticsReport |
| Bootstrap | Startpunkt | init, enhanceLayout |
</details>

## Integritet

DemoScope skickar ingen telemetri och laddar inte upp inställningar eller historik. VACNet får bedömningen via webbplatsens vanliga formulär. Data stannar i webbläsarens localStorage (nycklar med prefixet demoscope) och sessionStorage. Rensa historiken under **Inställningar → Lokal historik → Rensa historik**. Diagnostik kopieras bara till urklipp; du avgör om den delas.

## Ansvarsfriskrivning

DemoScope är ett inofficiellt communityprojekt, inte anslutet till eller godkänt av Valve Corporation. Det fattar inte beslut åt dig. Granska klippen själv och följ programmets regler. Användning sker på egen risk.

## Licens

Publicerad under [MIT-licensen](https://github.com/ebayybe/DemoScope/blob/main/LICENSE).



