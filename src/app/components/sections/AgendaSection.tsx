"use client";

import { useState, type ReactNode } from "react";
import { GradientText } from "../Shared";

export const themeItems = [
  {
    index: "01",
    label: "Ambient Intelligence, Clinical Documentation & Workforce Relief",
    heading: "Ambient Intelligence, Clinical Documentation & Workforce Relief",
    shortDesc:
      "Ambient clinical voice listening, automated medical coding and billing triage, physician burnout reduction, clinical decision support (CDS) copilots.",
    expandedScope:
      "Ambient clinical voice listening, automated medical coding and billing triage, physician burnout reduction, clinical decision support (CDS) copilots, nursing documentation workflows, and automated discharge summaries.",
    clinicalFormat: "Interactive 75-minute Workshop Clinic A (Hosted by Engagement Partner) & Buyer Evidence Plenary",
    image: "/dubai/healthcare/images/agenda/keynotes.webp",
  },
  {
    index: "02",
    label: "Diagnostic Imaging Triage, Pathology & Time-Critical Care",
    heading: "Diagnostic Imaging Triage, Pathology & Time-Critical Care",
    shortDesc:
      "Computer vision for radiology triage (stroke, trauma, oncology), automated pathology screening, early cancer detection pipelines.",
    expandedScope:
      "Computer vision for radiology triage (stroke, trauma, oncology), automated pathology screening, early cancer detection pipelines, time-critical clinical coordination, multi-modal diagnostic data fusion, and clinical regulatory validation.",
    clinicalFormat: "Interactive 75-minute Workshop Clinic B (Hosted by Engagement Partner) & Applied Case Studies",
    image: "/dubai/healthcare/images/agenda/panel-discussion.webp",
  },
  {
    index: "03",
    label: "Health System Operations, Capacity & Supply Chain Resilience",
    heading: "Health System Operations, Capacity & Supply Chain Resilience",
    shortDesc:
      "Predictive bed management and patient length-of-stay forecasting, emergency department triage optimisation, surgical scheduling.",
    expandedScope:
      "Predictive bed management and patient length-of-stay forecasting, emergency department triage optimisation, surgical scheduling and operating theatre utilisation, clinical staffing allocation, and hospital cold-chain tracking.",
    clinicalFormat: "Applied Case Studies Plenary & Outcome Roundtables",
    image: "/dubai/healthcare/images/agenda/driving-malaysia-stage.webp",
  },
  {
    index: "04",
    label: "Health Data Interoperability, Sovereign Governance & Life Sciences",
    heading: "Health Data Interoperability, Sovereign Governance & Life Sciences",
    shortDesc:
      "Compliance with UAE health data residency laws (Nabidh, Malaffi, Riayati), FHIR standards and multi-EMR integration, federated learning.",
    expandedScope:
      "Compliance with UAE health data residency laws (Nabidh, Malaffi, Riayati), FHIR standards and multi-EMR integration, patient privacy and de-identification, federated learning, synthetic clinical trials, and AI-accelerated drug discovery.",
    clinicalFormat: "Risk and Trust Plenary Panel & Sovereign Health Data Governance Sessions",
    image: "/dubai/healthcare/images/agenda/Fireside.webp",
  },
];

export const sixPartBlocks = [
  {
    num: "Block 1",
    title: "Sector Priority Brief",
    desc: "Opening framing by health authorities and hospital group CEOs establishing ranked clinical priorities, clinician shortage pressures, and immediate ROI benchmarks.",
    accent: "cyan",
  },
  {
    num: "Block 2",
    title: "Buyer Evidence",
    desc: "Frank, unvarnished clinical case studies examining real-world deployment hurdles, EMR integration friction, physician adoption challenges, and pilot post-mortems.",
    accent: "green",
  },
  {
    num: "Block 3",
    title: "Risk and Trust Plenary",
    desc: "Specialised regulatory panels detailing patient privacy assurance, clinical safety validation, bias mitigation across diverse demographic datasets, and regulatory compliance.",
    accent: "cyan",
  },
  {
    num: "Block 4",
    title: "Parallel Breakout Clinics",
    desc: "Two interactive 75-minute parallel workshop clinics: Clinic A: Ambient Clinical Voice, Copilots & Documentation (Hosted by Engagement Partner) | Clinic B: Diagnostic AI, Radiology Triage & Clinical Decision Support (Hosted by Engagement Partner).",
    accent: "green",
  },
  {
    num: "Block 5",
    title: "Applied Case Studies",
    desc: "Applied demonstrations detailing hospital capacity optimisation, operating theatre scheduling, and precision medicine breakthroughs across live hospital workflows.",
    accent: "cyan",
  },
  {
    num: "Block 6",
    title: "Outcome Roundtables",
    desc: "Curated peer discussions recording next actions, hospital procurement specifications, and verified vendor evaluation criteria for 2027 deployments.",
    accent: "green",
  },
];

