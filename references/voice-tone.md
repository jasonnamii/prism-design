# Prism — Voice & Tone (정본)

> SKILL.md `§D 비협상 룰` Type/Color/Spacing 외 **카피·톤·아이코노그래피** 정본. 본문 작성 시 매번 참조.

---

## ① Voice — assured but quiet

Prism 카피는 hype ✗. "revolutionary·game-changing·powerful·unleash·supercharge" 사용 ✗. **사실을 단호히 말하고 멈춘다.**

**헤드라인:** 짧다·선언적·균형. 한 줄 한 아이디어.

| ✅ | ❌ |
|---|---|
| Make every page feel inevitable. | Build beautiful pages with our component library! |
| 모든 페이지에 필연성을 더하세요. | 강력한 디자인 라이브러리로 아름다운 페이지를 만드세요! |

**본문:** 조용. 2인칭("you") 절제. 자연스러울 때만 contraction. 제품 카피에 느낌표 ✗.

---

## ② Casing & Punctuation

| 룰 | 적용 |
|---|---|
| Sentence-case headlines | 고유명사·브랜드만 Title-case |
| Curly quotes | "like this" — straight quotes ✗ |
| En-dash | 범위(`Q1–Q3`, `2024–2026`) |
| Em-dash | 삽입구 — 절제 |
| Oxford comma | 모호 해소 시만 |
| 숫자 | 11+ 항상 숫자, 측정·가격·코드 = 무조건 숫자 (`3 columns`, `$29/mo`) |
| Tabular numerals | 스펙·가격 표에 `font-variant-numeric: tabular-nums` |

---

## ③ Bilingual (EN / KO)

i18n.jsx에 동일 키 mirror. Pretendard는 라틴·한글 metrically balanced → display scale 공유.

- Korean copy = English **rhythm** 일치, 단어 일치 ✗. 의도 번역.
- 짧은 문장. 과한 합니다체 ✗.
- 숫자·제품코드는 양쪽 모두 라틴 (`v1.0.0`, `EP-133`).
- 한 언어만 그라디언트 ✗ — 양쪽 동일 처리.

---

## ④ Emoji & Iconography

**Emoji 절대 ✗.** 제품 카피 어디에도. 타이포 시스템이 에너지 운반.

**상태 마크 = unicode glyph:**
| 글리프 | 용도 |
|---|---|
| ● | filled dot |
| ○ | outline dot |
| ✓ | check (Pricing tiers) |
| → | next/nav |
| × | close |
| ° | degrees |
| * | footnote |

**아이콘 = inline minimal line SVG.** stroke 1.8px·square caps·currentColor. primitives.jsx의 `SunIcon`/`MoonIcon` 패턴.

**브랜드 마크:** 22px 둥근 사각 + `--grad-prism` 채움 + 중앙 8px 캔버스 색 점. 푸터에서 32px까지. **워드마크로 재해석 ✗.**

**확장 시 substitution:** Lucide static (`https://unpkg.com/lucide-static`) stroke 1.8, square caps. 그 외 아이콘셋 ✗.

**Prism이 안 쓰는 것:**
- ❌ Emoji
- ❌ Multi-tone·filled icon sets (Iconscout·FontAwesome solid)
- ❌ 손그림 일반 오브젝트 일러스트
- ❌ AI-generated imagery

---

## ⑤ Vibe

Confident · technical · lightly poetic. 사실을 짧게 전달하고 이동. 독자가 묻지 않은 proof point로 레이아웃 채우지 ✗.

---

## ⑥ Example copy in the wild

| Surface | Voice |
|---|---|
| Hero headline | **Make every page feel inevitable.** |
| Hero sub | A minimal design system for documents, decks, and product pages. Built on a six-stop prismatic accent and a single typeface. |
| Eyebrow | DESIGN SYSTEM · v1.0 |
| Pricing CTA | `Start free` / `Talk to us` (never `Get Started Now!`) |
| Footer legal | © 2026 Prism. All rights reserved. |
| KO hero | **모든 페이지에 필연성을 더하세요.** |

---

## 출처

원본: `Dropbox/Attachments/Prism Design System/README.md` §Content fundamentals + §Iconography. NEW 정본 발췌·압축.
