import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { AttendAssociationSection } from "../page";

export const metadata: Metadata = {
  title: "Institutional Partnerships | Attend | World AI Show | Healthcare and Life Sciences | Dubai 2027",
  description: "Partner with World AI Show | Healthcare and Life Sciences | Dubai 2027. Regional medical associations, hospital federations, clinical informatics societies, and life sciences councils.",
};

const subNav = ["Overview", "Delegate", "Sponsor", "Media Partner", "Association Partner"];

export default function AssociationPartnerPage() {
  return (
    <main className="relative min-h-screen bg-[#08121E] text-white font-display overflow-x-clip">
      <Header activeItem="Attend" subNavItems={subNav} activeSubNavItem="Association Partner" />
      <AttendAssociationSection />
      <FooterSection />
    </main>
  );
}
