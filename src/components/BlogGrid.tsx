"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";
import { blogPosts, type BlogPost } from "@/lib/content";

const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function BlogGrid() {
  const [active, setActive] = useState<string>("All");
  const filtered: BlogPost[] =
    active === "All" ? blogPosts : blogPosts.filter((p) => p.category === active);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2.5">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            className={`rounded-full border px-4 py-2 text-[12.5px] font-semibold uppercase tracking-[0.06em] transition-colors ${
              active === c
                ? "border-transparent bg-navy text-white"
                : "border-line text-text-muted hover:border-navy hover:text-navy"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post, i) => (
          <FadeIn key={post.slug} delay={(i % 3) * 80}>
            <article className="flat-card group flex h-full flex-col overflow-hidden rounded-t-2xl">
              <div className="relative aspect-[16/10] overflow-hidden bg-bg-soft">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-accent">
                  <span>{post.category}</span>
                  <span className="text-line">·</span>
                  <span className="text-text-muted normal-case tracking-normal">{post.readTime}</span>
                </div>
                <h3 className="text-[18px] font-bold leading-snug text-navy">{post.title}</h3>
                <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-text-muted">
                  {post.excerpt}
                </p>
                <div className="mt-4 border-t border-line pt-3 text-[12px] text-text-muted">
                  {formatDate(post.date)}
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-[14px] text-text-muted">
          No articles in this category yet.
        </p>
      )}
    </div>
  );
}
