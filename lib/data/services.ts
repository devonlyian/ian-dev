import type { Service } from "./types";

export const services: Service[] = [
  {
    title: "Backend API Development",
    description:
      "Design and build APIs with clear contracts, practical data models, and deployment-aware behavior.",
    stack: ["Spring Boot", "Kotlin", "PostgreSQL"],
  },
  {
    title: "Migration and Modernization",
    description:
      "Move legacy behavior into newer stacks without breaking the clients and workflows already depending on it.",
    stack: ["Django", "Spring Boot", "Contract Tests"],
  },
  {
    title: "Deployment and Operations",
    description:
      "Set up deploy flows, health checks, logs, and local docs so systems are easier to run after the first release.",
    stack: ["Docker", "Kubernetes", "AWS"],
  },
  {
    title: "Product-Facing Backend Support",
    description:
      "Trace bugs across app and server boundaries, preserve intended behavior, and make fixes that survive real use.",
    stack: ["Flutter", "Prometheus", "Loki", "Grafana"],
  },
];
