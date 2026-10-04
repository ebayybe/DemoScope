<div align="center">

[English](../README.md) · [Български](bg_README.md) · [Magyar](hu_README.md) · [Tiếng Việt](vi_README.md) · [Ελληνικά](el_README.md) · [Dansk](da_README.md) · [Bahasa Indonesia](id_README.md) · [Español (España)](es-ES_README.md) · [Español (Latinoamérica)](es-419_README.md) · [Italiano](it_README.md) · [繁體中文](zh-TW_README.md) · [简体中文](zh-CN_README.md) · [한국어](ko_README.md) · [Deutsch](de_README.md) · [Nederlands](nl_README.md) · [Norsk](no_README.md) · [Polski](pl_README.md) · [Português (Portugal)](pt-PT_README.md) · [Português (Brasil)](pt-BR_README.md) · [Română](ro_README.md) · **Русский** · [ไทย](th_README.md) · [Türkçe](tr_README.md) · [Українська](uk_README.md) · [Suomi](fi_README.md) · [Français](fr_README.md) · [Čeština](cs_README.md) · [Svenska](sv_README.md) · [日本語](ja_README.md)

# DemoScope — CS2 Review Toolkit

![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-orange)

**Набор userscript-инструментов с управлением с клавиатуры для проверяющих CS2 VACNet: пресеты вердиктов, видеоплеер с учётом сегмента, улучшенная страница приглашений, звуковые эффекты и приватная локальная история — на 29 языках.**

</div>

## Обзор

DemoScope улучшает страницы проверки Counter-Strike VACNet (`counter-strike.net/vacnet`). Вместо того чтобы для каждого короткого клипа кликать по четырём группам вердиктов (aim assist, wallhack, auto-bhop, bot), вы получаете процесс, ориентированный на клавиатуру: готовые вердикты, полосу перемотки, ограниченную проверяемым сегментом, покадровую навигацию, временное ускорение, двухэтапное подтверждение отправки и приватную историю ваших собственных вердиктов. Всё работает локально в вашем браузере.

## Основные возможности

- **Пресеты вердиктов** – 5 быстрых пресетов на клавишах `1`–`5` и 15 расширенных комбинаций (aim, wallhack, bhop, bot и их сочетания, включая варианты «не уверен»).
- **Плеер с учётом сегмента** – полоса перемотки, индикатор времени, прыжки ±5 с и покадровый шаг 1/64 с в пределах начала и конца клипа.
- **Ускорение при удержании** – удерживайте `Shift` для воспроизведения с настраиваемой скоростью (0,5×–4×, по умолчанию 2×).
- **Безопасная двухэтапная отправка** – `Enter` взводит кнопку, второй `Enter` отправляет вердикты; формы, ведущие на другой источник, блокируются.
- **Интерфейс на 29 языках** – использует сохранённый выбор языка; в автоматическом режиме учитывает параметр Steam `?l=`, а затем язык браузера. На странице доступен переключатель языка.
- **Локальная история проверок** – история по клипам и по играм в `localStorage`; экспорт/импорт JSON, HTML-отчёт и объединение множества резервных копий в один отчёт.
- **Улучшенная страница приглашений** – переработанная `/vacnet/createinvite` с показом/скрытием и копированием ссылки приглашения в один клик, плюс сводка требований.
- **Звуковые эффекты** – синтезированные сигналы Web Audio с переключателем, громкостью и предпрослушиванием.
- **Диалог настроек** – открывается клавишей `F2` (можно изменить): звуки, горячая клавиша, лимиты истории, резервные копии, сброс настроек.
- **Удобства** – экран загрузки после отправки, уведомления, переключатель скрытия имени аккаунта, диалог правил проверки и необязательный рандомайзер вердиктов (по умолчанию выключен).

## Установка

