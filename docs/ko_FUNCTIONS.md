<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/docs/en_FUNCTIONS.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/docs/bg_FUNCTIONS.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/docs/hu_FUNCTIONS.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/docs/vi_FUNCTIONS.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/docs/el_FUNCTIONS.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/docs/da_FUNCTIONS.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/docs/id_FUNCTIONS.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/docs/es-ES_FUNCTIONS.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/docs/es-419_FUNCTIONS.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/docs/it_FUNCTIONS.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/docs/zh-TW_FUNCTIONS.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/docs/zh-CN_FUNCTIONS.md) · **한국어** · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/docs/de_FUNCTIONS.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/docs/nl_FUNCTIONS.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/docs/no_FUNCTIONS.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/docs/pl_FUNCTIONS.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/docs/pt-PT_FUNCTIONS.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/docs/pt-BR_FUNCTIONS.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/docs/ro_FUNCTIONS.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/docs/ru_FUNCTIONS.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/docs/th_FUNCTIONS.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/docs/tr_FUNCTIONS.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/docs/uk_FUNCTIONS.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/docs/fi_FUNCTIONS.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/docs/fr_FUNCTIONS.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/docs/cs_FUNCTIONS.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/docs/sv_FUNCTIONS.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/docs/ja_FUNCTIONS.md)

</div>

# DemoScope — 함수 레퍼런스

`DemoScope.user.js` v1.4.0의 최상위 함수 143개 전체에 대한 레퍼런스입니다(이름, 매개변수, 반환값, 역할). [README](../README.md)로 돌아가기.

표기: `—`는 매개변수가 없음을, `void`는 부수 효과를 위해 호출되는 함수임을 뜻합니다.

## 사용자 동작 개요

| 항목 | 설명 |
|---|---|
| 지원 페이지 | VACNet 환영 페이지(`/vacnet`), 검토 페이지(`/vacnet/clips`), 초대 페이지(`/vacnet/createinvite`), 검토 경로의 클립 없음 상태를 개선하며 다른 페이지는 변경하지 않습니다. |
| 작업 유형 | VACNet 검토 양식을 감지합니다. **클래식 양식**(aim assist, wallhack, auto-bhop, bot)에는 프리셋과 확장 조합을 추가합니다. **단일 질문 작업**은 `1`–`3` 키의 세 판정과 남은 클립 시간을 표시하는 잠금 표시가 있는 간결한 레이아웃을 사용하며 빠른 판정/조합은 표시하지 않습니다. |
| 언어 | Steam의 29개 언어를 지원합니다. 저장된 수동 선택을 우선하고, 없으면 Steam `?l=` 매개변수, 이어서 브라우저/페이지 언어를 사용합니다. DemoScope 언어 선택은 해당 `?l=`도 VACNet에 전달합니다. 자동 모드는 Steam 언어 매개변수를 브라우저와 동기화합니다. |
| 환영 및 초대 페이지 | 두 페이지의 모양을 바꾸고 공용 언어 선택기와 계정 이름 숨김 버튼을 추가합니다. 대화형 요소에 포커스가 없으면 환영 페이지에서 Enter/Space로 진행합니다. 초대 링크를 숨기거나 표시하고 복사할 수 있으며 초대 조건을 안내합니다. ×로 닫고 Enter는 “Done”, Esc는 ×처럼 동작합니다. |
| 클립 검토 | 판정 프리셋/확장 조합, 기본 꺼짐인 무작위 선택기, Shift 누름 중 조정 가능한 속도, 세그먼트 내 탐색, 프레임 이동 및 재생 단축키를 추가합니다. 판정 범주의 “?”는 현지화된 설명을 보여주고 핵심 문구는 DemoScope 색상으로 강조합니다. |
| 단축키 | 모든 단축키는 공용 레지스트리의 작업이며 **설정 → 단축키**에서 바꿀 수 있습니다. 페이지별 충돌을 감지해 이미 키를 쓰는 작업/그룹/설명을 표시합니다. 교체, 교환, 취소가 가능하고 각 작업에 초기화가 있습니다. 페이지 안내도 키 지정에 맞춰집니다. |
| 제출 동작 | `Enter` 또는 `Numpad Enter`가 “Continue”를 실행합니다. 클래식 양식에서는 첫 입력이 준비, 다음 입력이 제출입니다. 단일 질문 작업은 판정 선택 후 VACNet 확인을 표시하고 Enter로 확정합니다. `Esc`는 확인 대기 중 “Cancel”을 누르거나 첫 입력을 취소합니다. Space는 제출 키가 아닙니다. |
| 설정 | 기본적으로 `F2`로 열며 단축키 창에서 바꿀 수 있습니다. 단축키, 애니메이션, 사운드/음량, 로컬 기록(활성화/한도/12·24시간/백업), 바닥글 표시, 진단 및 사운드·단축키·애니메이션 통합 초기화를 제공합니다. |
| 애니메이션 | DemoScope 옆 점은 여섯 스타일(pulse, breathe, ripple, heartbeat, orbit, blink), 실시간 미리보기, 세 속도, 켜기/끄기로 설정합니다. OS에서 동작 줄이기를 요청하면 기본적으로 꺼집니다. |
| 로컬 기록 | 판정 요약을 브라우저 `localStorage`에 저장하며 업로드하지 않습니다. 끄기, 가져오기, JSON/HTML 내보내기, JSON 백업을 HTML 보고서 하나로 합치기, 삭제가 가능합니다. 키당 10/20/30/50개, 전체 100/200/300/500개 제한입니다. 끄면 새 기록만 중단되고 기존 자료는 남습니다. 클래식 양식만 기록합니다. |
| 대기열 비어 있음 | VACNet의 빈 대기열 안내를 번역된 설명, 브라우저에 저장된 최초 표시 시간, 언어 선택기로 바꿉니다. 하루 250개 데모는 관찰 정보이며 DemoScope는 한도를 적용하거나 우회하지 않습니다. |
| 바닥글 | 현지화된 DemoScope 바닥글을 사용합니다. 클립 페이지에서 피드백/신고 링크를 보여줄 수 있고 링크별, 저작권 줄, 전체 바닥글을 숨길 수 있습니다. |
| 복원력 | 초기화 단계는 서로 독립적으로 실행되고 주요 요소는 대체 방식으로도 찾습니다. 페이지를 식별할 수 없으면 그 페이지에서 DemoScope를 끄고 VACNet 레이아웃을 복구한 뒤 알립니다. **설정 → 진단**은 버전, 발견된 요소, 실패 단계, 페이지 구조가 포함된 텍스트 보고서를 복사합니다. |

