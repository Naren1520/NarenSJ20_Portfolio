"use client";

import Link from "next/link";
import type { Project } from "@/lib/projects";
import type { Level1Detail } from "@/lib/projectDetail";
import ProjectIcon from "./ProjectIcon";

const NAV_H = 68;

interface Props {
  project: Project;
  detail: Level1Detail;
}

/* ── tiny shared pieces ─────────────────────────────────────── */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center",
      padding: "0.3125rem 0.875rem", borderRadius: "9999px",
      backgroundColor: "#f5f5f7", border: "1px solid #d2d2d7",
      fontFamily: "var(--font-heading)", fontSize: "0.6875rem",
      fontWeight: 700, letterSpacing: "0.07em",
      textTransform: "uppercase" as const, color: "#1d1d1f",
      marginBottom: "1.25rem",
    }}>
      {children}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: "var(--font-heading)", fontSize: "0.6875rem",
      fontWeight: 700, letterSpacing: "0.07em",
      textTransform: "uppercase" as const, color: "#86868b",
      marginBottom: "1.25rem",
    }}>
      {children}
    </p>
  );
}

/* ──────────────────────────────────────────────────────────── */
export default function Level1Page({ project, detail }: Props) {
  const pad: React.CSSProperties = {
    maxWidth: "72rem",
    marginInline: "auto",
    paddingInline: "clamp(1.5rem, 6vw, 4rem)",
  };

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#fff",
      paddingTop: `${NAV_H}px`,
      color: "#1d1d1f",
      fontFamily: "var(--font-body)",
    }}>

      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <div style={{
        ...pad,
        paddingTop: "clamp(3rem, 7vw, 5rem)",
        paddingBottom: "clamp(2.5rem, 5vw, 4rem)",
        borderBottom: "1px solid #d2d2d7",
      }}>
        {/* Back */}
        <Link href="/#work-gallery" style={{
          display: "inline-flex", alignItems: "center", gap: "0.375rem",
          fontSize: "0.8125rem", fontWeight: 500, color: "#86868b",
          textDecoration: "none", marginBottom: "2rem",
          fontFamily: "var(--font-heading)",
        }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
            stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
            <path d="M10 12L6 8l4-4" />
          </svg>
          All Projects
        </Link>

        {/* Category + level */}
        <Eyebrow>{project.difficulty} Project</Eyebrow>

        {/* Title */}
        <h1 style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(2.75rem, 6vw, 5rem)",
          fontWeight: 800, letterSpacing: "-0.045em",
          lineHeight: 1.0, color: "#1d1d1f",
          margin: "0 0 1.25rem",
        }}>
          {project.title}
        </h1>

        {/* Tagline */}
        <p style={{
          fontSize: "clamp(1.125rem, 2vw, 1.4375rem)",
          color: "#86868b", lineHeight: 1.5,
          maxWidth: "44ch", margin: "0 0 1.75rem",
          fontWeight: 400,
        }}>
          {detail.tagline}
        </p>

        {/* Short description */}
        <p style={{
          fontSize: "clamp(0.9375rem, 1.2vw, 1.0625rem)",
          color: "#515154", lineHeight: 1.75,
          maxWidth: "56ch", margin: "0 0 2.5rem",
        }}>
          {project.description}
        </p>

        {/* CTA buttons */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.875rem 1.75rem", borderRadius: "9999px",
                backgroundColor: "#1d1d1f", color: "#ffffff",
                fontSize: "0.9375rem", fontWeight: 600,
                fontFamily: "var(--font-heading)", textDecoration: "none",
              }}>
              Live Demo
              <svg width="13" height="13" viewBox="0 0 12 12" fill="none"
                stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5" />
              </svg>
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.875rem 1.75rem", borderRadius: "9999px",
                backgroundColor: "#f5f5f7", border: "1px solid #d2d2d7",
                color: "#1d1d1f", fontSize: "0.9375rem", fontWeight: 600,
                fontFamily: "var(--font-heading)", textDecoration: "none",
              }}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
          )}
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          HERO IMAGE
      ══════════════════════════════════════════════ */}
      {detail.heroImage && (
        <div style={{
          ...pad,
          paddingTop: "clamp(2.5rem, 5vw, 4rem)",
          paddingBottom: "clamp(2.5rem, 5vw, 4rem)",
          borderBottom: "1px solid #d2d2d7",
        }}>
          <div style={{
            borderRadius: "1.25rem",
            overflow: "hidden",
            border: "1px solid #e8e8ed",
            boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
            backgroundColor: "#f5f5f7",
            lineHeight: 0,
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={detail.heroImage}
              alt={`${project.title} screenshot`}
              style={{ width: "100%", height: "auto", display: "block",
                maxHeight: "520px", objectFit: "cover", objectPosition: "top" }}
            />
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════
          FEATURES
      ══════════════════════════════════════════════ */}
      {detail.features.length > 0 && (
        <div style={{
          ...pad,
          paddingTop: "clamp(3rem, 6vw, 5rem)",
          paddingBottom: "clamp(3rem, 6vw, 5rem)",
          borderBottom: "1px solid #d2d2d7",
        }}>
          <SectionLabel>Features</SectionLabel>
          <h2 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
            fontWeight: 800, letterSpacing: "-0.035em",
            color: "#1d1d1f", margin: "0 0 2.5rem",
          }}>
            What it does.
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 18rem), 1fr))",
            gap: "1rem",
          }}>
            {detail.features.map((f) => (
              <div key={f.title} style={{
                backgroundColor: "#f5f5f7",
                border: "1px solid #d2d2d7",
                borderRadius: "1.125rem",
                padding: "1.5rem",
                display: "flex", flexDirection: "column", gap: "0.625rem",
              }}>
                <div style={{
                  width: "2.25rem", height: "2.25rem",
                  borderRadius: "0.625rem",
                  backgroundColor: "#fff",
                  border: "1px solid #d2d2d7",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <ProjectIcon name={f.icon ?? "star"} size={16} color="#1d1d1f" />
                </div>
                <h3 style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.0625rem", fontWeight: 700,
                  color: "#1d1d1f", margin: 0,
                }}>
                  {f.title}
                </h3>
                <p style={{
                  fontSize: "0.9rem", color: "#515154",
                  lineHeight: 1.7, margin: 0,
                }}>
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════
          TECH STACK
      ══════════════════════════════════════════════ */}
      {detail.techStack.length > 0 && (
        <div style={{
          ...pad,
          paddingTop: "clamp(2.5rem, 5vw, 4rem)",
          paddingBottom: "clamp(2.5rem, 5vw, 4rem)",
          borderBottom: "1px solid #d2d2d7",
        }}>
          <SectionLabel>Tech Stack</SectionLabel>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem" }}>
            {detail.techStack.map((t) => (
              <div key={t.name} style={{
                display: "flex", flexDirection: "column", alignItems: "flex-start",
                padding: "0.625rem 1rem",
                backgroundColor: "#f5f5f7", border: "1px solid #d2d2d7",
                borderRadius: "0.75rem",
              }}>
                <span style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.9375rem", fontWeight: 700,
                  color: "#1d1d1f",
                }}>
                  {t.name}
                </span>
                <span style={{
                  fontSize: "0.75rem", color: "#86868b",
                  fontFamily: "var(--font-heading)",
                }}>
                  {t.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════
          SCREENSHOTS
      ══════════════════════════════════════════════ */}
      {detail.screenshots.length > 0 && (
        <div style={{
          ...pad,
          paddingTop: "clamp(3rem, 6vw, 5rem)",
          paddingBottom: "clamp(3rem, 6vw, 5rem)",
          borderBottom: "1px solid #d2d2d7",
        }}>
          <SectionLabel>Screenshots</SectionLabel>
          <h2 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
            fontWeight: 800, letterSpacing: "-0.035em",
            color: "#1d1d1f", margin: "0 0 2rem",
          }}>
            See it in action.
          </h2>

          {/* Primary screenshot — full width */}
          <div style={{
            borderRadius: "1.25rem", overflow: "hidden",
            border: "1px solid #e8e8ed",
            boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
            marginBottom: "1rem", lineHeight: 0,
            backgroundColor: "#f5f5f7",
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={detail.screenshots[0].src} alt={detail.screenshots[0].alt}
              style={{ width: "100%", height: "auto", display: "block",
                maxHeight: "480px", objectFit: "cover", objectPosition: "top" }}
            />
          </div>
          {detail.screenshots[0].caption && (
            <p style={{ fontSize: "0.8125rem", color: "#86868b",
              textAlign: "center", marginBottom: "1.5rem" }}>
              {detail.screenshots[0].caption}
            </p>
          )}

          {/* Supporting screenshots — 2-col grid */}
          {detail.screenshots.length > 1 && (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 24rem), 1fr))",
              gap: "1rem",
            }}>
              {detail.screenshots.slice(1).map((s) => (
                <div key={s.src}>
                  <div style={{
                    borderRadius: "1rem", overflow: "hidden",
                    border: "1px solid #e8e8ed",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                    lineHeight: 0, backgroundColor: "#f5f5f7",
                  }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.src} alt={s.alt}
                      style={{ width: "100%", height: "240px",
                        objectFit: "cover", objectPosition: "top", display: "block" }}
                    />
                  </div>
                  {s.caption && (
                    <p style={{ fontSize: "0.75rem", color: "#86868b",
                      textAlign: "center", marginTop: "0.5rem" }}>
                      {s.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ══════════════════════════════════════════════
          GITHUB CTA
      ══════════════════════════════════════════════ */}
      <div style={{
        ...pad,
        paddingTop: "clamp(3rem, 6vw, 5rem)",
        paddingBottom: "clamp(4rem, 8vw, 7rem)",
        display: "flex", flexDirection: "column",
        alignItems: "flex-start", gap: "1.5rem",
      }}>
        <p style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
          fontWeight: 700, color: "#1d1d1f",
          maxWidth: "38ch", lineHeight: 1.35,
          margin: 0,
        }}>
          {detail.githubCta ?? "Built from idea to working product → Explore the code"}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.875rem 1.75rem", borderRadius: "9999px",
                backgroundColor: "#1d1d1f", color: "#ffffff",
                fontSize: "0.9375rem", fontWeight: 600,
                fontFamily: "var(--font-heading)", textDecoration: "none",
              }}>
              View on GitHub
              <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          )}
          <Link href="/#work-gallery" style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.875rem 1.75rem", borderRadius: "9999px",
            backgroundColor: "#f5f5f7", border: "1px solid #d2d2d7",
            color: "#1d1d1f", fontSize: "0.9375rem", fontWeight: 600,
            fontFamily: "var(--font-heading)", textDecoration: "none",
          }}>
            ← All Projects
          </Link>
        </div>
      </div>

      {/* ── Footer mini ─────────────────────────────── */}
      <footer style={{
        borderTop: "1px solid #d2d2d7",
        padding: "1.5rem clamp(1.5rem, 6vw, 4rem)",
        maxWidth: "72rem", marginInline: "auto",
        display: "flex", flexWrap: "wrap",
        alignItems: "center", justifyContent: "space-between", gap: "1rem",
      }}>
        <p style={{ fontSize: "0.75rem", color: "#86868b", margin: 0 }}>
          © {new Date().getFullYear()} Naren S J
        </p>
        <div style={{ display: "flex", gap: "1.25rem" }}>
          <Link href="/" style={{ fontSize: "0.75rem", color: "#86868b", textDecoration: "none" }}>
            Portfolio
          </Link>
          <Link href="/privacy" style={{ fontSize: "0.75rem", color: "#86868b", textDecoration: "none" }}>
            Privacy
          </Link>
        </div>
      </footer>
    </div>
  );
}
