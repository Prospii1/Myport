import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAdjacentProject,
  getProjectBySlug,
  getPublishedProjects,
} from "@/data/projects";
import CustomCursor from "@/components/ui/CustomCursor";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CaseStudy from "@/components/sections/CaseStudy";

export function generateStaticParams() {
  return getPublishedProjects().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: project.title,
      description: project.tagline,
      type: "article",
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const next = getAdjacentProject(slug);

  return (
    <>
      <CustomCursor />
      <Navigation />
      <main>
        <CaseStudy project={project} next={next} />
      </main>
      <Footer />
    </>
  );
}
