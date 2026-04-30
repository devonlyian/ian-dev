"use client";

import type { SimpleIcon } from "simple-icons";
import {
  siArgo,
  siDocker,
  siGithubactions,
  siJenkins,
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
import { Bot, BrainCircuit, Cloud, FileScan, Workflow } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { portfolio } from "@/lib/portfolio-data";

type TechnologyIconType = SimpleIcon | "cloud" | "bot" | "brain" | "scan" | "workflow";

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
  Jenkins: siJenkins,
  "GitHub Actions": siGithubactions,
  "OpenAI API": "bot",
  Pinecone: "brain",
  "Clova OCR": "scan",
  "Brity RPA": "workflow",
};

function TechnologyIcon({ technology }: { technology: string }) {
  const icon = technologyIcons[technology];

  if (icon === "cloud") {
    return <Cloud className="h-7 w-7 stroke-[2.4]" aria-hidden="true" />;
  }

  if (icon === "bot") {
    return <Bot className="h-7 w-7 stroke-[2.4]" aria-hidden="true" />;
  }

  if (icon === "brain") {
    return <BrainCircuit className="h-7 w-7 stroke-[2.4]" aria-hidden="true" />;
  }

  if (icon === "scan") {
    return <FileScan className="h-7 w-7 stroke-[2.4]" aria-hidden="true" />;
  }

  if (icon === "workflow") {
    return <Workflow className="h-7 w-7 stroke-[2.4]" aria-hidden="true" />;
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
        <div className="flex flex-col gap-10">
          <h2 className="section-heading max-w-xl text-foreground">{portfolio.about.title}</h2>
          <div>
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.45em] text-muted-foreground/70">
              Certifications
            </p>
            <div className="flex max-w-[34rem] flex-wrap gap-2.5">
              {portfolio.about.certifications.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-background/50 px-4 py-2 text-xs font-bold text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item}
                  <span aria-hidden="true">↗</span>
                </span>
              ))}
            </div>
          </div>
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
          <div className="mt-6 grid grid-cols-2 gap-12 border-t border-border pt-7">
            {portfolio.about.stats.slice(0, 2).map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-black tracking-tight text-foreground">{stat.value}</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">{stat.label}</p>
              </div>
            ))}
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
