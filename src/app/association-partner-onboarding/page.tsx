"use client";

import { Header } from "../components/sections/Header";
import { FooterSection } from "../components/sections/FooterSection";
import HubspotForm from "../components/HubspotForm";

export default function AssociationPartnerOnboardingPage() {
  return (
    <main className="relative min-h-screen bg-[#08121E] text-white font-display overflow-x-clip">
      <Header activeItem="Partner" />

      {/* Main Content Area */}
      <section className="relative z-10 page-hero-top pb-[96px] max-sm:pb-[64px]">
        <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1172px)]">
          {/* Premium Glass Form Card */}
          <div className="relative w-full mx-auto p-12 max-sm:p-6 rounded-[28px] border border-[#0069B8]/52 bg-[#0D1B2E] shadow-[0_24px_64px_rgba(0,0,0,0.45)] overflow-hidden">
            {/* Top border highlight */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0069B8] via-[#009EAD] to-[#F15928]" />

            <div className="relative z-10 flex flex-col">
              <span className="text-[#F15928] font-mono text-[11px] font-extrabold uppercase tracking-[0.25em] mb-3">
                Association Partner Onboarding · Dubai 2027
              </span>
              <h1 className="m-0 text-white font-[850] text-[clamp(28px,4vw,42px)] leading-tight tracking-[-0.01em] mb-4">
                Association Partner <span className="text-[#009EAD]">Onboarding</span>
              </h1>
              <p className="m-0 text-[#F7F9FC]/84 text-[16px] leading-relaxed mb-9">
                Please complete the form below to submit your association logo, branding assets, and partner onboarding details for World AI Show | Healthcare and Life Sciences | Dubai 2027 (25 March 2027 · Dubai, UAE).
              </p>

              {/* Hubspot Form Embedded Container */}
              <HubspotForm portalId="2953901" formId="a618f7be-aee4-45cd-934a-f1334d547d1b" region="na1" />
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
