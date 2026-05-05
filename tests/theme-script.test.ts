import { describe, expect, it } from "vitest";
import { initialThemeScript } from "@/lib/theme-script";

function runThemeScript({
  storedTheme,
  prefersDark,
}: {
  storedTheme: string | null;
  prefersDark: boolean;
}) {
  document.documentElement.className = "";
  localStorage.clear();

  if (storedTheme) {
    localStorage.setItem("theme", storedTheme);
  }

  Object.defineProperty(window, "matchMedia", {
    configurable: true,
    value: (query: string) => ({
      matches: query === "(prefers-color-scheme: dark)" ? prefersDark : false,
    }),
  });

  new Function(initialThemeScript)();

  return document.documentElement.classList.contains("dark");
}

describe("initialThemeScript", () => {
  it("uses the stored theme before reading the system preference", () => {
    expect(runThemeScript({ storedTheme: "light", prefersDark: true })).toBe(false);
    expect(runThemeScript({ storedTheme: "dark", prefersDark: false })).toBe(true);
  });

  it("uses the system color scheme when no explicit theme is stored", () => {
    expect(runThemeScript({ storedTheme: null, prefersDark: true })).toBe(true);
    expect(runThemeScript({ storedTheme: null, prefersDark: false })).toBe(false);
  });
});
