"use client";

import { useState } from "react";

export function AttendFaq({ faqs }: { faqs: string[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="w-full mx-auto mt-12 p-6 border border-[#0069B8]/52 rounded-[24px] bg-[#0D1B2E]">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div className="border-b border-[#0069B8]/25 last:border-b-0" key={faq}>
            <button
              aria-controls={`attend-faq-${index}`}
              aria-expanded={isOpen}
              className="w-full min-h-[68px] py-4 px-6 grid grid-cols-[1fr_24px] items-center gap-5 border-0 cursor-pointer text-[#F7F9FC] bg-transparent text-left hover:text-[#009EAD] transition-colors duration-180 max-sm:px-3"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              type="button"
            >
              <strong className="text-[18px] font-extrabold max-sm:text-[16px]">
                {faq}
              </strong>
              <span 
                className={`text-white/70 font-bold text-center block transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-[#F15928]" : ""
                }`}
                aria-hidden="true"
              >
                ▼
              </span>
            </button>
            <div
              className={`grid transition-all duration-200 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100 py-3" : "grid-rows-[0fr] opacity-0"
              }`}
              id={`attend-faq-${index}`}
            >
              <div className="overflow-hidden">
                <p className="w-full px-6 pb-4 text-[#F7F9FC]/88 text-[15px] leading-relaxed max-sm:px-3">
                  World AI Show | Healthcare and Life Sciences | Dubai 2027 (25 March 2027 · Dubai, UAE) is built for senior hospital, clinical informatics, genomics, payer, and regulatory decision-makers. Registration, sponsorship, and master schedule details are managed by the official Trescon team.
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
