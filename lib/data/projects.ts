import type { ProjectContent } from "./types";

export const projects = [
  {
    slug: "readinggarden-kotlin-backend",
    title: "ReadingGarden Kotlin Migration Backend",
    role: "Backend Developer / DevOps",
    eyebrow: "Backend Developer / DevOps",
    year: "2026",
    category: "Kotlin Migration",
    tagline: "Legacy-compatible migration project that replaced the Django backend of an existing Flutter reading log app with Kotlin/Spring Boot",
    featured: true,
    status: "Live",
    tags: [
    "Kotlin",
    "Spring Boot 4",
    "Spring Security",
    "PostgreSQL",
    "Flyway",
    "Firebase Admin SDK",
    "SpringDoc OpenAPI",
    "Docker",
    "GitHub Actions",
    "Oracle Cloud A1",
    "Caddy",
    "Prometheus",
    "Grafana",
    "Loki",
    "Testcontainers"
  ],
    links: [
    {
      "label": "App Store",
      "url": "https://apps.apple.com/kr/app/%EB%8F%85%EC%84%9C%EA%B0%80%EB%93%A0/id6762419765"
    },
    {
      "label": "Play Store",
      "url": "https://play.google.com/store/apps/details?id=com.dokseogarden&pcampaignid=web_share"
    }
  ],
    liveUrl: "https://apps.apple.com/kr/app/%EB%8F%85%EC%84%9C%EA%B0%80%EB%93%A0/id6762419765",
    highlights: [
    "**Legacy Migration**: Reimplemented Django-based APIs in Kotlin/Spring Boot while preserving the existing app contract",
    "**Domain Modularization**: Split package structure into auth, book, garden, memo, push, scheduler, and app domains",
    "**API Compatibility**: Verified compatibility for legacy response envelopes, snake_case fields, JWT authentication flow, and image upload/retrieval paths",
    "**DB Migration**: Managed schema changes with PostgreSQL + Flyway and secured production schema stability with Hibernate validate",
    "**Deployment Automation**: Built OCI A1 deployment with GitHub Actions and Docker images, including blue-green deployment through Caddy upstream switching",
    "**Operational Observability**: Configured Actuator/Prometheus metrics, Grafana dashboards, Loki log collection, and health/docs/smoke check based operations",
    "**Test Strategy**: Verified the full Controller-Service-Repository flow with Testcontainers PostgreSQL integration tests and legacy contract fixtures"
  ],
    screenshots: [
    {
      "label": "App Store Screenshot 01",
      "src": "/projects/readinggarden-kotlin-backend/app-store-1.jpg",
      "alt": "ReadingGarden App Store screenshot 1"
    },
    {
      "label": "App Store Screenshot 02",
      "src": "/projects/readinggarden-kotlin-backend/app-store-2.jpg",
      "alt": "ReadingGarden App Store screenshot 2"
    },
    {
      "label": "App Store Screenshot 03",
      "src": "/projects/readinggarden-kotlin-backend/app-store-3.jpg",
      "alt": "ReadingGarden App Store screenshot 3"
    }
  ],
  },
  {
    slug: "nailtoctoc-backend",
    title: "NailTocToc MSA Backend",
    role: "Backend Developer / DevOps",
    eyebrow: "Backend Developer / DevOps",
    year: "2026",
    category: "Kotlin MSA",
    tagline: "MSA-based backend platform for nail printing service",
    featured: true,
    status: "Live",
    tags: [
    "Kotlin",
    "Spring Boot 3",
    "PostgreSQL",
    "Redis",
    "RabbitMQ",
    "Docker",
    "Kubernetes",
    "AWS EKS, RDS, MQ, ElastiCache, EC2",
    "Terraform",
    "ArgoCD"
  ],
    links: [
    {
      "label": "App Store",
      "url": "https://apps.apple.com/kr/app/%EB%84%A4%EC%9D%BC%ED%86%A1%ED%86%A1/id6746323705"
    },
    {
      "label": "Play Store",
      "url": "https://play.google.com/store/apps/details?id=com.nailtoctoc.nailtoctoc&pcampaignid=web_share"
    }
  ],
    liveUrl: "https://apps.apple.com/kr/app/%EB%84%A4%EC%9D%BC%ED%86%A1%ED%86%A1/id6746323705",
    highlights: [
    "**MSA Architecture**: Domain-based separation into 7 microservices (Gateway, User, Product, Order, Payment, Admin, Worker)",
    "**API Gateway**: Authentication/authorization, routing, load balancing via Spring Cloud Gateway",
    "**Infrastructure**: AWS EKS Kubernetes cluster operation, codified with Terraform IaC",
    "**CI/CD**: ArgoCD GitOps Blue-Green deployment with zero-downtime and automatic rollback",
    "**Message Queue**: RabbitMQ async processing reducing inter-service coupling",
    "**DB Optimization**: PostgreSQL Read/Write Replica separation for read load distribution"
  ],
    screenshots: [
    {
      "label": "App Store Screenshot 01",
      "src": "/projects/nailtoctoc-backend/app-store-1.jpg",
      "alt": "NailTocToc App Store screenshot 1"
    },
    {
      "label": "App Store Screenshot 02",
      "src": "/projects/nailtoctoc-backend/app-store-2.jpg",
      "alt": "NailTocToc App Store screenshot 2"
    },
    {
      "label": "App Store Screenshot 03",
      "src": "/projects/nailtoctoc-backend/app-store-3.jpg",
      "alt": "NailTocToc App Store screenshot 3"
    }
  ],
  },
  {
    slug: "nailtoctoc-kiosk",
    title: "NailTocToc Kiosk",
    role: "Flutter Developer",
    eyebrow: "Flutter Developer",
    year: "2026",
    category: "Flutter Kiosk",
    tagline: "Flutter-based kiosk application for nail printing service",
    featured: true,
    status: "Case Study",
    tags: [
    "Flutter",
    "Dart",
    "OpenCV",
    "Windows"
  ],
    highlights: [
    "**Windows Desktop App**: Flutter Windows-based kiosk application development",
    "**Image Processing**: OpenCV-based finger detection and camera control module integration",
    "**Multi-language**: Support for 4 languages (Korean, English, Japanese, Chinese)",
    "**Payment Integration**: Credit card payment system integration",
    "**Hardware Control**: Nail printer, finger fixture module integration"
  ],
    screenshots: [],
  },
  {
    slug: "arffy",
    title: "Arffy",
    role: "Backend Developer",
    eyebrow: "Backend Developer",
    year: "2023",
    category: "Kotlin Store",
    tagline: "Online store selling 20th century European vintage lighting and accessories",
    featured: true,
    status: "Live",
    tags: [
    "Kotlin",
    "Spring Boot 2",
    "MySQL",
    "AWS EC2/S3/RDS",
    "Docker"
  ],
    links: [
    {
      "label": "GitHub",
      "url": "https://github.com/devonlyian/store"
    }
  ],
    githubUrl: "https://github.com/devonlyian/store",
    highlights: [
    "**Production Service**: 9 months operation experience (2023.12 ~ 2024.08)",
    "**Concurrency Control**: Pessimistic locking for inventory deduction and payment duplication prevention",
    "**Security**: Encrypted personal information storage using JPA Converter",
    "**Authentication**: JWT token auth + OAuth 2.0 Kakao social login",
    "**Payment**: PortOne API integration for credit card/simple payment system"
  ],
    screenshots: [],
  },
  {
    slug: "gokkan",
    title: "Gokkan",
    role: "Team Lead / Backend Developer",
    eyebrow: "Team Lead / Backend Developer",
    year: "2024",
    category: "Java Auction",
    tagline: "Auction service for buying and selling vintage furniture",
    featured: false,
    status: "Case Study",
    tags: [
    "Java 11",
    "Spring Boot 2",
    "WebSocket (SockJS, STOMP)",
    "MySQL",
    "Redis",
    "AWS EC2/S3/RDS",
    "Docker",
    "Jenkins"
  ],
    links: [
    {
      "label": "GitHub",
      "url": "https://github.com/TEAM-GOKKAN/server"
    }
  ],
    githubUrl: "https://github.com/TEAM-GOKKAN/server",
    highlights: [
    "**Team Leadership**: Project schedule management and technical decision-making as team leader",
    "**Real-time Processing**: WebSocket(SockJS, STOMP) real-time auction bidding system",
    "**Domain Design**: Expert inspection → product registration → auction process design",
    "**Payment/Auth**: PortOne payment + OAuth 2.0 social login integration",
    "**CI/CD**: Jenkins automated build/deploy pipeline"
  ],
    screenshots: [],
  },
  {
    slug: "onde",
    title: "ONDe",
    role: "Backend Developer",
    eyebrow: "Backend Developer",
    year: "2024",
    category: "Java Backend",
    tagline: "Service to save and share travel photos in journey order",
    featured: false,
    status: "Case Study",
    tags: [
    "Java 11",
    "Spring Boot 2.7",
    "Spring Security",
    "Spring Batch",
    "Spring Data JPA",
    "QueryDSL",
    "MySQL",
    "Redis",
    "AWS EC2/S3/RDS",
    "Docker",
    "GitHub Actions"
  ],
    links: [
    {
      "label": "GitHub",
      "url": "https://github.com/devonlyian/tHere"
    }
  ],
    githubUrl: "https://github.com/devonlyian/tHere",
    highlights: [
    "**Batch Processing**: Spring Batch implementation for soft delete data cleanup",
    "**Query Optimization**: Complex search conditions handled with QueryDSL dynamic queries",
    "**File Storage**: AWS S3 integration for image upload/retrieval",
    "**API Development**: Journey bookmark and comment REST API implementation",
    "**CI/CD**: GitHub Actions automated build/deploy pipeline"
  ],
    screenshots: [],
  },
  {
    slug: "amp-recommendation",
    title: "AMP Collaboration Recommendation System",
    role: "Backend Developer",
    eyebrow: "Backend Developer",
    year: "2025",
    category: "AI Backend",
    tagline: "System that recommends companies with high collaboration potential based on AMP alumni company information and automatically generates collaboration proposals",
    featured: false,
    status: "Case Study",
    tags: [
    "Kotlin",
    "Spring Boot 3",
    "Pinecone",
    "OpenAI API",
    "MySQL"
  ],
    highlights: [
    "**Vector Search**: Collaboration recommendation algorithm using Pinecone + cosine similarity",
    "**LLM Integration**: Auto-generated collaboration proposals using OpenAI API",
    "**Data Modeling**: Schema design for alumni company info, matching results, and collaboration records",
    "**API Development**: Company info CRUD, recommendation results, proposal generation REST API"
  ],
    screenshots: [],
  },
  {
    slug: "document-approval",
    title: "Document Approval System",
    role: "Backend Developer",
    eyebrow: "Backend Developer",
    year: "2025",
    category: "RPA Backend",
    tagline: "System that automates document approval process by integrating RPA with server for approval requests, processing, and document number issuance",
    featured: false,
    status: "Case Study",
    tags: [
    "Kotlin",
    "Spring Boot 3",
    "Redis",
    "Thymeleaf",
    "MySQL",
    "JavaMail API",
    "Brity RPA"
  ],
    highlights: [
    "**Caching**: Document info and approver list storage/management using Redis",
    "**Email Automation**: Automatic email notification to next approver during approval process",
    "**Templates**: Approval request email templates using JavaMail API + Thymeleaf",
    "**RPA Integration**: Brity RPA integration for automatic document number issuance upon final approval"
  ],
    screenshots: [],
  },
  {
    slug: "accounting-commission",
    title: "Accounting Commission System",
    role: "Backend Developer",
    eyebrow: "Backend Developer",
    year: "2025",
    category: "AI Automation",
    tagline: "System that automates travel agency commission calculation and receipt generation to support accounting firm bookkeeping",
    featured: false,
    status: "Case Study",
    tags: [
    "Kotlin",
    "Spring Boot 3",
    "Clova OCR",
    "OpenAI API",
    "Brity RPA"
  ],
    highlights: [
    "**OCR Processing**: Text extraction from passport, flight, receipt photos using Clova OCR",
    "**AI Classification**: Automatic photo classification and JSON structuring using OpenAI API",
    "**Matching Logic**: Travel agency sales data matching and commission calculation",
    "**RPA Integration**: Brity RPA integration for automatic receipt generation",
    "**Result**: Reduced data processing time by 80%"
  ],
    screenshots: [],
  }
] as const satisfies readonly ProjectContent[];

export type ProjectSlug = (typeof projects)[number]["slug"];
export type Project = ProjectContent & { slug: ProjectSlug };
