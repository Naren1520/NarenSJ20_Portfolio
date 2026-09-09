"use client";

import Link from "next/link";
import type { Project } from "@/lib/projects";
import type { Level3Detail } from "@/lib/projectDetail";
import ProjectIcon from "./ProjectIcon";

const NAV_H = 68;
interface Props { project: Project; detail: Level3Detail; }

/* ── shared primitives ──────────────────────────────────────── */
const pad: React.CSSProperties = {
  maxWidth: "86rem",
  marginInline: "auto",
  paddingInline: "clamp(1.5rem, 6vw, 5rem)",
};
const padNarrow: React.CSSProperties = {
  maxWidth: "72rem",
  marginInline: "auto",
  paddingInline: "clamp(1.5rem, 6vw, 5rem)",
};

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: "var(--font-heading)", fontSize: "0.6875rem",
      fontWeight: 700, letterSpacing: "0.07em",
      textTransform: "uppercase" as const, color: "#86868b",
      margin: "0 0 0.75rem",
    }}>{children}</p>
  );
}
function H2({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <h2 style={{
      fontFamily: "var(--font-heading)",
      fontSize: "clamp(2rem, 4vw, 3rem)",
      fontWeight: 800, letterSpacing: "-0.04em",
      color: "#1d1d1f", margin: "0 0 1.75rem", lineHeight: 1.05,
      ...style,
    }}>{children}</h2>
  );
}
function Body({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontSize: "clamp(0.9375rem, 1.2vw, 1.0625rem)",
      color: "#515154", lineHeight: 1.8, margin: "0 0 1rem",
    }}>{children}</p>
  );
}
function SectionWrap({ children, border = true }: { children: React.ReactNode; border?: boolean }) {
  return (
    <section style={{
      ...pad,
      paddingTop: "clamp(3.5rem, 7vw, 6rem)",
      paddingBottom: "clamp(3.5rem, 7vw, 6rem)",
      borderBottom: border ? "1px solid #d2d2d7" : "none",
    }}>{children}</section>
  );
}
const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);
const ExtIcon = () => (
  <svg width="13" height="13" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5"/>
  </svg>
);

