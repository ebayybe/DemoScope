<div align="center">

**English** · [Български](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/bg_FUNCTIONS.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/hu_FUNCTIONS.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/vi_FUNCTIONS.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/el_FUNCTIONS.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/da_FUNCTIONS.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/id_FUNCTIONS.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/es-419_FUNCTIONS.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/it_FUNCTIONS.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/zh-TW_FUNCTIONS.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/zh-CN_FUNCTIONS.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ko_FUNCTIONS.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/de_FUNCTIONS.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/nl_FUNCTIONS.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/no_FUNCTIONS.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/pl_FUNCTIONS.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/pt-PT_FUNCTIONS.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/pt-BR_FUNCTIONS.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ro_FUNCTIONS.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ru_FUNCTIONS.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/th_FUNCTIONS.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/tr_FUNCTIONS.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/uk_FUNCTIONS.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/fi_FUNCTIONS.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/fr_FUNCTIONS.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/cs_FUNCTIONS.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/sv_FUNCTIONS.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ja_FUNCTIONS.md)

</div>

# DemoScope — Function Reference

Reference for all 217 top-level functions in the current `DemoScope.user.js` (v1.4.0), with names, parameters, return values, and responsibilities. The overview below explains the user-facing behavior; the tables document implementation details. Back to the [README](../README.md).

Conventions: `—` means no parameters; `void` means the function is called for its side effects.

## User-facing behavior

| Area | What it does |
|---|---|
| Supported pages | Enhances the VACNet welcome page (`/vacnet`), review pages (`/vacnet/clips`), the invite page (`/vacnet/createinvite`), and the no-clips state on the review route. It leaves unrelated pages alone. |
| Task types | Detects which review form VACNet serves. The **classic form** (aim assist, wallhack, auto-bhop, bot) gets presets and extended combinations. The newer **single-question task** (“Is the Subject cheating beyond a reasonable doubt?”) gets a compact layout instead: three labelled verdicts on keys `1`–`3`, a lock indicator with the remaining clip time, and no quick verdicts or combinations. |
| Language | Supports 29 Steam languages. A saved manual choice takes priority; otherwise the script follows the Steam `?l=` parameter, then the browser/page language. Choosing a language in DemoScope also passes the matching `?l=` to VACNet, so VACNet's own text (verdict buttons, questions) follows it. Automatic mode keeps Steam's language parameter in sync with the browser. |
| Welcome and invite pages | Restyles both pages, adds the shared language picker, and hides the account name with an eye toggle. The welcome page continues with Enter or Space when focus is outside an interactive control. The invite page can hide/reveal and copy the invite link, explains the invite requirements, and has a close (×) button; `Enter` acts as “Done” and `Esc` as ×. |
| Clip review | Adds verdict presets and expanded combinations, a verdict randomizer (off by default), a configurable Shift playback speed, segment-bounded seeking, frame stepping, and playback shortcuts. Verdict categories have a “?” button with a localized explanation. Key phrases in verdict buttons are highlighted in the DemoScope palette. |
| Hotkeys | Every shortcut is an action in one registry and can be reassigned in **Settings → Hotkeys**. Conflicts are detected per page (the invite page and the review pages do not clash) and shown with the action, group and description that already use the key; you can replace, swap or cancel. Each action has a reset button, and key hints on the page follow your bindings. |
| Submit action | `Enter` or `Numpad Enter` (default) activates “Continue”. On the classic form, the first press arms the action and the next submits the verdicts. On the single-question task, selecting a verdict shows VACNet's own confirmation, and `Enter` confirms it. `Esc` (default) presses “Cancel” while a verdict awaits confirmation, or disarms the first press. Space is not a submit shortcut. |
| Settings | `F2` opens the settings dialog by default (rebindable in the Hotkeys window). Sections: Hotkeys, Animations, sound effects and volume, local history (enable, limits, 12/24-hour format, backups), footer visibility, diagnostics and a single reset for sound, hotkeys and animations. |
| Animations | The indicator dot next to “DemoScope” can be animated. A separate window offers six styles (pulse, breathe, ripple, heartbeat, orbit, blink) with live previews, three speeds and an on/off switch. With “reduce motion” enabled in the operating system, animations start switched off. |
| Local history | Stores verdict summaries in this browser's `localStorage`; it is not uploaded by DemoScope. History can be disabled, imported, exported as JSON or HTML, combined from JSON backups into one HTML report, or cleared. Limits are configurable: 10/20/30/50 entries per key and 100/200/300/500 keys total. Disabling history stops new entries; it does not erase existing data. History is recorded for the classic form only. |
| Empty queue | Replaces VACNet's empty-queue message with localized guidance, a browser-local first-seen date/time, and a language picker. The 250 demos/day text is informational based on observed VACNet behavior; DemoScope neither enforces nor bypasses that service limit. |
| Footer | Uses a localized DemoScope footer. On clip pages it can show feedback and report links; settings can hide each link, the copyright line, or the whole footer. |
| Resilience | Each setup step runs in isolation, so one failure cannot stop the others. Key elements are looked up with fallbacks. If the page is no longer recognizable, DemoScope switches itself off on that page, restores VACNet's own layout, and shows a short notice. **Settings → Diagnostics** copies a text report (script version, which expected elements were found, step failures and the page structure) for bug reports. |

