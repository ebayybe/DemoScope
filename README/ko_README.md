<div align="center">

[English](../README.md) · [Български](bg_README.md) · [Magyar](hu_README.md) · [Tiếng Việt](vi_README.md) · [Ελληνικά](el_README.md) · [Dansk](da_README.md) · [Bahasa Indonesia](id_README.md) · [Español (España)](es-ES_README.md) · [Español (Latinoamérica)](es-419_README.md) · [Italiano](it_README.md) · [繁體中文](zh-TW_README.md) · [简体中文](zh-CN_README.md) · **한국어** · [Deutsch](de_README.md) · [Nederlands](nl_README.md) · [Norsk](no_README.md) · [Polski](pl_README.md) · [Português (Portugal)](pt-PT_README.md) · [Português (Brasil)](pt-BR_README.md) · [Română](ro_README.md) · [Русский](ru_README.md) · [ไทย](th_README.md) · [Türkçe](tr_README.md) · [Українська](uk_README.md) · [Suomi](fi_README.md) · [Français](fr_README.md) · [Čeština](cs_README.md) · [Svenska](sv_README.md) · [日本語](ja_README.md)

# DemoScope — CS2 Review Toolkit

![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/badge/license-MIT-green) ![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-orange)

**CS2 VACNet 검토자를 위한 키보드 중심 userscript 도구 모음: 판정 프리셋, 구간 인식 비디오 플레이어, 초대 페이지 개선, 사운드 효과, 비공개 로컬 기록 — 29개 언어 지원.**

</div>

## 개요

DemoScope는 Counter-Strike VACNet 검토 페이지(`counter-strike.net/vacnet`)를 개선합니다. 짧은 클립마다 네 가지 판정 그룹(aim assist, wallhack, auto-bhop, bot)을 일일이 클릭하는 대신, 키보드 중심의 작업 방식을 제공합니다. 판정 프리셋, 검토 구간으로 제한된 탐색 막대, 프레임 단위 이동, 일시적 배속, 2단계 제출 확인, 그리고 본인의 판정에 대한 비공개 기록까지 모두 포함됩니다. 모든 것은 브라우저에서 로컬로 실행됩니다.

## 주요 기능

- **판정 프리셋** – `1`–`5` 키의 빠른 프리셋 5개와 확장 조합 15개(aim, wallhack, bhop, bot 및 그 조합, “불확실” 변형 포함).
- **구간 인식 플레이어** – 탐색 막대, 시간 표시, ±5초 이동, 1/64초 프레임 단위 이동이 클립의 시작/끝 범위로 제한됩니다.
- **누르고 있는 동안 가속** – `Shift`를 누르고 있으면 설정한 속도(0.5×–4×, 기본 2×)로 재생합니다.
- **안전한 2단계 제출** – `Enter`로 버튼을 준비하고 한 번 더 `Enter`를 누르면 판정이 전송됩니다. 다른 출처로 향하는 폼은 차단됩니다.
- **29개 언어 인터페이스** – Steam의 `?l=` 매개변수, 저장된 선택 또는 브라우저 언어를 따르며 페이지 내 언어 선택기를 제공합니다.
- **로컬 검토 기록** – 클립별·게임별 기록을 `localStorage`에 저장하며, JSON 내보내기/가져오기, HTML 보고서, 여러 백업을 하나의 보고서로 병합하는 기능을 지원합니다.
- **초대 페이지 개선** – 새로 디자인한 `/vacnet/createinvite`에서 초대 링크 표시/숨김과 원클릭 복사, 요구 사항 요약을 제공합니다.
- **사운드 효과** – Web Audio로 합성한 효과음과 켜기/끄기, 볼륨, 미리 듣기 제어.
- **설정 대화상자** – `F2`로 열기(변경 가능): 사운드, 단축키, 기록 한도, 백업, 기본값 복원.
- **편의 기능** – 제출 후 로딩 오버레이, 토스트 알림, 계정 이름 숨기기 토글, 검토 규칙 대화상자, 선택형 판정 무작위화(기본값 꺼짐).

## 설치

