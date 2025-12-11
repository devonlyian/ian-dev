import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ian Kim | Backend Developer",
  description:
    "Backend Developer Portfolio - Specializing in Kotlin, Spring, and Infrastructure",
  keywords: [
    "Backend Developer",
    "Kotlin",
    "Spring Boot",
    "Portfolio",
    "Software Engineer",
    "DevOps",
  ],
  authors: [{ name: "Ian Kim" }],
  openGraph: {
    title: "Ian Kim | Backend Developer",
    description: "Backend Developer Portfolio - Kotlin, Spring, Infrastructure",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
