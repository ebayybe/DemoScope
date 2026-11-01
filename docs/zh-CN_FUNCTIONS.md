<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/en_FUNCTIONS.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/bg_FUNCTIONS.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/hu_FUNCTIONS.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/vi_FUNCTIONS.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/el_FUNCTIONS.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/da_FUNCTIONS.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/id_FUNCTIONS.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/es-419_FUNCTIONS.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/it_FUNCTIONS.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/zh-TW_FUNCTIONS.md) · **简体中文** · [한국어](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ko_FUNCTIONS.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/de_FUNCTIONS.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/nl_FUNCTIONS.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/no_FUNCTIONS.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/pl_FUNCTIONS.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/pt-PT_FUNCTIONS.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/pt-BR_FUNCTIONS.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ro_FUNCTIONS.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ru_FUNCTIONS.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/th_FUNCTIONS.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/tr_FUNCTIONS.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/uk_FUNCTIONS.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/fi_FUNCTIONS.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/fr_FUNCTIONS.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/cs_FUNCTIONS.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/sv_FUNCTIONS.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/docs/FUNCTIONS/ja_FUNCTIONS.md)

</div>

# DemoScope — 函数参考

`DemoScope.user.js` v1.4.0 中全部 217 个顶层函数的完整参考（名称、参数、返回值、职责）。返回 [README](../README.md)。

约定：`—` 表示无参数；`void` 表示调用该函数是为了其副作用。

## 用户行为概览

| 项目 | 功能说明 |
|---|---|
| 支持的页面 | 增强 VACNet 欢迎页（`/vacnet`）、审核页（`/vacnet/clips`）、邀请页（`/vacnet/createinvite`）以及审核页面中的无片段状态，不修改无关页面。 |
| 任务类型 | 自动识别 VACNet 提供的审核表单。**经典表单**（aim assist、wallhack、auto-bhop、bot）提供预设和扩展组合。较新的**单问题任务**使用紧凑布局，提供绑定到 `1`–`3` 的三个判定选项和显示片段剩余时间的锁定指示器，不显示快速判定或组合。 |
| 语言 | 支持 Steam 的 29 种语言。优先使用已保存的手动选择；否则读取 Steam 的 `?l=` 参数，再使用浏览器/页面语言。在 DemoScope 中选择语言也会向 VACNet 传递相应的 `?l=`，使 VACNet 自身的文本同步切换。自动模式会让 Steam 语言参数与浏览器语言保持一致。 |
| 欢迎页与邀请页 | 重新设计两个页面的样式，添加共用语言选择器，并通过眼睛按钮隐藏账户名称。欢迎页在焦点不位于交互控件时可用 Enter 或 Space 继续。邀请页可隐藏、显示和复制邀请链接，并说明邀请条件；× 关闭页面，Enter 执行“Done”，Esc 执行 × 的操作。 |
| 片段审核 | 添加判定预设和扩展组合、默认关闭的判定随机器、按住 Shift 时可调的播放速度、限定在片段区间内的定位、逐帧移动及播放快捷键。判定类别带有“?”按钮，可查看本地化说明；按钮中的关键词用 DemoScope 配色突出显示。 |
| 快捷键 | 所有快捷键都作为操作登记在统一注册表中，可在**设置 → 快捷键**中重新分配。冲突按页面范围检测（邀请页和审核页互不冲突），并显示当前占用该键的操作、分组和说明。可以替换、交换或取消。每项操作均可重置，页面提示会跟随按键设置。 |
| 提交操作 | `Enter` 或 `Numpad Enter`（默认）触发“Continue”。经典表单需先按一次准备操作，再按一次提交判定。单问题任务在选择判定后显示 VACNet 自带的确认，并由 `Enter` 确认。`Esc`（默认）可取消等待确认的判定，或撤销首次按键。Space 不用于提交。 |
| 设置 | 默认按 `F2` 打开设置窗口（可在快捷键窗口中改键）。包含：快捷键、动画、音效与音量、本地历史（启用、上限、12/24 小时格式、备份）、页脚显示、诊断，以及统一重置音效、快捷键和动画。 |
| 动画 | “DemoScope”旁的指示点可以播放动画。独立窗口提供六种样式（pulse、breathe、ripple、heartbeat、orbit、blink）、实时预览、三档速度和开关。如果操作系统要求减少动态效果，动画默认关闭。 |
| 本地历史 | 将判定摘要保存在当前浏览器的 `localStorage` 中，DemoScope 不会上传。历史可关闭、导入、导出为 JSON/HTML、将多个 JSON 备份合并为一个 HTML 报告或清除。上限可设为每个键 10/20/30/50 条、总计 100/200/300/500 个键。关闭后停止新增记录，但不删除旧数据。仅记录经典表单。 |
| 空队列 | 将 VACNet 的空队列消息替换为本地化说明、保存在浏览器中的首次出现时间和语言选择器。每日 250 个演示的文字是根据观察到的 VACNet 行为提供的信息；DemoScope 不会执行或绕过该服务限制。 |
| 页脚 | 使用本地化的 DemoScope 页脚。片段页面可显示反馈和举报链接；设置中可分别隐藏各链接、版权行或整个页脚。 |
| 容错与诊断 | 每个初始化步骤独立运行，单个步骤失败不会中断其他步骤。查找关键元素时带有备用方式。如果页面无法识别，DemoScope 会在该页面停用、恢复 VACNet 布局并显示简短提示。**设置 → 诊断**可复制文本报告，包含脚本版本、找到的元素、失败步骤和页面结构，便于提交错误报告。 |

