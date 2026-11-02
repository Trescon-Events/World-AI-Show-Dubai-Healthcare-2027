"use client";

const heritageStats = [
  { value: "48", label: "Completed World AI Show editions across four continents" },
  { value: "42,000+", label: "C-level executives and enterprise decision-makers convened" },
  { value: "2,600+", label: "Expert speakers and global technology authorities hosted" },
  { value: "4", label: "Continents" },
];

export function OrganizerSection() {
  return (
    <section className="relative py-[104px] pt-[80px] bg-[#020713] overflow-hidden" id="organizer">
      <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-24px,1172px)] space-y-12">
        {/* S10 · Credibility & series heritage */}
        <div
          data-aos="zoom-in-up"
          className="p-[48px_56px] border border-white/10 border-t-[#00CEFF]/60 rounded-[28px] backdrop-blur-[16px] shadow-[0_16px_48px_rgba(0,0,0,0.4),0_0_32px_rgba(192,244,60,0.04)] max-sm:p-[34px_22px]"
          style={{
            background:
              "linear-gradient(104.71deg, rgba(0, 206, 255, 0.12) 0%, rgba(192, 244, 60, 0.054) 100%), rgba(4, 14, 34, 0.8)",
          }}
        >
          <div className="grid grid-cols-[0.68fr_1fr] gap-[56px] items-center max-[980px]:grid-cols-1 max-sm:gap-[32px]">
            <div className="flex flex-col">
              <span className="text-white/74 font-mono text-[12px] uppercase tracking-[3px] select-none">
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
              <h2 className="m-0 mb-3 text-white font-[850] text-[clamp(24px,3vw,36px)] leading-[1.12] tracking-[-1px]">
                48 global editions. The world&apos;s longest-running enterprise AI series.
              </h2>
              <p className="m-0 text-[#a4adbd] text-[16px] leading-[1.65]">
                World AI Show | Healthcare and Life Sciences | Dubai 2027 is organised by Trescon, bringing an unrivalled international pedigree in artificial intelligence executive convening. Positioned as Day 2 of the March Dubai Cluster (paired back-to-back with World AI Show | BFSI | Dubai 2027 on 24 March 2027), this dedicated 1-Day Executive Decision Forum connects hospital operators, health authorities, and life-sciences leaders under a single governed clinical agenda.
              </p>

              <a
                href="https://www.tresconglobal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-6 text-[#C0F43C] font-extrabold text-[15px] hover:underline"
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

          <div className="grid grid-cols-4 gap-4 mt-10 pt-8 border-t border-white/10 max-md:grid-cols-2 max-sm:grid-cols-1">
            {heritageStats.map((st) => (
              <div
                key={st.label}
                className="p-5 rounded-[16px] border border-white/10 bg-[#030a18]/70"
              >
                <strong className="block text-[#C0F43C] font-[850] text-[30px] leading-none mb-2">
                  {st.value}
                </strong>
                <span className="block text-white/75 font-mono text-[12px] leading-relaxed">
                  {st.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* S11 · Twin Closing CTA Bands */}
        <div className="grid grid-cols-2 gap-6 max-[980px]:grid-cols-1">
          {/* Band 1: Delegate Pass */}
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            className="flex flex-col justify-between p-8 rounded-[24px] border border-white/15 bg-gradient-to-br from-[#06182e] via-[#041022] to-[#030917] shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
          >
            <div>
              <span className="inline-block font-mono text-[11px] uppercase tracking-[1.6px] text-[#C0F43C] mb-3">
                Dubai · 25 March 2027 · 300+ Senior Healthcare Leaders · Minimum 70% Buy-Side Ratio
              </span>
              <h3 className="m-0 mb-6 text-white font-[850] text-[clamp(24px,2.8vw,32px)] leading-[1.15] tracking-[-0.8px]">
                Be in the room where 2027 healthcare AI architecture and clinical adoption get finalised
              </h3>
            </div>
            <div>
              <a
                href="/dubai/healthcare/attend/delegate/"
                className="inline-flex items-center justify-center gap-2 h-[50px] px-7 rounded-full font-extrabold text-[15px] text-[#06111F] [color:#06111F!important] bg-[#C0F43C] hover:shadow-[0_0_24px_rgba(192,244,60,0.4)] transition-all duration-200"
              >
                Apply for a Delegate Pass →
              </a>
            </div>
          </div>

          {/* Band 2: Sponsorship */}
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="flex flex-col justify-between p-8 rounded-[24px] border border-white/15 bg-gradient-to-br from-[#06182e] via-[#041022] to-[#030917] shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
          >
            <div>
              <span className="inline-block font-mono text-[11px] uppercase tracking-[1.6px] text-[#18D4FF] mb-3">
                4 Sector Content Pillars · Curated Tech Showcase · Closed-Door CXO Boardrooms
              </span>
              <h3 className="m-0 mb-6 text-white font-[850] text-[clamp(24px,2.8vw,32px)] leading-[1.15] tracking-[-0.8px]">
                Put your enterprise solution directly before qualified hospital procurement committees
              </h3>
            </div>
            <div>
              <a
                href="/dubai/healthcare/sponsorship-enquiry/"
                className="inline-flex items-center justify-center gap-2 h-[50px] px-7 rounded-full font-extrabold text-[15px] text-white border border-[#18d4ff]/60 bg-[#18d4ff]/12 hover:bg-[#18d4ff] hover:text-[#06111F] hover:[color:#06111F!important] transition-all duration-200"
              >
                Enquire About Sponsorship →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
