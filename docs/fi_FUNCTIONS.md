<div align="center">

[English](../FUNCTIONS.md) · [Български](bg_FUNCTIONS.md) · [Magyar](hu_FUNCTIONS.md) · [Tiếng Việt](vi_FUNCTIONS.md) · [Ελληνικά](el_FUNCTIONS.md) · [Dansk](da_FUNCTIONS.md) · [Bahasa Indonesia](id_FUNCTIONS.md) · [Español (España)](es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](es-419_FUNCTIONS.md) · [Italiano](it_FUNCTIONS.md) · [繁體中文](zh-TW_FUNCTIONS.md) · [简体中文](zh-CN_FUNCTIONS.md) · [한국어](ko_FUNCTIONS.md) · [Deutsch](de_FUNCTIONS.md) · [Nederlands](nl_FUNCTIONS.md) · [Norsk](no_FUNCTIONS.md) · [Polski](pl_FUNCTIONS.md) · [Português (Portugal)](pt-PT_FUNCTIONS.md) · [Português (Brasil)](pt-BR_FUNCTIONS.md) · [Română](ro_FUNCTIONS.md) · [Русский](ru_FUNCTIONS.md) · [ไทย](th_FUNCTIONS.md) · [Türkçe](tr_FUNCTIONS.md) · [Українська](uk_FUNCTIONS.md) · **Suomi** · [Français](fr_FUNCTIONS.md) · [Čeština](cs_FUNCTIONS.md) · [Svenska](sv_FUNCTIONS.md) · [日本語](ja_FUNCTIONS.md)

</div>

# DemoScope — Funktioviite

Täydellinen viite kaikista 128 ylimmän tason funktiosta tiedostossa `DemoScope.user.js` v1.0.0 (nimi, parametrit, palautusarvo, vastuu). Takaisin [README](../../README/fi_README.md)-sivulle.

Merkinnät: `—` tarkoittaa, ettei parametreja ole; `void` tarkoittaa, että funktio kutsutaan sivuvaikutustensa vuoksi.

## Lokalisointi

| Funktio | Parametrit | Palauttaa | Vastuu |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Kielen lipun upotettu SVG-koodi; puuttuessaan palauttaa maapallokuvakkeen. |
| `getSavedLocale` | — | `string \| null` | Lukee käyttäjän tallennetun kielen (`demoscopeLanguage`) `localStorage`-tallennuksesta. |
| `getActiveLocale` | — | `string` | Selvittää aktiivisen kielen: tallennettu valinta → Steamin `?l=` → selaimen/sivun kieli → `en`. |
| `getLanguageBadge` | — | `string` | Kielen oma näyttönimi, esim. “English version”, kielenvalitsimen merkkiä varten. |
| `tr` | `key: string` | `string` | Hakee käyttöliittymätekstin aktiiviselle kielelle (varalla: englanti, sitten avain itse). |
| `inviteText` | `key: string` | `string` | Sama haku kutsusivun tekstitaulukolle. |
| `settingText` | `key: string` | `string` | Sama haku asetusikkunan tekstitaulukolle. |
| `getPresetLabel` | `name: string` | `string` | Esiasetuksen lokalisoitu nimi; koostaa yhdistelmiä kuten “Bot + Aim”. |
| `buildLanguageOptions` | — | `string (HTML)` | Kielenvalintapainikkeiden HTML, mukaan lukien “auto”-kohta. |
| `installLanguageSelector` | `root: HTMLElement` | `void` | Kytkee ponnahduskielenvalitsimen, sijoittaa sen, tallentaa valinnan ja lataa sivun uudelleen. |

## Äänitehosteet ja asetusikkuna

