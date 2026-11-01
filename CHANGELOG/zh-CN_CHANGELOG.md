<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/en_CHANGELOG.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/bg_CHANGELOG.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/hu_CHANGELOG.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/vi_CHANGELOG.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/el_CHANGELOG.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/da_CHANGELOG.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/id_CHANGELOG.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-ES_CHANGELOG.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-419_CHANGELOG.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/it_CHANGELOG.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-TW_CHANGELOG.md) · **简体中文** · [한국어](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ko_CHANGELOG.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/de_CHANGELOG.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/nl_CHANGELOG.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/no_CHANGELOG.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pl_CHANGELOG.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-PT_CHANGELOG.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-BR_CHANGELOG.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ro_CHANGELOG.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ru_CHANGELOG.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/th_CHANGELOG.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/tr_CHANGELOG.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/uk_CHANGELOG.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fi_CHANGELOG.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fr_CHANGELOG.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/cs_CHANGELOG.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/sv_CHANGELOG.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ja_CHANGELOG.md)

</div>
# DemoScope v1.4.0

自我保护版本：DemoScope 现在能够适应 VACNet 页面变化，不再中途失效，并会告知用户和开发者发生了什么。

### 新增
- **独立的设置步骤。** 每个布局和安装步骤分别运行。某一步失败时会记录错误，其余步骤仍会继续。
- 为视频容器、判定容器和提交区域提供**备用查找方式**。如果 VACNet 重命名视频容器的类，DemoScope 会通过播放器元素找到它。
- **平稳关闭。** 如果缺少视频或判定表单，或者至少五个设置步骤失败，DemoScope 会撤销自身更改、恢复 VACNet 页脚、仅保留设置窗口并显示一次通知。空队列页面仍按原方式识别，不会触发此操作。
- **诊断报告**（Settings → Diagnostics → Copy diagnostics）：脚本版本、时间、语言、浏览器、页面和任务类型、22 项元素检查（`ok` / `MISSING`）、记录的步骤错误，以及 DemoScope 修改前后的页面结构。结构信息仅包含标签、ID 和类，不包含页面文字。剪贴板被阻止时，报告会显示在可选中的文本框中。
- 对尚未完全渲染的页面最多等待 2 秒再进行判断。

### 本地化
- 在全部 29 种语言中新增 6 条诊断、复制结果和关闭通知相关文本。

# DemoScope v1.3.0

改进设置、邀请页面和判定文本。

### 新增
- **邀请页面关闭按钮。** 卡片角落的 × 与“Done”一样返回片段列表。
- **邀请页面快捷键：** `Enter` 执行“Done”，`Esc` 关闭页面。当按钮、链接、输入框、对话框或语言列表获得焦点时会忽略这些按键。可在 Hotkeys 的“Invite page”组中重新绑定。
- **按页面区分按键冲突。** 邀请页面没有播放器，因此该页面上的 `Enter` / `Esc` 不再与审核页面的同名按键冲突。设置快捷键仍是全局的。
- 设置窗口、子窗口和判定列表现在使用**深色细滚动条**，并设置深色 color-scheme。

### 更改
- **重新设计设置窗口。** 按使用频率排列：Hotkeys、Animations、Sound effects、Local history、Footer、Diagnostics（v1.4.0 新增）、Reset。Hotkeys 和 Animations 行会显示随设置更新的摘要。
- **统一重置所有设置。** 恢复音效、音量、快捷键和动画；历史记录保留。
- 设置窗口快捷键现在可在 Hotkeys 中编辑。
- **判定确认文本不再包含快捷键数字。** 避免显示“2Not sure”和“3No cheats seen”；数字徽标改由 CSS 绘制。
- 单问题任务的选项 2 现在为“Not sure”，与 VACNet 文本一样使用第一人称。

### 本地化
- 在全部 29 种语言中新增 12 条摘要、重置、邀请页面操作和“Not sure”相关文本。

CSS 深色方案: `color-scheme: dark`.

# DemoScope v1.2.1

### 本地化
- Hotkeys 和 Animations 窗口（每种语言 77 条文本）现已翻译为其余 27 种语言；此前只有英语和俄语版本。

# DemoScope v1.2.0

快捷键、动画和加载修复。

### 新增
- **Hotkeys 窗口**（Settings → Hotkeys）：全部 18 个快捷键均可重新绑定，按操作分组，提供说明和重置按钮。“Reset all”需要再次确认。
  - **冲突处理。** 若按键已被占用，会显示对应操作、分组和用途；可选择 Replace、Swap 或 Cancel。
  - `Esc` 可以绑定，录入快捷键时不会关闭窗口。拒绝 `Tab`、修饰键、Caps Lock、`F5`、`F11` 和 `F12`；`Shift` 仅用于按住生效的“Speed boost”。
  - 视频下方提示、徽标和 Continue/Cancel 按钮会跟随快捷键设置。
