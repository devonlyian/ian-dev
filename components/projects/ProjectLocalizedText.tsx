"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import type { ProjectSlug } from "@/lib/portfolio-data";

type LocalizedProjectCopyProps = {
  slug: ProjectSlug;
  fallback: string;
  className?: string;
  kind: "tagline" | "description";
};

type ProjectHighlightsProps = {
  slug: ProjectSlug;
  highlights: readonly string[];
};

function parseHighlight(highlight: string) {
  const match = highlight.match(/^\*\*(.+?)\*\*:\s*(.+)$/);

  if (!match) {
    return { label: "", body: highlight };
  }

  return { label: match[1], body: match[2] };
}

export function LocalizedProjectCopy({ slug, fallback, className, kind }: LocalizedProjectCopyProps) {
  const { text } = useLanguage();
  const localized = kind === "tagline" ? text.projects.taglines[slug] : text.projects.descriptions[slug];

  return <>{className ? <span className={className}>{localized ?? fallback}</span> : localized ?? fallback}</>;
}

export function ProjectHighlights({ slug, highlights }: ProjectHighlightsProps) {
  const { text } = useLanguage();
  const localizedHighlights = text.projects.highlights[slug] ?? highlights;

  return (
    <div className="grid gap-4">
      {localizedHighlights.map((highlight) => {
        const parsed = parseHighlight(highlight);

        return (
          <div key={highlight} className="rounded-2xl border border-border bg-background/60 p-5">
            {parsed.label ? (
              <p className="mb-2 text-sm font-black uppercase tracking-widest text-brand">{parsed.label}</p>
            ) : null}
            <p className="text-lg font-medium leading-relaxed text-muted-foreground">{parsed.body}</p>
          </div>
        );
      })}
    </div>
  );
}
