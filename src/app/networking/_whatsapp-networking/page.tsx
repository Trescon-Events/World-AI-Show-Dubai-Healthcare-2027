import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { WhatsAppNetworkingContent } from "./WhatsAppNetworkingContent";

export const metadata: Metadata = {
  title: "WhatsApp Community | Networking | World AI Show | Healthcare and Life Sciences | Dubai 2027",
  description: "Join the official World AI Show | Healthcare and Life Sciences | Dubai 2027 WhatsApp networking groups to connect with delegates, speakers, and sponsors before the event.",
};

const subNav = ["Overview", "Attendee APP", "AI Matchmaking", "Photo Gallery"];

export default function WhatsAppNetworkingPage() {
  return (
    <main className="relative min-h-screen bg-[#08121E] text-white font-display overflow-x-clip">
      <Header activeItem="Networking" subNavItems={subNav} activeSubNavItem="WhatsApp Networking" />
      <WhatsAppNetworkingContent />
      <FooterSection />
    </main>
  );
}
