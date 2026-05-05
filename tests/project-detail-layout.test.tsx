import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProjectDetail } from "@/components/projects/ProjectDetail";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { getAdjacentProjects, getProjectBySlug, getProjectDescription } from "@/lib/projects";

describe("ProjectDetail layout", () => {
  it("uses a compressed mobile hero instead of a full-screen mobile layout", () => {
    const project = getProjectBySlug("readinggarden-kotlin-backend");

    if (!project) {
      throw new Error("Expected ReadingGarden project fixture");
    }

    const { container } = render(
      <LanguageProvider>
        <ProjectDetail project={project} adjacent={getAdjacentProjects(project.slug)} />
      </LanguageProvider>,
    );

    const hero = container.querySelector("#project-hero");
    const heroTitle = hero?.querySelector("h1");
    const heroClasses = hero?.className.split(/\s+/) ?? [];
    const summary = getProjectDescription(project);
    const summaryOccurrences = (hero?.textContent?.match(new RegExp(summary, "g")) ?? []).length;

    expect(hero?.className).toContain("min-h-[auto]");
    expect(hero?.className).toContain("md:min-h-screen");
    expect(heroClasses).not.toContain("min-h-screen");
    expect(heroTitle?.className).toContain("text-[clamp(1.95rem,8vw,2.8rem)]");
    expect(summaryOccurrences).toBe(1);
  });

  it("renders app screenshots with explicit intrinsic dimensions", () => {
    const project = getProjectBySlug("readinggarden-kotlin-backend");

    if (!project) {
      throw new Error("Expected ReadingGarden project fixture");
    }

    const { getAllByAltText } = render(
      <LanguageProvider>
        <ProjectDetail project={project} adjacent={getAdjacentProjects(project.slug)} />
      </LanguageProvider>,
    );

    expect(getAllByAltText("ReadingGarden App Store screenshot 1").every((image) => image.getAttribute("width") === "600")).toBe(true);
    expect(getAllByAltText("ReadingGarden App Store screenshot 1").every((image) => image.getAttribute("height") === "1299")).toBe(true);
  });
});
