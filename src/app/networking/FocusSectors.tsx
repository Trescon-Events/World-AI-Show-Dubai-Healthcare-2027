"use client";

import { useState } from "react";
import { GradientText } from "../components/Shared";

const industries = [
  ["Healthcare and Pharma", "health.webp"],
  ["Government, Public Sector and Smart Cities", "Government.webp"],
  ["Banking, Financial Services and Insurance", "banking.webp"],
  ["Education", "Education.webp"],
  ["Telecommunications", "telecomunication.webp"],
  ["Supply Chain and Logistics", "logistic.webp"],
  ["Manufacturing", "manufacturing.webp"],
  ["Retail and Ecommerce", "retail.webp"],
  ["Energy and Utilities", "energy.webp"],
  ["Media and Entertainment", "Media.webp"],
  ["Travel and Tourism", "Travel.webp"],
  ["Agriculture", "Agriculture.webp"],
] as const;

const cLevelRoles = [
  "Hospital Group CEO & COO",
  "Chief Medical Officer (CMO)",
  "Chief Information Officer (CIO)",
  "Chief Digital Officer (CDO)",
  "Chief Nursing Informatics Officer (CNIO)",
];

const seniorRoles = [
  "Head of Clinical Informatics",
  "Director of Radiology & Pathology",
  "Head of Revenue Cycle Management (RCM)",
  "Precision Medicine & Genomics Lead",
  "Health Authority & Regulatory Supervisor",
];

export function FocusSectors() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative py-[104px] bg-[#08121E] overflow-hidden max-sm:py-[72px]" id="focus-sectors">
      <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1172px)]">
        
        {/* Industry Focus and Meet grid */}
        <div className="grid grid-cols-[0.72fr_1fr] gap-9 items-center max-[980px]:grid-cols-1 max-[980px]:gap-12">
          
          {/* Headline Column */}
          <div>
            <h2 className="text-left font-[850] text-white leading-[1.04] tracking-[-0.01em] text-[clamp(42px,5.2vw,60px)] max-[980px]:text-center">
              Ecosystem & <br />
              <GradientText>sectors.</GradientText>
            </h2>
            <p className="mt-6 mb-8 text-[#F7F9FC]/80 text-[20px] leading-[1.45] max-[980px]:text-center max-sm:text-[17px]">
              A single curated frame - no spectators, no fluff. Just the people writing the cheques, shipping the clinical systems and shaping the policy.
            </p>
            <div 
              className="group relative mt-6 rounded-[20px] overflow-hidden border border-[#0069B8]/40 max-sm:max-w-md max-sm:mx-auto cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Duotone Color Overlay */}
              <div 
                className={`absolute inset-0 z-10 pointer-events-none mix-blend-color transition-colors duration-500 ease-out ${
                  isHovered ? "bg-[#F15928]/25" : "bg-[#0069B8]/20"
                }`} 
              />
              <img
                className="w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                src="/dubai/healthcare/images/networking/meet-leaders.webp"
                alt="Networking event attendees"
                loading="lazy"
                width={450}
                height={300}
              />
            </div>
          </div>

          {/* Industry Cards Grid */}
          <div className="grid grid-cols-3 gap-3.5 max-[980px]:grid-cols-2 max-sm:grid-cols-1">
            {industries.map(([item, icon]) => (
              <article
                key={item}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group flex flex-col min-h-[100px] p-[13px_14px] rounded-[12px] border border-[#0069B8]/40 bg-[#0D1B2E] shadow-[0_14px_34px_rgba(0,0,0,0.28)] select-none hover:-translate-y-0.5 hover:border-[#F15928] transition-all duration-300 cursor-pointer"
              >
                <span className="grid place-items-center w-10 h-10 mb-2 border border-[#0069B8]/40 rounded-[8px] text-[#009EAD] bg-[#08121E] group-hover:border-[#F15928] transition-all duration-300">
                  <img
                    src={`/dubai/healthcare/icons/networking/${icon}`}
                    alt=""
                    width={25}
                    height={25}
                    className="w-[25px] h-[25px] object-contain transition-all duration-300"
                    aria-hidden="true"
                  />
                </span>
                <strong className="block text-white text-[14px] font-bold leading-[1.28] mt-1 group-hover:text-[#009EAD] transition-colors duration-300">
                  {item}
                </strong>
              </article>
            ))}
          </div>

        </div>

        {/* Roles slider marquee 1: C-Level */}
        <section className="mt-[78px] text-center" aria-labelledby="c-level-title">
          <h3 id="c-level-title" className="m-0 mb-5 text-white text-[24px] font-extrabold leading-none">
            C-level Executives
          </h3>
          <div className="w-[100vw] ml-[calc((100vw-100%)/-2)] overflow-hidden" aria-label="C-level Executives carousel">
            <div className="move-left flex w-max gap-7 px-7 pb-1.5 will-change-transform">
              {[...cLevelRoles, ...cLevelRoles, ...cLevelRoles].map((role, index) => (
                <span
                  key={`${role}-${index}`}
                  className="flex-none min-w-[250px] p-[15px_24px] rounded-[9px] text-white bg-[#F15928] text-center font-extrabold text-[14px]"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Roles slider marquee 2: Senior Executives */}
        <section className="mt-8 text-center" aria-labelledby="senior-title">
          <h3 id="senior-title" className="m-0 mb-4 text-white text-[24px] font-extrabold leading-none">
            Other Senior Executives
          </h3>
          <div className="w-[100vw] ml-[calc((100vw-100%)/-2)] overflow-hidden" aria-label="Other Senior Executives carousel">
            <div className="move-right flex w-max gap-7 px-7 pb-1.5 will-change-transform">
              {[...seniorRoles, ...seniorRoles, ...seniorRoles].map((role, index) => (
                <span
                  key={`${role}-${index}`}
                  className="flex-none min-w-[250px] p-[15px_24px] rounded-[9px] text-white bg-[#0069B8] text-center font-extrabold text-[14px]"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </section>

      </div>
    </section>
  );
}
