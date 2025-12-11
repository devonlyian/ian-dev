import { ReactNode } from "react";

export type ThemeMode = "dark" | "light";

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
