import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { About } from "@/components/sections/About";
import { LanguageProvider, languageText } from "@/contexts/LanguageContext";

describe("About section", () => {
  it("renders Korean copy from locale data instead of component literals", () => {
    localStorage.setItem("language", "ko");

    render(
      <LanguageProvider>
        <About />
      </LanguageProvider>,
    );

    expect(screen.getByText(languageText.ko.about.paragraphs[0].emphasis)).toBeTruthy();
    expect(screen.queryByText("운영에서 안정성이 드러나는 지점")).toBeNull();
  });
});
