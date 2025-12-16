import React from "react";

export function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

export function cn(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

// **텍스트** 패턴을 <strong>으로 변환하는 함수
export function parseMarkdownBold(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      const content = part.slice(2, -2);
      return React.createElement("strong", { key: index, className: "dos-cyan" }, content);
    }
    return part;
  });
}
