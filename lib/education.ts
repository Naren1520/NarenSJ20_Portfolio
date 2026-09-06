/**
 * lib/education.ts — types for education data.
 * ──────────────────────────────────────────────
 * DO NOT put content here. Edit data/education.ts instead.
 */

export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startYear: number;
  endYear: number | "Present";
  grade: string;
  description?: string;
}

export { educationData as education } from "@/data/education";
