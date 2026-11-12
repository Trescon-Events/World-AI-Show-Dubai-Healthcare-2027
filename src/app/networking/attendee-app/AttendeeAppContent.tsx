"use client";

import { GradientText } from "../../components/Shared";

export function AttendeeAppContent() {
  const badgeFeatures = [
    { label: "Agenda", icon: "/dubai/healthcare/icons/attendee-app/calendar-lines-pen.webp" },
    { label: "Networking", icon: "/dubai/healthcare/icons/attendee-app/network-user.webp" },
    { label: "Speakers", icon: "/dubai/healthcare/icons/attendee-app/wais-speaker-icon-matched.webp" },
    { label: "Sponsors", icon: "/dubai/healthcare/icons/attendee-app/money-check.webp" },
    { label: "Exhibitors", icon: "/dubai/healthcare/icons/attendee-app/exhibitor.webp" },
    { label: "QR Scan", icon: "/dubai/healthcare/icons/attendee-app/qr-scan.webp" },
    { label: "Business Cards", icon: "/dubai/healthcare/icons/attendee-app/personal-finance.webp" },
    { label: "Chat", icon: "/dubai/healthcare/icons/attendee-app/comment-dots.webp" }
  ];

  return (
    <div className="relative w-full text-white font-display">
      {/* Hero / Header Section */}
      <section 
        className="relative net-inner-hero page-hero-subnav-top pb-24 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(8, 18, 30, 0.94) 0%, rgba(8, 18, 30, 0.72) 55%, rgba(8, 18, 30, 0.25) 100%), url('/dubai/healthcare/images/networking/attendee-app-hero-bg.webp')`,
          backgroundPosition: 'right center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[min(100%-32px,1172px)] mx-auto relative z-10 text-left flex flex-col items-start">
          <div className="max-w-[620px] w-full">
            <span className="text-[#009EAD] font-mono text-[12px] uppercase tracking-[3px] font-bold block mb-3">
              Powered by KonfHub
            </span>
            <h1 className="font-[850] text-white leading-[1.03] tracking-[-0.01em] text-[clamp(44px,5.4vw,68px)] m-0">
              Your Day, <br />
              <GradientText>Fully in Hand</GradientText>
            </h1>
            <p className="m-0 mt-6 text-[#F7F9FC]/84 text-[18px] leading-relaxed max-sm:text-[15px]">
              The World AI Show | Healthcare and Life Sciences | Dubai 2027 Event App is your command centre on the ground in Dubai. Personalised 1-day agenda builder, parallel breakout clinic selection (Ambient Voice or Diagnostic AI), speakers, sponsors, and live networking — all unified in one AI-powered platform.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a
                href="/dubai/healthcare/sponsorship-enquiry"
                className="bb-btn-primary"
              >
                Enquire Now <span className="bb-btn-arrow">➔</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Features Badges Bar */}
      <section className="relative py-8 bg-[#0D1B2E] border-y border-[#0069B8]/30">
        <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[min(100%-32px,1172px)] mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-[10px]">
            {badgeFeatures.map((feat) => (
              <div
                key={feat.label}
                className="flex items-center h-[36px] px-[14px] gap-[9px] border border-[#0069B8]/52 rounded-[6px] bg-[#08121E] text-[#F7F9FC]/90 text-[11.5px] font-extrabold uppercase tracking-[1px] select-none hover:border-[#009EAD] hover:text-white transition-all duration-200"
              >
                <img
                  src={feat.icon}
                  alt={`${feat.label} Icon`}
                  className="w-[14px] h-[14px] object-contain flex-none"
                />
                <span className="leading-none mt-[1px] whitespace-nowrap">
                  {feat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Features. Built for Every Role in the Room */}
      <section className="relative py-24 bg-[#08121E]">
        <div className="w-[min(1172px,calc(100%-48px))] max-sm:w-[min(100%-32px,1172px)] mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-16 w-full mx-auto">
            <span className="px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[2px] bg-[#0D1B2E] text-[#F15928] border border-[#F15928]/40 mb-5 inline-block">
              App Features
            </span>
            <h2 className="font-[850] text-white leading-tight tracking-[-0.01em] text-[clamp(32px,4vw,44px)] m-0">
              Built for Every <GradientText>Role in the Room</GradientText>
            </h2>
            <p className="m-0 mt-5 text-[#F7F9FC]/80 text-[16px] leading-relaxed max-sm:text-[14px]">
              Whether you&apos;re a hospital delegate, sponsor, or exhibitor — the app is designed to give you a different and better experience.
            </p>
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
                Make every hour count
              </h3>
              
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-start">
                  <img
                    src="/dubai/healthcare/icons/attendee-app/calendar-lines-pen.webp"
                    alt="Personalised Agenda Icon"
                    className="w-[26px] h-[26px] object-contain flex-none"
                  />
                  <div>
                    <h4 className="m-0 text-white font-extrabold text-[16px] mb-1">Personalised Agenda</h4>
                    <p className="m-0 text-white/50 text-[14px] leading-relaxed">Your schedule, built around your clinical and operational interests. Sessions curated to what matters most to you.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/dubai/healthcare/icons/attendee-app/everything-in-one-place.webp"
                    alt="Everything in One Place Icon"
                    className="w-[26px] h-[26px] object-contain flex-none"
                  />
                  <div>
                    <h4 className="m-0 text-white font-extrabold text-[16px] mb-1">Everything in One Place</h4>
                    <p className="m-0 text-white/50 text-[14px] leading-relaxed">Schedule, speakers, sessions, sponsors - all accessible from a single app, no juggling required.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/dubai/healthcare/icons/attendee-app/network-user.webp"
                    alt="Seamless Networking Icon"
                    className="w-[26px] h-[26px] object-contain flex-none"
                  />
                  <div>
                    <h4 className="m-0 text-white font-extrabold text-[16px] mb-1">Seamless Networking</h4>
                    <p className="m-0 text-white/50 text-[14px] leading-relaxed">Browse attendee profiles, send connection requests, and schedule 1:1 meetings - before you even arrive.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/dubai/healthcare/icons/attendee-app/real-time-notifications.webp"
                    alt="Real-Time Notifications Icon"
                    className="w-[26px] h-[26px] object-contain flex-none"
                  />
                  <div>
                    <h4 className="m-0 text-white font-extrabold text-[16px] mb-1">Real-Time Notifications</h4>
                    <p className="m-0 text-white/50 text-[14px] leading-relaxed">Stay updated on session changes, meeting reminders, and announcements the moment they happen.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/dubai/healthcare/icons/attendee-app/ai-powered-matchmaking.webp"
                    alt="AI-Powered Matchmaking Icon"
                    className="w-[26px] h-[26px] object-contain flex-none"
                  />
                  <div>
                    <h4 className="m-0 text-white font-extrabold text-[16px] mb-1">AI-Powered Matchmaking</h4>
                    <p className="m-0 text-white/50 text-[14px] leading-relaxed">Our AI analyses your goals, role, and interests to suggest the connections that will matter most.</p>
                  </div>
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
                Turn visibility into pipeline
              </h3>
              
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 items-start">
                  <img
                    src="/dubai/healthcare/icons/attendee-app/connect-with-high-intent-attendees.webp"
                    alt="Connect with High-Intent Attendees Icon"
                    className="w-[26px] h-[26px] object-contain flex-none"
                  />
                  <div>
                    <h4 className="m-0 text-white font-extrabold text-[16px] mb-1">Connect with High-Intent Attendees</h4>
                    <p className="m-0 text-white/50 text-[14px] leading-relaxed">Every delegate in the app is a qualified healthcare AI decision-maker. No noise — just relevant, high-value connections.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/dubai/healthcare/icons/attendee-app/drive-booth-traffic.webp"
                    alt="Drive Booth Traffic Icon"
                    className="w-[26px] h-[26px] object-contain flex-none"
                  />
                  <div>
                    <h4 className="m-0 text-white font-extrabold text-[16px] mb-1">Drive Booth Traffic</h4>
                    <p className="m-0 text-white/50 text-[14px] leading-relaxed">Targeted in-app visibility pushes attendees to your exhibition space at the right moments throughout the day.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/dubai/healthcare/icons/attendee-app/direct-in-app-interactions.webp"
                    alt="Direct In-App Interactions Icon"
                    className="w-[26px] h-[26px] object-contain flex-none"
                  />
                  <div>
                    <h4 className="m-0 text-white font-extrabold text-[16px] mb-1">Direct In-App Interactions</h4>
                    <p className="m-0 text-white/50 text-[14px] leading-relaxed">Message delegates, schedule meetings, and share resources directly via the app — no middleman needed.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <img
                    src="/dubai/healthcare/icons/attendee-app/capture-meaningful-leads.webp"
                    alt="Capture Meaningful Leads Icon"
                    className="w-[26px] h-[26px] object-contain flex-none"
                  />
                  <div>
                    <h4 className="m-0 text-white font-extrabold text-[16px] mb-1">Capture Meaningful Leads</h4>
                    <p className="m-0 text-white/50 text-[14px] leading-relaxed">QR-based lead capture with full delegate profiles — not just names, but roles, interests, and buying intent.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
