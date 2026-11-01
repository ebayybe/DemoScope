<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/README/README.md) · **Български** · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/README/hu_README.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/README/vi_README.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/README/el_README.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/README/da_README.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/README/id_README.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/README/es-ES_README.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/README/es-419_README.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/README/it_README.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/README/zh-TW_README.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/README/zh-CN_README.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/README/ko_README.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/README/de_README.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/README/nl_README.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/README/no_README.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/README/pl_README.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-PT_README.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-BR_README.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/README/ro_README.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/README/ru_README.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/README/th_README.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/README/tr_README.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/README/uk_README.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/README/fi_README.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/README/fr_README.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/README/cs_README.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/README/sv_README.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/README/ja_README.md)

</div>

<br>

<div align="center">

# DemoScope

**Инструментариум за проверка на CS2 VACNet с клавиатура.**<br>
Пресети за присъди · плейър с граници на клипа · преназначаеми клавиши · поверителна локална история · 29 езика.

<br>

[![Версия](https://img.shields.io/badge/version-1.4.0-3b82f6?style=flat-square)](https://github.com/ebayybe/DemoScope/releases)
[![Лиценз](https://img.shields.io/badge/license-MIT-22c55e?style=flat-square)](https://github.com/ebayybe/DemoScope/blob/main/LICENSE)
[![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-f59e0b?style=flat-square)](#инсталиране)
[![Езици](https://img.shields.io/badge/languages-29-8b5cf6?style=flat-square)](#езици)
[![Поверителност](https://img.shields.io/badge/telemetry-none-64748b?style=flat-square)](#поверителност)

<br>

[**⬇ Инсталирай DemoScope**](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js)

[Функции](#функции) · [Инсталиране](#инсталиране) · [Клавишни комбинации](#клавишни-комбинации) · [Персонализиране](#персонализиране) · [Документация](https://github.com/ebayybe/DemoScope/blob/main/docs/en_FUNCTIONS.md) · [Дневник на промените](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/en_CHANGELOG.md)

</div>

<br>

## Екранни снимки

<table>
  <tr>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png" alt="Начален екран на DemoScope"></a><br><sub><b>Начален екран</b></sub></td>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png" alt="Основен интерфейс на DemoScope"></a><br><sub><b>Основен интерфейс</b></sub></td>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png" alt="Страница за покани на DemoScope"></a><br><sub><b>Покани приятел</b></sub></td>
  </tr>
</table>

## Общ преглед

DemoScope подобрява страниците за преглед на Counter-Strike VACNet (`counter-strike.net/vacnet`). Вместо да щраквате през формуляра за присъди за всеки кратък клип, работите с клавиатурата: пресети за присъди, лента за търсене само в преглеждания сегмент, придвижване кадър по кадър, временно ускоряване, изпращане в две стъпки и поверителна история на вашите присъди. Поддържа и двата вида формуляри на VACNet (класическия с четири въпроса и новата задача с един въпрос) и се защитава при промени по страницата от Valve. Всичко работи локално в браузъра ви.

## Функции

| | |
|---|---|
| **Работен процес за преглед** | 5 бързи пресета на клавиши `1`–`5` и още 15 разширени комбинации, незадължителен рандомизатор на присъдите (изключен по подразбиране) и безопасно изпращане в две стъпки: `Enter` подготвя бутона, второ `Enter` изпраща. `Esc` отменя. |
| **Двата вида задачи** | Разпознава класическия формуляр (помощ при прицелване, wallhack, auto-bhop, бот) и задачата с един въпрос („Is the Subject cheating beyond a reasonable doubt?“). За нея се използва компактен интерфейс, присъди на `1`–`3` и индикатор за заключване до края на клипа. |
| **Плейър с граници на клипа** | Лентата и времето са ограничени от началото и края на клипа; прескачане с ±5 s, кадър по кадър през 1/64 s, ускоряване при задържан `Shift` (0,5×–4×), клавиши за заглушаване и цял екран. |
| **Настраиваеми клавиши** | Преназначете всяко от 18-те действия в отделен прозорец. Преди замяна се обяснява конфликтът (действие, група и функция), а всички подсказки следват вашите настройки. |
| **Анимации** | Прозорец с преглед на живо, шест стила на индикатора, три скорости и превключвател. По подразбиране спазва системната настройка „намаляване на движението“. |
| **Разбираеми присъди** | „?“ до всяка категория обяснява значението ѝ, а важните изрази се подчертават, за да не се пропусне „not“. |
| **Поверителна локална история** | История за всеки клип и игра в `localStorage`, JSON импорт/експорт, HTML отчети и обединяване на няколко резервни копия в един отчет. |
| **Страница за покани** | Обновена страница `/vacnet/createinvite` с показване/скриване, копиране с едно щракване, изисквания, бутон за затваряне и клавиши `Enter` / `Esc`. |
| **29 езика** | Първо използва избрания от вас език, после настройката на Steam `?l=` и накрая езика на браузъра. Изборът в DemoScope променя и текста на VACNet. |
| **Звукови ефекти** | Синтезирани Web Audio сигнали с контрол на силата, преглед и превключвател. |
| **Устойчивост при редизайн** | Стъпките за настройка са изолирани, важните елементи имат резервни методи за търсене, а ако страницата стане неразпознаваема, DemoScope се изключва, без да променя VACNet. Отчет за диагностика се копира с едно щракване. |

## Инсталиране

1. Инсталирайте мениджър за userscript, например [Tampermonkey](https://www.tampermonkey.net/) или [Violentmonkey](https://violentmonkey.github.io/). Скриптът използва `GM_addStyle` и `unsafeWindow`.
2. [**Инсталирайте DemoScope**](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js) и потвърдете в мениджъра.
3. Влезте в Steam и отворете [counter-strike.net/vacnet](https://www.counter-strike.net/vacnet/).
4. Отворете клип за преглед. DemoScope се зарежда автоматично (страницата `/vacnet/join` е изключена).

Актуализациите идват чрез мениджъра ви за userscripts. DemoScope работи в Chromium-базирани браузъри и Firefox.

## Клавишни комбинации

Комбинациите работят на страниците за преглед, когато фокусът не е в поле за редактиране или друг интерактивен елемент. **Всеки клавиш по-долу може да се промени** в **Settings → Hotkeys**.

| Клавиш | Действие |
|---|---|
| `1` … `5` | Класически формуляр: прилагане на пресет (1 бот + прицелване + wallhack; 2 прицелване + wallhack; 3 rage; 4 чист играч; 5 несигурен). |
| `1` `2` `3` | Задача с един въпрос: Cheating / Not sure / No cheats seen. |
| `Enter` | Потвърждение. В класическия формуляр: първо натискане подготвя бутона, второ изпраща. |
| `Esc` | Отменя присъда, чакаща потвърждение, или отменя първото `Enter`. |
| `Shift` (задържане) | Ускоряване (0,5×–4×; по подразбиране 2×, избира се на страницата). |
| `←` `→` | Прескачане с 5 секунди назад / напред. |
| `,` `.` | Един кадър назад / напред (1/64 s). |
| `Space` | Пускане / пауза. |
| `M` / `F` | Заглушаване / цял екран (двойно щракване върху видеото също превключва цял екран). |
| `F2` | Отваряне на настройките. |
| `Enter` / `Esc` *(страница за покани)* | Готово / затваряне. |

## Персонализиране

Отворете настройките с `F2`. Разделите са подредени от най-често към най-рядко използваните:

- **Hotkeys**: отделен прозорец с всички действия, групирани по предназначение, нулиране на отделно действие, „Reset all“ и управление на конфликти чрез **Replace**, **Swap** или **Cancel**. `Esc` може да се зададе като всеки друг клавиш.
- **Animations**: изберете стил (pulse, breathe, ripple, heartbeat, orbit, blink), скорост или изключете анимациите. Всяка карта показва преглед на живо.
- **Sound effects**: включване/изключване, сила (регулира се и с колелцето на мишката) и бутон за проба.
- **Local history**: включване/изключване, лимити (10/20/30/50 записа на ключ, 100/200/300/500 ключа), 12/24-часов формат, JSON копия и HTML отчети.
- **Footer**: скриване на връзката за обратна връзка, връзката към отчета, реда за авторски права или целия долен колонтитул.
- **Diagnostics**: копиране на отчет за сигнал за грешка (вижте [Съобщаване за проблем](#съобщаване-за-проблем)).
- **Reset**: един бутон връща стандартните звук, клавиши и анимации. Историята се запазва.

## Езици

DemoScope поддържа 29 езика: български, китайски (опростен и традиционен), чешки, датски, нидерландски, английски, фински, френски, немски, гръцки, унгарски, индонезийски, италиански, японски, корейски, норвежки, полски, португалски (Португалия и Бразилия), румънски, руски, испански (Испания и Латинска Америка), шведски, тайландски, турски, украински и виетнамски. Езикът може да се сменя по всяко време от менюто на страницата.

## Съобщаване за проблем

Valve променя страниците VACNet без предупреждение. Ако нещо спре да работи:

1. Натиснете `F2`, отворете **Diagnostics** и изберете **Copy diagnostics**.
2. Поставете текста в нов [issue](https://github.com/ebayybe/DemoScope/issues), по възможност със снимка на екрана.

Отчетът съдържа версията на скрипта, часа, езика и user-agent на браузъра, кои елементи са намерени, неуспешните стъпки за настройка и структурата на страницата (само тагове, ID и класове). Няма текст от страницата, име на акаунт или история. Ако страницата вече не се разпознава, DemoScope се изключва там и го съобщава; VACNet продължава да работи нормално.

## Често задавани въпроси

<details>
<summary><b>DemoScope казва, че е изключен на тази страница. Какво се случи?</b></summary>

Страницата VACNet вече не съответства на очакваното от DemoScope, затова скриптът се оттегля, вместо да остави частично изградена страница. Копирайте диагностиката (вижте по-горе) и отворете issue; обикновено скоро има актуализация.
</details>

<details>
<summary><b>Текстът на присъдите във VACNet е на различен език от DemoScope.</b></summary>

Изборът на език в DemoScope заявява текста на VACNet чрез параметъра Steam `?l=`. Ако VACNet няма превод за него, използва езика си по подразбиране, а етикетите на DemoScope остават на избрания от вас език.
</details>

<details>
<summary><b>DemoScope избира ли присъди вместо мен?</b></summary>

Не. Пресетите натискат само избраните от вас бутони за присъда, а изпращането винаги се потвърждава от вас. Проверявайте всеки клип сами и спазвайте правилата на програмата.
</details>

<details>
<summary><b>Записва ли се история за задачата с един въпрос?</b></summary>

Все още не. В момента локална история се записва само за класическия формуляр с четири въпроса.
</details>

<details>
<summary><b>Как да върна клавишите по подразбиране?</b></summary>

Използвайте иконата за нулиране до променен клавиш, **Reset all** в прозореца Hotkeys или **Reset** в настройките. Последното нулира и звука и анимациите.
</details>

## Архитектура

DemoScope е една самоизвикваща се функция (`@run-at document-start`, `@noframes`). `init()` определя вида на страницата, проверява дали е разпознаваема и свързва модулите по-долу. Пълната справка за всичките 217 функции от най-горно ниво, включително параметри, върнати стойности и ключове за съхранение, е в [en_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/en_FUNCTIONS.md).

<details>
<summary><b>Преглед на модулите</b></summary>

| Модул | Отговорност | Основни функции |
|---|---|---|
| `Localization` | Език на интерфейса, търсене на текстове, знамена, избор на език, синхронизиране на `?l=` с VACNet | `getActiveLocale`, `tr`, `settingText`, `syncSelectedLanguage`, `installLanguageSelector` |
| `Segment & player` | Чете границите на клипа, адаптира Video.js/HTML5 и изключва вградения цикъл на сегмента | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | Лента за търсене, подсказки за клавиши, ускоряване, кадър по кадър, бързи клавиши | `installCustomControls`, `installPlayerEnhancements` |
| `Hotkeys` | Регистър на действията, връзки с клавиши, откриване на конфликти, прозорец Hotkeys | `getBinding`, `findKeyConflict`, `getActionForEvent`, `ensureHotkeysDialog` |
| `Verdict presets` | Таблица с пресети, състояние на избора, случайно прилагане | `applyPreset`, `detectActivePreset`, `buildEnhancementBar` |
| `Single-question task` | Етикети, индикатор за заключване и клавиши за новия формуляр | `isCheatingMode`, `selectCheatingVerdict`, `updateCheatingLock` |
| `Submit flow` | Двустъпково потвърждение, отмяна, `verdict_labels[]`, проверка на един и същ произход, оверлей за зареждане | `invokeProceedAction`, `invokeCancelAction`, `submitVerdictForm`, `finishSubmitLoadingWhenReady` |
| `Local history` | История по клип и игра, резервни копия и отчети | `appendReviewHistory`, `importLocalHistory`, `exportCombinedHistoryReports` |
| `Settings & animations` | Прозорец с настройки и подпрозорци, звук, анимации на индикатора | `ensureSettingsDialog`, `installExtraSettingsSections`, `ensureAnimationsDialog`, `playUiSound` |
| `Invite page` | Обновена страница, бутон за затваряне, клавишни комбинации | `installInvitePage`, `installInviteExtras` |
| `Resilience` | Изолирани стъпки, резервно търсене, изключване, диагностика | `safeStep`, `disableDemoScope`, `buildDiagnosticsReport` |
| `Bootstrap` | Начална точка | `init`, `enhanceLayout` |

</details>

## Поверителност

DemoScope не изпраща телеметрия и не качва настройки или история. При изпращане на присъда VACNet я получава чрез обичайния формуляр на сайта. Настройките и историята остават в браузъра ви: в `localStorage` (ключове, започващи с `demoscope`) и `sessionStorage`. Използвайте **Settings → Local history → Clear history**, за да изтриете историята. Диагностичният отчет се копира само в клипборда; вие решавате дали да го споделите.

## Отказ от отговорност

DemoScope е неофициален проект на общността, не е свързан с Valve Corporation и не е одобрен от нея. Никога не решава вместо вас. Проверявайте всеки клип лично и спазвайте правилата на програмата. Използвате го на собствен риск.

## Лиценз

Разпространява се под лиценза [MIT](https://github.com/ebayybe/DemoScope/blob/main/LICENSE).

