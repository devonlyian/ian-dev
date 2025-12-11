"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguageContext } from "@/contexts/LanguageContext";
import { Language } from "@/hooks/useLanguage";

const GlobeIcon = () => (
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
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "English" },
  { code: "ko", label: "한국어" },
];

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguageContext();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="nav-button text-sm flex items-center gap-1"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <GlobeIcon />
        <span>Lang</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-1 bg-[var(--dos-bg)] border border-[var(--dos-border)] shadow-lg z-50 min-w-[100px]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleSelect(lang.code)}
              className={`w-full px-3 py-1.5 text-left text-sm hover:bg-[var(--dos-highlight)] hover:text-[var(--dos-bg)] transition-colors ${
                language === lang.code ? "dos-cyan font-bold" : "dos-text"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
