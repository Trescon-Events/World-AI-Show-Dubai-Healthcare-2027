import type { Metadata } from "next";
import { Header } from "../../components/sections/Header";
import { FooterSection } from "../../components/sections/FooterSection";
import { PhotoGalleryContent } from "./PhotoGalleryContent";

export const metadata: Metadata = {
  title: "Photo Gallery | Networking | World AI Show | Healthcare and Life Sciences | Dubai 2027",
  description: "High-resolution executive photography from World AI Show | Healthcare and Life Sciences | Dubai 2027 and the global World AI Show series.",
};

const subNav = ["Overview", "Attendee APP", "AI Matchmaking", "Photo Gallery"];

export default function PhotoGalleryPage() {
  return (
    <main className="relative min-h-screen bg-[#08121E] text-white font-display overflow-x-clip">
      <Header activeItem="Networking" subNavItems={subNav} activeSubNavItem="Photo Gallery" />
      <PhotoGalleryContent />
      <FooterSection />
    </main>
  );
}
