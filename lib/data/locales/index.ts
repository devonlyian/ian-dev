import { enText } from "./en";
import { koText } from "./ko";
import type { Language, LanguageText } from "./types";

export type { Language, LanguageText } from "./types";

export const languageText: Record<Language, LanguageText> = {
  en: enText,
  ko: koText,
};
