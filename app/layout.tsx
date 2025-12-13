import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio.iankim.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ian Kim | Backend Developer",
    template: "%s | Ian Kim",
  },
  description:
    "Backend Developer Portfolio - Specializing in Kotlin, Spring Boot, and Cloud Infrastructure. Interactive MS-DOS style terminal experience.",
  keywords: [
    "Backend Developer",
    "Kotlin",
    "Spring Boot",
    "Portfolio",
    "Software Engineer",
    "DevOps",
    "Java",
    "Kubernetes",
    "AWS",
    "Backend Engineer",
    "백엔드 개발자",
  ],
  authors: [{ name: "Ian Kim", url: siteUrl }],
  creator: "Ian Kim",
  publisher: "Ian Kim",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Ian Kim | Backend Developer",
    description: "Backend Developer Portfolio - Interactive MS-DOS style terminal experience",
    url: siteUrl,
    siteName: "Ian Kim Portfolio",
    locale: "ko_KR",
    alternateLocale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ian Kim - Backend Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ian Kim | Backend Developer",
    description: "Backend Developer Portfolio - Interactive MS-DOS style terminal",
    images: ["/og-image.png"],
  },
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "ko-KR": siteUrl,
      "en-US": siteUrl,
    },
  },
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ian Kim",
  alternateName: "김이안",
  jobTitle: "Backend Developer",
  description: "Backend Developer specializing in Kotlin, Spring Boot, and Cloud Infrastructure",
  url: siteUrl,
  sameAs: [
    "https://github.com/ian-kim",
    "https://linkedin.com/in/ian-kim",
  ],
  knowsAbout: ["Kotlin", "Spring Boot", "Kubernetes", "AWS", "DevOps", "Backend Development"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