The script does not change VACNet's server-side invite eligibility, verdict processing, or viewing limits. Local history, language, and interface preferences remain in the browser profile.

## Localization

| Function | Parameters | Returns | Responsibility |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | Inline SVG markup of the flag for a locale; falls back to a globe icon. |
| `getSavedLocale` | — | `string \| null` | Reads the user's saved language (`demoscopeLanguage`) from `localStorage`. |
| `getActiveLocale` | — | `string` | Resolves the active locale: saved choice → Steam `?l=` → browser/page language → `en`. |
| `getLanguageBadge` | — | `string` | Language's own display name, e.g. “English version”, for the language picker badge. |
| `getBrowserLocale` | — | `string \| null` | Finds the first supported browser language, including regional Chinese and Latin American Spanish variants. |
| `syncAutomaticLanguage` | — | `boolean` | When automatic language is enabled, synchronizes VACNet's `?l=` parameter with the browser language and navigates if it differs. |
| `getRenderedSteamLanguage` | — | `string \| null` | Reads the Steam language VACNet actually rendered the page in, taken from the `l=` parameter of the page's own stylesheet and script URLs. |
| `syncSelectedLanguage` | — | `boolean` | When a language was chosen manually in DemoScope, re-requests the page once with the matching `?l=` so VACNet's own text follows it. Skipped when the rendered language already matches; guarded against redirect loops. Returns `true` if it navigated. |
| `tr` | `key: string` | `string` | Looks up a UI string for the active locale (fallback: English, then the key itself). |
| `inviteText` | `key: string` | `string` | Same lookup for the invite-page string table. |
| `settingText` | `key: string` | `string` | Same lookup for the settings-dialog string table. |
| `getPresetLabel` | `name: string` | `string` | Localized label of a preset, composing combinations such as “Bot + Aim”. |
| `buildLanguageOptions` | `{ activeLocale = getActiveLocale(), selectedLocale = null } = {}` | `string (HTML)` | Markup of the language option buttons, including the “auto” entry. |
| `installLanguageSelector` | `root: HTMLElement, onLocaleSelect: Function \| null = null` | `void` | Binds and positions the language picker and stores the choice. On VACNet pages it navigates with the matching `?l=` parameter; an optional callback can handle selection instead. |
| `queueNoticeText` | `key: string, locale = getQueueNoticeLocale()` | `string` | Looks up a localized empty-queue or footer string for the given locale. |

## Sound effects & settings dialog

