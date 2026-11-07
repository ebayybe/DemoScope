<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/en_CHANGELOG.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/bg_CHANGELOG.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/hu_CHANGELOG.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/vi_CHANGELOG.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/el_CHANGELOG.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/da_CHANGELOG.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/id_CHANGELOG.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-ES_CHANGELOG.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-419_CHANGELOG.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/it_CHANGELOG.md) · **繁體中文** · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-CN_CHANGELOG.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ko_CHANGELOG.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/de_CHANGELOG.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/nl_CHANGELOG.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/no_CHANGELOG.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pl_CHANGELOG.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-PT_CHANGELOG.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-BR_CHANGELOG.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ro_CHANGELOG.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ru_CHANGELOG.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/th_CHANGELOG.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/tr_CHANGELOG.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/uk_CHANGELOG.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fi_CHANGELOG.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fr_CHANGELOG.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/cs_CHANGELOG.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/sv_CHANGELOG.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ja_CHANGELOG.md)

</div>

# DemoScope v1.2.0

自我保護版本：DemoScope 現在能因應 VACNet 頁面變更，不再中途失效，並會告知使用者與開發者發生了什麼事。

改善設定、邀請頁面與判定文字。

快捷鍵、動畫與載入修正。

支援 VACNet 單題工作。

相容於重新設計的 VACNet 審核頁面。

### 新增

- **獨立的設定步驟。** 每個版面與安裝步驟分開執行。若某一步失敗，會記錄錯誤，其餘步驟仍會繼續。
- 為影片容器、判定容器與提交區域提供**備援查找方式**。若 VACNet 重新命名影片容器的類別，DemoScope 會透過播放器元素找到它。
- **平順關閉。** 若缺少影片或判定表單，或至少五個設定步驟失敗，DemoScope 會撤銷自身變更、還原 VACNet 頁尾、只保留設定視窗並顯示一次通知。空佇列頁面仍照常辨識，不會觸發此行為。
- **診斷報告**（Settings → Diagnostics → Copy diagnostics）：腳本版本、時間、語言、瀏覽器、頁面與工作類型、22 項元素檢查（`ok` / `MISSING`）、記錄的步驟錯誤，以及 DemoScope 修改前後的頁面結構。結構只包含標籤、ID 與類別，不含頁面文字。若剪貼簿遭封鎖，報告會顯示在可選取的文字方塊中。
- 對尚未完全載入的頁面最多等待 2 秒再進行判斷。

- **邀請頁面的關閉按鈕。** 卡片角落的 × 與「Done」相同，會返回片段列表。
- **邀請頁面快捷鍵：** `Enter` 執行「Done」，`Esc` 關閉頁面。按鈕、連結、欄位、對話框或語言清單取得焦點時會忽略按鍵。可在 Hotkeys 的「Invite page」群組重新指派。
- **依頁面區分按鍵衝突。** 邀請頁面沒有播放器，因此 `Enter` / `Esc` 不再與審核頁面上的相同按鍵衝突。設定快捷鍵仍是全域設定。
- 設定視窗、子視窗與判定清單改用**深色細捲軸**，並設定深色 color-scheme。

- **Hotkeys 視窗**（Settings → Hotkeys）：全部 18 個快捷鍵皆可重新指派，依操作分組，附有說明與重設按鈕。「Reset all」需要再次確認。
  - **衝突處理。** 若按鍵已被使用，會顯示其操作、群組與用途；可選擇 Replace、Swap 或 Cancel。
  - `Esc` 可指派，記錄快捷鍵時不會關閉視窗。拒絕 `Tab`、修飾鍵、Caps Lock、`F5`、`F11` 與 `F12`；`Shift` 僅允許用於按住的「Speed boost」操作。
  - 影片下方提示、徽章與 Continue/Cancel 按鈕會依照設定的按鍵更新。
- `Esc` 可取消等待確認的判定，以及兩步提交中的第一次 `Enter`。
- **Animations 視窗**（Settings → Animations）：六種樣式、即時預覽、三種速度與開關。若系統要求減少動態效果，動畫預設關閉。
- 判定單選鈕取得焦點時，`Enter` 與 `Esc` 也能使用。

- **單題工作。** VACNet 有時會詢問「Is the Subject cheating beyond a reasonable doubt?」，並提供 Cheating / Uncertain / No cheats seen。DemoScope 會辨識此工作並切換成精簡版面，不顯示快速判定、延伸組合與隨機選擇器。
- 使用 DemoScope 語言的判定標籤、`1–3` 按鍵徽章與對應快捷鍵。
- **鎖定指示器。** Uncertain 與 No cheats seen 會在片段結束後解鎖。卡片顯示剩餘時間與進度；鎖定選項會變暗，按下對應按鍵會播放錯誤音效並晃動卡片。
- 影片下方提示改為 `Enter` 與 `1–3`；判定按鈕加高。

