---
id: nailtoctoc-backend
name: NailTocToc MSA Backend
role: Backend Developer / DevOps
techStack:
  - Kotlin
  - Spring Boot 3
  - Spring Cloud Gateway
  - PostgreSQL
  - AWS EKS
  - RabbitMQ
  - Redis
  - ArgoCD
  - Terraform
order: 1
links:
  demo: https://api.nailtoctoc.com
---

MSA-based backend platform for nail printing service

## Highlights

- Designed and implemented 7 microservices (Gateway, User, Product, Order, Payment, Admin, Worker)
- Built API Gateway based on Spring Cloud Gateway
- Built and operated Kubernetes infrastructure on AWS EKS
- GitOps Blue-Green auto deployment using ArgoCD
- Implemented asynchronous message processing system using RabbitMQ
- Performance optimization through PostgreSQL Read/Write Replica separation