## 本地化

| 函数 | 参数 | 返回值 | 作用 |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | 某个语言的旗帜内联 SVG 标记；没有时回退为地球图标。 |
| `getSavedLocale` | — | `string \| null` | 从 `localStorage` 读取用户保存的语言（`demoscopeLanguage`）。 |
| `getActiveLocale` | — | `string` | 确定当前语言：已保存的选择 → Steam `?l=` → 浏览器/页面语言 → `en`。 |
| `getLanguageBadge` | — | `string` | 语言自身的显示名称，例如“English version”，用于语言选择器的徽章。 |
| `getBrowserLocale` | — | `string \| null` | 查找首个受支持的浏览器语言，包括地区变体。 |
| `syncAutomaticLanguage` | — | `boolean` | 自动模式下将 ?l= 与浏览器语言同步；不一致时跳转页面。 |
| `getRenderedSteamLanguage` | — | `string \| null` | 从页面自身样式表和脚本 URL 中的 l= 参数读取 VACNet 实际使用的页面语言。 |
| `syncSelectedLanguage` | — | `boolean` | 在 DemoScope 中手动选择语言后，使用匹配的 ?l= 重新请求页面一次，使 VACNet 文本同步。语言已匹配时跳过，并防止重定向循环。发生跳转时返回 true。 |
| `tr` | `key: string` | `string` | 查找当前语言的界面字符串（回退顺序：英语，然后是键本身）。 |
| `inviteText` | `key: string` | `string` | 对邀请页面字符串表执行同样的查找。 |
| `settingText` | `key: string` | `string` | 对设置对话框字符串表执行同样的查找。 |
| `getPresetLabel` | `name: string` | `string` | 预设的本地化标签，可组合出“Bot + Aim”之类的组合。 |
| `buildLanguageOptions` | `{ activeLocale = getActiveLocale(), selectedLocale = null } = {}` | `string (HTML)` | 语言选项按钮的标记，包括“auto”条目。 |
| `installLanguageSelector` | `root: HTMLElement, onLocaleSelect: Function \| null = null` | `void` | 绑定并定位语言选择器，保存所选语言并重新加载页面；也可用可选回调处理选择。 |
| `queueNoticeText` | `key: string, locale = getQueueNoticeLocale()` | `string` | 查找空队列提示或页脚的本地化文本。 |

## 音效与设置对话框

