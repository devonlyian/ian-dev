import { Skill } from "@/types/data";

export const skills: Skill[] = [
  {
    category: "Languages",
    items: [
      { name: "Kotlin", level: 90, years: 4 },
      { name: "Java", level: 85, years: 6 },
      { name: "TypeScript", level: 65, years: 2 },
      { name: "Python", level: 60, years: 2 },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { name: "Spring Boot", level: 90, years: 5 },
      { name: "Spring WebFlux", level: 75, years: 2 },
      { name: "JPA/Hibernate", level: 80, years: 4 },
    ],
  },
  {
    category: "Infrastructure",
    items: [
      { name: "Kubernetes", level: 75, years: 3 },
      { name: "Docker", level: 85, years: 4 },
      { name: "AWS", level: 70, years: 3 },
      { name: "Terraform", level: 60, years: 2 },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "PostgreSQL", level: 85, years: 4 },
      { name: "MySQL", level: 80, years: 5 },
      { name: "Redis", level: 75, years: 3 },
      { name: "MongoDB", level: 60, years: 2 },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", level: 90, years: 6 },
      { name: "Jenkins/CI-CD", level: 80, years: 4 },
      { name: "Kafka", level: 70, years: 2 },
      { name: "Prometheus/Grafana", level: 65, years: 2 },
    ],
  },
];
