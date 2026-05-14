---
name: prism-design
description: |
  Prism 디자인시스템 호출·조립 엔진. 무채색+프리즘 액센트로 장문보고서·키노트덱·랜딩·white paper·model card·release notes 산출. 9 MECE×40+ 컴포넌트·Pretendard·EN/KO. 진단·생성 2모드.
  P1: 프리즘디자인, prism, 프리즘, 프리즘시스템, 장문보고서, long-scroll, 키노트덱, keynote deck, deck stage, 슬라이드덱, 랜딩페이지, white paper, model card, release notes, MECE divider, Pretendard, prism-text, 그라디언트액센트, bento, sticky showcase, edu menu, hero, KPI, pull quote, 무채색디자인, 9MECE, 한장보고서, 부팅골격, samples 골격, voice-tone, mece-doctrine, 모션카탈로그, motion, reduced-motion, 접근성.
  P2: 만들어줘, 조립해줘, 디자인해줘, 페이지만들어줘, 보고서디자인, 랜딩만들어줘, 덱만들어줘, build, assemble, design report, create landing.
  P3: long-scroll document, marketing landing, keynote deck, white paper, model card, release notes, prism design, bilingual EN-KO.
  P4: 장문 보고서 출고시, 키노트 덱 작성시, 제품 마케팅 페이지 빌드시, IR 내러티브, 릴리즈노트 페이지 시.
  P5: .html로, prism으로.
  NOT: 1page 강도·H1~H13(→apple-canvas), 단일화면UI(→ui-designer), .md div(→html-div-style), 글본문(→shaper-skill), BP구조(→bp-guide), 사업전략(→biz-skill), 카피(→copywriting-skill), 단일프레임 본질압축(→visualize-skill), 대시보드·관리자UI ✗.
license: Proprietary. Internal use.
---

# Prism Design System

장문 산출물·키노트 덱·마케팅 페이지를 1턴에 조립하는 디자인시스템 엔진. 무채색 베이스 + 프리즘 그라디언트 액센트.

## ⛔ 절대규칙 5

