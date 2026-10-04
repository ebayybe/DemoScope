<div align="center">

[English](../README.md) · **Български** · [Magyar](hu_README.md) · [Tiếng Việt](vi_README.md) · [Ελληνικά](el_README.md) · [Dansk](da_README.md) · [Bahasa Indonesia](id_README.md) · [Español (España)](es-ES_README.md) · [Español (Latinoamérica)](es-419_README.md) · [Italiano](it_README.md) · [繁體中文](zh-TW_README.md) · [简体中文](zh-CN_README.md) · [한국어](ko_README.md) · [Deutsch](de_README.md) · [Nederlands](nl_README.md) · [Norsk](no_README.md) · [Polski](pl_README.md) · [Português (Portugal)](pt-PT_README.md) · [Português (Brasil)](pt-BR_README.md) · [Română](ro_README.md) · [Русский](ru_README.md) · [ไทย](th_README.md) · [Türkçe](tr_README.md) · [Українська](uk_README.md) · [Suomi](fi_README.md) · [Français](fr_README.md) · [Čeština](cs_README.md) · [Svenska](sv_README.md) · [日本語](ja_README.md)

# DemoScope — CS2 Review Toolkit

![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-orange)

**Набор от инструменти (userscript) за рецензенти на CS2 VACNet с управление от клавиатурата: шаблони за присъди, видеоплейър с граници на сегмента, подобрена страница за покани, звукови ефекти и частна локална история — на 29 езика.**

</div>

## Преглед

DemoScope подобрява страниците за преглед на Counter-Strike VACNet (`counter-strike.net/vacnet`). Вместо да кликате върху четирите групи присъди (aim assist, wallhack, auto-bhop, bot) за всеки кратък клип, получавате работен процес, управляван от клавиатурата: готови присъди, лента за превъртане, ограничена до прегледания сегмент, преминаване кадър по кадър, временно ускоряване, двустъпково потвърждение на изпращането и частна история на вашите присъди. Всичко работи локално във вашия браузър.

## Основни функции

- **Шаблони за присъди** – 5 бързи шаблона на клавиши `1`–`5` и 15 разширени комбинации (aim, wallhack, bhop, bot и техните смески, вкл. варианти „несигурно“).
- **Плейър със сегмент** – лента за превъртане, време, скокове ±5 с и стъпки от 1/64 с, ограничени до началото и края на клипа.
- **Ускоряване при задържане** – задръжте `Shift` за възпроизвеждане с настройваема скорост (0,5×–4×, по подразбиране 2×).
- **Сигурно двустъпково изпращане** – `Enter` подготвя бутона, втори `Enter` изпраща присъдите; формуляри към други източници се блокират.
- **Интерфейс на 29 езика** – следва параметъра `?l=` на Steam, запазения избор или езика на браузъра, с избор на език на страницата.
- **Локална история на прегледите** – история по клип и по игра в `localStorage`; износ/внос на JSON, HTML отчет и обединяване на много архиви в един отчет.
- **Подобрена страница за покани** – обновена `/vacnet/createinvite` с показване/скриване и копиране на връзката с едно щракване, плюс обобщение на изискванията.
- **Звукови ефекти** – синтезирани звуци чрез Web Audio с превключвател, сила на звука и преслушване.
- **Диалог с настройки** – отваря се с `F2` (може да се промени): звуци, клавиш, лимити на историята, архиви, възстановяване на стандартните настройки.
- **Удобства** – екран за зареждане след изпращане, известия, скриване на името на акаунта, диалог с правилата за преглед и по избор рандомизатор на присъдите (изключен по подразбиране).

## Инсталиране

