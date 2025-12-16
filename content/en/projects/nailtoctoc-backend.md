---
id: nailtoctoc-backend
name: NailTocToc MSA Backend
role: Backend Developer / DevOps
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

MSA-based backend platform for nail printing service

## Highlights

- **MSA Architecture**: Domain-based separation into 7 microservices (Gateway, User, Product, Order, Payment, Admin, Worker)
- **API Gateway**: Authentication/authorization, routing, load balancing via Spring Cloud Gateway
- **Infrastructure**: AWS EKS Kubernetes cluster operation, codified with Terraform IaC
- **CI/CD**: ArgoCD GitOps Blue-Green deployment with zero-downtime and automatic rollback
- **Message Queue**: RabbitMQ async processing reducing inter-service coupling
- **DB Optimization**: PostgreSQL Read/Write Replica separation for read load distribution
