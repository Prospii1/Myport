import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteSettings } from "@/data/settings";
import { siteUrl } from "@/lib/site-url";

const displayFont = Space_Grotesk({
  variable: "--font-neue-montreal",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const sansFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const monoFont = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteSettings.brandName} | Digital Systems for Growing Businesses`,
    template: `%s | ${siteSettings.brandName}`,
  },
  description:
    "EVIMERO (Prosper Ojiaku) builds digital systems, AI-powered automation and no-code products for businesses that need more than a website.",
  openGraph: {
    title: `${siteSettings.brandName} | Digital Systems for Growing Businesses`,
    description:
      "Bubble Developer, AI Engineer, No-Code Developer and Business Process Automation Specialist.",
    url: siteUrl,
    siteName: siteSettings.brandName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteSettings.brandName} | Digital Systems for Growing Businesses`,
    description:
      "Bubble Developer, AI Engineer, No-Code Developer and Business Process Automation Specialist.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${sansFont.variable} ${monoFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-obsidian text-white">
        <div className="grain" />
        {children}
      </body>
    </html>
  );
}
