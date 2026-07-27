export default function SectionHeading({
  title,
  sheet,
}: {
  title: string;
  sheet: string;
}) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-[#1d1f20]/15 pb-3.5 mb-7 flex-wrap">
      <h2 className="font-condensed font-semibold text-4xl md:text-[46px] uppercase leading-none m-0">
        {title}
      </h2>
      <span className="text-xs tracking-[0.16em] uppercase text-[#7a7a7d] whitespace-nowrap">
        {sheet}
      </span>
    </div>
  );
}
