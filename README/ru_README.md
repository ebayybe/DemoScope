<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/README/README.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/README/bg_README.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/README/hu_README.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/README/vi_README.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/README/el_README.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/README/da_README.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/README/id_README.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/README/es-ES_README.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/README/es-419_README.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/README/it_README.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/README/zh-TW_README.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/README/zh-CN_README.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/README/ko_README.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/README/de_README.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/README/nl_README.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/README/no_README.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/README/pl_README.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-PT_README.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-BR_README.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/README/ro_README.md) · **Русский** · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/README/th_README.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/README/tr_README.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/README/uk_README.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/README/fi_README.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/README/fr_README.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/README/cs_README.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/README/sv_README.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/README/ja_README.md)

</div>

<br>

<div align="center">

# DemoScope

**Набор инструментов для проверки CS2 VACNet с управлением с клавиатуры.**<br>
Пресеты вердиктов · плеер с учётом границ клипа · переназначаемые клавиши · приватная локальная история · 29 языков.

<br>

[![Версия](https://img.shields.io/badge/version-1.4.0-3b82f6?style=flat-square)](https://github.com/ebayybe/DemoScope/releases)
[![Лицензия](https://img.shields.io/badge/license-MIT-22c55e?style=flat-square)](https://github.com/ebayybe/DemoScope/blob/main/LICENSE)
[![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-f59e0b?style=flat-square)](#установка)
[![Языки](https://img.shields.io/badge/languages-29-8b5cf6?style=flat-square)](#языки)
[![Конфиденциальность](https://img.shields.io/badge/telemetry-none-64748b?style=flat-square)](#конфиденциальность)

<br>

[**⬇ Установить DemoScope**](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js)

[Возможности](#возможности) · [Установка](#установка) · [Горячие клавиши](#горячие-клавиши) · [Настройка](#настройка) · [Документация](https://github.com/ebayybe/DemoScope/blob/main/docs/ru_FUNCTIONS.md) · [История изменений](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ru_CHANGELOG.md)

</div>

<br>

## Скриншоты

<table>
  <tr>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png" alt="Приветственный экран DemoScope"></a><br><sub><b>Приветственный экран</b></sub></td>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png" alt="Основной интерфейс DemoScope"></a><br><sub><b>Основной интерфейс</b></sub></td>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png" alt="Страница приглашения DemoScope"></a><br><sub><b>Пригласить друга</b></sub></td>
  </tr>
</table>

## Обзор

DemoScope улучшает страницы проверки Counter-Strike VACNet (`counter-strike.net/vacnet`). Вместо того чтобы каждый раз нажимать кнопки формы вердиктов для короткого клипа, вы работаете с клавиатуры: выбираете пресеты вердиктов, перемещаетесь по ограниченной текущим клипом шкале, переходите по кадрам, временно ускоряете воспроизведение, отправляете вердикт в два шага и ведёте приватную историю собственных решений. Скрипт поддерживает оба типа задач VACNet (классическую форму с четырьмя вопросами и новую форму с одним вопросом) и защищается от изменений страницы. Всё работает локально в браузере.

## Возможности

| | |
|---|---|
| **Процесс проверки** | 5 быстрых пресетов вердикта на клавишах `1`–`5` и ещё 15 расширенных комбинаций, необязательный рандомизатор вердиктов (по умолчанию выключен) и безопасная двухэтапная отправка: `Enter` подготавливает отправку, повторное нажатие отправляет. `Esc` отменяет действие. |
| **Оба типа задач** | Распознаёт классическую форму (помощь в прицеливании, wallhack, auto-bhop, бот) и задачу с одним вопросом («Is the Subject cheating beyond a reasonable doubt?»). Для второй используется компактный интерфейс с подписанными вердиктами на клавишах `1`–`3` и индикатором блокировки, отсчитывающим время до конца клипа. |
| **Плеер с учётом клипа** | Шкала и время ограничены началом и концом клипа; переходы на ±5 с, покадровый шаг 1/64 с, ускорение при удержании `Shift` (0,5×–4×), отключение звука и полноэкранный режим с клавиатуры. |
| **Настраиваемые горячие клавиши** | Переназначайте любое из 18 действий в отдельном окне. Перед заменой клавиши объясняется конфликт (какое действие, группа и назначение); все подсказки клавиш на странице соответствуют вашим настройкам. |
| **Анимации** | Отдельное окно с живым предпросмотром шести стилей индикатора, тремя скоростями и переключателем. По умолчанию учитывается системная настройка «уменьшить движение». |
| **Понятные вердикты** | Значок «?» рядом с каждой категорией вердикта открывает объяснение; ключевые фразы подсвечиваются, чтобы отрицание «not» не осталось незамеченным. |
| **Приватная локальная история** | История по каждому клипу и матчу в `localStorage`, импорт и экспорт JSON, HTML-отчёты и объединение нескольких резервных копий в один отчёт. |
| **Страница приглашения** | Переработанная страница `/vacnet/createinvite`: показать/скрыть, копирование одним нажатием, сводка требований, кнопка закрытия и клавиши `Enter` / `Esc`. |
| **29 языков** | Сначала используется выбранный вами язык, затем настройка Steam `?l=`, затем язык браузера. Выбор языка в DemoScope также меняет текст VACNet. |
| **Звуковые эффекты** | Синтезированные сигналы Web Audio с настройкой громкости, предпросмотром и переключателем. |
| **Устойчивость к редизайнам** | Этапы настройки изолированы, для ключевых элементов предусмотрен резервный поиск, а при неузнаваемой странице DemoScope отключается и не меняет страницу VACNet. Отчёт диагностики для сообщения об ошибке копируется одним нажатием. |

## Установка

1. Установите менеджер пользовательских скриптов, например [Tampermonkey](https://www.tampermonkey.net/) или [Violentmonkey](https://violentmonkey.github.io/). Скрипт использует `GM_addStyle` и `unsafeWindow`.
2. [**Установите DemoScope**](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js) и подтвердите установку в менеджере.
3. Войдите в Steam и откройте [counter-strike.net/vacnet](https://www.counter-strike.net/vacnet/).
4. Откройте клип для проверки. DemoScope загрузится автоматически (страница `/vacnet/join` исключена).

Обновления устанавливаются через ваш менеджер пользовательских скриптов. DemoScope работает в браузерах на Chromium и в Firefox.

## Горячие клавиши

На страницах проверки клавиши работают, если фокус не находится в редактируемом поле или другом интерактивном элементе. **Каждую клавишу ниже можно изменить** в меню **Settings → Hotkeys**.

| Клавиша | Действие |
|---|---|
| `1` … `5` | Классическая форма: применить пресет (1 — бот + помощь в прицеливании + wallhack; 2 — помощь в прицеливании + wallhack; 3 — rage; 4 — игрок без читов; 5 — не уверен). |
| `1` `2` `3` | Задача с одним вопросом: Cheating / Not sure / No cheats seen. |
| `Enter` | Подтвердить. В классической форме первое нажатие подготавливает кнопку, второе отправляет вердикт. |
| `Esc` | Отменить вердикт, ожидающий подтверждения, или снять подготовку с первого `Enter`. |
| `Shift` (удерживать) | Ускорение (0,5×–4×; по умолчанию 2×, значение можно выбрать на странице). |
| `←` `→` | Перейти на 5 секунд назад / вперёд. |
| `,` `.` | Перейти на один кадр (1/64 с) назад / вперёд. |
| `Space` | Воспроизведение / пауза. |
| `M` / `F` | Выключить звук / полноэкранный режим (двойное нажатие на видео также переключает полноэкранный режим). |
| `F2` | Открыть окно настроек. |
| `Enter` / `Esc` *(страница приглашения)* | Готово / закрыть. |

## Настройка

Откройте настройки клавишей `F2`. Пункты расположены от самых часто используемых к более редким:

- **Hotkeys**: отдельное окно со всеми действиями, группировкой по назначению, сбросом отдельной клавиши, кнопкой «Reset all» и обработкой конфликтов через **Replace**, **Swap** или **Cancel**. `Esc` можно назначить как обычную клавишу.
- **Animations**: выберите стиль (pulse, breathe, ripple, heartbeat, orbit, blink), скорость или отключите анимации. Карточки показывают живой предпросмотр.
- **Sound effects**: включение и выключение, громкость (её также меняет колёсико мыши) и кнопка проверки звука.
- **Local history**: включение и выключение, лимиты (10/20/30/50 записей на ключ, 100/200/300/500 ключей), формат времени 12/24 часа, резервные копии JSON и HTML-отчёты.
- **Footer**: скрыть ссылку обратной связи, ссылку на отчёт, строку авторских прав или весь нижний колонтитул.
- **Diagnostics**: скопировать отчёт для сообщения об ошибке (см. [Сообщить о проблеме](#сообщить-о-проблеме)).
- **Reset**: одна кнопка возвращает стандартные настройки звука, горячих клавиш и анимаций. История сохраняется.

## Языки

DemoScope поддерживает 29 языков: болгарский, китайский (упрощённый и традиционный), чешский, датский, нидерландский, английский, финский, французский, немецкий, греческий, венгерский, индонезийский, итальянский, японский, корейский, норвежский, польский, португальский (Португалия и Бразилия), румынский, русский, испанский (Испания и Латинская Америка), шведский, тайский, турецкий, украинский и вьетнамский. Язык можно изменить в меню на странице в любое время.

## Сообщить о проблеме

Valve может менять страницы VACNet без предупреждения. Если что-то перестало работать:

1. Нажмите `F2`, откройте раздел **Diagnostics** и выберите **Copy diagnostics**.
2. Вставьте текст в новую [задачу](https://github.com/ebayybe/DemoScope/issues), по возможности приложив снимок экрана.

Отчёт содержит версию скрипта, время, язык и строку user-agent браузера, сведения о найденных элементах страницы, неудачных этапах настройки и структуре страницы (только теги, ID и классы). В нём нет текста страницы, имени аккаунта и истории. Если страницу больше нельзя распознать, DemoScope отключается только на ней и сообщает об этом; VACNet продолжает работать как обычно.

## Часто задаваемые вопросы

<details>
<summary><b>DemoScope сообщает, что отключился на этой странице. Что произошло?</b></summary>

Страница VACNet больше не соответствует ожидаемой структуре, поэтому скрипт отключился, чтобы не оставить частично построенный интерфейс. Скопируйте отчёт диагностики (см. выше) и создайте задачу; обычно обновление выходит быстро.
</details>

<details>
<summary><b>Текст вердиктов VACNet отображается на другом языке, чем DemoScope.</b></summary>

При выборе языка в DemoScope VACNet запрашивает текст на этом языке через параметр Steam `?l=`. Если у VACNet нет перевода, она использует свой язык по умолчанию, а подписи DemoScope остаются на выбранном вами языке.
</details>

<details>
<summary><b>DemoScope выбирает вердикты за меня?</b></summary>

Нет. Пресеты только нажимают выбранные вами кнопки вердиктов, а отправку всегда подтверждаете вы. Самостоятельно проверяйте каждый клип и соблюдайте правила программы.
</details>

<details>
<summary><b>Записывается ли история для задания с одним вопросом?</b></summary>

Пока нет. Сейчас локальная история ведётся только для классической формы с четырьмя вопросами.
</details>

<details>
<summary><b>Как вернуть стандартные клавиши?</b></summary>

Нажмите значок сброса рядом с изменённой клавишей, выберите **Reset all** в окне Hotkeys или **Reset** в настройках — этот вариант также сбрасывает звук и анимации.
</details>

## Архитектура

DemoScope — одна самовызывающаяся функция (`@run-at document-start`, `@noframes`). `init()` определяет тип страницы, проверяет, можно ли её распознать, и подключает модули ниже. Полный справочник по всем 217 функциям верхнего уровня, включая параметры, возвращаемые значения и ключи хранилища, находится в [ru_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/ru_FUNCTIONS.md).

<details>
<summary><b>Обзор модулей</b></summary>

| Модуль | Назначение | Основные функции |
|---|---|---|
| `Localization` | Язык интерфейса, поиск строк, флаги, выбор языка, синхронизация языка VACNet через `?l=` | `getActiveLocale`, `tr`, `settingText`, `syncSelectedLanguage`, `installLanguageSelector` |
| `Segment & player` | Читает границы клипа, оборачивает Video.js / HTML5-плеер, отключает встроенный цикл сегмента сайта | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | Шкала перемотки, подсказки клавиш, ускорение, покадровый шаг, горячие клавиши | `installCustomControls`, `installPlayerEnhancements` |
| `Hotkeys` | Реестр действий, привязки, обнаружение конфликтов, окно Hotkeys | `getBinding`, `findKeyConflict`, `getActionForEvent`, `ensureHotkeysDialog` |
| `Verdict presets` | Таблица пресетов, состояние выбора, случайное применение | `applyPreset`, `detectActivePreset`, `buildEnhancementBar` |
| `Single-question task` | Подписи, индикатор блокировки и клавиши новой формы | `isCheatingMode`, `selectCheatingVerdict`, `updateCheatingLock` |
| `Submit flow` | Двухэтапное подтверждение, отмена, `verdict_labels[]`, проверка того же источника, оверлей загрузки | `invokeProceedAction`, `invokeCancelAction`, `submitVerdictForm`, `finishSubmitLoadingWhenReady` |
| `Local history` | История по клипам и матчам, резервные копии и отчёты | `appendReviewHistory`, `importLocalHistory`, `exportCombinedHistoryReports` |
| `Settings & animations` | Окно настроек и подокна, звук, анимации индикатора | `ensureSettingsDialog`, `installExtraSettingsSections`, `ensureAnimationsDialog`, `playUiSound` |
| `Invite page` | Переработанная страница, кнопка закрытия, горячие клавиши | `installInvitePage`, `installInviteExtras` |
| `Resilience` | Изолированные этапы, резервный поиск, отключение, диагностика | `safeStep`, `disableDemoScope`, `buildDiagnosticsReport` |
| `Bootstrap` | Точка входа | `init`, `enhanceLayout` |

</details>

## Конфиденциальность

DemoScope не отправляет телеметрию и не загружает ваши настройки или историю. При отправке вердикта VACNet получает его через обычную форму сайта. Настройки и история хранятся в браузере: в `localStorage` (ключи начинаются с `demoscope`) и `sessionStorage`. Чтобы удалить историю, выберите **Settings → Local history → Clear history**. Отчёт диагностики только копируется в буфер обмена; делиться им или нет — решаете вы.

## Отказ от ответственности

DemoScope — неофициальный проект сообщества, не связанный с Valve Corporation и не одобренный ею. Скрипт никогда не выносит вердикт за вас. Проверяйте каждый клип самостоятельно и соблюдайте правила программы. Используйте на свой риск.

## Лицензия

Распространяется по лицензии [MIT](https://github.com/ebayybe/DemoScope/blob/main/LICENSE).


