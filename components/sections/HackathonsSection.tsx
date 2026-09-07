"use client";

import { useState } from "react";
import Link from "next/link";
import { hackathons } from "@/lib/hackathons";
import ScrollReveal from "@/components/ui/ScrollReveal";

const TABS = ["Hackathons & Awards", "Competitions"] as const;
type Tab = typeof TABS[number];

function resultStyle(type: string): { bg: string; color: string; border: string } {
  const t = type.toLowerCase();
  if (t === "winner")                  return { bg: "#1d1d1f", color: "#ffffff", border: "#1d1d1f"  };
  if (t === "finalist")                return { bg: "#f5f5f7", color: "#1d1d1f", border: "#d2d2d7"  };
  if (t === "semi-finalist")           return { bg: "#f5f5f7", color: "#1d1d1f", border: "#d2d2d7"  };
  if (t === "best innovative project") return { bg: "#0066cc", color: "#ffffff", border: "#0066cc"  };
  if (t === "college finalist")        return { bg: "#f5f5f7", color: "#1d1d1f", border: "#d2d2d7"  };
  return                                      { bg: "#f5f5f7", color: "#515154", border: "#d2d2d7"  };
}

/* Card fixed dimensions — Apple product card proportions */
const CARD_W = 420;   /* px — 3 cards visible on desktop */
const CARD_H = 520;   /* px */
const IMG_H  = 280;   /* px — image zone */

export default function HackathonsSection() {
  const [tab, setTab] = useState<Tab>("Hackathons & Awards");

  const sorted = [...hackathons]
    .filter(e => tab === "Hackathons & Awards"
      ? (e.category ?? "hackathon") === "hackathon"
      : e.category === "competition"
    )
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section
      id="hackathons"
      className="w-full border-t border-[#d2d2d7] bg-white"
      aria-label="Hackathons and Competitions"
    >
      <div className="container-page" style={{ paddingTop: "var(--section-pad-y)" }}>
        <ScrollReveal duration={500}>
          <div className="eyebrow-tag">Sprints, Events &amp; Competitions</div>
          <h2 className="section-heading">Competitions &amp; Events.</h2>
        </ScrollReveal>

        {/* Tab switcher */}
        <div
          role="tablist"
          aria-label="Event categories"
          style={{
            display: "inline-flex",
            gap: "0.25rem",
            padding: "0.3125rem",
            backgroundColor: "#f5f5f7",
            border: "1px solid #d2d2d7",
            borderRadius: "9999px",
            marginBottom: "2.5rem",
          }}
        >
          {TABS.map((t) => {
            const active = tab === t;
            const count  = hackathons.filter(e =>
              t === "Hackathons & Awards"
                ? (e.category ?? "hackathon") === "hackathon"
                : e.category === "competition"
            ).length;
            return (
              <button
                key={t}
                role="tab"
                aria-selected={active}
                onClick={() => setTab(t)}
                style={{
                  padding: "0.4375rem 1.125rem",
                  borderRadius: "9999px",
                  fontSize: "0.8125rem",
                  fontWeight: active ? 600 : 500,
                  fontFamily: "var(--font-heading)",
                  color: active ? "#1d1d1f" : "#86868b",
                  backgroundColor: active ? "#ffffff" : "transparent",
                  boxShadow: active ? "0 1px 4px rgba(0,0,0,0.1)" : "none",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                  whiteSpace: "nowrap",
                }}
              >
                {t}
                <span style={{
                  marginLeft: "0.375rem",
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  color: "#86868b",
                }}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Apple-style horizontal scroll row ── */}
      <div
        className="hide-scrollbar"
        style={{
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          paddingInline: "var(--container-pad-x)",
          paddingBottom: "var(--section-pad-y)",
        }}
      >
        <div
          role="tabpanel"
          aria-label={tab}
          style={{ display: "flex", gap: "1rem", width: "max-content" }}
        >
          {sorted.map((entry, i) => {
            const badge = resultStyle(entry.participationType);
            return (
              <ScrollReveal key={entry.id} delay={i * 50} duration={380}>
                {/* Apple product card — image top, text bottom, fixed size */}
                <Link
                  href={`/hackathons/${entry.id}`}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: `clamp(280px, 30vw, ${CARD_W}px)`,
                    height: `${CARD_H}px`,
                    flexShrink: 0,
                    scrollSnapAlign: "start",
                    backgroundColor: "#f5f5f7",
                    borderRadius: "1.125rem",
                    overflow: "hidden",
                    border: "1px solid #e8e8ed",
                    textDecoration: "none",
                    color: "inherit",
                    transition: "box-shadow 0.2s ease",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.10)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none"; }}
                >
                  {/* ── Image zone (top, large) ── */}
                  <div style={{
                    width: "100%",
                    height: `${IMG_H}px`,
                    flexShrink: 0,
                    backgroundColor: "#f5f5f7",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}>
                    {entry.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={entry.image}
                        alt={entry.eventName}
                        loading="lazy"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    ) : (
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#c7c7cc" strokeWidth="1" aria-hidden="true">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M3 9h18M9 21V9" />
                      </svg>
                    )}
                  </div>

                  {/* ── Hairline ── */}
                  <div style={{ height: "1px", backgroundColor: "#e8e8ed", flexShrink: 0 }} />

                  {/* ── Text block (bottom) — Apple card style ── */}
                  <div style={{
                    flex: 1,
                    padding: "1rem 1.25rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.3rem",
                    overflow: "hidden",
                  }}>
                    {/* Result badge — tiny, like "Free Engraving" in Apple */}
                    <span style={{
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      color: badge.bg === "#1d1d1f" ? "#1d1d1f" :
                             badge.bg === "#0066cc" ? "#0066cc" : "#86868b",
                      fontFamily: "var(--font-heading)",
                      letterSpacing: "0.01em",
                    }}>
                      {entry.participationType}
                    </span>

                    {/* Event name — bold main line like "Apple Pencil Pro" */}
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
                      {entry.eventName}
                    </h3>

                    {/* Organiser — like subtitle/price subtext */}
                    <p style={{
                      margin: 0,
                      fontSize: "0.8125rem",
                      color: "#0066cc",
                      fontFamily: "var(--font-heading)",
                      fontWeight: 500,
                    }}>
                      {entry.organiser}
                    </p>

                    {/* Date */}
                    <p style={{
                      margin: "0.25rem 0 0",
                      fontSize: "0.75rem",
                      color: "#86868b",
                      fontFamily: "var(--font-heading)",
                    }}>
                      {entry.date.slice(0, 7)}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
