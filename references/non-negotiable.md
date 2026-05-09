# Non-Negotiable Rules — 시스템 룰 풀버전

§D 비협상 룰 풀스펙. 위반 시 Prism이 아님.

## 1 · Type

- **Pretendard Variable** 단일. Inter·Roboto·시스템 스택 ✗
- Display 사이즈 **enormous** (clamp 64-144px). Hero = `display-1`·섹션 opener = `display-3`
- 한국어·영어 동일 스케일 — Pretendard가 둘 다 처리
- Letter-spacing 큰 사이즈에서 tight (`--tr-tight: -0.035em`). 절대 loose 화 ✗
- Body `--fs-body: 17px`·`--lh-body: 1.5`. 더 작게 ✗

```css
/* ✅ */
.hero-title { font-size: var(--fs-d1); letter-spacing: var(--tr-tight); }

/* ❌ */
.hero-title { font-family: 'Inter', sans-serif; font-size: 80px; }
```

## 2 · Color

- 배경 **achromatic**: cool gray (`#f4f4f6`) light·pure black (`#000`) dark
- `--grad-prism` 무지개는 **액센트만** — text highlight·ribbon badge·motion bar·brand mark·video scrubber·KPI 큰 숫자·priority quadrant 불릿
- **본문 단락·대면적 surface에 그라디언트 ✗**
- 액센트 텍스트 = `.prism-text` (gradient text-clip)
- 새 색 invent ✗ — `--prism-1..6`에서 pull. 톤 변경은 Tweaks로 전체 팔레트 시프트

```css
/* ✅ */
.kpi-number { background: var(--grad-prism); -webkit-background-clip: text; color: transparent; }

/* ❌ */
.body-paragraph { background: var(--grad-prism); }
```

## 3 · Spacing

- 섹션 = `.section` (huge breathing room) 또는 `.section-tight`
- `--density` tweak이 섹션 padding 곱함 — 컴포넌트별 override ✗
- 12-step 스케일 (`--sp-1..12`)·raw px ✗

```css
/* ✅ */
.feature-card { padding: var(--sp-7); gap: var(--sp-5); }

/* ❌ */
.feature-card { padding: 48px 32px; }
```

## 4 · Imagery

- **항상** `<image-slot>` for 사용자 교체 가능 자리 (hero 제품 샷·video poster·feature 일러스트)
- `.img-placeholder` (줄무늬) for 사용자가 교체 안 할 시각 placeholder
- SVG 손그림 ✗ (차트 = `DataViz` 예외)

```html
<!-- ✅ -->
<image-slot src="" alt="Product hero" aspect="16/9"></image-slot>

<!-- ❌ -->
<svg><path d="M..."/></svg> <!-- 손그림 일러스트 -->
```

## 5 · Motion

- 첫 paint 섹션은 `<Reveal>` 래핑·soft scroll fade-in
- Stagger `delay={i*60}` — 40ms 미만 ✗
- StickyShowcase는 IntersectionObserver로 핀된 콘텐츠 스왑

```jsx
{/* ✅ */}
{items.map((it, i) => (
  <Reveal key={it.id} delay={i * 60}><Card {...it} /></Reveal>
))}

{/* ❌ */}
{items.map((it, i) => (
  <Reveal key={it.id} delay={i * 20}><Card {...it} /></Reveal>  /* 너무 빠름 */
))}
```

## 6 · MECE Section Dividers

장문 문서는 그룹 사이에 `<MeceDivider>`: 가로 룰·prism-tinted index (`01`·`02`...)·그룹 타이틀·모노 서브타이틀.

**한 그룹당 1 divider·순서 01→09.** 그룹 반복 ✗. 한 토픽이 두 카드 섹션이면 = 한 Cards 그룹 안 두 sub-block.

## 7 · 톤 (Voice)

**헤드라인:** 짧다·선언적·균형. **한 줄 한 아이디어.**
- ✅ "Make every page feel inevitable."
- ❌ "Build beautiful pages with our component library."

**본문:** 단호하나 조용. 하이프 단어 ✗ ("revolutionary"·"game-changing"·"powerful")·느낌표 ✗.

**한국어:** 영어 리듬 매칭 — 짧은 문장·과한 합니다체 ✗·*의도* 번역.

## 금기 8

- ❌ filler 통계·아이콘으로 빈 자리 채움. **천 번의 No, 한 번의 Yes**
- ❌ MECE 그룹 반복. "또 하나의 카드 섹션" 손이 가면 다른 그룹 아닌지 점검
- ❌ 벤더 로고·마스코트·인식 가능한 제품 실루엣 ✗
- ❌ 세 번째 폰트 도입 ✗
- ❌ 큰 fill에 prism gradient ✗ — 시스템 희석
- ❌ 인라인 `style={{ padding: 96 }}` ✗ — spacing 토큰 사용
- ❌ 실제 제품 브랜드 위조 ✗. "애플 스타일"이라 해도 시스템을 짓는 것·브랜드를 짓는 것 ✗
- ❌ 그라디언트로 본문 단락·대면적 채움
