import SectionHeading from "./SectionHeading";
import { services } from "@/lib/content";

const icons = [
  // mainland
  <svg key="mainland" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 21V8l5-3 5 3v13" />
    <path d="M14 21V11l6-2v12" />
    <path d="M2 21h20" />
  </svg>,
  // freezone
  <svg key="freezone" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3c2.5 2.6 4 6 4 9s-1.5 6.4-4 9c-2.5-2.6-4-6-4-9s1.5-6.4 4-9Z" />
  </svg>,
  // offshore
  <svg key="offshore" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3Z" />
    <path d="M9.5 12l1.8 1.8L15 10" />
  </svg>,
  // visa
  <svg key="visa" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="8" r="3" />
    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
    <path d="M16 11l1.7 1.7L21 9" />
  </svg>,
  // license
  <svg key="license" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2h9l3 3v17H6z" />
    <path d="M15 2v3h3" />
    <path d="M9 13l2 2 4-4" />
  </svg>,
  // banking
  <svg key="banking" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 10l9-6 9 6" />
    <path d="M4 10h16v9H4z" />
    <path d="M9 13v3M12 13v3M15 13v3" />
    <path d="M2 21h20" />
  </svg>,
];

export default function Services() {
  return (
    <div
      id="services"
      className="relative isolate overflow-hidden bg-[linear-gradient(150deg,#06192f_0%,#0a2540_45%,#143263_100%)] px-5 py-20 md:px-10 md:py-28 scroll-mt-20"
    >
      <div className="glow-blob -left-40 -top-40 h-[500px] w-[500px] bg-accent/25" />
      <div className="glow-blob right-0 bottom-0 h-[420px] w-[420px] bg-sky/20" />

      <div className="relative mx-auto">
        <SectionHeading
          eyebrow="Scope of work"
          title="Formation & compliance, handled end to end"
          intro="Six services cover everything from first filing to the paperwork most founders forget until it's overdue."
          light
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((v, i) => (
            <div key={v.n} className="glass-card-dark group rounded-t-3xl p-8">
              <span className="mb-7 flex h-14 w-14 items-center justify-center rounded-t-[14px] bg-accent text-white shadow-[0_8px_20px_#4f7fe059] transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
                {icons[i % icons.length]}
              </span>
              <h3 className="mb-2.5 text-[20px] font-bold text-white">{v.title}</h3>
              <p className="mb-5 text-[14.5px] leading-relaxed text-white/70">{v.body}</p>
              <div className="flex items-center justify-between border-t border-white/15 pt-4">
                <span className="text-[13px] font-semibold uppercase tracking-[0.06em] text-white/90">
                  {v.price}
                </span>
                <span className="text-accent-bright transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[13.5px] text-white/50">
          Also: trademark &amp; IP registration from AED 6,500 · corporate tax registration · will
          drafting for expatriates · liquidation and licence cancellation.
        </p>
      </div>
    </div>
  );
}
