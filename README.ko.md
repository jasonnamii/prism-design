# Prism Design System

장문 보고서·키노트 덱·제품/마케팅 페이지를 1턴에 조립하는 디자인시스템 엔진. 무채색 베이스에 프리즘 그라디언트 액센트. EN/KO 이중·Pretendard 단일.

## 언제 쓰나

- 장문 보고서·백서·리서치 문서·아티클
- 키노트형 슬라이드 덱
- 제품·기능 마케팅 랜딩
- 피치덱·IR 내러티브
- 모델 카드·스펙 시트·릴리즈노트

**아님:** 대시보드·관리자UI·데이터 dense UI·채팅 제품. 다른 시스템.

## 구조

- **9 MECE 그룹 × 40+ 컴포넌트** — Marketing · Cards · Numbers · Compare · Time · Flow · Shapes · Doc · Reference
- **단일 토큰 어휘** — `tokens.css`가 색·타입·spacing·radius·shadow·motion 전부 제어
- **Pretendard 단일** — 한국어·영어 동일 스케일
- **무채색 + 프리즘 그라디언트 액센트** — 그라디언트는 액센트만, 본문 fill ✗
- **R18 + Babel standalone** — 빌드 단계 ✗·HTML 더블클릭 즉시 작동

## 파일

- `SKILL.md` — 9 MECE 라우팅 · 진단·생성 2모드 · 절대규칙 5
- `references/` — `mece-catalog.md` · `build-recipe.md` · `non-negotiable.md` · `extend.md`
- `assets/` — 19파일: tokens.css·스타일시트 6·JSX 섹션 11·image-slot.js·index.html

## 설치

릴리즈에서 `.skill` 다운 또는 소스에서 빌드:

```bash
zip -r prism-design.skill prism-design/ -x "*.pyc" "__pycache__/*" ".DS_Store"
```

Claude Code 스킬 인스톨러로 설치.

## 모드

- **진단** — 콘텐츠를 MECE 그룹에 매핑·룰 위반 적발·재구성 제안
- **생성** — 콘텐츠 → MECE 매핑 → 컴포넌트 선택 → i18n → app.jsx 마운트 → 부팅

## 라이선스

Proprietary. Internal use.

---

🇺🇸 [English README](README.md)
