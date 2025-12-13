import { ReactNode } from "react";

export type ThemeMode = "dos" | "dark" | "light" | "amber" | "green";

export interface TerminalEntry {
  id: string;
  type: "command" | "output" | "error" | "system";
  content: string | ReactNode;
  timestamp: Date;
}

export interface TerminalState {
  history: TerminalEntry[];
  currentInput: string;
  commandHistory: string[];
  historyIndex: number;
  isProcessing: boolean;
}

export interface CommandResult {
  type: "success" | "error" | "clear";
  content?: ReactNode;
  message?: string;
}

export interface ParsedCommand {
  name: string;
  args: string[];
  raw: string;
}

// Command Pattern types
export interface CommandContext {
  setTheme: (theme: ThemeMode) => void;
  triggerPrint: () => void;
  commandHistory: string[];
  renderSection: (section: string) => ReactNode;
}

export interface Command {
  name: string;
  aliases: string[];
  description: {
    en: string;
    ko: string;
  };
  usage?: string;
  execute: (args: string[], context: CommandContext) => CommandResult;
}
