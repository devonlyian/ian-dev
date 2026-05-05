import { describe, expect, it } from "vitest";
import { initialThemeScript } from "@/lib/theme-script";

function runThemeScript({
  bodyHtml = "",
  storedTheme,
  prefersDark,
}: {
  bodyHtml?: string;
  storedTheme: string | null;
  prefersDark: boolean;
}) {
  document.documentElement.className = "";
  document.body.innerHTML = bodyHtml;
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

  it("removes externally injected user-select auto styles before hydration", () => {
    runThemeScript({
      bodyHtml: `
        <div id="plain" style="user-select: auto;"></div>
        <div id="mixed" style="transform: scaleX(0); user-select: auto;"></div>
      `,
      storedTheme: null,
      prefersDark: false,
    });

    expect(document.getElementById("plain")?.getAttribute("style")).toBeNull();
    expect(document.getElementById("mixed")?.getAttribute("style")).toBe("transform: scaleX(0);");
  });
});
