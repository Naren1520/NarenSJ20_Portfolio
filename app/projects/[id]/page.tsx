import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projectsData } from "@/data/projects";
import { getProjectDetail } from "@/data/projectDetails";
import Level1Page from "@/components/projects/Level1Page";
import Level2Page from "@/components/projects/Level2Page";
import Level3Page from "@/components/projects/Level3Page";

interface Props {
  params: Promise<{ id: string }>;
}

/* Pre-render all known project slugs at build time */
export function generateStaticParams() {
  return projectsData.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projectsData.find((p) => p.id === id);
  if (!project) return {};

  const detail  = getProjectDetail(id);
  const tagline = detail && "tagline" in detail ? detail.tagline : project.description;

  return {
    title: `${project.title} — Naren S J`,
    description: tagline,
    openGraph: {
      title: `${project.title} — Naren S J`,
      description: tagline,
      images: project.image ? [{ url: project.image }] : [],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id }  = await params;
  const project = projectsData.find((p) => p.id === id);
  if (!project) notFound();

  const detail = getProjectDetail(id);

  /* No detail data yet → fall back to Level 1 minimal page */
  if (!detail) {
    return (
      <Level1Page
        project={project}
        detail={{
          level: 1,
          tagline: project.description,
          heroImage: project.image ?? "",
          features: [],
          techStack: project.tags.map((t) => ({ name: t, category: "Technology" })),
          screenshots: project.image
            ? [{ src: project.image, alt: project.title }]
            : [],
        }}
      />
    );
  }

  if (detail.level === 1) return <Level1Page  project={project} detail={detail} />;
  if (detail.level === 2) return <Level2Page  project={project} detail={detail} />;
  return                         <Level3Page  project={project} detail={detail} />;
}
