import { Command, CommandContext, CommandResult } from "@/types/terminal";

export const snakeCommand: Command = {
  name: "SNAKE",
  aliases: ["GAME"],
  description: {
    en: "Play the classic Snake game",
    ko: "클래식 Snake 게임 플레이",
  },
  execute: (_args: string[], context: CommandContext): CommandResult => {
    return {
      type: "success",
      content: context.renderSection("snake"),
    };
  },
};
