"use client";

import { useState } from "react";
import { experience } from "@/lib/experience";
import TimelineEntry from "./TimelineEntry";
import ScrollReveal from "@/components/ui/ScrollReveal";

const TABS = ["Professional Experience", "Other Experience"] as const;
type Tab = (typeof TABS)[number];

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<Tab>("Professional Experience");

  const entries = experience.filter((e) =>
    activeTab === "Professional Experience" ? e.type === "professional" : e.type === "other"
  );

  return (
    <section
      id="experience"
      className="w-full border-t border-[#d2d2d7] bg-white"
      aria-label="Experience"
    >
      <div className="container-page section-pad">
      <ScrollReveal duration={500}>
        <div className="eyebrow-tag">Career &amp; Engineering Roles</div>
        <h2 className="section-heading">Professional Experience.</h2>
      </ScrollReveal>

      {/* Tabs */}
      <div
        role="tablist"
        aria-label="Experience categories"
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
        {TABS.map((tab) => {
          const active = activeTab === tab;
          return (
            <button
              key={tab}
              role="tab"
              aria-selected={active}
              onClick={() => setActiveTab(tab)}
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
              {tab}
            </button>
          );
        })}
      </div>

      {/* Timeline List */}
      <div role="tabpanel" aria-label={activeTab}>
        {entries.map((entry, i) => (
          <TimelineEntry key={entry.id} entry={entry} delay={i * 100} />
        ))}
      </div>
      </div>
    </section>
  );
}

