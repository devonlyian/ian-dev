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
import HelpSection from "@/components/sections/HelpSection";
import AboutSection from "@/components/sections/AboutSection";
import CareerSection from "@/components/sections/CareerSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection, {
  ProjectDetailSection,
} from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import DirSection from "@/components/sections/DirSection";
import VersionSection from "@/components/sections/VersionSection";
import NeofetchSection from "@/components/sections/NeofetchSection";
import SnakeGame from "@/components/games/SnakeGame";

function HomeContent() {
  const { theme, setTheme, mounted, availableThemes } = useTheme();
  const printRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const runCommandRef = useRef<(cmd: string) => void>(() => {});

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
    // Handle project detail
    if (section.startsWith("project:")) {
      const projectId = section.replace("project:", "");
      return <ProjectDetailSection projectId={projectId} />;
    }

    switch (section) {
      case "help":
        return <HelpSection />;
      case "about":
        return <AboutSection />;
      case "career":
        return <CareerSection />;
      case "skills":
        return <SkillsSection />;
      case "projects":
        return <ProjectsSection onSelectProject={handleSelectProject} />;
      case "contact":
        return <ContactSection />;
      case "dir":
        return <DirSection />;
      case "version":
        return <VersionSection />;
      case "neofetch":
        return <NeofetchSection />;
      case "snake":
        return <SnakeGame onExit={handleExitGame} />;
      default:
        return null;
    }
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
