"use client";

import { useCallback, useMemo } from "react";
import { ThemeMode } from "@/types/terminal";
import { useLocalStorage } from "./useLocalStorage";

const VALID_THEMES: ThemeMode[] = ["dos", "dark", "light", "amber", "green"];

function applyThemeClass(theme: ThemeMode): void {
  const html = document.documentElement;
  VALID_THEMES.forEach((t) => {
    if (t !== "dark") {
      html.classList.remove(t);
    }
  });
  if (theme !== "dark") {
    html.classList.add(theme);
  }
}

const isValidTheme = (value: unknown): value is ThemeMode =>
  typeof value === "string" && VALID_THEMES.includes(value as ThemeMode);

export function useTheme() {
  const { value: theme, setValue, mounted } = useLocalStorage<ThemeMode>({
    key: "theme",
    defaultValue: "dark",
    validate: isValidTheme,
    onValueChange: applyThemeClass,
  });

  const setTheme = useCallback(
    (newTheme: ThemeMode) => {
      setValue(newTheme);
    },
    [setValue]
  );

  const toggleTheme = useCallback(() => {
    const currentIndex = VALID_THEMES.indexOf(theme);
    const nextIndex = (currentIndex + 1) % VALID_THEMES.length;
    setTheme(VALID_THEMES[nextIndex]);
  }, [theme, setTheme]);

  const availableThemes = useMemo(() => VALID_THEMES, []);

  return {
    theme,
    setTheme,
    toggleTheme,
    mounted,
    availableThemes,
  };
}
