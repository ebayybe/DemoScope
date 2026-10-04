<div align="center">

[English](../README.md) · [Български](bg_README.md) · [Magyar](hu_README.md) · [Tiếng Việt](vi_README.md) · [Ελληνικά](el_README.md) · [Dansk](da_README.md) · [Bahasa Indonesia](id_README.md) · [Español (España)](es-ES_README.md) · [Español (Latinoamérica)](es-419_README.md) · [Italiano](it_README.md) · [繁體中文](zh-TW_README.md) · [简体中文](zh-CN_README.md) · [한국어](ko_README.md) · [Deutsch](de_README.md) · [Nederlands](nl_README.md) · [Norsk](no_README.md) · [Polski](pl_README.md) · [Português (Portugal)](pt-PT_README.md) · [Português (Brasil)](pt-BR_README.md) · [Română](ro_README.md) · [Русский](ru_README.md) · [ไทย](th_README.md) · [Türkçe](tr_README.md) · **Українська** · [Suomi](fi_README.md) · [Français](fr_README.md) · [Čeština](cs_README.md) · [Svenska](sv_README.md) · [日本語](ja_README.md)

# DemoScope — CS2 Review Toolkit

![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-orange)

**Набір userscript-інструментів із керуванням з клавіатури для перевіряючих CS2 VACNet: шаблони вердиктів, відеоплеєр з урахуванням сегмента, покращена сторінка запрошень, звукові ефекти та приватна локальна історія — 29 мовами.**

</div>

## Огляд

DemoScope покращує сторінки перевірки Counter-Strike VACNet (`counter-strike.net/vacnet`). Замість того щоб для кожного короткого кліпу клацати по чотирьох групах вердиктів (aim assist, wallhack, auto-bhop, bot), ви отримуєте робочий процес, орієнтований на клавіатуру: готові вердикти, смугу перемотування, обмежену сегментом перевірки, покадрову навігацію, тимчасове прискорення, дворівневе підтвердження надсилання та приватну історію ваших власних вердиктів. Усе працює локально у вашому браузері.

## Основні можливості

- **Шаблони вердиктів** – 5 швидких шаблонів на клавішах `1`–`5` і 15 розширених комбінацій (aim, wallhack, bhop, bot та їх поєднання, зокрема варіанти «не впевнений»).
- **Плеєр з урахуванням сегмента** – смуга перемотування, індикатор часу, стрибки ±5 с і покадровий крок 1/64 с у межах початку та кінця кліпу.
- **Прискорення при утриманні** – утримуйте `Shift` для відтворення з налаштовуваною швидкістю (0,5×–4×, типово 2×).
- **Безпечне дворівневе надсилання** – `Enter` взводить кнопку, другий `Enter` надсилає вердикти; форми, що ведуть на інше джерело, блокуються.
- **Інтерфейс 29 мовами** – враховує параметр Steam `?l=`, збережений вибір або мову браузера; на сторінці є вибір мови.
- **Локальна історія перевірок** – історія за кліпами та іграми в `localStorage`; експорт/імпорт JSON, HTML-звіт і об'єднання багатьох резервних копій в один звіт.
- **Покращена сторінка запрошень** – перероблена `/vacnet/createinvite` з показом/приховуванням і копіюванням посилання-запрошення одним кліком, а також зведенням вимог.
- **Звукові ефекти** – синтезовані сигнали Web Audio з перемикачем, гучністю та попереднім прослуховуванням.
- **Діалог налаштувань** – відкривається клавішею `F2` (можна змінити): звуки, гаряча клавіша, ліміти історії, резервні копії, скидання до типових значень.
- **Зручності** – екран завантаження після надсилання, сповіщення, перемикач приховування імені облікового запису, діалог правил перевірки та необов'язковий рандомайзер вердиктів (типово вимкнений).

## Встановлення