## 현지화

| 함수 | 매개변수 | 반환값 | 기능 |
|---|---|---|---|
| `getFlagSvg` | `locale: string` | `string` | 언어의 국기를 나타내는 인라인 SVG 마크업. 없으면 지구본 아이콘으로 대체합니다. |
| `getSavedLocale` | — | `string \| null` | `localStorage`에서 사용자가 저장한 언어(`demoscopeLanguage`)를 읽습니다. |
| `getActiveLocale` | — | `string` | 활성 언어를 결정합니다: 저장된 선택 → Steam `?l=` → 브라우저/페이지 언어 → `en`. |
| `getLanguageBadge` | — | `string` | 언어 선택기 배지에 쓰이는 해당 언어 고유의 표시 이름(예: “English version”). |
| `getBrowserLocale` | — | `string \| null` | 지역별 변형을 포함해 지원되는 첫 번째 브라우저 언어를 찾습니다. |
| `syncAutomaticLanguage` | — | `boolean` | 자동 모드에서 ?l=을 브라우저 언어와 동기화하고 다르면 페이지를 이동합니다. |
| `getRenderedSteamLanguage` | — | `string \| null` | 페이지 자체의 스타일시트 및 스크립트 URL에 있는 l= 매개변수에서 VACNet이 실제로 페이지를 표시한 언어를 읽습니다. |
| `syncSelectedLanguage` | — | `boolean` | DemoScope에서 언어를 직접 선택하면 일치하는 ?l=로 페이지를 한 번 다시 요청해 VACNet 텍스트도 해당 언어로 표시합니다. 언어가 이미 일치하면 건너뛰며 리디렉션 반복을 방지합니다. 페이지 이동이 발생하면 true를 반환합니다. |
| `tr` | `key: string` | `string` | 활성 언어의 UI 문자열을 조회합니다(대체 순서: 영어, 그다음 키 자체). |
| `inviteText` | `key: string` | `string` | 초대 페이지 문자열 테이블에 대한 동일한 조회. |
| `settingText` | `key: string` | `string` | 설정 대화상자 문자열 테이블에 대한 동일한 조회. |
| `getPresetLabel` | `name: string` | `string` | 프리셋의 현지화된 라벨. “Bot + Aim” 같은 조합을 구성합니다. |
| `buildLanguageOptions` | `{ activeLocale = getActiveLocale(), selectedLocale = null } = {}` | `string (HTML)` | “auto” 항목을 포함한 언어 선택 버튼의 마크업. |
| `installLanguageSelector` | `root: HTMLElement, onLocaleSelect: Function \| null = null` | `void` | 언어 선택기를 연결하고 배치한 뒤 선택을 저장하고 페이지를 새로고침합니다. 선택 처리를 대신할 선택적 콜백을 지정할 수 있습니다. |
| `queueNoticeText` | `key: string, locale = getQueueNoticeLocale()` | `string` | 빈 대기열 또는 바닥글의 현지화 문자열을 찾습니다. |

## 사운드 효과 및 설정 대화상자

