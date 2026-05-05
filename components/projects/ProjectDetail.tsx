"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Project } from "@/lib/portfolio-data";

type ProjectDetailProps = {
  project: Project;
  adjacent: {
    previous: Project | undefined;
    next: Project | undefined;
  };
};

function parseHighlight(highlight: string) {
  const match = highlight.match(/^\*\*(.+?)\*\*:\s*(.+)$/);

  if (!match) {
    return { label: "", body: highlight };
  }

  return { label: match[1], body: match[2] };
}

export function ProjectDetail({ project, adjacent }: ProjectDetailProps) {
  const { text } = useLanguage();
  const localizedDescription = text.projects.descriptions[project.slug] ?? project.description;
  const localizedHighlights = text.projects.highlights[project.slug] ?? project.highlights;
  const heroScreenshot = project.screenshots.find((screenshot) => typeof screenshot !== "string" && screenshot.src);
  const links =
    project.links ??
    [
      project.liveUrl ? { label: "View Live", url: project.liveUrl } : null,
      project.githubUrl ? { label: "GitHub", url: project.githubUrl } : null,
    ].filter((link): link is { label: string; url: string } => Boolean(link));

  return (
    <main>
      <section
        id="project-hero"
        className="relative grid min-h-screen items-center gap-12 overflow-hidden px-6 pb-16 pt-28 md:grid-cols-[1fr_0.78fr] md:px-12 lg:px-20"
      >
        <div>
          <div className="mb-10 flex flex-wrap items-center gap-4 text-[11px] font-black uppercase tracking-[0.35em] text-brand">
            <span className="h-px w-9 bg-brand" aria-hidden="true" />
            <span>{project.eyebrow}</span>
            <span>·</span>
            <span>{project.year}</span>
          </div>
          <h1 className="text-[clamp(5rem,8vw,8rem)] font-black leading-[0.9] tracking-[-0.065em] text-foreground">
            {project.title}
          </h1>
          <p className="mt-8 max-w-3xl font-serif text-2xl italic leading-snug text-muted-foreground md:text-3xl">
            {text.projects.taglines[project.slug] ?? project.tagline}
          </p>
          <p className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-muted-foreground md:text-xl">
            {localizedDescription}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                className={`inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-black transition-colors ${
                  link.label === "App Store"
                    ? "bg-brand text-[#0A0A0A] hover:bg-brand-light"
                    : "border border-border text-foreground hover:border-foreground"
                }`}
                data-cursor="link"
              >
                {link.label}
                {link.label === "GitHub" ? (
                  <Github className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                )}
              </a>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-[10px] font-black uppercase tracking-widest text-muted-foreground"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand" aria-hidden="true" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="relative hidden min-h-[28rem] items-center justify-center md:flex">
          <div className="absolute h-56 w-72 rounded-full bg-brand/20 blur-3xl" aria-hidden="true" />
          {heroScreenshot && typeof heroScreenshot !== "string" ? (
            <div className="relative h-[34rem] w-[16rem] rotate-[-3deg] overflow-hidden rounded-[2.2rem] border-[10px] border-[#111] bg-[#111] shadow-[0_42px_90px_rgba(0,0,0,0.22)]">
              <img src={heroScreenshot.src} alt={heroScreenshot.alt} className="h-full w-full object-cover" />
            </div>
          ) : (
            <div className="relative h-80 w-[31rem] rotate-[-3deg] overflow-hidden rounded-2xl border border-[#ffffff22] bg-[#111] shadow-[0_42px_90px_rgba(0,0,0,0.22)]">
              <div className="flex h-12 items-center gap-2 bg-[#151515] px-5">
                <span className="h-3 w-3 rounded-full bg-red-500" />
                <span className="h-3 w-3 rounded-full bg-yellow-500" />
                <span className="h-3 w-3 rounded-full bg-green-500" />
                <div className="ml-5 h-5 flex-1 rounded bg-white/5" />
              </div>
              <div className="h-full bg-gradient-to-br from-sky-950 via-slate-950 to-orange-950 p-8">
                <div className="mb-8 h-4 w-72 rounded bg-white/10" />
                <div className="mb-4 h-3 w-56 rounded bg-white/10" />
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-16 rounded-xl bg-white/10" />
                  <div className="h-16 rounded-xl bg-white/10" />
                  <div className="h-16 rounded-xl bg-white/10" />
                </div>
                <div className="mt-8 h-3 w-80 rounded bg-white/10" />
                <div className="mt-4 h-3 w-56 rounded bg-white/10" />
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="relative mx-auto grid max-w-[90rem] gap-14 px-6 py-24 md:grid-cols-[0.35fr_1fr] md:px-12 lg:px-20">
        <div>
          <p className="sticky top-28 text-[11px] font-black uppercase tracking-[0.35em] text-muted-foreground">Project Details</p>
        </div>
        <div className="grid gap-10">
          <article className="border-t border-border pt-8">
            <span className="mb-4 block text-sm font-black text-brand tabular-nums">01</span>
            <h2 className="mb-4 text-3xl font-black tracking-tight text-foreground md:text-5xl">Overview</h2>
            <p className="max-w-4xl text-xl font-medium leading-relaxed text-muted-foreground">{localizedDescription}</p>
          </article>
          <article className="border-t border-border pt-8">
            <span className="mb-4 block text-sm font-black text-brand tabular-nums">02</span>
            <h2 className="mb-8 text-3xl font-black tracking-tight text-foreground md:text-5xl">Highlights</h2>
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
          </article>
        </div>
      </section>

      {project.screenshots.length > 0 ? (
        <section className="border-y border-border bg-card/30 px-6 py-24 md:px-12 lg:px-20">
          <p className="mb-8 text-[11px] font-black uppercase tracking-[0.35em] text-muted-foreground">Screenshots</p>
          <div className="grid gap-5 md:grid-cols-3">
            {project.screenshots.map((screenshot, index) => {
              const label = typeof screenshot === "string" ? screenshot : screenshot.label;

              return (
                <div key={label} className="overflow-hidden rounded-[2rem] border border-border bg-background p-4 shadow-soft">
                  {typeof screenshot === "string" ? (
                    <div className="flex aspect-[4/3] flex-col justify-between rounded-2xl bg-card p-6">
                      <span className="text-sm font-black text-muted-foreground/50 tabular-nums">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                      <div>
                        <div className="mb-4 h-2 w-24 rounded-full bg-brand" />
                        <p className="text-2xl font-black tracking-tight text-foreground">{label}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="relative aspect-[600/1299] overflow-hidden rounded-[1.45rem] bg-[#111]">
                      <img src={screenshot.src} alt={screenshot.alt} loading="lazy" className="h-full w-full object-cover" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      ) : null}

      {project.results?.length ? (
        <section className="px-6 py-28 md:px-12 lg:px-20">
          <p className="mb-8 text-[11px] font-black uppercase tracking-[0.35em] text-muted-foreground">Results</p>
          <div className="grid gap-4 md:grid-cols-3">
            {project.results.map((result) => (
              <div key={result.label} className="rounded-3xl border border-border p-8">
                <p className="text-5xl font-black tracking-tight text-foreground md:text-7xl">{result.value}</p>
                <p className="mt-4 text-sm font-black uppercase tracking-widest text-muted-foreground">{result.label}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="grid border-t border-border md:grid-cols-2">
        {adjacent.previous ? (
          <Link
            href={`/projects/${adjacent.previous.slug}`}
            className="flex min-h-56 items-center gap-6 border-b border-border p-8 opacity-80 transition-colors hover:bg-card/40 md:border-b-0 md:border-r md:p-12 lg:p-16"
            data-cursor="link"
          >
            <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-muted-foreground">Previous</p>
              <h2 className="mt-2 text-3xl font-black text-foreground">{adjacent.previous.title}</h2>
              <p className="mt-2 text-sm font-bold text-muted-foreground">
                {text.projects.taglines[adjacent.previous.slug] ?? adjacent.previous.tagline}
              </p>
            </div>
          </Link>
        ) : (
          <Link href="/projects" className="flex min-h-56 items-center gap-6 border-b border-border p-8 opacity-60 md:border-b-0 md:border-r md:p-12 lg:p-16">
            <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-muted-foreground">Back to</p>
              <h2 className="mt-2 text-3xl font-black text-foreground">All Projects</h2>
            </div>
          </Link>
        )}

        {adjacent.next ? (
          <Link
            href={`/projects/${adjacent.next.slug}`}
            className="flex min-h-56 items-center justify-end gap-6 p-8 text-right transition-colors hover:bg-card/40 md:p-12 lg:p-16"
            data-cursor="link"
          >
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-muted-foreground">Next</p>
              <h2 className="mt-2 text-3xl font-black text-foreground">{adjacent.next.title}</h2>
              <p className="mt-2 text-sm font-bold text-muted-foreground">
                {text.projects.taglines[adjacent.next.slug] ?? adjacent.next.tagline}
              </p>
            </div>
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        ) : (
          <Link href="/projects" className="flex min-h-56 items-center justify-end gap-6 p-8 text-right opacity-60 md:p-12 lg:p-16">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-muted-foreground">Back to</p>
              <h2 className="mt-2 text-3xl font-black text-foreground">All Projects</h2>
            </div>
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        )}
      </section>
    </main>
  );
}
