# Build Recipe — 콘텐츠 → Prism 페이지

1급 산출 경로는 React·CDN 없는 자기완결 단일 HTML+CSS입니다. 아래 6단계로 콘텐츠를 프리즘 페이지로 만듭니다.

## Step 1 · 콘텐츠 인벤토리

| 항목 | 묻는다 |
|---|---|
| 형식 | 보고서? 랜딩? 덱? 화이트페이퍼? 릴리즈노트? |
| 언어 | EN/KO/이중? |
| 섹션 수 | 5? 12? 30+? |
| 이미지 | 사용자 자산? placeholder만? |
| 차트 | 실제 데이터? placeholder만? |
| 길이 | 한 화면? 장문 스크롤? |

## Step 2 · 매핑 게이트 (스타일 입히기 전 강제 통과)

각 섹션이 담은 정보를 식별하고 8패밀리 중 하나로 정한 뒤, 매핑표를 먼저 출력합니다. 표 없이 컴포넌트를 고르면 카드 나열 디폴트로 빠집니다.

| # | 섹션 | 정보유형 | 시각문법 | 컴포넌트 | 패밀리 |
|---|---|---|---|---|---|
| 1 | 표지 | 텍스트 | 커버 | Cover | DOC |
| 2 | TL;DR | 텍스트 | 요약 | TLDR | DOC |
| 3 | 핵심 메시지 | 텍스트 | 히어로 | Hero | DOC |
| 4 | 4가지 발견 | 항목 | 인사이트카드 | InsightCards | COMPARE |
| 5 | 핵심 KPI | 수치 | 스탯그리드 | StatGrid | METRIC |
| 6 | 의사결정 흐름 | 분기 | 분기플로우차트 | BranchFlow | FLOW |
| 7 | 경쟁사 비교 | 항목·체크 | 비교매트릭스 | Comparison | COMPARE |
| 8 | 로드맵 | 시간 | 로드맵 | Roadmap | TIME |
| 9 | 성숙도 모델 | 계층 | 삼각형 피라미드 | PyramidShape | HIERARCHY |
| 10 | 분포 | 위치 | 포지셔닝맵 | PositionMap | DISTRIBUTION |
| 11 | 용어집 | 표 | 용어표 | Glossary | TABLE |

리듬 규칙 — 인접 섹션이 같은 문법으로 연속되지 않게 하고, 카드그리드 3연속을 금지하며, 여러 패밀리가 고루 분포되게 배치합니다.

## Step 3 · 컴포넌트 선택 결정트리 (8패밀리 풀세트)

```
흐름·절차 FLOW
  단계 순서만? → ProcessSteps (선형 프로세스)
  조건 분기?   → BranchFlow (다이아몬드 데시전)
  주체 간 주고받음? → Sequence (lifeline·메시지 화살표)
  입력→가공→출력? → Pipeline (셰브론 스테이지)

계층·구성 HIERARCHY
  좁아지는 위계·성숙도? → PyramidShape (clip-path 삼각형)
  의존 적층?   → LayerStack (가로 레이어 적층)
  다분기 분해? → Tree (ㄴ자 커넥터)
  보고라인?    → OrgChart (조직도)

비교·대조 COMPARE
  다열 + 체크마크? → Comparison
  두 축 4분면?     → Matrix2x2 (사분면 음영 + 1사분면 프리즘)
  키/값 스펙?      → SpecsTable
  전후 대비?       → BeforeAfter (2열 + After 프리즘)

수치·그래프 METRIC
  큰 KPI?          → StatGrid
  추세·분포?       → Chart (data-bound bar/donut)
  단일 비율·달성률? → Gauge (반원 호) · ProgressBar (width %)
  단계 전환율?     → Funnel

관계·망 RELATION
  노드망?      → NetworkMap
  교집합?      → Venn
  참여자 생태계? → EcosystemMap (중심-위성)

시간·변화 TIME
  고정 단계?       → Timeline
  Now/Next/Later?  → Roadmap
  버전 릴리즈?     → Changelog
  기간 막대?       → Gantt (grid 기간막대)

분포·위치 DISTRIBUTION
  두 축 위치?  → PositionMap (점 산포)
  격자 강도?   → Heatmap (정규 격자 음영)
  영역별 RAG?  → Scorecard

표·구조화 TABLE
  정렬 데이터? → DataTable
  정의·용어?   → Glossary
```

## Step 4 · 스니펫 조립

