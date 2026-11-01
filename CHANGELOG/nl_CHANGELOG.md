<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/en_CHANGELOG.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/bg_CHANGELOG.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/hu_CHANGELOG.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/vi_CHANGELOG.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/el_CHANGELOG.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/da_CHANGELOG.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/id_CHANGELOG.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-ES_CHANGELOG.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-419_CHANGELOG.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/it_CHANGELOG.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-TW_CHANGELOG.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-CN_CHANGELOG.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ko_CHANGELOG.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/de_CHANGELOG.md) · **Nederlands** · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/no_CHANGELOG.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pl_CHANGELOG.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-PT_CHANGELOG.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-BR_CHANGELOG.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ro_CHANGELOG.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ru_CHANGELOG.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/th_CHANGELOG.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/tr_CHANGELOG.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/uk_CHANGELOG.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fi_CHANGELOG.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fr_CHANGELOG.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/cs_CHANGELOG.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/sv_CHANGELOG.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ja_CHANGELOG.md)

</div>
# DemoScope v1.4.0

Zelfbeschermingsrelease: DemoScope kan nu omgaan met wijzigingen aan VACNet-pagina’s in plaats van halverwege vast te lopen, en laat de gebruiker en ontwikkelaar weten wat er is gebeurd.

### Toegevoegd
- **Geïsoleerde installatiestappen.** Elke layout- en installatiestap wordt afzonderlijk uitgevoerd. Mislukt er een, dan wordt dat vastgelegd en gaan de overige stappen door; een gewijzigd element laat het paneel dus niet langer half opgebouwd achter.
- **Terugvalzoekopdrachten** voor de videacontainer, de verdictcontainer en het verzendgebied. Als VACNet de klasse van de videacontainer wijzigt, vindt DemoScope deze via het player-element in plaats van op te geven.
- **Netjes uitschakelen.** Als de pagina wel video maar geen verdictformulier bevat (of andersom), of als vijf of meer installatiestappen mislukken, maakt DemoScope eigen wijzigingen ongedaan, herstelt de VACNet-footer, laat alleen het instellingenvenster staan en toont eenmalig een melding. De pagina met een lege wachtrij wordt nog steeds herkend en activeert dit nooit.
- **Diagnoserapport** (Instellingen → Diagnostiek → Diagnostiek kopiëren): scriptversie, tijd, taal en browser, pagina en taaktype, controles van 22 verwachte elementen (`ok` / `MISSING`), geregistreerde stapfouten en de paginastructuur vóór en nadat DemoScope wijzigingen aanbracht. De structuur bevat alleen tags, id’s en klassen, nooit pagin tekst. Als het klembord is geblokkeerd, verschijnt het rapport in een selecteerbaar tekstvak.
- Een korte wachttijd (maximaal 2 s) voordat een gedeeltelijk gerenderde pagina wordt beoordeeld.

### Lokalisatie
- 6 nieuwe strings (diagnostieksectie, kopieerresultaat en uitschakelmelding) in alle 29 talen.

# DemoScope v1.3.0

Instellingen, uitnodigingspagina en verbeteringen aan verdicttekst.

### Toegevoegd
- **Sluitknop voor de uitnodigingspagina.** Een × in de hoek van de kaart brengt je terug naar de clips, net als “Done”.
- **Sneltoetsen op de uitnodigingspagina:** `Enter` voert “Done” uit en `Esc` doet hetzelfde als ×. Ze worden genegeerd wanneer een knop, link, invoerveld, dialoog of talenlijst focus heeft; de “Done”-knop toont nu ook de toets. Beide zijn opnieuw toe te wijzen in het Hotkeys-venster (nieuwe groep “Invite page”).
- **Toetsconflicten per pagina.** De uitnodigingspagina heeft geen player, waardoor de `Enter` / `Esc` ervan niet meer botsen met die van de reviewpagina. De instellingstoets botst nog steeds met alle acties.
- **Donkere, dunne schuifbalken** in het instellingenvenster, subvensters en de verdictlijst, plus `color-scheme: dark`. Brave, Chrome en Edge tekenden eerder een lichte standaardbalk.

### Gewijzigd
- **Instellingenvenster opnieuw ontworpen.** De secties zijn geordend op gebruiksfrequentie: Hotkeys, Animations, Sound effects, Local history, Footer, Diagnostics (toegevoegd in 1.4.0), Reset. Alles is links uitgelijnd zoals in de nieuwe subvensters. Hotkeys en Animations zijn invoerrijen met een samenvattingslabel (“Changed: 2”, “Orbit · Fast”) dat wordt bijgewerkt wanneer je iets wijzigt.
- **Eén reset voor alles.** De resetknop heeft een eigen sectie en herstelt nu geluid, volume, sneltoetsen en animaties (de bevestigingstekst vermeldt dit). Je geschiedenis blijft behouden.
- Het oude blok “settings key” is uit het venster verwijderd: die toets wordt nu net als alle andere in het Hotkeys-venster aangepast.
- **De bevestigingstekst van een verdict bevat niet langer het toetsnummer.** VACNet kopieert de tekst van het aangeklikte label naar de bevestigingsregel, wat “2Not sure” en “3No cheats seen” opleverde. De toetsbadge wordt nu met CSS getekend en maakt geen deel uit van de tekst.
- Optie 2 van de taak met één vraag heet nu “Not sure” (Russisch: “Не уверен(а)”), in dezelfde ik-vorm als VACNets zin “I'm sure the subject is cheating…”.

