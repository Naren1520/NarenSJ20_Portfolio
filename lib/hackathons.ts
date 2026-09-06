/**
 * lib/hackathons.ts — types for hackathon data.
 * ────────────────────────────────────────────────
 * DO NOT put content here. Edit data/hackathons.ts instead.
 */

export interface HackathonEntry {
  id: string;
  eventName: string;
  organiser: string;
  date: string;
  participationType: string;
  outcome: string;
  category?: "hackathon" | "competition";
}

export { hackathonsData as hackathons } from "@/data/hackathons";