1. Инсталирайте мениджър на потребителски скриптове, например [Tampermonkey](https://www.tampermonkey.net/) или [Violentmonkey](https://violentmonkey.github.io/) (скриптът използва `GM_addStyle` и `unsafeWindow`).
2. [Инсталирайте DemoScope](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js) и потвърдете инсталацията в мениджъра.
3. Влезте в Steam и отворете <https://www.counter-strike.net/vacnet/>.
4. Отворете клип за преглед — DemoScope се зарежда автоматично (страницата `/vacnet/join` е изключена).

## Употреба

Клавишните комбинации работят на страниците за преглед, когато фокусът не е в поле за въвеждане, бутон, връзка или падащ списък.

| Клавиш | Действие |
|---|---|
| `1` … `5` | Прилага шаблон: 1 бот + aim + wallhack, 2 aim + wallhack, 3 rage, 4 чист играч, 5 несигурно |
| `Shift` (hold) | Задръжте за ускоряване (0,5×–4×, по подразбиране 2×, избира се на страницата) |
| `←` `→` | Скок 5 секунди назад / напред |
| `,` `.` | Един кадър (1/64 с) назад / напред |
| `Space` | Пускане / пауза |
| `M` / `F` | Заглушаване / цял екран (двойно щракване върху видеото също превключва цял екран) |
| `Enter` ×2 | Натиснете веднъж за подготовка на бутона, втори път за изпращане на присъдите |
| `F2` | Отваря диалога с настройки (може да се промени) |

## Архитектура и преглед на функциите

DemoScope е една самоизвикваща се функция (`@run-at document-start`, `@noframes`). `init()` избира между страницата за покани и страницата за преглед и свързва модулите по-долу. Пълният справочник за всички 143 описани функции — име, отговорност, параметри и върната стойност — е в [bg_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/bg_FUNCTIONS.md).

| Модул | Отговорност | Основни функции |
|---|---|---|
| `Localization` | Определя езика на интерфейса, търси низове, рисува знамена и избор на език | `getActiveLocale`, `tr`, `settingText`, `inviteText`, `getPresetLabel`, `installLanguageSelector` |
| `Segment & player` | Чете началото/края на клипа от страницата, обвива възпроизвеждането през Video.js/HTML5, изключва вградения цикличен таймер на сайта | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | Лента за превъртане, подсказки за клавиши, ускоряване с Shift, кадър по кадър, клавишни комбинации | `installCustomControls`, `installPlayerEnhancements`, `isShortcutBlocked` |
| `Verdict presets` | Таблица с шаблони, състояние на избора, прилагане на шаблон с по избор случаен ред и забавяния | `applyPreset`, `detectActivePreset`, `syncPresetButtons`, `applyDefaultVerdicts`, `buildEnhancementBar` |
| `Submit flow` | Двустъпков Enter, изгражда `verdict_labels[]`, проверка за същия произход, екран за зареждане | `invokeProceedAction`, `prepareVerdictFormForSubmit`, `submitVerdictForm`, `isSafeSubmitTarget`, `finishSubmitLoadingWhenReady` |
| `Local history` | Съхранява, подрязва и показва историята по клип и по игра в `localStorage` | `readClipHistoryStore`, `writeClipHistoryStore`, `appendReviewHistory`, `renderClipHistory` |
| `Backups & reports` | Износ/внос на JSON, HTML отчет, обединен отчет от много архиви | `exportLocalHistory`, `importLocalHistory`, `exportReadableHistory`, `exportCombinedHistoryReports` |
| `Settings & sound` | Диалог с настройки, клавиш за отваряне, звукови сигнали чрез Web Audio | `ensureSettingsDialog`, `openSettingsDialog`, `installSettingsUi`, `playUiSound` |
| `Invite page` | Обновена `/vacnet/createinvite`: показване/скриване и копиране на връзката, изисквания | `installInvitePage` |
| `Layout & UI helpers` | Известия, скриване на долния колонтитул, наблюдатели на оформлението, скриване на името на акаунта | `enhanceLayout`, `showToast`, `watchProceedFooter`, `installAccountNameControl` |
| `Bootstrap` | Входна точка: определя типа страница и стартира модулите | `init` |

## Локални данни и поверителност

DemoScope не изпраща телеметрия. Настройките и историята остават в `localStorage` на браузъра (ключове, започващи с `demoscope`) и в `sessionStorage`. За да изтриете историята, използвайте опцията за изчистване в диалога с настройки.

## Отказ от отговорност

DemoScope е неофициален проект на общността, не е свързан с Valve Corporation и не е одобрен от нея. Той никога не взема решение вместо вас — прегледайте всеки клип сами и спазвайте правилата на програмата за преглед. Използвайте на своя отговорност.

## License

Издаден под лиценз [MIT](../LICENSE).