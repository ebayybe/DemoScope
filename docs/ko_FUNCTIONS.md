<div align="center">

[English](../FUNCTIONS.md) · [Български](bg_FUNCTIONS.md) · [Magyar](hu_FUNCTIONS.md) · [Tiếng Việt](vi_FUNCTIONS.md) · [Ελληνικά](el_FUNCTIONS.md) · [Dansk](da_FUNCTIONS.md) · [Bahasa Indonesia](id_FUNCTIONS.md) · [Español (España)](es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](es-419_FUNCTIONS.md) · [Italiano](it_FUNCTIONS.md) · [繁體中文](zh-TW_FUNCTIONS.md) · [简体中文](zh-CN_FUNCTIONS.md) · **한국어** · [Deutsch](de_FUNCTIONS.md) · [Nederlands](nl_FUNCTIONS.md) · [Norsk](no_FUNCTIONS.md) · [Polski](pl_FUNCTIONS.md) · [Português (Portugal)](pt-PT_FUNCTIONS.md) · [Português (Brasil)](pt-BR_FUNCTIONS.md) · [Română](ro_FUNCTIONS.md) · [Русский](ru_FUNCTIONS.md) · [ไทย](th_FUNCTIONS.md) · [Türkçe](tr_FUNCTIONS.md) · [Українська](uk_FUNCTIONS.md) · [Suomi](fi_FUNCTIONS.md) · [Français](fr_FUNCTIONS.md) · [Čeština](cs_FUNCTIONS.md) · [Svenska](sv_FUNCTIONS.md) · [日本語](ja_FUNCTIONS.md)

</div>

# DemoScope — 함수 레퍼런스

`DemoScope.user.js` v1.0.0의 최상위 함수 128개 전체에 대한 레퍼런스입니다(이름, 매개변수, 반환값, 역할). [README](../../README/ko_README.md)로 돌아가기.

표기: `—`는 매개변수가 없음을, `void`는 부수 효과를 위해 호출되는 함수임을 뜻합니다.

## 현지화

| 함수 | 매개변수 | 반환값 | 역할 |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | 언어의 국기를 나타내는 인라인 SVG 마크업. 없으면 지구본 아이콘으로 대체합니다. |
| `getSavedLocale` | — | `string \| null` | `localStorage`에서 사용자가 저장한 언어(`demoscopeLanguage`)를 읽습니다. |
| `getActiveLocale` | — | `string` | 활성 언어를 결정합니다: 저장된 선택 → Steam `?l=` → 브라우저/페이지 언어 → `en`. |
| `getLanguageBadge` | — | `string` | 언어 선택기 배지에 쓰이는 해당 언어 고유의 표시 이름(예: “English version”). |
| `tr` | `key: string` | `string` | 활성 언어의 UI 문자열을 조회합니다(대체 순서: 영어, 그다음 키 자체). |
| `inviteText` | `key: string` | `string` | 초대 페이지 문자열 테이블에 대한 동일한 조회. |
| `settingText` | `key: string` | `string` | 설정 대화상자 문자열 테이블에 대한 동일한 조회. |
| `getPresetLabel` | `name: string` | `string` | 프리셋의 현지화된 라벨. “Bot + Aim” 같은 조합을 구성합니다. |
| `buildLanguageOptions` | — | `string (HTML)` | “auto” 항목을 포함한 언어 선택 버튼의 마크업. |
| `installLanguageSelector` | `root: HTMLElement` | `void` | 팝오버 언어 선택기를 연결·배치하고, 선택을 저장한 뒤 페이지를 다시 불러옵니다. |

## 사운드 효과 및 설정 대화상자

