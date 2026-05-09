# Build Recipe — 콘텐츠 → Prism 페이지

§C Mode 2 (BUILD) 6단계 파이프라인 풀버전.

## Step 1 · 콘텐츠 inventory

| 항목 | 묻는다 |
|---|---|
| 형식 | 보고서? 랜딩? 덱? white paper? release notes? |
| 언어 | EN/KO/이중? |
| 섹션 수 | 5? 12? 30+? |
| 이미지 | 사용자 자산? placeholder만? |
| 차트 | 실제 데이터? DataViz placeholder? |
| 길이 | 한 화면? 장문 스크롤? |

## Step 2 · MECE 매핑

각 섹션을 9그룹 중 하나로. 표로 출력:

| # | 섹션 제목 | MECE 그룹 | 컴포넌트 |
|---|---|---|---|
| 1 | 표지 | 08 Doc | Cover |
| 2 | TL;DR | 08 Doc | TLDR |
| 3 | 핵심 메시지 | 01 Marketing | Hero |
| 4 | 4가지 발견 | 02 Cards | InsightCards |
| 5 | 핵심 KPI | 03 Numbers | StatGrid |
| 6 | 경쟁사 비교 | 04 Compare | Comparison |
| 7 | 로드맵 | 05 Time | Roadmap |
| 8 | 조직 구조 | 06 Flow | OrgChart |
| 9 | 성숙도 모델 | 07 Shapes | Pyramid |
| 10 | FAQ | 08 Doc | FAQ |
| 11 | 용어집 | 09 Reference | Glossary |

## Step 3 · 컴포넌트 선택 결정트리

```
"카드 형식이 필요" 
  → 동일 가중치·번호? → Features
  → 리스크/문제/해결 같은 의미 카드? → InsightCards
  → 가격·플랜? → Pricing
  → 혼합 사이즈·타일 모자이크? → Bento

"비교"
  → 다열 + 체크마크? → Comparison
  → 2열 키/값? → SpecsTable
  → 우선순위 매핑? → Matrix2x2

"시간"
  → 5단계 프로세스? → Timeline
  → Now/Next/Later? → Roadmap
  → 버전 릴리즈? → Changelog

"숫자"
  → 큰 KPI 3개? → StatGrid
  → 차트? → DataViz
  → 단계 전환율? → Funnel

"관계"
  → 선형? → Flowchart
  → 위계? → OrgChart
  → 망? → NetworkMap
```

## Step 4 · i18n 추가

`assets/i18n.jsx` COPY 객체에 EN/KO 양쪽 mirror.

```jsx
en: {
  hero: {
    headline: "Make every page feel inevitable.",
    sub: "A design system for the long-form web."
  }
},
ko: {
  hero: {
    headline: "모든 페이지를 필연으로.",
    sub: "장문 웹을 위한 디자인 시스템."
  }
}
```

**룰:** 키 완전 mirror. 한쪽에만 키 있으면 fallback 깨짐.

## Step 5 · app.jsx 마운트

```jsx
<App>
  <TopNav />
  <Hero />
  <MeceDivider index="01" title="Marketing" />
  ...
  <MeceDivider index="02" title="Cards" />
  <Features />
  <MeceDivider index="03" title="Numbers" />
  <StatGrid />
  ...
  <Footer />
</App>
```

## Step 6 · 부팅

`assets/index.html`을 출력 폴더에 복사. 자산 19파일 동봉. 사용자가 브라우저로 더블클릭 = 즉시 작동.

**검증 체크리스트:**
- [ ] 그라디언트 본문 단락 ✗
- [ ] 같은 MECE 그룹 중복 ✗
- [ ] divider 순서 01→09
- [ ] image-slot에 alt·aria
- [ ] body 17px 유지
- [ ] inline px 0개

## 산업별 레시피 (시작 템플릿)

| 산출물 | 권장 그룹 시퀀스 |
|---|---|
| **장문 보고서** | Cover → TLDR → 01 Hero → 02 InsightCards → 03 StatGrid → 04 Comparison → 05 Timeline → 08 PullQuote → 09 Footnotes |
| **마케팅 랜딩** | 01 Hero → 02 Bento → 02 Features → 03 StatGrid → 04 Pricing → 08 FAQ → Footer |
| **키노트 덱** | Cover → 01 Hero → 03 StatGrid → 06 Flowchart → 07 Pyramid → 02 InsightCards → ChapterDivider |
| **white paper** | Cover → TLDR → ChapterDivider → 본문(Figure·CodeBlock·MarginNote) → 04 Comparison → 09 Glossary → 09 Footnotes |
| **model card** | Cover → SpecsTable → DataViz → Comparison → Callouts(warn) → Footnotes |
| **release notes** | Hero → Changelog → Callouts(tip) → FAQ |
