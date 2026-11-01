<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/en_CHANGELOG.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/bg_CHANGELOG.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/hu_CHANGELOG.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/vi_CHANGELOG.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/el_CHANGELOG.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/da_CHANGELOG.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/id_CHANGELOG.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-ES_CHANGELOG.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-419_CHANGELOG.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/it_CHANGELOG.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-TW_CHANGELOG.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-CN_CHANGELOG.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ko_CHANGELOG.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/de_CHANGELOG.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/nl_CHANGELOG.md) · **Norsk** · [Polski](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pl_CHANGELOG.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-PT_CHANGELOG.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-BR_CHANGELOG.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ro_CHANGELOG.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ru_CHANGELOG.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/th_CHANGELOG.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/tr_CHANGELOG.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/uk_CHANGELOG.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fi_CHANGELOG.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fr_CHANGELOG.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/cs_CHANGELOG.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/sv_CHANGELOG.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ja_CHANGELOG.md)

</div>
# DemoScope v1.4.0

Utgivelse med selvbeskyttelse: DemoScope håndterer nå endringer på VACNet-siden i stedet for å stoppe halvveis, og forteller deg og utvikleren hva som skjedde.

### Lagt til
- **Isolerte oppsettstrinn.** Hvert layout- og installasjonstrinn kjører for seg. Feil loggføres, og de andre trinnene fortsetter.
- **Alternative søk** etter videobeholderen, vurderingsbeholderen og innsendingområdet. Hvis VACNet gir videobeholderen et nytt klassenavn, finner DemoScope den via spillerelementet.
- **Kontrollert deaktivering.** Hvis videoen eller vurderingsskjemaet mangler, eller minst fem oppsettstrinn mislykkes, ruller DemoScope tilbake egne endringer, gjenoppretter VACNet-bunnteksten, beholder bare innstillingsvinduet og viser et engangsvarsel. En side med tom kø gjenkjennes fortsatt og utløser ikke dette.
- **Diagnoserapport** (Settings → Diagnostics → Copy diagnostics): versjon, tidspunkt, språk, nettleser, side- og oppgavetype, 22 elementkontroller (`ok` / `MISSING`), registrerte trinnfeil og sidestrukturen før og etter DemoScopes endringer. Strukturen inneholder bare tagger, ID-er og klasser, ikke sidetekst. Hvis utklippstavlen er blokkert, vises rapporten i et felt som kan merkes.
- Vent opptil 2 s før en delvis innlastet side vurderes.

### Lokalisering
- 6 nye tekster for diagnostikk, kopieringsresultater og deaktiveringsvarsel på alle 29 språk.

# DemoScope v1.3.0

Forbedringer av innstillinger, invitasjonsside og vurderingstekst.

### Lagt til
- **Lukkeknapp på invitasjonssiden.** × i hjørnet av kortet går tilbake til klippene, slik «Done» gjør.
- **Hurtigtaster på invitasjonssiden:** `Enter` utfører «Done», og `Esc` lukker siden. De ignoreres når en knapp, lenke, et felt, en dialog eller språkliste har fokus. De kan endres i Hotkeys, gruppen «Invite page».
- **Tastekonflikter avhenger av side.** Invitasjonssiden har ingen spiller, så `Enter` / `Esc` der kolliderer ikke lenger med de samme tastene på vurderingssiden. Innstillingstasten er fortsatt global.
- **Mørke, tynne rullefelt** i innstillinger, undervinduer og vurderingslisten, samt mørkt color-scheme.

### Endret
- **Nytt innstillingsvindu.** Delene er ordnet etter bruk: Hotkeys, Animations, Sound effects, Local history, Footer, Diagnostics (lagt til i v1.4.0), Reset. Hotkeys og Animations viser oppsummeringer som oppdateres ved endringer.
- **Én tilbakestilling for alt.** Gjenoppretter lyd, volum, hurtigtaster og animasjoner; historikken beholdes.
- Innstillingstasten redigeres nå i Hotkeys.
- **Talltasten er fjernet fra bekreftelsesteksten for vurderingen.** Dermed unngås «2Not sure» og «3No cheats seen»; tastemerket tegnes med CSS.
- Alternativ 2 i oppgaven med ett spørsmål heter nå «Not sure» og bruker samme førstepersonsstil som VACNet-teksten.

### Lokalisering
- 12 nye tekster for oppsummeringer, tilbakestilling, invitasjonshandlinger og «Not sure» på alle 29 språk.

CSS-innstillingen: `color-scheme: dark`.

# DemoScope v1.2.1

### Lokalisering
- Hotkeys- og Animations-vinduene (77 tekster per språk) er oversatt til de øvrige 27 språkene; før fantes de bare på engelsk og russisk.

# DemoScope v1.2.0

Hurtigtaster, animasjoner og en lastefiks.

### Lagt til
- **Hotkeys-vindu** (Settings → Hotkeys): Alle 18 snarveier kan endres, er gruppert etter handling og har beskrivelse og tilbakestillingsknapp. «Reset all» krever en ekstra bekreftelse.
  - **Konflikthåndtering.** For en tast som allerede er i bruk vises handling, gruppe og funksjon; velg Replace, Swap eller Cancel.
  - `Esc` kan tilordnes og lukker ikke vinduet mens en tast registreres. `Tab`, modifikatortaster, Caps Lock, `F5`, `F11` og `F12` avvises; `Shift` tillates bare for handlingen «Speed boost» mens den holdes nede.
  - Hjelpetekstene under videoen, merkene og Continue/Cancel-knappene følger tastevalgene.
