import { partners } from "@/lib/content";

export default function PartnersMarquee() {
  return (
    <div className="border-t border-b border-[#1d1f20]/15 py-7">
      <div className="px-5 md:px-[60px] mb-4">
        <span className="text-xs tracking-[0.24em] uppercase text-[#98989b]">Selected clients</span>
      </div>
      <div
        className="relative overflow-hidden"
        style={{
          maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee">
          {[...partners, ...partners].map((p, i) => (
            <span
              key={`${p}-${i}`}
              className="whitespace-nowrap px-8 font-condensed text-2xl font-semibold uppercase tracking-[0.02em] text-[#3a3a3d]/60"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
