<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/en_CHANGELOG.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/bg_CHANGELOG.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/hu_CHANGELOG.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/vi_CHANGELOG.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/el_CHANGELOG.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/da_CHANGELOG.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/id_CHANGELOG.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-ES_CHANGELOG.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-419_CHANGELOG.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/it_CHANGELOG.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-TW_CHANGELOG.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-CN_CHANGELOG.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ko_CHANGELOG.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/de_CHANGELOG.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/nl_CHANGELOG.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/no_CHANGELOG.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pl_CHANGELOG.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-PT_CHANGELOG.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-BR_CHANGELOG.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ro_CHANGELOG.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ru_CHANGELOG.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/th_CHANGELOG.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/tr_CHANGELOG.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/uk_CHANGELOG.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fi_CHANGELOG.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fr_CHANGELOG.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/cs_CHANGELOG.md) · **Svenska** · [日本語](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ja_CHANGELOG.md)

</div>

# DemoScope v1.2.0

En självskyddande version: DemoScope hanterar nu ändringar på VACNets sida i stället för att sluta fungera halvvägs och berättar för dig och utvecklaren vad som hände.

Förbättringar av inställningar, inbjudningssida och bedömningstexter.

Kortkommandon, animationer och en laddningsfix.

Stöd för VACNets uppgift med en fråga.

Kompatibilitet med VACNets omarbetade granskningssida.

### Tillagt

- **Isolerade konfigurationssteg.** Varje layout- och installationssteg körs separat. Fel loggas och övriga steg fortsätter.
- **Alternativa sökningar** efter videobehållaren, bedömningsbehållaren och inskickningsområdet. Om VACNet byter namn på videobehållarens klass hittar DemoScope den via spelarelementet.
- **Säker avstängning.** Om video eller bedömningsformulär saknas, eller minst fem konfigurationssteg misslyckas, återställer DemoScope sina ändringar, återställer VACNets sidfot, behåller bara inställningsfönstret och visar ett engångsmeddelande. Sidan med tom kö känns fortfarande igen och utlöser inte detta.
- **Diagnosrapport** (Settings → Diagnostics → Copy diagnostics): version, tid, språk, webbläsare, sid- och uppgiftstyp, 22 elementkontroller (`ok` / `MISSING`), loggade stegfel och sidans struktur före och efter DemoScopes ändringar. Strukturen innehåller endast taggar, ID:n och klasser, aldrig sidtext. Om urklipp blockeras visas rapporten i ett markerbart fält.
- Vänta upp till 2 s innan en delvis återgiven sida bedöms.

- **Stängknapp på inbjudningssidan.** × i kortets hörn återgår till klippen på samma sätt som ”Done”.
- **Kortkommandon på inbjudningssidan:** `Enter` utför ”Done”, `Esc` stänger sidan. De ignoreras när en knapp, länk, ett fält, en dialogruta eller språklistan har fokus. De kan ändras i Hotkeys, gruppen ”Invite page”.
- **Sidberoende tangentkonflikter.** Inbjudningssidan saknar spelare, så `Enter` / `Esc` där krockar inte längre med samma tangenter på granskningssidan. Inställningstangenten är fortfarande global.
- **Mörka, tunna rullningslister** i inställningar, underfönster och bedömningslistan samt mörkt color-scheme.

- **Hotkeys-fönstret** (Settings → Hotkeys): alla 18 kortkommandon kan ändras, är grupperade efter åtgärd och har beskrivning och återställningsknapp. ”Reset all” kräver en extra bekräftelse.
  - **Konflikthantering.** För en upptagen tangent visas åtgärd, grupp och funktion; välj Replace, Swap eller Cancel.
  - `Esc` kan tilldelas och stänger inte fönstret medan en tangent registreras. `Tab`, modifierartangenter, Caps Lock, `F5`, `F11` och `F12` avvisas; `Shift` tillåts bara för den hållna åtgärden ”Speed boost”.
  - Tipsen under videon, märken och Continue/Cancel-knappar följer dina tilldelningar.
- `Esc` avbryter en bedömning som väntar på bekräftelse och det första `Enter`-steget i en inskickning med två steg.
- **Animations-fönstret** (Settings → Animations): sex stilar, liveförhandsvisning, tre hastigheter och en av/på-knapp. Om systemet ber om minskad rörelse startar animationerna avstängda.
- `Enter` och `Esc` fungerar även när en bedömningsradioknapp har fokus.

- **Uppgift med en fråga.** VACNet kan fråga ”Is the Subject cheating beyond a reasonable doubt?” med svaren Cheating / Uncertain / No cheats seen. DemoScope känner igen uppgiften och byter till en kompakt layout utan snabba bedömningar, utökade kombinationer och slumpgenerator.
- Bedömningsetiketter på DemoScopes språk, tangentmärken `1–3` och motsvarande kortkommandon.
- **Låsindikator.** Uncertain och No cheats seen låses upp när klippet är slut. Kortet visar återstående tid och förlopp; låsta val är nedtonade och deras tangent spelar ett felljud och skakar kortet.
- Tipsen under videon visar `Enter` och `1–3`; bedömningsknapparna är högre.

- **DemoScopes egna förklaringar** för de fyra bedömningskategorierna på alla 29 språk. ”?”-rutorna är inte längre beroende av VACNets engelska frågetext, som förekommer på vissa språk, exempelvis ukrainska.

