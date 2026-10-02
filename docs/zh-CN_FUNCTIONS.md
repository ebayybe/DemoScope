<div align="center">

[English](../FUNCTIONS.md) · [Български](bg_FUNCTIONS.md) · [Magyar](hu_FUNCTIONS.md) · [Tiếng Việt](vi_FUNCTIONS.md) · [Ελληνικά](el_FUNCTIONS.md) · [Dansk](da_FUNCTIONS.md) · [Bahasa Indonesia](id_FUNCTIONS.md) · [Español (España)](es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](es-419_FUNCTIONS.md) · [Italiano](it_FUNCTIONS.md) · [繁體中文](zh-TW_FUNCTIONS.md) · **简体中文** · [한국어](ko_FUNCTIONS.md) · [Deutsch](de_FUNCTIONS.md) · [Nederlands](nl_FUNCTIONS.md) · [Norsk](no_FUNCTIONS.md) · [Polski](pl_FUNCTIONS.md) · [Português (Portugal)](pt-PT_FUNCTIONS.md) · [Português (Brasil)](pt-BR_FUNCTIONS.md) · [Română](ro_FUNCTIONS.md) · [Русский](ru_FUNCTIONS.md) · [ไทย](th_FUNCTIONS.md) · [Türkçe](tr_FUNCTIONS.md) · [Українська](uk_FUNCTIONS.md) · [Suomi](fi_FUNCTIONS.md) · [Français](fr_FUNCTIONS.md) · [Čeština](cs_FUNCTIONS.md) · [Svenska](sv_FUNCTIONS.md) · [日本語](ja_FUNCTIONS.md)

</div>

# DemoScope — 函数参考

`DemoScope.user.js` v1.0.0 中全部 128 个顶层函数的完整参考（名称、参数、返回值、职责）。返回 [README](../../README/zh-CN_README.md)。

约定：`—` 表示无参数；`void` 表示调用该函数是为了其副作用。

## 本地化

| 函数 | 参数 | 返回值 | 职责 |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | 某个语言的旗帜内联 SVG 标记；没有时回退为地球图标。 |
| `getSavedLocale` | — | `string \| null` | 从 `localStorage` 读取用户保存的语言（`demoscopeLanguage`）。 |
| `getActiveLocale` | — | `string` | 确定当前语言：已保存的选择 → Steam `?l=` → 浏览器/页面语言 → `en`。 |
| `getLanguageBadge` | — | `string` | 语言自身的显示名称，例如“English version”，用于语言选择器的徽章。 |
| `tr` | `key: string` | `string` | 查找当前语言的界面字符串（回退顺序：英语，然后是键本身）。 |
| `inviteText` | `key: string` | `string` | 对邀请页面字符串表执行同样的查找。 |
| `settingText` | `key: string` | `string` | 对设置对话框字符串表执行同样的查找。 |
| `getPresetLabel` | `name: string` | `string` | 预设的本地化标签，可组合出“Bot + Aim”之类的组合。 |
| `buildLanguageOptions` | — | `string (HTML)` | 语言选项按钮的标记，包括“auto”条目。 |
| `installLanguageSelector` | `root: HTMLElement` | `void` | 绑定弹出式语言选择器、定位它、保存选择并重新加载页面。 |

## 音效与设置对话框

