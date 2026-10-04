<div align="center">

[English](../README.md) · [Български](bg_README.md) · [Magyar](hu_README.md) · [Tiếng Việt](vi_README.md) · [Ελληνικά](el_README.md) · [Dansk](da_README.md) · [Bahasa Indonesia](id_README.md) · [Español (España)](es-ES_README.md) · [Español (Latinoamérica)](es-419_README.md) · [Italiano](it_README.md) · [繁體中文](zh-TW_README.md) · [简体中文](zh-CN_README.md) · [한국어](ko_README.md) · [Deutsch](de_README.md) · [Nederlands](nl_README.md) · [Norsk](no_README.md) · [Polski](pl_README.md) · [Português (Portugal)](pt-PT_README.md) · [Português (Brasil)](pt-BR_README.md) · [Română](ro_README.md) · [Русский](ru_README.md) · [ไทย](th_README.md) · [Türkçe](tr_README.md) · [Українська](uk_README.md) · **Suomi** · [Français](fr_README.md) · [Čeština](cs_README.md) · [Svenska](sv_README.md) · [日本語](ja_README.md)

# DemoScope — CS2 Review Toolkit

![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-orange)

**Näppäimistökeskeinen userscript-työkalusarja CS2 VACNet -tarkastajille: tuomioesiasetukset, segmentin huomioiva videosoitin, kutsusivun parannukset, äänitehosteet ja yksityinen paikallinen historia — 29 kielellä.**

</div>

## Yleiskatsaus

DemoScope parantaa Counter-Strike VACNetin tarkastussivuja (`counter-strike.net/vacnet`). Sen sijaan että klikkaisit jokaisen lyhyen klipin kohdalla neljää tuomioryhmää (aim assist, wallhack, auto-bhop, bot), saat näppäimistökeskeisen työnkulun: valmiit tuomiot, tarkastettavaan segmenttiin rajatun hakupalkin, kuva kerrallaan etenemisen, tilapäisen nopeutuksen, kaksivaiheisen lähetysvahvistuksen ja yksityisen historian omista tuomioistasi. Kaikki toimii paikallisesti selaimessasi.

## Keskeiset ominaisuudet

- **Tuomioesiasetukset** – 5 pikaesiasetusta näppäimillä `1`–`5` sekä 15 laajennettua yhdistelmää (aim, wallhack, bhop, bot ja niiden yhdistelmät, myös “epävarma”-variantit).
- **Segmentin huomioiva soitin** – hakupalkki, aikanäyttö, ±5 s:n hypyt ja 1/64 s:n kuva-askeleet rajattuina klipin alkuun ja loppuun.
- **Nopeutus pitämällä painettuna** – pidä `Shift` painettuna toistaaksesi säädettävällä nopeudella (0,5×–4×, oletus 2×).
- **Turvallinen kaksivaiheinen lähetys** – `Enter` virittää painikkeen, toinen `Enter` lähettää tuomiot; eri alkuperän lomakekohteet estetään.
- **29 kielen käyttöliittymä** – noudattaa Steamin `?l=`-parametria, tallennettua valintaa tai selaimen kieltä, ja sivulla on kielenvalitsin.
- **Paikallinen tarkastushistoria** – historia klipeittäin ja pelikohtaisesti `localStorage`-tallennuksessa; JSON-vienti/-tuonti, HTML-raportti ja useiden varmuuskopioiden yhdistäminen yhdeksi raportiksi.
- **Kutsusivun parannukset** – uudistettu `/vacnet/createinvite`, jossa kutsulinkin näyttö/piilotus ja kopiointi yhdellä napsautuksella sekä yhteenveto vaatimuksista.
- **Äänitehosteet** – Web Audio -äänimerkit, joissa on päälle/pois, äänenvoimakkuus ja esikuuntelu.
- **Asetusikkuna** – avataan `F2`-näppäimellä (muutettavissa): äänet, pikanäppäin, historian rajat, varmuuskopiot, oletusten palautus.
- **Mukavuusominaisuudet** – latausnäkymä lähetyksen jälkeen, ilmoitukset, tilin nimen piilotuskytkin, tarkastussääntöjen ikkuna ja valinnainen tuomioiden satunnaistaja (oletuksena pois).

## Asennus

