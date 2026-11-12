"use client";

import { useState } from "react";
import { GradientText } from "../../components/Shared";

export function AIMatchmakingContent() {
  const [selectedFocus, setSelectedFocus] = useState<string>("Clinical Workflows & Ambient AI");

  const focusAreas = [
    "Clinical Workflows & Ambient AI",
    "Diagnostic Imaging & Radiology Triage",
    "Precision Genomics & Drug Discovery",
    "Hospital Operations & Capacity",
    "Revenue Cycle Management (RCM) & Claims",
    "EHR/HIS & FHIR Interoperability",
    "Health Data Sovereignty & SaMD Regulation",
    "Nabidh, Malaffi & Riayati HIE Integration",
    "Patient Triage & Virtual Care"
  ];

  return (
    <div className="relative w-full text-white font-display">
      <section 
        className="relative net-inner-hero page-hero-subnav-top pb-24 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(8, 18, 30, 0.94) 0%, rgba(8, 18, 30, 0.78) 55%, rgba(8, 18, 30, 0.35) 100%), url('/dubai/healthcare/images/networking/ai-matchmaking-bg.webp')`,
          backgroundPosition: 'right center',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#08121E'
        }}
      >
        <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[min(100%-32px,1172px)] mx-auto relative z-10 text-left flex flex-col items-start">
          <div className="max-w-[620px] w-full">
            <span className="text-[#009EAD] font-mono text-[12px] uppercase tracking-[3px] font-bold block mb-3">
              AI-Powered Matchmaking
            </span>
            <h1 className="font-[850] text-white leading-[1.03] tracking-[-0.01em] text-[clamp(44px,5.4vw,68px)] m-0">
              Meet the Right People. <br />
              <GradientText>Every Time.</GradientText>
            </h1>
            <p className="m-0 mt-6 text-[#F7F9FC]/84 text-[18px] leading-relaxed max-sm:text-[15px]">
              Set your goals once. Our AI reads your clinical or technical role, interests, and intent — then surfaces the connections most likely to matter. No cold introductions. No wasted handshakes.
            </p>

            <div className="mt-8 w-full text-left">
              <span className="block text-[11px] uppercase tracking-[2px] font-bold text-[#F7F9FC]/55 mb-4 font-mono">
                Pick your focus areas — AI does the rest
              </span>
              <div className="flex flex-wrap gap-[10px] max-w-[620px]">
                {focusAreas.map((area) => (
                  <button
                    key={area}
                    onClick={() => setSelectedFocus(area)}
                    className={`flex items-center justify-center h-[36px] px-[16px] text-[11.5px] font-extrabold uppercase tracking-[1px] rounded-[6px] cursor-pointer transition-all duration-200 outline-none select-none border ${
                      selectedFocus === area
                        ? "bg-[#F15928] text-white border-[#F15928]"
                        : "text-[#F7F9FC]/85 border-[#0069B8]/52 bg-[#0D1B2E] hover:border-[#009EAD] hover:text-white"
                    }`}
                  >
                    <span className="leading-none mt-[1px] whitespace-nowrap">
                      {area}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Right People. Real Connections. Section */}
      <section className="relative py-24 bg-[#08121E] border-t border-[#0069B8]/25">
        <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[min(100%-32px,1172px)] mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 w-full mx-auto">
            <span className="px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[2px] bg-[#0D1B2E] text-[#009EAD] border border-[#009EAD]/40 mb-5 inline-block">
              AI Powered Platform · KonfHub
            </span>
            <h2 className="font-[850] text-white leading-tight tracking-[-0.01em] text-[clamp(32px,4vw,44px)] m-0">
              Right People. <GradientText>Real Connections.</GradientText>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-8 max-[980px]:grid-cols-1 max-sm:gap-6">
            
            {/* Card 1: For Attendees */}
            <div 
              className="p-10 rounded-[28px] border border-[#0069B8]/52 bg-[#0D1B2E] shadow-[0_22px_62px_rgba(0,0,0,0.45)] transition-all duration-300 relative group overflow-hidden max-sm:p-6 hover:border-[#F15928]"
            >
              <span className="inline-flex items-center gap-2 px-[14px] py-[6px] rounded-full text-[12.5px] font-extrabold bg-[#F15928] text-white mb-6">
                <img 
                  src="/dubai/healthcare/images/networking/Icon.webp" 
                  alt="Attendees" 
                  className="w-[14px] h-[14px] object-contain brightness-0 invert" 
                />
                For Attendees
              </span>
              <h3 className="m-0 text-white font-[850] text-[28px] tracking-tight mb-8">
                Meet the right people, not just more people
              </h3>
              
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-start">
                  <img
                    src="/dubai/healthcare/icons/attendee-app/tick-1.webp"
                    alt="Checkmark Icon"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/70 text-[15px] leading-relaxed">Get personalised recommendations based on clinical domain, EHR/HIS stack, and hospital procurement goals</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/dubai/healthcare/icons/attendee-app/tick-1.webp"
                    alt="Checkmark Icon"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/70 text-[15px] leading-relaxed">Have meaningful, high-quality conversations instead of random networking</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/dubai/healthcare/icons/attendee-app/tick-1.webp"
                    alt="Checkmark Icon"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/70 text-[15px] leading-relaxed">Leave with valuable connections and real clinical deployment opportunities</p>
                </div>
              </div>
            </div>

            {/* Card 2: For Sponsors & Exhibitors */}
            <div 
              className="p-10 rounded-[28px] border border-[#0069B8]/52 bg-[#0D1B2E] shadow-[0_22px_62px_rgba(0,0,0,0.45)] transition-all duration-300 relative group overflow-hidden max-sm:p-6 hover:border-[#009EAD]"
            >
              <span className="inline-flex items-center gap-2 px-[14px] py-[6px] rounded-full text-[12.5px] font-extrabold bg-[#0069B8] text-white mb-6">
                <img 
                  src="/dubai/healthcare/icons/attendee-app/exhibitor.webp" 
                  alt="Sponsors & Exhibitors" 
                  className="w-[14px] h-[14px] object-contain filter brightness-0 invert" 
                />
                For Sponsors &amp; Exhibitors
              </span>
              <h3 className="m-0 text-white font-[850] text-[28px] tracking-tight mb-8">
                Connect with high-intent, relevant prospects
              </h3>
              
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-start">
                  <img
                    src="/dubai/healthcare/icons/attendee-app/tick-2.webp"
                    alt="Checkmark Icon"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/70 text-[15px] leading-relaxed">Focus on quality hospital and life sciences leads, not just volume</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/dubai/healthcare/icons/attendee-app/tick-2.webp"
                    alt="Checkmark Icon"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/70 text-[15px] leading-relaxed">Maximise ROI through pre-qualified 1-on-1 interactions</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/dubai/healthcare/icons/attendee-app/tick-2.webp"
                    alt="Checkmark Icon"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/70 text-[15px] leading-relaxed">Increase booth engagement via targeted attendee recommendations</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
