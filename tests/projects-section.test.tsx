import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Projects } from "@/components/sections/Projects";
import { LanguageProvider } from "@/contexts/LanguageContext";

describe("Projects section", () => {
  it("links the featured project row to the project detail page", () => {
    render(
      <LanguageProvider>
        <Projects />
      </LanguageProvider>,
    );

    const readingGardenLink = screen.getByRole("link", {
      name: /ReadingGarden Kotlin Migration Backend/i,
    });

    expect(readingGardenLink.getAttribute("href")).toBe("/projects/readinggarden-kotlin-backend");
  });
});
