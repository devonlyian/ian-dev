import type { Metadata } from "next";
import { Bricolage_Grotesque, Noto_Sans_KR } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { AppChrome } from "@/components/layout/AppChrome";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { portfolio } from "@/lib/portfolio-data";
import { initialThemeScript } from "@/lib/theme-script";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
});

const noto = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
  variable: "--font-noto",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(portfolio.owner.siteUrl),
  title: {
    default: `${portfolio.owner.name} | ${portfolio.owner.role}`,
    template: `%s | ${portfolio.owner.name}`,
  },
  description: "Backend developer portfolio for production-minded APIs, migrations, and cloud operations.",
  authors: [{ name: portfolio.owner.name, url: portfolio.owner.siteUrl }],
  creator: portfolio.owner.name,
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: `${portfolio.owner.name} | ${portfolio.owner.role}`,
    description: "Backend developer portfolio for APIs, migrations, and production operations.",
    url: portfolio.owner.siteUrl,
    siteName: `${portfolio.owner.name} Portfolio`,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: initialThemeScript,
          }}
        />
      </head>
      <body className={`${bricolage.variable} ${noto.variable} bg-background font-sans text-foreground antialiased`}>
        <LanguageProvider>
          <AppChrome>{children}</AppChrome>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
