"use client";

import { ThemeMode } from "@/types/terminal";

interface ThemeToggleProps {
  theme: ThemeMode;
  onToggle: () => void;
}

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="nav-button text-sm"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? "☀ LIGHT" : "☾ DARK"}
    </button>
  );
}
