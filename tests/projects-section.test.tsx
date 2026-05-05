import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Projects } from "@/components/sections/Projects";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { projects } from "@/lib/portfolio-data";

describe("Projects section", () => {
  it("expands project rows without navigating from the title row", () => {
    render(
      <LanguageProvider>
        <Projects />
      </LanguageProvider>,
    );

    const readingGardenButton = screen.getByRole("button", {
      name: /ReadingGarden Kotlin Migration Backend/i,
    });
    const nailTocTocButton = screen.getByRole("button", {
      name: /NailTocToc MSA Backend/i,
    });

    expect(readingGardenButton.getAttribute("aria-expanded")).toBe("true");
    expect(nailTocTocButton.getAttribute("aria-expanded")).toBe("false");

    fireEvent.click(nailTocTocButton);

    expect(readingGardenButton.getAttribute("aria-expanded")).toBe("false");
    expect(nailTocTocButton.getAttribute("aria-expanded")).toBe("true");
    expect(
      screen.queryByRole("link", {
        name: /ReadingGarden Kotlin Migration Backend/i,
      }),
    ).toBeNull();
  });

  it("keeps case study links as the explicit route to project details", () => {
    render(
      <LanguageProvider>
        <Projects />
      </LanguageProvider>,
    );

    expect(screen.getAllByRole("link", { name: /Case Study/i })[0]?.getAttribute("href")).toBe(
      "/projects/readinggarden-kotlin-backend",
    );
  });

  it("keeps project summary copy canonical instead of duplicating tagline and description", () => {
    expect(projects.every((project) => !("description" in project))).toBe(true);
  });
});
