import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Partha — AI/ML & Data Science Portfolio",
  description:
    "Personal portfolio of Partha, Computer Science & Engineering student specializing in AI/ML, Data Science, and intelligent software engineering.",
  keywords: [
    "Partha",
    "Portfolio",
    "Computer Science",
    "AI/ML",
    "Machine Learning",
    "Data Science",
    "Software Engineering",
    "BharatFarm",
    "JunioLang",
  ],
  authors: [{ name: "Partha" }],
  openGraph: {
    title: "Partha — AI/ML & Data Science Portfolio",
    description:
      "Computer Science & Engineering student building intelligent systems, ML models, and data-driven software.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${spaceMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-[#F7F7F2] dark:bg-[#181818] text-[#111111] dark:text-[#E8E6DF] font-sans selection:bg-[#FFD600] selection:text-[#111111] transition-colors duration-200">
        <ThemeProvider>
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
