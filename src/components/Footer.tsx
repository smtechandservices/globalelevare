import Link from "next/link";
import SocialLinks from "./SocialLinks";
import { emirates, resourceLinks, serviceLinks } from "@/lib/content";

const currentYear = 2026;

export default function Footer() {
  return (
    <footer className="bg-bg-soft pt-10">
      <div className="relative isolate mx-auto overflow-hidden rounded-tr-[64px] px-7 pt-14 sm:rounded-tr-[80px] md:px-12 md:pt-16">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: "linear-gradient(160deg, var(--color-navy-deep), var(--color-navy) 50%, var(--color-navy-mid))",
          }}
        />
        <div className="glow-blob -right-24 -top-24 h-[420px] w-[420px] bg-accent/20" />

        <div className="relative grid grid-cols-1 gap-10 pb-14 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="text-2xl font-extrabold text-white md:text-[28px]">Elevare Global</div>
            <div className="mt-1 text-[13px] uppercase tracking-[0.14em] text-accent-bright">
              Defining Global Excellence
            </div>
            <p className="mt-4 max-w-[36ch] text-[13.5px] leading-relaxed text-white/70">
              Business setup and corporate services, Sharjah, serving founders in 45 countries
              since 2011.
            </p>
            <div className="mt-5">
              <SocialLinks variant="dark" />
            </div>
          </div>
          <div>
            <div className="mb-5 text-[12px] font-bold uppercase tracking-[0.14em] text-accent-bright">
              Services
            </div>
            <div className="flex flex-col gap-2.5 text-[14.5px] text-white/85">
              {serviceLinks.map((s) => (
                <a key={s.title} href={s.href} className="transition-colors hover:text-white">
                  {s.title}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-5 text-[12px] font-bold uppercase tracking-[0.14em] text-accent-bright">
              Free Zones
            </div>
            <div className="flex flex-col gap-2.5 text-[14.5px] text-white/85">
              {emirates.map((em) => (
                <a key={em.key} href="#jurisdictions" className="transition-colors hover:text-white">
                  {em.name}
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-5 text-[12px] font-bold uppercase tracking-[0.14em] text-accent-bright">
              Company
            </div>
            <div className="flex flex-col gap-2.5 text-[14.5px] text-white/85">
              <a href="#about" className="transition-colors hover:text-white">
                About
              </a>
              {resourceLinks.map((r) => (
                <a key={r.title} href={r.href} className="transition-colors hover:text-white">
                  {r.title}
                </a>
              ))}
              <a href="#consult" className="transition-colors hover:text-white">
                Contact
              </a>
              <Link href="/" className="transition-colors hover:text-white">
                Terms
              </Link>
            </div>
          </div>
        </div>

        <div className="relative flex flex-col justify-between gap-3 border-t border-white/15 py-6 text-[11.5px] text-white/50 sm:flex-row">
          <span>
            © {currentYear} Elevare Global · Business Setup Services · Sharjah Economic
            Development Dept.
          </span>
          <span>Prices are indicative and exclude government fee changes · Privacy · Terms</span>
        </div>
      </div>
    </footer>
  );
}
