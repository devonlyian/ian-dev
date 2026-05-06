import { resumeLanguages, resumeProjectSlugs } from "@/lib/data/resume";
import { languageText } from "@/lib/data/locales";
import { experiences, portfolio, projects } from "@/lib/portfolio-data";
import type { Project, ProjectSlug } from "@/lib/portfolio-data";
import type { ResumeDocument, ResumeLanguage } from "@/lib/resume/types";

function stripMarkdownStrong(value: string) {
  return value.replaceAll("**", "");
}

function resolveProjectDescription(slug: ProjectSlug, language: ResumeLanguage, fallback: string) {
  if (language === "ko") {
    return languageText.ko.projects.descriptions[slug] ?? fallback;
  }

  return fallback;
}

function resolveProjectHighlights(slug: ProjectSlug, language: ResumeLanguage, fallback: readonly string[]) {
  const highlights = language === "ko" ? languageText.ko.projects.highlights[slug] ?? fallback : fallback;

  return highlights.map(stripMarkdownStrong);
}

export function buildResumeDocument(language: ResumeLanguage): ResumeDocument {
  const resumeLanguage = resumeLanguages[language];
  const selectedProjects = resumeProjectSlugs.map((slug) => {
    const project = projects.find((candidate) => candidate.slug === slug) as Project | undefined;

    if (!project) {
      throw new Error(`Resume project not found: ${slug}`);
    }

    return {
      title: project.title,
      year: project.year,
      category: project.category,
      description: resolveProjectDescription(project.slug, language, project.tagline),
      highlights: resolveProjectHighlights(project.slug, language, project.highlights),
      tags: project.tags,
      links: project.links ?? [],
    };
  });

  return {
    language,
    filenameBase: resumeLanguage.filenameBase,
    name: resumeLanguage.name,
    role: resumeLanguage.role,
    location: portfolio.owner.location,
    summary: resumeLanguage.summary,
    labels: resumeLanguage.labels,
    contact: [
      { label: "Email", value: portfolio.owner.email, href: `mailto:${portfolio.owner.email}` },
      { label: "GitHub", value: portfolio.owner.github.replace("https://", ""), href: portfolio.owner.github },
      { label: "Website", value: portfolio.owner.siteUrl.replace("https://", ""), href: portfolio.owner.siteUrl },
      { label: "Location", value: portfolio.owner.location },
    ],
    skills: resumeLanguage.skillGroups,
    experiences: experiences.map((experience) => ({
      period: experience.period,
      title: experience.title,
      company: experience.company,
      location: experience.location,
      summary:
        language === "ko"
          ? languageText.ko.experiences[experience.translationKey] ?? experience.summary
          : experience.summary,
      stack: experience.stack,
    })),
    projects: selectedProjects,
  };
}
