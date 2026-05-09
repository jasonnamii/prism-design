/* primitives.jsx — buttons, badges, image placeholders, nav, footer */

const { useState, useEffect, useRef } = React;

/* ---------- Button ---------- */
function Button({ variant = "primary", size = "md", children, onClick, as, href, ...rest }) {
  const cls = `btn btn-${variant} btn-${size}`;
  if (as === "a" || href) return <a className={cls} href={href} onClick={onClick} {...rest}>{children}</a>;
  return <button className={cls} onClick={onClick} {...rest}>{children}</button>;
}

/* ---------- Eyebrow ---------- */
function Eyebrow({ children, prism }) {
  return <div className={`eyebrow ${prism ? "prism-text" : ""}`}>{children}</div>;
}

/* ---------- Reveal-on-scroll wrapper ---------- */
function Reveal({ children, delay = 0, as: As = "div", ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          setTimeout(() => el.classList.add("in"), delay);
          io.unobserve(el);
        }
      }),
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return <As ref={ref} className={`reveal ${rest.className || ""}`} {...rest}>{children}</As>;
}

/* ---------- ImagePlaceholder ---------- */
function ImagePlaceholder({ ratio = "16/9", label = "image", style }) {
  return (
    <div className="img-placeholder" style={{ aspectRatio: ratio, ...style }}>
      <span>{label}</span>
    </div>
  );
}

/* ---------- TopNav (translucent blur) ---------- */
function TopNav({ copy, theme, setTheme, lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`topnav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container topnav-inner">
        <a className="topnav-brand" href="#top">
          <span className="topnav-mark" aria-hidden>
            <span className="topnav-mark-dot" />
          </span>
          <span>{copy.brand}</span>
        </a>

        <ul className="topnav-links">
          {copy.links.map((l, i) => <li key={i}><a href={`#${l.toLowerCase()}`}>{l}</a></li>)}
        </ul>

        <div className="topnav-actions">
          <button
            className="topnav-icon"
            aria-label="Toggle language"
            onClick={() => setLang(lang === "en" ? "ko" : "en")}
            title={lang === "en" ? "한국어로 보기" : "Switch to English"}
          >
            {lang === "en" ? "한" : "EN"}
          </button>
          <button
            className="topnav-icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            title={theme === "dark" ? "Light mode" : "Dark mode"}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <Button variant="primary" size="sm">{copy.cta}</Button>
        </div>
      </div>
    </nav>
  );
}

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeLinecap="round"/>
    </svg>
  );
}
function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" strokeLinejoin="round"/>
    </svg>
  );
}

/* ---------- Footer ---------- */
function Footer({ copy }) {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-mark"><span/></div>
            <h3 className="headline-1">Prism</h3>
            <p className="body" style={{ maxWidth: 320 }}>{copy.tagline}</p>
          </div>
          <div className="footer-cols">
            {copy.cols.map((c, i) => (
              <div key={i} className="footer-col">
                <h4 className="footer-col-h">{c.h}</h4>
                <ul>
                  {c.links.map((l, j) => <li key={j}><a href="#">{l}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span className="caption">{copy.legal}</span>
          <span className="caption" style={{ fontFamily: "var(--font-mono)" }}>v1.0.0</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- ReadingProgress (top bar) ---------- */
function ReadingProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setPct(max > 0 ? Math.min(100, (h.scrollTop / max) * 100) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="reading-progress" aria-hidden>
      <div className="reading-progress-bar" style={{ width: `${pct}%` }} />
    </div>
  );
}

/* ---------- StickyTOC (right-rail, scrollspy) ---------- */
function StickyTOC({ items }) {
  const [active, setActive] = useState(items[0]?.id);
  useEffect(() => {
    const els = items.map(i => document.getElementById(i.id)).filter(Boolean);
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [items]);
  return (
    <aside className="sticky-toc" aria-label="Table of contents">
      <div className="sticky-toc-inner">
        <div className="sticky-toc-h">Contents</div>
        <ul>
          {items.map((it) => (
            <li key={it.id}>
              <a href={`#${it.id}`}
                 className={active === it.id ? "is-active" : ""}>
                <span className="sticky-toc-num">{it.num}</span>
                <span className="sticky-toc-t">{it.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

window.PRISM_PRIMITIVES = { Button, Eyebrow, Reveal, ImagePlaceholder, TopNav, Footer, ReadingProgress, StickyTOC };
