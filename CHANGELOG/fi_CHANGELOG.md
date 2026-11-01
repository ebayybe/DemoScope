<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/en_CHANGELOG.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/bg_CHANGELOG.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/hu_CHANGELOG.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/vi_CHANGELOG.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/el_CHANGELOG.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/da_CHANGELOG.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/id_CHANGELOG.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-ES_CHANGELOG.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-419_CHANGELOG.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/it_CHANGELOG.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-TW_CHANGELOG.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-CN_CHANGELOG.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ko_CHANGELOG.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/de_CHANGELOG.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/nl_CHANGELOG.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/no_CHANGELOG.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pl_CHANGELOG.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-PT_CHANGELOG.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-BR_CHANGELOG.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ro_CHANGELOG.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ru_CHANGELOG.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/th_CHANGELOG.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/tr_CHANGELOG.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/uk_CHANGELOG.md) · **Suomi** · [Français](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fr_CHANGELOG.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/cs_CHANGELOG.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/sv_CHANGELOG.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ja_CHANGELOG.md)

</div>
# DemoScope v1.4.0

Itseään suojaava julkaisu: DemoScope mukautuu nyt VACNet-sivun muutoksiin sen sijaan, että lakkaisi toimimasta kesken kaiken, ja kertoo käyttäjälle ja kehittäjälle, mitä tapahtui.

### Lisätty
- **Eristetyt määritysvaiheet.** Jokainen asettelu- ja asennusvaihe suoritetaan erikseen. Virhe kirjataan ja muut vaiheet jatkuvat.
- **Varahaut** videokontille, tuomion kontille ja lähetysalueelle. Jos VACNet nimeää videokontin luokan uudelleen, DemoScope löytää sen soitinelementin kautta.
- **Hallittu käytöstäpoisto.** Jos video tai tuomiolomake puuttuu tai vähintään viisi määritysvaihetta epäonnistuu, DemoScope peruu omat muutoksensa, palauttaa VACNetin alatunnisteen, jättää näkyviin vain asetukset ja näyttää kertailmoituksen. Tyhjän jonon sivu tunnistetaan edelleen eikä käynnistä tätä.
- **Diagnostiikkaraportti** (Settings → Diagnostics → Copy diagnostics): versio, aika, kieli, selain, sivun ja tehtävän tyyppi, 22 elementtitarkistusta (`ok` / `MISSING`), vaihevirheet sekä sivun rakenne ennen DemoScopen muutoksia ja niiden jälkeen. Rakenne sisältää vain tunnisteet, ID:t ja luokat, ei sivun tekstiä. Jos leikepöytä on estetty, raportti näytetään valittavassa kentässä.
- Odota enintään 2 s ennen osittain piirtyneen sivun arviointia.

### Lokalisointi
- 6 uutta diagnostiikkaan, kopioinnin tuloksiin ja käytöstäpoistoilmoitukseen liittyvää tekstiä kaikilla 29 kielellä.

# DemoScope v1.3.0

Asetusten, kutsusivun ja tuomiotekstien parannuksia.

### Lisätty
- **Kutsusivun sulkemispainike.** Kortin kulman × palaa klippeihin kuten ”Done”.
- **Kutsusivun pikanäppäimet:** `Enter` suorittaa ”Done”-toiminnon ja `Esc` sulkee sivun. Näppäimet ohitetaan, jos painike, linkki, kenttä, valintaikkuna tai kieliluettelo on kohdistettu. Niitä voi muuttaa Hotkeys-ikkunan ryhmässä ”Invite page”.
- **Sivukohtaiset näppäinristiriidat.** Kutsusivulla ei ole soitinta, joten `Enter` / `Esc` eivät siellä enää ole ristiriidassa tarkistussivun samojen näppäinten kanssa. Asetusnäppäin on yhä yleinen.
- **Tummat, ohuet vierityspalkit** asetuksissa, ali-ikkunoissa ja tuomioluettelossa sekä tumma color-scheme.

### Muutettu
- **Asetusikkuna uudistettu.** Osat järjestetään käyttötiheyden mukaan: Hotkeys, Animations, Sound effects, Local history, Footer, Diagnostics (lisätty v1.4.0:ssa), Reset. Hotkeys ja Animations näyttävät muuttuvat yhteenvedot.
- **Yksi nollaus kaikelle.** Palauttaa äänet, äänenvoimakkuuden, pikanäppäimet ja animaatiot; historia säilyy.
- Asetusikkunan näppäintä voi nyt muuttaa Hotkeys-ikkunassa.
- **Näppäimen numero poistettiin tuomion vahvistustekstistä.** Näin vältetään ”2Not sure” ja ”3No cheats seen”; näppäinmerkki piirretään CSS:llä.
- Yhden kysymyksen tehtävän vaihtoehto 2 on nyt ”Not sure” ja käyttää VACNetin tekstin tavoin minä-muotoa.

