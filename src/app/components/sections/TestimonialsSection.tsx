"use client";

import { useEffect, useState } from "react";
import { GradientText } from "../Shared";

interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  category: string;
  highlight: string;
  accent: "cyan" | "green";
}

const testimonials: TestimonialItem[] = [
  {
    id: "01",
    quote:
      "We'd like to acknowledge Trescon for all the great efforts and structured organisation with thorough follow ups and accommodation.",
    name: "Microsoft",
    category: "Enterprise Cloud & AI Partner",
    highlight: "Structured Organisation & Follow-Up",
    accent: "cyan",
  },
  {
    id: "02",
    quote:
      "It was a great experience to work with Trescon. The team is super-efficient, proactive, and goes above and beyond to make the most out of the situation.",
    name: "Cloudflare",
    category: "Connectivity & Security Partner",
    highlight: "Proactive Execution & Delivery",
    accent: "green",
  },
  {
    id: "03",
    quote:
      "Ridiculously efficient is the phrase that comes to mind when I think about the team at Trescon. They have a sense of strong motivation and aims for excellence all the time. The team is creative, energetic, solution-oriented and highly motivated with great communication skills.",
    name: "SAP",
    category: "Enterprise Applications Partner",
    highlight: "Solution-Oriented Excellence",
    accent: "cyan",
  },
  {
    id: "04",
    quote:
      "The thing I like the most is that Trescon has the right mix of users who are exploring AI, and the vendors who have the solutions.",
    name: "DDN Storage",
    category: "AI Data Infrastructure Partner",
    highlight: "Curated Buyer & Solution Mix",
    accent: "green",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const active = testimonials[activeIndex];
  const isGreen = active.accent === "green";

  const previous = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };
  const next = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section
      className="relative py-[112px] bg-[#08121E] overflow-visible max-sm:py-[72px]"
      id="testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative z-10 w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1172px)]">
        {/* Heading + Carousel Controls */}
        <div className="flex items-end justify-between gap-6 mb-10 max-[980px]:flex-col max-[980px]:items-center max-[980px]:text-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#009EAD]/40 bg-[#0D1B2E] text-[#009EAD] text-xs font-mono uppercase tracking-[2px] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#009EAD] animate-pulse" />
              Partner &amp; Industry Endorsements
            </div>
            <h2 className="font-[850] text-white leading-[1.04] tracking-[-0.01em] text-[clamp(36px,4.6vw,54px)] m-0">
              What industry <br className="max-sm:hidden" />
              leaders <GradientText>are saying.</GradientText>
            </h2>
          </div>

          {/* Testimonial controls */}
          <div className="flex items-center gap-3 text-white/80 font-mono text-[12px]" aria-label="Testimonial controls">
            <button
              type="button"
              onClick={previous}
              className="grid place-items-center w-10 h-10 border border-[#0069B8]/40 rounded-full text-white bg-[#0D1B2E] cursor-pointer transition-all duration-200 hover:border-[#009EAD] hover:bg-[#0069B8] hover:text-white hover:-translate-y-0.5 outline-none"
              aria-label="Previous testimonial"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <div className="px-3.5 py-1.5 rounded-full border border-[#0069B8]/35 bg-[#0D1B2E] select-none tracking-[1.5px]">
              <span className="text-white font-bold">{String(activeIndex + 1).padStart(2, "0")}</span>
              <span className="text-white/40 mx-1.5">/</span>
              <span className="text-white/65">{String(testimonials.length).padStart(2, "0")}</span>
            </div>
            <button
              type="button"
              onClick={next}
              className="grid place-items-center w-10 h-10 border border-[#0069B8]/40 rounded-full text-white bg-[#0D1B2E] cursor-pointer transition-all duration-200 hover:border-[#009EAD] hover:bg-[#0069B8] hover:text-white hover:-translate-y-0.5 outline-none"
              aria-label="Next testimonial"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Main Spotlight Testimonial Card */}
        <article
          className={`relative overflow-hidden rounded-[24px] border p-9 sm:p-11 bg-[#0D1B2E] shadow-[0_26px_70px_rgba(0,0,0,0.45)] transition-all duration-500 ${
            isGreen
              ? "border-[#F15928]/65"
              : "border-[#009EAD]/65"
          }`}
        >
          {/* Top accent line */}
          <div
            className={`pointer-events-none absolute inset-x-12 top-0 h-[2px] transition-all duration-500 ${
              isGreen
                ? "bg-[#F15928]"
                : "bg-[#009EAD]"
            }`}
          />

          {/* Giant watermark quote mark */}
          <span
            aria-hidden="true"
            className="pointer-events-none select-none absolute -top-6 left-8 font-serif font-black text-[180px] leading-none text-white/[0.03]"
          >
            &ldquo;
          </span>

          <div className="relative z-10 grid grid-cols-[1fr_310px] gap-10 items-center max-[980px]:grid-cols-1 max-[980px]:gap-8">
            {/* Left Column: Quote & Metadata */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-[12px] border ${
                    isGreen
                      ? "border-[#F15928]/45 bg-[#F15928]/12 text-[#F15928]"
                      : "border-[#009EAD]/45 bg-[#009EAD]/12 text-[#009EAD]"
                  }`}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[2px] text-[#F7F9FC]/60">
                  ENDORSER // {active.id}
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono text-[10.5px] uppercase tracking-[1.4px] border ${
                    isGreen
                      ? "border-[#F15928]/40 bg-[#F15928]/12 text-[#F15928]"
                      : "border-[#009EAD]/40 bg-[#009EAD]/12 text-[#009EAD]"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isGreen ? "bg-[#F15928]" : "bg-[#009EAD]"}`} />
                  {active.highlight}
                </span>
              </div>

              <blockquote className="m-0 text-white font-bold leading-[1.52] tracking-[-0.01em] text-[clamp(19px,2.2vw,25px)]">
                &ldquo;{active.quote}&rdquo;
              </blockquote>
            </div>

            {/* Right Column: Partner Attribution Card */}
            <div
              className={`relative flex flex-col justify-between p-6 rounded-[18px] border bg-[#08121E] transition-all duration-300 ${
                isGreen ? "border-[#F15928]/45" : "border-[#009EAD]/45"
              }`}
            >
              <div className="flex items-center justify-start gap-3 mb-5 pb-4 border-b border-[#0069B8]/25">
                <span className="font-mono text-[10px] uppercase tracking-[1.8px] text-[#F7F9FC]/65 px-2.5 py-1 rounded-md border border-[#0069B8]/35 bg-[#0D1B2E]">
                  Verified Partner
                </span>
              </div>

              <div>
                <div className="font-mono text-[10.5px] uppercase tracking-[1.6px] text-[#F7F9FC]/55 mb-1">
                  Organisation
                </div>
                <strong className="block text-white font-extrabold text-[26px] tracking-[-0.01em] leading-tight">
                  {active.name}
                </strong>
                <span
                  className={`inline-block mt-1.5 font-mono text-[11.5px] ${
                    isGreen ? "text-[#F15928]" : "text-[#009EAD]"
                  }`}
                >
                  {active.category}
                </span>
              </div>

              {/* Accent bar */}
              <div className="mt-5 pt-3.5 border-t border-[#0069B8]/20 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[1.5px] text-[#F7F9FC]/55">
                  World AI Show Series
                </span>
                <span
                  className={`h-1.5 w-10 rounded-full ${
                    isGreen ? "bg-[#F15928]" : "bg-[#009EAD]"
                  }`}
                />
              </div>
            </div>
          </div>
        </article>

        {/* Bottom 4-Card Interactive Partner Selector Strip */}
        <div className="grid grid-cols-4 gap-4 mt-5 max-[980px]:grid-cols-2 max-sm:grid-cols-1">
          {testimonials.map((item, idx) => {
            const isSelected = idx === activeIndex;
            const itemGreen = item.accent === "green";
            return (
              <button
                key={item.name}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`group relative text-left p-5 rounded-[16px] border transition-all duration-300 cursor-pointer overflow-hidden outline-none ${
                  isSelected
                    ? itemGreen
                      ? "border-[#F15928] bg-[#0D1B2E] shadow-[0_14px_34px_rgba(0,0,0,0.4)] -translate-y-0.5"
                      : "border-[#009EAD] bg-[#0D1B2E] shadow-[0_14px_34px_rgba(0,0,0,0.4)] -translate-y-0.5"
                    : "border-[#0069B8]/35 bg-[#0D1B2E]/75 hover:border-[#009EAD]/65 hover:-translate-y-0.5"
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span
                    className={`font-mono text-[10.5px] uppercase tracking-[1.8px] ${
                      isSelected
                        ? itemGreen
                          ? "text-[#F15928]"
                          : "text-[#009EAD]"
                        : "text-[#F7F9FC]/55 group-hover:text-[#F7F9FC]/80"
                    }`}
                  >
                    {item.id} · PARTNER
                  </span>
                  <span
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      isSelected
                        ? itemGreen
                          ? "bg-[#F15928]"
                          : "bg-[#009EAD]"
                        : "bg-white/20 group-hover:bg-white/40"
                    }`}
                  />
                </div>
                <div className="text-white font-extrabold text-[17px] leading-snug mb-1">
                  {item.name}
                </div>
                <div className="text-[#F7F9FC]/60 text-[12px] leading-snug line-clamp-1">
                  {item.highlight}
                </div>
              </button>
            );
          })}
        </div>

        {/* Testimonial Video */}
        <div className="mt-14 flex flex-col items-center">
          <div className="relative w-[min(780px,100%)] aspect-video rounded-[20px] border-2 border-[#0069B8]/65 bg-[#0D1B2E] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
            <iframe
              src="https://www.youtube.com/embed/1Trq5urDZM8?rel=0&modestbranding=1"
              title="World AI Show Testimonial Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