| 函数 | 参数 | 返回值 | 职责 |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | 设置对话框中显示的“N 条记录 · 最近一条：…”行。 |
| `soundsEnabled` | — | `boolean` | 界面音效是否启用（`demoscopeSoundEffectsEnabled`，默认开启）。 |
| `getSoundVolume` | — | `number (0–1)` | 已保存的音量（`demoscopeSoundEffectsVolume`，默认 0.4）。 |
| `playUiSound` | `kind = "click"` | `void` | 用 Web Audio 合成一小段音调序列（`click`、`select`、`toggle`、`copy`、`confirm`、`preview`、`tick`、`open`、`close`、`error`）；绝不抛出异常。 |
| `readSettingsHotkey` | — | `string` | 已保存的、用于打开设置对话框的 `KeyboardEvent.code`（默认 `F2`）。 |
| `formatHotkey` | `code: string` | `string` | 可读的按键名称（`KeyQ` → `Q`，`Numpad1` → `Num 1`）。 |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | 提取物理按键代码，将非拉丁键盘布局映射回 `KeyX`；无法使用时返回 `""`。 |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | 对 DemoScope 或播放器已占用的按键返回真（Enter、空格、方向键、`M`、`F`、`1`–`5` 等）。 |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | 创建（仅一次）并连接设置对话框：声音、音量、快捷键捕获、历史记录上限、导出/导入/报告/合并/清除、重置。 |
| `openSettingsDialog` | `opener = null` | `void` | 用当前值打开对话框，并记住需要归还焦点的元素。 |
| `installSettingsUi` | — | `void` | 安装全局捕获阶段的按键监听器（打开/关闭对话框、重新绑定）及声音事件。 |
| `installUiSoundEvents` | — | `void` | 委托式点击监听器，为 DemoScope 的控件播放反馈音。 |

## 备份、报告与历史记录上限

| 函数 | 参数 | 返回值 | 职责 |
|---|---|---|---|
| `exportLocalHistory` | — | `void` | 将全部历史记录下载为 `demoscope-history-YYYY-MM-DD.json`。 |
| `downloadHistoryFile` | `content: string, filename: string, mimeType: string` | `void` | 通过临时 Blob URL 触发文件下载。 |
| `collectHistoryReportRows` | `store: object` | `Array<{vodId, ts, summary, segment}>` | 展平并去重历史记录条目，最新的在前。 |
| `exportReadableHistory` | — | `void` | 下载独立的、已本地化的历史记录 HTML 报告。 |
| `buildReadableHistoryReport` | `rows: Array, reportTitle: string, summaryNote = ""` | `string (HTML document)` | 构建已转义的 HTML 报告标记。 |
| `setMergeReportStatus` | `statusElement: HTMLElement, message: string, state: string` | `void` | 更新合并工具的状态行（`progress`、`success`、`warning`）。 |
| `exportCombinedHistoryReports` | `files: FileList \| File[], statusElement: HTMLElement, button: HTMLButtonElement` | `Promise<void>` | 校验多个 JSON 备份（每个 ≤ 5 MB，总计 ≤ 100 MB），对条目去重，并下载一份合并的 HTML 报告。 |
| `isSafeHistoryKey` | `key: string` | `boolean` | 对历史记录键做白名单检查（拦截 `__proto__`、`constructor` 和格式错误的键）。 |
| `importLocalHistory` | `file: File` | `Promise<void>` | 校验 JSON 备份，将其合并进本地历史（遵守上限）并刷新界面。 |
| `readHistoryLimit` | `storageKey: string, allowedValues: number[], defaultValue: number` | `number` | 从 `localStorage` 读取数值上限，仅接受允许的值。 |
| `getHistoryPerKeyLimit` | — | `number` | 每个片段/对局键保留的条目数（10/20/30/50，默认 30）。 |
| `getHistoryTotalLimit` | — | `number` | 总共保留的片段/对局键数量（100/200/300/500，默认 300）。 |
| `readAdvancedPresetsOpen` | — | `boolean` | 扩展预设抽屉是否保持展开。 |

## 账号名称与邀请页面

| 函数 | 参数 | 返回值 | 职责 |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Steam 账号名称当前是否被隐藏。 |
| `installAccountNameControl` | — | `void` | 在退出登录链接旁添加眼睛形状的开关，并通过 `MutationObserver` 保持同步。 |
| `installInvitePage` | — | `boolean` | 重塑 `/vacnet/createinvite`：卡片布局、显示/隐藏与复制链接（Clipboard API，带 `execCommand` 回退）、条件列表、语言选择器。缺少预期元素时返回 `false`。 |

## 片段与播放器适配器

