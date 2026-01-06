"use client";

import { useState, useRef, useCallback } from "react";
import { ThemeMode } from "@/types/terminal";
import { useOutsideClick } from "@/hooks/useOutsideClick";

interface ThemeToggleProps {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  availableThemes: ThemeMode[];
}

const ThemeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="inline-block"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

const themeLabels: Record<ThemeMode, string> = {
  dos: "DOS",
  dark: "Dark",
  light: "Light",
  amber: "Amber",
  green: "Green",
};

export default function ThemeToggle({ theme, setTheme, availableThemes }: ThemeToggleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const closeDropdown = useCallback(() => setIsOpen(false), []);
  useOutsideClick(dropdownRef, closeDropdown, isOpen);

  const handleSelect = (t: ThemeMode) => {
    setTheme(t);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="nav-button text-sm flex items-center gap-1"
        aria-label="Select theme"
        aria-expanded={isOpen}
      >
        <ThemeIcon />
        <span>Theme</span>
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-label="Theme options"
          className="absolute right-0 top-full mt-1 bg-dos-bg border border-dos-border shadow-lg z-50 min-w-[100px]"
        >
          {availableThemes.map((t) => (
            <button
              key={t}
              role="menuitem"
              onClick={() => handleSelect(t)}
              aria-current={theme === t ? "true" : undefined}
              className={`w-full px-3 py-1.5 text-left text-sm hover:bg-dos-highlight hover:text-dos-bg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-dos-cyan ${
                theme === t ? "dos-cyan font-bold" : "dos-text"
              }`}
            >
              {themeLabels[t]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
