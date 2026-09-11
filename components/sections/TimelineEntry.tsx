"use client";

import type { ExperienceEntry } from "@/lib/experience";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface TimelineEntryProps {
  entry: ExperienceEntry;
  delay?: number;
}

export default function TimelineEntry({ entry, delay = 0 }: TimelineEntryProps) {
  return (
    <ScrollReveal delay={delay} duration={500}>
      <article
        className="card"
        style={{ marginBottom: "var(--gap-sm)", borderRadius: "var(--card-radius)" }}
        aria-label={`${entry.organisation} experience`}
      >
        {/* Organisation row — name + visit button */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.75rem",
          marginBottom: "1.5rem",
        }}>
          <h3
            style={{ fontFamily: "var(--font-heading)", margin: 0 }}
            className="text-xl md:text-2xl font-bold text-[#1d1d1f]"
          >
            {entry.organisation}
          </h3>

          {entry.website && (
            <a
              href={entry.website}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                padding: "0.3125rem 0.875rem",
                borderRadius: "9999px",
                backgroundColor: "#f5f5f7",
                border: "1px solid #d2d2d7",
                fontSize: "0.75rem",
                fontWeight: 600,
                fontFamily: "var(--font-heading)",
                color: "#1d1d1f",
                textDecoration: "none",
                whiteSpace: "nowrap",
                transition: "border-color 0.15s ease, background-color 0.15s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#1d1d1f";
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#e8e8ed";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#d2d2d7";
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#f5f5f7";
              }}
            >
              Visit Website
              <svg
                width="10" height="10"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5" />
              </svg>
            </a>
          )}
        </div>

        {/* Roles */}
        {entry.roles.map((role, i) => (
          <div
            key={i}
            className={`${i > 0 ? "mt-6 pt-6 border-t border-[#d2d2d7]" : ""}`}
          >
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <span className="text-base md:text-lg font-bold text-[#1d1d1f]">
                {role.title}
              </span>
              <span style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.25rem 0.75rem",
                borderRadius: "9999px",
                backgroundColor: "#ffffff",
                border: "1px solid #d2d2d7",
                fontSize: "0.75rem",
                fontWeight: 500,
                fontFamily: "var(--font-heading)",
                color: "#515154",
                whiteSpace: "nowrap",
              }}>
                {role.dateRange}
              </span>
            </div>

            <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
              {role.responsibilities.map((r, j) => (
                <li key={j} className="text-xs md:text-sm text-[#515154] leading-relaxed flex items-start gap-2">
                  <span className="text-[#0066cc] font-bold mt-0.5">•</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </article>
    </ScrollReveal>
  );
}

