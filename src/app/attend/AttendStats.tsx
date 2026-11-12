"use client";

import { useEffect, useRef, useState } from "react";

function Counter({ end, prefix = "", suffix = "", duration = 1500 }: { end: number; prefix?: string; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return (
    <span ref={elementRef}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

const statsData = [
  { number: 300, prefix: "", suffix: "+", label: "Pre-Qualified Healthcare CXOs" },
  { number: 80, prefix: "", suffix: "%+", label: "Buy-Side Institutional Ratio" },
  { number: 45, prefix: "35–", suffix: "", label: "Expert Clinical & Technical Speakers" },
  { number: 4, prefix: "", suffix: "", label: "Core Sector Content Pillars" },
  { number: 48, prefix: "", suffix: "", label: "Global Series Editions" },
];

export function AttendStats() {
  return (
    <div className="grid grid-cols-5 gap-4 mt-9 max-[980px]:grid-cols-2 max-sm:grid-cols-1">
      {statsData.map((stat) => (
        <article
          className="min-h-[143px] p-6 text-center flex flex-col items-center justify-center border border-[#0069B8]/52 rounded-[14px] bg-[#0D1B2E] shadow-[0_16px_40px_rgba(0,0,0,0.35)] group hover:-translate-y-1 hover:border-[#009EAD] transition-all duration-300"
          key={stat.label}
        >
          <strong className="block text-[#009EAD] text-[34px] font-[850] leading-none">
            <Counter end={stat.number} prefix={stat.prefix} suffix={stat.suffix} />
          </strong>
          <span className="block mt-[18px] text-[#F7F9FC]/80 text-[15px] leading-snug">{stat.label}</span>
        </article>
      ))}
    </div>
  );
}
