/**
 * lib/achievements.ts — types for achievements data.
 * ────────────────────────────────────────────────────
 * DO NOT put content here. Edit data/achievements.ts instead.
 */

export interface Achievement {
  id: string;
  title: string;
  result:
    | "Winner"
    | "Finalist"
    | "Semi-Finalist"
    | "Best Innovative Project"
    | "College Finalist";
  event: string;
  year: number;
  description?: string;
}

export { achievementsData as achievements } from "@/data/achievements";