| 函数 | 参数 | 返回值 | 作用 |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | 设置对话框中显示的“N 条记录 · 最近一条：…”行。 |
| `soundsEnabled` | — | `boolean` | 界面音效是否启用（`demoscopeSoundEffectsEnabled`，默认开启）。 |
| `getSoundVolume` | — | `number (0–1)` | 已保存的音量（`demoscopeSoundEffectsVolume`，默认 0.4）。 |
| `playUiSound` | `kind = "click"` | `void` | 用 Web Audio 合成一小段音调序列（`click`、`select`、`toggle`、`copy`、`confirm`、`preview`、`tick`、`open`、`close`、`error`）；绝不抛出异常。 |
| `readSettingsHotkey` | — | `string` | 已保存的、用于打开设置对话框的 `KeyboardEvent.code`（默认 `F2`）。 |
| `formatHotkey` | `code: string` | `string` | 可读的按键名称（`KeyQ` → `Q`，`Numpad1` → `Num 1`）。 |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | 提取物理按键代码，将非拉丁键盘布局映射回 `KeyX`；无法使用时返回 `""`。 |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | 对 DemoScope 或播放器已占用的按键返回真（Enter、空格、方向键、`M`、`F`、`1`–`5` 等）。 |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | 创建并连接设置对话框：音效和音量、试听、快捷键、本地历史记录及上限、时间格式、JSON 导入/导出、HTML 导出/合并、清除历史记录、页脚显示选项和重置。 |
| `openSettingsDialog` | `opener = null` | `void` | 用当前值打开对话框，并记住需要归还焦点的元素。 |
| `installSettingsUi` | — | `void` | 安装全局捕获阶段的按键监听器（打开/关闭对话框、重新绑定）及声音事件。 |
| `installUiSoundEvents` | — | `void` | 委托式点击监听器，为 DemoScope 的控件播放反馈音。 |
| `ensureSettingsLayoutStyles` | — | `void` | 注入设置窗口样式：区块左对齐，条目行带摘要标签。 |
| `refreshSettingsSummaries` | — | `void` | 更新快捷键和动画条目的摘要标签。 |
| `installExtraSettingsSections` | `settingsDialog: HTMLDialogElement` | `void` | 添加快捷键、动画、诊断和重置区块，并隐藏旧的设置快捷键区块。 |

## 备份、报告与历史记录上限

| 函数 | 参数 | 返回值 | 作用 |
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

## 账号名称与邀请页面

| 函数 | 参数 | 返回值 | 作用 |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Steam 账号名称当前是否被隐藏。 |
| `installAccountNameControl` | — | `void` | 在退出登录链接旁添加眼睛形状的开关，并通过 `MutationObserver` 保持同步。 |
| `installInvitePage` | — | `boolean` | 重塑 `/vacnet/createinvite`：卡片布局、显示/隐藏与复制链接（Clipboard API，带 `execCommand` 回退）、条件列表、语言选择器。缺少预期元素时返回 `false`。 |
| `installInviteExtras` | `card: HTMLElement, doneLink: HTMLElement \| null` | `void` | 添加关闭（×）按钮，并捕获 inviteDone 和 inviteClose 操作；焦点位于按钮、链接、输入框、模态框或语言列表时忽略按键。 |
| `refreshInviteKeyLabels` | — | `void` | 根据当前绑定更新“完成”按钮的按键标记和 × 提示。 |
| `installWelcomePage` | — | `boolean` | 调整欢迎页样式，添加品牌标识和语言选择器；按 Enter/Space 继续；缺少必要元素时返回 false。 |

## 片段与播放器适配器

