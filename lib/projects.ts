/**
 * lib/projects.ts — types + utility functions for projects.
 * ─────────────────────────────────────────────────────────
 * DO NOT put content here. Edit data/projects.ts instead.
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  difficulty: "Basic" | "Intermediate" | "Advanced";
  date: string; // "YYYY-MM-DD"
  tags: string[];
  link?: string;
  githubUrl?: string;
  image?: string;
  featured?: boolean;
}

// Re-export the data array so existing imports keep working
export { projectsData as projects } from "@/data/projects";

/** Filter + sort pipeline used by ProjectGallery */
export function filterProjects(
  projects: Project[],
  query: string,
  difficulty: Project["difficulty"] | null,
  sort: "newest" | "alpha"
): Project[] {
  let result = [...projects];

  if (difficulty !== null) {
    result = result.filter((p) => p.difficulty === difficulty);
  }

  if (query.trim().length > 0) {
    const q = query.toLowerCase();
    result = result.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }

  if (sort === "newest") {
    result.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  } else {
    result.sort((a, b) =>
      a.title.toLowerCase() < b.title.toLowerCase() ? -1 :
      a.title.toLowerCase() > b.title.toLowerCase() ? 1 : 0
    );
  }

  return result;
}

export function isValidEmail(s: string): boolean {
  return /^\S+@\S+\.\S+$/.test(s);
}
