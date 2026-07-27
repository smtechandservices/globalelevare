import Image from "next/image";
import { nav } from "@/lib/content";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between gap-4 px-5 md:px-[60px] py-3 bg-[#f2f2f3]/95 backdrop-blur border-b border-[#1d1f20]/15">
      <a href="#" className="flex items-center shrink-0">
        <Image
          src="/images/logo.webp"
          alt="Elevare Global"
          height={36}
          width={98}
          className="h-9 w-auto"
          priority
        />
      </a>


      <div className="flex items-center gap-7">
        <nav className="hidden lg:flex gap-7 font-condensed text-[17px] tracking-[0.06em] uppercase">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[#1d1f20] transition-colors hover:text-accent-strong"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#consult"
          className="brand-gradient-btn relative text-[#f5f5f8] px-4 py-2.5 font-condensed text-sm md:text-base tracking-[0.08em] uppercase"
        >
          Free Consultation
        </a>
      </div>
    </header>
  );
}
