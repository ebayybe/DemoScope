<div align="center">

**English** · [Български](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/bg_CHANGELOG.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/hu_CHANGELOG.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/vi_CHANGELOG.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/el_CHANGELOG.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/da_CHANGELOG.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/id_CHANGELOG.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-ES_CHANGELOG.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-419_CHANGELOG.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/it_CHANGELOG.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-TW_CHANGELOG.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-CN_CHANGELOG.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ko_CHANGELOG.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/de_CHANGELOG.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/nl_CHANGELOG.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/no_CHANGELOG.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pl_CHANGELOG.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-PT_CHANGELOG.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-BR_CHANGELOG.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ro_CHANGELOG.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ru_CHANGELOG.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/th_CHANGELOG.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/tr_CHANGELOG.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/uk_CHANGELOG.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fi_CHANGELOG.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fr_CHANGELOG.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/cs_CHANGELOG.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/sv_CHANGELOG.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ja_CHANGELOG.md)

</div>

# DemoScope v1.4.0

Self-protection release: DemoScope now copes with VACNet page changes instead of breaking half-way, and tells you (and the developer) what happened.

### Added
- **Isolated setup steps.** Every layout and installation step runs on its own. If one fails, the failure is recorded and the remaining steps still run, so a single changed element no longer leaves a half-built panel.
- **Fallback lookups** for the video container, the verdict container and the submit area. If VACNet renames the video container class, DemoScope now finds it through the player element instead of giving up.
- **Graceful switch-off.** If the page has the video but not the verdict form (or the other way round), or if five or more setup steps fail, DemoScope rolls back its own changes, restores VACNet's footer, keeps only the settings window and shows a one-time notice. The empty-queue page is still recognised as before and never triggers this.
- **Diagnostics report** (Settings → Diagnostics → Copy diagnostics): script version, time, language and browser, page and task type, 22 expected-element checks (`ok` / `MISSING`), recorded step failures, and the page structure both before and after DemoScope touched it. The structure contains tags, ids and classes only, never page text. If the clipboard is blocked, the report appears in a selectable box instead.
- A short wait (up to 2 s) before judging a page that is only partly rendered.

### Localization
- 6 new strings (diagnostics section, copy results, switch-off notice) in all 29 languages.

# DemoScope v1.3.0

Settings, invite page and verdict-text polish.

### Added
- **Invite page close button.** A × in the corner of the card returns to the clips, exactly like “Done”.
- **Invite page hotkeys:** `Enter` acts as “Done” and `Esc` as ×. They are ignored while a button, link, field, dialog or the language list has focus, and the “Done” button now shows its key. Both are remappable in the Hotkeys window (new group “Invite page”).
- **Page-scoped key conflicts.** The invite page has no player, so its `Enter` / `Esc` no longer clash with the review page's `Enter` / `Esc`. The settings key still clashes with everything.
- **Dark, thin scrollbars** in the settings window, the sub-windows and the verdict list, plus `color-scheme: dark`. Brave, Chrome and Edge previously drew a bright default bar.

### Changed
- **Settings window redesigned.** Sections are ordered by how often they are used: Hotkeys, Animations, Sound effects, Local history, Footer, Diagnostics (added in 1.4.0), Reset. Everything is left-aligned like the new sub-windows. Hotkeys and Animations are entry rows with a summary chip (“Changed: 2”, “Orbit · Fast”) that updates as you change them.
- **One reset for everything.** The reset button moved into its own section and now restores sound, volume, hotkeys and animations (the confirmation text says so). Your history is kept.
- The old “settings key” block is gone from the window: that key is now edited in the Hotkeys window like every other.
- **Verdict confirmation text no longer contains the key digit.** VACNet copies the clicked label's text into its confirmation line, which produced “2Not sure” and “3No cheats seen”. The key badge is now drawn by CSS and is not part of the text.
- Option 2 of the single-question task now reads “Not sure” (Russian: “Не уверен(а)”) in the same first-person style as VACNet's “I'm sure the subject is cheating…” line.

### Localization
- 12 new strings (summaries, reset section, invite-page actions, “Not sure”) in all 29 languages.

# DemoScope v1.2.1

### Localization
- The Hotkeys and Animations windows (77 strings per language) are now translated into all 27 remaining languages. Previously only English and Russian were written out.

# DemoScope v1.2.0

Hotkeys, animations and a loading fix.

### Added
- **Hotkeys window** (Settings → Hotkeys). All 18 shortcuts live in one registry and can be reassigned. Actions are grouped (Playback, Navigation, Verdicts, Submission, Invite page, Interface), each with a description and a reset button, plus “Reset all” with a confirming second click.
  - **Conflict handling.** Pressing a key that is already in use shows which action owns it, in which group and what it does, and offers **Replace** (the other action loses its key), **Swap** (it receives your previous key) or **Cancel**.
  - `Esc` can be assigned like any other key and does not close the window while a key is being captured. `Tab`, modifier keys, Caps Lock, `F5`, `F11` and `F12` are rejected; `Shift` is accepted only for the hold action “Speed boost”.
  - Key hints under the video, preset and verdict badges and the Continue/Cancel buttons all follow your bindings.
