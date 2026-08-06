export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  light = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={`max-w-[760px] mb-10 md:mb-14 ${align === "center" ? "mx-auto text-center" : ""}`}>
      <span className="eyebrow mb-3 block">{eyebrow}</span>
      <h2
        className={`text-[28px] sm:text-[34px] lg:text-[44px] font-bold leading-[1.1] ${
          light ? "text-white" : ""
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-[15px] leading-relaxed ${light ? "text-white/70" : "text-text-muted"}`}>
          {intro}
        </p>
      )}
    </div>
  );
}