| Function | Parameters | Returns | Responsibility |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | “N entries · last entry: …” line shown in the settings dialog. |
| `soundsEnabled` | — | `boolean` | Whether UI sounds are enabled (`demoscopeSoundEffectsEnabled`, default on). |
| `getSoundVolume` | — | `number (0–1)` | Stored sound volume (`demoscopeSoundEffectsVolume`, default 0.4). |
| `playUiSound` | `kind = "click"` | `void` | Synthesizes a short tone sequence with Web Audio (`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`); never throws. |
| `readSettingsHotkey` | — | `string` | Stored `KeyboardEvent.code` that opens the settings dialog (default `F2`); `""` when the shortcut was removed in the Hotkeys window. |
| `formatHotkey` | `code: string` | `string` | Human-readable key name (`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | Extracts a physical key code, mapping non-Latin layouts back to `KeyX`; `""` if unusable. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | True for keys that can never be bound (Tab, modifier keys, Caps Lock, `F5`, `F11`, `F12`, …). Clashes with other actions are checked by `findKeyConflict`. |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | Creates and wires the settings dialog: sound toggle/volume and preview, local-history toggle and limits, time format, JSON import/export, HTML export/merge, history clear, footer visibility options and the reset button. `installExtraSettingsSections` adds the Hotkeys, Animations, Diagnostics and Reset sections. |
| `openSettingsDialog` | `opener = null` | `void` | Opens the dialog with current values and section summaries, and remembers the element to return focus to. |
| `installSettingsUi` | — | `void` | Installs the capture-phase settings hotkey listener (open/close; ignored while a sub-window is open or a key is being captured) and delegated sound events. |
| `installUiSoundEvents` | — | `void` | Delegated click listener that plays feedback sounds for DemoScope controls. |
| `ensureSettingsLayoutStyles` | — | `void` | Injects the styles of the settings window (left-aligned sections, entry rows with summary chips). |
| `refreshSettingsSummaries` | — | `void` | Updates the summary chips of the Hotkeys (“Changed: N” / “Defaults”) and Animations (“Style · speed” / “Off”) entries. |
| `installExtraSettingsSections` | `settingsDialog: HTMLDialogElement` | `void` | Adds the Hotkeys and Animations entries on top, the Diagnostics section and the Reset section at the bottom, and hides the former settings-key block (that key is now edited in the Hotkeys window). |

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

## Account name & invite page

| Function | Parameters | Returns | Responsibility |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Whether the Steam account name is currently hidden. |
| `installAccountNameControl` | — | `void` | Adds an eye toggle next to the logout link and keeps it in sync via a `MutationObserver`. |
| `installInvitePage` | — | `boolean` | Restyles `/vacnet/createinvite` with a responsive card, show/hide and copy controls, invite requirements, language picker, close button, shortcuts and localized custom footer. Returns `false` if required page elements are missing. |
| `installInviteExtras` | `card: HTMLElement, doneLink: HTMLElement \| null` | `void` | Adds the close (×) button and a capture-phase listener for the `inviteDone` (default `Enter`) and `inviteClose` (default `Esc`) actions. Ignores keys while a button, link, field, modal or the language list has focus. |
| `refreshInviteKeyLabels` | — | `void` | Re-renders the “Done” label with its key badge and the × tooltip from the current bindings. |
| `installWelcomePage` | — | `boolean` | Restyles the VACNet welcome page, adds branding and the shared language picker, and supports Enter/Space to continue. Returns `false` if required page elements are missing. |

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
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | True when focus is in an input, textarea, select, or editable text region. |
| `isPlayerShortcutBlocked` | `target: EventTarget` | `boolean` | Like `isShortcutBlocked`, but lets verdict radio buttons through, because focus stays on a radio after a verdict is clicked. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | Label of a speed option. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | `<option>` list for the speed selector (0.5–4×). |
| `readStoredShiftSpeed` | — | `number` | Stored Shift speed (default 2×). |
| `readStoredVerdictRandomizer` | — | `boolean` | Stored state of the verdict randomizer (default off). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | Wires playback rate handling, segment clamping/pausing, seek/frame-step/mute/fullscreen helpers and the keyboard shortcuts. Keys are resolved through the key registry (defaults: `1`–`5`, arrows, `,` `.`, Space, `M`, `F`, Shift) and claimed so the page and Video.js never toggle a second time. Internal closures: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, paint-loop helpers. |

## Verdict presets

| Function | Parameters | Returns | Responsibility |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | Selects “skip” in every verdict group that has no selection. |
| `getSelectedVerdictState` | — | `object` | Current value (`positive` / `negative` / `skip` / `null`) of `aimassist`, `wallhack`, `autobhop`, `bot`. |
| `detectActivePreset` | — | `string \| null` | Name of the preset matching the current selection. |
| `syncPresetButtons` | — | `string \| null` | Updates `aria-pressed` on preset buttons and the extended-preset badge. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | Clicks the radio inputs of a preset; with the randomizer on it shuffles the order and waits 200–600 ms between clicks. Disables preset buttons while running. |
| `readAdvancedPresetsOpen` | — | `boolean` | Reads whether the extended-presets drawer was left open. |
| `normalizeVerdictLabels` | `root = document` | `void` | Unwraps `<b>` emphasis in verdict labels; key-phrase highlights are kept and coloured by the stylesheet. |
| `applyVerdictSectionTitles` | `root = document` | `void` | Adds localized titles above each verdict group together with the “?” help button, and localizes the single-question labels. |
| `ensureVerdictHelp` | `block: HTMLElement, titleEl: HTMLElement, title: string, field: string` | `void` | Creates the “?” button and the explanation popover for one verdict group, using DemoScope's own localized text (VACNet's wording is only a fallback). |
| `closeVerdictHelp` | `except = null` | `void` | Closes every open explanation popover except the given one. |
| `installVerdictHelpHandlers` | — | `void` | One-time delegated click, outside-click and `Esc` handling for the popovers. |

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
| `isReviewPageReady` | `prevVod: string, startedAt: number` | `boolean` | True when the next clip's UI (any verdict radio form, classic or single-question) and the media metadata are ready. |
| `finishSubmitLoadingWhenReady` | — | `Promise<void>` | Waits up to 30 s for the next clip, then hides the overlay (error toast on timeout). Hides it silently after 3 s when the page is not a clip page at all. |

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
| `isLocalHistoryEnabled` | — | `boolean` | Reads whether local history is enabled (enabled by default). |
| `readTimeFormat` | — | `string` | Reads the preferred clock format: automatic, 12-hour, or 24-hour. |
| `formatQueueFirstSeen` | `timestamp: number, locale = getActiveLocale()` | `string` | Formats the time the empty-queue state was first seen, using the selected locale and time format. |
| `getQueueNoticeLocale` | — | `string` | Returns the active locale used by the empty-queue notice. |
| `migrateEmptyQueueLanguage` | — | `boolean` | Migrates the former empty-queue-only language choice to the shared language setting and synchronizes the URL. |
| `updateEmptyQueueTimestamp` | — | `void` | Refreshes the displayed first-seen timestamp on the empty-queue notice. |

## Submit flow

| Function | Parameters | Returns | Responsibility |
|---|---|---|---|
| `isLabelingMode` | — | `boolean` | True on pages that show the four verdict groups. |
| `getProceedButton` | — | `HTMLButtonElement \| null` | The native submit button if visible and enabled. |
| `recordProceedHistoryIfLabeling` | — | `void` | Records history once per submit (re-entrancy guarded). |
| `resetProceedArmed` | — | `void` | Disarms the two-step submit. |
| `refreshProceedButtonLabel` | — | `void` | Updates the button label and key badge (from the configured binding), armed styling and the Cancel button badge. |
| `verdictLabelForField` | `field: string, selected: string` | `string \| null` | Maps a selection to `guilty_*` / `innocent_*` / `skip_*`. |
| `prepareVerdictFormForSubmit` | — | `boolean` | Builds hidden `verdict_labels[]` inputs; shows an error toast and returns `false` if any group is unset. |
| `isSafeSubmitTarget` | `form: HTMLFormElement` | `boolean` | Allows only same-origin HTTPS form actions. |
| `restoreSubmitUi` | — | `void` | Restores buttons after a failed submit. |
| `submitVerdictForm` | `{ recordHistory = false } = {}` | `boolean` | Runs safety check, shows the overlay and submits the form. |
| `submitVerdictsDirect` | — | `boolean` | Prepares labels and submits. |
| `invokeProceedAction` | — | `boolean` | Enter/click handler: first press arms, second press submits. |
| `installProceedShortcut` | — | `void` | Capture-phase listener for the `proceed` and `cancel` actions (default `Enter`/`Numpad Enter` and `Esc`); ignored while a modal is open or a key is being captured. |
| `invokeCancelAction` | — | `boolean` | Disarms the first press of the two-step submit, or clicks the visible “Cancel” button; `false` when there is nothing to cancel. |
| `refreshCancelButtonLabel` | — | `void` | Adds or updates the key badge on the “Cancel” button. |
| `hookProceedButton` | — | `void` | Replaces the native submit button's click behavior. |
| `installVerdictChangeReset` | — | `void` | Disarms submit and resyncs presets when a verdict changes. |
| `scheduleProceedFooterFix` | — | `void` | Debounced (`requestAnimationFrame`) call of `fixProceedFooter`. |
| `scheduleVerdictLabelsFix` | — | `void` | Debounced label/title/default re-normalization. |

## Hotkey registry & remapping

| Action | Default | Group | What it does |
|---|---|---|---|
| `playPause` | `Space` | Playback | Pauses or resumes the clip. |
| `mute` | `M` | Playback | Mutes or unmutes. |
| `fullscreen` | `F` | Playback | Enters or leaves fullscreen. |
| `seekBack` / `seekForward` | `←` / `→` | Navigation | Jumps 5 seconds back / forward. |
| `frameBack` / `frameForward` | `,` / `.` | Navigation | Steps one frame back / forward. |
| `speedBoost` | `Shift` | Navigation | Plays faster while held (the only action that may use `Shift`). |
| `quick1` … `quick5` | `1` … `5` | Verdicts | Classic form: presets 1–5. Single-question task: Cheating / Not sure / No cheats seen (`1`–`3`). |
| `proceed` | `Enter` | Submission | Confirms the verdict / arms and sends the classic form. |
| `cancel` | `Esc` | Submission | Presses “Cancel”, or disarms the first `Enter`. |
| `inviteDone` | `Enter` | Invite page | Leaves the invite page (same as “Done”). |
| `inviteClose` | `Esc` | Invite page | Same as the × button. |
| `settings` | `F2` | Interface | Opens or closes the settings dialog. |

Bindings are stored as `KeyboardEvent.code` values under `demoscopeKeybindings` (only changes from the defaults; the settings key keeps its own entry). Left/right modifiers count as one key and the numpad mirrors the main row. Keys that cannot be bound: `Tab`, `Ctrl`, `Alt`, `Meta`, `Caps Lock`, `ContextMenu`, `F5`, `F11`, `F12`. Conflicts are scoped: `review` actions, `invite` actions and the `global` settings key (which clashes with everything).

| Function | Parameters | Returns | Responsibility |
|---|---|---|---|
| `fmt` | `template: string, vars = {}` | `string` | Replaces `{name}` placeholders in a localized template. |
| `isModalOpen` | — | `boolean` | True while any `<dialog>` is open; page shortcuts stay silent then. |
| `normalizeKeyCode` | `code: string` | `string` | Folds left/right modifiers into one key and maps numpad digits and `NumpadEnter` to their main-row equivalents. |
| `formatKeyLabel` | `code: string` | `string` | Display name of a key (`ArrowLeft` → `←`, `KeyM` → `M`, `Escape` → `Esc`). |
| `loadKeyOverrides` | — | `object` | Reads and validates the saved bindings (cached; `{}` on error). |
| `saveKeyOverrides` | `overrides: object` | `void` | Saves the bindings, or removes the entry when everything is default. |
| `getBinding` | `id: string` | `string` | Current key of an action; `""` when it is unassigned. |
| `setBinding` | `id: string, code: string` | `void` | Stores a key for an action (an empty code unassigns it); default values are not persisted. |
| `resetAllBindings` | — | `void` | Restores every binding, including the settings key, to its default. |
| `findKeyConflict` | `id: string, code: string` | `object \| null` | The other action that already uses the key within an overlapping scope. |
| `getActionForEvent` | `event: KeyboardEvent, scope = currentKeyScope()` | `string \| null` | Resolves a key event to an action id for the current page scope. |
| `keyScopeOf` | `id: string` | `string` | Scope of an action: `review`, `invite` or `global`. |
| `keyScopesOverlap` | `a: string, b: string` | `boolean` | True when two scopes can clash (same scope, or either is `global`). |
| `currentKeyScope` | — | `string` | `invite` on the invite page, `review` otherwise. |
| `validateKeyForAction` | `id: string, code: string` | `string` | `""` if the key may be bound, `"reserved"` for browser/navigation keys, `"shift"` when `Shift` is chosen for a non-hold action. |
| `quickRangeLabel` | `count: number` | `string` | Label for the quick-verdict keys (`1–5` when untouched, otherwise the keys joined). |
| `buildHintsInnerMarkup` | — | `string (HTML)` | Key hints shown under the video, built from the current bindings. |
| `refreshKeyLabels` | — | `void` | Refreshes every on-page key label (hints, preset badges, verdict badges, Continue/Cancel/invite badges, settings summaries). |
| `ensureDemoscopeDialogStyles` | — | `void` | Injects the shared look of the Hotkeys and Animations windows. |
| `hkActionName` | `id: string` | `string` | Localized action name. |
| `hkGroupName` | `group: string` | `string` | Localized group name. |
| `hkActionDescription` | `id: string` | `string` | Localized description of what an action does (quick verdicts are described for both task types). |
| `hkSetMessage` | `text: string, warn = false` | `void` | Sets the status line of the Hotkeys window. |
| `hkCancelCapture` | — | `void` | Leaves key-capture mode. |
| `hkRowMarkup` | `action: object` | `string (HTML)` | Markup of one action row, including the conflict panel when one is pending. |
| `renderHotkeys` | — | `void` | Re-renders the whole window and keeps the scroll position. |
| `hkCommit` | `actionId: string, code: string, mode = "replace"` | `void` | Assigns a key; `replace` unassigns the other action, `swap` gives it the previous key of this action. |
| `hkRequestAssign` | `actionId: string, code: string` | `void` | Assigns a key directly, or opens the conflict panel (Replace / Swap / Cancel) when it is taken. |
| `ensureHotkeysDialog` | — | `HTMLDialogElement` | Creates the Hotkeys window and its capture-phase key listener (`Esc` can be assigned; it does not close the window while capturing). |
| `openHotkeysDialog` | — | `void` | Opens the Hotkeys window. |

## Animations

Six indicator styles (`pulse`, `breathe`, `ripple`, `heartbeat`, `orbit`, `blink`), three speeds (0.6× / 1× / 1.7×) and an on/off switch, stored as `demoscopeAnimStyle`, `demoscopeAnimSpeed` and `demoscopeAnimEnabled`. The active style is set as `data-ds-anim` on `<html>` (`off` when disabled), so the stylesheet drives both the live dot and the previews.

| Function | Parameters | Returns | Responsibility |
|---|---|---|---|
| `readStorage` | `key: string` | `string \| null` | Safe `localStorage` read. |
| `writeStorage` | `key: string, value: string \| null` | `void` | Safe `localStorage` write (`null` removes the key). |
| `animEnabled` | — | `boolean` | Saved on/off state; defaults to off when the system asks for reduced motion. |
| `animStyle` | — | `string` | Saved style (default `pulse`). |
| `animSpeedKey` | — | `string` | Saved speed (`slow` / `normal` / `fast`, default `normal`). |
| `ensureAnimationStyles` | — | `void` | Injects the keyframes and rules shared by the live dot and the preview dots. |
| `applyAnimationSettings` | — | `void` | Applies style, speed and on/off to `<html>` and refreshes the settings summary. |
| `ensureAnimationsDialog` | — | `HTMLDialogElement` | Creates the Animations window: switch, speed, style cards with live previews, reset. |
| `openAnimationsDialog` | — | `void` | Opens the Animations window. |
| `ensureUiPolishStyles` | — | `void` | Dark, thin scrollbars and `color-scheme: dark` for the windows and the verdict list (Chromium otherwise draws a bright bar). |

## Single-question task

| Function | Parameters | Returns | Responsibility |
|---|---|---|---|
| `isCheatingMode` | — | `boolean` | True when the page serves the single-question form (`#verdictbuttons_cheating`). |
| `selectCheatingVerdict` | `kind: string` | `void` | Clicks the Cheating / Not sure / No cheats seen radio (`positive` / `skip` / `negative`); plays an error sound and shakes the lock card when the option is still locked. |
| `localizeCheatingVerdicts` | — | `void` | Rewrites the three labels in DemoScope's language and draws the key badges with CSS, so VACNet's confirmation line never contains the key digit. Also prepares the lock card. |
| `updateCheatingLock` | — | `void` | Updates the lock card (“the other two verdicts unlock when the clip ends · m:ss left”) and its progress bar; hides it once the options unlock or a verdict is chosen. |
| `startCheatingLockWatcher` | — | `void` | Starts the 250 ms timer that calls `updateCheatingLock`. |

## Resilience & diagnostics

| Function | Parameters | Returns | Responsibility |
|---|---|---|---|
| `recordFailure` | `step: string, error: any` | `void` | Logs a failed step (capped list) for the diagnostics report. |
| `safeStep` | `step: string, fn: Function, fallback?: any` | `any` | Runs one setup step; on error records it and returns the fallback so later steps still run. |
| `getVideoContainer` | — | `HTMLElement \| null` | Finds the video container, falling back to the parent of the player or `<video>` element. |
| `getVerdictContainer` | — | `HTMLElement \| null` | Finds the verdict container, falling back to the parent of the first verdict block. |
| `getSubmitArea` | — | `HTMLElement \| null` | Finds the submit/confirm area (`#submitbuttons`, `.submitbuttons` or the parent of the submit button). |
| `hasVerdictForm` | — | `boolean` | True when at least one verdict radio exists. |
| `removeEnhancements` | — | `void` | Removes DemoScope's panels, classes and footer changes and restores VACNet's footer. |
| `disableDemoScope` | `reason: string` | `void` | Switches DemoScope off on this page: rolls back, keeps only the settings window and shows a notice once per reason per session. |
| `isOwnNode` | `el: Element` | `boolean` | True for elements DemoScope created (excluded from the structure report). |
| `elementSignature` | `el: Element` | `string` | `tag#id.class[…]` signature used by the structure report; contains no text. |
| `skeletonOf` | `root: Element, maxDepth = 7, maxNodes = 170` | `string` | Compact indented tree of tags, ids and classes (identical siblings collapsed as `×N`). |
| `captureOriginalSkeleton` | — | `void` | Records the page structure before DemoScope changes anything. |
| `buildDiagnosticsReport` | — | `string` | Builds the report: version, page, language and browser, task type, 22 element checks (`ok` / `MISSING`), step failures, and the structure before and after DemoScope. No page text and no account data. |
| `fallbackCopyText` | `text: string` | `boolean` | Copies text through a temporary textarea when the Clipboard API is unavailable. |
| `copyDiagnostics` | `statusEl: HTMLElement, textarea: HTMLTextAreaElement` | `Promise<void>` | Copies the report; if copying fails it shows the text in a selectable box. |

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
| `enhanceLayout` | — | `void` | Applies all layout changes as isolated steps (`safeStep`) and installs the settings UI. |
| `ensureReviewStructure` | — | `void` | Normalizes VACNet's markup: wraps verdict blocks in `.verdicts-container-inner`, moves `#submitbuttons` into the container, and mirrors the clip counter into the header chip. Works with the old and the redesigned markup. |
| `watchProceedFooter` | — | `void` | Observes `.verdicts-container` and schedules footer fixes. |
| `watchVerdictLabels` | — | `void` | Observes verdict labels and schedules re-normalization. |
| `readFooterPreference` | `storageKey: string` | `boolean` | Reads a saved footer visibility preference from `localStorage`. |
| `saveFooterPreference` | `storageKey: string, hidden: boolean` | `void` | Saves a footer visibility preference. |
| `applyFooterPreferences` | `footer: HTMLElement \| null = document.querySelector(".demoscope-custom-footer")` | `void` | Applies individual and “hide all” preferences to footer links, copyright text, and the whole footer. |
| `installDemoScopeFooter` | `withClipLinks: boolean, locale = getActiveLocale(), showFeedback = true` | `HTMLElement` | Creates or updates the localized footer, optionally including clip links and feedback, then applies visibility preferences. |
| `installEmptyQueueNotice` | — | `boolean` | Replaces VACNet's empty-queue message with a localized notice containing guidance, the first-seen time, a language picker, and the custom footer. |
| `init` | — | `Promise<void>` | Entry point: animations and styles → account-name control → invite or welcome page, or review page. On review pages it checks that the video container and a verdict form exist (empty queue → notice; only one of them → `disableDemoScope`), then runs layout, observers, shortcuts and player enhancements. |

`installWelcomePage` and `installInvitePage` return `false` when required VACNet page elements are unavailable. `installEmptyQueueNotice` returns `false` when the page is not the empty-queue state.

### Not listed above

* **`blockSegmentLoopGuard`** (IIFE, runs at load): wraps `setInterval` on the page so the site's native 100 ms segment-loop timer is replaced by a no-op; DemoScope's own controls handle the segment instead.
* **Constants & tables:** `SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC` (`PRESETS`: 21 definitions); added since v1.0.0: `KEY_ACTIONS`, `KEY_GROUPS`, `KEY_ACTION_BY_ID`, `KEY_ACTION_SCOPE`, `RESERVED_KEY_CODES`, `CHEATING_KEYS`, `VERDICT_SECTION_TITLES`, `VERDICT_SECTION_HELP`, `ANIM_STYLES`, `ANIM_SPEEDS`.
* **Module state:** `diag` (step failures, the switch-off reason and the original page structure), `hkState` (state of the Hotkeys window) and the `SCRIPT_VERSION` constant used by the diagnostics report.
* **Strings:** every user-visible string lives in the localized tables above; the windows added in v1.2.0–v1.4.0 are translated into all 29 languages.

## Storage keys

| Key | Where | Purpose |
|---|---|---|
| `demoscopeLanguage`, `demoscopeLanguageAuto` | `localStorage` | Chosen language / automatic mode. |
| `demoscopeKeybindings` | `localStorage` | Hotkeys that differ from the defaults (JSON). |
| `demoscopeSettingsHotkey` | `localStorage` | Key that opens the settings dialog (`none` when removed). |
| `demoscopeAnimEnabled`, `demoscopeAnimStyle`, `demoscopeAnimSpeed` | `localStorage` | Indicator animation settings. |
| `demoscopeSoundEffectsEnabled`, `demoscopeSoundEffectsVolume` | `localStorage` | Sound settings. |
| `demoscopeClipHistory` and the history limit/format keys | `localStorage` | Local review history and its settings. |
| `demoscopeSubmitPending`, `demoscopeSubmitPrevVod`, `demoscopeLangSyncTried`, `demoscopeDisabledNotice` | `sessionStorage` | Submit loading state, language-sync guard, one-time “switched off” notice. |

