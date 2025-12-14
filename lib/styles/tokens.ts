/**
 * DOS 스타일 토큰 상수
 * 타입 안전한 클래스명 사용을 위한 상수 정의
 */

// 텍스트 컬러 클래스
export const textColors = {
  text: "dos-text",
  highlight: "dos-highlight",
  yellow: "dos-yellow",
  cyan: "dos-cyan",
  green: "dos-green",
  red: "dos-red",
} as const;

// 배경 컬러 클래스 (Tailwind)
export const bgColors = {
  bg: "bg-dos-bg",
  text: "bg-dos-text",
  highlight: "bg-dos-highlight",
  yellow: "bg-dos-yellow",
  cyan: "bg-dos-cyan",
  green: "bg-dos-green",
  red: "bg-dos-red",
} as const;

// 보더 컬러 클래스 (Tailwind)
export const borderColors = {
  border: "border-dos-border",
  highlight: "border-dos-highlight",
  cyan: "border-dos-cyan",
  yellow: "border-dos-yellow",
} as const;

// 공통 텍스트 스타일
export const textStyles = {
  // 제목 스타일
  sectionTitle: "dos-highlight text-base sm:text-lg font-bold",
  // 부제목 스타일
  subtitle: "dos-cyan text-sm sm:text-base",
  // 본문 스타일
  body: "dos-highlight text-sm sm:text-base leading-relaxed",
  // 라벨 스타일
  label: "dos-cyan font-bold",
  // 링크 스타일
  link: "dos-green hover:underline break-all",
  // 에러 스타일
  error: "dos-red",
  // 힌트 스타일
  hint: "dos-cyan text-sm",
} as const;

// 공통 레이아웃 스타일
export const layoutStyles = {
  // 섹션 컨테이너
  sectionContainer: "space-y-3",
  // 리스트 아이템
  listItem: "flex dos-highlight text-sm sm:text-base leading-relaxed",
  // 기술 스택 태그
  techTag: "bg-dos-cyan text-dos-bg px-1.5 py-0.5 text-sm font-bold",
  // 기술 스택 컨테이너
  techContainer: "flex flex-wrap gap-1.5 sm:gap-2",
  // 정보 행 (라벨 + 값)
  infoRow: "flex flex-col sm:flex-row sm:gap-2",
} as const;

// 타입 추출
export type TextColor = keyof typeof textColors;
export type BgColor = keyof typeof bgColors;
export type BorderColor = keyof typeof borderColors;
export type TextStyle = keyof typeof textStyles;
export type LayoutStyle = keyof typeof layoutStyles;
