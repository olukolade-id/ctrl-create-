"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Showreel, WorkGrid } from "@/components/work-grid";
import { CustomCursor } from "@/components/custom-cursor";
import { ContactForm } from "@/components/contact-form";
import { ArchiveGallery } from "@/components/archive-gallery";
import { ProofSection } from "@/components/proof-section";

type ToolMode = "MOVE" | "WARP" | "PULSE" | "SPIN" | "INVERT" | "RESET";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Page() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursor, setCursor] = useState({ x: 50, y: 50 });
  const [activeTool, setActiveTool] = useState<ToolMode>("MOVE");
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 1500);
    const move = (event: PointerEvent) =>
      setCursor({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    window.addEventListener("pointermove", move);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("pointermove", move);
    };
  }, []);

  const offsetX = cursor.x - 50;
  const offsetY = cursor.y - 50;

  // Each playground mode reads the same pointer data differently, so the
  // three buttons are actually distinct behaviors, not just labels.
  const playgroundTransform = useMemo(() => {
    if (activeTool === "RESET") return "translate(0px, 0px) scale(1) rotate(0deg)";
    if (activeTool === "SPIN") {
      return `translate(${offsetX / 5}px, ${offsetY / 5}px) scale(1.08) rotate(${offsetX * 1.2}deg)`;
    }
    if (activeTool === "WARP") {
      const scale = 1 + Math.min(Math.abs(offsetX), 40) / 120;
      return `translate(${offsetX / 3}px, ${offsetY / 3}px) scale(${scale}) rotate(${offsetX / 6}deg)`;
    }
    return `translate(${offsetX / 8}px, ${offsetY / 8}px)`;
  }, [activeTool, offsetX, offsetY]);

  return (
    <main
      className="site-shell"
      style={
        {
          "--cursor-x": `${cursor.x}%`,
          "--cursor-y": `${cursor.y}%`,
        } as React.CSSProperties
      }
    >
      <CustomCursor disabled={Boolean(prefersReducedMotion)} />
      <AnimatePresence>
        {loading && (
          <motion.div
            className="loader"
            aria-hidden={!loading}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
          >
            <div className="loader__top">
              <span>CC / 001</span>
              <span>LOADING EXPERIENCE</span>
            </div>
            <div className="loader__word">
              CTRL<span>+</span>CREATE
            </div>
            <div className="loader__bottom">
              <span>CREATIVE PRACTICE</span>
              <span>2024—2026</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <header className="site-header">
        <a
          className="wordmark"
          href="#top"
          data-cursor="hover"
          aria-label="CTRL + CREATE home"
        >
          CTRL <span>+</span> CREATE
        </a>
        <nav
          className={`main-nav ${menuOpen ? "main-nav--open" : ""}`}
          aria-label="Main navigation"
        >
          <a href="#work" data-cursor="hover" onClick={() => setMenuOpen(false)}>
            Work
          </a>
          <a href="#about" data-cursor="hover" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="/archive" data-cursor="hover" onClick={() => setMenuOpen(false)}>
            Archive
          </a>
          <a href="/cv" data-cursor="hover" onClick={() => setMenuOpen(false)}>
            CV
          </a>
          <a
            href="#playground"
            data-cursor="hover"
            onClick={() => setMenuOpen(false)}
          >
            Playground
          </a>
          <a
            href="#contact"
            data-cursor="hover"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
        <button
          className="menu-button"
          data-cursor="hover"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
          <i aria-hidden="true" />
        </button>
      </header>
      <motion.section
        className="hero"
        id="top"
        initial={prefersReducedMotion ? undefined : "hidden"}
        animate={!loading && !prefersReducedMotion ? "show" : undefined}
        variants={fadeUp}
      >
        <div className="hero__eyebrow">
          <span>(01)</span>
          <span>
            Independent design practice
            <br />
            for a moving world.
          </span>
        </div>
        <h1>
          Make it
          <br />
          <em>move.</em>
        </h1>
        <div className="hero__footer">
          <p>
            We build visual identities, digital worlds
            <br />
            and things that stay in your head.
          </p>
          <a
            href="#work"
            className="circle-link"
            data-cursor="hover"
            aria-label="Scroll to selected work"
          >
            ↓
          </a>
          <span className="hero__location">Nigeria / Worldwide</span>
        </div>
      </motion.section>
      <motion.section
        className="reel-section section-pad"
        initial={prefersReducedMotion ? undefined : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "show"}
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <div className="section-label">
          <span>(02)</span>
          <span>Selected signal</span>
          <span>00:01:24</span>
        </div>
        <Showreel />
      </motion.section>
      <motion.section
        className="work-section section-pad"
        id="work"
      >
        <div className="section-heading">
          <span className="section-index">(03)</span>
          <h2>
            Recent
            <br />
            <em>work</em>
          </h2>
          <p>
            A handful of systems, stories
            <br />
            and happy accidents.
          </p>
        </div>
        <WorkGrid />
      </motion.section>
      <section className="archive-section section-pad" id="archive">
        <div className="section-label">
          <span>(04)</span>
          <span>Visual archive</span>
          <span>Posters / flyers / frames</span>
        </div>
        <div className="section-heading archive-heading">
          <h2>
            The
            <br />
            <em>archive.</em>
          </h2>
          <p>Loose studies, finished pieces and visual experiments.</p>
        </div>
        <a className="archive-open-link" href="/archive">Open full archive ↗</a>
        <ArchiveGallery />
      </section>
      <section className="about-section section-pad" id="about">
        <div className="section-label">
          <span>(05)</span>
          <span>About the practice</span>
        </div>
        <div className="about-grid">
          <h2>
            Ideas with
            <br />
            <em>afterglow.</em>
          </h2>
          <div className="about-copy">
            <p>
              CTRL + CREATE is the creative practice of Idowu Olukolade
              Goodness — a Graphic Designer, Motion Designer, Web Designer and
              Creative Director creating visual identities, digital experiences
              and motion-led work.
            </p>
            <p>
              Bold ideas. Clean execution. Visuals that move. Available for
              selected collaborations worldwide.
            </p>
            <p className="quiet-flex">
              This site is one of my web design projects.
            </p>
            <a className="text-link" href="https://wa.me/2348123342817" target="_blank" rel="noreferrer">
              Message on WhatsApp <span>↗</span>
            </a>
          </div>
        </div>
        <div className="capabilities">
          <span>Capabilities</span>
          <span>Brand identity</span>
          <span>Art direction</span>
          <span>Motion systems</span>
          <span>Web experiences</span>
        </div>
      </section>
      <ProofSection />
      <section className="playground-section section-pad" id="playground">
        <div className="section-label">
          <span>(06)</span>
          <span>Playground / live experiment</span>
        </div>
        <div className="playground">
          <div
            className={`playground__grid playground__grid--${activeTool.toLowerCase()}`}
            style={{
              transform: playgroundTransform,
              transition: activeTool === "RESET" ? "transform 0.4s ease-out" : undefined,
            }}
          />
          <div className="playground__copy">
            <span>TRY THE CONTROLS</span>
            <h2>
              Push
              <br />
              <em>things.</em>
            </h2>
          </div>
          <div className="tool-row" role="group" aria-label="Playground tools">
            {(["MOVE", "WARP", "PULSE", "SPIN", "INVERT", "RESET"] as ToolMode[]).map((tool) => (
              <button
                className={activeTool === tool ? "is-active" : ""}
                key={tool}
                data-cursor="hover"
                onClick={() => setActiveTool(tool)}
              >
                {tool}
              </button>
            ))}
          </div>
          <span className="playground__status">
            MODE: {activeTool} / INPUT: POINTER
          </span>
        </div>
      </section>
      <section className="contact-section section-pad" id="contact">
        <span className="section-index">(07)</span>
        <h2>
          Have a good
          <br />
          <em>feeling?</em>
        </h2>
        <a
          className="contact-link"
          data-cursor="hover"
          href="https://wa.me/2348123342817"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp / start a conversation <span>↗</span>
        </a>
        <a className="email-link" href="mailto:idowuolukolade@gmail.com">
          idowuolukolade@gmail.com
        </a>
        <ContactForm />
        <div className="contact-footer">
          <span>New business / collaborations</span>
          <span>Nigeria / Worldwide</span>
        </div>
        <div className="social-links" aria-label="Social links">
          <span>Elsewhere</span>
          <a href="https://wa.me/2348123342817?text=Hello%20Idowu%2C%20I%20would%20like%20to%20work%20with%20you" target="_blank" rel="noreferrer">WhatsApp ↗</a>
          <a href="#top">Instagram / add URL ↗</a>
          <a href="#top">Behance / add URL ↗</a>
          <a href="#top">LinkedIn / add URL ↗</a>
        </div>
      </section>
      <footer className="site-footer">
        <span>© CTRL + CREATE 2026</span>
        <span>Built with intent.</span>
        <div>
          <a href="#top">Instagram</a>
          <a href="#top">Are.na</a>
          <a href="#top">LinkedIn</a>
        </div>
      </footer>
    </main>
  );
}
