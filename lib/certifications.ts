/**
 * lib/certifications.ts — types for certifications data.
 * ─────────────────────────────────────────────────────────
 * DO NOT put content here. Edit data/certifications.ts instead.
 */

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  dateIssued: string;
  credentialUrl?: string;
  description?: string;
  status?: "Completed" | "Certified" | "In Progress";
  image?: string;
}

export { certificationsData as certifications } from "@/data/certifications";
