import { ReactNode } from "react";
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
import { SECTIONS, isProjectSection, getProjectId } from "@/lib/constants/sections";

export interface SectionCallbacks {
  onSelectProject: (id: string) => void;
  onExitGame: () => void;
  onBackToProjects: () => void;
}

export function getSectionComponent(
  section: string,
  callbacks: SectionCallbacks
): ReactNode {
  if (isProjectSection(section)) {
    const projectId = getProjectId(section);
    if (!projectId) return null;
    return <ProjectDetailSection projectId={projectId} onBack={callbacks.onBackToProjects} />;
  }

  switch (section) {
    case SECTIONS.HELP:
      return <HelpSection />;
    case SECTIONS.ABOUT:
      return <AboutSection />;
    case SECTIONS.CAREER:
      return <CareerSection />;
    case SECTIONS.SKILLS:
      return <SkillsSection />;
    case SECTIONS.PROJECTS:
      return <ProjectsSection onSelectProject={callbacks.onSelectProject} />;
    case SECTIONS.CONTACT:
      return <ContactSection />;
    case SECTIONS.DIR:
    case SECTIONS.LS:
      return <DirSection />;
    case SECTIONS.VERSION:
      return <VersionSection />;
    case SECTIONS.NEOFETCH:
      return <NeofetchSection />;
    case SECTIONS.SNAKE:
      return <SnakeGame onExit={callbacks.onExitGame} />;
    default:
      return null;
  }
}
