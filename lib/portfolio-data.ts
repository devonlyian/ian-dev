export type SectionId = "hero" | "about" | "projects" | "experience" | "services" | "contact";

export type NavigationSection = {
  id: SectionId;
  label: string;
  index: string;
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  year: string;
  category: string;
  tagline: string;
  description: string;
  featured: boolean;
  status: "Live" | "Case Study" | "WIP";
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudy: {
    overview: string;
    challenge: string;
    solution: string;
    impact: string;
  };
  screenshots: string[];
  results: Array<{
    value: string;
    label: string;
  }>;
};

export type Experience = {
  period: string;
  location: string;
  title: string;
  company: string;
  status: string;
  summary: string;
  stack: string[];
};

export type Service = {
  title: string;
  description: string;
  stack: string[];
};

export const navigationSections: NavigationSection[] = [
  { id: "hero", label: "Home", index: "00" },
  { id: "about", label: "About", index: "01" },
  { id: "projects", label: "Projects", index: "02" },
  { id: "experience", label: "Experience", index: "03" },
  { id: "services", label: "Services", index: "04" },
  { id: "contact", label: "Contact", index: "05" },
];

export const portfolio = {
  owner: {
    name: "Ian Kim",
    initials: "IK",
    role: "Backend Developer",
    email: "devonlyian@gmail.com",
    location: "South Korea",
    github: "https://github.com/devonlyian",
    linkedin: "https://www.linkedin.com/in/ian-kim-38b0582b0/",
    siteUrl: "https://ianonly.dev",
  },
  hero: {
    kicker: "Available for backend work",
    intro: "Hey, I'm Ian Kim",
    headline: "I build things that don't break.",
    body:
      "Kotlin/Spring backend developer with experience in MSA design, AWS EKS infrastructure, and GitOps-based CI/CD pipelines.",
    primaryCta: "View My Work",
    secondaryCta: "Let's Talk",
  },
  about: {
    title: "The short version.",
    paragraphs: [
      "Backend developer with Kotlin/Spring expertise, from MSA design to AWS EKS infrastructure and GitOps-based CI/CD pipelines.",
      "I care about clear communication, maintainable operations, and continuously learning new tools that improve development productivity.",
    ],
  },
  technologies: [
    "Kotlin",
    "Spring Boot",
    "Java",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "RabbitMQ",
    "Docker",
    "Kubernetes",
    "AWS",
    "Terraform",
    "ArgoCD",
    "GitHub Actions",
    "Codex",
    "Claude Code",
  ],
  contact: {
    title: "Say hey.",
    body: "Always open to a practical build, a backend cleanup, or a production problem that needs a calm pair of hands.",
  },
};

