"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "en" | "ko";

type LanguageText = {
  header: {
    switchToKorean: string;
  };
  hero: {
    body: string;
  };
  about: {
    paragraphs: [string, string, string, string, string];
  };
  projects: {
    taglines: Record<string, string>;
    descriptions: Record<string, string>;
    caseStudies: Record<
      string,
      {
        overview: string;
        challenge: string;
        solution: string;
        impact: string;
      }
    >;
  };
  experiences: Record<string, string>;
  services: Record<string, string>;
  contact: {
    body: string;
    copied: string;
  };
};

type LanguageContextValue = {
  language: Language;
  toggleLanguage: () => void;
  text: LanguageText;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const languageText: Record<Language, LanguageText> = {
  en: {
    header: {
      switchToKorean: "Switch to Korean",
    },
    hero: {
      body:
        "Backend developer who ships practical APIs and keeps the details boring. Slow? Fixed. Fragile? Hardened. Not deployed yet? Built.",
    },
    about: {
      paragraphs: [
        "I work closest to backend systems, infrastructure, and the product edges where",
        "reliability actually shows up.",
        "Most of my recent work has involved",
        "Kotlin, Spring Boot, PostgreSQL, and OCI",
        "I care about contract preservation, deployment paths, and production debugging.",
      ],
    },
    projects: {
      taglines: {
        "reading-garden": "Django-to-Kotlin migration with production contract preservation.",
        pawtogether: "Pet community backend designed around practical product boundaries.",
        "bug-bounty-platform": "Submission-ready backend with report, reward, and program flows.",
        "oracle-a1-automation": "Local-first OCI automation with public docs separated from private ops.",
      },
      descriptions: {
        "reading-garden":
          "A backend migration and operations project focused on keeping an existing Flutter app stable while replacing core server behavior.",
        pawtogether:
          "An early-stage backend architecture for social login, community features, scheduled jobs, local media, and maintainable deployment.",
        "bug-bounty-platform":
          "A scoped backend implementation built against an assignment spec, with attention on correctness, documentation, and deliverability.",
        "oracle-a1-automation":
          "A personal infrastructure automation project for OCI A1 workflows, operational docs, and safe local tooling.",
      },
      caseStudies: {
        "reading-garden": {
          overview:
            "Reading Garden is a production backend modernization effort with a mobile client, legacy API expectations, and operational deployment constraints.",
          challenge:
            "The difficult part was not simply rewriting endpoints. The system had legacy Django behavior, Flutter runtime assumptions, image storage paths, and production data that had to continue working without surprising users.",
          solution:
            "The migration used compatibility tests, endpoint contract checks, live health probes, and deployment scripts that made production and development behavior explicit.",
          impact:
            "The result is a backend that can evolve with Kotlin and Spring Boot while retaining the behavior the existing app depends on.",
        },
        pawtogether: {
          overview:
            "PawTogether is a clean backend foundation for a pet community product, with social auth and media handling kept deliberately simple.",
          challenge:
            "The key risk was overbuilding too early. The backend needed enough structure for growth without adding infrastructure that would slow down a first release.",
          solution:
            "The design favors app-side social login, Spring Security resource server patterns, scheduled jobs, local disk media on A1, and explicit backup requirements.",
          impact:
            "The project has a clearer domain split and a backend stack that can ship quickly before being expanded into heavier infrastructure.",
        },
        "bug-bounty-platform": {
          overview:
            "The platform models program specifications, vulnerability report submission, reward handling, and API documentation.",
          challenge:
            "The main challenge was matching the written requirements exactly and separating finished scope from speculative enhancements.",
          solution:
            "Implementation work was driven from the assignment document, with targeted fixes for report and reward behavior and a final submission checklist.",
          impact:
            "The codebase became easier to evaluate because the implemented scope maps directly to the submitted requirements.",
        },
        "oracle-a1-automation": {
          overview:
            "The project keeps repeatable A1 operations in code while separating local-only operational details from public repository documentation.",
          challenge:
            "The sensitive parts were operational context, instance principal behavior, and avoiding accidental publication of local server details.",
          solution:
            "The repository uses an A1-only branch strategy, local ops docs, ignored private notes, and conservative automation boundaries.",
          impact:
            "The automation is easier to maintain because public and private responsibilities are explicit.",
        },
      },
    },
    experiences: {
      "Backend Developer":
        "Building production-minded backends, migration tooling, and deployment workflows across personal and client-style projects.",
      "Platform Builder":
        "Designed API contracts, deployment paths, and operational documentation for services that need to be maintained after launch.",
      "Backend Engineer":
        "Worked through data modeling, API behavior, authentication, and debugging tasks where correctness mattered more than surface polish.",
    },
    services: {
      "Backend API Development":
        "Design and build APIs with clear contracts, practical data models, and deployment-aware behavior.",
      "Migration and Modernization":
        "Move legacy behavior into newer stacks without breaking the clients and workflows already depending on it.",
      "Deployment and Operations":
        "Set up deploy flows, health checks, logs, and local docs so systems are easier to run after the first release.",
      "Product-Facing Backend Support":
        "Trace bugs across app and server boundaries, preserve intended behavior, and make fixes that survive real use.",
    },
    contact: {
      body: "Always open to a practical build, a backend cleanup, or a production problem that needs a calm pair of hands.",
      copied: "Email copied",
    },
  },
  ko: {
    header: {
      switchToKorean: "Switch to English",
    },
    hero: {
      body:
        "실용적인 API를 만들고 지루할 만큼 안정적인 운영을 좋아하는 백엔드 개발자입니다. 느리면 고치고, 약하면 단단하게 만들고, 아직 배포되지 않았다면 끝까지 올립니다.",
    },
    about: {
      paragraphs: [
        "저는 백엔드 시스템, 인프라, 그리고 제품의 경계에서 주로 일합니다.",
        "안정성이 실제로 보이는 지점",
        "최근에는 주로",
        "Kotlin, Spring Boot, PostgreSQL, OCI",
        "계약 유지, 배포 경로, 운영 디버깅을 중요하게 봅니다.",
      ],
    },
    projects: {
      taglines: {
        "reading-garden": "운영 계약을 유지하며 Django 백엔드를 Kotlin으로 옮긴 마이그레이션.",
        pawtogether: "실제 제품 경계를 기준으로 설계한 반려동물 커뮤니티 백엔드.",
        "bug-bounty-platform": "리포트, 리워드, 프로그램 흐름을 제출 가능한 수준으로 구현한 백엔드.",
        "oracle-a1-automation": "공개 문서와 개인 운영 정보를 분리한 로컬 우선 OCI 자동화.",
      },
      descriptions: {
        "reading-garden":
          "기존 Flutter 앱을 안정적으로 유지하면서 핵심 서버 동작을 교체하는 데 초점을 둔 백엔드 마이그레이션과 운영 작업입니다.",
        pawtogether:
          "소셜 로그인, 커뮤니티 기능, 스케줄 작업, 로컬 미디어, 배포 유지보수를 고려해 초기에 과하게 복잡해지지 않도록 잡은 백엔드 구조입니다.",
        "bug-bounty-platform":
          "과제 명세를 기준으로 리포트와 리워드, 프로그램 흐름을 구현하고 정확성, 문서화, 제출 가능성을 챙긴 백엔드 작업입니다.",
        "oracle-a1-automation":
          "OCI A1 워크플로, 운영 문서, 로컬 도구를 안전하게 다루기 위한 개인 인프라 자동화 프로젝트입니다.",
      },
      caseStudies: {
        "reading-garden": {
          overview:
            "Reading Garden은 모바일 클라이언트, 레거시 API 기대값, 배포 제약을 함께 고려해야 했던 운영 중 백엔드 현대화 작업입니다.",
          challenge:
            "어려운 점은 단순히 엔드포인트를 다시 쓰는 것이 아니었습니다. Django 시절의 동작, Flutter 런타임 가정, 이미지 저장 경로, 운영 데이터가 사용자에게 티 나지 않게 계속 맞아야 했습니다.",
          solution:
            "호환성 테스트, 엔드포인트 계약 검증, live health probe, 배포 스크립트를 통해 운영과 개발 환경의 동작을 명확하게 만들었습니다.",
          impact:
            "기존 앱이 의존하던 동작을 유지하면서도 Kotlin과 Spring Boot 기반으로 계속 발전시킬 수 있는 백엔드가 되었습니다.",
        },
        pawtogether: {
          overview:
            "PawTogether는 반려동물 커뮤니티 제품을 위한 백엔드 기반 작업으로, 소셜 인증과 미디어 처리를 의도적으로 단순하게 유지했습니다.",
          challenge:
            "가장 큰 리스크는 초기에 너무 많이 만드는 것이었습니다. 첫 릴리스를 늦추지 않으면서도 이후 확장할 수 있는 구조가 필요했습니다.",
          solution:
            "앱 사이드 소셜 로그인, Spring Security Resource Server 패턴, 스케줄 작업, A1 로컬 디스크 미디어, 명시적인 백업 정책을 우선했습니다.",
          impact:
            "도메인 경계가 더 분명해졌고, 무거운 인프라로 확장하기 전에 빠르게 출시할 수 있는 백엔드 스택이 되었습니다.",
        },
        "bug-bounty-platform": {
          overview:
            "이 플랫폼은 프로그램 명세, 취약점 리포트 제출, 리워드 처리, API 문서화를 모델링한 과제형 백엔드입니다.",
          challenge:
            "핵심은 작성된 요구사항을 정확히 맞추고, 완료된 범위와 추측성 개선을 분리하는 것이었습니다.",
          solution:
            "과제 문서를 기준으로 구현 범위를 고정하고, 리포트와 리워드 동작을 targeted fix로 정리한 뒤 제출 체크리스트까지 맞췄습니다.",
          impact:
            "구현된 범위가 제출 요구사항과 직접 연결되어 평가하기 쉬운 코드베이스가 되었습니다.",
        },
        "oracle-a1-automation": {
          overview:
            "이 프로젝트는 반복 가능한 A1 운영을 코드로 관리하면서, 로컬 전용 운영 정보와 공개 저장소 문서를 분리합니다.",
          challenge:
            "운영 맥락, instance principal 동작, 개인 서버 정보가 공개 문서에 섞이지 않도록 관리하는 것이 민감한 부분이었습니다.",
          solution:
            "A1 전용 브랜치 전략, 로컬 운영 문서, ignore된 개인 메모, 보수적인 자동화 경계를 사용했습니다.",
          impact:
            "공개 책임과 개인 운영 책임이 분명해져 자동화를 더 안전하게 유지할 수 있게 되었습니다.",
        },
      },
    },
    experiences: {
      "Backend Developer":
        "개인 프로젝트와 클라이언트형 작업에서 운영을 전제로 한 백엔드, 마이그레이션 도구, 배포 흐름을 만들고 있습니다.",
      "Platform Builder":
        "출시 이후에도 유지보수해야 하는 서비스를 위해 API 계약, 배포 경로, 운영 문서를 설계했습니다.",
      "Backend Engineer":
        "겉보기 완성도보다 정확성이 중요한 데이터 모델링, API 동작, 인증, 디버깅 작업을 다뤘습니다.",
    },
    services: {
      "Backend API Development":
        "명확한 계약, 실용적인 데이터 모델, 배포 이후의 동작까지 고려한 API를 설계하고 구현합니다.",
      "Migration and Modernization":
        "이미 의존 중인 클라이언트와 워크플로를 깨지 않으면서 레거시 동작을 새로운 스택으로 옮깁니다.",
      "Deployment and Operations":
        "첫 배포 이후에도 시스템을 쉽게 운영할 수 있도록 배포 흐름, health check, 로그, 로컬 문서를 정리합니다.",
      "Product-Facing Backend Support":
        "앱과 서버 경계를 가로지르는 버그를 추적하고, 의도된 동작을 유지하며 실제 사용에서 버티는 수정을 만듭니다.",
    },
    contact: {
      body: "실용적인 빌드, 백엔드 정리, 차분하게 풀어야 하는 운영 문제라면 언제든 열려 있습니다.",
      copied: "이메일을 복사했습니다",
    },
  },
} as const;

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem("language");
    const nextLanguage = stored === "ko" ? "ko" : "en";

    setLanguage(nextLanguage);
    document.documentElement.lang = nextLanguage;
  }, []);

  const value = useMemo<LanguageContextValue>(() => {
    const toggleLanguage = () => {
      setLanguage((current) => {
        const next = current === "en" ? "ko" : "en";
        localStorage.setItem("language", next);
        document.documentElement.lang = next;
        return next;
      });
    };

    return {
      language,
      toggleLanguage,
      text: languageText[language],
    };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
