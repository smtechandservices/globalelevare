import SectionHeading from "./SectionHeading";
import { steps } from "@/lib/content";

export default function Process() {
  return (
    <div className="px-5 md:px-[60px] pt-8 pb-10">
      <SectionHeading title="Sequence of works" sheet="Sheet 03 / Process" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((p) => (
          <div key={p.n} className="border-l border-[#1d1f20]/15 px-4 pb-4 sm:pb-0">
            <div className="font-condensed font-semibold text-4xl text-accent tabular-nums leading-none">
              {p.n}
            </div>
            <h3 className="font-condensed font-semibold text-xl uppercase leading-tight mt-2.5 mb-1.5">
              {p.title}
            </h3>
            <p className="text-sm text-[#424244] mb-1.5">{p.body}</p>
            <div className="text-[11px] tracking-[0.12em] uppercase text-[#98989b] tabular-nums">
              {p.when}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
