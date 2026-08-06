"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { emirates, nav, resourceLinks, serviceLinks, site, type EmirateKey } from "@/lib/content";

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
      className={`transition-transform duration-200 ${className}`}
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
  const [scrolled, setScrolled] = useState(false);
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
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
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

  const linkTone = scrolled ? "text-navy" : "text-white";
  const underlineTone = scrolled ? "after:bg-accent" : "after:bg-white";

  return (
    <>
    <header
      ref={headerRef}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur shadow-[0_6px_20px_#0a25400f] border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-[1320px] items-center gap-4 px-5 md:h-[80px] md:px-10">
        <Link href="/" className="relative h-9 w-[104px] shrink-0 md:h-10 md:w-[118px]">
          <Image
            src="/images/logo.webp"
            alt="Elevare Global"
            fill
            priority
            className={`object-contain object-left transition-opacity duration-300 ${
              scrolled ? "opacity-0" : "opacity-100"
            }`}
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <Image
            src="/images/logo.webp"
            alt="Elevare Global"
            fill
            priority
            className={`object-contain object-left transition-opacity duration-300 ${
              scrolled ? "opacity-100" : "opacity-0"
            }`}
          />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-8 text-[14.5px] font-medium xl:flex">
          {nav.map((item) =>
            item.label === "Services" ? (
              <div key={item.label} ref={servicesRef} className="relative group py-2">
                <div className="inline-flex items-center gap-1.5">
                  <a
                    href={item.href}
                    onClick={() => setServicesOpen(false)}
                    className={`relative pb-1 transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100 ${linkTone} ${underlineTone}`}
                  >
                    {item.label}
                  </a>
                  <button
                    type="button"
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    onClick={() => setServicesOpen((v) => !v)}
                    className={linkTone}
                  >
                    <Chevron className={`group-hover:rotate-180 ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                </div>
                <div
                  className={`absolute left-1/2 top-full z-50 w-[560px] max-w-[90vw] -translate-x-1/2 pt-4
                    origin-top opacity-0 invisible scale-95 transition-all duration-200
                    group-hover:opacity-100 group-hover:visible group-hover:scale-100
                    focus-within:opacity-100 focus-within:visible focus-within:scale-100
                    ${servicesOpen ? "opacity-100 visible scale-100" : ""}`}
                >
                  <div className="relative grid grid-cols-2 sm:grid-cols-3 bg-white shadow-xl rounded-b-2xl rounded-tr-2xl overflow-hidden">
                    {serviceLinks.map((s) => (
                      <a
                        key={s.title}
                        href={s.href}
                        className="p-4 transition-colors hover:bg-bg-soft"
                      >
                        <span className="text-accent">
                          <ServiceIcon name={s.icon} />
                        </span>
                        <span className="block font-semibold text-[14px] mt-2 leading-tight text-navy">
                          {s.title}
                        </span>
                        <span className="block text-[12px] text-text-muted mt-1">{s.tag}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : item.label === "Free Zones" ? (
              <div key={item.label} ref={zonesRef} className="relative group py-2">
                <div className="inline-flex items-center gap-1.5">
                  <a
                    href={item.href}
                    onClick={() => setZonesOpen(false)}
                    className={`relative pb-1 transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100 ${linkTone} ${underlineTone}`}
                  >
                    {item.label}
                  </a>
                  <button
                    type="button"
                    aria-expanded={zonesOpen}
                    aria-haspopup="true"
                    onClick={() => setZonesOpen((v) => !v)}
                    className={linkTone}
                  >
                    <Chevron className={`group-hover:rotate-180 ${zonesOpen ? "rotate-180" : ""}`} />
                  </button>
                </div>
                <div
                  className={`absolute left-1/2 top-full z-50 w-[640px] max-w-[90vw] -translate-x-1/2 pt-4
                    origin-top opacity-0 invisible scale-95 transition-all duration-200
                    group-hover:opacity-100 group-hover:visible group-hover:scale-100
                    focus-within:opacity-100 focus-within:visible focus-within:scale-100
                    ${zonesOpen ? "opacity-100 visible scale-100" : ""}`}
                >
                  <div className="relative grid grid-cols-[190px_1fr] bg-white shadow-xl rounded-b-2xl rounded-tr-2xl overflow-hidden">
                    <div className="border-r border-line py-1.5">
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
                              isSel ? "bg-bg-soft" : "hover:bg-bg-soft"
                            }`}
                          >
                            <span
                              className={`flex items-center justify-center w-5 h-5 rounded text-[10px] font-semibold shrink-0 ${
                                isSel ? "bg-navy text-white" : "bg-accent text-white"
                              }`}
                            >
                              {em.n}
                            </span>
                            <span className="flex-1">
                              <span
                                className={`block font-semibold text-[13px] leading-tight ${
                                  isSel ? "text-accent" : "text-navy"
                                }`}
                              >
                                {em.name}
                              </span>
                              <span className="block text-[10px] text-text-muted">From AED {em.from}</span>
                            </span>
                          </a>
                        );
                      })}
                    </div>
                    <div className="p-5">
                      <div className="eyebrow">Selected plot</div>
                      <div className="font-semibold text-xl leading-tight mt-1 mb-1 text-navy">
                        {activeZone.name}
                      </div>
                      <p className="text-[12.5px] text-text-muted mb-2.5 leading-snug">{activeZone.blurb}</p>
                      <div className="flex flex-col">
                        {activeZone.zones.map((z) => (
                          <div key={z.name} className="flex justify-between gap-3 border-t border-line py-1.5">
                            <div>
                              <div className="font-semibold text-[13px] text-navy">{z.name}</div>
                              <div className="text-[10px] text-text-muted">{z.note}</div>
                            </div>
                            <div className="text-right whitespace-nowrap">
                              <div className="text-[12px] text-accent font-semibold">{z.price}</div>
                              <div className="text-[9px] uppercase tracking-[0.1em] text-text-muted">{z.kind}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : item.label === "Resources" ? (
              <div key={item.label} ref={resourcesRef} className="relative group py-2">
                <div className="inline-flex items-center gap-1.5">
                  <a
                    href={item.href}
                    onClick={() => setResourcesOpen(false)}
                    className={`relative pb-1 transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100 ${linkTone} ${underlineTone}`}
                  >
                    {item.label}
                  </a>
                  <button
                    type="button"
                    aria-expanded={resourcesOpen}
                    aria-haspopup="true"
                    onClick={() => setResourcesOpen((v) => !v)}
                    className={linkTone}
                  >
                    <Chevron className={`group-hover:rotate-180 ${resourcesOpen ? "rotate-180" : ""}`} />
                  </button>
                </div>
                <div
                  className={`absolute left-1/2 top-full z-50 w-64 max-w-[90vw] -translate-x-1/2 pt-4
                    origin-top opacity-0 invisible scale-95 transition-all duration-200
                    group-hover:opacity-100 group-hover:visible group-hover:scale-100
                    focus-within:opacity-100 focus-within:visible focus-within:scale-100
                    ${resourcesOpen ? "opacity-100 visible scale-100" : ""}`}
                >
                  <div className="relative flex flex-col bg-white shadow-xl rounded-b-2xl rounded-tr-2xl overflow-hidden">
                    {resourceLinks.map((r) => (
                      <a
                        key={r.title}
                        href={r.href}
                        className="flex items-center gap-3 p-3.5 transition-colors hover:bg-bg-soft"
                      >
                        <span className="text-accent shrink-0">
                          <ServiceIcon name={r.icon} />
                        </span>
                        <span>
                          <span className="block font-semibold text-[14px] leading-tight text-navy">
                            {r.title}
                          </span>
                          <span className="block text-[12px] text-text-muted mt-0.5">{r.tag}</span>
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
                className={`relative pb-1 transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:content-[''] hover:after:scale-x-100 ${linkTone} ${underlineTone}`}
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        <a href="#consult" className="btn btn-accent hidden xl:inline-flex min-h-[42px]! py-2! text-[13px]">
          Free Consultation
        </a>

        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
          className={`xl:hidden ml-auto flex h-10 w-10 items-center justify-center rounded-full transition-colors ${linkTone}`}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
            {mobileOpen ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>
    </header>

      {/* Mobile drawer */}
      <div
        className={`xl:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-navy-deep/60" onClick={closeMobile} />
        <div
          className={`absolute right-0 top-0 flex h-full w-full max-w-[380px] flex-col bg-white shadow-xl transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-line">
            <span className="relative h-8 w-[100px]">
              <Image src="/images/logo.webp" alt="Elevare Global" fill className="object-contain object-left" />
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={closeMobile}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-bg-grey text-navy"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                <path d="M5 5l14 14M19 5L5 19" />
              </svg>
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-2 py-2 text-[15px]">
            {nav.map((item) =>
              item.label === "Services" ? (
                <div key={item.label} className="border-b border-line-soft">
                  <button
                    type="button"
                    aria-expanded={mobileServicesOpen}
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="flex w-full items-center justify-between px-3 py-3.5 font-semibold text-navy"
                  >
                    {item.label}
                    <Chevron className={mobileServicesOpen ? "rotate-180" : ""} />
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: mobileServicesOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <div className="flex flex-col divide-y divide-line bg-bg-soft px-3">
                        {serviceLinks.map((s) => (
                          <a
                            key={s.title}
                            href={s.href}
                            onClick={closeMobile}
                            className="flex items-center gap-3 py-3.5 text-[14px] text-navy transition-colors hover:text-accent"
                          >
                            <span className="text-accent">
                              <ServiceIcon name={s.icon} />
                            </span>
                            {s.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : item.label === "Free Zones" ? (
                <div key={item.label} className="border-b border-line-soft">
                  <button
                    type="button"
                    aria-expanded={mobileZonesOpen}
                    onClick={() => setMobileZonesOpen((v) => !v)}
                    className="flex w-full items-center justify-between px-3 py-3.5 font-semibold text-navy"
                  >
                    {item.label}
                    <Chevron className={mobileZonesOpen ? "rotate-180" : ""} />
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: mobileZonesOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <div className="flex flex-col divide-y divide-line bg-bg-soft px-3">
                        {emirates.map((em) => (
                          <a
                            key={em.key}
                            href="#jurisdictions"
                            onClick={closeMobile}
                            className="flex items-baseline justify-between gap-3 py-3.5 text-[14px] text-navy transition-colors hover:text-accent"
                          >
                            <span>{em.name}</span>
                            <span className="text-[11px] whitespace-nowrap text-text-muted">From AED {em.from}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : item.label === "Resources" ? (
                <div key={item.label} className="border-b border-line-soft">
                  <button
                    type="button"
                    aria-expanded={mobileResourcesOpen}
                    onClick={() => setMobileResourcesOpen((v) => !v)}
                    className="flex w-full items-center justify-between px-3 py-3.5 font-semibold text-navy"
                  >
                    {item.label}
                    <Chevron className={mobileResourcesOpen ? "rotate-180" : ""} />
                  </button>
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: mobileResourcesOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <div className="flex flex-col divide-y divide-line bg-bg-soft px-3">
                        {resourceLinks.map((r) => (
                          <a
                            key={r.title}
                            href={r.href}
                            onClick={closeMobile}
                            className="flex items-center gap-3 py-3.5 text-[14px] text-navy transition-colors hover:text-accent"
                          >
                            <span className="text-accent">
                              <ServiceIcon name={r.icon} />
                            </span>
                            {r.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMobile}
                  className="block border-b border-line-soft px-3 py-3.5 font-semibold text-navy"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>
          <div className="border-t border-line p-5">
            <a href="#consult" onClick={closeMobile} className="btn btn-accent w-full">
              Free Consultation
            </a>
            <a href={site.telLink} className="mt-3 block text-center text-[13px] text-text-muted">
              or call {site.whatsappDisplay}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
