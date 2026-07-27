import { why } from "@/lib/content";

export default function Tolerances() {
  return (
    <div
      id="about"
      className="grid grid-cols-1 gap-8 px-5 md:px-[60px] py-10 border-t border-b border-[#1d1f20]/15 scroll-mt-20"
    >
      <div>
        <h2 className="font-condensed font-semibold text-4xl md:text-[46px] uppercase leading-none mb-3.5">
          Tolerances
          <br />
          we hold
        </h2>
        <p className="text-[#424244]">
          Formation is the easy half. What breaks a young company is the second year — a lapsed
          establishment card, a missed corporate tax registration, a visa renewal nobody flagged.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {why.map((w) => (
          <div key={w.n} className="border-b border-l border-[#1d1f20]/10 p-5">
            <div className="text-xs tracking-[0.24em] text-accent tabular-nums">{w.n}</div>
            <h3 className="font-condensed font-semibold text-xl uppercase mt-1.5 mb-1">{w.title}</h3>
            <p className="text-[15px] text-[#424244] m-0">{w.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