1. Asenna userscript-hallinta, kuten [Tampermonkey](https://www.tampermonkey.net/) tai [Violentmonkey](https://violentmonkey.github.io/) (skripti käyttää `GM_addStyle`- ja `unsafeWindow`-rajapintoja).
2. [Asenna DemoScope](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js) ja vahvista asennus hallinnassa.
3. Kirjaudu Steamiin ja avaa <https://www.counter-strike.net/vacnet/>.
4. Avaa tarkastettava klippi — DemoScope latautuu automaattisesti (`/vacnet/join`-sivu on poissuljettu).

## Käyttö

Pikanäppäimet toimivat tarkastussivuilla, kun kohdistus ei ole syöttökentässä, painikkeessa, linkissä tai valintaluettelossa.

| Näppäin | Toiminto |
|---|---|
| `1` … `5` | Käytä tuomioesiasetusta: 1 botti + aim + wallhack, 2 aim + wallhack, 3 rage, 4 puhdas pelaaja, 5 epävarma |
| `Shift` (hold) | Pidä painettuna nopeutusta varten (0,5×–4×, oletus 2×, valittavissa sivulla) |
| `←` `→` | Hyppää 5 sekuntia taakse / eteen |
| `,` `.` | Yksi kuva (1/64 s) taakse / eteen |
| `Space` | Toista / tauko |
| `M` / `F` | Mykistä / koko näyttö (videon kaksoisnapsautus vaihtaa myös koko näytön) |
| `Enter` ×2 | Paina kerran virittääksesi lähetyspainikkeen, paina uudelleen lähettääksesi tuomiot |
| `F2` | Avaa asetusikkuna (muutettavissa) |

## Arkkitehtuuri ja funktioiden erittely

DemoScope on yksi itseään kutsuva funktio (`@run-at document-start`, `@noframes`). `init()` valitsee kutsusivun ja tarkastussivun välillä ja kytkee alla olevat moduulit. Täydellinen viite kaikista 143 funktiosta — nimi, vastuu, parametrit ja palautusarvo — löytyy täältä: [fi_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/fi_FUNCTIONS.md).

| Moduuli | Vastuu | Keskeiset funktiot |
|---|---|---|
| `Localization` | Selvittää käyttöliittymän kielen, hakee tekstit, piirtää liput ja kielenvalitsimen | `getActiveLocale`, `tr`, `settingText`, `inviteText`, `getPresetLabel`, `installLanguageSelector` |
| `Segment & player` | Lukee klipin alun/lopun sivulta, kietoo Video.js-/HTML5-toiston, poistaa sivuston natiivin segmenttisilmukan ajastimen käytöstä | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | Oma hakupalkki, näppäinvihjeet, Shift-nopeutus, kuva-askeleet, pikanäppäimet | `installCustomControls`, `installPlayerEnhancements`, `isShortcutBlocked` |
| `Verdict presets` | Esiasetustaulukko, valintatila, esiasetusten käyttö valinnaisella satunnaisella järjestyksellä ja viiveillä | `applyPreset`, `detectActivePreset`, `syncPresetButtons`, `applyDefaultVerdicts`, `buildEnhancementBar` |
| `Submit flow` | Kaksivaiheinen Enter, rakentaa `verdict_labels[]`, saman alkuperän tarkistus, latausnäkymä | `invokeProceedAction`, `prepareVerdictFormForSubmit`, `submitVerdictForm`, `isSafeSubmitTarget`, `finishSubmitLoadingWhenReady` |
| `Local history` | Tallentaa, karsii ja näyttää klippi- ja pelikohtaisen historian `localStorage`-tallennuksessa | `readClipHistoryStore`, `writeClipHistoryStore`, `appendReviewHistory`, `renderClipHistory` |
| `Backups & reports` | JSON-vienti/-tuonti, HTML-raportti, useista varmuuskopioista yhdistetty raportti | `exportLocalHistory`, `importLocalHistory`, `exportReadableHistory`, `exportCombinedHistoryReports` |
| `Settings & sound` | Asetusikkuna, muutettava pikanäppäin, Web Audio -äänimerkit | `ensureSettingsDialog`, `openSettingsDialog`, `installSettingsUi`, `playUiSound` |
| `Invite page` | Uudistettu `/vacnet/createinvite`: linkin näyttö/piilotus ja kopiointi, vaatimukset | `installInvitePage` |
| `Layout & UI helpers` | Ilmoitukset, alatunnisteen piilotus, asettelun tarkkailijat, tilin nimen kytkin | `enhanceLayout`, `showToast`, `watchProceedFooter`, `installAccountNameControl` |
| `Bootstrap` | Aloituspiste: valitsee sivutyypin ja käynnistää moduulit | `init` |

## Paikalliset tiedot ja yksityisyys

DemoScope ei lähetä telemetriaa. Asetukset ja historia pysyvät selaimesi `localStorage`-tallennuksessa (avaimet, jotka alkavat `demoscope`) ja `sessionStorage`-tallennuksessa. Poista historia asetusikkunan historian tyhjennysvalinnalla.

## Vastuuvapauslauseke

DemoScope on epävirallinen yhteisöprojekti, joka ei ole Valve Corporationin kanssa yhteydessä eikä sen hyväksymä. Se ei koskaan päätä tuomiota puolestasi — tarkasta jokainen klippi itse ja noudata tarkastusohjelman sääntöjä. Käyttö omalla vastuulla.

## License

Julkaistu [MIT](../LICENSE)-lisenssillä.