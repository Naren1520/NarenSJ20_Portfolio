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
        {/* Organisation */}
        <h3
          style={{ fontFamily: "var(--font-heading)" }}
          className="text-xl md:text-2xl font-bold text-[#1d1d1f] mb-6"
        >
          {entry.organisation}
        </h3>

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
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white text-[#515154] border border-[#d2d2d7]">
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

