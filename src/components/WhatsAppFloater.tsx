"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/content";
import { COOKIE_BANNER_EVENT, COOKIE_STORAGE_KEY } from "./CookieConsent";
import { MOBILE_DRAWER_EVENT } from "./Header";

export default function WhatsAppFloater() {
  const [open, setOpen] = useState(false);
  const [cookieBannerVisible, setCookieBannerVisible] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  useEffect(() => {
    // The cookie banner and this floater both anchor to the bottom-right corner;
    // shift up while the banner is visible so they never overlap.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCookieBannerVisible(!window.localStorage.getItem(COOKIE_STORAGE_KEY));
    function handleVisibility(e: Event) {
      const { visible } = (e as CustomEvent<{ visible: boolean }>).detail;
      setCookieBannerVisible(visible);
    }
    window.addEventListener(COOKIE_BANNER_EVENT, handleVisibility);
    return () => window.removeEventListener(COOKIE_BANNER_EVENT, handleVisibility);
  }, []);

  useEffect(() => {
    // Sit behind the mobile drawer (z-50) while it's open, instead of floating on top of it.
    function handleDrawer(e: Event) {
      const { open: drawerIsOpen } = (e as CustomEvent<{ open: boolean }>).detail;
      setDrawerOpen(drawerIsOpen);
    }
    window.addEventListener(MOBILE_DRAWER_EVENT, handleDrawer);
    return () => window.removeEventListener(MOBILE_DRAWER_EVENT, handleDrawer);
  }, []);

  return (
    <div
      ref={ref}
      className={`fixed right-6 flex flex-col items-end gap-3 transition-[bottom] duration-300 ${
        drawerOpen ? "z-40" : "z-50"
      } ${cookieBannerVisible ? "bottom-[210px] sm:bottom-[150px]" : "bottom-6"}`}
    >
      <div
        className={`w-[320px] max-w-[calc(100vw-2rem)] origin-bottom-right overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-200 ${
          open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        <div className="flex items-center gap-3 bg-[linear-gradient(135deg,#128c7e,#25d366)] px-4 py-3.5">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/25 text-white">
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.892.52 3.66 1.42 5.176L2 22l4.964-1.393A9.94 9.94 0 0 0 12.001 22c5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.15a8.14 8.14 0 0 1-4.144-1.13l-.297-.176-3.038.852.82-2.98-.194-.307A8.15 8.15 0 1 1 20.15 12 8.16 8.16 0 0 1 12 20.15z" />
            </svg>
          </span>
          <div className="text-white">
            <div className="text-[14px] font-bold">Elevare Global</div>
            <div className="flex items-center gap-1.5 text-[11.5px] text-white/85">
              <span className="h-1.5 w-1.5 rounded-full bg-[#b9f6ca] shadow-[0_0_0_2px_#ffffff59]" />
              Usually replies within an hour
            </div>
          </div>
        </div>
        <div className="bg-[#f7f9fb] p-4">
          <div className="rounded-tl-[4px] rounded-tr-2xl rounded-b-2xl bg-white p-3.5 text-[13.5px] leading-relaxed text-navy shadow-sm">
            👋 Hi! Tell us your business activity and visa count, and we&apos;ll answer with a
            fixed quote and jurisdiction on WhatsApp.
          </div>
          <a
            href={site.waLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-accent mt-3.5 w-full"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? "Close chat" : `Chat with us on WhatsApp: ${site.whatsappDisplay}`}
        onClick={() => setOpen((v) => !v)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] shadow-lg shadow-black/20 transition-transform hover:scale-105 focus-visible:scale-105 outline-none"
      >
        {!open && (
          <span className="absolute inset-0 rounded-full bg-[#25d366] opacity-60 animate-ping [animation-duration:2.5s]" />
        )}
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" className="relative">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="relative h-8 w-8 fill-white" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.892.52 3.66 1.42 5.176L2 22l4.964-1.393A9.94 9.94 0 0 0 12.001 22c5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 18.15a8.14 8.14 0 0 1-4.144-1.13l-.297-.176-3.038.852.82-2.98-.194-.307A8.15 8.15 0 1 1 20.15 12 8.16 8.16 0 0 1 12 20.15z" />
          </svg>
        )}
      </button>
    </div>
  );
}
