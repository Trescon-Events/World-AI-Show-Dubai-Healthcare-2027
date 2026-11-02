"use client";

import { useMemo, useState } from "react";
import { SpeakerCard } from "./SpeakerCard";
import { GradientText } from "../components/Shared";
import { speakers as pastSpeakers } from "./data";

const FILTER_PILLS = [
  "All",
  "Hospital Group CXOs",
  "Chief Medical Officers (CMO)",
  "Clinical Informatics Leads",
  "Health Authorities & Regulators",
  "Life Sciences & Genomics",
] as const;

type FilterPill = (typeof FILTER_PILLS)[number];

function matchesFilter(designation: string, company: string, filter: FilterPill): boolean {
  if (filter === "All") return true;
  const d = `${designation} ${company}`.toLowerCase();
  if (filter === "Hospital Group CXOs") {
    return d.includes("ceo") || d.includes("cio") || d.includes("cto") || d.includes("chief") || d.includes("president") || d.includes("group");
  }
  if (filter === "Chief Medical Officers (CMO)") {
    return d.includes("dr.") || d.includes("dr ") || d.includes("health") || d.includes("medical") || d.includes("clinical") || d.includes("advisor");
  }
  if (filter === "Clinical Informatics Leads") {
    return d.includes("digital") || d.includes("data") || d.includes("ai") || d.includes("information") || d.includes("analytics") || d.includes("standards");
  }
  if (filter === "Health Authorities & Regulators") {
    return d.includes("authority") || d.includes("mohap") || d.includes("ministry") || d.includes("government") || d.includes("policy") || d.includes("director");
  }
  if (filter === "Life Sciences & Genomics") {
    return d.includes("research") || d.includes("university") || d.includes("science") || d.includes("innovation") || d.includes("professor") || d.includes("dr");
  }
  return true;
}

export function SpeakersList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterPill>("All");

  const baseList = useMemo(() => {
    return pastSpeakers.map((s) => ({
      id: s.id,
      name: s.name,
      designation: s.designation,
      company: s.company,
      image: s.image,
      bio: s.bio,
    }));
  }, []);

  const filteredSpeakers = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return baseList.filter((s) => {
      const matchesQuery =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.designation.toLowerCase().includes(q) ||
        s.company.toLowerCase().includes(q);
      const matchesPill = matchesFilter(s.designation, s.company, activeFilter);
      return matchesQuery && matchesPill;
    });
  }, [baseList, searchQuery, activeFilter]);

  return (
    <section className="relative py-[92px] bg-[#020b1c] max-sm:py-[62px]" id="lineup">
      <div className="w-[min(1172px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1172px)]">

        {/* Clinical & Technical Faculty Pre-Announcement Banner (Section 09) */}
        <div className="mb-12 p-7 rounded-2xl border border-[#C0F43C]/35 bg-gradient-to-r from-[#C0F43C]/10 via-[#061428] to-[#18d4ff]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-[740px]">
            <span className="inline-block font-mono text-[11px] font-bold uppercase tracking-[2px] text-[#C0F43C] mb-2">
              Clinical &amp; Technical Faculty · 2027 Cohort Status
            </span>
            <p className="m-0 text-white/90 text-[16px] leading-relaxed">
              The 2027 Dubai Healthcare Faculty is currently under peer review. 35–45 senior Hospital Group CXOs, Chief Medical Officers, Clinical Informatics Leads, and Health Authorities will be announced in rolling cohorts.
            </p>
          </div>
          <a
            href="/dubai/healthcare/agenda/call-for-speakers/"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-[#C0F43C] text-[#06111F] [color:#06111F!important] font-extrabold text-[14px] whitespace-nowrap hover:brightness-110 transition-all shrink-0"
          >
            Have a live hospital or life sciences deployment case study? Apply for the 2027 Faculty →
          </a>
        </div>

        {/* Search & Filter Controls (Section 09) */}
        <div className="mb-10 flex flex-col gap-5">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
            <h2 className="font-[850] text-white leading-tight tracking-[-1.5px] text-[clamp(28px,3.6vw,42px)] m-0">
              Global Series <GradientText>Past Speakers</GradientText>
            </h2>

            {/* Search by name, designation, or company */}
            <div className="relative w-full max-w-[360px]">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, designation, or company"
                className="w-full h-[44px] px-4 rounded-full bg-[#051024] border border-white/15 text-white text-[14px] placeholder:text-white/45 focus:outline-none focus:border-cyan transition-colors"
              />
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5">
            {FILTER_PILLS.map((pill) => {
              const isActive = activeFilter === pill;
              return (
                <button
                  key={pill}
                  type="button"
                  onClick={() => setActiveFilter(pill)}
                  className={`px-4 py-2 rounded-full font-mono text-[12px] uppercase tracking-[1.2px] font-bold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#C0F43C] text-[#06111F] [color:#06111F!important] border border-[#C0F43C]"
                      : "bg-white/5 text-white/70 border border-white/10 hover:border-cyan/40 hover:text-white"
                  }`}
                >
                  {pill}
                </button>
              );
            })}
          </div>
        </div>

        {filteredSpeakers.length === 0 ? (
          <p className="text-white/60 text-lg">No speakers match your current search or filter criteria.</p>
        ) : (
          <div className="speaker-grid grid grid-cols-3 gap-[22px] max-[980px]:grid-cols-2 max-sm:grid-cols-1">
            {filteredSpeakers.map((speaker, index) => (
              <SpeakerCard
                key={speaker.id}
                name={speaker.name}
                role={speaker.designation}
                company={speaker.company}
                image={speaker.image}
                bio={speaker.bio}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
