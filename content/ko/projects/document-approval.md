---
id: document-approval
name: 교내 문서 결재 시스템
role: 백엔드 개발자
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

교내 문서 결재 프로세스를 자동화하기 위해 RPA와 서버를 연동하여 결재 요청 및 처리, 문서 번호 발번까지 수행하는 시스템

## Highlights

- **캐싱**: Redis 활용 문서 정보 및 결재자 리스트 저장/관리
- **메일 자동화**: 결재 진행 시 다음 결재자에게 자동 메일 전송
- **템플릿**: JavaMail API + Thymeleaf 결재 요청 메일 템플릿 제작
- **RPA 연동**: Brity RPA 연동 최종 결재 시 문서 번호 자동 발번
