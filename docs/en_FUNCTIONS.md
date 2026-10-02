<div align="center">

**English** · [Български](FUNCTIONS/bg_FUNCTIONS.md) · [Magyar](FUNCTIONS/hu_FUNCTIONS.md) · [Tiếng Việt](FUNCTIONS/vi_FUNCTIONS.md) · [Ελληνικά](FUNCTIONS/el_FUNCTIONS.md) · [Dansk](FUNCTIONS/da_FUNCTIONS.md) · [Bahasa Indonesia](FUNCTIONS/id_FUNCTIONS.md) · [Español (España)](FUNCTIONS/es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](FUNCTIONS/es-419_FUNCTIONS.md) · [Italiano](FUNCTIONS/it_FUNCTIONS.md) · [繁體中文](FUNCTIONS/zh-TW_FUNCTIONS.md) · [简体中文](FUNCTIONS/zh-CN_FUNCTIONS.md) · [한국어](FUNCTIONS/ko_FUNCTIONS.md) · [Deutsch](FUNCTIONS/de_FUNCTIONS.md) · [Nederlands](FUNCTIONS/nl_FUNCTIONS.md) · [Norsk](FUNCTIONS/no_FUNCTIONS.md) · [Polski](FUNCTIONS/pl_FUNCTIONS.md) · [Português (Portugal)](FUNCTIONS/pt-PT_FUNCTIONS.md) · [Português (Brasil)](FUNCTIONS/pt-BR_FUNCTIONS.md) · [Română](FUNCTIONS/ro_FUNCTIONS.md) · [Русский](FUNCTIONS/ru_FUNCTIONS.md) · [ไทย](FUNCTIONS/th_FUNCTIONS.md) · [Türkçe](FUNCTIONS/tr_FUNCTIONS.md) · [Українська](FUNCTIONS/uk_FUNCTIONS.md) · [Suomi](FUNCTIONS/fi_FUNCTIONS.md) · [Français](FUNCTIONS/fr_FUNCTIONS.md) · [Čeština](FUNCTIONS/cs_FUNCTIONS.md) · [Svenska](FUNCTIONS/sv_FUNCTIONS.md) · [日本語](FUNCTIONS/ja_FUNCTIONS.md)

</div>

# DemoScope — Function Reference

Complete reference of the 128 top-level functions in `DemoScope.user.js` v1.0.0 (name, parameters, return value, responsibility). Back to the [README](../README.md).

Conventions: `—` means no parameters; `void` means the function is called for its side effects.

## Localization

| Function | Parameters | Returns | Responsibility |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Inline SVG markup of the flag for a locale; falls back to a globe icon. |
| `getSavedLocale` | — | `string \| null` | Reads the user's saved language (`demoscopeLanguage`) from `localStorage`. |
| `getActiveLocale` | — | `string` | Resolves the active locale: saved choice → Steam `?l=` → browser/page language → `en`. |
| `getLanguageBadge` | — | `string` | Language's own display name, e.g. “English version”, for the language picker badge. |
| `tr` | `key: string` | `string` | Looks up a UI string for the active locale (fallback: English, then the key itself). |
| `inviteText` | `key: string` | `string` | Same lookup for the invite-page string table. |
| `settingText` | `key: string` | `string` | Same lookup for the settings-dialog string table. |
| `getPresetLabel` | `name: string` | `string` | Localized label of a preset, composing combinations such as “Bot + Aim”. |
| `buildLanguageOptions` | — | `string (HTML)` | Markup of the language option buttons, including the “auto” entry. |
| `installLanguageSelector` | `root: HTMLElement` | `void` | Binds the popover language picker, positions it, stores the choice and reloads the page. |

## Sound effects & settings dialog

