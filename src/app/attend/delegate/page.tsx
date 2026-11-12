import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { AttendDelegateSection } from "../page";

export const metadata: Metadata = {
  title: "Business Pass | Attend | World AI Show | Healthcare and Life Sciences | Dubai 2027",
  description: "Business Pass access for Hospital CEOs, CMOs, CIOs, Chief Digital Officers, Heads of Clinical Informatics, Health Authorities, and vetted Solution Providers at World AI Show | Healthcare and Life Sciences | Dubai 2027.",
};

const subNav = ["Overview", "Delegate", "Sponsor", "Media Partner", "Association Partner"];

export default function DelegatePage() {
  return (
    <main className="relative min-h-screen bg-[#08121E] text-white font-display overflow-x-clip">
      <Header activeItem="Attend" subNavItems={subNav} activeSubNavItem="Delegate" />
      <AttendDelegateSection />
      <FooterSection />
    </main>
  );
}
