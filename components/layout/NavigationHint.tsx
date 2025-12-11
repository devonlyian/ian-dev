"use client";

interface NavigationHintProps {
  onCommand: (command: string) => void;
}

const quickCommands = [
  { label: "ABOUT", command: "ABOUT" },
  { label: "CAREER", command: "CAREER" },
  { label: "SKILLS", command: "SKILLS" },
  { label: "PROJ", command: "PROJECTS" },
  { label: "CONTACT", command: "CONTACT" },
];

export default function NavigationHint({ onCommand }: NavigationHintProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[var(--dos-bg)] border-t-2 border-[var(--dos-border)] p-2 lg:hidden no-print">
      <div className="flex justify-center gap-1 flex-wrap">
        {quickCommands.map((cmd) => (
          <button
            key={cmd.command}
            onClick={() => onCommand(cmd.command)}
            className="nav-button text-xs px-2 py-1"
          >
            {cmd.label}
          </button>
        ))}
        <button
          onClick={() => onCommand("HELP")}
          className="nav-button text-xs px-2 py-1"
        >
          ?
        </button>
      </div>
    </div>
  );
}
