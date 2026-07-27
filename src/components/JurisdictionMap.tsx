"use client";

import { useState } from "react";
import CornerMarks from "./CornerMarks";
import SectionHeading from "./SectionHeading";
import UaeMap from "./UaeMap";
import { emirates, site, type EmirateKey } from "@/lib/content";

export default function JurisdictionMap() {
  const [sel, setSel] = useState<EmirateKey>("dubai");
  const active = emirates.find((e) => e.key === sel) ?? emirates[0];

  return (
    <div id="jurisdictions" className="px-5 md:px-[60px] pt-10 pb-14 scroll-mt-20">
      <SectionHeading title="Site plan, pick a jurisdiction" sheet="Sheet 02 / 7 emirates · 40+ zones" />
      <p className="max-w-[72ch] text-[#424244] mb-7">
        The jurisdiction decides your visa quota, your banking odds and your renewal bill. Select a
        region to see the zones we file in and what they start at.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-7 items-start">
        <div className="relative border border-[#1d1f20]/15 p-2.5">
          <UaeMap selected={sel} onSelect={setSel} />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 mt-2.5 border-t border-[#1d1f20]/15 pt-2.5">
            {emirates.map((em) => {
              const isSel = em.key === sel;
              return (
                <button
                  key={em.key}
                  type="button"
                  onClick={() => setSel(em.key)}
                  aria-pressed={isSel}
                  className={[
                    "flex items-center gap-2 text-left px-2 py-1.5 border-l transition-colors",
                    isSel ? "border-accent bg-accent-tint" : "border-[#1d1f20]/15 hover:bg-accent-tint/60",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "flex items-center justify-center w-5 h-5 text-[10px] font-semibold shrink-0",
                      isSel ? "bg-dark text-[#f5f5f8]" : "bg-accent text-[#f5f5f8]",
                    ].join(" ")}
                  >
                    {em.n}
                  </span>
                  <span
                    className={[
                      "font-condensed font-semibold text-xs uppercase tracking-[0.03em] leading-tight",
                      isSel ? "text-dark" : "text-[#424244]",
                    ].join(" ")}
                  >
                    {em.name}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="flex justify-between border-t border-[#1d1f20]/15 mt-1.5 pt-1.5 text-[11px] tracking-[0.16em] uppercase text-[#98989b]">
            <span>Click a region</span>
            <span>Indicative territories · scale approx.</span>
          </div>
          <CornerMarks />
        </div>

        <div className="relative border border-accent p-5">
          <div className="text-xs tracking-[0.24em] uppercase text-accent-strong">Selected plot</div>
          <h3 className="font-condensed font-semibold text-[38px] uppercase leading-tight mt-1 mb-1.5">
            {active.name}
          </h3>
          <p className="text-[15px] text-[#424244] mb-3.5">{active.blurb}</p>
          <div className="flex flex-col">
            {active.zones.map((z) => (
              <div
                key={z.name}
                className="flex justify-between gap-3.5 border-t border-[#1d1f20]/15 py-2.5"
              >
                <div>
                  <div className="font-condensed font-semibold text-lg uppercase">{z.name}</div>
                  <div className="text-xs text-[#7a7a7d]">{z.note}</div>
                </div>
                <div className="text-right whitespace-nowrap tabular-nums">
                  <div className="text-[15px] text-accent-strong">{z.price}</div>
                  <div className="text-[10px] tracking-[0.12em] uppercase text-[#98989b]">
                    {z.kind}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a
            href={site.waLink}
            className="brand-gradient-btn block text-center mt-5 text-[#f5f5f8] px-3.5 py-2.5 font-condensed text-lg tracking-[0.08em] uppercase"
          >
            Ask about {active.name}
          </a>
          <p className="mt-2.5 text-[11px] text-[#98989b]">
            Indicative government + service totals, 1-year licence. Written quote confirms.
          </p>
          <CornerMarks inset={6} />
        </div>
      </div>
    </div>
  );
}
