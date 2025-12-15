const sections = [
  { name: "ABOUT.TXT", size: "2,048" },
  { name: "CAREER.TXT", size: "4,096" },
  { name: "SKILLS.TXT", size: "3,072" },
  { name: "PROJECTS.TXT", size: "5,120" },
  { name: "CONTACT.TXT", size: "1,024" },
];

export default function DirSection() {
  return (
    <div className="space-y-1">
      <div className="dos-text">Directory of C:\IAN-DEV</div>
      <div className="dos-text mt-2">{"─".repeat(20)}</div>

      {sections.map((section) => (
        <div key={section.name} className="flex gap-2">
          <span className="dos-highlight">{section.name}</span>
          <span className="dos-text hidden sm:inline">{section.size} bytes</span>
        </div>
      ))}

      <div className="dos-text mt-2">{"─".repeat(20)}</div>
      <div className="dos-text">{sections.length} File(s)</div>
      <div className="dos-cyan mt-2 text-sm">
        Use TYPE &lt;filename&gt; to view (e.g., TYPE ABOUT)
      </div>
    </div>
  );
}
