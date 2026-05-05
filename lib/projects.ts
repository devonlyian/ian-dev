import { projects, type Project } from "./portfolio-data";

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectDescription(project: Pick<Project, "tagline">): string {
  return project.tagline;
}

export function getAdjacentProjects(slug: string): {
  previous: Project | undefined;
  next: Project | undefined;
} {
  const index = projects.findIndex((project) => project.slug === slug);

  if (index === -1) {
    return { previous: undefined, next: undefined };
  }

  return {
    previous: projects[index - 1],
    next: projects[index + 1],
  };
}
