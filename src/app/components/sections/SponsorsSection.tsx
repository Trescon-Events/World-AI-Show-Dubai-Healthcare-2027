"use client";

import { GradientText } from "../Shared";

// Sponsor Row 1 Logos (Past World AI Show India Sponsors)
const sponsorRow1 = [
  { path: "/dubai/healthcare/images/sponsors/india-past/google-cloud.webp", alt: "Google Cloud" },
  { path: "/dubai/healthcare/images/sponsors/india-past/Dell-Technologies-Intel.webp", alt: "Dell Technologies & Intel" },
  { path: "/dubai/healthcare/images/sponsors/india-past/hewlett-packard.webp", alt: "Hewlett Packard Enterprise" },
  { path: "/dubai/healthcare/images/sponsors/india-past/hcl.webp", alt: "HCLTech" },
  { path: "/dubai/healthcare/images/sponsors/india-past/happiest-minds.webp", alt: "Happiest Minds" },
  { path: "/dubai/healthcare/images/sponsors/india-past/kpmg.webp", alt: "KPMG" },
  { path: "/dubai/healthcare/images/sponsors/india-past/sap.webp", alt: "SAP" },
  { path: "/dubai/healthcare/images/sponsors/india-past/oracle.webp", alt: "Oracle" },
];

// Sponsor Row 2 Logos (Past World AI Show India Sponsors)
const sponsorRow2 = [
  { path: "/dubai/healthcare/images/sponsors/india-past/cisco.webp", alt: "Cisco" },
  { path: "/dubai/healthcare/images/sponsors/india-past/Snowflake.webp", alt: "Snowflake" },
  { path: "/dubai/healthcare/images/sponsors/india-past/ui-path.webp", alt: "UiPath" },
  { path: "/dubai/healthcare/images/sponsors/india-past/automation-anywhere.webp", alt: "Automation Anywhere" },
  { path: "/dubai/healthcare/images/sponsors/india-past/eclerx.webp", alt: "eClerx" },
  { path: "/dubai/healthcare/images/sponsors/india-past/Searce.webp", alt: "Searce" },
  { path: "/dubai/healthcare/images/sponsors/india-past/vernacular-ai.webp", alt: "Vernacular.ai" },
  { path: "/dubai/healthcare/images/sponsors/india-past/Denodo.webp", alt: "Denodo" },
];

// Strategic & Association Partners Logos (Path: association subfolder)
const partnerLogos = [
  "/dubai/healthcare/images/sponsors/association/starfindo.webp",
  "/dubai/healthcare/images/sponsors/association/kumpul.webp",
  "/dubai/healthcare/images/sponsors/association/forums.webp",
  "/dubai/healthcare/images/sponsors/association/ddas.webp",
  "/dubai/healthcare/images/sponsors/association/belux.webp",
  "/dubai/healthcare/images/sponsors/association/lafrench.webp",
];

// Governments & Associations Who Have Worked With Us In The Past (matching worldaishow.com)
const governmentLogos = [
  { path: "/dubai/healthcare/images/sponsors/governments/meit.webp", alt: "Ministry of Electronics and Information Technology, Government of India" },
  { path: "/dubai/healthcare/images/sponsors/governments/mrt-govt-of-india.webp", alt: "Ministry of Road Transport & Highways, Government of India" },
  { path: "/dubai/healthcare/images/sponsors/governments/niti-aayog.webp", alt: "NITI Aayog" },
  { path: "/dubai/healthcare/images/sponsors/governments/NeGD.webp", alt: "National e-Governance Division (NeGD)" },
  { path: "/dubai/healthcare/images/sponsors/governments/digital-india.webp", alt: "Digital India" },
  { path: "/dubai/healthcare/images/sponsors/governments/govt-maharashtra.webp", alt: "Government of Maharashtra" },
  { path: "/dubai/healthcare/images/sponsors/governments/govt-andhra-pradesh.webp", alt: "Government of Andhra Pradesh" },
  { path: "/dubai/healthcare/images/sponsors/governments/dubai-police.webp", alt: "Dubai Police" },
  { path: "/dubai/healthcare/images/sponsors/governments/difc.webp", alt: "DIFC" },
  { path: "/dubai/healthcare/images/sponsors/governments/dubai-economy.webp", alt: "Dubai Economy" },
  { path: "/dubai/healthcare/images/sponsors/governments/supreme-council.webp", alt: "Supreme Council of Energy" },
  { path: "/dubai/healthcare/images/sponsors/governments/ministry-of-finance.webp", alt: "Ministry of Finance" },
  { path: "/dubai/healthcare/images/sponsors/governments/petroleum-development-oman.webp", alt: "Petroleum Development Oman" },
  { path: "/dubai/healthcare/images/sponsors/governments/oman-chmaber-of-commerce.webp", alt: "Oman Chamber of Commerce and Industry" },
  { path: "/dubai/healthcare/images/sponsors/governments/oman-banks-association.webp", alt: "Oman Banks Association" },
  { path: "/dubai/healthcare/images/sponsors/governments/qfc.webp", alt: "Qatar Financial Centre" },
];

