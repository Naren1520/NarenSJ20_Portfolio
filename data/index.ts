/**
 * ─── DATA BARREL ─────────────────────────────────────────────────────────────
 * Central export for all portfolio content.
 * Import from here in any component:
 *
 *   import { projectsData, experienceData } from "@/data"
 *
 * To edit content, open the individual file in this folder:
 *
 *   data/projects.ts       ← project gallery + flagship descriptions
 *   data/experience.ts     ← professional & other experience timeline
 *   data/education.ts      ← academic background
 *   data/achievements.ts   ← competitive achievements
 *   data/certifications.ts ← professional certifications
 *   data/hackathons.ts     ← hackathon / event history
 *   data/volunteering.ts   ← volunteering & community work
 * ─────────────────────────────────────────────────────────────────────────────
 */

export { projectsData }       from "./projects";
export { experienceData }     from "./experience";
export { educationData }      from "./education";
export { achievementsData }   from "./achievements";
export { certificationsData } from "./certifications";
export { hackathonsData }     from "./hackathons";
export { volunteeringData }   from "./volunteering";
