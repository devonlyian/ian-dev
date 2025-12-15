import { registerCommand } from "../registry";

// Import all commands
import { helpCommand } from "./help";
import {
  aboutCommand,
  careerCommand,
  skillsCommand,
  projectsCommand,
  contactCommand,
  dirCommand,
  typeCommand,
} from "./navigation";
import {
  clearCommand,
  modeCommand,
  printCommand,
  versionCommand,
  neofetchCommand,
  historyCommand,
} from "./system";
import { snakeCommand } from "./snake";

// Register all commands
export function registerAllCommands(): void {
  // Help
  registerCommand(helpCommand);

  // Navigation
  registerCommand(aboutCommand);
  registerCommand(careerCommand);
  registerCommand(skillsCommand);
  registerCommand(projectsCommand);
  registerCommand(contactCommand);
  registerCommand(dirCommand);
  registerCommand(typeCommand);

  // System
  registerCommand(clearCommand);
  registerCommand(modeCommand);
  registerCommand(printCommand);
  registerCommand(versionCommand);
  registerCommand(neofetchCommand);
  registerCommand(historyCommand);

  // Games
  registerCommand(snakeCommand);
}

// Export individual commands for direct access
export {
  helpCommand,
  aboutCommand,
  careerCommand,
  skillsCommand,
  projectsCommand,
  contactCommand,
  dirCommand,
  typeCommand,
  clearCommand,
  modeCommand,
  printCommand,
  versionCommand,
  neofetchCommand,
  historyCommand,
};
