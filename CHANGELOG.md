# prism-design CHANGELOG

## v1.6 — 2026-05-14 (형광펜 px 고정·세로 0)

### 변경
- `.hl` padding `-0.05em 0.5em` → **`0 6px`**
- `.hl-tight` padding `-0.08em 0.36em` → **`0 4px`**
- `.hl-block` padding `-0.02em 0.7em` → **`0 8px`**
- 좌우 padding **px 절대값**으로 캡 · 세로 padding **0** 강제
- `box-decoration-break: clone` · `border-radius: 999px` 유지

### 사유
v1.5 음수 em padding은 본문(16px)에서만 정상. **큰 글자(20px+)에서 가로폭·세로폭 폭발** → 줄바꿈 시 알약이 글자보다 과하게 부풀고 line-height 누적으로 줄간격 깨짐. px 고정은 글자 크기와 무관하게 동일 절대값 → **모든 위계(64px hero ~ 13px caption)에서 "글자보다 아주 약간만 큰" 알약 보장**. (CSS 음수 padding은 0으로 처리되므로 v1.5 사양은 형식상 무의미했음 — v2.0에서 0으로 명시.)

### 주의
- em 기반 padding 사용 ✗ — 큰 글자에서 폭발
- 세로 padding > 0 사용 ✗ — line-height 누적 → 줄간격 파괴
- 본문 인라인이면 `.hl-tight` (4px)·헤드라인 이상이면 `.hl-block` (8px) 권장

---


## v1.5 — 2026-05-13 (형광펜 키 추가 축소·음수 padding)

### 변경
- `.hl` padding `0.02em 0.5em` → **`-0.05em 0.5em`** (상하 음수)
- `.hl-tight` padding `0em 0.36em` → **`-0.08em 0.36em`**
- `.hl-block` padding `0.05em 0.7em` → **`-0.02em 0.7em`**
- 좌우 padding·`border-radius: 999px` 유지

### 사유
v1.4도 형광펜 키가 글자보다 살짝 높음. 상하 padding을 음수로 주어 fill 영역을 글자 내부로 안쪽 압축. 글자 자체 위치·크기 영향 ✗ (background fill 영역만 축소).

### 주의
음수 padding이 너무 크면(`-0.2em` 이상) 글자 위아래가 fill 밖으로 튀어나옴. 현 사양은 글자 키의 5~15% 내부 압축만.

## v1.4 — 2026-05-13 (형광펜 키높이 축소)

### 변경
- `.hl` padding `0.1em 0.5em` → **`0.02em 0.5em`** (상하 80% 축소)
- `.hl-tight` padding `0.06em 0.36em` → **`0em 0.36em`** (본문 인라인용·상하 0)
- `.hl-block` padding `0.15em 0.7em` → **`0.05em 0.7em`** (헤드·히어로용·상하 1/3)
- 좌우 padding·`border-radius: 999px` 유지 (알약 폭·반원 모서리 보존)

### 사유
v1.3 padding은 상하 fill이 너무 두꺼워 형광펜 키가 글자 위아래로 부푼 띠처럼 보임. 첨부 참조 이미지의 분홍 형광펜처럼 글자 키와 거의 동일한 타이트 fill로 축소. 알약 모양(좌우 반원)은 유지.

## v1.3 — 2026-05-13 (형광펜 알약 모양 강화)

### 변경
- `.hl` border-radius `0.4em` → `999px` (완전 알약·pill)
- `.hl` padding `0.08em 0.32em` → `0.1em 0.5em` (좌우 여백 ↑·알약감 ↑)
- `.hl-tight` padding `0.04em 0.24em` → `0.06em 0.36em`·radius `0.3em` → `999px`
- `.hl-block` padding `0.12em 0.48em` → `0.15em 0.7em`·radius `0.5em` → `999px`

### 사유
0.4em radius는 "둥근 사각형"에 가까움. 첨부 Apple Education Community 페이지의 c8 green 형광펜처럼 양 끝이 반원인 알약 모양이 본질. 999px = 어떤 폰트 크기에도 자동 pill.

## v1.2 — 2026-05-13 (형광펜 3스킬 정본 확정)

### 변경
- prism의 `.hl` rounded-pill 형광펜 시스템이 apple-canvas·teenage-design의 정본으로 **승격**
- prism 본체는 무변경 — 기존 사양 그대로 3스킬 공통 표준
- 의의: 형의 모든 디자인 산출물에서 형광펜 = `.hl` 단일 클래스

### 사양 (기준 정본·재확인)
- 클래스 = `.hl` + `.hl-{yellow|green|c8|pink|blue}`
- fill = 풀 채도 캡슐 (padding 0.08em 0.32em · border-radius 0.4em)
- 글자색 = `--hl-ink #0A0A0C` 검정 강제
- 변형 = `.hl-tight`(본문) / `.hl-block`(헤드·히어로)
- 줄바꿈 = `box-decoration-break: clone`
- 다크모드 = fill 비비드 유지·opacity ✗

## v1.1 — 2026-05-12 (skill-doctor 처방)

### 코딩 품질
- 매직 px 컨테이너 너비(880/720/560/220) → `--container-{wide,medium,narrow,thin}` 토큰화
- `tokens.css` 자가위반 `!important` 제거 (prism `.hl color`)

### 안전성
- innerHTML 정적 템플릿 위치에 `// SAFE-innerHTML:` 주석 박제 (XSS-safe 명시)
- prism `!important` 비-print 1건 정당성 주석 추가

### 접근성 (a11y)
- 글로벌 `:focus-visible` outline 박제 (3 스킬 모두)
- 장식 SVG `aria-hidden="true"` 박제 (teenage components/samples)
- inline `style="margin"` → 유틸 클래스 추출 (teenage cover)
