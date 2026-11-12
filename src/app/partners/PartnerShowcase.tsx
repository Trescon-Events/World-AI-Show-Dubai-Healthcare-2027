"use client";

import { GradientText } from "../components/Shared";

const partnerTiers = [
  {
    tier: "Tier 1 · Plenary Thought Leadership & Prime Island",
    name: "Speaking Sponsors (20-Min Plenary Keynote — 12 sqm Booth)",
    deliverables:
      "20-Minute Plenary Keynote or Fireside Chat + 12 sqm Premium Island Concourse Booth + 12 Executive Passes.",
  },
  {
    tier: "Tier 2 · Interactive Workshop Leadership",
    name: "Engagement Partners (Clinic Leaders: Ambient Voice / Diagnostic AI — 9 sqm Booth)",
    deliverables:
      "Exclusive Leadership of a 75-Minute Workshop Clinic (60–80 delegates) + 9 sqm Prominent Concourse Booth + 8 Passes.",
  },
  {
    tier: "Tier 3 · Private Executive Convening",
    name: "CXO Closed-Door Boardroom Partners (15 Wishlist Healthcare Leaders)",
    deliverables:
      "60-Minute Curated Session with 15 Pre-Qualified Wishlist Healthcare CXOs + 5-Minute Sponsor Opening Address under Chatham House Rule.",
  },
  {
    tier: "Tier 4 · Plenary Panel & Concourse Presence",
    name: "Industry Partners (Plenary Panellists — 9 sqm Booth)",
    deliverables:
      "Plenary Panel Speaking Seat (Block 3 or Block 5) + 9 sqm Prominent Concourse Booth + 6 Executive Passes.",
  },
  {
    tier: "Tier 5 · Technology Demonstration Concourse",
    name: "Concourse Turnkey Exhibitors (6 sqm Booth)",
    deliverables:
      "6 sqm Standard Turnkey Concourse Booth in the high-traffic networking and bilateral meeting arena + 4 Passes.",
  },
  {
    tier: "Ecosystem & Media Alliances",
    name: "Institutional Regulators & Supporting Medical Media",
    deliverables:
      "Regional medical associations, hospital federations, clinical informatics societies, life sciences councils, and accredited medical press.",
  },
];

export function PartnerShowcase() {
  return (
    <section className="relative py-[100px] bg-[#08121E] border-t border-[#0069B8]/25 overflow-hidden" id="showcase-benefits">
      <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1172px)]">
        {/* ── PART 2: TIER-GROUPED ARCHITECTURE (Section 10) ─────────── */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-white font-[850] text-[clamp(26px,3.4vw,38px)] m-0">
              Tier-Grouped Commercial <GradientText>Structure</GradientText>
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-6 max-[1024px]:grid-cols-2 max-sm:grid-cols-1">
            {partnerTiers.map((item) => (
              <article
                key={item.name}
                className="group relative p-7 border border-[#0069B8]/52 rounded-[22px] bg-[#0D1B2E] transition-all duration-300 hover:-translate-y-1 hover:border-[#009EAD]"
              >
                <span className="inline-block font-mono text-[11px] font-bold uppercase tracking-[1.6px] text-[#F15928] mb-3">
                  {item.tier}
                </span>
                <h4 className="m-0 mb-2.5 text-white font-[800] text-[18px] leading-snug">
                  {item.name}
                </h4>
                <p className="m-0 text-[#F7F9FC]/80 text-[14.5px] leading-relaxed">
                  {item.deliverables}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* ── PART 3: CTA BANNER ── */}
        <div className="group/banner relative p-12 max-sm:p-8 border border-[#0069B8]/52 rounded-[28px] bg-[#0D1B2E] text-center overflow-hidden transition-all duration-300 hover:border-[#009EAD]">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#0069B8] via-[#009EAD] to-[#F15928] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center gap-6">
            <h3 className="m-0 font-display text-white font-[850] text-[clamp(28px,3.5vw,42px)] leading-tight tracking-tight">
              Put your clinical solution directly before <br />
              <GradientText>qualified hospital procurement committees.</GradientText>
            </h3>

            <p className="m-0 text-[#F7F9FC]/80 text-[16px] leading-relaxed w-full font-sans">
              Secure your commercial partnership today.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-4 w-full max-sm:flex-col max-sm:items-center">
              <a
                href="/dubai/healthcare/sponsorship-enquiry/"
                className="bb-btn-primary"
              >
                Enquire About Sponsorship <span className="bb-btn-arrow font-mono">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
