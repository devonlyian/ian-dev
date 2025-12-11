import { skills } from "@/data/skills";
import ProgressBar from "@/components/ui/ProgressBar";

export default function SkillsSection() {
  return (
    <div className="space-y-4">
      <div className="dos-yellow font-bold">TECHNICAL SKILLS</div>
      <div className="dos-yellow">{"=".repeat(30)}</div>

      {skills.map((category) => (
        <div key={category.category} className="space-y-2 mt-3">
          <div className="dos-yellow">[{category.category.toUpperCase()}]</div>
          {category.items.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2"
            >
              <span className="dos-highlight sm:w-36 shrink-0">{skill.name}</span>
              <div className="flex items-center gap-2">
                <ProgressBar value={skill.level} width={20} />
                {skill.years && (
                  <span className="dos-cyan text-sm">({skill.years}y)</span>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