| 函数 | 参数 | 返回值 | 职责 |
|---|---|---|---|
| `parseSegmentBounds` | — | `{startTime, endTime, duration} \| null` | 从页面内联脚本中提取 `startTime`/`endTime`。 |
| `formatSegmentTime` | `seconds: number` | `string` | 将秒数格式化为 `m:ss.cc`。 |
| `getVideoElement` | — | `HTMLVideoElement \| null` | 查找审查用的 `<video>` 元素。 |
| `getVjsPlayer` | — | `Video.js player \| null` | 如果页面的 Video.js 播放器可用且未被销毁，则返回它。 |
| `createPlayerAdapter` | — | `adapter \| null` | 在 Video.js / HTML5 视频之上的统一 API：`currentTime`、`paused`、`pause`、`play`、`playbackRate(s)`、`muted`、`on`、`isFullscreen`、`requestFullscreen`、`exitFullscreen`。 |
| `waitForPlayerAdapter` | `timeoutMs = 20000` | `Promise<adapter>` | 每 100 ms 轮询一次直到出现播放器；超时则拒绝。 |
| `clampSegment` | `time: number, bounds: object` | `number` | 将时间限制在片段边界内。 |
| `segmentProgress` | `time: number, bounds: object` | `number (0–1)` | 片段内的相对位置。 |
| `installCustomControls` | `player, bounds, refreshDisplay: {current: Function}` | `void` | 在视频下方添加进度条、时间显示和快捷键提示。 |
| `pauseLayoutMutations` | `run: Function` | `void` | 在布局观察器被暂停期间运行回调（防止反馈循环）。 |
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | 当焦点位于输入框、文本域、下拉框、按钮、链接或可编辑元素中时返回真。 |
| `formatShiftSpeedLabel` | `rate: number` | `string` | 速度选项的标签。 |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | 速度选择器的 `<option>` 列表（0.5–4×）。 |
| `readStoredShiftSpeed` | — | `number` | 已保存的 Shift 加速倍率（默认 2×）。 |
| `readStoredVerdictRandomizer` | — | `boolean` | 已保存的判定随机化开关状态（默认关闭）。 |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | 连接播放速率处理、片段限制/暂停、跳转/逐帧/静音/全屏辅助函数以及全局键盘快捷键（`1`–`5`、方向键、`,` `.`、空格、`M`、`F`、Shift）。内部闭包：`applyPlayerRate`、`setShiftSpeed`、`setShiftSpeedActive`、`seekBy`、`stepFrame`、`togglePlay`、`toggleMute`、`toggleFullscreen`、绘制循环辅助函数。 |

## 判定预设

| 函数 | 参数 | 返回值 | 职责 |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | 在每个没有选择的判定组中选中“skip”。 |
| `getSelectedVerdictState` | — | `object` | `aimassist`、`wallhack`、`autobhop`、`bot` 的当前值（`positive` / `negative` / `skip` / `null`）。 |
| `detectActivePreset` | — | `string \| null` | 与当前选择匹配的预设名称。 |
| `syncPresetButtons` | — | `string \| null` | 更新预设按钮上的 `aria-pressed` 以及扩展预设徽章。 |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | 点击预设对应的单选框；开启随机化时会打乱顺序，并在点击之间等待 200–600 ms。运行期间禁用预设按钮。 |
| `normalizeVerdictLabels` | `root = document` | `void` | 从判定标签中去除高亮标记。 |
| `applyVerdictSectionTitles` | `root = document` | `void` | 在每个判定组上方添加本地化标题。 |

## 提示消息、页脚与提交加载

