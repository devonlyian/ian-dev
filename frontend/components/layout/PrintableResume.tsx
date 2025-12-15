"use client";

import { forwardRef } from "react";
import { useLanguageContext } from "@/contexts/LanguageContext";
import { useContentContext } from "@/contexts/ContentContext";

const PrintableResume = forwardRef<HTMLDivElement>((_, ref) => {
  const { language } = useLanguageContext();
  const { profile, contacts, skills, careers, projects } = useContentContext();

    return (
      <div
        ref={ref}
        className="print-only bg-white text-black p-8 max-w-[210mm] mx-auto"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        {/* Header */}
        <header className="border-b-2 border-black pb-4 mb-6">
          <h1 className="text-3xl font-bold">{profile.name}</h1>
          {profile.nameKo && (
            <p className="text-lg text-gray-600">{profile.nameKo}</p>
          )}
          <p className="text-xl text-gray-700">{profile.title}</p>
          <div className="flex flex-wrap gap-4 mt-2 text-sm">
            <span>{profile.location}</span>
            <span>{profile.email}</span>
            <span>{profile.github.replace("https://", "")}</span>
          </div>
        </header>

        {/* Summary */}
        <section className="mb-6">
          <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">
            {language === "ko" ? "요약" : "SUMMARY"}
          </h2>
          <ul className="list-disc list-inside space-y-1">
            {profile.summary.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Experience */}
        <section className="mb-6">
          <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">
            {language === "ko" ? "경력" : "EXPERIENCE"}
          </h2>
          {careers.map((career, i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold">{career.company}</h3>
                  <p className="text-gray-600">{career.position}</p>
                </div>
                <span className="text-sm text-gray-500">{career.period}</span>
              </div>
              <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                {career.description.map((desc, j) => (
                  <li key={j}>{desc}</li>
                ))}
              </ul>
              <p className="text-xs text-gray-500 mt-1">
                {career.techStack.join(" • ")}
              </p>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">
            {language === "ko" ? "기술" : "SKILLS"}
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((category) => (
              <div key={category.category}>
                <h3 className="font-bold text-sm">{category.category}</h3>
                <p className="text-sm">
                  {category.items.map((s) => s.name).join(", ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-6">
          <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">
            {language === "ko" ? "프로젝트" : "PROJECTS"}
          </h2>
          {projects.map((project) => (
            <div key={project.id} className="mb-3">
              <h3 className="font-bold">
                {project.name}{" "}
                <span className="font-normal text-sm text-gray-500">
                  - {project.role}
                </span>
              </h3>
              <p className="text-sm">{project.description}</p>
              <p className="text-xs text-gray-500">
                {project.techStack.join(" • ")}
              </p>
            </div>
          ))}
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-xl font-bold border-b border-gray-300 pb-1 mb-3">
            {language === "ko" ? "연락처" : "CONTACT"}
          </h2>
          <div className="flex flex-wrap gap-4 text-sm">
            {contacts.map((contact) => (
              <span key={contact.type}>
                <strong>{contact.label}:</strong> {contact.value}
              </span>
            ))}
          </div>
        </section>
      </div>
    );
  }
);

PrintableResume.displayName = "PrintableResume";

export default PrintableResume;
