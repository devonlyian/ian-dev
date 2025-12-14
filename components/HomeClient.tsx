"use client";

import { useRef, useCallback, useEffect, ReactNode } from "react";
import { useReactToPrint } from "react-to-print";
import Terminal from "@/components/terminal/Terminal";
import CommandBar from "@/components/layout/CommandBar";
import PrintableResume from "@/components/layout/PrintableResume";
import ThemeToggle from "@/components/ui/ThemeToggle";
import PrintButton from "@/components/ui/PrintButton";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { useTheme } from "@/hooks/useTheme";
import { useTerminal } from "@/hooks/useTerminal";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ContentProvider } from "@/contexts/ContentContext";
import { ContentData } from "@/types/data";

// Section components
import { getSectionComponent } from "@/components/sections/sectionRegistry";


function HomeContent() {
  const { theme, setTheme, mounted, availableThemes } = useTheme();
  const printRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const runCommandRef = useRef<(cmd: string) => void>(() => { });

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: "Ian_Kim_Resume",
  });

  const triggerPrint = useCallback(() => {
    handlePrint();
  }, [handlePrint]);

  const handleSelectProject = useCallback((projectId: string) => {
    runCommandRef.current(`PROJECTS ${projectId}`);
  }, []);

  const handleExitGame = useCallback(() => {
    runCommandRef.current("CLS");
  }, []);

  const renderSection = useCallback((section: string): ReactNode => {
    return getSectionComponent(section, {
      onSelectProject: handleSelectProject,
      onExitGame: handleExitGame,
    });
  }, [handleSelectProject, handleExitGame]);

  const terminal = useTerminal({
    setTheme,
    triggerPrint,
    renderSection,
  });

  // Keep ref updated with latest runCommand
  useEffect(() => {
    runCommandRef.current = terminal.runCommand;
  }, [terminal.runCommand]);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="dos-text">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col p-2 md:p-4">
      {/* Top bar */}
      <div className="flex justify-end gap-2 mb-2 no-print">
        <LanguageToggle />
        <ThemeToggle theme={theme} setTheme={setTheme} availableThemes={availableThemes} />
        <PrintButton onClick={triggerPrint} />
      </div>

      {/* Terminal */}
      <Terminal
        ref={terminalRef}
        history={terminal.history}
        currentInput={terminal.currentInput}
        isProcessing={terminal.isProcessing}
        isGameActive={terminal.isGameActive}
        onInputChange={terminal.setCurrentInput}
        onSubmit={terminal.runCommand}
        onNavigateHistory={terminal.navigateHistory}
      />

      {/* Command buttons */}
      <CommandBar onCommand={terminal.runCommand} />

      {/* Printable resume (hidden until print) */}
      <PrintableResume ref={printRef} />
    </div>
  );
}

interface HomeClientProps {
  content: ContentData;
}

export default function HomeClient({ content }: HomeClientProps) {
  return (
    <LanguageProvider>
      <ContentProvider content={content}>
        <HomeContent />
      </ContentProvider>
    </LanguageProvider>
  );
}