| Funktio | Parametrit | Palauttaa | Vastuu |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | Asetusikkunassa näkyvä rivi “N merkintää · viimeisin merkintä: …”. |
| `soundsEnabled` | — | `boolean` | Ovatko käyttöliittymän äänet käytössä (`demoscopeSoundEffectsEnabled`, oletuksena päällä). |
| `getSoundVolume` | — | `number (0–1)` | Tallennettu äänenvoimakkuus (`demoscopeSoundEffectsVolume`, oletus 0,4). |
| `playUiSound` | `kind = "click"` | `void` | Syntetisoi lyhyen äänisarjan Web Audiolla (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`); ei koskaan heitä virhettä. |
| `readSettingsHotkey` | — | `string` | Tallennettu `KeyboardEvent.code`, joka avaa asetusikkunan (oletus `F2`). |
| `formatHotkey` | `code: string` | `string` | Luettava näppäimen nimi (`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | Poimii fyysisen näppäinkoodin ja kuvaa ei-latinalaiset asettelut takaisin muotoon `KeyX`; `""`, jos käyttökelvoton. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | Tosi näppäimille, joita DemoScope tai soitin jo käyttää (Enter, välilyönti, nuolet, `M`, `F`, `1`–`5`, …). |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Luo (kerran) ja kytkee asetusikkunan: ääni, äänenvoimakkuus, pikanäppäimen tallennus, historian rajat, vienti/tuonti/raportti/yhdistäminen/tyhjennys, nollaus. |
| `openSettingsDialog` | `opener = null` | `void` | Avaa ikkunan nykyisillä arvoilla ja muistaa elementin, jolle fokus palautetaan. |
| `installSettingsUi` | — | `void` | Asentaa yleisen capture-vaiheen näppäinkuuntelijan (ikkunan avaus/sulku, uudelleenmääritys) ja äänitapahtumat. |
| `installUiSoundEvents` | — | `void` | Delegoitu napsautuskuuntelija, joka soittaa palauteääniä DemoScopen ohjaimille. |

## Varmuuskopiot, raportit ja historian rajat

| Funktio | Parametrit | Palauttaa | Vastuu |
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
| `readAdvancedPresetsOpen` | — | `boolean` | Jäikö laajennettujen esiasetusten laatikko auki. |

## Tilin nimi ja kutsusivu

| Funktio | Parametrit | Palauttaa | Vastuu |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Onko Steam-tilin nimi tällä hetkellä piilotettu. |
| `installAccountNameControl` | — | `void` | Lisää silmäkytkimen uloskirjautumislinkin viereen ja pitää sen synkronoituna `MutationObserver`illa. |
| `installInvitePage` | — | `boolean` | Uudistaa sivun `/vacnet/createinvite`: korttiasettelu, linkin näyttö/piilotus ja kopiointi (Clipboard API, varalla `execCommand`), vaatimusluettelo, kielenvalitsin. Palauttaa `false`, jos odotettuja elementtejä puuttuu. |

## Klipin segmentti ja soitinsovitin

| Funktio | Parametrit | Palauttaa | Vastuu |
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
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | Tosi, kun fokus on syöttökentässä, tekstialueella, valintaluettelossa, painikkeessa, linkissä tai muokattavassa elementissä. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | Nopeusvalinnan nimi. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | `<option>`-luettelo nopeusvalitsimelle (0,5–4×). |
| `readStoredShiftSpeed` | — | `number` | Tallennettu Shift-nopeus (oletus 2×). |
| `readStoredVerdictRandomizer` | — | `boolean` | Tuomioiden satunnaistajan tallennettu tila (oletuksena pois). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | Kytkee toistonopeuden käsittelyn, segmentin rajaamisen/pysäytyksen, haun/kuva-askeleen/mykistyksen/koko näytön apufunktiot ja yleiset pikanäppäimet (`1`–`5`, nuolet, `,` `.`, välilyönti, `M`, `F`, Shift). Sisäiset sulkeumat: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, piirtosilmukan apufunktiot. |

## Tuomioesiasetukset

| Funktio | Parametrit | Palauttaa | Vastuu |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | Valitsee “skip” jokaisessa tuomioryhmässä, jossa ei ole valintaa. |
| `getSelectedVerdictState` | — | `object` | Ryhmien `aimassist`, `wallhack`, `autobhop`, `bot` nykyinen arvo (`positive` / `negative` / `skip` / `null`). |
| `detectActivePreset` | — | `string \| null` | Nykyistä valintaa vastaavan esiasetuksen nimi. |
| `syncPresetButtons` | — | `string \| null` | Päivittää `aria-pressed`-attribuutin esiasetuspainikkeissa ja laajennetun esiasetuksen merkin. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | Napsauttaa esiasetuksen valintanappeja; satunnaistajan ollessa päällä sekoittaa järjestyksen ja odottaa 200–600 ms napsautusten välillä. Poistaa esiasetuspainikkeet käytöstä suorituksen ajaksi. |
| `normalizeVerdictLabels` | `root = document` | `void` | Poistaa korostusmerkinnän tuomioiden nimistä. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Lisää lokalisoidut otsikot jokaisen tuomioryhmän yläpuolelle. |

## Ilmoitukset, alatunniste ja lähetyksen lataus

| Funktio | Parametrit | Palauttaa | Vastuu |
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

| Funktio | Parametrit | Palauttaa | Vastuu |
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

## Lähetysvirta

| Funktio | Parametrit | Palauttaa | Vastuu |
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
| `submitVerdictForm` | `{ recordHistory = false }` | `boolean` | Suorittaa turvatarkistuksen, näyttää latausnäkymän ja lähettää lomakkeen. |
| `submitVerdictsDirect` | — | `boolean` | Valmistelee nimet ja lähettää. |
| `invokeProceedAction` | — | `boolean` | Enter-/napsautuskäsittelijä: ensimmäinen painallus virittää, toinen lähettää. |
| `installProceedShortcut` | — | `void` | Capture-vaiheen kuuntelija näppäimille `Enter`/`NumpadEnter`. |
| `hookProceedButton` | — | `void` | Korvaa natiivin lähetyspainikkeen napsautuskäyttäytymisen. |
| `installVerdictChangeReset` | — | `void` | Purkaa lähetyksen viritetyn tilan ja synkronoi esiasetukset uudelleen, kun tuomio muuttuu. |
| `scheduleProceedFooterFix` | — | `void` | Viivästetty (`requestAnimationFrame`) `fixProceedFooter`-kutsu. |
| `scheduleVerdictLabelsFix` | — | `void` | Viivästetty nimien/otsikoiden/oletusarvojen uudelleennormalisointi. |

## Asettelu ja käynnistys

| Funktio | Parametrit | Palauttaa | Vastuu |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Rakentaa Shift-nopeuden valintapalkin. |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | Yhden esiasetuspainikkeen HTML. |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | Laajennettujen esiasetusryhmien HTML. |
| `buildEnhancementBar` | — | `HTMLElement` | Rakentaa pikatuomiopalkin: esiasetukset, satunnaistajan kytkin, laajennettu laatikko. |
| `positionShiftSpeedBar` | — | `void` | Pitää nopeuspalkin tuomioluettelon edellä. |
| `positionEnhancementBar` | — | `void` | Pitää esiasetuspalkin lähetyspainikkeiden edellä. |
| `fixProceedFooter` | — | `void` | Järjestää alatunnisteen, palkit ja lähetyspainikkeen uudelleen. |
| `enhanceLayout` | — | `void` | Ottaa käyttöön kaikki asettelumuutokset ja asentaa asetuskäyttöliittymän. |
| `watchProceedFooter` | — | `void` | Tarkkailee elementtiä `.verdicts-container` ja ajoittaa alatunnisteen korjauksia. |
| `watchVerdictLabels` | — | `void` | Tarkkailee tuomioiden nimiä ja ajoittaa uudelleennormalisoinnin. |
| `init` | — | `Promise<void>` | Aloituspiste: tilin nimen ohjain → kutsu- tai tarkastussivu → asettelu, tarkkailijat, pikanäppäimet, soittimen parannukset. |

### Ei lueteltu yllä

* **`blockSegmentLoopGuard`** (IIFE, suoritetaan latauksen yhteydessä): kietoo sivun `setInterval`-funktion niin, että sivuston oma 100 ms:n segmenttisilmukan ajastin korvataan tyhjällä funktiolla; segmenttiä hallitsevat DemoScopen omat ohjaimet.
* **Vakiot ja taulukot:** `SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC` (`PRESETS`: 21 määritelmää).
