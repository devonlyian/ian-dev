"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { projects } from "@/lib/portfolio-data";

export function ProjectArchive() {
  const { text } = useLanguage();

  return (
    <main className="min-h-screen px-6 pb-20 pt-28 md:px-12 lg:px-20">
      <div className="mb-16 flex flex-col gap-8 border-b border-border pb-12 md:flex-row md:items-end md:justify-between">
        <div>
          <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground" data-cursor="link">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {text.projects.archive.backHome}
          </Link>
          <h1 className="display-lg text-foreground">{text.projects.archive.title}</h1>
        </div>
        <p className="max-w-xl text-xl font-medium leading-relaxed text-muted-foreground">
          {text.projects.archive.description}
        </p>
      </div>

      <div>
        {projects.map((project, index) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group flex flex-col gap-4 border-b border-border px-4 py-8 transition-colors hover:bg-card/40 md:flex-row md:items-center md:justify-between md:py-10"
            data-cursor="link"
          >
            <div className="flex items-start gap-8">
              <span className="text-sm font-black text-muted-foreground/40 tabular-nums">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <div>
                <h2 className="text-3xl font-black tracking-tight text-foreground transition-colors group-hover:text-brand md:text-5xl">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm font-bold text-muted-foreground">
                  {text.projects.taglines[project.slug] ?? project.tagline}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6 pl-14 md:pl-0">
              <div className="hidden items-center gap-2 lg:flex">
                {project.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="rounded-full border border-border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all group-hover:-rotate-45 group-hover:border-brand group-hover:bg-brand group-hover:text-[#0A0A0A]">
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
