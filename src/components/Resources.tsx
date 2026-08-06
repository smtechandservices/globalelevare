import Image from "next/image";
import { posts } from "@/lib/content";

export default function Resources() {
  return (
    <div id="resources" className="bg-white px-5 py-20 md:px-10 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="eyebrow mb-3 block">Insights</span>
            <h2 className="text-[28px] font-bold leading-[1.1] sm:text-[34px] lg:text-[42px]">
              Technical notes
            </h2>
          </div>
          <a href="#" className="text-[13px] font-semibold uppercase tracking-[0.06em] text-accent hover:text-navy">
            All resources →
          </a>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-2 [scrollbar-width:none] sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3">
          {posts.map((b) => (
            <a
              key={b.title}
              href="#"
              className="flat-card group block shrink-0 basis-[85%] overflow-hidden rounded-t-2xl sm:basis-auto"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-bg-soft">
                <Image
                  src={b.image}
                  alt={b.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 85vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-accent">
                  {b.meta}
                </div>
                <h3 className="text-[18px] font-bold leading-snug text-navy">{b.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
