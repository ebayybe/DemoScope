<div align="center">

[English](../README.md) · [Български](bg_README.md) · [Magyar](hu_README.md) · [Tiếng Việt](vi_README.md) · [Ελληνικά](el_README.md) · [Dansk](da_README.md) · [Bahasa Indonesia](id_README.md) · [Español (España)](es-ES_README.md) · [Español (Latinoamérica)](es-419_README.md) · [Italiano](it_README.md) · **繁體中文** · [简体中文](zh-CN_README.md) · [한국어](ko_README.md) · [Deutsch](de_README.md) · [Nederlands](nl_README.md) · [Norsk](no_README.md) · [Polski](pl_README.md) · [Português (Portugal)](pt-PT_README.md) · [Português (Brasil)](pt-BR_README.md) · [Română](ro_README.md) · [Русский](ru_README.md) · [ไทย](th_README.md) · [Türkçe](tr_README.md) · [Українська](uk_README.md) · [Suomi](fi_README.md) · [Français](fr_README.md) · [Čeština](cs_README.md) · [Svenska](sv_README.md) · [日本語](ja_README.md)

# DemoScope — CS2 Review Toolkit

![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-orange)

**專為 CS2 VACNet 審查員打造、以鍵盤操作為主的 userscript 工具組：判定預設、具備片段感知的影片播放器、邀請頁面增強、音效與私人本機歷史記錄 — 支援 29 種語言。**

</div>

## 概覽

DemoScope 強化了 Counter-Strike VACNet 審查頁面（`counter-strike.net/vacnet`）。不必為每個短片段逐一點擊四個判定群組（aim assist、wallhack、auto-bhop、bot），而是採用以鍵盤為主的流程：預設判定、僅限於審查片段的進度列、逐格播放、暫時加速、兩步驟送出確認，以及只屬於您的判定歷史記錄。一切都在您的瀏覽器中本機執行。

## 主要功能

- **判定預設** – 按鍵 `1`–`5` 的 5 組快速預設，另有 15 種擴充組合（aim、wallhack、bhop、bot 及其組合，包含「不確定」變體）。
- **片段感知播放器** – 進度列、時間顯示、±5 秒跳轉與 1/64 秒逐格步進，皆限制在片段的起訖範圍內。
- **按住加速** – 按住 `Shift` 以可設定的速度播放（0.5×–4×，預設 2×）。
- **安全的兩步驟送出** – 按 `Enter` 預備按鈕，再按一次 `Enter` 送出判定；會封鎖跨來源的表單目標。
- **29 種語言介面** – 依 Steam 的 `?l=` 參數、您儲存的選擇或瀏覽器語言決定，並提供頁面內語言選擇器。
- **本機審查歷史記錄** – 以片段與對局分別記錄於 `localStorage`；支援 JSON 匯出/匯入、HTML 報告，以及將多份備份合併為單一報告。
- **邀請頁面增強** – 重新設計的 `/vacnet/createinvite`，可顯示/隱藏並一鍵複製邀請連結，另附條件摘要。
- **音效** – 以 Web Audio 合成的提示音，可開關並調整音量與試聽。
- **設定對話框** – 以 `F2` 開啟（可重新指定）：音效、快速鍵、歷史上限、備份、還原預設值。
- **便利功能** – 送出後的載入遮罩、提示訊息、隱藏帳號名稱開關、審查規則對話框，以及選用的判定隨機化（預設關閉）。

## 安裝

