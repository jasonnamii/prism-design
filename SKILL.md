---
name: prism-design
description: |
  Prism Design System. Neutral long-form HTML, reports, white papers, release notes, product pages, and keynote-style decks with restrained prism accents. Default is STANDARD; AMPED only when explicitly requested.
license: Proprietary. Internal use.
---

# Prism Design

Neutral, structured HTML for documents and narrative pages. It should feel editorial, organized, and credible, with prism accents used sparingly.

## Use When

- The user asks for a designed report, white paper, release note, model card, long-scroll page, product narrative, or keynote-style deck.
- The content is section-heavy and needs structure more than spectacle.
- The output can be assembled from the existing `assets/` and `samples/`.

Do not use for dashboards, transactional admin UI, dense app screens, or pure prose editing.

## Modes

| Mode | Default Use | Rules |
|---|---|---|
| STANDARD | Default | Neutral base, accent under 10%, no gradients, hairline structure |
| AMPED | Explicit only | Keynote/product moments, accent under 30%, max one gradient event |

## Design Rules

- Use `assets/tokens.css` and existing sample scaffolds before inventing new structure.
- Keep the 9-group MECE system as a routing aid, not a wall of mandatory decoration.
- Use Pretendard as the primary type system.
- Use prism gradients only for accents, never for body text or large generic backgrounds.
- Avoid repeated card grids; alternate document, numbers, comparison, flow, and reference blocks.
- Keep `letter-spacing` at `0` except for small positive metadata labels.
- Korean text must use `word-break: keep-all; line-break: strict; overflow-wrap: break-word;`.
- Respect reduced motion and focus-visible states.

## Codex Workflow

1. Pick one sample scaffold closest to the requested output.
2. Copy needed assets into the user's output folder; do not modify skill originals unless the user asks to refactor the skill itself.
3. Edit with `apply_patch`.
4. Verify with `bash /Users/jason/.codex/skills/prism-design/scripts/qc.sh <html-file>`.
5. For visual deliverables, open the output in Browser and check desktop and mobile framing.

## References

| Need | Files |
|---|---|
| Component routing | `references/mece.md`, `references/build-recipe.md` |
| Layout and motion | `references/layout-catalog.md`, `references/motion-catalog.md` |
| Voice and restraint | `references/voice.md` |
| Assets and samples | `assets/` |
