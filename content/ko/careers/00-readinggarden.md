---
company: ReadingGarden - 팀 프로젝트
position: 백엔드 개발자 / DevOps
period: 2026.03 - 진행중
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

- 레거시 Django 백엔드를 Kotlin/Spring Boot 기반 서버로 마이그레이션하며 auth, book, garden, memo, push, scheduler 도메인 API 재구현
- 기존 Flutter 앱과의 호환성을 유지하기 위해 `/api/v1` 라우트, snake_case 필드, legacy response envelope, JWT 인증, 이미지 경로 계약 검증
- PostgreSQL + Flyway 기반 스키마 마이그레이션 구성 및 Hibernate `validate` 운영으로 DB 스키마 drift 방지
- GitHub Actions, Docker, Oracle Cloud A1, Caddy 기반 prod/dev 분리 배포 환경 구축 및 blue-green 배포 파이프라인 구성
- Spring Boot Actuator, Micrometer Prometheus, Grafana, Loki, Alloy 기반 모니터링/로그 수집 체계 구성
- Testcontainers PostgreSQL 기반 통합 테스트와 legacy contract fixture 테스트로 마이그레이션 회귀 방지
