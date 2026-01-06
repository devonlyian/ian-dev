export const SECTIONS = {
  ABOUT: "about",
  CAREER: "career",
  SKILLS: "skills",
  PROJECTS: "projects",
  CONTACT: "contact",
  HELP: "help",
  DIR: "dir",
  LS: "ls",
  VERSION: "version",
  NEOFETCH: "neofetch",
  SNAKE: "snake",
} as const;

export type SectionId = (typeof SECTIONS)[keyof typeof SECTIONS];

export function projectSection(projectId: string): string {
  return `project:${projectId}`;
}

export function isProjectSection(section: string): boolean {
  return section.startsWith("project:");
}

export function getProjectId(section: string): string | null {
  if (!isProjectSection(section)) return null;
  return section.replace("project:", "");
}

export const TYPE_VALID_SECTIONS = [
  SECTIONS.ABOUT,
  SECTIONS.CAREER,
  SECTIONS.SKILLS,
  SECTIONS.PROJECTS,
  SECTIONS.CONTACT,
] as const;
