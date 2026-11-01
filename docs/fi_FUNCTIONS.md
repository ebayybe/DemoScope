<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/en_FUNCTIONS.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/bg_FUNCTIONS.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/hu_FUNCTIONS.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/vi_FUNCTIONS.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/el_FUNCTIONS.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/da_FUNCTIONS.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/id_FUNCTIONS.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/es-419_FUNCTIONS.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/it_FUNCTIONS.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/zh-TW_FUNCTIONS.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/zh-CN_FUNCTIONS.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ko_FUNCTIONS.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/de_FUNCTIONS.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/nl_FUNCTIONS.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/no_FUNCTIONS.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/pl_FUNCTIONS.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/pt-PT_FUNCTIONS.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/pt-BR_FUNCTIONS.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ro_FUNCTIONS.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ru_FUNCTIONS.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/th_FUNCTIONS.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/tr_FUNCTIONS.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/uk_FUNCTIONS.md) · **Suomi** · [Français](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/fr_FUNCTIONS.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/cs_FUNCTIONS.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/sv_FUNCTIONS.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ja_FUNCTIONS.md)

</div>

# DemoScope — Funktioviite

Täydellinen viite kaikista 217 ylimmän tason funktiosta tiedostossa `DemoScope.user.js` v1.4.0 (nimi, parametrit, palautusarvo, vastuu). Takaisin [README](../README.md)-sivulle.

Merkinnät: `—` tarkoittaa, ettei parametreja ole; `void` tarkoittaa, että funktio kutsutaan sivuvaikutustensa vuoksi.

## Käyttäjälle näkyvä toiminta

| Alue | Kuvaus |
|---|---|
| Tuetut sivut | Parantaa VACNetin tervetulosivua (/vacnet), arviointisivuja (/vacnet/clips), kutsusivua (/vacnet/createinvite) ja arviointireitin tyhjien klippien tilaa. Muut sivut jätetään ennalleen. |
| Tehtävätyypit | Tunnistaa VACNetin tarjoaman arviointilomakkeen. Klassiseen lomakkeeseen (aim assist, wallhack, auto-bhop, bot) lisätään valintoja ja laajennettuja yhdistelmiä. Uudemmassa yhden kysymyksen tehtävässä (”Huijaako kohde kiistatta?”) on sen sijaan kompakti asettelu: kolme nimettyä arviota näppäimillä 1–3, lukitusilmaisin ja klipin jäljellä oleva aika, ei nopeita arvioita tai yhdistelmiä. |
| Kieli | Tukee 29 Steam-kieltä. Tallennettu manuaalinen valinta on etusijalla; muuten skripti käyttää Steam-parametria ?l= ja sen jälkeen selaimen/sivun kieltä. Kielen valinta DemoScopessa välittää vastaavan ?l=-parametrin myös VACNetille, jotta sen omat tekstit käyttävät samaa kieltä. Automaattinen tila synkronoi Steam-kieliparametrin selaimen kielen kanssa. |
| Tervetulo- ja kutsusivut | Uudistaa molempien sivujen ulkoasun, lisää yhteisen kielenvalitsimen ja piilottaa tilin nimen silmäpainikkeella. Tervetulosivulla Enter tai välilyönti jatkaa, kun kohdistus ei ole vuorovaikutteisessa säätimessä. Kutsusivulla linkin voi piilottaa, näyttää ja kopioida; kutsun vaatimukset selitetään. ×-painike sulkee sivun; Enter vastaa Valmis-toimintoa ja Esc ×-painiketta. |
| Klippien arviointi | Lisää arviointivalintoja ja laajennettuja yhdistelmiä, oletuksena pois päältä olevan satunnaistajan, säädettävän Shift-toistonopeuden, segmenttiin rajatun haun, ruutuaskeluksen ja toiston pikanäppäimet. Arviointiluokissa on ”?”-painike ja lokalisoitu selitys. Arviointipainikkeiden avainsanat korostetaan DemoScopen väreillä. |
| Pikanäppäimet | Jokainen pikanäppäin on toiminto yhteisessä rekisterissä, ja sen voi määrittää uudelleen kohdassa Asetukset → Pikanäppäimet. Ristiriidat tunnistetaan sivukohtaisesti (kutsu- ja arviointisivut eivät ole päällekkäisiä), ja niissä näytetään näppäintä jo käyttävä toiminto, ryhmä ja kuvaus; voit korvata, vaihtaa tai peruuttaa. Jokaisella toiminnolla on palautuspainike, ja sivun näppäinvihjeet noudattavat sidontojasi. |
| Lähettäminen | Enter tai Numpad Enter (oletus) aktivoi Jatka-toiminnon. Klassisessa lomakkeessa ensimmäinen painallus virittää toiminnon ja seuraava lähettää arviot. Yhden kysymyksen tehtävässä arvion valinta näyttää VACNetin oman vahvistuksen, joka vahvistetaan Enterillä. Esc (oletus) painaa Peruuta, kun arvio odottaa vahvistusta, tai purkaa ensimmäisen painalluksen. Välilyönti ei lähetä lomaketta. |
| Asetukset | F2 avaa oletuksena asetusikkunan (muokattavissa Pikanäppäimet-ikkunassa). Osiot: pikanäppäimet, animaatiot, äänitehosteet ja äänenvoimakkuus, paikallinen historia (käyttöönotto, rajat, 12/24 tunnin muoto, varmuuskopiot), alatunnisteen näkyvyys, diagnostiikka sekä äänen, pikanäppäinten ja animaatioiden yhteinen palautus. |
| Animaatiot | DemoScope-tekstin vieressä olevaa pistettä voi animoida. Erillisessä ikkunassa on kuusi tyyliä (syke, hengitys, väreily, sydämenlyönti, kierto, vilkkuminen), live-esikatselu, kolme nopeutta ja virtakytkin. Jos käyttöjärjestelmä pyytää vähentämään liikettä, animaatiot ovat aluksi pois päältä. |
| Paikallinen historia | Tallentaa arvioiden yhteenvedot tämän selaimen localStorageen; DemoScope ei lataa niitä palvelimelle. Historian voi ottaa pois käytöstä, tuoda, viedä JSON- tai HTML-muodossa, yhdistää JSON-varmuuskopioista yhdeksi HTML-raportiksi tai tyhjentää. Rajat ovat säädettävissä: 10/20/30/50 merkintää avainta kohti ja yhteensä 100/200/300/500 avainta. Käytöstä poisto estää uudet merkinnät poistamatta aiempia tietoja. Historiaa tallennetaan vain klassisesta lomakkeesta. |
| Tyhjä jono | Korvaa VACNetin tyhjän jonon viestin lokalisoiduilla ohjeilla, selaimeen tallennetulla ensimmäisellä näyttöajalla ja kielenvalitsimella. Teksti 250 demosta päivässä on tiedoksi ja perustuu VACNetin havaittuun toimintaan; DemoScope ei valvo eikä ohita palvelun rajaa. |
| Alatunniste | Käyttää lokalisoitua DemoScope-alatunnistetta. Klippisivuilla siinä voi olla palaute- ja ilmoituslinkit; asetuksissa voi piilottaa yksittäisen linkin, tekijänoikeusrivin tai koko alatunnisteen. |
| Virheensieto | Jokainen asennusvaihe toimii erillään, joten yksittäinen virhe ei pysäytä muita. Tärkeät elementit etsitään varavaihtoehdoilla. Jos sivua ei enää tunnisteta, DemoScope poistaa itsensä käytöstä kyseisellä sivulla, palauttaa VACNetin asettelun ja näyttää lyhyen ilmoituksen. Asetukset → Diagnostiikka kopioi virheraporttia varten tekstiraportin (skriptiversio, löydetyt odotetut elementit, epäonnistuneet vaiheet ja sivun rakenne). |

