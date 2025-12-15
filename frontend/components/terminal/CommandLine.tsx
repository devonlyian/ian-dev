"use client";

import { useRef, useEffect, KeyboardEvent, ChangeEvent } from "react";
import PromptLine from "./PromptLine";
import { getAvailableCommands } from "@/lib/commands/commandExecutor";

interface CommandLineProps {
  currentInput: string;
  onInputChange: (value: string) => void;
  onSubmit: (command: string) => void;
  onNavigateHistory: (direction: "up" | "down") => void;
  onBackspace?: () => void;
  isProcessing: boolean;
  isGameActive: boolean;
  isProjectDetail?: boolean;
}

export default function CommandLine({
  currentInput,
  onInputChange,
  onSubmit,
  onNavigateHistory,
  onBackspace,
  isProcessing,
  isGameActive,
  isProjectDetail,
}: CommandLineProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus input on mount
    if (inputRef.current && !isProcessing) {
      inputRef.current.focus();
    }
  }, [isProcessing]);

  // Focus on click, but not when selecting text
  const handleTerminalClick = () => {
    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) {
      return; // Don't focus if text is selected
    }
    if (inputRef.current && !isProcessing) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleTerminalClick);
    return () => document.removeEventListener("click", handleTerminalClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isProcessing]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "Enter":
        if (currentInput.trim() || currentInput === "") {
          onSubmit(currentInput.trim());
        }
        break;
      case "Backspace":
        // Go back to projects list when input is empty and on project detail page
        if (currentInput === "" && isProjectDetail && onBackspace) {
          e.preventDefault();
          onBackspace();
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        onNavigateHistory("up");
        break;
      case "ArrowDown":
        e.preventDefault();
        onNavigateHistory("down");
        break;
      case "l":
        if (e.ctrlKey) {
          e.preventDefault();
          onSubmit("CLS");
        }
        break;
      case "Tab":
        e.preventDefault();
        const input = currentInput.toUpperCase();
        if (!input) return;

        // Get all commands including aliases
        const availableCommands = getAvailableCommands();
        const candidates = new Set<string>();

        availableCommands.forEach((cmd) => {
          if (cmd.name.startsWith(input)) candidates.add(cmd.name);
          cmd.aliases.forEach((alias) => {
            if (alias.startsWith(input)) candidates.add(alias);
          });
        });

        const matches = Array.from(candidates).sort();

        if (matches.length === 1) {
          // Exact match found
          onInputChange(matches[0]);
        } else if (matches.length > 1) {
          // Find common prefix if multiple matches
          const commonPrefix = matches.reduce((prefix, current) => {
            let i = 0;
            while (i < prefix.length && i < current.length && prefix[i] === current[i]) {
              i++;
            }
            return prefix.substring(0, i);
          });

          if (commonPrefix.length > input.length) {
            onInputChange(commonPrefix);
          }
        }
        break;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onInputChange(e.target.value);
  };

  // Show game mode message instead of input when game is active
  if (isGameActive) {
    return (
      <div className="flex items-center gap-1 min-h-[1.5rem] py-4 my-2">
        <span className="dos-yellow">Press ESC to exit game</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1 min-h-[1.5rem] py-4 my-2">
      <PromptLine />
      <div className="flex-1 relative">
        <input
          ref={inputRef}
          type="text"
          value={currentInput}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          disabled={isProcessing}
          className="w-full bg-transparent outline-none dos-highlight uppercase caret-transparent"
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          aria-label="Terminal input"
        />
        <span
          className="cursor-blink absolute"
          style={{
            left: `${currentInput.length}ch`,
          }}
        />
      </div>
    </div>
  );
}
