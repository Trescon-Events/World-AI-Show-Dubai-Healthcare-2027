import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { AgendaVision } from "../AgendaPage";

export const metadata: Metadata = {
  title: "Regulatory Framework & Regional Catalysts | Agenda | World AI Show | Healthcare and Life Sciences | Dubai 2027",
  description: "Explore MOHAP, DHA (Nabidh), and DoH (Malaffi) clinical AI governance, UAE Federal Law No. 2 of 2019 health data sovereignty, and the regional catalysts driving 2027 healthcare procurement in Dubai.",
};

const subNav = ["Overview", "The Vision", "Agenda", "Themes", "Call for Speakers"];

export default function VisionPage() {
  return (
    <main className="page-agenda relative min-h-screen bg-gradient-to-b from-[#020814] via-[#031022] to-[#020a18] text-white font-space-grotesk overflow-x-hidden">
      <Header activeItem="Agenda" subNavItems={subNav} activeSubNavItem="The Vision" />
      <AgendaVision />
      <FooterSection />
    </main>
  );
}