export const projects: Project[] = [
  {
    slug: "nailtoctoc-backend",
    title: "NailTocToc MSA Backend",
    eyebrow: "Backend / DevOps",
    year: "2026",
    category: "Kotlin MSA",
    tagline: "MSA-based backend platform for a nail printing service.",
    description:
      "Designed and implemented a domain-driven MSA backend with AWS EKS, Terraform, ArgoCD GitOps, RabbitMQ, Redis, and PostgreSQL.",
    featured: true,
    status: "Live",
    tags: ["Kotlin", "Spring Boot 3", "PostgreSQL", "RabbitMQ", "AWS EKS", "Terraform", "ArgoCD"],
    liveUrl: "https://apps.apple.com/kr/app/%EB%84%A4%EC%9D%BC%ED%86%A1%ED%86%A1/id6746323705",
    caseStudy: {
      overview:
        "NailTocToc MSA Backend is the backend platform for a nail printing service, separated into seven microservices across Gateway, User, Product, Order, Payment, Admin, and Worker domains.",
      challenge:
        "The platform needed independent domain deployment, stable API routing, asynchronous processing, database read optimization, and infrastructure that could be reproduced across environments.",
      solution:
        "I implemented Spring Cloud Gateway based routing and auth flow, RabbitMQ asynchronous messaging, PostgreSQL Read/Write Replica separation, AWS EKS infrastructure, Terraform IaC, and ArgoCD Blue-Green deployment.",
      impact:
        "The system gained domain-based independent deployment, reduced service coupling, improved read scalability, and a GitOps deployment path with automatic rollback support.",
    },
    screenshots: ["MSA Domains", "EKS Infrastructure", "GitOps Deployment"],
    results: [
      { value: "7", label: "Microservices" },
      { value: "0", label: "Downtime deploy target" },
      { value: "IaC", label: "Terraform managed" },
    ],
  },
  {
    slug: "nailtoctoc-kiosk",
    title: "NailTocToc Kiosk",
    eyebrow: "Flutter Kiosk",
    year: "2026",
    category: "Flutter App",
    tagline: "Flutter Windows kiosk app for a nail printing workflow.",
    description:
      "Built a kiosk application for nail printing with camera control, OpenCV-based finger detection, multilingual support, payment integration, and hardware module coordination.",
    featured: true,
    status: "Case Study",
    tags: ["Flutter", "Dart", "OpenCV", "Windows", "Payment", "Hardware"],
    caseStudy: {
      overview:
        "NailTocToc Kiosk is a Windows desktop kiosk application that connects camera input, finger fixture modules, nail printer control, and payment flow into one customer-facing workflow.",
      challenge:
        "The application needed to behave like a polished kiosk while coordinating desktop hardware, camera modules, image processing, payment, and multiple languages.",
      solution:
        "I built the Flutter Windows app and integrated OpenCV-based finger detection, camera control, Korean/English/Japanese/Chinese language support, credit card payment, and nail printer fixture modules.",
      impact:
        "The kiosk became a complete front-of-house application that could guide users through the nail printing process while communicating with backend and hardware components.",
    },
    screenshots: ["Kiosk Flow", "Camera Module", "Printer Control"],
    results: [
      { value: "4", label: "Languages" },
      { value: "Win", label: "Desktop target" },
      { value: "HW", label: "Module integration" },
    ],
  },
  {
    slug: "arffy",
    title: "Arffy",
    eyebrow: "Commerce Backend",
    year: "2023",
    category: "Kotlin Store",
    tagline: "Online store for 20th century European vintage lighting and accessories.",
    description:
      "Designed and operated a vintage lighting commerce backend with inventory concurrency control, encrypted personal data, JWT/OAuth auth, and PortOne payments.",
    featured: true,
    status: "Live",
    tags: ["Kotlin", "Spring Boot 2", "MySQL", "AWS EC2", "AWS S3", "Docker", "PortOne"],
    githubUrl: "https://github.com/devonlyian/store",
    caseStudy: {
      overview:
        "Arffy is an online store for vintage lighting and accessories, operated as a real service for nine months from December 2023 to August 2024.",
      challenge:
        "Commerce behavior needed to prevent duplicated payment and inventory deduction while keeping user data secure and authentication practical.",
      solution:
        "I applied pessimistic locking for inventory and payment duplication prevention, encrypted personal information through JPA Converter, implemented JWT and Kakao OAuth login, and integrated PortOne card/simple payments.",
      impact:
        "The service gained safer checkout behavior, production authentication, encrypted sensitive fields, and a complete payment flow suitable for real users.",
    },
    screenshots: ["Store Backend", "Payment Flow", "Security Layer"],
    results: [
      { value: "9mo", label: "Production run" },
      { value: "JWT", label: "Auth flow" },
      { value: "Lock", label: "Concurrency guard" },
    ],
  },
  {
    slug: "amp-recommendation",
    title: "AMP Recommendation",
    eyebrow: "AI Matching",
    year: "2025",
    category: "AI Backend",
    tagline: "Collaboration recommendation and proposal generation system for AMP members.",
    description:
      "Built a backend that recommends collaboration partners using company information, Pinecone vector search, and OpenAI-powered proposal generation.",
    featured: true,
    status: "Case Study",
    tags: ["Kotlin", "Spring Boot 3", "Pinecone", "OpenAI API", "MySQL"],
    caseStudy: {
      overview:
        "AMP Recommendation analyzes company information from AMP members to recommend companies with high collaboration potential and generate collaboration proposals.",
      challenge:
        "The system needed to transform business profile data into searchable embeddings and return recommendation results that could lead directly into a proposal document.",
      solution:
        "I implemented a Pinecone and cosine similarity based recommendation algorithm, integrated OpenAI API for proposal generation, designed schemas for company, matching result, and collaboration history data, and built REST APIs for CRUD and generation flows.",
      impact:
        "The system connected vector search and LLM generation into a practical workflow for finding collaboration candidates and drafting proposals.",
    },
    screenshots: ["Vector Search", "Proposal Generation", "Company Data"],
    results: [
      { value: "AI", label: "Proposal generation" },
      { value: "Vec", label: "Similarity search" },
      { value: "REST", label: "API surface" },
    ],
  },
  {
    slug: "onde",
    title: "ONDe",
    eyebrow: "Travel Service",
    year: "2024",
    category: "Java Backend",
    tagline: "Travel photo journey storage and sharing service.",
    description:
      "Built backend features for storing and sharing travel photos in journey order, including batch cleanup, dynamic search, image upload, bookmarks, and comments.",
    featured: false,
    status: "Case Study",
    tags: ["Java 11", "Spring Boot 2.7", "Spring Batch", "QueryDSL", "MySQL", "Redis", "AWS S3"],
    githubUrl: "https://github.com/devonlyian/tHere",
    caseStudy: {
      overview:
        "ONDe is a travel service that lets users store and share photos in the order of a journey.",
      challenge:
        "The backend needed to support image storage, journey search, soft-deleted data cleanup, and social interactions such as bookmarks and comments.",
      solution:
        "I implemented Spring Batch cleanup for soft-deleted data, QueryDSL dynamic search, AWS S3 image upload and retrieval, and REST APIs for journey bookmarks and comments.",
      impact:
        "The project gained maintainable data cleanup, flexible search behavior, and core travel content APIs.",
    },
    screenshots: ["Journey API", "Batch Cleanup", "S3 Upload"],
    results: [
      { value: "Batch", label: "Cleanup flow" },
      { value: "S3", label: "Image storage" },
      { value: "REST", label: "Content APIs" },
    ],
  },
  {
    slug: "gokkan",
    title: "Gokkan",
    eyebrow: "Auction Backend",
    year: "2024",
    category: "Java Auction",
    tagline: "Vintage furniture auction service with realtime bidding.",
    description:
      "Led and implemented a backend for buying and selling vintage furniture through auctions, including realtime bidding, product review flow, payment, social login, and CI/CD.",
    featured: false,
    status: "Case Study",
    tags: ["Java 11", "Spring Boot 2", "WebSocket", "STOMP", "MySQL", "Redis", "AWS", "Jenkins"],
    githubUrl: "https://github.com/TEAM-GOKKAN/server",
    caseStudy: {
      overview:
        "Gokkan is a vintage furniture auction service where users can buy and sell furniture through a realtime auction flow.",
      challenge:
        "The backend needed to support auction lifecycle design, realtime bidding, payment, social login, deployment automation, and team-level technical decisions.",
      solution:
        "As team lead and backend developer, I managed schedule and technical decisions, implemented WebSocket bidding with SockJS/STOMP, designed expert review to product registration to auction flow, integrated PortOne payment and OAuth social login, and built Jenkins deployment.",
      impact:
        "The service gained realtime auction behavior and a complete backend flow from product verification to bidding and payment.",
    },
    screenshots: ["Realtime Auction", "Product Review", "Jenkins Deploy"],
    results: [
      { value: "RT", label: "Realtime bidding" },
      { value: "Lead", label: "Team role" },
      { value: "CI/CD", label: "Jenkins deploy" },
    ],
  },
  {
    slug: "document-approval",
    title: "Document Approval",
    eyebrow: "Workflow Automation",
    year: "2025",
    category: "RPA Backend",
    tagline: "School document approval workflow automation with RPA integration.",
    description:
      "Automated document approval requests, approval processing, email notifications, Redis caching, and final document number assignment through RPA integration.",
    featured: false,
    status: "Case Study",
    tags: ["Kotlin", "Spring Boot 3", "Redis", "Thymeleaf", "MySQL", "JavaMail", "Brity RPA"],
    caseStudy: {
      overview:
        "Document Approval automates a school document approval process by connecting server-side approval flow with Brity RPA.",
      challenge:
        "The workflow needed to manage approval metadata, notify the next approver, render email templates, and assign final document numbers through RPA.",
      solution:
        "I used Redis to cache document and approver information, JavaMail API with Thymeleaf for approval request emails, and Brity RPA integration for final document number assignment.",
      impact:
        "The approval process became more automated and less dependent on repetitive manual handling.",
    },
    screenshots: ["Approval Flow", "Mail Template", "RPA Numbering"],
    results: [
      { value: "RPA", label: "Numbering" },
      { value: "Mail", label: "Approver notice" },
      { value: "Redis", label: "Workflow cache" },
    ],
  },
  {
    slug: "accounting-commission",
    title: "Accounting Commission",
    eyebrow: "OCR Automation",
    year: "2025",
    category: "AI Automation",
    tagline: "Travel agency commission matching and receipt automation system.",
    description:
      "Automated travel agency commission calculation, receipt creation, and matching reports for accounting operations using Clova OCR, OpenAI API, and Brity RPA.",
    featured: false,
    status: "Case Study",
    tags: ["Kotlin", "Spring Boot 3", "Clova OCR", "OpenAI API", "Brity RPA"],
    caseStudy: {
      overview:
        "Accounting Commission supports accounting work by automating travel agency commission calculation, receipt writing, and matching result generation.",
      challenge:
        "The process relied on manually reading passports, flight details, receipts, sales records, and matching commission data.",
      solution:
        "I used Clova OCR to extract text from passport, flight, and receipt images, OpenAI API to classify image types and structure JSON data, matching logic for sales and commission calculation, and Brity RPA for receipt generation.",
      impact:
        "The system reduced data processing time by 80% and made repetitive accounting support work more consistent.",
    },
    screenshots: ["OCR Pipeline", "Matching Logic", "RPA Receipt"],
    results: [
      { value: "80%", label: "Processing time cut" },
      { value: "OCR", label: "Image extraction" },
      { value: "AI", label: "Classification" },
    ],
  },
];

