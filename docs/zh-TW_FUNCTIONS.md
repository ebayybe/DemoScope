<div align="center">

[English](../FUNCTIONS.md) · [Български](bg_FUNCTIONS.md) · [Magyar](hu_FUNCTIONS.md) · [Tiếng Việt](vi_FUNCTIONS.md) · [Ελληνικά](el_FUNCTIONS.md) · [Dansk](da_FUNCTIONS.md) · [Bahasa Indonesia](id_FUNCTIONS.md) · [Español (España)](es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](es-419_FUNCTIONS.md) · [Italiano](it_FUNCTIONS.md) · **繁體中文** · [简体中文](zh-CN_FUNCTIONS.md) · [한국어](ko_FUNCTIONS.md) · [Deutsch](de_FUNCTIONS.md) · [Nederlands](nl_FUNCTIONS.md) · [Norsk](no_FUNCTIONS.md) · [Polski](pl_FUNCTIONS.md) · [Português (Portugal)](pt-PT_FUNCTIONS.md) · [Português (Brasil)](pt-BR_FUNCTIONS.md) · [Română](ro_FUNCTIONS.md) · [Русский](ru_FUNCTIONS.md) · [ไทย](th_FUNCTIONS.md) · [Türkçe](tr_FUNCTIONS.md) · [Українська](uk_FUNCTIONS.md) · [Suomi](fi_FUNCTIONS.md) · [Français](fr_FUNCTIONS.md) · [Čeština](cs_FUNCTIONS.md) · [Svenska](sv_FUNCTIONS.md) · [日本語](ja_FUNCTIONS.md)

</div>

# DemoScope — 函式參考

`DemoScope.user.js` v1.0.0 中全部 128 個頂層函式的完整參考（名稱、引數、返回值、職責）。返回 [README](../../README/zh-TW_README.md)。

約定：`—` 表示無引數；`void` 表示呼叫該函式是為了其副作用。

## 本地化

| 函式 | 引數 | 返回值 | 職責 |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | 某個語言的旗幟內聯 SVG 標記；沒有時回退為地球圖示。 |
| `getSavedLocale` | — | `string \| null` | 從 `localStorage` 讀取使用者儲存的語言（`demoscopeLanguage`）。 |
| `getActiveLocale` | — | `string` | 確定當前語言：已儲存的選擇 → Steam `?l=` → 瀏覽器/頁面語言 → `en`。 |
| `getLanguageBadge` | — | `string` | 語言自身的顯示名稱，例如“English version”，用於語言選擇器的徽章。 |
| `tr` | `key: string` | `string` | 查詢當前語言的介面字串（回退順序：英語，然後是鍵本身）。 |
| `inviteText` | `key: string` | `string` | 對邀請頁面字串表執行同樣的查詢。 |
| `settingText` | `key: string` | `string` | 對設定對話方塊字串表執行同樣的查詢。 |
| `getPresetLabel` | `name: string` | `string` | 預設的本地化標籤，可組合出“Bot + Aim”之類的組合。 |
| `buildLanguageOptions` | — | `string (HTML)` | 語言選項按鈕的標記，包括“auto”條目。 |
| `installLanguageSelector` | `root: HTMLElement` | `void` | 繫結彈出式語言選擇器、定位它、儲存選擇並重新載入頁面。 |

## 音效與設定對話方塊

