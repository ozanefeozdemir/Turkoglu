import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProjectDetail from '@/components/calismalarimiz/ProjectDetail';
import projects from '@/data/projects.json';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <ProjectDetail
      project={{
        ...project,
        specs: project.specs as unknown as Record<string, string>,
      }}
    />
  );
}

