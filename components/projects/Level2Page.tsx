"use client";

import Link from "next/link";
import type { Project } from "@/lib/projects";
import type { Level2Detail } from "@/lib/projectDetail";
import ProjectIcon from "./ProjectIcon";

const NAV_H = 68;

interface Props { project: Project; detail: Level2Detail; }

/* ── primitives ─────────────────────────────────────────────── */
const pad: React.CSSProperties = {
  maxWidth: "80rem",
  marginInline: "auto",
  paddingInline: "clamp(1.5rem, 6vw, 4.5rem)",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: "var(--font-heading)", fontSize: "0.6875rem",
      fontWeight: 700, letterSpacing: "0.07em",
      textTransform: "uppercase" as const, color: "#86868b",
      margin: "0 0 0.875rem",
    }}>{children}</p>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      fontFamily: "var(--font-heading)",
      fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
      fontWeight: 800, letterSpacing: "-0.038em",
      color: "#1d1d1f", margin: "0 0 1.75rem", lineHeight: 1.06,
    }}>{children}</h2>
  );
}

function Divider() {
  return <div style={{ height: "1px", backgroundColor: "#d2d2d7", margin: "0" }} />;
}

/* ──────────────────────────────────────────────────────────── */
export default function Level2Page({ project, detail }: Props) {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#fff",
      paddingTop: `${NAV_H}px`, color: "#1d1d1f", fontFamily: "var(--font-body)" }}>

      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section style={{ ...pad, paddingTop: "clamp(3rem,7vw,5.5rem)",
        paddingBottom: "clamp(3rem,6vw,5rem)", borderBottom: "1px solid #d2d2d7" }}>

        <Link href="/#work-gallery" style={{
          display: "inline-flex", alignItems: "center", gap: "0.375rem",
          fontSize: "0.8125rem", fontWeight: 500, color: "#86868b",
          textDecoration: "none", marginBottom: "2rem",
          fontFamily: "var(--font-heading)",
        }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
            stroke="currentColor" strokeWidth="1.75"><path d="M10 12L6 8l4-4"/></svg>
          All Projects
        </Link>

        {/* eyebrow */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "0.5rem",
          padding: "0.3125rem 0.875rem", borderRadius: "9999px",
          backgroundColor: "#f5f5f7", border: "1px solid #d2d2d7",
          fontFamily: "var(--font-heading)", fontSize: "0.6875rem",
          fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase",
          color: "#1d1d1f", marginBottom: "1.25rem",
        }}>
          {project.difficulty} · Case Study
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}>
          {/* Left — text */}
          <div style={{ maxWidth: "56rem" }}>
            <h1 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(3rem, 6.5vw, 5.5rem)",
              fontWeight: 800, letterSpacing: "-0.045em",
              lineHeight: 0.98, color: "#1d1d1f", margin: "0 0 1.25rem",
            }}>{project.title}</h1>

            <p style={{
              fontSize: "clamp(1.125rem, 2vw, 1.4375rem)",
              color: "#86868b", lineHeight: 1.5, maxWidth: "46ch",
              margin: "0 0 1.5rem", fontWeight: 400,
            }}>{detail.tagline}</p>

            <p style={{
              fontSize: "clamp(0.9375rem, 1.2vw, 1.0625rem)",
              color: "#515154", lineHeight: 1.8, maxWidth: "58ch",
              margin: "0 0 2.5rem",
            }}>{detail.overview}</p>

            {/* Tech pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2.5rem" }}>
              {project.tags.map(t => (
                <span key={t} style={{
                  padding: "0.3125rem 0.875rem", borderRadius: "9999px",
                  backgroundColor: "#f5f5f7", border: "1px solid #d2d2d7",
                  fontSize: "0.8125rem", fontWeight: 600,
                  fontFamily: "var(--font-heading)", color: "#515154",
                }}>{t}</span>
              ))}
            </div>

            {/* CTA buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  padding: "0.9375rem 1.875rem", borderRadius: "9999px",
                  backgroundColor: "#1d1d1f", color: "#fff",
                  fontSize: "0.9375rem", fontWeight: 600,
                  fontFamily: "var(--font-heading)", textDecoration: "none",
                }}>
                  Live Demo
                  <svg width="13" height="13" viewBox="0 0 12 12" fill="none"
                    stroke="currentColor" strokeWidth="2">
                    <path d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5"/>
                  </svg>
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  padding: "0.9375rem 1.875rem", borderRadius: "9999px",
                  backgroundColor: "#f5f5f7", border: "1px solid #d2d2d7",
                  color: "#1d1d1f", fontSize: "0.9375rem", fontWeight: 600,
                  fontFamily: "var(--font-heading)", textDecoration: "none",
                }}>
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══ HERO IMAGE ════════════════════════════════════════ */}
      {detail.heroImage && (
        <>
          <div style={{ ...pad, paddingTop: "clamp(2.5rem,5vw,4rem)",
            paddingBottom: "clamp(2.5rem,5vw,4rem)" }}>
            <div style={{
              borderRadius: "1.5rem", overflow: "hidden",
              border: "1px solid #e8e8ed",
              boxShadow: "0 12px 60px rgba(0,0,0,0.10)",
              backgroundColor: "#f5f5f7", lineHeight: 0,
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={detail.heroImage} alt={project.title}
                style={{ width: "100%", maxHeight: "580px",
                  objectFit: "cover", objectPosition: "top", display: "block" }}/>
            </div>
          </div>
          <Divider />
        </>
      )}

      {/* ══ PROBLEM / SOLUTION ════════════════════════════════ */}
      <section style={{ ...pad, paddingTop: "clamp(3rem,6vw,5rem)",
        paddingBottom: "clamp(3rem,6vw,5rem)", borderBottom: "1px solid #d2d2d7" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,28rem),1fr))",
          gap: "clamp(2rem,5vw,5rem)",
        }}>
          {/* Problem */}
          <div>
            <SectionLabel>The Problem</SectionLabel>
            <H2>What needed solving.</H2>
            <p style={{
              fontSize: "clamp(0.9375rem,1.2vw,1.0625rem)",
              color: "#515154", lineHeight: 1.8,
            }}>{detail.problem}</p>
          </div>
          {/* Solution */}
          <div>
            <SectionLabel>The Solution</SectionLabel>
            <H2>How I solved it.</H2>
            <p style={{
              fontSize: "clamp(0.9375rem,1.2vw,1.0625rem)",
              color: "#515154", lineHeight: 1.8,
            }}>{detail.solution}</p>
          </div>
        </div>
      </section>

      {/* ══ FEATURES ══════════════════════════════════════════ */}
      {detail.features.length > 0 && (
        <section style={{ ...pad, paddingTop: "clamp(3rem,6vw,5rem)",
          paddingBottom: "clamp(3rem,6vw,5rem)", borderBottom: "1px solid #d2d2d7" }}>
          <SectionLabel>Features</SectionLabel>
          <H2>What it does.</H2>

          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {detail.features.map((f, i) => (
              <div key={f.title} style={{
                display: "grid",
                gridTemplateColumns: f.image
                  ? "repeat(auto-fit, minmax(min(100%,26rem),1fr))"
                  : "1fr",
                gap: "clamp(1.5rem,4vw,3.5rem)",
                alignItems: "center",
                flexDirection: i % 2 === 1 ? "row-reverse" : "row",
              }}>
                {/* Text */}
                <div style={{ order: i % 2 === 1 ? 2 : 1 }}>
                  {f.icon && (
                    <div style={{
                      width: "2.75rem", height: "2.75rem",
                      borderRadius: "0.75rem",
                      backgroundColor: "#f5f5f7",
                      border: "1px solid #d2d2d7",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: "1rem", flexShrink: 0,
                    }}>
                      <ProjectIcon name={f.icon} size={18} color="#1d1d1f" />
                    </div>
                  )}
                  <h3 style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.25rem,2vw,1.625rem)",
                    fontWeight: 700, letterSpacing: "-0.025em",
                    color: "#1d1d1f", margin: "0 0 0.875rem",
                  }}>{f.title}</h3>
                  <p style={{
                    fontSize: "clamp(0.9375rem,1.1vw,1.0625rem)",
                    color: "#515154", lineHeight: 1.8, maxWidth: "46ch",
                  }}>{f.description}</p>
                </div>
                {/* Image */}
                {f.image && (
                  <div style={{ order: i % 2 === 1 ? 1 : 2 }}>
                    <div style={{
                      borderRadius: "1.125rem", overflow: "hidden",
                      border: "1px solid #e8e8ed",
                      boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                      lineHeight: 0, backgroundColor: "#f5f5f7",
                    }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={f.image} alt={f.title}
                        style={{ width: "100%", height: "260px",
                          objectFit: "cover", objectPosition: "top", display: "block" }}/>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ══ ARCHITECTURE ══════════════════════════════════════ */}
      {detail.architecture.length > 0 && (
        <section style={{ ...pad, paddingTop: "clamp(3rem,6vw,5rem)",
          paddingBottom: "clamp(3rem,6vw,5rem)", borderBottom: "1px solid #d2d2d7" }}>
          <SectionLabel>System Architecture</SectionLabel>
          <H2>How it&apos;s built.</H2>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
            {detail.architecture.map((a) => (
              <div key={a.layer} style={{
                display: "grid",
                gridTemplateColumns: "8rem 1fr 2fr",
                gap: "1.25rem",
                padding: "1.125rem 1.375rem",
                backgroundColor: "#f5f5f7",
                border: "1px solid #d2d2d7",
                borderRadius: "0.875rem",
                alignItems: "center",
              }}>
                <span style={{
                  fontSize: "0.6875rem", fontWeight: 700,
                  letterSpacing: "0.06em", textTransform: "uppercase",
                  color: "#86868b", fontFamily: "var(--font-heading)",
                }}>{a.layer}</span>
                <span style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.9375rem", fontWeight: 700,
                  color: "#1d1d1f",
                }}>{a.tech}</span>
                <span style={{ fontSize: "0.875rem", color: "#515154", lineHeight: 1.6 }}>
                  {a.role}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ══ TECH STACK ════════════════════════════════════════ */}
      {detail.techStack.length > 0 && (
        <section style={{ ...pad, paddingTop: "clamp(2.5rem,5vw,4rem)",
          paddingBottom: "clamp(2.5rem,5vw,4rem)", borderBottom: "1px solid #d2d2d7" }}>
          <SectionLabel>Technology Stack</SectionLabel>

          {/* Group by category */}
          {(() => {
            const grouped: Record<string, typeof detail.techStack> = {};
            detail.techStack.forEach(t => {
              if (!grouped[t.category]) grouped[t.category] = [];
              grouped[t.category].push(t);
            });
            return Object.entries(grouped).map(([cat, items]) => (
              <div key={cat} style={{ marginBottom: "1.5rem" }}>
                <p style={{
                  fontSize: "0.75rem", fontWeight: 700,
                  color: "#86868b", fontFamily: "var(--font-heading)",
                  letterSpacing: "0.05em", textTransform: "uppercase",
                  marginBottom: "0.625rem",
                }}>{cat}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {items.map(t => (
                    <span key={t.name} style={{
                      padding: "0.4375rem 1rem",
                      borderRadius: "0.625rem",
                      backgroundColor: "#f5f5f7",
                      border: "1px solid #d2d2d7",
                      fontFamily: "var(--font-heading)",
                      fontSize: "0.875rem", fontWeight: 600,
                      color: "#1d1d1f",
                    }}>{t.name}</span>
                  ))}
                </div>
              </div>
            ));
          })()}
        </section>
      )}

      {/* ══ CHALLENGES ════════════════════════════════════════ */}
      {detail.challenges.length > 0 && (
        <section style={{ ...pad, paddingTop: "clamp(3rem,6vw,5rem)",
          paddingBottom: "clamp(3rem,6vw,5rem)", borderBottom: "1px solid #d2d2d7" }}>
          <SectionLabel>Challenges &amp; Solutions</SectionLabel>
          <H2>Real problems, real fixes.</H2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {detail.challenges.map((c, i) => (
              <div key={i} style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,22rem),1fr))",
                gap: "0",
                border: "1px solid #d2d2d7",
                borderRadius: "1.125rem",
                overflow: "hidden",
              }}>
                <div style={{ padding: "1.5rem", backgroundColor: "#f5f5f7",
                  borderRight: "1px solid #d2d2d7" }}>
                  <p style={{
                    fontSize: "0.6875rem", fontWeight: 700,
                    letterSpacing: "0.06em", textTransform: "uppercase",
                    color: "#86868b", fontFamily: "var(--font-heading)",
                    marginBottom: "0.625rem",
                  }}>Challenge</p>
                  <p style={{ fontSize: "0.9375rem", color: "#1d1d1f",
                    lineHeight: 1.65, fontWeight: 500 }}>{c.challenge}</p>
                </div>
                <div style={{ padding: "1.5rem", backgroundColor: "#fff" }}>
                  <p style={{
                    fontSize: "0.6875rem", fontWeight: 700,
                    letterSpacing: "0.06em", textTransform: "uppercase",
                    color: "#0066cc", fontFamily: "var(--font-heading)",
                    marginBottom: "0.625rem",
                  }}>Solution</p>
                  <p style={{ fontSize: "0.9375rem", color: "#515154",
                    lineHeight: 1.65 }}>{c.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ══ SCREENSHOTS ═══════════════════════════════════════ */}
      {detail.screenshots.length > 0 && (
        <section style={{ ...pad, paddingTop: "clamp(3rem,6vw,5rem)",
          paddingBottom: "clamp(3rem,6vw,5rem)", borderBottom: "1px solid #d2d2d7" }}>
          <SectionLabel>Demo &amp; Screenshots</SectionLabel>
          <H2>See it live.</H2>

          {/* Primary */}
          <div style={{
            borderRadius: "1.5rem", overflow: "hidden",
            border: "1px solid #e8e8ed",
            boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
            marginBottom: "1rem", lineHeight: 0,
            backgroundColor: "#f5f5f7",
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={detail.screenshots[0].src} alt={detail.screenshots[0].alt}
              style={{ width: "100%", maxHeight: "520px",
                objectFit: "cover", objectPosition: "top", display: "block" }}/>
          </div>
          {detail.screenshots[0].caption && (
            <p style={{ fontSize: "0.8125rem", color: "#86868b",
              textAlign: "center", marginBottom: "1.5rem" }}>
              {detail.screenshots[0].caption}
            </p>
          )}

          {/* Supporting grid */}
          {detail.screenshots.length > 1 && (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%,22rem),1fr))",
              gap: "1rem", marginTop: "0.5rem",
            }}>
              {detail.screenshots.slice(1).map(s => (
                <div key={s.src}>
                  <div style={{
                    borderRadius: "1rem", overflow: "hidden",
                    border: "1px solid #e8e8ed",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                    lineHeight: 0, backgroundColor: "#f5f5f7",
                  }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.src} alt={s.alt}
                      style={{ width: "100%", height: "220px",
                        objectFit: "cover", objectPosition: "top", display: "block" }}/>
                  </div>
                  {s.caption && (
                    <p style={{ fontSize: "0.75rem", color: "#86868b",
                      textAlign: "center", marginTop: "0.5rem" }}>{s.caption}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* ══ CTA ═══════════════════════════════════════════════ */}
      <section style={{ ...pad, paddingTop: "clamp(3rem,7vw,6rem)",
        paddingBottom: "clamp(4rem,8vw,7rem)" }}>
        <p style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(1.5rem,3vw,2.25rem)",
          fontWeight: 800, letterSpacing: "-0.035em",
          color: "#1d1d1f", maxWidth: "32ch",
          lineHeight: 1.2, margin: "0 0 2rem",
        }}>
          Explore the full source code and documentation.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              padding: "0.9375rem 2rem", borderRadius: "9999px",
              backgroundColor: "#1d1d1f", color: "#fff",
              fontSize: "0.9375rem", fontWeight: 600,
              fontFamily: "var(--font-heading)", textDecoration: "none",
            }}>
              View on GitHub
              <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
            </a>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              padding: "0.9375rem 2rem", borderRadius: "9999px",
              backgroundColor: "#f5f5f7", border: "1px solid #d2d2d7",
              color: "#1d1d1f", fontSize: "0.9375rem", fontWeight: 600,
              fontFamily: "var(--font-heading)", textDecoration: "none",
            }}>
              Live Demo
              <svg width="13" height="13" viewBox="0 0 12 12" fill="none"
                stroke="currentColor" strokeWidth="2">
                <path d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5"/>
              </svg>
            </a>
          )}
          <Link href="/#work-gallery" style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.9375rem 2rem", borderRadius: "9999px",
            backgroundColor: "#f5f5f7", border: "1px solid #d2d2d7",
            color: "#1d1d1f", fontSize: "0.9375rem", fontWeight: 600,
            fontFamily: "var(--font-heading)", textDecoration: "none",
          }}>← All Projects</Link>
        </div>
      </section>

      {/* ── Footer mini ──────────────────────────────────────── */}
      <footer style={{
        borderTop: "1px solid #d2d2d7",
        padding: "1.5rem clamp(1.5rem,6vw,4.5rem)",
        maxWidth: "80rem", marginInline: "auto",
        display: "flex", flexWrap: "wrap",
        alignItems: "center", justifyContent: "space-between", gap: "1rem",
      }}>
        <p style={{ fontSize: "0.75rem", color: "#86868b", margin: 0 }}>
          © {new Date().getFullYear()} Naren S J
        </p>
        <div style={{ display: "flex", gap: "1.25rem" }}>
          <Link href="/" style={{ fontSize: "0.75rem", color: "#86868b", textDecoration: "none" }}>Portfolio</Link>
          <Link href="/privacy" style={{ fontSize: "0.75rem", color: "#86868b", textDecoration: "none" }}>Privacy</Link>
        </div>
      </footer>
    </div>
  );
}