1. Встановіть менеджер userscript-ів, наприклад [Tampermonkey](https://www.tampermonkey.net/) або [Violentmonkey](https://violentmonkey.github.io/) (скрипт використовує `GM_addStyle` і `unsafeWindow`).
2. [Встановіть DemoScope](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js) і підтвердьте встановлення в менеджері.
3. Увійдіть у Steam і відкрийте <https://www.counter-strike.net/vacnet/>.
4. Відкрийте кліп для перевірки — DemoScope завантажиться автоматично (сторінку `/vacnet/join` виключено).

## Використання

Гарячі клавіші працюють на сторінках перевірки, доки фокус не перебуває в полі введення, кнопці, посиланні чи списку вибору.

| Клавіша | Дія |
|---|---|
| `1` … `5` | Застосувати шаблон вердикту: 1 бот + aim + wallhack, 2 aim + wallhack, 3 rage, 4 чистий гравець, 5 не впевнений |
| `Shift` (hold) | Утримувати для прискорення (0,5×–4×, типово 2×, обирається на сторінці) |
| `←` `→` | Перемотування на 5 секунд назад / вперед |
| `,` `.` | Один кадр (1/64 с) назад / вперед |
| `Space` | Відтворення / пауза |
| `M` / `F` | Вимкнути звук / повний екран (подвійний клік по відео теж перемикає повний екран) |
| `Enter` ×2 | Натисніть один раз, щоб взвести кнопку надсилання, і ще раз, щоб надіслати вердикти |
| `F2` | Відкрити діалог налаштувань (можна змінити) |

## Архітектура та розбір функцій

DemoScope — це одна самовикликувана функція (`@run-at document-start`, `@noframes`). `init()` обирає між сторінкою запрошень і сторінкою перевірки та підключає наведені нижче модулі. Повний довідник з усіх 143 функцій — ім'я, призначення, параметри й значення, що повертається — міститься в [uk_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/uk_FUNCTIONS.md).

| Модуль | Призначення | Ключові функції |
|---|---|---|
| `Localization` | Визначає мову інтерфейсу, добирає рядки, малює прапори та вибір мови | `getActiveLocale`, `tr`, `settingText`, `inviteText`, `getPresetLabel`, `installLanguageSelector` |
| `Segment & player` | Читає початок/кінець кліпу зі сторінки, обгортає відтворення Video.js/HTML5, вимикає вбудований таймер циклу сегмента на сайті | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | Власна смуга перемотування, підказки клавіш, прискорення по Shift, покадровий крок, гарячі клавіші | `installCustomControls`, `installPlayerEnhancements`, `isShortcutBlocked` |
| `Verdict presets` | Таблиця шаблонів, стан вибору, застосування шаблонів з необов'язковим випадковим порядком і затримками | `applyPreset`, `detectActivePreset`, `syncPresetButtons`, `applyDefaultVerdicts`, `buildEnhancementBar` |
| `Submit flow` | Дворівневий Enter, формування `verdict_labels[]`, перевірка того самого джерела, екран завантаження | `invokeProceedAction`, `prepareVerdictFormForSubmit`, `submitVerdictForm`, `isSafeSubmitTarget`, `finishSubmitLoadingWhenReady` |
| `Local history` | Зберігає, обрізає та показує історію за кліпами й іграми в `localStorage` | `readClipHistoryStore`, `writeClipHistoryStore`, `appendReviewHistory`, `renderClipHistory` |
| `Backups & reports` | Експорт/імпорт JSON, HTML-звіт, зведений звіт із багатьох копій | `exportLocalHistory`, `importLocalHistory`, `exportReadableHistory`, `exportCombinedHistoryReports` |
| `Settings & sound` | Діалог налаштувань, змінна гаряча клавіша, звукові сигнали Web Audio | `ensureSettingsDialog`, `openSettingsDialog`, `installSettingsUi`, `playUiSound` |
| `Invite page` | Перероблена `/vacnet/createinvite`: показ/приховування та копіювання посилання, вимоги | `installInvitePage` |
| `Layout & UI helpers` | Сповіщення, приховування підвалу, спостерігачі за розміткою, перемикач імені облікового запису | `enhanceLayout`, `showToast`, `watchProceedFooter`, `installAccountNameControl` |
| `Bootstrap` | Точка входу: визначає тип сторінки та запускає модулі | `init` |

## Локальні дані та конфіденційність

DemoScope не надсилає телеметрію. Налаштування та історія зберігаються в `localStorage` браузера (ключі з префіксом `demoscope`) і в `sessionStorage`. Щоб видалити історію, скористайтеся пунктом очищення історії в діалозі налаштувань.

## Відмова від відповідальності

DemoScope — неофіційний проєкт спільноти, не пов'язаний із Valve Corporation і не схвалений нею. Він ніколи не ухвалює вердикт за вас — перевіряйте кожен кліп самостійно та дотримуйтеся правил програми перевірки. Використовуйте на власний ризик.

## License

Поширюється за ліцензією [MIT](../LICENSE).