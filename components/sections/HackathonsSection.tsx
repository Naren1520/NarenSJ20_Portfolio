"use client";

import { useState } from "react";
import { hackathons } from "@/lib/hackathons";
import ScrollReveal from "@/components/ui/ScrollReveal";

const TABS = ["Hackathons & Awards", "Competitions"] as const;
type Tab = typeof TABS[number];

/* Result badge colour */
function resultStyle(type: string): { bg: string; color: string; border: string } {
  const t = type.toLowerCase();
  if (t === "winner")                return { bg: "#1d1d1f", color: "#ffffff", border: "#1d1d1f"  };
  if (t === "finalist")              return { bg: "#f5f5f7", color: "#1d1d1f", border: "#d2d2d7"  };
  if (t === "semi-finalist")         return { bg: "#f5f5f7", color: "#1d1d1f", border: "#d2d2d7"  };
  if (t === "best innovative project") return { bg: "#0066cc", color: "#ffffff", border: "#0066cc" };
  if (t === "college finalist")      return { bg: "#f5f5f7", color: "#1d1d1f", border: "#d2d2d7"  };
  return                                    { bg: "#f5f5f7", color: "#515154", border: "#d2d2d7"  };
}

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
      <div className="container-page section-pad">
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
                  padding: "0.0625rem 0.375rem",
                  borderRadius: "9999px",
                  backgroundColor: active ? "#f5f5f7" : "transparent",
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  color: active ? "#86868b" : "#86868b",
                }}>
                  {hackathons.filter(e =>
                    t === "Hackathons & Awards"
                      ? (e.category ?? "hackathon") === "hackathon"
                      : e.category === "competition"
                  ).length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div
          role="tabpanel"
          aria-label={tab}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 21rem), 1fr))",
            gap: "1px",
            border: "1px solid #d2d2d7",
            borderRadius: "1.125rem",
            overflow: "hidden",
            backgroundColor: "#d2d2d7",
          }}
        >
          {sorted.map((entry, i) => {
            const badge = resultStyle(entry.participationType);
            return (
              <ScrollReveal key={entry.id} delay={i * 50} duration={400}>
                <div style={{
                  backgroundColor: "#ffffff",
                  padding: "clamp(1.5rem, 3vw, 2rem)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.625rem",
                  height: "100%",
                }}>

                  {/* Top row: result badge + date */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "0.5rem",
                    flexWrap: "wrap",
                  }}>
                    <span style={{
                      padding: "0.1875rem 0.625rem",
                      borderRadius: "9999px",
                      backgroundColor: badge.bg,
                      border: `1px solid ${badge.border}`,
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      color: badge.color,
                      fontFamily: "var(--font-heading)",
                      letterSpacing: "0.02em",
                    }}>
                      {entry.participationType}
                    </span>
                    <span style={{
                      fontSize: "0.6875rem",
                      fontWeight: 500,
                      color: "#86868b",
                      fontFamily: "var(--font-heading)",
                    }}>
                      {entry.date.slice(0, 7)}
                    </span>
                  </div>

                  {/* Event name */}
                  <h3 style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(0.9375rem, 1.3vw, 1.0625rem)",
                    fontWeight: 700,
                    color: "#1d1d1f",
                    lineHeight: 1.3,
                  }}>
                    {entry.eventName}
                  </h3>

                  {/* Organiser */}
                  <p style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "#0066cc",
                    fontFamily: "var(--font-heading)",
                  }}>
                    {entry.organiser}
                  </p>

                  {/* Image — rectangle between header and outcome */}
                  {entry.image && (
                    <div style={{
                      width: "100%",
                      aspectRatio: "16 / 9",
                      overflow: "hidden",
                      borderRadius: "0.5rem",
                      backgroundColor: "#e8e8ed",
                      flexShrink: 0,
                    }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
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
                    </div>
                  )}

                  {/* Outcome */}
                  <p style={{
                    fontSize: "0.8125rem",
                    color: "#515154",
                    lineHeight: 1.65,
                    marginTop: "auto",
                    paddingTop: "0.625rem",
                    borderTop: "1px solid #f0f0f0",
                  }}>
                    {entry.outcome}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
