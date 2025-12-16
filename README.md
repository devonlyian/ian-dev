# ianonly.dev

MS-DOS 터미널 스타일의 인터랙티브 포트폴리오 웹사이트

**[라이브 데모](https://ianonly.dev)**

## 주요 기능

- **MS-DOS 터미널 인터페이스** - 명령어 기반 네비게이션
- **5가지 테마** - Dark, DOS, Light, Amber, Green
- **다국어 지원** - 한국어 / 영어
- **PDF 이력서 출력** - 인쇄 최적화 레이아웃
- **Snake 게임** - 클래식 아케이드 게임
- **반응형 디자인** - 모바일 최적화
- **SEO 최적화** - OpenGraph, JSON-LD 지원

## 기술 스택

| 분류 | 기술 |
|------|------|
| Framework | Next.js 15, React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Content | Markdown, gray-matter |
| Deployment | Vercel |
| Analytics | Vercel Analytics |

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start

# 린트 검사
npm run lint
```

## 프로젝트 구조

```
├── app/                  # Next.js App Router
├── components/
│   ├── terminal/         # 터미널 UI 컴포넌트
│   ├── sections/         # 콘텐츠 섹션
│   ├── ui/               # 재사용 UI 컴포넌트
│   ├── layout/           # 레이아웃 컴포넌트
│   └── games/            # 게임 컴포넌트
├── lib/
│   └── commands/         # 명령어 시스템
├── content/
│   ├── en/               # 영문 콘텐츠
│   └── ko/               # 한글 콘텐츠
├── contexts/             # React Context
├── hooks/                # 커스텀 Hooks
└── types/                # TypeScript 타입
```

## 명령어 목록

### 네비게이션

| 명령어 | 별칭 | 설명 |
|--------|------|------|
| `ABOUT` | WHOAMI | 프로필 정보 |
| `CAREER` | EXP, EXPERIENCE | 경력 사항 |
| `SKILLS` | SKILL | 기술 스택 |
| `PROJECTS` | PROJ, PROJECT | 프로젝트 목록 |
| `CONTACT` | EMAIL | 연락처 |
| `DIR` | LS | 섹션 목록 |

### 시스템

| 명령어 | 설명 |
|--------|------|
| `HELP` | 도움말 |
| `CLS` | 화면 초기화 |
| `MODE <theme>` | 테마 변경 |
| `PRINT` | PDF 이력서 출력 |
| `VER` | 버전 정보 |
| `NEOFETCH` | 시스템 정보 |
| `HISTORY` | 명령어 기록 |
| `SNAKE` | Snake 게임 |

## 테마

`MODE <테마명>` 명령어로 테마를 변경할 수 있습니다.

| 명령어 | 설명 |
|--------|------|
| `MODE dark` | 다크 모드 (기본) |
| `MODE dos` | 클래식 MS-DOS 블루 |
| `MODE light` | 라이트 모드 |
| `MODE amber` | 앰버 모니터 |
| `MODE green` | 그린 터미널 |

## 콘텐츠 관리

콘텐츠는 `content/` 디렉토리에서 마크다운 파일로 관리됩니다.

```
content/
├── en/                   # 영문 콘텐츠
│   ├── profile.md
│   ├── careers/
│   └── projects/
├── ko/                   # 한글 콘텐츠
│   ├── profile.md
│   ├── careers/
│   └── projects/
├── skills.md             # 기술 스택 (공용)
└── contacts.md           # 연락처 (공용)
```

각 마크다운 파일은 YAML frontmatter를 사용하여 메타데이터를 정의합니다.

## 라이선스

MIT License

Copyright (c) 2024 Ian Kim

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
