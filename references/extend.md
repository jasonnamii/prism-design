# Extend — 새 섹션·tweak·언어 추가

## 새 섹션 추가 (6단계)

1. **MECE 그룹 결정** — 9그룹 중 정확히 하나. 안 맞으면 시스템이 안 받는 신호 (재고)
2. **i18n.jsx EN/KO 양쪽 키 mirror** — 누락 시 fallback 깨짐
3. **컴포넌트 작성** — 매칭 `sections-*.jsx`에 추가·또는 새 파일 + `window.PRISM_*` 등록
4. **Reveal 래핑** — 최상단 블록·`Eyebrow → display headline → body sub` 순
5. **CSS** — 매칭 `styles-*.css` `===== SECTION NAME =====` 블록 안
6. **app.jsx 마운트** — 해당 MECE 그룹 안에 mount

## 새 Tweak 추가 (3단계)

1. `app.jsx` `TWEAK_DEFAULTS` 블록(`EDITMODE-BEGIN`/`END` 마커 안 — 유효 JSON 유지)에 키 + 디폴트 추가
2. `PrismTweaks`에 `<TweakSlider>`·`<TweakRadio>`·`<TweakSelect>` 추가
3. `useEffect`로 `documentElement`에 CSS 커스텀 프로퍼티 set

## 새 언어 추가 (2단계)

1. `i18n.jsx` `COPY` 객체에 세 번째 top-level 키 (예: `ja`) 추가·모든 키 mirror
2. `app.jsx` 언어 `<TweakRadio>`에 옵션 추가

## 컴포넌트 신설 vs 재사용

| 신설 검토 | 재사용 |
|---|---|
| 9그룹 안에서 정확히 매칭되는 컴포넌트 ✗ | 기존 컴포넌트로 80% 표현 가능 |
| 의미·구조 자체가 다름 (ex: 데이터 시각화 새 타입) | variant·size·tone props로 충분 |

**룰:** 의심되면 재사용. 새 컴포넌트 = 마지막 수단.

## 자산 디렉터리 구조

```
assets/
├── tokens.css              ← 토큰 (수정시 전 시스템 영향)
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
└── index.html              ← 부팅 진입점·자산 19개 link/script
```

**금기:**
- `tweaks-panel.jsx`·`image-slot.js`는 starter component — 수정 ✗
- `tokens.css` 변경은 전체 시스템 톤 시프트 — 신중