Skripti ei muuta VACNetin palvelinpuolen kutsukelpoisuutta, arvioiden käsittelyä tai katselurajoja. Paikallinen historia, kieli ja käyttöliittymäasetukset pysyvät selaimen profiilissa.

## Lokalisointi

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Kielen lipun upotettu SVG-koodi; puuttuessaan palauttaa maapallokuvakkeen. |
| `getSavedLocale` | — | `string \| null` | Lukee käyttäjän tallennetun kielen (`demoscopeLanguage`) `localStorage`-tallennuksesta. |
| `getActiveLocale` | — | `string` | Selvittää aktiivisen kielen: tallennettu valinta → Steamin `?l=` → selaimen/sivun kieli → `en`. |
| `getLanguageBadge` | — | `string` | Kielen oma näyttönimi, esim. “English version”, kielenvalitsimen merkkiä varten. |
| `getBrowserLocale` | — | `string \| null` | Tunnistaa ensimmäisen tuetun selaimen kielen, myös alueelliset muunnelmat. |
| `syncAutomaticLanguage` | — | `boolean` | Synkronoi automaattitilassa ?l=-parametrin selaimen kieleen ja siirtyy uuteen osoitteeseen, jos ne eroavat. |
| `getRenderedSteamLanguage` | — | `string \| null` | Lukee Steam-kielen, jolla VACNet todella näytti sivun, sivun tyylitiedostojen ja komentosarjojen URL-osoitteiden l=-parametrista. |
| `syncSelectedLanguage` | — | `boolean` | Kun kieli valitaan DemoScopessa käsin, sivu ladataan kerran uudelleen vastaavalla ?l=-parametrilla, jotta VACNetin omat tekstit seuraavat valintaa. Uudelleenlataus ohitetaan, jos näkyvä kieli on jo oikea, ja uudelleenohjaussilmukat estetään. Palauttaa true, jos sivulla siirryttiin eteenpäin. |
| `tr` | `key: string` | `string` | Hakee käyttöliittymätekstin aktiiviselle kielelle (varalla: englanti, sitten avain itse). |
| `inviteText` | `key: string` | `string` | Sama haku kutsusivun tekstitaulukolle. |
| `settingText` | `key: string` | `string` | Sama haku asetusikkunan tekstitaulukolle. |
| `getPresetLabel` | `name: string` | `string` | Esiasetuksen lokalisoitu nimi; koostaa yhdistelmiä kuten “Bot + Aim”. |
| `buildLanguageOptions` | `{ activeLocale = getActiveLocale(), selectedLocale = null } = {}` | `string (HTML)` | Kielenvalintapainikkeiden HTML, mukaan lukien “auto”-kohta. |
| `installLanguageSelector` | `root: HTMLElement, onLocaleSelect: Function \| null = null` | `void` | Yhdistää ja sijoittaa kielivalitsimen, tallentaa valinnan ja lataa sivun uudelleen; valinnainen callback voi käsitellä valinnan erikseen. |
| `queueNoticeText` | `key: string, locale = getQueueNoticeLocale()` | `string` | Hakee lokalisoidun tekstin tyhjälle jonolle tai alatunnisteelle. |

