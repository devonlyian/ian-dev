"use client";

import { X } from "lucide-react";
import { navigationSections, portfolio } from "@/lib/portfolio-data";

type MenuOverlayProps = {
  open: boolean;
  onClose: () => void;
};

export function MenuOverlay({ open, onClose }: MenuOverlayProps) {
  return (
    <div
      className={`fixed inset-0 z-[200] transition-[opacity,visibility] duration-300 ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
      aria-hidden={!open}
    >
      <button
        type="button"
        className="absolute inset-0 bg-[#0A0A0A]/80"
        aria-label="Close menu backdrop"
        onClick={onClose}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`absolute bottom-0 right-0 top-0 flex w-full transform-gpu flex-col overflow-hidden border-l border-border bg-background transition-transform duration-500 sm:w-[90vw] md:w-[50vw] lg:w-[44vw] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-6 py-5 sm:px-8 sm:py-6">
          <button
            type="button"
            aria-label="Close menu"
            className="flex min-h-11 items-center gap-2.5 rounded px-3 py-2 text-muted-foreground transition-colors hover:text-foreground"
            onClick={onClose}
            data-cursor="link"
          >
            <X className="h-5 w-5" aria-hidden="true" />
            <span className="text-[11px] font-medium uppercase tracking-[0.3em]">Close</span>
          </button>
          <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-muted-foreground/40">
            Menu
          </span>
        </div>

        <nav className="flex flex-1 flex-col justify-center gap-2 overflow-hidden px-6 pb-4 pt-6 sm:px-8 sm:gap-0" aria-label="Main navigation">
          {navigationSections.slice(1).map((section) => (
            <div key={section.id} className="nav-item-wrapper">
              <div className="mb-0.5 h-px w-full origin-left bg-border" aria-hidden="true" />
              <a
                href={`/#${section.id}`}
                className="group relative block overflow-hidden whitespace-nowrap text-[clamp(2rem,5vw,4.5rem)] font-black uppercase leading-[0.85] tracking-tighter"
                onClick={onClose}
                data-cursor="link"
              >
                <span>{section.label}</span>
                <span className="absolute right-0 top-2 text-[11px] font-medium tracking-widest opacity-40 tabular-nums">
                  {section.index}
                </span>
              </a>
            </div>
          ))}
          <div className="mt-0.5 h-px w-full bg-border" aria-hidden="true" />
        </nav>

        <div className="flex flex-col gap-4 border-t border-border px-6 py-5 sm:px-8">
          <div className="flex flex-wrap gap-x-4 gap-y-2 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
            <a href={`mailto:${portfolio.owner.email}`} className="hover:text-foreground" data-cursor="link">
              Email
            </a>
            <a href={portfolio.owner.github} className="hover:text-foreground" data-cursor="link">
              GitHub
            </a>
            <a href={portfolio.owner.linkedin} className="hover:text-foreground" data-cursor="link">
              LinkedIn
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}
