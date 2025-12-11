"use client";

import { useRef, useEffect } from "react";
import { TerminalEntry } from "@/types/terminal";
import PromptLine from "./PromptLine";

interface TerminalBodyProps {
  history: TerminalEntry[];
  children?: React.ReactNode;
}

export default function TerminalBody({ history, children }: TerminalBodyProps) {
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-scroll to bottom when new entries are added
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div
      ref={bodyRef}
      className="flex-1 overflow-y-auto p-3 md:p-4 space-y-1 min-h-0"
    >
      {history.map((entry) => (
        <div key={entry.id} className="whitespace-pre-wrap break-words">
          {entry.type === "command" ? (
            <div className="flex items-start gap-1">
              <PromptLine />
              <span className="dos-highlight uppercase">{entry.content}</span>
            </div>
          ) : entry.type === "error" ? (
            <div className="dos-red">{entry.content}</div>
          ) : entry.type === "output" ? (
            <div className="dos-text">{entry.content}</div>
          ) : (
            <div>{entry.content}</div>
          )}
        </div>
      ))}
      {children}
    </div>
  );
}
