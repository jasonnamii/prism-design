/* app.jsx — root composition + theme/lang/tweaks orchestration */

const { useState, useEffect } = React;
const { TopNav, Footer, ReadingProgress, StickyTOC } = window.PRISM_PRIMITIVES;
const { Hero, Bento, StickyShowcase, VideoModule } = window.PRISM_MARKETING;
const { EduMenu, Features, SpecsTable, Pricing } = window.PRISM_CONTENT;
const { StatGrid, PullQuote, Timeline, Comparison, DataViz, FAQ, Changelog, Callouts } = window.PRISM_DATA;
const { InsightCards, Roadmap, Flowchart, Funnel, OrgChart, Matrix2x2 } = window.PRISM_VIZ;
const { Cover, ChapterDivider, TLDR, Figure, MarginNote, Glossary, CodeBlock, DataTable, Footnotes } = window.PRISM_DOC;
const { Pyramid, Venn, NetworkMap, GeoMap, Scorecard } = window.PRISM_SHAPES;
const COPY = window.PRISM_COPY;

function MeceDivider({ id, kana, title, sub }) {
  return (
    <div id={id} className="mece-divider">
      <div className="container">
        <div className="mece-rule" />
        <div className="mece-row">
          <span className="mece-kana">{kana}</span>
          <div className="mece-text">
            <h2 className="mece-title">{title}</h2>
            <p className="mece-sub">{sub}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* tweakable defaults — wrapped in EDITMODE markers so changes persist */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "dark",
  "lang": "en",
  "density": 1,
  "radiusScale": 1,
  "typeScale": 1,
  "accentHue": 270,
  "palette": "prism"
}/*EDITMODE-END*/;

const PALETTES = {
  prism:    ["#4F7DFF", "#8C5CFF", "#E04CC6", "#FF6A4D", "#FFB347", "#4FD1B7"],
  sunset:   ["#FF4D6D", "#FF6A4D", "#FFB347", "#FFD93D", "#FF8FA3", "#C9184A"],
  ocean:    ["#0077B6", "#00B4D8", "#48CAE4", "#90E0EF", "#0096C7", "#023E8A"],
  forest:   ["#2D6A4F", "#52B788", "#95D5B2", "#74C69D", "#1B4332", "#40916C"],
  mono:     ["#1a1a1a", "#3a3a3a", "#5a5a5a", "#7a7a7a", "#9a9a9a", "#bababa"],
};

function App() {
  const [tweaks, setTweaks] = useState(TWEAK_DEFAULTS);

  /* persist via host */
  const setTweak = (k, v) => {
    setTweaks(prev => {
      const next = typeof k === "object" ? { ...prev, ...k } : { ...prev, [k]: v };
      window.parent?.postMessage({ type: "__edit_mode_set_keys", edits: typeof k === "object" ? k : { [k]: v } }, "*");
      return next;
    });
  };

  /* apply theme on document */
  useEffect(() => {
    document.documentElement.dataset.theme = tweaks.theme;
  }, [tweaks.theme]);

  /* apply density / radius / type scales as CSS vars */
  useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty("--density", String(tweaks.density));
    r.style.setProperty("--r-3", `${16 * tweaks.radiusScale}px`);
    r.style.setProperty("--r-4", `${22 * tweaks.radiusScale}px`);
    r.style.setProperty("--r-5", `${28 * tweaks.radiusScale}px`);
    r.style.setProperty("--fs-d1", `clamp(${64*tweaks.typeScale}px, ${9*tweaks.typeScale}vw, ${144*tweaks.typeScale}px)`);
    r.style.setProperty("--fs-d2", `clamp(${48*tweaks.typeScale}px, ${6.5*tweaks.typeScale}vw, ${104*tweaks.typeScale}px)`);
    r.style.setProperty("--fs-d3", `clamp(${36*tweaks.typeScale}px, ${4.5*tweaks.typeScale}vw, ${72*tweaks.typeScale}px)`);
  }, [tweaks.density, tweaks.radiusScale, tweaks.typeScale]);

  /* apply palette */
  useEffect(() => {
    const p = PALETTES[tweaks.palette] || PALETTES.prism;
    p.forEach((c, i) => document.documentElement.style.setProperty(`--prism-${i+1}`, c));
    document.documentElement.style.setProperty(
      "--grad-prism",
      `linear-gradient(95deg, ${p[0]} 0%, ${p[1]} 22%, ${p[2]} 46%, ${p[3]} 68%, ${p[4]} 88%, ${p[5]} 100%)`
    );
  }, [tweaks.palette]);

  const c = COPY[tweaks.lang] || COPY.en;

  const tocItems = [
    { id: "cards",    label: tweaks.lang === "ko" ? "01 카드" : "01 Cards" },
    { id: "numbers",  label: tweaks.lang === "ko" ? "02 수치" : "02 Numbers" },
    { id: "compare",  label: tweaks.lang === "ko" ? "03 비교" : "03 Compare" },
    { id: "time",     label: tweaks.lang === "ko" ? "04 시간" : "04 Time" },
    { id: "flow",     label: tweaks.lang === "ko" ? "05 흐름·구조" : "05 Flow" },
    { id: "shapes",   label: tweaks.lang === "ko" ? "06 도형" : "06 Shapes" },
    { id: "decision", label: tweaks.lang === "ko" ? "07 결정" : "07 Decision" },
    { id: "doc",      label: tweaks.lang === "ko" ? "08 문서 블록" : "08 Document" },
    { id: "ref",      label: tweaks.lang === "ko" ? "09 참고" : "09 Reference" },
  ];

  return (
    <>
      <ReadingProgress />
      <TopNav
        copy={c.nav}
        theme={tweaks.theme}
        setTheme={(v) => setTweak("theme", v)}
        lang={tweaks.lang}
        setLang={(v) => setTweak("lang", v)}
      />

      <main id="top">
        {/* Cover (title page) */}
        <Cover copy={c.cover} />

        {/* TL;DR */}
        <TLDR copy={c.tldr} />

        <StickyTOC items={tocItems} />

        {/* Marketing surfaces — hero / story / video */}
        <Hero copy={c.hero} />
        <EduMenu copy={c.edu} />
        <StickyShowcase copy={c.sticky} />
        <VideoModule copy={c.video} />

        {/* Cards — grid families */}
        <MeceDivider id="cards" kana="01" title={tweaks.lang === "ko" ? "카드" : "Cards"} sub={tweaks.lang === "ko" ? "타일 · 그리드 · 시맨틱" : "Tile · grid · semantic"} />
        <Bento copy={c.bento} />
        <Features copy={c.features} />
        <InsightCards copy={c.insight} />

        {/* Numbers — KPI + viz */}
        <MeceDivider id="numbers" kana="02" title={tweaks.lang === "ko" ? "수치" : "Numbers"} sub={tweaks.lang === "ko" ? "KPI · 차트 · 데이터 시각화" : "KPI · charts · data viz"} />
        <StatGrid copy={c.stats} />
        <DataViz copy={c.dataviz} />
        <Funnel copy={c.funnel} />

        {/* Compare — matrix + spec */}
        <MeceDivider id="compare" kana="03" title={tweaks.lang === "ko" ? "비교" : "Compare"} sub={tweaks.lang === "ko" ? "매트릭스 · 스펙 · 2×2" : "Matrix · specs · 2×2"} />
        <Comparison copy={c.compare} />
        <SpecsTable copy={c.specs} />
        <Matrix2x2 copy={c.matrix} />

        {/* Time — timeline / roadmap / changelog */}
        <MeceDivider id="time" kana="04" title={tweaks.lang === "ko" ? "시간" : "Time"} sub={tweaks.lang === "ko" ? "프로세스 · 로드맵 · 변경이력" : "Process · roadmap · changelog"} />
        <Timeline copy={c.timeline} />
        <Roadmap copy={c.roadmap} />
        <Changelog copy={c.changelog} />

        {/* Flow & Structure */}
        <MeceDivider id="flow" kana="05" title={tweaks.lang === "ko" ? "흐름·구조" : "Flow & Structure"} sub={tweaks.lang === "ko" ? "플로우 · 조직 · 네트워크" : "Flowchart · org · network"} />
        <Flowchart copy={c.flow} />
        <OrgChart copy={c.org} />
        <NetworkMap copy={c.network} />

        {/* Shapes — pyramid / venn / geo / scorecard */}
        <MeceDivider id="shapes" kana="06" title={tweaks.lang === "ko" ? "도형·관계" : "Shapes & Relations"} sub={tweaks.lang === "ko" ? "피라미드 · 벤 · 지도 · 스코어카드" : "Pyramid · venn · geo · scorecard"} />
        <Pyramid copy={c.pyramid} />
        <Venn copy={c.venn} />
        <GeoMap copy={c.geo} />
        <Scorecard copy={c.scorecard} />

        {/* Decision — pricing as offers */}
        <MeceDivider id="decision" kana="07" title={tweaks.lang === "ko" ? "결정" : "Decision"} sub={tweaks.lang === "ko" ? "가격 · 티어 카드" : "Pricing · tier cards"} />
        <Pricing copy={c.pricing} />

        {/* Document blocks */}
        <MeceDivider id="doc" kana="08" title={tweaks.lang === "ko" ? "문서 블록" : "Document blocks"} sub={tweaks.lang === "ko" ? "풀 인용 · 콜아웃 · FAQ · 그림 · 여백 주석 · 코드 · 표" : "Quote · callout · FAQ · figure · margin · code · table"} />
        <PullQuote copy={c.quote} />
        <Callouts copy={c.callouts} />
        <Figure copy={c.figure} />
        <MarginNote copy={c.margin} />
        <CodeBlock copy={c.code} />
        <DataTable copy={c.dtable} />
        <FAQ copy={c.faq} />

        {/* Reference — glossary + footnotes */}
        <MeceDivider id="ref" kana="09" title={tweaks.lang === "ko" ? "참고" : "Reference"} sub={tweaks.lang === "ko" ? "용어집 · 각주" : "Glossary · footnotes"} />
        <Glossary copy={c.glossary} />
        <Footnotes copy={c.footnotes} />
      </main>

      <Footer copy={c.footer} />

      <PrismTweaks tweaks={tweaks} setTweak={setTweak} />
    </>
  );
}

