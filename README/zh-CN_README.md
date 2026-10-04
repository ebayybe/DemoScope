<div align="center">

[English](../README.md) · [Български](bg_README.md) · [Magyar](hu_README.md) · [Tiếng Việt](vi_README.md) · [Ελληνικά](el_README.md) · [Dansk](da_README.md) · [Bahasa Indonesia](id_README.md) · [Español (España)](es-ES_README.md) · [Español (Latinoamérica)](es-419_README.md) · [Italiano](it_README.md) · [繁體中文](zh-TW_README.md) · **简体中文** · [한국어](ko_README.md) · [Deutsch](de_README.md) · [Nederlands](nl_README.md) · [Norsk](no_README.md) · [Polski](pl_README.md) · [Português (Portugal)](pt-PT_README.md) · [Português (Brasil)](pt-BR_README.md) · [Română](ro_README.md) · [Русский](ru_README.md) · [ไทย](th_README.md) · [Türkçe](tr_README.md) · [Українська](uk_README.md) · [Suomi](fi_README.md) · [Français](fr_README.md) · [Čeština](cs_README.md) · [Svenska](sv_README.md) · [日本語](ja_README.md)

# DemoScope — CS2 Review Toolkit

![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-orange)

**专为 CS2 VACNet 审查员打造、以键盘操作为主的 userscript 工具集：判定预设、具备片段感知的视频播放器、邀请页面增强、音效和私有本地历史记录 — 支持 29 种语言。**

</div>

## 概览

DemoScope 增强了 Counter-Strike VACNet 审查页面（`counter-strike.net/vacnet`）。无需为每个短片段逐一点击四个判定组（aim assist、wallhack、auto-bhop、bot），而是采用以键盘为主的工作流：预设判定、仅限于被审查片段的进度条、逐帧步进、临时加速、两步提交确认，以及只属于您的判定历史记录。一切都在您的浏览器中本地运行。

## 主要功能

- **判定预设** – 按键 `1`–`5` 对应 5 个快速预设，另有 15 种扩展组合（aim、wallhack、bhop、bot 及其组合，包括“不确定”变体）。
- **片段感知播放器** – 进度条、时间显示、±5 秒跳转和 1/64 秒逐帧步进，均限制在片段的起止范围内。
- **按住加速** – 按住 `Shift` 以可配置的速度播放（0.5×–4×，默认 2×）。
- **安全的两步提交** – 按 `Enter` 预备按钮，再按一次 `Enter` 发送判定；会阻止跨源表单目标。
- **29 种语言界面** – 依据 Steam 的 `?l=` 参数、您保存的选择或浏览器语言确定，并提供页面内语言选择器。
- **本地审查历史记录** – 按片段和按对局分别保存在 `localStorage`；支持 JSON 导出/导入、HTML 报告，以及将多份备份合并为单个报告。
- **邀请页面增强** – 重新设计的 `/vacnet/createinvite`，可显示/隐藏并一键复制邀请链接，另附条件摘要。
- **音效** – 使用 Web Audio 合成的提示音，可开关并调节音量和试听。
- **设置对话框** – 按 `F2` 打开（可重新绑定）：音效、快捷键、历史上限、备份、恢复默认值。
- **便利功能** – 提交后的加载遮罩、提示消息、隐藏账号名称开关、审查规则对话框，以及可选的判定随机化（默认关闭）。

## 安装

