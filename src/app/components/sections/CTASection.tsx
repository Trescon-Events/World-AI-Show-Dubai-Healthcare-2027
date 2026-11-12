"use client";

export function CTASection() {
  return (
    <section className="relative py-[92px] bg-[#08121E] overflow-visible" id="cta">
      <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1172px)] space-y-8">
        {/* S11 · Twin closing CTA bands */}
        <div className="grid grid-cols-2 gap-6 overflow-visible max-[980px]:grid-cols-1">
          {/* Band 1: Business Pass */}
          <div className="relative flex flex-col justify-between p-10 max-sm:p-7 rounded-[28px] border border-[#0069B8]/42 bg-[#0D1B2E] shadow-[0_24px_64px_rgba(0,0,0,0.45)] overflow-hidden">
            <div>
              <h2 className="m-0 font-[850] text-white leading-[1.12] tracking-[-0.01em] text-[clamp(26px,3vw,36px)]">
                Be in the room where regulated clinical AI gets decided
              </h2>
            </div>
            <div className="mt-8">
              <a
                href="/dubai/healthcare/attend/delegate"
                className="bb-btn-primary"
              >
                Apply for a Business Pass
                <span className="bb-btn-arrow font-mono text-[16px] font-bold">→</span>
              </a>
            </div>
          </div>

          {/* Band 2: Sponsorship Enquiry */}
          <div className="relative flex flex-col justify-between p-10 max-sm:p-7 rounded-[28px] border border-[#0069B8]/52 bg-[#0D1B2E] shadow-[0_24px_64px_rgba(0,0,0,0.45)] overflow-hidden">
            <div>
              <h2 className="m-0 font-[850] text-white leading-[1.12] tracking-[-0.01em] text-[clamp(26px,3vw,36px)]">
                Put your clinical AI architecture in front of Middle East healthcare decision-makers
              </h2>
            </div>
            <div className="mt-8">
              <a
                href="/dubai/healthcare/sponsorship-enquiry"
                className="bb-btn-outline-dark"
              >
                Enquire about sponsorship
                <span className="bb-btn-arrow font-mono text-[16px] font-bold">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* S12 · Speak at the conference */}
        <div className="relative p-12 px-14 max-sm:p-8 rounded-[32px] overflow-hidden border border-[#0069B8]/52 bg-[#0D1B2E]">
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#009EAD]/40 bg-[#08121E] text-[#009EAD] text-xs font-mono uppercase tracking-[2px] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#009EAD] animate-pulse"></span>
              Faculty
            </div>

            <h2 className="m-0 font-[850] text-white leading-[1.08] tracking-[-0.01em] text-[clamp(28px,3.8vw,44px)] w-full">
              If you have deployed AI into hospital or clinical production, <span className="text-[#009EAD]">we want you</span>{" "}
              <span className="text-[#F15928]">on stage</span>
            </h2>

            <p className="m-0 mt-5 text-[#F7F9FC]/84 text-[17px] leading-[1.6] max-w-[720px] max-sm:text-[15px]">
              We are recruiting Hospital CEOs, CMOs, CIOs, CNIOs, Heads of Clinical Informatics, and health authority regulators with verified production deployment evidence across the Middle East.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
              <a
                href="/dubai/healthcare/agenda/call-for-speakers"
                className="bb-btn-outline-dark"
              >
                Apply to speak
                <span className="bb-btn-arrow font-mono text-[16px] font-bold">→</span>
              </a>
            </div>

            {/* Horizontal Divider Line */}
            <div className="w-full h-[1px] bg-[#0069B8]/30 my-10" />

            {/* Bottom 3-Column Metadata Grid */}
            <div className="grid grid-cols-3 w-full gap-8 max-sm:grid-cols-1 max-sm:gap-6">
              {/* Date */}
              <div className="flex flex-col items-center">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/50 mb-2 font-mono">
                  Date
                </span>
                <strong className="text-[18px] font-extrabold text-white tracking-wide font-mono">
                  25 March 2027 · 1-Day Forum
                </strong>
              </div>

              {/* Venue */}
              <div className="flex flex-col items-center border-l border-white/10 max-sm:border-l-0 max-sm:border-t max-sm:pt-4 max-sm:mt-2">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/50 mb-2 font-mono">
                  Location
                </span>
                <strong className="text-[18px] font-extrabold text-white tracking-wide text-center">
                  Dubai, UAE
                </strong>
              </div>

              {/* Format */}
              <div className="flex flex-col items-center border-l border-white/10 max-sm:border-l-0 max-sm:border-t max-sm:pt-4 max-sm:mt-2">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/50 mb-2 font-mono">
                  Series Edition
                </span>
                <strong className="text-[18px] font-extrabold text-white tracking-wide">
                  Day 2 · March Dubai Cluster
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
