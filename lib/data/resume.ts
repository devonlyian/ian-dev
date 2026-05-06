import type { ProjectSlug } from "@/lib/portfolio-data";
import type { ResumeLabels, ResumeLanguage, ResumeSkillGroup } from "@/lib/resume/types";

type ResumeLanguageData = {
  filenameBase: string;
  name: string;
  role: string;
  labels: ResumeLabels;
  summary: readonly string[];
  skillGroups: readonly ResumeSkillGroup[];
};

export const resumeLanguages = {
  ko: {
    filenameBase: "resume.ko",
    name: "김이안",
    role: "Backend Developer",
    labels: {
      role: "",
      summary: "요약",
      contact: "연락처",
      skills: "기술",
      experience: "경력",
      projects: "주요 프로젝트",
    },
    summary: [
      "Kotlin/Spring 기반 백엔드 개발자로, MSA 설계, 인프라 구축, 배포 자동화, 운영 검증 흐름을 함께 다룹니다.",
      "기존 앱 계약을 유지하는 마이그레이션, 반복 가능한 테스트와 배포 흐름 정리에 강점이 있습니다.",
    ],
    skillGroups: [
      { title: "Backend", items: ["Kotlin", "Java", "Spring Boot", "Spring Security", "Spring Batch", "JPA", "QueryDSL"] },
      { title: "Data", items: ["PostgreSQL", "MySQL", "Redis", "RabbitMQ", "Flyway"] },
      { title: "Infra", items: ["Docker", "Kubernetes", "AWS", "Oracle Cloud", "Terraform", "ArgoCD", "GitHub Actions"] },
      { title: "AI", items: ["Codex", "Claude Code", "Harness Engineering"] },
    ],
  },
  en: {
    filenameBase: "resume.en",
    name: "Ian Kim",
    role: "Backend Developer",
    labels: {
      role: "",
      summary: "Summary",
      contact: "Contact",
      skills: "Skills",
      experience: "Experience",
      projects: "Selected Projects",
    },
    summary: [
      "Backend developer focused on Kotlin/Spring systems, MSA design, infrastructure, deployment automation, and production verification.",
      "Experienced in legacy-compatible migrations and repeatable test and deployment workflows.",
    ],
    skillGroups: [
      { title: "Backend", items: ["Kotlin", "Java", "Spring Boot", "Spring Security", "Spring Batch", "JPA", "QueryDSL"] },
      { title: "Data", items: ["PostgreSQL", "MySQL", "Redis", "RabbitMQ", "Flyway"] },
      { title: "Infra", items: ["Docker", "Kubernetes", "AWS", "Oracle Cloud", "Terraform", "ArgoCD", "GitHub Actions"] },
      { title: "AI", items: ["Codex", "Claude Code", "Harness Engineering"] },
    ],
  },
} as const satisfies Record<ResumeLanguage, ResumeLanguageData>;

export const resumeProjectSlugs = [
  "readinggarden-kotlin-backend",
  "nailtoctoc-backend",
  "nailtoctoc-kiosk",
  "arffy",
] as const satisfies readonly ProjectSlug[];
