"use client";

const heritageStats = [
  { value: "48", label: "Completed World AI Show editions across four continents" },
  { value: "42,000+", label: "C-level executives and enterprise decision-makers convened" },
  { value: "2,600+", label: "Expert speakers and global technology authorities hosted" },
  { value: "4", label: "Continents" },
];

export function OrganizerSection() {
  return (
    <section className="relative py-[104px] pt-[80px] bg-[#08121E] overflow-hidden" id="organizer">
      <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1172px)] space-y-12">
        {/* S10 · Credibility & series heritage */}
        <div
          data-aos="zoom-in-up"
          className="p-[48px_56px] border border-[#0069B8]/52 border-t-[#009EAD] rounded-[28px] bg-[#0D1B2E] shadow-[0_24px_60px_rgba(0,0,0,0.45)] max-sm:p-[34px_22px]"
        >
          <div className="grid grid-cols-[0.68fr_1fr] gap-[56px] items-center max-[980px]:grid-cols-1 max-sm:gap-[32px]">
            <div className="flex flex-col">
              <span className="text-[#009EAD] font-mono text-[12px] font-bold uppercase tracking-[3px] select-none">
                Organised by Trescon
              </span>
              <img
                className="block mt-[12px] h-auto object-contain select-none"
                style={{ width: "55%" }}
                src="/dubai/healthcare/logos/Trescon-org.svg"
                alt="Trescon"
                width={270}
                height={80}
              />
            </div>

            <div className="flex flex-col">
              <h2 className="m-0 mb-3 text-white font-[850] text-[clamp(24px,3vw,36px)] leading-[1.12] tracking-[-0.01em]">
                48 global editions. The world&apos;s longest-running enterprise AI series.
              </h2>
              <p className="m-0 text-[#F7F9FC]/84 text-[16px] leading-[1.65]">
                World AI Show | Healthcare and Life Sciences | Dubai 2027 is organised by Trescon, bringing an unrivalled international pedigree in artificial intelligence executive convening. Positioned as Day 2 of the March Dubai Cluster (paired back-to-back with World AI Show | BFSI | Dubai 2027 on 24 March 2027), this dedicated 1-Day Executive Decision Forum connects hospital operators, health authorities, and life-sciences leaders under a single governed clinical agenda.
              </p>

              <a
                href="https://www.tresconglobal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-6 text-[#F15928] font-extrabold text-[15px] hover:underline"
              >
                Learn more about Trescon
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 h-3.5 object-contain"
                  aria-hidden="true"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7V17"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mt-10 pt-8 border-t border-[#0069B8]/25 max-md:grid-cols-2 max-sm:grid-cols-1">
            {heritageStats.map((st) => (
              <div
                key={st.label}
                className="p-5 rounded-[16px] border border-[#0069B8]/35 bg-[#08121E]"
              >
                <strong className="block text-[#F15928] font-[850] text-[30px] leading-none mb-2">
                  {st.value}
                </strong>
                <span className="block text-[#F7F9FC]/80 font-mono text-[12px] leading-relaxed">
                  {st.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* S11 · Twin Closing CTA Bands */}
        <div className="grid grid-cols-2 gap-6 max-[980px]:grid-cols-1">
          {/* Band 1: Business Pass */}
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            className="flex flex-col justify-between p-8 rounded-[24px] border border-[#0069B8]/52 bg-[#0D1B2E] shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
          >
            <div>
              <h3 className="m-0 mb-6 text-white font-[850] text-[clamp(24px,2.8vw,32px)] leading-[1.15] tracking-[-0.01em]">
                Be in the room where 2027 healthcare AI architecture and clinical adoption get finalised
              </h3>
            </div>
            <div>
              <a
                href="/dubai/healthcare/attend/delegate/"
                className="bb-btn-primary"
              >
                Apply for a Business Pass <span className="bb-btn-arrow">→</span>
              </a>
            </div>
          </div>

          {/* Band 2: Sponsorship */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="flex flex-col justify-between p-8 rounded-[24px] border border-[#0069B8]/52 bg-[#0D1B2E] shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
          >
            <div>
              <h3 className="m-0 mb-6 text-white font-[850] text-[clamp(24px,2.8vw,32px)] leading-[1.15] tracking-[-0.01em]">
                Put your enterprise solution directly before qualified hospital procurement committees
              </h3>
            </div>
            <div>
              <a
                href="/dubai/healthcare/sponsorship-enquiry/"
                className="bb-btn-outline-dark"
              >
                Enquire About Sponsorship <span className="bb-btn-arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
