"use client";

import { useEffect, useRef } from "react";
import { achievements } from "@/lib/achievements";

export default function AchievementsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowRefs    = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const items = rowRefs.current.filter(Boolean) as HTMLDivElement[];
    (async () => {
      try {
        const [{ default: gsap }] = await Promise.all([import("gsap")]);
        gsap.fromTo(
          items,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out" }
        );
      } catch { /* display as is */ }
    })();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="achievements"
      className="w-full border-t border-[#d2d2d7] bg-white"
      aria-label="Achievements"
    >
      <div className="container-page section-pad">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Stat callout card — full width on mobile, 4 cols on desktop */}
        <div className="lg:col-span-4">
          <div className="card-lg" style={{ borderRadius: "1.5rem" }}>
            <span style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#86868b", textTransform: "uppercase", letterSpacing: "0.07em", display: "block", marginBottom: "0.75rem" }}>
              Competitive Record
            </span>
            <span style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(3rem, 8vw, 5rem)",
              fontWeight: 800,
              color: "#1d1d1f",
              display: "block",
              lineHeight: 1,
              marginBottom: "0.75rem",
            }}>
              7+
            </span>
            <p style={{ fontWeight: 600, color: "#1d1d1f", fontSize: "0.9375rem", marginBottom: "0.5rem" }}>
              Major Wins &amp; Hackathon Awards
            </p>
            <p style={{ fontSize: "0.8125rem", color: "#86868b", lineHeight: 1.65 }}>
              Recognized for AI innovation, speed of execution, and engineering excellence across regional &amp; national competitions.
            </p>
          </div>
        </div>

        {/* List of achievements (8 cols) */}
        <div className="lg:col-span-8">
          <div className="eyebrow-tag">Recognition</div>
          <h2 className="section-heading">Achievements.</h2>

          <div className="flex flex-col" style={{ gap: "var(--gap-sm)" }}>
            {achievements.map((a, i) => (
              <div
                key={a.id}
                ref={(el) => { rowRefs.current[i] = el; }}
                className="card flex flex-wrap items-center justify-between gap-4"
              >
                <div>
                  <h3 className="text-base md:text-lg font-bold text-[#1d1d1f] mb-1">
                    {a.title}
                  </h3>
                  {a.description && (
                    <p className="text-xs text-[#515154] leading-relaxed">
                      {a.description}
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                  <span style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "9999px",
                    backgroundColor: "#ffffff",
                    border: "1px solid #d2d2d7",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    fontFamily: "var(--font-heading)",
                    color: "#1d1d1f",
                    whiteSpace: "nowrap",
                  }}>
                    {a.result}
                  </span>
                  <span className="text-xs font-semibold text-[#86868b]">
                    {a.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

