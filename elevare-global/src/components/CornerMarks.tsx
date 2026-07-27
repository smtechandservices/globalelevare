export default function CornerMarks({ inset = 5 }: { inset?: number }) {
  const style = { fontSize: 10, lineHeight: 1, color: "var(--color-accent)" } as const;
  return (
    <>
      <span className="pointer-events-none absolute" style={{ ...style, top: -inset, left: -inset }}>+</span>
      <span className="pointer-events-none absolute" style={{ ...style, top: -inset, right: -inset }}>+</span>
      <span className="pointer-events-none absolute" style={{ ...style, bottom: -inset, left: -inset }}>+</span>
      <span className="pointer-events-none absolute" style={{ ...style, bottom: -inset, right: -inset }}>+</span>
    </>
  );
}
