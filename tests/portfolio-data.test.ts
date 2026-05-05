import { describe, expect, it } from "vitest";
import { languageText } from "@/lib/data/locales";
import { experiences, navigationSections, portfolio, projects } from "@/lib/portfolio-data";
import { getAdjacentProjects, getFeaturedProjects, getProjectBySlug } from "@/lib/projects";

describe("portfolio data contract", () => {
  it("defines navigation sections in the same order as the one-page portfolio", () => {
    expect(navigationSections.map((section) => section.id)).toEqual([
      "hero",
      "about",
      "projects",
      "experience",
      "services",
      "contact",
    ]);
  });

  it("keeps all project slugs unique and URL safe", () => {
    const slugs = projects.map((project) => project.slug);

    expect(new Set(slugs).size).toBe(slugs.length);
    expect(slugs.every((slug) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))).toBe(true);
  });

  it("finds featured projects for the home section", () => {
    expect(getFeaturedProjects()).toHaveLength(4);
    expect(getFeaturedProjects().every((project) => project.featured)).toBe(true);
  });

  it("returns project detail data by slug", () => {
    const project = getProjectBySlug("nailtoctoc-backend");

    expect(project?.title).toBe("NailTocToc MSA Backend");
    expect(project?.highlights.length).toBeGreaterThan(3);
  });

  it("keeps project order aligned with the main portfolio content", () => {
    expect(projects.map((project) => project.slug).slice(0, 6)).toEqual([
      "readinggarden-kotlin-backend",
      "nailtoctoc-backend",
      "nailtoctoc-kiosk",
      "arffy",
      "gokkan",
      "onde",
    ]);
  });

  it("returns previous and next project links for detail pages", () => {
    const adjacent = getAdjacentProjects("arffy");

    expect(adjacent.previous?.slug).toBe("nailtoctoc-kiosk");
    expect(adjacent.next?.slug).toBe("gokkan");
  });

  it("contains owner identity separate from project data", () => {
    expect(portfolio.owner.initials).toBe("IK");
    expect(projects.every((project) => !project.title.includes(portfolio.owner.name))).toBe(true);
  });

  it("includes the ongoing NooooK Studio team work for ReadingGarden", () => {
    expect(experiences[0]).toMatchObject({
      period: "2026.03 — Present",
      company: "NooooK Studio",
      title: "Backend Developer",
      status: "Team",
      translationKey: "nooook-studio",
    });
    expect(experiences[0]?.summary).toContain("ReadingGarden");
    expect(experiences[0]?.summary).toContain("dog and cat care management app");
    expect(experiences[0]?.summary).not.toContain("dedicated dog and cat companion app");
  });

  it("uses Korea as the location and Team or Company as the experience badge", () => {
    expect(experiences.every((experience) => experience.location === "Korea")).toBe(true);
    expect(experiences.map((experience) => `${experience.company}:${experience.status}`)).toEqual([
      "NooooK Studio:Team",
      "NailTocToc:Company",
      "Mining5000:Company",
      "Arffy:Team",
    ]);
  });

  it("keeps Korean experience summaries distinct when display titles repeat", () => {
    expect(experiences.map((experience) => `${experience.company}:${experience.translationKey}`)).toEqual([
      "NooooK Studio:nooook-studio",
      "NailTocToc:nailtoctoc",
      "Mining5000:mining5000",
      "Arffy:arffy",
    ]);
    expect(languageText.ko.experiences["nooook-studio"]).toContain("독서가든");
    expect(languageText.ko.experiences.arffy).toContain("빈티지 조명");
  });
});
