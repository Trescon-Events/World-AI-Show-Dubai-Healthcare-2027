"use client";

import { GradientText } from "../components/Shared";

/* ── All logos combined for marquee rows ─────────────────────── */
const row1 = [
  { path: "/dubai/healthcare/images/sponsors/strategic/mdec.webp", alt: "MDEC" },
  { path: "/dubai/healthcare/images/sponsors/strategic/mida.webp", alt: "MIDA" },
  { path: "/dubai/healthcare/images/sponsors/gold/datadog.webp", alt: "Datadog" },
  { path: "/dubai/healthcare/images/sponsors/gold/quantexa.webp", alt: "Quantexa" },
  { path: "/dubai/healthcare/images/sponsors/gold/denodo.webp", alt: "Denodo" },
  { path: "/dubai/healthcare/images/sponsors/gold/Alibaba-cloud.webp", alt: "Alibaba Cloud" },
  { path: "/dubai/healthcare/images/sponsors/gold/ey.webp", alt: "EY" },
];

const row2 = [
  { path: "/dubai/healthcare/images/sponsors/gold/Magure.webp", alt: "Magure" },
  { path: "/dubai/healthcare/images/sponsors/gold/avatai.webp", alt: "Avatai" },
  { path: "/dubai/healthcare/images/sponsors/gold/darwin.webp", alt: "Darwinbox" },
  { path: "/dubai/healthcare/images/sponsors/gold/Bluepower.webp", alt: "Bluepower" },
  { path: "/dubai/healthcare/images/sponsors/gold/Tcloud_logo.webp", alt: "TCloud" },
  { path: "/dubai/healthcare/images/sponsors/gold/ucloud.webp", alt: "UCloud" },
  { path: "/dubai/healthcare/images/sponsors/gold/asix.webp", alt: "ASIX" },
];

/* White-banner media & association logos */
const partnerLogos = [
  "/dubai/healthcare/images/sponsors/association/starfindo.webp",
  "/dubai/healthcare/images/sponsors/association/kumpul.webp",
  "/dubai/healthcare/images/sponsors/association/forums.webp",
  "/dubai/healthcare/images/sponsors/association/ddas.webp",
  "/dubai/healthcare/images/sponsors/association/belux.webp",
  "/dubai/healthcare/images/sponsors/association/lafrench.webp",
  "/dubai/healthcare/images/sponsors/media/abo.webp",
  "/dubai/healthcare/images/sponsors/media/analytic.webp",
  "/dubai/healthcare/images/sponsors/media/asia.webp",
  "/dubai/healthcare/images/sponsors/media/breakingai.webp",
  "/dubai/healthcare/images/sponsors/media/cio.webp",
  "/dubai/healthcare/images/sponsors/media/techdogs.webp",
  "/dubai/healthcare/images/sponsors/media/techrevolt.webp",
  "/dubai/healthcare/images/sponsors/media/techstorm.webp",
  "/dubai/healthcare/images/sponsors/media/trp.webp",
  "/dubai/healthcare/images/sponsors/media/wb.webp",
];

export function PartnerMarquee() {
  return (
    <section className="relative py-[92px] pb-0 bg-[#030b19] overflow-hidden max-sm:py-[62px]" id="exhibitors">
      <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1172px)] text-center mb-14">
        <h2 className="font-[850] text-white leading-tight tracking-[-1.5px] text-[clamp(36px,4.5vw,52px)]">
          The ecosystem, <GradientText>in motion.</GradientText>
        </h2>
        <p className="w-full mx-auto mt-4 text-white/58 text-[16px] leading-relaxed">
          Hover over any row to pause the scrolling and inspect our confirmed summit sponsors and associate organizations.
        </p>
      </div>

      {/* Two offset scrolling sponsor rows */}
      <div className="flex flex-col gap-5 w-full overflow-hidden">
        {/* Row 1 — slides right-to-left */}
        <div className="relative w-full overflow-hidden">
          <div className="logo-marquee-rail flex gap-5 will-change-transform">
            {[...row1, ...row1, ...row1, ...row1].map((logo, index) => (
              <span
                key={`${logo.alt}-r1-${index}`}
                className="flex-none grid place-items-center w-[190px] h-[82px] rounded-[12px] bg-white shadow-[0_0_28px_rgba(20,212,255,0.16)] select-none px-4"
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

        {/* Row 2 — slides left-to-right */}
        <div className="relative w-full overflow-hidden">
          <div className="marquee-partners-reverse flex gap-5 will-change-transform">
            {[...row2, ...row2, ...row2, ...row2].map((logo, index) => (
              <span
                key={`${logo.alt}-r2-${index}`}
                className="flex-none grid place-items-center w-[190px] h-[82px] rounded-[12px] bg-white shadow-[0_0_28px_rgba(20,212,255,0.16)] select-none px-4"
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

      {/* Partners white banner slider */}
      <div id="media-marquee" className="mt-[92px] p-[28px_0_34px] bg-white text-center overflow-hidden">
        <p className="m-0 mb-[26px] text-[18px] font-bold text-[#151923] uppercase tracking-[1.5px] select-none">
          Media &amp; Association Partners
        </p>
        <div className="relative w-full overflow-hidden">
          <div className="marquee-partners flex items-center gap-[56px]">
            {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, index) => (
              <div
                key={`${logo}-mp-${index}`}
                className="flex-none w-[130px] h-[50px] flex items-center justify-center select-none"
              >
                <img
                  src={logo}
                  alt="Partner Logo"
                  className="max-w-full max-h-full object-contain filter hover:brightness-105 transition-all duration-300"
                  loading="lazy"
                  width={130}
                  height={50}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
