import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Language } from "@/hooks/useLanguage";
import { Contact, Skill } from "@/types/data";

// Types for parsed content (simple strings, not LocalizedText)
export interface CareerContent {
  company: string;
  position: string;
  period: string;
  description: string[];
  techStack: string[];
  order: number;
}

export interface ProjectContent {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  role: string;
  highlights: string[];
  order: number;
  links?: Record<string, string>;
}

export interface ProfileContent {
  name: string;
  nameKo?: string;
  title: string;
  location: string;
  email: string;
  github: string;
  linkedin?: string;
  summary: string[];
}

const contentDirectory = path.join(process.cwd(), "content");

type FrontmatterData = Record<string, unknown>;

// Generic helper to read markdown files from a directory
function getMarkdownData<T>(
  relativePath: string[],
  parser: (data: FrontmatterData, content: string) => T
): T[] {
  const targetDir = path.join(contentDirectory, ...relativePath);

  if (!fs.existsSync(targetDir)) {
    return [];
  }

  const fileNames = fs.readdirSync(targetDir);
  return fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const filePath = path.join(targetDir, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);
      return parser(data, content);
    });
}

// Generic helper to read a single markdown file
function getSingleMarkdownData<T>(
  relativePath: string[],
  parser: (data: FrontmatterData, content: string) => T
): T {
  const filePath = path.join(contentDirectory, ...relativePath);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  return parser(data, content);
}

// Parser helpers
const parseListFromContent = (content: string): string[] => {
  return content
    .split("\n")
    .filter((line) => line.trim().startsWith("-"))
    .map((line) => line.trim().replace(/^-\s*/, ""));
};

const parseProjectContent = (data: FrontmatterData, content: string): ProjectContent => {
  const lines = content.split("\n");
  let description = "";
  const highlights: string[] = [];
  let inHighlights = false;

  for (const line of lines) {
    const trimmedLine = line.trim();

    if (trimmedLine.startsWith("## Highlights")) {
      inHighlights = true;
      continue;
    }

    if (inHighlights && trimmedLine.startsWith("-")) {
      highlights.push(trimmedLine.replace(/^-\s*/, ""));
    } else if (!inHighlights && trimmedLine && !trimmedLine.startsWith("#")) {
      if (!description) {
        description = trimmedLine;
      }
    }
  }

  return {
    id: data.id as string,
    name: data.name as string,
    description,
    techStack: (data.techStack as string[]) || [],
    role: data.role as string,
    highlights,
    order: (data.order as number) || 0,
    links: data.links as Record<string, string>,
  };
};

export function getCareers(language: Language): CareerContent[] {
  const careers = getMarkdownData<CareerContent>(
    [language, "careers"],
    (data, content) => ({
      company: data.company as string,
      position: data.position as string,
      period: data.period as string,
      description: parseListFromContent(content),
      techStack: (data.techStack as string[]) || [],
      order: (data.order as number) || 0,
    })
  );

  return careers.sort((a, b) => a.order - b.order);
}

export function getProjects(language: Language): ProjectContent[] {
  const projects = getMarkdownData<ProjectContent>(
    [language, "projects"],
    parseProjectContent
  );

  return projects.sort((a, b) => a.order - b.order);
}

export function getProfile(language: Language): ProfileContent {
  return getSingleMarkdownData<ProfileContent>(
    [language, "profile.md"],
    (data, content) => ({
      name: data.name as string,
      nameKo: data.nameKo as string | undefined,
      title: data.title as string,
      location: data.location as string,
      email: data.email as string,
      github: data.github as string,
      linkedin: data.linkedin as string | undefined,
      summary: parseListFromContent(content),
    })
  );
}

export function getContacts(): Contact[] {
  return getSingleMarkdownData<Contact[]>(["contacts.md"], (data) => data.contacts as Contact[]);
}

export function getSkills(): Skill[] {
  return getSingleMarkdownData<Skill[]>(["skills.md"], (data) => data.skills as Skill[]);
}

// Get all content for both languages (for server-side preloading)
export function getAllContent() {
  return {
    contacts: getContacts(),
    skills: getSkills(),
    en: {
      profile: getProfile("en"),
      careers: getCareers("en"),
      projects: getProjects("en"),
    },
    ko: {
      profile: getProfile("ko"),
      careers: getCareers("ko"),
      projects: getProjects("ko"),
    },
  };
}
