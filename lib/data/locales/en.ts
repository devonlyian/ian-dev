import type { LanguageText } from "./types";

export const enText: LanguageText = {
    header: {
      switchToKorean: "Switch to Korean",
    },
    hero: {
      body:
        "Backend developer who ships practical APIs and keeps the details boring. Slow? Fixed. Fragile? Hardened. Not deployed yet? Built.",
    },
    about: {
      paragraphs: [
        {
          lead: "I work closest to backend systems, infrastructure, and the product edges where",
          emphasis: "reliability actually shows up.",
          tail: "",
          emphasisTone: "foreground",
        },
        {
          lead: "Most of my recent work has involved",
          emphasis: "Claude Code, Codex, and harness engineering",
          tail: ". I focus on tightening development automation and repeatable verification flows.",
          emphasisTone: "brand",
        },
      ],
    },
    projects: {
      archive: {
        backHome: "Home",
        title: "Projects",
        description:
          "A fuller archive of backend, product, migration, and infrastructure work. Each item links to a compact case-study page.",
      },
      taglines: {},
      descriptions: {},
      highlights: {},
    },
    experiences: {},
    services: {},
    contact: {
      body: "Always open to a practical build, a backend cleanup, or a production problem that needs a calm pair of hands.",
      copied: "Email copied",
    },
  };