| 函数 | 参数 | 返回值 | 作用 |
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
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | 焦点位于输入框、textarea、select 或可编辑文本中时返回 true。 |
| `isPlayerShortcutBlocked` | `target: EventTarget` | `boolean` | 类似 isShortcutBlocked，但允许判定单选按钮通过，因为点击后焦点仍停留在按钮上。 |
| `formatShiftSpeedLabel` | `rate: number` | `string` | 速度选项的标签。 |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | 速度选择器的 `<option>` 列表（0.5–4×）。 |
| `readStoredShiftSpeed` | — | `number` | 已保存的 Shift 加速倍率（默认 2×）。 |
| `readStoredVerdictRandomizer` | — | `boolean` | 已保存的判定随机化开关状态（默认关闭）。 |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | 连接播放速率处理、片段限制/暂停、跳转/逐帧/静音/全屏辅助函数以及全局键盘快捷键（`1`–`5`、方向键、`,` `.`、空格、`M`、`F`、Shift）。内部闭包：`applyPlayerRate`、`setShiftSpeed`、`setShiftSpeedActive`、`seekBy`、`stepFrame`、`togglePlay`、`toggleMute`、`toggleFullscreen`、绘制循环辅助函数。 |

## 判定预设

| 函数 | 参数 | 返回值 | 作用 |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | 在每个没有选择的判定组中选中“skip”。 |
| `getSelectedVerdictState` | — | `object` | `aimassist`、`wallhack`、`autobhop`、`bot` 的当前值（`positive` / `negative` / `skip` / `null`）。 |
| `detectActivePreset` | — | `string \| null` | 与当前选择匹配的预设名称。 |
| `syncPresetButtons` | — | `string \| null` | 更新预设按钮上的 `aria-pressed` 以及扩展预设徽章。 |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | 点击预设对应的单选框；开启随机化时会打乱顺序，并在点击之间等待 200–600 ms。运行期间禁用预设按钮。 |
| `readAdvancedPresetsOpen` | — | `boolean` | 扩展预设抽屉是否保持展开。 |
| `normalizeVerdictLabels` | `root = document` | `void` | 从判定标签中去除高亮标记。 |
| `applyVerdictSectionTitles` | `root = document` | `void` | 在每个判定组上方添加本地化标题。 |
| `ensureVerdictHelp` | `block: HTMLElement, titleEl: HTMLElement, title: string, field: string` | `void` | 为一个判定组创建“？”按钮和说明弹层，优先使用 DemoScope 的本地化文本。 |
| `closeVerdictHelp` | `except = null` | `void` | 关闭除指定弹层外的所有说明弹层。 |
| `installVerdictHelpHandlers` | — | `void` | 一次性为说明弹层安装委托点击、外部点击和 Esc 处理逻辑。 |

## 提示消息、页脚与提交加载

| 函数 | 参数 | 返回值 | 作用 |
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

| 函数 | 参数 | 返回值 | 作用 |
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
| `isLocalHistoryEnabled` | — | `boolean` | 读取本地历史记录是否启用；默认启用。 |
| `readTimeFormat` | — | `string` | 读取时间格式：自动、12 小时或 24 小时。 |
| `formatQueueFirstSeen` | `timestamp: number, locale = getActiveLocale()` | `string` | 根据语言和时间格式格式化首次检测时间。 |
| `getQueueNoticeLocale` | — | `string` | 返回空队列通知当前使用的语言。 |
| `migrateEmptyQueueLanguage` | — | `boolean` | 将旧语言选择迁移到通用设置并同步 URL。 |
| `updateEmptyQueueTimestamp` | — | `void` | 更新显示的首次检测时间。 |

## 提交流程

| 函数 | 参数 | 返回值 | 作用 |
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
| `submitVerdictForm` | `{ recordHistory = false } = {}` | `boolean` | 执行安全检查、显示加载遮罩并提交表单。 |
| `submitVerdictsDirect` | — | `boolean` | 准备标签并提交。 |
| `invokeProceedAction` | — | `boolean` | Enter/点击处理程序：第一次按下预备，第二次按下提交。 |
| `installProceedShortcut` | — | `void` | 针对 `Enter`/`NumpadEnter` 的捕获阶段监听器。 |
| `invokeCancelAction` | — | `boolean` | 取消双步提交的首次按键准备，或点击可见的“取消”按钮；无事可取消时返回 false。 |
| `refreshCancelButtonLabel` | — | `void` | 为“取消”按钮添加或更新按键标记。 |
| `hookProceedButton` | — | `void` | 替换原生提交按钮的点击行为。 |
| `installVerdictChangeReset` | — | `void` | 判定变化时解除提交预备状态并重新同步预设。 |
| `scheduleProceedFooterFix` | — | `void` | 对 `fixProceedFooter` 的防抖（`requestAnimationFrame`）调用。 |
| `scheduleVerdictLabelsFix` | — | `void` | 防抖的标签/标题/默认值重新规范化。 |

