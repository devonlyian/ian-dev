"use client";

import { forwardRef, ReactNode } from "react";
import { useLanguageContext } from "@/contexts/LanguageContext";
import { useContentContext } from "@/contexts/ContentContext";

// Parse markdown bold (**text**) to <strong> elements
function parseMarkdown(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

const PrintableResume = forwardRef<HTMLDivElement>((_, ref) => {
  const { language } = useLanguageContext();
  const { profile, contacts, skills, careers, projects } = useContentContext();

  return (
    <div
      ref={ref}
      className="print-only bg-white text-gray-900 max-w-[210mm] mx-auto font-sans"
      style={{
        fontSize: "10pt",
        lineHeight: "1.5",
      }}
    >
      {/* Header - 3-column layout with photo */}
      <header className="pb-4 mb-4 border-b-2 border-gray-800">
        <div className="flex justify-between items-start gap-4">
          {/* Left: Profile Photo */}
          <img
            src="/profile-photo.jpg"
            alt="Profile Photo"
            className="w-24 h-24 object-cover flex-shrink-0"
          />

          {/* Center: Name, Title */}
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
              {profile.name}
            </h1>
            {profile.nameKo && (
              <p className="text-base text-gray-600 mt-0.5">{profile.nameKo}</p>
            )}
            <p className="text-lg text-gray-700 mt-1">{profile.title}</p>
          </div>

          {/* Right: Contact Info */}
          <div className="text-right text-sm text-gray-600 space-y-0.5">
            <p>{profile.email}</p>
            <p>{profile.location}</p>
            <p>{profile.github.replace("https://", "")}</p>
            <p>ianonly.dev</p>
          </div>
        </div>
      </header>

      {/* Summary */}
      <section className="mb-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700 mb-2 border-b border-gray-300 pb-1">
          {language === "ko" ? "핵심 역량" : "PROFESSIONAL SUMMARY"}
        </h2>
        <ul className="text-sm space-y-1 pl-4">
          {profile.summary.map((item, i) => (
            <li key={i} className="list-disc">
              {parseMarkdown(item)}
            </li>
          ))}
        </ul>
      </section>

      {/* Experience */}
      <section className="mb-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700 mb-2 border-b border-gray-300 pb-1">
          {language === "ko" ? "경력 사항" : "PROFESSIONAL EXPERIENCE"}
        </h2>
        {careers.map((career, i) => (
          <div key={i} className="mb-3">
            <div className="flex justify-between items-baseline">
              <div>
                <span className="font-bold">{career.company}</span>
                <span className="text-gray-500 mx-2">|</span>
                <span className="text-gray-700">{career.position}</span>
              </div>
              <span className="text-sm text-gray-500 whitespace-nowrap">
                {career.period}
              </span>
            </div>
            <ul className="text-sm mt-1.5 pl-4 space-y-0.5">
              {career.description.map((desc, j) => (
                <li key={j} className="list-disc text-gray-700">
                  {parseMarkdown(desc)}
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-500 mt-1 pl-4">
              <span className="font-medium">Tech:</span>{" "}
              {career.techStack.join(", ")}
            </p>
          </div>
        ))}
      </section>

      {/* Skills - 2-column grid */}
      <section className="mb-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700 mb-2 border-b border-gray-300 pb-1">
          {language === "ko" ? "기술 스택" : "TECHNICAL SKILLS"}
        </h2>
        <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm">
          {skills.map((category) => (
            <div key={category.category} className="flex">
              <span className="font-medium text-gray-700 min-w-[100px]">
                {category.category}:
              </span>
              <span className="text-gray-600">
                {category.items.map((s) => s.name).join(", ")}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700 mb-2 border-b border-gray-300 pb-1">
          {language === "ko" ? "프로젝트" : "PROJECTS"}
        </h2>
        {projects.map((project) => (
          <div key={project.id} className="mb-3">
            <div className="flex items-baseline gap-2">
              <span className="font-bold text-sm">{project.name}</span>
              <span className="text-xs text-gray-500">{project.role}</span>
            </div>
            <p className="text-sm text-gray-700 mt-0.5">{parseMarkdown(project.description)}</p>
            {project.highlights && project.highlights.length > 0 && (
              <ul className="text-xs text-gray-600 mt-1 pl-4 space-y-0.5">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="list-disc">{parseMarkdown(highlight)}</li>
                ))}
              </ul>
            )}
            <p className="text-xs text-gray-500 mt-1">
              {project.techStack.join(", ")}
            </p>
          </div>
        ))}
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700 mb-2 border-b border-gray-300 pb-1">
          {language === "ko" ? "연락처" : "CONTACT"}
        </h2>
        <div className="flex flex-wrap gap-4 text-sm">
          {contacts.filter((contact) => contact.type !== "github").map((contact) => (
            <span key={contact.type}>
              <span className="font-medium">{contact.label}:</span>{" "}
              {contact.value}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
});

PrintableResume.displayName = "PrintableResume";

export default PrintableResume;
