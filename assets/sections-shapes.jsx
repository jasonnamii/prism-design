/* sections-shapes.jsx — diagrammatic visualizations
   Pyramid, Venn, NetworkMap, GeoMap, Scorecard */

const { Eyebrow, Reveal } = window.PRISM_PRIMITIVES;

/* ============== PYRAMID / MATURITY MODEL ============== */
function Pyramid({ copy }) {
  return (
    <section className="section pyramid-section">
      <div className="container">
        <div style={{ maxWidth: 720 }}>
          <Reveal><Eyebrow>{copy.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={80}><h2 className="display-3" style={{ marginTop: 12, marginBottom: 56 }}>{copy.title}</h2></Reveal>
        </div>
        <div className="pyramid-grid">
          <Reveal delay={160}>
            <div className="pyramid-stack">
              {copy.levels.map((l, i) => {
                const maxLevels = copy.levels.length;
                const widthPct = 40 + ((i / (maxLevels - 1)) * 60);
                return (
                  <div key={i} className={`pyramid-row pyramid-row-${i}`} style={{ width: `${widthPct}%` }}>
                    <span className="pyramid-num">{maxLevels - i}</span>
                    <span className="pyramid-h">{l.h}</span>
                  </div>
                );
              })}
            </div>
          </Reveal>
          <div className="pyramid-list">
            {copy.levels.map((l, i) => (
              <Reveal key={i} delay={240 + i * 60} className="pyramid-item">
                <div className="pyramid-item-h">{l.h}</div>
                <div className="pyramid-item-p">{l.p}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============== VENN DIAGRAM (3 circles) ============== */
function Venn({ copy }) {
  return (
    <section className="section venn-section">
      <div className="container">
        <div style={{ maxWidth: 720 }}>
          <Reveal><Eyebrow>{copy.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={80}><h2 className="display-3" style={{ marginTop: 12, marginBottom: 56 }}>{copy.title}</h2></Reveal>
        </div>
        <div className="venn-grid">
          <Reveal delay={160}>
            <div className="venn-canvas">
              <svg viewBox="0 0 400 320" className="venn-svg">
                <circle cx="150" cy="130" r="100" className="venn-c venn-c-1" />
                <circle cx="250" cy="130" r="100" className="venn-c venn-c-2" />
                <circle cx="200" cy="220" r="100" className="venn-c venn-c-3" />
                <text x="100" y="100" className="venn-label">{copy.sets[0].label}</text>
                <text x="300" y="100" className="venn-label" textAnchor="end">{copy.sets[1].label}</text>
                <text x="200" y="290" className="venn-label" textAnchor="middle">{copy.sets[2].label}</text>
                <text x="200" y="170" className="venn-center prism-text-svg" textAnchor="middle">{copy.center}</text>
              </svg>
            </div>
          </Reveal>
          <div className="venn-list">
            {copy.sets.map((s, i) => (
              <Reveal key={i} delay={240 + i * 60} className="venn-item">
                <span className={`venn-dot venn-dot-${i+1}`} />
                <div>
                  <div className="venn-item-h">{s.label}</div>
                  <div className="venn-item-p">{s.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============== NETWORK / STAKEHOLDER MAP ============== */
function NetworkMap({ copy }) {
  // simple positioned graph; nodes have x,y in 0-100 space
  return (
    <section className="section network-section">
      <div className="container">
        <div style={{ maxWidth: 720 }}>
          <Reveal><Eyebrow>{copy.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={80}><h2 className="display-3" style={{ marginTop: 12, marginBottom: 56 }}>{copy.title}</h2></Reveal>
        </div>
        <Reveal delay={160}>
          <div className="network-canvas">
            <svg viewBox="0 0 800 480" preserveAspectRatio="xMidYMid meet" className="network-svg">
              {copy.edges.map((e, i) => {
                const a = copy.nodes[e[0]];
                const b = copy.nodes[e[1]];
                return <line key={i} x1={a.x*8} y1={a.y*4.8} x2={b.x*8} y2={b.y*4.8} className="network-edge"/>;
              })}
              {copy.nodes.map((n, i) => (
                <g key={i} transform={`translate(${n.x*8} ${n.y*4.8})`}>
                  <circle r={n.lead ? 28 : 18} className={`network-node ${n.lead ? "is-lead" : ""}`}/>
                  <text y="48" textAnchor="middle" className="network-name">{n.n}</text>
                  <text y="62" textAnchor="middle" className="network-role">{n.r}</text>
                </g>
              ))}
            </svg>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============== GEO MAP (region heatmap, abstracted) ============== */
function GeoMap({ copy }) {
  // Abstract grid of "regions" because real geo is out of scope
  return (
    <section className="section geo-section">
      <div className="container">
        <div style={{ maxWidth: 720 }}>
          <Reveal><Eyebrow>{copy.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={80}><h2 className="display-3" style={{ marginTop: 12 }}>{copy.title}</h2></Reveal>
          <Reveal delay={160}><p className="body-lg" style={{ marginTop: 16, marginBottom: 56 }}>{copy.sub}</p></Reveal>
        </div>
        <div className="geo-grid">
          <Reveal delay={240}>
            <div className="geo-canvas">
              {copy.regions.map((r, i) => (
                <div key={i} className="geo-region"
                  style={{
                    left: `${r.x}%`, top: `${r.y}%`,
                    width: `${r.w}%`, height: `${r.h}%`,
                    "--intensity": r.v,
                  }}>
                  <span className="geo-region-name">{r.name}</span>
                  <span className="geo-region-v">{r.v}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <div className="geo-legend">
            <div className="geo-legend-h">{copy.legendLabel}</div>
            <div className="geo-legend-bar" />
            <div className="geo-legend-axis">
              <span>{copy.legendLow}</span>
              <span>{copy.legendHigh}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============== SCORECARD (RAG / Traffic light) ============== */
function Scorecard({ copy }) {
  return (
    <section className="section score-section">
      <div className="container">
        <div style={{ maxWidth: 720 }}>
          <Reveal><Eyebrow>{copy.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={80}><h2 className="display-3" style={{ marginTop: 12, marginBottom: 56 }}>{copy.title}</h2></Reveal>
        </div>
        <Reveal delay={160}>
          <div className="score-table">
            <div className="score-head">
              <span className="score-col score-col-area">{copy.colArea}</span>
              <span className="score-col score-col-status">{copy.colStatus}</span>
              <span className="score-col score-col-trend">{copy.colTrend}</span>
              <span className="score-col score-col-note">{copy.colNote}</span>
            </div>
            {copy.rows.map((r, i) => (
              <Reveal key={i} delay={i * 40} className="score-row">
                <span className="score-col score-area">{r.area}</span>
                <span className="score-col score-status">
                  <span className={`score-pill score-pill-${r.status}`}>{r.statusLabel}</span>
                </span>
                <span className="score-col score-trend">
                  <span className={`score-trend-${r.trend}`}>
                    {r.trend === "up" ? "↑" : r.trend === "down" ? "↓" : "→"}
                  </span>
                </span>
                <span className="score-col score-note">{r.note}</span>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============== v2.0 신규 (레거시 호환 JSX 병행본) ==============
   1급 산출 경로는 references/snippets-static.html의 정적 스니펫입니다. ============== */

/* Tree — 다분기 트리. copy: { root, branches:[{label, children:[]}] } */
function Tree({ copy }) {
  return (
    <section className="section tree-section">
      <div className="container">
        <Reveal>
          <ul className="tree">
            <li>
              <span className="tree-node root"><span className="tree-node-k">ROOT</span> {copy.root}</span>
              <ul>
                {copy.branches.map((b, i) => (
                  <li key={i}>
                    <span className="tree-node">{b.label}</span>
                    {b.children && b.children.length ? (
                      <ul>{b.children.map((c, j) => <li key={j}><span className="tree-node">{c}</span></li>)}</ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* LayerStack — 레이어 적층. copy: { layers:[{idx, h, p, tag, top}] } (위→아래) */
function LayerStack({ copy }) {
  return (
    <section className="section layerstack-section">
      <div className="container">
        <div className="layerstack">
          {copy.layers.map((l, i) => (
            <Reveal key={i} delay={i * 60} className={`ls-layer${l.top ? " top" : ""}`}>
              <span className="ls-idx">{l.idx}</span>
              <span className="ls-body"><span className="ls-h">{l.h}</span><span className="ls-p">{l.p}</span></span>
              <span className="ls-tag">{l.tag}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* PyramidShape — clip-path 삼각형. copy: { slices:[{label, l, r, apex}], legend:[{k, t}] } */
function PyramidShape({ copy }) {
  return (
    <section className="section pyramidshape-section">
      <div className="container">
        <Reveal>
          <div className="pyramidshape">
            <div className="ps-figure">
              {copy.slices.map((s, i) => (
                <div key={i} className={`ps-slice${s.apex ? " apex" : ""}`} style={{ "--l": s.l, "--r": s.r }}>{s.label}</div>
              ))}
            </div>
            <div className="ps-legend">
              {copy.legend.map((g, i) => (
                <div key={i} className="ps-legend-row"><span className="ps-legend-k">{g.k}</span> {g.t}</div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* PositionMap — 점 산포. copy: { yLabel, xLabel, dots:[{x, y, label, key}] } */
function PositionMap({ copy }) {
  return (
    <section className="section positionmap-section">
      <div className="container">
        <Reveal>
          <div className="positionmap-wrap">
            <div className="pm-y-label">{copy.yLabel}</div>
            <div className="pm-field">
              {copy.dots.map((d, i) => (
                <div key={i} className={`pm-dot${d.key ? " key" : ""}`} style={{ "--x": d.x, "--y": d.y }}><span className="pm-dot-label">{d.label}</span></div>
              ))}
            </div>
            <div className="pm-x-label">{copy.xLabel}</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Heatmap — 정규 격자 강도. copy: { cols:[], rows:[{label, cells:[{v, n, peak}]}] } */
function Heatmap({ copy }) {
  return (
    <section className="section heatmap-section">
      <div className="container">
        <Reveal>
          <div className="heatmap-wrap">
            <div className="heatmap" style={{ "--cols": copy.cols.length }}>
              <span className="hm-corner" />
              {copy.cols.map((c, i) => <span key={i} className="hm-colh">{c}</span>)}
              {copy.rows.map((r, i) => (
                <React.Fragment key={i}>
                  <span className="hm-rowh">{r.label}</span>
                  {r.cells.map((c, j) => (
                    <span key={j} className={`hm-cell${c.peak ? " peak" : ""}`} style={{ "--v": c.v }}>{c.n}</span>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* EcosystemMap — 중심-위성. copy: { center, satellites:[], r } */
function EcosystemMap({ copy }) {
  const r = copy.r || 230;
  const step = 360 / copy.satellites.length;
  return (
    <section className="section ecosystem-section">
      <div className="container">
        <Reveal>
          <div className="ecosystem">
            {copy.satellites.map((s, i) => <div key={`e${i}`} className="eco-edge" style={{ "--a": `${i * step}deg`, "--r": `${r}px` }} />)}
            <div className="eco-center">{copy.center}</div>
            {copy.satellites.map((s, i) => <div key={`s${i}`} className="eco-sat" style={{ "--a": `${i * step}deg`, "--r": `${r}px` }}>{s}</div>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

window.PRISM_SHAPES = { Pyramid, Venn, NetworkMap, GeoMap, Scorecard, Tree, LayerStack, PyramidShape, PositionMap, Heatmap, EcosystemMap };
