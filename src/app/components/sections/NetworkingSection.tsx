"use client";

import { useEffect, useRef, useState } from "react";
import { GradientText } from "../Shared";

const buyingUnitConstituencies = [
  {
    title: "Hospital Groups & Clinical Providers (Buy-Side 70%+)",
    desc: "Hospital CEOs, Chief Medical Officers (CMOs), CIOs, Chief Digital Officers, Heads of Clinical Informatics, Nursing Directors, Operations Heads.",
    badge: "01 · HOSPITAL GROUPS & CLINICAL PROVIDERS",
  },
  {
    title: "Health Authorities & Regulators",
    desc: "Ministry of Health and Prevention (MOHAP), Dubai Health Authority (DHA), Department of Health – Abu Dhabi (DoH), health data regulators.",
    badge: "02 · HEALTH AUTHORITIES & REGULATORS",
  },
  {
    title: "Life Sciences, Pharma & Genomics",
    desc: "Chief Scientific Officers, Heads of R&D, Clinical Trial Directors, Genomics Researchers, Bio-pharma Innovation Leads.",
    badge: "03 · LIFE SCIENCES, PHARMA & GENOMICS",
  },
  {
    title: "Health Payers & Insurers",
    desc: "Chief Medical Officers, Heads of Claims Automation, Actuarial Directors, Underwriting Leads from health insurance networks.",
    badge: "04 · HEALTH PAYERS & INSURERS",
  },
  {
    title: "Global Healthtech & Enterprise AI Providers",
    desc: "Enterprise software vendors, cloud hyperscalers, diagnostic imaging AI developers, ambient voice providers, systems integrators.",
    badge: "05 · HEALTHTECH & ENTERPRISE AI PROVIDERS",
  },
];

const thrivingEnvironmentItems = [
  {
    num: "01",
    title: "1-on-1 Matchmaking Lounges",
    desc: "Pre-scheduled, 1-on-1 bilateral meetings in dedicated VIP matchmaking lounges, connecting hospital group CXOs and clinical informatics leads directly with vetted healthcare AI solution providers.",
    image: "/dubai/healthcare/images/environment/matchmaking-lounges.jpg",
  },
  {
    num: "02",
    title: "Closed-Door Boardroom Discussions",
    desc: "Exclusive 60-minute private boardroom sessions hosting 15 pre-qualified wishlist hospital leaders and Chief Medical Officers along with dedicated executive moderation.",
    image: "/dubai/healthcare/images/environment/boardroom-discussions.jpg",
  },
  {
    num: "03",
    title: "Executive Roundtables & Breakout Clinics",
    desc: "Structured peer-to-peer outcome roundtables and interactive 75-minute workshop clinics designed for clinical delegates to benchmark EMR integration architectures and 2027 procurement roadmaps.",
    image: "/dubai/healthcare/images/environment/executive-roundtables.jpg",
  },
  {
    num: "04",
    title: "Keynotes and Plenary Panels",
    desc: "Main-stage 20-minute plenary keynotes and unvarnished regulatory panels addressing clinician burnout, diagnostic triage, sovereign health data residency, and live hospital workflow outcomes.",
    image: "/dubai/healthcare/images/environment/keynotes.jpg",
  },
];

