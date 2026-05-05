---
id: readinggarden-kotlin-backend
name: ReadingGarden Kotlin Migration Backend
role: Backend Developer / DevOps
techStack:
  - Kotlin
  - Spring Boot 4
  - Spring Security
  - PostgreSQL
  - Flyway
  - Firebase Admin SDK
  - SpringDoc OpenAPI
  - Docker
  - GitHub Actions
  - Oracle Cloud A1
  - Caddy
  - Prometheus
  - Grafana
  - Loki
  - Testcontainers
order: 1
links:
  App Store: https://apps.apple.com/kr/app/%EB%8F%85%EC%84%9C%EA%B0%80%EB%93%A0/id6762419765
  Play Store: https://play.google.com/store/apps/details?id=com.dokseogarden&pcampaignid=web_share
---

Legacy-compatible migration project that replaced the Django backend of an existing Flutter reading log app with Kotlin/Spring Boot

## Highlights

- **Legacy Migration**: Reimplemented Django-based APIs in Kotlin/Spring Boot while preserving the existing app contract
- **Domain Modularization**: Split package structure into auth, book, garden, memo, push, scheduler, and app domains
- **API Compatibility**: Verified compatibility for legacy response envelopes, snake_case fields, JWT authentication flow, and image upload/retrieval paths
- **DB Migration**: Managed schema changes with PostgreSQL + Flyway and secured production schema stability with Hibernate validate
- **Deployment Automation**: Built OCI A1 deployment with GitHub Actions and Docker images, including blue-green deployment through Caddy upstream switching
- **Operational Observability**: Configured Actuator/Prometheus metrics, Grafana dashboards, Loki log collection, and health/docs/smoke check based operations
- **Test Strategy**: Verified the full Controller-Service-Repository flow with Testcontainers PostgreSQL integration tests and legacy contract fixtures
