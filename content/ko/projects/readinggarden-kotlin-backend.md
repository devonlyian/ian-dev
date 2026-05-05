---
id: readinggarden-kotlin-backend
name: ReadingGarden Kotlin Migration Backend
role: 백엔드 개발자 / DevOps
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

기존 Flutter 독서 기록 앱의 Django 백엔드를 Kotlin/Spring Boot로 전환한 레거시 호환 마이그레이션 프로젝트

## Highlights

- **레거시 마이그레이션**: Django 기반 API를 Kotlin/Spring Boot로 재구현하며 기존 앱 계약 유지
- **도메인 모듈화**: auth, book, garden, memo, push, scheduler, app 도메인으로 패키지 구조 분리
- **API 호환성**: legacy response envelope, snake_case 필드, JWT 인증 흐름, 이미지 업로드/조회 경로 호환성 검증
- **DB 마이그레이션**: PostgreSQL + Flyway 기반 스키마 관리, Hibernate validate로 운영 스키마 안정성 확보
- **배포 자동화**: GitHub Actions와 Docker 이미지 기반 OCI A1 배포, Caddy upstream 전환을 통한 blue-green 배포 구성
- **운영 관측성**: Actuator/Prometheus metrics, Grafana dashboard, Loki 로그 수집, health/docs/smoke check 기반 운영 검증
- **테스트 전략**: Testcontainers PostgreSQL 통합 테스트와 legacy contract fixture로 Controller-Service-Repository 전체 흐름 검증
