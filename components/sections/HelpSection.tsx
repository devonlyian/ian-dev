const commands = [
  { name: "HELP", desc: "Display this help message" },
  { name: "ABOUT", desc: "Display information about me" },
  { name: "CAREER", desc: "Show my work experience" },
  { name: "SKILLS", desc: "List my technical skills" },
  { name: "PROJECTS [id]", desc: "Show my projects" },
  { name: "CONTACT", desc: "Display contact information" },
  { name: "CLS", desc: "Clear the screen" },
  { name: "DIR", desc: "List available sections" },
  { name: "TYPE <section>", desc: "Display section content" },
  { name: "MODE <theme>", desc: "Change theme (dos/dark/light/amber/green)" },
  { name: "PRINT", desc: "Print resume as PDF" },
  { name: "VER", desc: "Display version information" },
  { name: "NEOFETCH", desc: "Display system info" },
  { name: "HISTORY", desc: "Show command history" },
  { name: "SNAKE", desc: "Play Snake game" },
];

export default function HelpSection() {
  return (
    <div className="space-y-2">
      <div className="dos-yellow font-bold">AVAILABLE COMMANDS</div>
      <div className="dos-yellow">{"=".repeat(30)}</div>

      <div className="space-y-2 mt-2">
        {commands.map((cmd) => (
          <div key={cmd.name} className="flex flex-col sm:flex-row sm:gap-2">
            <span className="dos-cyan sm:w-32 shrink-0">{cmd.name}</span>
            <span className="dos-text text-sm sm:text-base">{cmd.desc}</span>
          </div>
        ))}
      </div>

      <div className="dos-yellow mt-3">{"=".repeat(30)}</div>
      <div className="dos-text mt-2 text-sm">
        Tip: UP/DOWN arrows for history, TAB for auto-complete
      </div>
    </div>
  );
}
