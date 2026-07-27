import { authorities, quotes } from "@/lib/content";

export default function Testimonials() {
  return (
    <div className="px-5 md:px-[60px] py-10 border-t border-b border-[#1d1f20]/15">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {quotes.map((q) => (
          <div key={q.who} className="border-l border-[#1d1f20]/15 px-5 first:pl-0 first:border-l-0 md:first:pl-5 md:first:border-l">
            <p className="text-[#1d1f20] mb-3.5">{q.text}</p>
            <div className="border-t border-[#1d1f20]/15 pt-1.5 text-xs tracking-[0.1em] uppercase text-[#5d5d60]">
              {q.who}
            </div>
          </div>
        ))}
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