| 함수 | 매개변수 | 반환값 | 기능 |
|---|---|---|---|
| `getSettingsHistorySummary` | — | `string` | 설정 대화상자에 표시되는 “N개 항목 · 마지막 항목: …” 줄. |
| `soundsEnabled` | — | `boolean` | UI 사운드가 켜져 있는지 여부(`demoscopeSoundEffectsEnabled`, 기본값 켜짐). |
| `getSoundVolume` | — | `number (0–1)` | 저장된 사운드 볼륨(`demoscopeSoundEffectsVolume`, 기본값 0.4). |
| `playUiSound` | `kind = "click"` | `void` | Web Audio로 짧은 음 시퀀스를 합성합니다(`click`, `select`, `toggle`, `copy`, `confirm`, `preview`, `tick`, `open`, `close`, `error`). 예외를 던지지 않습니다. |
| `readSettingsHotkey` | — | `string` | 설정 대화상자를 여는, 저장된 `KeyboardEvent.code`(기본값 `F2`). |
| `formatHotkey` | `code: string` | `string` | 사람이 읽을 수 있는 키 이름(`KeyQ` → `Q`, `Numpad1` → `Num 1`). |
| `getSettingsHotkeyCode` | `event: KeyboardEvent` | `string` | 물리 키 코드를 추출하며, 비라틴 자판 배열은 `KeyX`로 되돌려 매핑합니다. 사용할 수 없으면 `""`. |
| `isReservedSettingsHotkey` | `code: string` | `boolean` | DemoScope나 플레이어가 이미 사용하는 키이면 참(Enter, Space, 방향키, `M`, `F`, `1`–`5`, …). |
| `ensureSettingsDialog` | — | `HTMLDialogElement` | 설정 대화상자를 만들고 연결합니다. 사운드/볼륨, 미리 듣기, 단축키, 로컬 기록과 한도, 시간 형식, JSON 가져오기/내보내기, HTML 내보내기/병합, 기록 삭제, 바닥글 표시, 초기화를 다룹니다. |
| `openSettingsDialog` | `opener = null` | `void` | 현재 값으로 대화상자를 열고, 포커스를 되돌릴 요소를 기억합니다. |
| `installSettingsUi` | — | `void` | 전역 캡처 단계 키 리스너(대화상자 열기/닫기, 키 재지정)와 사운드 이벤트를 설치합니다. |
| `installUiSoundEvents` | — | `void` | DemoScope 컨트롤에 대한 피드백 사운드를 재생하는 위임 클릭 리스너. |
| `ensureSettingsLayoutStyles` | — | `void` | 설정 창 스타일을 주입합니다. 섹션을 왼쪽 정렬하고 요약 배지가 있는 항목 행을 만듭니다. |
| `refreshSettingsSummaries` | — | `void` | 단축키 및 애니메이션 항목의 요약 배지를 갱신합니다. |
| `installExtraSettingsSections` | `settingsDialog: HTMLDialogElement` | `void` | 단축키, 애니메이션, 진단, 초기화 섹션을 추가하고 기존 설정 키 블록은 숨깁니다. |

## 백업, 보고서, 기록 한도

| 함수 | 매개변수 | 반환값 | 기능 |
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

## 계정 이름 및 초대 페이지

| 함수 | 매개변수 | 반환값 | 기능 |
|---|---|---|---|
| `accountNameIsHidden` | — | `boolean` | Steam 계정 이름이 현재 숨겨져 있는지 여부. |
| `installAccountNameControl` | — | `void` | 로그아웃 링크 옆에 눈 모양 토글을 추가하고 `MutationObserver`로 동기화 상태를 유지합니다. |
| `installInvitePage` | — | `boolean` | `/vacnet/createinvite`를 새로 꾸밉니다: 카드 레이아웃, 링크 표시/숨김 및 복사(Clipboard API, `execCommand` 대체), 요구 사항 목록, 언어 선택기. 필요한 요소가 없으면 `false`를 반환합니다. |
| `installInviteExtras` | `card: HTMLElement, doneLink: HTMLElement \| null` | `void` | 닫기(×) 버튼과 inviteDone 및 inviteClose 작업을 위한 캡처 단계 리스너를 추가합니다. 버튼, 링크, 입력란, 모달 또는 언어 목록에 포커스가 있으면 키를 무시합니다. |
| `refreshInviteKeyLabels` | — | `void` | 현재 키 지정에 맞춰 “Done” 레이블과 × 툴팁을 다시 표시합니다. |
| `installWelcomePage` | — | `boolean` | 환영 페이지를 꾸미고 브랜드와 언어 선택기를 추가합니다. Enter/Space로 계속하며 필수 요소가 없으면 false를 반환합니다. |

## 클립 구간 및 플레이어 어댑터

