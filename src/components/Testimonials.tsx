import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { authorities, quotes } from "@/lib/content";

export default function Testimonials() {
  return (
    <div className="bg-bg-soft px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto">
        <SectionHeading eyebrow="On the record" title="Client sign-off" />

        <div
          className="relative -mx-5 overflow-hidden md:-mx-10"
          style={{
            maskImage: "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee-slow gap-6 px-5 md:px-10">
            {[...quotes, ...quotes].map((q, i) => {
              const [name, role] = q.who.split(" — ");
              return (
                <div
                  key={`${q.who}-${i}`}
                  className="flat-card w-[320px] shrink-0 rounded-t-3xl bg-white p-7 sm:w-[380px]"
                >
                  <div className="mb-3 text-[40px] leading-none text-accent/50">&ldquo;</div>
                  <p className="mb-6 text-[15px] leading-relaxed text-navy">{q.text}</p>
                  <div className="flex items-center gap-3 border-t border-line pt-4">
                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                      <Image src={q.avatar} alt={name} fill sizes="40px" className="object-cover" />
                    </div>
                    <div>
                      <div className="text-[13.5px] font-semibold text-navy">{name}</div>
                      {role && <div className="text-[12px] text-text-muted">{role}</div>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 border-t border-line pt-8 pb-4">
          <span className="eyebrow ml-1">Registered with</span>
          <br/><br/>
          <div className="flex flex-wrap items-center gap-3.5">
            {authorities.map((a) => (
              <span
                key={a}
                className="rounded-full border border-line bg-white px-3.5 py-1.5 text-[12px] font-semibold text-text-muted"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
