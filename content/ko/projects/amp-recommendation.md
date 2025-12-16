---
id: amp-recommendation
name: AMP 원우 협업 추천 시스템
role: 백엔드 개발자
techStack:
  - Kotlin
  - Spring Boot 3
  - Pinecone
  - OpenAI API
  - MySQL
order: 4
---

AMP 원우들의 회사 정보를 기반으로 협업 가능성이 높은 회사를 추천하고, 협업 기획서를 자동 생성하는 시스템

## Highlights

- **벡터 검색**: Pinecone + 코사인 유사도 기반 협업 추천 알고리즘 개발
- **LLM 연동**: OpenAI API 활용 협업 기획서 자동 생성
- **데이터 모델링**: 원우 회사 정보, 매칭 결과, 협업 기록 스키마 설계
- **API 개발**: 회사 정보 CRUD, 추천 결과 조회, 기획서 생성 REST API 구현
