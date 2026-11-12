"use client";

export function SpeakerCallToStage() {
  return (
    <section className="relative py-[104px] bg-[#08121E] overflow-visible" id="call-for-speakers">
      <div className="relative z-10 w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1172px)]">
        {/* Centered section heading */}
        <h2 className="text-center font-[850] text-white leading-tight tracking-[-0.01em] text-[clamp(34px,4.5vw,50px)] mb-[56px]">
          Take the Stage at{" "}
          <span className="text-[#009EAD]">
            World AI Show
          </span>
        </h2>

        {/* Two-column content */}
        <div className="grid grid-cols-[1.12fr_0.88fr] gap-[66px] items-center max-[980px]:grid-cols-1 max-[980px]:gap-[48px] mb-12">
          <div>
            <h3 className="m-0 text-white font-[850] text-[28px] leading-tight mb-4 max-sm:text-[23px]">
              Share Your Clinical AI Implementation Evidence in Dubai
            </h3>
            <p className="m-0 text-[#F7F9FC]/84 text-[16px] leading-[1.65] mb-5">
              World AI Show is looking for healthcare leaders ready to move beyond theoretical models and share the practical realities of embedding algorithms into clinical practice.
            </p>
            <p className="m-0 text-[#F7F9FC]/84 text-[16px] leading-[1.65] mb-8">
              Whether solving time-critical diagnostic triage, ambient documentation, or hospital capacity, we welcome case studies that help peer operators deploy governed, reimbursable AI under UAE health frameworks.
            </p>

            {/* Value Highlights */}
            <div className="p-7 border border-[#0069B8]/52 rounded-[16px] bg-[#0D1B2E]">
              <strong className="block text-[#009EAD] text-[12px] font-mono uppercase tracking-[2px] mb-5">
                Why join the Healthcare Faculty in Dubai:
              </strong>
              <ul className="m-0 pl-0 list-none flex flex-col gap-5">
                <li className="flex items-start gap-3.5 text-[#F7F9FC]/84 text-[15px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/dubai/healthcare/images/agenda/icon-global.webp"
                    alt="Global icon"
                    className="w-5 h-5 object-contain mt-[3px] select-none flex-shrink-0"
                  />
                  <span>
                    <strong className="text-white">48 Global Editions of Authority:</strong> Speak on the flagship Middle East sector platform organised by Trescon, backed by 48 global editions across four continents.
                  </span>
                </li>
                <li className="flex items-start gap-3.5 text-[#F7F9FC]/84 text-[15px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/dubai/healthcare/images/agenda/icon-speaker.webp"
                    alt="Speaker icon"
                    className="w-5 h-5 object-contain mt-[3px] select-none flex-shrink-0"
                  />
                  <span>
                    <strong className="text-white">300+ Pre-Qualified Healthcare CXOs (80%+ Buy-Side):</strong> Address senior GCC hospital, clinical informatics, genomics, and regulatory decision-makers actively locking down 2027 architectures.
                  </span>
                </li>
                <li className="flex items-start gap-3.5 text-[#F7F9FC]/84 text-[15px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/dubai/healthcare/images/agenda/icon-lightning.webp"
                    alt="Lightning bolt icon"
                    className="w-5 h-5 object-contain mt-[3px] select-none flex-shrink-0"
                  />
                  <span>
                    <strong className="text-white">Clinical, Peer-Led Formats:</strong> Lead 20-minute buyer evidence keynotes, clinical governance plenaries, 75-minute breakout clinics, or Block 6 Outcome Roundtables.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Visual container */}
          <div className="relative overflow-hidden border border-[#0069B8]/52 rounded-[22px] shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#08121E]/40 via-transparent to-transparent pointer-events-none z-1" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/dubai/healthcare/images/agenda/accelerating-malaysia-audience.webp"
              alt="Speaker presenting on stage at World AI Show Dubai"
              className="w-full h-[360px] md:h-[480px] filter saturate-[0.96] brightness-[0.96]"
              style={{ objectFit: "cover", objectPosition: "top" }}
              loading="lazy"
            />
          </div>
        </div>

        {/* Centered bottom CTAs */}
        <div className="flex justify-center gap-4 mt-8 max-sm:flex-col max-sm:items-center">
          <a
            href="/dubai/healthcare/speaker-enquiry/"
            className="bb-btn-primary"
          >
            Apply to Join the Dubai Healthcare Faculty
            <img
              src="/dubai/healthcare/images/agenda/arrow-top.webp"
              alt="Arrow top icon"
              className="w-4 h-4 object-contain select-none flex-shrink-0 brightness-0 invert"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