### Lokalisointi
- 12 uutta yhteenvetoihin, nollaukseen, kutsusivun toimintoihin ja ”Not sure” -tekstiin liittyvää tekstiä kaikilla 29 kielellä.

CSS-asetus: `color-scheme: dark`.

“Done”-painike näyttää myös määritetyn näppäimen.

# DemoScope v1.2.1

### Lokalisointi
- Hotkeys- ja Animations-ikkunat (77 tekstiä kieltä kohti) on nyt käännetty muille 27 kielelle; aiemmin ne olivat vain englanniksi ja venäjäksi.

# DemoScope v1.2.0

Pikanäppäimet, animaatiot ja latauksen korjaus.

### Lisätty
- **Hotkeys-ikkuna** (Settings → Hotkeys): kaikki 18 pikanäppäintä voi vaihtaa, ne on ryhmitelty toiminnon mukaan, ja niissä on kuvaus ja palautuspainike. ”Reset all” pyytää toisen vahvistuksen.
  - **Ristiriitojen käsittely.** Käytössä olevasta näppäimestä näytetään toiminto, ryhmä ja tarkoitus; valitse Replace, Swap tai Cancel.
  - `Esc` voidaan määrittää, eikä se sulje ikkunaa näppäintä tallennettaessa. `Tab`, muokkausnäppäimet, Caps Lock, `F5`, `F11` ja `F12` hylätään; `Shift` sallitaan vain pidettävälle ”Speed boost” -toiminnolle.
  - Videon alla olevat vihjeet, merkit ja Continue/Cancel-painikkeet seuraavat määrityksiä.
- `Esc` peruuttaa vahvistusta odottavan tuomion ja kaksivaiheisen lähetyksen ensimmäisen `Enter`-vaiheen.
- **Animations-ikkuna** (Settings → Animations): kuusi tyyliä, reaaliaikainen esikatselu, kolme nopeutta ja päälle/pois-kytkin. Jos järjestelmä pyytää vähentämään liikettä, animaatiot ovat oletuksena pois päältä.
- `Enter` ja `Esc` toimivat myös tuomion valintapainikkeen ollessa kohdistettuna.

### Korjattu
- **Pitkä ”loading next clip”** yhden kysymyksen tehtävän lähetyksen jälkeen: valmiustarkistus ei enää odota puuttuvaa `aimassist`-kenttää, hyväksyy tuomiolomakkeen ja mediatiedot, alkaa aiemmin ja sulkee peitteen 3 sekunnin kuluttua hiljaa sivuilla, joilla ei ole klippiä.
- Sivun pikanäppäimet (`Space`, `Enter` jne.) eivät enää vaikuta avoimen valintaikkunan takana olevaan sivuun.

### Lokalisointi
- Hotkeys ja Animations olivat aluksi englanniksi ja venäjäksi; muut käännökset lisättiin versiossa 1.2.1.

Kuusi tyyliä ovat pulse, breathe, ripple, heartbeat, orbit ja blink.

# DemoScope v1.1.0

VACNetin yhden kysymyksen tehtävän tuki.

### Lisätty
- **Yhden kysymyksen tehtävä.** VACNet voi kysyä ”Is the Subject cheating beyond a reasonable doubt?” ja tarjota vastaukset Cheating / Uncertain / No cheats seen. DemoScope tunnistaa tehtävän ja näyttää tiiviin asettelun ilman pikatuomioita, laajennettuja yhdistelmiä tai satunnaistinta.
- DemoScopen kielellä olevat tuomiotekstit, näppäinmerkit `1–3` ja vastaavat pikanäppäimet.
- **Lukituksen ilmaisin.** Uncertain ja No cheats seen avautuvat klipin päätyttyä. Kortti näyttää jäljellä olevan ajan ja edistymisen; lukitut vaihtoehdot himmenevät, ja niiden näppäin soittaa virheäänen sekä ravistaa korttia.
- Videon alla olevat vihjeet vaihtuvat `Enter`- ja `1–3`-näppäimiin; tuomiopainikkeet ovat korkeammat.

### Lokalisointi
- 5 uutta tekstiä (merkit, otsikko, selitys ja lukitusilmoitus) kaikilla 29 kielellä.

# DemoScope v1.0.6

