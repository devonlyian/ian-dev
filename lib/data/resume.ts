import type { ProjectSlug } from "@/lib/portfolio-data";
import type { ResumeLabels, ResumeLanguage, ResumeSkillGroup } from "@/lib/resume/types";

type ResumeLanguageData = {
  filenameBase: string;
  role: string;
  labels: ResumeLabels;
  summary: readonly string[];
  skillGroups: readonly ResumeSkillGroup[];
};

export const resumeLanguages = {
  ko: {
    filenameBase: "resume.ko",
    role: "백엔드 개발자",
    labels: {
      role: "직무",
      summary: "요약",
      contact: "연락처",
      skills: "기술",
      experience: "경력",
      projects: "주요 프로젝트",
    },
    summary: [
      "Kotlin/Spring 기반 백엔드 개발자로, MSA 설계, 인프라 구축, 배포 자동화, 운영 검증 흐름을 함께 다룹니다.",
      "기존 앱 계약을 유지하는 마이그레이션, 운영 중 장애 원인 추적, 반복 가능한 테스트와 배포 흐름 정리에 강점이 있습니다.",
    ],
    skillGroups: [
      { title: "Backend", items: ["Kotlin", "Java", "Spring Boot", "Spring Security", "Spring Batch", "JPA", "QueryDSL"] },
      { title: "Data", items: ["PostgreSQL", "MySQL", "Redis", "RabbitMQ", "Flyway"] },
      { title: "Infra", items: ["Docker", "Kubernetes", "AWS EKS", "Oracle Cloud A1", "Terraform", "ArgoCD", "GitHub Actions"] },
      { title: "AI & Automation", items: ["OpenAI API", "Pinecone", "Clova OCR", "Brity RPA", "Codex", "Claude Code"] },
    ],
  },
  en: {
    filenameBase: "resume.en",
    role: "Backend Developer",
    labels: {
      role: "Role",
      summary: "Summary",
      contact: "Contact",
      skills: "Skills",
      experience: "Experience",
      projects: "Selected Projects",
    },
    summary: [
      "Backend developer focused on Kotlin/Spring systems, MSA design, infrastructure, deployment automation, and production verification.",
      "Experienced in legacy-compatible migrations, production issue diagnosis, and repeatable test and deployment workflows.",
    ],
    skillGroups: [
      { title: "Backend", items: ["Kotlin", "Java", "Spring Boot", "Spring Security", "Spring Batch", "JPA", "QueryDSL"] },
      { title: "Data", items: ["PostgreSQL", "MySQL", "Redis", "RabbitMQ", "Flyway"] },
      { title: "Infra", items: ["Docker", "Kubernetes", "AWS EKS", "Oracle Cloud A1", "Terraform", "ArgoCD", "GitHub Actions"] },
      { title: "AI & Automation", items: ["OpenAI API", "Pinecone", "Clova OCR", "Brity RPA", "Codex", "Claude Code"] },
    ],
  },
} as const satisfies Record<ResumeLanguage, ResumeLanguageData>;

export const resumeProjectSlugs = [
  "readinggarden-kotlin-backend",
  "nailtoctoc-backend",
  "nailtoctoc-kiosk",
  "arffy",
  "accounting-commission",
] as const satisfies readonly ProjectSlug[];
