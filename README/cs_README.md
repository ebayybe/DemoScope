<div align="center">

[English](../README.md) · [Български](bg_README.md) · [Magyar](hu_README.md) · [Tiếng Việt](vi_README.md) · [Ελληνικά](el_README.md) · [Dansk](da_README.md) · [Bahasa Indonesia](id_README.md) · [Español (España)](es-ES_README.md) · [Español (Latinoamérica)](es-419_README.md) · [Italiano](it_README.md) · [繁體中文](zh-TW_README.md) · [简体中文](zh-CN_README.md) · [한국어](ko_README.md) · [Deutsch](de_README.md) · [Nederlands](nl_README.md) · [Norsk](no_README.md) · [Polski](pl_README.md) · [Português (Portugal)](pt-PT_README.md) · [Português (Brasil)](pt-BR_README.md) · [Română](ro_README.md) · [Русский](ru_README.md) · [ไทย](th_README.md) · [Türkçe](tr_README.md) · [Українська](uk_README.md) · [Suomi](fi_README.md) · [Français](fr_README.md) · **Čeština** · [Svenska](sv_README.md) · [日本語](ja_README.md)

# DemoScope — CS2 Review Toolkit

![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-orange)

**Userscript sada nástrojů zaměřená na klávesnici pro recenzenty CS2 VACNet: předvolby verdiktů, přehrávač videa s ohledem na segment, vylepšení stránky pozvánek, zvukové efekty a soukromá místní historie — ve 29 jazycích.**

</div>

## Přehled

DemoScope vylepšuje stránky pro kontrolu Counter-Strike VACNet (`counter-strike.net/vacnet`). Místo klikání na čtyři skupiny verdiktů (aim assist, wallhack, auto-bhop, bot) u každého krátkého klipu získáte pracovní postup řízený klávesnicí: předvolené verdikty, posuvník omezený na kontrolovaný segment, krokování po snímcích, dočasné zrychlení, dvoukrokové potvrzení odeslání a soukromou historii vlastních verdiktů. Vše běží lokálně ve vašem prohlížeči.

## Hlavní funkce

- **Předvolby verdiktů** – 5 rychlých předvoleb na klávesách `1`–`5` a 15 rozšířených kombinací (aim, wallhack, bhop, bot a jejich směsi včetně variant „nejisté“).
- **Přehrávač s ohledem na segment** – posuvník, zobrazení času, skoky ±5 s a krokování po 1/64 s omezené na začátek a konec klipu.
- **Zrychlení podržením** – podržte `Shift` pro přehrávání nastavitelnou rychlostí (0,5×–4×, výchozí 2×).
- **Bezpečné dvoukrokové odeslání** – `Enter` připraví tlačítko, druhý `Enter` odešle verdikty; cíle formulářů s jiným původem jsou blokovány.
- **Rozhraní ve 29 jazycích** – řídí se parametrem Steamu `?l=`, uloženou volbou nebo jazykem prohlížeče, s výběrem jazyka přímo na stránce.
- **Místní historie kontrol** – historie podle klipů a her v `localStorage`; export/import JSON, HTML report a sloučení mnoha záloh do jednoho reportu.
- **Vylepšená stránka pozvánek** – přepracovaná `/vacnet/createinvite` se zobrazením/skrytím a kopírováním odkazu pozvánky jedním kliknutím a shrnutím požadavků.
- **Zvukové efekty** – syntetizované zvuky Web Audio s vypínačem, hlasitostí a poslechem ukázky.
- **Dialog nastavení** – otevírá se klávesou `F2` (lze změnit): zvuky, zkratka, limity historie, zálohy, obnovení výchozích hodnot.
- **Pohodlí** – překryv načítání po odeslání, oznámení, přepínač skrytí názvu účtu, dialog s pravidly kontroly a volitelný randomizér verdiktů (ve výchozím stavu vypnutý).

## Instalace

