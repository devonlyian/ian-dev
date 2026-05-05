"use client";

import { Github, Mail } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { portfolio } from "@/lib/portfolio-data";

export function Contact() {
  const mailto = `mailto:${portfolio.owner.email}?subject=Project inquiry from portfolio`;
  const { text } = useLanguage();

  return (
    <section id="contact" className="relative min-h-[39rem] overflow-hidden px-6 pb-8 pt-16 md:px-12 md:pb-[3.25rem] md:pt-[6.45rem] lg:px-[5.4rem]">
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <h2 className="display-xl mx-auto max-w-4xl text-balance text-foreground">{portfolio.contact.title}</h2>
        <p className="mx-auto mt-8 max-w-2xl text-xl font-medium leading-relaxed text-muted-foreground md:text-2xl">
          {text.contact.body}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={mailto}
            className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-black text-[#0A0A0A] transition-transform hover:-translate-y-0.5"
            data-cursor="link"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Send an Email
          </a>
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-black text-foreground transition-colors hover:border-brand hover:text-brand"
            onClick={() => {
              navigator.clipboard.writeText(portfolio.owner.email);
              toast.success(text.contact.copied);
            }}
            data-cursor="link"
          >
            Copy Email
          </button>
        </div>
        <div className="mt-16 flex flex-wrap justify-center gap-5 text-sm font-bold text-muted-foreground">
          <a href={portfolio.owner.github} className="inline-flex items-center gap-2 hover:text-foreground" data-cursor="link">
            <Github className="h-4 w-4" aria-hidden="true" />
            GitHub
          </a>
          <a href={mailto} className="inline-flex items-center gap-2 hover:text-foreground" data-cursor="link">
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email
          </a>
        </div>
        <p className="mt-12 text-xs font-medium text-muted-foreground/60">© 2026 {portfolio.owner.name}</p>
      </div>
    </section>
  );
}
