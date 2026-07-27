import Image from "next/image";
import CornerMarks from "./CornerMarks";
import SectionHeading from "./SectionHeading";
import { authorities, quotes } from "@/lib/content";

export default function Testimonials() {
  return (
    <div className="px-5 md:px-[60px] py-14 border-t border-b border-[#1d1f20]/15">
      <SectionHeading title="On the record" sheet="Sheet 04 / Client sign-off" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {quotes.map((q, i) => {
          const [name, role] = q.who.split(" — ");
          return (
            <div
              key={q.who}
              className="relative border border-[#1d1f20]/15 p-5 transition-colors hover:border-accent"
            >
              <div className="font-condensed text-6xl leading-none text-accent/70 mb-1.5">&ldquo;</div>
              <p className="text-[#1d1f20] mb-5">{q.text}</p>
              <div className="flex items-center justify-between gap-2.5 border-t border-[#1d1f20]/15 pt-3.5">
                <div className="flex items-center gap-2.5">
                  <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full">
                    <Image src={q.avatar} alt={name} fill sizes="36px" className="object-cover" />
                  </div>
                  <div>
                    <div className="text-xs tracking-[0.1em] uppercase text-[#1d1f20]">{name}</div>
                    {role && (
                      <div className="text-[11px] text-[#98989b]">{role}</div>
                    )}
                  </div>
                </div>
                <span className="text-xs text-accent tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <CornerMarks />
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-7 mt-7 border-t border-[#1d1f20]/15 pt-5 flex-wrap">
        <span className="text-xs tracking-[0.24em] uppercase text-[#98989b]">Registered with</span>
        {authorities.map((a) => (
          <span
            key={a}
            className="font-condensed text-xl tracking-[0.1em] uppercase text-[#5d5d60]"
          >
            {a}
          </span>
        ))}
      </div>
    </div>
  );
}