function ThrivingEnvironmentShowcase() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollStage, setScrollStage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const raw = -rect.top / scrollable;
      const clamped = Math.max(0, Math.min(1, raw));
      setScrollStage(clamped * (thrivingEnvironmentItems.length - 1));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const activeIndex = Math.min(
    thrivingEnvironmentItems.length - 1,
    Math.max(0, Math.round(scrollStage))
  );

  return (
    <div className="mt-24 pt-16 border-t border-white/10">
      <div className="w-[min(1172px,calc(100%-48px))] mx-auto text-center mb-12 max-sm:w-[min(100%-24px,1172px)]">
        <h3
          data-aos="fade-up"
          className="m-0 text-white font-[850] text-[clamp(30px,4.4vw,54px)] leading-[1.04] tracking-[-1.8px] w-full mx-auto"
        >
          Designed for <GradientText>Maximum Clinical &amp; Executive Engagement</GradientText>
        </h3>
      </div>

      <div
        ref={trackRef}
        className="relative w-full"
        style={{ height: `${thrivingEnvironmentItems.length * 100}vh` }}
      >
        <div className="sticky top-0 h-dvh w-full overflow-hidden bg-[#020814] border-y border-white/10">
          {thrivingEnvironmentItems.map((item, idx) => {
            const revealProgress =
              idx === 0
                ? 1
                : Math.max(0, Math.min(1, scrollStage - (idx - 1)));
            const insetSide = (1 - revealProgress) * 50;
            const nextReveal = Math.max(0, Math.min(1, scrollStage - idx));
            const imgScale = 1.08 - revealProgress * 0.08 + nextReveal * 0.05;

            return (
              <div
                key={item.title}
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{
                  clipPath: `inset(0% ${insetSide.toFixed(2)}% 0% ${insetSide.toFixed(2)}%)`,
                  zIndex: idx,
                  willChange: "clip-path",
                }}
              >
                <div className="relative w-full h-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    style={{
                      transform: `scale(${imgScale.toFixed(3)})`,
                      transition: "transform 120ms linear",
                    }}
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(2, 11, 28, 0.32) 0%, rgba(2, 11, 28, 0.25) 45%, rgba(2, 10, 24, 0.92) 100%)",
                    }}
                  />
                </div>
              </div>
            );
          })}

          {thrivingEnvironmentItems.map((item, idx) => {
            const isCurrent = idx === activeIndex;
            return (
              <div
                key={item.title}
                className={`absolute inset-0 p-[3.5vw] max-md:p-6 flex items-end justify-start bg-gradient-to-t from-[#020814]/95 via-[#020814]/45 to-transparent transition-all duration-500 ${
                  isCurrent
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-4 pointer-events-none"
                }`}
                style={{ zIndex: 50 + idx }}
              >
                <div className="flex flex-col gap-2.5 self-end mb-1 max-w-[740px]">
                  <div className="leading-[1.06] text-[clamp(24px,2.8vw,40px)] font-[850] uppercase tracking-[-0.8px]">
                    <GradientText>{item.title}</GradientText>
                  </div>
                  <p className="m-0 text-white/85 text-[clamp(14.5px,1.15vw,17.5px)] leading-[1.55] font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function NetworkingSection() {
  const [, setIsHovered] = useState(false);

  return (
    <section className="relative py-[104px] bg-[#020C21] overflow-x-clip max-sm:py-[72px]" id="networking">
      <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-24px,1172px)]">
        {/* S7 · Who is in the room */}
        <div className="flex flex-col items-center text-center">
          <div className="w-full mb-12">
            <span className="inline-block font-mono text-[12px] uppercase tracking-[2.4px] text-[#C0F43C] font-bold mb-3">
              Who Is in the Room
            </span>
            <h2 className="font-[850] text-white leading-[1.06] tracking-[-1.8px] text-[clamp(32px,4.2vw,50px)] m-0">
              Five governed institutional constituencies{" "}
              <GradientText>(Minimum 70% Buy-Side Provider Ratio)</GradientText>
            </h2>
            <p className="mt-5 mb-0 text-muted text-[18px] leading-[1.55] max-sm:text-[16px]">
              Meet with over 300 pre-qualified hospital group CXOs, Chief Medical Officers, healthcare CIOs, clinical informatics leaders, and health regulators convening around validated clinical deployments.
            </p>
          </div>

          {/* Component C4 — Uniform 5 Constituency Blocks Grid */}
          <div className="w-full grid grid-cols-6 gap-5 max-[980px]:grid-cols-2 max-sm:grid-cols-1 text-left">
            {buyingUnitConstituencies.map((item, idx) => (
              <article
                key={item.title}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`group flex flex-col justify-between min-h-[210px] p-7 rounded-[18px] border border-[#18d4ff]/25 bg-gradient-to-br from-[#00ceff]/8 to-[#c0f43c]/4 shadow-[inset_0_0_28px_rgba(65,220,255,0.06),0_20px_60px_rgba(0,0,0,0.22)] hover:-translate-y-0.5 hover:border-[#C0F43C]/60 hover:shadow-[inset_0_0_28px_rgba(192,244,60,0.08),0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-300 max-[980px]:col-span-1 ${
                  idx < 3 ? "col-span-2" : "col-span-3"
                }`}
              >
                <div>
                  <span className="inline-block font-mono text-[11px] uppercase tracking-[1.8px] text-cyan mb-3">
                    {item.badge}
                  </span>
                  <h3 className="text-white text-[20px] font-extrabold leading-[1.25] mb-2.5 group-hover:text-[#C0F43C] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted text-[15px] leading-[1.6] m-0">
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Dedicated Full-Bleed Sticky Scroll Section */}
      <ThrivingEnvironmentShowcase />

      <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-24px,1172px)]">
        {/* S8 · How to attend — two-door model */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <div className="text-center mb-10">
            <span className="inline-block font-mono text-[12px] uppercase tracking-[2.4px] text-[#18D4FF] font-bold mb-3">
              How to Attend · Two-Door Model
            </span>
            <h3 className="text-white font-[850] text-[clamp(30px,3.8vw,44px)] leading-[1.08] tracking-[-1.2px]">
              A Forum Composed for <GradientText>Healthcare Buyers &amp; Solution Providers</GradientText>
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-6 max-[980px]:grid-cols-1">
            {/* Door 1: Delegate Pass */}
            <div
              data-aos="fade-right"
              data-aos-delay="100"
              className="group relative flex flex-col justify-between p-8 rounded-[22px] border border-[#C0F43C]/35 bg-gradient-to-br from-[#C0F43C]/[0.09] via-[#041022] to-[#041022] shadow-[0_20px_50px_rgba(0,0,0,0.35)] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C0F43C]/80 hover:shadow-[0_28px_70px_rgba(0,0,0,0.55),0_0_42px_rgba(192,244,60,0.14)]"
            >
              <div className="pointer-events-none absolute inset-x-10 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#C0F43C]/50 to-transparent transition-all duration-500 group-hover:inset-x-4 group-hover:via-[#C0F43C] group-hover:shadow-[0_0_16px_#C0F43C]" />
              <div className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#C0F43C]/10 blur-[60px] opacity-40 transition-all duration-500 group-hover:opacity-100 group-hover:scale-125" />
              <span className="pointer-events-none select-none absolute top-5 right-7 font-mono font-black text-[54px] leading-none tracking-[-3px] text-white/[0.03] transition-colors duration-300 group-hover:text-[#C0F43C]/[0.09]">
                01
              </span>

              <div className="relative z-10">
                <h4 className="text-white font-extrabold text-[24px] leading-[1.2] mb-3 transition-colors duration-300 group-hover:text-[#f5ffe0]">
                  Delegate Pass — complimentary, strictly by invitation and qualification
                </h4>
                <p className="text-muted text-[16px] leading-[1.6] mb-6 transition-colors duration-300 group-hover:text-white/85">
                  Senior healthcare executives, hospital operators, clinical leaders, and health authority officials attend by invitation on a complimentary Delegate Pass, subject to qualification against an active operational mandate.
                </p>
              </div>
              <div className="relative z-10">
                <a
                  href="/dubai/healthcare/attend/delegate/"
                  className="inline-flex items-center justify-center gap-2.5 h-[50px] px-7 rounded-full font-extrabold text-[15px] text-[#06111F] [color:#06111F!important] bg-[#C0F43C] transition-all duration-300 group-hover:bg-[#cdfb50] group-hover:shadow-[0_0_28px_rgba(192,244,60,0.45)] hover:scale-[1.02]"
                >
                  Apply for a Delegate Pass
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>

            {/* Door 2: Business Pass */}
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="group relative flex flex-col justify-between p-8 rounded-[22px] border border-cyan/35 bg-gradient-to-br from-cyan/[0.09] via-[#041022] to-[#041022] shadow-[0_20px_50px_rgba(0,0,0,0.35)] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan/80 hover:shadow-[0_28px_70px_rgba(0,0,0,0.55),0_0_42px_rgba(24,212,255,0.14)]"
            >
              <div className="pointer-events-none absolute inset-x-10 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan/50 to-transparent transition-all duration-500 group-hover:inset-x-4 group-hover:via-cyan group-hover:shadow-[0_0_16px_#18d4ff]" />
              <div className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full bg-cyan/10 blur-[60px] opacity-40 transition-all duration-500 group-hover:opacity-100 group-hover:scale-125" />
              <span className="pointer-events-none select-none absolute top-5 right-7 font-mono font-black text-[54px] leading-none tracking-[-3px] text-white/[0.03] transition-colors duration-300 group-hover:text-cyan/[0.09]">
                02
              </span>

              <div className="relative z-10">
                <h4 className="text-white font-extrabold text-[24px] leading-[1.2] mb-3 transition-colors duration-300 group-hover:text-[#e6fbff]">
                  Business Pass — paid commercial access with strictly capped quota
                </h4>
                <p className="text-muted text-[16px] leading-[1.6] mb-6 transition-colors duration-300 group-hover:text-white/85">
                  Business Passes provide paid commercial access for healthtech providers, software vendors, and consultancies outside the invitation criteria, with registration numbers strictly capped to protect room composition.
                </p>
              </div>
              <div className="relative z-10">
                <a
                  href="/dubai/healthcare/attend/"
                  className="inline-flex items-center justify-center gap-2.5 h-[50px] px-7 rounded-full font-extrabold text-[15px] text-white border border-cyan/50 bg-cyan/10 transition-all duration-300 group-hover:bg-cyan group-hover:text-[#041022] group-hover:[color:#041022!important] group-hover:border-cyan group-hover:shadow-[0_0_28px_rgba(24,212,255,0.4)] hover:scale-[1.02]"
                >
                  Purchase a Business Pass
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
