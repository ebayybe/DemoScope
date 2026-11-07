<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/README/README.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/README/bg_README.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/README/hu_README.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/README/vi_README.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/README/el_README.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/README/da_README.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/README/id_README.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/README/es-ES_README.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/README/es-419_README.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/README/it_README.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/README/zh-TW_README.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/README/zh-CN_README.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/README/ko_README.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/README/de_README.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/README/nl_README.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/README/no_README.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/README/pl_README.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-PT_README.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-BR_README.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/README/ro_README.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/README/ru_README.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/README/th_README.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/README/tr_README.md) · **Українська** · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/README/fi_README.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/README/fr_README.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/README/cs_README.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/README/sv_README.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/README/ja_README.md)

</div>

<br>

<div align="center">

# DemoScope

**Інструментарій для перевірки CS2 VACNet із керуванням клавіатурою.**<br>
Пресети вердиктів · плеєр з урахуванням меж кліпу · клавіші з переназначенням · приватна локальна історія · 29 мов.

<br>

[![Версія](https://img.shields.io/badge/version-1.2.0-3b82f6?style=flat-square)](https://github.com/ebayybe/DemoScope/releases)
[![Ліцензія](https://img.shields.io/badge/license-GPL--3.0-22c55e?style=flat-square)](https://github.com/ebayybe/DemoScope/blob/main/LICENSE)
[![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-f59e0b?style=flat-square)](#встановлення)
[![Мови](https://img.shields.io/badge/languages-29-8b5cf6?style=flat-square)](#мови)
[![Приватність](https://img.shields.io/badge/telemetry-none-64748b?style=flat-square)](#приватність)

<br>

[**⬇ Встановити DemoScope**](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js)

[Можливості](#можливості) · [Встановлення](#встановлення) · [Сполучення клавіш](#сполучення-клавіш) · [Налаштування](#налаштування) · [Документація](https://github.com/ebayybe/DemoScope/blob/main/docs/uk_FUNCTIONS.md) · [Історія змін](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/uk_CHANGELOG.md)

</div>

<br>

## Знімки екрана

<table>
  <tr>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png" alt="Вітальний екран DemoScope"></a><br><sub><b>Вітальний екран</b></sub></td>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png" alt="Основний інтерфейс DemoScope"></a><br><sub><b>Основний інтерфейс</b></sub></td>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png" alt="Сторінка запрошення DemoScope"></a><br><sub><b>Запросити друга</b></sub></td>
  </tr>
</table>

## Огляд

DemoScope вдосконалює сторінки перевірки Counter-Strike VACNet (`counter-strike.net/vacnet`). Замість того щоб клацати форму вердиктів для кожного короткого кліпу, ви працюєте з клавіатури: пресети вердиктів, шкала перемотування в межах сегмента, що перевіряється, покадрове переміщення, тимчасове прискорення, надсилання у два кроки та приватна історія ваших вердиктів. Скрипт підтримує обидві форми VACNet (класичну з чотирма запитаннями й нове завдання з одним запитанням) і захищає себе, коли Valve змінює сторінку. Усе працює локально у вашому браузері.

## Можливості

| | |
|---|---|
| **Процес перевірки** | 5 швидких пресетів вердиктів на `1`–`5` і ще 15 розширених комбінацій, необов’язковий рандомізатор вердиктів (типово вимкнений) і безпечне надсилання у два кроки: `Enter` готує кнопку, повторне `Enter` надсилає. `Esc` скасовує. |
| **Обидва типи завдань** | Визначає класичну форму (допомога в прицілюванні, wallhack, auto-bhop, бот) і завдання з одним запитанням («Is the Subject cheating beyond a reasonable doubt?»). Для останнього використовується компактний макет із вердиктами на `1`–`3` та індикатором блокування до кінця кліпу. |
| **Плеєр з урахуванням кліпу** | Шкала та час обмежені початком і кінцем кліпу; переходи на ±5 с, покадровий крок 1/64 с, прискорення при утриманні `Shift` (0,5×–4×), вимкнення звуку й повноекранний режим із клавіатури. |
| **Клавіші під вашим контролем** | Переназначайте будь-яку з 18 дій у спеціальному вікні. Перед заміною пояснюється конфлікт (дія, група та функція), а всі підказки клавіш відповідають вашим налаштуванням. |
| **Анімації** | Вікно з попереднім переглядом наживо, шістьма стилями індикатора, трьома швидкостями та перемикачем. Типово враховується системне налаштування «зменшити рух». |
| **Зрозумілі вердикти** | Кнопка «?» біля кожної категорії пояснює її значення; ключові фрази виділено, щоб заперечення «not» не залишилося непоміченим. |
| **Приватна локальна історія** | Історія за кліпами й матчами у `localStorage`, імпорт та експорт JSON, HTML-звіти й об’єднання кількох резервних копій в один звіт. |
| **Сторінка запрошення** | Оновлена сторінка `/vacnet/createinvite` з показом/приховуванням, копіюванням в один клік, вимогами, кнопкою закриття та клавішами `Enter` / `Esc`. |
| **29 мов** | Спочатку використовується вибрана вами мова, далі параметр Steam `?l=`, потім мова браузера. Вибір мови у DemoScope змінює також текст VACNet. |
| **Звукові ефекти** | Синтезовані сигнали Web Audio з гучністю, попереднім прослуховуванням і перемикачем. |
| **Стійкість до редизайнів** | Етапи налаштування ізольовані, для важливих елементів є резервний пошук, а якщо сторінка стає нерозпізнаваною, DemoScope вимикається і не змінює VACNet. Звіт діагностики для повідомлення про помилку копіюється одним кліком. |

## Встановлення

1. Встановіть менеджер userscript, наприклад [Tampermonkey](https://www.tampermonkey.net/) або [Violentmonkey](https://violentmonkey.github.io/). Скрипт використовує `GM_addStyle` та `unsafeWindow`.
2. [**Встановіть DemoScope**](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js) і підтвердьте встановлення в менеджері.
3. Увійдіть у Steam і відкрийте [counter-strike.net/vacnet](https://www.counter-strike.net/vacnet/).
4. Відкрийте кліп для перевірки. DemoScope завантажиться автоматично (сторінка `/vacnet/join` виключена).

Оновлення надходять через менеджер userscript. DemoScope працює у браузерах на Chromium і Firefox.

## Сполучення клавіш

Клавіші працюють на сторінках перевірки, коли фокус не перебуває в редагованому полі чи іншому інтерактивному елементі. **Кожну клавішу нижче можна змінити** в **Settings → Hotkeys**.

| Клавіша | Дія |
|---|---|
| `1` … `5` | Класична форма: застосувати пресет (1 бот + допомога в прицілюванні + wallhack; 2 прицілювання + wallhack; 3 rage; 4 чистий гравець; 5 невпевненість). |
| `1` `2` `3` | Завдання з одним запитанням: Cheating / Not sure / No cheats seen. |
| `Enter` | Підтвердити. У класичній формі перше натискання готує кнопку, друге надсилає. |
| `Esc` | Скасувати вердикт, що очікує підтвердження, або скасувати перше `Enter`. |
| `Shift` (утримувати) | Прискорення (0,5×–4×; типово 2×, можна вибрати на сторінці). |
| `←` `→` | Перейти на 5 секунд назад / уперед. |
| `,` `.` | Переміститися на один кадр назад / уперед (1/64 с). |
| `Space` | Відтворення / пауза. |
| `M` / `F` | Вимкнути звук / повний екран (подвійне клацання відео також перемикає повний екран). |
| `F2` | Відкрити вікно налаштувань. |
| `Enter` / `Esc` *(сторінка запрошення)* | Готово / закрити. |

## Налаштування

Відкрийте налаштування клавішею `F2`. Розділи впорядковано від найчастіше до найрідше використовуваних:

- **Hotkeys**: окреме вікно з усіма діями, згрупованими за призначенням, скиданням окремої дії, «Reset all» і керуванням конфліктами через **Replace**, **Swap** або **Cancel**. `Esc` можна призначити як будь-яку іншу клавішу.
- **Animations**: виберіть стиль (pulse, breathe, ripple, heartbeat, orbit, blink), швидкість або вимкніть анімації. Для кожної картки є попередній перегляд наживо.
- **Sound effects**: увімкнення/вимкнення, гучність (регулюється також коліщатком миші) і кнопка перевірки.
- **Local history**: увімкнути/вимкнути, ліміти (10/20/30/50 записів на ключ, 100/200/300/500 ключів), формат часу 12/24 години, резервні копії JSON і HTML-звіти.
- **Footer**: приховати посилання для відгуку, посилання на звіт, рядок авторських прав або весь нижній колонтитул.
- **Diagnostics**: скопіювати звіт для повідомлення про помилку (див. [Повідомити про проблему](#повідомити-про-проблему)).
- **Reset**: одна кнопка повертає стандартні значення звуку, клавіш і анімацій. Історія зберігається.

## Мови

DemoScope підтримує 29 мов: болгарську, китайську (спрощену й традиційну), чеську, данську, нідерландську, англійську, фінську, французьку, німецьку, грецьку, угорську, індонезійську, італійську, японську, корейську, норвезьку, польську, португальську (Португалія та Бразилія), румунську, російську, іспанську (Іспанія та Латинська Америка), шведську, тайську, турецьку, українську та в’єтнамську. Мову можна змінити будь-коли через перемикач на сторінці.

## Повідомити про проблему

Valve може змінювати сторінки VACNet без попередження. Якщо щось перестало працювати:

1. Натисніть `F2`, відкрийте **Diagnostics** і виберіть **Copy diagnostics**.
2. Вставте текст у новий [issue](https://github.com/ebayybe/DemoScope/issues), за можливості додайте знімок екрана.

Звіт містить версію скрипту, час, мову браузера та user-agent, знайдені елементи сторінки, невдалі етапи налаштування і структуру сторінки (лише теги, ID і класи). У ньому немає тексту сторінки, назви облікового запису чи історії. Якщо сторінка більше не розпізнається, DemoScope вимикається на ній і повідомляє про це; VACNet працює далі.

## Поширені запитання

<details>
<summary><b>DemoScope повідомляє, що вимкнувся на цій сторінці. Що сталося?</b></summary>

Сторінка VACNet більше не відповідає очікуванням DemoScope, тому скрипт зупинився, а не залишив напівпобудований інтерфейс. Скопіюйте діагностику (див. вище) і створіть issue; оновлення зазвичай виходить швидко.
</details>

<details>
<summary><b>Текст вердиктів VACNet іншою мовою, ніж DemoScope.</b></summary>

Вибір мови в DemoScope надсилає VACNet запит цією мовою через параметр Steam `?l=`. Якщо перекладу немає, VACNet використовує свою мову за замовчуванням, а власні підписи DemoScope залишаються вибраною вами мовою.
</details>

<details>
<summary><b>DemoScope обирає вердикти замість мене?</b></summary>

Ні. Пресети лише натискають вибрані вами кнопки вердикту, а надсилання завжди підтверджуєте ви. Перевіряйте кожен кліп самостійно й дотримуйтеся правил програми.
</details>

<details>
<summary><b>Чи записується історія для завдання з одним запитанням?</b></summary>

Поки що ні. Локальна історія наразі записується лише для класичної форми з чотирма запитаннями.
</details>

<details>
<summary><b>Як повернути стандартні клавіші?</b></summary>

Скористайтеся значком скидання біля зміненої клавіші, пунктом **Reset all** у вікні Hotkeys або **Reset** у налаштуваннях; останній також скидає звук та анімації.
</details>

## Архітектура

DemoScope — одна самовиклична функція (`@run-at document-start`, `@noframes`). `init()` визначає тип сторінки, перевіряє, чи її можна розпізнати, і підключає наведені нижче модулі. Повний довідник за всіма 217 функціями верхнього рівня, включно з параметрами, значеннями повернення та ключами сховища, наведено в [uk_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/uk_FUNCTIONS.md).

<details>
<summary><b>Огляд модулів</b></summary>

| Модуль | Призначення | Основні функції |
|---|---|---|
| `Localization` | Мова інтерфейсу, пошук рядків, прапори, вибір мови, синхронізація `?l=` VACNet | `getActiveLocale`, `tr`, `settingText`, `syncSelectedLanguage`, `installLanguageSelector` |
| `Segment & player` | Читає межі кліпу, адаптує Video.js/HTML5, вимикає вбудований цикл сегмента | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | Шкала перемотування, підказки клавіш, прискорення, покадрові кроки, клавіші | `installCustomControls`, `installPlayerEnhancements` |
| `Hotkeys` | Реєстр дій, призначення, пошук конфліктів і вікно Hotkeys | `getBinding`, `findKeyConflict`, `getActionForEvent`, `ensureHotkeysDialog` |
| `Verdict presets` | Таблиця пресетів, стан вибору, випадкове застосування | `applyPreset`, `detectActivePreset`, `buildEnhancementBar` |
| `Single-question task` | Підписи, індикатор блокування й клавіші нової форми | `isCheatingMode`, `selectCheatingVerdict`, `updateCheatingLock` |
| `Submit flow` | Двоетапне підтвердження, скасування, `verdict_labels[]`, перевірка того самого джерела, оверлей завантаження | `invokeProceedAction`, `invokeCancelAction`, `submitVerdictForm`, `finishSubmitLoadingWhenReady` |
| `Local history` | Історія кліпів і матчів, резервні копії та звіти | `appendReviewHistory`, `importLocalHistory`, `exportCombinedHistoryReports` |
| `Settings & animations` | Вікно налаштувань і підвікна, звук, анімації індикаторів | `ensureSettingsDialog`, `installExtraSettingsSections`, `ensureAnimationsDialog`, `playUiSound` |
| `Invite page` | Оновлена сторінка, кнопка закриття, клавіші | `installInvitePage`, `installInviteExtras` |
| `Resilience` | Ізольовані кроки, резервний пошук, вимкнення, діагностика | `safeStep`, `disableDemoScope`, `buildDiagnosticsReport` |
| `Bootstrap` | Точка входу | `init`, `enhanceLayout` |

</details>

## Приватність

DemoScope не надсилає телеметрію та не завантажує ваші налаштування чи історію. Після надсилання вердикту VACNet отримує його через звичайну форму сайту. Налаштування й історія залишаються у браузері: у `localStorage` (ключі починаються з `demoscope`) і `sessionStorage`. Щоб видалити історію, виберіть **Settings → Local history → Clear history**. Звіт діагностики лише копіюється до буфера обміну; ви самі вирішуєте, чи ділитися ним.

## Відмова від відповідальності

DemoScope — неофіційний проєкт спільноти, не пов’язаний із Valve Corporation і не схвалений нею. Він ніколи не приймає рішення замість вас. Перевіряйте кожен кліп самостійно й дотримуйтеся правил програми. Використовуйте на власний ризик.

## Ліцензія

Випускається за ліцензією [GNU GPL v3.0](https://github.com/ebayybe/DemoScope/blob/main/LICENSE).

## Подяки

- **Початкова ідея та базовий інтерфейс:** [*CS2 VACNet Review — Player & Layout Enhancements*](https://greasyfork.org/ru/scripts/591778-cs2-vacnet-review-player-layout-enhancements), автори skinsales / goodvibes (MIT).
- **Пов’язана концепція та російськомовний форк:** [*VACLens RU — CS2 Review Assistant*](https://greasyfork.org/ru/scripts/592414-vaclens-ru-cs2-review-assistant), автор authorless (MIT).
- **Переробка архітектури, універсальний фреймворк, підтримка 29 мов і власні шаблони вердиктів:** ebayybe.
