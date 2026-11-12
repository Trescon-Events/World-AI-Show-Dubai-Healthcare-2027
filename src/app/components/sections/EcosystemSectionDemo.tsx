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
    image: "/dubai/healthcare/images/benchmarks/benchmark-01-healthcare.jpg",
    bars: [
      {
        name: "Regional Health System AI Capital Priority",
        value: 82,
        color: "from-[#D94B1E] via-[#F15928] to-[#ff7b4f]",
        textColor: "text-[#F15928]",
        glowColor: "rgba(241, 89, 40, 0.45)",
      },
      {
        name: "Annual Healthcare AI Growth Rate (CAGR)",
        value: 35,
        color: "from-[#0069B8] via-[#009EAD] to-[#26c6d9]",
        textColor: "text-[#009EAD]",
        glowColor: "rgba(0, 158, 173, 0.45)",
      },
    ],
    icon: (
      <svg className="w-9 h-9 text-[#009EAD]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
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
    image: "/dubai/healthcare/images/benchmarks/benchmark-02-healthcare.jpg",
    bars: [
      {
        name: "Regional providers prioritising ambient voice",
        value: 68,
        color: "from-[#D94B1E] via-[#F15928] to-[#ff7b4f]",
        textColor: "text-[#F15928]",
        glowColor: "rgba(241, 89, 40, 0.45)",
      },
      {
        name: "Clinician hours consumed by EHR data entry",
        value: 45,
        color: "from-[#0069B8] via-[#009EAD] to-[#26c6d9]",
        textColor: "text-[#009EAD]",
        glowColor: "rgba(0, 158, 173, 0.45)",
      },
    ],
    icon: (
      <svg className="w-9 h-9 text-[#009EAD]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
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
    image: "/dubai/healthcare/images/benchmarks/benchmark-03-healthcare.jpg",
    bars: [
      {
        name: "Acute stroke & ICH time-to-treatment reduction",
        value: 60,
        color: "from-[#0069B8] via-[#009EAD] to-[#26c6d9]",
        textColor: "text-[#009EAD]",
        glowColor: "rgba(0, 158, 173, 0.45)",
      },
      {
        name: "Diagnostic imaging triage sensitivity benchmark",
        value: 94,
        color: "from-[#D94B1E] via-[#F15928] to-[#ff7b4f]",
        textColor: "text-[#F15928]",
        glowColor: "rgba(241, 89, 40, 0.45)",
      },
    ],
    icon: (
      <svg className="w-9 h-9 text-[#009EAD]" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        <path d="M16.5 5.5 L27 9.5 V17.5 C27 24.2 16.5 29.5 16.5 29.5 C16.5 29.5 6 24.2 6 17.5 V9.5 L16.5 5.5 Z" />
        <polyline points="12.5 17 15.5 20 21 14" />
        <circle cx="24.5" cy="24.5" r="5.2" className="fill-[#0D1B2E]" stroke="currentColor" strokeWidth={1.7} />
        <polyline points="22.3 24.5 24 26.2 27 23" />
      </svg>
    ),
  },
];

