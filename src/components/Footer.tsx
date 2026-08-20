import SocialLinks from "./SocialLinks";
import { companyLinks, emirates, serviceLinks, site } from "@/lib/content";

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
            <div className="mt-5 flex flex-col gap-1.5 text-[13.5px] text-white/85">
              <a href={site.telLink} className="transition-colors hover:text-white">
                {site.phoneDisplay}
              </a>
              <a href={site.mailLink} className="transition-colors hover:text-white">
                {site.email}
              </a>
            </div>
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
                <a key={em.key} href="/#jurisdictions" className="transition-colors hover:text-white">
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
              {companyLinks.map((c) => (
                <a key={c.title} href={c.href} className="transition-colors hover:text-white">
                  {c.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex flex-col justify-between gap-3 border-t border-white/15 py-6 text-[11.5px] text-white/50 sm:flex-row">
          <span>
            © {currentYear} Elevare Global · Business Setup Services · Sharjah Economic
            Development Dept.
          </span>
          <span>Prices are indicative and exclude government fee changes</span>
        </div>

        <p className="relative border-t border-white/10 py-5 text-[11px] leading-relaxed text-white/40 text-center sm:text-left">
          By using this website you agree to our terms of service: quoted fees, timelines and
          government charges are indicative, subject to change without prior notice, and do not
          constitute legal or financial advice. Engagement with Elevare Global is governed by the
          signed service agreement issued at the time of onboarding.
        </p>
      </div>
    </footer>
  );
}