| 함수 | 매개변수 | 반환값 | 기능 |
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
| `isShortcutBlocked` | `target: EventTarget` | `boolean` | 입력란, textarea, select 또는 편집 가능한 텍스트에 포커스가 있으면 true를 반환합니다. |
| `isPlayerShortcutBlocked` | `target: EventTarget` | `boolean` | isShortcutBlocked와 같지만 판정 라디오 버튼은 통과시킵니다. 클릭 후에도 포커스가 라디오 버튼에 남기 때문입니다. |
| `formatShiftSpeedLabel` | `rate: number` | `string` | 속도 옵션의 라벨. |
| `buildShiftSpeedSelectOptions` | `selectedRate: number` | `string (HTML)` | 속도 선택기용 `<option>` 목록(0.5–4×). |
| `readStoredShiftSpeed` | — | `number` | 저장된 Shift 속도(기본값 2×). |
| `readStoredVerdictRandomizer` | — | `boolean` | 저장된 판정 무작위화 상태(기본값 꺼짐). |
| `installPlayerEnhancements` | `player: adapter, bounds: object` | `void` | 재생 속도 처리, 구간 제한/일시정지, 탐색/프레임 이동/음소거/전체 화면 도우미, 전역 키보드 단축키(`1`–`5`, 방향키, `,` `.`, Space, `M`, `F`, Shift)를 연결합니다. 내부 클로저: `applyPlayerRate`, `setShiftSpeed`, `setShiftSpeedActive`, `seekBy`, `stepFrame`, `togglePlay`, `toggleMute`, `toggleFullscreen`, 그리기 루프 도우미. |

## 판정 프리셋

| 함수 | 매개변수 | 반환값 | 기능 |
|---|---|---|---|
| `applyDefaultVerdicts` | `root = document` | `void` | 선택이 없는 모든 판정 그룹에서 “skip”을 선택합니다. |
| `getSelectedVerdictState` | — | `object` | `aimassist`, `wallhack`, `autobhop`, `bot`의 현재 값(`positive` / `negative` / `skip` / `null`). |
| `detectActivePreset` | — | `string \| null` | 현재 선택과 일치하는 프리셋 이름. |
| `syncPresetButtons` | — | `string \| null` | 프리셋 버튼의 `aria-pressed`와 확장 프리셋 배지를 갱신합니다. |
| `applyPreset` | `name: string, { announce = false }` | `Promise<boolean>` | 프리셋의 라디오 입력을 클릭합니다. 무작위화가 켜져 있으면 순서를 섞고 클릭 사이에 200–600 ms 대기합니다. 실행 중에는 프리셋 버튼을 비활성화합니다. |
| `readAdvancedPresetsOpen` | — | `boolean` | 확장 프리셋 서랍이 열린 채로 남아 있었는지 여부. |
| `normalizeVerdictLabels` | `root = document` | `void` | 판정 라벨에서 강조 마크업을 제거합니다. |
| `applyVerdictSectionTitles` | `root = document` | `void` | 각 판정 그룹 위에 현지화된 제목을 추가합니다. |
| `ensureVerdictHelp` | `block: HTMLElement, titleEl: HTMLElement, title: string, field: string` | `void` | 판정 그룹 하나에 “?” 버튼과 설명 팝오버를 만들고 DemoScope의 현지화 문구를 사용합니다. |
| `closeVerdictHelp` | `except = null` | `void` | 지정한 항목을 제외하고 열려 있는 모든 설명 팝오버를 닫습니다. |
| `installVerdictHelpHandlers` | — | `void` | 팝오버의 위임 클릭, 바깥쪽 클릭, Esc 처리를 한 번 설치합니다. |

## 토스트, 푸터, 제출 로딩

| 함수 | 매개변수 | 반환값 | 기능 |
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

| 함수 | 매개변수 | 반환값 | 기능 |
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
| `isLocalHistoryEnabled` | — | `boolean` | 로컬 기록 활성화 여부를 읽습니다(기본값: 활성화). |
| `readTimeFormat` | — | `string` | 시간 형식(자동, 12시간, 24시간)을 읽습니다. |
| `formatQueueFirstSeen` | `timestamp: number, locale = getActiveLocale()` | `string` | 언어와 시간 형식에 맞춰 최초 감지 시각을 표시 형식으로 바꿉니다. |
| `getQueueNoticeLocale` | — | `string` | 빈 대기열 알림에 사용할 활성 언어를 반환합니다. |
| `migrateEmptyQueueLanguage` | — | `boolean` | 이전 언어 선택을 공통 설정으로 이전하고 URL을 동기화합니다. |
| `updateEmptyQueueTimestamp` | — | `void` | 최초 감지 시각 표시를 갱신합니다. |

## 제출 흐름

| 함수 | 매개변수 | 반환값 | 기능 |
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
| `submitVerdictForm` | `{ recordHistory = false } = {}` | `boolean` | 안전성 검사를 실행하고 오버레이를 표시한 뒤 폼을 제출합니다. |
| `submitVerdictsDirect` | — | `boolean` | 라벨을 준비하고 제출합니다. |
| `invokeProceedAction` | — | `boolean` | Enter/클릭 핸들러: 첫 번째 누름은 준비, 두 번째 누름은 제출. |
| `installProceedShortcut` | — | `void` | `Enter`/`NumpadEnter`용 캡처 단계 리스너. |
| `invokeCancelAction` | — | `boolean` | 2단계 제출의 첫 입력 준비를 취소하거나 표시된 “Cancel” 버튼을 누릅니다. 취소할 것이 없으면 false를 반환합니다. |
| `refreshCancelButtonLabel` | — | `void` | “Cancel” 버튼의 키 배지를 추가하거나 갱신합니다. |
| `hookProceedButton` | — | `void` | 기본 제출 버튼의 클릭 동작을 대체합니다. |
| `installVerdictChangeReset` | — | `void` | 판정이 바뀌면 제출 준비를 해제하고 프리셋을 다시 동기화합니다. |
| `scheduleProceedFooterFix` | — | `void` | `fixProceedFooter`를 디바운스(`requestAnimationFrame`)하여 호출합니다. |
| `scheduleVerdictLabelsFix` | — | `void` | 디바운스된 라벨/제목/기본값 재정규화. |

