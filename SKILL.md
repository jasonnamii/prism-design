---
name: prism-design
version: 1.0
description: |
  프리즘 디자인(prism-design) — 보고서, 화이트페이퍼, 릴리즈노트, 제품 페이지, 키노트 덱, 인포그래픽을 중립적이고 구조적인 HTML로 만드는 디자인·시각화 시스템. 트리거: 프리즘디자인, prism-design, 보고서 만들어줘, 화이트페이퍼, 릴리즈노트, 구조적 HTML, 시각화 보고서. NOT: apple-canvas, teenage-design, box-cut-design, editorial-design, UI 설계, HTML 피니싱.
license: Proprietary. Internal use.
---

# Prism Design

중립·구조 중심의 HTML 문서·내러티브 페이지를 만듭니다. 에디토리얼하고 정돈된 신뢰감이 목표이며, 프리즘 액센트는 소량으로만 씁니다.

## Use When

- 형이 디자인된 보고서·화이트페이퍼·릴리즈노트·모델카드·장문 스크롤·제품 내러티브·키노트풍 덱을 원할 때 씁니다.
- 섹션이 많고 스펙터클보다 구조·신뢰감이 중요할 때 적합합니다.
- "보고서로·화이트페이퍼로·프리즘으로·구조적으로·인포그래픽으로 만들어줘"라고 할 때 잡힙니다.
- 데이터·수치·관계·시간축·분포가 들어와도 일반 차트가 아니라 프리즘 고유언어(무채색 헤어라인 + 프리즘 1곳)로 번안해 담습니다.

NOT — 감성 프리미엄 쇼케이스(apple-canvas)·문화 캠페인(teenage-design)·흑백 캠페인(box-cut-design)·매거진 serif 에디토리얼(editorial-design)·컬러 페어 블록(color-skill)·대시보드 실시간 관리 UI·앱 화면(ui-designer)·순수 산문 교정(submission-cleanup)에는 쓰지 않습니다.

## 산출 경로 — 정적 HTML이 1급 디폴트

기본 산출은 React·Babel·CDN 의존이 없는 자기완결 단일 HTML+CSS입니다. 브라우저로 더블클릭하면 오프라인에서도 즉시 렌더되어야 합니다.

- 컴포넌트는 `references/snippets-static.html`의 순수 HTML+CSS 스니펫을 복사해 데이터만 바꿉니다.
- 스타일은 `assets/tokens.css`·`styles.css`·`styles-data.css`·`styles-viz.css`·`styles-doc.css`를 동봉하거나 `<style>`로 인라인합니다.
- 게이지·도넛·라인 차트가 참조하는 프리즘 SVG 그라디언트 defs(`#prism-stroke`)를 body 최상단에 1회 둡니다(스니펫 파일 상단 참조).
- `assets/*.jsx` 라이브러리는 레거시·옵션으로 보존합니다. 형이 JSX 라이브러리를 명시할 때만 그 경로를 씁니다.

## Modes

| Mode | Default Use | Rules |
|---|---|---|
| STANDARD | 디폴트 | 무채색 베이스, 액센트 면적 10% 미만, gradient 0회, 헤어라인 구조 |
| AMPED | 명시 시에만 | 키노트·제품 모먼트, 액센트 면적 30% 미만, gradient 페이지당 1회 |

## 매핑 게이트 — 스타일 입히기 "전" 강제 통과

빌드 시작 전 이 5단계를 거쳐 섹션 매핑표를 명세로 남깁니다. 표 없이 컴포넌트를 고르면 카드 나열 디폴트로 빠집니다 — 이 게이트가 그걸 막습니다.

- STEP1 인벤토리 — 페이지·섹션을 나열하고 각 섹션이 담은 정보가 무엇인지 식별합니다(텍스트·단계·수치·항목·관계·시간축·위치·표 중 무엇인가).
- STEP2 논리 판별 — 각 섹션이 8패밀리 중 어떤 논리인지 정합니다. FLOW 흐름·절차 / HIERARCHY 계층·구성 / COMPARE 비교·대조 / METRIC 수치·그래프 / RELATION 관계·망 / TIME 시간·변화 / DISTRIBUTION 분포·위치 / TABLE 표·구조화.
- STEP3 문법 선택 — 그 논리에 가장 직관적인 시각문법 1개를 결정트리로 고릅니다(아래 결정트리).
- STEP4 리듬 — 인접 섹션이 같은 문법으로 연속되지 않게 하고, 카드그리드 3연속을 금지하며, document·numbers·comparison·flow·reference가 교대로 나오게 배치합니다.
- STEP5 스타일 — 선택된 문법을 프리즘 미감(헤어라인 구조·소량 프리즘 액센트·Pretendard·mono 라벨)으로 렌더합니다.