function BenchmarkGraphic({ card }: { card: TelemetryCardData }) {
  return (
    <div className="relative w-full h-[200px] mt-1.5 mb-3 overflow-hidden flex items-center justify-center select-none pointer-events-none">
      <div className="relative w-full h-full animate-[IsoFloat_3.8s_ease-in-out_infinite]">
        <img
          src={card.image}
          alt={card.label}
          className="w-full h-full object-contain object-center rounded-xl animate-[NeonBreath_3.2s_ease-in-out_infinite] group-hover:scale-[1.04] transition-transform duration-500 [mask-image:radial-gradient(ellipse_at_center,black_62%,transparent_98%)]"
        />
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
      className="group relative p-7 rounded-[20px] border border-[#0069B8]/52 bg-[#0D1B2E] shadow-[0_24px_60px_rgba(0,0,0,0.45)] text-left flex flex-col justify-between overflow-hidden hover:-translate-y-1.5 hover:border-[#009EAD] transition-all duration-300"
    >
      <div>
        <div className="relative z-10 flex items-center justify-between mb-2.5">
          <div className="flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            {card.icon}
          </div>
          <span className="text-[#009EAD] font-mono text-[12px] font-semibold tracking-[0.8px] uppercase">
            CLINICAL BENCHMARK
          </span>
        </div>

        <strong className="relative z-10 block text-[clamp(21px,1.9vw,26px)] font-[850] leading-[1.15] tracking-[-0.01em] text-[#F15928] tabular-nums mb-1">
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
                <span className="text-[#F7F9FC]/84 group-hover:text-white transition-colors">
                  {bar.name}
                </span>
                <span className={`${bar.textColor} font-bold tabular-nums`}>
                  {barCounts[bIdx]}%
                </span>
              </div>

              <div className="relative w-full h-[7px] rounded-full bg-[#08121E] overflow-hidden">
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
      className="relative w-full py-20 bg-[#08121E] overflow-hidden flex flex-col items-center max-sm:py-12"
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
          0%, 100% { filter: brightness(1) drop-shadow(0 0 0px rgba(0, 158, 173, 0)); }
          50% { filter: brightness(1.08) drop-shadow(0 0 10px rgba(0, 105, 184, 0.25)); }
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

      {/* ───── S3 · The argument — page centre of gravity ───── */}
      <div className="relative z-10 w-[min(1172px,calc(100%-48px))] max-sm:w-[min(100%-32px,1172px)] mx-auto flex flex-col items-center text-center">
        <h2
          data-aos="fade-up"
          className="w-full text-center font-[850] text-white leading-[1.06] tracking-[-0.02em] text-[clamp(32px,4vw,48px)] mb-5"
        >
          Moving clinical AI{" "}
          <GradientText>from experimental trials to reimbursable practice.</GradientText>
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="80"
          className="w-full text-[#F7F9FC]/88 text-[18px] leading-[1.6] mb-14 max-sm:text-[16px]"
        >
          Healthcare providers cannot afford unvalidated AI when patient safety, liability, and data sovereignty are at stake. World AI Show bridges the gap between algorithmic accuracy and hospital adoption, convening Middle East healthcare leaders around live EMR interoperability, clinical governance, and regulatory compliance.
        </p>

        {/* Component C2 — Animated Source-Cited Telemetry Cards */}
        <div className="w-full grid grid-cols-3 gap-6 overflow-visible max-lg:grid-cols-1 mb-10">
          {sourceCitedCards.map((card, idx) => (
            <TelemetryCard key={card.index} card={card} cardIndex={idx} />
          ))}
        </div>

        {/* Executive Mandate Callout Banner */}
        <div
          data-aos="zoom-in-up"
          data-aos-delay="150"
          className="relative w-full p-9 max-sm:p-6 rounded-[24px] border border-[#0069B8]/42 bg-[#0D1B2E] shadow-[0_20px_50px_rgba(0,0,0,0.45)] overflow-hidden text-left"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#0069B8]" />

          <div className="relative z-10 flex items-center gap-7 max-md:flex-col max-md:items-start max-md:gap-4 pl-3 max-sm:pl-1">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl border border-[#009EAD]/40 bg-[#08121E] flex items-center justify-center text-[#009EAD]">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
            </div>
            <div>
              <span className="block text-[#F15928] font-mono text-[11px] font-bold uppercase tracking-[2.2px] mb-1.5">
                The Executive Mandate
              </span>
              <p className="m-0 text-white font-semibold text-[19px] leading-[1.55] max-sm:text-[16px]">
                World AI Show | Healthcare and Life Sciences convenes hospital operators, health authorities, and life-sciences leaders at the exact moment architecture specifications, clinical governance protocols, and annual enterprise healthtech procurement shortlists are locked down.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
