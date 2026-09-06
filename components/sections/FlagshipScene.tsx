"use client";

import { useEffect, useRef } from "react";

export interface FlagshipSceneProps {
  id: string;
  title: string;
  description: string;
  backgroundImage?: string;
  backgroundAlt?: string;
  accentColor?: string;
  link?: string;
  index?: number;
  tags?: string[];
  metrics?: { label: string; value: string }[];
}

export default function FlagshipScene({
  id,
  title,
  description,
  link,
  index = 0,
  tags = ["AI & Systems", "Production", "Architecture"],
  metrics = [
    { label: "Performance", value: "Sub-10ms" },
    { label: "Scale", value: "High Throughput" },
  ],
}: FlagshipSceneProps) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const cardRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ctx: { revert: () => void } | null = null;
    (async () => {
      try {
        const [{ default: gsap }, { default: ST }] = await Promise.all([
          import("gsap"), import("gsap/ScrollTrigger"),
        ]);
        gsap.registerPlugin(ST);
        ctx = gsap.context(() => {
          gsap.fromTo(
            cardRef.current,
            { opacity: 0, y: 40 },
            {
              opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
              scrollTrigger: { trigger: sceneRef.current, start: "top 75%", once: true },
            }
          );
        });
      } catch { /* display as is */ }
    })();
    return () => { try { ctx?.revert(); } catch { /* */ } };
  }, []);

  return (
    <div
      ref={sceneRef}
      id={id}
      className="container-page"
      style={{ paddingBlock: "clamp(1rem, 2vw, 1.75rem)" }}
      aria-label={`${title} project showcase`}
    >
      <div
        ref={cardRef}
        className="card-lg relative w-full overflow-hidden hover:shadow-md transition-shadow"
        style={{ borderRadius: "1.75rem" }}
      >
        {/* Top bar — project number & tags */}
        <div className="flex flex-wrap items-center justify-between gap-3" style={{ marginBottom: "2rem" }}>
          <span className="pill-tag font-bold" style={{ fontSize: "0.6875rem", letterSpacing: "0.04em" }}>
            FEATURED PROJECT 0{index + 1}
          </span>

          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="pill-tag" style={{ fontSize: "0.6875rem", color: "#515154" }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Main info (8 cols) */}
          <div className="lg:col-span-8">
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "#1d1d1f",
              }}
            >
              {title}
            </h3>

            <p
              className="text-[#515154] leading-relaxed font-normal"
              style={{ fontSize: "clamp(0.9375rem, 1.2vw, 1.0625rem)", maxWidth: "56ch", marginTop: "1rem" }}
            >
              {description}
            </p>

            {link && (
              <div style={{ marginTop: "2rem" }}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full font-semibold hover:opacity-90 transition-opacity no-underline"
                  style={{
                    padding: "0.75rem 1.5rem",
                    fontSize: "0.8125rem",
                    backgroundColor: "#1d1d1f",
                    color: "#ffffff",
                  }}
                >
                  Explore Project on GitHub
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 11L11 3M11 3H5M11 3V9" />
                  </svg>
                </a>
              </div>
            )}
          </div>

          {/* Metric callout pills (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {metrics.map((m, idx) => (
              <div
                key={idx}
                className="flex-1 rounded-2xl bg-white border border-[#d2d2d7]"
                style={{ padding: "clamp(1rem, 2vw, 1.25rem)" }}
              >
                <span className="text-xs font-semibold text-[#86868b] uppercase tracking-wider block" style={{ marginBottom: "0.375rem" }}>
                  {m.label}
                </span>
                <span className="font-bold text-[#1d1d1f]" style={{ fontSize: "clamp(1rem, 1.5vw, 1.25rem)" }}>
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

