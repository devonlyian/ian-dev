import type { LanguageText } from "./types";

export const koText: LanguageText = {
    header: {
      switchToKorean: "Switch to English",
    },
    hero: {
      body:
        "실용적인 API를 만들고 지루할 만큼 안정적인 운영을 좋아하는 백엔드 개발자입니다. 느리면 고치고, 약하면 단단하게 만들고, 아직 배포되지 않았다면 끝까지 올립니다.",
    },
    about: {
      paragraphs: [
        {
          lead: "저는 백엔드 시스템, 인프라, 그리고 제품의 경계에서 주로 일합니다.",
          emphasis: "안정성이 실제로 보이는 지점",
          tail: "을 중요하게 봅니다.",
          emphasisTone: "foreground",
        },
        {
          lead: "최근에는 주로",
          emphasis: "Claude Code, Codex, 하네스 엔지니어링",
          tail: ". 개발 자동화와 반복 가능한 검증 흐름을 더 단단하게 만드는 데 집중하고 있습니다.",
          emphasisTone: "brand",
        },
      ],
    },
    projects: {
      archive: {
        backHome: "홈",
        title: "프로젝트",
        description:
          "백엔드, 제품, 마이그레이션, 인프라 작업을 더 넓게 모아둔 아카이브입니다. 각 항목은 간결한 케이스 스터디 페이지로 연결됩니다.",
      },
      taglines: {
        "readinggarden-kotlin-backend":
          "기존 Flutter 독서 기록 앱의 Django 백엔드를 Kotlin/Spring Boot로 전환한 레거시 호환 마이그레이션 프로젝트",
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
        "readinggarden-kotlin-backend":
          "기존 Flutter 독서 기록 앱의 Django 백엔드를 Kotlin/Spring Boot로 전환한 레거시 호환 마이그레이션 프로젝트",
        "nailtoctoc-backend":
          "네일 프린팅 서비스를 위한 MSA 기반 백엔드 플랫폼",
        "nailtoctoc-kiosk": "네일 프린팅 서비스를 위한 Flutter 기반 키오스크 애플리케이션",
        arffy: "20세기 유럽의 빈티지 조명과 소품을 판매하는 온라인 스토어",
        "amp-recommendation":
          "AMP 원우들의 회사 정보를 기반으로 협업 가능성이 높은 회사를 추천하고, 협업 기획서를 자동 생성하는 시스템",
        onde: "여행하면서 찍은 사진을 여정 순서로 저장 및 공유할 수 있는 서비스",
        gokkan: "빈티지 가구를 경매를 통해 사고 팔 수 있는 서비스",
        "document-approval":
          "교내 문서 결재 프로세스를 자동화하기 위해 RPA와 서버를 연동하여 결재 요청 및 처리, 문서 번호 발번까지 수행하는 시스템",
        "accounting-commission":
          "여행사의 송객수수료 계산과 수령증 작성 및 매칭 결과 작성 과정을 자동화하여 회계법인의 기장 업무를 지원하는 시스템",
      },
      highlights: {
        "readinggarden-kotlin-backend": [
          "**레거시 마이그레이션**: Django 기반 API를 Kotlin/Spring Boot로 재구현하며 기존 앱 계약 유지",
          "**도메인 모듈화**: auth, book, garden, memo, push, scheduler, app 도메인으로 패키지 구조 분리",
          "**API 호환성**: legacy response envelope, snake_case 필드, JWT 인증 흐름, 이미지 업로드/조회 경로 호환성 검증",
          "**DB 마이그레이션**: PostgreSQL + Flyway 기반 스키마 관리, Hibernate validate로 운영 스키마 안정성 확보",
          "**배포 자동화**: GitHub Actions와 Docker 이미지 기반 OCI A1 배포, Caddy upstream 전환을 통한 blue-green 배포 구성",
          "**운영 관측성**: Actuator/Prometheus metrics, Grafana dashboard, Loki 로그 수집, health/docs/smoke check 기반 운영 검증",
          "**테스트 전략**: Testcontainers PostgreSQL 통합 테스트와 legacy contract fixture로 Controller-Service-Repository 전체 흐름 검증",
        ],
        "nailtoctoc-backend": [
          "**MSA 아키텍처**: 7개 마이크로서비스를 도메인 기반으로 분리 (Gateway, User, Product, Order, Payment, Admin, Worker)",
          "**API Gateway**: Spring Cloud Gateway 기반 인증/인가, 라우팅, 로드밸런싱 처리",
          "**인프라 구축**: AWS EKS Kubernetes 클러스터 운영, Terraform IaC로 코드화",
          "**CI/CD**: ArgoCD GitOps Blue-Green 배포, 무중단 배포 및 자동 롤백",
          "**메시지 큐**: RabbitMQ 비동기 처리로 서비스 간 결합도 감소",
          "**DB 최적화**: PostgreSQL Read/Write Replica 분리, 읽기 부하 분산",
        ],
        "nailtoctoc-kiosk": [
          "**윈도우 데스크탑 앱**: Flutter Windows 기반 키오스크 앱 개발",
          "**영상 처리**: OpenCV 기반 손가락 감지 및 카메라 제어 모듈 연동",
          "**다국어 지원**: 한국어, 영어, 일본어, 중국어 4개 언어 지원",
          "**결제 연동**: 신용카드 결제 시스템 통합",
          "**하드웨어 제어**: 네일 프린터, 핑거 픽스처 모듈 연동",
        ],
        arffy: [
          "**실 서비스 운영**: 2023.12 ~ 2024.08 (9개월) 운영 경험",
          "**동시성 제어**: 비관적 락 적용으로 재고 차감 및 결제 중복 방지",
          "**보안**: JPA Converter 활용 개인정보 암호화 저장",
          "**인증**: JWT 토큰 인증 + OAuth 2.0 카카오 소셜 로그인",
          "**결제**: 포트원 API 연동 신용카드/간편결제 시스템 구현",
        ],
        "amp-recommendation": [
          "**벡터 검색**: Pinecone + 코사인 유사도 기반 협업 추천 알고리즘 개발",
          "**LLM 연동**: OpenAI API 활용 협업 기획서 자동 생성",
          "**데이터 모델링**: 원우 회사 정보, 매칭 결과, 협업 기록 스키마 설계",
          "**API 개발**: 회사 정보 CRUD, 추천 결과 조회, 기획서 생성 REST API 구현",
        ],
        onde: [
          "**Batch 처리**: Spring Batch Soft Delete 데이터 일괄 정리 배치 구현",
          "**쿼리 최적화**: QueryDSL 동적 쿼리로 복잡한 검색 조건 처리",
          "**파일 저장**: AWS S3 연동 이미지 업로드/조회 구현",
          "**API 개발**: 여정 북마크 및 댓글 기능 REST API 구현",
          "**CI/CD**: GitHub Actions 자동 빌드/배포 파이프라인 구축",
        ],
        gokkan: [
          "**팀 리딩**: 팀장으로서 프로젝트 일정 관리 및 기술 의사결정",
          "**실시간 처리**: WebSocket(SockJS, STOMP) 실시간 경매 응찰 시스템 구현",
          "**도메인 설계**: 전문가 검수 → 상품 등록 → 경매 프로세스 설계",
          "**결제/인증**: 포트원 결제 + OAuth 2.0 소셜 로그인 연동",
          "**CI/CD**: Jenkins 자동 빌드/배포 파이프라인 구축",
        ],
        "document-approval": [
          "**캐싱**: Redis 활용 문서 정보 및 결재자 리스트 저장/관리",
          "**메일 자동화**: 결재 진행 시 다음 결재자에게 자동 메일 전송",
          "**템플릿**: JavaMail API + Thymeleaf 결재 요청 메일 템플릿 제작",
          "**RPA 연동**: Brity RPA 연동 최종 결재 시 문서 번호 자동 발번",
        ],
        "accounting-commission": [
          "**OCR 처리**: Clova OCR로 여권, 항공편, 영수증 사진 텍스트 추출",
          "**AI 분류**: OpenAI API 활용 사진 종류 자동 분류 및 JSON 구조화",
          "**매칭 로직**: 여행사 매출내역 데이터 매칭 및 수수료 계산 구현",
          "**RPA 연동**: Brity RPA 연동 수령증 자동 생성",
          "**성과**: 데이터 처리 시간 80% 단축",
        ],
      },
    },
    experiences: {
      "nooook-studio":
        "NooooK Studio 팀 프로젝트로 독서가든 Kotlin 마이그레이션과 반려견·반려묘 관리 앱을 만들고 있으며, 기존 앱 계약을 유지하면서 Spring Boot, PostgreSQL, 배포 자동화, 운영 검증 흐름을 구축했습니다.",
      nailtoctoc:
        "7개 마이크로서비스 설계와 구현, AWS EKS Kubernetes 인프라 구축, PostgreSQL Read/Write Replica 분리, ArgoCD GitOps Blue-Green 배포, RabbitMQ 기반 비동기 처리를 담당했습니다.",
      mining5000:
        "3개 고객사 프로젝트의 백엔드 API를 설계하고 구현했으며, Clova OCR과 OpenAI API 기반 데이터 처리, Pinecone 협업 추천, RPA 자동화 솔루션을 납품했습니다.",
      arffy:
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
  };
