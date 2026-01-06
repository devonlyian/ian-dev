"use client";

import { useRef, useState, useEffect } from "react";
import { welcomeBanner, welcomeMessage } from "@/lib/commands/ascii";

const ASCII_ART_WIDTH = 49;
const MONOSPACE_CHAR_RATIO = 0.6;

function AutoScaleBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const newSize = (containerWidth * MONOSPACE_CHAR_RATIO) / (ASCII_ART_WIDTH * MONOSPACE_CHAR_RATIO);
        setFontSize(newSize);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div ref={containerRef} className="w-full flex justify-center">
      <pre
        className="dos-yellow whitespace-pre text-center"
        style={{ fontSize: `${fontSize}px` }}
      >
        {welcomeBanner}
      </pre>
    </div>
  );
}

export const QUICK_COMMANDS = ["ABOUT", "CAREER", "SKILLS", "PROJECTS", "CONTACT", "HELP"] as const;

interface WelcomeButtonsProps {
  onCommand: (cmd: string) => void;
}

function WelcomeButtons({ onCommand }: WelcomeButtonsProps) {
  return (
    <div className="mt-4 pt-3 border-t border-dos-border">
      <div className="dos-cyan text-sm mb-2">Quick Commands:</div>
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {QUICK_COMMANDS.map((cmd) => (
          <button
            key={cmd}
            onClick={() => onCommand(cmd)}
            className="px-2 py-1 text-sm sm:text-base border border-dos-border bg-dos-bg dos-highlight hover:bg-dos-highlight hover:text-dos-bg transition-colors"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}

interface WelcomeScreenProps {
  onCommand?: (cmd: string) => void;
}

export default function WelcomeScreen({ onCommand }: WelcomeScreenProps) {
  return (
    <>
      <AutoScaleBanner />
      <div>
        <pre className="dos-highlight whitespace-pre-wrap">{welcomeMessage}</pre>
        {onCommand && <WelcomeButtons onCommand={onCommand} />}
      </div>
    </>
  );
}