## Äänitehosteet ja asetusikkuna

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | Asetusikkunassa näkyvä rivi “N merkintää · viimeisin merkintä: …”. |
| `soundsEnabled` | — | `boolean` | Ovatko käyttöliittymän äänet käytössä (`demoscopeSoundEffectsEnabled`, oletuksena päällä). |
| `getSoundVolume` | — | `number (0–1)` | Tallennettu äänenvoimakkuus (`demoscopeSoundEffectsVolume`, oletus 0,4). |
| `playUiSound` | `kind = "click"` | `void` | Syntetisoi lyhyen äänisarjan Web Audiolla (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`); ei koskaan heitä virhettä. |
| `readSettingsHotkey` | — | `string` | Tallennettu `KeyboardEvent.code`, joka avaa asetusikkunan (oletus `F2`). |
| `formatHotkey` | `code: string` | `string` | Luettava näppäimen nimi (`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | Poimii fyysisen näppäinkoodin ja kuvaa ei-latinalaiset asettelut takaisin muotoon `KeyX`; `""`, jos käyttökelvoton. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | Tosi näppäimille, joita DemoScope tai soitin jo käyttää (Enter, välilyönti, nuolet, `M`, `F`, `1`–`5`, …). |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Luo asetukset ja niiden tapahtumat: äänet ja voimakkuus, esikatselu, pikanäppäin, paikallinen historia ja rajat, aikamuoto, JSON-tuonti/vienti, HTML-vienti/yhdistäminen, historian tyhjennys, alatunnisteen näkyvyys ja palautus. |
| `openSettingsDialog` | `opener = null` | `void` | Avaa ikkunan nykyisillä arvoilla ja muistaa elementin, jolle fokus palautetaan. |
| `installSettingsUi` | — | `void` | Asentaa yleisen capture-vaiheen näppäinkuuntelijan (ikkunan avaus/sulku, uudelleenmääritys) ja äänitapahtumat. |
| `installUiSoundEvents` | — | `void` | Delegoitu napsautuskuuntelija, joka soittaa palauteääniä DemoScopen ohjaimille. |
| `ensureSettingsLayoutStyles` | — | `void` | Lisää asetusten ikkunan tyylit: vasemmalle tasatut osiot ja yhteenvedot sisältävät rivit. |
| `refreshSettingsSummaries` | — | `void` | Päivittää Pikanäppäimet-osioiden yhteenvedot (”Muutettu: N” / ”Oletukset”) ja Animaatiot-osion yhteenvedon (”Tyyli · nopeus” / ”Pois”). |
| `installExtraSettingsSections` | `settingsDialog: HTMLDialogElement` | `void` | Lisää Pikanäppäimet- ja Animaatiot-osiot ylös sekä Diagnostiikka- ja Palauta-osiot alas. Piilottaa aiemman asetuspikanäppäimen lohkon, jota muokataan nyt Pikanäppäimet-ikkunassa. |

## Varmuuskopiot, raportit ja historian rajat

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `exportLocalHistory` | — | `void` | Lataa koko historian tiedostona `demoscope-history-YYYY-MM-DD.json`. |
| `downloadHistoryFile` | `content: string, filename: string, mimeType: string` | `void` | Käynnistää tiedoston latauksen väliaikaisen Blob-URL:n kautta. |
| `collectHistoryReportRows` | `store: object` | `Array<{vodId, ts, summary, segment}>` | Litistää ja poistaa kaksoiskappaleet historiamerkinnöistä, uusimmat ensin. |
| `exportReadableHistory` | — | `void` | Lataa historiasta itsenäisen, lokalisoidun HTML-raportin. |
| `buildReadableHistoryReport` | `rows: Array, reportTitle: string, summaryNote = ""` | `string (HTML document)` | Rakentaa raportin escapetun HTML-koodin. |
| `setMergeReportStatus` | `statusElement: HTMLElement, message: string, state: string` | `void` | Päivittää yhdistämistyökalun tilarivin (`progress`, `success`, `warning`). |
| `exportCombinedHistoryReports` | `files: FileList \| File[], statusElement: HTMLElement, button: HTMLButtonElement` | `Promise<void>` | Tarkistaa useita JSON-varmuuskopioita (kukin ≤ 5 MB, yhteensä ≤ 100 MB), poistaa merkintöjen kaksoiskappaleet ja lataa yhden yhdistetyn HTML-raportin. |
| `isSafeHistoryKey` | `key: string` | `boolean` | Sallittujen luettelon tarkistus historia-avaimille (estää `__proto__`, `constructor` ja virheelliset avaimet). |
| `importLocalHistory` | `file: File` | `Promise<void>` | Tarkistaa JSON-varmuuskopion, yhdistää sen paikalliseen historiaan (rajoja noudattaen) ja päivittää käyttöliittymän. |
| `readHistoryLimit` | `storageKey: string, allowedValues: number[], defaultValue: number` | `number` | Lukee numeerisen rajan `localStorage`-tallennuksesta ja hyväksyy vain sallitut arvot. |
| `getHistoryPerKeyLimit` | — | `number` | Klipin/pelin avainta kohden säilytettävät merkinnät (10/20/30/50, oletus 30). |
| `getHistoryTotalLimit` | — | `number` | Säilytettävien klippi-/peliavainten kokonaismäärä (100/200/300/500, oletus 300). |

## Tilin nimi ja kutsusivu

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Onko Steam-tilin nimi tällä hetkellä piilotettu. |
| `installAccountNameControl` | — | `void` | Lisää silmäkytkimen uloskirjautumislinkin viereen ja pitää sen synkronoituna `MutationObserver`illa. |
| `installInvitePage` | — | `boolean` | Uudistaa sivun `/vacnet/createinvite`: korttiasettelu, linkin näyttö/piilotus ja kopiointi (Clipboard API, varalla `execCommand`), vaatimusluettelo, kielenvalitsin. Palauttaa `false`, jos odotettuja elementtejä puuttuu. |
| `installInviteExtras` | `card: HTMLElement, doneLink: HTMLElement \| null` | `void` | Lisää sulkemispainikkeen (×) ja capture-vaiheen kuuntelijan inviteDone-toiminnolle (oletus Enter) ja inviteClose-toiminnolle (oletus Esc). Ohittaa näppäimet, kun painikkeella, linkillä, kentällä, valintaikkunalla tai kieliluettelolla on kohdistus. |
| `refreshInviteKeyLabels` | — | `void` | Piirtää Valmis-tekstin uudelleen nykyisten sidontojen mukaisella näppäinmerkillä sekä ×-painikkeen työkaluvihjeen. |
| `installWelcomePage` | — | `boolean` | Muotoilee tervetulosivun, lisää brändäyksen ja kielivalitsimen; Enter/Space jatkaa; palauttaa false, jos elementtejä puuttuu. |

## Klipin segmentti ja soitinsovitin

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `parseSegmentBounds` | — | `{startTime, endTime, duration} \| null` | Poimii `startTime`/`endTime` sivun upotetuista skripteistä. |
| `formatSegmentTime` | `seconds: number` | `string` | Muotoilee sekunnit muotoon `m:ss.cc`. |
| `getVideoElement` | — | `HTMLVideoElement \| null` | Etsii tarkastuksen `<video>`-elementin. |
| `getVjsPlayer` | — | `Video.js player \| null` | Palauttaa sivun Video.js-soittimen, jos se on saatavilla eikä sitä ole tuhottu. |
| `createPlayerAdapter` | — | `adapter \| null` | Yhtenäinen API Video.js:n / HTML5-videon päällä: `currentTime`, `paused`, `pause`, `play`, `playbackRate(s)`, `muted`, `on`, `isFullscreen`, `requestFullscreen`, `exitFullscreen`. |
| `waitForPlayerAdapter` | `timeoutMs = 20000` | `Promise<adapter>` | Kyselee 100 ms välein, kunnes soitin on olemassa; hylkää aikakatkaisun jälkeen. |
| `clampSegment` | `time: number, bounds: object` | `number` | Rajaa ajanhetken klipin rajoihin. |
| `segmentProgress` | `time: number, bounds: object` | `number (0–1)` | Suhteellinen sijainti klipin sisällä. |
| `installCustomControls` | `player, bounds, refreshDisplay: {current: Function}` | `void` | Lisää hakupalkin, aikanäytön ja näppäinvihjeet videon alle. |
| `pauseLayoutMutations` | `run: Function` | `void` | Suorittaa takaisinkutsun, kun asettelun tarkkailijat on keskeytetty (estää takaisinkytkentäsilmukat). |
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | Palauttaa true, kun kohdistus on syötekentässä, textareassa, selectissä tai muokattavassa tekstissä. |
| `isPlayerShortcutBlocked` | `target: EventTarget` | `boolean` | Kuten isShortcutBlocked, mutta päästää arviovalintojen radiopainikkeet läpi, koska kohdistus jää radiopainikkeeseen napsautuksen jälkeen. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | Nopeusvalinnan nimi. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | `<option>`-luettelo nopeusvalitsimelle (0,5–4×). |
| `readStoredShiftSpeed` | — | `number` | Tallennettu Shift-nopeus (oletus 2×). |
| `readStoredVerdictRandomizer` | — | `boolean` | Tuomioiden satunnaistajan tallennettu tila (oletuksena pois). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | Kytkee toistonopeuden käsittelyn, segmentin rajaamisen/pysäytyksen, haun/kuva-askeleen/mykistyksen/koko näytön apufunktiot ja yleiset pikanäppäimet (`1`–`5`, nuolet, `,` `.`, välilyönti, `M`, `F`, Shift). Sisäiset sulkeumat: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, piirtosilmukan apufunktiot. |

## Tuomioesiasetukset

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | Valitsee “skip” jokaisessa tuomioryhmässä, jossa ei ole valintaa. |
| `getSelectedVerdictState` | — | `object` | Ryhmien `aimassist`, `wallhack`, `autobhop`, `bot` nykyinen arvo (`positive` / `negative` / `skip` / `null`). |
| `detectActivePreset` | — | `string \| null` | Nykyistä valintaa vastaavan esiasetuksen nimi. |
| `syncPresetButtons` | — | `string \| null` | Päivittää `aria-pressed`-attribuutin esiasetuspainikkeissa ja laajennetun esiasetuksen merkin. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | Napsauttaa esiasetuksen valintanappeja; satunnaistajan ollessa päällä sekoittaa järjestyksen ja odottaa 200–600 ms napsautusten välillä. Poistaa esiasetuspainikkeet käytöstä suorituksen ajaksi. |
| `readAdvancedPresetsOpen` | — | `boolean` | Jäikö laajennettujen esiasetusten laatikko auki. |
| `normalizeVerdictLabels` | `root = document` | `void` | Poistaa korostusmerkinnän tuomioiden nimistä. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Lisää lokalisoidut otsikot jokaisen tuomioryhmän yläpuolelle. |
| `ensureVerdictHelp` | `block: HTMLElement, titleEl: HTMLElement, title: string, field: string` | `void` | Luo ”?”-painikkeen ja arvioryhmän selitteen käyttäen DemoScopen omaa käännöstä; VACNetin tekstiä käytetään vain varalla. |
| `closeVerdictHelp` | `except = null` | `void` | Sulkee kaikki avoimet selitteet paitsi määritetyn. |
| `installVerdictHelpHandlers` | — | `void` | Asentaa kertaalleen selitteiden delegoidut napsautus-, ulkopuolinen napsautus- ja Esc-käsittelijät. |

## Ilmoitukset, alatunniste ja lähetyksen lataus

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `hideSiteFooter` | — | `void` | Piilottaa sivuston alatunnisteen. |
| `showToast` | `message: string, type = "info", duration = 1800` | `void` | Näyttää estämättömän ARIA-live-ilmoituksen. |
| `markSubmitPending` | — | `void` | Tallentaa lähetyksen ajankohdan ja nykyisen klipin tunnuksen `sessionStorage`-tallennukseen. |
| `isSubmitPending` | — | `boolean` | Odottaako lähetys seuraavaa klippiä. |
| `clearSubmitPending` | — | `void` | Tyhjentää odottavan lähetyksen merkinnät. |
| `showSubmitLoadingOverlay` | `message = tr("nextClip")` | `void` | Näyttää koko sivun latausnäkymän. |
| `hideSubmitLoadingOverlay` | — | `void` | Piilottaa näkymän ja tyhjentää odotustilan. |
| `bootSubmitLoadingIfPending` | — | `void` | Näyttää latausnäkymän uudelleen sivun latauksessa, jos lähetys odottaa. |
| `isReviewPageReady` | `prevVod: string, startedAt: number` | `boolean` | Tosi, kun seuraavan klipin käyttöliittymä ja media ovat valmiina. |
| `finishSubmitLoadingWhenReady` | — | `Promise<void>` | Odottaa seuraavaa klippiä enintään 30 s ja piilottaa sitten näkymän (virheilmoitus aikakatkaisussa). |

## Paikallinen historiavarasto

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `extractVodId` | — | `string` | Johtaa klipin/pelin tunnuksen videon URL-osoitteesta. |
| `getGameKey` | — | `string` | Pelin historia-avain (`game::<id>`). |
| `getClipKey` | `bounds: object` | `string` | Yhden segmentin historia-avain (`<id>:<start>:<end>`). |
| `normalizeHistoryEntry` | `entry: any` | `{ts, summary, segment} \| null` | Tarkistaa ja siivoaa yhden historiamerkinnän. |
| `readHistoryEntries` | `store: object, key: string` | `Array` | Avaimen normalisoidut merkinnät. |
| `getGameHistoryEntries` | `store: object` | `Array` | Nykyisen pelin merkinnät (tukee vanhaa avainta). |
| `getClipHistoryEntries` | `store: object, bounds: object` | `Array` | Nykyisen segmentin merkinnät. |
| `formatClipId` | `vodId: string` | `string` | Lyhyt numeerinen näyttötunnus (`#0000000`), joka on johdettu klipin tunnuksesta tiivisteellä. |
| `formatRelativeTime` | `timestamp: number` | `string` | Lokalisoitu suhteellinen aika (`Intl.RelativeTimeFormat`). |
| `readClipHistoryStore` | — | `object` | Lataa historiaobjektin `localStorage`-tallennuksesta (`{}` virheessä). |
| `pruneHistoryStore` | `store: object` | `void` | Soveltaa avainkohtaisia ja kokonaisrajoja (vanhimmat avaimet poistetaan ensin). |
| `writeClipHistoryStore` | `store: object` | `boolean` | Karsii ja tallentaa; `false` kiintiö- tai tallennusvirheissä. |
| `summarizeCurrentVerdict` | — | `string` | Nykyisen valinnan esiasetuksen nimi tai `mixed`. |
| `formatSummaryLabel` | `summary: string` | `string` | Historiayhteenvedon lokalisoitu nimi. |
| `formatClockTime` | `seconds: number` | `string` | Kellonaikamuoto `m:ss` (tai `x.xs`). |
| `formatHumanSegment` | `bounds: object` | `string` | Luettava segmenttialue. |
| `formatGameLabel` | — | `string` | Nykyisen pelin lokalisoitu nimi. |
| `historyEntryKey` | `entry: object` | `string` | Kaksoiskappaleiden poistoon käytettävä tunnistemerkkijono. |
| `formatPriorStat` | `count: number, label: string` | `string` | Historiapaneelin rivi “nimi: N”. |
| `buildHistoryListItems` | `clipEntries: Array, gameEntries: Array, currentSegment: string` | `Array` | Yhdistää klippi- ja pelimerkinnät näytettäviksi kohteiksi. |
| `renderHistoryItem` | `item: object` | `string (HTML)` | Yhden historiarivin HTML. |
| `escapeHtml` | `value: any` | `string` | Escapettaa merkit `& < > " '`. |
| `buildClipHistoryPanel` | `bounds, gameEntries, clipEntries` | `string (HTML)` | Historiapaneelin HTML, mukaan lukien tarkastussääntöjen painike. |
| `ensureClipHistoryPanel` | — | `void` | Luo paneelin säiliön, jos se puuttuu. |
| `ensureReviewRulesDialog` | — | `void` | Luo tarkastussääntöjen ikkunan ja kytkee sen avaus- ja sulkupainikkeet. |
| `installLocalHistoryButton` | `panel: HTMLElement` | `void` | Kytkee “paikallinen historia” -painikkeen (vierittää luetteloon tai näyttää ilmoituksen tyhjästä tilasta). |
| `positionClipHistoryPanel` | — | `void` | Pitää paneelin ensimmäisenä elementtinä kohteessa `.verdicts-container`. |
| `renderClipHistory` | `bounds: object \| null` | `void` | Renderöi historiapaneelin uudelleen nykyiselle klipille. |
| `appendReviewHistory` | `bounds: object \| null` | `void` | Liittää nykyisen tuomion yhteenvedon pelin ja klipin historiaan. |
| `isLocalHistoryEnabled` | — | `boolean` | Lukee, onko paikallinen historia käytössä; oletuksena käytössä. |
| `readTimeFormat` | — | `string` | Lukee aikamuodon: automaattinen, 12 tai 24 tuntia. |
| `formatQueueFirstSeen` | `timestamp: number, locale = getActiveLocale()` | `string` | Muotoilee ensimmäisen havaitsemisajan kielen ja aikamuodon mukaan. |
| `getQueueNoticeLocale` | — | `string` | Palauttaa tyhjän jonon ilmoituksen aktiivisen kielen. |
| `migrateEmptyQueueLanguage` | — | `boolean` | Siirtää vanhan kielivalinnan yhteiseen asetukseen ja synkronoi URL-osoitteen. |
| `updateEmptyQueueTimestamp` | — | `void` | Päivittää ensimmäisen havaitsemisen näytetyn ajan. |

## Lähetysvirta

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `isLabelingMode` | — | `boolean` | Tosi sivuilla, jotka näyttävät neljä tuomioryhmää. |
| `getProceedButton` | — | `HTMLButtonElement \| null` | Natiivi lähetyspainike, jos se on näkyvissä ja käytössä. |
| `recordProceedHistoryIfLabeling` | — | `void` | Tallentaa historian kerran lähetystä kohden (suojattu uudelleentulolta). |
| `resetProceedArmed` | — | `void` | Purkaa kaksivaiheisen lähetyksen viritetyn tilan. |
| `refreshProceedButtonLabel` | — | `void` | Päivittää painikkeen nimen/`Enter`-vihjeen ja viritetyn tilan tyylin. |
| `verdictLabelForField` | `field: string, selected: string` | `string \| null` | Kuvaa valinnan arvoon `guilty_*` / `innocent_*` / `skip_*`. |
| `prepareVerdictFormForSubmit` | — | `boolean` | Rakentaa piilotetut `verdict_labels[]`-kentät; näyttää virheilmoituksen ja palauttaa `false`, jos jokin ryhmä on ilman valintaa. |
| `isSafeSubmitTarget` | `form: HTMLFormElement` | `boolean` | Sallii vain saman alkuperän HTTPS-lomaketoiminnot. |
| `restoreSubmitUi` | — | `void` | Palauttaa painikkeet epäonnistuneen lähetyksen jälkeen. |
| `submitVerdictForm` | `{ recordHistory = false } = {}` | `boolean` | Suorittaa turvatarkistuksen, näyttää latausnäkymän ja lähettää lomakkeen. |
| `submitVerdictsDirect` | — | `boolean` | Valmistelee nimet ja lähettää. |
| `invokeProceedAction` | — | `boolean` | Enter-/napsautuskäsittelijä: ensimmäinen painallus virittää, toinen lähettää. |
| `installProceedShortcut` | — | `void` | Capture-vaiheen kuuntelija näppäimille `Enter`/`NumpadEnter`. |
| `invokeCancelAction` | — | `boolean` | Peruuttaa kaksivaiheisen lähetyksen ensimmäisen painalluksen tai napsauttaa näkyvää Peruuta-painiketta; palauttaa false, jos peruutettavaa ei ole. |
| `refreshCancelButtonLabel` | — | `void` | Lisää tai päivittää Peruuta-painikkeen näppäinmerkin. |
| `hookProceedButton` | — | `void` | Korvaa natiivin lähetyspainikkeen napsautuskäyttäytymisen. |
| `installVerdictChangeReset` | — | `void` | Purkaa lähetyksen viritetyn tilan ja synkronoi esiasetukset uudelleen, kun tuomio muuttuu. |
| `scheduleProceedFooterFix` | — | `void` | Viivästetty (`requestAnimationFrame`) `fixProceedFooter`-kutsu. |
| `scheduleVerdictLabelsFix` | — | `void` | Viivästetty nimien/otsikoiden/oletusarvojen uudelleennormalisointi. |

## Pikanäppäinrekisteri ja uudelleenmääritys

| Toiminto | Oletus | Ryhmä | Kuvaus |
|---|---|---|---|
| `playPause` | `Space` | Playback | Keskeyttää leikkeen tai jatkaa toistoa. |
| `mute` | `M` | Playback | Mykistää äänen tai poistaa mykistyksen. |
| `fullscreen` | `F` | Playback | Ottaa koko näytön tilan käyttöön tai poistaa sen käytöstä. |
| `seekBack` / `seekForward` | `←` / `→` | Navigointi | Hyppää 5 sekuntia taakse- tai eteenpäin. |
| `frameBack` / `frameForward` | `,` / `.` | Navigointi | Siirtyy yhden kuvan taakse- tai eteenpäin. |
| `speedBoost` | `Shift` | Navigation | Toistaa nopeammin niin kauan kuin näppäintä pidetään painettuna (ainoa toiminto, joka voi käyttää Shift-näppäintä). |
| `quick1` … `quick5` | `1` … `5` | Arviot | Klassinen lomake: valinnat 1–5. Yhden kysymyksen tehtävä: Cheating / En ole varma / En havainnut huijausta (1–3). |
| `proceed` | `Enter` | Submission | Vahvistaa arvion tai aktivoi ja lähettää klassisen lomakkeen. |
| `cancel` | `Esc` | Submission | Painaa Peruuta tai purkaa Enter-näppäimen ensimmäisen painalluksen. |
| `inviteDone` | `Enter` | Invite page | Poistuu kutsusivulta (sama kuin Valmis). |
| `inviteClose` | `Esc` | Invite page | Sama toiminto kuin ×-painikkeella. |
| `settings` | `F2` | Interface | Avaa tai sulkee asetusikkunan. |

Sidonnat tallennetaan KeyboardEvent.code-arvoina demoscopeKeybindings-avaimen alle (vain oletuksista poikkeavat muutokset; asetuspikanäppäimellä on oma merkintänsä). Vasen ja oikea muokkausnäppäin lasketaan samaksi, ja numeronäppäimistö vastaa päänäppäimistön riviä. Ei-sidottavat näppäimet: Tab, Ctrl, Alt, Meta, Caps Lock, ContextMenu, F5, F11, F12. Ristiriidat rajautuvat alueisiin review, invite ja global; globaali asetuspikanäppäin on ristiriidassa kaikkien kanssa.

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `fmt` | `template: string, vars = {}` | `string` | Korvaa {name}-paikkamerkit lokalisoidussa mallissa. |
| `isModalOpen` | — | `boolean` | On true, kun jokin dialog on auki; sivun pikanäppäimet eivät tällöin toimi. |
| `normalizeKeyCode` | `code: string` | `string` | Yhdistää vasemman ja oikean muokkausnäppäimen samaksi ja yhdistää numeronäppäimistön numerot sekä NumpadEnter-näppäimen päänäppäimistön vastaaviin näppäimiin. |
| `formatKeyLabel` | `code: string` | `string` | Näppäimen selkokielinen nimi (ArrowLeft → ←, KeyM → M, Escape → Esc). |
| `loadKeyOverrides` | — | `object` | Lukee ja tarkistaa tallennetut näppäinsidonnat (välimuistissa; palauttaa {} virheen sattuessa). |
| `saveKeyOverrides` | `overrides: object` | `void` | Tallentaa sidonnat tai poistaa merkinnän, kun kaikki arvot ovat oletuksia. |
| `getBinding` | `id: string` | `string` | Toiminnon nykyinen näppäin; tyhjä merkkijono, jos sitä ei ole sidottu. |
| `setBinding` | `id: string, code: string` | `void` | Tallentaa toiminnolle näppäimen (tyhjä koodi poistaa sidonnan); oletusarvoja ei tallenneta. |
| `resetAllBindings` | — | `void` | Palauttaa kaikkien näppäinten, myös asetuspikanäppäimen, sidonnat oletuksiksi. |
| `findKeyConflict` | `id: string, code: string` | `object \| null` | Etsii ristiriitoja jo käytössä olevan näppäimen kanssa kyseisellä toiminta-alueella. |
| `getActionForEvent` | `event: KeyboardEvent, scope = currentKeyScope()` | `string \| null` | Määrittää näppäintapahtumaan liittyvän toiminnon. |
| `keyScopeOf` | `id: string` | `string` | Toiminnon alue: review, invite tai global. |
| `keyScopesOverlap` | `a: string, b: string` | `boolean` | On true, jos kaksi aluetta voi olla päällekkäin (sama alue tai toinen niistä on global). |
| `currentKeyScope` | — | `string` | invite kutsusivulla, muulloin review. |
| `validateKeyForAction` | `id: string, code: string` | `string` | Palauttaa tyhjän merkkijonon, jos näppäimen voi sitoa, reserved selaimen/navigoinnin näppäimille tai shift, jos Shift valitaan toiminnolle, joka ei vaadi näppäimen pitämistä pohjassa. |
| `quickRangeLabel` | `count: number` | `string` | Pikaarvioinnin näppäinten nimi (1–5, jos niitä ei ole muutettu, muuten sidotut näppäimet). |
| `buildHintsInnerMarkup` | — | `string (HTML)` | Luo videon alle näppäinvihjeet nykyisten sidontojen perusteella. |
| `refreshKeyLabels` | — | `void` | Päivittää kaikki sivun näppäinetiketit: vihjeet, valintojen ja arvioiden merkit, Jatka/Peruuta/kutsu sekä asetusten yhteenvedot. |
| `ensureDemoscopeDialogStyles` | — | `void` | Lisää Pikanäppäimet- ja Animaatiot-ikkunoiden yhteisen ulkoasun. |
| `hkActionName` | `id: string` | `string` | Lokalisoitu toiminnon nimi. |
| `hkGroupName` | `group: string` | `string` | Lokalisoitu ryhmän nimi. |
| `hkActionDescription` | `id: string` | `string` | Lokalisoitu kuvaus toiminnosta (pikaarviot kuvataan molemmille tehtävätyypeille). |
| `hkSetMessage` | `text: string, warn = false` | `void` | Asettaa Pikanäppäimet-ikkunan tilarivin. |
| `hkCancelCapture` | — | `void` | Poistuu näppäimen kaappaustilasta. |
| `hkRowMarkup` | `action: object` | `string (HTML)` | Yhden toimintorivin merkintä, mukaan lukien ristiriitapaneeli tarvittaessa. |
| `renderHotkeys` | — | `void` | Piirtää koko ikkunan uudelleen ja säilyttää vierityskohdan. |
| `hkCommit` | `actionId: string, code: string, mode = "replace"` | `void` | Sitoo näppäimen; replace vapauttaa sen toiselta toiminnolta, swap vaihtaa näppäimet keskenään. |
| `hkRequestAssign` | `actionId: string, code: string` | `void` | Sitoo näppäimen suoraan tai avaa ristiriitapaneelin (Korvaa / Vaihda / Peruuta), jos se on jo käytössä. |
| `ensureHotkeysDialog` | — | `HTMLDialogElement` | Luo Pikanäppäimet-ikkunan ja capture-vaiheen näppäinkuuntelijan (Esc voidaan sitoa; tallennuksen aikana se ei sulje ikkunaa). |
| `openHotkeysDialog` | — | `void` | Avaa Pikanäppäimet-ikkunan. |

## Animaatiot

Kuusi ilmaisinpisteen tyyliä (pulse, breathe, ripple, heartbeat, orbit, blink), kolme nopeutta (0,6× / 1× / 1,7×) ja virtakytkin tallennetaan avaimiin demoscopeAnimStyle, demoscopeAnimSpeed ja demoscopeAnimEnabled. Käytössä oleva tyyli asetetaan html-elementin data-ds-anim-määritteellä (off, kun pois päältä); tyylitiedosto ohjaa pistettä ja esikatseluja.

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `readStorage` | `key: string` | `string \| null` | Turvallinen localStorage-luku. |
| `writeStorage` | `key: string, value: string \| null` | `void` | Turvallinen localStorage-kirjoitus (null poistaa avaimen). |
| `animEnabled` | — | `boolean` | Tallennettu päällä/pois-tila; oletuksena pois, jos järjestelmä pyytää vähentämään liikettä. |
| `animStyle` | — | `string` | Tallennettu tyyli (oletuksena pulse). |
| `animSpeedKey` | — | `string` | Tallennettu nopeus (slow / normal / fast; oletuksena normal). |
| `ensureAnimationStyles` | — | `void` | Lisää keyframet ja säännöt, joita animoitu piste ja esikatselupisteet käyttävät yhdessä. |
| `applyAnimationSettings` | — | `void` | Asettaa tyylin, nopeuden ja tilan html-elementille sekä päivittää asetusten yhteenvedon. |
| `ensureAnimationsDialog` | — | `HTMLDialogElement` | Luo Animaatiot-ikkunan: kytkin, nopeus, tyylikortit live-esikatseluineen ja palautus. |
| `openAnimationsDialog` | — | `void` | Avaa Animaatiot-ikkunan. |
| `ensureUiPolishStyles` | — | `void` | Lisää tummat ohuet vierityspalkit ja color-scheme: dark -asetuksen ikkunoihin ja arviointiluetteloon (muuten Chromium näyttäisi vaalean palkin). |

## Yhden kysymyksen tehtävä

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `isCheatingMode` | — | `boolean` | On true, kun sivulla on yhden kysymyksen lomake (#verdictbuttons_cheating). |
| `selectCheatingVerdict` | `kind: string` | `void` | Napsauttaa Cheating / En ole varma / En havainnut huijausta -radiopainiketta (positive / skip / negative). Jos vaihtoehto on lukittu, soittaa virheäänen ja ravistaa lukituskorttia. |
| `localizeCheatingVerdicts` | — | `void` | Kirjoittaa kolme etikettiä DemoScopen kielelle ja piirtää näppäinmerkit CSS:llä, jotta VACNetin vahvistusrivillä ei näy pikanäppäimen numeroa. Valmistelee myös lukituskortin. |
| `updateCheatingLock` | — | `void` | Päivittää lukituskortin (”kaksi muuta arviota avautuvat klipin päätyttyä · m:ss jäljellä”) ja edistymispalkin. Piilottaa sen, kun vaihtoehdot avautuvat tai arvio valitaan. |
| `startCheatingLockWatcher` | — | `void` | Käynnistää 250 ms ajastimen, joka kutsuu updateCheatingLock-funktiota. |

## Virheensieto ja diagnostiikka

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `recordFailure` | `step: string, error: any` | `void` | Kirjaa epäonnistuneen vaiheen (rajattuun luetteloon) diagnostiikkaraporttia varten. |
| `safeStep` | `step: string, fn: Function, fallback?: any` | `any` | Suorittaa asennusvaiheen; virheen sattuessa kirjaa sen ja palauttaa varaarvon, jotta myöhemmät vaiheet voivat jatkua. |
| `getVideoContainer` | — | `HTMLElement \| null` | Etsii videosäiliön tai varalla soittimen tai video-elementin yläelementin. |
| `getVerdictContainer` | — | `HTMLElement \| null` | Etsii arviointisäiliön tai ensimmäisen arviointilohkon yläelementin. |
| `getSubmitArea` | — | `HTMLElement \| null` | Etsii lähetys-/vahvistusalueen (#submitbuttons, .submitbuttons tai lähetyspainikkeen yläelementin). |
| `hasVerdictForm` | — | `boolean` | On true, jos vähintään yksi arvioinnin radiopainike on olemassa. |
| `removeEnhancements` | — | `void` | Poistaa DemoScopen paneelit, luokat ja alatunnisteen muutokset sekä palauttaa VACNetin alatunnisteen. |
| `disableDemoScope` | `reason: string` | `void` | Poistaa DemoScopen käytöstä tällä sivulla: peruu muutokset, jättää näkyviin vain asetusikkunan ja näyttää ilmoituksen kerran syytä ja istuntoa kohti. |
| `isOwnNode` | `el: Element` | `boolean` | On true DemoScopen luomille elementeille (jätetään pois rakennetta kuvaavasta raportista). |
| `elementSignature` | `el: Element` | `string` | Rakennetta kuvaavassa raportissa käytetty tag#id.class[…] -allekirjoitus; ei sisällä tekstiä. |
| `skeletonOf` | `root: Element, maxDepth = 7, maxNodes = 170` | `string` | Tiivis sisennetty puu tageista, tunnisteista ja luokista (identtiset sisarukset yhdistetään muodossa ×N). |
| `captureOriginalSkeleton` | — | `void` | Tallentaa sivun rakenteen ennen DemoScopen muutoksia. |
| `buildDiagnosticsReport` | — | `string` | Luo raportin, jossa ovat versio, sivu, kieli ja selain, tehtävätyyppi, 22 elementtitarkistusta (ok / MISSING), epäonnistuneet vaiheet ja rakenne ennen DemoScopea ja sen jälkeen. Ei sivun tekstiä eikä tilitietoja. |
| `fallbackCopyText` | `text: string` | `boolean` | Kopioi tekstin väliaikaisen tekstikentän kautta, kun Clipboard API ei ole käytettävissä. |
| `copyDiagnostics` | `statusEl: HTMLElement, textarea: HTMLTextAreaElement` | `Promise<void>` | Kopioi raportin; jos kopiointi epäonnistuu, näyttää tekstin valittavassa kentässä. |

## Asettelu ja käynnistys

| Funktion | Parameter | Rückgabe | Aufgabe |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Rakentaa Shift-nopeuden valintapalkin. |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | Yhden esiasetuspainikkeen HTML. |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | Laajennettujen esiasetusryhmien HTML. |
| `buildEnhancementBar` | — | `HTMLElement` | Rakentaa pikatuomiopalkin: esiasetukset, satunnaistajan kytkin, laajennettu laatikko. |
| `positionShiftSpeedBar` | — | `void` | Pitää nopeuspalkin tuomioluettelon edellä. |
| `positionEnhancementBar` | — | `void` | Pitää esiasetuspalkin lähetyspainikkeiden edellä. |
| `fixProceedFooter` | — | `void` | Järjestää alatunnisteen, palkit ja lähetyspainikkeen uudelleen. |
| `enhanceLayout` | — | `void` | Ottaa käyttöön kaikki asettelumuutokset ja asentaa asetuskäyttöliittymän. |
| `ensureReviewStructure` | — | `void` | Yhtenäistää VACNetin merkinnät: käärii arviointilohkot .verdicts-container-inner-säilöön, siirtää #submitbuttons-elementin säilöön ja näyttää klippilaskurin myös otsakkeen merkissä. Toimii vanhalla ja uudistetulla merkinnällä. |
| `watchProceedFooter` | — | `void` | Tarkkailee elementtiä `.verdicts-container` ja ajoittaa alatunnisteen korjauksia. |
| `watchVerdictLabels` | — | `void` | Tarkkailee tuomioiden nimiä ja ajoittaa uudelleennormalisoinnin. |
| `readFooterPreference` | `storageKey: string` | `boolean` | Lukee alatunnisteen näkyvyysasetuksen localStoragesta. |
| `saveFooterPreference` | `storageKey: string, hidden: boolean` | `void` | Tallentaa alatunnisteen näkyvyysasetuksen. |
| `applyFooterPreferences` | `footer: HTMLElement \| null = document.querySelector(".demoscope-custom-footer")` | `void` | `void` |
| `installDemoScopeFooter` | `withClipLinks: boolean, locale = getActiveLocale(), showFeedback = true` | `HTMLElement` | Luo tai päivittää lokalisoidun alatunnisteen, valinnaiset linkit ja näkyvyysasetukset. |
| `installEmptyQueueNotice` | — | `boolean` | Korvaa tyhjän jonon ilmoituksen lokalisoiduilla ohjeilla, ajalla, kielivalitsimella ja alatunnisteella. |
| `init` | — | `Promise<void>` | Aloituspiste: tilin nimen ohjain → kutsu- tai tarkastussivu → asettelu, tarkkailijat, pikanäppäimet, soittimen parannukset. |

installWelcomePage ja installInvitePage palauttavat false, jos tarvittavia VACNet-sivun elementtejä puuttuu. installEmptyQueueNotice palauttaa false, jos sivu ei ole tyhjän jonon tilassa.

### Muut kohdat

* **blockSegmentLoopGuard** (IIFE, suoritetaan latauksen yhteydessä): korvaa sivuston natiivin 100 ms segmenttisilmukan ajastimen tyhjällä toiminnolla; DemoScopen omat säätimet hallitsevat segmenttiä.
* **Vakiot ja taulukot:** SUPPORTED_LOCALES, FLAG_SVG, UI_TEXT_ROWS, INVITE_TEXT_ROWS, SETTINGS_TEXT_ROWS, PRESETS, PRESET_KEYS, PRESET_TONES, ADVANCED_PRESET_GROUPS, SHIFT_SPEEDS, FRAME_STEP ja ARROW_JUMP_SEC (21 PRESETS-määritystä); version 1.0.0 jälkeen lisätyt: KEY_ACTIONS, KEY_GROUPS, KEY_ACTION_BY_ID, KEY_ACTION_SCOPE, RESERVED_KEY_CODES, CHEATING_KEYS, VERDICT_SECTION_TITLES, VERDICT_SECTION_HELP, ANIM_STYLES ja ANIM_SPEEDS.
* **Moduulin tila:** diag (epäonnistuneet vaiheet, käytöstä poiston syy ja sivun alkuperäinen rakenne), hkState (Pikanäppäimet-ikkunan tila) sekä diagnostiikkaraportin SCRIPT_VERSION-vakio.
* **Tekstit:** kaikki käyttöliittymätekstit ovat yllä olevissa lokalisoiduissa taulukoissa; versioissa 1.2.0–1.4.0 lisätyt ikkunat on käännetty kaikille 29 kielelle.

## Tallennusavaimet

| Avain | Sijainti | Tarkoitus |
|---|---|---|
| `demoscopeLanguage`, `demoscopeLanguageAuto` | `localStorage` | Valittu kieli / automaattinen tila. |
| `demoscopeKeybindings` | `localStorage` | Oletuksista poikkeavat pikanäppäimet (JSON). |
| `demoscopeSettingsHotkey` | `localStorage` | Asetukset avaava näppäin (none, jos poistettu). |
| `demoscopeAnimEnabled`, `demoscopeAnimStyle`, `demoscopeAnimSpeed` | `localStorage` | Ilmaisimen animaatioasetukset. |
| `demoscopeSoundEffectsEnabled`, `demoscopeSoundEffectsVolume` | `localStorage` | Ääniasetukset. |
| `demoscopeClipHistory` sekä historian raja- ja muotoiluavaimet | `localStorage` | Paikallinen arviointihistoria ja sen asetukset. |
| `demoscopeSubmitPending`, `demoscopeSubmitPrevVod`, `demoscopeLangSyncTried`, `demoscopeDisabledNotice` | `sessionStorage` | Lähetyksen odotustila, kielisynkronoinnin suojaus ja kertaluonteinen käytöstäpoistoilmoitus. |