/* ============== TWEAKS PANEL ============== */
function PrismTweaks({ tweaks, setTweak }) {
  if (!window.TweaksPanel) return null;
  const TP = window.TweaksPanel;
  const TS = window.TweakSection;
  const TR = window.TweakRadio;
  const TSel = window.TweakSelect;
  const TSl = window.TweakSlider;
  return (
    <TP title="Tweaks">
      <TS label="Theme">
        <TR
          label="Mode"
          value={tweaks.theme}
          onChange={(v) => setTweak("theme", v)}
          options={[{ value: "light", label: "Light" }, { value: "dark", label: "Dark" }]}
        />
        <TR
          label="Language"
          value={tweaks.lang}
          onChange={(v) => setTweak("lang", v)}
          options={[{ value: "en", label: "EN" }, { value: "ko", label: "KO" }]}
        />
      </TS>

      <TS label="Palette">
        <TSel
          label="Accent"
          value={tweaks.palette}
          onChange={(v) => setTweak("palette", v)}
          options={[
            { value: "prism",  label: "Prism (rainbow)" },
            { value: "sunset", label: "Sunset" },
            { value: "ocean",  label: "Ocean" },
            { value: "forest", label: "Forest" },
            { value: "mono",   label: "Monochrome" },
          ]}
        />
      </TS>

      <TS label="Spacing & shape">
        <TSl label="Density" value={tweaks.density}
          onChange={(v) => setTweak("density", v)}
          min={0.6} max={1.4} step={0.05} />
        <TSl label="Radius" value={tweaks.radiusScale}
          onChange={(v) => setTweak("radiusScale", v)}
          min={0} max={2} step={0.1} />
        <TSl label="Display type" value={tweaks.typeScale}
          onChange={(v) => setTweak("typeScale", v)}
          min={0.7} max={1.3} step={0.05} />
      </TS>
    </TP>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
