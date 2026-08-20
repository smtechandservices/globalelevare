import Image from "next/image";
import { site } from "@/lib/content";

const tools = [
  {
    title: "Compare jurisdictions",
    tag: "7 emirates · 40+ zones",
    href: "#jurisdictions",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c2.5 2.6 4 6 4 9s-1.5 6.4-4 9c-2.5-2.6-4-6-4-9s1.5-6.4 4-9Z" />
      </svg>
    ),
  },
  {
    title: "Get a fixed quote",
    tag: "Answer in one working hour",
    href: "/#consult",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2h9l3 3v17H6z" />
        <path d="M15 2v3h3" />
        <path d="M9 13l2 2 4-4" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[560px] items-center overflow-hidden pt-[128px] sm:min-h-[640px] md:pt-[150px] lg:min-h-[810px] lg:pt-[170px]">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-meeting.png"
          alt="Advisor and client reviewing paperwork"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(165deg,#051528e6_0%,#0a2540cc_28%,#0a254099_52%,#0515285c_78%,#0515283d_100%)] md:bg-[linear-gradient(90deg,#051528d9_0%,#0a2540c2_22%,#0a25407a_40%,#0a254040_58%,transparent_78%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_65%,#05152845_100%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full px-5 md:px-10">
        <div className="max-w-[600px]">
          <h1
            className="mb-5 text-[clamp(36px,6.2vw,66px)] font-extrabold leading-[1.05] text-white"
            style={{ textShadow: "0 2px 24px rgba(0,0,0,0.35)" }}
          >
            Elevare Defining
            <br />
            <span className="brand-gradient-text">Global Excellence.</span>
          </h1>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-accent/25 px-4 py-1.5 text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-white">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-bright opacity-75 [animation-duration:2.5s]" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-bright" />
            </span>
            UAE company formation · Est. 2011
          </div>

          <p className="mb-7 max-w-[50ch] text-[15.5px] leading-relaxed text-white/75">
            Mainland, free zone or offshore, we spec the jurisdiction against your activity and
            visa count, quote one fixed number, and file it ourselves. One advisor from first
            call through licence, visas and bank account.
          </p>

          <div className="mb-4 flex flex-wrap items-center gap-3.5">
            <a href={site.waLink} className="btn btn-accent">
              Contact an advisor
            </a>
            <a href="#packages" className="btn btn-line-light">
              See starting prices
            </a>
          </div>

          <div className="hidden max-w-[520px] grid-cols-2 gap-3.5 md:grid" style={{transform: "translateY(60px)"}}>
            {tools.map((t) => (
              <a
                key={t.title}
                href={t.href}
                className="group flex flex-col gap-3 rounded-t-xl border border-white/15 bg-white/8 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/12"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-t-[10px] bg-accent text-white transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
                  {t.icon}
                </span>
                <span>
                  <span className="block text-[11px] uppercase tracking-[0.12em] text-white/60">{t.tag}</span>
                  <span className="mt-0.5 flex items-center gap-1.5 text-[14.5px] font-semibold text-white">
                    {t.title}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/60 lg:flex">
        <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <span className="relative h-10 w-px overflow-hidden bg-white/25">
          <span className="absolute inset-x-0 top-0 h-2.5 animate-[scrollLine_2.4s_ease-in-out_infinite] bg-accent-bright" />
        </span>
      </div>
    </section>
  );
}