1. 安装 userscript 管理器，例如 [Tampermonkey](https://www.tampermonkey.net/) 或 [Violentmonkey](https://violentmonkey.github.io/)（脚本使用 `GM_addStyle` 和 `unsafeWindow`）。
2. [安装 DemoScope](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js)，并在管理器中确认安装。
3. 登录 Steam 并打开 <https://www.counter-strike.net/vacnet/>。
4. 打开审查片段 — DemoScope 会自动加载（`/vacnet/join` 页面除外）。

## 使用方法

只要焦点不在输入框、按钮、链接或下拉列表中，快捷键就会在审查页面上生效。

| 按键 | 操作 |
|---|---|
| `1` … `5` | 应用判定预设：1 机器人 + aim + wallhack，2 aim + wallhack，3 rage，4 正常玩家，5 不确定 |
| `Shift` (hold) | 按住以加速（0.5×–4×，默认 2×，可在页面上选择） |
| `←` `→` | 向后 / 向前跳 5 秒 |
| `,` `.` | 向后 / 向前一帧（1/64 秒） |
| `Space` | 播放 / 暂停 |
| `M` / `F` | 静音 / 全屏（双击视频也可切换全屏） |
| `Enter` ×2 | 按一次预备提交按钮，再按一次发送判定 |
| `F2` | 打开设置对话框（可重新绑定） |

## 架构与函数说明

DemoScope 是单个自执行函数（`@run-at document-start`、`@noframes`）。`init()` 会在邀请页面和审查页面之间选择，并连接以下模块。全部 143 个函数的完整参考（名称、职责、参数和返回值）见 [zh-CN_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/zh-CN_FUNCTIONS.md).

| 模块 | 职责 | 主要函数 |
|---|---|---|
| `Localization` | 确定界面语言、查找字符串、绘制旗帜和语言选择器 | `getActiveLocale`, `tr`, `settingText`, `inviteText`, `getPresetLabel`, `installLanguageSelector` |
| `Segment & player` | 从页面读取片段起止、封装 Video.js/HTML5 播放、禁用网站原生的片段循环定时器 | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | 自定义进度条、按键提示、Shift 加速、逐帧步进、键盘快捷键 | `installCustomControls`, `installPlayerEnhancements`, `isShortcutBlocked` |
| `Verdict presets` | 预设表、选择状态、应用预设（可选随机顺序和延迟） | `applyPreset`, `detectActivePreset`, `syncPresetButtons`, `applyDefaultVerdicts`, `buildEnhancementBar` |
| `Submit flow` | 两步 Enter、构建 `verdict_labels[]`、同源检查、加载遮罩 | `invokeProceedAction`, `prepareVerdictFormForSubmit`, `submitVerdictForm`, `isSafeSubmitTarget`, `finishSubmitLoadingWhenReady` |
| `Local history` | 在 `localStorage` 中存储、修剪并显示各片段和各对局的历史记录 | `readClipHistoryStore`, `writeClipHistoryStore`, `appendReviewHistory`, `renderClipHistory` |
| `Backups & reports` | JSON 导出/导入、HTML 报告、由多份备份合并的报告 | `exportLocalHistory`, `importLocalHistory`, `exportReadableHistory`, `exportCombinedHistoryReports` |
| `Settings & sound` | 设置对话框、可重新绑定的快捷键、Web Audio 提示音 | `ensureSettingsDialog`, `openSettingsDialog`, `installSettingsUi`, `playUiSound` |
| `Invite page` | 重新设计的 `/vacnet/createinvite`：显示/隐藏并复制邀请链接、条件说明 | `installInvitePage` |
| `Layout & UI helpers` | 提示消息、隐藏页脚、布局观察器、账号名称开关 | `enhanceLayout`, `showToast`, `watchProceedFooter`, `installAccountNameControl` |
| `Bootstrap` | 入口：判断页面类型并启动各模块 | `init` |

## 本地数据与隐私

DemoScope 不会发送遥测数据。设置和历史记录只保存在浏览器的 `localStorage`（以 `demoscope` 开头的键）和 `sessionStorage` 中。要删除历史记录，请使用设置对话框中的清除历史记录选项。

## 免责声明

DemoScope 是非官方的社区项目，与 Valve Corporation 无关，也未获其认可。它绝不会替您做出判定 — 请亲自审查每个片段，并遵守审查计划的规则。使用风险自负。

## License

以 [MIT](../LICENSE) 许可证发布。