| 函数 | 参数 | 返回值 | 职责 |
|---|---|---|---|
| `hideSiteFooter` | — | `void` | 隐藏网站页脚。 |
| `showToast` | `message: string, type = "info", duration = 1800` | `void` | 显示不阻塞的 ARIA-live 提示消息。 |
| `markSubmitPending` | — | `void` | 在 `sessionStorage` 中保存提交时间戳和当前片段 id。 |
| `isSubmitPending` | — | `boolean` | 是否有提交正在等待下一个片段。 |
| `clearSubmitPending` | — | `void` | 清除“提交待处理”标记。 |
| `showSubmitLoadingOverlay` | `message = tr("nextClip")` | `void` | 显示整页加载遮罩。 |
| `hideSubmitLoadingOverlay` | — | `void` | 隐藏遮罩并清除待处理状态。 |
| `bootSubmitLoadingIfPending` | — | `void` | 若有待处理的提交，则在页面加载时重新显示遮罩。 |
| `isReviewPageReady` | `prevVod: string, startedAt: number` | `boolean` | 当下一个片段的界面和媒体都就绪时返回真。 |
| `finishSubmitLoadingWhenReady` | — | `Promise<void>` | 最多等待 30 s 以获取下一个片段，然后隐藏遮罩（超时则显示错误提示）。 |

## 本地历史存储

| 函数 | 参数 | 返回值 | 职责 |
|---|---|---|---|
| `extractVodId` | — | `string` | 从视频 URL 推导出片段/对局 id。 |
| `getGameKey` | — | `string` | 对局的历史键（`game::<id>`）。 |
| `getClipKey` | `bounds: object` | `string` | 单个片段的历史键（`<id>:<start>:<end>`）。 |
| `normalizeHistoryEntry` | `entry: any` | `{ts, summary, segment} \| null` | 校验并清理一条历史记录。 |
| `readHistoryEntries` | `store: object, key: string` | `Array` | 某个键的规范化条目。 |
| `getGameHistoryEntries` | `store: object` | `Array` | 当前对局的条目（支持旧版键）。 |
| `getClipHistoryEntries` | `store: object, bounds: object` | `Array` | 当前片段的条目。 |
| `formatClipId` | `vodId: string` | `string` | 由片段 id 哈希得到的短数字显示 id（`#0000000`）。 |
| `formatRelativeTime` | `timestamp: number` | `string` | 本地化的相对时间（`Intl.RelativeTimeFormat`）。 |
| `readClipHistoryStore` | — | `object` | 从 `localStorage` 加载历史对象（出错时为 `{}`）。 |
| `pruneHistoryStore` | `store: object` | `void` | 应用每键上限和总上限（最旧的键最先被丢弃）。 |
| `writeClipHistoryStore` | `store: object` | `boolean` | 修剪并保存；遇到配额/存储错误时返回 `false`。 |
| `summarizeCurrentVerdict` | — | `string` | 当前选择对应的预设名称，或 `mixed`。 |
| `formatSummaryLabel` | `summary: string` | `string` | 历史摘要的本地化标签。 |
| `formatClockTime` | `seconds: number` | `string` | `m:ss`（或 `x.xs`）时钟格式。 |
| `formatHumanSegment` | `bounds: object` | `string` | 可读的片段范围。 |
| `formatGameLabel` | — | `string` | 当前对局的本地化标签。 |
| `historyEntryKey` | `entry: object` | `string` | 用于去重的标识字符串。 |
| `formatPriorStat` | `count: number, label: string` | `string` | 历史面板中的“标签：N”行。 |
| `buildHistoryListItems` | `clipEntries: Array, gameEntries: Array, currentSegment: string` | `Array` | 将片段/对局条目合并为待显示项。 |
| `renderHistoryItem` | `item: object` | `string (HTML)` | 单行历史记录的标记。 |
| `escapeHtml` | `value: any` | `string` | 转义 `& < > " '`。 |
| `buildClipHistoryPanel` | `bounds, gameEntries, clipEntries` | `string (HTML)` | 历史面板的标记，包含审查规则按钮。 |
| `ensureClipHistoryPanel` | — | `void` | 若容器缺失则创建面板容器。 |
| `ensureReviewRulesDialog` | — | `void` | 创建审查规则对话框并绑定其打开/关闭按钮。 |
| `installLocalHistoryButton` | `panel: HTMLElement` | `void` | 绑定“本地历史”按钮（滚动到列表，或在为空时显示提示）。 |
| `positionClipHistoryPanel` | — | `void` | 使面板始终位于 `.verdicts-container` 中的第一个。 |
| `renderClipHistory` | `bounds: object \| null` | `void` | 为当前片段重新渲染历史面板。 |
| `appendReviewHistory` | `bounds: object \| null` | `void` | 将当前判定摘要追加到对局和片段的历史中。 |