| 函式 | 引數 | 返回值 | 職責 |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | 設定對話方塊中顯示的“N 條記錄 · 最近一條：…”行。 |
| `soundsEnabled` | — | `boolean` | 介面音效是否啟用（`demoscopeSoundEffectsEnabled`，預設開啟）。 |
| `getSoundVolume` | — | `number (0–1)` | 已儲存的音量（`demoscopeSoundEffectsVolume`，預設 0.4）。 |
| `playUiSound` | `kind = "click"` | `void` | 用 Web Audio 合成一小段音調序列（`click`、`select`、`toggle`、`copy`、`confirm`、`preview`、`tick`、`open`、`close`、`error`）；絕不丟擲異常。 |
| `readSettingsHotkey` | — | `string` | 已儲存的、用於開啟設定對話方塊的 `KeyboardEvent.code`（預設 `F2`）。 |
| `formatHotkey` | `code: string` | `string` | 可讀的按鍵名稱（`KeyQ` → `Q`，`Numpad1` → `Num 1`）。 |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | 提取物理按鍵程式碼，將非拉丁鍵盤佈局對映回 `KeyX`；無法使用時返回 `""`。 |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | 對 DemoScope 或播放器已佔用的按鍵返回真（Enter、空格、方向鍵、`M`、`F`、`1`–`5` 等）。 |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | 建立（僅一次）並連線設定對話方塊：聲音、音量、快捷鍵捕獲、歷史記錄上限、匯出/匯入/報告/合併/清除、重置。 |
| `openSettingsDialog` | `opener = null` | `void` | 用當前值開啟對話方塊，並記住需要歸還焦點的元素。 |
| `installSettingsUi` | — | `void` | 安裝全域性捕獲階段的按鍵監聽器（開啟/關閉對話方塊、重新繫結）及聲音事件。 |
| `installUiSoundEvents` | — | `void` | 委託式點選監聽器，為 DemoScope 的控制元件播放反饋音。 |

## 備份、報告與歷史記錄上限

| 函式 | 引數 | 返回值 | 職責 |
|---|---|---|---|
| `exportLocalHistory` | — | `void` | 將全部歷史記錄下載為 `demoscope-history-YYYY-MM-DD.json`。 |
| `downloadHistoryFile` | `content: string, filename: string, mimeType: string` | `void` | 透過臨時 Blob URL 觸發檔案下載。 |
| `collectHistoryReportRows` | `store: object` | `Array<{vodId, ts, summary, segment}>` | 展平並去重歷史記錄條目，最新的在前。 |
| `exportReadableHistory` | — | `void` | 下載獨立的、已本地化的歷史記錄 HTML 報告。 |
| `buildReadableHistoryReport` | `rows: Array, reportTitle: string, summaryNote = ""` | `string (HTML document)` | 構建已轉義的 HTML 報告標記。 |
| `setMergeReportStatus` | `statusElement: HTMLElement, message: string, state: string` | `void` | 更新合併工具的狀態行（`progress`、`success`、`warning`）。 |
| `exportCombinedHistoryReports` | `files: FileList \| File[], statusElement: HTMLElement, button: HTMLButtonElement` | `Promise<void>` | 校驗多個 JSON 備份（每個 ≤ 5 MB，總計 ≤ 100 MB），對條目去重，並下載一份合併的 HTML 報告。 |
| `isSafeHistoryKey` | `key: string` | `boolean` | 對歷史記錄鍵做白名單檢查（攔截 `__proto__`、`constructor` 和格式錯誤的鍵）。 |
| `importLocalHistory` | `file: File` | `Promise<void>` | 校驗 JSON 備份，將其合併進本地歷史（遵守上限）並重新整理介面。 |
| `readHistoryLimit` | `storageKey: string, allowedValues: number[], defaultValue: number` | `number` | 從 `localStorage` 讀取數值上限，僅接受允許的值。 |
| `getHistoryPerKeyLimit` | — | `number` | 每個片段/對局鍵保留的條目數（10/20/30/50，預設 30）。 |
| `getHistoryTotalLimit` | — | `number` | 總共保留的片段/對局鍵數量（100/200/300/500，預設 300）。 |
| `readAdvancedPresetsOpen` | — | `boolean` | 擴充套件預設抽屜是否保持展開。 |

## 賬號名稱與邀請頁面

| 函式 | 引數 | 返回值 | 職責 |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Steam 賬號名稱當前是否被隱藏。 |
| `installAccountNameControl` | — | `void` | 在退出登入連結旁新增眼睛形狀的開關，並透過 `MutationObserver` 保持同步。 |
| `installInvitePage` | — | `boolean` | 重塑 `/vacnet/createinvite`：卡片佈局、顯示/隱藏與複製連結（Clipboard API，帶 `execCommand` 回退）、條件列表、語言選擇器。缺少預期元素時返回 `false`。 |

## 片段與播放器介面卡

