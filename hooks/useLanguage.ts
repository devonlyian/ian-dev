"use client";

import { useCallback } from "react";
import { useLocalStorage } from "./useLocalStorage";

export type Language = "en" | "ko";

const isValidLanguage = (value: unknown): value is Language =>
  value === "en" || value === "ko";

export function useLanguage() {
  const { value: language, setValue, mounted } = useLocalStorage<Language>({
    key: "portfolio-language",
    defaultValue: "ko",
    validate: isValidLanguage,
  });

  const setLanguage = useCallback(
    (lang: Language) => {
      setValue(lang);
    },
    [setValue]
  );

  const toggleLanguage = useCallback(() => {
    const newLang = language === "en" ? "ko" : "en";
    setLanguage(newLang);
  }, [language, setLanguage]);

  return { language, setLanguage, toggleLanguage, mounted };
}

export interface LocalizedText {
  en: string;
  ko: string;
}

export function t(text: LocalizedText, lang: Language): string {
  return text[lang];
}

export function tArray(texts: LocalizedText[], lang: Language): string[] {
  return texts.map((text) => text[lang]);
}
