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
        "Claude Code, Codex, and harness engineering",
        "I focus on tightening development automation and repeatable verification flows.",
      ],
    },
    projects: {
      taglines: {},
      descriptions: {},
      caseStudies: {},
    },
    experiences: {},
    services: {},
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
        "Claude Code, Codex, 하네스 엔지니어링",
        "개발 자동화와 반복 가능한 검증 흐름을 더 단단하게 만드는 데 집중하고 있습니다.",
      ],
    },
    projects: {
      taglines: {
        "nailtoctoc-backend": "네일 프린팅 서비스를 위한 MSA 기반 백엔드 플랫폼.",
        "nailtoctoc-kiosk": "네일 프린팅 워크플로를 위한 Flutter Windows 키오스크 앱.",
        arffy: "20세기 유럽 빈티지 조명과 소품을 판매하는 온라인 스토어.",
        "amp-recommendation": "AMP 원우 회사 정보를 기반으로 협업 가능성을 추천하고 기획서를 생성하는 시스템.",
        onde: "여행 사진을 여정 순서로 저장하고 공유할 수 있는 서비스.",
        gokkan: "빈티지 가구를 실시간 경매로 사고 팔 수 있는 서비스.",
        "document-approval": "RPA와 서버를 연동한 교내 문서 결재 자동화 시스템.",
        "accounting-commission": "여행사 송객수수료 계산과 수령증 작성, 매칭 결과 작성을 자동화한 시스템.",
      },
      descriptions: {
        "nailtoctoc-backend":
          "7개 마이크로서비스를 도메인 기반으로 분리하고 AWS EKS, Terraform, ArgoCD GitOps, RabbitMQ, Redis, PostgreSQL을 활용해 백엔드와 운영 인프라를 구축했습니다.",
        "nailtoctoc-kiosk":
          "카메라 제어, OpenCV 기반 손가락 감지, 다국어 지원, 결제 연동, 네일 프린터와 핑거 픽스처 모듈 연동을 포함한 키오스크 앱을 개발했습니다.",
        arffy:
          "빈티지 조명 스토어의 백엔드를 설계하고 9개월간 운영하면서 재고 동시성, 개인정보 암호화, JWT/OAuth 인증, 포트원 결제를 구현했습니다.",
        "amp-recommendation":
          "Pinecone 벡터 검색과 OpenAI API를 활용해 협업 가능성이 높은 회사를 추천하고 협업 기획서를 자동 생성하는 백엔드를 구현했습니다.",
        onde:
          "여정 순서 기반 사진 저장/공유를 위해 Spring Batch 정리 배치, QueryDSL 동적 검색, S3 이미지 업로드, 북마크와 댓글 API를 구현했습니다.",
        gokkan:
          "팀장과 백엔드 개발자로 일정과 기술 의사결정을 맡고, WebSocket 실시간 경매 응찰, 상품 검수 흐름, 결제, 소셜 로그인을 구현했습니다.",
        "document-approval":
          "Redis 캐싱, JavaMail과 Thymeleaf 메일 템플릿, Brity RPA 연동을 통해 결재 요청과 최종 문서 번호 발번을 자동화했습니다.",
        "accounting-commission":
          "Clova OCR, OpenAI API, Brity RPA를 연동해 여권/항공편/영수증 이미지 처리, 매출 매칭, 수수료 계산과 수령증 생성을 자동화했습니다.",
      },
      caseStudies: {
        "nailtoctoc-backend": {
          overview:
            "NailTocToc MSA Backend는 네일 프린팅 서비스를 위한 백엔드 플랫폼으로, Gateway, User, Product, Order, Payment, Admin, Worker 7개 마이크로서비스로 구성했습니다.",
          challenge:
            "도메인별 독립 배포, 안정적인 API 라우팅, 비동기 처리, 읽기 부하 분산, 환경 복제가 가능한 인프라 구성이 필요했습니다.",
          solution:
            "Spring Cloud Gateway 인증/인가와 라우팅, RabbitMQ 메시징, PostgreSQL Read/Write Replica, AWS EKS, Terraform IaC, ArgoCD Blue-Green 배포를 구축했습니다.",
          impact:
            "도메인별 독립 배포와 서비스 간 결합도 감소, 읽기 성능 최적화, 자동 롤백 가능한 GitOps 배포 흐름을 확보했습니다.",
        },
        "nailtoctoc-kiosk": {
          overview:
            "NailTocToc Kiosk는 네일 프린팅 현장에서 사용하는 Windows 데스크톱 키오스크 앱입니다.",
          challenge:
            "데스크톱 하드웨어, 카메라, 손가락 감지, 결제, 다국어 UI, 프린터 제어가 하나의 고객 플로우 안에서 안정적으로 동작해야 했습니다.",
          solution:
            "Flutter Windows 앱을 개발하고 OpenCV 기반 손가락 감지, 카메라 제어, 4개 언어 지원, 신용카드 결제, 네일 프린터와 픽스처 모듈 연동을 구현했습니다.",
          impact:
            "사용자가 현장에서 네일 프린팅 과정을 진행할 수 있는 완성도 있는 키오스크 앱 흐름을 만들었습니다.",
        },
        arffy: {
          overview:
            "Arffy는 20세기 유럽 빈티지 조명과 소품을 판매하는 온라인 스토어입니다.",
          challenge:
            "실제 결제와 재고 차감이 있는 커머스 서비스에서 중복 결제와 재고 동시성 문제를 막고, 개인정보를 안전하게 보관해야 했습니다.",
          solution:
            "비관적 락으로 재고 차감과 결제 중복을 방지하고, JPA Converter로 개인정보를 암호화했으며, JWT와 Kakao OAuth, 포트원 결제를 연동했습니다.",
          impact:
            "9개월간 운영 가능한 스토어 백엔드와 안전한 인증/결제/개인정보 처리 흐름을 만들었습니다.",
        },
        "amp-recommendation": {
          overview:
            "AMP Recommendation은 AMP 원우들의 회사 정보를 기반으로 협업 가능성이 높은 회사를 추천하고 협업 기획서를 자동 생성하는 시스템입니다.",
          challenge:
            "회사 정보를 벡터 검색 가능한 형태로 만들고, 추천 결과가 바로 협업 기획서 작성으로 이어져야 했습니다.",
          solution:
            "Pinecone과 코사인 유사도 기반 추천 알고리즘, OpenAI API 기반 기획서 생성, 회사/매칭/협업 기록 스키마와 REST API를 구현했습니다.",
          impact:
            "벡터 검색과 LLM 생성을 실제 협업 후보 탐색과 기획서 작성 흐름으로 연결했습니다.",
        },
        onde: {
          overview:
            "ONDe는 여행하면서 찍은 사진을 여정 순서로 저장하고 공유할 수 있는 서비스입니다.",
          challenge:
            "이미지 저장, 여정 검색, 삭제 데이터 정리, 북마크와 댓글 같은 소셜 기능을 함께 지원해야 했습니다.",
          solution:
            "Spring Batch로 Soft Delete 데이터를 정리하고, QueryDSL 동적 쿼리와 AWS S3 이미지 업로드/조회, 여정 북마크와 댓글 REST API를 구현했습니다.",
          impact:
            "여행 콘텐츠를 저장하고 조회하는 핵심 API와 유지보수 가능한 데이터 정리 흐름을 만들었습니다.",
        },
        gokkan: {
          overview:
            "Gokkan은 빈티지 가구를 경매를 통해 사고 팔 수 있는 서비스입니다.",
          challenge:
            "전문가 검수부터 상품 등록, 실시간 경매, 결제, 소셜 로그인, 배포 자동화까지 하나의 서비스 흐름으로 설계해야 했습니다.",
          solution:
            "팀장으로 일정과 기술 의사결정을 맡고, WebSocket(SockJS, STOMP) 실시간 응찰, 포트원 결제, OAuth 로그인, Jenkins 배포 파이프라인을 구현했습니다.",
          impact:
            "실시간 경매 응찰과 상품 검수부터 결제까지 이어지는 백엔드 흐름을 완성했습니다.",
        },
        "document-approval": {
          overview:
            "Document Approval은 교내 문서 결재 프로세스를 자동화하기 위해 RPA와 서버를 연동한 시스템입니다.",
          challenge:
            "결재자 정보 관리, 다음 결재자 메일 전송, 결재 요청 템플릿, 최종 문서 번호 발번을 반복 작업 없이 처리해야 했습니다.",
          solution:
            "Redis로 문서 정보와 결재자 리스트를 관리하고, JavaMail API와 Thymeleaf로 메일 템플릿을 만들었으며, Brity RPA로 최종 문서 번호 발번을 연동했습니다.",
          impact:
            "수작업 중심의 결재 흐름을 자동화해 반복 작업을 줄이고 결재 진행을 더 일관되게 만들었습니다.",
        },
        "accounting-commission": {
          overview:
            "Accounting Commission은 여행사의 송객수수료 계산과 수령증 작성, 매칭 결과 작성을 자동화해 회계법인의 기장 업무를 지원하는 시스템입니다.",
          challenge:
            "여권, 항공편, 영수증 이미지와 여행사 매출내역을 수작업으로 읽고 매칭하는 과정이 오래 걸렸습니다.",
          solution:
            "Clova OCR로 이미지 텍스트를 추출하고, OpenAI API로 사진 종류를 분류해 JSON으로 구조화했으며, 매칭 로직과 Brity RPA 수령증 생성을 구현했습니다.",
          impact:
            "데이터 처리 시간을 80% 단축하고 반복적인 회계 지원 작업을 더 일관되게 만들었습니다.",
        },
      },
    },
    experiences: {
      "Backend Developer / 대리":
        "7개 마이크로서비스 설계와 구현, AWS EKS Kubernetes 인프라 구축, PostgreSQL Read/Write Replica 분리, ArgoCD GitOps Blue-Green 배포, RabbitMQ 기반 비동기 처리를 담당했습니다.",
      "Backend Developer / 주임":
        "3개 고객사 프로젝트의 백엔드 API를 설계하고 구현했으며, Clova OCR과 OpenAI API 기반 데이터 처리, Pinecone 협업 추천, RPA 자동화 솔루션을 납품했습니다.",
      "Backend Developer":
        "빈티지 조명 스토어 백엔드를 전체 설계하고 9개월간 운영했으며, 비관적 락, 개인정보 암호화, JWT/Kakao OAuth, 포트원 결제를 구현했습니다.",
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
