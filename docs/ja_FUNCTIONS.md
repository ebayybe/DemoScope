<div align="center">

[English](../FUNCTIONS.md) · [Български](bg_FUNCTIONS.md) · [Magyar](hu_FUNCTIONS.md) · [Tiếng Việt](vi_FUNCTIONS.md) · [Ελληνικά](el_FUNCTIONS.md) · [Dansk](da_FUNCTIONS.md) · [Bahasa Indonesia](id_FUNCTIONS.md) · [Español (España)](es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](es-419_FUNCTIONS.md) · [Italiano](it_FUNCTIONS.md) · [繁體中文](zh-TW_FUNCTIONS.md) · [简体中文](zh-CN_FUNCTIONS.md) · [한국어](ko_FUNCTIONS.md) · [Deutsch](de_FUNCTIONS.md) · [Nederlands](nl_FUNCTIONS.md) · [Norsk](no_FUNCTIONS.md) · [Polski](pl_FUNCTIONS.md) · [Português (Portugal)](pt-PT_FUNCTIONS.md) · [Português (Brasil)](pt-BR_FUNCTIONS.md) · [Română](ro_FUNCTIONS.md) · [Русский](ru_FUNCTIONS.md) · [ไทย](th_FUNCTIONS.md) · [Türkçe](tr_FUNCTIONS.md) · [Українська](uk_FUNCTIONS.md) · [Suomi](fi_FUNCTIONS.md) · [Français](fr_FUNCTIONS.md) · [Čeština](cs_FUNCTIONS.md) · [Svenska](sv_FUNCTIONS.md) · **日本語**

</div>

# DemoScope — 関数リファレンス

`DemoScope.user.js` v1.0.0 のトップレベル関数 128 個すべてのリファレンスです（名前、引数、戻り値、役割）。[README](../../README/ja_README.md) に戻る。

表記：`—` は引数なし、`void` は副作用のために呼び出される関数を表します。

## ローカライズ

| 関数 | 引数 | 戻り値 | 役割 |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | 言語の国旗を表すインライン SVG マークアップ。ない場合は地球儀アイコンにフォールバックします。 |
| `getSavedLocale` | — | `string \| null` | `localStorage` からユーザーが保存した言語（`demoscopeLanguage`）を読み取ります。 |
| `getActiveLocale` | — | `string` | 現在の言語を決定します：保存済みの選択 → Steam の `?l=` → ブラウザー/ページの言語 → `en`。 |
| `getLanguageBadge` | — | `string` | 言語選択のバッジ用に、その言語自身の表示名（例：“English version”）を返します。 |
| `tr` | `key: string` | `string` | 現在の言語の UI 文字列を検索します（フォールバック：英語、その次にキー自体）。 |
| `inviteText` | `key: string` | `string` | 招待ページの文字列テーブルに対する同様の検索。 |
| `settingText` | `key: string` | `string` | 設定ダイアログの文字列テーブルに対する同様の検索。 |
| `getPresetLabel` | `name: string` | `string` | プリセットのローカライズ済みラベル。“Bot + Aim” のような組み合わせを組み立てます。 |
| `buildLanguageOptions` | — | `string (HTML)` | “auto” 項目を含む言語選択ボタンのマークアップ。 |
| `installLanguageSelector` | `root: HTMLElement` | `void` | ポップオーバー式の言語選択を接続・配置し、選択を保存してページを再読み込みします。 |

## サウンド効果と設定ダイアログ

| 関数 | 引数 | 戻り値 | 役割 |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | 設定ダイアログに表示される「N 件 · 最後の記録：…」の行。 |
| `soundsEnabled` | — | `boolean` | UI サウンドが有効かどうか（`demoscopeSoundEffectsEnabled`、既定はオン）。 |
| `getSoundVolume` | — | `number (0–1)` | 保存されたサウンド音量（`demoscopeSoundEffectsVolume`、既定 0.4）。 |
| `playUiSound` | `kind = "click"` | `void` | Web Audio で短い音のシーケンスを合成します（`click`、`select`、`toggle`、`copy`、`confirm`、`preview`、`tick`、`open`、`close`、`error`）。例外は投げません。 |
| `readSettingsHotkey` | — | `string` | 設定ダイアログを開く、保存済みの `KeyboardEvent.code`（既定 `F2`）。 |
| `formatHotkey` | `code: string` | `string` | 読みやすいキー名（`KeyQ` → `Q`、`Numpad1` → `Num 1`）。 |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | 物理キーコードを取り出し、非ラテン配列を `KeyX` に戻して対応付けます。使えない場合は `""`。 |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | DemoScope またはプレーヤーがすでに使っているキー（Enter、スペース、矢印、`M`、`F`、`1`〜`5` など）なら真。 |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | 設定ダイアログを（一度だけ）作成して接続します：サウンド、音量、ショートカットの取得、履歴の上限、エクスポート/インポート/レポート/統合/削除、リセット。 |
| `openSettingsDialog` | `opener = null` | `void` | 現在の値でダイアログを開き、フォーカスを戻す要素を記憶します。 |
| `installSettingsUi` | — | `void` | グローバルなキャプチャ段階のキーリスナー（ダイアログの開閉、キー再割り当て）とサウンドイベントを設置します。 |
| `installUiSoundEvents` | — | `void` | DemoScope のコントロールに対するフィードバック音を再生する、委譲式のクリックリスナー。 |

## バックアップ、レポート、履歴の上限

| 関数 | 引数 | 戻り値 | 役割 |
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
| `readAdvancedPresetsOpen` | — | `boolean` | 拡張プリセットの引き出しが開いたままだったかどうか。 |

## アカウント名と招待ページ

