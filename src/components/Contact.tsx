"use client";

import { useState, type FormEvent } from "react";
import CornerMarks from "./CornerMarks";
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
      className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-5 md:px-[60px] pt-10 pb-14 border-t border-[#1d1f20]/15 scroll-mt-20"
    >
      <div>
        <h2 className="font-condensed font-semibold text-[42px] md:text-[56px] uppercase leading-none mb-3.5">
          Twenty minutes,
          <br />
          one straight answer.
        </h2>
        <p className="max-w-[52ch] text-[#424244] mb-7">
          Tell us the activity, the ownership and how many visas you need. You leave the call
          knowing jurisdiction, total cost and timeline whether or not you engage us.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 tabular-nums">
          <a
            href={site.waLink}
            className="border-b border-l border-[#1d1f20]/15 p-5 transition-colors hover:bg-accent-tint"
          >
            <div className="text-[11px] tracking-[0.16em] uppercase text-[#7a7a7d]">WhatsApp</div>
            <div className="font-condensed text-2xl">{site.whatsappDisplay}</div>
          </a>
          <a
            href={site.telLink}
            className="border-b border-l border-[#1d1f20]/15 p-5 transition-colors hover:bg-accent-tint"
          >
            <div className="text-[11px] tracking-[0.16em] uppercase text-[#7a7a7d]">Call</div>
            <div className="font-condensed text-2xl">{site.whatsappDisplay}</div>
          </a>
          <a
            href={site.mailLink}
            className="border-b border-l border-[#1d1f20]/15 p-5 transition-colors hover:bg-accent-tint"
          >
            <div className="text-[11px] tracking-[0.16em] uppercase text-[#7a7a7d]">Email</div>
            <div className="font-condensed text-2xl break-all">{site.email}</div>
          </a>
          <div className="border-b border-l border-[#1d1f20]/15 p-5">
            <div className="text-[11px] tracking-[0.16em] uppercase text-[#7a7a7d]">Office</div>
            <div className="font-condensed text-2xl">{site.office}</div>
          </div>
        </div>
        <div className="flex items-center gap-3.5 mt-2">
          <SocialLinks variant="light" />
        </div>
      </div>

      <div className="relative border border-accent p-7">
        <form className="flex flex-col gap-3.5" onSubmit={handleSubmit}>
          <label className="block">
            <span className="block text-[11px] tracking-[0.16em] uppercase text-[#5d5d60] mb-1">
              Full name
            </span>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full box-border bg-[#f5f5f8] border border-[#1d1f20]/15 px-3.5 py-2.5 text-[15px] text-[#1d1f20] outline-none focus:border-accent"
            />
          </label>
          <label className="block">
            <span className="block text-[11px] tracking-[0.16em] uppercase text-[#5d5d60] mb-1">
              WhatsApp number
            </span>
            <input
              required
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder="+971 …"
              className="w-full box-border bg-[#f5f5f8] border border-[#1d1f20]/15 px-3.5 py-2.5 text-[15px] text-[#1d1f20] outline-none focus:border-accent"
            />
          </label>
          <label className="block">
            <span className="block text-[11px] tracking-[0.16em] uppercase text-[#5d5d60] mb-1">
              Business activity
            </span>
            <input
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              placeholder="e.g. e-commerce, consultancy, trading"
              className="w-full box-border bg-[#f5f5f8] border border-[#1d1f20]/15 px-3.5 py-2.5 text-[15px] text-[#1d1f20] outline-none focus:border-accent"
            />
          </label>
          <label className="block">
            <span className="block text-[11px] tracking-[0.16em] uppercase text-[#5d5d60] mb-1">
              Visas needed
            </span>
            <input
              value={visas}
              onChange={(e) => setVisas(e.target.value)}
              placeholder="0, 1, 2 …"
              className="w-full box-border bg-[#f5f5f8] border border-[#1d1f20]/15 px-3.5 py-2.5 text-[15px] text-[#1d1f20] tabular-nums outline-none focus:border-accent"
            />
          </label>
          <button
            type="submit"
            className="brand-gradient-btn border-none text-[#f5f5f8] py-3.5 font-condensed text-lg tracking-[0.08em] uppercase"
          >
            Request my free quote
          </button>
          {sent && (
            <p className="m-0 text-[13px] text-accent-strong">
              Opening your email app to send the request — or WhatsApp us directly for a faster
              reply.
            </p>
          )}
          <p className="m-0 text-[11px] text-[#98989b]">
            We reply within one working hour, Monday to Saturday.
          </p>
        </form>
        <CornerMarks inset={6} />
      </div>
    </div>
  );
}
