import CornerMarks from "./CornerMarks";
import SectionHeading from "./SectionHeading";
import { packages, site } from "@/lib/content";

export default function Pricing() {
  return (
    <div id="packages" className="px-5 md:px-[60px] pt-12 pb-14 scroll-mt-20">
      <SectionHeading title="Specification & price" sheet="All-in, AED, first year" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {packages.map((k) => (
          <div
            key={k.tier}
            className={[
              "relative p-5 border",
              k.highlight ? "border-accent bg-accent-tint" : "border-[#1d1f20]/15",
            ].join(" ")}
          >
            <div className="flex justify-between items-baseline">
              <div className="text-xs tracking-[0.24em] uppercase text-accent-strong">{k.tier}</div>
              {k.flag && (
                <div className="text-[11px] tracking-[0.16em] uppercase text-brand-gold-text font-semibold">{k.flag}</div>
              )}
            </div>
            <div className="text-[11px] tracking-[0.2em] uppercase text-[#7a7a7d] mt-4 -mb-3 ms-1">Starting from</div>
            <div className="font-condensed font-semibold text-5xl leading-tight mt-1 mb-1 tabular-nums">
              {k.price}
            </div>
            <div className="text-sm text-[#7a7a7d] mb-3.5">{k.zone}</div>
            <div className="flex flex-col gap-1.5 border-t border-[#1d1f20]/15 pt-3.5">
              {k.lines.map((l) => (
                <div key={l} className="text-[15px] text-[#424244]">
                  — {l}
                </div>
              ))}
            </div>
            <a
              href={site.waLink}
              className="brand-gradient-btn block text-center mt-5 text-[#f5f5f8] px-3.5 py-2.5 font-condensed text-lg tracking-[0.08em] uppercase"
            >
              Get this quote
            </a>
            <CornerMarks />
          </div>
        ))}
      </div>
    </div>
  );
}
