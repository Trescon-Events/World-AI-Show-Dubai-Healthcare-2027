"use client";

import type { CSSProperties, PointerEvent, ReactNode } from "react";
import { useMemo, useState } from "react";

import { FooterSection } from "../components/sections/FooterSection";
import { Header } from "../components/sections/Header";

import styles from "./AgendaPage.module.css";
import "./agenda.css";
import { AgendaSection, sixPartBlocks } from "../components/sections/AgendaSection";
import { SpeakersSection } from "../components/sections/SpeakersSection";
import { SpeakerCallToStage } from "../speakers/SpeakerCallToStage";

const subNav = ["Overview", "The Vision", "Agenda", "Themes", "Call for Speakers"];

const formats: { title: string; text: string; icon: ReactNode }[] = [
  {
    title: "20-Minute Plenary Keynotes & Live Buyer Evidence",
    text: "Frontline case studies and fireside briefings led by hospital group CXOs, Chief Medical Officers, and healthcare CIOs. Moving past theoretical hype to examine real-world EMR integration hurdles, pilot failure post-mortems, and verified clinical outcomes.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
        <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="8" y1="22" x2="16" y2="22" />
      </svg>
    ),
  },
  {
    title: "75-Minute Parallel Breakout Clinics",
    text: "Collaborative, hands-on workshop clinics designed to tackle acute clinical and operational bottlenecks: Clinic A on Ambient Clinical Voice, Copilots & Documentation, and Clinic B on Diagnostic AI, Radiology Triage & Clinical Decision Support.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <path d="M10 6.5h4M6.5 10v4M17.5 10v4M10 17.5h4" />
      </svg>
    ),
  },
  {
    title: "CXO Closed-Door Boardrooms & Outcome Roundtables",
    text: "Private 60-minute closed-door boardrooms for 15 wishlist hospital leaders alongside curated peer outcome roundtables. Engineered for senior clinical and IT decision-makers to benchmark vendors, navigate UAE health data residency, and finalise 2027 procurement specifications.",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const regionalCatalysts = [
  [
    "Unified Health Information Exchanges",
    "Maturation of Nabidh (DHA) and Malaffi (DoH), establishing clean datasets and surging demand for predictive population-health triage.",
    "/dubai/healthcare/images/agenda/Policy.webp",
  ],
  [
    "Private Hospital Consolidation",
    "Aggressive expansion by networks (PureHealth, Aster DM, Burjeel, Mediclinic, Fakeeh) investing in ambient documentation and operational efficiency.",
    "/dubai/healthcare/images/agenda/AI-infra.webp",
  ],
  [
    "National Genomics Mandates",
    "Directives surrounding the Emirati Genome Program creating urgent demand for accelerated computing and precision oncology models.",
    "/dubai/healthcare/images/agenda/investment.webp",
  ],
  [
    "Medical Tourism & Accreditation",
    "Positioning Dubai as a global health tourism hub, requiring hospitals to deploy AI diagnostics to maintain international accreditations.",
    "/dubai/healthcare/images/agenda/Global.webp",
  ],
];

type HealthcareAgendaSession = {
  id: number;
  dayKey: string;
  dayLabel: string;
  startTime: string;
  endTime: string;
  title: string;
  typeTitle: string;
  location: string;
  description: string;
  trackId: string;
  trackTitle: string;
};

const healthcareSchedule: HealthcareAgendaSession[] = [
  {
    id: 101,
    dayKey: "2027-03-25",
    dayLabel: "Thursday 25 March 2027: Governed Clinical Practice",
    startTime: "08:00",
    endTime: "09:00",
    title: "Executive Registration, Networking Breakfast & Technology Showcase Opening",
    typeTitle: "Registration & Concourse",
    location: "Registration Concourse & Healthcare Technology Showcase",
    description:
      "Executive badge collection, networking breakfast, and opening of the healthcare technology demonstration concourse (6 sqm, 9 sqm, and 12 sqm turnkey footprints).",
    trackId: "main",
    trackTitle: "Main Plenary Stage",
  },
  {
    id: 102,
    dayKey: "2027-03-25",
    dayLabel: "Thursday 25 March 2027: Governed Clinical Practice",
    startTime: "09:00",
    endTime: "10:15",
    title: "Sector Priority Brief: The 2027 Healthcare AI Mandate & Opening Health System Case Study",
    typeTitle: "Block 1 · Sector Priority Brief",
    location: "Main Plenary Stage",
    description:
      "Opening framing by health authorities and hospital group CEOs establishing ranked clinical priorities, clinician shortage pressures, and immediate ROI benchmarks, followed by an opening 20-minute plenary keynote.",
    trackId: "main",
    trackTitle: "Main Plenary Stage",
  },
  {
    id: 103,
    dayKey: "2027-03-25",
    dayLabel: "Thursday 25 March 2027: Governed Clinical Practice",
    startTime: "10:15",
    endTime: "10:45",
    title: "Exhibition Networking Break & Hosted 1-on-1 Bilateral Hospital Buyer Meetings",
    typeTitle: "1-on-1 Matchmaking & Concourse",
    location: "Healthcare Technology Demonstration Concourse & Bilateral Meeting Lounge",
    description:
      "Pre-scheduled 1-on-1 bilateral meetings between hospital buyers and vetted solution providers alongside live technical demonstrations.",
    trackId: "main",
    trackTitle: "Main Plenary Stage",
  },
  {
    id: 104,
    dayKey: "2027-03-25",
    dayLabel: "Thursday 25 March 2027: Governed Clinical Practice",
    startTime: "10:45",
    endTime: "12:15",
    title: "Buyer Evidence Sessions: Real-World Clinical Deployments & Pilot Failure Post-Mortems",
    typeTitle: "Block 2 · Buyer Evidence (20-Min Keynotes)",
    location: "Main Plenary Stage",
    description:
      "Frank, unvarnished clinical case studies examining real-world deployment hurdles, EMR integration friction, physician adoption challenges, and pilot post-mortems.",
    trackId: "main",
    trackTitle: "Main Plenary Stage",
  },
  {
    id: 105,
    dayKey: "2027-03-25",
    dayLabel: "Thursday 25 March 2027: Governed Clinical Practice",
    startTime: "12:15",
    endTime: "13:00",
    title: "Executive Panel: Boardroom AI Governance, Clinical Safety, EMR Interoperability & Capital Allocation",
    typeTitle: "Block 3 · Risk and Trust Plenary",
    location: "Main Plenary Stage",
    description:
      "Specialised regulatory and clinical governance panel detailing patient privacy assurance, UAE Federal Law No. 2 of 2019 domestic health data residency, Nabidh/Malaffi/Riayati FHIR interoperability, and bias mitigation.",
    trackId: "main",
    trackTitle: "Main Plenary Stage",
  },
  {
    id: 106,
    dayKey: "2027-03-25",
    dayLabel: "Thursday 25 March 2027: Governed Clinical Practice",
    startTime: "13:00",
    endTime: "14:00",
    title: "Executive Working Lunch & Curated Healthcare Technology Demonstrations",
    typeTitle: "Working Lunch & CXO Closed-Door Boardrooms",
    location: "Executive Dining Hall & 2 CXO Private Closed-Door Boardroom Suites",
    description:
      "Executive working lunch and concourse showcase alongside private 60-minute CXO Closed-Door Boardroom sessions hosting 15 wishlist hospital leaders.",
    trackId: "boardroom",
    trackTitle: "CXO Closed-Door Boardrooms",
  },
  {
    id: 107,
    dayKey: "2027-03-25",
    dayLabel: "Thursday 25 March 2027: Governed Clinical Practice",
    startTime: "14:00",
    endTime: "15:15",
    title: "Parallel Use-Case Workshop · Clinic A: Ambient Clinical Voice, Copilots & Documentation (Hosted by Engagement Partner)",
    typeTitle: "Block 4 · 75-Minute Workshop Clinic",
    location: "Breakout Clinic Suite A",
    description:
      "Interactive 75-minute workshop clinic hosted by Engagement Partner. Ambient clinical voice listening, automated medical coding and billing triage, physician burnout reduction, clinical decision support (CDS) copilots, nursing documentation workflows, and automated discharge summaries.",
    trackId: "clinics",
    trackTitle: "Parallel Breakout Clinics (75 Min)",
  },
  {
    id: 108,
    dayKey: "2027-03-25",
    dayLabel: "Thursday 25 March 2027: Governed Clinical Practice",
    startTime: "14:00",
    endTime: "15:15",
    title: "Parallel Use-Case Workshop · Clinic B: Diagnostic AI, Radiology Triage & Clinical Decision Support (Hosted by Engagement Partner)",
    typeTitle: "Block 4 · 75-Minute Workshop Clinic",
    location: "Breakout Clinic Suite B",
    description:
      "Interactive 75-minute workshop clinic hosted by Engagement Partner. Computer vision for radiology triage (stroke, trauma, oncology), automated pathology screening, early cancer detection pipelines, time-critical clinical coordination, multi-modal diagnostic data fusion, and clinical regulatory validation.",
    trackId: "clinics",
    trackTitle: "Parallel Breakout Clinics (75 Min)",
  },
  {
    id: 109,
    dayKey: "2027-03-25",
    dayLabel: "Thursday 25 March 2027: Governed Clinical Practice",
    startTime: "15:15",
    endTime: "16:15",
    title: "Applied Case Studies: Hospital Capacity Optimisation & Precision Medicine Breakthroughs",
    typeTitle: "Block 5 · Applied Case Studies",
    location: "Main Plenary Stage",
    description:
      "Applied demonstrations detailing hospital capacity optimisation, predictive bed management, operating theatre scheduling, and precision medicine breakthroughs across live hospital workflows.",
    trackId: "main",
    trackTitle: "Main Plenary Stage",
  },
  {
    id: 110,
    dayKey: "2027-03-25",
    dayLabel: "Thursday 25 March 2027: Governed Clinical Practice",
    startTime: "16:15",
    endTime: "17:15",
    title: "Outcome Roundtables: Clinical Procurement Benchmarks & Production Action Plan",
    typeTitle: "Block 6 · Outcome Roundtables",
    location: "Executive Roundtable Arena",
    description:
      "Curated peer discussions recording next actions, hospital procurement specifications, and verified vendor evaluation criteria for 2027 deployments.",
    trackId: "main",
    trackTitle: "Main Plenary Stage",
  },
  {
    id: 111,
    dayKey: "2027-03-25",
    dayLabel: "Thursday 25 March 2027: Governed Clinical Practice",
    startTime: "17:15",
    endTime: "18:30",
    title: "Closing Executive Summary & Hosted Networking Reception",
    typeTitle: "Executive Reception",
    location: "VIP Networking Terrace · Dubai",
    description:
      "Closing executive synthesis and hosted networking reception concluding Day 2 of the March Dubai Cluster.",
    trackId: "main",
    trackTitle: "Main Plenary Stage",
  },
];

function GradientText({ children }: { children: ReactNode }) {
  return <span className={styles.gradientText}>{children}</span>;
}

function ArrowSVG() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4 object-contain transition-transform duration-200 group-hover:translate-x-1"
      aria-hidden="true"
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
  );
}

