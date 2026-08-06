import { site, steps } from "@/lib/content";

export default function Process() {
  return (
    <div className="bg-[linear-gradient(180deg,#fff_0%,var(--color-bg-soft)_100%)] px-5 pt-20 md:px-10 md:pt-28">
      <div className="mx-auto">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="eyebrow mb-3 block">Sequence of works</span>
            <h2 className="text-[28px] font-bold leading-[1.1] sm:text-[34px] lg:text-[42px]">
              From first call to bank account
            </h2>
          </div>
          <p className="max-w-[38ch] text-[14.5px] leading-relaxed text-text-muted">
            Five stages, each with an honest timeline — including the ones that run slower than
            we&apos;d like to admit.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
          {steps.map((p, i) => (
            <div key={p.n} className="group relative flex lg:pr-5">
              <div className="flat-card w-full rounded-t-2xl border-t-[3px] border-t-accent p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-t-[10px] bg-[linear-gradient(135deg,var(--color-navy),var(--color-navy-mid))] text-white transition-all duration-300 group-hover:-rotate-3 group-hover:bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-deep))]">
                    {i + 1}
                  </span>
                  <span className="rounded-full bg-accent-pale px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.06em] text-accent">
                    {p.when}
                  </span>
                </div>
                <div className="gradient-num mb-2 text-[42px] font-bold leading-none">{p.n}</div>
                <h3 className="mb-1.5 text-[13.5px] font-bold uppercase tracking-[0.1em] text-navy">
                  {p.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-text-muted">{p.body}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden w-5 shrink-0 items-center justify-center text-accent/40 lg:flex">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="relative mt-10 overflow-hidden rounded-t-3xl bg-[linear-gradient(150deg,var(--color-navy-deep),var(--color-navy)_60%,var(--color-navy-mid))] px-7 py-8 md:px-10">
          <div className="glow-blob -right-16 -top-16 h-64 w-64 bg-accent/25" />
          <div className="relative flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
            <p className="max-w-[42ch] text-[18px] font-semibold text-white md:text-[22px]">
              Ready to see your jurisdiction plan, in writing?
            </p>
            <a href={site.waLink} className="btn btn-accent shrink-0">
              Start your free consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