1. Nainstalujte správce userscriptů, například [Tampermonkey](https://www.tampermonkey.net/) nebo [Violentmonkey](https://violentmonkey.github.io/) (skript používá `GM_addStyle` a `unsafeWindow`).
2. [Nainstalujte DemoScope](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js) a potvrďte instalaci ve správci.
3. Přihlaste se do Steamu a otevřete <https://www.counter-strike.net/vacnet/>.
4. Otevřete klip ke kontrole — DemoScope se načte automaticky (stránka `/vacnet/join` je vyloučena).

## Použití

Zkratky fungují na stránkách kontroly, pokud fokus není v poli pro zadávání, tlačítku, odkazu nebo výběrovém seznamu.

| Klávesa | Akce |
|---|---|
| `1` … `5` | Použít předvolbu verdiktu: 1 bot + aim + wallhack, 2 aim + wallhack, 3 rage, 4 čistý hráč, 5 nejisté |
| `Shift` (hold) | Podržením zrychlíte (0,5×–4×, výchozí 2×, volitelné na stránce) |
| `←` `→` | Skok o 5 sekund zpět / vpřed |
| `,` `.` | Jeden snímek (1/64 s) zpět / vpřed |
| `Space` | Přehrát / pozastavit |
| `M` / `F` | Ztlumit / celá obrazovka (dvojklik na video také přepíná celou obrazovku) |
| `Enter` ×2 | Jedním stisknutím připravíte tlačítko odeslání, dalším odešlete verdikty |
| `F2` | Otevřít dialog nastavení (lze změnit) |

## Architektura a přehled funkcí

DemoScope je jediná samovolající se funkce (`@run-at document-start`, `@noframes`). `init()` vybírá mezi stránkou pozvánek a stránkou kontroly a propojuje níže uvedené moduly. Úplný přehled všech 143 funkcí — název, odpovědnost, parametry a návratová hodnota — najdete v [cs_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/cs_FUNCTIONS.md).

| Modul | Odpovědnost | Klíčové funkce |
|---|---|---|
| `Localization` | Určuje jazyk rozhraní, vyhledává texty, kreslí vlajky a výběr jazyka | `getActiveLocale`, `tr`, `settingText`, `inviteText`, `getPresetLabel`, `installLanguageSelector` |
| `Segment & player` | Čte začátek/konec klipu ze stránky, obaluje přehrávání Video.js/HTML5, vypíná nativní časovač smyčky segmentu webu | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | Vlastní posuvník, nápověda kláves, zrychlení klávesou Shift, krokování snímků, klávesové zkratky | `installCustomControls`, `installPlayerEnhancements`, `isShortcutBlocked` |
| `Verdict presets` | Tabulka předvoleb, stav výběru, použití předvoleb s volitelným náhodným pořadím a zpožděním | `applyPreset`, `detectActivePreset`, `syncPresetButtons`, `applyDefaultVerdicts`, `buildEnhancementBar` |
| `Submit flow` | Dvoukrokový Enter, sestavení `verdict_labels[]`, kontrola stejného původu, překryv načítání | `invokeProceedAction`, `prepareVerdictFormForSubmit`, `submitVerdictForm`, `isSafeSubmitTarget`, `finishSubmitLoadingWhenReady` |
| `Local history` | Ukládá, ořezává a zobrazuje historii podle klipů a her v `localStorage` | `readClipHistoryStore`, `writeClipHistoryStore`, `appendReviewHistory`, `renderClipHistory` |
| `Backups & reports` | Export/import JSON, HTML report, sloučený report z mnoha záloh | `exportLocalHistory`, `importLocalHistory`, `exportReadableHistory`, `exportCombinedHistoryReports` |
| `Settings & sound` | Dialog nastavení, měnitelná zkratka, zvukové signály Web Audio | `ensureSettingsDialog`, `openSettingsDialog`, `installSettingsUi`, `playUiSound` |
| `Invite page` | Přepracovaná `/vacnet/createinvite`: zobrazení/skrytí a kopírování odkazu, požadavky | `installInvitePage` |
| `Layout & UI helpers` | Oznámení, skrytí zápatí, pozorovatelé rozvržení, přepínač názvu účtu | `enhanceLayout`, `showToast`, `watchProceedFooter`, `installAccountNameControl` |
| `Bootstrap` | Vstupní bod: určí typ stránky a spustí moduly | `init` |

## Místní data a soukromí

DemoScope neodesílá telemetrii. Nastavení a historie zůstávají v `localStorage` prohlížeče (klíče začínající `demoscope`) a v `sessionStorage`. Historii odstraníte volbou vymazání historie v dialogu nastavení.

## Prohlášení o vyloučení odpovědnosti

DemoScope je neoficiální komunitní projekt, který není spojen se společností Valve Corporation ani jí schválen. Nikdy nerozhoduje verdikt za vás — každý klip zkontrolujte sami a dodržujte pravidla kontrolního programu. Použití na vlastní riziko.

## License

Vydáno pod licencí [MIT](../LICENSE).