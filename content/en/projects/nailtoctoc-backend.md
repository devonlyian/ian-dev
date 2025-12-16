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
  demo: https://apps.apple.com/kr/app/%EB%84%A4%EC%9D%BC%ED%86%A1%ED%86%A1/id6746323705
---

MSA-based backend platform for nail printing service

## Highlights

- Designed and implemented 7 microservices (Gateway, User, Product, Order, Payment, Admin, Worker)
- Built API Gateway based on Spring Cloud Gateway
- Built and operated Kubernetes infrastructure on AWS EKS
- GitOps Blue-Green auto deployment using ArgoCD
- Implemented asynchronous message processing system using RabbitMQ
- Performance optimization through PostgreSQL Read/Write Replica separation
