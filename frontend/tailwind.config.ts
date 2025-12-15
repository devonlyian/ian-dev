import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dos: ['"IBM Plex Mono"', '"Courier New"', "Consolas", "monospace"],
      },
      colors: {
        dos: {
          bg: "var(--dos-bg)",
          text: "var(--dos-text)",
          highlight: "var(--dos-highlight)",
          yellow: "var(--dos-yellow)",
          border: "var(--dos-border)",
          cyan: "var(--dos-cyan)",
          green: "var(--dos-green)",
          red: "var(--dos-red)",
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
