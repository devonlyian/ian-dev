// Profile interface for markdown content
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

// Career interface for markdown content
export interface CareerContent {
  company: string;
  position: string;
  period: string;
  description: string[];
  techStack: string[];
  order: number;
}

// Skill interface
export interface Skill {
  category: string;
  items: {
    name: string;
    level?: number; // 1-100 for progress bar (optional)
    years?: number;
    highlight?: boolean; // 강조 표시
    note?: string; // 추가 설명
  }[];
}

// Project interface for markdown content
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
