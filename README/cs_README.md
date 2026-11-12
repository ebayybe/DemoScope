<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/README/README.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/README/bg_README.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/README/hu_README.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/README/vi_README.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/README/el_README.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/README/da_README.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/README/id_README.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/README/es-ES_README.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/README/es-419_README.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/README/it_README.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/README/zh-TW_README.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/README/zh-CN_README.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/README/ko_README.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/README/de_README.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/README/nl_README.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/README/no_README.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/README/pl_README.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-PT_README.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-BR_README.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/README/ro_README.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/README/ru_README.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/README/th_README.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/README/tr_README.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/README/uk_README.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/README/fi_README.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/README/fr_README.md) · **Čeština** · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/README/sv_README.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/README/ja_README.md)

</div>

<br>

<div align="center">

# DemoScope

**Nástroj pro kontrolu CS2 VACNet navržený pro ovládání klávesnicí.**<br>
Předvolby verdiktů · přehrávač respektující hranice klipu · přemapovatelné klávesy · soukromá místní historie · 29 jazyků.

<br>

[![Verze](https://img.shields.io/badge/version-v1.2.0-3b82f6?style=flat-square)](https://github.com/ebayybe/DemoScope/releases)
[![Licence](https://img.shields.io/badge/license-GPL--3.0-22c55e?style=flat-square)](https://github.com/ebayybe/DemoScope/blob/main/LICENSE)
[![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-f59e0b?style=flat-square)](#instalace)
[![Jazyky](https://img.shields.io/badge/languages-29-8b5cf6?style=flat-square)](#jazyky)
[![Soukromí](https://img.shields.io/badge/telemetry-none-64748b?style=flat-square)](#soukromí)

<br>

[**⬇ Nainstalovat DemoScope**](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js)

[Funkce](#funkce) · [Instalace](#instalace) · [Klávesové zkratky](#klávesové-zkratky) · [Přizpůsobení](#přizpůsobení) · [Dokumentace](https://github.com/ebayybe/DemoScope/blob/main/docs/cs_FUNCTIONS.md) · [Seznam změn](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/cs_CHANGELOG.md)

</div>

<br>

## Snímky obrazovky

<table>
  <tr>
    <td align="center" width="25%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png" alt="Uvítací obrazovka DemoScope"></a><br><sub><b>Uvítací obrazovka</b></sub></td>
    <td align="center" width="25%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png" alt="Hlavní rozhraní DemoScope"></a><br><sub><b>Hlavní rozhraní</b></sub></td>
    <td align="center" width="25%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/2_DemoScope.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/2_DemoScope.png" alt="Rozhraní pro kontrolu klipů"></a><br><sub><b>Rozhraní pro kontrolu klipů</b></sub></td>
    <td align="center" width="25%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png" alt="Stránka pozvánky DemoScope"></a><br><sub><b>Pozvat přítele</b></sub></td>
  </tr>
</table>

## Přehled

DemoScope vylepšuje stránky pro kontrolu Counter-Strike VACNet (`counter-strike.net/vacnet`). Místo proklikávání formuláře verdiktů u každého krátkého klipu pracujete s klávesnicí: předvolby verdiktů, posuvník omezený na kontrolovaný segment, posun po snímcích, dočasné zrychlení, odeslání ve dvou krocích a soukromá historie vašich verdiktů. Podporuje oba formuláře, které VACNet aktuálně nabízí (klasický se čtyřmi otázkami i nový úkol s jednou otázkou), a chrání se při změnách stránky od Valve. Vše běží místně ve vašem prohlížeči.

## Funkce

| | |
|---|---|
| **Průběh kontroly** | 5 rychlých předvoleb verdiktu na `1`–`5` a dalších 15 rozšířených kombinací, volitelný náhodný výběr verdiktu (ve výchozím nastavení vypnutý) a bezpečné odeslání ve dvou krocích: `Enter` aktivuje tlačítko, druhý stisk `Enter` odešle. `Esc` akci zruší. |
| **Oba typy úkolů** | Rozpozná klasický formulář (pomoc při míření, wallhack, auto-bhop, bot) i úkol s jednou otázkou („Is the Subject cheating beyond a reasonable doubt?“). Ten používá kompaktní rozvržení s označenými verdikty na `1`–`3` a indikátorem uzamčení do konce klipu. |
| **Přehrávač podle klipu** | Posuvník a čas jsou omezeny začátkem a koncem klipu; skoky ±5 s, krok snímku 1/64 s, zrychlení při podržení `Shift` (0,5×–4×), zkratky pro ztlumení a celou obrazovku. |
| **Vlastní klávesové zkratky** | V samostatném okně můžete přemapovat kteroukoli z 18 akcí. Konflikty jsou před nahrazením vysvětleny (akce, skupina a účel) a všechny nápovědy kláves na stránce odpovídají vašemu nastavení. |
| **Animace** | Okno s živým náhledem, šesti styly indikátoru, třemi rychlostmi a přepínačem. Ve výchozím nastavení respektuje systémové „omezit pohyb“. |
| **Srozumitelné verdikty** | Tlačítko „?“ u každé kategorie vysvětlí její význam; klíčové fráze jsou zvýrazněny, aby nezapadlo „not“. |
| **Soukromá místní historie** | Historie podle klipu a zápasu v `localStorage`, import a export JSON, HTML reporty a sloučení více záloh do jednoho reportu. |
| **Stránka pozvánky** | Přepracovaná stránka `/vacnet/createinvite` nabízí zobrazení/skrytí, kopírování jedním kliknutím, souhrn požadavků, zavírací tlačítko a zkratky `Enter` / `Esc`. |
| **29 jazyků** | Nejprve použije váš výběr, poté nastavení Steam `?l=` a nakonec jazyk prohlížeče. Výběr jazyka v DemoScope změní také text VACNet. |
| **Zvukové efekty** | Syntetické signály Web Audio s hlasitostí, náhledem a přepínačem. |
| **Odolnost vůči redesignům** | Nastavovací kroky jsou izolované, důležité prvky mají záložní vyhledávání a při nerozpoznané stránce se DemoScope vypne, aniž by měnil VACNet. Diagnostický report pro chyby zkopírujete jedním kliknutím. |

## Instalace

1. Nainstalujte správce userscriptů, například [Tampermonkey](https://www.tampermonkey.net/) nebo [Violentmonkey](https://violentmonkey.github.io/). Skript používá `GM_addStyle` a `unsafeWindow`.
2. [**Nainstalujte DemoScope**](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js) a potvrďte instalaci ve správci.
3. Přihlaste se ke Steamu a otevřete [counter-strike.net/vacnet](https://www.counter-strike.net/vacnet/).
4. Otevřete kontrolní klip. DemoScope se načte automaticky (stránka `/vacnet/join` je vyloučena).

Aktualizace přicházejí přes správce userscriptů. DemoScope funguje v prohlížečích založených na Chromiu a ve Firefoxu.

## Klávesové zkratky

Zkratky fungují na kontrolních stránkách, když fokus není v upravitelném poli nebo jiném interaktivním ovládacím prvku. **Každou níže uvedenou klávesu lze změnit** v **Settings → Hotkeys**.

| Klávesa | Akce |
|---|---|
| `1` … `5` | Klasický formulář: použije předvolbu (1 bot + míření + wallhack; 2 míření + wallhack; 3 rage; 4 čistý hráč; 5 nejistý). |
| `1` `2` `3` | Úkol s jednou otázkou: Cheating / Not sure / No cheats seen. |
| `Enter` | Potvrzení. V klasickém formuláři první stisk tlačítko aktivuje, druhý odešle. |
| `Esc` | Zruší verdikt čekající na potvrzení nebo zruší první `Enter`. |
| `Shift` (držet) | Zrychlení (0,5×–4×; výchozí 2×, lze zvolit na stránce). |
| `←` `→` | Skok o 5 sekund zpět / vpřed. |
| `,` `.` | Posun o jeden snímek zpět / vpřed (1/64 s). |
| `Space` | Přehrát / pozastavit. |
| `M` / `F` | Ztlumit / celá obrazovka (dvojklik na video také přepne celou obrazovku). |
| `F2` | Otevře okno nastavení. |
| `Enter` / `Esc` *(stránka pozvánky)* | Hotovo / zavřít. |

## Přizpůsobení

Okno nastavení otevřete klávesou `F2`. Položky jsou řazeny od nejčastěji používaných:

- **Hotkeys**: samostatné okno se všemi akcemi rozdělenými podle účelu, resetováním jednotlivých akcí, „Reset all“ a řešením konfliktů přes **Replace**, **Swap** nebo **Cancel**. `Esc` lze přiřadit jako kteroukoli jinou klávesu.
- **Animations**: vyberte styl (pulse, breathe, ripple, heartbeat, orbit, blink), rychlost nebo animace vypněte. Každá karta nabízí živý náhled.
- **Sound effects**: zapnout/vypnout, hlasitost (mění ji také kolečko myši) a testovací tlačítko.
- **Local history**: zapnout/vypnout, limity (10/20/30/50 záznamů na klíč, 100/200/300/500 klíčů), 12/24hodinový čas, JSON zálohy a HTML reporty.
- **Footer**: skrýt odkaz na zpětnou vazbu, odkaz na report, řádek copyrightu nebo celou patičku.
- **Diagnostics**: zkopírovat report pro nahlášení chyby (viz [Nahlásit problém](#nahlásit-problém)).
- **Reset**: jedním tlačítkem obnovíte výchozí zvuk, zkratky a animace. Historie zůstane zachována.

## Jazyky

DemoScope nabízí 29 jazyků: bulharštinu, čínštinu (zjednodušenou i tradiční), češtinu, dánštinu, nizozemštinu, angličtinu, finštinu, francouzštinu, němčinu, řečtinu, maďarštinu, indonéštinu, italštinu, japonštinu, korejštinu, norštinu, polštinu, portugalštinu (Portugalsko a Brazílie), rumunštinu, ruštinu, španělštinu (Španělsko a Latinská Amerika), švédštinu, thajštinu, turečtinu, ukrajinštinu a vietnamštinu. Jazyk můžete kdykoli změnit voličem na stránce.

## Nahlásit problém

Valve může měnit stránky VACNet bez upozornění. Pokud něco přestane fungovat:

1. Stiskněte `F2`, otevřete **Diagnostics** a klikněte na **Copy diagnostics**.
2. Vložte text do nového [issue](https://github.com/ebayybe/DemoScope/issues), ideálně i se snímkem obrazovky.

Report obsahuje verzi skriptu, čas, jazyk prohlížeče a user-agent, nalezené prvky stránky, neúspěšné kroky nastavení a strukturu stránky (jen tagy, ID a třídy). Neobsahuje text stránky, název účtu ani historii. Pokud stránku už nelze rozpoznat, DemoScope se na ní vypne a oznámí to; VACNet dál funguje normálně.

## Časté dotazy

<details>
<summary><b>DemoScope hlásí, že se na této stránce vypnul. Co se stalo?</b></summary>

Stránka VACNet už neodpovídá očekávané struktuře, takže se skript vypnul, aby nezanechal napůl vytvořené rozhraní. Zkopírujte diagnostiku (viz výše) a založte issue; aktualizace obvykle brzy následuje.
</details>

<details>
<summary><b>Text verdiktů VACNet je v jiném jazyce než DemoScope.</b></summary>

Výběr jazyka v DemoScope požádá VACNet o odpovídající text pomocí parametru Steam `?l=`. Pokud VACNet překlad nemá, použije svůj výchozí jazyk, zatímco popisky DemoScope zůstanou ve zvoleném jazyce.
</details>

<details>
<summary><b>Vybírá DemoScope verdikty za mě?</b></summary>

Ne. Předvolby pouze kliknou na vámi zvolená tlačítka verdiktu a odeslání vždy potvrzujete vy. Každý klip posuďte sami a dodržujte pravidla programu.
</details>

<details>
<summary><b>Ukládá se historie i pro úkol s jednou otázkou?</b></summary>

Zatím ne. Místní historie se nyní zaznamenává pouze pro klasický formulář se čtyřmi otázkami.
</details>

<details>
<summary><b>Jak obnovím výchozí klávesy?</b></summary>

Použijte ikonu resetu vedle změněné klávesy, **Reset all** v okně Hotkeys nebo **Reset** v nastavení; poslední možnost obnoví také zvuk a animace.
</details>

## Architektura

DemoScope je jediná samovolající se funkce (`@run-at document-start`, `@noframes`). `init()` určí typ stránky, ověří, zda ji lze rozpoznat, a zapojí níže uvedené moduly. Úplná reference všech 217 funkcí nejvyšší úrovně včetně parametrů, návratových hodnot a klíčů úložiště je v [cs_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/cs_FUNCTIONS.md).

<details>
<summary><b>Přehled modulů</b></summary>

| Modul | Odpovědnost | Klíčové funkce |
|---|---|---|
| `Localization` | Jazyk UI, vyhledávání řetězců, vlajky, výběr jazyka a synchronizace VACNet `?l=` | `getActiveLocale`, `tr`, `settingText`, `syncSelectedLanguage`, `installLanguageSelector` |
| `Segment & player` | Čte hranice klipu, obaluje přehrávání Video.js/HTML5 a vypíná nativní smyčku segmentu | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | Posuvník, nápověda kláves, zrychlení, posun po snímcích, zkratky | `installCustomControls`, `installPlayerEnhancements` |
| `Hotkeys` | Registr akcí, přiřazení, detekce konfliktů a okno Hotkeys | `getBinding`, `findKeyConflict`, `getActionForEvent`, `ensureHotkeysDialog` |
| `Verdict presets` | Tabulka předvoleb, stav výběru, náhodná aplikace | `applyPreset`, `detectActivePreset`, `buildEnhancementBar` |
| `Single-question task` | Popisky, indikátor zámku a klávesy nového formuláře | `isCheatingMode`, `selectCheatingVerdict`, `updateCheatingLock` |
| `Submit flow` | Dvoufázové potvrzení, zrušení, `verdict_labels[]`, kontrola stejného původu, překryv načítání | `invokeProceedAction`, `invokeCancelAction`, `submitVerdictForm`, `finishSubmitLoadingWhenReady` |
| `Local history` | Historie podle klipu a zápasu, zálohy a reporty | `appendReviewHistory`, `importLocalHistory`, `exportCombinedHistoryReports` |
| `Settings & animations` | Okno nastavení a podokna, zvuk, animace indikátorů | `ensureSettingsDialog`, `installExtraSettingsSections`, `ensureAnimationsDialog`, `playUiSound` |
| `Invite page` | Upravená stránka, zavírací tlačítko, zkratky | `installInvitePage`, `installInviteExtras` |
| `Resilience` | Izolované kroky, záložní vyhledávání, vypnutí, diagnostika | `safeStep`, `disableDemoScope`, `buildDiagnosticsReport` |
| `Bootstrap` | Vstupní bod | `init`, `enhanceLayout` |

</details>

## Soukromí

DemoScope neposílá telemetrii a nenahrává vaše nastavení ani historii. Odeslaný verdikt obdrží VACNet přes běžný formulář webu. Nastavení a historie zůstávají v prohlížeči: v `localStorage` (klíče začínají na `demoscope`) a v `sessionStorage`. Historii odstraníte přes **Settings → Local history → Clear history**. Diagnostický report se pouze zkopíruje do schránky; sami rozhodnete, zda ho sdílíte.

## Upozornění

DemoScope je neoficiální komunitní projekt, není spojený s Valve Corporation ani jí schválený. Nikdy nerozhoduje za vás. Každý klip posuďte sami a dodržujte pravidla programu. Používáte na vlastní riziko.

## Licence

Vydáno pod licencí [GNU GPL v3.0](https://github.com/ebayybe/DemoScope/blob/main/LICENSE).

## Poděkování

- **Původní nápad a základní rozhraní:** [*CS2 VACNet Review — Player & Layout Enhancements*](https://greasyfork.org/ru/scripts/591778-cs2-vacnet-review-player-layout-enhancements) od skinsales / goodvibes (MIT).
- **Související koncept a ruskojazyčný fork:** [*VACLens RU — CS2 Review Assistant*](https://greasyfork.org/ru/scripts/592414-vaclens-ru-cs2-review-assistant) od authorless (MIT).
- **Přepracování architektury, univerzální framework, podpora 29 jazyků a vlastní předvolby verdiktů:** ebayybe.
