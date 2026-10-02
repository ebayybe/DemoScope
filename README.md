<div align="center">

**English** · [Български](README/bg_README.md) · [Magyar](README/hu_README.md) · [Tiếng Việt](README/vi_README.md) · [Ελληνικά](README/el_README.md) · [Dansk](README/da_README.md) · [Bahasa Indonesia](README/id_README.md) · [Español (España)](README/es-ES_README.md) · [Español (Latinoamérica)](README/es-419_README.md) · [Italiano](README/it_README.md) · [繁體中文](README/zh-TW_README.md) · [简体中文](README/zh-CN_README.md) · [한국어](README/ko_README.md) · [Deutsch](README/de_README.md) · [Nederlands](README/nl_README.md) · [Norsk](README/no_README.md) · [Polski](README/pl_README.md) · [Português (Portugal)](README/pt-PT_README.md) · [Português (Brasil)](README/pt-BR_README.md) · [Română](README/ro_README.md) · [Русский](README/ru_README.md) · [ไทย](README/th_README.md) · [Türkçe](README/tr_README.md) · [Українська](README/uk_README.md) · [Suomi](README/fi_README.md) · [Français](README/fr_README.md) · [Čeština](README/cs_README.md) · [Svenska](README/sv_README.md) · [日本語](README/ja_README.md)

# DemoScope — CS2 Review Toolkit

![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-orange)

**Keyboard-first userscript toolkit for CS2 VACNet reviewers: verdict presets, a segment-aware video player, invite-page upgrades, sound effects and a private local history — in 29 languages.**

</div>

## Overview

DemoScope upgrades the Counter-Strike VACNet review pages (`counter-strike.net/vacnet`). Instead of clicking four verdict groups (aim assist, wallhack, auto-bhop, bot) for every short clip, you get a keyboard-first workflow: preset verdicts, a seek bar limited to the reviewed segment, frame stepping, a temporary speed boost, a two-step submit confirmation and a private history of your own verdicts. Everything runs locally in your browser.

## Key Features

- **Verdict presets** – 5 quick presets on keys `1`–`5` plus 15 extended combinations (aim, wallhack, bhop, bot and their mixes, including “uncertain” variants).
- **Segment-aware player** – seek bar, time readout, ±5 s jumps and 1/64 s frame stepping restricted to the clip's start/end bounds.
- **Hold-to-accelerate** – hold `Shift` to play at a configurable speed (0.5×–4×, default 2×).
- **Safe two-step submit** – `Enter` arms the button, a second `Enter` sends the verdicts; cross-origin form targets are blocked.
- **29-language interface** – follows Steam's `?l=` parameter, your saved choice or the browser locale, with an in-page language picker.
- **Local review history** – per-clip and per-game history in `localStorage`; JSON export/import, HTML report, and merging of many backups into one report.
- **Invite page upgrades** – redesigned `/vacnet/createinvite` with show/hide and one-click copy of the invite link plus a requirements summary.
- **Sound effects** – synthesized Web Audio cues with on/off, volume and preview controls.
- **Settings dialog** – open it with `F2` (rebindable): sounds, hotkey, history limits, backups, reset to defaults.
- **Quality of life** – submit loading overlay, toasts, account-name hide toggle, review-rules dialog and an optional verdict randomizer (off by default).

## Installation

1. Install a userscript manager such as [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/) (the script uses `GM_addStyle` and `unsafeWindow`).
2. [Install DemoScope](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js) and confirm the installation in your manager.
3. Sign in to Steam and open <https://www.counter-strike.net/vacnet/>.
4. Open a review clip — DemoScope loads automatically (the `/vacnet/join` page is excluded).

## Usage

Shortcuts work on review pages whenever focus is not inside an input, button, link or select.

| Key | Action |
|---|---|
| `1` … `5` | Apply a verdict preset: 1 bot + aim + wallhack, 2 aim + wallhack, 3 rage, 4 clean player, 5 uncertain |
| `Shift` (hold) | Hold for the speed boost (0.5×–4×, default 2×, selectable on the page) |
| `←` `→` | Jump 5 seconds back / forward |
| `,` `.` | Step one frame (1/64 s) back / forward |
| `Space` | Play / pause |
| `M` / `F` | Mute / fullscreen (double-clicking the video also toggles fullscreen) |
| `Enter` ×2 | Press once to arm the submit button, press again to send the verdicts |
| `F2` | Open the settings dialog (rebindable) |

## Architecture & Functions Breakdown

DemoScope is a single self-invoking function (`@run-at document-start`, `@noframes`). `init()` chooses between the invite page and the review page and wires up the modules below. The complete reference for all 128 functions — name, responsibility, parameters and return value — is in [docs/FUNCTIONS.md](docs/FUNCTIONS.md).

| Module | Responsibility | Key functions |
|---|---|---|
| `Localization` | Resolves the UI language, looks up strings, draws flags and the language picker | `getActiveLocale`, `tr`, `settingText`, `inviteText`, `getPresetLabel`, `installLanguageSelector` |
| `Segment & player` | Reads the clip's start/end from the page, wraps Video.js/HTML5 playback, disables the site's native segment-loop timer | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | Custom seek bar, key hints, Shift speed boost, frame stepping, keyboard shortcuts | `installCustomControls`, `installPlayerEnhancements`, `isShortcutBlocked` |
| `Verdict presets` | Preset table, selection state, preset application with optional randomized order and delays | `applyPreset`, `detectActivePreset`, `syncPresetButtons`, `applyDefaultVerdicts`, `buildEnhancementBar` |
| `Submit flow` | Two-step Enter, builds `verdict_labels[]`, same-origin check, loading overlay | `invokeProceedAction`, `prepareVerdictFormForSubmit`, `submitVerdictForm`, `isSafeSubmitTarget`, `finishSubmitLoadingWhenReady` |
| `Local history` | Stores, prunes and renders per-clip and per-game history in `localStorage` | `readClipHistoryStore`, `writeClipHistoryStore`, `appendReviewHistory`, `renderClipHistory` |
| `Backups & reports` | JSON export/import, HTML report, merged report from many backups | `exportLocalHistory`, `importLocalHistory`, `exportReadableHistory`, `exportCombinedHistoryReports` |
| `Settings & sound` | Settings dialog, rebindable hotkey, Web Audio sound cues | `ensureSettingsDialog`, `openSettingsDialog`, `installSettingsUi`, `playUiSound` |
| `Invite page` | Restyled `/vacnet/createinvite`: show/hide and copy invite link, requirements | `installInvitePage` |
| `Layout & UI helpers` | Toasts, footer hiding, layout observers, account-name toggle | `enhanceLayout`, `showToast`, `watchProceedFooter`, `installAccountNameControl` |
| `Bootstrap` | Entry point: picks the page type and starts the modules | `init` |

## Local Data & Privacy

DemoScope makes no network requests and sends no telemetry. Settings and history stay in your browser's `localStorage` (keys starting with `demoscope`) and `sessionStorage`. Use **Settings → Clear history** to remove the history.

## Disclaimer

DemoScope is an unofficial community project, not affiliated with or endorsed by Valve Corporation. It never decides a verdict for you — review every clip yourself and follow the rules of the review program. Use at your own risk.

## License

Released under the [MIT](LICENSE) license.
