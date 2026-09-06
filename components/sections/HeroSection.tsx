"use client";

import { useEffect, useRef } from "react";
import ResumeButton from "@/components/ui/ResumeButton";

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef  = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ctx: { revert: () => void } | null = null;
    (async () => {
      try {
        const [{ default: gsap }] = await Promise.all([import("gsap")]);
        if (!titleRef.current || !descRef.current) return;
        ctx = gsap.context(() => {
          gsap.fromTo(
            [titleRef.current, descRef.current],
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.18, ease: "power3.out" }
          );
        });
      } catch { /* show cleanly */ }
    })();
    return () => { try { ctx?.revert(); } catch { /* */ } };
  }, []);

  return (
    <section
      id="work"
      aria-label="Hero"
      style={{
        width: "100%",
        minHeight: "calc(100vh - var(--nav-h))",
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #d2d2d7",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ── Full-bleed hero body — centered like Apple ── */}
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "clamp(4rem, 10vw, 8rem) clamp(1.5rem, 6vw, 6rem)",
      }}>
        {/* Eyebrow */}
        <div className="eyebrow-tag" style={{ marginBottom: "2rem" }}>
          <span style={{ width: "0.4rem", height: "0.4rem", borderRadius: "9999px", backgroundColor: "#0066cc", flexShrink: 0 }} />
          AI Engineer &amp; Software Builder
        </div>

        {/* Headline — Apple-scale */}
        <h1
          ref={titleRef}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "var(--text-hero)",
            fontWeight: 800,
            lineHeight: 1.04,
            letterSpacing: "-0.04em",
            color: "#1d1d1f",
            maxWidth: "16ch",
            marginInline: "auto",
          }}
        >
          Designing intelligent systems.{" "}
          <span style={{ color: "#86868b", fontWeight: 500 }}>
            Built for scale &amp; speed.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={descRef}
          style={{
            fontSize: "clamp(1.0625rem, 1.6vw, 1.3125rem)",
            color: "#86868b",
            lineHeight: 1.65,
            maxWidth: "44ch",
            marginInline: "auto",
            marginTop: "1.75rem",
          }}
        >
          I&apos;m <strong style={{ color: "#1d1d1f", fontWeight: 600 }}>Naren S J</strong>. I build AI infrastructure,
          high-throughput systems, and full-stack software designed to solve
          hard problems at production scale.
        </p>

        {/* CTAs */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.875rem",
          marginTop: "2.5rem",
        }}>
          <a
            href="#work-gallery"
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
              textDecoration: "none",
            }}
          >
            Explore Featured Work
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 2v10M2 7l5 5 5-5" />
            </svg>
          </a>

          <ResumeButton
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.875rem 1.75rem",
              borderRadius: "9999px",
              fontSize: "0.9375rem",
              fontWeight: 600,
              fontFamily: "var(--font-heading)",
              backgroundColor: "#f5f5f7",
              color: "#1d1d1f",
              border: "1px solid #d2d2d7",
            }}
          >
            View Resume
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 11L11 3M11 3H5M11 3V9" />
            </svg>
          </ResumeButton>
        </div>
      </div>

      {/* ── Bottom specialty cards — responsive strip ── */}
      <div style={{
        width: "100%",
        borderTop: "1px solid #d2d2d7",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 180px), 1fr))",
      }}>
        {[
          {
            num: "01",
            label: "Artificial Intelligence",
            title: "RAG & Multi-Modal Systems",
            desc: "Enterprise context retrieval, graph analysis, and real-time AI entity extraction.",
          },
          {
            num: "02",
            label: "Systems Engineering",
            title: "C++ & High Concurrency",
            desc: "Epoll, non-blocking I/O event loops, and custom thread pool architectures under load.",
          },
          {
            num: "03",
            label: "Full-Stack Platform",
            title: "End-to-End Infrastructure",
            desc: "Scalable backend microservices, real-time collaboration engines, and sleek frontends.",
          },
          {
            num: "04",
            label: "Product Management",
            title: "Strategy & Delivery",
            desc: "Roadmaps, sprint planning, stakeholder alignment, and shipping products that scale.",
          },
        ].map(({ num, label, title, desc }) => (
          <div
            key={num}
            style={{
              padding: "clamp(1.25rem, 3vw, 2.5rem) clamp(1.25rem, 4vw, 3.5rem)",
              borderTop: "1px solid #d2d2d7",
              backgroundColor: "#ffffff",
            }}
          >
            <span style={{
              display: "block",
              fontSize: "0.625rem",
              fontWeight: 700,
              color: "#86868b",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "0.875rem",
            }}>
              {num} / {label}
            </span>
            <h3 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(0.9375rem, 1.3vw, 1.125rem)",
              fontWeight: 700,
              color: "#1d1d1f",
              marginBottom: "0.5rem",
            }}>
              {title}
            </h3>
            <p style={{
              fontSize: "clamp(0.8125rem, 1vw, 0.9375rem)",
              color: "#86868b",
              lineHeight: 1.6,
            }}>
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
