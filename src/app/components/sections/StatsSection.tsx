"use client";

import { useEffect, useState, useRef } from "react";
import { GradientText } from "../Shared";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function Counter({ end, suffix = "", duration = 1500 }: CounterProps) {
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
      {count}
      {suffix}
    </span>
  );
}

const statsData = [
  {
    icon: "/dubai/healthcare/icons/stats/1.svg",
    number: 300,
    prefix: "",
    suffix: "+",
    label: "Pre-Qualified Healthcare CXOs",
    index: "01",
  },
  {
    icon: "/dubai/healthcare/icons/stats/3.svg",
    number: 80,
    prefix: "",
    suffix: "%+",
    label: "Buy-Side Institutional Ratio",
    index: "02",
  },
  {
    icon: "/dubai/healthcare/icons/stats/2.svg",
    number: 45,
    prefix: "35–",
    suffix: "",
    label: "Expert Clinical & Technical Speakers",
    index: "03",
  },
  {
    icon: "/dubai/healthcare/icons/stats/5.svg",
    number: 4,
    prefix: "",
    suffix: "",
    label: "Core Sector Content Pillars",
    index: "04",
  },
];

/* ── Hover Particles Canvas Animation ─────────────────────── */
function HoverParticles({ isHovered }: { isHovered: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      color: string;
    }> = [];

    const resizeCanvas = () => {
      if (canvas && canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
    };
    resizeCanvas();

    const colors = ["#0069B8", "#009EAD", "#F15928"];
    const initParticles = () => {
      particles = [];
      const particleCount = 22;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height + canvas.height / 3,
          vx: (Math.random() - 0.5) * 0.4,
          vy: -Math.random() * 0.6 - 0.2,
          size: Math.random() * 1.8 + 0.8,
          alpha: Math.random() * 0.45 + 0.15,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }
    };

    if (isHovered) {
      initParticles();
    }

    const animate = () => {
      if (!isHovered) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.003;

        if (p.y < 0 || p.alpha <= 0) {
          p.x = Math.random() * canvas.width;
          p.y = canvas.height;
          p.vx = (Math.random() - 0.5) * 0.4;
          p.vy = -Math.random() * 0.6 - 0.2;
          p.size = Math.random() * 1.8 + 0.8;
          p.alpha = Math.random() * 0.45 + 0.15;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    if (isHovered) {
      animate();
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [isHovered]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[16px]"
    />
  );
}

/* ── Interactive Stats Card (Component C1) ───────────────── */
function StatCard({ stat, index }: { stat: (typeof statsData)[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      data-aos={index === 0 ? "fade-right" : index === 3 ? "fade-left" : "fade-up"}
      data-aos-delay={String(index * 100)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative min-h-[194px] p-6 border border-[#0069B8]/22 rounded-[16px] bg-white shadow-[0_14px_34px_rgba(8,18,30,0.06)] group hover:-translate-y-1 hover:border-[#0069B8] transition-all duration-300 overflow-hidden flex flex-col items-center justify-center text-center"
    >
      <HoverParticles isHovered={isHovered} />

      <div className="relative z-10 grid place-items-center w-11 h-11 mx-auto rounded-full bg-[#08121E] border border-[#0069B8]/40 text-white group-hover:scale-105 group-hover:border-[#009EAD] transition-all duration-200">
        <img
          src={stat.icon}
          alt=""
          width={22}
          height={22}
          className="w-[22px] h-[22px] object-contain"
          aria-hidden="true"
        />
      </div>

      <strong className="block mt-[22px] text-[#F15928] font-[850] text-[34px] leading-none tracking-tight relative z-10 text-center">
        {stat.prefix}
        <Counter end={stat.number} suffix={stat.suffix} />
      </strong>

      <p className="mt-3 text-[#334155] font-mono text-[13px] uppercase tracking-[1px] leading-relaxed font-semibold relative z-10 text-center">
        {stat.label}
      </p>
    </article>
  );
}

export function StatsSection() {
  return (
    <section className="relative py-[76px] z-10 bg-[#F7F9FC] overflow-visible max-sm:py-[48px]" id="attend">
      <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1172px)]">
        {/* Title Heading */}
        <h2
          data-aos="fade-up"
          className="text-center font-[850] text-[#08121E] leading-[1.04] tracking-[-0.02em] text-[clamp(32px,4vw,48px)]"
        >
          <GradientText>The Power</GradientText> Behind the <GradientText>Room</GradientText>
        </h2>

        {/* Stats Grid Layout (Four across desktop, two across mobile per C1) */}
        <div className="grid grid-cols-4 gap-4 mt-12 pb-1.5 overflow-visible max-[980px]:grid-cols-2 max-sm:grid-cols-2 max-sm:mt-8">
          {statsData.map((stat, idx) => (
            <StatCard key={stat.index} stat={stat} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
