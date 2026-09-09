"use client";

import { useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import type { Project } from "@/lib/projects";
import { filterProjects } from "@/lib/projects";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface ProjectGalleryProps {
  projects: Project[];
  initialCount?: number;
}

const DIFFICULTIES = ["Basic", "Intermediate", "Advanced"] as const;

/* Shared pill button style factory */
function pillBtn(active: boolean): React.CSSProperties {
  return {
    display: "inline-flex",
    alignItems: "center",
    padding: "0.5rem 1.125rem",
    borderRadius: "9999px",
    fontSize: "0.8125rem",
    fontWeight: 600,
    fontFamily: "var(--font-heading)",
    border: `1px solid ${active ? "#1d1d1f" : "#d2d2d7"}`,
    backgroundColor: active ? "#1d1d1f" : "#f5f5f7",
    color: active ? "#ffffff" : "#515154",
    cursor: "pointer",
    transition: "all 0.15s ease",
    whiteSpace: "nowrap" as const,
  };
}

export default function ProjectGallery({ projects, initialCount = 10 }: ProjectGalleryProps) {
  const [searchQuery,   setSearchQuery]   = useState("");
  const [displayQuery,  setDisplayQuery]  = useState("");
  const [difficulty,    setDifficulty]    = useState<Project["difficulty"] | null>(null);
  const [sort,          setSort]          = useState<"newest" | "alpha">("newest");
  const [expanded,      setExpanded]      = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const router = useRouter();

  const handleSearch = useCallback((value: string) => {
    setDisplayQuery(value);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => setSearchQuery(value), 300);
  }, []);

  const filtered  = filterProjects(projects, searchQuery, difficulty, sort);
  const displayed = expanded ? filtered : filtered.slice(0, initialCount);

  return (
    <div>
      <div className="eyebrow-tag">Full Index</div>
      <h3 className="section-heading">Project Archive.</h3>

      {/* ── Controls bar ── */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
        paddingBottom: "2rem",
        marginBottom: "2.5rem",
        borderBottom: "1px solid #d2d2d7",
      }}>
        {/* Search */}
        <input
          type="search"
          value={displayQuery}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search projects by keyword or tech…"
          aria-label="Search projects"
          style={{
            flex: "1 1 260px",
            maxWidth: "22rem",
            padding: "0.625rem 1.125rem",
            borderRadius: "9999px",
            backgroundColor: "#f5f5f7",
            border: "1px solid #d2d2d7",
            fontSize: "0.875rem",
            color: "#1d1d1f",
            fontFamily: "var(--font-body)",
            outline: "none",
            boxSizing: "border-box",
          }}
        />

        {/* Difficulty filters */}
        <div
          role="group"
          aria-label="Filter by difficulty"
          style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}
        >
          <button onClick={() => setDifficulty(null)} aria-pressed={difficulty === null} style={pillBtn(difficulty === null)}>
            All
          </button>
          {DIFFICULTIES.map((d) => (
            <button
              key={d}
              onClick={() => setDifficulty(difficulty === d ? null : d)}
              aria-pressed={difficulty === d}
              style={pillBtn(difficulty === d)}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Sort */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as "newest" | "alpha")}
          aria-label="Sort projects"
          style={{
            padding: "0.625rem 1.125rem",
            borderRadius: "9999px",
            backgroundColor: "#f5f5f7",
            border: "1px solid #d2d2d7",
            fontSize: "0.8125rem",
            fontWeight: 600,
            fontFamily: "var(--font-heading)",
            color: "#1d1d1f",
            cursor: "pointer",
            outline: "none",
          }}
        >
          <option value="newest">Newest First</option>
          <option value="alpha">Alphabetical (A–Z)</option>
        </select>
      </div>

      {/* ── Grid ── */}
      {displayed.length === 0 ? (
        <div style={{
          padding: "3rem",
          textAlign: "center",
          fontSize: "0.9375rem",
          color: "#86868b",
          backgroundColor: "#f5f5f7",
          borderRadius: "1rem",
          border: "1px solid #d2d2d7",
        }}>
          No projects found matching your criteria.
        </div>
      ) : (
        <ul style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 20rem), 1fr))",
          gap: "1.25rem",
        }}>
          {displayed.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 40} duration={400}>
              <li style={{ height: "100%" }}>
                <div
                  role="button"
                  tabIndex={0}
                  aria-label={`View ${project.title} project details`}
                  onClick={() => router.push(`/projects/${project.id}`)}
                  onKeyDown={(e) => e.key === "Enter" && router.push(`/projects/${project.id}`)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    backgroundColor: "#f5f5f7",
                    border: "1px solid #d2d2d7",
                    borderRadius: "1rem",
                    overflow: "hidden",
                    textDecoration: "none",
                    color: "inherit",
                    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                    boxSizing: "border-box",
                    cursor: "pointer",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "#1d1d1f";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = "#d2d2d7";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  }}
                >
                  {/* Project image */}
                  {project.image && (
                    <div style={{
                      width: "100%",
                      height: "160px",
                      overflow: "hidden",
                      flexShrink: 0,
                      backgroundColor: "#e8e8ea",
                    }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
                    <div>
                      {/* Title + difficulty badge */}
                      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.75rem", marginBottom: "0.875rem" }}>
                        <h4 style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "1rem",
                          fontWeight: 700,
                          color: "#1d1d1f",
                          lineHeight: 1.3,
                          margin: 0,
                        }}>
                          {project.title}
                        </h4>
                        <span style={{
                          flexShrink: 0,
                          padding: "0.2rem 0.625rem",
                          borderRadius: "0.375rem",
                          backgroundColor: "#ffffff",
                          border: "1px solid #d2d2d7",
                          fontSize: "0.6875rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.04em",
                          color: "#1d1d1f",
                        }}>
                          {project.difficulty}
                        </span>
                      </div>

                      {/* Description */}
                      <p style={{
                        fontSize: "0.875rem",
                        color: "#515154",
                        lineHeight: 1.65,
                        marginBottom: "1.25rem",
                      }}>
                        {project.description}
                      </p>
                    </div>

                    <div>
                      {/* Tags */}
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", marginBottom: "1.125rem" }}>
                        {project.tags.slice(0, 4).map((tag) => (
                          <span key={tag} style={{
                            padding: "0.25rem 0.625rem",
                            borderRadius: "9999px",
                            backgroundColor: "#ffffff",
                            border: "1px solid #d2d2d7",
                            fontSize: "0.75rem",
                            fontWeight: 500,
                            color: "#515154",
                          }}>
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* "View project" internal CTA + optional external links */}
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
                        <span style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.375rem",
                          fontSize: "0.8125rem",
                          fontWeight: 600,
                          color: "#1d1d1f",
                          fontFamily: "var(--font-heading)",
                        }}>
                          View Project
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M2 6h8M6 2l4 4-4 4" />
                          </svg>
                        </span>

                        {/* External links — stop propagation so they don't trigger the card link */}
                        <div style={{ display: "flex", gap: "0.5rem" }}>
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={e => e.stopPropagation()}
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.25rem",
                                fontSize: "0.75rem",
                                fontWeight: 500,
                                color: "#86868b",
                                textDecoration: "none",
                                fontFamily: "var(--font-heading)",
                              }}
                            >
                              Demo
                              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5" />
                              </svg>
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={e => e.stopPropagation()}
                              style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.25rem",
                                fontSize: "0.75rem",
                                fontWeight: 500,
                                color: "#86868b",
                                textDecoration: "none",
                                fontFamily: "var(--font-heading)",
                              }}
                            >
                              GitHub
                              <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      )}

      {/* ── View More ── */}
      {!expanded && filtered.length > initialCount && (
        <div style={{ marginTop: "3rem", display: "flex", justifyContent: "center" }}>
          <button
            onClick={() => setExpanded(true)}
            style={{
              padding: "0.875rem 2.5rem",
              borderRadius: "9999px",
              backgroundColor: "#1d1d1f",
              color: "#ffffff",
              fontSize: "0.875rem",
              fontWeight: 600,
              fontFamily: "var(--font-heading)",
              border: "none",
              cursor: "pointer",
            }}
          >
            View {filtered.length - initialCount} More Projects
          </button>
        </div>
      )}
    </div>
  );
}
