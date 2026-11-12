import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { AgendaLiveTimeline } from "../AgendaPage";

export const metadata: Metadata = {
  title: "Full 1-Day Master Schedule | Agenda | World AI Show | Healthcare and Life Sciences | Dubai 2027",
  description: "Explore the full 1-day master schedule for Thursday 25 March 2027: Governed Clinical Practice in Dubai, United Arab Emirates.",
};

const subNav = ["Overview", "The Vision", "Agenda", "Themes", "Call for Speakers"];

export default function AgendaSessionsPage() {
  return (
    <main className="page-agenda relative min-h-screen bg-[#08121E] text-white font-display overflow-x-clip">
      <Header activeItem="Agenda" subNavItems={subNav} activeSubNavItem="Agenda" />
      <AgendaLiveTimeline />
      <FooterSection />
    </main>
  );
}