## 단축키 레지스트리 및 재할당

| Action | Default | Group | 설명 |
|---|---|---|---|
| `playPause` | `Space` | Playback | 클립을 일시 정지하거나 다시 재생합니다. |
| `mute` | `M` | Playback | 음소거하거나 해제합니다. |
| `fullscreen` | `F` | Playback | 전체 화면을 시작하거나 종료합니다. |
| `seekBack` / `seekForward` | `←` / `→` | 탐색 | 5초 뒤로/앞으로 이동합니다. |
| `frameBack` / `frameForward` | `,` / `.` | 탐색 | 한 프레임 뒤로/앞으로 이동합니다. |
| `speedBoost` | `Shift` | Navigation | 키를 누르고 있는 동안 재생 속도를 높입니다. Shift를 사용할 수 있는 유일한 작업입니다. |
| `quick1` … `quick5` | `1` … `5` | 판정 | 클래식 양식: 프리셋 1–5. 단일 질문 작업: Cheating / Not sure / No cheats seen (`1`–`3`). |
| `proceed` | `Enter` | Submission | 판정을 확인하거나 클래식 양식을 준비하고 제출합니다. |
| `cancel` | `Esc` | Submission | “Cancel”을 누르거나 첫 번째 Enter 입력을 취소합니다. |
| `inviteDone` | `Enter` | Invite page | “Done” 버튼과 동일하게 초대 페이지를 나갑니다. |
| `inviteClose` | `Esc` | Invite page | × 버튼과 동일한 작업을 수행합니다. |
| `settings` | `F2` | Interface | 설정 대화상자를 열거나 닫습니다. |

키 지정은 `demoscopeKeybindings`에 `KeyboardEvent.code` 값으로 저장됩니다(기본값에서 변경된 것만 저장하며 설정 키는 별도 항목을 사용). 좌우 보조 키는 같은 키로 계산하고 숫자 키패드는 기본 키 행에 대응합니다. 지정할 수 없는 키: `Tab`, `Ctrl`, `Alt`, `Meta`, `Caps Lock`, `ContextMenu`, `F5`, `F11`, `F12`. 범위는 `review`, `invite`, 모든 작업과 충돌하는 설정용 `global`로 나뉩니다.