### Lisätty
- **DemoScopen omat selitykset** neljälle tuomioluokalle kaikilla 29 kielellä. ”?”-ohjeet eivät enää riipu VACNetin englanninkielisestä kysymystekstistä, jota näytetään joillakin kielillä, kuten ukrainalla.

# DemoScope v1.0.5

### Lisätty
- **”?”-ohjepainike** AIM ASSIST-, WALL HACK-, AUTO BHOP- ja BOT-kohtien vieressä avaa selityksen. Se sulkeutuu ulkopuolista aluetta napsauttamalla, napsauttamalla uudelleen tai painamalla `Esc`. Painike ei saa näppäimistökohdistusta, jotta `Enter` ja `Space` säilyttävät tarkistustoimintonsa.

### Korjattu
- Local history -painike on nyt viereisten merkkien kokoinen, teksti ei rivitty, pitkät nimet lyhennetään ja merkkirivi rivittyy kutistumisen sijasta.

# DemoScope v1.0.4

### Korjattu
- **Tuomioteksti jäi selaimen kielelle** DemoScopen kielenvaihdon jälkeen. VACNet käyttää Steamin `?l=`-parametria, mutta DemoScope muutti vain omia merkintöjään. Tarkistussivu avataan nyt valitulla `?l=`-arvolla; jos parametri puuttuu, sivu haetaan kerran uudelleen. VACNetin käyttämä kieli luetaan CSS- ja skriptiosoitteiden `l=`-parametrista; yhden yrityksen raja estää uudelleenohjaussilmukan, jos kieltä ei tueta.

# DemoScope v1.0.3

### Muutettu
- **Avainsanojen korostus palautettiin** tuomiopainikkeisiin: haettu ilmaus on lihavoitu oranssilla ja kielteisen vastauksen ”not” hillityllä sinisellä. Valitut painikkeet pysyvät luettavina.
- `normalizeVerdictLabels` poistaa nyt vain b-merkinnän, joten korostusmerkintä säilyy.

HTML-elementti: `<b>`.

# DemoScope v1.0.2

### Korjattu
- **`Space`, `M` ja `F` näyttivät toimimattomilta**, koska VACNet / Video.js käsitteli saman näppäimen uudelleen. DemoScope kaappaa nämä näppäimet nyt.
- Firefoxissa `Space`-näppäimen vapauttaminen ei enää aktivoi kohdistettua soitinpainiketta.
- Soittimen pikanäppäimet toimivat myös tuomion valintapainikkeen ollessa kohdistettuna.

# DemoScope v1.0.1

Yhteensopivuus uudistetun VACNet-tarkistussivun kanssa.

### Korjattu
- **Paneeli rakentui vain osittain** VACNet-muutosten jälkeen: uusi portaaliotsake, ohjekortti, ruudukko, verdicts-container-inner-rakenteen poisto ja submitbuttons-elementin siirto aiheuttivat `insertBefore`-virheen. `ensureReviewStructure` normalisoi merkinnät vanhaa ja uutta asettelua varten.

### Muutettu
- Portaaliotsake ja ohjekortti piilotetaan; klippilaskuri näkyy myös otsakkeen merkissä.
- Continue kiinnitetään paneelin alaosaan, jotta se näkyy pitkistä käännöksistä huolimatta.

Tekniset valitsimet: `.verdicts-container-inner`, `#submitbuttons`.

# DemoScope v1.0.0

DemoScope-userscriptin ensimmäinen julkinen julkaisu CS2 VACNet -tarkistussivuille.

### Lisätty
- Käyttöliittymä 29 kielellä, automaattinen kielivalinta, viisi pikatuomiota ja 15 laajennettua yhdistelmää.
- Segmenttipohjaiset videon ohjaimet, kuva kuvalta -askellus, `Shift`-nopeutus, `Space` toisto/tauko, `M` mykistys, `F` koko näyttö ja tuomion kaksivaiheinen lähetys `Enter`illä.
- Määritettävä paikallinen tarkistushistoria, JSON-tuonti/-vienti, HTML-raportit ja useiden JSON-varmuuskopioiden yhdistäminen.
- Parannettu kutsusivu, ääniasetukset, asetusten pikanäppäin, tilinimen piilotus, tarkistussääntöjen valintaikkuna ja valinnainen tuomioiden satunnaistin (oletuksena pois päältä).

### Tietosuoja
- Ei telemetriaa; paikallisia asetuksia ja historiaa ei lähetetä. Lähetetyt tuomiot toimitetaan VACNetille sivuston tavallisen lomakkeen kautta.






