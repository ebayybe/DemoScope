<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/en_CHANGELOG.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/bg_CHANGELOG.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/hu_CHANGELOG.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/vi_CHANGELOG.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/el_CHANGELOG.md) · **Dansk** · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/id_CHANGELOG.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-ES_CHANGELOG.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-419_CHANGELOG.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/it_CHANGELOG.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-TW_CHANGELOG.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-CN_CHANGELOG.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ko_CHANGELOG.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/de_CHANGELOG.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/nl_CHANGELOG.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/no_CHANGELOG.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pl_CHANGELOG.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-PT_CHANGELOG.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-BR_CHANGELOG.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ro_CHANGELOG.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ru_CHANGELOG.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/th_CHANGELOG.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/tr_CHANGELOG.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/uk_CHANGELOG.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fi_CHANGELOG.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fr_CHANGELOG.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/cs_CHANGELOG.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/sv_CHANGELOG.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ja_CHANGELOG.md)

</div>
# DemoScope v1.4.0

Udgave med selvbeskyttelse: DemoScope håndterer nu ændringer på VACNet-siden i stedet for at gå i stykker midtvejs og fortæller dig og udvikleren, hvad der skete.

### Tilføjet
- **Isolerede opsætningstrin.** Hvert layout- og installationstrin kører for sig. Hvis et trin fejler, registreres fejlen, og resten fortsætter.
- **Alternative opslag** for videobeholderen, vurderingsbeholderen og indsendelsesområdet. Hvis VACNet omdøber videobeholderens klasse, finder DemoScope den via afspillerelementet.
- **Kontrolleret deaktivering.** Hvis videoen eller vurderingsformularen mangler, eller mindst fem opsætningstrin fejler, ruller DemoScope egne ændringer tilbage, gendanner VACNets sidefod, beholder kun indstillingsvinduet og viser en engangsmeddelelse. Siden med tom kø genkendes stadig og udløser ikke dette.
- **Diagnoserapport** (Settings → Diagnostics → Copy diagnostics): version, tidspunkt, sprog, browser, sidetype og opgave, 22 elementkontroller (`ok` / `MISSING`), trinfejl og sidens struktur før og efter DemoScopes ændringer. Strukturen indeholder kun tags, id'er og klasser, aldrig sidetekst. Hvis udklipsholderen er blokeret, vises rapporten i et felt, der kan markeres.
- Op til 2 s ventetid før vurdering af en delvist indlæst side.

### Lokalisering
- 6 nye tekster til diagnostik, kopieringsresultat og deaktiveringsmeddelelse på alle 29 sprog.

# DemoScope v1.3.0

Forbedringer af indstillinger, invitationsside og vurderingstekst.

### Tilføjet
- **Lukknap på invitationssiden.** × i hjørnet af kortet går tilbage til klippene ligesom “Done”.
- **Genveje til invitationssiden:** `Enter` udfører “Done”, og `Esc` lukker siden. De ignoreres, når en knap, et link, et felt, en dialog eller sprogliste har fokus. De kan ændres i Hotkeys under “Invite page”.
- **Sidebestemte tastekonflikter.** Invitationssiden har ingen afspiller, så `Enter` / `Esc` dér konflikter ikke længere med samme taster på vurderingssiden. Indstillingstasten er stadig global.
- **Mørke, tynde rullepaneler** i indstillinger, undervinduer og vurderingslisten samt mørkt color-scheme.

### Ændret
- **Nyt indstillingsvindue.** Afsnit er ordnet efter brug: Hotkeys, Animations, Sound effects, Local history, Footer, Diagnostics (tilføjet i v1.4.0), Reset. Hotkeys og Animations viser oversigter, der opdateres ved ændringer.
- **Én nulstilling for alt.** Gendanner lyd, lydstyrke, genveje og animationer; historikken bevares.
- Indstillingstasten redigeres nu i Hotkeys.
- **Tallet for genvejen er fjernet fra bekræftelsesteksten.** Det forhindrer “2Not sure” og “3No cheats seen”; mærket tegnes nu med CSS.
- Valgmulighed 2 i opgaven med ét spørgsmål er nu “Not sure” i samme jeg-form som VACNets tekst.

### Lokalisering
- 12 nye tekster til oversigter, nulstilling, invitation og “Not sure” på alle 29 sprog.

CSS-indstillingen: `color-scheme: dark`.

“Done”-knappen viser også sin tildelte tast.

# DemoScope v1.2.1

### Lokalisering
- Hotkeys- og Animations-vinduerne (77 tekster pr. sprog) er oversat til de resterende 27 sprog; før fandtes de kun på engelsk og russisk.

# DemoScope v1.2.0

Genveje, animationer og rettelse af indlæsning.

### Tilføjet
- **Hotkeys-vindue** (Settings → Hotkeys): alle 18 genveje kan ændres, grupperes efter handling og har beskrivelse og nulstilling. “Reset all” kræver en ekstra bekræftelse.
  - **Konflikthåndtering.** Ved en optaget tast vises handling, gruppe og funktion; vælg Replace, Swap eller Cancel.
  - `Esc` kan tildeles og lukker ikke vinduet under tastregistrering. `Tab`, modifikationstaster, Caps Lock, `F5`, `F11` og `F12` afvises; `Shift` er kun tilladt til “Speed boost”.
  - Hjælpetekster under videoen, mærker og Continue/Cancel følger dine genveje.
- `Esc` annullerer en vurdering, der venter på bekræftelse, og første `Enter` i indsendelse med to trin.
- **Animations-vindue** (Settings → Animations): seks stilarter, live forhåndsvisning, tre hastigheder og til/fra-kontakt. Hvis systemet foretrækker reduceret bevægelse, er animationer slået fra.
- `Enter` og `Esc` virker også, når en vurderingsradioknap har fokus.

