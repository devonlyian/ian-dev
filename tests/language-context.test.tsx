import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import { languageText } from "@/lib/data/locales";

function CurrentLanguageLabel() {
  const { language, text } = useLanguage();

  return (
    <div>
      <span>{language}</span>
      <span>{text.projects.archive.title}</span>
    </div>
  );
}

describe("language context", () => {
  it("keeps translation data separate from the provider while preserving provider behavior", () => {
    expect(languageText.ko.projects.archive.title).toBe("프로젝트");

    render(
      <LanguageProvider>
        <CurrentLanguageLabel />
      </LanguageProvider>,
    );

    expect(screen.getByText("en")).toBeTruthy();
    expect(screen.getByText("Projects")).toBeTruthy();
  });
});
