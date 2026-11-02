import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "./components/ScrollToTop";
import { AOSInit } from "./components/AOSInit";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "World AI Show | Healthcare and Life Sciences | Dubai 2027",
  description:
    "The premier buyer-led executive decision forum connecting clinical leadership, hospital operations, and life-sciences innovation through deployable, governed, and evidence-backed artificial intelligence. 25 March 2027 · Dubai, United Arab Emirates · 1-Day Executive Decision Forum. Organised by Trescon.",
  icons: {
    icon: "/dubai/healthcare/favicon.png",
  },
  openGraph: {
    title: "World AI Show | Healthcare and Life Sciences | Dubai 2027",
    description:
      "Deployable, governed, and evidence-backed AI for clinical care and health operations. From use case to operating outcome. 25 March 2027 · Dubai, United Arab Emirates · Day 2 · March Dubai Cluster. Organised by Trescon.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full antialiased`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col font-space-grotesk bg-bg text-text">
        <AOSInit />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
