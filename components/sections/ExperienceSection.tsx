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
        className="flex items-center gap-2 pb-4"
        style={{ marginBottom: "2.5rem" }}
        role="tablist"
        aria-label="Experience categories"
      >
        {TABS.map((tab) => {
          const active = activeTab === tab;
          return (
            <button
              key={tab}
              role="tab"
              aria-selected={active}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
                active
                  ? "bg-[#1d1d1f] text-white border-[#1d1d1f]"
                  : "bg-[#f5f5f7] text-[#515154] border-[#d2d2d7] hover:bg-[#e5e5e7]"
              }`}
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

