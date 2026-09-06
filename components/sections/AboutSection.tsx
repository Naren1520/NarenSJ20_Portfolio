"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import GitHubActivity from "./GitHubActivity";
import LeetCodeStats from "@/components/ui/LeetCodeStats";
import CodeChefStats from "@/components/ui/CodeChefStats";

const KEYWORDS = ["AI Systems", "High Concurrency", "Full-Stack Software", "Systems Architecture"];

export default function AboutSection() {
  const sectionRef  = useRef<HTMLElement>(null);
  const [imgError, setImgError] = useState(false);

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
            sectionRef.current,
            { opacity: 0, y: 30 },
            {
              opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
              scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
            }
          );
        }, sectionRef);
      } catch { /* display as is */ }
    })();
    return () => { try { ctx?.revert(); } catch { /* */ } };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full border-t border-[#d2d2d7] bg-white"
      aria-label="About"
    >
      <div className="container-page section-pad">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left — Statement & Details (7 cols) — shown first on mobile */}
        <div className="lg:col-span-7">
          <div className="eyebrow-tag">
            Identity &amp; Approach
          </div>

          <h2
            className="section-heading"
            style={{ fontSize: "var(--text-section)" }}
          >
            Engineering across the full depth of the stack.
          </h2>

          {/* Keyword Pills */}
          <div className="flex flex-wrap gap-2" style={{ marginBottom: "1.75rem" }}>
            {KEYWORDS.map((word) => (
              <span key={word} className="pill-tag">{word}</span>
            ))}
          </div>

          {/* Body Prose */}
          <p style={{ fontSize: "clamp(0.9375rem, 1.2vw, 1.0625rem)", color: "#515154", lineHeight: 1.7, marginBottom: "2rem" }}>
            I work at the intersection of artificial intelligence, full-stack engineering, and high-performance systems programming. From multi-modal RAG retrieval pipelines and graph neural network extraction to C++ high-concurrency event loops, I design systems built for speed, correctness, and scale.
          </p>

          {/* GitHub Activity */}
          <div className="card" style={{ marginTop: "2rem" }}>
            <h3 style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#86868b", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "1rem" }}>
              Open Source &amp; Code Frequency
            </h3>
            <GitHubActivity />
          </div>
        </div>

        {/* Right — Portrait Card + LeetCode (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Portrait */}
          <div style={{
            position: "relative",
            width: "100%",
            borderRadius: "1.5rem",
            overflow: "hidden",
            backgroundColor: "#f5f5f7",
            border: "1px solid #d2d2d7",
            padding: "0.75rem",
          }}>
            <div style={{
              position: "relative",
              width: "100%",
              borderRadius: "1rem",
              overflow: "hidden",
              minHeight: "clamp(300px, 52vw, 490px)",
            }}>
              {!imgError ? (
                <Image
                  src="/narensj.png"
                  alt="Naren S J — AI Engineer and Software Builder"
                  fill unoptimized
                  style={{ objectFit: "cover", objectPosition: "top" }}
                  sizes="(max-width: 1024px) 90vw, 420px"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div style={{
                  width: "100%", height: "100%",
                  minHeight: "clamp(300px, 52vw, 515px)",
                  backgroundColor: "#f5f5f7",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center",
                  gap: "0.5rem",
                }}>
                  <span style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 8vw, 4rem)", fontWeight: 800, color: "#1d1d1f" }}>NSJ</span>
                  <span style={{ fontSize: "0.75rem", color: "#86868b", fontWeight: 500 }}>Naren S J</span>
                </div>
              )}
            </div>
            <div style={{ padding: "1rem", textAlign: "center" }}>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "0.9375rem", fontWeight: 700, color: "#1d1d1f" }}>Naren S J</h3>
              <p style={{ fontSize: "0.75rem", color: "#86868b" }}>AI Engineer &amp; Software Builder</p>
            </div>
          </div>

          {/* LeetCode + CodeChef — side by side below portrait */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
            <div className="card">
              <h3 style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#86868b", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "1.25rem" }}>
                LeetCode
              </h3>
              <LeetCodeStats />
            </div>
            <div className="card">
              <h3 style={{ fontSize: "0.6875rem", fontWeight: 700, color: "#86868b", textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "1.25rem" }}>
                CodeChef
              </h3>
              <CodeChefStats />
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