- `Esc` 可取消等待确认的判定，也可取消两步提交中的第一次 `Enter`。
- **Animations 窗口**（Settings → Animations）：六种样式、实时预览、三档速度和开关。如果系统要求减少动态效果，动画默认关闭。
- 判定单选按钮获得焦点时，`Enter` 和 `Esc` 也能使用。

### 修复
- **单问题任务提交后“loading next clip”耗时过长：**就绪检查不再等待不存在的 `aimassist` 字段，改为接受判定表单和媒体元数据，并提前开始；没有片段的页面会在 3 秒后静默关闭遮罩。
- 打开对话框时，页面快捷键（`Space`、`Enter` 等）不再作用于对话框后面的页面。

### 本地化
- Hotkeys 和 Animations 最初只有英语和俄语；其他语言在 v1.2.1 中补齐。

六种样式为 pulse、breathe、ripple、heartbeat、orbit 和 blink。

# DemoScope v1.1.0

支持 VACNet 单问题任务。

### 新增
- **单问题任务。** VACNet 有时会询问“Is the Subject cheating beyond a reasonable doubt?”，并提供 Cheating / Uncertain / No cheats seen。DemoScope 会识别该任务并切换为紧凑布局，隐藏快速判定、扩展组合和随机选择器。
- 使用 DemoScope 语言的判定标签、`1–3` 快捷键徽标和对应快捷键。
- **锁定指示器。** Uncertain 和 No cheats seen 仅在片段结束后解锁。卡片显示剩余时间和进度条；锁定选项会变暗，按下对应按键会播放错误音并抖动卡片。
- 视频下方提示改为 `Enter` 和 `1–3`；判定按钮加高。

### 本地化
- 在全部 29 种语言中新增 5 条标签、标题、说明和锁定提示文本。

# DemoScope v1.0.6

### 新增
- **DemoScope 自带四种判定类别的说明**，支持全部 29 种语言。VACNet 的问题在某些语言（例如乌克兰语）中会保留英文，因此“?”说明不再依赖它。

# DemoScope v1.0.5

### 新增
- AIM ASSIST、WALL HACK、AUTO BHOP 和 BOT 旁新增**“?”帮助按钮**，点击可查看类别说明；点击外部、再次点击或按 `Esc` 可关闭。按钮不接收键盘焦点，以免影响 `Enter` 和 `Space` 的审核功能。

### 修复
- Local history 按钮尺寸现在与相邻徽标一致，不换行，长标签会截短；徽标行会换行而不是被挤压。

# DemoScope v1.0.4

### 修复
- **更改 DemoScope 语言后，判定文本仍使用浏览器语言。** VACNet 使用 Steam 的 `?l=` 参数，而 DemoScope 之前只更改自己的标签。现在审核页面会使用选定的 `?l=` 打开；缺少参数时只重新请求一次。实际 VACNet 语言从 CSS 和脚本 URL 的 `l=` 参数读取；单次限制可避免不支持该语言时陷入重定向循环。

# DemoScope v1.0.3

### 更改
- **恢复判定按钮中的关键词高亮：**查询短语使用粗体橙色，否定回答中的“not”使用柔和蓝色。选中的按钮仍清晰易读。
- `normalizeVerdictLabels` 现在只移除 b 标记，从而保留高亮标记。

: `<b>`.

# DemoScope v1.0.2

### 修复
- **`Space`、`M` 和 `F` 看起来不起作用，**因为 VACNet / Video.js 会再次处理相同按键。DemoScope 现在会拦截它们。
- Firefox 中松开 `Space` 不再触发当前聚焦的播放器按钮。
- 判定单选按钮获得焦点时，播放器快捷键仍可用。

# DemoScope v1.0.1

兼容重新设计后的 VACNet 审核页面。

### 修复
- **面板只构建了一部分：**VACNet 的新门户标题、说明卡片、网格布局、移除 verdicts-container-inner 以及移动 submitbuttons 都会导致 `insertBefore` 出错。`ensureReviewStructure` 步骤会规范化标记，从而兼容新旧布局。

### 更改
- 隐藏门户标题和说明卡片；片段计数器也显示在标题徽标中。
- Continue 固定在面板底部，长译文撑高列表时仍保持可见。

技術選擇器: `.verdicts-container-inner`, `#submitbuttons`.

# DemoScope v1.0.0

DemoScope 用户脚本首次公开发布，用于 CS2 VACNet 审核页面。

### 新增
- 29 种语言界面、自动语言选择、五种快速判定预设和 15 种扩展组合。
- 分段视频控制、逐帧步进、`Shift` 加速、`Space` 播放/暂停、`M` 静音、`F` 全屏，以及按 `Enter` 两步提交判定。
- 可配置的本地审核历史、JSON 导入/导出、HTML 报告，以及合并多个 JSON 备份。
- 改进邀请页面、音效设置、设置快捷键、隐藏账户名称、审核规则对话框，以及可选判定随机器（默认关闭）。

### 隐私
- 无遥测；本地设置和历史记录不会上传。提交的判定通过网站常规表单发送至 VACNet。






