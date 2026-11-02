"use client";

import { GradientText } from "../components/Shared";

export function SpeakersHero() {
  return (
    <section
      className="relative min-h-[680px] flex items-center page-hero-top pb-[90px] overflow-hidden bg-cover bg-[position:right_center] bg-no-repeat after:absolute after:inset-x-0 after:bottom-0 after:h-24 after:bg-gradient-to-t after:from-[#020814] after:to-transparent after:z-0 max-sm:min-h-[540px] max-sm:pb-[60px]"
      style={{
        backgroundImage:
          'linear-gradient(90deg, rgba(2, 7, 19, 0.92) 0%, rgba(2, 7, 19, 0.62) 42%, rgba(2, 7, 19, 0.1) 100%), url("/dubai/healthcare/images/speakers/Speaker-banner.webp")',
      }}
    >
      <div className="relative z-10 w-[min(1114px,calc(100%-48px))] mx-auto">
        <p className="m-0 mb-3 text-cyan font-mono text-[13px] font-bold tracking-[3px] uppercase">
          35–45 Expert Clinical &amp; Technical Speakers · 25 March 2027 · Dubai, UAE
        </p>
        <h1 className="m-0 text-white font-[850] leading-[1.06] tracking-[-2px] text-[clamp(36px,4.8vw,62px)] max-w-[960px] uppercase">
          MEET THE <GradientText>CLINICAL &amp; TECHNICAL ARCHITECTS</GradientText> OF HEALTHCARE AI IN THE MIDDLE EAST
        </h1>
      </div>
    </section>
  );
}
