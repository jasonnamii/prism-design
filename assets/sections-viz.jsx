/* sections-viz.jsx — visualization templates for documents
   Roadmap, Flowchart, Funnel, OrgChart, Matrix2x2, InsightCards */

const { Eyebrow, Reveal } = window.PRISM_PRIMITIVES;

/* ============== INSIGHT CARDS (problem / solution / risk / option) ============== */
function InsightCards({ copy }) {
  return (
    <section className="section insight-section">
      <div className="container">
        <div className="insight-head">
          <Reveal><Eyebrow>{copy.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={80}><h2 className="display-3" style={{ marginTop: 12 }}>{copy.title}</h2></Reveal>
          <Reveal delay={160}><p className="body-lg" style={{ marginTop: 16, marginBottom: 56, maxWidth: 640 }}>{copy.sub}</p></Reveal>
        </div>
        <div className="insight-grid">
          {copy.cards.map((c, i) => (
            <Reveal key={i} delay={i * 60} className={`insight-card insight-${c.kind}`}>
              <div className="insight-tag">{c.tag}</div>
              <h3 className="insight-h">{c.h}</h3>
              <p className="insight-p">{c.p}</p>
              {c.foot && <div className="insight-foot">{c.foot}</div>}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== ROADMAP (Now / Next / Later) ============== */
function Roadmap({ copy }) {
  return (
    <section className="section roadmap-section">
      <div className="container">
        <div className="roadmap-head">
          <Reveal><Eyebrow>{copy.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={80}><h2 className="display-3" style={{ marginTop: 12, marginBottom: 56 }}>{copy.title}</h2></Reveal>
        </div>
        <div className="roadmap-grid">
          {copy.cols.map((col, i) => (
            <Reveal key={i} delay={i * 80} className={`roadmap-col roadmap-col-${i}`}>
              <div className="roadmap-col-head">
                <span className="roadmap-col-tag">{col.when}</span>
                <span className="roadmap-col-h">{col.h}</span>
              </div>
              <ul className="roadmap-items">
                {col.items.map((it, j) => (
                  <li key={j} className={`roadmap-item ${it.status || ""}`}>
                    <span className="roadmap-bullet" />
                    <span>{it.t}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== FLOWCHART (linear with branches) ============== */
function Flowchart({ copy }) {
  return (
    <section className="section flow-section">
      <div className="container">
        <div className="flow-head">
          <Reveal><Eyebrow>{copy.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={80}><h2 className="display-3" style={{ marginTop: 12, marginBottom: 56 }}>{copy.title}</h2></Reveal>
        </div>
        <Reveal delay={160}>
          <div className="flow-canvas">
            {copy.nodes.map((n, i) => (
              <React.Fragment key={i}>
                <div className={`flow-node flow-${n.kind}`}>
                  <span className="flow-node-k">{n.k}</span>
                  <span className="flow-node-h">{n.h}</span>
                  {n.p && <span className="flow-node-p">{n.p}</span>}
                </div>
                {i < copy.nodes.length - 1 && (
                  <div className="flow-arrow" aria-hidden>
                    <span className="flow-arrow-line" />
                    <span className="flow-arrow-tip">▶</span>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============== FUNNEL ============== */
function Funnel({ copy }) {
  const max = Math.max(...copy.steps.map(s => s.v));
  return (
    <section className="section funnel-section">
      <div className="container container-narrow">
        <Reveal><Eyebrow>{copy.eyebrow}</Eyebrow></Reveal>
        <Reveal delay={80}><h2 className="display-3" style={{ marginTop: 12 }}>{copy.title}</h2></Reveal>
        <Reveal delay={160}><p className="body-lg" style={{ marginTop: 16, marginBottom: 48 }}>{copy.sub}</p></Reveal>
        <div className="funnel">
          {copy.steps.map((s, i) => {
            const pct = (s.v / max) * 100;
            const conv = i === 0 ? null : Math.round((s.v / copy.steps[i-1].v) * 100);
            return (
              <Reveal key={i} delay={i * 80} className="funnel-row">
                <div className="funnel-meta">
                  <div className="funnel-step-name">{s.h}</div>
                  <div className="funnel-step-value">{s.v.toLocaleString()}</div>
                </div>
                <div className="funnel-bar-track">
                  <div className="funnel-bar" style={{ width: `${pct}%` }}>
                    <span className="funnel-bar-pct">{Math.round(pct)}%</span>
                  </div>
                </div>
                {conv !== null && <div className="funnel-conv">↓ {conv}%</div>}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============== ORG CHART ============== */
function OrgChart({ copy }) {
  return (
    <section className="section org-section">
      <div className="container">
        <div className="org-head">
          <Reveal><Eyebrow>{copy.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={80}><h2 className="display-3" style={{ marginTop: 12, marginBottom: 56 }}>{copy.title}</h2></Reveal>
        </div>
        <Reveal delay={160}>
          <div className="org-tree">
            {/* Root */}
            <div className="org-row org-root-row">
              <OrgNode person={copy.root} />
            </div>
            {/* connector */}
            <div className="org-connector-vert" />
            {/* L1 horizontal connector */}
            <div className="org-connector-horiz" style={{ "--n": copy.children.length }} />
            {/* L1 children */}
            <div className="org-row" style={{ gridTemplateColumns: `repeat(${copy.children.length}, 1fr)` }}>
              {copy.children.map((c, i) => (
                <div key={i} className="org-cluster">
                  <OrgNode person={c} />
                  {c.reports && c.reports.length > 0 && (
                    <>
                      <div className="org-connector-vert mini" />
                      <div className="org-reports">
                        {c.reports.map((r, j) => (
                          <div key={j} className="org-report">
                            <span className="org-report-dot" />
                            <span className="org-report-name">{r.n}</span>
                            <span className="org-report-role">{r.r}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
function OrgNode({ person }) {
  return (
    <div className={`org-node ${person.lead ? "is-lead" : ""}`}>
      <div className="org-avatar">{person.n[0]}</div>
      <div className="org-name">{person.n}</div>
      <div className="org-role">{person.r}</div>
    </div>
  );
}

/* ============== 2x2 MATRIX ============== */
function Matrix2x2({ copy }) {
  return (
    <section className="section matrix-section">
      <div className="container">
        <div className="matrix-head">
          <Reveal><Eyebrow>{copy.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={80}><h2 className="display-3" style={{ marginTop: 12 }}>{copy.title}</h2></Reveal>
          <Reveal delay={160}><p className="body-lg" style={{ marginTop: 16, marginBottom: 56, maxWidth: 640 }}>{copy.sub}</p></Reveal>
        </div>
        <Reveal delay={240}>
          <div className="matrix-wrap">
            <div className="matrix-axis matrix-y-label">{copy.yAxis}</div>
            <div className="matrix-axis matrix-x-label">{copy.xAxis}</div>
            <div className="matrix-y-low">{copy.yLow}</div>
            <div className="matrix-y-high">{copy.yHigh}</div>
            <div className="matrix-x-low">{copy.xLow}</div>
            <div className="matrix-x-high">{copy.xHigh}</div>
            <div className="matrix-grid">
              {copy.quadrants.map((q, i) => (
                <div key={i} className={`matrix-q matrix-q-${i}`}>
                  <div className="matrix-q-h">{q.h}</div>
                  <div className="matrix-q-sub">{q.sub}</div>
                  <ul className="matrix-q-items">
                    {q.items.map((it, j) => (
                      <li key={j}><span className="matrix-q-dot" />{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============== v2.0 신규 (레거시 호환 JSX 병행본) ==============
   1급 산출 경로는 references/snippets-static.html의 정적 스니펫입니다.
   아래 JSX는 기존 JSX 라이브러리 사용자를 위한 옵션입니다. ============== */

/* BranchFlow — 분기 플로우차트. copy: { start, decision, yes, no } */
function BranchFlow({ copy }) {
  return (
    <section className="section branchflow-section">
      <div className="container">
        <Reveal>
          <div className="branchflow">
            <div className="bf-node"><span className="bf-node-k">START</span><span className="bf-node-h">{copy.start}</span></div>
            <div className="bf-connector" />
            <div className="bf-decision"><span className="bf-decision-h">{copy.decision}</span></div>
            <div className="bf-branches">
              <div className="bf-branch"><span className="bf-label">YES</span><div className="bf-node"><span className="bf-node-k">PATH A</span><span className="bf-node-h">{copy.yes}</span></div></div>
              <div className="bf-branch"><span className="bf-label">NO</span><div className="bf-node"><span className="bf-node-k">PATH B</span><span className="bf-node-h">{copy.no}</span></div></div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Sequence — 시퀀스. copy: { actors:[], messages:[{label, accent, back}] } */
function Sequence({ copy }) {
  const cols = copy.actors.length;
  return (
    <section className="section sequence-section">
      <div className="container">
        <Reveal>
          <div className="sequence" style={{ "--cols": cols }}>
            <div className="seq-actors">{copy.actors.map((a, i) => <div key={i} className="seq-actor">{a}</div>)}</div>
            <div className="seq-lanes">
              {copy.actors.map((a, i) => <div key={i} className="seq-lane" />)}
              <div className="seq-messages">
                {copy.messages.map((m, i) => (
                  <div key={i} className={`seq-msg${m.accent ? " accent" : ""}${m.back ? " back" : ""}`}><span className="seq-msg-label">{m.label}</span></div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Pipeline — 입력→가공→출력. copy: { stages:[{k, h, p, accent}] } */
function Pipeline({ copy }) {
  return (
    <section className="section pipeline-section">
      <div className="container">
        <div className="pipeline">
          {copy.stages.map((s, i) => (
            <Reveal key={i} delay={i * 60} className={`pl-stage${s.accent ? " accent" : ""}`}>
              <span className="pl-stage-k">{s.k}</span><span className="pl-stage-h">{s.h}</span><span className="pl-stage-p">{s.p}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Gantt — 간트. copy: { units, ticks:[], rows:[{task, start, span, now}] } */
function Gantt({ copy }) {
  return (
    <section className="section gantt-section">
      <div className="container">
        <div className="gantt" style={{ "--units": copy.units }}>
          <div className="gantt-head">
            <div className="gantt-task">작업</div>
            <div className="gantt-scale">{copy.ticks.map((t, i) => <span key={i} className="gantt-tick">{t}</span>)}</div>
          </div>
          {copy.rows.map((r, i) => (
            <Reveal key={i} delay={i * 60} className="gantt-row">
              <div className="gantt-task">{r.task}</div>
              <div className="gantt-track"><div className={`gantt-bar${r.now ? " now" : ""}`} style={{ "--start": r.start, "--span": r.span }} /></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

window.PRISM_VIZ = { InsightCards, Roadmap, Flowchart, Funnel, OrgChart, Matrix2x2, BranchFlow, Sequence, Pipeline, Gantt };
