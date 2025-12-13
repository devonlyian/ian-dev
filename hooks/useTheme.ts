"use client";

import { useState, useEffect, useCallback } from "react";
import { ThemeMode } from "@/types/terminal";

const VALID_THEMES: ThemeMode[] = ["dos", "dark", "light", "amber", "green"];

function applyThemeClass(theme: ThemeMode): void {
  const html = document.documentElement;
  // Remove all theme classes
  VALID_THEMES.forEach((t) => {
    if (t !== "dark") {
      html.classList.remove(t);
    }
  });
  // Add new theme class (dark is default, no class needed)
  if (theme !== "dark") {
    html.classList.add(theme);
  }
}

export function useTheme() {
  const [theme, setThemeState] = useState<ThemeMode>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check localStorage for saved theme
    const savedTheme = localStorage.getItem("theme") as ThemeMode | null;
    if (savedTheme && VALID_THEMES.includes(savedTheme)) {
      setThemeState(savedTheme);
      applyThemeClass(savedTheme);
    }
  }, []);

  const setTheme = useCallback((newTheme: ThemeMode) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
    applyThemeClass(newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    // Cycle through themes: dark -> light -> amber -> green -> dark
    const currentIndex = VALID_THEMES.indexOf(theme);
    const nextIndex = (currentIndex + 1) % VALID_THEMES.length;
    setTheme(VALID_THEMES[nextIndex]);
  }, [theme, setTheme]);

  return {
    theme,
    setTheme,
    toggleTheme,
    mounted,
    availableThemes: VALID_THEMES,
  };
}
