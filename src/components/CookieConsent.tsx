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
      // Reading localStorage is a browser-only check that must run after mount
      // (SSR has no window) — this isn't state derived from props/other state.
      // eslint-disable-next-line react-hooks/set-state-in-effect
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

  function decline() {
    close("declined");
  }

  if (!mounted) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-[60] flex justify-center px-4 pb-4 transition-opacity duration-300 ease-out sm:px-6 sm:pb-6 ${
        shown ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`pointer-events-auto flex w-full max-w-2xl flex-col gap-4 rounded-2xl bg-navy-deep p-5 shadow-2xl transition-transform duration-300 ease-out sm:flex-row sm:items-center sm:justify-between sm:p-6 ${
          shown ? "translate-y-0" : "translate-y-4"
        }`}
      >
        <p className="text-[13.5px] leading-relaxed text-white/75">
          We use cookies to improve your experience and analyse site traffic. By clicking
          &ldquo;Accept all&rdquo;, you agree to our use of cookies.
        </p>
        <div className="flex shrink-0 justify-end gap-2.5">
          <button
            type="button"
            onClick={decline}
            className="rounded-full border border-white/25 px-4 py-2.5 text-[13px] font-semibold text-white/85 transition-colors hover:bg-white/10"
          >
            Decline
          </button>
          <button type="button" onClick={acceptAll} className="btn btn-accent min-h-[40px]! px-5! py-2!">
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
