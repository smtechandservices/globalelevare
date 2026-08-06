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
              ? "flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/8 text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent"
              : "flex h-11 w-11 items-center justify-center rounded-full border border-line bg-bg-soft text-navy transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-white"
          }
        >
          <SocialIcon name={s.icon} />
        </a>
      ))}
    </div>
  );
}