1. Установите менеджер userscript-ов, например [Tampermonkey](https://www.tampermonkey.net/) или [Violentmonkey](https://violentmonkey.github.io/) (скрипт использует `GM_addStyle` и `unsafeWindow`).
2. [Установите DemoScope](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js) и подтвердите установку в менеджере.
3. Войдите в Steam и откройте <https://www.counter-strike.net/vacnet/>.
4. Откройте клип для проверки — DemoScope загрузится автоматически (страница `/vacnet/join` исключена).

## Использование

Горячие клавиши работают на страницах проверки, когда фокус не находится в поле ввода или другом интерактивном элементе.

| Клавиша | Действие |
|---|---|
| `1` … `5` | Применить пресет вердикта: 1 бот + aim + wallhack, 2 aim + wallhack, 3 rage, 4 чистый игрок, 5 не уверен |
| `Shift` (hold) | Удерживать для ускорения (0,5×–4×, по умолчанию 2×, выбирается на странице) |
| `←` `→` | Перемотка на 5 секунд назад / вперёд |
| `,` `.` | Один кадр (1/64 с) назад / вперёд |
| `Space` | Воспроизведение / пауза |
| `M` / `F` | Выключить звук / полный экран (двойной клик по видео тоже переключает полный экран) |
| `Enter` ×2 | Нажмите один раз, чтобы взвести кнопку отправки, и ещё раз, чтобы отправить вердикты |
| `F2` | Открыть диалог настроек (можно изменить) |

## Архитектура и разбор функций

DemoScope — это одна самовызывающаяся функция (`@run-at document-start`, `@noframes`). `init()` выбирает между страницей приглашений и страницей проверки и подключает перечисленные ниже модули. Полный справочник по всем 143 описанным функциям — имя, назначение, параметры и возвращаемое значение — находится в [ru_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/ru_FUNCTIONS.md).

| Модуль | Назначение | Ключевые функции |
|---|---|---|
| `Localization` | Определяет язык интерфейса, подбирает строки, рисует флаги и выбор языка | `getActiveLocale`, `tr`, `settingText`, `inviteText`, `getPresetLabel`, `installLanguageSelector` |
| `Segment & player` | Читает начало/конец клипа со страницы, оборачивает воспроизведение Video.js/HTML5, отключает встроенный таймер зацикливания сегмента на сайте | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | Собственная полоса перемотки, подсказки клавиш, ускорение по Shift, покадровый шаг, горячие клавиши | `installCustomControls`, `installPlayerEnhancements`, `isShortcutBlocked` |
| `Verdict presets` | Таблица пресетов, состояние выбора, применение пресетов с необязательным случайным порядком и задержками | `applyPreset`, `detectActivePreset`, `syncPresetButtons`, `applyDefaultVerdicts`, `buildEnhancementBar` |
| `Submit flow` | Двухэтапный Enter, формирование `verdict_labels[]`, проверка того же источника, экран загрузки | `invokeProceedAction`, `prepareVerdictFormForSubmit`, `submitVerdictForm`, `isSafeSubmitTarget`, `finishSubmitLoadingWhenReady` |
| `Local history` | Хранит, обрезает и отображает историю по клипам и играм в `localStorage` | `readClipHistoryStore`, `writeClipHistoryStore`, `appendReviewHistory`, `renderClipHistory` |
| `Backups & reports` | Экспорт/импорт JSON, HTML-отчёт, сводный отчёт из множества копий | `exportLocalHistory`, `importLocalHistory`, `exportReadableHistory`, `exportCombinedHistoryReports` |
| `Settings & sound` | Диалог настроек, изменяемая горячая клавиша, звуковые сигналы Web Audio | `ensureSettingsDialog`, `openSettingsDialog`, `installSettingsUi`, `playUiSound` |
| `Invite page` | Переработанная `/vacnet/createinvite`: показ/скрытие и копирование ссылки, требования | `installInvitePage` |
| `Layout & UI helpers` | Уведомления, скрытие подвала, наблюдатели за разметкой, переключатель имени аккаунта | `enhanceLayout`, `showToast`, `watchProceedFooter`, `installAccountNameControl` |
| `Bootstrap` | Точка входа: определяет тип страницы и запускает модули | `init` |

## Локальные данные и конфиденциальность

DemoScope не отправляет телеметрию и не загружает сохранённые локально настройки или историю. При отправке вердикта VACNet получает его через штатную форму сайта. Настройки и история хранятся в `localStorage` браузера (ключи с префиксом `demoscope`) и в `sessionStorage`. Чтобы удалить историю, используйте пункт очистки истории в диалоге настроек.

## Отказ от ответственности

DemoScope — неофициальный проект сообщества, не связанный с Valve Corporation и не одобренный ею. Он никогда не принимает вердикт за вас — проверяйте каждый клип самостоятельно и соблюдайте правила программы проверки. Используйте на свой страх и риск.

## License

Распространяется по лицензии [MIT](../LICENSE).