- **`Esc` cancels** a verdict that is waiting for confirmation (it presses VACNet's “Cancel”) and disarms the first `Enter` of the two-step submit.
- **Animations window** (Settings → Animations): six indicator styles (pulse, breathe, ripple, heartbeat, orbit, blink) with live previews, three speeds and an on/off switch. If the system asks for reduced motion, animations start switched off.
- `Enter` and `Esc` now also work while a verdict radio button has focus, which is where focus lands after clicking a verdict.

### Fixed
- **Long “loading next clip” after submitting** on the single-question task. The readiness check waited for the classic form's `aimassist` input, which that task never has, so it always ran into the 30-second timeout and an error toast. Readiness now accepts any verdict form and media metadata, the check starts before the player finishes loading, and non-clip pages dismiss the overlay silently after 3 seconds.
- Page shortcuts (`Space`, `Enter`, …) no longer act on the page behind an open dialog.

### Localization
- The Hotkeys and Animations windows were written in English and Russian; the other languages followed in 1.2.1.

# DemoScope v1.1.0

Support for VACNet's single-question task.

### Added
- **Single-question task support.** VACNet now sometimes serves one question, “Is the Subject cheating beyond a reasonable doubt?”, with the answers Cheating / Uncertain / No cheats seen. DemoScope detects it and switches to a compact layout without the quick verdicts, extended combinations and randomizer.
- Verdict labels in DemoScope's own wording and language, with key badges `1`–`3`, and matching hotkeys.
- **Lock indicator.** VACNet only unlocks “Uncertain” and “No cheats seen” when the clip ends. A card now says so and shows the remaining time with a progress bar; locked options are dimmed, and pressing their key plays an error sound and shakes the card.
- Hints under the video switch to `Enter` and `1–3`; verdict buttons are taller to fill the panel.

### Localization
- 5 new strings (labels, title, explanation, lock message) in all 29 languages.

# DemoScope v1.0.6

### Added
- **DemoScope's own explanations** for the four verdict categories in all 29 languages. VACNet's question text falls back to English for some languages (Ukrainian, for example), so the “?” popovers no longer depend on it.

# DemoScope v1.0.5

### Added
- **“?” help button** next to AIM ASSIST, WALL HACK, AUTO BHOP and BOT. A click opens a small popover explaining the category; it closes on an outside click, a second click or `Esc`. The button is deliberately not keyboard-focusable, so `Enter` and `Space` keep their review meaning.

### Fixed
- The “Local history” button was oversized (it inherited the page font) and wrapped onto two lines in many languages. It now matches the neighbouring badges, never wraps, truncates very long labels and the badge row wraps instead of squeezing.

# DemoScope v1.0.4

### Fixed
- **Verdict text stayed in the browser language** after choosing another language in DemoScope. VACNet picks its own text from Steam's `?l=` parameter; DemoScope only changed its own labels. Choosing a language on a review page now navigates with the matching `?l=`, and a page reached without it (for example the next clip after Continue) is re-requested once in the selected language. The language VACNet actually used is read from the `l=` parameter of the page's own stylesheet and script URLs, and a one-attempt guard prevents redirect loops when VACNet does not offer a language.

# DemoScope v1.0.3

### Changed
- **Key-phrase highlighting is back** in the verdict buttons, in the DemoScope palette: the phrase being asked (“help with aiming”, “see through walls”, …) in the accent orange and the “not” of the negative answers in a muted blue, both bold. Selected buttons keep their tint and stay readable.
- `normalizeVerdictLabels` used to flatten every highlight into plain text. It now unwraps only `<b>` emphasis, so the highlight markup survives.

# DemoScope v1.0.2

### Fixed
- **`Space`, `M` and `F` appeared to do nothing** because VACNet / Video.js reacted to the same keys and toggled a second time (pause immediately followed by play). DemoScope now claims these keys, whether they are bound or free.
- In Firefox, a focused player button was also “clicked” when `Space` was released. That release is now swallowed too.
- Player shortcuts stay active while a verdict radio has focus.

# DemoScope v1.0.1

Compatibility with VACNet's redesigned review page.

### Fixed
- **Half-built panel after VACNet's redesign.** The page gained a portal header, an instructions card and a grid layout, stopped wrapping verdict blocks in `.verdicts-container-inner`, and moved `#submitbuttons` outside the verdict container. DemoScope's `insertBefore` then threw, and every step after it was skipped. A new `ensureReviewStructure` step normalises the markup, so both the old and the new layout work.

### Changed
- The portal header and instruction card are hidden so the panel matches the earlier look; the clip counter is mirrored into the header chip because the redesign hides the original.
- The Continue button is sticky at the bottom of the panel, so it stays visible even when long translations make the verdict list taller than the viewport.

# DemoScope v1.0.0

First public release of DemoScope, a userscript toolkit for CS2 VACNet review pages.

### Added
- Interface in 29 languages, automatic language selection, five quick verdict presets and 15 extended combinations.
- Segment-aware video controls, frame stepping, Shift speed boost, Space play/pause, M mute, F fullscreen, and two-step verdict submission with Enter.
- Configurable local review history, JSON import/export, HTML reports, and merging multiple JSON backups into one report.
- Improved invite page, sound settings, configurable settings hotkey, account-name visibility control, review-rules dialog, and optional verdict randomizer (off by default).

### Privacy
- No telemetry; local settings and history are not uploaded. Submitted verdicts go to VACNet through the normal site form.
