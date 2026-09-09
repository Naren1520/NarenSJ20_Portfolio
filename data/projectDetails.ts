/**
 * data/projectDetails.ts  — INDEX (do not add entries here)
 * ─────────────────────────────────────────────────────────
 * Merges all three level-specific files into one lookup map.
 *
 * To add a project detail page:
 *   Basic       → edit  data/projectDetails.level1.ts
 *   Intermediate → edit  data/projectDetails.level2.ts
 *   Advanced    → edit  data/projectDetails.level3.ts
 */
import type { ProjectDetail } from "@/lib/projectDetail";
import { level1Details } from "./projectDetails.level1";
import { level2Details } from "./projectDetails.level2";
import { level3Details } from "./projectDetails.level3";

export const projectDetails: Record<string, ProjectDetail> = {
  ...level1Details,
  ...level2Details,
  ...level3Details,
};

/** Look up detail data by project id. Returns undefined if not found. */
export function getProjectDetail(id: string): ProjectDetail | undefined {
  return projectDetails[id];
}
