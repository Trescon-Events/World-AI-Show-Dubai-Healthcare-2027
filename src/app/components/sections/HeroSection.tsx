"use client";

import { Button, GradientText } from "../Shared";

export function HeroSection() {
  return (
    <section
      className="hero-bg relative min-h-[820px] grid place-items-center overflow-hidden text-center max-[980px]:min-h-[760px] max-sm:min-h-[720px]"
      id="home"
    >
      {/* Background Video Layer */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-100 brightness-[1.25] contrast-[1.06] z-0"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      >
        <source src="/dubai/healthcare/videos/wais-dubai-hero-banner.mp4" type="video/mp4" />
        <source src="/dubai/healthcare/videos/wais-mumbai-hero-banner.webm" type="video/webm" />
      </video>

      {/* Single Light Dark-Blue Tint Overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(8, 18, 30, 0.56) 0%, rgba(8, 18, 30, 0.48) 60%, rgba(8, 18, 30, 0.92) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[min(100%-32px,1172px)] relative z-10 mx-auto pt-[165px] lg:pt-[180px] pb-16 max-sm:pt-[124px] max-sm:pb-12 flex flex-col items-center">
        {/* Kicker */}
        <span
          data-aos="fade-down"
          data-aos-delay="30"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#009EAD]/45 bg-[#0D1B2E]/85 text-[#009EAD] font-mono text-[11.5px] uppercase tracking-[2.2px] font-bold mb-3"
        >
          World AI Show Industry Series · Sector Edition
        </span>

        {/* Event Lockup Sub-label */}
        <p
          data-aos="fade-down"
          data-aos-delay="50"
          className="text-white/95 font-mono text-[14px] sm:text-[17px] lg:text-[19px] uppercase tracking-[2.2px] font-bold mb-4"
        >
          World AI Show | Healthcare and Life Sciences | Dubai 2027
        </p>

        {/* Hero Title */}
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="w-full mx-auto text-white font-[850] leading-[1.08] xl:leading-[70px] tracking-[-0.01em] text-[clamp(32px,4.6vw,64px)] xl:text-[64px] text-center mb-3"
        >
          <span className="block">Deployable, governed AI for</span>
          <span className="block"><GradientText>clinical care &amp; hospital operations.</GradientText></span>
        </h1>

        {/* Thesis */}
        <p
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-[#009EAD] font-mono text-[14px] sm:text-[16px] uppercase tracking-[2px] font-bold mb-4"
        >
          From use case to operating outcome.
        </p>

        {/* Standfirst */}
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="w-full mx-auto text-[#F7F9FC]/84 text-[clamp(15px,1.55vw,18.5px)] xl:text-[18.5px] font-normal leading-relaxed xl:leading-[30px] tracking-normal text-center mb-8"
        >
          Dubai&rsquo;s buyer-led forum connecting 300+ hospital group CXOs, Chief Medical Officers, and health regulators to validate clinical evidence, EMR integration, and 2027 health tech procurement.
        </p>

        <div data-aos="fade-in" data-aos-delay="250" className="w-full border-t border-[#0069B8]/40 opacity-80 mt-1" />

        {/* Event Meta Footer */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="grid grid-cols-[max-content_max-content_max-content] justify-center items-center gap-6 w-full mx-auto mt-7 text-center max-[980px]:grid-cols-1 max-sm:gap-3 max-sm:mt-5"
        >
          {/* Column 1: Dates */}
          <div className="pr-6 border-r border-white/25 text-center max-[980px]:border-r-0 max-[980px]:pr-0 max-sm:w-full max-sm:pb-3 max-sm:border-b max-sm:border-white/20">
            <strong className="block text-[34px] font-[850] text-white leading-none max-sm:text-[26px]">
              <GradientText>25</GradientText>
            </strong>
            <span className="block mt-2 text-[13px] font-bold text-[#F7F9FC]/80 uppercase tracking-[1.5px] max-sm:text-[12px] max-sm:mt-1.5">
              MARCH 2027
            </span>
          </div>

          {/* Column 2: Venue */}
          <div className="pr-6 border-r border-white/25 text-center max-[980px]:border-r-0 max-[980px]:pr-0 max-sm:w-full max-sm:pb-3 max-sm:border-b max-sm:border-white/20">
            <strong className="block text-[34px] font-[850] text-white leading-none max-sm:text-[26px]">
              <GradientText>Dubai</GradientText>, United Arab Emirates
            </strong>
            <span className="block mt-2 text-[13px] font-bold text-[#F7F9FC]/80 uppercase tracking-[1.5px] max-sm:text-[12px] max-sm:mt-1.5">
              DAY 2 · MARCH DUBAI CLUSTER
            </span>
          </div>

          {/* Column 3: Duration */}
          <div className="text-left max-[980px]:text-center max-sm:w-full">
            <strong className="block text-[34px] font-[850] text-white leading-none max-sm:text-[26px]">
              1-<GradientText>Day</GradientText>
            </strong>
            <span className="block mt-2 text-[13px] font-bold text-[#F7F9FC]/80 uppercase tracking-[1.5px] max-sm:text-[12px] max-sm:mt-1.5">
              EXECUTIVE DECISION FORUM
            </span>
          </div>
        </div>

        {/* Hero CTA Actions */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex justify-center flex-wrap gap-3.5 mt-9 max-sm:flex-col max-sm:items-center max-sm:gap-3.5 max-sm:w-full max-sm:max-w-[340px]"
        >
          <Button href="/dubai/healthcare/attend/delegate/" showArrow={true}>
            Apply for a Business Pass
          </Button>
          <Button href="/dubai/healthcare/attend/sponsor/" variant="outline" showArrow={true}>
            Explore Commercial Sponsorship
          </Button>
          <a
            href="/dubai/healthcare/agenda/agenda/"
            className="bb-btn-outline-dark"
          >
            View Master Schedule <span className="bb-btn-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
