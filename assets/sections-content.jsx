/* sections-content.jsx — Features, Specs table, Pricing, Education menu */

const { Eyebrow, Reveal, Button } = window.PRISM_PRIMITIVES;

/* ============== EDU MENU ============== */
function EduMenu({ copy }) {
  return (
    <section className="section-tight edu-menu">
      <div className="container">
        <div className="edu-row">
          <div className="edu-left">
            <Reveal><Eyebrow prism>{copy.title}</Eyebrow></Reveal>
            <Reveal delay={80}><h3 className="headline-1" style={{ marginTop: 12, maxWidth: 520 }}>{copy.pitch}</h3></Reveal>
          </div>
          <div className="edu-grid">
            {copy.items.map((it, i) => (
              <Reveal key={i} delay={120 + i * 40} className="edu-item">
                <span className="edu-item-tag">{it.tag}</span>
                <span className="edu-item-label">{it.label}</span>
                <span className="edu-item-arrow">→</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============== FEATURES ============== */
function Features({ copy }) {
  return (
    <section id="foundations" className="section features">
      <div className="container">
        <div className="features-head">
          <Reveal><Eyebrow>{copy.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={80}><h2 className="display-3" style={{ marginTop: 12 }}>{copy.title}</h2></Reveal>
        </div>
        <div className="features-grid">
          {copy.cards.map((c, i) => (
            <Reveal key={i} delay={i * 60} className="feature-card">
              <div className="feature-num">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="headline-2">{c.h}</h3>
              <p className="body" style={{ marginTop: 8 }}>{c.p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============== SPECS TABLE ============== */
function SpecsTable({ copy }) {
  return (
    <section className="section specs-section">
      <div className="container container-narrow">
        <Reveal><Eyebrow>{copy.eyebrow}</Eyebrow></Reveal>
        <Reveal delay={80}><h2 className="display-3" style={{ marginTop: 12 }}>{copy.title}</h2></Reveal>
        <Reveal delay={160}><p className="body-lg" style={{ marginTop: 16, marginBottom: 48 }}>{copy.sub}</p></Reveal>

        <Reveal delay={240}>
          <table className="specs-table">
            <tbody>
              {copy.rows.map((r, i) => (
                <tr key={i}>
                  <th>{r.k}</th>
                  <td>{r.v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}

/* ============== PRICING ============== */
function Pricing({ copy }) {
  return (
    <section id="guidelines" className="section pricing-section">
      <div className="container">
        <div className="pricing-head">
          <Reveal><Eyebrow>{copy.eyebrow}</Eyebrow></Reveal>
          <Reveal delay={80}><h2 className="display-3" style={{ marginTop: 12 }}>{copy.title}</h2></Reveal>
        </div>

        <div className="pricing-grid">
          {copy.tiers.map((tier, i) => (
            <Reveal key={i} delay={i * 80} className={`pricing-tier ${tier.accent ? "is-accent" : ""}`}>
              {tier.accent && <div className="pricing-ribbon">Popular</div>}
              <div className="pricing-tier-name">{tier.name}</div>
              <div className="pricing-tier-price">
                <span className="pricing-amount">{tier.price}</span>
                <span className="pricing-period">{tier.period}</span>
              </div>
              <p className="body" style={{ marginTop: 4, marginBottom: 24 }}>{tier.desc}</p>
              <ul className="pricing-features">
                {tier.features.map((f, j) => (
                  <li key={j}>
                    <span className="pricing-check">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button variant={tier.accent ? "primary" : "secondary"} size="md">{tier.cta}</Button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

window.PRISM_CONTENT = { EduMenu, Features, SpecsTable, Pricing };