| 函式 | 引數 | 返回值 | 職責 |
|---|---|---|---|
| `parseSegmentBounds` | — | `{startTime, endTime, duration} \| null` | 從頁面內聯指令碼中提取 `startTime`/`endTime`。 |
| `formatSegmentTime` | `seconds: number` | `string` | 將秒數格式化為 `m:ss.cc`。 |
| `getVideoElement` | — | `HTMLVideoElement \| null` | 查詢審查用的 `<video>` 元素。 |
| `getVjsPlayer` | — | `Video.js player \| null` | 如果頁面的 Video.js 播放器可用且未被銷燬，則返回它。 |
| `createPlayerAdapter` | — | `adapter \| null` | 在 Video.js / HTML5 影片之上的統一 API：`currentTime`、`paused`、`pause`、`play`、`playbackRate(s)`、`muted`、`on`、`isFullscreen`、`requestFullscreen`、`exitFullscreen`。 |
| `waitForPlayerAdapter` | `timeoutMs = 20000` | `Promise<adapter>` | 每 100 ms 輪詢一次直到出現播放器；超時則拒絕。 |
| `clampSegment` | `time: number, bounds: object` | `number` | 將時間限制在片段邊界內。 |
| `segmentProgress` | `time: number, bounds: object` | `number (0–1)` | 片段內的相對位置。 |
| `installCustomControls` | `player, bounds, refreshDisplay: {current: Function}` | `void` | 在影片下方新增進度條、時間顯示和快捷鍵提示。 |
| `pauseLayoutMutations` | `run: Function` | `void` | 在佈局觀察器被暫停期間執行回撥（防止反饋迴圈）。 |
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | 當焦點位於輸入框、文字域、下拉框、按鈕、連結或可編輯元素中時返回真。 |
| `formatShiftSpeedLabel` | `rate: number` | `string` | 速度選項的標籤。 |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | 速度選擇器的 `<option>` 列表（0.5–4×）。 |
| `readStoredShiftSpeed` | — | `number` | 已儲存的 Shift 加速倍率（預設 2×）。 |
| `readStoredVerdictRandomizer` | — | `boolean` | 已儲存的判定隨機化開關狀態（預設關閉）。 |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | 連線播放速率處理、片段限制/暫停、跳轉/逐幀/靜音/全屏輔助函式以及全域性鍵盤快捷鍵（`1`–`5`、方向鍵、`,` `.`、空格、`M`、`F`、Shift）。內部閉包：`applyPlayerRate`、`setShiftSpeed`、`setShiftSpeedActive`、`seekBy`、`stepFrame`、`togglePlay`、`toggleMute`、`toggleFullscreen`、繪製迴圈輔助函式。 |

## 判定預設

| 函式 | 引數 | 返回值 | 職責 |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | 在每個沒有選擇的判定組中選中“skip”。 |
| `getSelectedVerdictState` | — | `object` | `aimassist`、`wallhack`、`autobhop`、`bot` 的當前值（`positive` / `negative` / `skip` / `null`）。 |
| `detectActivePreset` | — | `string \| null` | 與當前選擇匹配的預設名稱。 |
| `syncPresetButtons` | — | `string \| null` | 更新預設按鈕上的 `aria-pressed` 以及擴充套件預設徽章。 |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | 點選預設對應的單選框；開啟隨機化時會打亂順序，並在點選之間等待 200–600 ms。執行期間禁用預設按鈕。 |
| `normalizeVerdictLabels` | `root = document` | `void` | 從判定標籤中去除高亮標記。 |
| `applyVerdictSectionTitles` | `root = document` | `void` | 在每個判定組上方新增本地化標題。 |

## 提示訊息、頁尾與提交載入

