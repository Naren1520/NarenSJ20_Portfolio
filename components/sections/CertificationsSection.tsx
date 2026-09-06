"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { certifications } from "@/lib/certifications";
import ScrollReveal from "@/components/ui/ScrollReveal";

const CARD_W  = 260;
const CARD_H  = 380;
const IMG_H   = 200;
const GAP     = 14;   // px — gap between cards
const SCROLL_BY = CARD_W + GAP;

export default function CertificationsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canLeft,  setCanLeft]  = useState(false);
  const [canRight, setCanRight] = useState(true);

  const sorted = [...certifications].sort((a, b) =>
    b.dateIssued.localeCompare(a.dateIssued)
  );

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    return () => el.removeEventListener("scroll", updateArrows);
  }, [updateArrows]);

  const scroll = (dir: "left" | "right") => {
    trackRef.current?.scrollBy({
      left: dir === "right" ? SCROLL_BY : -SCROLL_BY,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="certifications"
      className="w-full border-t border-[#d2d2d7] bg-white"
      aria-label="Certifications"
    >
      <div className="container-page" style={{ paddingTop: "var(--section-pad-y)" }}>
        <ScrollReveal duration={500}>
          <div className="eyebrow-tag">Verified Credentials</div>

          {/* Header row: heading + nav arrows */}
          <div style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "2rem",
          }}>
            <h2 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "var(--text-section)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.035em",
              color: "#1d1d1f",
              margin: 0,
            }}>
              Certifications.
            </h2>

            {/* Arrow buttons — Apple style circle arrows */}
            <div style={{ display: "flex", gap: "0.5rem", flexShrink: 0 }}>
              <button
                onClick={() => scroll("left")}
                disabled={!canLeft}
                aria-label="Scroll left"
                style={{
                  width: "2.25rem",
                  height: "2.25rem",
                  borderRadius: "9999px",
                  backgroundColor: canLeft ? "#1d1d1f" : "#f5f5f7",
                  border: `1px solid ${canLeft ? "#1d1d1f" : "#d2d2d7"}`,
                  color: canLeft ? "#ffffff" : "#c7c7cc",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: canLeft ? "pointer" : "default",
                  transition: "background-color 0.2s ease, border-color 0.2s ease",
                  flexShrink: 0,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M9 2L4 7l5 5" />
                </svg>
              </button>

              <button
                onClick={() => scroll("right")}
                disabled={!canRight}
                aria-label="Scroll right"
                style={{
                  width: "2.25rem",
                  height: "2.25rem",
                  borderRadius: "9999px",
                  backgroundColor: canRight ? "#1d1d1f" : "#f5f5f7",
                  border: `1px solid ${canRight ? "#1d1d1f" : "#d2d2d7"}`,
                  color: canRight ? "#ffffff" : "#c7c7cc",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: canRight ? "pointer" : "default",
                  transition: "background-color 0.2s ease, border-color 0.2s ease",
                  flexShrink: 0,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M5 2l5 5-5 5" />
                </svg>
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Scroll track */}
      <div
        ref={trackRef}
        className="hide-scrollbar"
        style={{
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          paddingInline: "var(--container-pad-x)",
          paddingBottom: "var(--section-pad-y)",
        }}
      >
        <div style={{ display: "flex", gap: `${GAP}px`, width: "max-content" }}>
          {sorted.map((cert, i) => (
            <ScrollReveal key={cert.id} delay={i * 50} duration={380}>
              <div
                style={{
                  width: `${CARD_W}px`,
                  height: `${CARD_H}px`,
                  flexShrink: 0,
                  scrollSnapAlign: "start",
                  backgroundColor: "#f5f5f7",
                  borderRadius: "1.125rem",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid #e8e8ed",
                }}
              >
                {/* Image zone */}
                <div style={{
                  width: "100%",
                  height: `${IMG_H}px`,
                  flexShrink: 0,
                  backgroundColor: "#f5f5f7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  padding: "1rem",
                  boxSizing: "border-box",
                }}>
                  {cert.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={cert.image}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        display: "block",
                      }}
                    />
                  ) : (
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none"
                      stroke="#c7c7cc" strokeWidth="1" aria-hidden="true">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <path d="M8 21h8M12 17v4" />
                    </svg>
                  )}
                </div>

                {/* Hairline */}
                <div style={{ height: "1px", backgroundColor: "#e8e8ed", flexShrink: 0 }} />

                {/* Text block */}
                <div style={{
                  flex: 1,
                  padding: "1rem 1.125rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.25rem",
                  overflow: "hidden",
                }}>
                  <p style={{
                    margin: 0,
                    fontSize: "0.625rem",
                    fontWeight: 700,
                    letterSpacing: "0.07em",
                    textTransform: "uppercase",
                    color: "#86868b",
                    fontFamily: "var(--font-heading)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}>
                    {cert.issuer}
                  </p>

                  <h3 style={{
                    margin: 0,
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.9375rem",
                    fontWeight: 700,
                    color: "#1d1d1f",
                    lineHeight: 1.3,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}>
                    {cert.name}
                  </h3>

                  <p style={{
                    margin: "0.25rem 0 0",
                    fontSize: "0.75rem",
                    color: "#86868b",
                    fontFamily: "var(--font-heading)",
                  }}>
                    {cert.status && <span>{cert.status}</span>}
                    {cert.status && <span style={{ margin: "0 0.3rem", color: "#d2d2d7" }}>·</span>}
                    <span>{cert.dateIssued}</span>
                  </p>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        marginTop: "auto",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.25rem",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        color: "#0066cc",
                        textDecoration: "none",
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      Verify
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none"
                        stroke="currentColor" strokeWidth="2">
                        <path d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