### Lokalisatie
- 12 nieuwe strings (samenvattingen, resetsectie, uitnodigingsacties en “Not sure”) in alle 29 talen.

# DemoScope v1.2.1

### Lokalisatie
- De vensters Hotkeys en Animations (77 strings per taal) zijn nu vertaald naar de overige 27 talen. Eerder waren ze alleen in het Engels en Russisch uitgeschreven.

# DemoScope v1.2.0

Sneltoetsen, animaties en een laadprobleem opgelost.

### Toegevoegd
- **Hotkeys-venster** (Instellingen → Hotkeys). Alle 18 sneltoetsen staan in één register en kunnen opnieuw worden toegewezen. Acties zijn gegroepeerd (Playback, Navigation, Verdicts, Submission, Invite page, Interface), elk met beschrijving en resetknop; “Reset all” vereist een tweede bevestigende klik.
  - **Conflictbehandeling.** Als je een toets indrukt die al in gebruik is, toont het venster welke actie deze gebruikt, in welke groep en wat de actie doet. Je kunt kiezen voor **Replace** (de andere actie verliest de toets), **Swap** (de andere actie krijgt je vorige toets) of **Cancel**.
  - `Esc` kan net als elke andere toets worden toegewezen en sluit het venster niet tijdens het vastleggen van een toets. `Tab`, modificatietoetsen, Caps Lock, `F5`, `F11` en `F12` worden geweigerd; `Shift` is alleen toegestaan voor de vasthoudactie “Speed boost”.
  - Toetssuggesties onder de video, badges op presets en verdicts en de knoppen Continue/Cancel volgen je toewijzingen.
- **`Esc` annuleert** een verdict dat op bevestiging wacht (het drukt VACNets “Cancel” in) en maakt de eerste `Enter` van de tweestapsverzending ongedaan.
- **Animations-venster** (Instellingen → Animations): zes indicatorstijlen (pulse, breathe, ripple, heartbeat, orbit, blink), livevoorbeeld, drie snelheden en een aan/uit-schakelaar. Als het systeem minder beweging vraagt, starten animaties uitgeschakeld.
- `Enter` en `Esc` werken nu ook wanneer een verdict-keuzerondje focus heeft; daar blijft de focus na het aanklikken van een verdict staan.

### Opgelost
- **Lang wachten op de volgende clip na verzenden** bij de taak met één vraag. De gereedheidscontrole wachtte op het `aimassist`-veld van het klassieke formulier, dat deze taak niet heeft. Daardoor liep de controle telkens tegen de time-out van 30 seconden aan en verscheen een foutmelding. De controle accepteert nu elk verdictformulier en media-metagegevens, begint voordat de player volledig is geladen en sluit de overlay stil na 3 seconden op pagina’s zonder clips.
- Sneltoetsen op de pagina (`Space`, `Enter`, …) werken niet langer op de pagina achter een geopend dialoogvenster.

### Lokalisatie
- De vensters Hotkeys en Animations waren in het Engels en Russisch geschreven; de andere talen volgden in 1.2.1.

# DemoScope v1.1.0

Ondersteuning voor VACNets taak met één vraag.

### Toegevoegd
- **Ondersteuning voor de taak met één vraag.** VACNet toont soms “Is the Subject cheating beyond a reasonable doubt?” met de antwoorden Cheating / Uncertain / No cheats seen. DemoScope herkent deze taak en schakelt over naar een compacte layout zonder snelle verdicts, uitgebreide combinaties of randomizer.
- Verdictlabels in DemoScopes eigen bewoording en taal, toetsbadges `1`–`3` en bijbehorende sneltoetsen.
- **Vergrendelindicator.** VACNet ontgrendelt “Uncertain” en “No cheats seen” pas wanneer de clip eindigt. Een kaart legt dit uit en toont de resterende tijd met een voortgangsbalk; vergrendelde opties zijn gedimd en het indrukken van hun toets speelt een foutgeluid af en schudt de kaart.
- De hints onder de video veranderen in `Enter` en `1–3`; de verdictknoppen worden hoger zodat ze het paneel vullen.

### Lokalisatie
- 5 nieuwe strings (labels, titel, uitleg en vergrendelbericht) in alle 29 talen.

# DemoScope v1.0.6