## 快捷键注册表与重新映射

| Action | Default | Group | 功能说明 |
|---|---|---|---|
| `playPause` | `Space` | Playback | 暂停或继续播放片段。 |
| `mute` | `M` | Playback | 静音或取消静音。 |
| `fullscreen` | `F` | Playback | 进入或退出全屏。 |
| `seekBack` / `seekForward` | `←` / `→` | 导航 | 向后/向前跳转 5 秒。 |
| `frameBack` / `frameForward` | `,` / `.` | 导航 | 向后/向前移动一帧。 |
| `speedBoost` | `Shift` | Navigation | 按住时加速播放；这是唯一可绑定 Shift 的操作。 |
| `quick1` … `quick5` | `1` … `5` | 判定 | 经典表单：预设 1–5。单问题任务：Cheating / Not sure / No cheats seen（`1`–`3`）。 |
| `proceed` | `Enter` | Submission | 确认判定，或准备并提交经典表单。 |
| `cancel` | `Esc` | Submission | 点击“取消”，或撤销首次 Enter 按键。 |
| `inviteDone` | `Enter` | Invite page | 离开邀请页面，与“完成”按钮作用相同。 |
| `inviteClose` | `Esc` | Invite page | 执行与 × 按钮相同的操作。 |
| `settings` | `F2` | Interface | 打开或关闭设置对话框。 |

按键以 `KeyboardEvent.code` 值存储在 `demoscopeKeybindings` 中（仅保存与默认值不同的项目；设置快捷键单独存储）。左右修饰键视为同一个键，数字小键盘对应主键区。不可分配的键：`Tab`、`Ctrl`、`Alt`、`Meta`、`Caps Lock`、`ContextMenu`、`F5`、`F11`、`F12`。冲突按范围划分：`review`、`invite`，以及会与所有操作冲突的设置 `global` 键。

