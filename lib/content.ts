import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Language } from "@/hooks/useLanguage";

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

const contentDirectory = path.join(process.cwd(), "content");

export function getCareers(language: Language): CareerContent[] {
  const careersDir = path.join(contentDirectory, language, "careers");

  if (!fs.existsSync(careersDir)) {
    return [];
  }

  const fileNames = fs.readdirSync(careersDir);
  const careers = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const filePath = path.join(careersDir, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      // Parse description from markdown content (bullet points)
      const description = content
        .split("\n")
        .filter((line) => line.trim().startsWith("-"))
        .map((line) => line.trim().replace(/^-\s*/, ""));

      return {
        company: data.company,
        position: data.position,
        period: data.period,
        description,
        techStack: data.techStack || [],
        order: data.order || 0,
      } as CareerContent;
    })
    .sort((a, b) => a.order - b.order);

  return careers;
}

export function getProjects(language: Language): ProjectContent[] {
  const projectsDir = path.join(contentDirectory, language, "projects");

  if (!fs.existsSync(projectsDir)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDir);
  const projects = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const filePath = path.join(projectsDir, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContents);

      // Parse content: first paragraph is description, ## Highlights section has bullet points
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
    });

  return projects;
}

// Get all content for both languages (for server-side preloading)
export function getAllContent() {
  return {
    en: {
      careers: getCareers("en"),
      projects: getProjects("en"),
    },
    ko: {
      careers: getCareers("ko"),
      projects: getProjects("ko"),
    },
  };
}
