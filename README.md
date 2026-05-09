# Prism Design System

A Claude Skill that calls and assembles the **Prism Design System** — a minimal, premium design system for long-scroll documents, keynote-style decks, and product/marketing pages.

Achromatic foundation with prismatic rainbow accents. Bilingual (EN / KO) with Pretendard.

## When to use

- Long-form report, white paper, research doc, or article
- Keynote-style slide deck
- Product / feature marketing landing page
- Pitch deck or investor narrative
- Model card, spec sheet, release-notes page

**Not for:** dashboards, dense data UI, admin panels, chat products. Pick a different system.

## Architecture

- **9 MECE groups × 40+ components** — Marketing · Cards · Numbers · Compare · Time · Flow · Shapes · Doc · Reference
- **Single token vocabulary** — `tokens.css` controls colors, type scale, spacing, radius, shadow, motion
- **Pretendard only** — Korean and English share the same scale
- **Achromatic + prism gradient accents** — gradient is for accents, never for body fills
- **R18 + Babel standalone** — drop-in HTML, no build step

## Files

- `SKILL.md` — Skill definition with 9 MECE routing, 2 modes (diagnose / build), 5 absolute rules
- `references/` — `mece-catalog.md` · `build-recipe.md` · `non-negotiable.md` · `extend.md`
- `assets/` — 19 files: tokens.css, 6 stylesheets, 11 JSX section files, image-slot.js, index.html

## Install

Download the latest `.skill` file from releases or build from source:

```bash
zip -r prism-design.skill prism-design/ -x "*.pyc" "__pycache__/*" ".DS_Store"
```

Then install via Claude Code skill installer.

## Modes

- **Diagnose** — Map content to MECE groups, flag rule violations, suggest restructure
- **Build** — Content → MECE mapping → component selection → i18n → app.jsx mount → boot

## License

Proprietary. Internal use.

---

🇰🇷 [한국어 README](README.ko.md)
