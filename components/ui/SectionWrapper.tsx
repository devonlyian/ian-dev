import { ReactNode } from "react";
import { SeparatorLine } from "./SeparatorLine";
import { textStyles, layoutStyles } from "@/lib/styles/tokens";

interface SectionWrapperProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export function SectionWrapper({
  title,
  subtitle,
  children,
  className = "",
}: SectionWrapperProps) {
  return (
    <div className={`${layoutStyles.sectionContainer} ${className}`}>
      <SeparatorLine />
      <div className={textStyles.sectionTitle}>{title}</div>
      {subtitle && <div className={textStyles.subtitle}>{subtitle}</div>}
      <SeparatorLine />
      {children}
    </div>
  );
}