function setPointerGlow(event: PointerEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
  event.currentTarget.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
}

function IconCard({ title, text, icon, index }: { title: string; text: string; icon: string; index: number }) {
  return (
    <article className={styles.iconCard}>
      <span className={styles.iconBadge}><img src={icon} alt="" loading="lazy" /></span>
      <span className={styles.cardIndex}>{String(index + 1).padStart(2, "0")}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function AgendaTabs() {
  const dayTabs = [
    { key: "2027-03-25", label: "Thursday 25 March 2027: Governed Clinical Practice" },
  ];

  const [activeDay, setActiveDay] = useState("2027-03-25");
  const [activeTrack, setActiveTrack] = useState("all");
  const [activeSessionType, setActiveSessionType] = useState("");
  const [query, setQuery] = useState("");

  const sessionTypes = useMemo(() => {
    return Array.from(new Set(healthcareSchedule.map((s) => s.typeTitle)));
  }, []);

  const trackTabs = useMemo(() => {
    const sessionsForDay = healthcareSchedule.filter((session) => session.dayKey === activeDay);
    return Array.from(
      new Map(sessionsForDay.map((session) => [session.trackId, session.trackTitle])).entries()
    ).map(([id, title]) => ({ id, title }));
  }, [activeDay]);

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return healthcareSchedule.filter((session) => {
      const dayMatches = session.dayKey === activeDay;
      const trackMatches = activeTrack === "all" || session.trackId === activeTrack;
      const typeMatches = !activeSessionType || session.typeTitle === activeSessionType;
      const searchMatches =
        !normalizedQuery ||
        session.title.toLowerCase().includes(normalizedQuery) ||
        session.description.toLowerCase().includes(normalizedQuery) ||
        session.typeTitle.toLowerCase().includes(normalizedQuery);
      return dayMatches && trackMatches && typeMatches && searchMatches;
    });
  }, [activeDay, activeSessionType, activeTrack, query]);

  function clearFilters() {
    setActiveTrack("all");
    setActiveSessionType("");
    setQuery("");
  }

  return (
    <section className={styles.timelineSection} id="agenda">
      <div className={styles.container}>
        <div className={styles.timelineIntro}>
          <h2>Full 1-Day Master Schedule: <GradientText>Governed Clinical Practice.</GradientText></h2>
        </div>
        <div className={styles.dayTabs} role="tablist" aria-label="Agenda days">
          {dayTabs.map((day) => (
            <button
              className={activeDay === day.key ? styles.activeDay : ""}
              key={day.key}
              onClick={() => {
                setActiveDay(day.key);
                setActiveTrack("all");
              }}
              onPointerMove={setPointerGlow}
              type="button"
            >
              <span>{day.label}</span>
              <strong>25 March 2027 · Dubai, United Arab Emirates</strong>
              <small>Day 2 of the March Dubai Cluster · 08:00 – 18:30 GST</small>
            </button>
          ))}
        </div>

        {trackTabs.length > 1 ? (
          <div className={styles.trackTabs} aria-label="Agenda tracks">
            <button
              className={activeTrack === "all" ? styles.activeTrack : ""}
              onClick={() => setActiveTrack("all")}
              onPointerMove={setPointerGlow}
              type="button"
            >
              All Formats &amp; Stages
            </button>
            {trackTabs.map((track) => (
              <button
                className={activeTrack === track.id ? styles.activeTrack : ""}
                key={track.id}
                onClick={() => setActiveTrack(track.id)}
                onPointerMove={setPointerGlow}
                type="button"
              >
                {track.title}
              </button>
            ))}
          </div>
        ) : null}

        <div className={styles.agendaFilters} aria-label="Agenda filters">
          <label>
            <span>Search</span>
            <input
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search blocks, clinics, ambient voice, radiology, EMR..."
              type="search"
              value={query}
            />
          </label>

          <label>
            <span>Session Type</span>
            <select onChange={(event) => setActiveSessionType(event.target.value)} value={activeSessionType}>
              <option value="">All Blocks &amp; Formats</option>
              {sessionTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </label>

          {activeTrack !== "all" || activeSessionType || query ? (
            <button onClick={clearFilters} type="button">Clear</button>
          ) : null}
        </div>

        <div className={styles.timeline}>
          <div className={styles.timelineHead}>
            <span>Thursday 25 March 2027: Governed Clinical Practice</span>
            <span>Dubai, United Arab Emirates · 1-Day Executive Decision Forum</span>
          </div>

          {filteredItems.length === 0 ? (
            <p className={styles.loadingState}>No sessions match the selected filters.</p>
          ) : null}

          {filteredItems.map((session, index) => (
            <article
              className={styles.timelineRow}
              key={session.id}
              onPointerMove={setPointerGlow}
              style={{ "--row-index": index } as CSSProperties}
            >
              <time>{session.startTime}<span>{session.endTime}</span></time>
              <span className={styles.sessionType}>{session.typeTitle}</span>
              <div>
                <h3>{session.title}</h3>
                {session.description ? <p>{session.description}</p> : null}
                {session.location ? <small className={styles.locationText}>{session.location}</small> : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AgendaOverview() {
  return (
    <>
      <section
        className={`${styles.hero} pt-[200px]`}
        id="overview"
        style={{
          background:
            "linear-gradient(90deg, rgba(2, 7, 19, 0.88) 0%, rgba(2, 7, 19, 0.52) 42%, rgba(2, 7, 19, 0.08) 100%), url(/dubai/healthcare/images/agenda/Overview-hero.webp) center top / cover no-repeat",
        }}
      >
        <div className={styles.container}>
          <span className="inline-block font-mono text-[12px] uppercase tracking-[2.4px] text-[#C0F43C] font-bold mb-3">
            Curriculum Overview
          </span>
          <h1>From use case to <br /><GradientText>operating outcome.</GradientText></h1>
          <p className={styles.heroPara}>
            Departing entirely from conference speechifying, the forum is built on Trescon&apos;s six-part block methodology, systematically driving 300+ healthcare delegates from boardroom clinical priorities down to concrete vendor shortlists and procurement specifications.
          </p>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <div className={styles.split}>
          <div>
            <h2 className="!mb-6">Deployable, governed, and evidence-backed AI for <GradientText>clinical care and health operations.</GradientText></h2>
            <p className="mt-6 mb-4">
              World AI Show | Healthcare and Life Sciences | Dubai 2027 convenes 300+ pre-qualified hospital group CXOs, Chief Medical Officers, healthcare CIOs, clinical informatics directors, and health regulators (maintaining a minimum 70% buy-side institutional ratio).
            </p>
            <p className="m-0">
              Every block in the programme is engineered to move senior healthcare buyers from clinical governance and interoperability mandates across MOHAP, DHA, and DoH jurisdictions down to live EMR workflow validation and 2027 procurement decisions.
            </p>
          </div>
          <img src="/dubai/healthcare/images/agenda/About.webp" alt="Healthcare executives networking at World AI Show Dubai" loading="lazy" />
        </div>

        <div className={`${styles.container} mt-16`}>
          <div className={styles.formatGrid}>
            {formats.map((item) => (
              <article className={`${styles.formatCard} !p-7`} key={item.title}>
                <div className="w-12 h-12 rounded-2xl border border-[#18d4ff]/35 bg-gradient-to-br from-[#18d4ff]/15 to-[#C0F43C]/10 flex items-center justify-center text-[#18d4ff] shadow-[0_0_24px_rgba(24,212,255,0.18)]">
                  {item.icon}
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.formatsSection}>
        <div className={styles.container}>
          <h2>Trescon <GradientText>Six-Part Block Methodology.</GradientText></h2>
          <p>Engineered to drive healthcare buyers from boardroom priorities down to concrete procurement across one intensive day.</p>

          <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-sm:grid-cols-1 text-left">
            {sixPartBlocks.map((block) => (
              <div
                key={block.num}
                className="p-6 rounded-[18px] border border-[#18d4ff]/30 bg-[#050d20]/85 shadow-[0_18px_45px_rgba(0,0,0,0.35)]"
              >
                <span className="inline-block font-mono text-[11px] uppercase tracking-[1.8px] text-[#C0F43C] font-bold mb-2">
                  {block.num}
                </span>
                <h3 className="!m-0 !mb-2 !text-white !text-[19px] font-extrabold">
                  {block.title}
                </h3>
                <p className="!m-0 !text-white/75 !text-[14.5px] leading-relaxed">
                  {block.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta} id="cta">
        <div className={styles.ctaBox}>
          <h2>Be in the room where <GradientText>2027 healthcare AI architecture and clinical adoption get finalised.</GradientText></h2>
          <p>Apply for a complimentary Delegate Pass (strictly by invitation and qualification), enquire about commercial sponsorship, or apply to join the Dubai healthcare faculty.</p>
          <div className={styles.actions}>
            <a className={`${styles.button} ${styles.solid} group`} href="/dubai/healthcare/attend/delegate/">Apply for a Delegate Pass <ArrowSVG /></a>
            <a className={`${styles.button} ${styles.outline} group`} href="/dubai/healthcare/sponsorship-enquiry/">Enquire about sponsorship <ArrowSVG /></a>
          </div>
          <dl>
            <div><dt>Date</dt><dd>25 March 2027 · 1-Day Forum</dd></div>
            <div><dt>Location</dt><dd>Dubai, United Arab Emirates</dd></div>
            <div><dt>Cluster</dt><dd>Day 2 · March Dubai Cluster</dd></div>
          </dl>
        </div>
      </section>
    </>
  );
}

const visionPoints = [
  {
    title: "UAE Federal Law No. 2 of 2019 & Sovereign Health Data Residency",
    text: "UAE Federal Law No. 2 of 2019 requires all health and patient data originating in the UAE to remain stored and processed domestically unless a specific regulatory exemption is granted. The forum delivers actionable blueprints for domestic health cloud architecture, FHIR interoperability, and clinical governance across MOHAP (Riayati), DHA (Nabidh), and DoH (Malaffi) jurisdictions.",
    bullets: [] as string[],
  },
  {
    title: "Clinical Evidence Over Experimental Trials",
    text: "With the Middle East healthcare AI market projected to exceed USD 1.8B+ by 2027 (CAGR exceeding 35%), hospital groups are prioritising audited, clinically validated implementations:",
    bullets: [
      "45% of clinician hours consumed by documentation & EHR data entry (68% regional providers prioritising ambient voice)",
      ">60% faster reduction in time-to-treatment for critical acute events (ischemic stroke, ICH) with AI triage",
    ],
  },
  {
    title: "Day 2 of the March Dubai Cluster",
    text: "On 25 March 2027, World AI Show | Healthcare and Life Sciences | Dubai 2027 convenes 300+ senior healthcare leaders, paired back-to-back with World AI Show | BFSI | Dubai 2027 on 24 March 2027. Both forums share venue infrastructure while maintaining distinct P&Ls, dedicated sector agendas, and pre-qualified buyer audiences.",
    bullets: [] as string[],
  },
];

export function AgendaVision() {
  return (
    <>
      <section
        className={`${styles.hero} pt-[200px]`}
        id="the-2030-vision-hero"
        style={{
          background: "linear-gradient(90deg, rgba(2, 7, 19, 0.9) 0%, rgba(2, 7, 19, 0.56) 42%, rgba(2, 7, 19, 0.1) 100%), url(/dubai/healthcare/images/agenda/Vision-hero.webp) center top / cover no-repeat"
        }}
      >
        <div className={styles.container}>
          <span className="inline-block font-mono text-[12px] uppercase tracking-[2.4px] text-[#C0F43C] font-bold mb-3">
            Regulatory Alignment &amp; Regional Catalysts
          </span>
          <h1>Governed Clinical Practice: <br /><GradientText>UAE Health Data Sovereignty &amp; 2027 Catalysts.</GradientText></h1>
        </div>
      </section>

      <section className={styles.visionSection} id="the-2030-vision">
        <div className={styles.container}>
          <div className="grid grid-cols-[0.95fr_1.05fr] gap-12 items-stretch max-[980px]:grid-cols-1 mb-10">
            <div className="group relative rounded-[22px] overflow-hidden border border-[#20d5ff]/30 bg-[#040d1d] shadow-[0_0_42px_rgba(0,206,255,0.14)] min-h-[420px]">
              <img
                src="/dubai/healthcare/images/agenda/dubai/the-vision.jpg"
                alt="UAE and GCC Healthcare AI Mandate"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col gap-4 justify-between">
              {visionPoints.map((pt, idx) => (
                <article
                  key={pt.title}
                  className="group text-left p-6 rounded-[18px] border border-white/12 bg-[#040d1d]/75 transition-all duration-300 cursor-default hover:border-[#C0F43C]/65 hover:bg-gradient-to-br hover:from-[#C0F43C]/10 hover:via-[#06152d] hover:to-[#040d1d] hover:shadow-[0_12px_32px_rgba(192,244,60,0.12)] hover:-translate-y-0.5"
                >
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h3 className="m-0 font-extrabold text-[19px] leading-snug text-white transition-colors duration-300 group-hover:text-[#C0F43C]">
                      {pt.title}
                    </h3>
                    <span className="font-mono text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/60 transition-all duration-300 group-hover:bg-[#C0F43C] group-hover:text-[#06111F] group-hover:font-bold">
                      0{idx + 1}
                    </span>
                  </div>
                  <p className="m-0 text-white/75 text-[15px] leading-relaxed">
                    {pt.text}
                  </p>
                  {pt.bullets.length > 0 && (
                    <ul className="mt-3 mb-0 pl-0 list-none space-y-1.5">
                      {pt.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-white/85 text-[14.5px] font-medium">
                          <span className="text-[#C0F43C] font-bold">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>

          {/* Data Sovereignty Rule Callout */}
          <blockquote className="w-full m-0 p-9 md:px-12 rounded-[22px] border-[1.5px] border-[#18d4ff]/45 bg-gradient-to-br from-[#040b1b]/95 to-[#0a1834]/98 shadow-[0_0_35px_rgba(24,212,255,0.18),inset_0_0_25px_rgba(24,212,255,0.05)] text-[#f7f9ff] text-[clamp(19px,2.2vw,24px)] font-[750] leading-[1.45] text-center">
            &ldquo;68% of regional healthcare providers are prioritising ambient clinical voice and documentation automation as clinician EHR burden consumes 45% of working hours.&rdquo;
            <cite className="block mt-4 text-[11px] font-mono font-bold tracking-[2px] uppercase text-white/50 not-italic">
              &mdash; SOURCE: AMERICAN MEDICAL ASSOCIATION / REGIONAL DIGITAL HEALTH SURVEY
            </cite>
          </blockquote>
        </div>
      </section>

      <section className={styles.gatewaySection}>
        <div className={styles.container}>
          <h2 className="mb-12">
            Key Regional Catalysts{" "}
            <GradientText>Driving 2027 Healthcare Procurement.</GradientText>
          </h2>
          <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
            {regionalCatalysts.map(([title, text, icon], index) => (
              <IconCard icon={icon} index={index} key={title} text={text} title={title} />
            ))}
          </div>
        </div>
      </section>

      <AgendaSection
        title={<>Four operational mandates. <GradientText>One day.</GradientText></>}
        subtitle="Specialised Curriculum"
        description=""
        showSixBlocks={false}
      />
    </>
  );
}

export function AgendaLiveTimeline() {
  return (
    <>
      <section
        className={`${styles.hero} pt-[200px]`}
        id="agenda-timeline-hero"
        style={{
          background:
            "linear-gradient(90deg, rgba(2, 7, 19, 0.88) 0%, rgba(2, 7, 19, 0.52) 42%, rgba(2, 7, 19, 0.08) 100%), url(/dubai/healthcare/images/agenda/Agenda-hero.webp) center top / cover no-repeat",
        }}
      >
        <div className={styles.container}>
          <h1><GradientText>Full 1-Day Master Schedule</GradientText></h1>
        </div>
      </section>
      <AgendaTabs />
      <section className={styles.finalCta} id="cta">
        <div className={styles.ctaBox}>
          <h2>Be in the room where <GradientText>2027 healthcare AI architecture and clinical adoption get finalised.</GradientText></h2>
          <p>Apply for a complimentary Delegate Pass (strictly by invitation and qualification), enquire about commercial sponsorship, or apply to join the Dubai healthcare faculty.</p>
          <div className={styles.actions}>
            <a className={`${styles.button} ${styles.solid} group`} href="/dubai/healthcare/sponsorship-enquiry/">Enquire about sponsorship <ArrowSVG /></a>
            <a className={`${styles.button} ${styles.outline} group`} href="/dubai/healthcare/speaker-enquiry/">Apply to speak <ArrowSVG /></a>
          </div>
          <dl>
            <div><dt>Date</dt><dd>25 March 2027 · 1-Day Forum</dd></div>
            <div><dt>Location</dt><dd>Dubai, United Arab Emirates</dd></div>
            <div><dt>Cluster</dt><dd>Day 2 · March Dubai Cluster</dd></div>
          </dl>
        </div>
      </section>
    </>
  );
}

export function AgendaThemes() {
  return (
    <>
      <section
        className={`${styles.hero} pt-[200px]`}
        id="agenda-themes-hero"
        style={{
          background: "linear-gradient(90deg, rgba(2, 7, 19, 0.88) 0%, rgba(2, 7, 19, 0.48) 42%, rgba(2, 7, 19, 0.05) 100%), url(/dubai/healthcare/images/agenda/Themes-hero.webp) center top / cover no-repeat"
        }}
      >
        <div className={styles.container}>
          <h1>Four operational mandates. <br /><GradientText>One day.</GradientText></h1>
          <p className={styles.heroPara}>
            Centred around ambient clinical documentation, diagnostic imaging triage, health system capacity operations, and sovereign health data interoperability.
          </p>
        </div>
      </section>
      <AgendaSection
        title={<>The Four Sector <GradientText>Content Pillars</GradientText></>}
        subtitle="Specialised Curriculum"
        description="Click any content pillar below to inspect its full operational scope, clinical format, and technical integration points."
        showSixBlocks={true}
      />
      <section className="relative pb-[104px] bg-[#051224]/70 max-sm:pb-[72px]">
        <div className={styles.container}>
          <div className={styles.brochureCta}>
            <div>
              <h3>Request the Dubai 2027 Commercial Partnership Prospectus.</h3>
              <p>Explore 20-minute plenary keynotes, exclusive leadership of 75-minute workshop clinics, standardised 6 sqm, 9 sqm, and 12 sqm concourse booths, and private 15-buyer CXO closed-door boardrooms.</p>
            </div>
            <a
              className={`${styles.button} ${styles.solid} group`}
              href="/dubai/healthcare/sponsorship-enquiry/"
              style={{ minWidth: "220px" }}
            >
              Enquire about sponsorship
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 object-contain transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" style={{ marginLeft: "8px" }}>
                <path d="M3.33334 8H12.6667" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.66666 4L12.6667 8L8.66666 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section className={styles.finalCta} id="cta">
        <div className={styles.ctaBox}>
          <h2>Be in the room where <GradientText>2027 healthcare AI architecture and clinical adoption get finalised.</GradientText></h2>
          <p>Apply for a complimentary Delegate Pass (strictly by invitation and qualification), enquire about commercial sponsorship, or apply to join the Dubai healthcare faculty.</p>
          <div className={styles.actions}>
            <a className={`${styles.button} ${styles.solid} group`} href="/dubai/healthcare/sponsorship-enquiry/">Enquire about sponsorship <ArrowSVG /></a>
            <a className={`${styles.button} ${styles.outline} group`} href="/dubai/healthcare/speaker-enquiry/">Apply to speak <ArrowSVG /></a>
          </div>
          <dl>
            <div><dt>Date</dt><dd>25 March 2027 · 1-Day Forum</dd></div>
            <div><dt>Location</dt><dd>Dubai, United Arab Emirates</dd></div>
            <div><dt>Cluster</dt><dd>Day 2 · March Dubai Cluster</dd></div>
          </dl>
        </div>
      </section>
    </>
  );
}

export function AgendaCallForSpeakers() {
  return (
    <>
      <section
        className={`${styles.hero} pt-[200px]`}
        id="agenda-speakers-hero"
        style={{
          background: "linear-gradient(90deg, rgba(2, 7, 19, 0.88) 0%, rgba(2, 7, 19, 0.52) 42%, rgba(2, 7, 19, 0.08) 100%), url(/dubai/healthcare/images/agenda/Call-speakers-bg.webp) center top / cover no-repeat",
          alignItems: "center",
          minHeight: "750px",
          marginTop: "0",
          display: "flex"
        }}
      >
        <div className={styles.container}>
          <span className="inline-block font-mono text-[12px] uppercase tracking-[2.4px] text-[#C0F43C] font-bold mb-3">
            Call for Clinical &amp; Operational Healthcare Faculty
          </span>
          <h1 className="text-white font-[850] tracking-[-2px] leading-[1.06] text-[clamp(40px,5.6vw,68px)] w-full">
            If you have deployed AI into live hospital workflows,{" "}
            <GradientText>we want you on stage</GradientText>
          </h1>
        </div>
      </section>
      <SpeakerCallToStage />
      <SpeakersSection
        heading={
          <>
            A Look Back at{" "}
            <GradientText>Past World AI Show Speakers</GradientText>
          </>
        }
      />
    </>
  );
}

export function AgendaPage() {
  return (
    <>
      <main className={`${styles.page} page-agenda`}>
        <Header activeItem="Agenda" subNavItems={subNav} activeSubNavItem="Overview" />
        <AgendaOverview />
      </main>
      <FooterSection />
    </>
  );
}