1. 安裝 userscript 管理器，例如 [Tampermonkey](https://www.tampermonkey.net/) 或 [Violentmonkey](https://violentmonkey.github.io/)（腳本使用 `GM_addStyle` 與 `unsafeWindow`）。
2. [安裝 DemoScope](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js)，並在管理器中確認安裝。
3. 登入 Steam 並開啟 <https://www.counter-strike.net/vacnet/>。
4. 開啟審查片段 — DemoScope 會自動載入（`/vacnet/join` 頁面除外）。

## 使用方式

只要焦點不在輸入框、按鈕、連結或下拉選單中，快速鍵就會在審查頁面上生效。

| 按鍵 | 動作 |
|---|---|
| `1` … `5` | 套用判定預設：1 機器人 + aim + wallhack、2 aim + wallhack、3 rage、4 正常玩家、5 不確定 |
| `Shift` (hold) | 按住以加速（0.5×–4×，預設 2×，可在頁面上選擇） |
| `←` `→` | 向後 / 向前跳 5 秒 |
| `,` `.` | 向後 / 向前一格（1/64 秒） |
| `Space` | 播放 / 暫停 |
| `M` / `F` | 靜音 / 全螢幕（在影片上按兩下也可切換全螢幕） |
| `Enter` ×2 | 按一次預備送出按鈕，再按一次送出判定 |
| `F2` | 開啟設定對話框（可重新指定） |

## 架構與函式說明

DemoScope 是單一的自我執行函式（`@run-at document-start`、`@noframes`）。`init()` 會在邀請頁面與審查頁面之間做選擇，並串接以下模組。全部 143 個函式的完整參考（名稱、職責、參數與回傳值）請見 [zh-TW_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/zh-TW_FUNCTIONS.md).

| 模組 | 職責 | 主要函式 |
|---|---|---|
| `Localization` | 決定介面語言、查詢字串、繪製旗幟與語言選擇器 | `getActiveLocale`, `tr`, `settingText`, `inviteText`, `getPresetLabel`, `installLanguageSelector` |
| `Segment & player` | 從頁面讀取片段起訖、封裝 Video.js/HTML5 播放、停用網站原生的片段循環計時器 | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | 自訂進度列、按鍵提示、Shift 加速、逐格步進、鍵盤快速鍵 | `installCustomControls`, `installPlayerEnhancements`, `isShortcutBlocked` |
| `Verdict presets` | 預設表、選取狀態、套用預設（可選擇隨機順序與延遲） | `applyPreset`, `detectActivePreset`, `syncPresetButtons`, `applyDefaultVerdicts`, `buildEnhancementBar` |
| `Submit flow` | 兩步驟 Enter、建立 `verdict_labels[]`、同源檢查、載入遮罩 | `invokeProceedAction`, `prepareVerdictFormForSubmit`, `submitVerdictForm`, `isSafeSubmitTarget`, `finishSubmitLoadingWhenReady` |
| `Local history` | 在 `localStorage` 中儲存、修剪並顯示各片段與各對局的歷史記錄 | `readClipHistoryStore`, `writeClipHistoryStore`, `appendReviewHistory`, `renderClipHistory` |
| `Backups & reports` | JSON 匯出/匯入、HTML 報告、由多份備份合併的報告 | `exportLocalHistory`, `importLocalHistory`, `exportReadableHistory`, `exportCombinedHistoryReports` |
| `Settings & sound` | 設定對話框、可重新指定的快速鍵、Web Audio 提示音 | `ensureSettingsDialog`, `openSettingsDialog`, `installSettingsUi`, `playUiSound` |
| `Invite page` | 重新設計的 `/vacnet/createinvite`：顯示/隱藏並複製邀請連結、條件說明 | `installInvitePage` |
| `Layout & UI helpers` | 提示訊息、隱藏頁尾、版面觀察器、帳號名稱開關 | `enhanceLayout`, `showToast`, `watchProceedFooter`, `installAccountNameControl` |
| `Bootstrap` | 進入點：判斷頁面類型並啟動各模組 | `init` |

## 本機資料與隱私

DemoScope 不會傳送遙測資料。設定與歷史記錄只保存在瀏覽器的 `localStorage`（以 `demoscope` 開頭的鍵）與 `sessionStorage` 中。若要刪除歷史記錄，請使用設定對話框中的清除歷史記錄選項。

## 免責聲明

DemoScope 是非官方的社群專案，與 Valve Corporation 無關，亦未獲其認可。它絕不會替您做出判定 — 請親自審查每個片段，並遵守審查計畫的規則。使用風險自負。

## License

以 [MIT](../LICENSE) 授權條款發佈。