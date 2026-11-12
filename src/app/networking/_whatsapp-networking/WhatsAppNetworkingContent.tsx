"use client";

import { GradientText } from "../../components/Shared";

export function WhatsAppNetworkingContent() {
  const groups = [
    "AI Leaders",
    "AI & Digital",
    "BFSI",
    "Retail & E-commerce",
    "Healthcare AI",
    "Contact Centres",
    "AI Technology",
    "Founders & CEOs"
  ];

  return (
    <div className="relative w-full text-white font-display">
      
      {/* ── Section 1: Immersive Hero Section ── */}
      <section 
        className="relative net-inner-hero page-hero-subnav-top pb-24 overflow-hidden"
        style={{ 
          backgroundImage: `linear-gradient(90deg, rgba(8, 18, 30, 0.94) 0%, rgba(8, 18, 30, 0.74) 55%, rgba(8, 18, 30, 0.25) 100%), url('/dubai/healthcare/images/networking/networking-bg.png')`,
          backgroundPosition: 'right center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#08121E'
        }}
      >
        <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[min(100%-32px,1172px)] mx-auto relative z-10 text-left flex flex-col items-start">
          
          <div className="max-w-[620px] w-full">
            <span className="block text-[12px] uppercase tracking-[2px] font-bold text-[#009EAD] mb-3.5 font-mono">
              WhatsApp Community
            </span>
            <h1 className="font-[850] text-white leading-none tracking-[-0.01em] text-[clamp(44px,5.5vw,66px)] m-0">
              Walk in <br />
              <GradientText>Already Connected.</GradientText>
            </h1>
            <p className="m-0 mt-5 text-[#F7F9FC]/84 text-[18px] leading-relaxed max-w-[560px] max-sm:text-[15px]">
              Registered delegates get exclusive entry to a curated WhatsApp community 2 weeks before the summit. Identify the right people, start the right conversations, and arrive with momentum – not a blank slate.
            </p>

            {/* Peer Networking Groups tags */}
            <div className="mt-9">
              <span className="block text-[11.5px] uppercase tracking-[2.5px] font-bold text-[#F7F9FC]/55 mb-4 font-mono">
                Peer networking groups
              </span>
              <div className="flex flex-wrap gap-2.5 max-w-[560px]">
                {groups.map((group) => (
                  <div
                    key={group}
                    className="flex items-center h-[36px] px-[14px] border border-[#0069B8]/52 rounded-[6px] bg-[#0D1B2E] text-[#F7F9FC]/88 text-[11.5px] font-extrabold uppercase tracking-[1.5px] select-none whitespace-nowrap hover:border-[#009EAD] hover:text-white transition-all duration-200"
                  >
                    {group}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Section 2: Comparison Grid Section ── */}
      <section className="relative py-24 bg-[#08121E] border-t border-[#0069B8]/25">
        <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[min(100%-32px,1172px)] mx-auto relative z-10">
          
          {/* Header */}
          <div className="text-center mb-16 max-w-[660px] mx-auto">
            <span className="text-[#009EAD] font-mono text-[11px] uppercase tracking-[3px] font-bold block mb-3">
              2 Weeks Early.
            </span>
            <h2 className="font-[850] text-white leading-tight tracking-[-0.01em] text-[clamp(42px,5.5vw,62px)] m-0">
              Zero<br />
              <GradientText>Cold Introductions.</GradientText>
            </h2>
            <p className="m-0 mt-4 text-[#F7F9FC]/75 text-[16px] md:text-[18px] tracking-wide font-medium">
              Community access unlocks the moment you register
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1 max-sm:gap-6">
            
            {/* Card 1: For Attendees */}
            <div 
              className="p-10 rounded-[28px] border border-[#0069B8]/52 bg-[#0D1B2E] shadow-[0_22px_62px_rgba(0,0,0,0.45)] transition-all duration-300 relative group overflow-hidden max-sm:p-6 hover:border-[#F15928]"
            >
              <span className="inline-flex items-center gap-2 px-[14px] py-[6px] rounded-full text-[12.5px] font-extrabold bg-[#F15928] text-white mb-6">
                <img 
                  src="/dubai/healthcare/images/networking/Icon.webp" 
                  alt="Attendees" 
                  className="w-[14px] h-[14px] object-contain filter brightness-0 invert" 
                />
                For Attendees
              </span>
              <h3 className="m-0 text-white font-[850] text-[28px] tracking-tight mb-8">
                Day one starts two weeks early
              </h3>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-start">
                  <img
                    src="/dubai/healthcare/icons/attendee-app/tick-1.webp"
                    alt="Checkmark"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/85 text-[15px] leading-relaxed">Exclusive pre-event community access 2 weeks before the summit</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/dubai/healthcare/icons/attendee-app/tick-1.webp"
                    alt="Checkmark"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/85 text-[15px] leading-relaxed">Join role-specific groups — AI Leaders, BFSI, AI & Digital, and more</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/dubai/healthcare/icons/attendee-app/tick-1.webp"
                    alt="Checkmark"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/85 text-[15px] leading-relaxed">Identify and request 1:1 meetings with the people you want to meet</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/dubai/healthcare/icons/attendee-app/tick-1.webp"
                    alt="Checkmark"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/85 text-[15px] leading-relaxed">Get event day alerts, session reminders, and real-time updates</p>
                </div>
              </div>
            </div>

            {/* Card 2: For Sponsors & Exhibitors */}
            <div className="p-10 rounded-[28px] border border-[#0069B8]/52 bg-[#0D1B2E] shadow-[0_22px_62px_rgba(8,18,30,0.45)] transition-all duration-300 relative group overflow-hidden max-sm:p-6">
              <span className="inline-flex items-center gap-2 px-[14px] py-[6px] rounded-full text-[12.5px] font-extrabold bg-[#0069B8] text-white mb-6">
                <img
                  src="/dubai/healthcare/icons/attendee-app/exhibitor.webp"
                  alt="Sponsors & Exhibitors"
                  className="w-[14px] h-[14px] object-contain filter brightness-0 invert"
                />
                For Sponsors & Exhibitors
              </span>
              <h3 className="m-0 text-white font-[850] text-[28px] tracking-tight mb-8">
                Warm up your audience early
              </h3>
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-start">
                  <img
                    src="/dubai/healthcare/icons/attendee-app/tick-2.webp"
                    alt="Checkmark"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/85 text-[15px] leading-relaxed">Set featured visibility in the pre-event WhatsApp community</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/dubai/healthcare/icons/attendee-app/tick-2.webp"
                    alt="Checkmark"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/85 text-[15px] leading-relaxed">Share product teasers and thought leadership before the event</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/dubai/healthcare/icons/attendee-app/tick-2.webp"
                    alt="Checkmark"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/85 text-[15px] leading-relaxed">Direct WhatsApp access to engaged, opted-in delegates</p>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/dubai/healthcare/icons/attendee-app/tick-2.webp"
                    alt="Checkmark"
                    className="w-[24px] h-[24px] object-contain flex-none"
                  />
                  <p className="m-0 text-white/85 text-[15px] leading-relaxed">Post-event follow-up channel to continue the conversation</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Section 3: Call to Action (Your community is waiting...) ── */}
      <section className="relative py-28 bg-[#08121E] border-t border-[#0069B8]/25 overflow-hidden">
        <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[min(100%-32px,1172px)] mx-auto relative z-10 text-center">
          <h2 className="font-[850] text-white leading-tight tracking-[-0.01em] text-[clamp(36px,5vw,54px)] m-0">
            Your community is waiting.
          </h2>
          <p className="m-0 mt-4 text-[clamp(18px,2.2vw,24px)] font-bold text-white leading-normal max-w-[700px] mx-auto">
            Register and get <GradientText>WhatsApp access instantly.</GradientText>
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="/dubai/healthcare/sponsorship-enquiry"
              className="bb-btn-primary"
            >
              Enquire Now
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="bb-btn-arrow w-4 h-4 object-contain"
              >
                <path
                  d="M3.33334 8H12.6667"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.66666 4L12.6667 8L8.66666 12"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}