function ThemeIcon({ index }: { index: number }) {
  const normalized = ((index % 4) + 4) % 4;
  if (normalized === 0) {
    return (
      <svg className="w-[23px] h-[23px] fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3 4 7v6c0 5 3.4 8.8 8 10 4.6-1.2 8-5 8-10V7l-8-4Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  }
  if (normalized === 1) {
    return (
      <svg className="w-[23px] h-[23px] fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4 4 8l8 4 8-4-8-4Z" />
        <path d="m4 12 8 4 8-4" />
        <path d="m4 16 8 4 8-4" />
      </svg>
    );
  }
  if (normalized === 2) {
    return (
      <svg className="w-[23px] h-[23px] fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20h16" />
        <path d="M6 20V9h5v11" />
        <path d="M13 20V4h5v16" />
        <path d="M8 12h1M8 15h1M15 8h1M15 11h1M15 14h1" />
      </svg>
    );
  }
  return (
    <svg className="w-[23px] h-[23px] fill-none stroke-current stroke-[1.8] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4v5" />
      <path d="M6 14h12" />
      <path d="M8 20h8" />
      <path d="M12 9 6 14l6 5 6-5-6-5Z" />
    </svg>
  );
}

export function AgendaSection({
  title = (
    <>
      Four operational mandates. <GradientText>One day.</GradientText>
    </>
  ),
  subtitle = null,
  description = null,
  showSixBlocks = true,
}: {
  title?: ReactNode;
  subtitle?: ReactNode | null;
  description?: ReactNode | null;
  showSixBlocks?: boolean;
}) {
  const [expandedPillar, setExpandedPillar] = useState<number | null>(null);

  return (
    <section
      className="relative py-[104px] bg-[#F7F9FC] max-sm:py-[72px]"
      id="agenda"
    >
      <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1172px)]">
        {/* Headings */}
        {subtitle && (
          <div className="text-center mb-3">
            <span className="inline-block font-mono text-[12px] uppercase tracking-[2.4px] text-[#0069B8] font-bold">
              {subtitle}
            </span>
          </div>
        )}
        <h2
          data-aos="fade-up"
          className="text-center font-[850] text-[#08121E] leading-[1.04] tracking-[-0.01em] text-[clamp(36px,4.8vw,56px)] mb-[44px]"
        >
          {title}
        </h2>
        {description && (
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="w-full mx-auto -mt-6 text-center text-[#334155] text-[18px] leading-[1.55] mb-[44px]"
          >
            {description}
          </p>
        )}

        {/* Component C3 — Expandable Pillar Cards (4 Cards in 2x2 Equal-Height Grid) */}
        <div className="grid grid-cols-2 gap-6 auto-rows-fr items-stretch max-md:grid-cols-1 max-md:auto-rows-auto">
          {themeItems.map((theme, idx) => {
            const isExpanded = expandedPillar === idx;
            return (
              <article
                key={theme.index}
                data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={String((idx % 2) * 150)}
                onMouseEnter={() => setExpandedPillar(idx)}
                onMouseLeave={() => setExpandedPillar(null)}
                onClick={() => setExpandedPillar(isExpanded ? null : idx)}
                className={`group relative flex h-full flex-col justify-between p-7 rounded-[20px] border transition-all duration-300 cursor-pointer text-left bg-white ${
                  isExpanded
                    ? "border-[#F15928] shadow-[0_20px_48px_rgba(8,18,30,0.12)] -translate-y-1"
                    : "border-[#0069B8]/22 shadow-[0_12px_32px_rgba(8,18,30,0.06)] hover:border-[#0069B8]"
                }`}
              >
                <div className="flex flex-1 flex-col">
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span
                      className={`grid place-items-center w-[48px] h-[48px] border rounded-[14px] transition-all duration-300 ${
                        isExpanded
                          ? "border-[#F15928] bg-[#F15928]/10 text-[#F15928]"
                          : "border-[#0069B8]/25 bg-[#0069B8]/10 text-[#0069B8]"
                      }`}
                    >
                      <ThemeIcon index={idx} />
                    </span>
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-3 py-1 rounded-full border font-mono text-[11px] font-bold uppercase tracking-[1.8px] transition-colors duration-300 ${
                          isExpanded
                            ? "border-[#F15928]/50 bg-[#F15928]/10 text-[#F15928]"
                            : "border-[#0069B8]/25 bg-[#F7F9FC] text-[#0069B8]"
                        }`}
                      >
                        Sector Pillar
                      </span>
                      <span className="text-[#52657A] font-mono text-xs px-2 py-0.5 rounded border border-[#0069B8]/20 bg-[#F7F9FC]">
                        {isExpanded ? "− Collapse" : "+ Expand Scope"}
                      </span>
                    </div>
                  </div>

                  <h3
                    className={`m-0 mb-3 font-extrabold text-[21px] leading-[1.26] transition-colors duration-200 ${
                      isExpanded ? "text-[#0069B8]" : "text-[#08121E]"
                    }`}
                  >
                    {theme.label}
                  </h3>

                  <p className="m-0 text-[#334155] text-[15.5px] leading-[1.6]">
                    {theme.shortDesc}
                  </p>

                  <div
                    className={`grid transition-all duration-300 ease-out overflow-hidden ${
                      isExpanded
                        ? "grid-rows-[1fr] opacity-100 mt-5 pt-4 border-t border-[#0069B8]/15"
                        : "grid-rows-[0fr] opacity-0 mt-0 pt-0 border-t border-transparent"
                    }`}
                  >
                    <div className="min-h-0 space-y-3 overflow-hidden">
                      <div>
                        <span className="block font-mono text-[11px] uppercase tracking-[1.6px] text-[#0069B8] font-bold mb-1">
                          Operational Scope &amp; Technical Focus
                        </span>
                        <p className="m-0 text-[#334155] text-[14.5px] leading-[1.6]">
                          {theme.expandedScope}
                        </p>
                      </div>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F7F9FC] border border-[#0069B8]/20 text-[#08121E] font-mono text-[11.5px]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F15928]" />
                        Format: {theme.clinicalFormat}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* S6 · Programme Architecture (Six-Part Block Methodology) */}
        {showSixBlocks && (
          <div className="mt-24 pt-16 border-t border-[#0069B8]/20">
            <div className="text-center mb-12">
              <h3 className="text-center font-[850] text-[#08121E] leading-[1.08] tracking-[-0.01em] text-[clamp(30px,4vw,46px)] w-full mx-auto">
                Engineered to drive healthcare buyers from boardroom priorities down to{" "}
                <GradientText>concrete procurement.</GradientText>
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1">
              {sixPartBlocks.map((block) => {
                const isGreen = block.accent === "green";
                return (
                  <div
                    key={block.num}
                    className={`p-6 rounded-[18px] border bg-white shadow-[0_12px_30px_rgba(8,18,30,0.05)] transition-all duration-300 hover:-translate-y-1 ${
                      isGreen
                        ? "border-[#0069B8]/22 hover:border-[#F15928]"
                        : "border-[#0069B8]/22 hover:border-[#009EAD]"
                    }`}
                  >
                    <span
                      className={`inline-block px-3 py-1 rounded-full font-mono text-[11px] font-bold uppercase tracking-[1.6px] mb-3 border ${
                        isGreen
                          ? "border-[#F15928]/35 bg-[#F15928]/10 text-[#F15928]"
                          : "border-[#009EAD]/35 bg-[#009EAD]/10 text-[#009EAD]"
                      }`}
                    >
                      {block.num}
                    </span>
                    <h4 className="m-0 mb-2.5 text-[#08121E] font-extrabold text-[19px] leading-snug">
                      {block.title}
                    </h4>
                    <p className="m-0 text-[#334155] text-[14.5px] leading-[1.6]">
                      {block.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex justify-center">
              <a
                href="/dubai/healthcare/agenda/agenda/"
                className="bb-btn-primary"
              >
                Explore the Event Schedule <span className="bb-btn-arrow">→</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
