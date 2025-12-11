import { ReactNode } from "react";
import { CommandResult, ParsedCommand } from "@/types/terminal";
import { ThemeMode } from "@/types/terminal";

export function parseCommand(input: string): ParsedCommand {
  const trimmed = input.trim();
  const parts = trimmed.split(/\s+/);
  const name = parts[0]?.toUpperCase() || "";
  const args = parts.slice(1);

  return {
    name,
    args,
    raw: trimmed,
  };
}

export interface CommandContext {
  setTheme: (theme: ThemeMode) => void;
  triggerPrint: () => void;
  commandHistory: string[];
}

export function executeCommand(
  input: string,
  context: CommandContext,
  renderSection: (section: string) => ReactNode
): CommandResult {
  const { name, args } = parseCommand(input);

  switch (name) {
    case "HELP":
    case "?":
      return {
        type: "success",
        content: renderSection("help"),
      };

    case "ABOUT":
    case "WHOAMI":
      return {
        type: "success",
        content: renderSection("about"),
      };

    case "CAREER":
    case "EXPERIENCE":
    case "EXP":
      return {
        type: "success",
        content: renderSection("career"),
      };

    case "SKILLS":
    case "SKILL":
      return {
        type: "success",
        content: renderSection("skills"),
      };

    case "PROJECTS":
    case "PROJECT":
    case "PROJ":
      if (args[0]) {
        return {
          type: "success",
          content: renderSection(`project:${args[0].toLowerCase()}`),
        };
      }
      return {
        type: "success",
        content: renderSection("projects"),
      };

    case "CONTACT":
    case "EMAIL":
      return {
        type: "success",
        content: renderSection("contact"),
      };

    case "CLS":
    case "CLEAR":
      return {
        type: "clear",
      };

    case "DIR":
    case "LS":
      return {
        type: "success",
        content: renderSection("dir"),
      };

    case "TYPE":
    case "CAT":
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
        content: renderSection(section),
      };

    case "MODE":
      if (!args[0]) {
        return {
          type: "error",
          content: "Required parameter missing\nUsage: MODE <dark|light>",
        };
      }
      const mode = args[0].toLowerCase();
      if (mode !== "dark" && mode !== "light") {
        return {
          type: "error",
          content: `Invalid mode: ${args[0]}\nAvailable: dark, light`,
        };
      }
      context.setTheme(mode as ThemeMode);
      return {
        type: "success",
        content: `Display mode changed to ${mode.toUpperCase()}`,
      };

    case "PRINT":
      context.triggerPrint();
      return {
        type: "success",
        content: "Preparing document for printing...",
      };

    case "VER":
    case "VERSION":
      return {
        type: "success",
        content: renderSection("version"),
      };

    case "NEOFETCH":
      return {
        type: "success",
        content: renderSection("neofetch"),
      };

    case "HISTORY":
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

    case "":
      return {
        type: "success",
        content: null,
      };

    default:
      return {
        type: "error",
        content: `Bad command or file name: ${name}\nType 'HELP' for available commands.`,
      };
  }
}
