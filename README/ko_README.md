<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/README/README.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/README/bg_README.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/README/hu_README.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/README/vi_README.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/README/el_README.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/README/da_README.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/README/id_README.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/README/es-ES_README.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/README/es-419_README.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/README/it_README.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/README/zh-TW_README.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/README/zh-CN_README.md) · **한국어** · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/README/de_README.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/README/nl_README.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/README/no_README.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/README/pl_README.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-PT_README.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/README/pt-BR_README.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/README/ro_README.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/README/ru_README.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/README/th_README.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/README/tr_README.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/README/uk_README.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/README/fi_README.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/README/fr_README.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/README/cs_README.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/README/sv_README.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/README/ja_README.md)

</div>

<br>

<div align="center">

# DemoScope

**키보드 중심의 CS2 VACNet 검토 도구 모음.**<br>
판정 프리셋 · 클립 인식 플레이어 · 재설정 가능한 단축키 · 비공개 로컬 기록 · 29개 언어.

<br>

[![Version](https://img.shields.io/badge/version-1.2.0-3b82f6?style=flat-square)](https://github.com/ebayybe/DemoScope/releases)
[![License](https://img.shields.io/badge/license-GPL--3.0-22c55e?style=flat-square)](https://github.com/ebayybe/DemoScope/blob/main/LICENSE)
[![Userscript](https://img.shields.io/badge/Tampermonkey%20%7C%20Violentmonkey-userscript-f59e0b?style=flat-square)](#설치)
[![Languages](https://img.shields.io/badge/languages-29-8b5cf6?style=flat-square)](#언어)
[![Privacy](https://img.shields.io/badge/telemetry-none-64748b?style=flat-square)](#개인정보-보호)

<br>

[**⬇ DemoScope 설치**](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js)

[기능](#기능) · [설치](#설치) · [키보드 단축키](#키보드-단축키) · [사용자 지정](#사용자-지정) · [문서](https://github.com/ebayybe/DemoScope/blob/main/docs/ko_FUNCTIONS.md) · [변경 로그](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ko_CHANGELOG.md)

</div>

<br>

## 스크린샷

<table>
  <tr>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Welcome.png" alt="DemoScope 시작 화면"></a><br><sub><b>시작 화면</b></sub></td>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope.png" alt="DemoScope 기본 인터페이스"></a><br><sub><b>기본 인터페이스</b></sub></td>
    <td align="center" width="33%"><a href="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png"><img src="https://raw.githubusercontent.com/ebayybe/DemoScope/main/Photo/DemoScope_Invite_a_friend.png" alt="DemoScope 초대 페이지"></a><br><sub><b>친구 초대</b></sub></td>
  </tr>
</table>

## 개요

DemoScope는 Counter-Strike VACNet 검토 페이지(counter-strike.net/vacnet)를 더 편리하게 만듭니다. 짧은 클립마다 판정 양식을 클릭하는 대신 키보드로 프리셋 판정, 검토 구간에 한정된 탐색 막대, 프레임 이동, 임시 속도 향상, 2단계 제출, 본인의 판정만 저장하는 비공개 기록을 사용할 수 있습니다. 기존 4문항 양식과 새 1문항 작업을 모두 지원하며 Valve가 페이지를 변경하면 안전을 위해 스스로 비활성화합니다. 모든 기능은 브라우저에서 로컬로 실행됩니다.

## 기능

| | |
|---|---|
| **검토 흐름** | 1`5 키의 빠른 판정 프리셋 5개와 확장 조합 15개를 제공합니다. 무작위 판정 기능은 선택 사항이며 기본적으로 꺼져 있습니다. Enter를 한 번 누르면 제출을 준비하고 다시 누르면 전송합니다. Esc는 취소합니다. |
| **두 가지 작업 유형** | 기존 양식(aim assist, wallhack, auto-bhop, bot)과 “Is the Subject cheating beyond a reasonable doubt?”라는 단일 질문을 감지합니다. 새 양식은 간결한 레이아웃, 1`3번 판정 라벨, 클립 종료까지 카운트다운하는 잠금 표시를 사용합니다. |
| **클립 인식 플레이어** | 클립 시작과 끝으로 제한된 탐색 막대와 시간 표시, ±5초 이동, 1/64초 프레임 이동, Shift 길게 눌러 속도 향상(0.5×`4×), 음소거 및 전체 화면 단축키를 제공합니다. |
| **사용자 지정 단축키** | 전용 창에서 18개 동작의 키를 다시 지정할 수 있습니다. 충돌 시 교체 전에 동작, 그룹, 기능을 설명하고 페이지의 키 안내도 설정에 맞게 바뀝니다. |
| **애니메이션** | 6가지 표시기 스타일, 3단계 속도와 켜기/끄기를 실시간 미리보기로 설정합니다. 기본적으로 시스템의 동작 줄이기 설정을 따릅니다. |
| **명확한 판정 설명** | 각 판정 항목 옆의 “?”가 설명을 보여주며 “아님” 같은 핵심 표현을 강조해 놓치지 않도록 합니다. |
| **비공개 로컬 기록** | localStorage에 클립 및 게임별 기록을 저장합니다. JSON 가져오기/내보내기, HTML 보고서, 여러 백업을 하나로 합친 보고서를 지원합니다. |
| **초대 페이지** | /vacnet/createinvite를 새로 디자인해 표시/숨기기, 한 번에 복사, 요구사항 요약, 닫기 버튼, Enter/Esc 단축키를 추가합니다. |
| **29개 언어** | 사용자가 고른 언어, Steam의 ?l= 설정, 브라우저 언어 순으로 적용합니다. DemoScope에서 언어를 선택하면 VACNet 텍스트도 바뀝니다. |
| **효과음** | Web Audio로 생성하는 소리, 볼륨 조절, 미리 듣기, 켜기/끄기를 지원합니다. |
| **페이지 변경에 대한 복원력** | 초기화 단계를 격리하고 주요 요소에 대체 검색 방법을 둡니다. 페이지를 인식할 수 없으면 VACNet을 건드리지 않고 DemoScope가 비활성화됩니다. 버그 보고용 진단 보고서를 복사할 수 있습니다. |

## 설치

1. [Tampermonkey](https://www.tampermonkey.net/) 또는 [Violentmonkey](https://violentmonkey.github.io/) 같은 userscript 관리자를 설치합니다. 스크립트는 GM_addStyle과 unsafeWindow를 사용합니다.
2. [**DemoScope 설치**](https://raw.githubusercontent.com/ebayybe/DemoScope/main/DemoScope.user.js)를 선택하고 관리자에서 설치를 확인합니다.
3. Steam에 로그인한 뒤 [counter-strike.net/vacnet](https://www.counter-strike.net/vacnet/)을 엽니다.
4. 검토 클립을 열면 DemoScope가 자동으로 실행됩니다. /vacnet/join 페이지는 제외됩니다.

업데이트는 userscript 관리자를 통해 제공됩니다. Chromium 기반 브라우저와 Firefox에서 작동합니다.

## 키보드 단축키

편집 가능한 입력란이나 다른 대화형 컨트롤에 포커스가 없을 때 검토 페이지에서 작동합니다. **모든 키는 설정 → 단축키에서 변경할 수 있습니다.**

| 키 | 동작 |
|---|---|
| 1`5 | 기존 양식 프리셋: 1 bot + aim + wallhack, 2 aim + wallhack, 3 rage, 4 깨끗한 플레이어, 5 판단 불확실. |
| 1, 2, 3 | 단일 질문 작업: 부정행위 / 확신할 수 없음 / 부정행위를 확인하지 못함. |
| Enter | 확인. 기존 양식에서는 한 번 눌러 제출을 준비하고 다시 눌러 전송합니다. |
| Esc | 확인 대기 중인 판정을 취소하거나 첫 Enter의 준비 상태를 해제합니다. |
| Shift (누르고 있기) | 속도 향상 0.5×`4×, 기본 2×이며 페이지에서 선택할 수 있습니다. |
| ← → | 5초 뒤로 / 앞으로 이동합니다. |
| , . | 한 프레임(1/64초) 뒤로 / 앞으로 이동합니다. |
| Space | 재생 / 일시 정지. |
| M / F | 음소거 / 전체 화면. 동영상을 두 번 클릭해도 전체 화면이 전환됩니다. |
| F2 | 설정 창을 엽니다. |
| Enter / Esc (초대 페이지) | 완료 / 닫기. |

## 사용자 지정

F2를 눌러 설정 창을 엽니다. 자주 쓰는 항목부터 정렬되어 있습니다.

- **단축키**: 용도별 동작 목록, 동작별 초기화, 모두 초기화, 충돌 시 바꾸기/서로 교환/취소를 제공합니다. Esc도 지정할 수 있습니다.
- **애니메이션**: 스타일(맥박, 호흡, 물결, 심장박동, 궤도, 깜박임), 속도를 선택하거나 끌 수 있습니다. 각 카드에서 실시간 미리보기를 제공합니다.
- **효과음**: 켜기/끄기, 볼륨(마우스 휠로도 조절), 테스트 버튼.
- **로컬 기록**: 켜기/끄기, 항목 및 키 개수 제한, 12/24시간 표시, JSON 백업, HTML 보고서.
- **푸터**: 피드백 링크, 보고서 링크, 저작권 문구 또는 푸터 전체를 숨깁니다.
- **진단**: 문제 보고용 보고서를 복사합니다([문제 보고](#문제-보고) 참고).
- **초기화**: 효과음, 단축키, 애니메이션을 기본값으로 되돌립니다. 기록은 유지됩니다.

## 언어

DemoScope는 불가리아어, 중국어(간체 및 번체), 체코어, 덴마크어, 네덜란드어, 영어, 핀란드어, 프랑스어, 독일어, 그리스어, 헝가리어, 인도네시아어, 이탈리아어, 일본어, 한국어, 노르웨이어, 폴란드어, 포르투갈어(포르투갈 및 브라질), 루마니아어, 러시아어, 스페인어(스페인 및 라틴아메리카), 스웨덴어, 태국어, 터키어, 우크라이나어, 베트남어 등 29개 언어를 지원합니다. 페이지의 언어 선택기로 언제든 바꿀 수 있습니다.

## 문제 보고

Valve는 예고 없이 VACNet 페이지를 변경할 수 있습니다. 기능이 작동하지 않으면 다음을 수행하세요.

1. F2를 누르고 **진단**을 연 다음 **진단 복사**를 선택합니다.
2. 내용을 새 [이슈](https://github.com/ebayybe/DemoScope/issues)에 붙여넣고 가능하면 스크린샷도 첨부합니다.

보고서에는 스크립트 버전, 시간, 브라우저 언어와 user-agent, 발견한 예상 페이지 요소, 실패한 초기화 단계, 페이지 구조(태그, id, class만)가 포함됩니다. 페이지 텍스트, 계정 이름, 기록은 포함하지 않습니다. 페이지를 더 이상 인식할 수 없으면 DemoScope가 비활성화 사실을 알리고 VACNet은 정상적으로 계속 작동합니다.

## 자주 묻는 질문

<details>
<summary><b>이 페이지에서 DemoScope가 비활성화되었다고 나옵니다. 무슨 뜻인가요?</b></summary>

VACNet 페이지가 변경되어 DemoScope의 예상 구조와 일치하지 않습니다. 일부만 수정된 페이지를 남기지 않도록 스크립트가 중지된 것입니다. 진단 내용을 복사해 이슈를 등록하면 보통 빠르게 업데이트됩니다.
</details>

<details>
<summary><b>VACNet 판정 텍스트와 DemoScope 언어가 다릅니다.</b></summary>

DemoScope에서 언어를 선택하면 Steam의 ?l= 매개변수로 VACNet에 해당 언어를 요청합니다. VACNet 번역이 없으면 VACNet은 자체 기본 언어를 사용하지만 DemoScope의 라벨은 선택한 언어로 유지됩니다.
</details>

<details>
<summary><b>DemoScope가 대신 판정하나요?</b></summary>

아니요. 프리셋은 사용자가 선택한 판정 버튼만 누르며 제출은 항상 직접 확인해야 합니다. 각 클립을 직접 검토하고 프로그램 규칙을 따르세요.
</details>

<details>
<summary><b>단일 질문 작업도 기록되나요?</b></summary>

아직은 아닙니다. 현재 로컬 기록은 기존 4문항 양식에 대해서만 저장됩니다.
</details>

<details>
<summary><b>기본 키로 되돌리려면 어떻게 하나요?</b></summary>

변경된 키 옆의 초기화 아이콘, 단축키 창의 **모두 초기화**, 또는 설정 창의 **초기화**를 사용하세요. 설정 창 초기화는 효과음과 애니메이션도 재설정합니다.
</details>

## 구조

DemoScope는 document-start에서 실행되고 프레임에서는 실행되지 않는 단일 자체 실행 함수입니다. init()이 페이지 종류를 선택하고 페이지를 인식할 수 있는지 확인한 다음 아래 모듈을 연결합니다. 매개변수, 반환값, 저장 키를 포함한 217개 최상위 함수의 전체 참조는 [ko_FUNCTIONS.md](https://github.com/ebayybe/DemoScope/blob/main/docs/ko_FUNCTIONS.md)에 있습니다.

<details>
<summary><b>모듈 개요</b></summary>

| 모듈 | 역할 | 주요 함수 |
|---|---|---|
| Localization | UI 언어, 문자열 조회, 국기, 언어 선택기, VACNet ?l= 동기화 | getActiveLocale, tr, settingText, syncSelectedLanguage, installLanguageSelector |
| Segment & player | 클립 범위 확인, Video.js/HTML5 재생, 사이트의 구간 반복 비활성화 | parseSegmentBounds, createPlayerAdapter, waitForPlayerAdapter, blockSegmentLoopGuard |
| Player enhancements | 탐색 막대, 키 안내, 속도 향상, 프레임 이동, 단축키 | installCustomControls, installPlayerEnhancements |
| Hotkeys | 동작 레지스트리, 키 바인딩, 충돌 감지, 단축키 창 | getBinding, findKeyConflict, getActionForEvent, ensureHotkeysDialog |
| Verdict presets | 프리셋 표, 선택 상태, 무작위 적용 | applyPreset, detectActivePreset, buildEnhancementBar |
| Single-question task | 새 양식 라벨, 잠금 표시, 키 | isCheatingMode, selectCheatingVerdict, updateCheatingLock |
| Submit flow | 2단계 확인, 취소, 동일 출처 확인, 로딩 오버레이 | invokeProceedAction, invokeCancelAction, submitVerdictForm, finishSubmitLoadingWhenReady |
| Local history | 클립/게임별 기록, 백업, 보고서 | appendReviewHistory, importLocalHistory, exportCombinedHistoryReports |
| Settings & animations | 설정 창과 하위 창, 효과음, 표시기 애니메이션 | ensureSettingsDialog, installExtraSettingsSections, ensureAnimationsDialog, playUiSound |
| Invite page | 새 페이지, 닫기 버튼, 단축키 | installInvitePage, installInviteExtras |
| Resilience | 격리된 단계, 대체 검색, 비활성화, 진단 | safeStep, disableDemoScope, buildDiagnosticsReport |
| Bootstrap | 시작 지점 | init, enhanceLayout |

</details>

## 개인정보 보호

DemoScope는 텔레메트리를 전송하지 않으며 설정이나 기록을 업로드하지 않습니다. 판정을 제출하면 VACNet이 사이트의 일반 양식을 통해 받습니다. 설정과 기록은 브라우저의 localStorage(demoscope로 시작하는 키)와 sessionStorage에 저장됩니다. **설정 → 로컬 기록 → 기록 삭제**에서 기록을 지울 수 있습니다. 진단 보고서는 클립보드에만 복사되며 공유 여부는 사용자가 결정합니다.

## 면책 조항

DemoScope는 Valve Corporation과 제휴하거나 승인을 받은 제품이 아닌 비공식 커뮤니티 프로젝트입니다. 사용자를 대신해 판정하지 않습니다. 모든 클립을 직접 검토하고 검토 프로그램 규칙을 따르세요. 사용에 따른 책임은 사용자에게 있습니다.

## 라이선스

[GNU GPL v3.0 라이선스](https://github.com/ebayybe/DemoScope/blob/main/LICENSE)로 배포됩니다.

## 감사의 말

- **최초 아이디어와 기본 인터페이스:** skinsales / goodvibes의 [*CS2 VACNet Review — Player & Layout Enhancements*](https://greasyfork.org/ru/scripts/591778-cs2-vacnet-review-player-layout-enhancements) (MIT).
- **관련 콘셉트 및 러시아어 포크:** authorless의 [*VACLens RU — CS2 Review Assistant*](https://greasyfork.org/ru/scripts/592414-vaclens-ru-cs2-review-assistant) (MIT).
- **아키텍처 전면 개편, 재사용 가능한 프레임워크, 29개 언어 지원 및 사용자 지정 판정 프리셋:** ebayybe.
