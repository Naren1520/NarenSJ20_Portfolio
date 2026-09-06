import Link from "next/link";
import { experience }     from "@/lib/experience";
import { education }      from "@/lib/education";
import { achievements }   from "@/lib/achievements";
import { certifications } from "@/lib/certifications";

const PDF_URL   = "/resume.pdf";
const NAV_H     = 68;

/* ── Tiny shared pieces ─────────────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center",
      padding: "0.3125rem 0.875rem", borderRadius: "9999px",
      backgroundColor: "#f5f5f7", border: "1px solid #d2d2d7",
      fontFamily: "var(--font-heading)", fontSize: "0.6875rem",
      fontWeight: 700, letterSpacing: "0.07em",
      textTransform: "uppercase" as const,
      color: "#1d1d1f", marginBottom: "1.25rem",
    }}>
      {children}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      fontFamily: "var(--font-heading)",
      fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
      fontWeight: 800, lineHeight: 1.05,
      letterSpacing: "-0.035em", color: "#1d1d1f",
      marginBottom: "2rem",
    }}>
      {children}
    </h2>
  );
}

const resultBadge: Record<string, { bg: string; color: string; border: string }> = {
  "Winner":                  { bg: "#1d1d1f", color: "#fff",     border: "#1d1d1f" },
  "Finalist":                { bg: "#fff",    color: "#1d1d1f",  border: "#d2d2d7" },
  "Semi-Finalist":           { bg: "#fff",    color: "#1d1d1f",  border: "#d2d2d7" },
  "Best Innovative Project": { bg: "#0066cc", color: "#fff",     border: "#0066cc" },
  "College Finalist":        { bg: "#fff",    color: "#1d1d1f",  border: "#d2d2d7" },
};

/* ────────────────────────────────────────────────────────── */
export default function ResumePage() {
  const professionalExp = experience.filter(e => e.type === "professional");

  const pad: React.CSSProperties = {
    maxWidth: "80rem",
    marginInline: "auto",
    paddingInline: "clamp(1.25rem, 5vw, 4.5rem)",
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#fff", paddingTop: `${NAV_H}px`, color: "#1d1d1f", fontFamily: "var(--font-body)" }}>

      {/* ── Page header ─────────────────────────────── */}
      <div style={{ ...pad, paddingTop: "clamp(2.5rem, 5vw, 4rem)", paddingBottom: "2rem", borderBottom: "1px solid #d2d2d7" }}>

        <Link href="/" style={{
          display: "inline-flex", alignItems: "center", gap: "0.375rem",
          fontSize: "0.8125rem", fontWeight: 500, color: "#86868b",
          textDecoration: "none", marginBottom: "2rem",
          fontFamily: "var(--font-heading)",
        }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path d="M10 12L6 8l4-4" />
          </svg>
          Back to Portfolio
        </Link>

        {/* Title row */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "1.5rem" }}>
          <div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              padding: "0.3125rem 0.875rem", borderRadius: "9999px",
              backgroundColor: "#f5f5f7", border: "1px solid #d2d2d7",
              fontFamily: "var(--font-heading)", fontSize: "0.6875rem",
              fontWeight: 700, letterSpacing: "0.07em",
              textTransform: "uppercase", color: "#1d1d1f", marginBottom: "1rem",
            }}>
              <span style={{ width: "0.375rem", height: "0.375rem", borderRadius: "9999px", backgroundColor: "#0066cc" }} />
              Curriculum Vitae
            </div>
            <h1 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 800, lineHeight: 1.04,
              letterSpacing: "-0.04em", color: "#1d1d1f", margin: 0,
            }}>
              Naren S J
            </h1>
            <p style={{ marginTop: "0.625rem", fontSize: "clamp(0.9375rem, 1.3vw, 1.125rem)", color: "#86868b" }}>
              AI Engineer &amp; Software Builder
            </p>
          </div>

          {/* Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
            <a href={PDF_URL} target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: "0.375rem",
              padding: "0.6875rem 1.25rem", borderRadius: "9999px",
              backgroundColor: "#f5f5f7", border: "1px solid #d2d2d7",
              fontSize: "0.8125rem", fontWeight: 600,
              fontFamily: "var(--font-heading)", color: "#1d1d1f", textDecoration: "none",
            }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Open in Tab
            </a>
            <a href={PDF_URL} download="Naren_SJ_Resume.pdf" style={{
              display: "inline-flex", alignItems: "center", gap: "0.375rem",
              padding: "0.6875rem 1.25rem", borderRadius: "9999px",
              backgroundColor: "#1d1d1f", color: "#ffffff",
              fontSize: "0.8125rem", fontWeight: 600,
              fontFamily: "var(--font-heading)", textDecoration: "none",
            }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download PDF
            </a>
          </div>
        </div>
      </div>

      {/* ── PDF embedded directly ────────────────────── */}
      <div style={{ ...pad, paddingTop: "2.5rem", paddingBottom: "2.5rem", borderBottom: "1px solid #d2d2d7" }}>
        {/* Card wrapper */}
        <div style={{
          borderRadius: "1rem",
          overflow: "hidden",
          border: "1px solid #d2d2d7",
          boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
          backgroundColor: "#f5f5f7",
        }}>
          <iframe
            src={`${PDF_URL}#toolbar=1&navpanes=0`}
            title="Naren S J — Resume"
            width="100%"
            style={{
              display: "block",
              height: "clamp(60vh, 80vh, 1100px)",
              border: "none",
            }}
          />
        </div>

        {/* Fallback message shown only if iframe fails (e.g. iOS Safari) */}
        <p style={{
          marginTop: "1rem", fontSize: "0.8125rem",
          color: "#86868b", textAlign: "center",
        }}>
          Can&apos;t see the PDF?{" "}
          <a href={PDF_URL} download="Naren_SJ_Resume.pdf" style={{ color: "#0066cc", fontWeight: 600 }}>
            Download it here
          </a>.
        </p>
      </div>

      {/* ── Details sections ─────────────────────────── */}
      <div style={{ ...pad, paddingTop: "clamp(3rem, 6vw, 5rem)", paddingBottom: "clamp(4rem, 8vw, 7rem)" }}>

        {/* Experience */}
        <section style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
          <SectionLabel>Career &amp; Engineering Roles</SectionLabel>
          <SectionTitle>Experience.</SectionTitle>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {professionalExp.map((entry) => (
              <article key={entry.id} style={{
                backgroundColor: "#f5f5f7", border: "1px solid #d2d2d7",
                borderRadius: "1rem", padding: "clamp(1.25rem, 3vw, 2rem)",
              }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: "0.75rem", marginBottom: "1.25rem" }}>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.125rem, 1.8vw, 1.375rem)", fontWeight: 700, color: "#1d1d1f", margin: 0 }}>
                    {entry.organisation}
                  </h3>
                  {entry.location && (
                    <span style={{ fontSize: "0.75rem", fontWeight: 500, color: "#86868b", fontFamily: "var(--font-heading)" }}>
                      {entry.location}
                    </span>
                  )}
                </div>

                {entry.roles.map((role, i) => (
                  <div key={i} style={{
                    paddingTop: i > 0 ? "1.25rem" : 0,
                    marginTop: i > 0 ? "1.25rem" : 0,
                    borderTop: i > 0 ? "1px solid #d2d2d7" : "none",
                  }}>
                    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "0.5rem", marginBottom: "0.875rem" }}>
                      <span style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#1d1d1f" }}>{role.title}</span>
                      <span style={{
                        padding: "0.25rem 0.75rem", borderRadius: "9999px",
                        backgroundColor: "#fff", border: "1px solid #d2d2d7",
                        fontSize: "0.75rem", fontWeight: 500, color: "#515154",
                      }}>
                        {role.dateRange}
                      </span>
                    </div>
                    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {role.responsibilities.map((r, j) => (
                        <li key={j} style={{ display: "flex", gap: "0.625rem", alignItems: "flex-start" }}>
                          <span style={{ color: "#0066cc", fontWeight: 700, marginTop: "0.1em", flexShrink: 0 }}>•</span>
                          <span style={{ fontSize: "0.875rem", color: "#515154", lineHeight: 1.65 }}>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </article>
            ))}
          </div>
        </section>

        {/* Education */}
        <section style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
          <SectionLabel>Academic Background</SectionLabel>
          <SectionTitle>Education.</SectionTitle>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 22rem), 1fr))", gap: "1rem" }}>
            {education.map((entry) => (
              <div key={entry.id} style={{
                backgroundColor: "#f5f5f7", border: "1px solid #d2d2d7",
                borderRadius: "1rem", padding: "clamp(1.25rem, 3vw, 1.75rem)",
                display: "flex", flexDirection: "column", gap: "0.5rem",
              }}>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "0.5rem" }}>
                  <span style={{ padding: "0.25rem 0.75rem", borderRadius: "9999px", backgroundColor: "#fff", border: "1px solid #d2d2d7", fontSize: "0.75rem", fontWeight: 500, color: "#515154" }}>
                    {entry.startYear} — {entry.endYear}
                  </span>
                  <span style={{ padding: "0.25rem 0.75rem", borderRadius: "9999px", backgroundColor: "#fff", border: "1px solid #d2d2d7", fontSize: "0.75rem", fontWeight: 600, color: "#0066cc" }}>
                    {entry.grade}
                  </span>
                </div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.0625rem", fontWeight: 700, color: "#1d1d1f", marginTop: "0.5rem" }}>
                  {entry.institution}
                </h3>
                <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "#1d1d1f", margin: 0 }}>{entry.degree}</p>
                <p style={{ fontSize: "0.8125rem", color: "#86868b", margin: 0 }}>{entry.fieldOfStudy}</p>
                {entry.description && (
                  <p style={{ fontSize: "0.8125rem", color: "#515154", lineHeight: 1.65, borderTop: "1px solid #d2d2d7", paddingTop: "0.875rem", marginTop: "0.5rem" }}>
                    {entry.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
          <SectionLabel>Recognition</SectionLabel>
          <SectionTitle>Achievements.</SectionTitle>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {achievements.map((a) => {
              const badge = resultBadge[a.result] ?? { bg: "#f5f5f7", color: "#1d1d1f", border: "#d2d2d7" };
              return (
                <div key={a.id} style={{
                  backgroundColor: "#f5f5f7", border: "1px solid #d2d2d7",
                  borderRadius: "1rem", padding: "clamp(1rem, 2.5vw, 1.5rem)",
                  display: "flex", flexWrap: "wrap", alignItems: "center",
                  justifyContent: "space-between", gap: "1rem",
                }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontFamily: "var(--font-heading)", fontSize: "0.9375rem", fontWeight: 700, color: "#1d1d1f", margin: "0 0 0.25rem" }}>
                      {a.title}
                    </p>
                    {a.description && (
                      <p style={{ fontSize: "0.8125rem", color: "#515154", margin: 0, lineHeight: 1.55 }}>{a.description}</p>
                    )}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", flexShrink: 0 }}>
                    <span style={{ padding: "0.25rem 0.75rem", borderRadius: "9999px", backgroundColor: badge.bg, color: badge.color, border: `1px solid ${badge.border}`, fontSize: "0.75rem", fontWeight: 700 }}>
                      {a.result}
                    </span>
                    <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#86868b" }}>{a.year}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <SectionLabel>Verified Credentials</SectionLabel>
          <SectionTitle>Certifications.</SectionTitle>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 22rem), 1fr))", gap: "1rem" }}>
            {certifications.map((cert) => (
              <div key={cert.id} style={{
                backgroundColor: "#f5f5f7", border: "1px solid #d2d2d7",
                borderRadius: "1rem", padding: "clamp(1.25rem, 3vw, 1.75rem)",
                display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "1rem",
              }}>
                <div>
                  <span style={{ padding: "0.25rem 0.75rem", borderRadius: "9999px", backgroundColor: "#fff", border: "1px solid #d2d2d7", fontSize: "0.75rem", fontWeight: 500, color: "#515154", display: "inline-block", marginBottom: "0.875rem" }}>
                    {cert.dateIssued}
                  </span>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "0.9375rem", fontWeight: 700, color: "#1d1d1f", marginBottom: "0.25rem" }}>
                    {cert.name}
                  </h3>
                  <p style={{ fontSize: "0.8125rem", color: "#86868b", margin: 0 }}>Issued by {cert.issuer}</p>
                </div>
                {cert.credentialUrl && (
                  <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" style={{
                    display: "inline-flex", alignItems: "center", gap: "0.375rem",
                    fontSize: "0.8125rem", fontWeight: 600, color: "#1d1d1f",
                    textDecoration: "none", paddingTop: "0.875rem", borderTop: "1px solid #d2d2d7",
                  }}>
                    Verify Credential
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* ── Footer ───────────────────────────────────── */}
      <footer style={{
        borderTop: "1px solid #d2d2d7", backgroundColor: "#fff",
        display: "flex", flexWrap: "wrap", alignItems: "center",
        justifyContent: "space-between", gap: "1rem",
        padding: "1.75rem clamp(1.25rem, 5vw, 4.5rem)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ width: "0.5rem", height: "0.5rem", borderRadius: "9999px", backgroundColor: "#1d1d1f", display: "block" }} />
          <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.875rem", fontWeight: 700, color: "#1d1d1f" }}>
            Naren S J
          </span>
        </div>
        <p style={{ fontSize: "0.75rem", color: "#86868b", margin: 0 }}>
          © {new Date().getFullYear()} Naren S J — AI Engineer &amp; Software Builder
        </p>
      </footer>

    </div>
  );
}
