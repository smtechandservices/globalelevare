"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import UaeMap from "./UaeMap";
import { emirates, site, type EmirateKey } from "@/lib/content";

export default function JurisdictionMap() {
  const [sel, setSel] = useState<EmirateKey>("dubai");
  const active = emirates.find((e) => e.key === sel) ?? emirates[0];

  return (
    <div
      id="jurisdictions"
      className="relative isolate overflow-hidden px-5 py-20 md:px-10 md:py-28 scroll-mt-20"
      style={{
        background:
          "radial-gradient(58% 80% at 10% 0, #c11f1f0d, transparent 60%), radial-gradient(55% 75% at 94% 4%, #3f7ea01a, transparent 60%), linear-gradient(#f6f9fd, #eaf1fa)",
      }}
    >
      <div className="relative mx-auto max-w-[1320px]">
        <SectionHeading
          eyebrow="Site plan"
          title="Pick a jurisdiction"
          intro="The jurisdiction decides your visa quota, your banking odds and your renewal bill. Select a region to see the zones we file in and what they start at."
        />

        <div className="mb-6 flex flex-wrap gap-2">
          {emirates.map((em) => {
            const isSel = em.key === sel;
            return (
              <button
                key={em.key}
                type="button"
                onClick={() => setSel(em.key)}
                aria-pressed={isSel}
                className={`rounded-full border px-4 py-2 text-[13px] font-semibold transition-colors ${
                  isSel
                    ? "border-navy bg-navy text-white"
                    : "border-line bg-white text-navy hover:border-accent hover:text-accent"
                }`}
              >
                {em.name}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="flat-card rounded-t-3xl p-4 md:p-6">
            <UaeMap selected={sel} onSelect={setSel} />
            <div className="mt-4 flex justify-between border-t border-line pt-3 text-[11px] uppercase tracking-[0.12em] text-text-muted">
              <span>Click a region</span>
              <span>Indicative territories · scale approx.</span>
            </div>
          </div>

          <div className="glass-card-light rounded-t-3xl p-6 md:p-7">
            <span className="eyebrow">Selected plot</span>
            <h3 className="mt-1 mb-1.5 text-[30px] font-bold leading-tight text-navy">
              {active.name}
            </h3>
            <p className="mb-4 text-[14.5px] leading-relaxed text-text-muted">{active.blurb}</p>
            <div className="flex flex-col">
              {active.zones.map((z) => (
                <div key={z.name} className="flex justify-between gap-3.5 border-t border-line py-3">
                  <div>
                    <div className="text-[15px] font-semibold text-navy">{z.name}</div>
                    <div className="text-[12px] text-text-muted">{z.note}</div>
                  </div>
                  <div className="text-right whitespace-nowrap">
                    <div className="text-[14px] font-semibold text-accent">{z.price}</div>
                    <div className="text-[10px] uppercase tracking-[0.1em] text-text-muted">{z.kind}</div>
                  </div>
                </div>
              ))}
            </div>
            <a href={site.waLink} className="btn btn-accent mt-6 w-full">
              Ask about {active.name}
            </a>
            <p className="mt-3 text-[11.5px] text-text-muted">
              Indicative government + service totals, 1-year licence. Written quote confirms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
