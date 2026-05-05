import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";
import { LocalizedProjectCopy, ProjectHighlights } from "@/components/projects/ProjectLocalizedText";
import type { Project } from "@/lib/portfolio-data";
import { getProjectDescription } from "@/lib/projects";

type ProjectDetailProps = {
  project: Project;
  adjacent: {
    previous: Project | undefined;
    next: Project | undefined;
  };
};

export function ProjectDetail({ project, adjacent }: ProjectDetailProps) {
  const heroScreenshot = project.screenshots.find((screenshot) => typeof screenshot !== "string" && screenshot.src);
  const description = getProjectDescription(project);
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
        className="relative grid min-h-[auto] items-start gap-7 overflow-hidden px-5 pb-8 pt-20 md:min-h-screen md:grid-cols-[1fr_0.78fr] md:items-center md:gap-12 md:px-12 md:pb-16 md:pt-28 lg:px-20"
      >
        <div>
          <div className="mb-6 flex flex-wrap items-center gap-3 text-[10px] font-black uppercase tracking-[0.22em] text-brand md:mb-10 md:gap-4 md:text-[11px] md:tracking-[0.35em]">
            <span className="h-px w-7 bg-brand md:w-9" aria-hidden="true" />
            <span>{project.eyebrow}</span>
            <span>·</span>
            <span>{project.year}</span>
          </div>
          <h1 className="text-balance text-[clamp(1.95rem,8vw,2.8rem)] font-black leading-[1.04] tracking-[-0.01em] text-foreground md:text-[clamp(5rem,8vw,8rem)] md:leading-[0.9] md:tracking-[-0.065em]">
            {project.title}
          </h1>
          <p className="mt-5 max-w-3xl font-serif text-lg italic leading-snug text-muted-foreground md:mt-8 md:text-3xl">
            <LocalizedProjectCopy slug={project.slug} fallback={project.tagline} kind="tagline" />
          </p>
          <div className="mt-7 flex flex-wrap gap-2 md:mt-10 md:gap-3">
            {links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-black transition-colors md:px-6 md:py-3 md:text-sm ${
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
          <div className="mt-7 flex flex-wrap gap-2 md:mt-12">
            {project.tags.map((tag, index) => (
              <span
                key={tag}
                className={`items-center gap-2 rounded-full border border-border px-2.5 py-1 text-[9px] font-black uppercase tracking-widest text-muted-foreground md:inline-flex md:px-3 md:py-1.5 md:text-[10px] ${
                  index < 4 ? "inline-flex" : "hidden"
                }`}
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
              <Image
                src={heroScreenshot.src}
                alt={heroScreenshot.alt}
                width={heroScreenshot.width}
                height={heroScreenshot.height}
                priority
                className="h-full w-full object-cover"
              />
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

      <section className="relative mx-auto grid max-w-[90rem] gap-8 px-5 py-10 md:grid-cols-[0.35fr_1fr] md:gap-14 md:px-12 md:py-24 lg:px-20">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-muted-foreground md:sticky md:top-28 md:text-[11px] md:tracking-[0.35em]">Project Details</p>
        </div>
        <div className="grid gap-10">
          <article className="border-t border-border pt-8">
            <span className="mb-4 block text-sm font-black text-brand tabular-nums">01</span>
            <h2 className="mb-4 text-3xl font-black tracking-tight text-foreground md:text-5xl">Overview</h2>
            <p className="max-w-4xl text-lg font-medium leading-relaxed text-muted-foreground md:text-xl">
              <LocalizedProjectCopy slug={project.slug} fallback={description} kind="description" />
            </p>
          </article>
          <article className="border-t border-border pt-8">
            <span className="mb-4 block text-sm font-black text-brand tabular-nums">02</span>
            <h2 className="mb-8 text-3xl font-black tracking-tight text-foreground md:text-5xl">Highlights</h2>
            <ProjectHighlights slug={project.slug} highlights={project.highlights} />
          </article>
        </div>
      </section>

      {project.screenshots.length > 0 ? (
        <section className="border-y border-border bg-card/30 px-5 py-14 md:px-12 md:py-24 lg:px-20">
          <p className="mb-8 text-[11px] font-black uppercase tracking-[0.35em] text-muted-foreground">Screenshots</p>
          <div className="grid gap-5 md:grid-cols-3">
            {project.screenshots.map((screenshot, index) => {
              const label = typeof screenshot === "string" ? screenshot : screenshot.label;

              return (
                <div key={label} className="overflow-hidden rounded-[1.35rem] border border-border bg-background p-3 shadow-soft md:rounded-[2rem] md:p-4">
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
                    <div className="relative aspect-[600/1299] overflow-hidden rounded-[1rem] bg-[#111] md:rounded-[1.45rem]">
                      <Image
                        src={screenshot.src}
                        alt={screenshot.alt}
                        width={screenshot.width}
                        height={screenshot.height}
                        loading="lazy"
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      ) : null}

      {project.results?.length ? (
        <section className="px-5 py-16 md:px-12 md:py-28 lg:px-20">
          <p className="mb-8 text-[11px] font-black uppercase tracking-[0.35em] text-muted-foreground">Results</p>
          <div className="grid gap-4 md:grid-cols-3">
            {project.results.map((result) => (
              <div key={result.label} className="rounded-2xl border border-border p-6 md:rounded-3xl md:p-8">
                <p className="text-4xl font-black tracking-tight text-foreground md:text-7xl">{result.value}</p>
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
            className="flex min-h-40 items-center gap-4 border-b border-border p-6 opacity-80 transition-colors hover:bg-card/40 md:min-h-56 md:gap-6 md:border-b-0 md:border-r md:p-12 lg:p-16"
            data-cursor="link"
          >
            <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-muted-foreground">Previous</p>
              <h2 className="mt-2 text-2xl font-black text-foreground md:text-3xl">{adjacent.previous.title}</h2>
              <p className="mt-2 text-sm font-bold text-muted-foreground">
                <LocalizedProjectCopy slug={adjacent.previous.slug} fallback={adjacent.previous.tagline} kind="tagline" />
              </p>
            </div>
          </Link>
        ) : (
          <Link href="/projects" className="flex min-h-40 items-center gap-4 border-b border-border p-6 opacity-60 md:min-h-56 md:gap-6 md:border-b-0 md:border-r md:p-12 lg:p-16">
            <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-muted-foreground">Back to</p>
              <h2 className="mt-2 text-2xl font-black text-foreground md:text-3xl">All Projects</h2>
            </div>
          </Link>
        )}

        {adjacent.next ? (
          <Link
            href={`/projects/${adjacent.next.slug}`}
            className="flex min-h-40 items-center justify-end gap-4 p-6 text-right transition-colors hover:bg-card/40 md:min-h-56 md:gap-6 md:p-12 lg:p-16"
            data-cursor="link"
          >
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-muted-foreground">Next</p>
              <h2 className="mt-2 text-2xl font-black text-foreground md:text-3xl">{adjacent.next.title}</h2>
              <p className="mt-2 text-sm font-bold text-muted-foreground">
                <LocalizedProjectCopy slug={adjacent.next.slug} fallback={adjacent.next.tagline} kind="tagline" />
              </p>
            </div>
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        ) : (
          <Link href="/projects" className="flex min-h-40 items-center justify-end gap-4 p-6 text-right opacity-60 md:min-h-56 md:gap-6 md:p-12 lg:p-16">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-muted-foreground">Back to</p>
              <h2 className="mt-2 text-2xl font-black text-foreground md:text-3xl">All Projects</h2>
            </div>
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        )}
      </section>
    </main>
  );
}
