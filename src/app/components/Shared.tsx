"use client";

import { ReactNode, useEffect, useState, useRef } from "react";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export function Counter({ end, suffix = "", duration = 1500 }: CounterProps) {
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

export function GradientText({ children }: { children: ReactNode }) {
  return <span className="text-[#009EAD]">{children}</span>;
}

export function Logo() {
  return (
    <a
      className="flex items-center w-[176px] h-[56px] hover:opacity-90 transition-opacity duration-200"
      href="/dubai/healthcare/"
      aria-label="World AI Show | Healthcare and Life Sciences | Dubai 2027"
    >
      <img
        src="/dubai/healthcare/logos/wais-27-healthcare_header.svg"
        alt="World AI Show | Healthcare and Life Sciences | Dubai 2027"
        width={176}
        height={56}
        className="w-full h-full object-contain"
      />
    </a>
  );
}

interface ButtonProps {
  children: ReactNode;
  variant?: "solid" | "outline" | "outline-light";
  href?: string;
  showArrow?: boolean;
}

export function Button({ children, variant = "solid", href = "#cta", showArrow = false }: ButtonProps) {
  const variants = {
    solid: "bb-btn-primary",
    outline: "bb-btn-outline-dark",
    "outline-light": "bb-btn-outline-light",
  };

  return (
    <a className={`group ${variants[variant]}`} href={href}>
      {children}
      {showArrow && (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 object-contain bb-btn-arrow"
          aria-hidden="true"
        >
          <path
            d="M3.33334 8H12.6667"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.66666 4L12.6667 8L8.66666 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </a>
  );
}
