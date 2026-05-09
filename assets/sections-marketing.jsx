/* sections-marketing.jsx — Hero, Bento grid, Sticky showcase, Video module */

const { Eyebrow, Reveal, Button, ImagePlaceholder } = window.PRISM_PRIMITIVES;

/* ============== HERO ============== */
function Hero({ copy }) {
  return (
    <section id="overview" className="hero section-hero">
      <div className="hero-aurora" aria-hidden />
      <div className="container container-narrow hero-inner">
        <Reveal><div className="eyebrow prism-text">{copy.eyebrow}</div></Reveal>
        <Reveal delay={80}>
          <h1 className="display-1 hero-title">
            <span>{copy.title1}</span>
            <span className="prism-text"> {copy.title2}</span>
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="body-lg hero-sub">{copy.sub}</p>
        </Reveal>
        <Reveal delay={240}>
          <div className="hero-ctas">
            <Button variant="primary" size="lg">{copy.ctaPrimary}</Button>
            <Button variant="ghost" size="lg">{copy.ctaSecondary} →</Button>
          </div>
        </Reveal>
      </div>

      <Reveal delay={320} className="hero-stage">
        <div className="hero-stage-frame">
          <image-slot
            id="hero-product"
            shape="rounded"
            radius="22"
            placeholder="Drop hero product shot — 16:9"
            style={{ width: "100%", aspectRatio: "16 / 9", display: "block" }}
          ></image-slot>
        </div>
        <div className="hero-stage-glow" aria-hidden />
      </Reveal>
    </section>
  );
}

/* ============== BENTO ============== */
function Bento({ copy }) {
  const t = copy.tiles;
  return (
    <section id="components" className="section bento">
      <div className="container">
        <Reveal><Eyebrow>{copy.eyebrow}</Eyebrow></Reveal>
        <Reveal delay={80}><h2 className="display-3 bento-title">{copy.title}</h2></Reveal>
        <Reveal delay={160}><p className="body-lg bento-sub">{copy.sub}</p></Reveal>

        <div className="bento-grid">
          {/* Tile 1 — Type, large */}
          <Reveal className="bento-tile bento-type" delay={40}>
            <div className="tile-kicker">{t.type.kicker}</div>
            <div className="tile-type-stack">
              <span style={{ fontSize: 84, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1 }}>Aa</span>
              <span style={{ fontSize: 28, fontWeight: 600, color: "var(--fg-secondary)" }}>가나다</span>
            </div>
            <div className="tile-title">{t.type.title.split("\n").map((l, i) => <div key={i}>{l}</div>)}</div>
          </Reveal>

          {/* Tile 2 — Color */}
          <Reveal className="bento-tile bento-color" delay={80}>
            <div className="tile-kicker">{t.color.kicker}</div>
            <div className="tile-color-strip">
              {[1,2,3,4,5,6].map(i => <div key={i} style={{ background: `var(--prism-${i})` }} />)}
            </div>
            <div className="tile-title">{t.color.title.split("\n").map((l, i) => <div key={i}>{l}</div>)}</div>
          </Reveal>

          {/* Tile 3 — Motion */}
          <Reveal className="bento-tile bento-motion" delay={120}>
            <div className="tile-kicker">{t.motion.kicker}</div>
            <div className="tile-motion-viz">
              <div className="motion-line" />
              <div className="motion-line" style={{ animationDelay: "0.4s" }} />
              <div className="motion-line" style={{ animationDelay: "0.8s" }} />
            </div>
            <div className="tile-title">{t.motion.title.split("\n").map((l, i) => <div key={i}>{l}</div>)}</div>
          </Reveal>

          {/* Tile 4 — Bilingual */}
          <Reveal className="bento-tile bento-bilingual" delay={160}>
            <div className="tile-kicker">{t.bilingual.kicker}</div>
            <div className="tile-bilingual-stack">
              <span className="bil-en">English</span>
              <span className="bil-divider" />
              <span className="bil-ko">한국어</span>
            </div>
            <div className="tile-title">{t.bilingual.title.split("\n").map((l, i) => <div key={i}>{l}</div>)}</div>
          </Reveal>

          {/* Tile 5 — Density */}
          <Reveal className="bento-tile bento-density" delay={200}>
            <div className="tile-kicker">{t.density.kicker}</div>
            <div className="tile-density-viz">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} style={{ width: `${100 - i*10}%` }} />
              ))}
            </div>
            <div className="tile-title">{t.density.title}</div>
          </Reveal>

          {/* Tile 6 — Bento */}
          <Reveal className="bento-tile bento-meta" delay={240}>
            <div className="tile-kicker">{t.bento.kicker}</div>
            <div className="tile-meta-grid">
              <div /><div /><div className="span2" />
              <div className="span2" /><div /><div />
            </div>
            <div className="tile-title">{t.bento.title}</div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============== STICKY SHOWCASE ============== */
function StickyShowcase({ copy }) {
  const [active, setActive] = useState(0);
  const refs = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number(e.target.dataset.idx);
            setActive(idx);
          }
        });
      },
      { threshold: 0.6 }
    );
    refs.current.forEach((r) => r && io.observe(r));
    return () => io.disconnect();
  }, []);

  return (
    <section className="section sticky-section">
      <div className="container">
        <Reveal><Eyebrow>{copy.eyebrow}</Eyebrow></Reveal>
        <Reveal delay={80}><h2 className="display-3" style={{ marginTop: 12, marginBottom: 64 }}>{copy.title}</h2></Reveal>

        <div className="sticky-layout">
          {/* Sticky stage on left */}
          <div className="sticky-stage-wrap">
            <div className="sticky-stage">
              <div className="sticky-stage-bg" aria-hidden />
              <div className="sticky-stage-numbers">
                {copy.steps.map((_, i) => (
                  <div key={i} className={`sticky-num ${i === active ? "active" : ""}`}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                ))}
              </div>
              <div className="sticky-stage-content">
                <div className="sticky-stage-headline">
                  {copy.steps[active].h}
                </div>
              </div>
            </div>
          </div>

          {/* Scrolling story on right */}
          <div className="sticky-story">
            {copy.steps.map((s, i) => (
              <div
                key={i}
                ref={(el) => (refs.current[i] = el)}
                data-idx={i}
                className="sticky-step"
              >
                <div className="sticky-step-num">{String(i + 1).padStart(2, "0")}</div>
                <h3 className="headline-1">{s.h}</h3>
                <p className="body-lg" style={{ marginTop: 16 }}>{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============== VIDEO MODULE ============== */
function VideoModule({ copy }) {
  return (
    <section className="section video-section">
      <div className="container">
        <Reveal><Eyebrow>{copy.eyebrow}</Eyebrow></Reveal>
        <Reveal delay={80}><h2 className="display-3" style={{ marginTop: 12 }}>{copy.title}</h2></Reveal>
        <Reveal delay={160}><p className="body-lg" style={{ maxWidth: 640, marginTop: 16, marginBottom: 48 }}>{copy.sub}</p></Reveal>

        <Reveal delay={240}>
          <div className="video-frame">
            <image-slot
              id="video-poster"
              shape="rounded"
              radius="20"
              placeholder="Drop video poster — 16:9"
              style={{ width: "100%", aspectRatio: "16/9", display: "block" }}
            ></image-slot>
            <div className="video-controls">
              <button className="video-play" aria-label="Play">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </button>
              <div className="video-scrub">
                <div className="video-scrub-fill" />
              </div>
              <span className="video-time">{copy.caption}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

window.PRISM_MARKETING = { Hero, Bento, StickyShowcase, VideoModule };
