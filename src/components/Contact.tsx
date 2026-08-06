"use client";

import { useState, type FormEvent } from "react";
import SocialLinks from "./SocialLinks";
import { site } from "@/lib/content";

export default function Contact() {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [activity, setActivity] = useState("");
  const [visas, setVisas] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const lines = [
      `New quote request from ${name || "—"}`,
      `WhatsApp: ${whatsapp || "—"}`,
      `Activity: ${activity || "—"}`,
      `Visas needed: ${visas || "—"}`,
    ].join("\n");
    window.location.href = `${site.mailLink}?subject=${encodeURIComponent(
      "Free quote request — Elevare Global"
    )}&body=${encodeURIComponent(lines)}`;
    setSent(true);
  }

  return (
    <div
      id="consult"
      className="relative isolate overflow-hidden px-5 md:px-10 scroll-mt-20"
      style={{ background: "linear-gradient(180deg,#fff,var(--color-bg-soft))" }}
    >
      <div className="glow-blob -right-40 top-0 h-[440px] w-[440px] bg-accent/12" />

      <div className="relative mx-auto grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <span className="eyebrow mb-3 block">Talk to an advisor</span>
          <h2 className="mb-4 text-[32px] font-extrabold leading-[1.1] sm:text-[40px] lg:text-[48px]">
            Twenty minutes, one straight answer.
          </h2>
          <p className="mb-8 max-w-[48ch] text-[15px] leading-relaxed text-text-muted">
            Tell us the activity, the ownership and how many visas you need. You leave the call
            knowing jurisdiction, total cost and timeline — whether or not you engage us.
          </p>
          <div className="mb-8 flex flex-col gap-3">
            <a href={site.waLink} className="flex items-center gap-3 text-navy transition-colors hover:text-accent">
              <IconChip><WhatsAppIcon /></IconChip>
              <span>
                <span className="block text-[11px] uppercase tracking-[0.12em] text-text-muted">WhatsApp</span>
                <span className="text-[15px] font-semibold">{site.whatsappDisplay}</span>
              </span>
            </a>
            <a href={site.telLink} className="flex items-center gap-3 text-navy transition-colors hover:text-accent">
              <IconChip><PhoneIcon /></IconChip>
              <span>
                <span className="block text-[11px] uppercase tracking-[0.12em] text-text-muted">Call</span>
                <span className="text-[15px] font-semibold">{site.whatsappDisplay}</span>
              </span>
            </a>
            <a href={site.mailLink} className="flex items-center gap-3 text-navy transition-colors hover:text-accent">
              <IconChip><MailIcon /></IconChip>
              <span>
                <span className="block text-[11px] uppercase tracking-[0.12em] text-text-muted">Email</span>
                <span className="text-[15px] font-semibold break-all">{site.email}</span>
              </span>
            </a>
            <div className="flex items-center gap-3 text-navy">
              <IconChip><PinIcon /></IconChip>
              <span>
                <span className="block text-[11px] uppercase tracking-[0.12em] text-text-muted">Office</span>
                <span className="text-[15px] font-semibold">{site.office}</span>
              </span>
            </div>
          </div>
          <SocialLinks variant="light" />
        </div>

        <div className="flat-card rounded-t-3xl bg-white p-7 md:p-9">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.1em] text-accent">
                  Full name
                </span>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full box-border rounded-[var(--r-sm)] border border-line bg-bg-soft px-3.5 py-3 text-[15px] text-navy outline-none transition-colors focus:border-accent focus:bg-white focus:shadow-[0_0_0_3px_#4f7fe01f]"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.1em] text-accent">
                  WhatsApp number
                </span>
                <input
                  required
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="+971 …"
                  className="w-full box-border rounded-[var(--r-sm)] border border-line bg-bg-soft px-3.5 py-3 text-[15px] text-navy outline-none transition-colors focus:border-accent focus:bg-white focus:shadow-[0_0_0_3px_#4f7fe01f]"
                />
              </label>
            </div>
            <label className="block">
              <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.1em] text-accent">
                Business activity
              </span>
              <input
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
                placeholder="e.g. e-commerce, consultancy, trading"
                className="w-full box-border rounded-[var(--r-sm)] border border-line bg-bg-soft px-3.5 py-3 text-[15px] text-navy outline-none transition-colors focus:border-accent focus:bg-white focus:shadow-[0_0_0_3px_#4f7fe01f]"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.1em] text-accent">
                Visas needed
              </span>
              <input
                value={visas}
                onChange={(e) => setVisas(e.target.value)}
                placeholder="0, 1, 2 …"
                className="w-full box-border rounded-[var(--r-sm)] border border-line bg-bg-soft px-3.5 py-3 text-[15px] text-navy outline-none transition-colors focus:border-accent focus:bg-white focus:shadow-[0_0_0_3px_#4f7fe01f]"
              />
            </label>
            <button type="submit" className="btn btn-accent mt-1">
              Request my free quote
            </button>
            {sent && (
              <p className="m-0 text-[13px] text-accent">
                Opening your email app to send the request — or WhatsApp us directly for a faster
                reply.
              </p>
            )}
            <p className="m-0 text-[11.5px] text-text-muted">
              We reply within one working hour, Monday to Saturday.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

function IconChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-t-[10px] bg-accent-pale text-accent">
      {children}
    </span>
  );
}

const iconProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function WhatsAppIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z" />
      <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5.6 0 1-.5.8-1l-.6-1.4a.8.8 0 0 0-.9-.4l-.8.3a4 4 0 0 1-2-2l.3-.8a.8.8 0 0 0-.4-.9L9.9 8.2c-.5-.2-1 .2-1 .8z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg {...iconProps}>
      <path d="M4 5c0 8 7 15 15 15l3-4-6-2-2 2c-2-1-4-3-5-5l2-2-2-6z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg {...iconProps}>
      <path d="M12 21s7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
