<div align="center">

[English](../README.md) · [Български](bg_README.md) · **Magyar** · [Tiếng Việt](vi_README.md) · [Ελληνικά](el_README.md) · [Dansk](da_README.md) · [Bahasa Indonesia](id_README.md) · [Español (España)](es-ES_README.md) · [Español (Latinoamérica)](es-419_README.md) · [Italiano](it_README.md) · [繁體中文](zh-TW_README.md) · [简体中文](zh-CN_README.md) · [한국어](ko_README.md) · [Deutsch](de_README.md) · [Nederlands](nl_README.md) · [Norsk](no_README.md) · [Polski](pl_README.md) · [Português (Portugal)](pt-PT_README.md) · [Português (Brasil)](pt-BR_README.md) · [Română](ro_README.md) · [Русский](ru_README.md) · [ไทย](th_README.md) · [Türkçe](tr_README.md) · [Українська](uk_README.md) · [Suomi](fi_README.md) · [Français](fr_README.md) · [Čeština](cs_README.md) · [Svenska](sv_README.md) · [日本語](ja_README.md)

# DemoScope — CS2 Review Toolkit

![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-orange)

**Billentyűzetközpontú userscript-eszköztár CS2 VACNet-ellenőrzőknek: ítéletsablonok, szegmensfüggő videolejátszó, meghívóoldal-fejlesztések, hangeffektek és privát helyi előzmények — 29 nyelven.**

</div>

## Áttekintés

A DemoScope továbbfejleszti a Counter-Strike VACNet ellenőrző oldalait (`counter-strike.net/vacnet`). Ahelyett, hogy minden rövid klipnél négy ítéletcsoportot (aim assist, wallhack, auto-bhop, bot) kellene kattintgatnod, billentyűzetközpontú munkafolyamatot kapsz: előre beállított ítéleteket, az ellenőrzött szegmensre korlátozott keresősávot, képkockánkénti léptetést, ideiglenes gyorsítást, kétlépcsős beküldés-megerősítést és a saját ítéleteid privát előzményeit. Minden helyben, a böngésződben fut.

## Fő funkciók

- **Ítéletsablonok** – 5 gyorssablon az `1`–`5` billentyűkön, plusz 15 bővített kombináció (aim, wallhack, bhop, bot és keverékeik, a „bizonytalan” változatokkal együtt).
- **Szegmensfüggő lejátszó** – keresősáv, időkijelzés, ±5 mp ugrás és 1/64 mp-es képkockaléptetés a klip kezdő- és végpontjára korlátozva.
- **Gyorsítás nyomvatartással** – tartsd lenyomva a `Shift` billentyűt a beállítható sebességű lejátszáshoz (0,5×–4×, alapértelmezés: 2×).
- **Biztonságos kétlépcsős beküldés** – az `Enter` élesíti a gombot, a második `Enter` elküldi az ítéleteket; a más eredetű űrlapcélok le vannak tiltva.
- **29 nyelvű felület** – követi a Steam `?l=` paraméterét, a mentett választást vagy a böngésző nyelvét, az oldalon belüli nyelvválasztóval.
- **Helyi ellenőrzési előzmények** – klipenkénti és játékonkénti előzmények a `localStorage`-ban; JSON-export/-import, HTML-jelentés, több biztonsági mentés egyesítése egy jelentésbe.
- **Meghívóoldal-fejlesztések** – újratervezett `/vacnet/createinvite` a meghívólink megjelenítésével/elrejtésével, egykattintásos másolással és a követelmények összefoglalójával.
- **Hangeffektek** – szintetizált Web Audio hangjelzések be/ki kapcsolóval, hangerő- és előhallgatás-vezérlővel.
- **Beállítások ablak** – az `F2` billentyűvel nyitható (módosítható): hangok, gyorsbillentyű, előzménykorlátok, mentések, alaphelyzet.
- **Kényelmi funkciók** – betöltésjelző beküldés után, értesítések, fióknév elrejtése, ellenőrzési szabályok ablaka és opcionális ítélet-randomizáló (alapból kikapcsolva).

## Telepítés

