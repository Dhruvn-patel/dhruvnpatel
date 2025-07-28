import type React from "react";
import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Dhruv Patel | Full Stack Web Developer",
  description:
    "Dhruv Patel is a full stack web developer specializing in React, Next.js, Node.js, and Tailwind CSS. He builds high-performance, responsive, and SEO-friendly web applications.",
  keywords: [
    "Dhruv Patel",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Tailwind CSS",
    "Node.js",
    "JavaScript",
    "Frontend Developer",
    "Backend Developer",
    "Web Portfolio",
    "TypeScript",
    "SEO optimized websites",
    "Freelance Developer",
    "Software Engineer",
    "MERN Developer",
    "Modern Web Development",
  ],
  robots: "index, follow",
  authors: [{ name: "Dhruv Patel", url: "https://dhruvnpatel.vercel.app" }],
  creator: "Dhruv Patel",
  publisher: "Dhruv Patel",
  metadataBase: new URL("https://dhruvnpatel.vercel.app"),
  openGraph: {
    title: "Dhruv Patel | Full Stack Developer",
    description:
      "Portfolio of Dhruv Patel – building scalable, modern, and user-friendly web apps using React, Next.js, Tailwind CSS, and TypeScript.",
    url: "https://dhruvnpatel.vercel.app",
    siteName: "Dhruv Patel Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Dhruv Patel | Full Stack Developer",
    description:
      "Explore Dhruv Patel’s full stack developer portfolio built using modern frameworks like React, Next.js, and Node.js.",
    site: "@Dhruv_sde",
    creator: "@Dhruv_sde",
  },
  alternates: {
    canonical: "https://dhruvnpatel.vercel.app",
  },
  category: "technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${jetbrainsMono.variable}`}>
      <body className={outfit.className}>
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
      </body>
    </html>
  );
}
