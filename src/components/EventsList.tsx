import FadeIn from "./FadeIn";
import { events, site, type EventItem } from "@/lib/content";

function formatDate(iso: string) {
  const d = new Date(iso);
  return {
    day: d.toLocaleDateString("en-GB", { day: "2-digit" }),
    month: d.toLocaleDateString("en-GB", { month: "short" }).toUpperCase(),
    full: d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" }),
  };
}

const categoryTone: Record<string, string> = {
  Webinar: "bg-accent-pale text-accent-deep",
  Workshop: "bg-sky-light text-sky-deep",
  "In-person": "bg-[#fff4d9] text-[#8a6400]",
};

function EventCard({ e, delay, isPast }: { e: EventItem; delay: number; isPast: boolean }) {
  const d = formatDate(e.date);
  const waHref = `${site.waLink}?text=${encodeURIComponent(
    `Hi, I'd like to reserve a seat for "${e.title}" on ${d.full}.`
  )}`;

  return (
    <FadeIn delay={delay} className="h-full">
      <div className={`flat-card flex h-full flex-col gap-5 rounded-t-2xl p-5 md:p-6 ${isPast ? "opacity-80" : ""}`}>
        <div className="flex items-start gap-4">
          <div className="flex shrink-0 flex-col items-center gap-2">
            <div
              className={`flex flex-col items-center justify-center rounded-t-xl px-4 py-3 text-white ${
                isPast ? "bg-navy/60" : "bg-navy"
              }`}
            >
              <span className="text-[24px] font-extrabold leading-none">{d.day}</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-accent-bright">
                {d.month}
              </span>
            </div>
            <span
              className={`whitespace-nowrap rounded-full px-2.5 py-1 text-[9.5px] font-bold uppercase tracking-[0.06em] ${
                categoryTone[e.category] ?? "bg-bg-soft text-text-muted"
              }`}
            >
              {e.category}
            </span>
          </div>

          <div className="flex-1">
            <h3 className="text-[16.5px] font-bold leading-snug text-navy md:text-[18px] mt-2">
              {e.title}
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-text-muted">{e.description}</p>
          </div>
        </div>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
          <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[12px] text-text-muted">
            <span className="inline-flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 3" />
              </svg>
              {e.time}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s7-6.5 7-11.5a7 7 0 1 0-14 0C5 14.5 12 21 12 21Z" />
                <circle cx="12" cy="9.5" r="2.4" />
              </svg>
              {e.location}
            </span>
          </div>

          {isPast ? (
            <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-navy">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
                <circle cx="10" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              {e.attendees}+ people attended
            </span>
          ) : (
            <a
              href={waHref}
              target="_blank"
              rel="noreferrer"
              className="btn btn-line min-h-[38px]! py-1.5! px-4! text-[13px]"
            >
              Reserve a seat
            </a>
          )}
        </div>
      </div>
    </FadeIn>
  );
}

export default function EventsList() {
  const today = new Date();
  const upcoming = events
    .filter((e) => new Date(e.date) >= today)
    .sort((a, b) => (a.date < b.date ? -1 : 1));
  const past = events
    .filter((e) => new Date(e.date) < today)
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return (
    <div className="flex flex-col gap-14">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {upcoming.map((e, i) => (
          <EventCard key={e.slug} e={e} delay={(i % 4) * 70} isPast={false} />
        ))}
      </div>

      {past.length > 0 && (
        <div>
          <div className="mb-6 flex items-center gap-4">
            <span className="eyebrow whitespace-nowrap">Past events</span>
            <span className="h-px flex-1 bg-line" />
          </div>
          <div className="flex gap-5 overflow-x-auto pb-2 [scrollbar-width:none]">
            {past.map((e, i) => (
              <div key={e.slug} className="w-[320px] shrink-0 sm:w-[460px]">
                <EventCard e={e} delay={(i % 4) * 70} isPast />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
