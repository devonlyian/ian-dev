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
  demo: https://apps.apple.com/kr/app/%EB%84%A4%EC%9D%BC%ED%86%A1%ED%86%A1/id6746323705
---

네일 프린팅 서비스를 위한 MSA 기반 백엔드 플랫폼

## Highlights

- 7개 마이크로서비스 설계 및 구현 (Gateway, User, Product, Order, Payment, Admin, Worker)
- Spring Cloud Gateway 기반 API Gateway 구축
- AWS EKS 기반 Kubernetes 인프라 구축 및 운영
- ArgoCD를 활용한 GitOps Blue-Green 자동 배포
- RabbitMQ를 활용한 비동기 메시지 처리 시스템 구현
- PostgreSQL Read/Write Replica 분리로 성능 최적화
