"use client";

import { useState, useEffect, useCallback } from "react";

export type Language = "en" | "ko";

export function useLanguage() {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("portfolio-language") as Language;
    if (saved && (saved === "en" || saved === "ko")) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("portfolio-language", lang);
  }, []);

  const toggleLanguage = useCallback(() => {
    const newLang = language === "en" ? "ko" : "en";
    setLanguage(newLang);
  }, [language, setLanguage]);

  return { language, setLanguage, toggleLanguage, mounted };
}

// Helper type for localized text
export interface LocalizedText {
  en: string;
  ko: string;
}

// Helper function to get text by language
export function t(text: LocalizedText, lang: Language): string {
  return text[lang];
}

// Helper function for arrays
export function tArray(texts: LocalizedText[], lang: Language): string[] {
  return texts.map((text) => text[lang]);
}
