import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        dos: ['"IBM Plex Mono"', '"Courier New"', "Consolas", "monospace"],
      },
      colors: {
        dos: {
          // Dark mode (classic DOS blue)
          "dark-bg": "#000080",
          "dark-text": "#AAAAAA",
          "dark-highlight": "#FFFFFF",
          "dark-yellow": "#FFFF00",
          "dark-border": "#FFFFFF",
          // Light mode
          "light-bg": "#C0C0C0",
          "light-text": "#000000",
          "light-highlight": "#000080",
          "light-border": "#808080",
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        typing: "typing 2s steps(40, end)",
      },
      keyframes: {
        blink: {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
