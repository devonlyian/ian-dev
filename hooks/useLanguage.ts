"use client";

import { useCallback } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { Language } from "@/types/data";

export type { Language };

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

export function t(text: { en: string; ko: string }, lang: Language): string {
  return text[lang];
}

export function tArray(texts: { en: string; ko: string }[], lang: Language): string[] {
  return texts.map((text) => text[lang]);
}
