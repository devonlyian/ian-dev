import { describe, expect, it } from "vitest";
import { renderResumeMarkdown } from "@/lib/resume/markdown";
import { buildResumeDocument } from "@/lib/resume/model";

describe("resume markdown renderer", () => {
  it("renders deterministic Korean Markdown", () => {
    const markdown = renderResumeMarkdown(buildResumeDocument("ko"));

    expect(markdown).toContain("# Ian Kim");
    expect(markdown).toContain("백엔드 개발자");
    expect(markdown).toContain("## 요약");
    expect(markdown).toContain("## 연락처");
    expect(markdown).toContain("## 기술");
    expect(markdown).toContain("## 경력");
    expect(markdown).toContain("## 주요 프로젝트");
    expect(markdown).toContain("ReadingGarden Kotlin Migration Backend");
    expect(markdown).not.toContain("**");
  });

  it("renders deterministic English Markdown", () => {
    const markdown = renderResumeMarkdown(buildResumeDocument("en"));

    expect(markdown).toContain("# Ian Kim");
    expect(markdown).toContain("Backend Developer");
    expect(markdown).toContain("## Summary");
    expect(markdown).toContain("## Contact");
    expect(markdown).toContain("## Skills");
    expect(markdown).toContain("## Experience");
    expect(markdown).toContain("## Selected Projects");
    expect(markdown).toContain("NailTocToc MSA Backend");
    expect(markdown).not.toContain("**");
  });
});