`references/snippets-static.html`에서 매핑표가 지정한 패밀리 섹션을 통째로 복사해 단일 HTML 본문으로 잇습니다.

- 데이터는 텍스트와 CSS 변수만 바꿉니다. 게이지·도넛은 `--value`(0~100), 진행바는 `--pct`, 막대·히트맵은 `--v`로 받습니다.
- 산문 문단은 형이 쓴 문장 그대로 둡니다(문체 불가침). 데이터·단계·항목·관계만 시각문법으로 재배치합니다.

## Step 5 · 정적 부팅 (자기완결 단일 HTML)

```html
<head>
  <link rel="stylesheet" href="tokens.css" />
  <link rel="stylesheet" href="styles.css" />
  <link rel="stylesheet" href="styles-data.css" />
  <link rel="stylesheet" href="styles-viz.css" />
  <link rel="stylesheet" href="styles-doc.css" />
</head>
<body>
  <!-- 게이지·도넛·라인 차트가 참조하는 프리즘 그라디언트. body 최상단 1회. -->
  <svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
    <linearGradient id="prism-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#4F7DFF"/><stop offset="22%" stop-color="#8C5CFF"/>
      <stop offset="46%" stop-color="#E04CC6"/><stop offset="68%" stop-color="#FF6A4D"/>
      <stop offset="88%" stop-color="#FFB347"/><stop offset="100%" stop-color="#4FD1B7"/>
    </linearGradient>
  </defs></svg>
  <div class="container">
    <!-- 여기에 스니펫 섹션을 매핑표 순서대로 배치 -->
  </div>
</body>
```

오프라인 단일 파일이 필요하면 5개 CSS를 `<style>`로 인라인합니다. CSS는 Pretendard를 CDN @import로 불러오므로, 완전 오프라인이 필요하면 폰트 fallback(system-ui)으로 충분합니다.

reveal 진입은 스니펫 파일 하단의 IntersectionObserver 스크립트를 그대로 복사합니다(reduced-motion이면 즉시 표시).

## Step 6 · 검증

```
bash scripts/qc.sh <html-file>
```

체크리스트:
- [ ] 그라디언트 본문 단락 ✗
- [ ] 같은 패밀리 3연속 ✗ · 카드그리드 3연속 ✗
- [ ] 매핑표대로 패밀리가 고루 분포
- [ ] image-slot에 alt·aria
- [ ] body 17px 유지
- [ ] inline px는 데이터 바인딩 변수(`--value`·`--pct`·`--v`·`--start`·`--span`)와 좌표(`--x`·`--y`·`--a`)에만 — 그 외 0개
- [ ] 컴포넌트당 프리즘 액센트 1곳

## 산업별 레시피 (시작 시퀀스)

| 산출물 | 권장 패밀리 시퀀스 |
|---|---|
| **장문 보고서** | Cover → TLDR → InsightCards → StatGrid → Comparison → Timeline → PullQuote → Footnotes |
| **마케팅 랜딩** | Hero → Bento → Features → StatGrid → Pricing → FAQ → Footer |
| **키노트 덱** | Cover → Hero → StatGrid → BranchFlow → PyramidShape → BeforeAfter → ChapterDivider |
| **화이트페이퍼** | Cover → TLDR → ChapterDivider → 본문(Figure·CodeBlock·MarginNote) → Comparison → Glossary → Footnotes |
| **모델카드** | Cover → SpecsTable → Chart → Comparison → Callouts(warn) → Footnotes |
| **릴리즈노트** | Hero → Changelog → Gantt → Callouts(tip) → FAQ |
| **데이터 인포그래픽** | Cover → StatGrid → Gauge → Chart → Heatmap → PositionMap → DataTable |

## 부록 · JSX 라이브러리 (레거시·옵션)

`assets/*.jsx` + React/Babel CDN 경로는 보존하되 옵션입니다. 형이 JSX 라이브러리를 명시할 때만 씁니다.

1. `assets/index.html`을 출력 폴더에 복사하고 자산을 동봉합니다.
2. `assets/i18n.jsx` COPY 객체에 EN/KO 키를 완전 mirror합니다(한쪽에만 키가 있으면 fallback이 깨집니다).
3. `app.jsx`에 `window.PRISM_*` 컴포넌트를 마운트합니다.

신규 8패밀리 컴포넌트는 정적 스니펫이 1급이며, JSX 병행본은 `window.PRISM_VIZ`·`PRISM_SHAPES`·`PRISM_DATA`에 등록되어 있습니다.
