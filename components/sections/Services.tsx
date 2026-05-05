"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { services } from "@/lib/portfolio-data";

export function Services() {
  const { text } = useLanguage();
  const [pinnedTitle, setPinnedTitle] = useState(services[0]?.title ?? "");
  const [hoverTitle, setHoverTitle] = useState("");
  const activeTitle = hoverTitle || pinnedTitle;

  return (
    <section id="services" className="px-6 py-16 md:px-12 md:py-[6.45rem] lg:px-[5.4rem]">
      <h2 className="section-heading mb-20 max-w-xl text-foreground">
        How I can help you build.
      </h2>
      <div className="grid border-b border-border">
        {services.map((service, index) => {
          const panelId = `service-panel-${service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
          const isOpen = activeTitle === service.title;
          const isPinned = pinnedTitle === service.title;

          return (
            <article
              key={service.title}
              className="border-t border-border"
              onMouseEnter={() => setHoverTitle(service.title)}
              onMouseLeave={() => setHoverTitle("")}
            >
              <button
                type="button"
                className="group grid w-full min-h-36 grid-cols-[1fr_auto] gap-x-6 gap-y-5 py-10 text-left transition-colors hover:bg-card/30 md:grid-cols-[4rem_0.9fr_1fr_auto] md:items-start md:py-14"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => {
                  setPinnedTitle(isPinned ? "" : service.title);
                  if (isPinned) {
                    setHoverTitle("");
                  }
                }}
                data-cursor="link"
              >
                <span className="col-span-2 font-serif text-sm italic text-muted-foreground/40 tabular-nums md:col-span-1">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <span
                  className={`col-start-1 row-start-2 text-3xl font-black uppercase leading-[0.95] tracking-[-0.045em] transition-colors md:col-start-auto md:row-start-auto md:text-5xl ${
                    isOpen ? "text-brand" : "text-foreground group-hover:text-brand"
                  }`}
                >
                  {service.title}
                </span>
                <span
                  id={panelId}
                  aria-hidden={!isOpen}
                  className={`col-span-2 row-start-3 block overflow-hidden transition-[max-height,opacity,transform] duration-500 ease-out md:col-span-1 md:row-start-auto ${
                    isOpen ? "max-h-96 translate-y-0 opacity-100" : "max-h-0 -translate-y-2 opacity-0"
                  }`}
                >
                  <span className="mb-8 block text-xl font-medium leading-relaxed text-muted-foreground">
                    {text.services[service.title] ?? service.description}
                  </span>
                  <span className="flex flex-wrap gap-2">
                    {service.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border bg-background px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </span>
                </span>
                <span
                  className={`col-start-2 row-start-2 flex h-12 w-12 items-center justify-center rounded-full border text-foreground transition-all md:col-start-auto md:row-start-auto ${
                    isOpen
                      ? "border-brand bg-brand text-[#0A0A0A]"
                      : "border-border group-hover:border-brand group-hover:bg-brand group-hover:text-[#0A0A0A]"
                  }`}
                >
                  <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                </span>
              </button>
            </article>
          );
        })}
      </div>
    </section>
  );
}
