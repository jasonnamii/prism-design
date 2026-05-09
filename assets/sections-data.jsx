/* sections-data.jsx — infographic, comparison, data viz, document templates */

const { Eyebrow, Reveal } = window.PRISM_PRIMITIVES;

/* ============== STAT GRID (big-number infographic) ============== */
function StatGrid({ copy }) {
  return (
    <section className="section stats-section">
      <div className="container">
        <div className="stats-head">
          <Reveal><Eyebrow>{copy.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={80}><h2 className="display-3" style={{ marginTop: 12 }}>{copy.title}</h2></Reveal>
          <Reveal delay={160}><p className="body-lg" style={{ marginTop: 16 }}>{copy.sub}</p></Reveal>
        </div>
        <div className="stats-grid">
          {copy.items.map((s, i) => (
            <Reveal key={i} delay={i * 50} className="stat-cell">
              <div className="stat-value">{s.v}</div>
              <div className="stat-label">{s.l}</div>
              <div className="stat-desc">{s.d}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== PULL QUOTE ============== */
function PullQuote({ copy }) {
  return (
    <section className="section-tight quote-section">
      <div className="container container-narrow">
        <Reveal><Eyebrow>{copy.eyebrow}</Eyebrow></Reveal>
        <Reveal delay={80}>
          <blockquote className="pull-quote">
            <span className="pull-mark prism-text">"</span>
            {copy.body}
          </blockquote>
        </Reveal>
        <Reveal delay={160}>
          <div className="pull-cite">
            <span className="pull-cite-name">{copy.cite}</span>
            <span className="pull-cite-role">{copy.role}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============== TIMELINE / PROCESS ============== */
function Timeline({ copy }) {
  return (
    <section className="section timeline-section">
      <div className="container">
        <div className="timeline-head">
          <Reveal><Eyebrow>{copy.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={80}><h2 className="display-3" style={{ marginTop: 12 }}>{copy.title}</h2></Reveal>
          <Reveal delay={160}><p className="body-lg" style={{ marginTop: 16, marginBottom: 56, maxWidth: 640 }}>{copy.sub}</p></Reveal>
        </div>
        <div className="timeline-track">
          <div className="timeline-rule" aria-hidden />
          {copy.steps.map((s, i) => (
            <Reveal key={i} delay={i * 80} className="timeline-step">
              <div className="timeline-dot" />
              <div className="timeline-key">{s.k}</div>
              <div className="timeline-h">{s.h}</div>
              <div className="timeline-p">{s.p}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== COMPARISON MATRIX ============== */
function Comparison({ copy }) {
  return (
    <section className="section compare-section">
      <div className="container container-narrow">
        <Reveal><Eyebrow>{copy.eyebrow}</Eyebrow></Reveal>
        <Reveal delay={80}><h2 className="display-3" style={{ marginTop: 12 }}>{copy.title}</h2></Reveal>
        <Reveal delay={160}><p className="body-lg" style={{ marginTop: 16, marginBottom: 48 }}>{copy.sub}</p></Reveal>
        <Reveal delay={240}>
          <div className="compare-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  {copy.cols.map((c, i) => (
                    <th key={i} className={i === 2 ? "is-accent" : ""}>{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {copy.rows.map((r, i) => (
                  <tr key={i}>
                    {r.map((v, j) => (
                      <td key={j} className={`${j === 0 ? "compare-key" : "compare-val"} ${j === 2 ? "is-accent" : ""}`}>
                        {j === 0 ? v : (
                          v === "●" ? <span className="compare-yes">●</span> :
                          v === "—" ? <span className="compare-no">—</span> : v
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============== DATA VIZ FRAMES ============== */
function DataViz({ copy }) {
  return (
    <section className="section dataviz-section">
      <div className="container">
        <div className="dataviz-head">
          <Reveal><Eyebrow>{copy.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={80}><h2 className="display-3" style={{ marginTop: 12 }}>{copy.title}</h2></Reveal>
          <Reveal delay={160}><p className="body-lg" style={{ marginTop: 16, marginBottom: 56, maxWidth: 640 }}>{copy.sub}</p></Reveal>
        </div>
        <div className="dataviz-grid">
          {copy.frames.map((f, i) => (
            <Reveal key={i} delay={i * 80} className="dataviz-card">
              <div className="dataviz-frame">
                <ChartSvg kind={f.kind} />
              </div>
              <div className="dataviz-cap">{f.cap}</div>
              <div className="dataviz-note">{f.note}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* tiny chart placeholder svgs — minimal, monochrome, with single prism accent */
function ChartSvg({ kind }) {
  if (kind === "line") {
    return (
      <svg viewBox="0 0 320 180" className="chart-svg">
        <line x1="20" y1="160" x2="300" y2="160" className="chart-axis"/>
        <line x1="20" y1="160" x2="20"  y2="20"  className="chart-axis"/>
        {[40, 80, 120].map((y, i) => <line key={i} x1="20" y1={y} x2="300" y2={y} className="chart-grid"/>)}
        <polyline points="30,130 70,100 110,115 150,70 190,85 230,40 270,55 295,30" className="chart-line"/>
        <polyline points="30,140 70,135 110,128 150,118 190,108 230,88 270,72 295,52" className="chart-line dim"/>
      </svg>
    );
  }
  if (kind === "bar") {
    return (
      <svg viewBox="0 0 320 180" className="chart-svg">
        <line x1="20" y1="160" x2="300" y2="160" className="chart-axis"/>
        {[
          [40, 90], [70, 60], [100, 110], [130, 45], [160, 80],
          [190, 70], [220, 30], [250, 95], [280, 50],
        ].map(([x, h], i) => (
          <rect key={i} x={x} y={160 - h} width="18" height={h}
            className={i === 6 ? "chart-bar accent" : "chart-bar"}/>
        ))}
      </svg>
    );
  }
  // donut
  return (
    <svg viewBox="0 0 320 180" className="chart-svg">
      <g transform="translate(160 90)">
        <circle r="54" fill="none" className="chart-grid" strokeWidth="22"/>
        <circle r="54" fill="none" className="chart-line" strokeWidth="22"
                strokeDasharray="220 340" strokeLinecap="butt"
                transform="rotate(-90)"/>
        <text textAnchor="middle" y="6" className="chart-num">64%</text>
      </g>
    </svg>
  );
}

/* ============== FAQ ============== */
function FAQ({ copy }) {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="section faq-section">
      <div className="container container-narrow">
        <Reveal><Eyebrow>{copy.eyebrow}</Eyebrow></Reveal>
        <Reveal delay={80}><h2 className="display-3" style={{ marginTop: 12, marginBottom: 48 }}>{copy.title}</h2></Reveal>
        <div className="faq-list">
          {copy.items.map((it, i) => (
            <Reveal key={i} delay={i * 50} className={`faq-row ${open === i ? "is-open" : ""}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{it.q}</span>
                <span className="faq-toggle" aria-hidden>{open === i ? "−" : "+"}</span>
              </button>
              <div className="faq-a-wrap">
                <div className="faq-a">{it.a}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== CHANGELOG ============== */
function Changelog({ copy }) {
  return (
    <section className="section changelog-section">
      <div className="container container-narrow">
        <Reveal><Eyebrow>{copy.eyebrow}</Eyebrow></Reveal>
        <Reveal delay={80}><h2 className="display-3" style={{ marginTop: 12 }}>{copy.title}</h2></Reveal>
        <Reveal delay={160}><p className="body-lg" style={{ marginTop: 16, marginBottom: 56 }}>{copy.sub}</p></Reveal>
        <div className="changelog-list">
          {copy.entries.map((e, i) => (
            <Reveal key={i} delay={i * 60} className="changelog-entry">
              <div className="changelog-meta">
                <span className="changelog-v">{e.v}</span>
                <span className="changelog-d">{e.d}</span>
              </div>
              <ul className="changelog-notes">
                {e.notes.map((n, j) => <li key={j}>{n}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== CALLOUT BLOCKS ============== */
function Callouts({ copy }) {
  return (
    <section className="section callout-section">
      <div className="container container-narrow">
        <Reveal><Eyebrow>{copy.eyebrow}</Eyebrow></Reveal>
        <Reveal delay={80}><h2 className="display-3" style={{ marginTop: 12 }}>{copy.title}</h2></Reveal>
        <Reveal delay={160}><p className="body-lg" style={{ marginTop: 16, marginBottom: 48 }}>{copy.sub}</p></Reveal>
        <div className="callout-stack">
          {copy.items.map((c, i) => (
            <Reveal key={i} delay={i * 60} className={`callout callout-${c.kind}`}>
              <div className="callout-h">{c.h}</div>
              <div className="callout-p">{c.p}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

window.PRISM_DATA = { StatGrid, PullQuote, Timeline, Comparison, DataViz, FAQ, Changelog, Callouts };
