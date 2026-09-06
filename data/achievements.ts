/**
 * ─── ACHIEVEMENTS DATA ───────────────────────────────────────────────────────
 * Edit this file to update the achievements timeline.
 *
 * Fields:
 *   id          – unique slug
 *   title       – event / award name shown as the heading
 *   result      – "Winner" | "Finalist" | "Semi-Finalist" |
 *                 "Best Innovative Project" | "College Finalist"
 *   event       – full event name (can be same as title)
 *   year        – number
 *   description – optional one-sentence summary
 *
 * ORDER: renders in the exact order listed here (top to bottom).
 * The "7+" anchor updates automatically — edit it in
 *   components/sections/AchievementsSection.tsx if the count changes.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { Achievement } from "@/lib/achievements";

export const achievementsData: Achievement[] = [
  {
    id: "hackharbor",
    title: "HackHarbor 3.0",
    result: "Winner",
    event: "HackHarbor 3.0",
    year: 2024,
    description: "Built an AI-powered supply chain optimisation platform in 24 hours.",
  },
  {
    id: "gdg-techsprint",
    title: "GDG TechSprint",
    result: "Winner",
    event: "GDG TechSprint",
    year: 2024,
    description: "Developed a real-time disaster response coordination system.",
  },
  {
    id: "buildforbillion",
    title: "BuildForBillion",
    result: "Finalist",
    event: "BuildForBillion",
    year: 2024,
    description: "Reached the finals with an offline-first AI healthcare triage tool.",
  },
  {
    id: "aws-ai-prompt",
    title: "AWS AI Prompt Challenge",
    result: "Finalist",
    event: "AWS AI Prompt Engineering Challenge",
    year: 2024,
    description: "Selected as finalist for innovative prompt chaining with Bedrock.",
  },
  {
    id: "ey-techathon",
    title: "EY Techathon 6.0",
    result: "Semi-Finalist",
    event: "EY Techathon 6.0",
    year: 2024,
    description: "Advanced to semi-finals with an ESG reporting automation platform.",
  },
  {
    id: "versathon",
    title: "Versathon 1.0",
    result: "Best Innovative Project",
    event: "Versathon 1.0",
    year: 2023,
    description: "Awarded Best Innovative Project for a cryptographic offline payment protocol prototype.",
  },
  {
    id: "sih-college",
    title: "Smart India Hackathon",
    result: "College Finalist",
    event: "Smart India Hackathon (SIH)",
    year: 2023,
    description: "2× college-level finalist, representing the institution at SIH selection rounds.",
  },
];
