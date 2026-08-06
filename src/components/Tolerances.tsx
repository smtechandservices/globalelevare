import { why } from "@/lib/content";

const icons = [
  <svg key="0" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
  </svg>,
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2h9l3 3v17H6z" />
    <path d="M15 2v3h3" />
    <path d="M9 13h6M9 17h6" />
  </svg>,
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l8 4v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V7z" />
  </svg>,
  <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 2" />
  </svg>,
  <svg key="4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16v14H4z" />
    <path d="M4 9h16" />
    <path d="M9 4v5" />
  </svg>,
];

export default function Tolerances() {
  return (
    <div
      id="about"
      className="relative isolate overflow-hidden px-5 py-20 md:px-10 md:py-28 scroll-mt-20"
      style={{ background: "linear-gradient(180deg,#fafbfd,#f2f5f9)" }}
    >
      <div className="glow-blob -left-32 top-0 h-[420px] w-[420px] bg-accent/10" />
      <div className="glow-blob -right-32 bottom-0 h-[420px] w-[420px] bg-sky/15" />

      <div className="relative mx-auto max-w-[1320px]">
        <div className="mx-auto mb-12 max-w-[680px] text-center">
          <span className="eyebrow mb-3 block">Tolerances we hold</span>
          <h2 className="text-[28px] font-extrabold leading-[1.1] sm:text-[34px] lg:text-[44px]">
            What formation doesn&apos;t cover
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
            Formation is the easy half. What breaks a young company is the second year — a lapsed
            establishment card, a missed corporate tax registration, a visa renewal nobody
            flagged.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {why.map((w, i) => (
            <div key={w.n} className="glass-card-light group relative overflow-hidden rounded-t-3xl p-7">
              <span className="gradient-num pointer-events-none absolute top-5 right-6 text-[52px] font-extrabold opacity-20 transition-opacity duration-300 group-hover:opacity-40">
                {w.n}
              </span>
              <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-t-[14px] bg-accent text-white shadow-[0_8px_20px_#c11f1f4d]">
                {icons[i % icons.length]}
              </span>
              <h3 className="mb-2 text-[17px] font-bold text-navy">{w.title}</h3>
              <p className="text-[13.5px] leading-relaxed text-text-muted">{w.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