export function SponsorsSection() {
  return (
    <section className="relative py-[100px] pb-0 bg-[#F7F9FC] overflow-hidden max-sm:py-[72px] max-sm:pb-0" id="partners">
      <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1172px)]">
        {/* S9 · Sponsor value & commercial architecture */}
        <h2 className="text-center font-[850] text-[#08121E] leading-[1.06] tracking-[-0.01em] text-[clamp(34px,4.4vw,54px)] w-full mx-auto">
          Where Middle East hospital leaders specify, validate, and{" "}
          <GradientText>procure production AI</GradientText>
        </h2>

        <p className="mt-6 w-full mx-auto text-center text-[#334155] text-[18px] leading-[1.6] max-sm:text-[16px]">
          Middle East healthcare networks are finalising their 2027 technology procurement decisions now. Partnerships are structured around 20-minute plenary keynotes, exclusive 75-minute workshop clinics, standardised 6 sqm, 9 sqm, and 12 sqm concourse booths, and private 15-buyer CXO closed-door boardrooms.
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href="/dubai/healthcare/attend/sponsor/"
            className="bb-btn-primary"
          >
            Explore Sponsorship Tiers <span className="bb-btn-arrow">→</span>
          </a>
        </div>

        <p className="mt-14 mb-0 text-center font-mono text-xs font-bold uppercase tracking-[2px] text-[#0069B8]">
          Past Series Partners &amp; Sponsors
        </p>
      </div>

      {/* Two offset scrolling sponsor rows */}
      <div className="flex flex-col gap-5 mt-6 w-full overflow-hidden">
        {/* Row 1 */}
        <div className="relative w-full overflow-hidden">
          <div className="logo-marquee-rail flex gap-5 will-change-transform">
            {[...sponsorRow1, ...sponsorRow1, ...sponsorRow1].map((logo, index) => (
              <span
                key={`${logo.alt}-${index}`}
                className="flex-none grid place-items-center w-[190px] h-[82px] rounded-[12px] bg-white border border-[#0069B8]/22 shadow-[0_8px_24px_rgba(8,18,30,0.06)] select-none px-4"
              >
                <img
                  src={logo.path}
                  alt={logo.alt}
                  className="max-w-[140px] max-h-[50px] object-contain transition-all duration-300"
                  loading="lazy"
                  width={140}
                  height={50}
                />
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="relative w-full overflow-hidden">
          <div className="marquee-partners-reverse flex gap-5 will-change-transform">
            {[...sponsorRow2, ...sponsorRow2, ...sponsorRow2].map((logo, index) => (
              <span
                key={`${logo.alt}-${index}`}
                className="flex-none grid place-items-center w-[190px] h-[82px] rounded-[12px] bg-white border border-[#0069B8]/22 shadow-[0_8px_24px_rgba(8,18,30,0.06)] select-none px-4"
              >
                <img
                  src={logo.path}
                  alt={logo.alt}
                  className="max-w-[140px] max-h-[50px] object-contain transition-all duration-300"
                  loading="lazy"
                  width={140}
                  height={50}
                />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Governments and Associations Who Have Worked With Us In The Past */}
      <div className="mt-20 py-16 bg-white border-t border-[#0069B8]/15 text-center">
        <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1172px)]">
          <h3 className="m-0 mb-10 text-[#08121E] font-[850] text-[clamp(22px,2.8vw,32px)] leading-[1.2] tracking-[-0.01em] uppercase w-full mx-auto">
            Governments and Associations Who Have Worked With Us In The Past
          </h3>

          <div className="grid grid-cols-4 border border-[#0069B8]/22 rounded-[16px] overflow-hidden max-md:grid-cols-2">
            {governmentLogos.map((logo) => (
              <div
                key={logo.alt}
                className="flex items-center justify-center h-[126px] p-5 border-r border-b border-[#0069B8]/15 bg-white hover:bg-[#F7F9FC] transition-colors duration-200"
              >
                <img
                  src={logo.path}
                  alt={logo.alt}
                  className="max-w-[165px] max-h-[82px] object-contain"
                  loading="lazy"
                  width={165}
                  height={82}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners single row horizontal infinite marquee slider with hover pause */}
      <div className="p-[28px_0_34px] bg-[#F7F9FC] border-t border-[#0069B8]/18 text-center overflow-hidden">
        <p className="m-0 mb-[26px] text-[18px] font-bold text-[#08121E] uppercase tracking-[1.5px] select-none">
          Strategic &amp; Media Partners
        </p>
        <div className="relative w-full overflow-hidden">
          <div className="marquee-partners flex items-center gap-[64px]">
            {[...partnerLogos, ...partnerLogos].map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="flex-none w-[140px] h-[52px] flex items-center justify-center select-none"
              >
                <img
                  src={logo}
                  alt="Partner Logo"
                  className="max-w-full max-h-full object-contain filter hover:brightness-105 transition-all duration-300"
                  loading="lazy"
                  width={140}
                  height={52}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
