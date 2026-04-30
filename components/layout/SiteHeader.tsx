"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { MenuOverlay } from "./MenuOverlay";
import { useLanguage } from "@/contexts/LanguageContext";
import { portfolio } from "@/lib/portfolio-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const { language, toggleLanguage, text } = useLanguage();
  const isProjectDetail = pathname.startsWith("/projects/");

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  const themeLabel = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
  const languageLabel = text.header.switchToKorean;

  const themeButton = (
    <button
      type="button"
      aria-label={themeLabel}
      title={themeLabel}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/70 text-foreground shadow-soft backdrop-blur-md transition-colors hover:border-brand hover:text-brand"
      onClick={toggleTheme}
      data-cursor="link"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
    </button>
  );

  const languageButton = (
    <button
      type="button"
      aria-label={languageLabel}
      title={languageLabel}
      className="flex h-10 min-w-10 items-center justify-center rounded-full border border-border bg-background/70 px-3 text-[11px] font-black uppercase tracking-[0.18em] text-foreground shadow-soft backdrop-blur-md transition-colors hover:border-brand hover:text-brand"
      onClick={toggleLanguage}
      data-cursor="link"
    >
      {language === "en" ? "KO" : "EN"}
    </button>
  );

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-[100] flex items-center justify-between border-b border-transparent bg-transparent px-6 py-5 transition-colors duration-300 md:px-10 lg:px-14">
        {isProjectDetail ? (
          <>
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.35em] text-muted-foreground hover:text-foreground"
              data-cursor="link"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              All Projects
            </Link>
            <div className="flex items-center gap-4">
              {languageButton}
              {themeButton}
              <Link href="/" className="font-black tracking-[-0.08em] text-foreground [font-size:clamp(1.15rem,2.2vw,1.6rem)]" data-cursor="link">
                {portfolio.owner.initials}
                <span className="text-brand">.</span>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="magnetic inline-flex" data-cursor="link">
              <Link href="/" className="flex flex-col leading-none" aria-label={`${portfolio.owner.name} home`}>
                <span className="font-black tracking-[-0.05em] text-foreground [font-size:clamp(1.15rem,2.2vw,1.6rem)]">
                  {portfolio.owner.initials}
                </span>
                <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.3em] text-muted-foreground md:text-[11px]">
                  {portfolio.owner.role}
                </span>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              {languageButton}
              {themeButton}
              <button
                type="button"
                aria-label="Open menu"
                aria-expanded={menuOpen}
                className="group flex min-h-10 items-center gap-3 text-foreground"
                onClick={() => setMenuOpen(true)}
                data-cursor="link"
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] opacity-70 transition-opacity group-hover:opacity-100">
                  Menu
                </span>
              </button>
            </div>
          </>
        )}
      </header>
      {!isProjectDetail ? <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} /> : null}
    </>
  );
}
