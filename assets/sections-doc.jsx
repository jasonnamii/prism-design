/* sections-doc.jsx — document infrastructure
   Cover, ChapterDivider, Footnotes, Figure, MarginNote, Glossary, CodeBlock, DataTable, TLDR */

const { Eyebrow, Reveal } = window.PRISM_PRIMITIVES;

/* ============== COVER (title page) ============== */
function Cover({ copy }) {
  return (
    <section className="section-cover">
      <div className="container container-wide">
        <div className="cover-stamp">
          <span className="cover-stamp-k">{copy.kind}</span>
          <span className="cover-stamp-d">{copy.date}</span>
          <span className="cover-stamp-v">v{copy.version}</span>
        </div>
        <Reveal delay={80}>
          <h1 className="display-1 cover-title">
            {copy.title}<span className="prism-text cover-period">.</span>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="body-lg cover-sub">{copy.sub}</p>
        </Reveal>
        <Reveal delay={240}>
          <div className="cover-meta">
            <div className="cover-meta-row">
              <span className="cover-meta-k">{copy.byLabel}</span>
              <span className="cover-meta-v">{copy.by}</span>
            </div>
            <div className="cover-meta-row">
              <span className="cover-meta-k">{copy.lengthLabel}</span>
              <span className="cover-meta-v">{copy.length}</span>
            </div>
            <div className="cover-meta-row">
              <span className="cover-meta-k">{copy.audienceLabel}</span>
              <span className="cover-meta-v">{copy.audience}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============== CHAPTER DIVIDER (full-bleed) ============== */
function ChapterDivider({ chapter, title, sub }) {
  return (
    <section className="chapter-divider">
      <div className="container">
        <div className="chapter-num prism-text">{chapter}</div>
        <h2 className="chapter-title">{title}</h2>
        {sub && <p className="chapter-sub">{sub}</p>}
      </div>
    </section>
  );
}

/* ============== TLDR / SUMMARY BOX ============== */
function TLDR({ copy }) {
  return (
    <section className="section-tight tldr-section">
      <div className="container container-narrow">
        <Reveal>
          <div className="tldr-box">
            <div className="tldr-tag">{copy.tag}</div>
            <h3 className="tldr-h">{copy.h}</h3>
            <ul className="tldr-list">
              {copy.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============== FIGURE (caption + numbering) ============== */
function Figure({ copy }) {
  return (
    <section className="section-tight figure-section">
      <div className="container container-narrow">
        <Reveal><Eyebrow>{copy.eyebrow}</Eyebrow></Reveal>
        <Reveal delay={80}><h2 className="display-3" style={{ marginTop: 12, marginBottom: 32 }}>{copy.title}</h2></Reveal>
        <Reveal delay={160}>
          <figure className="prism-figure">
            <div className="prism-figure-frame">
              <div className="img-placeholder" style={{ aspectRatio: "16 / 9" }} />
            </div>
            <figcaption className="prism-figcaption">
              <span className="prism-fignum prism-text">{copy.figNum}</span>
              <span className="prism-figtxt">{copy.cap}</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

/* ============== MARGIN NOTE (sidebar) ============== */
function MarginNote({ copy }) {
  return (
    <section className="section-tight margin-section">
      <div className="container">
        <div className="margin-grid">
          <div className="margin-body">
            <Reveal><Eyebrow>{copy.eyebrow}</Eyebrow></Reveal>
            <Reveal delay={80}><h2 className="display-3" style={{ marginTop: 12, marginBottom: 24 }}>{copy.title}</h2></Reveal>
            <Reveal delay={160}>
              <div className="margin-prose">
                {copy.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>
          <aside className="margin-rail">
            {copy.notes.map((n, i) => (
              <Reveal key={i} delay={80 + i * 80} className="margin-note">
                <div className="margin-note-k">{n.k}</div>
                <div className="margin-note-p">{n.p}</div>
              </Reveal>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ============== GLOSSARY (definition list) ============== */
function Glossary({ copy }) {
  return (
    <section className="section glossary-section">
      <div className="container container-narrow">
        <Reveal><Eyebrow>{copy.eyebrow}</Eyebrow></Reveal>
        <Reveal delay={80}><h2 className="display-3" style={{ marginTop: 12, marginBottom: 48 }}>{copy.title}</h2></Reveal>
        <dl className="glossary-list">
          {copy.terms.map((t, i) => (
            <Reveal key={i} delay={i * 40}>
              <div className="glossary-row">
                <dt className="glossary-term">{t.t}</dt>
                <dd className="glossary-def">{t.d}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ============== CODE BLOCK ============== */
function CodeBlock({ copy }) {
  return (
    <section className="section-tight code-section">
      <div className="container container-narrow">
        <Reveal><Eyebrow>{copy.eyebrow}</Eyebrow></Reveal>
        <Reveal delay={80}><h2 className="display-3" style={{ marginTop: 12, marginBottom: 32 }}>{copy.title}</h2></Reveal>
        <Reveal delay={160}>
          <div className="code-block">
            <div className="code-bar">
              <span className="code-dot" /><span className="code-dot" /><span className="code-dot" />
              <span className="code-file">{copy.file}</span>
              <span className="code-lang">{copy.lang}</span>
            </div>
            <pre className="code-pre"><code>{copy.code}</code></pre>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============== DATA TABLE (raw rows, sortable feel) ============== */
function DataTable({ copy }) {
  return (
    <section className="section dtable-section">
      <div className="container">
        <div style={{ maxWidth: 720 }}>
          <Reveal><Eyebrow>{copy.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={80}><h2 className="display-3" style={{ marginTop: 12 }}>{copy.title}</h2></Reveal>
          <Reveal delay={160}><p className="body-lg" style={{ marginTop: 16, marginBottom: 32 }}>{copy.sub}</p></Reveal>
        </div>
        <Reveal delay={240}>
          <div className="dtable-wrap">
            <table className="dtable">
              <thead>
                <tr>{copy.cols.map((c, i) => <th key={i}>{c}</th>)}</tr>
              </thead>
              <tbody>
                {copy.rows.map((r, i) => (
                  <tr key={i}>
                    {r.map((v, j) => <td key={j} className={j === 0 ? "dtable-key" : ""}>{v}</td>)}
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

/* ============== FOOTNOTES (numbered list + back-refs) ============== */
function Footnotes({ copy }) {
  return (
    <section className="section-tight footnotes-section">
      <div className="container container-narrow">
        <Reveal>
          <div className="footnotes-head">
            <Eyebrow>{copy.eyebrow}</Eyebrow>
            <h3 className="footnotes-title">{copy.title}</h3>
          </div>
        </Reveal>
        <ol className="footnotes-list">
          {copy.notes.map((n, i) => (
            <Reveal key={i} delay={i * 30}>
              <li id={`fn-${i+1}`} className="footnote-row">
                <span className="footnote-num prism-text">{i + 1}</span>
                <div className="footnote-body">
                  <div className="footnote-text">{n.t}</div>
                  {n.src && <div className="footnote-src">{n.src}</div>}
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

window.PRISM_DOC = {
  Cover, ChapterDivider, TLDR, Figure, MarginNote, Glossary, CodeBlock, DataTable, Footnotes,
};