| # | 룰 | 위반 시 |
|---|---|---|
| 1 | **자산 어휘 단일** — `assets/tokens.css` 토큰만 사용. 새 색·새 폰트·raw px 도입 ✗ | 시스템 일관성 붕괴 → ② 재진입 |
| 2 | **MECE 그룹 9개 외 신설 ✗** — 모든 컴포넌트는 9그룹 중 하나에 귀속. 두 그룹 걸치면 분리 | MECE 본질 위반 |
| 3 | **그라디언트 = 액센트 한정** — 본문 단락·대면적 fill에 `--grad-prism` 적용 ✗. `.prism-text`로 텍스트 액센트만 | 시스템 톤 희석 |
| 4 | **자산 수정 ✗** — `assets/` 19파일은 read-only. 사용자 페이지에서 컴포넌트 조립만 | 시스템 분기·후속 호환 ✗ |
| 5 | **Pretendard 단일** — Inter·Roboto·system stack 추가 ✗ | 타이포 일관성 |
| 6 | **C8 액센트 = Cre8orClub 전용** — `--c8`(#39FF14)는 Cre8orClub·크리에이터클럽 컨텍스트에서만. `--grad-prism`에 합성 ✗·일반 페이지 본문 fill ✗·텍스트/CTA/로고마크 액센트만 | 브랜드 의미 보존 |
| 7 | **형광펜 = `.hl` 클래스만** — `linear-gradient(to top, color 50%, transparent 50%)` 절반 fill 방식 ✗. `box-decoration-break: clone` + `padding: 0 6px` (v2.0 px 고정·세로 0·`.hl-block`=8px·`.hl-tight`=4px) + `border-radius: 999px` 풀 fill 캡슐만. 다크모드에서도 fill 비비드 유지·텍스트 `var(--hl-ink)` 검정 강제·opacity·투명 처리 ✗ | 가독성·줄바꿈 짤림 방지 |

## §0 INTENT — 의도 결정 (디폴트 자동, 명시 시 override)

| 의도 | 디폴트 모드 | Density | Temperature |
|---|---|:-:|---|
| **REPORT** 분석·시리즈물·복기 | 생성 + 무채색 + MECE 9 | 4 | cold/neutral |
| **WHITEPAPER** IR·산업분석·연구 | 생성 + 무채색 + Doc+Numbers 중심 | 5 | neutral/quiet |
| **LANDING** 제품·서비스 마케팅 | 생성 + 액센트 + Marketing+Cards | 2~3 | warm/hot |
| **DECK** 키노트·발표 | slides/ 부팅 | 2 | hot |
| **DIAGNOSE** 기존 시안 평가 | 진단 | — | — |

**Density 1~5**: 1=iconic / 2=brand narrative / 3=structured / 4=evidence-heavy / 5=decision document. evidence-heavy를 lifestyle로 ✗.

**Temperature**: cold(analytical)·neutral(institutional)·warm(human)·hot(campaign)·quiet(museum). 무채색 베이스 + 그라디언트 1회 안에서도 *온도*는 다름. WHITEPAPER cold ↔ LANDING hot.

## §A 발동·진입

**발동 조건:** P1·P2 hit + 산출 형식이 장문 페이지(.html). 단일 컴포넌트만 필요 = ui-designer로 라우팅. .md div 래핑만 = html-div-style.

**진입:** 자료 파악(목차·섹션 수·언어) → 모드 결정(진단·생성) → MECE 그룹 매핑 → 컴포넌트 선택 → 부팅 골격 선택(`samples/` 5종 또는 `slides/` 키노트) → index.html 부팅.

**카피 작성 시 voice-tone 정본 강제:** 헤드라인·본문·CTA 작성 직전 `→ references/voice-tone.md` 1회 통과. hype 어휘·느낌표·emoji 적발 = 재작성.

## §B 9 MECE 라우팅표 (compressed)

`→ references/mece-doctrine.md` (전체 카탈로그·use-when·금기·확장 6단계 — NEW 정본 흡수)
`→ references/mece-catalog.md` (요약 카탈로그)

| 그룹 | 용도 | 핵심 컴포넌트 |
|---|---|---|
| 01 Marketing | 스토리텔링 인트로 | Hero · EduMenu · StickyShowcase · VideoModule |
| 02 Cards | 반복 카드 | Bento · Features · InsightCards · Pricing |
| 03 Numbers | KPI·viz | StatGrid · DataViz · Funnel |
| 04 Compare | side-by-side | Comparison · SpecsTable · Matrix2x2 |
| 05 Time | 시간 시퀀스 | Timeline · Roadmap · Changelog |
| 06 Flow | 관계 | Flowchart · OrgChart · NetworkMap |
| 07 Shapes | 기하 메타포 | Pyramid · Venn · GeoMap · Scorecard |
| 08 Doc | 문서 본문 | Cover · ChapterDivider · TLDR · PullQuote · Callouts · Figure · MarginNote · CodeBlock · DataTable · FAQ |
| 09 Reference | 후미 | Glossary · Footnotes |
| Infra | 항상 ON (장문) | ReadingProgress · StickyTOC · MeceDivider |

**라우팅 룰:** "feature list" → Features. "4개 risk 카드" → InsightCards. "plan 비교" → Pricing. **중복 금지** — 같은 페이지 두 카드 섹션 = 한 그룹의 sub-block.

## §C 모드 2개

### Mode 1 · 진단 (DIAGNOSE)
사용자가 갖고 온 페이지·시안·텍스트가 Prism 적합한가? MECE 어디에 매핑?

**산출:** 진단 1쪽 — 적합도(O/X·이유)·MECE 매핑(섹션→그룹→컴포넌트)·금기 위반 적발·재구성 제안

**판정 기준:**
| 적합 | 부적합(다른 시스템) |
|---|---|
| 장문 보고서·랜딩·덱·white paper·model card·release notes | 대시보드·관리자UI·dense data UI·chat·실시간 |

### Mode 2 · 생성 (BUILD)
사용자 콘텐츠 → MECE 매핑 → index.html 조립.

**6단계 파이프라인:**
1. **콘텐츠 inventory** — 섹션 목록·언어(EN/KO)·이미지 슬롯 위치
2. **MECE 매핑** — 각 섹션을 9그룹 중 하나로. 표로 출력
3. **컴포넌트 선택** — 그룹 안에서 정확한 컴포넌트(룰: feature list ≠ insight ≠ pricing)
4. **i18n 추가** — EN/KO 키 mirror (i18n.jsx)
5. **app.jsx 마운트** — MECE divider 사이에 그룹 순서대로
6. **부팅** — index.html에 자산 19파일 link/script 박제. 사용자가 브라우저로 열면 즉시 작동

`→ references/build-recipe.md` (콘텐츠 → 컴포넌트 선택 결정트리·예시)

## §D 비협상 룰 (자산 룰 박제)

`→ references/non-negotiable.md` (자산 룰 전체)
`→ references/voice-tone.md` (카피·톤·아이코노그래피 — NEW 정본 흡수)

**핵심 5축:**
- **Type:** Pretendard Variable 단일·display clamp 64-144px·`--tr-tight: -0.035em`·body 17px
- **Color:** 배경 무채색(`#f4f4f6`/`#000`)·`--grad-prism`은 액센트만·`.prism-text` 클래스로 텍스트 그라디언트·새 색 신설 ✗
- **Spacing:** `.section`·`.section-tight` + `--sp-1..12` 토큰·raw px ✗·`--density` tweak으로 글로벌 조절
- **Imagery:** `<image-slot>` 태그(사용자 교체 가능)·`.img-placeholder`(고정 줄무늬)·SVG 손그림 ✗(차트 예외)
- **Motion:** `<Reveal>` 래핑·stagger `delay={i*60}`·40ms 미만 ✗·StickyShowcase는 IntersectionObserver

## §E NOT — 영토 분리

| 인접 스킬 | 차이 |
|---|---|
| **apple-canvas** | 1page·H1~H13 결정주의·비비드 풀채도. Prism은 장문·무채색 베이스 |
| **ui-designer** | 단일화면·피그마파싱·PRD frame. Prism은 다중섹션 페이지 조립 |
| **html-div-style** | 옵시디언 .md 안 div 래퍼. Prism은 standalone HTML 페이지 |
| **shaper-skill** | 글본문·문장 다듬기·NYT 산출물. Prism은 디자인 컨테이너 |
| **bp-guide** | BP·피치덱 구조. Prism은 시각 컨테이너로 활용 가능하나 본질 ✗ |
| **visualize-skill** | 단일 프레임 본질압축. Prism은 다섹션 조립 |

## §F 산출 프로토콜

**디렉터리 구조 (사용자 출력 폴더):**
```
{output}/
├── index.html              ← 부팅 진입점 (assets/ 참조)
├── tokens.css              ← assets/에서 복사
├── styles*.css (6개)       ← assets/에서 복사
├── *.jsx (11개)            ← assets/에서 복사 (또는 인라인)
├── image-slot.js
└── print.css
```

**부팅 골격 5종 (assets/samples/):** 처음부터 짜지 말고 골격 1개 복사 후 콘텐츠 교체.
| 골격 | 용도 |
|---|---|
| `samples/landing.html` | 마케팅 랜딩 페이지 |
| `samples/report.html` | 장문 보고서·white paper |
| `samples/pitch.html` | IR·피치덱 본문 |
| `samples/dashboard.html` | KPI 한 장 (Numbers 그룹 중심) |
| `samples/index.html` | 9 MECE 전부 통과하는 풀 데모 |

**키노트덱 모드 (assets/slides/):** 슬라이드 형식 산출 시.
- `slides/index.html` — 부팅 진입점
- `slides/deck-stage.js` — 키노트 엔진 (1709줄, title·section·big-quote·stat·comparison·close 슬라이드 타입)

**Specimen 검증 (assets/preview/):** 23개 카드(브랜드·컬러·타입·스페이싱·컴포넌트). 디자인 QA 시 대조용. 사용자 출력엔 포함 ✗.

**최소 부팅:** `assets/index.html` 또는 `assets/samples/{type}.html`을 그대로 사용자 폴더에 복사 → 자산 동봉 → 브라우저 더블클릭으로 즉시 작동(CDN·Babel standalone).

**커스터마이즈 진입점 5:**
| 위치 | 무엇을 |
|---|---|
| `tokens.css` | 색·타입스케일·spacing — 토큰만 변경 |
| `i18n.jsx` | EN/KO 카피 |
| `app.jsx` | 섹션 순서·MECE divider 라벨·tweaks 디폴트 |
| `sections-*.jsx` | 새 컴포넌트 추가 (MECE 그룹 결정 후) |
| `<image-slot>` | 사용자 이미지 자리 |

**확장 절차 (새 섹션):**
`→ references/extend.md` (i18n key mirror·sections-*.jsx 등록·styles-*.css `===== SECTION =====` 블록·app.jsx mount 6단계)

## Gotchas

| 함정 | 대응 |
|---|---|
| 그라디언트로 본문 단락 채움 | `.prism-text`는 헤드라인·KPI·액센트 텍스트 한정. 단락 본문은 무채색 |
| 카드 섹션 2개 연달아 (Features 다음 Bento) | MECE 위반. 같은 그룹 내 sub-block으로 통합·또는 그룹 다르면 divider 끼움 |
| Pricing을 feature list로 사용 | Pricing은 "결정 CTA 카드". 단순 기능 나열 = Features |
| Matrix2x2 좌상단 우선 무시 | 좌상단 = 항상 winner. 다른 배치 = 시스템 의도 위반 |
| 인라인 padding/margin px | `--sp-N` 토큰만. 컴포넌트별 override = 시스템 붕괴 |
| 새 폰트 추가 (Inter·Roboto) | Pretendard만. Korean·English·Japanese 통합 처리 |
| MeceDivider 그룹 순서 뒤섞기 | 01→09 순서 강제. 점프·역순 ✗ |
| StickyShowcase 단계 텍스트만 | 이미지 슬롯 필수 — 핀된 시각 자산이 본질 |
| 형광펜이 글자 절반만 덮음·descender 짤림 | `linear-gradient 50%` 방식 ✗. `.hl` 클래스 사용 — 풀 fill + padding으로 글자 전체 감쌈 |
| 다크모드에서 형광펜 안 보임·텍스트 안 읽힘 | `.hl`은 라이트·다크 동일 비비드 fill·검정 텍스트 강제. opacity·color-mix 톤다운 ✗ |
| 줄바꿈 시 형광펜 양 끝 안 둥글어짐 | `box-decoration-break: clone` 필수 (`.hl`에 박제됨). 다른 클래스로 형광펜 재구현 ✗ |
| 작은 본문 글자에 `.hl` 답답함 | `.hl-tight` 사용 — 패딩 0.04em·라운드 0.3em으로 축소 |
| **AI 평균값 클리셰** | 검은 배경 디폴트·neon gradient·glowing orb·glass card 남용·centered hero only·identical 3카드 그리드·fake dashboard. *디자인이 평균 SaaS 랜딩처럼 되면 INTENT부터 재선택* |
| **섹션 반복** | 같은 구조 2회 이상 ✗. MECE 9 그룹 = *섹션마다 다른 그룹*. 카드 → 다이어그램 → 테이블 → 에디토리얼 순환 |
| **"못생겨도 되는 영역"** | tables·captions·footnotes·DataTable·Glossary는 decoration ✗. evidence-heavy(Density 4~5)는 *예쁨보다 신뢰감*. `.prism-text`·gradient 적용 ✗ |
| **모션 카탈로그** | 11분류 50+ 패턴·Apple 어휘·강도 0~5·duration/easing 표·reduced-motion 폴백 — 정답 ✗·*어휘 사전* → `→ references/motion-catalog.md` |
| **시각효과 카탈로그** | 9 계열 50+ 효과·Apple 10 어휘·조합 레시피 5종·Anti-AI — *어휘 사전·정답 ✗* → `→ references/visual-effects-catalog.md` |
| **레이아웃 카탈로그** | 10 계열 50+ archetype·Apple 8 패턴·조합 레시피·Anti-Generic·기존 박제 인덱싱 — *어휘 사전·정답 ✗* → `→ references/layout-catalog.md` |
| **한 페이지 = 다른 레이아웃 mix** | Hero → Explanation → Evidence → Decision → CTA. *같은 archetype 2회 이상 반복 ✗*. 모든 섹션 카드 그리드 ✗ |
| **모션 강약 분포** | 한 페이지 안 *모든 섹션 같은 강도 ✗*. 1개 섹션만 페이지 최대 강도 N, 2~3개 N-1, 나머지 N-2 이하, 1+ 정적 영역 의무 (Density 3+ 적용) |
| **AI 평균값 모션 클리셰** | 모든 카드 같은 hover·모든 섹션 같은 fade up·particle·constant gradient·neon glow·cursor follow (진지 문서)·bouncy easing (프리미엄)·blur text reveal — 의미 없는 모션 = 제거 |
| **reduced-motion 폴백** | 모든 HTML 산출물 `@media (prefers-reduced-motion: reduce)` 의무. parallax·scroll scrub·zoom·3D tilt 비활성화·fade로 대체. 위반 = 접근성 FAIL |

## ❌WRONG / ✅CORRECT

```html
<!-- ❌ -->
<p style="background: var(--grad-prism); padding: 96px;">
  Prism is a revolutionary design system!
</p>

<!-- ✅ -->
<section class="section">
  <h2 class="display-3">
    Make every page feel <span class="prism-text">inevitable</span>.
  </h2>
</section>
```

```jsx
// ❌ 카드 섹션 중복
<Features /> <Bento /> <Pricing />  // 모두 02 Cards 그룹 — divider 없이 병렬

// ✅ MECE divider로 그룹 분리
<MeceDivider index="02" title="Cards" />
<Features />
<MeceDivider index="03" title="Numbers" />
<StatGrid />
```

## Typography Roles (16스케일에 *역할* 매핑)

| 역할 | 의미 | Prism 위치 |
|---|---|---|
| Voice | 주 감정·개념 (Hero·display) | `.display-1~3` 64~96px |
| System | 라벨·내비·메타 (eyebrow·MECE divider 인덱스) | 12~14px |
| Reading | 본문 (verbatim 보존) | 17~19px body·body-lg |
| Evidence | 수치·캡션·각주·spec | 12~15px·mono·`.caption` |
| Accent | 제한적 강조 (`.prism-text`·`.hl`) | 페이지당 1~2회 |

## Color Roles (기존 토큰에 *역할* 라벨)

| 역할 | Prism 토큰 |
|---|---|
| ground | `--bg-canvas`·`--bg-surface`·`--bg-sunken` (무채색) |
| text | `--fg-primary`·`--fg-secondary`·`--fg-tertiary`·`--fg-on-dark-*` |
| authority | `--fg-primary` (검정 본문) |
| signal | `--c8`·`--prism-3` 등 (페이지당 1개·솔리드) |
| culture | `--prism-1~6` gradient·`--hl-*` 형광펜 5색 |
| depth | `--line-soft`·`--bg-sunken`·`--bg-elev` |

→ "예쁜 색"이 아니라 *역할*로 선택. signal은 페이지당 1개. culture는 gradient/형광펜 — strip 패턴만.

## 톤

헤드라인: 짧다·선언적·균형. **한 줄 한 아이디어.** "혁신적·게임체인저·강력한" ✗·느낌표 ✗.

본문: 단호하나 조용. 한국어는 짧은 문장·과한 합니다체 ✗·의도 번역.


## 안전성 · 접근성 (v1.1)

| 항목 | 상태 |
|---|---|
| innerHTML | 정적 템플릿만(사용자 입력 0) → XSS-safe. `// SAFE-innerHTML:` 주석 박제 |
| 외부 CDN | React/Babel/Pretendard 모두 SRI(`integrity` + `crossorigin`) 적용 |
| `!important` | print.css 미디어쿼리 외부 0건 (tokens.css 자가위반 제거 완료) |
| 컨테이너 너비 | 880/720/560/220px 매직넘버 → `--container-{wide,medium,narrow,thin}` 토큰화 |
| `:focus-visible` | 글로벌 outline 박제 (`--focus-ring`, `--focus-ring-offset`) |
| 키보드 네비 | overlay 컨트롤 `aria-label`·`aria-live` 적용 |

NOT: motion·layout·visual-effects 카탈로그는 별도 스킬에서 관리.
