import SocialLinks from "./SocialLinks";
import { emirates, resourceLinks, serviceLinks } from "@/lib/content";

const currentYear = 2026;

export default function Footer() {
  return (
    <footer className="bg-dark text-[#f5f5f8] px-5 md:px-[60px] pt-10 pb-5">
      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-7 pb-7 border-b border-[#f5f5f8]/18">
        <div>
          <div className="font-condensed font-semibold text-2xl md:text-[32px] tracking-[0.06em] uppercase">
            Elevare Global
          </div>
          <div className="text-[13px] tracking-[0.1em] uppercase text-dark-tint-2 mt-1">
            Defining Global Excellence
          </div>
          <p className="mt-3.5 text-sm text-dark-tint-3 max-w-[36ch]">
            Business setup and corporate services, Sharjah, serving founders in 45 countries
            since 2011.
          </p>
          <div className="mt-3.5">
            <SocialLinks variant="dark" />
          </div>
        </div>
        <div>
          <div className="text-[11px] tracking-[0.24em] uppercase text-dark-tint-2 mb-2.5">
            Services
          </div>
          <div className="flex flex-col gap-1.5 text-sm text-dark-tint-4">
            {serviceLinks.map((s) => (
              <a key={s.title} href={s.href} className="transition-colors hover:text-brand-teal">
                {s.title}
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="text-[11px] tracking-[0.24em] uppercase text-dark-tint-2 mb-2.5">
            Free Zones
          </div>
          <div className="flex flex-col gap-1.5 text-sm text-dark-tint-4">
            {emirates.map((em) => (
              <a key={em.key} href="#jurisdictions" className="transition-colors hover:text-brand-teal">
                {em.name}
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="text-[11px] tracking-[0.24em] uppercase text-dark-tint-2 mb-2.5">
            Company
          </div>
          <div className="flex flex-col gap-1.5 text-sm text-dark-tint-4">
            <a href="#about" className="transition-colors hover:text-brand-teal">
              About
            </a>
            {resourceLinks.map((r) => (
              <a key={r.title} href={r.href} className="transition-colors hover:text-brand-teal">
                {r.title}
              </a>
            ))}
            <a href="#consult" className="transition-colors hover:text-brand-teal">
              Contact
            </a>
            <a href="/" className="transition-colors hover:text-brand-teal">
              Terms
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between gap-3 pt-3.5 text-[11px] text-dark-tint-2 tabular-nums">
        <span>
          © {currentYear} Elevare Global · Business Setup Services · Sharjah Economic
          Development Dept.
        </span>
        <span>Prices are indicative and exclude government fee changes · Privacy · Terms</span>
      </div>
    </footer>
  );
}
