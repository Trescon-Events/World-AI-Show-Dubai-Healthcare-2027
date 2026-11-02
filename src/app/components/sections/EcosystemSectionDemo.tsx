"use client";

import { useEffect, useRef, useState } from "react";
import { GradientText } from "../Shared";

interface TelemetryBar {
  name: string;
  value: number;
  color: string;
  textColor: string;
  glowColor: string;
}

interface TelemetryCardData {
  index: string;
  displayValue: string;
  primaryNum: number;
  label: string;
  source: string;
  image: string;
  bars: TelemetryBar[];
  icon: React.ReactNode;
}

const sourceCitedCards: TelemetryCardData[] = [
  {
    index: "01",
    displayValue: "USD 1.8B+",
    primaryNum: 18,
    label: "Middle East healthcare AI market projection by 2027 (CAGR exceeding 35%)",
    source: "Frost & Sullivan / Healthcare Technology Insights",
    image: "/dubai/healthcare/images/benchmarks/benchmark-01.png",
    bars: [
      {
        name: "Regional Health System AI Capital Priority",
        value: 82,
        color: "from-[#9be12b] via-[#C0F43C] to-[#d8ff66]",
        textColor: "text-[#C0F43C]",
        glowColor: "rgba(192, 244, 60, 0.55)",
      },
      {
        name: "Annual Healthcare AI Growth Rate (CAGR)",
        value: 35,
        color: "from-[#1289b8] via-[#2fd5f6] to-[#6be5ff]",
        textColor: "text-[#2fd5f6]",
        glowColor: "rgba(47, 213, 246, 0.5)",
      },
    ],
    icon: (
      <svg className="w-9 h-9 text-[#2fd5f6]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="31" x2="32" y2="31" />
        <rect x="6.5" y="23" width="3.8" height="8" rx="0.6" />
        <rect x="12.8" y="19" width="3.8" height="12" rx="0.6" />
        <rect x="19.1" y="15" width="3.8" height="16" rx="0.6" />
        <rect x="25.4" y="8" width="3.8" height="23" rx="0.6" />
        <path d="M6.5 18.5 C11 17 16 13.5 21.5 7.5" />
        <polyline points="17.5 7.2 21.8 7.2 21.8 11.5" />
      </svg>
    ),
  },
  {
    index: "02",
    displayValue: "45% of Hours",
    primaryNum: 45,
    label: "Clinician time consumed by documentation and EHR data entry (68% regional providers prioritising ambient voice)",
    source: "American Medical Association / Regional Digital Health Survey",
    image: "/dubai/healthcare/images/benchmarks/benchmark-02.png",
    bars: [
      {
        name: "Regional providers prioritising ambient voice",
        value: 68,
        color: "from-[#9be12b] via-[#C0F43C] to-[#d8ff66]",
        textColor: "text-[#C0F43C]",
        glowColor: "rgba(192, 244, 60, 0.55)",
      },
      {
        name: "Clinician hours consumed by EHR data entry",
        value: 45,
        color: "from-[#1289b8] via-[#2fd5f6] to-[#6be5ff]",
        textColor: "text-[#2fd5f6]",
        glowColor: "rgba(47, 213, 246, 0.5)",
      },
    ],
    icon: (
      <svg className="w-9 h-9 text-[#2fd5f6]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <path d="M7.5 9.5 A13.5 13.5 0 0 0 7.5 26.5" />
        <path d="M28.5 9.5 A13.5 13.5 0 0 1 28.5 26.5" />
        <path d="M10.5 12 A10 10 0 0 0 10.5 24" />
        <path d="M25.5 12 A10 10 0 0 1 25.5 24" />
        <circle cx="18" cy="18" r="7.5" />
        <path d="M18 12.8 L22.2 14.5 V18.2 C22.2 20.9 18 22.8 18 22.8 C18 22.8 13.8 20.9 13.8 18.2 V14.5 L18 12.8 Z" />
        <line x1="18" y1="13.2" x2="18" y2="22.4" />
      </svg>
    ),
  },
  {
    index: "03",
    displayValue: ">60% Faster",
    primaryNum: 60,
    label: "Reduction in time-to-treatment for critical acute events (ischemic stroke, ICH) with AI triage",
    source: "The Lancet Digital Health / Clinical Trial Results",
    image: "/dubai/healthcare/images/benchmarks/benchmark-03.png",
    bars: [
      {
        name: "Acute stroke & ICH time-to-treatment reduction",
        value: 60,
        color: "from-[#1289b8] via-[#2fd5f6] to-[#6be5ff]",
        textColor: "text-[#2fd5f6]",
        glowColor: "rgba(47, 213, 246, 0.55)",
      },
      {
        name: "Diagnostic imaging triage sensitivity benchmark",
        value: 94,
        color: "from-[#9be12b] via-[#C0F43C] to-[#d8ff66]",
        textColor: "text-[#C0F43C]",
        glowColor: "rgba(192, 244, 60, 0.55)",
      },
    ],
    icon: (
      <svg className="w-9 h-9 text-[#2fd5f6]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <path d="M16.5 5.5 L27 9.5 V17.5 C27 24.2 16.5 29.5 16.5 29.5 C16.5 29.5 6 24.2 6 17.5 V9.5 L16.5 5.5 Z" />
        <polyline points="12.5 17 15.5 20 21 14" />
        <circle cx="24.5" cy="24.5" r="5.2" className="fill-[#071320]" stroke="currentColor" strokeWidth={1.7} />
        <polyline points="22.3 24.5 24 26.2 27 23" />
      </svg>
    ),
  },
];

