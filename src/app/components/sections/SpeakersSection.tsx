"use client";

import { type ReactNode } from "react";
import { GradientText } from "../Shared";
import { SpeakerCard } from "../../speakers/SpeakerCard";
import { speakers as fallbackSpeakers } from "../../speakers/data";

export function SpeakersSection({
  heading = (
    <>
      Past Faculty at <GradientText>World AI Show</GradientText>
    </>
  ),
}: {
  heading?: ReactNode;
} = {}) {
  const displaySpeakers = fallbackSpeakers.slice(0, 8).map((speaker) => ({
    id: speaker.id,
    name: speaker.name,
    designation: speaker.designation,
    company: speaker.company,
    image: speaker.image,
    bio: speaker.bio || "",
  }));

  return (
    <section className="relative py-[104px] bg-[#08121E] max-sm:py-[72px]" id="speakers">
      <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1172px)]">
        {/* Title and Header Block */}
        <div className="flex flex-col items-center text-center mb-[54px]">
          <h2 className="text-center font-[850] text-white leading-[1.08] tracking-[-0.01em] text-[clamp(34px,4.5vw,56px)] w-full">
            {heading}
          </h2>
        </div>

        {/* Speakers Grid Container */}
        <div className="speaker-grid grid grid-cols-4 gap-[22px] max-[1080px]:grid-cols-3 max-[768px]:grid-cols-2 max-sm:grid-cols-1">
          {displaySpeakers.map((speaker, index) => (
            <SpeakerCard
              key={speaker.id}
              name={speaker.name}
              role={speaker.designation}
              company={speaker.company}
              image={speaker.image}
              bio={speaker.bio}
              index={index}
            />
          ))}
        </div>

        {/* View All Speakers CTA Button (Apply to Speak removed per Page 7) */}
        <div className="mt-14 flex flex-wrap justify-center items-center gap-4">
          <a
            href="/dubai/healthcare/speakers/"
            className="bb-btn-primary"
          >
            Explore Speakers Hub <span className="bb-btn-arrow">➔</span>
          </a>
        </div>

        {/* S12 · Faculty Call Card */}
        <div
          data-aos="zoom-in-up"
          className="mt-16 p-9 max-sm:p-6 rounded-[24px] border border-[#0069B8]/52 bg-[#0D1B2E] shadow-[0_20px_50px_rgba(0,0,0,0.45)] flex items-center justify-between gap-8 max-lg:flex-col max-lg:text-center"
        >
          <div className="max-w-[720px]">
            <span className="inline-block text-[#009EAD] font-mono text-[11px] font-bold uppercase tracking-[2.2px] mb-2">
              Faculty
            </span>
            <h3 className="m-0 mb-3 text-white font-[850] text-[clamp(24px,3vw,34px)] leading-[1.15] tracking-[-0.01em]">
              If you have deployed AI into live hospital workflows, we want you on stage
            </h3>
            <p className="m-0 text-[#F7F9FC]/84 text-[16px] leading-[1.6]">
              We are seeking hospital group executives, Chief Medical Officers, healthcare CIOs, and clinical informatics directors with unvarnished case studies: EMR integration hurdles, clinical safety benchmarks, and verified operational outcomes.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="/dubai/healthcare/agenda/call-for-speakers/"
              className="bb-btn-primary"
            >
              Apply to Speak <span className="bb-btn-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
