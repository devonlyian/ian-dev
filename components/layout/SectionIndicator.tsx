"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { navigationSections, type SectionId } from "@/lib/portfolio-data";

function scrollToSection(id: string) {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function SectionIndicator() {
  const [activeId, setActiveId] = useState<SectionId>(navigationSections[0]?.id ?? "hero");
  useEffect(() => {
    const elements = navigationSections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => Boolean(element));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        const nextId = visible?.target.id;

        if (nextId && navigationSections.some((section) => section.id === nextId)) {
          setActiveId(nextId as SectionId);
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.05, 0.2, 0.45, 0.7],
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-5 top-1/2 z-[90] hidden -translate-y-1/2 flex-col items-center gap-3 md:flex"
    >
      <div className="flex flex-col items-center gap-3 rounded-full border border-border bg-card/60 px-2.5 py-4 shadow-soft backdrop-blur-md">
        {navigationSections.map((section) => {
          const isActive = activeId === section.id;

          return (
          <button
            key={section.id}
            type="button"
            aria-current={isActive ? "true" : undefined}
            aria-label={`Go to ${section.label}`}
            className="group relative flex h-5 w-5 items-center justify-center"
            onClick={() => scrollToSection(section.id)}
            data-cursor="link"
          >
            <span
              className={`rounded-full transition-all group-hover:h-3 group-hover:w-3 group-hover:bg-brand ${
                isActive ? "h-3 w-3 bg-brand" : "h-1.5 w-1.5 bg-muted-foreground"
              }`}
            />
            <span className="pointer-events-none absolute right-7 rounded bg-foreground px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-background opacity-0 transition-opacity group-hover:opacity-100">
              {section.label}
            </span>
          </button>
          );
        })}
      </div>
      <button
        type="button"
        aria-label="Back to top"
        className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground backdrop-blur-md transition-colors hover:border-brand hover:text-brand"
        onClick={() => scrollToSection("hero")}
        data-cursor="link"
      >
        <ArrowUp className="h-4 w-4" aria-hidden="true" />
      </button>
    </nav>
  );
}