/* ──────────────────────────────────────────────────────────── */
export default function Level3Page({ project, detail }: Props) {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#fff",
      paddingTop: `${NAV_H}px`, color: "#1d1d1f", fontFamily: "var(--font-body)" }}>

      {/* ══════════════════════════════════════════════
          1. IMMERSIVE HERO
      ══════════════════════════════════════════════ */}
      <section style={{
        ...pad,
        paddingTop: "clamp(3rem, 7vw, 6rem)",
        paddingBottom: "clamp(3rem, 6vw, 5rem)",
        borderBottom: "1px solid #d2d2d7",
      }}>
        <Link href="/#work-gallery" style={{
          display: "inline-flex", alignItems: "center", gap: "0.375rem",
          fontSize: "0.8125rem", fontWeight: 500, color: "#86868b",
          textDecoration: "none", marginBottom: "2.5rem",
          fontFamily: "var(--font-heading)",
        }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
            stroke="currentColor" strokeWidth="1.75"><path d="M10 12L6 8l4-4"/></svg>
          All Projects
        </Link>

        {/* Status + role badges */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.75rem" }}>
          <span style={{
            padding: "0.3125rem 0.875rem", borderRadius: "9999px",
            backgroundColor: "#1d1d1f", color: "#fff",
            fontFamily: "var(--font-heading)", fontSize: "0.75rem", fontWeight: 700,
          }}>{detail.status}</span>
          <span style={{
            padding: "0.3125rem 0.875rem", borderRadius: "9999px",
            backgroundColor: "#f5f5f7", border: "1px solid #d2d2d7",
            fontFamily: "var(--font-heading)", fontSize: "0.75rem", fontWeight: 600,
            color: "#515154",
          }}>{detail.role}</span>
          <span style={{
            padding: "0.3125rem 0.875rem", borderRadius: "9999px",
            backgroundColor: "#f5f5f7", border: "1px solid #d2d2d7",
            fontFamily: "var(--font-heading)", fontSize: "0.75rem", fontWeight: 600,
            color: "#515154",
          }}>Flagship · {project.difficulty}</span>
        </div>

        <h1 style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(3.5rem, 8.5vw, 7.5rem)",
          fontWeight: 800, letterSpacing: "-0.05em",
          lineHeight: 0.95, color: "#1d1d1f",
          margin: "0 0 1.5rem",
        }}>{project.title}</h1>

        <p style={{
          fontSize: "clamp(1.25rem, 2.2vw, 1.625rem)",
          color: "#515154", lineHeight: 1.45,
          maxWidth: "52ch", margin: "0 0 1.25rem", fontWeight: 400,
        }}>{detail.tagline}</p>

        <p style={{
          fontSize: "clamp(0.9375rem, 1.2vw, 1.125rem)",
          color: "#86868b", lineHeight: 1.75,
          maxWidth: "58ch", margin: "0 0 2.75rem",
        }}>{detail.vision}</p>

        {/* CTAs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              padding: "1rem 2rem", borderRadius: "9999px",
              backgroundColor: "#1d1d1f", color: "#fff",
              fontSize: "1rem", fontWeight: 600,
              fontFamily: "var(--font-heading)", textDecoration: "none",
            }}>Live Demo <ExtIcon/></a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              padding: "1rem 2rem", borderRadius: "9999px",
              backgroundColor: "#f5f5f7", border: "1px solid #d2d2d7",
              color: "#1d1d1f", fontSize: "1rem", fontWeight: 600,
              fontFamily: "var(--font-heading)", textDecoration: "none",
            }}><GitHubIcon/> GitHub</a>
          )}
        </div>
      </section>

      {/* ══ CINEMATIC HERO IMAGE ══════════════════════════════ */}
      {detail.heroImage && (
        <div style={{ backgroundColor: "#f5f5f7", borderBottom: "1px solid #d2d2d7" }}>
          <div style={{ ...pad, paddingTop: "clamp(2rem,4vw,3.5rem)",
            paddingBottom: "clamp(2rem,4vw,3.5rem)" }}>
            <div style={{
              borderRadius: "1.5rem", overflow: "hidden",
              border: "1px solid #e8e8ed",
              boxShadow: "0 20px 80px rgba(0,0,0,0.12)",
              lineHeight: 0,
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={detail.heroImage} alt={project.title}
                style={{ width: "100%", maxHeight: "640px",
                  objectFit: "cover", objectPosition: "top", display: "block" }}/>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════
          2. STORY — PROBLEM / WHY / SOLUTION
      ══════════════════════════════════════════════ */}
      <SectionWrap>
        <div style={{ maxWidth: "64rem" }}>
          <Label>The Story</Label>
          <H2>Why this exists.</H2>

          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {/* Problem */}
            <div style={{
              paddingLeft: "1.5rem",
              borderLeft: "3px solid #d2d2d7",
            }}>
              <p style={{ fontFamily: "var(--font-heading)", fontSize: "0.75rem",
                fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase",
                color: "#86868b", marginBottom: "0.75rem" }}>The Problem</p>
              <Body>{detail.problem}</Body>
            </div>
            {/* Why */}
            <div style={{ paddingLeft: "1.5rem", borderLeft: "3px solid #0066cc" }}>
              <p style={{ fontFamily: "var(--font-heading)", fontSize: "0.75rem",
                fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase",
                color: "#0066cc", marginBottom: "0.75rem" }}>Why It Matters</p>
              <Body>{detail.whyItMatters}</Body>
            </div>
            {/* Solution */}
            <div style={{ paddingLeft: "1.5rem", borderLeft: "3px solid #1d1d1f" }}>
              <p style={{ fontFamily: "var(--font-heading)", fontSize: "0.75rem",
                fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase",
                color: "#1d1d1f", marginBottom: "0.75rem" }}>The Solution</p>
              <Body>{detail.solution}</Body>
            </div>
          </div>
        </div>
      </SectionWrap>

      {/* ══════════════════════════════════════════════
          3. FEATURES
      ══════════════════════════════════════════════ */}
      {detail.features.length > 0 && (
        <SectionWrap>
          <Label>Product Features</Label>
          <H2>What it does.</H2>
          <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
            {detail.features.map((f, i) => (
              <div key={f.title} style={{
                display: "grid",
                gridTemplateColumns: f.image
                  ? "repeat(auto-fit, minmax(min(100%,28rem),1fr))"
                  : "1fr",
                gap: "clamp(2rem,5vw,4rem)",
                alignItems: "center",
              }}>
                <div style={{ order: i % 2 === 1 && f.image ? 2 : 1 }}>
                  {f.icon && (
                    <div style={{
                      width: "3rem", height: "3rem",
                      borderRadius: "0.875rem",
                      backgroundColor: "#f5f5f7",
                      border: "1px solid #d2d2d7",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: "1.25rem", flexShrink: 0,
                    }}>
                      <ProjectIcon name={f.icon} size={20} color="#1d1d1f" />
                    </div>
                  )}
                  <h3 style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                    fontWeight: 700, letterSpacing: "-0.03em",
                    color: "#1d1d1f", margin: "0 0 1rem",
                  }}>{f.title}</h3>
                  <p style={{ fontSize: "clamp(0.9375rem, 1.2vw, 1.0625rem)",
                    color: "#515154", lineHeight: 1.8, maxWidth: "46ch" }}>
                    {f.description}
                  </p>
                </div>
                {f.image && (
                  <div style={{ order: i % 2 === 1 ? 1 : 2 }}>
                    <div style={{
                      borderRadius: "1.375rem", overflow: "hidden",
                      border: "1px solid #e8e8ed",
                      boxShadow: "0 8px 40px rgba(0,0,0,0.09)",
                      lineHeight: 0,
                    }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={f.image} alt={f.title}
                        style={{ width: "100%", height: "300px",
                          objectFit: "cover", objectPosition: "top", display: "block" }}/>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </SectionWrap>
      )}

      {/* ══════════════════════════════════════════════
          4. ARCHITECTURE
      ══════════════════════════════════════════════ */}
      {detail.architecture.length > 0 && (
        <SectionWrap>
          <Label>System Architecture</Label>
          <H2>How every layer connects.</H2>
          {detail.architectureDiagramCaption && (
            <p style={{ fontSize: "0.9375rem", color: "#86868b",
              marginBottom: "2rem", fontStyle: "italic" }}>
              {detail.architectureDiagramCaption}
            </p>
          )}

          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {detail.architecture.map((a, i) => (
              <div key={a.layer} style={{
                display: "grid",
                gridTemplateColumns: "6rem 1fr 2.5fr",
                gap: "1.5rem",
                padding: "1.25rem 1.5rem",
                backgroundColor: i % 2 === 0 ? "#f5f5f7" : "#fff",
                border: "1px solid #d2d2d7",
                borderRadius: "0.875rem",
                alignItems: "start",
              }}>
                <span style={{
                  fontSize: "0.6875rem", fontWeight: 700,
                  letterSpacing: "0.06em", textTransform: "uppercase",
                  color: "#86868b", fontFamily: "var(--font-heading)",
                  paddingTop: "0.125rem",
                }}>{a.layer}</span>
                <span style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.9375rem", fontWeight: 700, color: "#1d1d1f",
                }}>{a.tech}</span>
                <span style={{ fontSize: "0.875rem", color: "#515154", lineHeight: 1.65 }}>
                  {a.role}
                </span>
              </div>
            ))}
          </div>
        </SectionWrap>
      )}

      {/* ══════════════════════════════════════════════
          5. DEEP DIVES
      ══════════════════════════════════════════════ */}
      {detail.deepDives.length > 0 && (
        <SectionWrap>
          <Label>Technical Deep Dive</Label>
          <H2>Under the hood.</H2>
          <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
            {detail.deepDives.map((d, i) => (
              <div key={i} style={{
                borderTop: i > 0 ? "1px solid #d2d2d7" : "none",
                paddingTop: i > 0 ? "3rem" : 0,
              }}>
                <h3 style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.25rem, 2vw, 1.625rem)",
                  fontWeight: 700, letterSpacing: "-0.025em",
                  color: "#1d1d1f", margin: "0 0 1rem",
                }}>{d.title}</h3>
                <p style={{ fontSize: "clamp(0.9375rem,1.1vw,1.0625rem)",
                  color: "#515154", lineHeight: 1.8, maxWidth: "70ch",
                  margin: "0 0 1.25rem" }}>{d.body}</p>
                {d.code && (
                  <pre style={{
                    backgroundColor: "#1d1d1f",
                    color: "#f5f5f7",
                    borderRadius: "1rem",
                    padding: "1.5rem 1.75rem",
                    fontSize: "0.8125rem",
                    lineHeight: 1.75,
                    overflowX: "auto",
                    fontFamily: "'SF Mono', 'Fira Code', monospace",
                    margin: "0 0 1rem",
                    border: "1px solid #2d2d2f",
                  }}><code>{d.code}</code></pre>
                )}
                {d.image && (
                  <div style={{
                    borderRadius: "1rem", overflow: "hidden",
                    border: "1px solid #e8e8ed", lineHeight: 0,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                  }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={d.image} alt={d.title}
                      style={{ width: "100%", maxHeight: "400px",
                        objectFit: "cover", display: "block" }}/>
                  </div>
                )}
              </div>
            ))}
          </div>
        </SectionWrap>
      )}

      {/* ══════════════════════════════════════════════
          6. ENGINEERING DECISIONS
      ══════════════════════════════════════════════ */}
      {detail.engineeringDecisions.length > 0 && (
        <SectionWrap>
          <Label>Engineering Decisions</Label>
          <H2>Challenge → Decision → Result.</H2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {detail.engineeringDecisions.map((e, i) => (
              <div key={i} style={{
                border: "1px solid #d2d2d7",
                borderRadius: "1.125rem",
                overflow: "hidden",
              }}>
                {/* Header */}
                <div style={{
                  padding: "1.125rem 1.5rem",
                  backgroundColor: "#f5f5f7",
                  borderBottom: "1px solid #d2d2d7",
                }}>
                  <p style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.9375rem", fontWeight: 700,
                    color: "#1d1d1f", margin: 0,
                  }}>{e.challenge}</p>
                </div>
                {/* 3-col body */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,16rem),1fr))",
                }}>
                  <div style={{ padding: "1.25rem 1.5rem", borderRight: "1px solid #d2d2d7" }}>
                    <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.06em",
                      textTransform: "uppercase", color: "#0066cc",
                      fontFamily: "var(--font-heading)", marginBottom: "0.5rem" }}>Decision</p>
                    <p style={{ fontSize: "0.9rem", color: "#1d1d1f",
                      lineHeight: 1.6, fontWeight: 600 }}>{e.decision}</p>
                  </div>
                  <div style={{ padding: "1.25rem 1.5rem", borderRight: "1px solid #d2d2d7" }}>
                    <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.06em",
                      textTransform: "uppercase", color: "#86868b",
                      fontFamily: "var(--font-heading)", marginBottom: "0.5rem" }}>Why</p>
                    <p style={{ fontSize: "0.875rem", color: "#515154", lineHeight: 1.65 }}>{e.why}</p>
                  </div>
                  <div style={{ padding: "1.25rem 1.5rem" }}>
                    <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.06em",
                      textTransform: "uppercase", color: "#1d1d1f",
                      fontFamily: "var(--font-heading)", marginBottom: "0.5rem" }}>Result</p>
                    <p style={{ fontSize: "0.875rem", color: "#515154", lineHeight: 1.65 }}>{e.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionWrap>
      )}

      {/* ══════════════════════════════════════════════
          7. METRICS
      ══════════════════════════════════════════════ */}
      {detail.metrics.length > 0 && (
        <section style={{
          backgroundColor: "#1d1d1f",
          borderTop: "1px solid #2d2d2f",
          borderBottom: "1px solid #2d2d2f",
        }}>
          <div style={{
            ...pad,
            paddingTop: "clamp(3rem,6vw,5rem)",
            paddingBottom: "clamp(3rem,6vw,5rem)",
          }}>
            <Label>Performance &amp; Scale</Label>
            <H2 style={{ color: "#f5f5f7" }}>By the numbers.</H2>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%,14rem),1fr))",
              gap: "1px",
              backgroundColor: "#2d2d2f",
              border: "1px solid #2d2d2f",
              borderRadius: "1.25rem",
              overflow: "hidden",
            }}>
              {detail.metrics.map((m) => (
                <div key={m.label} style={{
                  padding: "2rem 1.75rem",
                  backgroundColor: "#1d1d1f",
                  display: "flex", flexDirection: "column", gap: "0.375rem",
                }}>
                  <span style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                    fontWeight: 800, letterSpacing: "-0.04em",
                    color: "#f5f5f7",
                  }}>{m.value}</span>
                  <span style={{
                    fontSize: "0.875rem", fontWeight: 600,
                    color: "#86868b", fontFamily: "var(--font-heading)",
                  }}>{m.label}</span>
                  {m.sub && (
                    <span style={{ fontSize: "0.75rem", color: "#515154" }}>{m.sub}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════
          8. DEPLOYMENT / CI/CD
      ══════════════════════════════════════════════ */}
      <SectionWrap>
        <Label>Deployment &amp; Infrastructure</Label>
        <H2>Production setup.</H2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,22rem),1fr))",
          gap: "1rem",
        }}>
          {[
            { label: "Deployment", value: detail.deployment },
            ...(detail.cicd    ? [{ label: "CI/CD",      value: detail.cicd    }] : []),
            ...(detail.monitoring ? [{ label: "Monitoring", value: detail.monitoring }] : []),
          ].map(({ label, value }) => (
            <div key={label} style={{
              padding: "1.5rem",
              backgroundColor: "#f5f5f7",
              border: "1px solid #d2d2d7",
              borderRadius: "1rem",
            }}>
              <p style={{
                fontFamily: "var(--font-heading)", fontSize: "0.75rem",
                fontWeight: 700, letterSpacing: "0.07em",
                textTransform: "uppercase", color: "#86868b",
                marginBottom: "0.625rem",
              }}>{label}</p>
              <p style={{ fontSize: "0.9375rem", color: "#515154", lineHeight: 1.7 }}>{value}</p>
            </div>
          ))}
        </div>
      </SectionWrap>

      {/* ══════════════════════════════════════════════
          9. CHALLENGES
      ══════════════════════════════════════════════ */}
      {detail.challenges.length > 0 && (
        <SectionWrap>
          <Label>Challenges &amp; Failures</Label>
          <H2>What broke — and how I fixed it.</H2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
            {detail.challenges.map((c, i) => (
              <div key={i} style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(100%,24rem),1fr))",
                border: "1px solid #d2d2d7",
                borderRadius: "1.125rem", overflow: "hidden",
              }}>
                <div style={{ padding: "1.5rem", backgroundColor: "#f5f5f7",
                  borderRight: "1px solid #d2d2d7" }}>
                  <p style={{ fontSize: "0.6875rem", fontWeight: 700,
                    letterSpacing: "0.06em", textTransform: "uppercase",
                    color: "#86868b", fontFamily: "var(--font-heading)",
                    marginBottom: "0.5rem" }}>Challenge</p>
                  <p style={{ fontSize: "0.9375rem", color: "#1d1d1f",
                    lineHeight: 1.65, fontWeight: 500 }}>{c.challenge}</p>
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <p style={{ fontSize: "0.6875rem", fontWeight: 700,
                    letterSpacing: "0.06em", textTransform: "uppercase",
                    color: "#0066cc", fontFamily: "var(--font-heading)",
                    marginBottom: "0.5rem" }}>Fix</p>
                  <p style={{ fontSize: "0.9375rem", color: "#515154",
                    lineHeight: 1.65 }}>{c.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </SectionWrap>
      )}

      {/* ══════════════════════════════════════════════
          10. LEARNINGS
      ══════════════════════════════════════════════ */}
      {detail.learnings.length > 0 && (
        <SectionWrap>
          <Label>What I Learned</Label>
          <H2>Key takeaways.</H2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0,
            display: "flex", flexDirection: "column", gap: "0.75rem",
            maxWidth: "64rem" }}>
            {detail.learnings.map((l, i) => (
              <li key={i} style={{
                display: "flex", gap: "1rem", alignItems: "flex-start",
                padding: "1.25rem 1.5rem",
                backgroundColor: "#f5f5f7",
                border: "1px solid #d2d2d7",
                borderRadius: "0.875rem",
              }}>
                <span style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "0.8125rem", fontWeight: 700,
                  color: "#86868b", flexShrink: 0, paddingTop: "0.15rem",
                }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p style={{ fontSize: "0.9375rem", color: "#515154",
                  lineHeight: 1.7, margin: 0 }}>{l}</p>
              </li>
            ))}
          </ul>
        </SectionWrap>
      )}

      {/* ══════════════════════════════════════════════
          11. ROADMAP
      ══════════════════════════════════════════════ */}
      {detail.roadmap.length > 0 && (
        <SectionWrap>
          <Label>Future Roadmap</Label>
          <H2>Where this is going.</H2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%,22rem),1fr))",
            gap: "1rem",
          }}>
            {detail.roadmap.map((r) => (
              <div key={r.phase} style={{
                padding: "1.5rem",
                backgroundColor: "#f5f5f7",
                border: "1px solid #d2d2d7",
                borderRadius: "1.125rem",
              }}>
                <p style={{
                  fontFamily: "var(--font-heading)", fontSize: "0.875rem",
                  fontWeight: 700, color: "#0066cc", marginBottom: "1rem",
                }}>{r.phase}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0,
                  display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {r.items.map((item) => (
                    <li key={item} style={{
                      display: "flex", gap: "0.625rem", alignItems: "flex-start",
                      fontSize: "0.875rem", color: "#515154", lineHeight: 1.65,
                    }}>
                      <span style={{ color: "#d2d2d7", flexShrink: 0,
                        marginTop: "0.2em" }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SectionWrap>
      )}

      {/* ══════════════════════════════════════════════
          12. SCREENSHOTS
      ══════════════════════════════════════════════ */}
      {detail.screenshots.length > 0 && (
        <SectionWrap>
          <Label>Screenshots</Label>
          <H2>The product.</H2>

          <div style={{
            borderRadius: "1.5rem", overflow: "hidden",
            border: "1px solid #e8e8ed",
            boxShadow: "0 12px 60px rgba(0,0,0,0.10)",
            marginBottom: "1rem", lineHeight: 0,
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={detail.screenshots[0].src} alt={detail.screenshots[0].alt}
              style={{ width: "100%", maxHeight: "580px",
                objectFit: "cover", objectPosition: "top", display: "block" }}/>
          </div>
          {detail.screenshots[0].caption && (
            <p style={{ fontSize: "0.8125rem", color: "#86868b",
              textAlign: "center", marginBottom: "1.5rem" }}>
              {detail.screenshots[0].caption}
            </p>
          )}

          {detail.screenshots.length > 1 && (
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%,24rem),1fr))",
              gap: "1rem",
            }}>
              {detail.screenshots.slice(1).map(s => (
                <div key={s.src}>
                  <div style={{
                    borderRadius: "1.125rem", overflow: "hidden",
                    border: "1px solid #e8e8ed", lineHeight: 0,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                  }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={s.src} alt={s.alt}
                      style={{ width: "100%", height: "240px",
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
        </SectionWrap>
      )}

      {/* ══════════════════════════════════════════════
          13. TECH STACK
      ══════════════════════════════════════════════ */}
      {detail.techStack.length > 0 && (
        <SectionWrap>
          <Label>Technology Stack</Label>
          <H2>Built with.</H2>
          {(() => {
            const grouped: Record<string, typeof detail.techStack> = {};
            detail.techStack.forEach(t => {
              if (!grouped[t.category]) grouped[t.category] = [];
              grouped[t.category].push(t);
            });
            return Object.entries(grouped).map(([cat, items]) => (
              <div key={cat} style={{ marginBottom: "1.75rem" }}>
                <p style={{
                  fontSize: "0.75rem", fontWeight: 700, color: "#86868b",
                  fontFamily: "var(--font-heading)", letterSpacing: "0.05em",
                  textTransform: "uppercase", marginBottom: "0.625rem",
                }}>{cat}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {items.map(t => (
                    <span key={t.name} style={{
                      padding: "0.5rem 1.125rem",
                      borderRadius: "0.625rem",
                      backgroundColor: "#f5f5f7",
                      border: "1px solid #d2d2d7",
                      fontFamily: "var(--font-heading)",
                      fontSize: "0.9375rem", fontWeight: 600,
                      color: "#1d1d1f",
                    }}>{t.name}</span>
                  ))}
                </div>
              </div>
            ));
          })()}
        </SectionWrap>
      )}

      {/* ══════════════════════════════════════════════
          14. CLOSING CTA
      ══════════════════════════════════════════════ */}
      <section style={{
        ...pad,
        paddingTop: "clamp(4rem, 8vw, 7rem)",
        paddingBottom: "clamp(5rem, 10vw, 9rem)",
        borderBottom: "1px solid #d2d2d7",
      }}>
        <div style={{ maxWidth: "52rem" }}>
          <Label>Ready to dive in?</Label>
          <h2 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 800, letterSpacing: "-0.045em",
            color: "#1d1d1f", lineHeight: 1.0,
            margin: "0 0 1.5rem",
          }}>
            This isn&apos;t just a project.
            <br />
            <span style={{ color: "#86868b" }}>It&apos;s a system I designed,<br />
            engineered, and shipped.</span>
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "2.5rem" }}>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "1rem 2.25rem", borderRadius: "9999px",
                backgroundColor: "#1d1d1f", color: "#fff",
                fontSize: "1rem", fontWeight: 600,
                fontFamily: "var(--font-heading)", textDecoration: "none",
              }}>Live Demo <ExtIcon/></a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "1rem 2.25rem", borderRadius: "9999px",
                backgroundColor: "#f5f5f7", border: "1px solid #d2d2d7",
                color: "#1d1d1f", fontSize: "1rem", fontWeight: 600,
                fontFamily: "var(--font-heading)", textDecoration: "none",
              }}><GitHubIcon/> Explore the code</a>
            )}
            <Link href="/#work-gallery" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              padding: "1rem 2.25rem", borderRadius: "9999px",
              backgroundColor: "#f5f5f7", border: "1px solid #d2d2d7",
              color: "#1d1d1f", fontSize: "1rem", fontWeight: 600,
              fontFamily: "var(--font-heading)", textDecoration: "none",
            }}>← All Projects</Link>
          </div>
        </div>
      </section>

      {/* ── Footer mini ─────────────────────────────────────── */}
      <footer style={{
        borderTop: "1px solid #d2d2d7",
        padding: "1.5rem clamp(1.5rem,6vw,5rem)",
        maxWidth: "86rem", marginInline: "auto",
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
