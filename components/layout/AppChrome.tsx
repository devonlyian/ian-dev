"use client";

import { usePathname } from "next/navigation";
import { Toaster } from "sonner";
import { Preloader } from "./Preloader";
import { SectionIndicator } from "./SectionIndicator";
import { SiteHeader } from "./SiteHeader";
import { SmoothCursor } from "./SmoothCursor";
import { SmoothScroll } from "./SmoothScroll";

export function AppChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isProjectDetail = pathname.startsWith("/projects/");
  const isHome = pathname === "/";
  const isResume = pathname.startsWith("/resume");

  if (isResume) {
    return <>{children}</>;
  }

  return (
    <>
      <div className="noise-overlay pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.035] mix-blend-overlay" />
      <SmoothScroll />
      <SmoothCursor />
      <Preloader />
      <SiteHeader />
      {isHome && !isProjectDetail ? <SectionIndicator /> : null}
      {children}
      <Toaster position="bottom-right" richColors />
    </>
  );
}
