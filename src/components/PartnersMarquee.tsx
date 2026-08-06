import { partners } from "@/lib/content";

export default function PartnersMarquee() {
  return (
    <div className="border-y border-line bg-white py-10">
      <div className="mx-auto max-w-[1320px] px-5 md:px-10">
        <div className="mb-5 text-center">
          <span className="eyebrow">Selected clients</span>
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
                className="whitespace-nowrap px-8 text-xl font-semibold text-navy/40"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
