<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/README/README.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/README/bg_README.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/README/hu_README.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/README/vi_README.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/README/el_README.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/README/da_README.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/README/id_README.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/README/es-ES_README.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/README/es-419_README.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/README/it_README.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/README/zh-TW_README.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/README/zh-CN_README.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/README/ko_README.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/README/de_README.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/README/nl_README.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/README/no_README.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/README/pl_README.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-PT_README.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-BR_README.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/README/ro_README.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/README/ru_README.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/README/th_README.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/README/tr_README.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/README/uk_README.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/README/fi_README.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/README/fr_README.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/README/cs_README.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/README/sv_README.md) · **日本語**

</div>

<br>

<div align="center">

# DemoScope

**CS2 VACNet審査をキーボード中心で行うツールキット。**<br>
判定プリセット · クリップ対応プレーヤー · 再割り当て可能なホットキー · 非公開のローカル履歴 · 29言語。

<br>

[![Version](https://img.shields.io/badge/version-1.2.0-3b82f6?style=flat-square)](https://github.com/ebayybe/DemoScope/releases)
[![License](https://img.shields.io/badge/license-GPL--3.0-22c55e?style=flat-square)](https://github.com/ebayybe/DemoScope/blob/main/LICENSE)
[![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-f59e0b?style=flat-square)](#インストール)
[![Languages](https://img.shields.io/badge/languages-29-8b5cf6?style=flat-square)](#対応言語)
[![Privacy](https://img.shields.io/badge/telemetry-none-64748b?style=flat-square)](#プライバシー)

<br>

[**⬇ DemoScopeをインストール**](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js)

[機能](#機能) · [インストール](#インストール) · [キーボードショートカット](#キーボードショートカット) · [カスタマイズ](#カスタマイズ) · [ドキュメント](https://github.com/ebayybe/DemoScope/blob/main/docs/ja_FUNCTIONS.md) · [変更履歴](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ja_CHANGELOG.md)

</div>

<br>

## スクリーンショット

<table>
  <tr>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png" alt="DemoScopeのウェルカム画面"></a><br><sub><b>ウェルカム画面</b></sub></td>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png" alt="DemoScopeのメイン画面"></a><br><sub><b>メイン画面</b></sub></td>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png" alt="DemoScopeの招待ページ"></a><br><sub><b>友達を招待</b></sub></td>
  </tr>
</table>

## 概要

DemoScopeはCounter-Strike VACNetの審査ページ（counter-strike.net/vacnet）を使いやすくします。短いクリップごとに判定フォームをクリックして進める代わりに、キーボードから操作できます。判定プリセット、審査対象区間内に限定されたシークバー、コマ送り、一時的な速度アップ、2段階の送信、自分の判定だけを保存する非公開履歴を利用できます。従来の4問形式と新しい1問形式の両方に対応し、Valveがページを変更した場合は安全のため停止します。すべてブラウザー内でローカルに動作します。

## 機能

| | |
|---|---|
| **審査ワークフロー** | 1～5キーに5つのクイック判定、さらに15種類の組み合わせを割り当てます。任意の判定ランダマイザーは初期状態でオフです。Enterで送信を準備し、もう一度Enterで送信、Escでキャンセルします。 |
| **2種類のタスクに対応** | 従来のフォーム（aim assist、wallhack、auto-bhop、bot）と「Is the Subject cheating beyond a reasonable doubt?」という1問形式を検出します。新形式ではコンパクトな表示、1～3キーの判定ラベル、クリップ終了までのカウントダウン付きロック表示を使います。 |
| **クリップ対応プレーヤー** | シークバーと時間表示をクリップの開始・終了に制限。±5秒移動、1/64秒のコマ送り、Shift長押しで速度アップ（0.5×～4×）、ミュートと全画面のショートカットに対応します。 |
| **カスタムホットキー** | 専用ウィンドウで18個の操作を再割り当てできます。競合時は置き換え前に対象の操作、グループ、機能を説明し、ページ上のキー表示も設定に合わせて更新します。 |
| **アニメーション** | 6種類のインジケーター、3段階の速度、オン/オフをライブプレビューで設定できます。初期状態ではOSの視差・動きを減らす設定に従います。 |
| **わかりやすい判定** | 各判定カテゴリーの「?」から説明を確認できます。「not」など重要な語句も強調表示されます。 |
| **非公開のローカル履歴** | localStorageにクリップ別・試合別の履歴を保存。JSONの入出力、HTMLレポート、複数バックアップをまとめたレポートに対応します。 |
| **招待ページ** | /vacnet/createinviteを再設計。表示/非表示、ワンクリックコピー、要件の概要、閉じるボタン、Enter/Escショートカットを追加します。 |
| **29言語** | 選択した言語、Steamの?l=設定、ブラウザー言語の順で使用します。DemoScopeで言語を選ぶとVACNetの表示言語も切り替わります。 |
| **効果音** | Web Audioで生成するサウンド、音量、試聴、オン/オフを設定できます。 |
| **サイト変更への耐性** | 初期化処理を分離し、重要な要素には代替検索を用意しています。ページを認識できない場合はVACNetを変更せず、自動で停止します。不具合報告用の診断レポートもコピーできます。 |

## インストール

1. [Tampermonkey](https://www.tampermonkey.net/)または[Violentmonkey](https://violentmonkey.github.io/)などのユーザースクリプト管理ツールをインストールします。スクリプトはGM_addStyleとunsafeWindowを使用します。
2. [**DemoScopeをインストール**](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js)し、管理ツールで追加を確定します。
3. Steamにログインし、[counter-strike.net/vacnet](https://www.counter-strike.net/vacnet/)を開きます。
4. 審査クリップを開くとDemoScopeが自動で起動します（/vacnet/joinページは対象外です）。

更新はユーザースクリプト管理ツール経由で届きます。Chromium系ブラウザーとFirefoxで動作します。

## キーボードショートカット

編集可能な入力欄や別の操作コントロールにフォーカスがない審査ページで使えます。**すべてのキーは「設定 → ホットキー」で変更できます。**

| キー | 操作 |
|---|---|
| 1～5 | 従来形式のプリセット（1 bot + aim + wallhack、2 aim + wallhack、3 rage、4 不正なし、5 判断不能）。 |
| 1、2、3 | 1問形式：不正 / 判断不能 / 不正を確認できず。 |
| Enter | 確定。従来形式では1回目で送信を準備し、2回目で送信します。 |
| Esc | 確認待ちの判定をキャンセル、または最初のEnterを解除します。 |
| Shift（長押し） | 速度アップ（0.5×～4×、初期値2×。ページ上で変更可能）。 |
| ← → | 5秒戻る / 進む。 |
| , . | 1フレーム（1/64秒）戻る / 進む。 |
| Space | 再生 / 一時停止。 |
| M / F | ミュート / 全画面（動画のダブルクリックでも全画面を切り替え）。 |
| F2 | 設定ウィンドウを開きます。 |
| Enter / Esc（招待ページ） | 完了 / 閉じる。 |

## カスタマイズ

F2で設定を開きます。項目は利用頻度の高い順に並んでいます。

- **ホットキー**：操作別の分類、個別リセット、「すべてリセット」、競合時の「置き換え」「交換」「キャンセル」を用意。Escも割り当て可能です。
- **アニメーション**：スタイル（パルス、呼吸、波紋、心拍、軌道、点滅）、速度を選ぶか、オフにできます。各カードにライブプレビューがあります。
- **効果音**：オン/オフ、音量（マウスホイールでも調整可能）、テストボタン。
- **ローカル履歴**：オン/オフ、履歴件数とキー数の上限、12/24時間表示、JSONバックアップ、HTMLレポート。
- **フッター**：フィードバック、レポート、著作権表示、またはフッター全体を非表示にできます。
- **診断**：不具合報告用レポートをコピーします（[問題を報告](#問題を報告)を参照）。
- **リセット**：音、ホットキー、アニメーションを初期値に戻します。履歴は保持されます。

## 対応言語

DemoScopeは29言語に対応しています：ブルガリア語、中国語（簡体字・繁体字）、チェコ語、デンマーク語、オランダ語、英語、フィンランド語、フランス語、ドイツ語、ギリシャ語、ハンガリー語、インドネシア語、イタリア語、日本語、韓国語、ノルウェー語、ポーランド語、ポルトガル語（ポルトガル・ブラジル）、ルーマニア語、ロシア語、スペイン語（スペイン・ラテンアメリカ）、スウェーデン語、タイ語、トルコ語、ウクライナ語、ベトナム語。ページ内の選択メニューからいつでも変更できます。

## 問題を報告

Valveは予告なくVACNetのページを変更することがあります。機能しなくなった場合：

1. F2を押して**診断**を開き、**診断をコピー**をクリックします。
2. 内容を新しい[issue](https://github.com/ebayybe/DemoScope/issues)に貼り付け、可能であればスクリーンショットを添付します。

レポートにはスクリプトのバージョン、時刻、ブラウザーの言語とuser-agent、見つかったページ要素、失敗した初期化処理、ページ構造（タグ、id、classのみ）が含まれます。ページの文章、アカウント名、履歴は含まれません。ページを認識できない場合はDemoScopeが停止して通知し、VACNetは通常どおり動作します。

## よくある質問

<details>
<summary><b>このページでDemoScopeが無効になったと表示されます。どうしてですか？</b></summary>

VACNetのページ構造が変わり、DemoScopeの想定と一致しなくなったため、ページを中途半端な状態にしないよう停止しました。診断情報をコピーしてissueを作成してください。通常は早めに更新します。
</details>

<details>
<summary><b>VACNetの判定文とDemoScopeの言語が違います。</b></summary>

DemoScopeで言語を選ぶと、Steamの?l=パラメーターを使ってVACNetにもその言語を要求します。VACNetに翻訳がない場合、VACNetは既定の言語を使いますが、DemoScopeのラベルは選択した言語のままです。
</details>

<details>
<summary><b>DemoScopeが自動で判定するのですか？</b></summary>

いいえ。プリセットは指定した判定ボタンを押すだけで、送信は必ず自分で確定します。各クリップを自分で審査し、プログラムの規則に従ってください。
</details>

<details>
<summary><b>1問形式の履歴も記録されますか？</b></summary>

まだ記録されません。現在、ローカル履歴は従来の4問形式のみを対象にしています。
</details>

<details>
<summary><b>既定のキーに戻すには？</b></summary>

変更したキーのリセットアイコン、ホットキー画面の**すべてリセット**、または設定画面の**リセット**を使います。設定画面のリセットでは効果音とアニメーションも元に戻ります。
</details>

## アーキテクチャ

DemoScopeはdocument-startで実行され、iframeでは動かない単一の自己実行関数です。init()がページ種別を選び、ページを認識できるか確認して各モジュールを設定します。パラメーター、戻り値、保存キーを含む217個すべてのトップレベル関数のリファレンスは[ja_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/ja_FUNCTIONS.md)にあります。

<details>
<summary><b>モジュール概要</b></summary>

| モジュール | 役割 | 主な関数 |
|---|---|---|
| Localization | UI言語、文字列検索、旗、言語選択、VACNetの?l=同期 | getActiveLocale、tr、settingText、syncSelectedLanguage、installLanguageSelector |
| Segment & player | クリップ範囲の取得、Video.js/HTML5再生、サイト標準の区間ループ停止 | parseSegmentBounds、createPlayerAdapter、waitForPlayerAdapter、blockSegmentLoopGuard |
| Player enhancements | シークバー、キー表示、速度変更、コマ送り、ショートカット | installCustomControls、installPlayerEnhancements |
| Hotkeys | 操作一覧、割り当て、競合検出、ホットキー画面 | getBinding、findKeyConflict、getActionForEvent、ensureHotkeysDialog |
| Verdict presets | プリセット表、選択状態、ランダム適用 | applyPreset、detectActivePreset、buildEnhancementBar |
| Single-question task | 新形式のラベル、ロック表示、キー操作 | isCheatingMode、selectCheatingVerdict、updateCheatingLock |
| Submit flow | 2段階確認、キャンセル、同一オリジン確認、読み込み表示 | invokeProceedAction、invokeCancelAction、submitVerdictForm、finishSubmitLoadingWhenReady |
| Local history | クリップ・試合別履歴、バックアップ、レポート | appendReviewHistory、importLocalHistory、exportCombinedHistoryReports |
| Settings & animations | 設定画面、サブ画面、効果音、インジケーターアニメーション | ensureSettingsDialog、installExtraSettingsSections、ensureAnimationsDialog、playUiSound |
| Invite page | 招待ページ、閉じるボタン、ショートカット | installInvitePage、installInviteExtras |
| Resilience | 分離された処理、代替検索、自動停止、診断 | safeStep、disableDemoScope、buildDiagnosticsReport |
| Bootstrap | 起動処理 | init、enhanceLayout |

</details>

## プライバシー

DemoScopeはテレメトリーを送信せず、設定や履歴をアップロードしません。判定を送信するとVACNetが通常のフォーム経由で受け取ります。設定と履歴はブラウザー内のlocalStorage（demoscopeで始まるキー）とsessionStorageに保存されます。履歴は**設定 → ローカル履歴 → 履歴を消去**から削除できます。診断レポートはクリップボードにコピーされるだけで、共有するかどうかは自分で決められます。

## 免責事項

DemoScopeはValve Corporationと提携・承認されていない非公式のコミュニティプロジェクトです。判定を代行することはありません。各クリップを自分で審査し、プログラムの規則に従ってください。利用は自己責任です。

## ライセンス

[GNU GPL v3.0ライセンス](https://github.com/ebayybe/DemoScope/blob/main/LICENSE)のもとで公開されています。

## 謝辞

- **当初のアイデアと基本インターフェース：** skinsales / goodvibes による [*CS2 VACNet Review — Player & Layout Enhancements*](https://greasyfork.org/ru/scripts/591778-cs2-vacnet-review-player-layout-enhancements)（MIT）。
- **関連するコンセプトとロシア語フォーク：** authorless による [*VACLens RU — CS2 Review Assistant*](https://greasyfork.org/ru/scripts/592414-vaclens-ru-cs2-review-assistant)（MIT）。
- **アーキテクチャの全面改修、再利用可能なフレームワーク、29言語対応、カスタム判定プリセット：** ebayybe。