| 함수 | 매개변수 | 반환값 | 기능 |
|---|---|---|---|
| `fmt` | `template: string, vars = {}` | `string` | 현지화 템플릿의 {name} 자리표시자를 바꿉니다. |
| `isModalOpen` | — | `boolean` | 열린 <dialog>가 있으면 true를 반환합니다. 이때 페이지 단축키는 동작하지 않습니다. |
| `normalizeKeyCode` | `code: string` | `string` | 좌우 보조 키를 하나로 취급하고 숫자 키패드 숫자 및 NumpadEnter를 기본 키 영역의 대응 키로 변환합니다. |
| `formatKeyLabel` | `code: string` | `string` | 키의 표시 이름을 반환합니다 (ArrowLeft → ←, KeyM → M, Escape → Esc). |
| `loadKeyOverrides` | — | `object` | 저장된 키 지정을 읽고 검증합니다 (캐시 사용, 오류 시 {}). |
| `saveKeyOverrides` | `overrides: object` | `void` | 키 지정을 저장하거나 모두 기본값이면 항목을 제거합니다. |
| `getBinding` | `id: string` | `string` | 작업의 현재 키를 반환합니다. 지정되지 않았으면 빈 문자열을 반환합니다. |
| `setBinding` | `id: string, code: string` | `void` | 작업에 키를 저장합니다. 빈 코드는 지정을 해제하며 기본값은 저장하지 않습니다. |
| `resetAllBindings` | — | `void` | 설정 키를 포함한 모든 키 지정을 기본값으로 되돌립니다. |
| `findKeyConflict` | `id: string, code: string` | `object \| null` | 범위가 겹치는 다른 작업 중 같은 키를 사용하는 항목을 찾습니다. |
| `getActionForEvent` | `event: KeyboardEvent, scope = currentKeyScope()` | `string \| null` | 현재 페이지 범위에서 키보드 이벤트를 작업 ID로 판별합니다. |
| `keyScopeOf` | `id: string` | `string` | 작업 범위를 반환합니다: review, invite 또는 global. |
| `keyScopesOverlap` | `a: string, b: string` | `boolean` | 두 범위가 같거나 하나가 global이면 true를 반환합니다. |
| `currentKeyScope` | — | `string` | 초대 페이지에서는 invite, 그 외에는 review를 반환합니다. |
| `validateKeyForAction` | `id: string, code: string` | `string` | 키를 지정할 수 있으면 빈 문자열, 브라우저/탐색 키이면 reserved, 누르고 있지 않는 작업에 Shift를 지정하면 shift를 반환합니다. |
| `quickRangeLabel` | `count: number` | `string` | 빠른 판정 키 레이블을 반환합니다. 변경 전에는 1–5, 이후에는 지정된 키를 표시합니다. |
| `buildHintsInnerMarkup` | — | `string (HTML)` | 현재 키 지정에 따른 영상 아래 키 힌트를 만듭니다. |
| `refreshKeyLabels` | — | `void` | 페이지의 모든 키 레이블을 갱신합니다. 힌트, 배지, 계속/취소/초대, 설정 요약이 포함됩니다. |
| `ensureDemoscopeDialogStyles` | — | `void` | 단축키 및 애니메이션 창의 공통 스타일을 주입합니다. |
| `hkActionName` | `id: string` | `string` | 현지화된 작업 이름을 반환합니다. |
| `hkGroupName` | `group: string` | `string` | 현지화된 그룹 이름을 반환합니다. |
| `hkActionDescription` | `id: string` | `string` | 작업 기능을 현지화된 문구로 설명합니다. 빠른 판정은 두 작업 형식 모두에 대해 설명합니다. |
| `hkSetMessage` | `text: string, warn = false` | `void` | 단축키 창의 상태 표시줄 문구를 설정합니다. |
| `hkCancelCapture` | — | `void` | 키 입력 캡처 모드를 종료합니다. |
| `hkRowMarkup` | `action: object` | `string (HTML)` | 충돌 패널이 대기 중이면 이를 포함해 작업 한 줄의 HTML 마크업을 만듭니다. |
| `renderHotkeys` | — | `void` | 스크롤 위치를 유지하면서 창 전체를 다시 그립니다. |
| `hkCommit` | `actionId: string, code: string, mode = "replace"` | `void` | 키를 지정합니다. replace는 다른 작업의 지정을 해제하고 swap은 키를 서로 바꿉니다. |
| `hkRequestAssign` | `actionId: string, code: string` | `void` | 키를 바로 지정하거나 이미 사용 중이면 충돌 패널(Replace / Swap / Cancel)을 엽니다. |
| `ensureHotkeysDialog` | — | `HTMLDialogElement` | 단축키 창과 캡처 단계 키 리스너를 만듭니다. 캡처 중에는 Esc도 지정할 수 있으며 창을 닫지 않습니다. |
| `openHotkeysDialog` | — | `void` | 단축키 창을 엽니다. |

## 애니메이션