| 함수 | 매개변수 | 반환값 | 역할 |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | 설정 대화상자에 표시되는 “N개 항목 · 마지막 항목: …” 줄. |
| `soundsEnabled` | — | `boolean` | UI 사운드가 켜져 있는지 여부(`demoscopeSoundEffectsEnabled`, 기본값 켜짐). |
| `getSoundVolume` | — | `number (0–1)` | 저장된 사운드 볼륨(`demoscopeSoundEffectsVolume`, 기본값 0.4). |
| `playUiSound` | `kind = "click"` | `void` | Web Audio로 짧은 음 시퀀스를 합성합니다(`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`). 예외를 던지지 않습니다. |
| `readSettingsHotkey` | — | `string` | 설정 대화상자를 여는, 저장된 `KeyboardEvent.code`(기본값 `F2`). |
| `formatHotkey` | `code: string` | `string` | 사람이 읽을 수 있는 키 이름(`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | 물리 키 코드를 추출하며, 비라틴 자판 배열은 `KeyX`로 되돌려 매핑합니다. 사용할 수 없으면 `""`. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | DemoScope나 플레이어가 이미 사용하는 키이면 참(Enter, Space, 방향키, `M`, `F`, `1`–`5`, …). |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | 설정 대화상자를 (한 번만) 만들고 연결합니다: 사운드, 볼륨, 단축키 캡처, 기록 한도, 내보내기/가져오기/보고서/병합/삭제, 초기화. |
| `openSettingsDialog` | `opener = null` | `void` | 현재 값으로 대화상자를 열고, 포커스를 되돌릴 요소를 기억합니다. |
| `installSettingsUi` | — | `void` | 전역 캡처 단계 키 리스너(대화상자 열기/닫기, 키 재지정)와 사운드 이벤트를 설치합니다. |
| `installUiSoundEvents` | — | `void` | DemoScope 컨트롤에 대한 피드백 사운드를 재생하는 위임 클릭 리스너. |

## 백업, 보고서, 기록 한도

| 함수 | 매개변수 | 반환값 | 역할 |
|---|---|---|---|
| `exportLocalHistory` | — | `void` | 전체 기록을 `demoscope-history-YYYY-MM-DD.json`으로 다운로드합니다. |
| `downloadHistoryFile` | `content: string, filename: string, mimeType: string` | `void` | 임시 Blob URL을 통해 파일 다운로드를 시작합니다. |
| `collectHistoryReportRows` | `store: object` | `Array<{vodId, ts, summary, segment}>` | 기록 항목을 평탄화하고 중복을 제거하며, 최신 항목이 먼저 옵니다. |
| `exportReadableHistory` | — | `void` | 기록의 독립형 현지화 HTML 보고서를 다운로드합니다. |
| `buildReadableHistoryReport` | `rows: Array, reportTitle: string, summaryNote = ""` | `string (HTML document)` | 이스케이프 처리된 HTML 보고서 마크업을 만듭니다. |
| `setMergeReportStatus` | `statusElement: HTMLElement, message: string, state: string` | `void` | 병합 도구의 상태 줄을 갱신합니다(`progress`, `success`, `warning`). |
| `exportCombinedHistoryReports` | `files: FileList \| File[], statusElement: HTMLElement, button: HTMLButtonElement` | `Promise<void>` | 여러 JSON 백업(각각 ≤ 5 MB, 합계 ≤ 100 MB)을 검증하고 항목 중복을 제거한 뒤 하나의 통합 HTML 보고서를 다운로드합니다. |
| `isSafeHistoryKey` | `key: string` | `boolean` | 기록 키에 대한 허용 목록 검사(`__proto__`, `constructor`, 잘못된 형식의 키를 차단). |
| `importLocalHistory` | `file: File` | `Promise<void>` | JSON 백업을 검증하고 로컬 기록에 병합(한도 준수)한 뒤 UI를 새로 고칩니다. |
| `readHistoryLimit` | `storageKey: string, allowedValues: number[], defaultValue: number` | `number` | `localStorage`에서 숫자 한도를 읽으며, 허용된 값만 받아들입니다. |
| `getHistoryPerKeyLimit` | — | `number` | 클립/게임 키당 보관하는 항목 수(10/20/30/50, 기본값 30). |
| `getHistoryTotalLimit` | — | `number` | 전체적으로 보관하는 클립/게임 키의 수(100/200/300/500, 기본값 300). |
| `readAdvancedPresetsOpen` | — | `boolean` | 확장 프리셋 서랍이 열린 채로 남아 있었는지 여부. |

## 계정 이름 및 초대 페이지

| 함수 | 매개변수 | 반환값 | 역할 |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Steam 계정 이름이 현재 숨겨져 있는지 여부. |
| `installAccountNameControl` | — | `void` | 로그아웃 링크 옆에 눈 모양 토글을 추가하고 `MutationObserver`로 동기화 상태를 유지합니다. |
| `installInvitePage` | — | `boolean` | `/vacnet/createinvite`를 새로 꾸밉니다: 카드 레이아웃, 링크 표시/숨김 및 복사(Clipboard API, `execCommand` 대체), 요구 사항 목록, 언어 선택기. 필요한 요소가 없으면 `false`를 반환합니다. |

## 클립 구간 및 플레이어 어댑터

| 함수 | 매개변수 | 반환값 | 역할 |
|---|---|---|---|
| `parseSegmentBounds` | — | `{startTime, endTime, duration} \| null` | 페이지의 인라인 스크립트에서 `startTime`/`endTime`을 추출합니다. |
| `formatSegmentTime` | `seconds: number` | `string` | 초를 `m:ss.cc` 형식으로 변환합니다. |
| `getVideoElement` | — | `HTMLVideoElement \| null` | 검토용 `<video>` 요소를 찾습니다. |
| `getVjsPlayer` | — | `Video.js player \| null` | 사용 가능하고 폐기되지 않았다면 페이지의 Video.js 플레이어를 반환합니다. |
| `createPlayerAdapter` | — | `adapter \| null` | Video.js / HTML5 비디오 위의 통합 API: `currentTime`, `paused`, `pause`, `play`, `playbackRate(s)`, `muted`, `on`, `isFullscreen`, `requestFullscreen`, `exitFullscreen`. |
| `waitForPlayerAdapter` | `timeoutMs = 20000` | `Promise<adapter>` | 플레이어가 생길 때까지 100 ms마다 확인하며, 시간 초과 시 거부합니다. |
| `clampSegment` | `time: number, bounds: object` | `number` | 시간 값을 클립 경계 안으로 제한합니다. |
| `segmentProgress` | `time: number, bounds: object` | `number (0–1)` | 클립 내부의 상대 위치. |
| `installCustomControls` | `player, bounds, refreshDisplay: {current: Function}` | `void` | 비디오 아래에 탐색 막대, 시간 표시, 단축키 안내를 추가합니다. |
| `pauseLayoutMutations` | `run: Function` | `void` | 레이아웃 옵저버가 중지된 동안 콜백을 실행합니다(피드백 루프 방지). |
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | 포커스가 입력란, 텍스트 영역, 선택 상자, 버튼, 링크 또는 편집 가능한 요소에 있으면 참. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | 속도 옵션의 라벨. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | 속도 선택기용 `<option>` 목록(0.5–4×). |
| `readStoredShiftSpeed` | — | `number` | 저장된 Shift 속도(기본값 2×). |
| `readStoredVerdictRandomizer` | — | `boolean` | 저장된 판정 무작위화 상태(기본값 꺼짐). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | 재생 속도 처리, 구간 제한/일시정지, 탐색/프레임 이동/음소거/전체 화면 도우미, 전역 키보드 단축키(`1`–`5`, 방향키, `,` `.`, Space, `M`, `F`, Shift)를 연결합니다. 내부 클로저: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, 그리기 루프 도우미. |

## 판정 프리셋

| 함수 | 매개변수 | 반환값 | 역할 |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | 선택이 없는 모든 판정 그룹에서 “skip”을 선택합니다. |
| `getSelectedVerdictState` | — | `object` | `aimassist`, `wallhack`, `autobhop`, `bot`의 현재 값(`positive` / `negative` / `skip` / `null`). |
| `detectActivePreset` | — | `string \| null` | 현재 선택과 일치하는 프리셋 이름. |
| `syncPresetButtons` | — | `string \| null` | 프리셋 버튼의 `aria-pressed`와 확장 프리셋 배지를 갱신합니다. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | 프리셋의 라디오 입력을 클릭합니다. 무작위화가 켜져 있으면 순서를 섞고 클릭 사이에 200–600 ms 대기합니다. 실행 중에는 프리셋 버튼을 비활성화합니다. |
| `normalizeVerdictLabels` | `root = document` | `void` | 판정 라벨에서 강조 마크업을 제거합니다. |
| `applyVerdictSectionTitles` | `root = document` | `void` | 각 판정 그룹 위에 현지화된 제목을 추가합니다. |

## 토스트, 푸터, 제출 로딩

| 함수 | 매개변수 | 반환값 | 역할 |
|---|---|---|---|
| `hideSiteFooter` | — | `void` | 사이트 푸터를 숨깁니다. |
| `showToast` | `message: string, type = "info", duration = 1800` | `void` | 차단하지 않는 ARIA-live 토스트를 표시합니다. |
| `markSubmitPending` | — | `void` | 제출 시각과 현재 클립 id를 `sessionStorage`에 저장합니다. |
| `isSubmitPending` | — | `boolean` | 제출이 다음 클립을 기다리는 중인지 여부. |
| `clearSubmitPending` | — | `void` | 제출 대기 표시를 지웁니다. |
| `showSubmitLoadingOverlay` | `message = tr("nextClip")` | `void` | 전체 페이지 로딩 오버레이를 표시합니다. |
| `hideSubmitLoadingOverlay` | — | `void` | 오버레이를 숨기고 대기 상태를 지웁니다. |
| `bootSubmitLoadingIfPending` | — | `void` | 제출이 대기 중이면 페이지 로드 시 오버레이를 다시 표시합니다. |
| `isReviewPageReady` | `prevVod: string, startedAt: number` | `boolean` | 다음 클립의 UI와 미디어가 준비되면 참. |
| `finishSubmitLoadingWhenReady` | — | `Promise<void>` | 다음 클립을 최대 30 s 기다린 뒤 오버레이를 숨깁니다(시간 초과 시 오류 토스트). |

## 로컬 기록 저장소

| 함수 | 매개변수 | 반환값 | 역할 |
|---|---|---|---|
| `extractVodId` | — | `string` | 비디오 URL에서 클립/게임 id를 도출합니다. |
| `getGameKey` | — | `string` | 게임의 기록 키(`game::<id>`). |
| `getClipKey` | `bounds: object` | `string` | 한 구간의 기록 키(`<id>:<start>:<end>`). |
| `normalizeHistoryEntry` | `entry: any` | `{ts, summary, segment} \| null` | 기록 항목 하나를 검증하고 정리합니다. |
| `readHistoryEntries` | `store: object, key: string` | `Array` | 한 키의 정규화된 항목. |
| `getGameHistoryEntries` | `store: object` | `Array` | 현재 게임의 항목(레거시 키 지원). |
| `getClipHistoryEntries` | `store: object, bounds: object` | `Array` | 현재 구간의 항목. |
| `formatClipId` | `vodId: string` | `string` | 클립 id를 해시하여 만든 짧은 숫자 표시 id(`#0000000`). |
| `formatRelativeTime` | `timestamp: number` | `string` | 현지화된 상대 시간(`Intl.RelativeTimeFormat`). |
| `readClipHistoryStore` | — | `object` | `localStorage`에서 기록 객체를 불러옵니다(오류 시 `{}`). |
| `pruneHistoryStore` | `store: object` | `void` | 키별 한도와 전체 한도를 적용합니다(가장 오래된 키부터 제거). |
| `writeClipHistoryStore` | `store: object` | `boolean` | 정리한 뒤 저장합니다. 할당량/저장소 오류 시 `false`. |
| `summarizeCurrentVerdict` | — | `string` | 현재 선택의 프리셋 이름 또는 `mixed`. |
| `formatSummaryLabel` | `summary: string` | `string` | 기록 요약의 현지화된 라벨. |
| `formatClockTime` | `seconds: number` | `string` | `m:ss`(또는 `x.xs`) 시계 형식. |
| `formatHumanSegment` | `bounds: object` | `string` | 읽기 쉬운 구간 범위. |
| `formatGameLabel` | — | `string` | 현재 게임의 현지화된 라벨. |
| `historyEntryKey` | `entry: object` | `string` | 중복 제거에 쓰이는 식별 문자열. |
| `formatPriorStat` | `count: number, label: string` | `string` | 기록 패널의 “라벨: N” 줄. |
| `buildHistoryListItems` | `clipEntries: Array, gameEntries: Array, currentSegment: string` | `Array` | 클립/게임 항목을 표시용 항목으로 병합합니다. |
| `renderHistoryItem` | `item: object` | `string (HTML)` | 기록 행 하나의 마크업. |
| `escapeHtml` | `value: any` | `string` | `& < > " '`를 이스케이프합니다. |
| `buildClipHistoryPanel` | `bounds, gameEntries, clipEntries` | `string (HTML)` | 검토 규칙 버튼을 포함한 기록 패널의 마크업. |
| `ensureClipHistoryPanel` | — | `void` | 패널 컨테이너가 없으면 만듭니다. |
| `ensureReviewRulesDialog` | — | `void` | 검토 규칙 대화상자를 만들고 열기/닫기 버튼을 연결합니다. |
| `installLocalHistoryButton` | `panel: HTMLElement` | `void` | “로컬 기록” 버튼을 연결합니다(목록으로 스크롤하거나 비어 있으면 토스트 표시). |
| `positionClipHistoryPanel` | — | `void` | 패널이 `.verdicts-container` 안에서 항상 첫 번째에 오도록 유지합니다. |
| `renderClipHistory` | `bounds: object \| null` | `void` | 현재 클립에 맞게 기록 패널을 다시 렌더링합니다. |
| `appendReviewHistory` | `bounds: object \| null` | `void` | 현재 판정 요약을 게임 및 클립 기록에 추가합니다. |

## 제출 흐름

| 함수 | 매개변수 | 반환값 | 역할 |
|---|---|---|---|
| `isLabelingMode` | — | `boolean` | 네 개의 판정 그룹이 표시되는 페이지에서 참. |
| `getProceedButton` | — | `HTMLButtonElement \| null` | 보이고 활성화되어 있으면 기본 제출 버튼. |
| `recordProceedHistoryIfLabeling` | — | `void` | 제출당 한 번만 기록을 남깁니다(재진입 방지). |
| `resetProceedArmed` | — | `void` | 2단계 제출의 준비 상태를 해제합니다. |
| `refreshProceedButtonLabel` | — | `void` | 버튼 라벨/`Enter` 힌트와 준비 상태 스타일을 갱신합니다. |
| `verdictLabelForField` | `field: string, selected: string` | `string \| null` | 선택을 `guilty_*` / `innocent_*` / `skip_*`로 매핑합니다. |
| `prepareVerdictFormForSubmit` | — | `boolean` | 숨겨진 `verdict_labels[]` 입력을 만듭니다. 선택되지 않은 그룹이 있으면 오류 토스트를 표시하고 `false`를 반환합니다. |
| `isSafeSubmitTarget` | `form: HTMLFormElement` | `boolean` | 동일 출처의 HTTPS 폼 액션만 허용합니다. |
| `restoreSubmitUi` | — | `void` | 제출 실패 후 버튼을 복원합니다. |
| `submitVerdictForm` | `{ recordHistory = false }` | `boolean` | 안전성 검사를 실행하고 오버레이를 표시한 뒤 폼을 제출합니다. |
| `submitVerdictsDirect` | — | `boolean` | 라벨을 준비하고 제출합니다. |
| `invokeProceedAction` | — | `boolean` | Enter/클릭 핸들러: 첫 번째 누름은 준비, 두 번째 누름은 제출. |
| `installProceedShortcut` | — | `void` | `Enter`/`NumpadEnter`용 캡처 단계 리스너. |
| `hookProceedButton` | — | `void` | 기본 제출 버튼의 클릭 동작을 대체합니다. |
| `installVerdictChangeReset` | — | `void` | 판정이 바뀌면 제출 준비를 해제하고 프리셋을 다시 동기화합니다. |
| `scheduleProceedFooterFix` | — | `void` | `fixProceedFooter`를 디바운스(`requestAnimationFrame`)하여 호출합니다. |
| `scheduleVerdictLabelsFix` | — | `void` | 디바운스된 라벨/제목/기본값 재정규화. |

## 레이아웃 및 부트스트랩

| 함수 | 매개변수 | 반환값 | 역할 |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Shift 속도 선택 막대를 만듭니다. |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | 프리셋 버튼 하나의 마크업. |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | 확장 프리셋 그룹의 마크업. |
| `buildEnhancementBar` | — | `HTMLElement` | 빠른 판정 막대를 만듭니다: 프리셋, 무작위화 토글, 확장 서랍. |
| `positionShiftSpeedBar` | — | `void` | 속도 막대가 판정 목록 앞에 오도록 유지합니다. |
| `positionEnhancementBar` | — | `void` | 프리셋 막대가 제출 버튼 앞에 오도록 유지합니다. |
| `fixProceedFooter` | — | `void` | 푸터, 막대, 제출 버튼을 재배치합니다. |
| `enhanceLayout` | — | `void` | 모든 레이아웃 변경을 적용하고 설정 UI를 설치합니다. |
| `watchProceedFooter` | — | `void` | `.verdicts-container`를 관찰하고 푸터 보정을 예약합니다. |
| `watchVerdictLabels` | — | `void` | 판정 라벨을 관찰하고 재정규화를 예약합니다. |
| `init` | — | `Promise<void>` | 진입점: 계정 이름 컨트롤 → 초대 페이지 또는 검토 페이지 → 레이아웃, 옵저버, 단축키, 플레이어 개선. |

### 위에 나열되지 않은 항목

* **`blockSegmentLoopGuard`** (IIFE, 로드 시 실행): 페이지의 `setInterval`을 감싸 사이트 고유의 100 ms 구간 반복 타이머를 빈 함수로 대체합니다. 구간은 DemoScope 자체 컨트롤이 처리합니다.
* **상수 및 테이블:** `SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC` (`PRESETS`: 정의 21개).