### 결정트리 (8패밀리 풀세트)

```
흐름·절차 → 단계 순서만? ProcessSteps · 조건 분기? BranchFlow
          · 주체 간 주고받음? Sequence · 입력→가공→출력? Pipeline
계층·구성 → 좁아지는 위계? PyramidShape · 의존 적층? LayerStack
          · 다분기 분해? Tree · 보고라인? OrgChart
비교·대조 → 다열+체크? Comparison · 두 축 4분면? Matrix2x2
          · 키/값? SpecsTable · 전후 대비? BeforeAfter
수치·그래프 → 큰 KPI? StatGrid · 추세·분포? Chart(bar/donut)
          · 단일 비율·달성률? Gauge·ProgressBar · 단계 전환? Funnel
관계·망  → 노드망? NetworkMap · 교집합? Venn · 참여자 생태계? EcosystemMap
시간·변화 → 고정 단계? Timeline · Now/Next/Later? Roadmap
          · 버전 릴리즈? Changelog · 기간 막대? Gantt
분포·위치 → 두 축 위치? PositionMap · 격자 강도? Heatmap · 영역 RAG? Scorecard
표·구조화 → 정렬 데이터? DataTable · 정의·용어? Glossary
```

### 산출 형식 — 빌드 전 명세표

```
| # | 섹션 | 정보유형 | 시각문법 | 컴포넌트 | 패밀리 |
|---|------|---------|---------|---------|--------|
| 1 | 표지 | 텍스트 | 커버 | Cover | DOC |
| 2 | 핵심 발견 | 항목 | 인사이트카드 | InsightCards | COMPARE |
| 3 | 의사결정 흐름 | 분기 | 분기플로우차트 | BranchFlow | FLOW |
```

이 표가 빌드의 1급 산출물입니다. 표를 통과한 뒤에만 HTML 작성으로 넘어갑니다.

## 문체 불가침 vs 정보 재구성 분리

- 불가침 — 본문 문장의 어미·어휘·문장구조·문단·문체(UP 입니다체)는 한 글자도 바꾸지 않습니다. 산문 문단은 형이 쓴 문장 그대로 둡니다. 원문을 표로 쪼개거나 요약하거나 다시 쓰지 않습니다.
- 재구성 권장 — 정보의 배치·구조는 시각문법으로 재배치합니다. 절차·비교·관계·수치·시간·분포·항목 정보는 적절한 시각문법으로 구조화합니다. 문장을 다시 쓰는 게 아니라, 문장이 이미 담고 있는 구조를 드러냅니다.
- 경계 — "이 섹션이 담은 것이 읽는 글인가, 보는 구조인가"로 판정합니다. 읽는 글이면 문장 불가침, 보는 구조면 시각문법으로 재배치하되 라벨·항목 텍스트는 원문 표현을 그대로 옮깁니다. 같은 정보를 문단과 도표로 두 번 반복하지 않습니다 — 산문이면 산문으로, 구조 데이터면 컴포넌트로 한 번만 렌더합니다.

## 미감 디렉티브 — 8패밀리 공통 시그니처

프리즘의 미감은 절제된 에디토리얼·정밀한 헤어라인 구조·소량의 프리즘 액센트입니다. 8패밀리 전 컴포넌트에 같은 시그니처를 겁니다.

