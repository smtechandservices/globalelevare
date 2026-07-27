import Image from "next/image";
import CornerMarks from "./CornerMarks";
import { site } from "@/lib/content";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 px-5 md:px-[60px] pt-10 md:pt-14 pb-8">
      <div>
        <div className="text-xs tracking-[0.24em] uppercase text-accent-strong tabular-nums mb-5">
          Rev. 2026 · UAE company formation · Est. 2011
        </div>
        <h1 className="font-condensed font-semibold text-[56px] sm:text-[68px] lg:text-[82px] leading-[0.96] tracking-[-0.005em] uppercase mb-5">
          Elevare
          <br />
          Defining
          <span className="brand-gradient-text ms-4">Global Excellence.</span>
        </h1>
        <p className="max-w-[52ch] text-[#424244] mb-7">
          Mainland, free zone or offshore — we spec the jurisdiction against your activity and visa
          count, quote one fixed number, and file it ourselves. One advisor from first call through
          licence, visas and bank account.
        </p>
        <div className="flex flex-wrap gap-3.5 items-center mb-7">
          <a
            href={site.waLink}
            className="brand-gradient-btn relative text-[#f5f5f8] px-7 py-3.5 font-condensed text-lg tracking-[0.08em] uppercase"
          >
            Contact an advisor
          </a>
          <a
            href="#packages"
            className="border border-accent text-accent-strong px-7 py-3.5 font-condensed text-lg tracking-[0.08em] uppercase transition-colors hover:bg-accent-tint"
          >
            See starting prices
          </a>
        </div>
      </div>

      <div className="relative border border-accent p-1.5">
        <div className="relative w-full min-h-[320px] lg:min-h-[440px] h-full flex items-end p-3.5">
          <Image
            src="/images/hero-meeting.jpg"
            alt="Advisor and client reviewing paperwork"
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
          <span className="relative font-mono text-[11px] tracking-[0.06em] text-dark bg-[#f2f2f3] px-2 py-1">
            advisor + client, Sharjah office
          </span>
        </div>
        <CornerMarks inset={6} />
      </div>
    </div>
  );
}
