"use client";

import { GradientText } from "../components/Shared";

type BenefitItem = {
  title: string;
  desc: string;
};

const benefits: BenefitItem[] = [
  {
    title: "Brand Visibility at Scale",
    desc: "Amplify your presence across the main stage, official digital channels, global newsletters, attendee guidebooks, and post-summit materials.",
  },
  {
    title: "Qualified Lead Generation",
    desc: "Engage in pre-scheduled business matchmaking with verified hospital buyers, clinical informatics leads, and health innovation hubs seeking solutions.",
  },
  {
    title: "Product Showcase Floor",
    desc: "Demonstrate live medical platforms, clinical AI software, compute layers, and diagnostic algorithms to decision-makers walking the exhibition concourse.",
  },
  {
    title: "Speaking Opportunities",
    desc: "Position your principal directors as pioneers by leading 20-minute plenary keynotes, expert panel conversations, or 75-minute workshop clinics.",
  },
  {
    title: "1:1 Hosted Meetings",
    desc: "Receive customized itineraries aligned to your ideal hospital customer profile, matching your teams with target clinical buyers in bilateral lounges.",
  },
  {
    title: "Exclusive Sponsorship Branding",
    desc: "Align your enterprise with custom premium segments (VIP Lounges, Delegate Badges, Registration Zones, or Closing Executive Reception).",
  },
  {
    title: "Networking Lunch Branding",
    desc: "Leverage central branding and targeted executive host roles during curated lunches, building relationships over dining.",
  },
  {
    title: "Post-Event Lead Report",
    desc: "Receive compliant post-forum engagement analytics and UAE PDPL explicit-consent connection lists to accelerate your Middle East healthcare pipeline.",
  },
];

export function SponsorBenefitsList() {
  return (
    <section className="relative py-[104px] bg-[#08121E]" id="benefits">
      <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1172px)] text-center mb-16">
        <span className="inline-flex items-center mb-5 px-3.5 py-1.5 border border-[#009EAD]/40 rounded-full text-[#009EAD] font-mono text-[12px] uppercase tracking-[2px] bg-[#0D1B2E]">
          Sponsorship ROI Triggers
        </span>
        <h2 className="font-[850] text-white leading-tight tracking-[-0.01em] text-[clamp(36px,4.5vw,56px)]">
          Maximise your market reach <br />
          <GradientText>across Middle East healthcare &amp; life sciences.</GradientText>
        </h2>
      </div>

      <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1172px)] grid grid-cols-4 gap-4 overflow-visible max-[980px]:grid-cols-2 max-sm:grid-cols-1">
        {benefits.map((benefit) => (
          <article
            key={benefit.title}
            className="group relative min-h-[240px] p-7 border border-[#0069B8]/42 rounded-[14px] bg-[#0D1B2E] shadow-[0_18px_46px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#009EAD]"
          >
            <span className="inline-flex items-center px-3 py-1 mb-5 border border-[#0069B8]/40 rounded-full text-[#009EAD] bg-[#08121E] text-[11px] font-mono font-bold uppercase tracking-[1.4px] select-none group-hover:text-white group-hover:bg-[#0069B8] group-hover:border-[#0069B8] transition-all duration-300">
              ROI Trigger
            </span>
            <h3 className="m-0 mb-3 text-white font-extrabold text-[18px] leading-tight transition-colors duration-200 group-hover:text-[#009EAD]">{benefit.title}</h3>
            <p className="m-0 text-[#F7F9FC]/88 text-[14px] leading-relaxed">{benefit.desc}</p>
          </article>
        ))}
      </div>

      {/* Direct Enquiry Call to Action */}
      <div className="w-[min(820px,calc(100%-48px))] max-sm:w-[min(100%-32px,820px)] mx-auto mt-16 p-8 border border-[#0069B8]/52 rounded-[20px] bg-[#0D1B2E] shadow-[0_20px_50px_rgba(0,0,0,0.4)] text-center max-sm:p-6">
        <h3 className="m-0 text-white font-[850] text-[22px] mb-3">Interested in Sponsor Packages?</h3>
        <p className="m-0 text-[#F7F9FC]/80 text-[15px] leading-relaxed mb-6 w-full mx-auto">
          Contact our summit partnership desks directly to receive the standard brochure, customisable booth floorplans, and speaking slot availability.
        </p>
        <div className="flex justify-center gap-4 max-sm:flex-col">
          <a
            href="/dubai/healthcare/sponsorship-enquiry/"
            className="bb-btn-primary"
          >
            Enquire about sponsorship
            <span className="bb-btn-arrow font-mono text-[15px] font-bold">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