const forumIsNotCards = [
  {
    num: "01",
    title: "Not a generic medical equipment trade show",
    desc: "No hospital furniture, physical diagnostic hardware, surgical disposables, or general hospital supplies. Coverage focuses purely on enterprise healthcare software, clinical algorithms, and health data intelligence.",
  },
  {
    num: "02",
    title: "Not a consumer wellness or gadget expo",
    desc: "Fitness trackers, lifestyle wellness apps, and direct-to-consumer gadgets are completely excluded. The forum serves institutional healthcare networks, hospital groups, and enterprise life-sciences systems.",
  },
  {
    num: "03",
    title: "Not an academic bioinformatics symposium",
    desc: "Sessions do not debate speculative wet-lab hypotheses or distant academic models. Focus rests strictly on validated, clinically certified, and deployable software solutions.",
  },
  {
    num: "04",
    title: "Not an unvetted vendor pitch platform",
    desc: "Trescon maintains strict editorial governance over the agenda. Commercial presentations are strictly capped, vetted, and structured around practical clinical formats with verified hospital buyer case studies.",
  },
];

function BenchmarkGraphic({ card }: { card: TelemetryCardData }) {
  return (
    <div className="relative w-full h-[200px] mt-1.5 mb-3 overflow-hidden flex items-center justify-center select-none pointer-events-none">
      <div className="relative w-full h-full animate-[IsoFloat_3.8s_ease-in-out_infinite]">
        <img
          src={card.image}
          alt={card.label}
          className="w-full h-full object-contain object-center animate-[NeonBreath_3.2s_ease-in-out_infinite] group-hover:scale-[1.04] transition-transform duration-500"
        />

        {card.index === "01" && (
          <svg
            viewBox="0 0 304 246"
            className="absolute inset-0 w-full h-full overflow-visible"
            fill="none"
          >
            <path
              d="M100 236 L218 175 L292 134"
              stroke="#2fd5f6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="16 90"
              className="animate-[CircuitPulse_2.6s_linear_infinite]"
            />
            <path
              d="M100 236 L22 190 L98 146"
              stroke="#C0F43C"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeDasharray="14 85"
              className="animate-[CircuitPulse_3s_linear_infinite]"
            />
            <line
              x1="251"
              y1="145"
              x2="251"
              y2="14"
              stroke="#e5ff85"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="18 70"
              className="animate-[ArrowAscend_1.8s_linear_infinite]"
            />
            <circle cx="215" cy="95" r="2.8" fill="#e5ff85" className="animate-[ParticleRise_2.2s_ease-out_infinite]" />
            <circle cx="252" cy="110" r="3" fill="#C0F43C" className="animate-[ParticleRise_1.9s_ease-out_0.5s_infinite]" />
            <circle cx="235" cy="125" r="2.2" fill="#2fd5f6" className="animate-[ParticleRise_2.5s_ease-out_1.1s_infinite]" />
          </svg>
        )}

        {card.index === "02" && (
          <svg
            viewBox="0 0 304 230"
            className="absolute inset-0 w-full h-full overflow-visible"
            fill="none"
          >
            <path
              d="M296 36 L160 112 L52 54"
              stroke="#e4ff82"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="26 160"
              className="animate-[LaserDeflect_1.9s_linear_infinite]"
            />
            <path
              d="M294 64 L158 116 L76 112"
              stroke="#2fd5f6"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="22 150"
              className="animate-[LaserDeflect_2.2s_linear_0.6s_infinite]"
            />
          </svg>
        )}

        {card.index === "03" && (
          <svg
            viewBox="0 0 304 206"
            className="absolute inset-0 w-full h-full overflow-visible"
            fill="none"
          >
            <path
              d="M160 112 L14 194"
              stroke="#e5ff85"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="5 22"
              className="animate-[StreamOut_1.2s_linear_infinite]"
            />
          </svg>
        )}
      </div>
    </div>
  );
}

