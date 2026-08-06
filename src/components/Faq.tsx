"use client";

import { useState } from "react";
import { faqs, site } from "@/lib/content";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div className="bg-[linear-gradient(180deg,var(--color-bg-soft),#fff)] px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-[110px] lg:self-start">
            <span className="eyebrow mb-3 block">Frequently asked</span>
            <h2 className="mb-4 text-[28px] font-bold leading-[1.1] sm:text-[34px] lg:text-[42px]">
              Questions founders ask before they sign
            </h2>
            <p className="mb-5 max-w-[42ch] text-[14.5px] leading-relaxed text-text-muted">
              Answered plainly, without the upsell. Anything else, ask on WhatsApp and get a
              reply within the hour.
            </p>
            <a
              href={site.waLink}
              className="inline-flex items-center gap-2 border-b-2 border-accent text-[13px] font-bold uppercase tracking-[0.06em] text-accent"
            >
              Ask us a question →
            </a>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={f.q}
                  className={`flat-card overflow-hidden rounded-t-2xl transition-colors ${
                    isOpen ? "border-accent/40" : ""
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-5 px-6 py-5 text-left"
                  >
                    <span className="w-6 text-[12px] font-bold text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15.5px] font-bold text-navy">{f.q}</span>
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-t-[10px] bg-accent-pale text-accent transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <Chevron />
                    </span>
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 pl-[52px] text-[14.5px] leading-relaxed text-text-muted">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function Chevron() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
