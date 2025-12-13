import { Command, CommandResult, CommandContext, ParsedCommand } from "@/types/terminal";

// Command registry using Map for O(1) lookup
const commandRegistry = new Map<string, Command>();

// Register a command with all its aliases
export function registerCommand(command: Command): void {
  // Register by primary name
  commandRegistry.set(command.name.toUpperCase(), command);

  // Register by aliases
  for (const alias of command.aliases) {
    commandRegistry.set(alias.toUpperCase(), command);
  }
}

// Get a command by name or alias
export function getCommand(name: string): Command | undefined {
  return commandRegistry.get(name.toUpperCase());
}

// Get all registered commands (unique, no aliases)
export function getAllCommands(): Command[] {
  const seen = new Set<string>();
  const commands: Command[] = [];

  for (const command of commandRegistry.values()) {
    if (!seen.has(command.name)) {
      seen.add(command.name);
      commands.push(command);
    }
  }

  return commands;
}

// Parse command input
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

// Execute a command
export function executeCommand(
  input: string,
  context: CommandContext
): CommandResult {
  const { name, args } = parseCommand(input);

  // Empty input
  if (!name) {
    return { type: "success", content: null };
  }

  const command = getCommand(name);

  if (!command) {
    return {
      type: "error",
      content: `Bad command or file name: ${name}\nType 'HELP' for available commands.`,
    };
  }

  return command.execute(args, context);
}