| Function | Parameters | Returns | Responsibility |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | “N entries · last entry: …” line shown in the settings dialog. |
| `soundsEnabled` | — | `boolean` | Whether UI sounds are enabled (`demoscopeSoundEffectsEnabled`, default on). |
| `getSoundVolume` | — | `number (0–1)` | Stored sound volume (`demoscopeSoundEffectsVolume`, default 0.4). |
| `playUiSound` | `kind = "click"` | `void` | Synthesizes a short tone sequence with Web Audio (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`); never throws. |
| `readSettingsHotkey` | — | `string` | Stored `KeyboardEvent.code` that opens the settings dialog (default `F2`). |
| `formatHotkey` | `code: string` | `string` | Human-readable key name (`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | Extracts a physical key code, mapping non-Latin layouts back to `KeyX`; `""` if unusable. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | True for keys DemoScope or the player already uses (Enter, Space, arrows, `M`, `F`, `1`–`5`, …). |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Creates (once) and wires the settings dialog: sound, volume, hotkey capture, history limits, export/import/report/merge/clear, reset. |
| `openSettingsDialog` | `opener = null` | `void` | Opens the dialog with current values and remembers the element to return focus to. |
| `installSettingsUi` | — | `void` | Installs the global capture-phase hotkey listener (open/close dialog, rebinding) and the sound events. |
| `installUiSoundEvents` | — | `void` | Delegated click listener that plays feedback sounds for DemoScope controls. |

## Backups, reports & history limits

| Function | Parameters | Returns | Responsibility |
|---|---|---|---|
| `exportLocalHistory` | — | `void` | Downloads the whole history as `demoscope-history-YYYY-MM-DD.json`. |
| `downloadHistoryFile` | `content: string, filename: string, mimeType: string` | `void` | Triggers a file download through a temporary Blob URL. |
| `collectHistoryReportRows` | `store: object` | `Array<{vodId, ts, summary, segment}>` | Flattens and de-duplicates history entries, newest first. |
| `exportReadableHistory` | — | `void` | Downloads a standalone, localized HTML report of the history. |
| `buildReadableHistoryReport` | `rows: Array, reportTitle: string, summaryNote = ""` | `string (HTML document)` | Builds the escaped HTML report markup. |
| `setMergeReportStatus` | `statusElement: HTMLElement, message: string, state: string` | `void` | Updates the status line of the merge tool (`progress`, `success`, `warning`). |
| `exportCombinedHistoryReports` | `files: FileList \| File[], statusElement: HTMLElement, button: HTMLButtonElement` | `Promise<void>` | Validates many JSON backups (≤ 5 MB each, ≤ 100 MB total), de-duplicates entries and downloads one combined HTML report. |
| `isSafeHistoryKey` | `key: string` | `boolean` | Whitelist check for history keys (blocks `__proto__`, `constructor`, malformed keys). |
| `importLocalHistory` | `file: File` | `Promise<void>` | Validates a JSON backup, merges it into the local history (respecting limits) and refreshes the UI. |
| `readHistoryLimit` | `storageKey: string, allowedValues: number[], defaultValue: number` | `number` | Reads a numeric limit from `localStorage`, accepting only allowed values. |
| `getHistoryPerKeyLimit` | — | `number` | Entries kept per clip/game key (10/20/30/50, default 30). |
| `getHistoryTotalLimit` | — | `number` | Number of clip/game keys kept overall (100/200/300/500, default 300). |
| `readAdvancedPresetsOpen` | — | `boolean` | Whether the extended-presets drawer was left open. |

## Account name & invite page

| Function | Parameters | Returns | Responsibility |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Whether the Steam account name is currently hidden. |
| `installAccountNameControl` | — | `void` | Adds an eye toggle next to the logout link and keeps it in sync via a `MutationObserver`. |
| `installInvitePage` | — | `boolean` | Restyles `/vacnet/createinvite`: card layout, show/hide and copy link (Clipboard API with `execCommand` fallback), requirements list, language picker. Returns `false` if expected elements are missing. |

## Clip segment & player adapter

| Function | Parameters | Returns | Responsibility |
|---|---|---|---|
| `parseSegmentBounds` | — | `{startTime, endTime, duration} \| null` | Extracts `startTime`/`endTime` from the page's inline scripts. |
| `formatSegmentTime` | `seconds: number` | `string` | Formats seconds as `m:ss.cc`. |
| `getVideoElement` | — | `HTMLVideoElement \| null` | Finds the review `<video>` element. |
| `getVjsPlayer` | — | `Video.js player \| null` | Returns the page's Video.js player if available and not disposed. |
| `createPlayerAdapter` | — | `adapter \| null` | Unified API over Video.js / HTML5 video: `currentTime`, `paused`, `pause`, `play`, `playbackRate(s)`, `muted`, `on`, `isFullscreen`, `requestFullscreen`, `exitFullscreen`. |
| `waitForPlayerAdapter` | `timeoutMs = 20000` | `Promise<adapter>` | Polls every 100 ms until a player exists; rejects on timeout. |
| `clampSegment` | `time: number, bounds: object` | `number` | Clamps a time to the clip bounds. |
| `segmentProgress` | `time: number, bounds: object` | `number (0–1)` | Relative position inside the clip. |
| `installCustomControls` | `player, bounds, refreshDisplay: {current: Function}` | `void` | Adds the seek bar, time readout and shortcut hints below the video. |
| `pauseLayoutMutations` | `run: Function` | `void` | Runs a callback while layout observers are suppressed (prevents feedback loops). |
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | True when focus is in an input, textarea, select, button, link or editable element. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | Label of a speed option. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | `<option>` list for the speed selector (0.5–4×). |
| `readStoredShiftSpeed` | — | `number` | Stored Shift speed (default 2×). |
| `readStoredVerdictRandomizer` | — | `boolean` | Stored state of the verdict randomizer (default off). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | Wires playback rate handling, segment clamping/pausing, seek/frame-step/mute/fullscreen helpers and the global keyboard shortcuts (`1`–`5`, arrows, `,` `.`, Space, `M`, `F`, Shift). Internal closures: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, paint-loop helpers. |

## Verdict presets

| Function | Parameters | Returns | Responsibility |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | Selects “skip” in every verdict group that has no selection. |
| `getSelectedVerdictState` | — | `object` | Current value (`positive` / `negative` / `skip` / `null`) of `aimassist`, `wallhack`, `autobhop`, `bot`. |
| `detectActivePreset` | — | `string \| null` | Name of the preset matching the current selection. |
| `syncPresetButtons` | — | `string \| null` | Updates `aria-pressed` on preset buttons and the extended-preset badge. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | Clicks the radio inputs of a preset; with the randomizer on it shuffles the order and waits 200–600 ms between clicks. Disables preset buttons while running. |
| `normalizeVerdictLabels` | `root = document` | `void` | Strips highlight markup from verdict labels. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Adds localized titles above each verdict group. |

## Toasts, footer & submit loading

| Function | Parameters | Returns | Responsibility |
|---|---|---|---|
| `hideSiteFooter` | — | `void` | Hides the site footer. |
| `showToast` | `message: string, type = "info", duration = 1800` | `void` | Shows a non-blocking, ARIA-live toast. |
| `markSubmitPending` | — | `void` | Stores the submit timestamp and current clip id in `sessionStorage`. |
| `isSubmitPending` | — | `boolean` | Whether a submit is awaiting the next clip. |
| `clearSubmitPending` | — | `void` | Clears the pending-submit markers. |
| `showSubmitLoadingOverlay` | `message = tr("nextClip")` | `void` | Shows the full-page loading overlay. |
| `hideSubmitLoadingOverlay` | — | `void` | Hides the overlay and clears pending state. |
| `bootSubmitLoadingIfPending` | — | `void` | Re-shows the overlay on page load if a submit is pending. |
| `isReviewPageReady` | `prevVod: string, startedAt: number` | `boolean` | True when the next clip's UI and media are ready. |
| `finishSubmitLoadingWhenReady` | — | `Promise<void>` | Waits up to 30 s for the next clip, then hides the overlay (error toast on timeout). |

## Local history store

| Function | Parameters | Returns | Responsibility |
|---|---|---|---|
| `extractVodId` | — | `string` | Derives the clip/game id from the video URL. |
| `getGameKey` | — | `string` | History key for the game (`game::<id>`). |
| `getClipKey` | `bounds: object` | `string` | History key for one segment (`<id>:<start>:<end>`). |
| `normalizeHistoryEntry` | `entry: any` | `{ts, summary, segment} \| null` | Validates and sanitizes one history entry. |
| `readHistoryEntries` | `store: object, key: string` | `Array` | Normalized entries for a key. |
| `getGameHistoryEntries` | `store: object` | `Array` | Entries for the current game (supports a legacy key). |
| `getClipHistoryEntries` | `store: object, bounds: object` | `Array` | Entries for the current segment. |
| `formatClipId` | `vodId: string` | `string` | Short numeric display id (`#0000000`) hashed from the clip id. |
| `formatRelativeTime` | `timestamp: number` | `string` | Localized relative time (`Intl.RelativeTimeFormat`). |
| `readClipHistoryStore` | — | `object` | Loads the history object from `localStorage` (`{}` on error). |
| `pruneHistoryStore` | `store: object` | `void` | Applies per-key and total limits (oldest keys dropped first). |
| `writeClipHistoryStore` | `store: object` | `boolean` | Prunes and saves; `false` on quota/storage errors. |
| `summarizeCurrentVerdict` | — | `string` | Preset name of the current selection, or `mixed`. |
| `formatSummaryLabel` | `summary: string` | `string` | Localized label for a history summary. |
| `formatClockTime` | `seconds: number` | `string` | `m:ss` (or `x.xs`) clock format. |
| `formatHumanSegment` | `bounds: object` | `string` | Readable segment range. |
| `formatGameLabel` | — | `string` | Localized label of the current game. |
| `historyEntryKey` | `entry: object` | `string` | Identity string used for de-duplication. |
| `formatPriorStat` | `count: number, label: string` | `string` | “label: N” line in the history panel. |
| `buildHistoryListItems` | `clipEntries: Array, gameEntries: Array, currentSegment: string` | `Array` | Merges clip/game entries into display items. |
| `renderHistoryItem` | `item: object` | `string (HTML)` | Markup of one history row. |
| `escapeHtml` | `value: any` | `string` | Escapes `& < > " '`. |
| `buildClipHistoryPanel` | `bounds, gameEntries, clipEntries` | `string (HTML)` | Markup of the history panel, including the review-rules button. |
| `ensureClipHistoryPanel` | — | `void` | Creates the panel container if missing. |
| `ensureReviewRulesDialog` | — | `void` | Creates the review-rules dialog and binds its open/close buttons. |
| `installLocalHistoryButton` | `panel: HTMLElement` | `void` | Binds the “local history” button (scrolls to the list or shows an empty-state toast). |
| `positionClipHistoryPanel` | — | `void` | Keeps the panel first inside `.verdicts-container`. |
| `renderClipHistory` | `bounds: object \| null` | `void` | Re-renders the history panel for the current clip. |
| `appendReviewHistory` | `bounds: object \| null` | `void` | Appends the current verdict summary to the game and clip history. |

## Submit flow

| Function | Parameters | Returns | Responsibility |
|---|---|---|---|
| `isLabelingMode` | — | `boolean` | True on pages that show the four verdict groups. |
| `getProceedButton` | — | `HTMLButtonElement \| null` | The native submit button if visible and enabled. |
| `recordProceedHistoryIfLabeling` | — | `void` | Records history once per submit (re-entrancy guarded). |
| `resetProceedArmed` | — | `void` | Disarms the two-step submit. |
| `refreshProceedButtonLabel` | — | `void` | Updates the button label/`Enter` hint and armed styling. |
| `verdictLabelForField` | `field: string, selected: string` | `string \| null` | Maps a selection to `guilty_*` / `innocent_*` / `skip_*`. |
| `prepareVerdictFormForSubmit` | — | `boolean` | Builds hidden `verdict_labels[]` inputs; shows an error toast and returns `false` if any group is unset. |
| `isSafeSubmitTarget` | `form: HTMLFormElement` | `boolean` | Allows only same-origin HTTPS form actions. |
| `restoreSubmitUi` | — | `void` | Restores buttons after a failed submit. |
| `submitVerdictForm` | `{ recordHistory = false }` | `boolean` | Runs safety check, shows the overlay and submits the form. |
| `submitVerdictsDirect` | — | `boolean` | Prepares labels and submits. |
| `invokeProceedAction` | — | `boolean` | Enter/click handler: first press arms, second press submits. |
| `installProceedShortcut` | — | `void` | Capture-phase `Enter`/`NumpadEnter` listener. |
| `hookProceedButton` | — | `void` | Replaces the native submit button's click behavior. |
| `installVerdictChangeReset` | — | `void` | Disarms submit and resyncs presets when a verdict changes. |
| `scheduleProceedFooterFix` | — | `void` | Debounced (`requestAnimationFrame`) call of `fixProceedFooter`. |
| `scheduleVerdictLabelsFix` | — | `void` | Debounced label/title/default re-normalization. |

## Layout & bootstrap

| Function | Parameters | Returns | Responsibility |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Builds the Shift-speed selector bar. |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | Markup for one preset button. |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | Markup of the extended preset groups. |
| `buildEnhancementBar` | — | `HTMLElement` | Builds the quick-verdict bar: presets, randomizer toggle, extended drawer. |
| `positionShiftSpeedBar` | — | `void` | Keeps the speed bar before the verdict list. |
| `positionEnhancementBar` | — | `void` | Keeps the preset bar before the submit buttons. |
| `fixProceedFooter` | — | `void` | Re-arranges footer, bars and the submit button. |
| `enhanceLayout` | — | `void` | Applies all layout changes and installs the settings UI. |
| `watchProceedFooter` | — | `void` | Observes `.verdicts-container` and schedules footer fixes. |
| `watchVerdictLabels` | — | `void` | Observes verdict labels and schedules re-normalization. |
| `init` | — | `Promise<void>` | Entry point: account-name control → invite page or review page → layout, observers, shortcuts, player enhancements. |

### Not listed above

* **`blockSegmentLoopGuard`** (IIFE, runs at load): wraps `setInterval` on the page so the site's native 100 ms segment-loop timer is replaced by a no-op; DemoScope's own controls handle the segment instead.
* **Constants & tables:** `SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC` (`PRESETS`: 21 definitions).
