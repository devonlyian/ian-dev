export type SectionId = "hero" | "about" | "projects" | "experience" | "services" | "contact";

export type NavigationSection = {
  id: SectionId;
  label: string;
  index: string;
};

export type ProjectContent = {
  slug: string;
  title: string;
  role: string;
  eyebrow: string;
  year: string;
  category: string;
  tagline: string;
  featured: boolean;
  status: "Live" | "Case Study" | "WIP";
  tags: readonly string[];
  links?: readonly {
    label: string;
    url: string;
  }[];
  liveUrl?: string;
  githubUrl?: string;
  highlights: readonly string[];
  caseStudy?: {
    overview: string;
    challenge: string;
    solution: string;
    impact: string;
  };
  screenshots: readonly (
    | string
    | {
        label: string;
        src: string;
        alt: string;
      }
  )[];
  results?: readonly {
    value: string;
    label: string;
  }[];
};

export type Experience = {
  period: string;
  location: string;
  title: string;
  company: string;
  status: string;
  translationKey: string;
  summary: string;
  stack: string[];
};

export type Service = {
  title: string;
  description: string;
  stack: string[];
};
