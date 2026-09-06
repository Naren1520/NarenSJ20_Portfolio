"use client";

import FlagshipScene from "./FlagshipScene";
import ProjectGallery from "./ProjectGallery";
import { projects } from "@/lib/projects";

const FLAGSHIP = [
  {
    id: "spmanager-scene",
    title: "SPManager",
    description:
      "An AI-powered project management platform featuring RAG-based context retrieval, skill-based task assignment, and real-time collaboration across distributed teams. Built to handle the full lifecycle of engineering delivery.",
    link: "https://github.com/Naren1520",
    tags: ["RAG AI Engine", "Distributed Systems", "Full-Stack"],
    metrics: [
      { label: "AI Pipeline", value: "RAG Retrieval" },
      { label: "Collaboration", value: "Real-Time Sync" },
    ],
  },
  {
    id: "votestack-scene",
    title: "VoteStack",
    description:
      "A high-performance C++ voting platform engineered on epoll, non-blocking I/O, and custom thread pools. Designed to handle thousands of concurrent votes with deterministic latency under load.",
    link: "https://github.com/Naren1520",
    tags: ["C++20 Systems", "Epoll Event Loop", "Thread Pools"],
    metrics: [
      { label: "Concurrency", value: "10,000+ Votes/sec" },
      { label: "Latency", value: "Sub-millisecond" },
    ],
  },
  {
    id: "crimson-scene",
    title: "CRIMSON",
    description:
      "An AI-powered criminal-network analysis system that applies graph analysis and AI-driven entity extraction to map hidden relationships and surface patterns across structured and unstructured investigative data.",
    link: "https://github.com/Naren1520",
    tags: ["Graph Neural Networks", "AI Entity Extraction", "Pattern Discovery"],
    metrics: [
      { label: "Intelligence", value: "Graph Analysis" },
      { label: "Data Mapping", value: "Entity Linkage" },
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section id="engineering" aria-label="Projects" className="w-full bg-white border-t border-[#d2d2d7]">
      {/* Section Header */}
      <div className="container-page" style={{ paddingTop: "var(--section-pad-y)", paddingBottom: "2rem" }}>
        <div className="eyebrow-tag">Flagship Engineering</div>
        <h2 className="section-heading" style={{ marginBottom: 0 }}>
          Selected Work &amp; Systems.
        </h2>
      </div>

      {FLAGSHIP.map((p, i) => (
        <FlagshipScene key={p.id} {...p} index={i} />
      ))}

      {/* Gallery */}
      <div
        id="work-gallery"
        className="container-page"
        style={{ paddingTop: "clamp(2rem, 4vw, 4rem)", paddingBottom: "var(--section-pad-y)" }}
      >
        <ProjectGallery projects={projects} initialCount={10} />
      </div>
    </section>
  );
}
