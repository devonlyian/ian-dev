import type { ProjectSlug } from "../projects";

export type Language = "en" | "ko";

type AboutParagraph = {
  lead: string;
  emphasis: string;
  tail: string;
  emphasisTone: "foreground" | "brand";
};

export type LanguageText = {
  header: {
    switchToKorean: string;
  };
  hero: {
    body: string;
  };
  about: {
    paragraphs: [AboutParagraph, AboutParagraph];
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
  };
  experiences: Record<string, string>;
  services: Record<string, string>;
  contact: {
    body: string;
    copied: string;
  };
};
