"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { experiences } from "@/lib/portfolio-data";

export function Experience() {
  const { text } = useLanguage();

  return (
    <section id="experience" className="px-6 py-24 md:px-12 md:py-[8.625rem] lg:px-[5.4rem]">
      <h2 className="section-heading mb-20 max-w-3xl text-foreground">
        My experience with stuff.
      </h2>
      <div className="grid border-b border-border">
        {experiences.map((experience) => (
          <article key={`${experience.period}-${experience.title}`} className="grid gap-8 border-t border-border py-14 md:grid-cols-[0.35fr_1fr]">
            <div className="space-y-2 text-sm font-bold uppercase tracking-widest text-muted-foreground">
              <p>{experience.period}</p>
              <p>{experience.location}</p>
            </div>
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <h3 className="text-2xl font-black tracking-tight text-foreground md:text-4xl">{experience.title}</h3>
                <span className="rounded-full border border-border px-3 py-1 text-[10px] font-black uppercase tracking-widest text-brand">
                  {experience.status}
                </span>
              </div>
              <p className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-muted-foreground">{experience.company}</p>
              <p className="max-w-3xl text-xl font-medium leading-relaxed text-muted-foreground">
                {text.experiences[experience.title] ?? experience.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {experience.stack.map((item) => (
                  <span key={item} className="rounded-full bg-muted px-3 py-1.5 text-xs font-bold text-muted-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
