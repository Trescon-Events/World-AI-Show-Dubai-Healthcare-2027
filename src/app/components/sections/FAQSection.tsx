"use client";

import { useState } from "react";
import { GradientText } from "../Shared";

const faqs = [
  {
    q: "What is World AI Show | Healthcare and Life Sciences | Dubai 2027?",
    a: "World AI Show | Healthcare and Life Sciences | Dubai 2027 is a 1-Day Executive Decision Forum taking place on 25 March 2027 in Dubai, United Arab Emirates. It convenes 300+ pre-qualified hospital group CXOs, Chief Medical Officers, healthcare CIOs, clinical informatics leaders, and health regulators (maintaining a minimum 70% buy-side institutional ratio) to advance deployable, governed, and evidence-backed artificial intelligence for clinical care and health operations.",
  },
  {
    q: "How does this forum fit into the March Dubai Cluster?",
    a: "The forum is positioned as Day 2 of the March Dubai Cluster, paired back-to-back with World AI Show | BFSI | Dubai 2027 on 24 March 2027. Both forums share venue infrastructure while maintaining distinct P&Ls, dedicated sector agendas, and pre-qualified buyer audiences.",
  },
  {
    q: "Who qualifies for a complimentary Delegate Pass?",
    a: "Senior healthcare executives, hospital operators, clinical leaders, health authority officials, and health payers attend by invitation on a complimentary Delegate Pass, subject to qualification against an active operational mandate. Business Passes provide paid commercial access for healthtech providers, software vendors, and consultancies outside the invitation criteria, with registration numbers strictly capped to protect room composition.",
  },
  {
    q: "How does UAE Federal Law No. 2 of 2019 govern health data sovereignty and cloud AI hosting?",
    a: "UAE Federal Law No. 2 of 2019 requires all health and patient data originating in the UAE to remain stored and processed domestically unless a specific regulatory exemption is granted. The curriculum addresses sovereign clinical cloud architecture, FHIR interoperability, and compliance across Nabidh (DHA), Malaffi (DoH), and Riayati (MOHAP) health information exchanges.",
  },
  {
    q: "What are the four core sector content pillars?",
    a: "The 1-day curriculum is structured around four operational mandates: (01) Ambient Intelligence, Clinical Documentation & Workforce Relief; (02) Diagnostic Imaging Triage, Pathology & Time-Critical Care; (03) Health System Operations, Capacity & Supply Chain Resilience; and (04) Health Data Interoperability, Sovereign Governance & Life Sciences.",
  },
  {
    q: "What sponsorship formats and booth sizes are available?",
    a: "Commercial partnerships are structured around 20-minute plenary keynotes, exclusive leadership of 75-minute workshop clinics, standardised 6 sqm, 9 sqm, and 12 sqm concourse exhibition booths, and private 15-buyer CXO closed-door boardrooms.",
  },
  {
    q: "What is the CXO Closed-Door Boardroom format?",
    a: "The CXO Closed-Door Boardroom is an exclusive 60-minute curated session hosting 15 pre-qualified wishlist hospital leaders and clinical decision-makers, complete with an opening address and dedicated executive moderation.",
  },
  {
    q: "Who organises the World AI Show Series?",
    a: "World AI Show | Healthcare and Life Sciences | Dubai 2027 is organised by Trescon, bringing an unrivalled international pedigree across 48 completed global World AI Show editions on four continents, convening 42,000+ C-level executives and 2,600+ expert speakers.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-[104px] pt-[104px] bg-gradient-to-b from-[#051224]/70 to-[#020a18]/96 max-sm:py-[72px]" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="w-[min(1114px,calc(100%-48px))] mx-auto max-sm:w-[min(100%-32px,1114px)]">
        {/* Title */}
        <h2 className="text-center font-[850] text-white leading-[1.04] tracking-[-2px] text-[clamp(42px,5.2vw,60px)]">
          Frequently asked <GradientText>questions.</GradientText>
        </h2>

        {/* Semantic Accordion List */}
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="max-w-[976px] mx-auto mt-12 p-[26px_16px] border border-white/8 rounded-[24px] bg-[#040a19]/50 shadow-[0_20px_60px_rgba(0,0,0,0.1)] max-sm:p-3"
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <details
                key={faq.q}
                open={isOpen}
                className="border-b border-white/36 last:border-b-0 group"
              >
                <summary
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenIndex(isOpen ? null : index);
                  }}
                  className="grid grid-cols-[58px_1fr_32px] items-center gap-5 min-h-[68px] px-6 cursor-pointer list-none select-none max-sm:grid-cols-[46px_1fr_18px] max-sm:gap-3 max-sm:px-1.5 [&::-webkit-details-marker]:hidden"
                >
                  <span className="text-white/68 font-mono text-[13px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <strong className="text-white font-extrabold text-[18px] group-open:text-cyan transition-colors max-sm:text-[16px] leading-snug">
                    {faq.q}
                  </strong>
                  <i className="text-white/70 font-normal not-italic text-right text-xl transition-transform group-open:rotate-45 block">
                    +
                  </i>
                </summary>
                <p className="max-w-[760px] mx-auto mt-[-6px] mr-[76px] mb-6 ml-[78px] text-muted text-[15px] leading-relaxed max-sm:mx-1.5 max-sm:ml-16 max-sm:mb-[22px]">
                  {faq.a}
                </p>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
