import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: {
    default: "Gobadi – AI-Powered Livestock Management Platform",
    template: "%s | Gobadi",
  },

  description:
    "Gobadi is an AI-powered livestock platform helping farmers monitor animal health, manage livestock, and make smarter farming decisions.",

  keywords: [
    "livestock management",
    "AI livestock management",
    "smart livestock farming",
    "animal health",
    "livestock technology",
    "smart farming",
    "AI agriculture",
    "cattle management",
  ],

  authors: [{ name: "Gobadi" }],
  creator: "Gobadi",
  publisher: "Gobadi",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Gobadi – AI-Powered Livestock Management",
    description:
      "Empowering smarter animal care through AI and digital livestock management.",
    url: "https://gobaddi-home.vercel.app",
    siteName: "Gobadi",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gobadi AI-powered livestock management platform",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Gobadi – AI-Powered Livestock Management",
    description:
      "Smart livestock management powered by AI.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col bg-[#FAF8F5]">{children}</body>
    </html>
  );
}
