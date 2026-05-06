export type ResumeLanguage = "ko" | "en";

export type ResumeSkillGroup = {
  title: string;
  items: readonly string[];
};

export type ResumeContactItem = {
  label: string;
  value: string;
  href?: string;
};

export type ResumeExperienceEntry = {
  period: string;
  title: string;
  company: string;
  location: string;
  summary: string;
  stack: readonly string[];
};

export type ResumeProjectEntry = {
  title: string;
  year: string;
  category: string;
  description: string;
  highlights: readonly string[];
  tags: readonly string[];
  links: readonly {
    label: string;
    url: string;
  }[];
};

export type ResumeLabels = {
  role: string;
  summary: string;
  contact: string;
  skills: string;
  experience: string;
  projects: string;
};

export type ResumeDocument = {
  language: ResumeLanguage;
  filenameBase: string;
  name: string;
  role: string;
  location: string;
  summary: readonly string[];
  labels: ResumeLabels;
  contact: readonly ResumeContactItem[];
  skills: readonly ResumeSkillGroup[];
  experiences: readonly ResumeExperienceEntry[];
  projects: readonly ResumeProjectEntry[];
};
