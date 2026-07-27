"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "cookie-consent";

const TRANSITION_MS = 300;

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      setMounted(true);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const id = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(id);
  }, [mounted]);

  function close(value: string) {
    setShown(false);
    window.setTimeout(() => setMounted(false), TRANSITION_MS);
    window.localStorage.setItem(STORAGE_KEY, value);
  }

  function acceptAll() {
    close("accepted");
  }

  function dismiss() {
    close("dismissed");
  }

  if (!mounted) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className={`fixed inset-x-0 bottom-0 z-[60] flex justify-center px-4 pb-4 transition-opacity duration-300 ease-out sm:px-6 sm:pb-6 ${
        shown ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`relative flex w-full max-w-3xl flex-col gap-4 rounded-2xl border border-white/10 bg-[#1c1a33] p-5 pr-10 shadow-xl shadow-black/30 transition-transform duration-300 ease-out sm:flex-row sm:items-center sm:justify-between sm:p-6 sm:pr-14 ${
          shown ? "translate-y-0" : "translate-y-4"
        }`}
      >
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss cookie notice"
          className="absolute right-3 top-3 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-[#dadcfb] transition hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4f7fe0]"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>
        <p className="text-sm leading-relaxed text-[#dadcfb]">
          We use cookies to improve your experience and analyse site traffic. By
          clicking &ldquo;Accept all&rdquo;, you agree to our use of cookies.
        </p>
        <div className="flex shrink-0 justify-end gap-3">
          <button
            type="button"
            onClick={acceptAll}
            className="cursor-pointer rounded-full bg-[#4f7fe0] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#3e57c9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4f7fe0]"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
