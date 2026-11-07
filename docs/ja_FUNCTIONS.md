<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/docs/en_FUNCTIONS.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/docs/bg_FUNCTIONS.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/docs/hu_FUNCTIONS.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/docs/vi_FUNCTIONS.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/docs/el_FUNCTIONS.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/docs/da_FUNCTIONS.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/docs/id_FUNCTIONS.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/docs/es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/docs/es-419_FUNCTIONS.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/docs/it_FUNCTIONS.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/docs/zh-TW_FUNCTIONS.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/docs/zh-CN_FUNCTIONS.md) · [한국어](https://github.com/ebayybe/DemoScope/blob/main/docs/ko_FUNCTIONS.md) · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/docs/de_FUNCTIONS.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/docs/nl_FUNCTIONS.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/docs/no_FUNCTIONS.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/docs/pl_FUNCTIONS.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/docs/pt-PT_FUNCTIONS.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/docs/pt-BR_FUNCTIONS.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/docs/ro_FUNCTIONS.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/docs/ru_FUNCTIONS.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/docs/th_FUNCTIONS.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/docs/tr_FUNCTIONS.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/docs/uk_FUNCTIONS.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/docs/fi_FUNCTIONS.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/docs/fr_FUNCTIONS.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/docs/cs_FUNCTIONS.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/docs/sv_FUNCTIONS.md) · **日本語**

</div>

# DemoScope — 関数リファレンス

`DemoScope.user.js` v1.4.0 のトップレベル関数 217 個すべてのリファレンスです（名前、引数、戻り値、役割）。[README](../README.md) に戻る。

表記：`—` は引数なし、`void` は副作用のために呼び出される関数を表します。

## ユーザー向け動作の概要

| 項目 | 説明 |
|---|---|
| 対応ページ | VACNetのウェルカムページ（/vacnet）、レビュー画面（/vacnet/clips）、招待ページ（/vacnet/createinvite）、レビュー画面のクリップなし状態を強化します。関係のないページは変更しません。 |
| タスク形式 | VACNetが提供するレビュー形式を判別します。クラシック形式（aim assist、wallhack、auto-bhop、bot）にはプリセットと拡張組み合わせを追加します。新しい1問形式（「対象は合理的な疑いを超えて不正をしていますか？」）では、キー1～3に対応する3つの判定、残りのクリップ時間を示すロック表示を備えたコンパクトなレイアウトを使い、クイック判定や組み合わせは表示しません。 |
| 言語 | Steamの29言語に対応しています。保存済みの手動選択が優先されます。選択がなければSteamの?l=パラメーター、次にブラウザー/ページの言語を使います。DemoScopeで言語を選ぶと、対応する?l=もVACNetに渡され、VACNet独自のボタンや質問もその言語になります。自動モードではSteamの言語パラメーターをブラウザーの言語に同期します。 |
| ウェルカムページと招待ページ | 両ページの外観を変更し、共通の言語選択と、目のアイコンによるアカウント名の表示切り替えを追加します。ウェルカムページでは、操作可能な項目にフォーカスがないときEnterまたはSpaceで進めます。招待ページではリンクの表示/非表示とコピーができ、招待条件も説明します。×ボタンで閉じられ、Enterは「完了」、Escは×と同じ動作です。 |
| クリップレビュー | 判定プリセットと拡張組み合わせ、既定でオフの判定ランダマイザー、Shift中の再生速度設定、セグメント内シーク、コマ送り、再生ショートカットを追加します。判定カテゴリにはローカライズされた説明を表示する「?」ボタンがあります。ボタン内のキーワードはDemoScopeの配色で強調されます。 |
| ショートカット | すべてのショートカットは共通レジストリ内のアクションで、設定 → ショートカットから変更できます。競合はページごとに検出され（招待ページとレビュー画面は別扱い）、そのキーを使用中のアクション、グループ、説明が表示されます。置換、交換、キャンセルを選べます。各アクションにリセットボタンがあり、ページ上のキー表示は割り当てに従います。 |
| 送信操作 | EnterまたはNumpad Enter（既定）で「続行」を実行します。クラシック形式では最初の押下で操作を準備し、次の押下で判定を送信します。1問形式では判定を選ぶとVACNetの確認が表示され、Enterで確定します。Esc（既定）は確認待ちの判定を「キャンセル」するか、最初の押下を解除します。Spaceは送信に使いません。 |
| 設定 | 既定ではF2で設定ダイアログを開きます（ショートカットウィンドウで変更可能）。項目: ショートカット、アニメーション、効果音と音量、ローカル履歴（有効化、上限、12/24時間表示、バックアップ）、フッター表示、診断、音/ショートカット/アニメーションの一括リセット。 |
| アニメーション | DemoScopeの隣の点をアニメーション表示できます。専用ウィンドウで6種類（pulse、breathe、ripple、heartbeat、orbit、blink）、ライブプレビュー、3段階の速度、オン/オフを設定できます。OSで視差効果の低減が有効な場合、起動時はオフになります。 |
| ローカル履歴 | 判定の概要をこのブラウザーのlocalStorageに保存します。DemoScopeがアップロードすることはありません。履歴は無効化、インポート、JSON/HTML形式でのエクスポート、複数のJSONバックアップから1つのHTMLレポートへの統合、消去ができます。上限はキーごとに10/20/30/50件、合計100/200/300/500キー。無効化しても既存データは消去されず、新規記録のみ停止します。記録対象はクラシック形式だけです。 |
| キューが空 | VACNetの空キュー表示をローカライズした案内、ブラウザー内に保存する初回表示日時、言語選択に置き換えます。1日250件のデモという説明はVACNetの観察結果に基づく参考情報です。DemoScopeが上限を適用したり回避したりすることはありません。 |
| フッター | ローカライズされたDemoScopeのフッターを使います。クリップページではフィードバックと報告のリンクを表示できます。設定から各リンク、著作権表示、フッター全体を非表示にできます。 |
| 障害への耐性 | 各初期化手順は独立して実行され、1つの失敗で他の手順が止まることはありません。重要な要素は代替手段も使って検索します。ページを識別できない場合、そのページでDemoScopeを無効化し、VACNetのレイアウトを復元して短い通知を表示します。設定 → 診断から、バグ報告用のテキストレポート（スクリプト版、検出した要素、失敗した手順、ページ構造）をコピーできます。 |

このスクリプトはVACNetの招待資格、判定処理、視聴上限をサーバー側で変更しません。ローカル履歴、言語、UI設定はブラウザーのプロファイルに保存されます。

## ローカライズ

| 関数 | パラメーター | 戻り値 | 説明 |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | 言語の国旗を表すインライン SVG マークアップ。ない場合は地球儀アイコンにフォールバックします。 |
| `getSavedLocale` | — | `string \| null` | `localStorage` からユーザーが保存した言語（`demoscopeLanguage`）を読み取ります。 |
| `getActiveLocale` | — | `string` | 現在の言語を決定します：保存済みの選択 → Steam の `?l=` → ブラウザー/ページの言語 → `en`。 |
| `getLanguageBadge` | — | `string` | 言語選択のバッジ用に、その言語自身の表示名（例：“English version”）を返します。 |
| `getBrowserLocale` | — | `string \| null` | 地域別バリエーションを含め、対応ブラウザー言語の最初のものを検出します。 |
| `syncAutomaticLanguage` | — | `boolean` | 自動モードではブラウザー言語に ?l= を同期し、異なる場合は移動します。 |
| `getRenderedSteamLanguage` | — | `string \| null` | VACNetが実際にページを表示したSteamの言語を、ページ内のスタイルシートとスクリプトのURLにあるl=パラメーターから読み取ります。 |
| `syncSelectedLanguage` | — | `boolean` | DemoScopeで言語を手動選択した場合、一致する?l=を付けてページを1回再読み込みし、VACNetの表示文も選択した言語に合わせます。表示中の言語がすでに一致する場合は省略し、リダイレクトループを防ぎます。ページ遷移が発生した場合はtrueを返します。 |
| `tr` | `key: string` | `string` | 現在の言語の UI 文字列を検索します（フォールバック：英語、その次にキー自体）。 |
| `inviteText` | `key: string` | `string` | 招待ページの文字列テーブルに対する同様の検索。 |
| `settingText` | `key: string` | `string` | 設定ダイアログの文字列テーブルに対する同様の検索。 |
| `getPresetLabel` | `name: string` | `string` | プリセットのローカライズ済みラベル。“Bot + Aim” のような組み合わせを組み立てます。 |
| `buildLanguageOptions` | `{ activeLocale = getActiveLocale(), selectedLocale = null } = {}` | `string (HTML)` | “auto” 項目を含む言語選択ボタンのマークアップ。 |
| `installLanguageSelector` | `root: HTMLElement, onLocaleSelect: Function \| null = null` | `void` | 言語セレクターを設定・配置し、選択を保存してページを再読み込みします。任意のコールバックで選択処理を置き換えられます。 |
| `queueNoticeText` | `key: string, locale = getQueueNoticeLocale()` | `string` | 空キューまたはフッター用のローカライズ文字列を検索します。 |

## サウンド効果と設定ダイアログ

| 関数 | パラメーター | 戻り値 | 説明 |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | 設定ダイアログに表示される「N 件 · 最後の記録：…」の行。 |
| `soundsEnabled` | — | `boolean` | UI サウンドが有効かどうか（`demoscopeSoundEffectsEnabled`、既定はオン）。 |
| `getSoundVolume` | — | `number (0–1)` | 保存されたサウンド音量（`demoscopeSoundEffectsVolume`、既定 0.4）。 |
| `playUiSound` | `kind = "click"` | `void` | Web Audio で短い音のシーケンスを合成します（`click`、`select`、`toggle`、`copy`、`confirm`、`preview`、`tick`、`open`、`close`、`error`）。例外は投げません。 |
| `readSettingsHotkey` | — | `string` | 設定ダイアログを開く、保存済みの `KeyboardEvent.code`（既定 `F2`）。 |
| `formatHotkey` | `code: string` | `string` | 読みやすいキー名（`KeyQ` → `Q`、`Numpad1` → `Num 1`）。 |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | 物理キーコードを取り出し、非ラテン配列を `KeyX` に戻して対応付けます。使えない場合は `""`。 |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | DemoScope またはプレーヤーがすでに使っているキー（Enter、スペース、矢印、`M`、`F`、`1`〜`5` など）なら真。 |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | 設定ダイアログを作成して接続します。音量とサウンド、試聴、ショートカット、ローカル履歴と上限、時刻形式、JSONの読み込み/書き出し、HTMLの書き出し/統合、履歴消去、フッター表示、リセットを扱います。 |
| `openSettingsDialog` | `opener = null` | `void` | 現在の値でダイアログを開き、フォーカスを戻す要素を記憶します。 |
| `installSettingsUi` | — | `void` | グローバルなキャプチャ段階のキーリスナー（ダイアログの開閉、キー再割り当て）とサウンドイベントを設置します。 |
| `installUiSoundEvents` | — | `void` | DemoScope のコントロールに対するフィードバック音を再生する、委譲式のクリックリスナー。 |
| `ensureSettingsLayoutStyles` | — | `void` | 設定ウィンドウのスタイルを追加します（左揃えのセクション、概要チップ付きの行）。 |
| `refreshSettingsSummaries` | — | `void` | ショートカット（「変更済み: N」/「既定」）とアニメーション（「スタイル · 速度」/「オフ」）の概要チップを更新します。 |
| `installExtraSettingsSections` | `settingsDialog: HTMLDialogElement` | `void` | 上部にショートカットとアニメーション、下部に診断とリセットのセクションを追加します。設定キーの旧ブロックを非表示にします。このキーは現在ショートカットウィンドウで変更します。 |

## バックアップ、レポート、履歴の上限

| 関数 | パラメーター | 戻り値 | 説明 |
|---|---|---|---|
| `exportLocalHistory` | — | `void` | 履歴全体を `demoscope-history-YYYY-MM-DD.json` としてダウンロードします。 |
| `downloadHistoryFile` | `content: string, filename: string, mimeType: string` | `void` | 一時的な Blob URL を使ってファイルのダウンロードを開始します。 |
| `collectHistoryReportRows` | `store: object` | `Array<{vodId, ts, summary, segment}>` | 履歴エントリを平坦化して重複を除去します（新しい順）。 |
| `exportReadableHistory` | — | `void` | 履歴の独立したローカライズ済み HTML レポートをダウンロードします。 |
| `buildReadableHistoryReport` | `rows: Array, reportTitle: string, summaryNote = ""` | `string (HTML document)` | エスケープ済みの HTML レポートマークアップを組み立てます。 |
| `setMergeReportStatus` | `statusElement: HTMLElement, message: string, state: string` | `void` | 統合ツールのステータス行を更新します（`progress`、`success`、`warning`）。 |
| `exportCombinedHistoryReports` | `files: FileList \| File[], statusElement: HTMLElement, button: HTMLButtonElement` | `Promise<void>` | 多数の JSON バックアップ（各 ≤ 5 MB、合計 ≤ 100 MB）を検証し、エントリの重複を除去して、1 つの統合 HTML レポートをダウンロードします。 |
| `isSafeHistoryKey` | `key: string` | `boolean` | 履歴キーに対する許可リスト検査（`__proto__`、`constructor`、不正な形式のキーを拒否）。 |
| `importLocalHistory` | `file: File` | `Promise<void>` | JSON バックアップを検証し、ローカル履歴に（上限を守って）統合して、UI を更新します。 |
| `readHistoryLimit` | `storageKey: string, allowedValues: number[], defaultValue: number` | `number` | `localStorage` から数値の上限を読み取り、許可された値のみ受け付けます。 |
| `getHistoryPerKeyLimit` | — | `number` | クリップ/ゲームのキーごとに保持するエントリ数（10/20/30/50、既定 30）。 |
| `getHistoryTotalLimit` | — | `number` | 保持するクリップ/ゲームのキーの総数（100/200/300/500、既定 300）。 |

## アカウント名と招待ページ

| 関数 | パラメーター | 戻り値 | 説明 |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Steam のアカウント名が現在非表示かどうか。 |
| `installAccountNameControl` | — | `void` | ログアウトリンクの横に目の形のトグルを追加し、`MutationObserver` で同期を保ちます。 |
| `installInvitePage` | — | `boolean` | `/vacnet/createinvite` を作り直します：カードレイアウト、リンクの表示/非表示とコピー（Clipboard API、`execCommand` へのフォールバック付き）、要件リスト、言語選択。想定した要素がない場合は `false` を返します。 |
| `installInviteExtras` | `card: HTMLElement, doneLink: HTMLElement \| null` | `void` | 閉じるボタン（×）と、inviteDone（既定Enter）およびinviteClose（既定Esc）のcaptureフェーズリスナーを追加します。ボタン、リンク、入力欄、ダイアログ、言語リストにフォーカスがある間はキーを無視します。 |
| `refreshInviteKeyLabels` | — | `void` | 現在の割り当てに基づき、「完了」ラベルのキー表示と×のツールチップを再描画します。 |
| `installWelcomePage` | — | `boolean` | ウェルカムページを整え、ブランド表示と言語選択を追加します。Enter/Spaceで続行し、必要な要素がなければfalseを返します。 |

## クリップ区間とプレーヤーアダプター

| 関数 | パラメーター | 戻り値 | 説明 |
|---|---|---|---|
| `parseSegmentBounds` | — | `{startTime, endTime, duration} \| null` | ページのインラインスクリプトから `startTime`/`endTime` を取り出します。 |
| `formatSegmentTime` | `seconds: number` | `string` | 秒数を `m:ss.cc` 形式に整形します。 |
| `getVideoElement` | — | `HTMLVideoElement \| null` | レビュー対象の `<video>` 要素を見つけます。 |
| `getVjsPlayer` | — | `Video.js player \| null` | ページの Video.js プレーヤーが利用可能で破棄されていなければ、それを返します。 |
| `createPlayerAdapter` | — | `adapter \| null` | Video.js / HTML5 動画の上に被せた統一 API：`currentTime`、`paused`、`pause`、`play`、`playbackRate(s)`、`muted`、`on`、`isFullscreen`、`requestFullscreen`、`exitFullscreen`。 |
| `waitForPlayerAdapter` | `timeoutMs = 20000` | `Promise<adapter>` | プレーヤーが現れるまで 100 ms ごとにポーリングし、タイムアウトしたら拒否します。 |
| `clampSegment` | `time: number, bounds: object` | `number` | 時刻をクリップの範囲内に収めます。 |
| `segmentProgress` | `time: number, bounds: object` | `number (0–1)` | クリップ内での相対位置。 |
| `installCustomControls` | `player, bounds, refreshDisplay: {current: Function}` | `void` | 動画の下にシークバー、時間表示、ショートカットのヒントを追加します。 |
| `pauseLayoutMutations` | `run: Function` | `void` | レイアウト監視を一時停止している間にコールバックを実行します（フィードバックループを防止）。 |
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | 入力欄、textarea、select、編集可能なテキストにフォーカスがある場合にtrueを返します。 |
| `isPlayerShortcutBlocked` | `target: EventTarget` | `boolean` | isShortcutBlockedと同様ですが、判定ラジオボタンは通過させます。クリック後もフォーカスがラジオボタンに残るためです。 |
| `formatShiftSpeedLabel` | `rate: number` | `string` | 速度オプションのラベル。 |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | 速度セレクター用の `<option>` リスト（0.5〜4×）。 |
| `readStoredShiftSpeed` | — | `number` | 保存された Shift の速度（既定 2×）。 |
| `readStoredVerdictRandomizer` | — | `boolean` | 保存された判定ランダマイザーの状態（既定はオフ）。 |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | 再生速度の処理、区間の制限/一時停止、シーク/コマ送り/ミュート/全画面のヘルパー、およびグローバルなキーボードショートカット（`1`〜`5`、矢印、`,` `.`、スペース、`M`、`F`、Shift）を接続します。内部クロージャ：`applyPlayerRate`、`setShiftSpeed`、`setShiftSpeedActive`、`seekBy`、`stepFrame`、`togglePlay`、`toggleMute`、`toggleFullscreen`、描画ループのヘルパー。 |

## 判定プリセット

| 関数 | パラメーター | 戻り値 | 説明 |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | 選択のない各判定グループで “skip” を選びます。 |
| `getSelectedVerdictState` | — | `object` | `aimassist`、`wallhack`、`autobhop`、`bot` の現在値（`positive` / `negative` / `skip` / `null`）。 |
| `detectActivePreset` | — | `string \| null` | 現在の選択に一致するプリセットの名前。 |
| `syncPresetButtons` | — | `string \| null` | プリセットボタンの `aria-pressed` と拡張プリセットのバッジを更新します。 |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | プリセットのラジオ入力をクリックします。ランダマイザーがオンなら順序をシャッフルし、クリック間に 200〜600 ms 待ちます。実行中はプリセットボタンを無効にします。 |
| `readAdvancedPresetsOpen` | — | `boolean` | 拡張プリセットの引き出しが開いたままだったかどうか。 |
| `normalizeVerdictLabels` | `root = document` | `void` | 判定ラベルからハイライト用マークアップを取り除きます。 |
| `applyVerdictSectionTitles` | `root = document` | `void` | 各判定グループの上にローカライズ済みの見出しを追加します。 |
| `ensureVerdictHelp` | `block: HTMLElement, titleEl: HTMLElement, title: string, field: string` | `void` | DemoScope独自のローカライズ文を使って、判定グループの「?」ボタンと説明ポップオーバーを作成します。VACNetの文言は予備としてのみ使います。 |
| `closeVerdictHelp` | `except = null` | `void` | 指定したもの以外の開いている説明ポップオーバーをすべて閉じます。 |
| `installVerdictHelpHandlers` | — | `void` | ポップオーバー向けにクリック、外側のクリック、Escの委譲ハンドラーを一度だけ登録します。 |

## トースト、フッター、送信時のロード表示

| 関数 | パラメーター | 戻り値 | 説明 |
|---|---|---|---|
| `hideSiteFooter` | — | `void` | サイトのフッターを非表示にします。 |
| `showToast` | `message: string, type = "info", duration = 1800` | `void` | ブロックしない ARIA-live のトースト通知を表示します。 |
| `markSubmitPending` | — | `void` | 送信時刻と現在のクリップ ID を `sessionStorage` に保存します。 |
| `isSubmitPending` | — | `boolean` | 次のクリップを待っている送信があるかどうか。 |
| `clearSubmitPending` | — | `void` | 送信待ちのマーカーを消去します。 |
| `showSubmitLoadingOverlay` | `message = tr("nextClip")` | `void` | ページ全体のロード表示を出します。 |
| `hideSubmitLoadingOverlay` | — | `void` | ロード表示を隠し、待機状態を消去します。 |
| `bootSubmitLoadingIfPending` | — | `void` | 送信待ちがある場合、ページ読み込み時にロード表示をもう一度出します。 |
| `isReviewPageReady` | `prevVod: string, startedAt: number` | `boolean` | 次のクリップの UI とメディアの準備ができていれば真。 |
| `finishSubmitLoadingWhenReady` | — | `Promise<void>` | 次のクリップを最大 30 s 待ってからロード表示を隠します（タイムアウト時はエラートースト）。 |

## ローカル履歴ストア

| 関数 | パラメーター | 戻り値 | 説明 |
|---|---|---|---|
| `extractVodId` | — | `string` | 動画 URL からクリップ/ゲームの ID を導き出します。 |
| `getGameKey` | — | `string` | ゲームの履歴キー（`game::<id>`）。 |
| `getClipKey` | `bounds: object` | `string` | 1 つの区間の履歴キー（`<id>:<start>:<end>`）。 |
| `normalizeHistoryEntry` | `entry: any` | `{ts, summary, segment} \| null` | 履歴エントリ 1 件を検証して整えます。 |
| `readHistoryEntries` | `store: object, key: string` | `Array` | 1 つのキーの正規化済みエントリ。 |
| `getGameHistoryEntries` | `store: object` | `Array` | 現在のゲームのエントリ（旧キーに対応）。 |
| `getClipHistoryEntries` | `store: object, bounds: object` | `Array` | 現在の区間のエントリ。 |
| `formatClipId` | `vodId: string` | `string` | クリップ ID のハッシュから作る短い数字の表示用 ID（`#0000000`）。 |
| `formatRelativeTime` | `timestamp: number` | `string` | ローカライズ済みの相対時間（`Intl.RelativeTimeFormat`）。 |
| `readClipHistoryStore` | — | `object` | `localStorage` から履歴オブジェクトを読み込みます（エラー時は `{}`）。 |
| `pruneHistoryStore` | `store: object` | `void` | キーごとの上限と全体の上限を適用します（古いキーから先に削除）。 |
| `writeClipHistoryStore` | `store: object` | `boolean` | 刈り込んでから保存します。クォータ/ストレージエラー時は `false`。 |
| `summarizeCurrentVerdict` | — | `string` | 現在の選択のプリセット名、または `mixed`。 |
| `formatSummaryLabel` | `summary: string` | `string` | 履歴サマリーのローカライズ済みラベル。 |
| `formatClockTime` | `seconds: number` | `string` | `m:ss`（または `x.xs`）形式の時計表示。 |
| `formatHumanSegment` | `bounds: object` | `string` | 読みやすい区間の範囲。 |
| `formatGameLabel` | — | `string` | 現在のゲームのローカライズ済みラベル。 |
| `historyEntryKey` | `entry: object` | `string` | 重複除去に使う識別文字列。 |
| `formatPriorStat` | `count: number, label: string` | `string` | 履歴パネルの「ラベル：N」の行。 |
| `buildHistoryListItems` | `clipEntries: Array, gameEntries: Array, currentSegment: string` | `Array` | クリップ/ゲームのエントリを表示用の項目に統合します。 |
| `renderHistoryItem` | `item: object` | `string (HTML)` | 履歴の 1 行分のマークアップ。 |
| `escapeHtml` | `value: any` | `string` | `& < > " '` をエスケープします。 |
| `buildClipHistoryPanel` | `bounds, gameEntries, clipEntries` | `string (HTML)` | レビュー規則ボタンを含む履歴パネルのマークアップ。 |
| `ensureClipHistoryPanel` | — | `void` | パネルのコンテナがなければ作成します。 |
| `ensureReviewRulesDialog` | — | `void` | レビュー規則ダイアログを作成し、開く/閉じるボタンを接続します。 |
| `installLocalHistoryButton` | `panel: HTMLElement` | `void` | 「ローカル履歴」ボタンを接続します（一覧へスクロール、または空のときは通知を表示）。 |
| `positionClipHistoryPanel` | — | `void` | パネルを `.verdicts-container` の先頭に保ちます。 |
| `renderClipHistory` | `bounds: object \| null` | `void` | 現在のクリップ向けに履歴パネルを再描画します。 |
| `appendReviewHistory` | `bounds: object \| null` | `void` | 現在の判定のサマリーをゲームとクリップの履歴に追加します。 |
| `isLocalHistoryEnabled` | — | `boolean` | ローカル履歴が有効か読み取ります（初期設定は有効）。 |
| `readTimeFormat` | — | `string` | 時刻形式（自動、12時間、24時間）を読み取ります。 |
| `formatQueueFirstSeen` | `timestamp: number, locale = getActiveLocale()` | `string` | 言語と時刻形式に合わせて初回検出時刻を整形します。 |
| `getQueueNoticeLocale` | — | `string` | 空キュー通知に使う現在の言語を返します。 |
| `migrateEmptyQueueLanguage` | — | `boolean` | 旧言語設定を共通設定へ移行し、URLを同期します。 |
| `updateEmptyQueueTimestamp` | — | `void` | 初回検出時刻の表示を更新します。 |

## 送信フロー

| 関数 | パラメーター | 戻り値 | 説明 |
|---|---|---|---|
| `isLabelingMode` | — | `boolean` | 4 つの判定グループを表示するページで真。 |
| `getProceedButton` | — | `HTMLButtonElement \| null` | 表示されて有効であれば、標準の送信ボタン。 |
| `recordProceedHistoryIfLabeling` | — | `void` | 送信ごとに 1 回だけ履歴を記録します（再入防止付き）。 |
| `resetProceedArmed` | — | `void` | 2 段階送信の待機状態を解除します。 |
| `refreshProceedButtonLabel` | — | `void` | ボタンのラベル/`Enter` ヒントと待機状態のスタイルを更新します。 |
| `verdictLabelForField` | `field: string, selected: string` | `string \| null` | 選択を `guilty_*` / `innocent_*` / `skip_*` に対応付けます。 |
| `prepareVerdictFormForSubmit` | — | `boolean` | 非表示の `verdict_labels[]` 入力を組み立てます。未選択のグループがあればエラートーストを表示して `false` を返します。 |
| `isSafeSubmitTarget` | `form: HTMLFormElement` | `boolean` | 同一オリジンの HTTPS フォームアクションのみ許可します。 |
| `restoreSubmitUi` | — | `void` | 送信失敗後にボタンを元に戻します。 |
| `submitVerdictForm` | `{ recordHistory = false } = {}` | `boolean` | 安全性チェックを実行し、ロード表示を出してフォームを送信します。 |
| `submitVerdictsDirect` | — | `boolean` | ラベルを準備して送信します。 |
| `invokeProceedAction` | — | `boolean` | Enter/クリックのハンドラー：1 回目で待機、2 回目で送信。 |
| `installProceedShortcut` | — | `void` | `Enter`/`NumpadEnter` 用のキャプチャ段階リスナー。 |
| `invokeCancelAction` | — | `boolean` | 2段階送信の最初の押下を解除するか、表示中の「キャンセル」ボタンをクリックします。キャンセル対象がない場合はfalseを返します。 |
| `refreshCancelButtonLabel` | — | `void` | 「キャンセル」ボタンのキー表示を追加または更新します。 |
| `hookProceedButton` | — | `void` | 標準の送信ボタンのクリック動作を置き換えます。 |
| `installVerdictChangeReset` | — | `void` | 判定が変わったとき、送信の待機状態を解除してプリセットを再同期します。 |
| `scheduleProceedFooterFix` | — | `void` | `fixProceedFooter` のデバウンス（`requestAnimationFrame`）呼び出し。 |
| `scheduleVerdictLabelsFix` | — | `void` | デバウンスされたラベル/見出し/既定値の再正規化。 |

## ショートカット一覧と割り当て変更

| アクション | 既定値 | グループ | 説明 |
|---|---|---|---|
| `playPause` | `Space` | Playback | クリップを一時停止または再生します。 |
| `mute` | `M` | Playback | 音声をミュートまたはミュート解除します。 |
| `fullscreen` | `F` | Playback | 全画面表示を切り替えます。 |
| `seekBack` / `seekForward` | `←` / `→` | ナビゲーション | 5秒戻る／進みます。 |
| `frameBack` / `frameForward` | `,` / `.` | ナビゲーション | 1フレーム戻る／進みます。 |
| `speedBoost` | `Shift` | Navigation | キーを押している間、再生速度を上げます（Shiftを使える唯一のアクション）。 |
| `quick1` … `quick5` | `1` … `5` | 判定 | クラシック形式：プリセット1～5。1問形式：Cheating / Not sure / No cheats seen（`1`～`3`）。 |
| `proceed` | `Enter` | Submission | 判定を確定するか、クラシックフォームを有効化して送信します。 |
| `cancel` | `Esc` | Submission | 「キャンセル」を押すか、最初のEnter押下を解除します。 |
| `inviteDone` | `Enter` | Invite page | 招待ページを離れます（「完了」と同じ）。 |
| `inviteClose` | `Esc` | Invite page | ×ボタンと同じ動作です。 |
| `settings` | `F2` | Interface | 設定ウィンドウを開閉します。 |

キー割り当ては `KeyboardEvent.code` の値として `demoscopeKeybindings` に保存されます（既定値から変更したもののみ。設定キーは独立した項目に保存）。左右の修飾キーは同一キーとして扱い、テンキーはメインキー列と同じキーに対応します。割り当てできないキー：`Tab`、`Ctrl`、`Alt`、`Meta`、`Caps Lock`、`ContextMenu`、`F5`、`F11`、`F12`。競合判定は範囲ごとに行います：`review`、`invite`、すべてと競合する設定用の`global`。

| 関数 | パラメーター | 戻り値 | 説明 |
|---|---|---|---|
| `fmt` | `template: string, vars = {}` | `string` | ローカライズされたテンプレート内の{name}プレースホルダーを置換します。 |
| `isModalOpen` | — | `boolean` | dialogが開いている間はtrueです。その間、ページのショートカットは無効になります。 |
| `normalizeKeyCode` | `code: string` | `string` | 左右の修飾キーを同じキーとして扱い、テンキーの数字とNumpadEnterをメインキーに対応付けます。 |
| `formatKeyLabel` | `code: string` | `string` | キーの表示名（ArrowLeft → ←、KeyM → M、Escape → Esc）。 |
| `loadKeyOverrides` | — | `object` | 保存済みのキー割り当てを読み込み、検証します（キャッシュし、エラー時は{}を返します）。 |
| `saveKeyOverrides` | `overrides: object` | `void` | キー割り当てを保存します。すべて既定値の場合は保存項目を削除します。 |
| `getBinding` | `id: string` | `string` | アクションに現在割り当てられているキー。未割り当ての場合は空文字列です。 |
| `setBinding` | `id: string, code: string` | `void` | アクションにキーを保存します（空のコードは割り当て解除）。既定値は保存されません。 |
| `resetAllBindings` | — | `void` | 設定キーを含むすべての割り当てを既定値に戻します。 |
| `findKeyConflict` | `id: string, code: string` | `object \| null` | 該当範囲ですでに使用されているキーとの競合を検索します。 |
| `getActionForEvent` | `event: KeyboardEvent, scope = currentKeyScope()` | `string \| null` | キーボードイベントに対応するアクションを特定します。 |
| `keyScopeOf` | `id: string` | `string` | アクションの範囲: review、invite、global。 |
| `keyScopesOverlap` | `a: string, b: string` | `boolean` | 2つの範囲が重なる可能性がある場合（同じ範囲、またはいずれかがglobal）はtrueです。 |
| `currentKeyScope` | — | `string` | 招待ページではinvite、それ以外ではreviewです。 |
| `validateKeyForAction` | `id: string, code: string` | `string` | 割り当て可能なら空文字列、ブラウザー/ナビゲーション用キーならreserved、長押ししないアクションにShiftを選んだ場合はshiftを返します。 |
| `quickRangeLabel` | `count: number` | `string` | クイック判定キーのラベル（未変更なら1～5、変更済みなら割り当てられたキー）。 |
| `buildHintsInnerMarkup` | — | `string (HTML)` | 現在の割り当てに基づき、動画下に表示するキーのヒントを作成します。 |
| `refreshKeyLabels` | — | `void` | ページ内のキー表示（ヒント、プリセット/判定バッジ、続行/キャンセル/招待、設定概要）をすべて更新します。 |
| `ensureDemoscopeDialogStyles` | — | `void` | ショートカットウィンドウとアニメーションウィンドウに共通スタイルを追加します。 |
| `hkActionName` | `id: string` | `string` | ローカライズされたアクション名。 |
| `hkGroupName` | `group: string` | `string` | ローカライズされたグループ名。 |
| `hkActionDescription` | `id: string` | `string` | ローカライズされたアクションの説明（両方のタスク形式のクイック判定を説明します）。 |
| `hkSetMessage` | `text: string, warn = false` | `void` | ショートカットウィンドウのステータス行を設定します。 |
| `hkCancelCapture` | — | `void` | キー入力の記録モードを終了します。 |
| `hkRowMarkup` | `action: object` | `string (HTML)` | 競合がある場合は競合パネルを含む、1つのアクション行のマークアップ。 |
| `renderHotkeys` | — | `void` | スクロール位置を維持してウィンドウ全体を再描画します。 |
| `hkCommit` | `actionId: string, code: string, mode = "replace"` | `void` | キーを割り当てます。replaceはもう一方のアクションからキーを解除し、swapはキーを交換します。 |
| `hkRequestAssign` | `actionId: string, code: string` | `void` | キーを直接割り当てます。すでに使用中の場合は競合パネル（置換/交換/キャンセル）を開きます。 |
| `ensureHotkeysDialog` | — | `HTMLDialogElement` | ショートカットウィンドウとcaptureフェーズのキーリスナーを作成します（Escも割り当て可能で、記録中はウィンドウを閉じません）。 |
| `openHotkeysDialog` | — | `void` | ショートカットウィンドウを開きます。 |

## アニメーション

インジケーターには6種類のスタイル（`pulse`、`breathe`、`ripple`、`heartbeat`、`orbit`、`blink`）、3段階の速度（0.6× / 1× / 1.7×）、オン／オフがあり、`demoscopeAnimStyle`、`demoscopeAnimSpeed`、`demoscopeAnimEnabled`に保存されます。有効なスタイルは`<html>`の`data-ds-anim`に設定され（無効時は`off`）、スタイルシートが実際の点とプレビューの両方を制御します。

| 関数 | パラメーター | 戻り値 | 説明 |
|---|---|---|---|
| `readStorage` | `key: string` | `string \| null` | localStorageから安全に読み込みます。 |
| `writeStorage` | `key: string, value: string \| null` | `void` | localStorageへ安全に書き込みます（nullの場合はキーを削除）。 |
| `animEnabled` | — | `boolean` | 保存されたオン/オフ状態。システムの「視差効果を減らす」が有効な場合、既定でオフです。 |
| `animStyle` | — | `string` | 保存されたスタイル（既定値: pulse）。 |
| `animSpeedKey` | — | `string` | 保存された速度（slow / normal / fast、既定値: normal）。 |
| `ensureAnimationStyles` | — | `void` | アニメーション中の点とプレビュー用の点で共有するキーフレームとルールを追加します。 |
| `applyAnimationSettings` | — | `void` | htmlにスタイル、速度、オン/オフを適用し、設定の概要を更新します。 |
| `ensureAnimationsDialog` | — | `HTMLDialogElement` | アニメーションウィンドウを作成します（切り替え、速度、ライブプレビュー付きのスタイルカード、リセット）。 |
| `openAnimationsDialog` | — | `void` | アニメーションウィンドウを開きます。 |
| `ensureUiPolishStyles` | — | `void` | ウィンドウと判定リストに暗色で細いスクロールバーとcolor-scheme: darkを追加します（これがないとChromiumで明るいバーになります）。 |

## 1問形式のタスク

| 関数 | パラメーター | 戻り値 | 説明 |
|---|---|---|---|
| `isCheatingMode` | — | `boolean` | ページが1問形式のフォーム（#verdictbuttons_cheating）を表示する場合はtrueです。 |
| `selectCheatingVerdict` | `kind: string` | `void` | Cheating / わからない / 不正行為なしのラジオボタン（positive / skip / negative）をクリックします。選択肢がロック中ならエラー音を鳴らし、ロックカードを揺らします。 |
| `localizeCheatingVerdicts` | — | `void` | 3つのラベルをDemoScopeの言語に書き換え、CSSでキーのバッジを描画します。VACNetの確認文にキー番号が入らないようにします。ロックカードも準備します。 |
| `updateCheatingLock` | — | `void` | ロックカード（「残り2つの判定はクリップ終了後に解除 · 残りm:ss」）と進行状況バーを更新します。選択肢が解除されるか判定が選ばれるとカードを隠します。 |
| `startCheatingLockWatcher` | — | `void` | updateCheatingLockを呼び出す250ミリ秒間隔のタイマーを開始します。 |

## 安定性と診断

| 関数 | パラメーター | 戻り値 | 説明 |
|---|---|---|---|
| `recordFailure` | `step: string, error: any` | `void` | 診断レポート用に失敗したステップを記録します（件数は制限されます）。 |
| `safeStep` | `step: string, fn: Function, fallback?: any` | `any` | セットアップ手順を実行します。エラー時は記録して代替値を返し、後続の手順を続けます。 |
| `getVideoContainer` | — | `HTMLElement \| null` | 動画コンテナーを検索します。見つからない場合はプレーヤーまたはvideo要素の親を使います。 |
| `getVerdictContainer` | — | `HTMLElement \| null` | 判定コンテナーを検索します。見つからない場合は最初の判定ブロックの親を使います。 |
| `getSubmitArea` | — | `HTMLElement \| null` | 送信/確認領域を検索します（#submitbuttons、.submitbuttons、または送信ボタンの親要素）。 |
| `hasVerdictForm` | — | `boolean` | 判定用ラジオボタンが1つ以上あればtrueです。 |
| `removeEnhancements` | — | `void` | DemoScopeのパネル、クラス、フッター変更を削除し、VACNetのフッターを復元します。 |
| `disableDemoScope` | `reason: string` | `void` | このページでDemoScopeを無効にします。変更を元に戻し、設定ウィンドウだけを残し、セッション中に理由ごとに1回通知します。 |
| `isOwnNode` | `el: Element` | `boolean` | DemoScopeが作成した要素ならtrueです（構造レポートから除外）。 |
| `elementSignature` | `el: Element` | `string` | 構造レポート用のtag#id.class[…]形式。テキストは含みません。 |
| `skeletonOf` | `root: Element, maxDepth = 7, maxNodes = 170` | `string` | タグ、ID、クラスの簡潔なインデント付きツリー（同一の兄弟要素は×Nにまとめます）。 |
| `captureOriginalSkeleton` | — | `void` | DemoScopeが変更する前のページ構造を記録します。 |
| `buildDiagnosticsReport` | — | `string` | バージョン、ページ、言語、ブラウザー、タスク形式、22個の要素チェック（ok / MISSING）、失敗したステップ、変更前後の構造を含むレポートを作成します。ページ本文やアカウント情報は含みません。 |
| `fallbackCopyText` | `text: string` | `boolean` | Clipboard APIが使えない場合、一時的なテキスト欄を使ってコピーします。 |
| `copyDiagnostics` | `statusEl: HTMLElement, textarea: HTMLTextAreaElement` | `Promise<void>` | レポートをコピーします。失敗した場合は選択可能な欄にテキストを表示します。 |

## レイアウトと起動

| 関数 | パラメーター | 戻り値 | 説明 |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Shift 速度の選択バーを組み立てます。 |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | プリセットボタン 1 つ分のマークアップ。 |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | 拡張プリセットグループのマークアップ。 |
| `buildEnhancementBar` | — | `HTMLElement` | クイック判定バーを組み立てます：プリセット、ランダマイザーのトグル、拡張の引き出し。 |
| `positionShiftSpeedBar` | — | `void` | 速度バーを判定リストの前に保ちます。 |
| `positionEnhancementBar` | — | `void` | プリセットバーを送信ボタンの前に保ちます。 |
| `fixProceedFooter` | — | `void` | フッター、各バー、送信ボタンを並べ替えます。 |
| `enhanceLayout` | — | `void` | すべてのレイアウト変更を適用し、設定 UI を設置します。 |
| `ensureReviewStructure` | — | `void` | VACNetのマークアップを正規化します。判定ブロックを.verdicts-container-innerで囲み、#submitbuttonsをコンテナー内へ移動し、クリップ数をヘッダーのチップにも表示します。旧形式と新形式の両方に対応します。 |
| `watchProceedFooter` | — | `void` | `.verdicts-container` を監視し、フッターの修正をスケジュールします。 |
| `watchVerdictLabels` | — | `void` | 判定ラベルを監視し、再正規化をスケジュールします。 |
| `readFooterPreference` | `storageKey: string` | `boolean` | localStorageからフッターの表示設定を読み取ります。 |
| `saveFooterPreference` | `storageKey: string, hidden: boolean` | `void` | フッターの表示設定を保存します。 |
| `applyFooterPreferences` | `footer: HTMLElement \| null = document.querySelector(".demoscope-custom-footer")` | `void` | `void` |
| `installDemoScopeFooter` | `withClipLinks: boolean, locale = getActiveLocale(), showFeedback = true` | `HTMLElement` | 任意のリンクを含むローカライズ済みフッターを作成または更新し、設定を適用します。 |
| `installEmptyQueueNotice` | — | `boolean` | 空キュー表示を、説明・時刻・言語選択・フッターを含むローカライズ表示に置き換えます。 |
| `init` | — | `Promise<void>` | エントリーポイント：アカウント名コントロール → 招待ページまたはレビューページ → レイアウト、監視、ショートカット、プレーヤー強化。 |

installWelcomePageとinstallInvitePageは、必要なVACNet要素がない場合falseを返します。installEmptyQueueNoticeは、キューが空でない場合falseを返します。

### その他の項目

* **`blockSegmentLoopGuard`**（IIFE、起動時に実行）：ページの `setInterval` をラップし、サイト標準の100ミリ秒区間ループタイマーを何もしない処理に置き換えます。代わりにDemoScope独自の操作が区間を制御します。
* **定数とテーブル：** `SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC` (`PRESETS`: 21 definitions); added since v1.0.0: `KEY_ACTIONS`, `KEY_GROUPS`, `KEY_ACTION_BY_ID`, `KEY_ACTION_SCOPE`, `RESERVED_KEY_CODES`, `CHEATING_KEYS`, `VERDICT_SECTION_TITLES`, `VERDICT_SECTION_HELP`, `ANIM_STYLES`, `ANIM_SPEEDS`.
* **モジュールの状態：** `diag` (step failures, the switch-off reason and the original page structure), `hkState` (state of the Hotkeys window) and the `SCRIPT_VERSION` constant used by the diagnostics report.
* **文字列：**ユーザーに表示されるすべての文言は上記の翻訳テーブルにあります。v1.2.0～v1.4.0で追加されたウィンドウも29言語に翻訳されています。

## 保存キー

| キー | 保存先 | 用途 |
|---|---|---|
| `demoscopeLanguage`, `demoscopeLanguageAuto` | `localStorage` | 選択した言語／自動モード。 |
| `demoscopeKeybindings` | `localStorage` | 既定値と異なるショートカット（JSON）。 |
| `demoscopeSettingsHotkey` | `localStorage` | 設定ダイアログを開くキー（削除時は `none`）。 |
| `demoscopeAnimEnabled`, `demoscopeAnimStyle`, `demoscopeAnimSpeed` | `localStorage` | インジケーターのアニメーション設定。 |
| `demoscopeSoundEffectsEnabled`, `demoscopeSoundEffectsVolume` | `localStorage` | サウンド設定。 |
| `demoscopeClipHistory`と履歴上限／形式のキー | `localStorage` | ローカルのレビュー履歴とその設定。 |
| `demoscopeSubmitPending`, `demoscopeSubmitPrevVod`, `demoscopeLangSyncTried`, `demoscopeDisabledNotice` | `sessionStorage` | 送信中の状態、言語同期の保護、一度だけ表示する無効化通知。 |








