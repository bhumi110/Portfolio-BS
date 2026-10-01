import React from "react";
import profilePhoto from "../assets/profile.png";

const SKILLS = [
  "EDA",
  "Power BI",
  "DAX",
  "SQL",
  "MySQL",
  "Python",
  "Pandas",
  "Power Query",
  "Excel",
  "Data Modelling",
];

function Hero() {
  // Duplicate the list so the marquee loops seamlessly (animates -50%)
  const track = [...SKILLS, ...SKILLS];

  return (
    <section id="hero" className="hero">
      <style>{css}</style>

      <div className="hero__inner">
        {/* ---------- Left: copy ---------- */}
        <div className="hero__copy">

          <h1 className="hero__name">
            Bhumi
            <br />
            <span>Saraogi</span>
          </h1>

          <p className="hero__tagline">
            I turn messy operational data into decisions people can act on.
          </p>

          <p className="hero__bio">
            Final-year Computer Science student who enjoys turning messy data and real-world problems into something people can actually understand and use. I work with SQL, Python, Excel, and Power BI to uncover patterns, build dashboards, and create practical, data-driven solutions.

          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View Projects
            </a>
            <a
              href="/BHUMI_RESUME.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              View Resume
            </a>
          </div>

          <div className="hero__status">
            <span className="hero__dot" />
            Open to internships &amp; entry-level analyst roles
          </div>
        </div>

        {/* ---------- Right: photo ---------- */}
        <div className="hero__photo-wrap">
          <div className="hero__photo">
            <img src={profilePhoto} alt="Bhumi Saraogi" />
            <div className="hero__photo-fade" />

            {/* <div className="stat stat--left">
              <strong className="stat__value stat__value--accent">50k</strong>
              <span className="stat__label">Orders analysed</span>
            </div>
            <div className="stat stat--right">
              <strong className="stat__value">27</strong>
              <span className="stat__label">Public repos</span>
            </div> */}
          </div>
        </div>
      </div>

      {/* ---------- Skills marquee ---------- */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {track.map((skill, i) => (
            <span className="marquee__item" key={i}>
              <i className="marquee__dot" />
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@400;500&display=swap');

.hero {
  --bg: #0c0b14;
  --ink: #f3efe8;
  --muted: #a8a39b;
  --accent: #f261bf;
  --purple: #a855f7;
  --blue: #6366f1;
  --line: rgba(255,255,255,0.14);

  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--bg);
  background-image: radial-gradient(rgba(255,255,255,0.045) 1px, transparent 1px);
  background-size: 4px 4px;
  color: var(--ink);
  font-family: 'Space Grotesk', system-ui, sans-serif;
  overflow: hidden;
}

.hero__inner {
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 96px 28px 56px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  gap: 56px;
  align-items: center;
}

/* ---- copy ---- */
.hero__eyebrow {
  display: flex;
  align-items: center;
  gap: 14px;
  margin: 0 0 22px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
}
.hero__eyebrow-line {
  width: 36px;
  height: 1px;
  background: var(--accent);
}

.hero__name {
  margin: 0 0 28px;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 500;
  font-size: clamp(3rem, 7vw, 5rem);
  line-height: 1.02;
  letter-spacing: -0.03em;
  color: var(--ink);
}
.hero__name span {
  background: linear-gradient(90deg, var(--accent) 0%, var(--purple) 55%, var(--blue) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.hero__tagline {
  margin: 0 0 18px;
  max-width: 26ch;
  font-size: clamp(1.15rem, 2vw, 1.4rem);
  line-height: 1.4;
  font-weight: 500;
}

.hero__bio {
  margin: 0 0 34px;
  max-width: 52ch;
  font-size: 1rem;
  line-height: 1.7;
  color: var(--muted);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 26px;
}

.btn {
  display: inline-block;
  padding: 13px 22px;
  border-radius: 2px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  text-decoration: none;
  transition: background-color .18s ease, border-color .18s ease, color .18s ease;
}
.btn:focus-visible,
.hero__photo:focus-visible { outline: 2px solid var(--ink); outline-offset: 3px; }
.btn--primary {
  background: linear-gradient(135deg, var(--blue), #7c3aed);
  color: #fff;
  border: 1px solid transparent;
  box-shadow: 0 4px 24px rgba(99,102,241,0.4);
}
.btn--primary:hover {
  background: linear-gradient(135deg, #4f52d3, #6a30cc);
  box-shadow: 0 6px 30px rgba(99,102,241,0.55);
}
.btn--ghost { background: transparent; color: var(--ink); border: 1px solid var(--line); }
.btn--ghost:hover { border-color: var(--purple); }

.hero__status {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  border: 1px solid var(--line);
  border-radius: 2px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.66rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
}
.hero__dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 8px var(--accent);
  flex-shrink: 0;
}

/* ---- photo ---- */
.hero__photo-wrap {
  display: flex;
  justify-content: center;
}
.hero__photo {
  position: relative;
  width: 100%;
  max-width: 480px;
  aspect-ratio: 0.72;
  border-radius: 150px 150px 14px 14px;
  overflow: hidden;
  background: linear-gradient(160deg, #f9a8d4 0%, #c084fc 50%, #818cf8 100%);
  box-shadow: 0 0 120px rgba(168,85,247,0.3);
}
.hero__photo img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}
.hero__photo-fade {
  position: absolute;
  inset: auto 0 0 0;
  height: 34%;
  background: linear-gradient(to top, rgba(12,11,20,0.95), transparent);
}

.stat {
  position: absolute;
  bottom: 14px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px 16px;
  background: rgba(12,11,20,0.88);
  border: 1px solid var(--line);
  border-radius: 2px;
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}
.stat--left { left: 14px; }
.stat--right { right: 14px; }
.stat__value {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1.05rem;
  font-weight: 500;
  line-height: 1;
}
.stat__value--accent { color: var(--accent); }
.stat__label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.6rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--muted);
}

/* ---- marquee ---- */
.marquee {
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  padding: 16px 0;
  overflow: hidden;
  background: rgba(0,0,0,0.25);
}
.marquee__track {
  display: flex;
  width: max-content;
  animation: hero-marquee 32s linear infinite;
}
.marquee__item {
  display: inline-flex;
  align-items: center;
  gap: 28px;
  padding-right: 28px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--muted);
  white-space: nowrap;
}
.marquee__item::before { content: none; }
.marquee__dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent), var(--blue));
  display: inline-block;
}

@keyframes hero-marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
@media (prefers-reduced-motion: reduce) {
  .marquee__track { animation: none; }
}

/* ---- responsive ---- */
@media (max-width: 860px) {
  .hero__inner {
    grid-template-columns: 1fr;
    gap: 44px;
    padding-top: 88px;
  }
  .hero__photo-wrap { order: -1; }
  .hero__photo { max-width: 340px; border-radius: 110px 110px 12px 12px; }
}
`;

export default Hero;