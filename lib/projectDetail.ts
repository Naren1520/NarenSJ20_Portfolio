/**
 * lib/projectDetail.ts
 * ─────────────────────────────────────────────────────────
 * Extended types for project detail pages.
 * Level 1 = Basic/small   → minimal premium page
 * Level 2 = Intermediate  → technical case study
 * Level 3 = Advanced/flagship → full product launch + deep dive
 */

/* ── Shared primitives ───────────────────────────────────── */

export interface TechItem {
  name: string;
  category: string; // "Frontend" | "Backend" | "AI/ML" | "Database" | "DevOps" | etc.
}

export interface FeatureItem {
  title: string;
  description: string;
  icon?: import("@/components/projects/ProjectIcon").IconName;
}

export interface Screenshot {
  src: string;
  alt: string;
  caption?: string;
}

/* ── Level 1 detail ─────────────────────────────────────── */

export interface Level1Detail {
  level: 1;
  tagline: string;                  // one-line hook
  heroImage: string;                // large product visual
  features: FeatureItem[];          // 3–4 key features
  techStack: TechItem[];            // 5–8 key techs
  screenshots: Screenshot[];        // 1 primary + 1–2 supporting
  githubCta?: string;               // custom CTA text
}

/* ── Level 2 detail ─────────────────────────────────────── */

export interface ArchLayer {
  layer: string;   // "Frontend" | "Backend" | "Database" | "API" etc.
  tech: string;
  role: string;
}

export interface ChallengeItem {
  challenge: string;
  solution: string;
}

export interface Level2Detail {
  level: 2;
  tagline: string;
  overview: string;                 // 2–3 sentence overview
  heroImage: string;
  problem: string;                  // real-world pain point
  solution: string;                 // how the app solves it
  features: (FeatureItem & { image?: string })[];
  architecture: ArchLayer[];
  techStack: TechItem[];
  challenges: ChallengeItem[];
  screenshots: Screenshot[];
}

/* ── Level 3 detail ─────────────────────────────────────── */

export interface EngineeringDecision {
  challenge: string;
  decision: string;
  why: string;
  result: string;
}

export interface MetricItem {
  label: string;
  value: string;
  sub?: string;
}

export interface DeepDiveSection {
  title: string;
  body: string;
  code?: string;          // optional code snippet
  image?: string;
}

export interface RoadmapItem {
  phase: string;
  items: string[];
}

export interface Level3Detail {
  level: 3;
  tagline: string;
  vision: string;
  status: string;         // e.g. "In Production" | "Beta" | "Active"
  role: string;           // e.g. "Solo Engineer & Architect"
  heroImage: string;
  // Story
  problem: string;
  whyItMatters: string;
  solution: string;
  // Product showcase
  features: (FeatureItem & { image?: string; video?: string })[];
  // Architecture
  architecture: ArchLayer[];
  architectureDiagramCaption?: string;
  // Deep dives
  deepDives: DeepDiveSection[];
  // Engineering decisions
  engineeringDecisions: EngineeringDecision[];
  // Metrics
  metrics: MetricItem[];
  // Deployment
  deployment: string;
  cicd?: string;
  monitoring?: string;
  // Challenges
  challenges: ChallengeItem[];
  // Learnings
  learnings: string[];
  // Roadmap
  roadmap: RoadmapItem[];
  // Tech
  techStack: TechItem[];
  screenshots: Screenshot[];
}

export type ProjectDetail = Level1Detail | Level2Detail | Level3Detail;
