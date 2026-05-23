# Extend — 자산 카탈로그·새 섹션·강도 분기

## 0. 강도 분기 (v260523 신설) — STANDARD vs AMPED

| 볼륨 | 본질 | 호출 트리거 | 채도·면적 |
|---|---|---|---|
| **STANDARD ★ (디폴트)** | 무채색 베이스 + 프리즘 액센트 미니멀. 장문 문서·white paper·model card 정본 | 호출만 / "standard로" | 액센트 ≤10%·hairline 정본·풀필 hero 1회 |
| **AMPED** | 프리즘 액센트 풀색 + bento 풀필·gradient-text·키노트 덱 강도 | "AMPED로" / "강하게" / "키노트로" / "덱으로" | 액센트 ≤30%·gradient 페이지 1회·풀필 hero·KPI 3회까지 |

**채도 신성불가침 (양 볼륨 공통):** S≥90%·L 40~60%. 파스텔/머디/뮤트 ✗. AMPED라도 채도 죽이는 opacity·color-mix(white) ✗.

**적용:** `tokens.css` `[data-volume="standard"]`(디폴트)·`[data-volume="amped"]` 셀렉터로 자동 분기. AMPED는 `--accent-saturation: 1`·`--hero-fill: solid`·`--gradient-allowed: 1` 강제.

---

## 1. 자산 카탈로그 — preview/ (23 파일) · samples/ (5 파일)

### preview/ — 컴포넌트 카탈로그 (디자인 시안 카드)

| 파일 | 카테고리 | 언제 호출 |
|---|---|---|
| `colors-light.html` | Color | Light 톤 디자인 결정시 |
| `colors-dark.html` | Color | Dark 톤 디자인 결정시 |
| `colors-prism.html` | Color | 프리즘 액센트 5스톱 시각 확인 |
| `colors-aurora.html` | Color | aurora gradient 사용 사례 |
| `brand-mark.html` | Brand | 워드마크·로고 시안 |
| `brand-icons.html` | Brand | 아이콘 라이브러리 |
| `brand-prism-text.html` | Brand | prism-text 유틸 적용 사례 |
| `type-display.html` | Typography | display 64~144 clamp 확인 |
| `type-headlines.html` | Typography | h1~h3 시각 확인 |
| `type-body.html` | Typography | body 17 + 리딩 시각 확인 |
| `type-bilingual.html` | Typography | EN/KO 미러 정합 확인 |
| `spacing-scale.html` | Spacing | sp-1~sp-12 시각 |
| `spacing-radius.html` | Spacing | radius 토큰 시각 |
| `spacing-shadows.html` | Spacing | elevation/shadow 시각 |
| `spacing-motion.html` | Motion | timing 토큰 시각 |
| `components-buttons.html` | Components | button variants |
| `components-cards.html` | Components | card patterns |
| `components-pills.html` | Components | pill·badge·tag |
| `components-callouts.html` | Components | callout·note·warn |
| `components-forms.html` | Components | input·select·textarea |
| `components-specs.html` | Components | spec table·readout |
| `components-images.html` | Components | image-slot·figure |
| `_card.css` | Style | preview 카드 공통 스타일 |

**용도:** 형이 디자인 결정할 때 "이거 어떻게 생겼지" 즉시 시각 참조. 신규 컴포넌트 신설 전 반드시 1회 grep — 80% 재사용 가능.

### samples/ — 완성형 페이지 5종 (시작 골격)

| 파일 | 페이지 타입 | 부팅 골격 |
|---|---|---|
| `index.html` | 자산 인덱스 | 전체 시작점 |
| `landing.html` | 마케팅 랜딩 | LANDING INTENT 정본 |
| `report.html` | 장문 보고서·white paper | REPORT/WHITEPAPER INTENT 정본 |
| `pitch.html` | 키노트 덱 (AMPED 디폴트) | DECK INTENT 정본 |
| `dashboard.html` | 데이터 대시보드 | DIAGNOSE INTENT 정본 |

**용도:** 신규 페이지 = samples/ 골격 복사 → 콘텐츠 교체. 처음부터 작성 ✗.

### slides/ — 키노트 엔진

| 파일 | 역할 |
|---|---|
| `deck-stage.js` | 키노트 무대 컨트롤러 (navigation·timing·reveal) |
| `index.html` | 덱 진입점 |

---

## 2. 자산 디렉터리 구조

