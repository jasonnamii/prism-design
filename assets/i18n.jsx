/* i18n.jsx — bilingual content store (EN/KO) */

const COPY = {
  en: {
    nav: {
      brand: "Prism",
      links: ["Overview", "Components", "Foundations", "Guidelines", "Changelog"],
      cta: "Get the kit",
    },
    edu: {
      title: "For Education",
      pitch: "Build documents, decks, and product pages that read like a film.",
      items: [
        { tag: "Reports", label: "Long-form research" },
        { tag: "Decks",   label: "Keynote-style slides" },
        { tag: "Pitches", label: "Investor narratives" },
        { tag: "Sites",   label: "Marketing pages" },
      ],
    },
    hero: {
      eyebrow: "Prism · Design System v1.0",
      title1: "Make every page",
      title2: "feel inevitable.",
      sub: "A monochrome foundation, prismatic accents, and the rhythm of a long-scroll product page — built for documents, decks, and stories.",
      ctaPrimary: "Start designing",
      ctaSecondary: "See components",
    },
    bento: {
      eyebrow: "The system",
      title: "One language. Every surface.",
      sub: "Composable tiles you can rearrange — the same vocabulary across reports, slides, and pages.",
      tiles: {
        type:    { kicker: "Type",    title: "Display first.\nBody second." },
        color:   { kicker: "Color",   title: "Black, white,\nand the rainbow." },
        motion:  { kicker: "Motion",  title: "Soft scroll.\nNothing flashy." },
        bilingual: { kicker: "i18n", title: "한국어와 영어,\n같은 리듬." },
        density: { kicker: "Density", title: "Tighten or breathe." },
        bento:   { kicker: "Bento",   title: "Modular by default." },
      },
    },
    sticky: {
      eyebrow: "Sticky showcase",
      title: "Pin the subject. Tell the story.",
      steps: [
        { h: "Set the stage.",  p: "A heroic frame anchors the narrative while supporting copy scrolls past." },
        { h: "Reveal the parts.", p: "Each scroll step swaps the body, the subject stays present." },
        { h: "Land the point.",   p: "End on a single line that earns the silence around it." },
      ],
    },
    features: {
      eyebrow: "Features",
      title: "Built for long reads.",
      cards: [
        { h: "Scroll-aware sections", p: "Every block reveals on scroll with a soft, considered fade." },
        { h: "Bilingual by default",  p: "Toggle EN ↔ KO; type metrics adapt to Pretendard for Korean." },
        { h: "Theme-aware imagery",   p: "Image slots invert mattes between light and dark surfaces." },
        { h: "Print-ready",           p: "Spec tables, footnotes, and figure captions survive PDF export." },
        { h: "Composable tokens",     p: "Density, radius, and accent are all live-tunable in Tweaks." },
        { h: "Keynote-friendly",      p: "Display sizes scale to 16:9; slot into deck-stage with zero edits." },
      ],
    },
    video: {
      eyebrow: "Video module",
      title: "Frame anything in cinema.",
      sub: "A 16:9 player that letterboxes content and surfaces the controls only on intent.",
      caption: "00:42 / 02:15  ·  Drop a video here",
    },
    specs: {
      eyebrow: "Specs",
      title: "Measured, not assumed.",
      sub: "A table style for engineering docs, model cards, and product specifications.",
      rows: [
        { k: "Type system",   v: "Pretendard Variable, 12 weights" },
        { k: "Type scale",    v: "8 steps · clamp() responsive" },
        { k: "Spacing scale", v: "12 steps · 4 → 256 px" },
        { k: "Radius scale",  v: "6 steps · 6 → 999 px" },
        { k: "Color tokens",  v: "32 semantic · 6 prismatic" },
        { k: "Themes",        v: "Light · Dark · auto" },
        { k: "Languages",     v: "English · 한국어" },
        { k: "Components",    v: "24 primitives · 9 sections" },
      ],
    },
    pricing: {
      eyebrow: "Pricing",
      title: "Pick a tier. Ship the doc.",
      tiers: [
        {
          name: "Solo",
          price: "Free",
          period: "forever",
          desc: "For individuals exploring the system.",
          features: ["All components", "Light + dark", "Community support"],
          cta: "Start",
          accent: false,
        },
        {
          name: "Studio",
          price: "$24",
          period: "per editor / month",
          desc: "For teams shipping product pages and reports.",
          features: ["Everything in Solo", "Brand tokens", "Bilingual presets", "Priority support"],
          cta: "Start trial",
          accent: true,
        },
        {
          name: "Enterprise",
          price: "Talk",
          period: "to us",
          desc: "For organizations with custom requirements.",
          features: ["Everything in Studio", "SAML SSO", "Audit logs", "Dedicated CSM"],
          cta: "Contact",
          accent: false,
        },
      ],
    },
    stats: {
      eyebrow: "By the numbers",
      title: "Designed against measurement.",
      sub: "Six metrics that shape every decision in the system.",
      items: [
        { v: "144px", l: "Display max",      d: "Killer hero size at full bleed." },
        { v: "1.5",   l: "Body line-height", d: "Tuned for both EN and KO reading." },
        { v: "12",    l: "Spacing steps",    d: "From 4px micro to 256px breath." },
        { v: "6",     l: "Prism stops",      d: "Indigo through mint, hand-tuned." },
        { v: "2",     l: "Themes",           d: "Light at #f4f4f6, dark at #000." },
        { v: "24",    l: "Components",       d: "From button to bento, all included." },
      ],
    },
    quote: {
      eyebrow: "In practice",
      body: "The best documents read like a film. Type sets the pace, white space holds the breath, and the prism only flares where the eye should land.",
      cite: "Jiyun Park",
      role: "Design Lead, Prism Studio",
    },
    timeline: {
      eyebrow: "Process",
      title: "From outline to release.",
      sub: "Five stages, written into the templates so authors don't have to invent the rhythm each time.",
      steps: [
        { k: "01", h: "Outline",   p: "Write the spine in plain prose. No design." },
        { k: "02", h: "Set type",  p: "Pick display sizes that earn their bandwidth." },
        { k: "03", h: "Place imagery", p: "Drop image-slots where the eye needs rest." },
        { k: "04", h: "Add accents", p: "Prismatic highlights, used sparingly." },
        { k: "05", h: "Pressure-test", p: "Read top to bottom. Cut anything inert." },
      ],
    },
    compare: {
      eyebrow: "Comparison",
      title: "Pick the right tier.",
      sub: "What's in each plan, side by side.",
      cols: ["Feature", "Solo", "Studio", "Enterprise"],
      rows: [
        ["All components",       "●", "●", "●"],
        ["Light + dark themes",  "●", "●", "●"],
        ["Brand tokens",         "—", "●", "●"],
        ["Bilingual presets",    "—", "●", "●"],
        ["Priority support",     "—", "●", "●"],
        ["SAML SSO",             "—", "—", "●"],
        ["Audit logs",           "—", "—", "●"],
        ["Dedicated CSM",        "—", "—", "●"],
      ],
    },
    dataviz: {
      eyebrow: "Data",
      title: "Charts that earn the page.",
      sub: "Three frame styles for embedding visualizations — the real chart belongs to the author.",
      frames: [
        { kind: "line",  cap: "figure 1 · time series · monthly",   note: "Drop your line chart here. Caption sits below in monospace." },
        { kind: "bar",   cap: "figure 2 · category breakdown · q3",  note: "Use bars for parts-of-whole or rankings." },
        { kind: "donut", cap: "figure 3 · share of voice · 2026",    note: "Reserve donuts for one-shot percentages." },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Common questions.",
      items: [
        { q: "Can I use Prism for client work?",         a: "Yes — Solo and Studio cover commercial use. Enterprise adds compliance." },
        { q: "Does it work with my existing stack?",     a: "Tokens are CSS custom properties. Components are plain React + Babel. No build step required." },
        { q: "How do I add a third language?",           a: "Add a new top-level key to COPY in i18n.jsx, mirror every leaf, then add an option to the language Tweak." },
        { q: "Can I print the documents?",               a: "Yes. Specs tables, captions, and footnotes carry through to PDF cleanly via your browser's print dialog." },
        { q: "Is the prism gradient brandable?",         a: "Swap palettes via Tweaks, or replace --prism-1..6 directly. Six-stop gradient regenerates automatically." },
      ],
    },
    changelog: {
      eyebrow: "Changelog",
      title: "What's new.",
      sub: "Plain-language notes, dated. No marketing copy.",
      entries: [
        { v: "1.0.0", d: "May 2026",   notes: ["First public release", "24 components, 9 sections", "EN + KO bilingual presets"] },
        { v: "0.9.0", d: "April 2026", notes: ["Sticky showcase pattern added", "Density tweak (0.6 → 1.4)", "Five accent palettes"] },
        { v: "0.8.0", d: "March 2026", notes: ["Bento grid skeleton", "Pretendard upgraded to v1.3.9", "Dark theme noise overlay"] },
      ],
    },
    callouts: {
      eyebrow: "Document tools",
      title: "Callouts and asides.",
      sub: "Three styles — note, warning, and tip — for breaking the body without breaking the rhythm.",
      items: [
        { kind: "note", h: "Note",     p: "Use a note to add context the reader can skip without losing the thread." },
        { kind: "tip",  h: "Tip",      p: "Tips earn attention with the prismatic mark — reserve for genuinely useful asides." },
        { kind: "warn", h: "Caution",  p: "Caution blocks have a single amber bar. Use sparingly or they lose meaning." },
      ],
    },
    insight: {
      eyebrow: "Cards · semantic",
      title: "One layout. Different stakes.",
      sub: "Use the same card shell, swap the accent to signal what it means.",
      cards: [
        { kind: "problem",  tag: "Problem",  h: "Pages drift visually.",      p: "Without a shared rhythm, every doc reinvents its layout.", foot: "Severity · high" },
        { kind: "solution", tag: "Solution", h: "One spine, many topics.",     p: "Tokens enforce the rhythm; sections compose the variation.", foot: "Effort · low" },
        { kind: "risk",     tag: "Risk",     h: "Token drift over time.",      p: "Without governance, palettes fork and intent decays.", foot: "Mitigation · review cadence" },
        { kind: "option",   tag: "Option",   h: "Adopt incrementally.",        p: "Start with type and color; layer components per quarter.", foot: "Risk · low · ROI · medium" },
      ],
    },
    roadmap: {
      eyebrow: "Roadmap · now / next / later",
      title: "Where the system is going.",
      cols: [
        { when: "Now",   h: "Shipping", items: [
          { t: "Tokens v1", status: "done" },
          { t: "24 components", status: "done" },
          { t: "Bilingual presets", status: "doing" },
        ]},
        { when: "Next",  h: "In design", items: [
          { t: "Figma library parity", status: "doing" },
          { t: "Print stylesheet", status: "todo" },
          { t: "Motion grammar", status: "todo" },
        ]},
        { when: "Later", h: "On the horizon", items: [
          { t: "Native PDF export", status: "todo" },
          { t: "Theming SDK", status: "todo" },
          { t: "Component analytics", status: "todo" },
        ]},
      ],
    },
    flow: {
      eyebrow: "Flow · linear process",
      title: "How a document moves through the studio.",
      nodes: [
        { kind: "start", k: "01", h: "Brief",     p: "Goal, audience, length" },
        { kind: "step",  k: "02", h: "Outline",   p: "Spine in plain prose" },
        { kind: "step",  k: "03", h: "Compose",   p: "Sections + tokens" },
        { kind: "step",  k: "04", h: "Review",    p: "Cut, tighten, polish" },
        { kind: "end",   k: "05", h: "Ship",      p: "PDF · web · deck" },
      ],
    },
    funnel: {
      eyebrow: "Funnel · conversion",
      title: "From visit to signed doc.",
      sub: "Each step shows volume and the drop-off to the next.",
      steps: [
        { h: "Page views",       v: 12400 },
        { h: "Started reading",  v: 8230 },
        { h: "Scrolled past 50%",v: 4120 },
        { h: "Reached CTA",      v: 1840 },
        { h: "Signed up",        v: 612 },
      ],
    },
    org: {
      eyebrow: "Structure · org",
      title: "How the studio is organized.",
      root: { n: "Nadia Reyes", r: "Studio Lead", lead: true },
      children: [
        { n: "Jiyun Park", r: "Design", reports: [
          { n: "Min Lee",   r: "Brand designer" },
          { n: "Park Hyun", r: "Product designer" },
        ]},
        { n: "Theo Banks", r: "Engineering", reports: [
          { n: "Aria Cho",   r: "Frontend" },
          { n: "Sam Wright", r: "Tooling" },
        ]},
        { n: "Iris Vega",  r: "Editorial", reports: [
          { n: "Kara Joh", r: "Long-form" },
          { n: "Daniel O.", r: "Translation" },
        ]},
      ],
    },
    matrix: {
      eyebrow: "Matrix · 2×2",
      title: "Plot what to ship next.",
      sub: "Impact on the y-axis, effort on the x-axis. The top-left quadrant earns priority.",
      yAxis: "Impact", xAxis: "Effort",
      yLow: "Low", yHigh: "High",
      xLow: "Low", xHigh: "High",
      quadrants: [
        { h: "Quick wins",   sub: "high impact · low effort",  items: ["Print stylesheet", "Bilingual presets", "Density tweak"] },
        { h: "Big bets",     sub: "high impact · high effort", items: ["Native PDF", "Theming SDK"] },
        { h: "Fillers",      sub: "low impact · low effort",   items: ["Icon refresh", "Demo polish"] },
        { h: "Reconsider",   sub: "low impact · high effort",  items: ["Custom typeface", "3D module"] },
      ],
    },
    cover: {
      kind: "Design System", date: "May 2026", version: "1.0",
      title: "Prism—a system for the long scroll",
      sub: "Achromatic foundation. Prismatic accents. Built for documents that demand attention from the first fold to the final footnote.",
      byLabel: "Authored by", by: "Prism Studio · Design Team",
      lengthLabel: "Length", length: "42 pages · 18 min read",
      audienceLabel: "For", audience: "Designers, writers, doc owners",
    },
    tldr: {
      tag: "TL;DR",
      h: "What you'll get from this document.",
      bullets: [
        "A complete component catalog organized by purpose, not appearance.",
        "Tokens for type, color, spacing, motion that survive theme and scale changes.",
        "Bilingual presets and a print stylesheet so one source produces every output.",
      ],
    },
    figure: {
      eyebrow: "Figure",
      title: "Numbered figure with caption.",
      figNum: "Figure 3.1",
      cap: "The bento layout uses a 12-column grid with mixed tile sizes; ratios are bound to spacing tokens, not pixel constants.",
    },
    margin: {
      eyebrow: "Annotated reading",
      title: "Body prose, with notes in the margin.",
      paragraphs: [
        "A long document is a film, not a brochure. The reader scrolls through scenes, and the design's job is to set tempo\u2014not to compete for attention.",
        "Prism's spine is monochrome by default, with the prismatic gradient saved for the moments that earn it: a key number, the brand mark, the title of a chapter that begins.",
        "Margin notes carry secondary thoughts without breaking the body's rhythm. They appear beside the prose, never inside it.",
      ],
      notes: [
        { k: "Why monochrome?", p: "Color competes with type. Reserve it for moments that earn the eye." },
        { k: "Margin convention", p: "Notes never reorder the spine. They live alongside the body and never above it." },
      ],
    },
    glossary: {
      eyebrow: "Reference",
      title: "Glossary.",
      terms: [
        { t: "Achromatic",  d: "Without hue. Prism's backgrounds and body type live here." },
        { t: "Prism accent", d: "The six-stop rainbow gradient used only on focal moments." },
        { t: "Density",     d: "Multiplier on section padding. 1.0 default, 0.6\u20131.4 range." },
        { t: "MECE divider", d: "Numbered horizontal break between groups in a long-form doc." },
        { t: "Token",        d: "A named CSS variable that abstracts a value from its use." },
      ],
    },
    code: {
      eyebrow: "Snippet",
      title: "Lift the system into your project.",
      file: "App.tsx",
      lang: "tsx",
      code: `import { Prism } from "@prism/system";

export default function Doc() {
  return (
    <Prism theme="dark" lang="en">
      <Cover title="Annual Report" version="1.0" />
      <ChapterDivider chapter="01" title="Findings" />
      <StatGrid items={kpis} />
    </Prism>
  );
}`,
    },
    dtable: {
      eyebrow: "Reference data",
      title: "Raw rows, sortable feel.",
      sub: "For when comparison isn't the point\u2014you just need the data on the page.",
      cols: ["Token", "Value (light)", "Value (dark)", "Used by"],
      rows: [
        ["--bg-canvas",   "#f4f4f6", "#000000", "Page background"],
        ["--bg-surface",  "#ffffff", "#0e0e10", "Cards, nav, code"],
        ["--fg-primary",  "#0a0a0c", "#fafafa", "Headings, body"],
        ["--prism-2",     "#8C5CFF", "#8C5CFF", "Accents, gradient stop 2"],
        ["--r-3",         "16px",    "16px",    "Card radius"],
      ],
    },
    footnotes: {
      eyebrow: "Sources",
      title: "Footnotes.",
      notes: [
        { t: "Pretendard is licensed under SIL Open Font License v1.1.",  src: "https://github.com/orioncactus/pretendard" },
        { t: "Optical scaling principles drawn from print typography conventions.", src: "Design Studio Internal Notes, 2025" },
        { t: "Color contrast verified against WCAG 2.2 AA at default sizes.", src: "WCAG 2.2, W3C" },
      ],
    },
    pyramid: {
      eyebrow: "Maturity",
      title: "Adoption pyramid.",
      levels: [
        { h: "Embedded",   p: "System governs every doc; teams contribute back." },
        { h: "Standardized", p: "All new docs use the system; legacy migrates on cadence." },
        { h: "Adopted",    p: "Most teams use the system for primary work." },
        { h: "Piloted",    p: "One or two teams trial the system on a real project." },
        { h: "Discovered", p: "Teams aware the system exists; not yet in use." },
      ],
    },
    venn: {
      eyebrow: "Overlap",
      title: "Where the system earns its place.",
      sets: [
        { label: "Brand",   desc: "Voice, mark, palette" },
        { label: "Editorial", desc: "Type, rhythm, prose" },
        { label: "Engineering", desc: "Tokens, components, build" },
      ],
      center: "Prism",
    },
    network: {
      eyebrow: "Stakeholders",
      title: "Who touches the system.",
      nodes: [
        { n: "Studio",       r: "Owners",     x: 50, y: 50, lead: true },
        { n: "Design",       r: "Authors",    x: 20, y: 25 },
        { n: "Editorial",    r: "Writers",    x: 80, y: 25 },
        { n: "Engineering",  r: "Implementers", x: 25, y: 80 },
        { n: "Brand",        r: "Reviewers",  x: 75, y: 80 },
        { n: "Leadership",   r: "Sponsors",   x: 50, y: 12 },
      ],
      edges: [[0,1],[0,2],[0,3],[0,4],[0,5],[1,2],[3,4]],
    },
    geo: {
      eyebrow: "Distribution",
      title: "Where it ships.",
      sub: "Heat shows usage volume across regions over the last quarter.",
      regions: [
        { name: "NA",     v: 92, x: 8,  y: 22, w: 22, h: 28 },
        { name: "EU",     v: 78, x: 38, y: 18, w: 18, h: 24 },
        { name: "APAC",   v: 96, x: 64, y: 28, w: 24, h: 32 },
        { name: "LATAM",  v: 42, x: 16, y: 60, w: 18, h: 24 },
        { name: "MEA",    v: 28, x: 42, y: 56, w: 16, h: 22 },
      ],
      legendLabel: "Usage volume",
      legendLow: "Low", legendHigh: "High",
    },
    scorecard: {
      eyebrow: "Status",
      title: "Quarterly scorecard.",
      colArea: "Area", colStatus: "Status", colTrend: "Trend", colNote: "Note",
      rows: [
        { area: "Type system",      status: "green", statusLabel: "On track", trend: "up",   note: "Pretendard variable shipped, all weights present." },
        { area: "Component coverage", status: "green", statusLabel: "On track", trend: "up",   note: "24 components, 7 MECE groups complete." },
        { area: "Bilingual presets", status: "amber", statusLabel: "At risk",  trend: "flat", note: "KO copy parity at 90%; review pending." },
        { area: "Print stylesheet", status: "amber", statusLabel: "At risk",  trend: "up",   note: "Page breaks landing; figure captions need polish." },
        { area: "Theme SDK",        status: "red",   statusLabel: "Behind",   trend: "down", note: "Not started; pushed to next quarter." },
      ],
    },
    footer: {
      tagline: "A design system for the long scroll.",
      cols: [
        { h: "System", links: ["Tokens", "Primitives", "Sections", "Patterns"] },
        { h: "Resources", links: ["Figma kit", "Code", "Icons", "Changelog"] },
        { h: "Company", links: ["About", "Press", "Careers", "Contact"] },
      ],
      legal: "© 2026 Prism Studio · Made with care",
    },
  },

  ko: {
    nav: {
      brand: "Prism",
      links: ["개요", "컴포넌트", "파운데이션", "가이드라인", "업데이트"],
      cta: "키트 받기",
    },
    edu: {
      title: "교육용",
      pitch: "문서, 덱, 제품 페이지를 한 편의 영화처럼.",
      items: [
        { tag: "리포트", label: "장문 리서치" },
        { tag: "덱",     label: "키노트형 슬라이드" },
        { tag: "피치",   label: "투자 내러티브" },
        { tag: "사이트", label: "마케팅 페이지" },
      ],
    },
    hero: {
      eyebrow: "Prism · 디자인 시스템 v1.0",
      title1: "모든 페이지가",
      title2: "당연하게 느껴지도록.",
      sub: "무채색 파운데이션, 프리즘 액센트, 그리고 긴 스크롤의 호흡 — 문서와 덱, 스토리를 위해 만들었습니다.",
      ctaPrimary: "지금 시작",
      ctaSecondary: "컴포넌트 보기",
    },
    bento: {
      eyebrow: "시스템",
      title: "한 가지 언어, 모든 표면.",
      sub: "재배열 가능한 타일로 — 리포트, 슬라이드, 페이지에 같은 어휘를 씁니다.",
      tiles: {
        type:    { kicker: "타이포",   title: "디스플레이가 먼저,\n본문은 그 다음." },
        color:   { kicker: "컬러",     title: "검정, 흰색,\n그리고 무지개." },
        motion:  { kicker: "모션",     title: "부드러운 스크롤.\n과시는 없이." },
        bilingual: { kicker: "다국어", title: "한국어와 영어,\n같은 리듬." },
        density: { kicker: "밀도",     title: "조이거나, 숨쉬거나." },
        bento:   { kicker: "벤또",     title: "기본이 모듈." },
      },
    },
    sticky: {
      eyebrow: "스티키 쇼케이스",
      title: "주제는 고정, 이야기는 흐르게.",
      steps: [
        { h: "무대를 세웁니다.",   p: "고정된 프레임이 내러티브를 받쳐주는 동안 본문이 스크롤됩니다." },
        { h: "조각을 드러냅니다.", p: "스크롤마다 본문은 바뀌고, 주제는 그대로 머무릅니다." },
        { h: "한 문장으로 마무리.", p: "주변의 침묵을 견딜 수 있는 한 줄로 끝냅니다." },
      ],
    },
    features: {
      eyebrow: "기능",
      title: "긴 글을 위해 만든 시스템.",
      cards: [
        { h: "스크롤 인지 섹션", p: "모든 블록이 스크롤 시점에 부드럽게 페이드인 됩니다." },
        { h: "기본 다국어",      p: "EN ↔ KO 토글, 한국어에 맞춘 Pretendard 메트릭." },
        { h: "테마 인지 이미지", p: "라이트/다크에 따라 이미지 매트가 자동 반전됩니다." },
        { h: "인쇄 대응",        p: "스펙 표, 각주, 캡션이 PDF에서도 그대로 살아납니다." },
        { h: "구성 가능한 토큰", p: "밀도, 라운드, 액센트를 Tweaks에서 실시간 조정." },
        { h: "키노트 친화",      p: "디스플레이 크기가 16:9에 맞춰 — deck-stage에 그대로 들어갑니다." },
      ],
    },
    video: {
      eyebrow: "비디오 모듈",
      title: "무엇이든 시네마처럼.",
      sub: "16:9로 콘텐츠를 레터박스 처리하고, 컨트롤은 의도가 있을 때만 노출됩니다.",
      caption: "00:42 / 02:15  ·  여기로 영상을 드롭하세요",
    },
    specs: {
      eyebrow: "스펙",
      title: "추측이 아니라 측정.",
      sub: "엔지니어링 문서, 모델 카드, 제품 사양에 쓰는 표 스타일.",
      rows: [
        { k: "타입 시스템",   v: "Pretendard Variable, 12 weights" },
        { k: "타입 스케일",   v: "8 steps · clamp() 반응형" },
        { k: "스페이싱",      v: "12 steps · 4 → 256 px" },
        { k: "라운드",        v: "6 steps · 6 → 999 px" },
        { k: "컬러 토큰",     v: "시맨틱 32 · 프리즘 6" },
        { k: "테마",          v: "라이트 · 다크 · 자동" },
        { k: "언어",          v: "영어 · 한국어" },
        { k: "컴포넌트",      v: "프리미티브 24 · 섹션 9" },
      ],
    },
    pricing: {
      eyebrow: "가격",
      title: "티어 선택, 문서 출고.",
      tiers: [
        {
          name: "Solo", price: "무료", period: "영구",
          desc: "시스템을 둘러보는 개인용.",
          features: ["전체 컴포넌트", "라이트 + 다크", "커뮤니티 지원"],
          cta: "시작하기", accent: false,
        },
        {
          name: "Studio", price: "₩32,000", period: "에디터 / 월",
          desc: "제품 페이지와 리포트를 출고하는 팀용.",
          features: ["Solo의 모든 것", "브랜드 토큰", "다국어 프리셋", "우선 지원"],
          cta: "트라이얼 시작", accent: true,
        },
        {
          name: "Enterprise", price: "문의", period: "별도",
          desc: "맞춤 요구사항이 있는 조직용.",
          features: ["Studio의 모든 것", "SAML SSO", "감사 로그", "전담 CSM"],
          cta: "문의하기", accent: false,
        },
      ],
    },
    stats: {
      eyebrow: "숫자로 보기",
      title: "측정값 위에 디자인합니다.",
      sub: "시스템의 모든 결정을 떠받치는 여섯 개 지표.",
      items: [
        { v: "144px", l: "디스플레이 최대", d: "풀블리드 히어로 사이즈." },
        { v: "1.5",   l: "본문 행간",       d: "영문과 한글 모두에 맞춘 값." },
        { v: "12",    l: "스페이싱",        d: "4px 미세부터 256px 호흡까지." },
        { v: "6",     l: "프리즘 스톱",     d: "인디고에서 민트까지 직접 튜닝." },
        { v: "2",     l: "테마",            d: "라이트 #f4f4f6, 다크 #000." },
        { v: "24",    l: "컴포넌트",        d: "버튼부터 벤또까지 전부 포함." },
      ],
    },
    quote: {
      eyebrow: "실전에서",
      body: "좋은 문서는 한 편의 영화처럼 읽힙니다. 타이포가 호흡을 잡고, 여백이 숨을 쉬게 하고, 프리즘은 시선이 닿아야 할 곳에서만 빛납니다.",
      cite: "박지윤",
      role: "디자인 리드, Prism Studio",
    },
    timeline: {
      eyebrow: "프로세스",
      title: "개요에서 출고까지.",
      sub: "다섯 단계를 템플릿에 새겨, 작성자가 매번 리듬을 다시 짜지 않도록.",
      steps: [
        { k: "01", h: "개요",       p: "산문으로 척추를 먼저. 디자인은 없이." },
        { k: "02", h: "타입 설정",  p: "대역폭에 어울리는 디스플레이 크기 선택." },
        { k: "03", h: "이미지 배치", p: "눈이 쉴 곳에 image-slot을 둡니다." },
        { k: "04", h: "액센트 추가", p: "프리즘 하이라이트는 아껴 쓰기." },
        { k: "05", h: "검증",       p: "위에서 아래로 읽으며 늘어진 곳을 잘라냅니다." },
      ],
    },
    compare: {
      eyebrow: "비교표",
      title: "맞는 티어 고르기.",
      sub: "각 플랜에 들어있는 항목을 한눈에.",
      cols: ["기능", "Solo", "Studio", "Enterprise"],
      rows: [
        ["전체 컴포넌트",     "●", "●", "●"],
        ["라이트 + 다크",     "●", "●", "●"],
        ["브랜드 토큰",       "—", "●", "●"],
        ["다국어 프리셋",     "—", "●", "●"],
        ["우선 지원",         "—", "●", "●"],
        ["SAML SSO",          "—", "—", "●"],
        ["감사 로그",         "—", "—", "●"],
        ["전담 CSM",          "—", "—", "●"],
      ],
    },
    dataviz: {
      eyebrow: "데이터",
      title: "페이지를 정당화하는 차트.",
      sub: "시각화를 끼워 넣을 세 가지 프레임 — 실제 차트는 작성자의 몫입니다.",
      frames: [
        { kind: "line",  cap: "figure 1 · 시계열 · 월간",       note: "라인 차트를 여기에. 캡션은 모노스페이스로 아래." },
        { kind: "bar",   cap: "figure 2 · 카테고리 분해 · 3분기", note: "전체-부분 또는 순위에는 막대." },
        { kind: "donut", cap: "figure 3 · 점유율 · 2026",         note: "도넛은 일회성 비율에만 씁니다." },
      ],
    },
    faq: {
      eyebrow: "자주 묻는 질문",
      title: "공통 질문.",
      items: [
        { q: "클라이언트 작업에 써도 되나요?",         a: "네 — Solo와 Studio 모두 상업 사용 가능. Enterprise는 컴플라이언스가 추가됩니다." },
        { q: "기존 스택과 호환되나요?",                 a: "토큰은 CSS 변수, 컴포넌트는 React + Babel. 빌드 단계 없이 동작합니다." },
        { q: "세 번째 언어를 추가하려면?",              a: "i18n.jsx의 COPY에 새 최상위 키를 추가하고 모든 leaf를 미러링한 뒤, 언어 Tweak에 옵션을 추가하세요." },
        { q: "문서를 인쇄할 수 있나요?",                "a": "네. 스펙 표, 캡션, 각주가 브라우저 인쇄 다이얼로그를 통해 PDF로 깔끔히 출력됩니다." },
        { q: "프리즘 그라데이션도 브랜드화 되나요?",   a: "Tweaks로 팔레트 전환, 또는 --prism-1..6을 직접 교체. 6-stop 그라데이션이 자동으로 다시 생성됩니다." },
      ],
    },
    changelog: {
      eyebrow: "업데이트 내역",
      title: "새로운 점.",
      sub: "마케팅 문구 없이, 평이한 언어로.",
      entries: [
        { v: "1.0.0", d: "2026년 5월", notes: ["첫 정식 공개", "컴포넌트 24, 섹션 9", "EN + KO 다국어 프리셋"] },
        { v: "0.9.0", d: "2026년 4월", notes: ["스티키 쇼케이스 패턴 추가", "밀도 Tweak (0.6 → 1.4)", "5종 액센트 팔레트"] },
        { v: "0.8.0", d: "2026년 3월", notes: ["벤또 그리드 스켈레톤", "Pretendard v1.3.9 업그레이드", "다크 테마 노이즈 오버레이"] },
      ],
    },
    callouts: {
      eyebrow: "문서 도구",
      title: "콜아웃과 부연.",
      sub: "세 가지 스타일 — note, tip, warning — 으로 본문의 흐름을 끊지 않고 잘라냅니다.",
      items: [
        { kind: "note", h: "Note",   p: "독자가 흐름을 잃지 않고 건너뛸 수 있는 맥락을 추가합니다." },
        { kind: "tip",  h: "Tip",    p: "팁은 프리즘 마크로 시선을 끌어옵니다. 정말 유용한 경우에만 쓰세요." },
        { kind: "warn", h: "주의",   p: "경고 블록은 단 한 줄의 앰버 바를 갖습니다. 너무 자주 쓰면 의미가 흐려집니다." },
      ],
    },
    insight: {
      eyebrow: "카드 · 시맨틱",
      title: "같은 레이아웃, 다른 무게.",
      sub: "같은 카드 쉛을 쓰되, 액센트만 바꿔 의미를 구분합니다.",
      cards: [
        { kind: "problem",  tag: "문제",   h: "페이지가 제각각 다릅니다.", p: "공통 리듬 없이 매 문서가 레이아웃을 다시 만듭니다.", foot: "심각도 · 높음" },
        { kind: "solution", tag: "해결",   h: "하나의 척추, 여러 주제.",   p: "토큰이 리듬을 강제하고, 섹션이 변주를 조합합니다.", foot: "공수 · 낮음" },
        { kind: "risk",     tag: "리스크", h: "시간이 지나면 토큰이 갈라집니다.", p: "거버넌스가 없으면 팔레트가 포크되고 의도가 말라합니다.", foot: "완화 · 리뷰 주기" },
        { kind: "option",   tag: "옵션",   h: "점진적 도입.",                 p: "타입과 컬러부터 시작, 분기별로 컴포넌트를 더합니다.", foot: "리스크 · 낮음 · ROI · 중간" },
      ],
    },
    roadmap: {
      eyebrow: "로드맵 · Now / Next / Later",
      title: "시스템이 향하는 곳.",
      cols: [
        { when: "Now",   h: "출고 중",       items: [
          { t: "토큰 v1", status: "done" },
          { t: "컴포넌트 24개", status: "done" },
          { t: "다국어 프리셋", status: "doing" },
        ]},
        { when: "Next",  h: "디자인 중",     items: [
          { t: "피그마 라이브러리 일치", status: "doing" },
          { t: "인쇄용 스타일시트", status: "todo" },
          { t: "모션 문법", status: "todo" },
        ]},
        { when: "Later", h: "먼 지평선에",   items: [
          { t: "네이티브 PDF 내보내기", status: "todo" },
          { t: "테마 SDK", status: "todo" },
          { t: "컴포넌트 분석", status: "todo" },
        ]},
      ],
    },
    flow: {
      eyebrow: "플로우 · 선형 프로세스",
      title: "문서가 스튜디오를 통과하는 경로.",
      nodes: [
        { kind: "start", k: "01", h: "브리프",  p: "목표, 독자, 분량" },
        { kind: "step",  k: "02", h: "개요",    p: "산문으로 척추" },
        { kind: "step",  k: "03", h: "구성",    p: "섹션 + 토큰" },
        { kind: "step",  k: "04", h: "검수",    p: "자르고, 조이고, 닦으면" },
        { kind: "end",   k: "05", h: "출고",    p: "PDF · 웹 · 덱" },
      ],
    },
    funnel: {
      eyebrow: "퍼널 · 전환",
      title: "방문부터 서명까지.",
      sub: "각 단계의 볼륨과 다음 단계로의 이탈률을 함께 보여줍니다.",
      steps: [
        { h: "페이지 방문",       v: 12400 },
        { h: "읽기 시작",         v: 8230 },
        { h: "50% 이상 스크롤",   v: 4120 },
        { h: "CTA 도달",         v: 1840 },
        { h: "가입 완료",         v: 612 },
      ],
    },
    org: {
      eyebrow: "구조 · 조직도",
      title: "스튜디오의 구성.",
      root: { n: "나디아 레이스", r: "스튜디오 리드", lead: true },
      children: [
        { n: "박지윤", r: "디자인", reports: [
          { n: "이민",   r: "브랜드 디자이너" },
          { n: "박현", r: "프로덕트 디자이너" },
        ]},
        { n: "섬 뱅스", r: "엔지니어링", reports: [
          { n: "아리아 조",  r: "프론트엔드" },
          { n: "샘 라이트", r: "툴링" },
        ]},
        { n: "아이리스 베가",  r: "에디토리얼", reports: [
          { n: "카라 조", r: "장문" },
          { n: "다니엘 오", r: "번역" },
        ]},
      ],
    },
    matrix: {
      eyebrow: "매트릭스 · 2×2",
      title: "다음에 뭐를 출고할지.",
      sub: "세로축은 임팩트, 가로축은 공수. 좌상단 사분면이 우선순위입니다.",
      yAxis: "임팩트", xAxis: "공수",
      yLow: "낮음", yHigh: "높음",
      xLow: "낮음", xHigh: "높음",
      quadrants: [
        { h: "퀸 윈",     sub: "고임팩트 · 저공수",  items: ["인쇄 스타일시트", "다국어 프리셋", "밀도 Tweak"] },
        { h: "빅 벳",     sub: "고임팩트 · 고공수",  items: ["네이티브 PDF", "테마 SDK"] },
        { h: "필러",       sub: "저임팩트 · 저공수",  items: ["아이콘 리프레시", "데모 폴리시"] },
        { h: "재고",       sub: "저임팩트 · 고공수",  items: ["커스텀 타입페이스", "3D 모듈"] },
      ],
    },
    cover: {
      kind: "디자인 시스템", date: "2026년 5월", version: "1.0",
      title: "Prism—긴 스크롤을 위한 시스템",
      sub: "무채색 기반, 프리즈닉 액센트. 첫 화면부터 마지막 각주까지 시선을 붙잡는 문서를 위해 설계되었습니다.",
      byLabel: "작성", by: "Prism Studio · Design Team",
      lengthLabel: "분량", length: "42페이지 · 18분",
      audienceLabel: "대상", audience: "디자이너, 라이터, 문서 오너",
    },
    tldr: {
      tag: "요약",
      h: "이 문서에서 얻을 것.",
      bullets: [
        "모양이 아닌 목적으로 조직된 완전한 컴포넌트 카탈로그.",
        "테마와 스케일 변화에 버티는 타입 · 컬러 · 간격 · 모션 토큰.",
        "하나의 소스에서 모든 출력을 만드는 다국어 프리셋과 인쇄 스타일시트.",
      ],
    },
    figure: {
      eyebrow: "그림",
      title: "번호 있는 캡션 그림.",
      figNum: "그림 3.1",
      cap: "벤또 레이아웃은 12컬럼 그리드에 타일 크기를 혼합해 쓰며, 비율은 픽셀 상수가 아닌 간격 토큰에 연결됩니다.",
    },
    margin: {
      eyebrow: "주석 읽기",
      title: "본문과 여백에 주석.",
      paragraphs: [
        "긴 문서는 브로셔가 아닌 영화입니다. 독자는 스크롤이라는 장면을 지나고, 디자인의 일은 템포를 잡는 것입니다. 주목을 경쟁하는 게 아닌.",
        "Prism의 척추는 기본적으로 모노크롬입니다. 프리즈마틱 그라디언트는 그것을 투자해야 하는 웄감에만 사용됩니다: 핵심 수치, 브랜드 마크, 단원이 시작되는 제목.",
        "여백 주석은 본문의 리듬을 깨지 않고 부가적 생각을 담습니다. 산문 안이 아닌 옥에 있습니다.",
      ],
      notes: [
        { k: "왜 모노크롬?", p: "색은 타입도그래피와 경쟁합니다. 시선을 벌 자격이 있는 점에만 쓰세요." },
        { k: "여백 규칙", p: "주석은 결코 척추를 재배치하지 않습니다. 옥에 있을 뿐, 위에 올라가지 않습니다." },
      ],
    },
    glossary: {
      eyebrow: "참고",
      title: "용어집.",
      terms: [
        { t: "무채색",       d: "색조가 없는. Prism의 배경과 본문 타입이 여기 속합니다." },
        { t: "프리즘 액센트", d: "초점의 웄간에만 쓰이는 6스탑 무지개 그라디언트." },
        { t: "밀도",          d: "섹션 패딩의 승수. 기본 1.0, 범위 0.6\u20131.4." },
        { t: "MECE 디바이더", d: "긴 문서의 그룹 사이에 쓰이는 번호 수평 레이디언트." },
        { t: "토큰",          d: "값을 쓰임으로부터 추상화하는 이름붙은 CSS 변수." },
      ],
    },
    code: {
      eyebrow: "코드 조각",
      title: "당신의 프로젝트에 시스템을 올리세요.",
      file: "App.tsx",
      lang: "tsx",
      code: `import { Prism } from "@prism/system";

export default function Doc() {
  return (
    <Prism theme="dark" lang="ko">
      <Cover title="연간 리포트" version="1.0" />
      <ChapterDivider chapter="01" title="발견" />
      <StatGrid items={kpis} />
    </Prism>
  );
}`,
    },
    dtable: {
      eyebrow: "참조 데이터",
      title: "정렬 느낌의 원본 행.",
      sub: "비교가 목적이 아니라 그저 데이터만 필요한 경우.",
      cols: ["토큰", "값 (라이트)", "값 (다크)", "사용처"],
      rows: [
        ["--bg-canvas",   "#f4f4f6", "#000000", "페이지 배경"],
        ["--bg-surface",  "#ffffff", "#0e0e10", "카드, 네비, 코드"],
        ["--fg-primary",  "#0a0a0c", "#fafafa", "제목, 본문"],
        ["--prism-2",     "#8C5CFF", "#8C5CFF", "액센트, 그라디언트 2"],
        ["--r-3",         "16px",    "16px",    "카드 라디우스"],
      ],
    },
    footnotes: {
      eyebrow: "출처",
      title: "각주.",
      notes: [
        { t: "Pretendard는 SIL Open Font License v1.1\ub85c 배포됩니다.", src: "https://github.com/orioncactus/pretendard" },
        { t: "광학적 스케일 원칙은 인쇄 타이포그래피 관행에서 가져왔습니다.", src: "디자인 스튜디오 내부 노트, 2025" },
        { t: "색 대비는 기본 크기에서 WCAG 2.2 AA\ub97c 충족합니다.", src: "WCAG 2.2, W3C" },
      ],
    },
    pyramid: {
      eyebrow: "성숙도",
      title: "도입 피라미드.",
      levels: [
        { h: "내재화",     p: "시스템이 모든 문서를 주도하며 팀이 기여합니다." },
        { h: "표준화",     p: "모든 신규 문서가 시스템 사용, 레거시는 주기적으로 이전." },
        { h: "도입",        p: "대부분의 팀이 주요 작업에 시스템 사용." },
        { h: "파일럿",      p: "한·두 팀이 실제 프로젝트에 시스템을 시험." },
        { h: "인지",        p: "시스템의 존재는 알고 있으나 아직 사용 전." },
      ],
    },
    venn: {
      eyebrow: "교집합",
      title: "시스템이 자리를 얻는 지점.",
      sets: [
        { label: "브랜드",   desc: "보이스, 마크, 팔레트" },
        { label: "에디토리얼", desc: "타입, 리듬, 산문" },
        { label: "엔지니어링", desc: "토큰, 컴포넌트, 빌드" },
      ],
      center: "Prism",
    },
    network: {
      eyebrow: "이해관계자",
      title: "시스템을 다루는 사람들.",
      nodes: [
        { n: "스튜디오",      r: "소유",       x: 50, y: 50, lead: true },
        { n: "디자인",       r: "제작",       x: 20, y: 25 },
        { n: "에디토리얼",   r: "작가",       x: 80, y: 25 },
        { n: "엔지니어링",  r: "구현",       x: 25, y: 80 },
        { n: "브랜드",       r: "리뷰",       x: 75, y: 80 },
        { n: "리더십",       r: "후원",       x: 50, y: 12 },
      ],
      edges: [[0,1],[0,2],[0,3],[0,4],[0,5],[1,2],[3,4]],
    },
    geo: {
      eyebrow: "분포",
      title: "어디서 출고되는가.",
      sub: "지난 분기 지역별 사용량을 열지도로 보여줍니다.",
      regions: [
        { name: "북미",   v: 92, x: 8,  y: 22, w: 22, h: 28 },
        { name: "유럽",   v: 78, x: 38, y: 18, w: 18, h: 24 },
        { name: "아시아", v: 96, x: 64, y: 28, w: 24, h: 32 },
        { name: "중남미", v: 42, x: 16, y: 60, w: 18, h: 24 },
        { name: "중동·아프리카", v: 28, x: 42, y: 56, w: 16, h: 22 },
      ],
      legendLabel: "사용량",
      legendLow: "낮음", legendHigh: "높음",
    },
    scorecard: {
      eyebrow: "상태",
      title: "분기 스코어카드.",
      colArea: "영역", colStatus: "상태", colTrend: "추세", colNote: "메모",
      rows: [
        { area: "타입 시스템",    status: "green", statusLabel: "정상",     trend: "up",   note: "Pretendard variable 출고, 모든 웨이트 포함." },
        { area: "컴포넌트 커버리지", status: "green", statusLabel: "정상",     trend: "up",   note: "컴포넌트 24개, MECE 7그룹 완성." },
        { area: "다국어 프리셋",    status: "amber", statusLabel: "주의",     trend: "flat", note: "한국어 추적률 90%, 검토 중." },
        { area: "인쇄 스타일시트",   status: "amber", statusLabel: "주의",     trend: "up",   note: "페이지 분할 안착 중, 그림 캐프션 조정." },
        { area: "테마 SDK",        status: "red",   statusLabel: "지연",     trend: "down", note: "아직 시작 전, 다음 분기로 이월." },
      ],
    },
    footer: {
      tagline: "긴 스크롤을 위한 디자인 시스템.",
      cols: [
        { h: "시스템",   links: ["토큰", "프리미티브", "섹션", "패턴"] },
        { h: "리소스",   links: ["피그마 키트", "코드", "아이콘", "업데이트"] },
        { h: "회사",     links: ["소개", "프레스", "채용", "문의"] },
      ],
      legal: "© 2026 Prism Studio · 정성껏 만들었습니다",
    },
  },
};

window.PRISM_COPY = COPY;
