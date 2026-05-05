"use client";

import { useEffect, useRef, useState } from "react";
import { portfolio } from "@/lib/portfolio-data";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const progressBar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let value = 0;
    const interval = window.setInterval(() => {
      value += Math.ceil((100 - value) / 5);
      setProgress(Math.min(value, 100));

      if (value >= 100) {
        window.clearInterval(interval);
        window.setTimeout(() => setDone(true), 260);
      }
    }, 36);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!progressBar.current) {
      return;
    }

    progressBar.current.style.transform = `scaleX(${progress / 100})`;
  }, [progress]);

  if (done) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9998] flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a] text-[#FEFAEF]">
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FEFAEF]/10">
        <div
          ref={progressBar}
          className="h-full origin-left scale-x-0 bg-gradient-to-r from-amber-500 via-orange-400 to-yellow-400 transition-transform duration-150"
        />
      </div>
      <div className="absolute left-8 top-8 select-none text-[10px] font-medium uppercase tracking-[0.35em] text-[#FEFAEF]/25">
        Loading
      </div>
      <div className="absolute right-8 top-8 select-none text-[10px] font-medium uppercase tracking-[0.35em] text-[#FEFAEF]/25">
        Portfolio 2026
      </div>
      <div className="flex flex-col items-center gap-6">
        <span className="select-none font-black leading-none tracking-[-0.06em] text-[#FEFAEF] tabular-nums [font-size:clamp(6rem,20vw,18rem)]">
          {progress.toString().padStart(2, "0")}
        </span>
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-sm font-medium uppercase tracking-[0.4em] text-[#FEFAEF]/60">{portfolio.owner.name}</span>
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#FEFAEF]/25">{portfolio.owner.role}</span>
        </div>
      </div>
    </div>
  );
}
