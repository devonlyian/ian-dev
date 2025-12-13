"use client";

import { useLanguageContext } from "@/contexts/LanguageContext";
import { useContentContext } from "@/contexts/ContentContext";

function Separator() {
  return (
    <div className="dos-yellow overflow-hidden whitespace-nowrap">
      {"═".repeat(60)}
    </div>
  );
}

export default function AboutSection() {
  const { language } = useLanguageContext();
  const { profile } = useContentContext();

  return (
    <div className="space-y-2">
      <Separator />
      <div className="dos-highlight text-base sm:text-lg font-bold">
        {language === "ko" && profile.nameKo ? profile.nameKo : profile.name}
        {language === "en" && profile.nameKo && ` (${profile.nameKo})`}
      </div>
      <div className="dos-cyan text-sm sm:text-base">{profile.title}</div>
      <Separator />
      <div className="space-y-1.5 mt-3">
        {profile.summary.map((line, index) => (
          <div key={index} className="flex dos-highlight text-sm sm:text-base leading-relaxed">
            <span className="shrink-0 mr-2">•</span>
            <span>{line}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 space-y-1.5">
        <div className="flex flex-col sm:flex-row sm:gap-2">
          <span className="dos-cyan font-bold">Location:</span>
          <span className="dos-highlight">{profile.location}</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-2">
          <span className="dos-cyan font-bold">Email:</span>
          <a href={`mailto:${profile.email}`} className="dos-green hover:underline break-all">
            {profile.email}
          </a>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-2">
          <span className="dos-cyan font-bold">GitHub:</span>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="dos-green hover:underline break-all"
          >
            {profile.github.replace("https://", "")}
          </a>
        </div>
      </div>
    </div>
  );
}
