/**
 * ─── EXPERIENCE DATA ─────────────────────────────────────────────────────────
 * Edit this file to update your professional and other experience entries.
 *
 * Fields:
 *   id             – unique slug
 *   organisation   – company / org name shown as the section heading
 *   type           – "professional" | "other"
 *                    "professional" → shown under "Professional Experience" tab
 *                    "other"        → shown under "Other Experience" tab
 *   location       – optional location string
 *   roles          – array of roles at this organisation (supports multiple
 *                    roles per org, e.g. ISDC with two sequential roles)
 *     title            – role title
 *     dateRange        – e.g. "June 2024 – September 2024"
 *     responsibilities – bullet points (one sentence per item)
 *
 * ORDER: entries render top-to-bottom in the order listed here.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { ExperienceEntry } from "@/lib/experience";

export const experienceData: ExperienceEntry[] = [
  // ── PROFESSIONAL ──────────────────────────────────────────────────────────
  {
    id: "datavex",
    organisation: "Datavex AI",
    type: "professional",
    location: "Remote",
    roles: [
      {
        title: "AI/ML Engineering Intern",
        dateRange: "June 2024 – September 2024",
        responsibilities: [
          "Built a 2D-to-3D CAD reconstruction pipeline using Gemini Vision for geometry interpretation and OpenCascade for parametric model generation.",
          "Designed and deployed a FastAPI service layer to handle model inference requests with sub-200ms response times.",
          "Integrated OpenCascade export pipelines to produce STEP and IGES files from reconstructed geometry.",
          "Reduced manual CAD modelling time by 60% across pilot engineering workflows.",
        ],
      },
    ],
  },
  {
    id: "sahynex",
    organisation: "Sahynex Tech Solutions",
    type: "professional",
    location: "India",
    roles: [
      {
        title: "Software Developer Intern",
        dateRange: "January 2024 – May 2024",
        responsibilities: [
          "Developed and maintained platforms serving 10K+ active users across web and mobile surfaces.",
          "Achieved a 25% performance improvement over the prior baseline through query optimisation and caching strategies.",
          "Built reusable React component libraries consumed across three internal products.",
          "Collaborated with product and QA teams to ship four feature releases on schedule.",
        ],
      },
    ],
  },
  {
    id: "isdc",
    organisation: "ISDC",
    type: "professional",
    location: "India",
    roles: [
      {
        title: "Web Dev Lead",
        dateRange: "August 2023 – February 2026",
        responsibilities: [
          "Led the web development vertical, overseeing delivery of public-facing and internal platforms.",
          "Mentored a team of 8 junior developers, conducting code reviews and pair-programming sessions.",
          "Established front-end standards, component conventions, and deployment workflows.",
          "Shipped 5 production platforms serving student communities across the institution.",
        ],
      },
      {
        title: "Technical Head",
        dateRange: "February 2026 – Present",
        responsibilities: [
          "Oversee architecture and engineering standards across 10+ production platforms.",
          "Lead technical interviews and onboarding for new developer cohorts.",
          "Define and enforce engineering standards covering security, performance, and accessibility.",
          "Mentor senior developers and coordinate cross-functional delivery between design, content, and engineering.",
        ],
      },
    ],
  },

  // ── OTHER ─────────────────────────────────────────────────────────────────
  {
    id: "opensource",
    organisation: "Open Source Contributions",
    type: "other",
    roles: [
      {
        title: "Contributor",
        dateRange: "2022 – Present",
        responsibilities: [
          "Contributed bug fixes and feature enhancements to several TypeScript and Python open-source projects.",
          "Authored documentation improvements and example code for developer tooling libraries.",
          "Reviewed pull requests and provided technical feedback in community repositories.",
        ],
      },
    ],
  },
  {
    id: "community",
    organisation: "Developer Community Leadership",
    type: "other",
    roles: [
      {
        title: "Technical Organiser",
        dateRange: "2023 – Present",
        responsibilities: [
          "Co-organised local hackathons, workshops, and speaker sessions for student developer communities.",
          "Delivered technical talks on systems programming and AI engineering at community events.",
          "Facilitated peer learning circles focused on competitive programming and systems design.",
        ],
      },
    ],
  },
];
