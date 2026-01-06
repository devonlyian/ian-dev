import { getAvailableCommands } from "@/lib/commands/commandExecutor";

export interface AutocompleteResult {
  match: string | null;
  isExact: boolean;
}

export function autocomplete(input: string): AutocompleteResult {
  if (!input) {
    return { match: null, isExact: false };
  }

  const upperInput = input.toUpperCase();
  const availableCommands = getAvailableCommands();
  const candidates = new Set<string>();

  availableCommands.forEach((cmd) => {
    if (cmd.name.startsWith(upperInput)) candidates.add(cmd.name);
    cmd.aliases.forEach((alias) => {
      if (alias.startsWith(upperInput)) candidates.add(alias);
    });
  });

  const matches = Array.from(candidates).sort();

  if (matches.length === 0) {
    return { match: null, isExact: false };
  }

  if (matches.length === 1) {
    return { match: matches[0], isExact: true };
  }

  const commonPrefix = matches.reduce((prefix, current) => {
    let i = 0;
    while (i < prefix.length && i < current.length && prefix[i] === current[i]) {
      i++;
    }
    return prefix.substring(0, i);
  });

  if (commonPrefix.length > upperInput.length) {
    return { match: commonPrefix, isExact: false };
  }

  return { match: null, isExact: false };
}
