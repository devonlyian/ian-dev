"use client";

import { useContentContext } from "@/contexts/ContentContext";

export default function SkillsSection() {
  const { skills } = useContentContext();

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
              className="flex flex-col sm:flex-row sm:items-start gap-0.5 sm:gap-2"
            >
              <div className="flex items-center gap-1 sm:w-40 shrink-0">
                {skill.highlight && <span className="dos-cyan">★</span>}
                <span className={skill.highlight ? "dos-cyan font-bold" : "dos-highlight"}>
                  {skill.name}
                </span>
              </div>
              <div className="flex items-center gap-2 ml-4 sm:ml-0">
                <span className="dos-yellow text-sm">({skill.years}y)</span>
                {skill.note && (
                  <span className="dos-highlight text-sm">- {skill.note}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
