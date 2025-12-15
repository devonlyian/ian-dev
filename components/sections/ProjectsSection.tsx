"use client";

import { useLanguageContext } from "@/contexts/LanguageContext";
import { useContentContext } from "@/contexts/ContentContext";
import { SeparatorLine } from "@/components/ui/SeparatorLine";

interface ProjectsSectionProps {
  onSelectProject?: (projectId: string) => void;
}

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const { language } = useLanguageContext();
  const { projects } = useContentContext();

  return (
    <div className="space-y-3">
      <SeparatorLine />
      <div className="dos-highlight text-base sm:text-lg font-bold">
        {language === "ko" ? "프로젝트" : "PROJECTS"}
      </div>
      <SeparatorLine />
      <div className="dos-cyan text-sm">
        {language === "ko"
          ? "클릭하거나 'PROJECTS <이름>' 입력시 상세 정보 표시"
          : "Click or type 'PROJECTS <name>' for details"}
      </div>

      <div className="mt-3 space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="space-y-1 cursor-pointer border border-transparent hover:border-dos-cyan p-2 -mx-2 transition-colors"
            onClick={() => onSelectProject?.(project.id)}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2">
              <div className="flex items-center gap-2">
                <span className="dos-cyan">→</span>
                <span className="dos-highlight font-bold">{project.name}</span>
              </div>
              <span className="dos-yellow text-sm ml-5 sm:ml-0">({project.id})</span>
            </div>
            <div className="dos-highlight text-sm sm:text-base ml-5">{project.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface ProjectDetailSectionProps {
  projectId: string;
  onBack?: () => void;
}

export function ProjectDetailSection({ projectId, onBack }: ProjectDetailSectionProps) {
  const { language } = useLanguageContext();
  const { projects } = useContentContext();

  const project = projects.find(
    (p) => p.id.toLowerCase() === projectId.toLowerCase()
  );

  if (!project) {
    return (
      <div className="dos-red">
        {language === "ko"
          ? `프로젝트를 찾을 수 없습니다: ${projectId}`
          : `Project not found: ${projectId}`}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <SeparatorLine />
      <div className="dos-highlight text-base sm:text-lg font-bold">{project.name}</div>
      <div className="dos-cyan text-sm sm:text-base">{project.role}</div>
      <SeparatorLine />

      <div className="dos-highlight text-sm sm:text-base mt-2">{project.description}</div>

      <div className="mt-4">
        <div className="dos-yellow font-bold">
          {language === "ko" ? "[기술 스택]" : "[Tech Stack]"}
        </div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="bg-dos-cyan text-dos-bg px-1.5 py-0.5 text-sm font-bold"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <div className="dos-yellow font-bold">
          {language === "ko" ? "[주요 성과]" : "[Highlights]"}
        </div>
        <div className="space-y-1.5 mt-2">
          {project.highlights.map((highlight, i) => (
            <div key={i} className="flex dos-highlight text-sm sm:text-base leading-relaxed">
              <span className="shrink-0 mr-2">•</span>
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {project.links && Object.keys(project.links).length > 0 && (
        <div className="mt-4">
          <div className="dos-yellow font-bold">
            {language === "ko" ? "[링크]" : "[Links]"}
          </div>
          <div className="space-y-1.5 mt-2">
            {project.links.github && (
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <span className="dos-cyan font-bold">GitHub:</span>
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dos-green hover:underline break-all"
                >
                  {project.links.github}
                </a>
              </div>
            )}
            {project.links.demo && (
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <span className="dos-cyan font-bold">Demo:</span>
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dos-green hover:underline break-all"
                >
                  {project.links.demo}
                </a>
              </div>
            )}
            {project.links.blog && (
              <div className="flex flex-col sm:flex-row sm:gap-2">
                <span className="dos-cyan font-bold">Blog:</span>
                <a
                  href={project.links.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dos-green hover:underline break-all"
                >
                  {project.links.blog}
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {onBack && (
        <div className="mt-6 pt-4 border-t border-dos-border">
          <button
            onClick={onBack}
            className="px-3 py-1.5 border border-dos-border bg-dos-bg dos-cyan hover:bg-dos-cyan hover:text-dos-bg transition-colors text-sm"
          >
            {language === "ko" ? "[← 목록으로]" : "[← Back to List]"}
          </button>
        </div>
      )}
    </div>
  );
}
