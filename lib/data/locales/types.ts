import type { ProjectSlug } from "../projects";

export type Language = "en" | "ko";

export type LanguageText = {
  header: {
    switchToKorean: string;
  };
  hero: {
    body: string;
  };
  about: {
    paragraphs: [string, string, string, string, string];
  };
  projects: {
    archive: {
      backHome: string;
      title: string;
      description: string;
    };
    taglines: Partial<Record<ProjectSlug, string>>;
    descriptions: Partial<Record<ProjectSlug, string>>;
    highlights: Partial<Record<ProjectSlug, string[]>>;
    caseStudies: Partial<
      Record<
        ProjectSlug,
      {
        overview: string;
        challenge: string;
        solution: string;
        impact: string;
      }
      >
    >;
  };
  experiences: Record<string, string>;
  services: Record<string, string>;
  contact: {
    body: string;
    copied: string;
  };
};
