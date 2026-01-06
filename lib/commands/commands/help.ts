import { Command, CommandContext, CommandResult } from "@/types/terminal";
import { getAllCommands } from "../registry";
import { SECTIONS } from "@/lib/constants/sections";

export const helpCommand: Command = {
  name: "HELP",
  aliases: ["?"],
  description: {
    en: "Display available commands",
    ko: "사용 가능한 명령어 표시",
  },
  execute: (_args: string[], context: CommandContext): CommandResult => {
    return {
      type: "success",
      content: context.renderSection(SECTIONS.HELP),
    };
  },
};

// Generate help content programmatically
export function generateHelpContent(language: "en" | "ko"): string {
  const commands = getAllCommands();
  const lines = commands.map((cmd) => {
    const aliases = cmd.aliases.length > 0 ? ` (${cmd.aliases.join(", ")})` : "";
    return `  ${cmd.name}${aliases} - ${cmd.description[language]}`;
  });
  return lines.join("\n");
}
