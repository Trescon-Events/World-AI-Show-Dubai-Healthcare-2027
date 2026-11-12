import type { Metadata } from "next";
import { Header } from "../components/sections/Header";
import { SpeakersHero } from "./SpeakersHero";
import { SpeakersList } from "./SpeakersList";
import { SpeakersCTASection } from "./SpeakersCTASection";
import { FooterSection } from "../components/sections/FooterSection";

export const metadata: Metadata = {
  title: "Speakers Hub | World AI Show | Healthcare and Life Sciences | Dubai 2027",
  description:
    "Explore the Clinical & Technical Faculty and past global series speakers for World AI Show | Healthcare and Life Sciences | Dubai 2027 (35–45 Expert Clinical & Technical Speakers).",
};

export default function SpeakersPage() {
  return (
    <main className="page-speakers relative min-h-screen bg-[#08121E] text-white font-display overflow-x-clip">
      <Header activeItem="Speakers" />
      <SpeakersHero />
      <SpeakersList />
      <SpeakersCTASection />
      <FooterSection />
    </main>
  );
}
