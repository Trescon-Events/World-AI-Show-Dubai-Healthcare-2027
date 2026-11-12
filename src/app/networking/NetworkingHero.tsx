"use client";

import { GradientText } from "../components/Shared";

export function NetworkingHero() {
  return (
    <section id="overview" className="relative min-h-[460px] flex items-start page-hero-top pb-[78px] overflow-hidden bg-cover bg-[position:center_top] bg-no-repeat before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:to-[#08121E]/92 before:z-0 max-sm:min-h-[400px] max-sm:pb-[50px]"
      style={{
        backgroundImage: 'linear-gradient(90deg, rgba(8,18,30,0.96) 0%, rgba(8,18,30,0.8) 47%, rgba(8,18,30,0.4) 100%), url("/dubai/healthcare/images/networking/networking-hero-bg.webp")'
      }}
    >
      <div className="relative z-10 w-[min(1172px,calc(100%-48px))] max-sm:w-[min(100%-32px,1172px)] mx-auto">
        <span className="inline-flex items-center mb-5 px-3.5 py-1.5 border border-[#009EAD]/40 rounded-full text-[#009EAD] font-mono text-[12px] uppercase tracking-[2px] bg-[#0D1B2E]">
          High-Value Networking
        </span>
        <h1 className="m-0 text-white font-[850] leading-[1.05] tracking-[-0.01em] text-[clamp(44px,5.8vw,74px)]">
          Where Middle East <br />
          <GradientText>healthcare AI leaders connect.</GradientText>
        </h1>
        <p className="w-full mt-6 mb-0 text-[#F7F9FC]/84 text-[20px] leading-relaxed max-sm:text-base">
          A dedicated networking environment in Dubai designed to foster institutional partnerships. Connect with health authorities, hospital CXOs, CMOs, CIOs, clinical informatics leads, and HealthTech architects without spectators.
        </p>
      </div>
    </section>
  );
}
