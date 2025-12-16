---
id: document-approval
name: Document Approval System
role: Backend Developer
techStack:
  - Kotlin
  - Spring Boot 3
  - Redis
  - Thymeleaf
  - MySQL
  - JavaMail API
  - Brity RPA
order: 7
---

System that automates document approval process by integrating RPA with server for approval requests, processing, and document number issuance

## Highlights

- **Caching**: Document info and approver list storage/management using Redis
- **Email Automation**: Automatic email notification to next approver during approval process
- **Templates**: Approval request email templates using JavaMail API + Thymeleaf
- **RPA Integration**: Brity RPA integration for automatic document number issuance upon final approval