표시 점은 여섯 가지 스타일(`pulse`, `breathe`, `ripple`, `heartbeat`, `orbit`, `blink), 세 가지 속도(0.6× / 1× / 1.7×), 켜기/끄기 상태를 `demoscopeAnimStyle`, `demoscopeAnimSpeed`, `demoscopeAnimEnabled`에 저장합니다. 활성 스타일은 `<html>`의 `data-ds-anim`으로 지정하며(꺼짐은 `off`), 스타일시트가 실제 점과 미리보기를 모두 제어합니다.

| 함수 | 매개변수 | 반환값 | 기능 |
|---|---|---|---|
| `readStorage` | `key: string` | `string \| null` | localStorage를 안전하게 읽습니다. |
| `writeStorage` | `key: string, value: string \| null` | `void` | localStorage에 안전하게 씁니다. 값이 null이면 키를 제거합니다. |
| `animEnabled` | — | `boolean` | 저장된 애니메이션 켜짐/꺼짐 상태를 반환합니다. 시스템에서 동작 줄이기를 요청하면 기본적으로 꺼집니다. |
| `animStyle` | — | `string` | 저장된 스타일을 반환합니다 (기본값 pulse). |
| `animSpeedKey` | — | `string` | 저장된 속도를 반환합니다 (slow / normal / fast, 기본값 normal). |
| `ensureAnimationStyles` | — | `void` | 표시 점과 미리보기 점이 공유하는 키프레임 및 규칙을 주입합니다. |
| `applyAnimationSettings` | — | `void` | 스타일, 속도, 켜짐/꺼짐을 <html>에 적용하고 설정 요약을 갱신합니다. |
| `ensureAnimationsDialog` | — | `HTMLDialogElement` | 스위치, 속도, 실시간 미리보기 스타일 카드 및 초기화 기능이 있는 애니메이션 창을 만듭니다. |
| `openAnimationsDialog` | — | `void` | 애니메이션 창을 엽니다. |
| `ensureUiPolishStyles` | — | `void` | 창과 판정 목록에 어두운 색상의 가는 스크롤바와 color-scheme: dark를 적용합니다. |

## 단일 질문 작업

| 함수 | 매개변수 | 반환값 | 기능 |
|---|---|---|---|
| `isCheatingMode` | — | `boolean` | 페이지에 단일 질문 양식(#verdictbuttons_cheating)이 있으면 true를 반환합니다. |
| `selectCheatingVerdict` | `kind: string` | `void` | Cheating / Not sure / No cheats seen 라디오 버튼을 클릭합니다. 선택지가 잠겨 있으면 오류음을 재생하고 잠금 카드를 흔듭니다. |
| `localizeCheatingVerdicts` | — | `void` | 세 레이블을 DemoScope 언어로 바꾸고 CSS로 키 배지를 그려 VACNet 확인 문구에 키 숫자가 나타나지 않게 합니다. 잠금 카드도 준비합니다. |
| `updateCheatingLock` | — | `void` | 나머지 두 판정의 잠금 해제까지 남은 시간을 잠금 카드와 진행 막대에 표시합니다. 잠금 해제 또는 판정 선택 후 숨깁니다. |
| `startCheatingLockWatcher` | — | `void` | 250ms마다 updateCheatingLock을 호출하는 타이머를 시작합니다. |

## 복원력 및 진단

| 함수 | 매개변수 | 반환값 | 기능 |
|---|---|---|---|
| `recordFailure` | `step: string, error: any` | `void` | 진단 보고서용 실패 단계를 기록합니다. 기록 수에는 제한이 있습니다. |
| `safeStep` | `step: string, fn: Function, fallback?: any` | `any` | 설정 단계를 실행합니다. 오류가 나면 기록하고 대체값을 반환해 뒤 단계가 계속 실행되게 합니다. |
| `getVideoContainer` | — | `HTMLElement \| null` | 영상 컨테이너를 찾고, 없으면 플레이어나 <video> 요소의 부모를 사용합니다. |
| `getVerdictContainer` | — | `HTMLElement \| null` | 판정 컨테이너를 찾고, 없으면 첫 판정 블록의 부모를 사용합니다. |
| `getSubmitArea` | — | `HTMLElement \| null` | 제출/확인 영역을 찾습니다 (#submitbuttons, .submitbuttons 또는 제출 버튼의 부모). |
| `hasVerdictForm` | — | `boolean` | 판정 라디오 버튼이 하나 이상 있으면 true를 반환합니다. |
| `removeEnhancements` | — | `void` | DemoScope 패널, 클래스, 푸터 변경을 제거하고 VACNet 푸터를 복원합니다. |
| `disableDemoScope` | `reason: string` | `void` | 이 페이지에서 DemoScope를 끄고 변경 사항을 되돌립니다. 설정 창만 남기며 세션 중 원인별 알림은 한 번만 표시합니다. |
| `isOwnNode` | `el: Element` | `boolean` | DemoScope가 만든 요소이면 true를 반환합니다. 구조 보고서에서 제외됩니다. |
| `elementSignature` | `el: Element` | `string` | 구조 보고서용 tag#id.class[…] 서명입니다. 텍스트는 포함하지 않습니다. |
| `skeletonOf` | `root: Element, maxDepth = 7, maxNodes = 170` | `string` | 태그, ID, 클래스의 간결한 들여쓰기 트리를 만듭니다. 같은 형제 요소는 ×N으로 묶습니다. |
| `captureOriginalSkeleton` | — | `void` | DemoScope 변경 전에 페이지 구조를 기록합니다. |
| `buildDiagnosticsReport` | — | `string` | 버전, 페이지, 언어, 브라우저, 작업 형식, 요소 검사 22개, 단계 실패, 변경 전후 구조를 포함한 보고서를 만듭니다. 페이지 텍스트와 계정 정보는 포함하지 않습니다. |
| `fallbackCopyText` | `text: string` | `boolean` | Clipboard API를 사용할 수 없으면 임시 텍스트 영역을 이용해 복사합니다. |
| `copyDiagnostics` | `statusEl: HTMLElement, textarea: HTMLTextAreaElement` | `Promise<void>` | 보고서를 복사합니다. 실패하면 선택 가능한 상자에 텍스트를 표시합니다. |

## 레이아웃 및 부트스트랩

| 함수 | 매개변수 | 반환값 | 기능 |
|---|---|---|---|
| `buildShiftSpeedBar` | — | `HTMLElement` | Shift 속도 선택 막대를 만듭니다. |
| `buildPresetButtonMarkup` | `name: string, shortcut = "", labelOverride = ""` | `string (HTML)` | 프리셋 버튼 하나의 마크업. |
| `buildAdvancedPresetGroupsMarkup` | — | `string (HTML)` | 확장 프리셋 그룹의 마크업. |
| `buildEnhancementBar` | — | `HTMLElement` | 빠른 판정 막대를 만듭니다: 프리셋, 무작위화 토글, 확장 서랍. |
| `positionShiftSpeedBar` | — | `void` | 속도 막대가 판정 목록 앞에 오도록 유지합니다. |
| `positionEnhancementBar` | — | `void` | 프리셋 막대가 제출 버튼 앞에 오도록 유지합니다. |
| `fixProceedFooter` | — | `void` | 푸터, 막대, 제출 버튼을 재배치합니다. |
| `enhanceLayout` | — | `void` | 모든 레이아웃 변경을 적용하고 설정 UI를 설치합니다. |
| `ensureReviewStructure` | — | `void` | VACNet 마크업을 정규화합니다. 판정 블록을 .verdicts-container-inner로 감싸고 #submitbuttons를 컨테이너로 옮기며 클립 수를 헤더 배지에 표시합니다. 이전 및 새 마크업을 지원합니다. |
| `watchProceedFooter` | — | `void` | `.verdicts-container`를 관찰하고 푸터 보정을 예약합니다. |
| `watchVerdictLabels` | — | `void` | 판정 라벨을 관찰하고 재정규화를 예약합니다. |
| `readFooterPreference` | `storageKey: string` | `boolean` | localStorage에서 바닥글 표시 설정을 읽습니다. |
| `saveFooterPreference` | `storageKey: string, hidden: boolean` | `void` | 바닥글 표시 설정을 저장합니다. |
| `applyFooterPreferences` | `footer: HTMLElement \| null = document.querySelector(".demoscope-custom-footer")` | `void` | `void` |
| `installDemoScopeFooter` | `withClipLinks: boolean, locale = getActiveLocale(), showFeedback = true` | `HTMLElement` | 선택적 링크가 포함된 현지화 바닥글을 만들거나 갱신하고 설정을 적용합니다. |
| `installEmptyQueueNotice` | — | `boolean` | 빈 대기열 메시지를 안내, 시각, 언어 선택기, 바닥글이 포함된 현지화 내용으로 바꿉니다。 |
| `init` | — | `Promise<void>` | 진입점: 계정 이름 컨트롤 → 초대 페이지 또는 검토 페이지 → 레이아웃, 옵저버, 단축키, 플레이어 개선. |

필요한 VACNet 페이지 요소가 없으면 `installWelcomePage`와 `installInvitePage`는 `false`를 반환합니다. 페이지가 빈 대기열 상태가 아니면 `installEmptyQueueNotice`는 `false`를 반환합니다.

### 위 목록에 없는 항목

* **`blockSegmentLoopGuard`** (IIFE, 로드 시 실행): 페이지의 `setInterval`을 감싸 사이트 기본 100ms 구간 반복 타이머를 아무 작업도 하지 않는 함수로 바꿉니다. 이후 구간은 DemoScope 자체 컨트롤이 처리합니다.
* **상수 및 테이블:** `SUPPORTED_LOCALES`, `FLAG_SVG`, `UI_TEXT_ROWS`, `INVITE_TEXT_ROWS`, `SETTINGS_TEXT_ROWS`, `PRESETS`, `PRESET_KEYS`, `PRESET_TONES`, `ADVANCED_PRESET_GROUPS`, `SHIFT_SPEEDS`, `FRAME_STEP`, `ARROW_JUMP_SEC` (`PRESETS`: 21 definitions); added since v1.0.0: `KEY_ACTIONS`, `KEY_GROUPS`, `KEY_ACTION_BY_ID`, `KEY_ACTION_SCOPE`, `RESERVED_KEY_CODES`, `CHEATING_KEYS`, `VERDICT_SECTION_TITLES`, `VERDICT_SECTION_HELP`, `ANIM_STYLES`, `ANIM_SPEEDS`.
* **모듈 상태:** `diag` (step failures, the switch-off reason and the original page structure), `hkState` (state of the Hotkeys window) and the `SCRIPT_VERSION` constant used by the diagnostics report.
* **문자열:** 사용자에게 표시되는 모든 문구는 위 현지화 테이블에 있으며, v1.2.0–v1.4.0에서 추가된 창도 29개 언어로 번역되어 있습니다.

## 저장 키

| 키 | 저장 위치 | 용도 |
|---|---|---|
| `demoscopeLanguage`, `demoscopeLanguageAuto` | `localStorage` | 선택한 언어 / 자동 모드. |
| `demoscopeKeybindings` | `localStorage` | 기본값과 다른 단축키 (JSON). |
| `demoscopeSettingsHotkey` | `localStorage` | 설정 대화상자를 여는 키 (제거된 경우 none). |
| `demoscopeAnimEnabled`, `demoscopeAnimStyle`, `demoscopeAnimSpeed` | `localStorage` | 표시 점 애니메이션 설정. |
| `demoscopeSoundEffectsEnabled`, `demoscopeSoundEffectsVolume` | `localStorage` | 사운드 설정. |
| `demoscopeClipHistory` 및 기록 제한/형식 키 | `localStorage` | 로컬 검토 기록과 관련 설정. |
| `demoscopeSubmitPending`, `demoscopeSubmitPrevVod`, `demoscopeLangSyncTried`, `demoscopeDisabledNotice` | `sessionStorage` | 제출 로딩 상태, 언어 동기화 보호 상태, 한 번 표시되는 비활성화 알림. |









