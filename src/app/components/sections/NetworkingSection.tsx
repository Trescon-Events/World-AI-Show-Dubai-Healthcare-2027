"use client";

import { useEffect, useRef, useState } from "react";
import { GradientText } from "../Shared";

const buyingUnitConstituencies = [
  {
    title: "Hospital Groups & Clinical Providers (Buy-Side 80%+)",
    desc: "Hospital CEOs, Chief Medical Officers (CMOs), CIOs, Chief Digital Officers, Heads of Clinical Informatics, Nursing Directors, Operations Heads.",
    badge: "HOSPITAL GROUPS & CLINICAL PROVIDERS",
  },
  {
    title: "Health Authorities & Regulators",
    desc: "Ministry of Health and Prevention (MOHAP), Dubai Health Authority (DHA), Department of Health – Abu Dhabi (DoH), health data regulators.",
    badge: "HEALTH AUTHORITIES & REGULATORS",
  },
  {
    title: "Life Sciences, Pharma & Genomics",
    desc: "Chief Scientific Officers, Heads of R&D, Clinical Trial Directors, Genomics Researchers, Bio-pharma Innovation Leads.",
    badge: "LIFE SCIENCES, PHARMA & GENOMICS",
  },
  {
    title: "Health Payers & Insurers",
    desc: "Chief Medical Officers, Heads of Claims Automation, Actuarial Directors, Underwriting Leads from health insurance networks.",
    badge: "HEALTH PAYERS & INSURERS",
  },
  {
    title: "Global Healthtech & Enterprise AI Providers",
    desc: "Enterprise software vendors, cloud hyperscalers, diagnostic imaging AI developers, ambient voice providers, systems integrators.",
    badge: "HEALTHTECH & ENTERPRISE AI PROVIDERS",
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
    <div className="py-16 bg-[#08121E] border-y border-[#0069B8]/35">
      <div className="w-[min(1172px,calc(100%-48px))] mx-auto text-center mb-12 max-sm:w-[min(100%-32px,1172px)]">
        <h3
          data-aos="fade-up"
          className="m-0 text-white font-[850] text-[clamp(30px,4.4vw,54px)] leading-[1.04] tracking-[-0.01em] w-full mx-auto"
        >
          Designed for <GradientText>Maximum Clinical &amp; Executive Engagement</GradientText>
        </h3>
      </div>

      <div
        ref={trackRef}
        className="relative w-full"
        style={{ height: `${thrivingEnvironmentItems.length * 100}vh` }}
      >
        <div className="sticky top-0 h-dvh w-full overflow-hidden bg-[#08121E] border-y border-[#0069B8]/30">
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
                        "linear-gradient(180deg, rgba(8, 18, 30, 0.32) 0%, rgba(8, 18, 30, 0.25) 45%, rgba(8, 18, 30, 0.92) 100%)",
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
                className={`absolute inset-0 p-[3.5vw] max-md:p-6 flex items-end justify-start bg-gradient-to-t from-[#08121E]/95 via-[#08121E]/45 to-transparent transition-all duration-500 ${
                  isCurrent
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-4 pointer-events-none"
                }`}
                style={{ zIndex: 50 + idx }}
              >
                <div className="flex flex-col gap-2.5 self-end mb-1 max-w-[740px]">
                  <div className="leading-[1.06] text-[clamp(24px,2.8vw,40px)] font-[850] uppercase tracking-[-0.01em]">
                    <GradientText>{item.title}</GradientText>
                  </div>
                  <p className="m-0 text-[#F7F9FC]/90 text-[clamp(14.5px,1.15vw,17.5px)] leading-[1.55] font-normal">
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
    <section className="relative bg-[#F7F9FC] overflow-x-clip" id="networking">
      <div className="w-[min(1172px,calc(100%-48px))] mx-auto py-[96px] max-sm:py-[68px] max-sm:w-[min(100%-32px,1172px)]">
        {/* S7 · Who is in the room */}
        <div className="flex flex-col items-center text-center">
          <div className="w-full mb-12">
            <h2 className="font-[850] text-[#08121E] leading-[1.06] tracking-[-0.01em] text-[clamp(32px,4.2vw,50px)] m-0">
              Governed by <GradientText>Five Institutional Constituencies</GradientText>
            </h2>
            <p className="mt-5 mb-0 text-[#334155] text-[18px] leading-[1.55] max-sm:text-[16px]">
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
                className={`group flex flex-col justify-between min-h-[210px] p-7 rounded-[18px] border border-[#0069B8]/22 bg-white shadow-[0_12px_32px_rgba(8,18,30,0.06)] hover:-translate-y-0.5 hover:border-[#0069B8] transition-all duration-300 max-[980px]:col-span-1 ${
                  idx < 3 ? "col-span-2" : "col-span-3"
                }`}
              >
                <div>
                  <span className="inline-block font-mono text-[11px] font-bold uppercase tracking-[1.8px] text-[#009EAD] mb-3">
                    {item.badge}
                  </span>
                  <h3 className="text-[#08121E] text-[20px] font-extrabold leading-[1.25] mb-2.5 group-hover:text-[#0069B8] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#334155] text-[15px] leading-[1.6] m-0">
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

      <div className="w-[min(1172px,calc(100%-48px))] mx-auto py-[96px] max-sm:py-[68px] max-sm:w-[min(100%-32px,1172px)]">
        {/* S8 · How to attend — Business Pass access */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-[#08121E] font-[850] text-[clamp(30px,3.8vw,44px)] leading-[1.08] tracking-[-0.01em]">
              A Forum Composed for <GradientText>Healthcare Buyers &amp; Solution Providers</GradientText>
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-6 overflow-visible max-[980px]:grid-cols-1">
            {/* Door 1: Business Pass (Buy-Side Healthcare & Clinical Leaders) */}
            <div
              data-aos="fade-right"
              data-aos-delay="100"
              className="group relative flex flex-col justify-between p-8 rounded-[22px] border border-[#0069B8]/22 bg-white shadow-[0_14px_38px_rgba(8,18,30,0.06)] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F15928]"
            >
              <div className="pointer-events-none absolute inset-x-10 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#F15928]/60 to-transparent transition-all duration-500 group-hover:inset-x-4 group-hover:via-[#F15928]" />

              <div className="relative z-10">
                <h4 className="text-[#08121E] font-extrabold text-[24px] leading-[1.2] mb-3 transition-colors duration-300 group-hover:text-[#0069B8]">
                  Business Pass — Healthcare Buyers &amp; Clinical Leaders
                </h4>
                <p className="text-[#334155] text-[16px] leading-[1.6] mb-6">
                  Senior healthcare executives, hospital operators, clinical leaders, and health authority officials attend on a Business Pass, with role verification ensuring alignment with an active operational mandate.
                </p>
              </div>
              <div className="relative z-10">
                <a
                  href="/dubai/healthcare/attend/delegate/"
                  className="bb-btn-primary"
                >
                  Apply for a Business Pass
                  <span className="bb-btn-arrow">→</span>
                </a>
              </div>
            </div>

            {/* Door 2: Business Pass (Commercial & Solution Providers) */}
            <div
              data-aos="fade-left"
              data-aos-delay="200"
              className="group relative flex flex-col justify-between p-8 rounded-[22px] border border-[#0069B8]/22 bg-white shadow-[0_14px_38px_rgba(8,18,30,0.06)] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#009EAD]"
            >
              <div className="pointer-events-none absolute inset-x-10 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#009EAD]/60 to-transparent transition-all duration-500 group-hover:inset-x-4 group-hover:via-[#009EAD]" />

              <div className="relative z-10">
                <h4 className="text-[#08121E] font-extrabold text-[24px] leading-[1.2] mb-3 transition-colors duration-300 group-hover:text-[#0069B8]">
                  Business Pass — Solution Providers (Strictly Capped Quota)
                </h4>
                <p className="text-[#334155] text-[16px] leading-[1.6] mb-6">
                  Business Passes provide commercial access for healthtech providers, software vendors, and consultancies, with registration numbers strictly capped to protect the 80%+ buy-side room composition.
                </p>
              </div>
              <div className="relative z-10">
                <a
                  href="/dubai/healthcare/attend/"
                  className="bb-btn-outline-light"
                >
                  Purchase a Business Pass
                  <span className="bb-btn-arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
