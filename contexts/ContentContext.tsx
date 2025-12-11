"use client";

import { createContext, useContext, ReactNode } from "react";
import { ContentData, CareerContent, ProjectContent } from "@/types/data";
import { useLanguageContext } from "./LanguageContext";

interface ContentContextValue {
  careers: CareerContent[];
  projects: ProjectContent[];
  allContent: ContentData;
}

const ContentContext = createContext<ContentContextValue | null>(null);

interface ContentProviderProps {
  content: ContentData;
  children: ReactNode;
}

export function ContentProvider({ content, children }: ContentProviderProps) {
  const { language } = useLanguageContext();

  // Get current language's content
  const careers = content[language].careers;
  const projects = content[language].projects;

  return (
    <ContentContext.Provider value={{ careers, projects, allContent: content }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContentContext() {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error("useContentContext must be used within a ContentProvider");
  }
  return context;
}
