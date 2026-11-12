import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "./components/ScrollToTop";
import { AOSInit } from "./components/AOSInit";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-jakarta",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
    <html lang="en" className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} h-full antialiased`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans bg-[#08121E] text-[#F7F9FC]">
        <AOSInit />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
