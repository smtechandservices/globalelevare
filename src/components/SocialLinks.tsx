import { socials } from "@/lib/content";

function SocialIcon({ name }: { name: string }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "linkedin":
      return (
        <svg {...common}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    default:
      return null;
  }
}

export default function SocialLinks({ variant = "light" }: { variant?: "light" | "dark" }) {
  return (
    <div className="flex items-center gap-2.5">
      {socials.map((s) => (
        <a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noreferrer"
          aria-label={s.name}
          className={
            variant === "dark"
              ? "flex items-center justify-center w-9 h-9 border border-[#f5f5f8]/20 text-[#f5f5f8] transition-colors hover:border-brand-teal hover:text-brand-teal"
              : "flex items-center justify-center w-9 h-9 border border-[#1d1f20]/15 text-[#1d1f20] transition-colors hover:border-accent hover:text-accent-strong"
          }
        >
          <SocialIcon name={s.icon} />
        </a>
      ))}
    </div>
  );
}
