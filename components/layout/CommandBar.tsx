"use client";

interface CommandBarProps {
  onCommand: (command: string) => void;
}

const commands = [
  { label: "ABOUT", command: "ABOUT" },
  { label: "CAREER", command: "CAREER" },
  { label: "SKILLS", command: "SKILLS" },
  { label: "PROJECTS", command: "PROJECTS" },
  { label: "CONTACT", command: "CONTACT" },
  { label: "HELP", command: "HELP" },
];

export default function CommandBar({ onCommand }: CommandBarProps) {
  return (
    <nav
      aria-label="Quick navigation commands"
      className="w-full max-w-4xl mx-auto mt-2 no-print"
    >
      <div
        role="toolbar"
        aria-label="Command buttons"
        className="flex items-center justify-between sm:justify-center sm:gap-3 p-2 border-2 border-dos-border bg-dos-bg"
      >
        <span className="dos-text text-sm shrink-0 mr-1 hidden sm:inline" aria-hidden="true">
          Quick:
        </span>
        {commands.map((cmd) => (
          <button
            key={cmd.command}
            onClick={() => onCommand(cmd.command)}
            aria-label={`Execute ${cmd.label} command`}
            className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs sm:text-base border border-dos-border bg-dos-bg dos-highlight hover:bg-dos-highlight hover:text-dos-bg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-dos-cyan"
          >
            {cmd.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
