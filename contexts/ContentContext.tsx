"use client";

import { createContext, useContext, ReactNode } from "react";
import { ContentData, CareerContent, ProjectContent, ProfileContent, Contact, Skill } from "@/types/data";
import { useLanguageContext } from "./LanguageContext";

interface ContentContextValue {
  profile: ProfileContent;
  contacts: Contact[];
  skills: Skill[];
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
  const { contacts, skills } = content;
  const { profile, careers, projects } = content[language];

  return (
    <ContentContext.Provider value={{ profile, contacts, skills, careers, projects, allContent: content }}>
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
