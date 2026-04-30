import { describe, expect, it } from "vitest";
import { navigationSections, portfolio, projects } from "@/lib/portfolio-data";
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
    expect(project?.caseStudy.challenge.length).toBeGreaterThan(40);
  });

  it("returns previous and next project links for detail pages", () => {
    const adjacent = getAdjacentProjects("arffy");

    expect(adjacent.previous?.slug).toBe("nailtoctoc-kiosk");
    expect(adjacent.next?.slug).toBe("amp-recommendation");
  });

  it("contains owner identity separate from project data", () => {
    expect(portfolio.owner.initials).toBe("IK");
    expect(projects.every((project) => !project.title.includes(portfolio.owner.name))).toBe(true);
  });
});
