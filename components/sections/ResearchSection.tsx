"use client";

import { useEffect, useRef, useState } from "react";

export default function ResearchSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const fired = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !fired.current) {
          fired.current = true;
          setVisible(true);
        }
      },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="research"
      className={`w-full border-t border-[#d2d2d7] bg-white transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      aria-label="Research"
    >
      <div className="container-page section-pad">
      <div className="card-lg" style={{ borderRadius: "1.75rem" }}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#d2d2d7]" style={{ marginBottom: "1.5rem" }}>
          <span className="text-xs font-semibold text-[#1d1d1f] tracking-wide uppercase">
            Core Inquiry &amp; Cryptography
          </span>
        </div>

        <h2 className="section-heading" style={{ marginBottom: "2rem" }}>
          Research &amp; Exploration.
        </h2>

        <div style={{ maxWidth: "52ch" }}>
          <p
            style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.125rem, 2vw, 1.75rem)", fontWeight: 700, lineHeight: 1.4, marginBottom: "1.5rem", color: "#1d1d1f" }}
          >
            &ldquo;What happens when cryptographic verification doesn&apos;t require live connectivity?&rdquo;
          </p>

          <p className="text-[#515154] leading-relaxed" style={{ fontSize: "clamp(0.9375rem, 1.1vw, 1.0625rem)", marginBottom: "1.25rem" }}>
            My research explores cryptographic offline payment protocols — building systems where financial transactions can be verified and settled locally without network access while guaranteeing security against double-spend attacks.
          </p>

          <p className="text-[#515154] leading-relaxed" style={{ fontSize: "clamp(0.9375rem, 1.1vw, 1.0625rem)" }}>
            Below the software layer, I explore chip architecture and secure token verification — analyzing how hardware security modules can execute low-latency cryptographic operations directly on-device without cloud trust dependencies.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}

