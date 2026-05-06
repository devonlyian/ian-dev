import type { ResumeDocument } from "@/lib/resume/types";

function list(items: readonly string[]) {
  return items.map((item) => `- ${item}`).join("\n");
}

function linkOrText(label: string, value: string, href?: string) {
  return href ? `- ${label}: [${value}](${href})` : `- ${label}: ${value}`;
}

export function renderResumeMarkdown(resume: ResumeDocument) {
  const lines: string[] = [
    `# ${resume.name}`,
    "",
    resume.role,
    "",
    `## ${resume.labels.summary}`,
    "",
    list(resume.summary),
    "",
    `## ${resume.labels.contact}`,
    "",
    resume.contact.map((item) => linkOrText(item.label, item.value, item.href)).join("\n"),
    "",
    `## ${resume.labels.skills}`,
    "",
    ...resume.skills.flatMap((group) => [`### ${group.title}`, "", group.items.join(", "), ""]),
    `## ${resume.labels.experience}`,
    "",
    ...resume.experiences.flatMap((experience) => [
      `### ${experience.title} - ${experience.company}`,
      "",
      `${experience.period} | ${experience.location}`,
      "",
      `- ${experience.summary}`,
      `- Stack: ${experience.stack.join(", ")}`,
      "",
    ]),
    `## ${resume.labels.projects}`,
    "",
    ...resume.projects.flatMap((project) => [
      `### ${project.title}`,
      "",
      `${project.year} | ${project.category}`,
      "",
      `- ${project.description}`,
      ...project.highlights.map((highlight) => `- ${highlight}`),
      `- Stack: ${project.tags.join(", ")}`,
      ...(project.links.length > 0 ? project.links.map((link) => `- ${link.label}: ${link.url}`) : []),
      "",
    ]),
  ];

  return `${lines.join("\n").replace(/\n{3,}/g, "\n\n").trim()}\n`;
}
