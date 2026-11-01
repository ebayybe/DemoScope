<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/README/README.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/README/bg_README.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/README/hu_README.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/README/vi_README.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/README/el_README.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/README/da_README.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/README/id_README.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/README/es-ES_README.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/README/es-419_README.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/README/it_README.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/README/zh-TW_README.md) · **简体中文** · [한국어](https://github.com/ebayybe/DemoScope/blob/main/README/ko_README.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/README/de_README.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/README/nl_README.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/README/no_README.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/README/pl_README.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-PT_README.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-BR_README.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/README/ro_README.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/README/ru_README.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/README/th_README.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/README/tr_README.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/README/uk_README.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/README/fi_README.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/README/fr_README.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/README/cs_README.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/README/sv_README.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/README/ja_README.md)

</div>

<br>

<div align="center">

# DemoScope

**面向 CS2 VACNet 审核的键盘优先工具集。**<br>
判定预设 · 适配片段的播放器 · 可重新映射的快捷键 · 私密本地历史记录 · 29 种语言。

<br>

[![Version](https://img.shields.io/badge/version-1.4.0-3b82f6?style=flat-square)](https://github.com/ebayybe/DemoScope/releases)
[![License](https://img.shields.io/badge/license-MIT-22c55e?style=flat-square)](https://github.com/ebayybe/DemoScope/blob/main/LICENSE)
[![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-f59e0b?style=flat-square)](#安装)
[![Languages](https://img.shields.io/badge/languages-29-8b5cf6?style=flat-square)](#语言)
[![Privacy](https://img.shields.io/badge/telemetry-none-64748b?style=flat-square)](#隐私)

<br>

[**⬇ 安装 DemoScope**](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js)

[功能](#功能) · [安装](#安装) · [键盘快捷键](#键盘快捷键) · [自定义](#自定义) · [文档](https://github.com/ebayybe/DemoScope/blob/main/docs/en_FUNCTIONS.md) · [更新日志](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/en_CHANGELOG.md)

</div>

<br>

## 屏幕截图

<table>
  <tr>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png" alt="DemoScope 欢迎界面"></a><br><sub><b>欢迎界面</b></sub></td>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png" alt="DemoScope 主界面"></a><br><sub><b>主界面</b></sub></td>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png" alt="DemoScope 邀请页面"></a><br><sub><b>邀请好友</b></sub></td>
  </tr>
</table>

## 概述

DemoScope 改进了 Counter-Strike VACNet 审核页面（counter-strike.net/vacnet）。无需逐个点击短片段的判定表单，即可通过键盘操作：使用判定预设、仅限审核片段的进度条、逐帧播放、临时加速、两步提交，以及仅保存本人判定结果的私密历史记录。脚本支持当前 VACNet 的两种表单（经典四问题表单和新版单问题任务）；如果 Valve 更改页面，它会安全停用。所有功能都在浏览器本地运行。

## 功能

| | |
|---|---|
| **审核流程** | 按 1–5 键应用 5 个快速判定预设，另有 15 种扩展组合。随机判定器为可选功能，默认关闭。按 Enter 准备提交，再按一次发送；Esc 取消。 |
| **两种任务类型** | 可识别经典表单（aim assist、wallhack、auto-bhop、bot）和单问题任务 “Is the Subject cheating beyond a reasonable doubt?”。新版任务采用紧凑布局，1–3 键带有判定标签，并显示倒计时至片段结束的锁定指示器。 |
| **适配片段的播放器** | 进度条和时间读数限制在片段起止范围内；支持前后跳转 5 秒、以 1/64 秒逐帧移动、按住 Shift 临时加速（0.5×–4×）、静音和全屏快捷键。 |
| **自定义快捷键** | 在专用窗口中重新设置 18 项操作。发生冲突时会先说明相关操作、分组和用途；页面上的按键提示也会同步更新。 |
| **动画** | 提供实时预览窗口、6 种指示器样式、3 档速度和开关。默认遵循系统的减少动态效果设置。 |
| **清晰的判定说明** | 每种判定旁的“?”可显示说明，并突出关键措辞，避免忽略“不”等字眼。 |
| **私密本地历史记录** | 在 localStorage 中按片段和比赛保存历史；支持 JSON 导入导出、HTML 报告，以及将多个备份合并为一份报告。 |
| **邀请页面** | 重新设计 /vacnet/createinvite 页面，提供显示/隐藏、一键复制、要求摘要、关闭按钮以及 Enter/Esc 快捷键。 |
| **29 种语言** | 优先使用你选择的语言，其次是 Steam 的 ?l= 设置，最后使用浏览器语言。在 DemoScope 中选择语言也会切换 VACNet 的文本。 |
| **音效** | 使用 Web Audio 合成提示音，可调音量、试听和开关。 |
| **适应页面改版** | 初始化步骤彼此隔离，关键元素设有备用查找方式。若无法识别页面，DemoScope 会自行停用，不改动 VACNet。可一键复制诊断报告用于反馈问题。 |

## 安装

1. 安装 [Tampermonkey](https://www.tampermonkey.net/) 或 [Violentmonkey](https://violentmonkey.github.io/) 等用户脚本管理器。脚本使用 GM_addStyle 和 unsafeWindow。
2. [**安装 DemoScope**](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js)，并在管理器中确认安装。
3. 登录 Steam 并打开 [counter-strike.net/vacnet](https://www.counter-strike.net/vacnet/)。
4. 打开审核片段，DemoScope 会自动运行（/vacnet/join 页面除外）。

更新通过用户脚本管理器推送。DemoScope 支持基于 Chromium 的浏览器和 Firefox。

## 键盘快捷键

当焦点不在可编辑字段或其他交互控件中时，快捷键可在审核页面使用。**所有快捷键均可在“设置 → 快捷键”中更改。**

| 按键 | 操作 |
|---|---|
| 1–5 | 经典表单：应用预设（1 bot + aim + wallhack；2 aim + wallhack；3 rage；4 无违规；5 不确定）。 |
| 1、2、3 | 单问题任务：作弊 / 不确定 / 未发现作弊。 |
| Enter | 确认。经典表单中，第一次按下准备提交，第二次按下发送。 |
| Esc | 取消等待确认的判定，或取消第一次 Enter 的待提交状态。 |
| Shift（按住） | 加速播放（0.5×–4×，默认 2×，可在页面选择）。 |
| ← → | 后退 / 前进 5 秒。 |
| , . | 后退 / 前进一帧（1/64 秒）。 |
| Space | 播放 / 暂停。 |
| M / F | 静音 / 全屏（双击视频也可切换全屏）。 |
| F2 | 打开设置窗口。 |
| Enter / Esc（邀请页面） | 完成 / 关闭。 |

## 自定义

按 F2 打开设置窗口，选项按使用频率排序：

- **快捷键**：专用窗口按用途分组操作；可单独重置或“全部重置”。冲突时可选择**替换**、**交换**或**取消**。Esc 也可分配给操作。
- **动画**：选择样式（脉冲、呼吸、波纹、心跳、轨道、闪烁）、速度，或关闭动画。每张卡片都有实时预览。
- **音效**：开关、音量（也可用鼠标滚轮调节）和测试按钮。
- **本地历史**：开关、每个键和条目的数量上限、12/24 小时制、JSON 备份和 HTML 报告。
- **页脚**：隐藏反馈链接、报告链接、版权行或整个页脚。
- **诊断**：复制问题报告（参见[报告问题](#报告问题)）。
- **重置**：一键恢复音效、快捷键和动画默认值；历史记录会保留。

## 语言

DemoScope 支持 29 种语言：保加利亚语、简体和繁体中文、捷克语、丹麦语、荷兰语、英语、芬兰语、法语、德语、希腊语、匈牙利语、印度尼西亚语、意大利语、日语、韩语、挪威语、波兰语、葡萄牙语（葡萄牙和巴西）、罗马尼亚语、俄语、西班牙语（西班牙和拉丁美洲）、瑞典语、泰语、土耳其语、乌克兰语和越南语。可随时通过页面中的语言选择器切换。

## 报告问题

Valve 可能会在不通知的情况下更改 VACNet 页面。如果有功能失效：

1. 按 F2 打开**诊断**，然后点击**复制诊断信息**。
2. 将文本粘贴到新的 [issue](https://github.com/ebayybe/DemoScope/issues) 中；如果可以，也请附上截图。

报告包含脚本版本、时间、浏览器语言和 user-agent、找到的预期页面元素、失败的初始化步骤以及页面结构（仅标签、id 和 class）。不包含页面文本、账户名称或历史记录。如果页面无法识别，DemoScope 会停用并告知原因；VACNet 仍可正常使用。

## 常见问题

<details>
<summary><b>DemoScope 提示它已在此页面停用。这是怎么回事？</b></summary>

VACNet 页面结构已不符合 DemoScope 的预期，因此脚本选择退出，避免留下只改了一半的页面。请复制诊断信息并创建 issue；通常会很快发布更新。
</details>

<details>
<summary><b>VACNet 的判定文字与 DemoScope 使用的语言不同。</b></summary>

在 DemoScope 中选择语言后，脚本会通过 Steam 的 ?l= 参数请求 VACNet 使用该语言。如果 VACNet 没有对应翻译，它会使用自身默认语言；DemoScope 的标签仍保持所选语言。
</details>

<details>
<summary><b>DemoScope 会替我选择判定吗？</b></summary>

不会。预设只会点击你指定的判定按钮，提交操作仍由你确认。请自行审核每个片段并遵守项目规则。
</details>

<details>
<summary><b>单问题任务会记录历史吗？</b></summary>

暂时不会。目前只有经典四问题表单会写入本地历史记录。
</details>

<details>
<summary><b>如何恢复默认按键？</b></summary>

使用已更改按键旁的重置图标、快捷键窗口中的**全部重置**，或设置窗口中的**重置**。设置窗口的重置也会恢复音效和动画。
</details>

## 架构

DemoScope 是一个在 document-start 运行且不进入 frame 的自执行函数。init() 会识别页面类型、确认页面可识别，然后连接下方模块。包含参数、返回值和存储键在内的 217 个顶层函数完整参考见 [en_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/en_FUNCTIONS.md)。

<details>
<summary><b>模块概览</b></summary>

| 模块 | 职责 | 主要函数 |
|---|---|---|
| Localization | UI 语言、字符串查找、国旗、语言选择器、同步 VACNet 的 ?l= | getActiveLocale、tr、settingText、syncSelectedLanguage、installLanguageSelector |
| Segment & player | 读取片段范围、包装 Video.js/HTML5 播放、禁用网站原生循环 | parseSegmentBounds、createPlayerAdapter、waitForPlayerAdapter、blockSegmentLoopGuard |
| Player enhancements | 进度条、按键提示、速度提升、逐帧和快捷键 | installCustomControls、installPlayerEnhancements |
| Hotkeys | 操作注册、按键绑定、冲突检测、快捷键窗口 | getBinding、findKeyConflict、getActionForEvent、ensureHotkeysDialog |
| Verdict presets | 预设表、选择状态、随机应用 | applyPreset、detectActivePreset、buildEnhancementBar |
| Single-question task | 新表单标签、锁定指示和快捷键 | isCheatingMode、selectCheatingVerdict、updateCheatingLock |
| Submit flow | 两步确认、取消、同源检查、加载遮罩 | invokeProceedAction、invokeCancelAction、submitVerdictForm、finishSubmitLoadingWhenReady |
| Local history | 按片段/比赛保存历史、备份和报告 | appendReviewHistory、importLocalHistory、exportCombinedHistoryReports |
| Settings & animations | 设置窗口、子窗口、音效、指示器动画 | ensureSettingsDialog、installExtraSettingsSections、ensureAnimationsDialog、playUiSound |
| Invite page | 重设计页面、关闭按钮、快捷键 | installInvitePage、installInviteExtras |
| Resilience | 隔离步骤、备用查找、停用和诊断 | safeStep、disableDemoScope、buildDiagnosticsReport |
| Bootstrap | 入口 | init、enhanceLayout |

</details>

## 隐私

DemoScope 不发送遥测，也不会上传设置或历史记录。提交判定时，VACNet 通过网站原有表单接收数据。设置和历史记录仅保存在浏览器的 localStorage（以 demoscope 开头的键）和 sessionStorage 中。通过**设置 → 本地历史 → 清除历史**删除记录。诊断报告只会复制到剪贴板，是否分享由你决定。

## 免责声明

DemoScope 是非官方社区项目，与 Valve Corporation 无关，也未获其认可。它不会替你做出判定。请自行审核每个片段并遵守审核项目规则。使用风险由你自行承担。

## 许可证

以 [MIT 许可证](https://github.com/ebayybe/DemoScope/blob/main/LICENSE)发布。
