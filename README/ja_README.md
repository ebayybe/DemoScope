<div align="center">

[English](../README.md) · [Български](bg_README.md) · [Magyar](hu_README.md) · [Tiếng Việt](vi_README.md) · [Ελληνικά](el_README.md) · [Dansk](da_README.md) · [Bahasa Indonesia](id_README.md) · [Español (España)](es-ES_README.md) · [Español (Latinoamérica)](es-419_README.md) · [Italiano](it_README.md) · [繁體中文](zh-TW_README.md) · [简体中文](zh-CN_README.md) · [한국어](ko_README.md) · [Deutsch](de_README.md) · [Nederlands](nl_README.md) · [Norsk](no_README.md) · [Polski](pl_README.md) · [Português (Portugal)](pt-PT_README.md) · [Português (Brasil)](pt-BR_README.md) · [Română](ro_README.md) · [Русский](ru_README.md) · [ไทย](th_README.md) · [Türkçe](tr_README.md) · [Українська](uk_README.md) · [Suomi](fi_README.md) · [Français](fr_README.md) · [Čeština](cs_README.md) · [Svenska](sv_README.md) · **日本語**

# DemoScope — CS2 Review Toolkit

![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-orange)

**CS2 VACNet のレビュアー向けに、キーボード操作を中心に設計した userscript ツールキット。判定プリセット、区間対応の動画プレーヤー、招待ページの改善、サウンド効果、非公開のローカル履歴を搭載 — 29 言語対応。**

</div>

## 概要

DemoScope は Counter-Strike VACNet のレビューページ（`counter-strike.net/vacnet`）を強化します。短いクリップごとに 4 つの判定グループ（aim assist、wallhack、auto-bhop、bot）をクリックする代わりに、キーボード中心のワークフローを利用できます。判定プリセット、レビュー対象の区間に限定したシークバー、コマ送り、一時的な倍速再生、2 段階の送信確認、そして自分の判定の非公開履歴を備えています。すべてブラウザー内でローカルに動作します。

## 主な機能

- **判定プリセット** – `1`〜`5` キーの 5 つのクイックプリセットと 15 の拡張パターン（aim、wallhack、bhop、bot とその組み合わせ、「不確か」バリエーションを含む）。
- **区間対応プレーヤー** – シークバー、時間表示、±5 秒ジャンプ、1/64 秒のコマ送りを、クリップの開始〜終了範囲に限定。
- **押している間だけ倍速** – `Shift` を押し続けると設定した速度（0.5×〜4×、既定 2×）で再生。
- **安全な 2 段階送信** – `Enter` でボタンを待機状態にし、もう一度 `Enter` で判定を送信。別オリジンのフォーム送信先はブロックされます。
- **29 言語の UI** – Steam の `?l=` パラメーター、保存済みの選択、またはブラウザーの言語に従い、ページ内に言語選択を搭載。
- **ローカルのレビュー履歴** – クリップ別・ゲーム別の履歴を `localStorage` に保存。JSON のエクスポート/インポート、HTML レポート、複数バックアップを 1 つのレポートに統合。
- **招待ページの改善** – `/vacnet/createinvite` を刷新し、招待リンクの表示/非表示とワンクリックコピー、条件の概要を追加。
- **サウンド効果** – Web Audio で合成した効果音。オン/オフ、音量、試聴を操作可能。
- **設定ダイアログ** – `F2` で開きます（変更可能）：サウンド、ショートカット、履歴の上限、バックアップ、初期設定に戻す。
- **便利機能** – 送信後のロード表示、トースト通知、アカウント名の非表示切り替え、レビュー規則ダイアログ、任意の判定ランダマイザー（既定はオフ）。

## インストール