| 函式 | 引數 | 返回值 | 職責 |
|---|---|---|---|
| `hideSiteFooter` | — | `void` | 隱藏網站頁尾。 |
| `showToast` | `message: string, type = "info", duration = 1800` | `void` | 顯示不阻塞的 ARIA-live 提示訊息。 |
| `markSubmitPending` | — | `void` | 在 `sessionStorage` 中儲存提交時間戳和當前片段 id。 |
| `isSubmitPending` | — | `boolean` | 是否有提交正在等待下一個片段。 |
| `clearSubmitPending` | — | `void` | 清除“提交待處理”標記。 |
| `showSubmitLoadingOverlay` | `message = tr("nextClip")` | `void` | 顯示整頁載入遮罩。 |
| `hideSubmitLoadingOverlay` | — | `void` | 隱藏遮罩並清除待處理狀態。 |
| `bootSubmitLoadingIfPending` | — | `void` | 若有待處理的提交，則在頁面載入時重新顯示遮罩。 |
| `isReviewPageReady` | `prevVod: string, startedAt: number` | `boolean` | 當下一個片段的介面和媒體都就緒時返回真。 |
| `finishSubmitLoadingWhenReady` | — | `Promise<void>` | 最多等待 30 s 以獲取下一個片段，然後隱藏遮罩（超時則顯示錯誤提示）。 |

## 本地歷史儲存

| 函式 | 引數 | 返回值 | 職責 |
|---|---|---|---|
| `extractVodId` | — | `string` | 從影片 URL 推匯出片段/對局 id。 |
| `getGameKey` | — | `string` | 對局的歷史鍵（`game::<id>`）。 |
| `getClipKey` | `bounds: object` | `string` | 單個片段的歷史鍵（`<id>:<start>:<end>`）。 |
| `normalizeHistoryEntry` | `entry: any` | `{ts, summary, segment} \| null` | 校驗並清理一條歷史記錄。 |
| `readHistoryEntries` | `store: object, key: string` | `Array` | 某個鍵的規範化條目。 |
| `getGameHistoryEntries` | `store: object` | `Array` | 當前對局的條目（支援舊版鍵）。 |
| `getClipHistoryEntries` | `store: object, bounds: object` | `Array` | 當前片段的條目。 |
| `formatClipId` | `vodId: string` | `string` | 由片段 id 雜湊得到的短數字顯示 id（`#0000000`）。 |
| `formatRelativeTime` | `timestamp: number` | `string` | 本地化的相對時間（`Intl.RelativeTimeFormat`）。 |
| `readClipHistoryStore` | — | `object` | 從 `localStorage` 載入歷史物件（出錯時為 `{}`）。 |
| `pruneHistoryStore` | `store: object` | `void` | 應用每鍵上限和總上限（最舊的鍵最先被丟棄）。 |
| `writeClipHistoryStore` | `store: object` | `boolean` | 修剪並儲存；遇到配額/儲存錯誤時返回 `false`。 |
| `summarizeCurrentVerdict` | — | `string` | 當前選擇對應的預設名稱，或 `mixed`。 |
| `formatSummaryLabel` | `summary: string` | `string` | 歷史摘要的本地化標籤。 |
| `formatClockTime` | `seconds: number` | `string` | `m:ss`（或 `x.xs`）時鐘格式。 |
| `formatHumanSegment` | `bounds: object` | `string` | 可讀的片段範圍。 |
| `formatGameLabel` | — | `string` | 當前對局的本地化標籤。 |
| `historyEntryKey` | `entry: object` | `string` | 用於去重的標識字串。 |
| `formatPriorStat` | `count: number, label: string` | `string` | 歷史面板中的“標籤：N”行。 |
| `buildHistoryListItems` | `clipEntries: Array, gameEntries: Array, currentSegment: string` | `Array` | 將片段/對局條目合併為待顯示項。 |
| `renderHistoryItem` | `item: object` | `string (HTML)` | 單行歷史記錄的標記。 |
| `escapeHtml` | `value: any` | `string` | 轉義 `& < > " '`。 |
| `buildClipHistoryPanel` | `bounds, gameEntries, clipEntries` | `string (HTML)` | 歷史面板的標記，包含審查規則按鈕。 |
| `ensureClipHistoryPanel` | — | `void` | 若容器缺失則建立面板容器。 |
| `ensureReviewRulesDialog` | — | `void` | 建立審查規則對話方塊並繫結其開啟/關閉按鈕。 |
| `installLocalHistoryButton` | `panel: HTMLElement` | `void` | 繫結“本地歷史”按鈕（滾動到列表，或在為空時顯示提示）。 |
| `positionClipHistoryPanel` | — | `void` | 使面板始終位於 `.verdicts-container` 中的第一個。 |
| `renderClipHistory` | `bounds: object \| null` | `void` | 為當前片段重新渲染歷史面板。 |
| `appendReviewHistory` | `bounds: object \| null` | `void` | 將當前判定摘要追加到對局和片段的歷史中。 |

