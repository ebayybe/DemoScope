<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/en_CHANGELOG.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/bg_CHANGELOG.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/hu_CHANGELOG.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/vi_CHANGELOG.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/el_CHANGELOG.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/da_CHANGELOG.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/id_CHANGELOG.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-ES_CHANGELOG.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-419_CHANGELOG.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/it_CHANGELOG.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-TW_CHANGELOG.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-CN_CHANGELOG.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ko_CHANGELOG.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/de_CHANGELOG.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/nl_CHANGELOG.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/no_CHANGELOG.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pl_CHANGELOG.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-PT_CHANGELOG.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-BR_CHANGELOG.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ro_CHANGELOG.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ru_CHANGELOG.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/th_CHANGELOG.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/tr_CHANGELOG.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/uk_CHANGELOG.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fi_CHANGELOG.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fr_CHANGELOG.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/cs_CHANGELOG.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/sv_CHANGELOG.md) · **日本語**

</div>

# DemoScope v1.2.0

自己保護機能を強化したリリースです。DemoScope は VACNet のページ変更に対応し、途中で動作が止まる代わりに、発生した内容をユーザーと開発者に知らせます。

設定、招待ページ、判定テキストを改善しました。

ショートカット、アニメーション、読み込みの修正。

VACNet の1問タスクに対応しました。

VACNet の新しいレビュー画面に対応しました。

### 追加

- **設定手順の分離。** レイアウトとセットアップの各手順を個別に実行します。失敗した手順を記録し、残りの手順は続行します。
- 動画コンテナー、判定コンテナー、送信領域の**代替検索**。VACNet が動画コンテナーのクラス名を変更しても、プレーヤー要素から検索します。
- **安全な無効化。** 動画または判定フォームがない場合、または5つ以上の設定手順に失敗した場合、DemoScope は自身の変更を元に戻し、VACNet のフッターを復元し、設定ウィンドウだけを残して通知を一度表示します。空のキューのページは従来どおり認識され、この処理は起動しません。
- **診断レポート**（Settings → Diagnostics → Copy diagnostics）：バージョン、時刻、言語、ブラウザー、ページとタスクの種類、22項目の要素チェック（`ok` / `MISSING`）、記録された手順エラー、DemoScope による変更前後のページ構造。構造情報に含まれるのはタグ、ID、クラスのみで、ページの文章は含まれません。クリップボードが使えない場合は、選択可能なボックスにレポートを表示します。
- 部分的に描画されたページを判定する前に最大2秒待機します。

- **招待ページの閉じるボタン。** カードの隅にある×で「Done」と同じようにクリップへ戻ります。
- **招待ページのショートカット：** `Enter` で「Done」を実行し、`Esc` でページを閉じます。ボタン、リンク、入力欄、ダイアログ、言語リストにフォーカスがある間は無視します。Hotkeys の「Invite page」グループで変更できます。
- **ページごとのキー競合。** 招待ページにはプレーヤーがないため、そこでの `Enter` / `Esc` はレビュー画面の同じキーと競合しません。設定キーは引き続き全ページ共通です。
- 設定、サブウィンドウ、判定リストに**暗色の細いスクロールバー**を追加し、color-scheme も暗色にしました。

- **Hotkeys ウィンドウ**（Settings → Hotkeys）：18個すべてのショートカットを変更できます。操作別に分類し、説明とリセットボタンを用意しました。「Reset all」は再確認が必要です。
  - **競合処理。** 使用中のキーを選ぶと、割り当て先の操作、グループ、機能を表示します。Replace、Swap、Cancel を選べます。
  - `Esc` を割り当てても、キー取得中にウィンドウは閉じません。`Tab`、修飾キー、Caps Lock、`F5`、`F11`、`F12` は不可。`Shift` は押し続ける「Speed boost」のみ使用できます。
  - 動画下のヒント、バッジ、Continue/Cancel ボタンは割り当てたキーに合わせて更新されます。
- `Esc` で確認待ちの判定と、2段階送信の最初の `Enter` をキャンセルできます。
- **Animations ウィンドウ**（Settings → Animations）：6種類のスタイル、ライブプレビュー、3段階の速度、オン/オフ切り替えを追加しました。OS が視差効果の低減を指定している場合、アニメーションはオフで開始します。
- 判定ラジオボタンにフォーカスがある場合も `Enter` と `Esc` が動作します。

- **1問タスク。** VACNet は「Is the Subject cheating beyond a reasonable doubt?」と質問し、Cheating / Uncertain / No cheats seen を提示する場合があります。DemoScope はこれを検出して、クイック判定、拡張組み合わせ、ランダマイザーのないコンパクト表示に切り替えます。
- DemoScope の言語による判定ラベル、1～3のキー表示と対応するショートカット。
- **ロック表示。** Uncertain と No cheats seen はクリップ終了後に解除されます。カードに残り時間と進捗を表示し、ロック中の選択肢は暗く表示します。キーを押すとエラー音が鳴り、カードが揺れます。
- 動画下のヒントを `Enter` と 1～3 に変更し、判定ボタンを高くしました。