- **Hjälpknappen ”?”** bredvid AIM ASSIST, WALL HACK, AUTO BHOP och BOT öppnar en förklaring. Den stängs vid klick utanför, ett nytt klick eller `Esc`. Den får inte tangentbordsfokus, så `Enter` och `Space` behåller sina granskningsfunktioner.

### Ändrat

- **Nytt utseende för inställningsfönstret.** Avsnitten sorteras efter användning: Hotkeys, Animations, Sound effects, Local history, Footer, Diagnostics (tillagt i v1.2.0), Reset. Hotkeys och Animations visar sammanfattningar som uppdateras när du ändrar något.
- **En återställning för allt.** Återställer ljud, volym, kortkommandon och animationer; historiken behålls.
- Inställningsfönstrets tangent ändras nu i Hotkeys.
- **Siffran för tangenten har tagits bort ur bekräftelsetexten.** Det förhindrar ”2Not sure” och ”3No cheats seen”; tangentmärket ritas med CSS.
- Alternativ 2 i uppgiften med en fråga heter nu ”Not sure” och använder samma jag-form som VACNets text.

- **Markering av nyckelfraser är tillbaka** på bedömningsknapparna: sökfrasen är fet och orange, ”not” i negativa svar är dämpat blå. Valda knappar förblir läsbara.
- `normalizeVerdictLabels` tar nu bara bort b-markeringen så att markeringskoden finns kvar.

HTML-elementet: `<b>`.

- Portalrubrik och instruktionskort döljs; klippräknaren visas även i rubrikmärket.
- Continue fästs längst ned i panelen och förblir synlig vid långa översättningar.

Tekniska selektorer: `.verdicts-container-inner`, `#submitbuttons`.

### Fixat

- **Lång ”loading next clip”** efter inskickning av en uppgift med en fråga: kontrollen väntar inte längre på det saknade `aimassist`-fältet, godtar bedömningsformulär och mediametadata, börjar tidigare och stänger överlägget tyst efter 3 sekunder på sidor utan klipp.
- Sidans kortkommandon (`Space`, `Enter` osv.) påverkar inte längre sidan bakom en öppen dialog.

- Local history-knappen har samma storlek som märkena intill, radbryts inte, förkortar långa etiketter och märkraden radbryts i stället för att tryckas ihop.

- **Bedömningstexten förblev på webbläsarens språk** efter språkbyte i DemoScope. VACNet använder Steams `?l=`-parameter, medan DemoScope tidigare bara ändrade sina egna etiketter. Granskningssidan öppnas nu med valt `?l=`; saknas parametern hämtas sidan en gång till. VACNets faktiska språk läses från `l=` i CSS- och skriptadresserna; en begränsning till ett försök förhindrar omdirigeringsloopar när språket inte stöds.

- **`Space`, `M` och `F` verkade inte fungera**, eftersom VACNet / Video.js hanterade samma tangent igen. DemoScope fångar nu tangenterna.
- I Firefox aktiverar inte längre släpp av `Space` den fokuserade spelarknappen.
- Spelarens kortkommandon fungerar även när en bedömningsradioknapp har fokus.

- **Panelen byggdes bara delvis** efter VACNets ändringar: portalrubrik, instruktionskort, rutnätslayout, borttagen verdicts-container-inner och flyttad submitbuttons orsakade ett `insertBefore`-fel. Steget `ensureReviewStructure` normaliserar uppmärkningen för både gammal och ny layout.

### Lokalisering

- 6 nya texter för diagnostik, kopieringsresultat och avstängningsmeddelanden på alla 29 språk.

- 12 nya texter för sammanfattningar, återställning, inbjudningsåtgärder och ”Not sure” på alla 29 språk.

CSS-inställningen: `color-scheme: dark`.

- Hotkeys- och Animations-fönstren (77 texter per språk) har översatts till de återstående 27 språken; tidigare fanns de bara på engelska och ryska.

- Hotkeys och Animations skrevs först på engelska och ryska; övriga översättningar lades till i v1.2.0.

De sex stilarna är pulse, breathe, ripple, heartbeat, orbit och blink.

- 5 nya texter (etiketter, titel, förklaring och låsmeddelande) på alla 29 språk.

# DemoScope v1.0.0

Första offentliga utgåvan av DemoScope-userscriptet för CS2 VACNet-granskningssidor.

### Tillagt
- Gränssnitt på 29 språk, automatiskt språkval, fem snabba bedömningsförval och 15 utökade kombinationer.
- Segmentbaserade videokontroller, bild-för-bild, `Shift`-hastighet, `Space` spela/pausa, `M` ljud av, `F` helskärm och tvåstegsinlämning med `Enter`.
- Konfigurerbar lokal granskningshistorik, JSON-import/export, HTML-rapporter och sammanslagning av flera JSON-säkerhetskopior.
- Förbättrad inbjudningssida, ljudinställningar, inställningskortkommando, dölj kontonamn, dialogruta med granskningsregler och valfri bedömningsslumpare (av som standard).

### Sekretess
- Ingen telemetri; lokala inställningar och historik laddas inte upp. Inskickade bedömningar skickas till VACNet via webbplatsens vanliga formulär.
