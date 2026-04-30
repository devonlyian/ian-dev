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
    email: "hello@ianonly.dev",
    location: "Seoul, Korea",
    github: "https://github.com/ian-kim",
    linkedin: "https://linkedin.com/in/ian-kim",
    siteUrl: "https://ianonly.dev",
  },
  hero: {
    kicker: "Available for backend work",
    intro: "Hey, I'm Ian Kim",
    headline: "I build things that don't break.",
    body:
      "Backend developer who ships practical APIs and keeps the details boring. Slow? Fixed. Fragile? Hardened. Not deployed yet? Built.",
    primaryCta: "View My Work",
    secondaryCta: "Let's Talk",
  },
  about: {
    title: "The short version.",
    paragraphs: [
      "I work closest to backend systems, infrastructure, and the product edges where reliability actually shows up.",
      "Most of my recent work has involved Kotlin and Spring Boot, Flutter-facing APIs, cloud deployment, data migration, and production debugging.",
    ],
    certifications: [
      "Kotlin and Spring Boot production APIs",
      "Cloud deployment and observability",
      "Database migration and contract preservation",
    ],
    stats: [
      { value: "47+", label: "Endpoints audited" },
      { value: "2026", label: "Recent migration" },
      { value: "2", label: "Prod/dev stacks" },
    ],
  },
  technologies: [
    "Kotlin",
    "Spring Boot",
    "Java",
    "PostgreSQL",
    "Redis",
    "Docker",
    "AWS",
    "OCI",
    "Flutter",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "Django",
  ],
  contact: {
    title: "Say hey.",
    body: "Always open to a practical build, a backend cleanup, or a production problem that needs a calm pair of hands.",
  },
};

