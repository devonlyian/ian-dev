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

export interface SectionCallbacks {
  onSelectProject: (id: string) => void;
  onExitGame: () => void;
}

export function getSectionComponent(
  section: string,
  callbacks: SectionCallbacks
): ReactNode {
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
      return <ProjectsSection onSelectProject={callbacks.onSelectProject} />;
    case "contact":
      return <ContactSection />;
    case "dir":
    case "ls":
      return <DirSection />;
    case "version":
      return <VersionSection />;
    case "neofetch":
      return <NeofetchSection />;
    case "snake":
      return <SnakeGame onExit={callbacks.onExitGame} />;
    default:
      return null;
  }
}
