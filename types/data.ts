import { LocalizedText } from "@/hooks/useLanguage";

// Old Profile interface with LocalizedText (deprecated)
export interface Profile {
  name: string;
  nameKo?: string;
  title: LocalizedText;
  location: LocalizedText;
  email: string;
  github: string;
  linkedin?: string;
  blog?: string;
  summary: LocalizedText[];
}

// New Profile interface for markdown content (already localized)
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

// Old Career interface with LocalizedText (for profile.ts compatibility)
export interface Career {
  company: LocalizedText;
  position: LocalizedText;
  period: string;
  description: LocalizedText[];
  techStack: string[];
}

// New Career interface for markdown content (already localized)
export interface CareerContent {
  company: string;
  position: string;
  period: string;
  description: string[];
  techStack: string[];
  order: number;
}

export interface Skill {
  category: string;
  items: {
    name: string;
    level: number; // 1-100 for progress bar
    years?: number;
  }[];
}

// Old Project interface with LocalizedText
export interface Project {
  id: string;
  name: string;
  description: LocalizedText;
  techStack: string[];
  role: LocalizedText;
  highlights: LocalizedText[];
  links?: {
    github?: string;
    demo?: string;
    blog?: string;
  };
}

// New Project interface for markdown content (already localized)
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

export interface Contact {
  type: "email" | "github" | "linkedin" | "blog" | "phone";
  label: string;
  value: string;
  url?: string;
}

// Content data structure for preloaded markdown content
export interface ContentData {
  contacts: Contact[];
  skills: Skill[];
  en: {
    profile: ProfileContent;
    careers: CareerContent[];
    projects: ProjectContent[];
  };
  ko: {
    profile: ProfileContent;
    careers: CareerContent[];
    projects: ProjectContent[];
  };
}
