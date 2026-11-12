"use client";

import { type ReactNode } from "react";

export function AmbientGlowCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <article className={`relative group ${className}`}>
      {children}
    </article>
  );
}
