import { describe, expect, it } from "vitest";
import { resumeProjectSlugs } from "@/lib/data/resume";
import { projects } from "@/lib/portfolio-data";
import { isResumeEnabled } from "@/lib/resume/access";
import { buildResumeDocument } from "@/lib/resume/model";

describe("resume model", () => {
  it("builds Korean and English resume documents with required sections", () => {
    const ko = buildResumeDocument("ko");
    const en = buildResumeDocument("en");

    expect(ko).toMatchObject({
      language: "ko",
      filenameBase: "resume.ko",
      name: "Ian Kim",
      role: "백엔드 개발자",
    });
    expect(en).toMatchObject({
      language: "en",
      filenameBase: "resume.en",
      name: "Ian Kim",
      role: "Backend Developer",
    });

    expect(ko.summary.length).toBeGreaterThan(0);
    expect(en.summary.length).toBeGreaterThan(0);
    expect(ko.contact.map((item) => item.label)).toEqual(["Email", "GitHub", "Website", "Location"]);
    expect(en.contact.map((item) => item.label)).toEqual(["Email", "GitHub", "Website", "Location"]);
    expect(ko.skills.length).toBeGreaterThan(2);
    expect(en.skills.length).toBeGreaterThan(2);
    expect(ko.experiences.length).toBeGreaterThan(0);
    expect(en.experiences.length).toBeGreaterThan(0);
    expect(ko.projects.map((project) => project.title)).toContain("ReadingGarden Kotlin Migration Backend");
    expect(en.projects.map((project) => project.title)).toContain("ReadingGarden Kotlin Migration Backend");
  });

  it("keeps selected resume projects backed by portfolio projects", () => {
    const knownSlugs = new Set(projects.map((project) => project.slug));

    expect(resumeProjectSlugs.every((slug) => knownSlugs.has(slug))).toBe(true);
  });

  it("local resume access is closed by default and opens only with RESUME_ENABLED=1", () => {
    expect(isResumeEnabled({})).toBe(false);
    expect(isResumeEnabled({ RESUME_ENABLED: "0" })).toBe(false);
    expect(isResumeEnabled({ RESUME_ENABLED: "true" })).toBe(false);
    expect(isResumeEnabled({ RESUME_ENABLED: "1" })).toBe(true);
  });
});
