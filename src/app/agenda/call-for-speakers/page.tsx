import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { AgendaCallForSpeakers } from "../AgendaPage";

export const metadata: Metadata = {
  title: "Call for Clinical & Operational Healthcare Faculty | Agenda | World AI Show | Healthcare and Life Sciences | Dubai 2027",
  description: "Seeking hospital group CXOs, CMOs, clinical informatics directors, and health regulators with audited deployment evidence to join the stage on 25 March 2027 in Dubai.",
};

const subNav = ["Overview", "The Vision", "Agenda", "Themes", "Call for Speakers"];

export default function CallForSpeakersPage() {
  return (
    <main className="page-agenda relative min-h-screen bg-[#08121E] text-white font-display overflow-x-clip">
      <Header activeItem="Agenda" subNavItems={subNav} activeSubNavItem="Call for Speakers" />
      <AgendaCallForSpeakers />
      <FooterSection />
    </main>
  );
}