function useAnimatedValue(target: number, triggerKey: number, duration = 1350, delay = 0) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (triggerKey === 0) return;
    let rafId: number;
    let timeoutId: ReturnType<typeof setTimeout>;

    setVal(0);
    timeoutId = setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setVal(Math.round(eased * target));
        if (progress < 1) {
          rafId = requestAnimationFrame(tick);
        }
      };
      rafId = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(rafId);
    };
  }, [target, triggerKey, duration, delay]);

  return val;
}

function TelemetryCard({ card, cardIndex }: { card: TelemetryCardData; cardIndex: number }) {
  const cardRef = useRef<HTMLElement>(null);
  const [animTrigger, setAnimTrigger] = useState(0);
  const [barsExpanded, setBarsExpanded] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimTrigger((prev) => (prev === 0 ? 1 : prev));
          setBarsExpanded(true);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const replayAnimation = () => {
    setBarsExpanded(false);
    setTimeout(() => {
      setAnimTrigger((prev) => prev + 1);
      setBarsExpanded(true);
    }, 60);
  };

  const staggerMs = cardIndex * 140;
  const primaryCount = useAnimatedValue(card.primaryNum, animTrigger, 1300, staggerMs + 40);
  const bar0Count = useAnimatedValue(card.bars[0].value, animTrigger, 1400, staggerMs + 120);
  const bar1Count = useAnimatedValue(card.bars[1].value, animTrigger, 1400, staggerMs + 280);
  const barCounts = [bar0Count, bar1Count];

  const formattedHeadline =
    card.index === "01"
      ? `USD ${(primaryCount / 10).toFixed(1)}B+`
      : card.index === "02"
      ? `${primaryCount}% of Hours`
      : `>${primaryCount}% Faster`;

  return (
    <article
      ref={cardRef}
      data-aos={cardIndex === 0 ? "fade-right" : cardIndex === 1 ? "fade-up" : "fade-left"}
      data-aos-delay={String(cardIndex * 150)}
      onMouseEnter={replayAnimation}
      className="group relative p-7 rounded-[20px] border border-[#2a4359]/80 bg-[#071320] shadow-[0_24px_60px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)] text-left flex flex-col justify-between overflow-hidden hover:-translate-y-1.5 hover:border-[#2fd5f6]/55 hover:shadow-[0_28px_70px_rgba(0,0,0,0.65),0_0_32px_rgba(47,213,246,0.14)] transition-all duration-300"
    >
      <div>
        <div className="relative z-10 flex items-center justify-between mb-2.5">
          <div className="flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            {card.icon}
          </div>
          <span className="text-[#79acc7] font-mono text-[12px] font-semibold tracking-[0.8px] uppercase">
            BENCHMARK // {card.index}
          </span>
        </div>

        <strong className="relative z-10 block text-[clamp(21px,1.9vw,26px)] font-[850] leading-[1.15] tracking-[-0.5px] text-[#C0F43C] tabular-nums drop-shadow-[0_0_16px_rgba(192,244,60,0.2)] mb-1">
          {animTrigger > 0 ? formattedHeadline : card.displayValue}
        </strong>

        <BenchmarkGraphic card={card} />

        <p className="relative z-10 m-0 text-white font-semibold text-[15.5px] leading-[1.35] mb-3.5">
          {card.label}
        </p>

        <div className="relative z-10 space-y-3 pt-1.5">
          {card.bars.map((bar, bIdx) => (
            <div key={bar.name} className="space-y-1.5">
              <div className="flex items-center justify-between text-[11.5px]">
                <span className="text-white/80 group-hover:text-white transition-colors">
                  {bar.name}
                </span>
                <span className={`${bar.textColor} font-bold tabular-nums`}>
                  {barCounts[bIdx]}%
                </span>
              </div>

              <div className="relative w-full h-[7px] rounded-full bg-[#132638] overflow-hidden">
                <div
                  className={`relative h-full rounded-full bg-gradient-to-r ${bar.color} transition-all ease-out overflow-hidden`}
                  style={{
                    width: barsExpanded ? `${bar.value}%` : "0%",
                    transitionDuration: "1350ms",
                    transitionDelay: `${staggerMs + bIdx * 160}ms`,
                    boxShadow: barsExpanded ? `0 0 12px ${bar.glowColor}` : "none",
                  }}
                >
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.45) 50%, transparent 100%)",
                      animation: "telemetryShimmer 2.4s infinite linear",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Plain-text citation footer (per Rule — Plain-Text Sources) */}
      <div className="relative z-10 mt-5 pt-2 flex items-center justify-between">
        <span className="text-white/55 text-[11px] leading-snug">
          {card.source}
        </span>
      </div>
    </article>
  );
}