| 函数 | 参数 | 返回值 | 作用 |
|---|---|---|---|
| `fmt` | `template: string, vars = {}` | `string` | 替换本地化模板中的 {name} 占位符。 |
| `isModalOpen` | — | `boolean` | 任一 <dialog> 打开时返回 true；此时不处理页面快捷键。 |
| `normalizeKeyCode` | `code: string` | `string` | 合并左右修饰键，并将小键盘数字和 NumpadEnter 映射到主键区对应按键。 |
| `formatKeyLabel` | `code: string` | `string` | 返回按键显示名称（ArrowLeft → ←、KeyM → M、Escape → Esc）。 |
| `loadKeyOverrides` | — | `object` | 读取并验证已保存的按键绑定（带缓存；出错时返回 {}）。 |
| `saveKeyOverrides` | `overrides: object` | `void` | 保存绑定；全部为默认值时移除记录。 |
| `getBinding` | `id: string` | `string` | 返回操作当前绑定的按键；未绑定时返回空字符串。 |
| `setBinding` | `id: string, code: string` | `void` | 为操作保存按键；空代码会取消绑定，默认值不会持久化。 |
| `resetAllBindings` | — | `void` | 将所有绑定（包括设置快捷键）恢复为默认值。 |
| `findKeyConflict` | `id: string, code: string` | `object \| null` | 查找在重叠作用范围内已使用该按键的其他操作。 |
| `getActionForEvent` | `event: KeyboardEvent, scope = currentKeyScope()` | `string \| null` | 根据当前页面作用范围，将键盘事件解析为操作 ID。 |
| `keyScopeOf` | `id: string` | `string` | 返回操作的作用范围：review、invite 或 global。 |
| `keyScopesOverlap` | `a: string, b: string` | `boolean` | 若两个作用范围相同或任一为 global，则返回 true。 |
| `currentKeyScope` | — | `string` | 邀请页面返回 invite，其他页面返回 review。 |
| `validateKeyForAction` | `id: string, code: string` | `string` | 按键可用时返回空字符串；浏览器保留键返回 reserved；非按住型操作绑定 Shift 时返回 shift。 |
| `quickRangeLabel` | `count: number` | `string` | 生成快速判定按键标签：未修改时为 1–5，否则显示绑定的按键。 |
| `buildHintsInnerMarkup` | — | `string (HTML)` | 根据当前绑定生成视频下方的按键提示。 |
| `refreshKeyLabels` | — | `void` | 更新页面上所有按键标签，包括提示、按钮标记、继续/取消/邀请按钮及设置摘要。 |
| `ensureDemoscopeDialogStyles` | — | `void` | 注入快捷键和动画窗口共用的样式。 |
| `hkActionName` | `id: string` | `string` | 返回本地化的操作名称。 |
| `hkGroupName` | `group: string` | `string` | 返回本地化的分组名称。 |
| `hkActionDescription` | `id: string` | `string` | 返回本地化的操作说明；快速判定会分别说明两种任务模式。 |
| `hkSetMessage` | `text: string, warn = false` | `void` | 设置快捷键窗口的状态栏文本。 |
| `hkCancelCapture` | — | `void` | 退出按键捕获模式。 |
| `hkRowMarkup` | `action: object` | `string (HTML)` | 生成一行操作的 HTML；存在待处理冲突时包含冲突面板。 |
| `renderHotkeys` | — | `void` | 重新渲染整个窗口并保留滚动位置。 |
| `hkCommit` | `actionId: string, code: string, mode = "replace"` | `void` | 分配按键；replace 会取消另一操作的绑定，swap 会与其交换按键。 |
| `hkRequestAssign` | `actionId: string, code: string` | `void` | 直接分配按键；若已被占用，则打开冲突面板（Replace / Swap / Cancel）。 |
| `ensureHotkeysDialog` | — | `HTMLDialogElement` | 创建快捷键窗口和捕获阶段的按键监听器；捕获按键时 Esc 可被分配且不会关闭窗口。 |
| `openHotkeysDialog` | — | `void` | 打开快捷键窗口。 |

## 动画

指示点有六种样式（`pulse`、`breathe`、`ripple`、`heartbeat`、`orbit`、`blink`）、三档速度（0.6× / 1× / 1.7×）及开关，保存在 `demoscopeAnimStyle`、`demoscopeAnimSpeed` 和 `demoscopeAnimEnabled` 中。启用时通过 `<html>` 的 `data-ds-anim` 设置样式，关闭时为 `off`；样式表同时控制实时指示点和预览。

| 函数 | 参数 | 返回值 | 作用 |
|---|---|---|---|
| `readStorage` | `key: string` | `string \| null` | 安全读取 localStorage。 |
| `writeStorage` | `key: string, value: string \| null` | `void` | 安全写入 localStorage；值为 null 时删除键。 |
| `animEnabled` | — | `boolean` | 读取动画开关；系统启用减少动态效果时默认关闭。 |
| `animStyle` | — | `string` | 读取已保存的动画样式（默认 pulse）。 |
| `animSpeedKey` | — | `string` | 读取已保存速度（slow / normal / fast，默认 normal）。 |
| `ensureAnimationStyles` | — | `void` | 注入指示点和预览点共用的关键帧与样式规则。 |
| `applyAnimationSettings` | — | `void` | 将样式、速度和开关应用到 <html>，并更新设置摘要。 |
| `ensureAnimationsDialog` | — | `HTMLDialogElement` | 创建动画窗口，含开关、速度、带实时预览的样式卡片和重置功能。 |
| `openAnimationsDialog` | — | `void` | 打开动画窗口。 |
| `ensureUiPolishStyles` | — | `void` | 为窗口和判定列表设置深色细滚动条及 color-scheme: dark。 |

