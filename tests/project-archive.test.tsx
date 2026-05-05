import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { ProjectArchive } from "@/components/projects/ProjectArchive";
import { LanguageProvider } from "@/contexts/LanguageContext";

describe("ProjectArchive", () => {
  afterEach(() => {
    localStorage.clear();
  });

  it("renders the archive page copy and project summaries in Korean when Korean is selected", async () => {
    localStorage.setItem("language", "ko");

    render(
      <LanguageProvider>
        <ProjectArchive />
      </LanguageProvider>,
    );

    expect(await screen.findByRole("heading", { level: 1, name: "프로젝트" })).toBeTruthy();
    expect(screen.getByText(/각 항목은 간결한 케이스 스터디 페이지로 연결됩니다/)).toBeTruthy();
    expect(screen.getByText(/기존 Flutter 독서 기록 앱의 Django 백엔드/)).toBeTruthy();
    expect(screen.queryByText(/A fuller archive of backend/)).toBeNull();
  });
});
