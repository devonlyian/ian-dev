import { ReactNode } from "react";
import { CommandResult, CommandContext, ThemeMode } from "@/types/terminal";
import { executeCommand as executeFromRegistry, getAllCommands } from "./registry";
import { registerAllCommands } from "./commands";

// Initialize commands on module load
let initialized = false;

function ensureInitialized(): void {
  if (!initialized) {
    registerAllCommands();
    initialized = true;
  }
}

// Legacy interface for backward compatibility
export interface LegacyCommandContext {
  setTheme: (theme: ThemeMode) => void;
  triggerPrint: () => void;
  commandHistory: string[];
}

export function executeCommand(
  input: string,
  context: LegacyCommandContext,
  renderSection: (section: string) => ReactNode
): CommandResult {
  ensureInitialized();

  // Create full context with renderSection
  const fullContext: CommandContext = {
    ...context,
    renderSection,
  };

  return executeFromRegistry(input, fullContext);
}

// Re-export for convenience
export { getAllCommands } from "./registry";
export type { LegacyCommandContext as CommandContext };
