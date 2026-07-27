import { stats } from "@/lib/content";

export default function StatsBar() {
  return (
    <div className="bg-dark px-8 text-[#f5f5f8] grid grid-cols-2 md:grid-cols-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="px-5 md:px-7 py-7 border-[#f5f5f8]/15 tabular-nums md:border-l md:first:border-l-0"
        >
          <div className="font-condensed font-semibold text-4xl md:text-[52px] leading-none text-dark-tint-1">
            {s.n}
          </div>
          <div className="text-xs tracking-[0.16em] uppercase text-dark-tint-2 mt-1.5">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
