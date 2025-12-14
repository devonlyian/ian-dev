"use client";

import { useLanguageContext } from "@/contexts/LanguageContext";
import { useContentContext } from "@/contexts/ContentContext";
import { SeparatorLine, Divider } from "@/components/ui/SeparatorLine";

export default function CareerSection() {
  const { language } = useLanguageContext();
  const { careers } = useContentContext();

  return (
    <div className="space-y-3">
      <SeparatorLine />
      <div className="dos-highlight text-base sm:text-lg font-bold">
        {language === "ko" ? "경력 사항" : "WORK EXPERIENCE"}
      </div>
      <SeparatorLine />

      {careers.map((career, index) => (
        <div key={index} className="space-y-2 mt-4">
          <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-1 sm:gap-2">
            <span className="dos-cyan font-bold text-base sm:text-lg">{career.company}</span>
            <span className="dos-yellow hidden sm:inline">|</span>
            <span className="dos-highlight">{career.position}</span>
          </div>
          <div className="dos-yellow text-sm">{career.period}</div>
          <div className="mt-2 space-y-1.5">
            {career.description.map((desc, i) => (
              <div key={i} className="flex dos-highlight text-sm sm:text-base leading-relaxed">
                <span className="shrink-0 mr-2">•</span>
                <span>{desc}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5 sm:gap-2 ml-4">
            {career.techStack.map((tech) => (
              <span
                key={tech}
                className="bg-dos-cyan text-dos-bg px-1.5 py-0.5 text-sm font-bold"
              >
                {tech}
              </span>
            ))}
          </div>
          {index < careers.length - 1 && <Divider />}
        </div>
      ))}
    </div>
  );
}
