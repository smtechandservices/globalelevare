"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { emirates, nav, resourceLinks, serviceLinks, type EmirateKey } from "@/lib/content";

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-150 ${className}`}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

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
    case "blog":
      return (
        <svg {...common}>
          <path d="M5 3h11l3 3v15H5z" />
          <path d="M16 3v3h3" />
          <path d="M8 10h8M8 13h8M8 16h5" />
        </svg>
      );
    case "events":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="16" rx="1" />
          <path d="M3 9h18" />
          <path d="M7 3v4M17 3v4" />
          <path d="M7 13h3v3H7z" />
        </svg>
      );
    case "careers":
      return (
        <svg {...common}>
          <rect x="3" y="7" width="18" height="13" rx="1" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <path d="M3 12h18" />
          <path d="M10 12v1.5h4V12" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const [zonesOpen, setZonesOpen] = useState(false);
  const zonesRef = useRef<HTMLDivElement>(null);
  const [zonesRegion, setZonesRegion] = useState<EmirateKey>("dubai");
  const activeZone = emirates.find((e) => e.key === zonesRegion) ?? emirates[0];
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileZonesOpen, setMobileZonesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  function closeMobile() {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setMobileZonesOpen(false);
    setMobileResourcesOpen(false);
  }

  useEffect(() => {
    if (!mobileOpen) return;
    function handleClick(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        closeMobile();
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [mobileOpen]);

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

  useEffect(() => {
    if (!zonesOpen) return;
    function handleClick(e: MouseEvent) {
      if (zonesRef.current && !zonesRef.current.contains(e.target as Node)) {
        setZonesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [zonesOpen]);

  useEffect(() => {
    if (!resourcesOpen) return;
    function handleClick(e: MouseEvent) {
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [resourcesOpen]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 flex items-center justify-between gap-4 px-4 md:px-[60px] py-3 bg-[#f2f2f3]/95 backdrop-blur border-b border-[#1d1f20]/15"
    >
      <a href="/" className="flex items-center shrink-0">
        <Image
          src="/images/logo.webp"
          alt="Elevare Global"
          height={36}
          width={98}
          className="h-14 md:h-16 w-auto"
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
                    <Chevron className={`group-hover:rotate-180 ${servicesOpen ? "rotate-180" : ""}`} />
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
            ) : item.label === "Free Zones" ? (
              <div key={item.label} ref={zonesRef} className="relative group">
                <div className="inline-flex items-center gap-1.5">
                  <a
                    href={item.href}
                    onClick={() => setZonesOpen(false)}
                    className="text-[#1d1f20] transition-colors hover:text-accent-strong"
                  >
                    {item.label}
                  </a>
                  <button
                    type="button"
                    aria-expanded={zonesOpen}
                    aria-haspopup="true"
                    onClick={() => setZonesOpen((v) => !v)}
                    className="text-[#1d1f20] transition-colors hover:text-accent-strong"
                  >
                    <Chevron className={`group-hover:rotate-180 ${zonesOpen ? "rotate-180" : ""}`} />
                  </button>
                </div>
                <div
                  className={`absolute left-1/2 top-full z-50 w-[640px] max-w-[90vw] -translate-x-1/2 pt-8
                    origin-top opacity-0 invisible scale-95 transition-all duration-150
                    group-hover:opacity-100 group-hover:visible group-hover:scale-100
                    focus-within:opacity-100 focus-within:visible focus-within:scale-100
                    ${zonesOpen ? "opacity-100 visible scale-100" : ""}`}
                >
                  <div className="relative grid grid-cols-[190px_1fr] bg-[#f2f2f3] border border-[#1d1f20]/15 shadow-xl rounded-sm overflow-hidden normal-case">
                    <div className="border-r border-[#1d1f20]/15 py-1.5">
                      {emirates.map((em) => {
                        const isSel = em.key === zonesRegion;
                        return (
                          <a
                            key={em.key}
                            href="#jurisdictions"
                            onMouseEnter={() => setZonesRegion(em.key)}
                            onFocus={() => setZonesRegion(em.key)}
                            onClick={() => setZonesOpen(false)}
                            className={`flex items-center gap-2.5 px-3.5 py-2 text-left transition-colors ${
                              isSel ? "bg-white" : "hover:bg-white/60"
                            }`}
                          >
                            <span
                              className={`flex items-center justify-center w-5 h-5 text-[10px] font-semibold shrink-0 ${
                                isSel ? "bg-dark text-[#f5f5f8]" : "bg-accent text-[#f5f5f8]"
                              }`}
                            >
                              {em.n}
                            </span>
                            <span className="flex-1">
                              <span
                                className={`block font-condensed font-semibold text-[13px] uppercase tracking-normal leading-tight ${
                                  isSel ? "text-accent-strong" : "text-[#1d1f20]"
                                }`}
                              >
                                {em.name}
                              </span>
                              <span className="block text-[10px] tracking-[0.06em] uppercase text-[#98989b]">
                                From AED {em.from}
                              </span>
                            </span>
                          </a>
                        );
                      })}
                    </div>
                    <div className="p-4">
                      <div className="text-[10px] tracking-[0.2em] uppercase text-accent-strong">
                        Selected plot
                      </div>
                      <div className="font-condensed font-semibold text-xl uppercase leading-tight mt-0.5 mb-1">
                        {activeZone.name}
                      </div>
                      <p className="text-[12px] text-[#7a7a7d] mb-2.5 leading-snug">
                        {activeZone.blurb}
                      </p>
                      <div className="flex flex-col">
                        {activeZone.zones.map((z) => (
                          <div
                            key={z.name}
                            className="flex justify-between gap-3 border-t border-[#1d1f20]/10 py-1.5"
                          >
                            <div>
                              <div className="font-condensed font-semibold text-[13px] uppercase">
                                {z.name}
                              </div>
                              <div className="text-[10px] text-[#98989b]">{z.note}</div>
                            </div>
                            <div className="text-right whitespace-nowrap tabular-nums">
                              <div className="text-[12px] text-accent-strong">{z.price}</div>
                              <div className="text-[9px] tracking-[0.1em] uppercase text-[#98989b]">
                                {z.kind}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : item.label === "Resources" ? (
              <div key={item.label} ref={resourcesRef} className="relative group">
                <div className="inline-flex items-center gap-1.5">
                  <a
                    href={item.href}
                    onClick={() => setResourcesOpen(false)}
                    className="text-[#1d1f20] transition-colors hover:text-accent-strong"
                  >
                    {item.label}
                  </a>
                  <button
                    type="button"
                    aria-expanded={resourcesOpen}
                    aria-haspopup="true"
                    onClick={() => setResourcesOpen((v) => !v)}
                    className="text-[#1d1f20] transition-colors hover:text-accent-strong"
                  >
                    <Chevron className={`group-hover:rotate-180 ${resourcesOpen ? "rotate-180" : ""}`} />
                  </button>
                </div>
                <div
                  className={`absolute left-1/2 top-full z-50 w-64 max-w-[90vw] -translate-x-1/2 pt-8
                    origin-top opacity-0 invisible scale-95 transition-all duration-150
                    group-hover:opacity-100 group-hover:visible group-hover:scale-100
                    focus-within:opacity-100 focus-within:visible focus-within:scale-100
                    ${resourcesOpen ? "opacity-100 visible scale-100" : ""}`}
                >
                  <div className="relative flex flex-col bg-[#f2f2f3] border border-[#1d1f20]/15 shadow-xl rounded-sm overflow-hidden normal-case">
                    {resourceLinks.map((r) => (
                      <a
                        key={r.title}
                        href={r.href}
                        className="flex items-center gap-3 border-b border-[#1d1f20]/10 p-3.5 last:border-b-0 transition-colors hover:bg-white hover:text-accent-strong"
                      >
                        <span className="text-accent shrink-0">
                          <ServiceIcon name={r.icon} />
                        </span>
                        <span>
                          <span className="block font-condensed font-semibold text-[15px] tracking-normal uppercase leading-tight">
                            {r.title}
                          </span>
                          <span className="block text-[11px] tracking-[0.06em] uppercase text-[#7a7a7d] mt-0.5">
                            {r.tag}
                          </span>
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
          className="hidden lg:inline-block brand-gradient-btn relative text-[#f5f5f8] px-4 py-2.5 font-condensed text-sm md:text-base tracking-[0.08em] uppercase"
        >
          Free Consultation
        </a>
      </div>

      <button
        type="button"
        aria-expanded={mobileOpen}
        aria-label="Toggle menu"
        onClick={() => setMobileOpen((v) => !v)}
        className="lg:hidden flex items-center justify-center w-10 h-10 text-[#1d1f20] transition-colors text-accent-strong shrink-0"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
          {mobileOpen ? (
            <path d="M5 5l14 14M19 5L5 19" />
          ) : (
            <path d="M3 6h18M3 12h18M3 18h18" />
          )}
        </svg>
      </button>

      {mobileOpen && (
        <div className="lg:hidden absolute left-0 top-full z-50 w-full max-h-[calc(100vh-4rem)] overflow-y-auto bg-[#f2f2f3] border-b border-[#1d1f20]/15 shadow-xl">
          <nav className="flex flex-col font-condensed text-[15px] tracking-[0.06em] uppercase divide-y divide-[#1d1f20]/10">
            {nav.map((item) =>
              item.label === "Services" ? (
                <div key={item.label}>
                  <button
                    type="button"
                    aria-expanded={mobileServicesOpen}
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="flex w-full items-center justify-between px-5 py-3.5 text-[#1d1f20]"
                  >
                    {item.label}
                    <Chevron className={mobileServicesOpen ? "rotate-180" : ""} />
                  </button>
                  {mobileServicesOpen && (
                    <div className="flex flex-col bg-white/60 pb-2 normal-case">
                      {serviceLinks.map((s) => (
                        <a
                          key={s.title}
                          href={s.href}
                          onClick={closeMobile}
                          className="px-8 py-2 text-[13px] text-[#424244] transition-colors hover:text-accent-strong"
                        >
                          {s.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : item.label === "Free Zones" ? (
                <div key={item.label}>
                  <button
                    type="button"
                    aria-expanded={mobileZonesOpen}
                    onClick={() => setMobileZonesOpen((v) => !v)}
                    className="flex w-full items-center justify-between px-5 py-3.5 text-[#1d1f20]"
                  >
                    {item.label}
                    <Chevron className={mobileZonesOpen ? "rotate-180" : ""} />
                  </button>
                  {mobileZonesOpen && (
                    <div className="flex flex-col bg-white/60 pb-2 normal-case">
                      {emirates.map((em) => (
                        <a
                          key={em.key}
                          href="#jurisdictions"
                          onClick={closeMobile}
                          className="flex items-baseline justify-between gap-3 px-8 py-2 text-[13px] text-[#424244] transition-colors hover:text-accent-strong"
                        >
                          <span>{em.name}</span>
                          <span className="text-[11px] text-[#98989b] tabular-nums whitespace-nowrap">
                            From AED {em.from}
                          </span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : item.label === "Resources" ? (
                <div key={item.label}>
                  <button
                    type="button"
                    aria-expanded={mobileResourcesOpen}
                    onClick={() => setMobileResourcesOpen((v) => !v)}
                    className="flex w-full items-center justify-between px-5 py-3.5 text-[#1d1f20]"
                  >
                    {item.label}
                    <Chevron className={mobileResourcesOpen ? "rotate-180" : ""} />
                  </button>
                  {mobileResourcesOpen && (
                    <div className="flex flex-col bg-white/60 pb-2 normal-case">
                      {resourceLinks.map((r) => (
                        <a
                          key={r.title}
                          href={r.href}
                          onClick={closeMobile}
                          className="px-8 py-2 text-[13px] text-[#424244] transition-colors hover:text-accent-strong"
                        >
                          {r.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMobile}
                  className="px-5 py-3.5 text-[#1d1f20]"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>
          <div className="p-5">
            <a
              href="#consult"
              onClick={closeMobile}
              className="brand-gradient-btn block text-center text-[#f5f5f8] px-4 py-3 font-condensed text-base tracking-[0.08em] uppercase"
            >
              Free Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
