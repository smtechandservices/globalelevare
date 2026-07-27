import CornerMarks from "./CornerMarks";
import { posts } from "@/lib/content";

export default function Resources() {
  return (
    <div id="resources" className="px-5 md:px-[60px] pt-14 pb-10 scroll-mt-20">
      <div className="flex justify-between items-baseline border-b border-[#1d1f20]/15 pb-3.5 mb-7">
        <h2 className="font-condensed font-semibold text-4xl md:text-[46px] uppercase leading-none m-0">
          Technical notes
        </h2>
        <a
          href="#"
          className="text-xs tracking-[0.16em] uppercase text-accent-strong transition-colors hover:text-dark whitespace-nowrap"
        >
          All resources →
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {posts.map((b) => (
          <a
            key={b.title}
            href="#"
            className="relative block border border-[#1d1f20]/15 p-1.5 transition-colors hover:border-accent"
          >
            <div
              className="h-32 bg-placeholder"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(90deg, rgba(60,53,110,0.22) 0 1px, transparent 1px 8px)",
              }}
            />
            <div className="px-2.5 pt-3.5 pb-1.5">
              <div className="text-[11px] tracking-[0.16em] uppercase text-accent-strong tabular-nums">
                {b.meta}
              </div>
              <h3 className="font-condensed font-semibold text-2xl uppercase leading-tight mt-1.5">
                {b.title}
              </h3>
            </div>
            <CornerMarks />
          </a>
        ))}
      </div>
    </div>
  );
}