- 프리즘 액센트는 면적이 아니라 위치로 씁니다(STANDARD 10% 미만). 컴포넌트당 프리즘을 쓰는 자리는 단 하나 — 헤드 넘버·핵심 노드 보더·강조 행·게이지 호·데시전 다이아몬드 한 곳에만. `var(--grad-prism)`을 면이 아니라 1~3px 보더·링·도트·1셀 강조로 한정하고, 나머지는 무채색 헤어라인(`--line-soft/medium/strong`)과 표면 단계(`--bg-surface/sunken`)로 위계를 만듭니다.
- 헤어라인이 곧 구조입니다. SVG stroke은 1~1.5px, 셀 구분선은 1px gap에 `--line-medium` 배경을 깔아 그리드 자체가 선이 되게 합니다(Matrix2x2 패턴 계승).
- 타이포 스케일을 거대하게 씁니다(`--fs-d1~d3` clamp). 데이터 라벨·캡션은 `var(--font-mono)` 11~12px + `--tr-wide` + 대문자로 도면 주석 질감을 줍니다. 숫자는 mono, 본문은 Pretendard.
- 여백 리듬은 `--sp` 토큰만 씁니다(인라인 px 0개). 섹션 교대 배경(`--bg-canvas` ↔ `--bg-sunken`)으로 패밀리 전환을 끊습니다.
- 데이터 바인딩은 CSS 변수로 합니다. 게이지·진행바·도넛·막대는 `--value`(0~100)·`--pct`·`--v`를 인라인 style로 받아 렌더하고, 고정 하드코딩(64%)을 추방합니다 — 복사 후 숫자만 바꾸면 차트가 갱신됩니다.
- 모션은 reveal(translateY 24px→0)·focus-visible·reduced-motion 존중을 계승합니다. 새 컴포넌트도 `.reveal` 클래스로 동일 진입.

## 8패밀리 인덱스 — 어디에 무슨 컴포넌트가 있나

복사용 정적 스니펫은 전부 `references/snippets-static.html`에 있습니다. CSS는 아래 파일에 분담합니다.

| 패밀리 | 컴포넌트 | CSS 위치 |
|---|---|---|
| FLOW 흐름·절차 | ProcessSteps · BranchFlow · Sequence · Pipeline | `styles-viz.css` |
| HIERARCHY 계층·구성 | PyramidShape(삼각형) · LayerStack · Tree · OrgChart | `styles-viz.css`, `styles-doc.css` |
| COMPARE 비교·대조 | Comparison · Matrix2x2 · SpecsTable · BeforeAfter | `styles-data.css`, `styles-viz.css` |
| METRIC 수치·그래프 | StatGrid · Chart(bar/donut) · Gauge · ProgressBar · Funnel | `styles-data.css`, `styles-viz.css` |
| RELATION 관계·망 | NetworkMap · Venn · EcosystemMap | `styles-doc.css`, `styles-viz.css` |
| TIME 시간·변화 | Timeline · Roadmap · Changelog · Gantt | `styles-data.css`, `styles-viz.css` |
| DISTRIBUTION 분포·위치 | PositionMap · Heatmap · Scorecard | `styles-viz.css`, `styles-doc.css` |
| TABLE 표·구조화 | DataTable · Glossary | `styles-data.css` |

## Design Rules

- `assets/tokens.css`와 정적 스니펫을 먼저 쓰고, 새 구조를 즉흥으로 만들지 않습니다.
- 9그룹 MECE 시스템은 라우팅 보조로 쓰고, 강제 장식의 벽으로 쓰지 않습니다.
- Pretendard를 기본 타입으로 씁니다.
- 프리즘 그라디언트는 액센트로만 쓰고, 본문 텍스트나 큰 일반 배경에는 쓰지 않습니다.
- 카드 그리드 반복을 피하고 document·numbers·comparison·flow·reference 블록을 교대로 둡니다.
- `letter-spacing`은 작은 양수 메타데이터 라벨을 빼면 `0`으로 둡니다.
- 한국어 텍스트는 `word-break: keep-all; line-break: strict; overflow-wrap: break-word;`를 적용합니다.
- reduced motion·focus-visible 상태를 존중합니다.

## Workflow

1. 매핑 게이트 5단계를 거쳐 섹션 매핑표를 출력합니다.
2. `references/snippets-static.html`에서 패밀리별 스니펫을 복사해 단일 HTML로 조립합니다.
3. 5개 CSS를 동봉하거나 인라인하고 프리즘 SVG defs를 1회 둡니다. 데이터는 CSS 변수·텍스트만 바꿉니다.
4. `bash scripts/qc.sh <html-file>`로 검증합니다.
5. 화면 산출물은 Browser 또는 Computer Use로 데스크톱·모바일 프레이밍을 검수합니다(Playwright는 반복 자동화가 본질일 때만).

## References

| Need | Files |
|---|---|
| 정적 컴포넌트 카탈로그(1급) | `references/snippets-static.html` |
| 빌드 레시피·결정트리 | `references/build-recipe.md` |
| 컴포넌트 라우팅 | `references/mece.md` |
| 레이아웃·모션 | `references/layout-catalog.md`, `references/motion-catalog.md` |
| 보이스·절제 | `references/voice.md` |
| 자산·샘플 | `assets/`, `assets/samples/` |