export const projects: Project[] = [
  {
    slug: "reading-garden",
    title: "Reading Garden",
    eyebrow: "Backend Migration",
    year: "2026",
    category: "Kotlin Platform",
    tagline: "Django-to-Kotlin migration with production contract preservation.",
    description:
      "A backend migration and operations project focused on keeping an existing Flutter app stable while replacing core server behavior.",
    featured: true,
    status: "Live",
    tags: ["Kotlin", "Spring Boot", "PostgreSQL", "Flutter", "OCI"],
    liveUrl: "https://ianonly.dev",
    githubUrl: "https://github.com/ian-kim",
    caseStudy: {
      overview:
        "Reading Garden is a production backend modernization effort with a mobile client, legacy API expectations, and operational deployment constraints.",
      challenge:
        "The difficult part was not simply rewriting endpoints. The system had legacy Django behavior, Flutter runtime assumptions, image storage paths, and production data that had to continue working without surprising users.",
      solution:
        "The migration used compatibility tests, endpoint contract checks, live health probes, and deployment scripts that made production and development behavior explicit.",
      impact:
        "The result is a backend that can evolve with Kotlin and Spring Boot while retaining the behavior the existing app depends on.",
    },
    screenshots: ["API Contract", "Deploy Flow", "Health Check"],
    results: [
      { value: "47+", label: "App endpoints audited" },
      { value: "0", label: "Known contract breaks" },
      { value: "2", label: "Prod/dev stacks" },
    ],
  },
  {
    slug: "pawtogether",
    title: "PawTogether",
    eyebrow: "Product Backend",
    year: "2026",
    category: "Spring Boot API",
    tagline: "Pet community backend designed around practical product boundaries.",
    description:
      "An early-stage backend architecture for social login, community features, scheduled jobs, local media, and maintainable deployment.",
    featured: true,
    status: "Case Study",
    tags: ["Spring Boot", "Kotlin", "Firebase", "JWT", "Scheduler"],
    githubUrl: "https://github.com/ian-kim",
    caseStudy: {
      overview:
        "PawTogether is a clean backend foundation for a pet community product, with social auth and media handling kept deliberately simple.",
      challenge:
        "The key risk was overbuilding too early. The backend needed enough structure for growth without adding infrastructure that would slow down a first release.",
      solution:
        "The design favors app-side social login, Spring Security resource server patterns, scheduled jobs, local disk media on A1, and explicit backup requirements.",
      impact:
        "The project has a clearer domain split and a backend stack that can ship quickly before being expanded into heavier infrastructure.",
    },
    screenshots: ["Domain Map", "Auth Flow", "Storage Policy"],
    results: [
      { value: "5", label: "Core domains" },
      { value: "1", label: "Simple deploy target" },
      { value: "A1", label: "Initial server class" },
    ],
  },
  {
    slug: "bug-bounty-platform",
    title: "Bug Bounty Platform",
    eyebrow: "Assignment Build",
    year: "2026",
    category: "Backend Service",
    tagline: "Submission-ready backend with report, reward, and program flows.",
    description:
      "A scoped backend implementation built against an assignment spec, with attention on correctness, documentation, and deliverability.",
    featured: true,
    status: "Case Study",
    tags: ["Java", "Spring Boot", "JPA", "Swagger", "Testing"],
    githubUrl: "https://github.com/ian-kim",
    caseStudy: {
      overview:
        "The platform models program specifications, vulnerability report submission, reward handling, and API documentation.",
      challenge:
        "The main challenge was matching the written requirements exactly and separating finished scope from speculative enhancements.",
      solution:
        "Implementation work was driven from the assignment document, with targeted fixes for report and reward behavior and a final submission checklist.",
      impact:
        "The codebase became easier to evaluate because the implemented scope maps directly to the submitted requirements.",
    },
    screenshots: ["Spec Coverage", "Report Flow", "Swagger Docs"],
    results: [
      { value: "100%", label: "Spec-reviewed scope" },
      { value: "3", label: "Core flows" },
      { value: "1", label: "Submission checklist" },
    ],
  },
  {
    slug: "oracle-a1-automation",
    title: "Oracle A1 Automation",
    eyebrow: "Infrastructure",
    year: "2026",
    category: "Cloud Automation",
    tagline: "Local-first OCI automation with public docs separated from private ops.",
    description:
      "A personal infrastructure automation project for OCI A1 workflows, operational docs, and safe local tooling.",
    featured: true,
    status: "Live",
    tags: ["OCI", "Python", "Shell", "Docs", "Automation"],
    githubUrl: "https://github.com/ian-kim",
    caseStudy: {
      overview:
        "The project keeps repeatable A1 operations in code while separating local-only operational details from public repository documentation.",
      challenge:
        "The sensitive parts were operational context, instance principal behavior, and avoiding accidental publication of local server details.",
      solution:
        "The repository uses an A1-only branch strategy, local ops docs, ignored private notes, and conservative automation boundaries.",
      impact:
        "The automation is easier to maintain because public and private responsibilities are explicit.",
    },
    screenshots: ["Controller", "Ops Docs", "Branch Flow"],
    results: [
      { value: "A1", label: "Target shape" },
      { value: "0", label: "Private docs published" },
      { value: "1", label: "Ops source of truth" },
    ],
  },
];

export const experiences: Experience[] = [
  {
    period: "2025 — Present",
    location: "Seoul, Korea",
    title: "Backend Developer",
    company: "Independent Projects",
    status: "Active",
    summary:
      "Building production-minded backends, migration tooling, and deployment workflows across personal and client-style projects.",
    stack: ["Kotlin", "Spring Boot", "PostgreSQL", "Docker"],
  },
  {
    period: "2024 — 2025",
    location: "Remote",
    title: "Platform Builder",
    company: "Portfolio Systems",
    status: "Shipped",
    summary:
      "Designed API contracts, deployment paths, and operational documentation for services that need to be maintained after launch.",
    stack: ["Next.js", "Flutter", "OCI", "Redis"],
  },
  {
    period: "2023 — 2024",
    location: "Korea",
    title: "Backend Engineer",
    company: "Product Work",
    status: "Delivered",
    summary:
      "Worked through data modeling, API behavior, authentication, and debugging tasks where correctness mattered more than surface polish.",
    stack: ["Java", "JPA", "MySQL", "Swagger"],
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
    stack: ["Docker", "OCI", "Nginx"],
  },
  {
    title: "Product-Facing Backend Support",
    description:
      "Trace bugs across app and server boundaries, preserve intended behavior, and make fixes that survive real use.",
    stack: ["Flutter APIs", "JWT", "Observability"],
  },
];
