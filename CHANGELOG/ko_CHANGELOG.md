<div align="center">

[English](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/en_CHANGELOG.md) · [Български](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/bg_CHANGELOG.md) · [Magyar](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/hu_CHANGELOG.md) · [Tiếng Việt](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/vi_CHANGELOG.md) · [Ελληνικά](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/el_CHANGELOG.md) · [Dansk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/da_CHANGELOG.md) · [Bahasa Indonesia](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/id_CHANGELOG.md) · [Español (España)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-ES_CHANGELOG.md) · [Español (Latinoamérica)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/es-419_CHANGELOG.md) · [Italiano](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/it_CHANGELOG.md) · [繁體中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-TW_CHANGELOG.md) · [简体中文](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/zh-CN_CHANGELOG.md) · **한국어** · [Deutsch](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/de_CHANGELOG.md) · [Nederlands](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/nl_CHANGELOG.md) · [Norsk](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/no_CHANGELOG.md) · [Polski](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pl_CHANGELOG.md) · [Português (Portugal)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-PT_CHANGELOG.md) · [Português (Brasil)](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/pt-BR_CHANGELOG.md) · [Română](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ro_CHANGELOG.md) · [Русский](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ru_CHANGELOG.md) · [ไทย](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/th_CHANGELOG.md) · [Türkçe](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/tr_CHANGELOG.md) · [Українська](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/uk_CHANGELOG.md) · [Suomi](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fi_CHANGELOG.md) · [Français](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/fr_CHANGELOG.md) · [Čeština](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/cs_CHANGELOG.md) · [Svenska](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/sv_CHANGELOG.md) · [日本語](https://github.com/ebayybe/DemoScope/blob/main/CHANGELOG/ja_CHANGELOG.md)

</div>

# DemoScope v1.2.0

자체 보호 릴리스: DemoScope가 VACNet 페이지 변경에 대응해 중간에 중단되지 않으며, 사용자와 개발자에게 발생한 일을 알려 줍니다.

설정, 초대 페이지, 판정 텍스트 개선.

단축키, 애니메이션, 로딩 수정.

VACNet 단일 질문 작업 지원.

VACNet 재설계 검토 페이지와의 호환성.

### 추가됨

- **독립적인 설정 단계.** 레이아웃 및 설치 단계가 각각 실행됩니다. 한 단계가 실패해도 오류를 기록하고 나머지 단계를 계속 진행합니다.
- 비디오 컨테이너, 판정 컨테이너, 제출 영역을 위한 **대체 검색 방식**. VACNet이 비디오 컨테이너 클래스를 바꾸면 DemoScope가 플레이어 요소를 통해 찾습니다.
- **안전한 비활성화.** 비디오나 판정 양식이 없거나 설정 단계 5개 이상이 실패하면 DemoScope가 자체 변경을 되돌리고 VACNet 푸터를 복구하며 설정 창만 남긴 뒤 알림을 한 번 표시합니다. 빈 대기열 페이지는 기존처럼 인식되며 이 동작을 유발하지 않습니다.
- **진단 보고서**(Settings → Diagnostics → Copy diagnostics): 버전, 시간, 언어, 브라우저, 페이지 및 작업 유형, 22개 요소 검사(`ok` / `MISSING`), 단계 오류, DemoScope 변경 전후의 페이지 구조. 구조에는 태그, ID, 클래스만 포함되고 페이지 텍스트는 포함되지 않습니다. 클립보드가 차단되면 선택 가능한 상자에 보고서가 표시됩니다.
- 부분적으로 렌더링된 페이지를 판단하기 전에 최대 2초 대기합니다.

- **초대 페이지 닫기 버튼.** 카드 모서리의 ×를 누르면 “Done”과 같이 클립으로 돌아갑니다.
- **초대 페이지 단축키:** `Enter`는 “Done”을 실행하고 `Esc`는 페이지를 닫습니다. 버튼, 링크, 입력란, 대화상자 또는 언어 목록에 포커스가 있을 때는 무시됩니다. Hotkeys의 “Invite page” 그룹에서 재지정할 수 있습니다.
- **페이지별 키 충돌.** 초대 페이지에는 플레이어가 없으므로 `Enter` / `Esc`가 검토 페이지의 같은 키와 충돌하지 않습니다. 설정 키는 전역으로 유지됩니다.
- 설정 창, 하위 창, 판정 목록에 **어둡고 얇은 스크롤바**를 적용하고 어두운 color-scheme을 설정했습니다.

- **Hotkeys 창**(Settings → Hotkeys): 18개 단축키를 모두 재지정할 수 있고 동작별로 분류되며 설명과 초기화 버튼을 제공합니다. “Reset all”은 한 번 더 확인해야 합니다.
  - **충돌 처리.** 이미 사용 중인 키를 선택하면 해당 동작, 그룹, 기능을 표시하며 Replace, Swap, Cancel을 선택할 수 있습니다.
  - `Esc`를 지정할 수 있고 키 입력을 캡처하는 동안 창을 닫지 않습니다. `Tab`, 수정 키, Caps Lock, `F5`, `F11`, `F12`는 거부하며 `Shift`는 누르고 있는 “Speed boost” 동작에만 허용됩니다.
  - 비디오 아래 안내, 배지, Continue/Cancel 버튼이 지정한 키를 따릅니다.
- `Esc`로 확인 대기 중인 판정을 취소하고 2단계 제출의 첫 `Enter`를 취소할 수 있습니다.
- **Animations 창**(Settings → Animations): 6가지 스타일, 실시간 미리 보기, 3단계 속도, 켜기/끄기 스위치를 제공합니다. 시스템에서 동작 줄이기를 요청하면 애니메이션을 끈 상태로 시작합니다.
- 판정 라디오 버튼에 포커스가 있어도 `Enter`와 `Esc`가 작동합니다.

- **단일 질문 작업.** VACNet에서 “Is the Subject cheating beyond a reasonable doubt?”와 Cheating / Uncertain / No cheats seen 답변을 표시할 수 있습니다. DemoScope가 이를 감지해 빠른 판정, 확장 조합, 무작위 선택 기능이 없는 간결한 레이아웃으로 전환합니다.
- DemoScope 언어의 판정 레이블, `1–3` 키 배지 및 해당 단축키.
- **잠금 표시기.** Uncertain과 No cheats seen은 클립이 끝난 뒤 잠금 해제됩니다. 카드에 남은 시간과 진행률이 표시됩니다. 잠긴 옵션은 흐리게 표시되며 해당 키를 누르면 오류음과 카드 흔들림이 발생합니다.
- 비디오 아래 안내를 `Enter` 및 `1–3`으로 변경하고 판정 버튼 높이를 키웠습니다.

- 29개 언어로 네 가지 판정 범주에 대한 **DemoScope 자체 설명**을 제공합니다. 일부 언어(예: 우크라이나어)에서는 VACNet 질문이 영어로 표시되므로 “?” 설명이 더 이상 그 텍스트에 의존하지 않습니다.

- AIM ASSIST, WALL HACK, AUTO BHOP, BOT 옆에 **“?” 도움말 버튼**을 추가했습니다. 누르면 설명을 표시하고 바깥 클릭, 다시 클릭, `Esc`로 닫습니다. 키보드 포커스를 받지 않아 `Enter`와 `Space`의 검토 기능을 유지합니다.

### 변경됨

- **설정 창 재설계.** 사용 빈도에 따라 Hotkeys, Animations, Sound effects, Local history, Footer, Diagnostics(v1.2.0에서 추가), Reset 순으로 배치했습니다. Hotkeys와 Animations에는 변경 사항이 반영되는 요약이 표시됩니다.
- **전체 설정을 한 번에 초기화.** 사운드, 음량, 단축키, 애니메이션을 복원하며 기록은 유지합니다.
- 설정 창 키를 이제 Hotkeys에서 편집합니다.
- **판정 확인 텍스트에서 키 숫자를 제거했습니다.** “2Not sure”, “3No cheats seen” 같은 문구를 방지하며, 키 배지는 CSS로 그립니다.
- 단일 질문 작업의 옵션 2는 이제 “Not sure”이며 VACNet 문구와 같은 1인칭 표현을 사용합니다.

- 판정 버튼의 **핵심 문구 강조 표시를 복원**했습니다. 검색 대상 문구는 굵은 주황색, 부정 답변의 “not”은 차분한 파란색으로 표시하며 선택된 버튼도 읽기 쉽습니다.
- `normalizeVerdictLabels`가 이제 b 표시만 해제하므로 강조 마크업이 유지됩니다.

HTML 요소: `<b>`.

- 포털 헤더와 안내 카드를 숨기고 클립 카운터를 헤더 배지에도 표시합니다.
- Continue 버튼을 패널 아래에 고정해 긴 번역에서도 계속 보이게 합니다.

기술 선택자: `.verdicts-container-inner`, `#submitbuttons`.

### 수정됨

- **단일 질문 작업 제출 후 “loading next clip”이 오래 걸리던 문제:** 존재하지 않는 `aimassist` 입력을 기다리지 않고 판정 양식과 미디어 메타데이터를 허용하며 더 일찍 검사를 시작합니다. 클립이 없는 페이지에서는 3초 후 오버레이를 조용히 닫습니다.
- 대화상자가 열려 있을 때 페이지 단축키(`Space`, `Enter` 등)가 뒤쪽 페이지에 적용되지 않습니다.

- Local history 버튼을 주변 배지와 같은 크기로 조정하고 줄바꿈을 막으며 긴 레이블을 줄입니다. 배지 행은 좁아지는 대신 다음 줄로 넘어갑니다.

- **DemoScope에서 언어를 바꿔도 판정 텍스트가 브라우저 언어로 남던 문제:** VACNet은 Steam의 `?l=` 매개변수를 사용하지만 DemoScope는 자체 레이블만 변경했습니다. 이제 검토 페이지가 선택된 `?l=`로 열리고 매개변수가 없으면 한 번 다시 요청합니다. 실제 VACNet 언어는 CSS 및 스크립트 URL의 `l=`에서 읽으며, 한 번만 시도해 지원되지 않는 언어의 리디렉션 반복을 막습니다.

- **`Space`, `M`, F가 작동하지 않는 것처럼 보이던 문제:** VACNet / Video.js가 같은 키를 다시 처리했습니다. DemoScope가 이제 이 키를 가로챕니다.
- Firefox에서 `Space`를 놓을 때 포커스된 플레이어 버튼이 활성화되지 않습니다.
- 판정 라디오 버튼에 포커스가 있어도 플레이어 단축키가 작동합니다.

- **패널이 일부만 만들어지던 문제:** VACNet의 포털 헤더, 안내 카드, 그리드 레이아웃, verdicts-container-inner 제거, submitbuttons 이동으로 `insertBefore` 오류가 발생했습니다. `ensureReviewStructure` 단계가 마크업을 정규화해 이전 및 새 레이아웃을 지원합니다.

### 현지화

- 진단, 복사 결과, 비활성화 알림 관련 문자열 6개를 29개 언어에 추가했습니다.

- 요약, 초기화, 초대 페이지 작업, “Not sure” 관련 문자열 12개를 29개 언어에 추가했습니다.

CSS 설정: `color-scheme: dark`.

- Hotkeys 및 Animations 창(언어별 77개 문자열)을 나머지 27개 언어로 번역했습니다. 이전에는 영어와 러시아어만 제공됐습니다.

- Hotkeys와 Animations는 처음에 영어와 러시아어로 작성되었으며, 나머지 번역은 v1.2.0에 추가했습니다.

여섯 가지 스타일은 pulse, breathe, ripple, heartbeat, orbit, blink입니다.

- 레이블, 제목, 설명, 잠금 메시지 문자열 5개를 29개 언어에 추가했습니다.

# DemoScope v1.0.0

CS2 VACNet 검토 페이지용 DemoScope userscript의 첫 공개 릴리스.

### 추가됨
- 29개 언어 인터페이스, 자동 언어 선택, 빠른 판정 프리셋 5개, 확장 조합 15개.
- 구간별 비디오 제어, 프레임 단위 이동, `Shift` 속도 향상, `Space` 재생/일시 정지, `M` 음소거, `F` 전체 화면, `Enter`를 이용한 2단계 판정 제출.
- 설정 가능한 로컬 검토 기록, JSON 가져오기/내보내기, HTML 보고서, 여러 JSON 백업을 하나의 보고서로 병합.
- 개선된 초대 페이지, 사운드 설정, 설정 단축키, 계정 이름 숨기기, 검토 규칙 대화상자, 선택형 판정 무작위 지정(기본 꺼짐).

### 개인정보 보호
- 텔레메트리가 없습니다. 로컬 설정과 기록은 업로드되지 않습니다. 제출한 판정은 사이트의 일반 양식을 통해 VACNet으로 전송됩니다.