1. [Tampermonkey](https://www.tampermonkey.net/) 또는 [Violentmonkey](https://violentmonkey.github.io/) 같은 userscript 관리자를 설치합니다(스크립트는 `GM_addStyle`과 `unsafeWindow`를 사용).
2. [DemoScope 설치](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js) 후 관리자에서 설치를 확인합니다.
3. Steam에 로그인하고 <https://www.counter-strike.net/vacnet/>을 엽니다.
4. 검토 클립을 열면 DemoScope가 자동으로 로드됩니다(`/vacnet/join` 페이지는 제외).

## 사용법

포커스가 입력란, 버튼, 링크, 선택 상자에 있지 않을 때 검토 페이지에서 단축키가 작동합니다.

| 키 | 동작 |
|---|---|
| `1` … `5` | 판정 프리셋 적용: 1 봇 + aim + wallhack, 2 aim + wallhack, 3 rage, 4 정상 플레이어, 5 불확실 |
| `Shift` (hold) | 누르고 있는 동안 배속(0.5×–4×, 기본 2×, 페이지에서 선택 가능) |
| `←` `→` | 5초 뒤로 / 앞으로 이동 |
| `,` `.` | 한 프레임(1/64초) 뒤로 / 앞으로 |
| `Space` | 재생 / 일시정지 |
| `M` / `F` | 음소거 / 전체 화면(영상을 더블클릭해도 전체 화면이 전환됨) |
| `Enter` ×2 | 한 번 누르면 제출 버튼이 준비되고, 다시 누르면 판정이 전송됨 |
| `F2` | 설정 대화상자 열기(변경 가능) |

## 아키텍처 및 함수 구성

DemoScope는 즉시 실행되는 하나의 함수(`@run-at document-start`, `@noframes`)입니다. `init()`가 초대 페이지와 검토 페이지 중 하나를 선택하고 아래 모듈을 연결합니다. 전체 143개 함수의 이름, 역할, 매개변수, 반환값에 대한 전체 참조 문서는 다음에 있습니다: [ko_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/ko_FUNCTIONS.md).

| 모듈 | 역할 | 주요 함수 |
|---|---|---|
| `Localization` | UI 언어 결정, 문자열 조회, 국기와 언어 선택기 표시 | `getActiveLocale`, `tr`, `settingText`, `inviteText`, `getPresetLabel`, `installLanguageSelector` |
| `Segment & player` | 페이지에서 클립 시작/끝 읽기, Video.js/HTML5 재생 래핑, 사이트 기본 구간 반복 타이머 비활성화 | `parseSegmentBounds`, `createPlayerAdapter`, `waitForPlayerAdapter`, `blockSegmentLoopGuard` |
| `Player enhancements` | 사용자 지정 탐색 막대, 키 안내, Shift 가속, 프레임 이동, 키보드 단축키 | `installCustomControls`, `installPlayerEnhancements`, `isShortcutBlocked` |
| `Verdict presets` | 프리셋 표, 선택 상태, 선택적 무작위 순서·지연을 포함한 프리셋 적용 | `applyPreset`, `detectActivePreset`, `syncPresetButtons`, `applyDefaultVerdicts`, `buildEnhancementBar` |
| `Submit flow` | 2단계 Enter, `verdict_labels[]` 생성, 동일 출처 확인, 로딩 오버레이 | `invokeProceedAction`, `prepareVerdictFormForSubmit`, `submitVerdictForm`, `isSafeSubmitTarget`, `finishSubmitLoadingWhenReady` |
| `Local history` | `localStorage`에서 클립별·게임별 기록을 저장, 정리, 표시 | `readClipHistoryStore`, `writeClipHistoryStore`, `appendReviewHistory`, `renderClipHistory` |
| `Backups & reports` | JSON 내보내기/가져오기, HTML 보고서, 여러 백업을 병합한 보고서 | `exportLocalHistory`, `importLocalHistory`, `exportReadableHistory`, `exportCombinedHistoryReports` |
| `Settings & sound` | 설정 대화상자, 변경 가능한 단축키, Web Audio 효과음 | `ensureSettingsDialog`, `openSettingsDialog`, `installSettingsUi`, `playUiSound` |
| `Invite page` | 새로 디자인한 `/vacnet/createinvite`: 초대 링크 표시/숨김 및 복사, 요구 사항 | `installInvitePage` |
| `Layout & UI helpers` | 토스트 알림, 푸터 숨기기, 레이아웃 감시, 계정 이름 토글 | `enhanceLayout`, `showToast`, `watchProceedFooter`, `installAccountNameControl` |
| `Bootstrap` | 진입점: 페이지 유형을 판별하고 모듈을 시작 | `init` |

## 로컬 데이터 및 개인정보

DemoScope는 원격 측정 데이터를 전송하지 않습니다. 설정과 기록은 브라우저의 `localStorage`(`demoscope`로 시작하는 키)와 `sessionStorage`에만 저장됩니다. 기록을 삭제하려면 설정 대화상자의 기록 삭제 옵션을 사용하세요.

## 면책 조항

DemoScope는 비공식 커뮤니티 프로젝트로, Valve Corporation과 제휴하거나 승인을 받지 않았습니다. 대신 판정을 내려주지 않으므로 모든 클립을 직접 검토하고 검토 프로그램의 규칙을 따르세요. 사용에 따른 책임은 본인에게 있습니다.

## License

[MIT](../LICENSE) 라이선스로 배포됩니다.