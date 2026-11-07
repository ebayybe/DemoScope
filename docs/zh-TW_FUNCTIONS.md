<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/docs/en_FUNCTIONS.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/docs/bg_FUNCTIONS.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/docs/hu_FUNCTIONS.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/docs/vi_FUNCTIONS.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/docs/el_FUNCTIONS.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/docs/da_FUNCTIONS.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/docs/id_FUNCTIONS.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/docs/es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/docs/es-419_FUNCTIONS.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/docs/it_FUNCTIONS.md) · **繁體中文** · [簡體中文](https://github.com/ebayybe/DemoScope/blob/main/docs/zh-CN_FUNCTIONS.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/docs/ko_FUNCTIONS.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/docs/de_FUNCTIONS.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/docs/nl_FUNCTIONS.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/docs/no_FUNCTIONS.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/docs/pl_FUNCTIONS.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/docs/pt-PT_FUNCTIONS.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/docs/pt-BR_FUNCTIONS.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/docs/ro_FUNCTIONS.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/docs/ru_FUNCTIONS.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/docs/th_FUNCTIONS.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/docs/tr_FUNCTIONS.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/docs/uk_FUNCTIONS.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/docs/fi_FUNCTIONS.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/docs/fr_FUNCTIONS.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/docs/cs_FUNCTIONS.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/docs/sv_FUNCTIONS.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/docs/ja_FUNCTIONS.md)

</div>

# DemoScope — 函數參考

`DemoScope.user.js` v1.4.0 中全部 217 個頂層函數的完整參考（名稱、參數、返回值、職責）。返回 [README](../README.md)。

約定：`—` 表示無參數；`void` 表示調用該函數是為了其副作用。

## 用戶行為概覽

| 項目 | 功能說明 |
|---|---|
| 支持的頁面 | 增強 VACNet 歡迎頁（`/vacnet`）、審核頁（`/vacnet/clips`）、邀請頁（`/vacnet/createinvite`）以及審核頁面中的無片段狀態，不修改無關頁面。 |
| 任務類型 | 自動識別 VACNet 提供的審核表單。**經典表單**（aim assist、wallhack、auto-bhop、bot）提供預設和擴展組合。較新的**單問題任務**使用緊湊布局，提供綁定到 `1`–`3` 的三個判定選項和顯示片段剩余時間的鎖定指示器，不顯示快速判定或組合。 |
| 語言 | 支持 Steam 的 29 種語言。優先使用已保存的手動選擇；否則讀取 Steam 的 `?l=` 參數，再使用瀏覽器/頁面語言。在 DemoScope 中選擇語言也會向 VACNet 傳遞相應的 `?l=`，使 VACNet 自身的文本同步切換。自動模式會讓 Steam 語言參數與瀏覽器語言保持一致。 |
| 歡迎頁與邀請頁 | 重新設計兩個頁面的樣式，添加共用語言選擇器，并通過眼睛按鈕隱藏賬戶名稱。歡迎頁在焦點不位于交互控件時可用 Enter 或 Space 繼續。邀請頁可隱藏、顯示和復制邀請鏈接，并說明邀請條件；× 關閉頁面，Enter 執行“Done”，Esc 執行 × 的操作。 |
| 片段審核 | 添加判定預設和擴展組合、默認關閉的判定隨機器、按住 Shift 時可調的播放速度、限定在片段區間內的定位、逐幀移動及播放快捷鍵。判定類別帶有“?”按鈕，可查看本地化說明；按鈕中的關鍵詞用 DemoScope 配色突出顯示。 |
| 快捷鍵 | 所有快捷鍵都作為操作登記在統一注冊表中，可在**設定 → 快捷鍵**中重新分配。沖突按頁面范圍檢測（邀請頁和審核頁互不沖突），并顯示當前占用該鍵的操作、分組和說明。可以替換、交換或取消。每項操作均可重置，頁面提示會跟隨按鍵設定。 |
| 提交操作 | `Enter` 或 `Numpad Enter`（默認）觸發“Continue”。經典表單需先按一次準備操作，再按一次提交判定。單問題任務在選擇判定后顯示 VACNet 自帶的確認，并由 `Enter` 確認。`Esc`（默認）可取消等待確認的判定，或撤銷首次按鍵。Space 不用于提交。 |
| 設定 | 默認按 `F2` 打開設定窗口（可在快捷鍵窗口中改鍵）。包含：快捷鍵、動畫、音效與音量、本地歷史（啟用、上限、12/24 小時格式、備份）、頁腳顯示、診斷，以及統一重置音效、快捷鍵和動畫。 |
| 動畫 | “DemoScope”旁的指示點可以播放動畫。獨立窗口提供六種樣式（pulse、breathe、ripple、heartbeat、orbit、blink）、實時預覽、三檔速度和開關。如果操作系統要求減少動態效果，動畫默認關閉。 |
| 本地歷史 | 將判定摘要保存在當前瀏覽器的 `localStorage` 中，DemoScope 不會上傳。歷史可關閉、導入、導出為 JSON/HTML、將多個 JSON 備份合并為一個 HTML 報告或清除。上限可設為每個鍵 10/20/30/50 條、總計 100/200/300/500 個鍵。關閉后停止新增記錄，但不刪除舊數據。僅記錄經典表單。 |
| 空隊列 | 將 VACNet 的空隊列消息替換為本地化說明、保存在瀏覽器中的首次出現時間和語言選擇器。每日 250 個演示的文字是根據觀察到的 VACNet 行為提供的信息；DemoScope 不會執行或繞過該服務限制。 |
| 頁腳 | 使用本地化的 DemoScope 頁腳。片段頁面可顯示反饋和舉報鏈接；設定中可分別隱藏各鏈接、版權行或整個頁腳。 |
| 容錯與診斷 | 每個初始化步驟獨立運行，單個步驟失敗不會中斷其他步驟。查找關鍵元素時帶有備用方式。如果頁面無法識別，DemoScope 會在該頁面停用、恢復 VACNet 布局并顯示簡短提示。**設定 → 診斷**可復制文本報告，包含腳本版本、找到的元素、失敗步驟和頁面結構，便于提交錯誤報告。 |

## 本地化

| 函數 | 參數 | 返回值 | 作用 |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | 某個語言的旗幟內聯 SVG 標記；沒有時回退為地球圖標。 |
| `getSavedLocale` | — | `string \| null` | 從 `localStorage` 讀取用戶保存的語言（`demoscopeLanguage`）。 |
| `getActiveLocale` | — | `string` | 確定當前語言：已保存的選擇 → Steam `?l=` → 瀏覽器/頁面語言 → `en`。 |
| `getLanguageBadge` | — | `string` | 語言自身的顯示名稱，例如“English version”，用于語言選擇器的徽章。 |
| `getBrowserLocale` | — | `string \| null` | 查找首個受支持的瀏覽器語言，包括地區變體。 |
| `syncAutomaticLanguage` | — | `boolean` | 自動模式下將 ?l= 與瀏覽器語言同步；不一致時跳轉頁面。 |
| `getRenderedSteamLanguage` | — | `string \| null` | 從頁面自身樣式表和腳本 URL 中的 l= 參數讀取 VACNet 實際使用的頁面語言。 |
| `syncSelectedLanguage` | — | `boolean` | 在 DemoScope 中手動選擇語言后，使用匹配的 ?l= 重新請求頁面一次，使 VACNet 文本同步。語言已匹配時跳過，并防止重定向循環。發生跳轉時返回 true。 |
| `tr` | `key: string` | `string` | 查找當前語言的界面字符串（回退順序：英語，然后是鍵本身）。 |
| `inviteText` | `key: string` | `string` | 對邀請頁面字符串表執行同樣的查找。 |
| `settingText` | `key: string` | `string` | 對設定對話框字符串表執行同樣的查找。 |
| `getPresetLabel` | `name: string` | `string` | 預設的本地化標簽，可組合出“Bot + Aim”之類的組合。 |
| `buildLanguageOptions` | `{ activeLocale = getActiveLocale(), selectedLocale = null } = {}` | `string (HTML)` | 語言選項按鈕的標記，包括“auto”條目。 |
| `installLanguageSelector` | `root: HTMLElement, onLocaleSelect: Function \| null = null` | `void` | 綁定并定位語言選擇器，保存所選語言并重新加載頁面；也可用可選回調處理選擇。 |
| `queueNoticeText` | `key: string, locale = getQueueNoticeLocale()` | `string` | 查找空隊列提示或頁腳的本地化文本。 |

## 音效與設定對話框

| 函數 | 參數 | 返回值 | 作用 |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | 設定對話框中顯示的“N 條記錄 · 最近一條：…”行。 |
| `soundsEnabled` | — | `boolean` | 界面音效是否啟用（`demoscopeSoundEffectsEnabled`，默認開啟）。 |
| `getSoundVolume` | — | `number (0–1)` | 已保存的音量（`demoscopeSoundEffectsVolume`，默認 0.4）。 |
| `playUiSound` | `kind = "click"` | `void` | 用 Web Audio 合成一小段音調序列（`click`、`select`、`toggle`、`copy`、`confirm`、`preview`、`tick`、`open`、`close`、`error`）；絕不拋出異常。 |
| `readSettingsHotkey` | — | `string` | 已保存的、用于打開設定對話框的 `KeyboardEvent.code`（默認 `F2`）。 |
| `formatHotkey` | `code: string` | `string` | 可讀的按鍵名稱（`KeyQ` → `Q`，`Numpad1` → `Num 1`）。 |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | 提取物理按鍵代碼，將非拉丁鍵盤布局映射回 `KeyX`；無法使用時返回 `""`。 |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | 對 DemoScope 或播放器已占用的按鍵返回真（Enter、空格、方向鍵、`M`、`F`、`1`–`5` 等）。 |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | 創建并連接設定對話框：音效和音量、試聽、快捷鍵、本地歷史記錄及上限、時間格式、JSON 導入/導出、HTML 導出/合并、清除歷史記錄、頁腳顯示選項和重置。 |
| `openSettingsDialog` | `opener = null` | `void` | 用當前值打開對話框，并記住需要歸還焦點的元素。 |
| `installSettingsUi` | — | `void` | 安裝全局捕獲階段的按鍵監聽器（打開/關閉對話框、重新綁定）及聲音事件。 |
| `installUiSoundEvents` | — | `void` | 委托式點擊監聽器，為 DemoScope 的控件播放反饋音。 |
| `ensureSettingsLayoutStyles` | — | `void` | 注入設定窗口樣式：區塊左對齊，條目行帶摘要標簽。 |
| `refreshSettingsSummaries` | — | `void` | 更新快捷鍵和動畫條目的摘要標簽。 |
| `installExtraSettingsSections` | `settingsDialog: HTMLDialogElement` | `void` | 添加快捷鍵、動畫、診斷和重置區塊，并隱藏舊的設定快捷鍵區塊。 |

## 備份、報告與歷史記錄上限

| 函數 | 參數 | 返回值 | 作用 |
|---|---|---|---|
| `exportLocalHistory` | — | `void` | 將全部歷史記錄下載為 `demoscope-history-YYYY-MM-DD.json`。 |
| `downloadHistoryFile` | `content: string, filename: string, mimeType: string` | `void` | 通過臨時 Blob URL 觸發文件下載。 |
| `collectHistoryReportRows` | `store: object` | `Array<{vodId, ts, summary, segment}>` | 展平并去重歷史記錄條目，最新的在前。 |
| `exportReadableHistory` | — | `void` | 下載獨立的、已本地化的歷史記錄 HTML 報告。 |
| `buildReadableHistoryReport` | `rows: Array, reportTitle: string, summaryNote = ""` | `string (HTML document)` | 構建已轉義的 HTML 報告標記。 |
| `setMergeReportStatus` | `statusElement: HTMLElement, message: string, state: string` | `void` | 更新合并工具的狀態行（`progress`、`success`、`warning`）。 |
| `exportCombinedHistoryReports` | `files: FileList \| File[], statusElement: HTMLElement, button: HTMLButtonElement` | `Promise<void>` | 校驗多個 JSON 備份（每個 ≤ 5 MB，總計 ≤ 100 MB），對條目去重，并下載一份合并的 HTML 報告。 |
| `isSafeHistoryKey` | `key: string` | `boolean` | 對歷史記錄鍵做白名單檢查（攔截 `__proto__`、`constructor` 和格式錯誤的鍵）。 |
| `importLocalHistory` | `file: File` | `Promise<void>` | 校驗 JSON 備份，將其合并進本地歷史（遵守上限）并刷新界面。 |
| `readHistoryLimit` | `storageKey: string, allowedValues: number[], defaultValue: number` | `number` | 從 `localStorage` 讀取數值上限，僅接受允許的值。 |
| `getHistoryPerKeyLimit` | — | `number` | 每個片段/對局鍵保留的條目數（10/20/30/50，默認 30）。 |
| `getHistoryTotalLimit` | — | `number` | 總共保留的片段/對局鍵數量（100/200/300/500，默認 300）。 |

## 賬號名稱與邀請頁面

| 函數 | 參數 | 返回值 | 作用 |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Steam 賬號名稱當前是否被隱藏。 |
| `installAccountNameControl` | — | `void` | 在退出登錄鏈接旁添加眼睛形狀的開關，并通過 `MutationObserver` 保持同步。 |
| `installInvitePage` | — | `boolean` | 重塑 `/vacnet/createinvite`：卡片布局、顯示/隱藏與復制鏈接（Clipboard API，帶 `execCommand` 回退）、條件列表、語言選擇器。缺少預期元素時返回 `false`。 |
| `installInviteExtras` | `card: HTMLElement, doneLink: HTMLElement \| null` | `void` | 添加關閉（×）按鈕，并捕獲 inviteDone 和 inviteClose 操作；焦點位于按鈕、鏈接、輸入框、模態框或語言列表時忽略按鍵。 |
| `refreshInviteKeyLabels` | — | `void` | 根據當前綁定更新“完成”按鈕的按鍵標記和 × 提示。 |
| `installWelcomePage` | — | `boolean` | 調整歡迎頁樣式，添加品牌標識和語言選擇器；按 Enter/Space 繼續；缺少必要元素時返回 false。 |

## 片段與播放器適配器

| 函數 | 參數 | 返回值 | 作用 |
|---|---|---|---|
| `parseSegmentBounds` | — | `{startTime, endTime, duration} \| null` | 從頁面內聯腳本中提取 `startTime`/`endTime`。 |
| `formatSegmentTime` | `seconds: number` | `string` | 將秒數格式化為 `m:ss.cc`。 |
| `getVideoElement` | — | `HTMLVideoElement \| null` | 查找審查用的 `<video>` 元素。 |
| `getVjsPlayer` | — | `Video.js player \| null` | 如果頁面的 Video.js 播放器可用且未被銷毀，則返回它。 |
| `createPlayerAdapter` | — | `adapter \| null` | 在 Video.js / HTML5 視頻之上的統一 API：`currentTime`、`paused`、`pause`、`play`、`playbackRate(s)`、`muted`、`on`、`isFullscreen`、`requestFullscreen`、`exitFullscreen`。 |
| `waitForPlayerAdapter` | `timeoutMs = 20000` | `Promise<adapter>` | 每 100 ms 輪詢一次直到出現播放器；超時則拒絕。 |
| `clampSegment` | `time: number, bounds: object` | `number` | 將時間限制在片段邊界內。 |
| `segmentProgress` | `time: number, bounds: object` | `number (0–1)` | 片段內的相對位置。 |
| `installCustomControls` | `player, bounds, refreshDisplay: {current: Function}` | `void` | 在視頻下方添加進度條、時間顯示和快捷鍵提示。 |
| `pauseLayoutMutations` | `run: Function` | `void` | 在布局觀察器被暫停期間運行回調（防止反饋循環）。 |
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | 焦點位于輸入框、textarea、select 或可編輯文本中時返回 true。 |
| `isPlayerShortcutBlocked` | `target: EventTarget` | `boolean` | 類似 isShortcutBlocked，但允許判定單選按鈕通過，因為點擊后焦點仍停留在按鈕上。 |
| `formatShiftSpeedLabel` | `rate: number` | `string` | 速度選項的標簽。 |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | 速度選擇器的 `<option>` 列表（0.5–4×）。 |
| `readStoredShiftSpeed` | — | `number` | 已保存的 Shift 加速倍率（默認 2×）。 |
| `readStoredVerdictRandomizer` | — | `boolean` | 已保存的判定隨機化開關狀態（默認關閉）。 |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | 連接播放速率處理、片段限制/暫停、跳轉/逐幀/靜音/全屏輔助函數以及全局鍵盤快捷鍵（`1`–`5`、方向鍵、`,` `.`、空格、`M`、`F`、Shift）。內部閉包：`applyPlayerRate`、`setShiftSpeed`、`setShiftSpeedActive`、`seekBy`、`stepFrame`、`togglePlay`、`toggleMute`、`toggleFullscreen`、繪制循環輔助函數。 |

## 判定預設

| 函數 | 參數 | 返回值 | 作用 |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | 在每個沒有選擇的判定組中選中“skip”。 |
| `getSelectedVerdictState` | — | `object` | `aimassist`、`wallhack`、`autobhop`、`bot` 的當前值（`positive` / `negative` / `skip` / `null`）。 |
| `detectActivePreset` | — | `string \| null` | 與當前選擇匹配的預設名稱。 |
| `syncPresetButtons` | — | `string \| null` | 更新預設按鈕上的 `aria-pressed` 以及擴展預設徽章。 |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | 點擊預設對應的單選框；開啟隨機化時會打亂順序，并在點擊之間等待 200–600 ms。運行期間禁用預設按鈕。 |
| `readAdvancedPresetsOpen` | — | `boolean` | 擴展預設抽屜是否保持展開。 |
| `normalizeVerdictLabels` | `root = document` | `void` | 從判定標簽中去除高亮標記。 |
| `applyVerdictSectionTitles` | `root = document` | `void` | 在每個判定組上方添加本地化標題。 |
| `ensureVerdictHelp` | `block: HTMLElement, titleEl: HTMLElement, title: string, field: string` | `void` | 為一個判定組創建“？”按鈕和說明彈層，優先使用 DemoScope 的本地化文本。 |
| `closeVerdictHelp` | `except = null` | `void` | 關閉除指定彈層外的所有說明彈層。 |
| `installVerdictHelpHandlers` | — | `void` | 一次性為說明彈層安裝委托點擊、外部點擊和 Esc 處理邏輯。 |

## 提示消息、頁腳與提交加載

| 函數 | 參數 | 返回值 | 作用 |
|---|---|---|---|
| `hideSiteFooter` | — | `void` | 隱藏網站頁腳。 |
| `showToast` | `message: string, type = "info", duration = 1800` | `void` | 顯示不阻塞的 ARIA-live 提示消息。 |
| `markSubmitPending` | — | `void` | 在 `sessionStorage` 中保存提交時間戳和當前片段 id。 |
| `isSubmitPending` | — | `boolean` | 是否有提交正在等待下一個片段。 |
| `clearSubmitPending` | — | `void` | 清除“提交待處理”標記。 |
| `showSubmitLoadingOverlay` | `message = tr("nextClip")` | `void` | 顯示整頁加載遮罩。 |
| `hideSubmitLoadingOverlay` | — | `void` | 隱藏遮罩并清除待處理狀態。 |
| `bootSubmitLoadingIfPending` | — | `void` | 若有待處理的提交，則在頁面加載時重新顯示遮罩。 |
| `isReviewPageReady` | `prevVod: string, startedAt: number` | `boolean` | 當下一個片段的界面和媒體都就緒時返回真。 |
| `finishSubmitLoadingWhenReady` | — | `Promise<void>` | 最多等待 30 s 以獲取下一個片段，然后隱藏遮罩（超時則顯示錯誤提示）。 |

## 本地歷史存儲

| 函數 | 參數 | 返回值 | 作用 |
|---|---|---|---|
| `extractVodId` | — | `string` | 從視頻 URL 推導出片段/對局 id。 |
| `getGameKey` | — | `string` | 對局的歷史鍵（`game::<id>`）。 |
| `getClipKey` | `bounds: object` | `string` | 單個片段的歷史鍵（`<id>:<start>:<end>`）。 |
| `normalizeHistoryEntry` | `entry: any` | `{ts, summary, segment} \| null` | 校驗并清理一條歷史記錄。 |
| `readHistoryEntries` | `store: object, key: string` | `Array` | 某個鍵的規范化條目。 |
| `getGameHistoryEntries` | `store: object` | `Array` | 當前對局的條目（支持舊版鍵）。 |
| `getClipHistoryEntries` | `store: object, bounds: object` | `Array` | 當前片段的條目。 |
| `formatClipId` | `vodId: string` | `string` | 由片段 id 哈希得到的短數字顯示 id（`#0000000`）。 |
| `formatRelativeTime` | `timestamp: number` | `string` | 本地化的相對時間（`Intl.RelativeTimeFormat`）。 |
| `readClipHistoryStore` | — | `object` | 從 `localStorage` 加載歷史對象（出錯時為 `{}`）。 |
| `pruneHistoryStore` | `store: object` | `void` | 應用每鍵上限和總上限（最舊的鍵最先被丟棄）。 |
| `writeClipHistoryStore` | `store: object` | `boolean` | 修剪并保存；遇到配額/存儲錯誤時返回 `false`。 |
| `summarizeCurrentVerdict` | — | `string` | 當前選擇對應的預設名稱，或 `mixed`。 |
| `formatSummaryLabel` | `summary: string` | `string` | 歷史摘要的本地化標簽。 |
| `formatClockTime` | `seconds: number` | `string` | `m:ss`（或 `x.xs`）時鐘格式。 |
| `formatHumanSegment` | `bounds: object` | `string` | 可讀的片段范圍。 |
| `formatGameLabel` | — | `string` | 當前對局的本地化標簽。 |
| `historyEntryKey` | `entry: object` | `string` | 用于去重的標識字符串。 |
| `formatPriorStat` | `count: number, label: string` | `string` | 歷史面板中的“標簽：N”行。 |
| `buildHistoryListItems` | `clipEntries: Array, gameEntries: Array, currentSegment: string` | `Array` | 將片段/對局條目合并為待顯示項。 |
| `renderHistoryItem` | `item: object` | `string (HTML)` | 單行歷史記錄的標記。 |
| `escapeHtml` | `value: any` | `string` | 轉義 `& < > " '`。 |
| `buildClipHistoryPanel` | `bounds, gameEntries, clipEntries` | `string (HTML)` | 歷史面板的標記，包含審查規則按鈕。 |
| `ensureClipHistoryPanel` | — | `void` | 若容器缺失則創建面板容器。 |
| `ensureReviewRulesDialog` | — | `void` | 創建審查規則對話框并綁定其打開/關閉按鈕。 |
| `installLocalHistoryButton` | `panel: HTMLElement` | `void` | 綁定“本地歷史”按鈕（滾動到列表，或在為空時顯示提示）。 |
| `positionClipHistoryPanel` | — | `void` | 使面板始終位于 `.verdicts-container` 中的第一個。 |
| `renderClipHistory` | `bounds: object \| null` | `void` | 為當前片段重新渲染歷史面板。 |
| `appendReviewHistory` | `bounds: object \| null` | `void` | 將當前判定摘要追加到對局和片段的歷史中。 |
| `isLocalHistoryEnabled` | — | `boolean` | 讀取本地歷史記錄是否啟用；默認啟用。 |
| `readTimeFormat` | — | `string` | 讀取時間格式：自動、12 小時或 24 小時。 |
| `formatQueueFirstSeen` | `timestamp: number, locale = getActiveLocale()` | `string` | 根據語言和時間格式格式化首次檢測時間。 |
| `getQueueNoticeLocale` | — | `string` | 返回空隊列通知當前使用的語言。 |
| `migrateEmptyQueueLanguage` | — | `boolean` | 將舊語言選擇遷移到通用設定并同步 URL。 |
| `updateEmptyQueueTimestamp` | — | `void` | 更新顯示的首次檢測時間。 |

## 提交流程

| 函數 | 參數 | 返回值 | 作用 |
|---|---|---|---|
| `isLabelingMode` | — | `boolean` | 在顯示四個判定組的頁面上返回真。 |
| `getProceedButton` | — | `HTMLButtonElement \| null` | 原生提交按鈕（可見且可用時）。 |
| `recordProceedHistoryIfLabeling` | — | `void` | 每次提交只記錄一次歷史（帶重入保護）。 |
| `resetProceedArmed` | — | `void` | 解除兩步提交的預備狀態。 |
| `refreshProceedButtonLabel` | — | `void` | 更新按鈕標簽/`Enter` 提示和預備狀態樣式。 |
| `verdictLabelForField` | `field: string, selected: string` | `string \| null` | 將選擇映射為 `guilty_*` / `innocent_*` / `skip_*`。 |
| `prepareVerdictFormForSubmit` | — | `boolean` | 構建隱藏的 `verdict_labels[]` 輸入；若有任一組未選擇，則顯示錯誤提示并返回 `false`。 |
| `isSafeSubmitTarget` | `form: HTMLFormElement` | `boolean` | 僅允許同源的 HTTPS 表單提交地址。 |
| `restoreSubmitUi` | — | `void` | 提交失敗后恢復各按鈕。 |
| `submitVerdictForm` | `{ recordHistory = false } = {}` | `boolean` | 執行安全檢查、顯示加載遮罩并提交表單。 |
| `submitVerdictsDirect` | — | `boolean` | 準備標簽并提交。 |
| `invokeProceedAction` | — | `boolean` | Enter/點擊處理程序：第一次按下預備，第二次按下提交。 |
| `installProceedShortcut` | — | `void` | 針對 `Enter`/`NumpadEnter` 的捕獲階段監聽器。 |
| `invokeCancelAction` | — | `boolean` | 取消雙步提交的首次按鍵準備，或點擊可見的“取消”按鈕；無事可取消時返回 false。 |
| `refreshCancelButtonLabel` | — | `void` | 為“取消”按鈕添加或更新按鍵標記。 |
| `hookProceedButton` | — | `void` | 替換原生提交按鈕的點擊行為。 |
| `installVerdictChangeReset` | — | `void` | 判定變化時解除提交預備狀態并重新同步預設。 |
| `scheduleProceedFooterFix` | — | `void` | 對 `fixProceedFooter` 的防抖（`requestAnimationFrame`）調用。 |
| `scheduleVerdictLabelsFix` | — | `void` | 防抖的標簽/標題/默認值重新規范化。 |

## 快捷鍵注冊表與重新映射

| Action | Default | Group | 功能說明 |
|---|---|---|---|
| `playPause` | `Space` | Playback | 暫停或繼續播放片段。 |
| `mute` | `M` | Playback | 靜音或取消靜音。 |
| `fullscreen` | `F` | Playback | 進入或退出全屏。 |
| `seekBack` / `seekForward` | `←` / `→` | 導航 | 向后/向前跳轉 5 秒。 |
| `frameBack` / `frameForward` | `,` / `.` | 導航 | 向后/向前移動一幀。 |
| `speedBoost` | `Shift` | Navigation | 按住時加速播放；這是唯一可綁定 Shift 的操作。 |
| `quick1` … `quick5` | `1` … `5` | 判定 | 經典表單：預設 1–5。單問題任務：Cheating / Not sure / No cheats seen（`1`–`3`）。 |
| `proceed` | `Enter` | Submission | 確認判定，或準備并提交經典表單。 |
| `cancel` | `Esc` | Submission | 點擊“取消”，或撤銷首次 Enter 按鍵。 |
| `inviteDone` | `Enter` | Invite page | 離開邀請頁面，與“完成”按鈕作用相同。 |
| `inviteClose` | `Esc` | Invite page | 執行與 × 按鈕相同的操作。 |
| `settings` | `F2` | Interface | 打開或關閉設定對話框。 |

按鍵以 `KeyboardEvent.code` 值存儲在 `demoscopeKeybindings` 中（僅保存與默認值不同的項目；設定快捷鍵單獨存儲）。左右修飾鍵視為同一個鍵，數字小鍵盤對應主鍵區。不可分配的鍵：`Tab`、`Ctrl`、`Alt`、`Meta`、`Caps Lock`、`ContextMenu`、`F5`、`F11`、`F12`。沖突按范圍劃分：`review`、`invite`，以及會與所有操作沖突的設定 `global` 鍵。

| 函數 | 參數 | 返回值 | 作用 |
|---|---|---|---|
| `fmt` | `template: string, vars = {}` | `string` | 替換本地化模板中的 {name} 占位符。 |
| `isModalOpen` | — | `boolean` | 任一 <dialog> 打開時返回 true；此時不處理頁面快捷鍵。 |
| `normalizeKeyCode` | `code: string` | `string` | 合并左右修飾鍵，并將小鍵盤數字和 NumpadEnter 映射到主鍵區對應按鍵。 |
| `formatKeyLabel` | `code: string` | `string` | 返回按鍵顯示名稱（ArrowLeft → ←、KeyM → M、Escape → Esc）。 |
| `loadKeyOverrides` | — | `object` | 讀取并驗證已保存的按鍵綁定（帶緩存；出錯時返回 {}）。 |
| `saveKeyOverrides` | `overrides: object` | `void` | 保存綁定；全部為默認值時移除記錄。 |
| `getBinding` | `id: string` | `string` | 返回操作當前綁定的按鍵；未綁定時返回空字符串。 |
| `setBinding` | `id: string, code: string` | `void` | 為操作保存按鍵；空代碼會取消綁定，默認值不會持久化。 |
| `resetAllBindings` | — | `void` | 將所有綁定（包括設定快捷鍵）恢復為默認值。 |
| `findKeyConflict` | `id: string, code: string` | `object \| null` | 查找在重疊作用范圍內已使用該按鍵的其他操作。 |
| `getActionForEvent` | `event: KeyboardEvent, scope = currentKeyScope()` | `string \| null` | 根據當前頁面作用范圍，將鍵盤事件解析為操作 ID。 |
| `keyScopeOf` | `id: string` | `string` | 返回操作的作用范圍：review、invite 或 global。 |
| `keyScopesOverlap` | `a: string, b: string` | `boolean` | 若兩個作用范圍相同或任一為 global，則返回 true。 |
| `currentKeyScope` | — | `string` | 邀請頁面返回 invite，其他頁面返回 review。 |
| `validateKeyForAction` | `id: string, code: string` | `string` | 按鍵可用時返回空字符串；瀏覽器保留鍵返回 reserved；非按住型操作綁定 Shift 時返回 shift。 |
| `quickRangeLabel` | `count: number` | `string` | 生成快速判定按鍵標簽：未修改時為 1–5，否則顯示綁定的按鍵。 |
| `buildHintsInnerMarkup` | — | `string (HTML)` | 根據當前綁定生成視頻下方的按鍵提示。 |
| `refreshKeyLabels` | — | `void` | 更新頁面上所有按鍵標簽，包括提示、按鈕標記、繼續/取消/邀請按鈕及設定摘要。 |
| `ensureDemoscopeDialogStyles` | — | `void` | 注入快捷鍵和動畫窗口共用的樣式。 |
| `hkActionName` | `id: string` | `string` | 返回本地化的操作名稱。 |
| `hkGroupName` | `group: string` | `string` | 返回本地化的分組名稱。 |
| `hkActionDescription` | `id: string` | `string` | 返回本地化的操作說明；快速判定會分別說明兩種任務模式。 |
| `hkSetMessage` | `text: string, warn = false` | `void` | 設定快捷鍵窗口的狀態欄文本。 |
| `hkCancelCapture` | — | `void` | 退出按鍵捕獲模式。 |
| `hkRowMarkup` | `action: object` | `string (HTML)` | 生成一行操作的 HTML；存在待處理沖突時包含沖突面板。 |
| `renderHotkeys` | — | `void` | 重新渲染整個窗口并保留滾動位置。 |
| `hkCommit` | `actionId: string, code: string, mode = "replace"` | `void` | 分配按鍵；replace 會取消另一操作的綁定，swap 會與其交換按鍵。 |
| `hkRequestAssign` | `actionId: string, code: string` | `void` | 直接分配按鍵；若已被占用，則打開沖突面板（Replace / Swap / Cancel）。 |
| `ensureHotkeysDialog` | — | `HTMLDialogElement` | 創建快捷鍵窗口和捕獲階段的按鍵監聽器；捕獲按鍵時 Esc 可被分配且不會關閉窗口。 |
| `openHotkeysDialog` | — | `void` | 打開快捷鍵窗口。 |

## 動畫

指示點有六種樣式（`pulse`、`breathe`、`ripple`、`heartbeat`、`orbit`、`blink`）、三檔速度（0.6× / 1× / 1.7×）及開關，保存在 `demoscopeAnimStyle`、`demoscopeAnimSpeed` 和 `demoscopeAnimEnabled` 中。啟用時通過 `<html>` 的 `data-ds-anim` 設定樣式，關閉時為 `off`；樣式表同時控制實時指示點和預覽。

| 函數 | 參數 | 返回值 | 作用 |
|---|---|---|---|
| `readStorage` | `key: string` | `string \| null` | 安全讀取 localStorage。 |
| `writeStorage` | `key: string, value: string \| null` | `void` | 安全寫入 localStorage；值為 null 時刪除鍵。 |
| `animEnabled` | — | `boolean` | 讀取動畫開關；系統啟用減少動態效果時默認關閉。 |
| `animStyle` | — | `string` | 讀取已保存的動畫樣式（默認 pulse）。 |
| `animSpeedKey` | — | `string` | 讀取已保存速度（slow / normal / fast，默認 normal）。 |
| `ensureAnimationStyles` | — | `void` | 注入指示點和預覽點共用的關鍵幀與樣式規則。 |
| `applyAnimationSettings` | — | `void` | 將樣式、速度和開關應用到 <html>，并更新設定摘要。 |
| `ensureAnimationsDialog` | — | `HTMLDialogElement` | 創建動畫窗口，含開關、速度、帶實時預覽的樣式卡片和重置功能。 |
| `openAnimationsDialog` | — | `void` | 打開動畫窗口。 |
| `ensureUiPolishStyles` | — | `void` | 為窗口和判定列表設定深色細滾動條及 color-scheme: dark。 |

## 單問題任務

| 函數 | 參數 | 返回值 | 作用 |
|---|---|---|---|
| `isCheatingMode` | — | `boolean` | 當頁面顯示單問題表單（#verdictbuttons_cheating）時返回 true。 |
| `selectCheatingVerdict` | `kind: string` | `void` | 點擊 Cheating / Not sure / No cheats seen 單選項；選項鎖定時播放錯誤音效并抖動鎖定卡片。 |
| `localizeCheatingVerdicts` | — | `void` | 將三個標簽改為 DemoScope 當前語言，并用 CSS 繪制按鍵標記，避免按鍵數字出現在 VACNet 確認文本中；同時準備鎖定卡片。 |
| `updateCheatingLock` | — | `void` | 更新鎖定卡片與進度條，顯示其他兩個判定解鎖前的剩余時間；解鎖或選定判定后隱藏。 |
| `startCheatingLockWatcher` | — | `void` | 啟動每 250 毫秒調用 updateCheatingLock 的計時器。 |

## 容錯與診斷

| 函數 | 參數 | 返回值 | 作用 |
|---|---|---|---|
| `recordFailure` | `step: string, error: any` | `void` | 為診斷報告記錄失敗步驟；記錄數量有上限。 |
| `safeStep` | `step: string, fn: Function, fallback?: any` | `any` | 運行一個初始化步驟；出錯時記錄錯誤并返回備用值，讓后續步驟繼續執行。 |
| `getVideoContainer` | — | `HTMLElement \| null` | 查找視頻容器；找不到時使用播放器或 <video> 元素的父級。 |
| `getVerdictContainer` | — | `HTMLElement \| null` | 查找判定容器；找不到時使用第一個判定塊的父級。 |
| `getSubmitArea` | — | `HTMLElement \| null` | 查找提交/確認區域（#submitbuttons、.submitbuttons 或提交按鈕的父級）。 |
| `hasVerdictForm` | — | `boolean` | 至少存在一個判定單選按鈕時返回 true。 |
| `removeEnhancements` | — | `void` | 移除 DemoScope 面板、類和頁腳修改，并恢復 VACNet 頁腳。 |
| `disableDemoScope` | `reason: string` | `void` | 在當前頁面停用 DemoScope、撤銷修改、只保留設定窗口，并在每個會話中針對每種原因提示一次。 |
| `isOwnNode` | `el: Element` | `boolean` | 若元素由 DemoScope 創建則返回 true；這類元素不會納入結構報告。 |
| `elementSignature` | `el: Element` | `string` | 生成結構報告使用的 tag#id.class[…] 標識，不含文本。 |
| `skeletonOf` | `root: Element, maxDepth = 7, maxNodes = 170` | `string` | 生成由標簽、ID 和類組成的緊湊縮進樹；相同的相鄰元素合并為 ×N。 |
| `captureOriginalSkeleton` | — | `void` | 在 DemoScope 修改頁面前記錄其結構。 |
| `buildDiagnosticsReport` | — | `string` | 生成包含版本、頁面、語言、瀏覽器、任務類型、22 項元素檢查、失敗步驟及修改前后結構的報告；不含頁面文本或賬戶數據。 |
| `fallbackCopyText` | `text: string` | `boolean` | Clipboard API 不可用時，通過臨時文本框復制文本。 |
| `copyDiagnostics` | `statusEl: HTMLElement, textarea: HTMLTextAreaElement` | `Promise<void>` | 復制報告；失敗時將文本顯示在可選擇的文本框中。 |

## 布局與啟動

| 函數 | 參數 | 返回值 | 作用 |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | 構建 Shift 加速倍率選擇欄。 |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | 單個預設按鈕的標記。 |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | 擴展預設分組的標記。 |
| `buildEnhancementBar` | — | `HTMLElement` | 構建快速判定欄：預設、隨機化開關、擴展抽屜。 |
| `positionShiftSpeedBar` | — | `void` | 使速度欄保持在判定列表之前。 |
| `positionEnhancementBar` | — | `void` | 使預設欄保持在提交按鈕之前。 |
| `fixProceedFooter` | — | `void` | 重新排列頁腳、各欄和提交按鈕。 |
| `enhanceLayout` | — | `void` | 應用所有布局更改并安裝設定界面。 |
| `ensureReviewStructure` | — | `void` | 規范 VACNet 標記：用 .verdicts-container-inner 包裹判定塊，將 #submitbuttons 移入容器，并在標題標簽中同步片段計數。兼容舊版和重設計后的標記。 |
| `watchProceedFooter` | — | `void` | 觀察 `.verdicts-container` 并安排頁腳修正。 |
| `watchVerdictLabels` | — | `void` | 觀察判定標簽并安排重新規范化。 |
| `readFooterPreference` | `storageKey: string` | `boolean` | 從 localStorage 讀取頁腳顯示偏好。 |
| `saveFooterPreference` | `storageKey: string, hidden: boolean` | `void` | 保存頁腳顯示偏好。 |
| `applyFooterPreferences` | `footer: HTMLElement \| null = document.querySelector(".demoscope-custom-footer")` | `void` | `void` |
| `installDemoScopeFooter` | `withClipLinks: boolean, locale = getActiveLocale(), showFeedback = true` | `HTMLElement` | 創建或更新本地化頁腳，可選擇包含鏈接，并應用顯示偏好。 |
| `installEmptyQueueNotice` | — | `boolean` | 將空隊列提示替換為含說明、時間、語言選擇器和頁腳的本地化內容。 |
| `init` | — | `Promise<void>` | 入口：賬號名稱控件 → 邀請頁面或審查頁面 → 布局、觀察器、快捷鍵、播放器增強。 |

VACNet 所需頁面元素不可用時，`installWelcomePage` 和 `installInvitePage` 返回 `false`。頁面不處于空隊列狀態時，`installEmptyQueueNotice` 返回 `false`。

### 其他項目

* **`blockSegmentLoopGuard`** （IIFE，頁面加載時運行）：包裝頁面的 `setInterval`，將網站原生的 100 毫秒片段循環計時器替換為空操作；片段改由 DemoScope 自己的控件處理。
* **常量與表：** `SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC` (`PRESETS`: 21 definitions); added since v1.0.0: `KEY_ACTIONS`, `KEY_GROUPS`, `KEY_ACTION_BY_ID`, `KEY_ACTION_SCOPE`, `RESERVED_KEY_CODES`, `CHEATING_KEYS`, `VERDICT_SECTION_TITLES`, `VERDICT_SECTION_HELP`, `ANIM_STYLES`, `ANIM_SPEEDS`.
* **模塊狀態：** `diag` (step failures, the switch-off reason and the original page structure), `hkState` (state of the Hotkeys window) and the `SCRIPT_VERSION` constant used by the diagnostics report.
* **文本：**所有面向用戶的文案都位于上述本地化表中；v1.2.0–v1.4.0 新增窗口已翻譯為全部 29 種語言。

## 存儲鍵

| 鍵名 | 存儲位置 | 用途 |
|---|---|---|
| `demoscopeLanguage`, `demoscopeLanguageAuto` | `localStorage` | 所選語言 / 自動模式。 |
| `demoscopeKeybindings` | `localStorage` | 與默認值不同的快捷鍵（JSON）。 |
| `demoscopeSettingsHotkey` | `localStorage` | 打開設定對話框的按鍵（移除后為 none）。 |
| `demoscopeAnimEnabled`, `demoscopeAnimStyle`, `demoscopeAnimSpeed` | `localStorage` | 指示點動畫設定。 |
| `demoscopeSoundEffectsEnabled`, `demoscopeSoundEffectsVolume` | `localStorage` | 聲音設定。 |
| `demoscopeClipHistory` 及歷史記錄上限/格式鍵 | `localStorage` | 本地審核歷史及其設定。 |
| `demoscopeSubmitPending`, `demoscopeSubmitPrevVod`, `demoscopeLangSyncTried`, `demoscopeDisabledNotice` | `sessionStorage` | 提交加載狀態、語言同步保護標記，以及僅顯示一次的“已關閉”提示。 |










