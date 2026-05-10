# Prism — MECE Doctrine (정본)

> 9 MECE 그룹 + Infra 풀독트린. SKILL.md `§B 라우팅표`의 사용 매뉴얼·금기·확장 규칙. 컴포넌트 선택 시 매번 참조.

---

## 핵심 원칙

**모든 시각화는 9그룹 중 *정확히 하나*에 귀속.** 표현하고 싶은 것이 있으면 → 행을 찾아라 → 컴포넌트 선택.

**중복 금지:** 같은 페이지에 카드 섹션 둘이면 둘 다 02 Cards. 다른 그룹이면 그룹별로 하나씩.

**01 → 09 순서 강제** (장문 페이지). 점프·역순 ✗. MeceDivider로 그룹 사이 끊는다.

---

## 01 · Marketing — 스토리텔링 인트로

장문 인트로. 큰 타입·이미지 모먼트·내러티브 아크.

| 컴포넌트 | use when |
|---|---|
| `Hero` | 첫 폴드. 헤드라인 + sub + CTA + image slot |
| `EduMenu` | 앵커 sub-nav + 썸네일 타일 (Apple-edu 스타일) |
| `StickyShowcase` | 스크롤 따라 핀된 이미지가 단계별로 swap |
| `VideoModule` | 포스터 + play 어포던스. `<image-slot>` 사용 |

---

## 02 · Cards — 반복 단위 (그리드 패밀리)

**purpose**로 픽, 외형으로 픽 ✗.

| 컴포넌트 | use when |
|---|---|
| `Bento` | **혼합 사이즈** 타일. 한 캔버스, varying densities. 히어로같은 |
| `Features` | **균일 3-col** 카드 + 번호. 동등 가중 기능 리스트 |
| `InsightCards` | **시맨틱** 카드 — Problem/Solution/Risk/Option. 액센트 컬러가 의미 운반 |
| `Pricing` | tier 카드 + "결정" CTA. 선택을 위한 카드 그리드 |

**중복 금지 룰:**
- 콘텐츠가 "feature list" → `Features`
- "we identified 4 risks" → `InsightCards`
- "compare plans" → `Pricing`
- 같은 페이지 metaphor 섞지 ✗

---

## 03 · Numbers — KPI + viz

| 컴포넌트 | use when |
|---|---|
| `StatGrid` | 3개 큰 숫자 + prism-text. 히어로 KPI |
| `DataViz` | 차트 placeholder 프레임 (line/bar/donut). 실제 차트는 프레임 안에 |
| `Funnel` | 단계별 볼륨 + 전환 델타 (page→signup 등) |

---

## 04 · Compare — side-by-side

| 컴포넌트 | use when |
|---|---|
| `Comparison` | 다열 매트릭스 + checkmark. plan/vendor 비교 |
| `SpecsTable` | 2-col key/value. 하드웨어 스펙·문서 메타 |
| `Matrix2x2` | impact × effort 플롯. **좌상단 quadrant 항상 winner** |

---

## 05 · Time — 시간 시퀀스

| 컴포넌트 | use when |
|---|---|
| `Timeline` | **프로세스** — 고정 단계, 동등 가중 (5 phases) |
| `Roadmap` | **Now / Next / Later** 컬럼 + status bullet |
| `Changelog` | 버전별 release entry + metadata 컬럼 |

---

## 06 · Flow & Structure — 관계

| 컴포넌트 | use when |
|---|---|
| `Flowchart` | 선형 프로세스 + 화살표, optional start/end caps |
| `OrgChart` | 계층. 한 root → managers → reports |
| `NetworkMap` | 이해관계자 web. many-to-many, 계층 ✗ |

---

## 07 · Shapes & Relations — 기하 메타포

| 컴포넌트 | use when |
|---|---|
| `Pyramid` | 성숙도 모델·adoption layers. 넓은 base, 좁은 top |
| `Venn` | 3-set overlap. 중앙 원 = "and-and-and" 인사이트 |
| `GeoMap` | region heatmap. 추상 그리드, 실제 국경 모양 ✗ |
| `Scorecard` | RAG / traffic-light status. 분기 리뷰 |

---

## 08 · Document blocks — inline 본문 액센트

| 컴포넌트 | use when |
|---|---|
| `Cover` | title page. 첫 페이지 full-bleed + metadata stamp |
| `ChapterDivider` | 챕터 break. MeceDivider보다 무게 큼 |
| `TLDR` | 장문 상단 sticky 요약 박스 |
| `PullQuote` | 단일 voice. 큰 인용부호 prism gradient |
| `Callouts` | `note`/`tip`/`warn`. kind가 dot 색 결정 |
| `Figure` | 번호 figure + 캡션. plot/diagram/screenshot |
| `MarginNote` | 본문 prose + 우측 마진 주석 |
| `CodeBlock` | mono 코드 스니펫 + file/lang header |
| `DataTable` | raw 행. 비교용 ✗ (그건 `Comparison`) |
| `FAQ` | accordion. 단일 행만 open |

---

## 09 · Reference — 후미

| 컴포넌트 | use when |
|---|---|
| `Glossary` | 정의 리스트 — term + description |
| `Footnotes` | 번호 리스트 + back-ref. 출처·인용 |

---

## Infra · 항상 ON (장문 페이지만)

| 컴포넌트 | use when |
|---|---|
| `ReadingProgress` | 상단 바, 스크롤 위치 표시. 장문 only |
| `StickyTOC` | 우측 레일 nav + scroll-spy. 장문 only |
| `MeceDivider` | 그룹 사이 구분 — horizontal rule + prism-tint index (`01`/`02`...) + 그룹 타이틀 + mono 서브타이틀 |

**MeceDivider 룰:** **그룹당 하나, 순서대로.** 그룹 반복 ✗. 한 토픽이 카드 섹션 둘 필요하면 = 한 Cards 그룹 안에 sub-block 둘.

---

## 확장 — 새 섹션 추가 (6단계)

1. **MECE 그룹 결정.** 깔끔히 안 들어가면 시스템이 그것을 원하지 ✗.
2. i18n.jsx에 EN/KO 키 mirror.
3. `sections-{group}.jsx`에 컴포넌트 작성. (또는 새 파일 + `window.PRISM_*`에 등록)
4. 최상위 블록 `<Reveal>` 래핑. `Eyebrow` → display 헤드라인 → body sub.
5. `styles-{group}.css`에 `===== SECTION NAME =====` 블록으로 스타일.
6. app.jsx의 해당 MECE 그룹에 mount.

---

## 안티패턴 (자주 나오는 함정)

| 함정 | 진단 | 처방 |
|---|---|---|
| Features 다음 Bento 연달아 | 둘 다 02 Cards. divider 없이 병렬 | 한 그룹의 sub-block으로 통합 |
| Pricing을 단순 feature list로 사용 | Pricing = "결정 CTA 카드" | Features 사용 |
| Matrix2x2 좌상단 무시 | 좌상단 = winner 위치 | 가장 중요한 옵션을 좌상단에 |
| 그룹 반복 (Cards 두 번) | MECE 위반 | 한 Cards 안 sub-block 또는 다른 그룹 사용 |
| MeceDivider 순서 뒤섞기 | 01→09 강제 | 점프·역순 ✗ |
| StickyShowcase 텍스트만 | 핀된 시각 자산이 본질 | image-slot 필수 |

---

## 출처

원본: `Dropbox/Attachments/Prism Design System/ui_kits/prism/CLAUDE.md` §MECE Catalog + §How to extend. NEW 정본 발췌·압축.