1. Telepíts egy userscript-kezelőt, például a [Tampermonkey](https://www.tampermonkey.net/) vagy a [Violentmonkey](https://violentmonkey.github.io/) bővítményt (a szkript a `GM_addStyle` és az `unsafeWindow` API-t használja).
2. [Telepítsd a DemoScope-ot](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js), és hagyd jóvá a telepítést a kezelőben.
3. Jelentkezz be a Steamre, és nyisd meg a <https://www.counter-strike.net/vacnet/> oldalt.
4. Nyiss meg egy ellenőrzendő klipet — a DemoScope automatikusan betöltődik (a `/vacnet/join` oldal ki van zárva).

## Használat

A gyorsbillentyűk az ellenőrző oldalakon működnek, ha a fókusz nem beviteli mezőben, gombon, hivatkozáson vagy legördülő listán van.

| Billentyű | Művelet |
|---|---|
| `1` … `5` | Ítéletsablon alkalmazása: 1 bot + aim + wallhack, 2 aim + wallhack, 3 rage, 4 tiszta játékos, 5 bizonytalan |
| `Shift` (hold) | Nyomvatartva gyorsít (0,5×–4×, alapértelmezés 2×, az oldalon választható) |
| `←` `→` | Ugrás 5 másodpercet vissza / előre |
| `,` `.` | Egy képkocka (1/64 mp) vissza / előre |
| `Space` | Lejátszás / szünet |
| `M` / `F` | Némítás / teljes képernyő (a videóra duplán kattintva is vált a teljes képernyő) |
| `Enter` ×2 | Egyszer megnyomva élesíti a beküldés gombot, másodszor megnyomva elküldi az ítéleteket |
| `F2` | A beállítások ablak megnyitása (módosítható) |

## Architektúra és függvényáttekintés

A DemoScope egyetlen önmagát meghívó függvény (`@run-at document-start`, `@noframes`). Az `init()` dönt a meghívóoldal és az ellenőrző oldal között, és összekapcsolja az alábbi modulokat. Mind a(z) 143 függvény teljes leírása — név, feladat, paraméterek és visszatérési érték — itt található: [hu_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/hu_FUNCTIONS.md).

| Modul | Feladat | Fő függvények |
|---|---|---|
| `Localization` | Meghatározza a felület nyelvét, szövegeket keres, zászlókat és a nyelvválasztót rajzolja | `getActiveLocale`, `tr`, `settingText`, `inviteText`, `getPresetLabel`, `installLanguageSelector` |
| `Segment & player` | Kiolvassa a klip kezdetét/végét az oldalból, becsomagolja a Video.js/HTML5 lejátszást, letiltja a webhely natív szegmensismétlő időzítőjét | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | Egyedi keresősáv, billentyűsúgó, Shift-gyorsítás, képkockaléptetés, gyorsbillentyűk | `installCustomControls`, `installPlayerEnhancements`, `isShortcutBlocked` |
| `Verdict presets` | Sablontábla, kijelölési állapot, sablon alkalmazása opcionális véletlen sorrenddel és késleltetéssel | `applyPreset`, `detectActivePreset`, `syncPresetButtons`, `applyDefaultVerdicts`, `buildEnhancementBar` |
| `Submit flow` | Kétlépcsős Enter, `verdict_labels[]` összeállítása, azonos eredet ellenőrzése, betöltésjelző | `invokeProceedAction`, `prepareVerdictFormForSubmit`, `submitVerdictForm`, `isSafeSubmitTarget`, `finishSubmitLoadingWhenReady` |
| `Local history` | Klipenkénti és játékonkénti előzmények tárolása, nyesése és megjelenítése a `localStorage`-ban | `readClipHistoryStore`, `writeClipHistoryStore`, `appendReviewHistory`, `renderClipHistory` |
| `Backups & reports` | JSON-export/-import, HTML-jelentés, több mentésből egyesített jelentés | `exportLocalHistory`, `importLocalHistory`, `exportReadableHistory`, `exportCombinedHistoryReports` |
| `Settings & sound` | Beállítások ablak, módosítható gyorsbillentyű, Web Audio hangjelzések | `ensureSettingsDialog`, `openSettingsDialog`, `installSettingsUi`, `playUiSound` |
| `Invite page` | Átalakított `/vacnet/createinvite`: link megjelenítése/elrejtése és másolása, követelmények | `installInvitePage` |
| `Layout & UI helpers` | Értesítések, lábléc elrejtése, elrendezésfigyelők, fióknév-kapcsoló | `enhanceLayout`, `showToast`, `watchProceedFooter`, `installAccountNameControl` |
| `Bootstrap` | Belépési pont: felismeri az oldaltípust, és elindítja a modulokat | `init` |

## Helyi adatok és adatvédelem

A DemoScope nem küld telemetriát. A beállítások és az előzmények a böngésző `localStorage`-ában (`demoscope` előtagú kulcsok) és `sessionStorage`-ában maradnak. Az előzmények törléséhez használd a beállítások ablak törlés opcióját.

## Felelősségkizárás

A DemoScope nem hivatalos közösségi projekt, nem áll kapcsolatban a Valve Corporationnel, és az nem támogatja. Soha nem hoz helyetted ítéletet — minden klipet magad ellenőrizz, és tartsd be az ellenőrzési program szabályait. Használata saját felelősségedre történik.

## License

A projekt [MIT](../LICENSE) licenc alatt érhető el.