import Image from "next/image";
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
            className="group relative block border border-[#1d1f20]/15 p-1.5 transition-colors hover:border-accent"
          >
            <div className="relative h-32 overflow-hidden bg-placeholder">
              <Image
                src={b.image}
                alt={b.title}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover grayscale-[15%] transition-transform duration-300 group-hover:scale-105"
              />
            </div>
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