## 提交流程

| 函数 | 参数 | 返回值 | 职责 |
|---|---|---|---|
| `isLabelingMode` | — | `boolean` | 在显示四个判定组的页面上返回真。 |
| `getProceedButton` | — | `HTMLButtonElement \| null` | 原生提交按钮（可见且可用时）。 |
| `recordProceedHistoryIfLabeling` | — | `void` | 每次提交只记录一次历史（带重入保护）。 |
| `resetProceedArmed` | — | `void` | 解除两步提交的预备状态。 |
| `refreshProceedButtonLabel` | — | `void` | 更新按钮标签/`Enter` 提示和预备状态样式。 |
| `verdictLabelForField` | `field: string, selected: string` | `string \| null` | 将选择映射为 `guilty_*` / `innocent_*` / `skip_*`。 |
| `prepareVerdictFormForSubmit` | — | `boolean` | 构建隐藏的 `verdict_labels[]` 输入；若有任一组未选择，则显示错误提示并返回 `false`。 |
| `isSafeSubmitTarget` | `form: HTMLFormElement` | `boolean` | 仅允许同源的 HTTPS 表单提交地址。 |
| `restoreSubmitUi` | — | `void` | 提交失败后恢复各按钮。 |
| `submitVerdictForm` | `{ recordHistory = false }` | `boolean` | 执行安全检查、显示加载遮罩并提交表单。 |
| `submitVerdictsDirect` | — | `boolean` | 准备标签并提交。 |
| `invokeProceedAction` | — | `boolean` | Enter/点击处理程序：第一次按下预备，第二次按下提交。 |
| `installProceedShortcut` | — | `void` | 针对 `Enter`/`NumpadEnter` 的捕获阶段监听器。 |
| `hookProceedButton` | — | `void` | 替换原生提交按钮的点击行为。 |
| `installVerdictChangeReset` | — | `void` | 判定变化时解除提交预备状态并重新同步预设。 |
| `scheduleProceedFooterFix` | — | `void` | 对 `fixProceedFooter` 的防抖（`requestAnimationFrame`）调用。 |
| `scheduleVerdictLabelsFix` | — | `void` | 防抖的标签/标题/默认值重新规范化。 |

## 布局与启动

| 函数 | 参数 | 返回值 | 职责 |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | 构建 Shift 加速倍率选择栏。 |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | 单个预设按钮的标记。 |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | 扩展预设分组的标记。 |
| `buildEnhancementBar` | — | `HTMLElement` | 构建快速判定栏：预设、随机化开关、扩展抽屉。 |
| `positionShiftSpeedBar` | — | `void` | 使速度栏保持在判定列表之前。 |
| `positionEnhancementBar` | — | `void` | 使预设栏保持在提交按钮之前。 |
| `fixProceedFooter` | — | `void` | 重新排列页脚、各栏和提交按钮。 |
| `enhanceLayout` | — | `void` | 应用所有布局更改并安装设置界面。 |
| `watchProceedFooter` | — | `void` | 观察 `.verdicts-container` 并安排页脚修正。 |
| `watchVerdictLabels` | — | `void` | 观察判定标签并安排重新规范化。 |
| `init` | — | `Promise<void>` | 入口：账号名称控件 → 邀请页面或审查页面 → 布局、观察器、快捷键、播放器增强。 |

### 上文未列出

* **`blockSegmentLoopGuard`**（IIFE，加载时运行）：包装页面上的 `setInterval`，将网站原生的 100 ms 片段循环计时器替换为空操作；片段由 DemoScope 自己的控件处理。
* **常量与表：**`SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC`（`PRESETS`：21 个定义）。
