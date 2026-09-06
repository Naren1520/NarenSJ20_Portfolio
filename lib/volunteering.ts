/**
 * lib/volunteering.ts — types for volunteering data.
 * ─────────────────────────────────────────────────────
 * DO NOT put content here. Edit data/volunteering.ts instead.
 */

export interface VolunteeringEntry {
  id: string;
  organisation: string;
  role: string;
  dateRange: string;
  date: string;
  domain?: string;
  description: string;
}

export { volunteeringData as volunteering } from "@/data/volunteering";