| 関数 | 引数 | 戻り値 | 役割 |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Steam のアカウント名が現在非表示かどうか。 |
| `installAccountNameControl` | — | `void` | ログアウトリンクの横に目の形のトグルを追加し、`MutationObserver` で同期を保ちます。 |
| `installInvitePage` | — | `boolean` | `/vacnet/createinvite` を作り直します：カードレイアウト、リンクの表示/非表示とコピー（Clipboard API、`execCommand` へのフォールバック付き）、要件リスト、言語選択。想定した要素がない場合は `false` を返します。 |

## クリップ区間とプレーヤーアダプター

| 関数 | 引数 | 戻り値 | 役割 |
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
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | フォーカスが入力欄、テキストエリア、セレクト、ボタン、リンク、編集可能な要素にあれば真。 |
| `formatShiftSpeedLabel` | `rate: number` | `string` | 速度オプションのラベル。 |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | 速度セレクター用の `<option>` リスト（0.5〜4×）。 |
| `readStoredShiftSpeed` | — | `number` | 保存された Shift の速度（既定 2×）。 |
| `readStoredVerdictRandomizer` | — | `boolean` | 保存された判定ランダマイザーの状態（既定はオフ）。 |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | 再生速度の処理、区間の制限/一時停止、シーク/コマ送り/ミュート/全画面のヘルパー、およびグローバルなキーボードショートカット（`1`〜`5`、矢印、`,` `.`、スペース、`M`、`F`、Shift）を接続します。内部クロージャ：`applyPlayerRate`、`setShiftSpeed`、`setShiftSpeedActive`、`seekBy`、`stepFrame`、`togglePlay`、`toggleMute`、`toggleFullscreen`、描画ループのヘルパー。 |

## 判定プリセット

| 関数 | 引数 | 戻り値 | 役割 |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | 選択のない各判定グループで “skip” を選びます。 |
| `getSelectedVerdictState` | — | `object` | `aimassist`、`wallhack`、`autobhop`、`bot` の現在値（`positive` / `negative` / `skip` / `null`）。 |
| `detectActivePreset` | — | `string \| null` | 現在の選択に一致するプリセットの名前。 |
| `syncPresetButtons` | — | `string \| null` | プリセットボタンの `aria-pressed` と拡張プリセットのバッジを更新します。 |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | プリセットのラジオ入力をクリックします。ランダマイザーがオンなら順序をシャッフルし、クリック間に 200〜600 ms 待ちます。実行中はプリセットボタンを無効にします。 |
| `normalizeVerdictLabels` | `root = document` | `void` | 判定ラベルからハイライト用マークアップを取り除きます。 |
| `applyVerdictSectionTitles` | `root = document` | `void` | 各判定グループの上にローカライズ済みの見出しを追加します。 |

## トースト、フッター、送信時のロード表示

| 関数 | 引数 | 戻り値 | 役割 |
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

| 関数 | 引数 | 戻り値 | 役割 |
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

## 送信フロー

| 関数 | 引数 | 戻り値 | 役割 |
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
| `submitVerdictForm` | `{ recordHistory = false }` | `boolean` | 安全性チェックを実行し、ロード表示を出してフォームを送信します。 |
| `submitVerdictsDirect` | — | `boolean` | ラベルを準備して送信します。 |
| `invokeProceedAction` | — | `boolean` | Enter/クリックのハンドラー：1 回目で待機、2 回目で送信。 |
| `installProceedShortcut` | — | `void` | `Enter`/`NumpadEnter` 用のキャプチャ段階リスナー。 |
| `hookProceedButton` | — | `void` | 標準の送信ボタンのクリック動作を置き換えます。 |
| `installVerdictChangeReset` | — | `void` | 判定が変わったとき、送信の待機状態を解除してプリセットを再同期します。 |
| `scheduleProceedFooterFix` | — | `void` | `fixProceedFooter` のデバウンス（`requestAnimationFrame`）呼び出し。 |
| `scheduleVerdictLabelsFix` | — | `void` | デバウンスされたラベル/見出し/既定値の再正規化。 |

## レイアウトと起動

| 関数 | 引数 | 戻り値 | 役割 |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Shift 速度の選択バーを組み立てます。 |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | プリセットボタン 1 つ分のマークアップ。 |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | 拡張プリセットグループのマークアップ。 |
| `buildEnhancementBar` | — | `HTMLElement` | クイック判定バーを組み立てます：プリセット、ランダマイザーのトグル、拡張の引き出し。 |
| `positionShiftSpeedBar` | — | `void` | 速度バーを判定リストの前に保ちます。 |
| `positionEnhancementBar` | — | `void` | プリセットバーを送信ボタンの前に保ちます。 |
| `fixProceedFooter` | — | `void` | フッター、各バー、送信ボタンを並べ替えます。 |
| `enhanceLayout` | — | `void` | すべてのレイアウト変更を適用し、設定 UI を設置します。 |
| `watchProceedFooter` | — | `void` | `.verdicts-container` を監視し、フッターの修正をスケジュールします。 |
| `watchVerdictLabels` | — | `void` | 判定ラベルを監視し、再正規化をスケジュールします。 |
| `init` | — | `Promise<void>` | エントリーポイント：アカウント名コントロール → 招待ページまたはレビューページ → レイアウト、監視、ショートカット、プレーヤー強化。 |

### 上記に含まれないもの

* **`blockSegmentLoopGuard`**（IIFE、読み込み時に実行）：ページの `setInterval` をラップし、サイト標準の 100 ms 区間ループタイマーを何もしない関数に置き換えます。区間は代わりに DemoScope 自身のコントロールが処理します。
* **定数とテーブル：**`SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC`（`PRESETS`：21 件の定義）。
