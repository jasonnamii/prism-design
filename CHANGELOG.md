# prism-design CHANGELOG

## v2.0 — 2026-06-11 (정적 HTML 1급 전환·8패밀리 풀세트)

### 변경
- 1급 산출 경로를 React·Babel·CDN 의존 없는 자기완결 단일 HTML+CSS로 전환했습니다. `assets/*.jsx` JSX 라이브러리는 레거시·옵션으로 보존합니다.
- `references/snippets-static.html`을 신설해 8패밀리 전 컴포넌트를 복사해 바로 쓰는 순수 HTML+CSS 스니펫으로 보유합니다(데이터 교체 지점 주석 동봉).
- 8패밀리 풀세트를 채웠습니다 — 신규: BranchFlow·Sequence·Pipeline(FLOW), Tree·LayerStack·PyramidShape 삼각형(HIERARCHY), BeforeAfter(COMPARE), Gauge·ProgressBar·data-bound Chart(METRIC), EcosystemMap(RELATION), Gantt(TIME), PositionMap·Heatmap(DISTRIBUTION). 보강: Matrix2x2 사분면 음영.
- CSS 블록을 `styles-viz.css`·`styles-data.css`에 추가했습니다(기존 블록 삭제 없음). 데이터 바인딩은 CSS 변수(`--value`·`--pct`·`--v`·`--start`·`--span`·`--x`·`--y`·`--a`)로 받아 고정 하드코딩을 추방합니다.
- `SKILL.md`에 매핑 게이트(STEP1~5)·문체 불가침 vs 정보 재구성 분리 규칙·8패밀리 결정트리·8패밀리 인덱스를 내장하고, description을 한글 트리거 선두 + 영문 페어 + NOT 경계로 재작성했습니다.
- `references/build-recipe.md`를 정적 경로로 재작성하고 결정트리를 8패밀리 풀세트로 확장했습니다. JSX 경로는 부록(레거시)으로 강등했습니다.
- `assets/samples/eight-families.html`을 신설해 8패밀리를 자기완결 정적 HTML로 시연합니다(브라우저 더블클릭으로 오프라인 렌더).
- JSX 라이브러리에 신규 컴포넌트 병행본을 등록했습니다(`window.PRISM_VIZ`·`PRISM_SHAPES`·`PRISM_DATA`).

### 사유
JSX·React·Babel 런타임 의존은 CDN 차단·오프라인·단일 파일 공유에서 깨졌습니다. 정적 HTML+CSS를 1급으로 올려 더블클릭 한 번으로 렌더되게 했습니다. 또 description이 영문이라 한글 요청에서 발동이 약해, 트리거 키워드를 선두로 박았습니다.

### 주의
- 게이지·도넛·라인 차트는 body 최상단 프리즘 SVG defs(`#prism-stroke`)를 1회 둬야 호 색이 나옵니다.
- 프리즘 액센트는 컴포넌트당 1곳 — 면 fill이 아니라 보더·링·도트·1셀 강조로 한정합니다.

### 보존
- 기존 샘플(`report.html`·`pitch.html`·`landing.html`·`dashboard.html`)·토큰·JSX 라이브러리·QC 스크립트는 그대로 둡니다.

---

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

## v260523 — apple 흡수·강도 분기·자동화

### Phase B
- assets/tokens.css에 [data-volume="standard"]·[data-volume="amped"] 셀렉터 신설 (431줄)
- scripts/qc.sh 신설 (66줄·STANDARD/AMPED 정합·채도·MECE·Pretendard·한국어 grep)
- references/extend.md 60→153줄 보강 (preview 23·samples 5·sections 6 각각 인덱싱·강도 분기 룰)
- SKILL.md ⓥ VOLUME 섹션 신설·description 키워드 갱신

### Phase C
- evals/ 폴더 신설 (스텁 README — 5 표준 입력 계획)

## v260523.2 — references 9→7 통합 (4역할 루프)

### 작업자/연결자/감시자/검토자 루프 결과
- 2 통합본 신설 (4 파일 흡수):
  - `mece.md` (mece-catalog+mece-doctrine, 274줄)
  - `voice.md` (voice-tone+non-negotiable, 220줄)
- 4 원본 파일 삭제·verbatim 100% 보존·헤더만 재정렬
- SKILL.md @uses + layout-catalog 본문 포인터 자동 치환

### 검증
- validate.py: valid=true, errors=[]
- dry_run.py: PASS (380줄, desc 987/1024)
- 잔존 grep: 통합본 헤더 라벨만(설계 의도)·실 잔존 0건

총 references: 9 → 7 (-22%)
