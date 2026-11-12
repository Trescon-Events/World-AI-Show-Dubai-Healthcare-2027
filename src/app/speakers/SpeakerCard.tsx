"use client";

import type { CSSProperties } from "react";

type SpeakerCardProps = {
  name: string;
  role: string;
  company: string;
  image: string;
  index: number;
  bio?: string;
};

function stripHtml(html?: string) {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "");
}

export function SpeakerCard({ name, role, company, image, index, bio }: SpeakerCardProps) {
  const cleanBio = stripHtml(bio);
  const sepIdx = company.lastIndexOf(" · ");
  const orgPart = sepIdx !== -1 ? company.slice(0, sepIdx) : company;
  const countryPart = sepIdx !== -1 ? company.slice(sepIdx + 3) : null;

  return (
    <div className="w-full h-[380px] cursor-pointer group">
      <div className="speaker-card-inner relative w-full h-full overflow-hidden border-[1.5px] border-[#009EAD] group-hover:border-[#F15928] rounded-[16px] bg-[#08121E] transition-all duration-300 after:absolute after:inset-0 after:bg-gradient-to-t after:from-[#08121E] after:via-[#08121E]/35 after:to-transparent">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover object-top opacity-85 transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute z-10 left-5 right-5 bottom-5 transition-all duration-300 group-hover:opacity-0 group-hover:translate-y-2">
          <h3 className="m-0 text-white font-[850] text-[22px] mb-1 leading-tight">{name}</h3>
          <p className="m-0 text-[#F7F9FC]/80 text-[14px] font-medium leading-tight">{role}</p>
          <span className="block mt-1 font-mono text-[10px] uppercase tracking-[1.8px] font-bold">
            <span className="text-[#009EAD]">{orgPart}</span>
            {countryPart && (
              <>
                <span className="text-[#009EAD]/70"> · </span>
                <span className="text-[#F15928]">{countryPart}</span>
              </>
            )}
          </span>
          <div className="speaker-line block w-8 h-[2px] mt-3.5 bg-[#009EAD] transition-all duration-300" />
        </div>

        {cleanBio && (
          <div className="absolute inset-0 z-20 flex flex-col justify-center p-5 pt-8 bg-[#08121E]/95 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 border border-[#F15928]/60 rounded-[16px] backdrop-blur-[4px]">
            <h4 className="m-0 text-white font-[850] text-[20px] mb-0.5 leading-tight">{name}</h4>
            <span className="block text-[#F7F9FC]/75 text-[13px] font-medium leading-tight mb-1.5">{role}</span>
            <span className="block font-mono text-[10px] uppercase tracking-[1.5px] font-bold mb-3">
              <span className="text-[#009EAD]">{orgPart}</span>
              {countryPart && (
                <>
                  <span className="text-[#009EAD]/70"> · </span>
                  <span className="text-[#F15928]">{countryPart}</span>
                </>
              )}
            </span>
            <p className="m-0 text-[#F7F9FC]/84 text-[13px] leading-relaxed overflow-y-auto max-h-[200px] pr-1.5 scrollbar-thin">
              {cleanBio}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}


