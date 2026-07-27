"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { nav, serviceLinks } from "@/lib/content";

function ServiceIcon({ name }: { name: string }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "mainland":
      return (
        <svg {...common}>
          <path d="M4 21V8l5-3 5 3v13" />
          <path d="M14 21V11l6-2v12" />
          <path d="M2 21h20" />
          <path d="M7 12h0M7 15h0M7 18h0" />
        </svg>
      );
    case "freezone":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c2.5 2.6 4 6 4 9s-1.5 6.4-4 9c-2.5-2.6-4-6-4-9s1.5-6.4 4-9Z" />
        </svg>
      );
    case "offshore":
      return (
        <svg {...common}>
          <path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3Z" />
          <path d="M9.5 12l1.8 1.8L15 10" />
        </svg>
      );
    case "visa":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
          <path d="M16 11l1.7 1.7L21 9" />
        </svg>
      );
    case "license":
      return (
        <svg {...common}>
          <path d="M6 2h9l3 3v17H6z" />
          <path d="M15 2v3h3" />
          <path d="M9 13l2 2 4-4" />
        </svg>
      );
    case "banking":
      return (
        <svg {...common}>
          <path d="M3 10l9-6 9 6" />
          <path d="M4 10h16v9H4z" />
          <path d="M9 13v3M12 13v3M15 13v3" />
          <path d="M2 21h20" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!servicesOpen) return;
    function handleClick(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [servicesOpen]);

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between gap-4 px-5 md:px-[60px] py-3 bg-[#f2f2f3]/95 backdrop-blur border-b border-[#1d1f20]/15">
      <a href="/" className="flex items-center shrink-0">
        <Image
          src="/images/logo.webp"
          alt="Elevare Global"
          height={36}
          width={98}
          className="h-16 w-auto"
          priority
        />
      </a>


      <div className="flex items-center gap-7">
        <nav className="hidden lg:flex gap-7 font-condensed text-[17px] tracking-[0.06em] uppercase">
          {nav.map((item) =>
            item.label === "Services" ? (
              <div key={item.label} ref={servicesRef} className="relative group">
                <div className="inline-flex items-center gap-1.5">
                  <a
                    href={item.href}
                    onClick={() => setServicesOpen(false)}
                    className="text-[#1d1f20] transition-colors hover:text-accent-strong"
                  >
                    {item.label}
                  </a>
                  <button
                    type="button"
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    onClick={() => setServicesOpen((v) => !v)}
                    className="text-[#1d1f20] transition-colors hover:text-accent-strong"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-150 group-hover:rotate-180 ${servicesOpen ? "rotate-180" : ""}`}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                </div>
                <div
                  className={`absolute left-1/2 top-full z-50 w-[560px] max-w-[90vw] -translate-x-1/2 pt-8
                    origin-top opacity-0 invisible scale-95 transition-all duration-150
                    group-hover:opacity-100 group-hover:visible group-hover:scale-100
                    focus-within:opacity-100 focus-within:visible focus-within:scale-100
                    ${servicesOpen ? "opacity-100 visible scale-100" : ""}`}
                >
                  {/* <span className="absolute left-1/2 top-[30px] h-3 w-3 -translate-x-1/2 rotate-45 bg-[#f2f2f3] border-l border-t border-[#1d1f20]/15" /> */}
                  <div className="relative grid grid-cols-2 sm:grid-cols-3 bg-[#f2f2f3] border border-[#1d1f20]/15 shadow-xl rounded-sm overflow-hidden normal-case">
                    {serviceLinks.map((s) => (
                      <a
                        key={s.title}
                        href={s.href}
                        className="border-b border-l border-[#1d1f20]/10 p-4 transition-colors hover:bg-white hover:text-accent-strong"
                      >
                        <span className="text-accent">
                          <ServiceIcon name={s.icon} />
                        </span>
                        <span className="block font-condensed font-semibold text-[15px] tracking-normal uppercase mt-2 leading-tight">
                          {s.title}
                        </span>
                        <span className="block text-[11px] tracking-[0.06em] uppercase text-[#7a7a7d] mt-1">
                          {s.tag}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-[#1d1f20] transition-colors hover:text-accent-strong"
              >
                {item.label}
              </a>
            )
          )}
        </nav>
        <a
          href="#consult"
          className="brand-gradient-btn relative text-[#f5f5f8] px-4 py-2.5 font-condensed text-sm md:text-base tracking-[0.08em] uppercase"
        >
          Free Consultation
        </a>
      </div>
    </header>
  );
}
