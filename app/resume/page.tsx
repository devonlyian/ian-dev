import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResumeDocumentView } from "@/components/resume/ResumeDocumentView";
import { isResumeEnabled } from "@/lib/resume/access";
import { buildResumeDocument } from "@/lib/resume/model";
import type { ResumeLanguage } from "@/lib/resume/types";

type ResumePageProps = {
  searchParams: Promise<{
    lang?: string;
  }>;
};

export const metadata: Metadata = {
  title: "Resume",
  robots: {
    index: false,
    follow: false,
  },
};

function resolveLanguage(value: string | undefined): ResumeLanguage {
  return value === "en" ? "en" : "ko";
}

export default async function ResumePage({ searchParams }: ResumePageProps) {
  if (!isResumeEnabled()) {
    notFound();
  }

  const params = await searchParams;
  const resume = buildResumeDocument(resolveLanguage(params.lang));

  return <ResumeDocumentView resume={resume} />;
}