## 单问题任务

| 函数 | 参数 | 返回值 | 作用 |
|---|---|---|---|
| `isCheatingMode` | — | `boolean` | 当页面显示单问题表单（#verdictbuttons_cheating）时返回 true。 |
| `selectCheatingVerdict` | `kind: string` | `void` | 点击 Cheating / Not sure / No cheats seen 单选项；选项锁定时播放错误音效并抖动锁定卡片。 |
| `localizeCheatingVerdicts` | — | `void` | 将三个标签改为 DemoScope 当前语言，并用 CSS 绘制按键标记，避免按键数字出现在 VACNet 确认文本中；同时准备锁定卡片。 |
| `updateCheatingLock` | — | `void` | 更新锁定卡片与进度条，显示其他两个判定解锁前的剩余时间；解锁或选定判定后隐藏。 |
| `startCheatingLockWatcher` | — | `void` | 启动每 250 毫秒调用 updateCheatingLock 的计时器。 |

## 容错与诊断

| 函数 | 参数 | 返回值 | 作用 |
|---|---|---|---|
| `recordFailure` | `step: string, error: any` | `void` | 为诊断报告记录失败步骤；记录数量有上限。 |
| `safeStep` | `step: string, fn: Function, fallback?: any` | `any` | 运行一个初始化步骤；出错时记录错误并返回备用值，让后续步骤继续执行。 |
| `getVideoContainer` | — | `HTMLElement \| null` | 查找视频容器；找不到时使用播放器或 <video> 元素的父级。 |
| `getVerdictContainer` | — | `HTMLElement \| null` | 查找判定容器；找不到时使用第一个判定块的父级。 |
| `getSubmitArea` | — | `HTMLElement \| null` | 查找提交/确认区域（#submitbuttons、.submitbuttons 或提交按钮的父级）。 |
| `hasVerdictForm` | — | `boolean` | 至少存在一个判定单选按钮时返回 true。 |
| `removeEnhancements` | — | `void` | 移除 DemoScope 面板、类和页脚修改，并恢复 VACNet 页脚。 |
| `disableDemoScope` | `reason: string` | `void` | 在当前页面停用 DemoScope、撤销修改、只保留设置窗口，并在每个会话中针对每种原因提示一次。 |
| `isOwnNode` | `el: Element` | `boolean` | 若元素由 DemoScope 创建则返回 true；这类元素不会纳入结构报告。 |
| `elementSignature` | `el: Element` | `string` | 生成结构报告使用的 tag#id.class[…] 标识，不含文本。 |
| `skeletonOf` | `root: Element, maxDepth = 7, maxNodes = 170` | `string` | 生成由标签、ID 和类组成的紧凑缩进树；相同的相邻元素合并为 ×N。 |
| `captureOriginalSkeleton` | — | `void` | 在 DemoScope 修改页面前记录其结构。 |
| `buildDiagnosticsReport` | — | `string` | 生成包含版本、页面、语言、浏览器、任务类型、22 项元素检查、失败步骤及修改前后结构的报告；不含页面文本或账户数据。 |
| `fallbackCopyText` | `text: string` | `boolean` | Clipboard API 不可用时，通过临时文本框复制文本。 |
| `copyDiagnostics` | `statusEl: HTMLElement, textarea: HTMLTextAreaElement` | `Promise<void>` | 复制报告；失败时将文本显示在可选择的文本框中。 |

## 布局与启动

