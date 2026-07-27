import CornerMarks from "./CornerMarks";
import SectionHeading from "./SectionHeading";
import { services } from "@/lib/content";

export default function Services() {
  return (
    <div id="services" className="px-5 md:px-[60px] pt-14 pb-10 scroll-mt-20">
      <SectionHeading title="Scope of work" sheet="Sheet 01 / Services" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((v) => (
          <div
            key={v.n}
            className="relative border border-[#1d1f20]/15 p-5 transition-colors hover:border-accent"
          >
            <div className="text-xs tracking-[0.24em] text-accent tabular-nums mb-2.5">{v.n}</div>
            <h3 className="font-condensed font-semibold text-2xl uppercase leading-[1.05] mb-1.5">
              {v.title}
            </h3>
            <p className="text-[15px] text-[#424244] mb-3.5">{v.body}</p>
            <div className="border-t border-[#1d1f20]/15 pt-2.5 text-[13px] tracking-[0.06em] uppercase text-accent-strong tabular-nums">
              {v.price}
            </div>
            <CornerMarks />
          </div>
        ))}
      </div>
      <p className="mt-5 text-sm text-[#7a7a7d]">
        Also: trademark &amp; IP registration from AED 6,500 · corporate tax registration · will
        drafting for expatriates · liquidation and licence cancellation.
      </p>
    </div>
  );
}
