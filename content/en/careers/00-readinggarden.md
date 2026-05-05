---
company: ReadingGarden - Team Project
position: Backend Developer / DevOps
period: 2026.03 - Present
techStack:
  - Kotlin
  - Java 25
  - Spring Boot 4
  - Spring Security
  - JJWT
  - PostgreSQL
  - Flyway
  - Spring Data JPA
  - Firebase Admin SDK / FCM
  - SpringDoc OpenAPI
  - Docker
  - GitHub Actions
  - Oracle Cloud A1
  - Caddy
  - Prometheus
  - Grafana
  - Loki
  - Testcontainers
  - Flutter
order: 1
---

- Migrated a legacy Django backend to a Kotlin/Spring Boot server, reimplementing auth, book, garden, memo, push, and scheduler domain APIs
- Verified compatibility contracts with the existing Flutter app, including `/api/v1` routes, snake_case fields, legacy response envelopes, JWT authentication, and image path behavior
- Built PostgreSQL + Flyway schema migrations and operated Hibernate `validate` to prevent production DB schema drift
- Established separated prod/dev deployment environments with GitHub Actions, Docker, Oracle Cloud A1, and Caddy, including a blue-green deployment pipeline
- Configured monitoring and log collection with Spring Boot Actuator, Micrometer Prometheus, Grafana, Loki, and Alloy
- Prevented migration regressions with Testcontainers PostgreSQL integration tests and legacy contract fixture tests