| 函数 | 参数 | 返回值 | 作用 |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | 构建 Shift 加速倍率选择栏。 |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | 单个预设按钮的标记。 |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | 扩展预设分组的标记。 |
| `buildEnhancementBar` | — | `HTMLElement` | 构建快速判定栏：预设、随机化开关、扩展抽屉。 |
| `positionShiftSpeedBar` | — | `void` | 使速度栏保持在判定列表之前。 |
| `positionEnhancementBar` | — | `void` | 使预设栏保持在提交按钮之前。 |
| `fixProceedFooter` | — | `void` | 重新排列页脚、各栏和提交按钮。 |
| `enhanceLayout` | — | `void` | 应用所有布局更改并安装设置界面。 |
| `ensureReviewStructure` | — | `void` | 规范 VACNet 标记：用 .verdicts-container-inner 包裹判定块，将 #submitbuttons 移入容器，并在标题标签中同步片段计数。兼容旧版和重设计后的标记。 |
| `watchProceedFooter` | — | `void` | 观察 `.verdicts-container` 并安排页脚修正。 |
| `watchVerdictLabels` | — | `void` | 观察判定标签并安排重新规范化。 |
| `readFooterPreference` | `storageKey: string` | `boolean` | 从 localStorage 读取页脚显示偏好。 |
| `saveFooterPreference` | `storageKey: string, hidden: boolean` | `void` | 保存页脚显示偏好。 |
| `applyFooterPreferences` | `footer: HTMLElement \| null = document.querySelector(".demoscope-custom-footer")` | `void` | `void` |
| `installDemoScopeFooter` | `withClipLinks: boolean, locale = getActiveLocale(), showFeedback = true` | `HTMLElement` | 创建或更新本地化页脚，可选择包含链接，并应用显示偏好。 |
| `installEmptyQueueNotice` | — | `boolean` | 将空队列提示替换为含说明、时间、语言选择器和页脚的本地化内容。 |
| `init` | — | `Promise<void>` | 入口：账号名称控件 → 邀请页面或审查页面 → 布局、观察器、快捷键、播放器增强。 |

VACNet 所需页面元素不可用时，`installWelcomePage` 和 `installInvitePage` 返回 `false`。页面不处于空队列状态时，`installEmptyQueueNotice` 返回 `false`。

### 其他项目

* **`blockSegmentLoopGuard`** （IIFE，页面加载时运行）：包装页面的 `setInterval`，将网站原生的 100 毫秒片段循环计时器替换为空操作；片段改由 DemoScope 自己的控件处理。
* **常量与表：** `SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC` (`PRESETS`: 21 definitions); added since v1.0.0: `KEY_ACTIONS`, `KEY_GROUPS`, `KEY_ACTION_BY_ID`, `KEY_ACTION_SCOPE`, `RESERVED_KEY_CODES`, `CHEATING_KEYS`, `VERDICT_SECTION_TITLES`, `VERDICT_SECTION_HELP`, `ANIM_STYLES`, `ANIM_SPEEDS`.
* **模块状态：** `diag` (step failures, the switch-off reason and the original page structure), `hkState` (state of the Hotkeys window) and the `SCRIPT_VERSION` constant used by the diagnostics report.
* **文本：**所有面向用户的文案都位于上述本地化表中；v1.2.0–v1.4.0 新增窗口已翻译为全部 29 种语言。

## 存储键

| 键名 | 存储位置 | 用途 |
|---|---|---|
| `demoscopeLanguage`, `demoscopeLanguageAuto` | `localStorage` | 所选语言 / 自动模式。 |
| `demoscopeKeybindings` | `localStorage` | 与默认值不同的快捷键（JSON）。 |
| `demoscopeSettingsHotkey` | `localStorage` | 打开设置对话框的按键（移除后为 none）。 |
| `demoscopeAnimEnabled`, `demoscopeAnimStyle`, `demoscopeAnimSpeed` | `localStorage` | 指示点动画设置。 |
| `demoscopeSoundEffectsEnabled`, `demoscopeSoundEffectsVolume` | `localStorage` | 声音设置。 |
| `demoscopeClipHistory` 及历史记录上限/格式键 | `localStorage` | 本地审核历史及其设置。 |
| `demoscopeSubmitPending`, `demoscopeSubmitPrevVod`, `demoscopeLangSyncTried`, `demoscopeDisabledNotice` | `sessionStorage` | 提交加载状态、语言同步保护标记，以及仅显示一次的“已关闭”提示。 |