export const experiences: Experience[] = [
  {
    period: "2025.02 — 2025.12",
    location: "Seoul, Korea",
    title: "Backend Developer / 대리",
    company: "NailTocToc",
    status: "MSA",
    summary:
      "Designed and implemented seven microservices, built AWS EKS Kubernetes infrastructure, optimized PostgreSQL read performance, established ArgoCD GitOps Blue-Green deployment, and implemented RabbitMQ-based async messaging.",
    stack: ["Kotlin", "Spring Boot 3", "PostgreSQL", "Redis", "RabbitMQ", "AWS EKS", "Terraform", "ArgoCD"],
  },
  {
    period: "2024.08 — 2025.02",
    location: "Seoul, Korea",
    title: "Backend Developer / 주임",
    company: "Mining5000",
    status: "Delivered",
    summary:
      "Designed and implemented backend APIs for three client projects, reduced accounting data processing time with Clova OCR and OpenAI API, built Pinecone-based collaboration recommendations, and deployed RPA solutions for repetitive work.",
    stack: ["Kotlin", "Spring Boot 3", "MySQL", "OpenAI API", "Pinecone", "Clova OCR", "Brity RPA"],
  },
  {
    period: "2023.04 — 2024.08",
    location: "Korea",
    title: "Backend Developer",
    company: "Arffy",
    status: "Production",
    summary:
      "Designed and implemented the full backend for a vintage lighting store, operated the live service for nine months, solved order concurrency issues with pessimistic locking, encrypted personal data with JPA Converter, and integrated JWT, Kakao OAuth, and PortOne payments.",
    stack: ["Kotlin", "Spring Boot 2", "MySQL", "AWS EC2", "AWS S3", "Docker", "PortOne"],
  },
];

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
