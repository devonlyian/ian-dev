import type { NavigationSection } from "./types";

export const navigationSections: NavigationSection[] = [
  { id: "hero", label: "Home", index: "00" },
  { id: "about", label: "About", index: "01" },
  { id: "projects", label: "Projects", index: "02" },
  { id: "experience", label: "Experience", index: "03" },
  { id: "services", label: "Services", index: "04" },
  { id: "contact", label: "Contact", index: "05" },
];

export const portfolio = {
  owner: {
    name: "Ian Kim",
    initials: "IK",
    role: "Backend Developer",
    email: "devonlyian@gmail.com",
    location: "South Korea",
    github: "https://github.com/devonlyian",
    siteUrl: "https://ianonly.dev",
  },
  hero: {
    kicker: "Available for backend work",
    intro: "Hey, I'm Ian Kim",
    headline: "I build things that don't break.",
    body:
      "Kotlin/Spring backend developer with experience in MSA design, AWS EKS infrastructure, and GitOps-based CI/CD pipelines.",
    primaryCta: "View My Work",
    secondaryCta: "Let's Talk",
  },
  about: {
    title: "The short version.",
    paragraphs: [
      "Backend developer with Kotlin/Spring expertise, from MSA design to AWS EKS infrastructure and GitOps-based CI/CD pipelines.",
      "I care about clear communication, maintainable operations, and continuously learning new tools that improve development productivity.",
    ],
  },
  technologies: [
    "Kotlin",
    "Spring Boot",
    "Java",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "RabbitMQ",
    "Docker",
    "Kubernetes",
    "AWS",
    "Terraform",
    "ArgoCD",
    "GitHub Actions",
    "Codex",
    "Claude Code",
  ],
  contact: {
    title: "Say hey.",
    body: "Always open to a practical build, a backend cleanup, or a production problem that needs a calm pair of hands.",
  },
};
