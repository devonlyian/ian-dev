import type { Metadata } from "next";
import { ProjectArchive } from "@/components/projects/ProjectArchive";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected backend, product, and infrastructure projects by Ian Kim.",
};

export default function ProjectsPage() {
  return <ProjectArchive />;
}
