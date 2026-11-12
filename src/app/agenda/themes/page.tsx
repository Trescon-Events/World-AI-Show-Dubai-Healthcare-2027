import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { AgendaThemes } from "../AgendaPage";

export const metadata: Metadata = {
  title: "The 4 Core Content Pillars | Agenda | World AI Show | Healthcare and Life Sciences | Dubai 2027",
  description: "Four operational mandates. One day. Explore the 4 Core Sector Content Pillars of World AI Show | Healthcare and Life Sciences | Dubai 2027.",
};

const subNav = ["Overview", "The Vision", "Agenda", "Themes", "Call for Speakers"];

export default function ThemesPage() {
  return (
    <main className="page-agenda relative min-h-screen bg-[#08121E] text-white font-display overflow-x-clip">
      <Header activeItem="Agenda" subNavItems={subNav} activeSubNavItem="Themes" />
      <AgendaThemes />
      <FooterSection />
    </main>
  );
}
