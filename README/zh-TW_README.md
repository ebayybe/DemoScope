<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/README/README.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/README/bg_README.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/README/hu_README.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/README/vi_README.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/README/el_README.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/README/da_README.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/README/id_README.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/README/es-ES_README.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/README/es-419_README.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/README/it_README.md) · **繁體中文** · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/README/zh-CN_README.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/README/ko_README.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/README/de_README.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/README/nl_README.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/README/no_README.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/README/pl_README.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-PT_README.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-BR_README.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/README/ro_README.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/README/ru_README.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/README/th_README.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/README/tr_README.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/README/uk_README.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/README/fi_README.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/README/fr_README.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/README/cs_README.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/README/sv_README.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/README/ja_README.md)

</div>

<br>

<div align="center">

# DemoScope

**以鍵盤操作為優先的 CS2 VACNet 審查工具組。**<br>
判定預設 · 支援片段範圍的播放器 · 可重新指定的快速鍵 · 私密本機歷史紀錄 · 29 種語言。

<br>

[![Version](https://img.shields.io/badge/version-1.2.0-3b82f6?style=flat-square)](https://github.com/ebayybe/DemoScope/releases)
[![License](https://img.shields.io/badge/license-GPL--3.0-22c55e?style=flat-square)](https://github.com/ebayybe/DemoScope/blob/main/LICENSE)
[![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-f59e0b?style=flat-square)](#安裝)
[![Languages](https://img.shields.io/badge/languages-29-8b5cf6?style=flat-square)](#語言)
[![Privacy](https://img.shields.io/badge/telemetry-none-64748b?style=flat-square)](#隱私)

<br>

[**⬇ 安裝 DemoScope**](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js)

[功能](#功能) · [安裝](#安裝) · [鍵盤快速鍵](#鍵盤快速鍵) · [自訂](#自訂) · [文件](https://github.com/ebayybe/DemoScope/blob/main/docs/zh-TW_FUNCTIONS.md) · [變更記錄](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-TW_CHANGELOG.md)

</div>

<br>

## 螢幕截圖

<table>
  <tr>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png" alt="DemoScope 歡迎畫面"></a><br><sub><b>歡迎畫面</b></sub></td>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png" alt="DemoScope 主介面"></a><br><sub><b>主介面</b></sub></td>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png" alt="DemoScope 邀請頁面"></a><br><sub><b>邀請朋友</b></sub></td>
  </tr>
</table>

## 概覽

DemoScope 改良了 Counter-Strike VACNet 審查頁面（counter-strike.net/vacnet）。不用為每段短片逐一點選判定表單，即可用鍵盤操作：判定預設、限制於審查片段的搜尋列、逐格播放、暫時加速、兩步驟送出，以及只儲存你本人判定的私密歷史紀錄。程式支援 VACNet 目前提供的兩種表單（傳統四題表單與新版單題任務）；若 Valve 修改頁面，程式會安全停用。所有功能都在瀏覽器本機執行。

## 功能

| | |
|---|---|
| **審查流程** | 1–5 鍵提供 5 個快速判定預設，另有 15 種延伸組合。隨機判定器可選，預設關閉。按 Enter 準備送出，再按一次送出；Esc 取消。 |
| **兩種任務類型** | 可辨識傳統表單（aim assist、wallhack、auto-bhop、bot）與單題「Is the Subject cheating beyond a reasonable doubt?」。新版任務使用精簡版面、1–3 鍵判定標籤，以及倒數至片段結束的鎖定指示器。 |
| **片段專用播放器** | 搜尋列與時間顯示限制在片段起訖範圍；可跳轉 ±5 秒、以 1/64 秒逐格移動、按住 Shift 暫時加速（0.5×–4×）、靜音與全螢幕快速鍵。 |
| **自訂快速鍵** | 在專用視窗重新指定 18 個動作。發生衝突時會先說明動作、群組與功能；頁面上的按鍵提示也會依設定更新。 |
| **動畫** | 即時預覽視窗提供 6 種指示器樣式、3 種速度與開關。預設遵循系統的減少動態效果設定。 |
| **清楚的判定說明** | 每個判定類別旁的「?」可顯示說明，並強調重要詞句，避免漏看「不」等字詞。 |
| **私密本機歷史紀錄** | 在 localStorage 儲存每段片段及每場遊戲的紀錄，支援 JSON 匯入/匯出、HTML 報告，以及合併多份備份。 |
| **邀請頁面** | 重新設計 /vacnet/createinvite，加入顯示/隱藏、一鍵複製、需求摘要、關閉按鈕與 Enter/Esc 快速鍵。 |
| **29 種語言** | 依序使用你選擇的語言、Steam 的 ?l= 設定、瀏覽器語言。在 DemoScope 選擇語言也會切換 VACNet 文字。 |
| **音效** | 以 Web Audio 合成提示音，提供音量、試聽與開關。 |
| **因應網站改版** | 初始化步驟彼此隔離，重要元素設有備援搜尋方式。若無法辨識頁面，DemoScope 會自行停用，不會更動 VACNet。可複製診斷報告以回報問題。 |

## 安裝

1. 安裝 [Tampermonkey](https://www.tampermonkey.net/) 或 [Violentmonkey](https://violentmonkey.github.io/) 等使用者指令碼管理器。程式使用 GM_addStyle 與 unsafeWindow。
2. [**安裝 DemoScope**](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js)，並在管理器中確認安裝。
3. 登入 Steam 並開啟 [counter-strike.net/vacnet](https://www.counter-strike.net/vacnet/)。
4. 開啟審查片段，DemoScope 便會自動執行（/vacnet/join 頁面除外）。

更新會透過使用者指令碼管理器提供。DemoScope 可在 Chromium 核心瀏覽器與 Firefox 執行。

## 鍵盤快速鍵

當焦點不在可編輯欄位或其他互動控制項時，快速鍵可在審查頁面使用。**所有按鍵都能在「設定 → 快速鍵」中變更。**

| 按鍵 | 動作 |
|---|---|
| 1–5 | 傳統表單預設：1 bot + aim + wallhack、2 aim + wallhack、3 rage、4 無違規、5 不確定。 |
| 1、2、3 | 單題任務：作弊 / 不確定 / 未發現作弊。 |
| Enter | 確認。傳統表單第一次按下會準備按鈕，再按一次才送出。 |
| Esc | 取消等待確認的判定，或取消第一次 Enter 的準備狀態。 |
| Shift（按住） | 加速（0.5×–4×，預設 2×，可在頁面選擇）。 |
| ← → | 往回 / 往前跳 5 秒。 |
| , . | 往回 / 往前移動一格（1/64 秒）。 |
| Space | 播放 / 暫停。 |
| M / F | 靜音 / 全螢幕（雙擊影片也能切換全螢幕）。 |
| F2 | 開啟設定視窗。 |
| Enter / Esc（邀請頁面） | 完成 / 關閉。 |

## 自訂

按 F2 開啟設定視窗，項目依使用頻率排列：

- **快速鍵**：專用視窗依用途分組動作，可個別重設或「全部重設」。衝突時可選擇**取代**、**交換**或**取消**。Esc 也可指派。
- **動畫**：選擇樣式（脈動、呼吸、漣漪、心跳、環繞、閃爍）、速度，或關閉動畫。每張卡片皆有即時預覽。
- **音效**：開/關、音量（滑鼠滾輪也可調整）與測試按鈕。
- **本機歷史紀錄**：開/關、項目與索引數量上限、12/24 小時制、JSON 備份與 HTML 報告。
- **頁尾**：隱藏意見回饋連結、報告連結、著作權文字或整個頁尾。
- **診斷**：複製問題回報用報告（請參閱[回報問題](#回報問題)）。
- **重設**：一鍵還原音效、快速鍵與動畫預設值。歷史紀錄會保留。

## 語言

DemoScope 支援 29 種語言：保加利亞語、簡體與繁體中文、捷克語、丹麥語、荷蘭語、英語、芬蘭語、法語、德語、希臘語、匈牙利語、印尼語、義大利語、日語、韓語、挪威語、波蘭語、葡萄牙語（葡萄牙與巴西）、羅馬尼亞語、俄語、西班牙語（西班牙與拉丁美洲）、瑞典語、泰語、土耳其語、烏克蘭語與越南語。可隨時透過頁面中的選單切換。

## 回報問題

Valve 可能不事先通知就修改 VACNet 頁面。如果有功能無法使用：

1. 按 F2 開啟**診斷**，再按**複製診斷**。
2. 將文字貼到新的 [issue](https://github.com/ebayybe/DemoScope/issues)，並盡可能附上螢幕截圖。

報告包含程式版本、時間、瀏覽器語言與 user-agent、找到的預期頁面元素、失敗的初始化步驟，以及頁面結構（只有標籤、id 與 class）。不包含頁面文字、帳戶名稱或歷史紀錄。若頁面無法辨識，DemoScope 會自行停用並說明；VACNet 仍可正常使用。

## 常見問題

<details>
<summary><b>DemoScope 顯示已在此頁面停用，發生什麼事？</b></summary>

VACNet 頁面已不符合 DemoScope 的預期，因此程式選擇停用，避免留下只修改一半的頁面。請複製診斷內容並建立 issue；通常很快會有更新。
</details>

<details>
<summary><b>VACNet 的判定文字與 DemoScope 使用不同語言。</b></summary>

在 DemoScope 選擇語言後，程式會透過 Steam 的 ?l= 參數要求 VACNet 使用該語言。若 VACNet 沒有對應翻譯，便會使用自身預設語言，但 DemoScope 標籤仍維持你選擇的語言。
</details>

<details>
<summary><b>DemoScope 會替我選擇判定嗎？</b></summary>

不會。預設只會按下你指定的判定按鈕，送出前仍由你確認。請自行審查每段片段並遵守計畫規則。
</details>

<details>
<summary><b>單題任務也會記錄歷史嗎？</b></summary>

目前還不會。本機歷史紀錄目前只支援傳統四題表單。
</details>

<details>
<summary><b>如何還原預設按鍵？</b></summary>

使用已變更按鍵旁的重設圖示、快速鍵視窗中的**全部重設**，或設定視窗中的**重設**。最後一項也會還原音效與動畫。
</details>

## 架構

DemoScope 是單一自執行函式，在 document-start 執行且不套用於 frame。init() 會判斷頁面類型、確認頁面可辨識，再連接下列模組。包含參數、回傳值與儲存索引的 217 個頂層函式完整參考，請見 [zh-TW_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/zh-TW_FUNCTIONS.md)。

<details>
<summary><b>模組概覽</b></summary>

| 模組 | 職責 | 主要函式 |
|---|---|---|
| Localization | UI 語言、字串查找、旗幟、語言選單、同步 VACNet 的 ?l= | getActiveLocale、tr、settingText、syncSelectedLanguage、installLanguageSelector |
| Segment & player | 讀取片段界限、控制 Video.js/HTML5 播放、停用網站原生片段循環 | parseSegmentBounds、createPlayerAdapter、waitForPlayerAdapter、blockSegmentLoopGuard |
| Player enhancements | 搜尋列、按鍵提示、加速、逐格播放、快速鍵 | installCustomControls、installPlayerEnhancements |
| Hotkeys | 動作註冊表、按鍵綁定、衝突偵測、快速鍵視窗 | getBinding、findKeyConflict、getActionForEvent、ensureHotkeysDialog |
| Verdict presets | 預設表、選取狀態、隨機套用 | applyPreset、detectActivePreset、buildEnhancementBar |
| Single-question task | 新表單標籤、鎖定指示器與按鍵 | isCheatingMode、selectCheatingVerdict、updateCheatingLock |
| Submit flow | 兩步驟確認、取消、同源檢查、載入遮罩 | invokeProceedAction、invokeCancelAction、submitVerdictForm、finishSubmitLoadingWhenReady |
| Local history | 片段/遊戲歷史紀錄、備份與報告 | appendReviewHistory、importLocalHistory、exportCombinedHistoryReports |
| Settings & animations | 設定視窗、子視窗、音效與指示器動畫 | ensureSettingsDialog、installExtraSettingsSections、ensureAnimationsDialog、playUiSound |
| Invite page | 改版頁面、關閉按鈕、快速鍵 | installInvitePage、installInviteExtras |
| Resilience | 隔離步驟、備援搜尋、自動停用、診斷 | safeStep、disableDemoScope、buildDiagnosticsReport |
| Bootstrap | 進入點 | init、enhanceLayout |

</details>

## 隱私

DemoScope 不會傳送遙測，也不會上傳你的設定或歷史紀錄。送出判定時，VACNet 會透過網站原有表單接收。設定與歷史紀錄保存在瀏覽器 localStorage（以 demoscope 開頭的索引）和 sessionStorage。可透過**設定 → 本機歷史紀錄 → 清除歷史紀錄**刪除記錄。診斷報告只會複製到剪貼簿；是否分享由你決定。

## 免責聲明

DemoScope 是非官方社群專案，與 Valve Corporation 無關，也未獲其認可。它不會替你做判定。請自行審查每段片段並遵守審查計畫規則。使用風險由你自行承擔。

## 授權條款

以 [GNU GPL v3.0 授權條款](https://github.com/ebayybe/DemoScope/blob/main/LICENSE)發布。

## 致謝

- **最初構想與基礎介面：**由 skinsales / goodvibes 編寫的 [*CS2 VACNet Review — Player & Layout Enhancements*](https://greasyfork.org/ru/scripts/591778-cs2-vacnet-review-player-layout-enhancements)（MIT）。
- **相關構想與俄文分支：**由 authorless 編寫的 [*VACLens RU — CS2 Review Assistant*](https://greasyfork.org/ru/scripts/592414-vaclens-ru-cs2-review-assistant)（MIT）。
- **架構重寫、通用框架、29 種語言支援及自訂判定預設：**ebayybe。
