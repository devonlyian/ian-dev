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
  links?: {
    github?: string;
    demo?: string;
    blog?: string;
  };
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

// Generic helper to read markdown files from a directory
function getMarkdownData<T>(
  relativePath: string[],
  parser: (data: any, content: string) => T
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
  parser: (data: any, content: string) => T
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

const parseProjectContent = (data: any, content: string): ProjectContent => {
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
    id: data.id,
    name: data.name,
    description,
    techStack: data.techStack || [],
    role: data.role,
    highlights,
    links: data.links,
  } as ProjectContent;
};

export function getCareers(language: Language): CareerContent[] {
  const careers = getMarkdownData<CareerContent>(
    [language, "careers"],
    (data, content) => ({
      company: data.company,
      position: data.position,
      period: data.period,
      description: parseListFromContent(content),
      techStack: data.techStack || [],
      order: data.order || 0,
    })
  );

  return careers.sort((a, b) => a.order - b.order);
}

export function getProjects(language: Language): ProjectContent[] {
  return getMarkdownData<ProjectContent>(
    [language, "projects"],
    parseProjectContent
  );
}

export function getProfile(language: Language): ProfileContent {
  return getSingleMarkdownData<ProfileContent>(
    [language, "profile.md"],
    (data, content) => ({
      name: data.name,
      nameKo: data.nameKo,
      title: data.title,
      location: data.location,
      email: data.email,
      github: data.github,
      linkedin: data.linkedin,
      summary: parseListFromContent(content),
    })
  );
}

export function getContacts(): Contact[] {
  return getSingleMarkdownData<Contact[]>(["contacts.md"], (data) => data.contacts);
}

export function getSkills(): Skill[] {
  return getSingleMarkdownData<Skill[]>(["skills.md"], (data) => data.skills);
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