- **DemoScope 自行提供四種判定類別的說明**，支援全部 29 種語言。VACNet 在某些語言（例如烏克蘭文）仍會顯示英文問題，因此「?」說明不再依賴該文字。

- AIM ASSIST、WALL HACK、AUTO BHOP 與 BOT 旁新增**「?」說明按鈕**。按下後顯示類別說明；點擊外部、再次點擊或按 `Esc` 可關閉。按鈕不會取得鍵盤焦點，讓 `Enter` 與 `Space` 保持審核功能。

### 變更

- **重新設計設定視窗。** 區段依使用頻率排列：Hotkeys、Animations、Sound effects、Local history、Footer、Diagnostics（v1.2.0 新增）、Reset。Hotkeys 與 Animations 顯示會隨設定更新的摘要。
- **一次重設所有項目。** 還原音效、音量、快捷鍵與動畫；保留歷史記錄。
- 現在可在 Hotkeys 編輯設定視窗快捷鍵。
- **判定確認文字不再包含快捷鍵數字。** 避免出現「2Not sure」和「3No cheats seen」；按鍵徽章改由 CSS 繪製。
- 單題工作的選項 2 現在是「Not sure」，並與 VACNet 文字一樣採第一人稱。

- **恢復判定按鈕中的關鍵字醒目提示：**搜尋詞以粗體橘色顯示，否定回答中的「not」以柔和藍色顯示。選取的按鈕仍清楚易讀。
- `normalizeVerdictLabels` 現在只移除 b 標記，因此醒目提示標記會保留。

: `<b>`.

- 隱藏入口網站標題與說明卡片；片段計數也會顯示在標題徽章中。
- Continue 固定在面板底部，即使翻譯較長也保持可見。

技術選擇器: `.verdicts-container-inner`, `#submitbuttons`.

### 修正

- **單題工作提交後「loading next clip」時間過長：**就緒檢查不再等待不存在的 `aimassist` 欄位，改為接受判定表單與媒體中繼資料並提前開始；沒有片段的頁面會在 3 秒後安靜關閉覆蓋層。
- 開啟對話框時，頁面快捷鍵（`Space`、`Enter` 等）不再作用於對話框後方的頁面。

- Local history 按鈕現在與相鄰徽章等高、不換行、會縮短過長標籤；徽章列會換行而不是被擠壓。

- **切換 DemoScope 語言後，判定文字仍使用瀏覽器語言。** VACNet 使用 Steam 的 `?l=` 參數，DemoScope 先前只更改自有標籤。現在審核頁面會以選取的 `?l=` 開啟；若缺少參數則重新請求一次。VACNet 實際使用的語言會從 CSS 與指令碼 URL 的 `l=` 讀取；僅嘗試一次可避免不支援該語言時的重新導向迴圈。

- **`Space`、`M` 與 `F` 看起來沒有作用，**因為 VACNet / Video.js 會再次處理相同按鍵。DemoScope 現在會攔截這些按鍵。
- Firefox 中放開 `Space` 不再觸發目前取得焦點的播放器按鈕。
- 判定單選鈕取得焦點時，播放器快捷鍵仍可使用。

- **面板只建立了一部分：**VACNet 新增入口網站標題、說明卡片、格線版面，移除 verdicts-container-inner 並移動 submitbuttons，導致 `insertBefore` 出錯。`ensureReviewStructure` 步驟會正規化標記，支援新舊版面。

### 在地化

- 於全部 29 種語言新增 6 條診斷、複製結果與關閉通知相關字串。

- 在全部 29 種語言新增 12 條摘要、重設、邀請頁面操作與「Not sure」相關字串。

CSS 深色配置: `color-scheme: dark`.

- Hotkeys 與 Animations 視窗（每種語言 77 條字串）現已翻譯成其餘 27 種語言；先前只有英文與俄文版本。

- Hotkeys 與 Animations 原先只有英文與俄文；其他語言於 v1.2.0 加入。

六種樣式為 pulse、breathe、ripple、heartbeat、orbit 和 blink。

- 於全部 29 種語言新增 5 條標籤、標題、說明與鎖定訊息相關字串。

# DemoScope v1.0.0

DemoScope userscript 首次公開發布，供 CS2 VACNet 審核頁面使用。

### 新增
- 29 種語言介面、自動選擇語言、五種快速判定預設與 15 種延伸組合。
- 依片段控制影片、逐格移動、`Shift` 加速、`Space` 播放/暫停、`M` 靜音、`F` 全螢幕，以及透過 `Enter` 兩步提交判定。
- 可設定的本機審核歷史、JSON 匯入/匯出、HTML 報告，以及合併多份 JSON 備份。
- 改良邀請頁面、音效設定、設定快捷鍵、隱藏帳戶名稱、審核規則對話框，以及可選的隨機判定器（預設關閉）。

### 隱私
- 不含遙測；本機設定與歷史不會上傳。提交的判定透過網站一般表單傳送至 VACNet。