- `Esc` avbryter en vurdering som venter på bekreftelse, og første `Enter` i en innsending med to trinn.
- **Animations-vindu** (Settings → Animations): seks stiler, live-forhåndsvisning, tre hastigheter og av/på-bryter. Hvis systemet ber om redusert bevegelse, er animasjonene slått av.
- `Enter` og `Esc` fungerer også når en vurderingsradioknapp har fokus.

### Rettet
- **Langvarig «loading next clip»** etter innsending av en oppgave med ett spørsmål: kontrollen venter ikke lenger på det manglende `aimassist`-feltet, godtar vurderingsskjema og mediametadata, starter tidligere og lukker overlegget stille etter 3 sekunder på sider uten klipp.
- Sidens hurtigtaster (`Space`, `Enter` osv.) virker ikke lenger på siden bak en åpen dialog.

### Lokalisering
- Hotkeys og Animations var først bare på engelsk og russisk; de andre oversettelsene kom i v1.2.1.

De seks stilene er pulse, breathe, ripple, heartbeat, orbit og blink.

# DemoScope v1.1.0

Støtte for VACNets oppgave med ett spørsmål.

### Lagt til
- **Oppgave med ett spørsmål.** VACNet spør noen ganger «Is the Subject cheating beyond a reasonable doubt?» med svarene Cheating / Uncertain / No cheats seen. DemoScope oppdager oppgaven og bytter til et kompakt oppsett uten hurtigvurderinger, utvidede kombinasjoner og randomizer.
- Vurderingsetiketter på DemoScopes språk, tastemerker `1–3` og tilhørende hurtigtaster.
- **Låseindikator.** Uncertain og No cheats seen låses opp når klippet er ferdig. Kortet viser gjenværende tid og fremdrift; låste valg er dempet, og tastetrykk gir feillyd og rister kortet.
- Hjelpeteksten under videoen viser `Enter` og `1–3`; vurderingsknappene er høyere.

### Lokalisering
- 5 nye tekster (etiketter, tittel, forklaring og låsemelding) på alle 29 språk.

# DemoScope v1.0.6

### Lagt til
- **DemoScopes egne forklaringer** for de fire vurderingskategoriene på alle 29 språk. «?»-forklaringene er ikke lenger avhengige av VACNets engelske spørsmål, som noen språk, for eksempel ukrainsk, får.

# DemoScope v1.0.5

### Lagt til
- **Hjelpeknapp «?»** ved AIM ASSIST, WALL HACK, AUTO BHOP og BOT åpner en forklaring. Den lukkes ved klikk utenfor, nytt klikk eller `Esc`. Den får ikke tastaturfokus, slik at `Enter` og `Space` beholder vurderingsfunksjonen.

### Rettet
- Local history-knappen har nå samme størrelse som nabomerkene, bryter ikke tekst, forkorter lange etiketter, og merkeraden brytes i stedet for å klemmes sammen.

# DemoScope v1.0.4

### Rettet
- **Vurderingsteksten forble på nettleserspråket** etter språkbytte i DemoScope. VACNet bruker Steams `?l=`-parameter, mens DemoScope bare endret egne etiketter. Vurderingssiden åpnes nå med valgt `?l=`; mangler parameteren, hentes siden på nytt én gang. VACNets faktiske språk leses fra `l=` i CSS- og skript-URL-er; én-forsøksgrensen hindrer omdirigeringssløyfer når språket ikke støttes.

# DemoScope v1.0.3

### Endret
- **Utheving av nøkkelfraser er tilbake** på vurderingsknappene: søkefrasen er fet og oransje, «not» i negative svar er dempet blå. Valgte knapper er fortsatt lesbare.
- `normalizeVerdictLabels` fjerner nå bare b-markeringen, slik at uthevingsmerkingen beholdes.

HTML-elementet: `<b>`.

# DemoScope v1.0.2

### Rettet
- **`Space`, `M` og `F` så ut til ikke å virke**, fordi VACNet / Video.js håndterte samme tast en gang til. DemoScope fanger dem nå opp.
- I Firefox aktiverer ikke lenger slipp av `Space` den fokuserte spillerknappen.
- Spillersnarveier virker også når vurderingsradioknappen har fokus.

# DemoScope v1.0.1

Kompatibilitet med VACNets redesignede vurderingsside.

### Rettet
- **Panelet ble bare delvis bygget** etter VACNet-endringene: ny portaloverskrift, instruksjonskort, rutenettoppsett, fjernet verdicts-container-inner og flyttet submitbuttons utløste en `insertBefore`-feil. `ensureReviewStructure` normaliserer oppmerkingen for både gammelt og nytt oppsett.

### Endret
- Portaloverskrift og instruksjonskort skjules; klipptelleren vises også i overskriftsmerket.
- Continue festes nederst i panelet og er synlig selv med lange oversettelser.

Tekniske selektorer: `.verdicts-container-inner`, `#submitbuttons`.

# DemoScope v1.0.0

Første offentlige utgave av DemoScope-userscriptet for CS2 VACNet-vurderingssider.

### Lagt til
- Grensesnitt på 29 språk, automatisk språkvalg, fem raske vurderingsoppsett og 15 utvidede kombinasjoner.
- Segmentbaserte videokontroller, bilde-for-bilde, `Shift`-hastighet, `Space` spill av/pause, `M` demp lyd, `F` fullskjerm og vurderingsinnsending i to trinn med `Enter`.
- Konfigurerbar lokal vurderingshistorikk, JSON-import/eksport, HTML-rapporter og sammenslåing av flere JSON-sikkerhetskopier.
- Forbedret invitasjonsside, lydinnstillinger, snarvei for innstillinger, skjuling av kontonavn, dialog for vurderingsregler og valgfri randomizer (av som standard).

### Personvern
- Ingen telemetri; lokale innstillinger og historikk lastes ikke opp. Innsendte vurderinger sendes til VACNet via nettstedets vanlige skjema.






