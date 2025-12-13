"use client";

import { forwardRef } from "react";
import TerminalHeader from "./TerminalHeader";
import TerminalBody from "./TerminalBody";
import CommandLine from "./CommandLine";
import { TerminalEntry } from "@/types/terminal";

interface TerminalProps {
  history: TerminalEntry[];
  currentInput: string;
  isProcessing: boolean;
  onInputChange: (value: string) => void;
  onSubmit: (command: string) => void;
  onNavigateHistory: (direction: "up" | "down") => void;
}

const Terminal = forwardRef<HTMLDivElement, TerminalProps>(
  (
    {
      history,
      currentInput,
      isProcessing,
      onInputChange,
      onSubmit,
      onNavigateHistory,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className="w-full max-w-4xl mx-auto flex flex-col h-[85vh] md:h-[80vh] border-4 border-dos-border bg-dos-bg shadow-lg"
      >
        <TerminalHeader />
        <TerminalBody history={history}>
          <CommandLine
            currentInput={currentInput}
            onInputChange={onInputChange}
            onSubmit={onSubmit}
            onNavigateHistory={onNavigateHistory}
            isProcessing={isProcessing}
          />
        </TerminalBody>
      </div>
    );
  }
);

Terminal.displayName = "Terminal";

export default Terminal;
