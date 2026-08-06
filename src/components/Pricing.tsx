import SectionHeading from "./SectionHeading";
import { packages, site } from "@/lib/content";

export default function Pricing() {
  return (
    <div id="packages" className="bg-white px-5 md:px-10 py-20 scroll-mt-20">
      <div className="mx-auto">
        <SectionHeading
          eyebrow="Specification & price"
          title="All-in packages, AED, first year"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-center">
          {packages.map((k) => (
            <div
              key={k.tier}
              className={[
                "relative flex flex-col rounded-t-3xl p-7 transition-transform duration-300",
                k.highlight
                  ? "z-10 border-2 border-accent bg-accent-pale shadow-xl md:scale-105 hover:scale-108"
                  : "flat-card hover:scale-102",
              ].join(" ")}
            >
              <div className="flex items-baseline justify-between">
                <span className="eyebrow">{k.tier}</span>
                {k.flag && (
                  <span className="rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-white">
                    {k.flag}
                  </span>
                )}
              </div>
              <div className="mt-5 text-[11px] uppercase tracking-[0.16em] text-text-muted">
                Starting from
              </div>
              <div className="mb-1 text-[42px] font-extrabold leading-tight text-navy">
                {k.price}
              </div>
              <div className="mb-5 text-[14px] text-text-muted">{k.zone}</div>
              <div className="flex flex-1 flex-col gap-2 border-t border-line pt-4">
                {k.lines.map((l) => (
                  <div key={l} className="flex items-start gap-2 text-[14.5px] text-text">
                    <span className="mt-0.5 text-accent">✓</span>
                    {l}
                  </div>
                ))}
              </div>
              <a href={site.waLink} className="btn btn-accent mt-6 w-full">
                Get this quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