1. [Tampermonkey](https://www.tampermonkey.net/) や [Violentmonkey](https://violentmonkey.github.io/) などの userscript マネージャーをインストールします（スクリプトは `GM_addStyle` と `unsafeWindow` を使用）。
2. [DemoScope をインストール](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js)し、マネージャーでインストールを確認します。
3. Steam にサインインし、<https://www.counter-strike.net/vacnet/> を開きます。
4. レビュー用クリップを開くと DemoScope が自動で読み込まれます（`/vacnet/join` ページは除外）。

## 使い方

入力欄・ボタン・リンク・選択リストにフォーカスがない限り、レビューページでショートカットが機能します。

| キー | 動作 |
|---|---|
| `1` … `5` | 判定プリセットを適用：1 ボット + aim + wallhack、2 aim + wallhack、3 rage、4 クリーンなプレイヤー、5 不確か |
| `Shift` (hold) | 押している間だけ倍速（0.5×〜4×、既定 2×、ページ上で選択可能） |
| `←` `→` | 5 秒戻る / 進む |
| `,` `.` | 1 コマ（1/64 秒）戻る / 進む |
| `Space` | 再生 / 一時停止 |
| `M` / `F` | ミュート / 全画面（動画をダブルクリックしても全画面を切り替え） |
| `Enter` ×2 | 1 回押すと送信ボタンが待機状態に、もう一度押すと判定を送信 |
| `F2` | 設定ダイアログを開く（変更可能） |

## アーキテクチャと関数の内訳

DemoScope は即時実行される 1 つの関数（`@run-at document-start`、`@noframes`）です。`init()` が招待ページとレビューページのどちらかを選び、以下のモジュールを接続します。全 143 関数の名前・役割・引数・戻り値の完全なリファレンスは次にあります： [ja_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/ja_FUNCTIONS.md).

| モジュール | 役割 | 主な関数 |
|---|---|---|
| `Localization` | UI 言語の決定、文字列の検索、国旗と言語選択の描画 | `getActiveLocale`, `tr`, `settingText`, `inviteText`, `getPresetLabel`, `installLanguageSelector` |
| `Segment & player` | ページからクリップの開始/終了を取得、Video.js/HTML5 再生のラップ、サイト標準の区間ループタイマーを無効化 | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | 独自シークバー、キーのヒント、Shift 倍速、コマ送り、キーボードショートカット | `installCustomControls`, `installPlayerEnhancements`, `isShortcutBlocked` |
| `Verdict presets` | プリセット表、選択状態、任意のランダム順序・遅延付きプリセット適用 | `applyPreset`, `detectActivePreset`, `syncPresetButtons`, `applyDefaultVerdicts`, `buildEnhancementBar` |
| `Submit flow` | 2 段階 Enter、`verdict_labels[]` の生成、同一オリジン確認、ロード表示 | `invokeProceedAction`, `prepareVerdictFormForSubmit`, `submitVerdictForm`, `isSafeSubmitTarget`, `finishSubmitLoadingWhenReady` |
| `Local history` | `localStorage` でクリップ別・ゲーム別の履歴を保存・整理・表示 | `readClipHistoryStore`, `writeClipHistoryStore`, `appendReviewHistory`, `renderClipHistory` |
| `Backups & reports` | JSON のエクスポート/インポート、HTML レポート、複数バックアップの統合レポート | `exportLocalHistory`, `importLocalHistory`, `exportReadableHistory`, `exportCombinedHistoryReports` |
| `Settings & sound` | 設定ダイアログ、変更可能なホットキー、Web Audio の効果音 | `ensureSettingsDialog`, `openSettingsDialog`, `installSettingsUi`, `playUiSound` |
| `Invite page` | 刷新した `/vacnet/createinvite`：リンクの表示/非表示とコピー、条件 | `installInvitePage` |
| `Layout & UI helpers` | トースト通知、フッターの非表示、レイアウト監視、アカウント名の切り替え | `enhanceLayout`, `showToast`, `watchProceedFooter`, `installAccountNameControl` |
| `Bootstrap` | エントリーポイント：ページの種類を判別してモジュールを起動 | `init` |

## ローカルデータとプライバシー

DemoScope はテレメトリを送信しません。設定と履歴はブラウザーの `localStorage`（`demoscope` で始まるキー）と `sessionStorage` にのみ保存されます。履歴を削除するには、設定ダイアログの履歴削除オプションを使用してください。

## 免責事項

DemoScope は非公式のコミュニティプロジェクトであり、Valve Corporation とは無関係で、承認も受けていません。あなたに代わって判定を下すことはありません。すべてのクリップを自分で確認し、レビュープログラムの規則に従ってください。利用は自己責任です。

## License

[MIT](../LICENSE) ライセンスで公開されています。