"use client";

import type { SimpleIcon } from "simple-icons";
import {
  siArgo,
  siClaude,
  siDocker,
  siGithubactions,
  siKubernetes,
  siKotlin,
  siMysql,
  siOpenjdk,
  siPostgresql,
  siRabbitmq,
  siRedis,
  siSpringboot,
  siTerraform,
} from "simple-icons";
import { Cloud } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { portfolio } from "@/lib/portfolio-data";

type TechnologyIconType = SimpleIcon | "cloud" | "gpt";

const technologyIcons: Record<string, TechnologyIconType> = {
  Kotlin: siKotlin,
  "Spring Boot": siSpringboot,
  Java: siOpenjdk,
  PostgreSQL: siPostgresql,
  MySQL: siMysql,
  Redis: siRedis,
  RabbitMQ: siRabbitmq,
  Docker: siDocker,
  Kubernetes: siKubernetes,
  AWS: "cloud",
  Terraform: siTerraform,
  ArgoCD: siArgo,
  "GitHub Actions": siGithubactions,
  Codex: "gpt",
  "Claude Code": siClaude,
};

function TechnologyIcon({ technology }: { technology: string }) {
  const icon = technologyIcons[technology];

  if (icon === "cloud") {
    return <Cloud className="h-7 w-7 stroke-[2.4]" aria-hidden="true" />;
  }

  if (icon === "gpt") {
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" role="img" aria-label="GPT icon">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
        <text
          x="12"
          y="14.4"
          fill="currentColor"
          fontSize="6.2"
          fontWeight="900"
          letterSpacing="-0.35"
          textAnchor="middle"
        >
          GPT
        </text>
      </svg>
    );
  }

  if (!icon) {
    return (
      <span className="text-[10px] font-black uppercase" aria-hidden="true">
        {technology.slice(0, 2)}
      </span>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" role="img" aria-label={`${technology} icon`}>
      <path d={icon.path} fill="currentColor" />
    </svg>
  );
}

export function About() {
  const technologyTrack = [...portfolio.technologies, ...portfolio.technologies];
  const { language, text } = useLanguage();

  return (
    <section id="about" className="overflow-hidden py-16 md:min-h-[46.5rem] md:py-24">
      <div className="mx-auto grid max-w-[90rem] gap-12 px-6 md:grid-cols-2 md:px-12 lg:gap-20 lg:px-20">
        <div className="flex flex-col justify-center">
          <h2 className="section-heading max-w-xl text-foreground">{portfolio.about.title}</h2>
        </div>

        <div className="flex flex-col justify-center gap-6">
          <div className="space-y-7 text-base font-medium leading-relaxed text-muted-foreground lg:text-xl">
            {language === "ko" ? (
              <p>
                저는 백엔드 시스템과 인프라, 제품 경계에서 주로 일합니다.{" "}
                <span className="font-black text-foreground">운영에서 안정성이 드러나는 지점</span>을 중요하게 봅니다.
              </p>
            ) : (
              <p>
                {text.about.paragraphs[0]}{" "}
                <span className="font-black text-foreground">{text.about.paragraphs[1]}</span>
              </p>
            )}
            <p>
              {text.about.paragraphs[2]}{" "}
              <span className="font-black text-brand">{text.about.paragraphs[3]}</span>. {text.about.paragraphs[4]}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-40">
        <div className="mx-auto max-w-[90rem] px-6 md:px-12 lg:px-20">
          <p className="mb-8 text-[11px] font-medium uppercase tracking-[0.45em] text-muted-foreground/70">
            Technologies
          </p>
        </div>
        <div className="overflow-hidden">
          <div className="animate-tech-marquee flex w-max items-center gap-14 px-6 md:px-12">
            {technologyTrack.map((technology, index) => (
              <span
                key={`${technology}-${index}`}
                className="inline-flex min-w-max items-center gap-3 text-sm font-black text-muted-foreground"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-background/70 text-foreground shadow-soft">
                  <TechnologyIcon technology={technology} />
                </span>
                {technology}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