### Toegevoegd
- **DemoScopes eigen uitleg** voor de vier verdictcategorieën in alle 29 talen. VACNet valt voor sommige talen (bijvoorbeeld Oekraïens) terug op Engelse vraagtekst, zodat de “?”-uitleg daar niet langer van afhankelijk is.

# DemoScope v1.0.5

### Toegevoegd
- **Helpknop “?”** naast AIM ASSIST, WALL HACK, AUTO BHOP en BOT. Een klik opent een korte uitleg van de categorie; buiten de pop-up klikken, nogmaals klikken of `Esc` sluit deze. De knop krijgt bewust geen toetsenbordfocus, zodat `Enter` en `Space` hun reviewfunctie behouden.

### Opgelost
- De knop “Local history” was te groot (hij erfde het lettertype van de pagina) en brak in veel talen over twee regels. Hij komt nu overeen met de aangrenzende badges, loopt niet meer om, kort zeer lange labels af en laat de badgebalk omwikkelen in plaats van samendrukken.

# DemoScope v1.0.4

### Opgelost
- **Verdicttekst bleef in de browsertaal** nadat in DemoScope een andere taal was gekozen. VACNet kiest eigen tekst via de Steam-parameter `?l=`; DemoScope veranderde alleen eigen labels. Taalkeuze op een reviewpagina navigeert nu met de bijbehorende `?l=`; een pagina die zonder parameter wordt geopend (bijvoorbeeld de volgende clip na Continue) wordt eenmaal opnieuw opgevraagd in de gekozen taal. De taal die VACNet werkelijk gebruikte, wordt uit `l=` in de URL’s van de eigen stylesheets en scripts gelezen. Een beveiliging voor één poging voorkomt omleidingslussen als VACNet de taal niet aanbiedt.

# DemoScope v1.0.3

### Gewijzigd
- **Accenthervatting in de verdictknoppen is terug**, in de DemoScope-kleuren: de gevraagde frase (“help with aiming”, “see through walls”, …) in accentoranje en “not” in negatieve antwoorden in gedempt blauw, beide vetgedrukt. Geselecteerde knoppen behouden hun tint en blijven leesbaar.
- `normalizeVerdictLabels` maakte alle accentueringen voorheen platte tekst. Het verwijdert nu alleen `<b>`-nadruk, zodat de accentmarkering behouden blijft.

# DemoScope v1.0.2

### Opgelost
- **`Space`, `M` en `F` leken niets te doen** omdat VACNet / Video.js op dezelfde toetsen reageerden en nogmaals schakelden (pauze direct gevolgd door afspelen). DemoScope onderschept deze toetsen nu, of ze toegewezen zijn of niet.
- In Firefox werd bij het loslaten van `Space` ook de gefocuste playerknop geactiveerd. Ook het loslaten wordt nu onderschept.
- Playersneltoetsen blijven actief terwijl een verdict-keuzerondje focus heeft.

# DemoScope v1.0.1

Compatibiliteit met de vernieuwde VACNet-reviewpagina.

### Opgelost
- **Half opgebouwd paneel na de VACNet-herontwerp.** De pagina kreeg een portalheader, instructiekaart en raster, wikkelde verdictblokken niet langer in `.verdicts-container-inner` en verplaatste `#submitbuttons` buiten de verdictcontainer. DemoScopes `insertBefore` mislukte, waardoor alle volgende stappen werden overgeslagen. De nieuwe stap `ensureReviewStructure` normaliseert de markup en ondersteunt zowel de oude als nieuwe layout.

### Gewijzigd
- De portalheader en instructiekaart worden verborgen om het eerdere uiterlijk te behouden; de clipsteller wordt ook in de headerbadge getoond omdat het herontwerp het origineel verbergt.
- De knop Continue blijft onderaan het paneel vaststaan en zichtbaar, ook als lange vertalingen de verdictlijst hoger maken dan het venster.

# DemoScope v1.0.0

Eerste openbare release van DemoScope, een userscript-toolkit voor CS2 VACNet-reviewpagina’s.

### Toegevoegd
- Interface in 29 talen, automatische taalselectie, vijf snelle verdictpresets en 15 uitgebreide combinaties.
- Segmentbewuste videobediening, frame-voor-frame stappen, `Shift`-snelheidsboost, afspelen/pauzeren met `Space`, dempen met `M`, volledig scherm met `F` en tweestapsverzending van verdicts met `Enter`.
- Configureerbare lokale reviewgeschiedenis, JSON-import/export, HTML-rapporten en meerdere JSON-back-ups samenvoegen tot één rapport.
- Verbeterde uitnodigingspagina, geluidsinstellingen, configureerbare instellingstoets, bediening voor zichtbaarheid van accountnaam, dialoog met reviewregels en optionele verdictrandomizer (standaard uit).

### Privacy
- Geen telemetrie; lokale instellingen en geschiedenis worden niet geüpload. Ingediende verdicts gaan via het normale siteformulier naar VACNet.






