"use client";

import { useRef, useEffect, useState } from "react";
import EngineFlowSVG from "./EngineFlowSVG";
import CombinationLock from "@/components/ui/CombinationLock";
import FlipCard from "@/components/ui/FlipCard";

const ENGINE_URL = "https://narensj.netlify.app";

export default function EngineSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const svgRef      = useRef<HTMLDivElement>(null);
  const ctaRef      = useRef<HTMLButtonElement>(null);
  const sectionRef  = useRef<HTMLElement>(null);
  const [lockOpen,   setLockOpen]   = useState(false);
  const [unlocked,   setUnlocked]   = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    (async () => {
      try {
        const [{ default: gsap }] = await Promise.all([import("gsap")]);
        if (!headlineRef.current || !svgRef.current || !ctaRef.current) return;
        gsap.fromTo(headlineRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" });
        gsap.fromTo(svgRef.current,      { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.2 });
        gsap.fromTo(ctaRef.current,      { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.3 });
      } catch { /* show cleanly */ }
    })();
  }, []);

  // Close on Escape
  useEffect(() => {
    if (!lockOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLockOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lockOpen]);

  const handleUnlock = () => {
    setUnlocked(true);
    // Brief success pause, then navigate
    setTimeout(() => {
      setLockOpen(false);
      setUnlocked(false);
      window.open(ENGINE_URL, "_blank", "noopener,noreferrer");
    }, 900);
  };

  return (
    <>
      {/* ── Lock overlay ─────────────────────────────── */}
      {lockOpen && (
        <div
          onClick={(e) => { if (e.target === e.currentTarget) setLockOpen(false); }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "rgba(10, 10, 10, 0.92)",
            backdropFilter: "blur(14px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "clamp(1.5rem, 4vw, 3rem)",
            padding: "clamp(1rem, 4vw, 2rem)",
            overflowY: "auto",
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Access lock — enter 2026"
        >
          {/* Close */}
          <button
            onClick={() => setLockOpen(false)}
            style={{
              position: "absolute", top: "1rem", right: "1rem",
              background: "none", border: "none", cursor: "pointer",
              color: "rgba(255,255,255,0.4)", padding: "0.5rem", lineHeight: 1,
            }}
            aria-label="Close lock"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="4" y1="4" x2="16" y2="16" />
              <line x1="16" y1="4" x2="4" y2="16" />
            </svg>
          </button>

          {/* Header */}
          <div style={{ textAlign: "center", padding: "0 1rem" }}>
            <p style={{
              fontFamily: "var(--font-heading)", fontSize: "0.625rem", fontWeight: 700,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)", marginBottom: "0.75rem",
            }}>
              Access Protected
            </p>
            <h2 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.25rem, 5vw, 2.25rem)",
              fontWeight: 800, letterSpacing: "-0.03em",
              color: "#ffffff", lineHeight: 1.1,
            }}>
              {unlocked ? "🔓 Unlocked — Opening…" : "Enter the code to continue"}
            </h2>
          </div>

          {!unlocked ? (
            <>
              {/* FlipCard + Lock — stacks on mobile, side-by-side on wide */}
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "clamp(2rem, 5vw, 3.5rem)",
                width: "100%",
                maxWidth: "700px",
              }}>
                {/* Row wrapper — horizontal on ≥540px */}
                <style>{`
                  @media (min-width: 540px) {
                    .lock-row { flex-direction: row !important; }
                    .lock-divider { display: block !important; }
                  }
                `}</style>
                <div className="lock-row" style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "2rem",
                  width: "100%",
                }}>
                  {/* Flip card */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
                    <p style={{
                      fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.15em",
                      textTransform: "uppercase", color: "rgba(255,255,255,0.3)",
                      fontFamily: "var(--font-heading)",
                    }}>
                      Tap / hover for hint
                    </p>
                    <FlipCard />
                  </div>

                  {/* Vertical divider (desktop only) */}
                  <div className="lock-divider" style={{
                    display: "none",
                    width: "1px", height: "160px", flexShrink: 0,
                    background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.12), transparent)",
                  }} />

                  {/* Lock */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}>
                    <p style={{
                      fontSize: "0.625rem", fontWeight: 700, letterSpacing: "0.15em",
                      textTransform: "uppercase", color: "rgba(255,255,255,0.3)",
                      fontFamily: "var(--font-heading)",
                    }}>
                      Set the code
                    </p>
                    <CombinationLock onUnlock={handleUnlock} />
                  </div>
                </div>
              </div>

              <p style={{
                fontSize: "0.6875rem", color: "rgba(255,255,255,0.2)",
                fontFamily: "var(--font-body)", letterSpacing: "0.05em", textAlign: "center",
              }}>
                Scroll each dial · Esc to close
              </p>
            </>
          ) : (
            <div style={{
              width: "5rem", height: "5rem", borderRadius: "9999px",
              backgroundColor: "rgba(150,255,179,0.12)",
              border: "2px solid rgb(150,255,179)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="32" height="32" viewBox="0 0 28 28" fill="none"
                stroke="rgb(150,255,179)" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round">
                <polyline points="5 14 11 20 23 8" />
              </svg>
            </div>
          )}
        </div>
      )}

      {/* ── Section ──────────────────────────────────── */}
      <section
        ref={sectionRef}
        className="w-full border-t border-[#d2d2d7] bg-white"
        aria-label="Engineering"
      >
        <div className="container-page section-pad">
          <div className="card-lg" style={{ borderRadius: "1.75rem" }}>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#d2d2d7]" style={{ marginBottom: "1.5rem" }}>
              <span className="text-xs font-semibold text-[#1d1d1f] tracking-wide uppercase">
                Systems Architecture
              </span>
            </div>

            {/* Headline */}
            <h2
              ref={headlineRef}
              className="section-heading"
              style={{ maxWidth: "38ch", fontSize: "var(--text-engine)" }}
            >
              Building the core infrastructure underneath the applications.
            </h2>

            {/* SVG flow */}
            <div
              ref={svgRef}
              className="rounded-2xl bg-white border border-[#d2d2d7] flex justify-center items-center overflow-x-auto"
              style={{ margin: "2rem 0", padding: "clamp(1.25rem, 3vw, 2.5rem)" }}
            >
              <EngineFlowSVG />
            </div>

            {/* CTA — opens lock overlay */}
            <div style={{ marginTop: "2rem" }}>
              <button
                ref={ctaRef}
                onClick={() => setLockOpen(true)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.875rem 1.75rem",
                  borderRadius: "9999px",
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  fontFamily: "var(--font-heading)",
                  backgroundColor: "#1d1d1f",
                  color: "#ffffff",
                  border: "none",
                  cursor: "pointer",
                }}
                aria-label="Open access lock to explore browser engine project"
              >
                Explore Interactive Browser Engine
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 11L11 3M11 3H5M11 3V9" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
