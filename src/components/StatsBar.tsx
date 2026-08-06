import { stats } from "@/lib/content";

export default function StatsBar() {
  return (
    <div className="bg-white px-5 py-16 md:px-10 md:py-20">
      <div className="mx-auto grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flat-card rounded-t-2xl px-5 py-8 text-center md:px-6 md:py-9"
          >
            <div className="gradient-num text-[36px] font-extrabold leading-none md:text-[52px]">
              {s.n}
            </div>
            <div className="mt-2.5 text-[11px] font-bold uppercase tracking-[0.14em] text-accent md:text-[12px]">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
