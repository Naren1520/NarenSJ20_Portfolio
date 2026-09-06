"use client";

import { volunteering } from "@/lib/volunteering";
import ScrollReveal from "@/components/ui/ScrollReveal";

const sorted = [...volunteering].sort((a, b) => b.date.localeCompare(a.date));

export default function VolunteeringSection() {
  return (
    <section
      id="volunteering"
      className="w-full border-t border-[#d2d2d7] bg-white"
      aria-label="Volunteering"
    >
      <div className="container-page section-pad">
        <ScrollReveal duration={500}>
          <div className="eyebrow-tag">Community &amp; Leadership</div>
          <h2 className="section-heading">Volunteering.</h2>
        </ScrollReveal>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {sorted.map((entry, i) => (
            <ScrollReveal key={entry.id} delay={i * 80} duration={450}>
              <article
                style={{
                  backgroundColor: "#f5f5f7",
                  border: "1px solid #d2d2d7",
                  borderRadius: "1.125rem",
                  padding: "clamp(1.5rem, 3vw, 2rem)",
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: "1rem",
                  alignItems: "start",
                  transition: "border-color 0.2s ease",
                }}
              >
                {/* Left content */}
                <div>
                  {/* Role */}
                  <h3 style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1rem, 1.5vw, 1.1875rem)",
                    fontWeight: 700,
                    color: "#1d1d1f",
                    lineHeight: 1.25,
                    marginBottom: "0.25rem",
                  }}>
                    {entry.role}
                  </h3>

                  {/* Organisation + domain */}
                  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.5rem", marginBottom: "0.875rem" }}>
                    <span style={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "#0066cc",
                      fontFamily: "var(--font-heading)",
                    }}>
                      {entry.organisation}
                    </span>
                    {entry.domain && (
                      <>
                        <span style={{ color: "#d2d2d7", fontSize: "0.75rem" }}>·</span>
                        <span style={{
                          fontSize: "0.75rem",
                          color: "#86868b",
                          fontFamily: "var(--font-heading)",
                          fontWeight: 500,
                        }}>
                          {entry.domain}
                        </span>
                      </>
                    )}
                  </div>

                  {/* Description */}
                  <p style={{
                    fontSize: "0.875rem",
                    color: "#515154",
                    lineHeight: 1.7,
                  }}>
                    {entry.description}
                  </p>
                </div>

                {/* Right — date range pill */}
                <span style={{
                  flexShrink: 0,
                  padding: "0.25rem 0.75rem",
                  borderRadius: "9999px",
                  backgroundColor: "#ffffff",
                  border: "1px solid #d2d2d7",
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  color: "#515154",
                  fontFamily: "var(--font-heading)",
                  whiteSpace: "nowrap",
                }}>
                  {entry.dateRange}
                </span>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
