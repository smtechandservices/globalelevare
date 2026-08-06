import Image from "next/image";
import SectionHeading from "./SectionHeading";
import { authorities, quotes } from "@/lib/content";

export default function Testimonials() {
  return (
    <div className="bg-bg-soft px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto">
        <SectionHeading eyebrow="On the record" title="Client sign-off" />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {quotes.map((q) => {
            const [name, role] = q.who.split(" — ");
            return (
              <div key={q.who} className="flat-card rounded-t-3xl bg-white p-7">
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

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 border-t border-line pt-8">
          <span className="eyebrow mr-2">Registered with</span>
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
  );
}
