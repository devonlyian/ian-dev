"use client";

import { useState, useCallback, useEffect, useRef, useMemo, ReactNode } from "react";
import { TerminalState, TerminalEntry } from "@/types/terminal";
import { ThemeMode } from "@/types/terminal";
import { executeCommand, CommandContext } from "@/lib/commands/commandExecutor";
import { generateId } from "@/lib/utils";
import { welcomeBanner, welcomeMessage } from "@/lib/commands/ascii";
import SnakeGame from "@/components/games/SnakeGame";

function AutoScaleBanner() {
  const containerRef = useRef<HTMLDivElement>(null);
  const preRef = useRef<HTMLPreElement>(null);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current && preRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        // ASCII art is about 49 characters wide
        const charCount = 49;
        // Calculate font size to fit (0.6 is approx character width ratio for monospace)
        const newSize = (containerWidth * 0.6) / (charCount * 0.6);
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
        ref={preRef}
        className="dos-yellow whitespace-pre text-center"
        style={{ fontSize: `${fontSize}px` }}
      >
        {welcomeBanner}
      </pre>
    </div>
  );
}

const quickCommands = ["ABOUT", "CAREER", "SKILLS", "PROJECTS", "CONTACT", "HELP"];

function WelcomeButtons({ onCommand }: { onCommand: (cmd: string) => void }) {
  return (
    <div className="mt-4 pt-3 border-t border-dos-border">
      <div className="dos-cyan text-sm mb-2">Quick Commands:</div>
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {quickCommands.map((cmd) => (
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

function createWelcomeEntries(onCommand?: (cmd: string) => void): TerminalEntry[] {
  return [
    {
      id: generateId(),
      type: "system",
      content: (
        <AutoScaleBanner />
      ),
      timestamp: new Date(),
    },
    {
      id: generateId(),
      type: "system",
      content: (
        <div>
          <pre className="dos-highlight whitespace-pre-wrap">{welcomeMessage}</pre>
          {onCommand && <WelcomeButtons onCommand={onCommand} />}
        </div>
      ),
      timestamp: new Date(),
    },
  ];
}

interface UseTerminalProps {
  setTheme: (theme: ThemeMode) => void;
  triggerPrint: () => void;
  renderSection: (section: string) => ReactNode;
}

export function useTerminal({ setTheme, triggerPrint, renderSection }: UseTerminalProps) {
  const [state, setState] = useState<TerminalState>(() => ({
    history: [],
    currentInput: "",
    commandHistory: [],
    historyIndex: -1,
    isProcessing: false,
  }));

  const runCommandRef = useRef<(cmd: string) => void>(() => {});

  const runCommand = useCallback(
    (command: string) => {
      setState((prev) => {
        // Create command entry
        const commandEntry: TerminalEntry = {
          id: generateId(),
          type: "command",
          content: command,
          timestamp: new Date(),
        };

        const context: CommandContext = {
          setTheme,
          triggerPrint,
          commandHistory: prev.commandHistory,
        };

        const result = executeCommand(command, context, renderSection);

        // Clear history and show only the output
        if (result.type === "clear") {
          return {
            ...prev,
            history: createWelcomeEntries((cmd) => runCommandRef.current(cmd)),
            currentInput: "",
            commandHistory: [...prev.commandHistory, command],
            historyIndex: -1,
            isProcessing: false,
          };
        } else if (result.content) {
          const outputEntry: TerminalEntry = {
            id: generateId(),
            type: result.type === "error" ? "error" : "output",
            content: result.content,
            timestamp: new Date(),
          };
          return {
            ...prev,
            history: [commandEntry, outputEntry], // Show command + output
            currentInput: "",
            commandHistory: [...prev.commandHistory, command],
            historyIndex: -1,
            isProcessing: false,
          };
        } else {
          return {
            ...prev,
            currentInput: "",
            commandHistory: command ? [...prev.commandHistory, command] : prev.commandHistory,
            historyIndex: -1,
            isProcessing: false,
          };
        }
      });
    },
    [setTheme, triggerPrint, renderSection]
  );

  // Keep ref updated with latest runCommand
  useEffect(() => {
    runCommandRef.current = runCommand;
  }, [runCommand]);

  // Initialize welcome entries with buttons after runCommand is defined
  const initialized = useRef(false);
  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      setState((prev) => ({
        ...prev,
        history: createWelcomeEntries((cmd) => runCommandRef.current(cmd)),
      }));
    }
  }, []);

  const setCurrentInput = useCallback((input: string) => {
    setState((prev) => ({
      ...prev,
      currentInput: input,
      historyIndex: -1,
    }));
  }, []);

  const navigateHistory = useCallback((direction: "up" | "down") => {
    setState((prev) => {
      const { commandHistory, historyIndex } = prev;
      if (commandHistory.length === 0) return prev;

      let newIndex: number;
      if (direction === "up") {
        newIndex =
          historyIndex === -1
            ? commandHistory.length - 1
            : Math.max(0, historyIndex - 1);
      } else {
        if (historyIndex === -1) return prev;
        newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          return {
            ...prev,
            historyIndex: -1,
            currentInput: "",
          };
        }
      }

      return {
        ...prev,
        historyIndex: newIndex,
        currentInput: commandHistory[newIndex] || "",
      };
    });
  }, []);

  // Detect if game is active by checking if last output contains SnakeGame
  const isGameActive = useMemo(() => {
    const lastOutput = state.history.find((entry) => entry.type === "output");
    if (!lastOutput?.content) return false;
    // Check if content is a React element with SnakeGame type
    const content = lastOutput.content as React.ReactElement;
    return content?.type === SnakeGame;
  }, [state.history]);

  // Detect if project detail page is active by checking last command
  const isProjectDetail = useMemo(() => {
    const lastCommand = state.history.find((entry) => entry.type === "command");
    if (!lastCommand?.content || typeof lastCommand.content !== "string") return false;
    const cmd = lastCommand.content.toUpperCase().trim();
    // Check if command is "PROJECTS <id>" (has argument)
    return cmd.startsWith("PROJECTS ") || cmd.startsWith("PROJECT ") || cmd.startsWith("PROJ ");
  }, [state.history]);

  return {
    history: state.history,
    currentInput: state.currentInput,
    isProcessing: state.isProcessing,
    isGameActive,
    isProjectDetail,
    runCommand,
    setCurrentInput,
    navigateHistory,
  };
}
