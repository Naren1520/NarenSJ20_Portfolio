"use client";

import { education } from "@/lib/education";
import ScrollReveal from "@/components/ui/ScrollReveal";

/* Badge colour per grade band */
function gradeBadge(grade: string): { bg: string; color: string; border: string } {
  if (grade === "Pursuing") return { bg: "#0066cc", color: "#ffffff", border: "#0066cc" };
  const pct = parseFloat(grade);
  if (pct >= 95) return { bg: "#1d1d1f", color: "#ffffff", border: "#1d1d1f" };
  return { bg: "#ffffff", color: "#1d1d1f", border: "#d2d2d7" };
}

/* Small location pin SVG */
function PinIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 1a3.5 3.5 0 0 1 3.5 3.5C9.5 7.5 6 11 6 11S2.5 7.5 2.5 4.5A3.5 3.5 0 0 1 6 1Z" />
      <circle cx="6" cy="4.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function EducationSection() {
  return (
    <section
      id="education"
      className="w-full border-t border-[#d2d2d7] bg-white"
      aria-label="Education"
    >
      <div className="container-page section-pad">
        <ScrollReveal duration={500}>
          <div className="eyebrow-tag">Academic Background</div>
          <h2 className="section-heading">Education.</h2>
        </ScrollReveal>

        {/* Timeline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {education.map((entry, i) => {
            const badge = gradeBadge(entry.grade);
            const isPursuing = entry.grade === "Pursuing";

            return (
              <ScrollReveal key={entry.id} delay={i * 120} duration={450}>
                <article
                  style={{
                    backgroundColor: "#f5f5f7",
                    border: "1px solid #d2d2d7",
                    borderRadius: "1.25rem",
                    padding: "clamp(1.25rem, 3vw, 2rem)",
                    transition: "border-color 0.2s ease",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Accent bar — left edge */}
                  <div style={{
                    position: "absolute",
                    left: 0, top: "1.5rem", bottom: "1.5rem",
                    width: "3px",
                    borderRadius: "0 3px 3px 0",
                    backgroundColor: isPursuing ? "#0066cc" : "#1d1d1f",
                    opacity: isPursuing ? 1 : 0.15,
                  }} />

                  <div style={{ paddingLeft: "0.75rem" }}>
                    {/* Top row — year range + grade badge */}
                    <div style={{
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "0.625rem",
                      marginBottom: "1rem",
                    }}>
                      <span style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "9999px",
                        backgroundColor: "#ffffff",
                        border: "1px solid #d2d2d7",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        color: "#515154",
                        fontFamily: "var(--font-heading)",
                      }}>
                        {entry.startYear} — {entry.endYear}
                      </span>

                      <span style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        padding: "0.25rem 0.875rem",
                        borderRadius: "9999px",
                        backgroundColor: badge.bg,
                        border: `1px solid ${badge.border}`,
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: badge.color,
                        fontFamily: "var(--font-heading)",
                        letterSpacing: "0.02em",
                      }}>
                        {isPursuing && (
                          <span style={{
                            width: "0.4rem", height: "0.4rem",
                            borderRadius: "9999px",
                            backgroundColor: "#ffffff",
                            animation: "pulse 1.5s ease-in-out infinite",
                            flexShrink: 0,
                          }} />
                        )}
                        {entry.grade}
                      </span>
                    </div>

                    {/* Institution name */}
                    <h3 style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(1.0625rem, 1.8vw, 1.375rem)",
                      fontWeight: 700,
                      color: "#1d1d1f",
                      lineHeight: 1.25,
                      marginBottom: "0.375rem",
                    }}>
                      {entry.institution}
                    </h3>

                    {/* Degree */}
                    <p style={{
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                      color: "#1d1d1f",
                      marginBottom: "0.25rem",
                    }}>
                      {entry.degree}
                    </p>

                    {/* Field of study with location pin */}
                    <p style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.3rem",
                      fontSize: "0.8125rem",
                      color: "#86868b",
                      marginBottom: entry.description ? "1rem" : 0,
                    }}>
                      <PinIcon />
                      {entry.fieldOfStudy}
                    </p>

                    {/* Description */}
                    {entry.description && (
                      <p style={{
                        fontSize: "0.875rem",
                        color: "#515154",
                        lineHeight: 1.7,
                        borderTop: "1px solid #d2d2d7",
                        paddingTop: "0.875rem",
                      }}>
                        {entry.description}
                      </p>
                    )}
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.7); }
        }
      `}</style>
    </section>
  );
}
