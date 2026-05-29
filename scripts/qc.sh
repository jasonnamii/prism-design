#!/usr/bin/env bash
# prism-design QC v260523
# tokens 위반·STANDARD/AMPED 정합·MECE 위반·채도 위반 grep

set -e
HTML="${1:?Usage: bash scripts/qc.sh <HTML_FILE>}"
[ -f "$HTML" ] || { echo "❌ FILE NOT FOUND: $HTML"; exit 1; }

FAIL=0
echo "=== prism-design QC: $HTML ==="

# 채도 신성불가침 — opacity·color-mix(white) 차단
if grep -qE 'rgba\([0-9, ]+,\s*0\.[1-4][0-9]?\)' "$HTML"; then
  echo "❌ 채도 위반 — rgba opacity로 액센트 죽임"
  FAIL=1
fi
if grep -qE 'color-mix\(in srgb,[^,]+,\s*white' "$HTML"; then
  echo "❌ 채도 위반 — color-mix white"
  FAIL=1
fi

# STANDARD/AMPED 분기 검사
VOLUME=$(grep -oE 'data-volume="(standard|amped)"' "$HTML" | head -1)
if [ -z "$VOLUME" ]; then
  echo "ℹ data-volume 미지정 — STANDARD 디폴트 적용"
  VOLUME='data-volume="standard"'
fi

if echo "$VOLUME" | grep -q "standard"; then
  # STANDARD: gradient-text 0회·풀필 hero ≤1
  GRAD=$(grep -c 'gradient-text\|linear-gradient' "$HTML" || true)
  if [ "$GRAD" -gt 0 ]; then
    echo "⚠ STANDARD인데 gradient $GRAD개 — AMPED 영토"
    FAIL=1
  fi
fi

if echo "$VOLUME" | grep -q "amped"; then
  GRAD=$(grep -c 'gradient-text\|linear-gradient' "$HTML" || true)
  if [ "$GRAD" -gt 1 ]; then
    echo "❌ AMPED인데 gradient $GRAD개 — 페이지당 ≤1회"
    FAIL=1
  fi
fi

# MECE divider — 9그룹 정합 (간이 검사)
MECE=$(grep -c 'data-mece\|class="mece' "$HTML" || true)
[ "$MECE" -gt 0 ] && echo "MECE divider: $MECE"

# 접근성
grep -q 'prefers-reduced-motion' "$HTML" || echo "⚠ reduced-motion 폴백 누락"

# Pretendard 강제
grep -qE 'Pretendard|--font-display' "$HTML" || echo "⚠ Pretendard 미사용 — tokens.css 미로드 의심"

# 한국어 keep-all
if grep -qE '[가-힣]' "$HTML" && ! grep -q 'word-break:\s*keep-all' "$HTML"; then
  echo "⚠ 한국어 포함인데 word-break: keep-all 누락"
fi

if [ $FAIL -eq 0 ]; then
  echo "✅ prism-design QC PASS"
else
  echo "=== ❌ FAIL: $FAIL 위반 ==="
  exit 1
fi
