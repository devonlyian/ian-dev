"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { services } from "@/lib/portfolio-data";

export function Services() {
  const { text } = useLanguage();

  return (
    <section id="services" className="px-6 py-16 md:px-12 md:py-[6.45rem] lg:px-[5.4rem]">
      <h2 className="section-heading mb-20 max-w-xl text-foreground">
        How I can help you build.
      </h2>
      <div className="grid border-b border-border">
        {services.map((service, index) => (
          <article key={service.title} className="grid gap-8 border-t border-border py-14 md:grid-cols-[4rem_0.9fr_1fr] md:items-start">
            <span className="font-serif text-sm italic text-muted-foreground/40 tabular-nums">
              {(index + 1).toString().padStart(2, "0")}
            </span>
            <h3 className="text-3xl font-black uppercase leading-[0.95] tracking-[-0.045em] text-foreground md:text-5xl">
              {service.title}
            </h3>
            <div>
              <p className="mb-8 text-xl font-medium leading-relaxed text-muted-foreground">
                {text.services[service.title] ?? service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.stack.map((item) => (
                  <span key={item} className="rounded-full border border-border px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
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
