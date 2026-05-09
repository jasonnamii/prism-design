# MECE Catalog — 9 그룹 전수

모든 시각 컴포넌트는 9그룹 중 정확히 하나에 귀속. 본 표는 SKILL.md §B의 풀버전.

## 01 · Marketing (스토리텔링 인트로)
장문 문서의 도입. 큰 타이포·이미지 모먼트·내러티브 아크.

| 컴포넌트 | use-when |
|---|---|
| `Hero` | 첫 fold. 헤드라인 + 서브 + CTA + image-slot |
| `EduMenu` | 앵커 서브내브·썸네일 타일 (Apple-edu 스타일) |
| `StickyShowcase` | 스크롤 따라 핀된 이미지 스왑 |
| `VideoModule` | 포스터 + 플레이 어포던스. image-slot 사용 |

## 02 · Cards (반복 단위)
**용도로 선택, 외형으로 선택 ✗.**

| 컴포넌트 | use-when |
|---|---|
| `Bento` | **혼합 사이즈** 타일. 한 캔버스·다양한 밀도. 히어로급 |
| `Features` | **균일 3-col** 카드·번호. 동일 가중치 기능 나열 |
| `InsightCards` | **의미** 카드 — Problem/Solution/Risk/Option. 액센트 색이 의미 운반 |
| `Pricing` | 결정 CTA가 있는 티어 카드. 그리드 사이즈는 선택을 위해 |

> **중복 ✗.** "기능 나열" → Features. "리스크 4개" → InsightCards. "플랜 비교" → Pricing. 같은 페이지 메타포 혼재 ✗.

## 03 · Numbers (KPI + viz)
| 컴포넌트 | use-when |
|---|---|
| `StatGrid` | 큰 숫자 3개·prism-text. 히어로 KPI |
| `DataViz` | 차트 placeholder 프레임 (line/bar/donut). 실차트는 프레임 안에 |
| `Funnel` | 단계별 볼륨·전환 델타 (page→signup 등) |

## 04 · Compare (side-by-side)
| 컴포넌트 | use-when |
|---|---|
| `Comparison` | 다열 매트릭스 + 체크마크. 플랜·벤더 비교 |
| `SpecsTable` | 2열 키/값. 하드웨어 스펙·문서 메타데이터 |
| `Matrix2x2` | impact × effort 매핑. 좌상단 항상 winner |

## 05 · Time (시간 시퀀스)
| 컴포넌트 | use-when |
|---|---|
| `Timeline` | **프로세스** — 고정 단계·동일 가중치 (5 phases) |
| `Roadmap` | **Now/Next/Later** 컬럼·상태 불릿 |
| `Changelog` | 버전별 릴리즈·메타데이터 컬럼 |

## 06 · Flow & Structure (관계)
| 컴포넌트 | use-when |
|---|---|
| `Flowchart` | 선형 프로세스·화살표·시작/끝 캡 옵션 |
| `OrgChart` | 위계. 1 root → 매니저 → reports |
| `NetworkMap` | 이해관계자 웹 — many-to-many·위계 ✗ |

## 07 · Shapes & Relations (기하 메타포)
| 컴포넌트 | use-when |
|---|---|
| `Pyramid` | 성숙도 모델·adoption 레이어. 넓은 base·좁은 top |
| `Venn` | 3집합 교집합. 중앙 = "and-and-and" 인사이트 |
| `GeoMap` | 지역 히트맵. 추상 그리드·실제 국가 모양 ✗ |
| `Scorecard` | RAG 신호등 상태표. 분기 리뷰 |

## 08 · Document blocks (인라인 액센트)
| 컴포넌트 | use-when |
|---|---|
| `Cover` | 타이틀 페이지 — 풀블리드 첫 페이지·메타데이터 스탬프 |
| `ChapterDivider` | 챕터 break. MeceDivider보다 큰 가중치 |
| `TLDR` | 장문 상단 sticky 요약 박스 |
| `PullQuote` | 단일 보이스. 큰 따옴표 + 프리즘 그라디언트 |
| `Callouts` | note/tip/warn 블록. kind가 점 색 결정 |
| `Figure` | 번호 + 캡션. 차트·다이어그램·스크린샷 |
| `MarginNote` | 본문 + 우측 마진 주석 |
| `CodeBlock` | 모노 코드·파일/lang 헤더 |
| `DataTable` | raw 행·정렬 느낌. 비교용 ✗ (Comparison 사용) |
| `FAQ` | 아코디언·단일 open row |

## 09 · Reference (후미)
| 컴포넌트 | use-when |
|---|---|
| `Glossary` | 정의 리스트 — 용어 + 설명 |
| `Footnotes` | 번호 리스트·역참조. 출처·인용 |

## 항상-ON Infra
| 컴포넌트 | use-when |
|---|---|
| `ReadingProgress` | 상단 스크롤 진행 바. 장문 한정 |
| `StickyTOC` | 우측 레일 내브·스크롤스파이. 장문 한정 |
| `MeceDivider` | 그룹 사이 — kana index + rule + 모노 서브타이틀 |

## MECE 룰 4

1. **그룹 한 번씩** — 같은 그룹 두 번 ✗. 두 카드 섹션 = 한 Cards 그룹의 sub-block
2. **순서 강제** — 01→09. 점프·역순 ✗
3. **divider 1개** — 그룹 사이 정확히 1개. 안 끼우면 그룹 경계 흐려짐
4. **신설 ✗** — 9그룹 외 새 그룹 ✗. 안 맞으면 시스템 자체가 거부 신호
