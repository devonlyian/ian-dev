import { Command, CommandContext, CommandResult, ThemeMode } from "@/types/terminal";

const AVAILABLE_THEMES: ThemeMode[] = ["dos", "dark", "light", "amber", "green"];

export const clearCommand: Command = {
  name: "CLS",
  aliases: ["CLEAR"],
  description: {
    en: "Clear terminal screen",
    ko: "화면 지우기",
  },
  execute: (): CommandResult => {
    return { type: "clear" };
  },
};

export const modeCommand: Command = {
  name: "MODE",
  aliases: [],
  description: {
    en: "Change display theme (dos/dark/light/amber/green)",
    ko: "화면 테마 변경 (dos/dark/light/amber/green)",
  },
  usage: "MODE <dos|dark|light|amber|green|list>",
  execute: (args: string[], context: CommandContext): CommandResult => {
    if (!args[0]) {
      return {
        type: "error",
        content: `Required parameter missing\nUsage: MODE <${AVAILABLE_THEMES.join("|")}>\nOr use: MODE list`,
      };
    }

    const mode = args[0].toLowerCase();

    if (mode === "list") {
      return {
        type: "success",
        content: `Available themes:\n  ${AVAILABLE_THEMES.join("\n  ")}`,
      };
    }

    if (!AVAILABLE_THEMES.includes(mode as ThemeMode)) {
      return {
        type: "error",
        content: `Invalid mode: ${args[0]}\nAvailable: ${AVAILABLE_THEMES.join(", ")}`,
      };
    }

    context.setTheme(mode as ThemeMode);
    return {
      type: "success",
      content: `Display mode changed to ${mode.toUpperCase()}`,
    };
  },
};

export const printCommand: Command = {
  name: "PRINT",
  aliases: [],
  description: {
    en: "Print resume as PDF",
    ko: "이력서 PDF 출력",
  },
  execute: (_args: string[], context: CommandContext): CommandResult => {
    context.triggerPrint();
    return {
      type: "success",
      content: "Preparing document for printing...",
    };
  },
};

export const versionCommand: Command = {
  name: "VER",
  aliases: ["VERSION"],
  description: {
    en: "Display version information",
    ko: "버전 정보 표시",
  },
  execute: (_args: string[], context: CommandContext): CommandResult => {
    return {
      type: "success",
      content: context.renderSection("version"),
    };
  },
};

export const neofetchCommand: Command = {
  name: "NEOFETCH",
  aliases: [],
  description: {
    en: "Display system information",
    ko: "시스템 정보 표시",
  },
  execute: (_args: string[], context: CommandContext): CommandResult => {
    return {
      type: "success",
      content: context.renderSection("neofetch"),
    };
  },
};

export const historyCommand: Command = {
  name: "HISTORY",
  aliases: [],
  description: {
    en: "Display command history",
    ko: "명령어 기록 표시",
  },
  execute: (_args: string[], context: CommandContext): CommandResult => {
    if (context.commandHistory.length === 0) {
      return {
        type: "success",
        content: "No commands in history.",
      };
    }
    return {
      type: "success",
      content: (
        <div className="space-y-1">
          {context.commandHistory.map((cmd, i) => (
            <div key={i} className="dos-text">
              {(i + 1).toString().padStart(3, " ")}  {cmd}
            </div>
          ))}
        </div>
      ),
    };
  },
};
