"use client";

import { GradientText } from "../components/Shared";

export function SpeakersHero() {
  return (
    <section
      className="relative min-h-[540px] flex items-center page-hero-top pb-[76px] overflow-hidden bg-cover bg-[position:center_top] bg-no-repeat after:absolute after:inset-x-0 after:bottom-0 after:h-20 after:bg-gradient-to-t after:from-[#08121E] after:to-transparent after:z-0 max-sm:min-h-[440px] max-sm:pb-[56px]"
      style={{
        backgroundImage:
          'linear-gradient(90deg, rgba(8, 18, 30, 0.94) 0%, rgba(8, 18, 30, 0.68) 46%, rgba(8, 18, 30, 0.16) 100%), url("/dubai/healthcare/images/speakers/Speaker-banner.webp")',
      }}
    >
      <div className="relative z-10 w-[min(1172px,calc(100%-48px))] max-sm:w-[min(100%-32px,1172px)] mx-auto">
        <h1 className="m-0 text-white font-[850] leading-[1.06] tracking-[-0.01em] text-[clamp(36px,4.8vw,62px)] w-full uppercase">
          MEET THE <GradientText>CLINICAL ARCHITECTS</GradientText> OF HEALTHCARE AI IN THE MIDDLE EAST
        </h1>
      </div>
    </section>
  );
}
