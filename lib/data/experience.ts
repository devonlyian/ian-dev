import type { Experience } from "./types";

export const experiences: Experience[] = [
  {
    period: "2026.03 — Present",
    location: "Korea",
    title: "Backend Developer",
    company: "NooooK Studio",
    status: "Team",
    translationKey: "nooook-studio",
    summary:
      "Working on the ReadingGarden Kotlin migration as a team project and building a dog and cat care management app, preserving existing app contracts while rebuilding backend systems with Spring Boot, PostgreSQL, deployment automation, and production operations.",
    stack: ["Kotlin", "Spring Boot", "PostgreSQL", "Docker", "GitHub Actions", "Oracle Cloud A1"],
  },
  {
    period: "2025.02 — 2025.12",
    location: "Korea",
    title: "Backend Developer / 대리",
    company: "NailTocToc",
    status: "Company",
    translationKey: "nailtoctoc",
    summary:
      "Designed and implemented seven microservices, built AWS EKS Kubernetes infrastructure, optimized PostgreSQL read performance, established ArgoCD GitOps Blue-Green deployment, and implemented RabbitMQ-based async messaging.",
    stack: ["Kotlin", "Spring Boot 3", "PostgreSQL", "Redis", "RabbitMQ", "AWS EKS", "Terraform", "ArgoCD"],
  },
  {
    period: "2024.08 — 2025.02",
    location: "Korea",
    title: "Backend Developer / 주임",
    company: "Mining5000",
    status: "Company",
    translationKey: "mining5000",
    summary:
      "Designed and implemented backend APIs for three client projects, reduced accounting data processing time with Clova OCR and OpenAI API, built Pinecone-based collaboration recommendations, and deployed RPA solutions for repetitive work.",
    stack: ["Kotlin", "Spring Boot 3", "MySQL", "OpenAI API", "Pinecone", "Clova OCR", "Brity RPA"],
  },
  {
    period: "2023.04 — 2024.08",
    location: "Korea",
    title: "Backend Developer",
    company: "Arffy",
    status: "Team",
    translationKey: "arffy",
    summary:
      "Designed and implemented the full backend for a vintage lighting store, operated the live service for nine months, solved order concurrency issues with pessimistic locking, encrypted personal data with JPA Converter, and integrated JWT, Kakao OAuth, and PortOne payments.",
    stack: ["Kotlin", "Spring Boot 2", "MySQL", "AWS EC2", "AWS S3", "Docker", "PortOne"],
  },
];