## 提交流程

| 函式 | 引數 | 返回值 | 職責 |
|---|---|---|---|
| `isLabelingMode` | — | `boolean` | 在顯示四個判定組的頁面上返回真。 |
| `getProceedButton` | — | `HTMLButtonElement \| null` | 原生提交按鈕（可見且可用時）。 |
| `recordProceedHistoryIfLabeling` | — | `void` | 每次提交只記錄一次歷史（帶重入保護）。 |
| `resetProceedArmed` | — | `void` | 解除兩步提交的預備狀態。 |
| `refreshProceedButtonLabel` | — | `void` | 更新按鈕標籤/`Enter` 提示和預備狀態樣式。 |
| `verdictLabelForField` | `field: string, selected: string` | `string \| null` | 將選擇對映為 `guilty_*` / `innocent_*` / `skip_*`。 |
| `prepareVerdictFormForSubmit` | — | `boolean` | 構建隱藏的 `verdict_labels[]` 輸入；若有任一組未選擇，則顯示錯誤提示並返回 `false`。 |
| `isSafeSubmitTarget` | `form: HTMLFormElement` | `boolean` | 僅允許同源的 HTTPS 表單提交地址。 |
| `restoreSubmitUi` | — | `void` | 提交失敗後恢復各按鈕。 |
| `submitVerdictForm` | `{ recordHistory = false }` | `boolean` | 執行安全檢查、顯示載入遮罩並提交表單。 |
| `submitVerdictsDirect` | — | `boolean` | 準備標籤並提交。 |
| `invokeProceedAction` | — | `boolean` | Enter/點選處理程式：第一次按下預備，第二次按下提交。 |
| `installProceedShortcut` | — | `void` | 針對 `Enter`/`NumpadEnter` 的捕獲階段監聽器。 |
| `hookProceedButton` | — | `void` | 替換原生提交按鈕的點選行為。 |
| `installVerdictChangeReset` | — | `void` | 判定變化時解除提交預備狀態並重新同步預設。 |
| `scheduleProceedFooterFix` | — | `void` | 對 `fixProceedFooter` 的防抖（`requestAnimationFrame`）呼叫。 |
| `scheduleVerdictLabelsFix` | — | `void` | 防抖的標籤/標題/預設值重新規範化。 |

## 佈局與啟動

| 函式 | 引數 | 返回值 | 職責 |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | 構建 Shift 加速倍率選擇欄。 |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | 單個預設按鈕的標記。 |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | 擴充套件預設分組的標記。 |
| `buildEnhancementBar` | — | `HTMLElement` | 構建快速判定欄：預設、隨機化開關、擴充套件抽屜。 |
| `positionShiftSpeedBar` | — | `void` | 使速度欄保持在判定列表之前。 |
| `positionEnhancementBar` | — | `void` | 使預設欄保持在提交按鈕之前。 |
| `fixProceedFooter` | — | `void` | 重新排列頁尾、各欄和提交按鈕。 |
| `enhanceLayout` | — | `void` | 應用所有佈局更改並安裝設定介面。 |
| `watchProceedFooter` | — | `void` | 觀察 `.verdicts-container` 並安排頁尾修正。 |
| `watchVerdictLabels` | — | `void` | 觀察判定標籤並安排重新規範化。 |
| `init` | — | `Promise<void>` | 入口：賬號名稱控制元件 → 邀請頁面或審查頁面 → 佈局、觀察器、快捷鍵、播放器增強。 |

### 上文未列出

* **`blockSegmentLoopGuard`**（IIFE，載入時執行）：包裝頁面上的 `setInterval`，將網站原生的 100 ms 片段迴圈計時器替換為空操作；片段由 DemoScope 自己的控制元件處理。
* **常量與表：**`SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC`（`PRESETS`：21 個定義）。
