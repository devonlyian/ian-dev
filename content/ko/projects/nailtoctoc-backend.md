---
id: nailtoctoc-backend
name: NailTocToc MSA Backend
role: 백엔드 개발자 / DevOps
techStack:
  - Kotlin
  - Spring Boot 3
  - PostgreSQL
  - Redis
  - RabbitMQ
  - Docker
  - Kubernetes
  - AWS EKS, RDS, MQ, ElastiCache, EC2
  - Terraform
  - ArgoCD
order: 1
links:
  App Store: https://apps.apple.com/kr/app/%EB%84%A4%EC%9D%BC%ED%86%A1%ED%86%A1/id6746323705
  Play Store: https://play.google.com/store/apps/details?id=com.nailtoctoc.nailtoctoc&pcampaignid=web_share
---

네일 프린팅 서비스를 위한 MSA 기반 백엔드 플랫폼

## Highlights

- **MSA 아키텍처**: 7개 마이크로서비스를 도메인 기반으로 분리 (Gateway, User, Product, Order, Payment, Admin, Worker)
- **API Gateway**: Spring Cloud Gateway 기반 인증/인가, 라우팅, 로드밸런싱 처리
- **인프라 구축**: AWS EKS Kubernetes 클러스터 운영, Terraform IaC로 코드화
- **CI/CD**: ArgoCD GitOps Blue-Green 배포, 무중단 배포 및 자동 롤백
- **메시지 큐**: RabbitMQ 비동기 처리로 서비스 간 결합도 감소
- **DB 최적화**: PostgreSQL Read/Write Replica 분리, 읽기 부하 분산