### Rettet
- **Lang “loading next clip”** efter indsendelse af en opgave med ét spørgsmål: kontrollen venter ikke længere på det manglende `aimassist`-felt, accepterer vurderingsformular og mediemetadata, starter tidligere og lukker overlayet lydløst efter 3 sekunder på sider uden klip.
- Sidens genveje (`Space`, `Enter` osv.) virker ikke længere bag en åben dialog.

### Lokalisering
- Hotkeys og Animations var først kun på engelsk og russisk; de øvrige oversættelser kom i v1.2.1.

De seks stilarter er pulse, breathe, ripple, heartbeat, orbit og blink.

# DemoScope v1.1.0

Understøttelse af VACNets opgave med ét spørgsmål.

### Tilføjet
- **Opgave med ét spørgsmål.** VACNet spørger nogle gange “Is the Subject cheating beyond a reasonable doubt?” med svarene Cheating / Uncertain / No cheats seen. DemoScope genkender opgaven og skifter til kompakt layout uden hurtige vurderinger, udvidede kombinationer og randomizer.
- Vurderingsmærker på DemoScopes sprog, tastemærker `1–3` og tilhørende genveje.
- **Låseindikator.** Uncertain og No cheats seen låses først op, når klippet slutter. Kortet viser resterende tid og status; låste valg er dæmpede, og deres tast afspiller en fejltone og ryster kortet.
- Hjælpen under videoen viser `Enter` og `1–3`; vurderingsknapperne er højere.

### Lokalisering
- 5 nye tekster (mærker, titel, forklaring og låsemeddelelse) på alle 29 sprog.

# DemoScope v1.0.6

### Tilføjet
- **DemoScopes egne forklaringer** af de fire vurderingskategorier på alle 29 sprog. “?”-forklaringer afhænger ikke længere af VACNets engelske spørgsmål, som nogle sprog, eksempelvis ukrainsk, får.

# DemoScope v1.0.5

### Tilføjet
- **Hjælpeknap “?”** ved AIM ASSIST, WALL HACK, AUTO BHOP og BOT åbner en forklaring. Den lukkes ved klik udenfor, endnu et klik eller `Esc`. Den får ikke tastaturfokus, så `Enter` og `Space` beholder deres vurderingsfunktion.

### Rettet
- Local history-knappen har nu samme størrelse som nabomærkerne, ombrydes ikke, afkorter lange tekster, og rækken ombrydes i stedet for at blive klemt.

# DemoScope v1.0.4

### Rettet
- **Vurderingsteksten blev på browserens sprog** efter sprogskift i DemoScope. VACNet bruger Steams `?l=`-parameter, mens DemoScope før kun ændrede egne mærker. Vurderingssiden åbnes nu med valgt `?l=`; mangler parameteren, genindlæses siden én gang. VACNets sprog aflæses fra `l=` i CSS- og script-URL'er; en begrænsning på ét forsøg forhindrer omdirigeringssløjfer, hvis sproget ikke understøttes.

# DemoScope v1.0.3

### Ændret
- **Fremhævning af nøglefraser er tilbage** på vurderingsknapperne: søgefrasen er fed og orange, mens “not” i negative svar er afdæmpet blå. Valgte knapper er stadig læsbare.
- `normalizeVerdictLabels` fjerner nu kun b-markeringen, så fremhævningen bevares.

HTML-elementet: `<b>`.

# DemoScope v1.0.2

### Rettet
- **`Space`, `M` og `F` så ud til ikke at virke**, fordi VACNet / Video.js håndterede samme tast igen. DemoScope opfanger nu tasterne.
- I Firefox aktiverer frigivelse af `Space` ikke længere den fokuserede afspillerknap.
- Afspillerens genveje virker også, når en vurderingsradioknap har fokus.

# DemoScope v1.0.1

Kompatibilitet med VACNets redesignede vurderingsside.

### Rettet
- **Panelet blev kun delvist bygget** efter ændringer i VACNet: portaloverskrift, instruktionskort, gitterlayout, fjernet verdicts-container-inner og flyttet submitbuttons udløste `insertBefore`-fejl. Trinnet `ensureReviewStructure` normaliserer markup til både gammelt og nyt layout.

### Ændret
- Portaloverskrift og instruktionskort skjules; kliptælleren spejles i et mærke i overskriften.
- Continue sidder fast nederst og er synlig ved lange oversættelser.

Tekniske selektorer: `.verdicts-container-inner`, `#submitbuttons`.

# DemoScope v1.0.0

Første offentlige udgave af DemoScope-userscriptet til CS2 VACNet-vurderingssider.

### Tilføjet
- Grænseflade på 29 sprog, automatisk sprogvalg, fem hurtige vurderinger og 15 udvidede kombinationer.
- Segmentbaserede videokontroller, billed-for-billede, `Shift`-hastighed, `Space` afspil/pause, `M` lydløs, `F` fuld skærm og vurderingsindsendelse i to trin med `Enter`.
- Lokal vurderingshistorik, JSON-import/eksport, HTML-rapporter og sammenlægning af JSON-sikkerhedskopier.
- Forbedret invitationsside, lydindstillinger, genvej til indstillinger, skjul kontonavn, dialog med vurderingsregler og valgfri randomizer (slået fra som standard).

### Privatliv
- Ingen telemetri; lokale indstillinger og historik uploades ikke. Indsendte vurderinger går til VACNet via webstedets normale formular.







