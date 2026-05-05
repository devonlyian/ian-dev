"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronDown, Github } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getFeaturedProjects, getProjectDescription } from "@/lib/projects";

export function Projects() {
  const featuredProjects = getFeaturedProjects();
  const { text } = useLanguage();
  const defaultSlug = featuredProjects[0]?.slug ?? "";
  const [selectedSlug, setSelectedSlug] = useState(defaultSlug);
  const [hoverSlug, setHoverSlug] = useState("");
  const activeSlug = hoverSlug || selectedSlug || defaultSlug;

  return (
    <section id="projects" className="overflow-hidden px-6 py-16 md:px-12 md:py-24 lg:px-20">
      <div className="mx-auto max-w-[90rem]">
        <div className="mb-20 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <h2 className="section-heading text-foreground">Stuff I built.</h2>
        </div>

        <div className="border-t border-border">
        {featuredProjects.map((project, index) => {
          const isOpen = activeSlug === project.slug;

          return (
            <article
              key={project.slug}
              className="border-b border-border"
              onMouseEnter={() => setHoverSlug(project.slug)}
              onMouseLeave={() => setHoverSlug("")}
            >
              <button
                type="button"
                className="group grid w-full min-h-36 gap-5 py-8 text-left transition-colors hover:bg-card/30 md:min-h-44 md:grid-cols-[3.5rem_1fr_auto_auto] md:items-center md:py-16"
                aria-expanded={isOpen}
                aria-controls={`project-panel-${project.slug}`}
                onClick={() => setSelectedSlug(project.slug)}
                data-cursor="link"
              >
                <span className="font-serif text-sm italic text-muted-foreground/40 tabular-nums">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <span>
                  <span
                    className={`block max-w-5xl text-4xl font-black uppercase leading-[0.94] tracking-[-0.045em] transition-colors md:text-7xl ${
                      isOpen ? "text-brand" : "text-foreground group-hover:text-brand"
                    }`}
                  >
                    {project.title}
                  </span>
                </span>
                <span className="text-[11px] font-black uppercase tracking-[0.25em] text-muted-foreground">
                  {project.category.split(" ")[0]}
                </span>
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-full border text-foreground transition-all ${
                    isOpen
                      ? "border-brand bg-brand text-[#0A0A0A]"
                      : "border-border group-hover:border-brand group-hover:bg-brand group-hover:text-[#0A0A0A]"
                  }`}
                >
                  <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                </span>
              </button>

              <div
                id={`project-panel-${project.slug}`}
                className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-500 ease-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="min-h-0">
                  <div className="grid gap-10 pb-14 pl-0 md:grid-cols-[3.5rem_1fr_18rem] md:pb-16">
                    <div className="hidden md:block" />
                    <div>
                      <div className="mb-7 flex flex-wrap items-center gap-3 text-[11px] font-black uppercase tracking-[0.22em] text-brand">
                        <span>{project.eyebrow}</span>
                        <span className="rounded-full border border-brand/30 px-2 py-1 text-[9px]">
                          Featured
                        </span>
                      </div>
                      <p className="max-w-4xl text-lg font-medium leading-relaxed text-muted-foreground md:text-xl">
                        {text.projects.descriptions[project.slug] ?? getProjectDescription(project)}
                      </p>
                      <div className="mt-8 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="border-border md:border-l md:pl-12">
                      <div className="flex flex-col items-start gap-6 text-[11px] font-black uppercase tracking-[0.24em]">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="inline-flex items-center gap-3 text-foreground hover:text-brand"
                          data-cursor="link"
                        >
                          Case Study
                          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                        {project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground"
                            data-cursor="link"
                          >
                            Live Demo
                            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                          </a>
                        ) : null}
                        {project.githubUrl ? (
                          <a
                            href={project.githubUrl}
                            className="inline-flex items-center gap-3 text-muted-foreground hover:text-foreground"
                            data-cursor="link"
                          >
                            Source Code
                            <Github className="h-4 w-4" aria-hidden="true" />
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-bold transition-colors hover:border-brand hover:text-brand"
            data-cursor="link"
          >
            View Full Archive
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