- **4つの判定カテゴリに対するDemoScope独自の説明**を29言語すべてに追加しました。一部言語（ウクライナ語など）では VACNet の質問が英語のまま表示されるため、「?」の説明はその文章に依存しません。

- AIM ASSIST、WALL HACK、AUTO BHOP、BOT の横に**「?」ヘルプボタン**を追加しました。クリックすると説明が開き、外側のクリック、再クリック、`Esc` で閉じます。キーボードフォーカスを受けないため、`Enter` と `Space` のレビュー操作を妨げません。

### 変更

- **設定ウィンドウを再設計。** 使用頻度順に Hotkeys、Animations、Sound effects、Local history、Footer、Diagnostics（v1.2.0で追加）、Reset を配置しました。Hotkeys と Animations には変更に応じて更新される概要を表示します。
- **すべてを一括リセット。** サウンド、音量、ショートカット、アニメーションを復元し、履歴は保持します。
- 設定ウィンドウのキーを Hotkeys から編集できるようにしました。
- **判定確認テキストからキーの数字を削除。** 「2Not sure」「3No cheats seen」のような表示を防ぎます。キーのバッジは CSS で描画します。
- 1問タスクの選択肢2を「Not sure」に変更し、VACNet の文章と同じ一人称にしました。

- **判定ボタンのキーワード強調表示を復元。** 検索対象は太字のオレンジ色、否定回答の「not」は落ち着いた青色です。選択中のボタンも読みやすく保ちます。
- `normalizeVerdictLabels` は b マークアップだけを解除し、強調表示を維持するようになりました。

: `<b>`.

- ポータルヘッダーと説明カードを非表示にし、クリップ数をヘッダーバッジにも表示します。
- Continue ボタンをパネル下部に固定し、長い翻訳でも表示します。

技術セレクター: `.verdicts-container-inner`, `#submitbuttons`.

### 修正

- **1問タスク送信後に「loading next clip」が長く続く問題：**存在しない `aimassist` 欄を待たず、判定フォームとメディアのメタデータを使用し、準備確認を早く開始します。クリップのないページでは3秒後にオーバーレイを通知なしで閉じます。
- ダイアログを開いている間、`Space`、`Enter` などのページショートカットが背後のページで動作しなくなりました。

- Local history ボタンを隣のバッジと同じサイズにし、折り返しを防ぎ、長いラベルを省略します。バッジ行は縮む代わりに折り返します。

- **DemoScope で言語を変更しても判定テキストがブラウザー言語のままになる問題：**VACNet は Steam の `?l=` パラメーターを使いますが、DemoScope は独自ラベルだけを変更していました。レビュー画面を選択した `?l=` で開き、パラメーターがない場合は一度だけ再要求します。VACNet の実際の言語は CSS とスクリプト URL の `l=` から読み取り、未対応言語でのリダイレクトループを1回の試行制限で防ぎます。

- **`Space`、`M`、`F` が反応しないように見える問題：**VACNet / Video.js が同じキーを二重に処理していました。DemoScope がこれらのキーを捕捉するようにしました。
- Firefox では `Space` を離したとき、フォーカス中のプレーヤーボタンが作動しなくなりました。
- 判定のラジオボタンにフォーカスがある場合もプレーヤーショートカットが有効です。

- **VACNet の再設計後、パネルが途中までしか構築されない問題：**ポータルヘッダー、説明カード、グリッドレイアウト、verdicts-container-inner の削除、submitbuttons の移動によって `insertBefore` エラーが発生していました。`ensureReviewStructure` の手順でマークアップを正規化し、旧・新レイアウトに対応します。

### ローカライズ

- 診断、コピー結果、無効化通知に関する6つの文字列を29言語すべてに追加しました。

- 概要、リセット、招待ページ操作、「Not sure」に関する12文字列を29言語すべてに追加しました。

CSS の設定: `color-scheme: dark`.

- Hotkeys と Animations のウィンドウ（各言語77文字列）を残り27言語にも翻訳しました。それまでは英語とロシア語のみでした。

- Hotkeys と Animations は当初英語とロシア語のみで、他の翻訳は v1.2.0 で追加しました。

6種類のスタイルは pulse、breathe、ripple、heartbeat、orbit、blink です。

- ラベル、タイトル、説明、ロック通知の5文字列を29言語すべてに追加しました。

# DemoScope v1.0.0

CS2 VACNet レビューページ用 userscript、DemoScope の初公開版です。

### 追加
- 29言語のインターフェース、自動言語選択、5つのクイック判定プリセット、15個の拡張組み合わせ。
- セグメント対応動画操作、コマ送り、`Shift` による速度変更、`Space` 再生/一時停止、`M` ミュート、`F` 全画面、`Enter` による2段階判定送信。
- 設定可能なローカル履歴、JSON インポート/エクスポート、HTML レポート、複数の JSON バックアップの統合。
- 招待ページの改善、サウンド設定、設定ショートカット、アカウント名の非表示、レビュー規則ダイアログ、任意の判定ランダマイザー（既定ではオフ）。

### プライバシー
- テレメトリーはありません。ローカル設定と履歴はアップロードされません。送信した判定はサイト標準のフォームを通じて VACNet に送られます。
