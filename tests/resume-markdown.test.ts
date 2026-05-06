import { describe, expect, it } from "vitest";
import { renderResumeMarkdown } from "@/lib/resume/markdown";
import { buildResumeDocument } from "@/lib/resume/model";

describe("resume markdown renderer", () => {
  it("renders deterministic Korean Markdown", () => {
    const markdown = renderResumeMarkdown(buildResumeDocument("ko"));

    expect(markdown).toContain("# 김이안");
    expect(markdown).toContain("Backend Developer");
    expect(markdown).not.toContain("직무");
    expect(markdown).not.toContain("AI & Automation");
    expect(markdown).toContain("### AI\n\nCodex, Claude Code, Harness Engineering");
    expect(markdown).not.toContain("### Accounting Commission System");
    expect(markdown).toContain("## 요약");
    expect(markdown).toContain("## 연락처");
    expect(markdown).toContain("## 기술");
    expect(markdown).toContain("## 경력");
    expect(markdown).toContain("## 주요 프로젝트");
    expect(markdown).toContain("ReadingGarden Kotlin Migration Backend");
    expect(markdown).toContain("Arffy 팀 프로젝트");
    expect(markdown).toContain("팀 프로젝트: 빈티지 조명 스토어 백엔드 개발");
    expect(markdown).not.toContain("**");
  });

  it("renders deterministic English Markdown", () => {
    const markdown = renderResumeMarkdown(buildResumeDocument("en"));

    expect(markdown).toContain("# Ian Kim");
    expect(markdown).toContain("Backend Developer");
    expect(buildResumeDocument("en").labels.role).toBe("");
    expect(markdown).toContain("## Summary");
    expect(markdown).toContain("## Contact");
    expect(markdown).toContain("## Skills");
    expect(markdown).toContain("## Experience");
    expect(markdown).toContain("## Selected Projects");
    expect(markdown).toContain("NailTocToc MSA Backend");
    expect(markdown).toContain("Arffy team project");
    expect(markdown).toContain("Team project");
    expect(markdown).not.toContain("**");
  });
});
