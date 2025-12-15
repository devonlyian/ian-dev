import { Command, CommandContext, CommandResult } from "@/types/terminal";

export const aboutCommand: Command = {
  name: "ABOUT",
  aliases: ["WHOAMI"],
  description: {
    en: "Display profile information",
    ko: "프로필 정보 표시",
  },
  execute: (_args: string[], context: CommandContext): CommandResult => {
    return {
      type: "success",
      content: context.renderSection("about"),
    };
  },
};

export const careerCommand: Command = {
  name: "CAREER",
  aliases: ["EXPERIENCE", "EXP"],
  description: {
    en: "Display work experience",
    ko: "경력 사항 표시",
  },
  execute: (_args: string[], context: CommandContext): CommandResult => {
    return {
      type: "success",
      content: context.renderSection("career"),
    };
  },
};

export const skillsCommand: Command = {
  name: "SKILLS",
  aliases: ["SKILL"],
  description: {
    en: "Display technical skills",
    ko: "기술 스택 표시",
  },
  execute: (_args: string[], context: CommandContext): CommandResult => {
    return {
      type: "success",
      content: context.renderSection("skills"),
    };
  },
};

export const projectsCommand: Command = {
  name: "PROJECTS",
  aliases: ["PROJECT", "PROJ"],
  description: {
    en: "Display projects (use: PROJECTS [name])",
    ko: "프로젝트 표시 (사용법: PROJECTS [이름])",
  },
  usage: "PROJECTS [project-id]",
  execute: (args: string[], context: CommandContext): CommandResult => {
    if (args[0]) {
      return {
        type: "success",
        content: context.renderSection(`project:${args[0].toLowerCase()}`),
      };
    }
    return {
      type: "success",
      content: context.renderSection("projects"),
    };
  },
};

export const contactCommand: Command = {
  name: "CONTACT",
  aliases: ["EMAIL"],
  description: {
    en: "Display contact information",
    ko: "연락처 정보 표시",
  },
  execute: (_args: string[], context: CommandContext): CommandResult => {
    return {
      type: "success",
      content: context.renderSection("contact"),
    };
  },
};

export const dirCommand: Command = {
  name: "DIR",
  aliases: ["LS"],
  description: {
    en: "List available sections",
    ko: "섹션 목록 표시",
  },
  execute: (_args: string[], context: CommandContext): CommandResult => {
    return {
      type: "success",
      content: context.renderSection("dir"),
    };
  },
};

export const typeCommand: Command = {
  name: "TYPE",
  aliases: ["CAT"],
  description: {
    en: "Display section content (use: TYPE <section>)",
    ko: "섹션 내용 표시 (사용법: TYPE <섹션>)",
  },
  usage: "TYPE <about|career|skills|projects|contact>",
  execute: (args: string[], context: CommandContext): CommandResult => {
    if (!args[0]) {
      return {
        type: "error",
        content: "Required parameter missing\nUsage: TYPE <section>",
      };
    }
    const section = args[0].toLowerCase();
    const validSections = ["about", "career", "skills", "projects", "contact"];
    if (!validSections.includes(section)) {
      return {
        type: "error",
        content: `File not found - ${args[0]}\nAvailable: ${validSections.join(", ")}`,
      };
    }
    return {
      type: "success",
      content: context.renderSection(section),
    };
  },
};
