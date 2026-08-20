import { events } from "@/lib/content";

function formatDate(iso: string) {
  const d = new Date(iso);
  return {
    day: d.toLocaleDateString("en-GB", { day: "2-digit" }),
    month: d.toLocaleDateString("en-GB", { month: "short" }).toUpperCase(),
  };
}

const categoryTone: Record<string, string> = {
  Webinar: "bg-accent-pale text-accent-deep",
  Workshop: "bg-sky-light text-sky-deep",
  "In-person": "bg-[#fff4d9] text-[#8a6400]",
};

export default function EventsMarquee() {
  return (
    <div
      className="relative overflow-hidden -mt-8 px-5 md:px-10"
      style={{
        maskImage: "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
      }}
    >
      <div className="flex w-max animate-marquee-slow-reverse gap-5">
        {[...events, ...events].map((e, i) => {
          const d = formatDate(e.date);
          return (
            <a
              key={`${e.slug}-${i}`}
              href="/blogs#events"
              className="flat-card flex w-[300px] shrink-0 items-center gap-4 rounded-t-2xl bg-white px-2 pt-2 transition-colors hover:border-accent"
            >
              <div className="flex shrink-0 flex-col items-center justify-center rounded-t-lg bg-navy px-3.5 py-2.5 text-white">
                <span className="text-[20px] font-extrabold leading-none">{d.day}</span>
                <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-accent-bright">
                  {d.month}
                </span>
                <span
                  className={`my-1 inline-block px-2 py-0.5 text-[9px] uppercase tracking-[0.06em]}`}
                >
                  {e.category}
                </span>
              </div>
              <div className="min-w-0">
                <div className="line-clamp-2 text-[13.5px] font-bold leading-snug text-navy">
                  {e.title}
                </div>
                <div className="mt-1 truncate text-[11px] text-text-muted">
                  {e.time} · {e.location}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