export function EcosystemSectionDemo() {
  return (
    <section
      className="relative w-full pt-10 pb-20 bg-[#020b1c] overflow-hidden flex flex-col items-center max-sm:py-12"
      id="ecosystem"
    >
      <style>{`
        @keyframes telemetryShimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
        @keyframes IsoFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes NeonBreath {
          0%, 100% { filter: brightness(1) drop-shadow(0 0 0px rgba(47, 213, 246, 0)); }
          50% { filter: brightness(1.12) drop-shadow(0 0 12px rgba(192, 244, 60, 0.22)); }
        }
        @keyframes CircuitPulse {
          0% { stroke-dashoffset: 212; opacity: 0.25; }
          50% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0.25; }
        }
        @keyframes ArrowAscend {
          0% { stroke-dashoffset: 176; opacity: 0.35; }
          50% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0.35; }
        }
        @keyframes ParticleRise {
          0% { transform: translateY(14px) scale(0.7); opacity: 0; }
          40% { opacity: 0.95; }
          100% { transform: translateY(-28px) scale(1.15); opacity: 0; }
        }
        @keyframes LaserDeflect {
          0% { stroke-dashoffset: 188; opacity: 0.2; }
          35% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0.1; }
        }
        @keyframes StreamOut {
          0% { stroke-dashoffset: 56; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>

      {/* Subtle architectural background grid & ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(24, 212, 255, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(24, 212, 255, 0.08) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 20%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 w-[900px] h-[420px] rounded-full bg-[#18d4ff]/[0.05] blur-[130px] pointer-events-none"
        aria-hidden="true"
      />

      {/* ───── S3 · The argument — page centre of gravity ───── */}
      <div className="relative z-10 w-[min(1172px,calc(100%-48px))] max-sm:w-[min(100%-24px,1172px)] mx-auto flex flex-col items-center text-center">
        <span
          data-aos="fade-up"
          className="inline-block font-mono text-[12px] uppercase tracking-[2.4px] text-[#C0F43C] font-bold mb-3"
        >
          The Single Strategic Hook
        </span>

        <h2
          data-aos="fade-up"
          className="w-full text-center font-[850] text-white leading-[1.06] tracking-[-1.8px] text-[clamp(32px,4.4vw,52px)] mb-5"
        >
          Moving clinical AI from isolated experimental trials into{" "}
          <GradientText>governed, reimbursable clinical practice.</GradientText>
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="80"
          className="w-full text-white font-semibold text-[19px] leading-[1.6] mb-4 max-sm:text-[16.5px]"
        >
          Healthcare providers cannot afford unvalidated AI experiments where patient safety, clinical liability, and sensitive data sovereignty are on the line. World AI Show convenes hospital operators, health authorities, and life-sciences leaders around clinical evidence and live workflow integration.
        </p>

        <p
          data-aos="fade-up"
          data-aos-delay="120"
          className="w-full text-white/75 text-[17px] leading-[1.65] mb-14 max-sm:text-[15.5px]"
        >
          Middle East healthcare systems across MOHAP, DHA, and DoH jurisdictions are executing ambitious digital modernisation mandates. However, clinical leaders and hospital operators face a profound implementation divide: while algorithms demonstrate high diagnostic accuracy in academic trials, embedding them safely into live Electronic Medical Record (EMR) systems, diagnostic workflows, and sovereign patient data environments requires unprecedented clinical governance and software interoperability.
        </p>

        {/* Component C2 — Animated Source-Cited Telemetry Cards */}
        <div className="w-full grid grid-cols-3 gap-6 max-lg:grid-cols-1 mb-10">
          {sourceCitedCards.map((card, idx) => (
            <TelemetryCard key={card.index} card={card} cardIndex={idx} />
          ))}
        </div>

        {/* Executive Mandate Callout Banner */}
        <div
          data-aos="zoom-in-up"
          data-aos-delay="150"
          className="relative w-full p-9 max-sm:p-6 rounded-[24px] border border-[#C0F43C]/35 bg-gradient-to-r from-[#06152d]/95 via-[#091e3a]/95 to-[#06152d]/95 shadow-[0_20px_50px_rgba(0,0,0,0.45),0_0_40px_rgba(192,244,60,0.08)] overflow-hidden text-left"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-[#C0F43C] via-[#18d4ff] to-[#C0F43C]" />
          <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full bg-[#C0F43C]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 flex items-center gap-7 max-md:flex-col max-md:items-start max-md:gap-4 pl-3 max-sm:pl-1">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl border border-[#C0F43C]/35 bg-[#C0F43C]/12 flex items-center justify-center text-[#C0F43C] shadow-[0_0_24px_rgba(192,244,60,0.2)]">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
            </div>
            <div>
              <span className="block text-[#C0F43C] font-mono text-[11px] font-bold uppercase tracking-[2.2px] mb-1.5">
                The Executive Mandate
              </span>
              <p className="m-0 text-white font-semibold text-[19px] leading-[1.55] max-sm:text-[16px]">
                World AI Show | Healthcare and Life Sciences convenes hospital operators, health authorities, and life-sciences leaders at the exact moment architecture specifications, clinical governance protocols, and annual enterprise healthtech procurement shortlists are locked down.
              </p>
            </div>
          </div>
        </div>

        {/* ───── S4 · What the forum is not ───── */}
        <div className="w-full mt-20 pt-16 border-t border-white/10">
          <span
            data-aos="fade-up"
            className="inline-block font-mono text-[12px] uppercase tracking-[2.4px] text-[#18D4FF] font-bold mb-3"
          >
            Editorial &amp; Audience Governance
          </span>
          <h3
            data-aos="fade-up"
            className="text-center font-[850] text-white leading-[1.08] tracking-[-1.6px] text-[clamp(28px,3.8vw,44px)] w-full mx-auto mb-10"
          >
            Clinical execution over{" "}
            <GradientText>medical equipment exhibitions</GradientText>
          </h3>

          <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1 text-left">
            {forumIsNotCards.map((item, idx) => (
              <div
                key={item.num}
                data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={String((idx % 2) * 100)}
                className="p-7 rounded-[20px] border border-white/12 bg-[#040D1F]/90 shadow-[0_18px_45px_rgba(0,0,0,0.35)] hover:border-[#18D4FF]/45 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full border border-[#FF5C5C]/35 bg-[#FF5C5C]/10 text-[#FF5C5C] font-mono text-[11px] font-bold uppercase tracking-[1.6px]">
                    Guardrail // {item.num}
                  </span>
                </div>
                <h4 className="m-0 mb-2.5 text-white font-extrabold text-[20px] leading-snug">
                  {item.title}
                </h4>
                <p className="m-0 text-white/75 text-[15px] leading-[1.6]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
