/**
 * lib/experience.ts — types for experience data.
 * ────────────────────────────────────────────────
 * DO NOT put content here. Edit data/experience.ts instead.
 */

export interface ExperienceRole {
  title: string;
  dateRange: string;
  responsibilities: string[];
}

export interface ExperienceEntry {
  id: string;
  organisation: string;
  type: "professional" | "other";
  roles: ExperienceRole[];
  location?: string;
}

// Re-export data so existing component imports keep working
export { experienceData as experience } from "@/data/experience";
