"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { languageText } from "@/lib/data/locales";
import type { Language, LanguageText } from "@/lib/data/locales";

export { languageText } from "@/lib/data/locales";
export type { Language, LanguageText } from "@/lib/data/locales";

export type LanguageContextValue = {
  language: Language;
  toggleLanguage: () => void;
  text: LanguageText;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem("language");
    const nextLanguage = stored === "ko" ? "ko" : "en";

    setLanguage(nextLanguage);
    document.documentElement.lang = nextLanguage;
  }, []);

  const value = useMemo<LanguageContextValue>(() => {
    const toggleLanguage = () => {
      setLanguage((current) => {
        const next = current === "en" ? "ko" : "en";
        localStorage.setItem("language", next);
        document.documentElement.lang = next;
        return next;
      });
    };

    return {
      language,
      toggleLanguage,
      text: languageText[language],
    };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
