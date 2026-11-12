<div align="center">

**English** · [Български](https://github.com/ebayybe/DemoScope/blob/main/README/bg_README.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/README/hu_README.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/README/vi_README.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/README/el_README.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/README/da_README.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/README/id_README.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/README/es-ES_README.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/README/es-419_README.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/README/it_README.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/README/zh-TW_README.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/README/zh-CN_README.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/README/ko_README.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/README/de_README.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/README/nl_README.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/README/no_README.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/README/pl_README.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-PT_README.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-BR_README.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/README/ro_README.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/README/ru_README.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/README/th_README.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/README/tr_README.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/README/uk_README.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/README/fi_README.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/README/fr_README.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/README/cs_README.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/README/sv_README.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/README/ja_README.md)

</div>

<br>

<div align="center">

# DemoScope

**The keyboard-first review toolkit for CS2 VACNet.**<br>
Verdict presets · a clip-aware player · remappable hotkeys · private local history · 29 languages.

<br>

[![Version](https://img.shields.io/badge/version-v1.2.0-3b82f6?style=flat-square)](https://github.com/ebayybe/DemoScope/releases)
[![License](https://img.shields.io/badge/license-GPL--3.0-22c55e?style=flat-square)](https://github.com/ebayybe/DemoScope/blob/main/LICENSE)
[![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-f59e0b?style=flat-square)](#installation)
[![Languages](https://img.shields.io/badge/languages-29-8b5cf6?style=flat-square)](#languages)
[![Privacy](https://img.shields.io/badge/telemetry-none-64748b?style=flat-square)](#privacy)

<br>

[**⬇ Install DemoScope**](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js)

[Features](#features) · [Installation](#installation) · [Shortcuts](#keyboard-shortcuts) · [Customization](#customization) · [Docs](https://github.com/ebayybe/DemoScope/blob/main/docs/en_FUNCTIONS.md) · [Changelog](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/en_CHANGELOG.md)

</div>

<br>

## Screenshots

<table>
  <tr>
    <td align="center" width="25%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png" alt="DemoScope welcome screen"></a><br><sub><b>Welcome screen</b></sub></td>
    <td align="center" width="25%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png" alt="DemoScope main interface"></a><br><sub><b>Main interface</b></sub></td>
    <td align="center" width="25%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/2_DemoScope.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/2_DemoScope.png" alt="DemoScope clip review interface"></a><br><sub><b>Clip review interface</b></sub></td>
    <td align="center" width="25%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png" alt="DemoScope invite page"></a><br><sub><b>Invite a friend</b></sub></td>
  </tr>
</table>

## Overview

DemoScope upgrades the Counter-Strike VACNet review pages (`counter-strike.net/vacnet`). Instead of clicking through the verdict form for every short clip, you work from the keyboard: preset verdicts, a seek bar limited to the reviewed segment, frame stepping, a temporary speed boost, a two-step submit and a private history of your own verdicts. It understands both review forms VACNet serves today (the classic four-question form and the newer single-question task), and it protects itself when Valve changes the page. Everything runs locally in your browser.

## Features

| | |
|---|---|
| **Review workflow** | 5 quick verdict presets on `1`–`5` plus 15 extended combinations, an optional verdict randomizer (off by default), and a safe two-step submit: `Enter` arms, a second `Enter` sends. `Esc` cancels. |
| **Both task types** | Detects the classic form (aim assist, wallhack, auto-bhop, bot) and the single-question task (“Is the Subject cheating beyond a reasonable doubt?”). The latter gets a compact layout with labelled verdicts on `1`–`3` and a lock indicator that counts down to the end of the clip. |
| **Clip-aware player** | Seek bar and time readout limited to the clip's start and end, ±5 s jumps, 1/64 s frame stepping, hold-`Shift` speed boost (0.5×–4×), mute and fullscreen shortcuts. |
| **Hotkeys you control** | Reassign any of the 18 actions in a dedicated window. Conflicts are explained (which action, which group, what it does) before anything is replaced, and every key hint on the page follows your bindings. |
| **Animations** | A live-preview window with six indicator styles, three speeds and an on/off switch. Respects the system “reduce motion” setting by default. |
| **Understandable verdicts** | A “?” next to every verdict category explains it, and key phrases are highlighted so “not” never goes unnoticed. |
| **Private local history** | Per-clip and per-game history in `localStorage`, JSON export and import, HTML reports, and merging many backups into one report. |
| **Invite page** | A redesigned `/vacnet/createinvite` with show/hide, one-click copy, a requirements summary, a close button, and `Enter` / `Esc` shortcuts. |
| **29 languages** | Follows your choice, then Steam's `?l=` setting, then the browser. Picking a language in DemoScope also switches VACNet's own text. |
| **Sound effects** | Synthesized Web Audio cues with volume, preview and an on/off switch. |
| **Built to survive redesigns** | Setup steps run in isolation, key elements have fallback lookups, and if the page becomes unrecognizable DemoScope switches itself off and leaves VACNet untouched. One click copies a diagnostics report for bug reports. |

## Installation

1. Install a userscript manager such as [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/). The script uses `GM_addStyle` and `unsafeWindow`.
2. [**Install DemoScope**](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js) and confirm the installation in your manager.
3. Sign in to Steam and open [counter-strike.net/vacnet](https://www.counter-strike.net/vacnet/).
4. Open a review clip. DemoScope loads automatically (the `/vacnet/join` page is excluded).

Updates arrive through your userscript manager. DemoScope works in Chromium-based browsers and Firefox.

## Keyboard shortcuts

Shortcuts work on review pages when focus is not in an editable field or another interactive control. **Every key below can be changed** in **Settings → Hotkeys**.

| Key | Action |
|---|---|
| `1` … `5` | Classic form: apply a preset (1 bot + aim + wallhack, 2 aim + wallhack, 3 rage, 4 clean player, 5 uncertain). |
| `1` `2` `3` | Single-question task: Cheating / Not sure / No cheats seen. |
| `Enter` | Confirm. Classic form: press once to arm the button, press again to send. |
| `Esc` | Cancel the verdict that is waiting for confirmation, or disarm the first `Enter`. |
| `Shift` (hold) | Speed boost (0.5×–4×, default 2×, selectable on the page). |
| `←` `→` | Jump 5 seconds back / forward. |
| `,` `.` | Step one frame (1/64 s) back / forward. |
| `Space` | Play / pause. |
| `M` / `F` | Mute / fullscreen (double-clicking the video also toggles fullscreen). |
| `F2` | Open the settings window. |
| `Enter` / `Esc` *(invite page)* | Done / close. |

## Customization

Open the settings window with `F2`. It is organised from most to least used:

- **Hotkeys**: a dedicated window with all actions grouped by purpose, a per-action reset, “Reset all”, and conflict handling with **Replace**, **Swap** or **Cancel**. `Esc` can be assigned like any other key.
- **Animations**: pick a style (pulse, breathe, ripple, heartbeat, orbit, blink), a speed, or turn animations off. Every card previews the animation live.
- **Sound effects**: on/off, volume (mouse wheel adjusts it too) and a test button.
- **Local history**: enable or disable, limits (10/20/30/50 entries per key, 100/200/300/500 keys), 12/24-hour time, JSON backups and HTML reports.
- **Footer**: hide the feedback link, the report link, the copyright line, or the whole footer.
- **Diagnostics**: copy a report for bug reports (see [Reporting a problem](#reporting-a-problem)).
- **Reset**: one button returns sound, hotkeys and animations to their defaults. Your history is kept.

## Languages

DemoScope speaks 29 languages: Bulgarian, Chinese (Simplified and Traditional), Czech, Danish, Dutch, English, Finnish, French, German, Greek, Hungarian, Indonesian, Italian, Japanese, Korean, Norwegian, Polish, Portuguese (Portugal and Brazil), Romanian, Russian, Spanish (Spain and Latin America), Swedish, Thai, Turkish, Ukrainian and Vietnamese. An in-page picker switches the language at any time.

## Reporting a problem

Valve changes the VACNet pages without notice. If something stops working:

1. Press `F2` and open **Diagnostics**, then click **Copy diagnostics**.
2. Paste the text into a new [issue](https://github.com/ebayybe/DemoScope/issues), together with a screenshot if you can.

The report contains the script version, the time, your browser's language and user-agent string, which expected page elements were found, any setup steps that failed, and the page structure (tags, ids and classes only). It has no page text, no account name and no history. If the page is no longer recognizable, DemoScope switches itself off there and says so; VACNet keeps working normally.

## FAQ

<details>
<summary><b>DemoScope says it was switched off on this page. What happened?</b></summary>

VACNet's page no longer matches what DemoScope expects, so the script stepped aside instead of leaving a half-built page. Copy the diagnostics (see above) and open an issue; an update usually follows quickly.
</details>

<details>
<summary><b>VACNet's verdict text is in a different language than DemoScope.</b></summary>

Choosing a language in DemoScope asks VACNet for that language through Steam's `?l=` parameter. If VACNet has no translation for it, VACNet falls back to its own default, while DemoScope's own labels stay in your language.
</details>

<details>
<summary><b>Does DemoScope choose verdicts for me?</b></summary>

No. Presets only click the verdict buttons you asked for, and you always confirm the submission. Review every clip yourself and follow the program's rules.
</details>

<details>
<summary><b>Is the history recorded for the single-question task?</b></summary>

Not yet. Local history is currently recorded for the classic four-question form only.
</details>

<details>
<summary><b>How do I get the default keys back?</b></summary>

Use the reset icon next to a changed key, **Reset all** in the Hotkeys window, or **Reset** in the settings window, which also resets sound and animations.
</details>

## Architecture

DemoScope is a single self-invoking function (`@run-at document-start`, `@noframes`). `init()` picks the page type, checks that the page is recognizable, and wires up the modules below. The complete reference for all 217 top-level functions, including parameters, return values and storage keys, is in [en_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/en_FUNCTIONS.md).

<details>
<summary><b>Module overview</b></summary>

| Module | Responsibility | Key functions |
|---|---|---|
| `Localization` | UI language, string lookup, flags, language picker, syncing VACNet's `?l=` | `getActiveLocale`, `tr`, `settingText`, `syncSelectedLanguage`, `installLanguageSelector` |
| `Segment & player` | Reads the clip bounds, wraps Video.js/HTML5 playback, disables the site's native segment loop | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | Seek bar, key hints, speed boost, frame stepping, shortcuts | `installCustomControls`, `installPlayerEnhancements` |
| `Hotkeys` | Action registry, bindings, conflict detection, the Hotkeys window | `getBinding`, `findKeyConflict`, `getActionForEvent`, `ensureHotkeysDialog` |
| `Verdict presets` | Preset table, selection state, randomized application | `applyPreset`, `detectActivePreset`, `buildEnhancementBar` |
| `Single-question task` | Labels, lock indicator and keys for the newer form | `isCheatingMode`, `selectCheatingVerdict`, `updateCheatingLock` |
| `Submit flow` | Two-step confirm, cancel, `verdict_labels[]`, same-origin check, loading overlay | `invokeProceedAction`, `invokeCancelAction`, `submitVerdictForm`, `finishSubmitLoadingWhenReady` |
| `Local history` | Per-clip and per-game history, backups and reports | `appendReviewHistory`, `importLocalHistory`, `exportCombinedHistoryReports` |
| `Settings & animations` | Settings window, sub-windows, sound, indicator animations | `ensureSettingsDialog`, `installExtraSettingsSections`, `ensureAnimationsDialog`, `playUiSound` |
| `Invite page` | Redesigned page, close button, shortcuts | `installInvitePage`, `installInviteExtras` |
| `Resilience` | Isolated steps, fallback lookups, switch-off, diagnostics | `safeStep`, `disableDemoScope`, `buildDiagnosticsReport` |
| `Bootstrap` | Entry point | `init`, `enhanceLayout` |

</details>

## Privacy

DemoScope sends no telemetry and uploads none of your settings or history. When you submit a verdict, VACNet receives it through the site's normal form. Settings and history stay in your browser: `localStorage` (keys starting with `demoscope`) and `sessionStorage`. Use **Settings → Local history → Clear history** to remove the history. The diagnostics report is only copied to your clipboard; you decide whether to share it.

## Disclaimer

DemoScope is an unofficial community project, not affiliated with or endorsed by Valve Corporation. It never decides a verdict for you. Review every clip yourself and follow the rules of the review program. Use at your own risk.

## License

Released under the [GNU GPL v3.0](https://github.com/ebayybe/DemoScope/blob/main/LICENSE) license.

## Acknowledgments

- **Initial idea and base interface:** [*CS2 VACNet Review — Player & Layout Enhancements*](https://greasyfork.org/ru/scripts/591778-cs2-vacnet-review-player-layout-enhancements) by skinsales / goodvibes (MIT).
- **Related concept and Russian-language fork:** [*VACLens RU — CS2 Review Assistant*](https://greasyfork.org/ru/scripts/592414-vaclens-ru-cs2-review-assistant) by authorless (MIT).
- **Architecture rewrite, reusable framework, 29-language support, and custom verdict presets:** ebayybe.