```
assets/
├── tokens.css              ← 토큰 SSOT (수정시 전 시스템 영향)
├── styles.css              ← Marketing
├── styles-mece.css         ← MECE divider
├── styles-data.css         ← Stats/Quote/Timeline/...
├── styles-viz.css          ← InsightCards/Roadmap/...
├── styles-doc.css          ← Cover/Chapter/Pyramid/...
├── print.css               ← 인쇄
├── i18n.jsx                ← EN/KO 카피
├── primitives.jsx          ← Button/Eyebrow/Reveal/Nav/Footer
├── sections-marketing.jsx  ← Hero/Bento/StickyShowcase/VideoModule
├── sections-content.jsx    ← EduMenu/Features/SpecsTable/Pricing
├── sections-data.jsx       ← StatGrid/PullQuote/Timeline/Comparison/...
├── sections-viz.jsx        ← InsightCards/Roadmap/Flowchart/Funnel/...
├── sections-doc.jsx        ← Cover/Chapter/TLDR/Figure/...
├── sections-shapes.jsx     ← Pyramid/Venn/NetworkMap/GeoMap/Scorecard
├── tweaks-panel.jsx        ← 시작 컴포넌트 (수정 ✗)
├── image-slot.js           ← 시작 컴포넌트 (수정 ✗)
├── app.jsx                 ← 루트 + MECE divider + theme/lang/tweaks
├── index.html              ← 부팅 진입점
├── preview/                ← 컴포넌트 카탈로그 23종 (디자인 결정 참조)
├── samples/                ← 완성형 페이지 5종 (부팅 골격)
└── slides/                 ← 키노트 엔진
```

**금기:**
- `tweaks-panel.jsx`·`image-slot.js`는 starter component — 수정 ✗
- `tokens.css` 변경은 전체 시스템 톤 시프트 — 신중
- `preview/` 파일 임의 신설 — 컴포넌트 카탈로그 일관성 깨짐
- `samples/` 골격을 수정해 산출물로 ✗ — 복사 후 작업

---

## 3. 새 섹션 추가 (6단계)

1. **MECE 그룹 결정** — 9그룹 중 정확히 하나. 안 맞으면 시스템이 안 받는 신호 (재고)
2. **i18n.jsx EN/KO 양쪽 키 mirror** — 누락 시 fallback 깨짐
3. **컴포넌트 작성** — 매칭 `sections-*.jsx`에 추가·또는 새 파일 + `window.PRISM_*` 등록
4. **Reveal 래핑** — 최상단 블록·`Eyebrow → display headline → body sub` 순
5. **CSS** — 매칭 `styles-*.css` `===== SECTION NAME =====` 블록 안
6. **app.jsx 마운트** — 해당 MECE 그룹 안에 mount

## 4. 새 Tweak 추가 (3단계)

1. `app.jsx` `TWEAK_DEFAULTS` 블록(`EDITMODE-BEGIN`/`END` 마커 안 — 유효 JSON 유지)에 키 + 디폴트 추가
2. `PrismTweaks`에 `<TweakSlider>`·`<TweakRadio>`·`<TweakSelect>` 추가
3. `useEffect`로 `documentElement`에 CSS 커스텀 프로퍼티 set

## 5. 새 언어 추가 (2단계)

1. `i18n.jsx` `COPY` 객체에 세 번째 top-level 키 (예: `ja`) 추가·모든 키 mirror
2. `app.jsx` 언어 `<TweakRadio>`에 옵션 추가

## 6. 컴포넌트 신설 vs 재사용

| 신설 검토 | 재사용 |
|---|---|
| 9그룹 안에서 정확히 매칭되는 컴포넌트 ✗ | 기존 컴포넌트로 80% 표현 가능 |
| 의미·구조 자체가 다름 (ex: 데이터 시각화 새 타입) | variant·size·tone props로 충분 |
| preview/ 그어디에도 시각 매칭 ✗ | preview/ 1개 이상 매칭됨 |

**룰:** 의심되면 재사용. 새 컴포넌트 = 마지막 수단. **신설 전 preview/ 23종 1회 grep 의무.**

---

## 7. AMPED 모드 디자인 룰 (v260523 신설)

AMPED는 STANDARD 헌법을 깨지 않는다. *액센트 면적·gradient 허용량만* 풀어준다.

| 항목 | STANDARD | AMPED |
|---|---|---|
| 액센트 면적 | ≤10% | ≤30% |
| gradient 5스톱 | 0회 (단색만) | 페이지당 ≤1회 |
| 풀필 hero | 0~1회 | ≤2회 |
| KPI 풀필 | hairline | 풀필 ≤3개 |
| bento 풀필 색 | ✗ | ≤2칸 |
| 채도 | S≥90% | S≥90% (불변) |
| MECE divider | hairline | hairline (불변) |

**호출 자동 매핑:**
- "AMPED로·강하게·키노트로·덱으로" → `data-volume="amped"`
- "standard로·문서로·white paper로·기본으로" → `data-volume="standard"` (디폴트)
