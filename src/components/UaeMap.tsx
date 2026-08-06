"use client";

import { useId, useMemo } from "react";
import { geoMercator, geoPath } from "d3-geo";
import { Delaunay } from "d3-delaunay";
import type { Geometry } from "geojson";
import uaeOutline from "@/data/uae-outline.json";
import { emirates, type EmirateKey } from "@/lib/content";

const W = 640;
const H = 480;
const PAD = 24;

// d3-delaunay's path renderer has no precision option (unlike d3-geo's
// `.digits()`), so trig/division noise in its output can differ in the last
// bit across server/client JS engines. Round embedded numbers to avoid
// hydration mismatches from that.
function roundPath(d: string): string {
  return d.replace(/-?\d+\.?\d*(?:e-?\d+)?/gi, (m) => {
    const n = Number(m);
    return Number.isFinite(n) ? String(Math.round(n * 100) / 100) : m;
  });
}

export default function UaeMap({
  selected,
  onSelect,
}: {
  selected: EmirateKey;
  onSelect: (key: EmirateKey) => void;
}) {
  const uid = useId();
  const clipId = `${uid}-clip`;
  const hatchId = `${uid}-hatch`;
  const gridId = `${uid}-grid`;

  const { coastline, cells } = useMemo(() => {
    const outline = uaeOutline as unknown as Geometry;
    const projection = geoMercator().fitExtent(
      [
        [PAD, PAD],
        [W - PAD, H - PAD],
      ],
      outline
    );
    const path = geoPath(projection).digits(2);
    const coastline = path(outline) ?? "";

    const points: [number, number][] = emirates.map((em) => {
      const p = projection([em.lon, em.lat]);
      return p ? [Math.round(p[0] * 100) / 100, Math.round(p[1] * 100) / 100] : [W / 2, H / 2];
    });
    const voronoi = Delaunay.from(points).voronoi([0, 0, W, H]);

    const cells = emirates.map((em, i) => ({
      key: em.key,
      d: roundPath(voronoi.renderCell(i) ?? ""),
      x: points[i][0],
      y: points[i][1],
    }));

    return { coastline, cells };
  }, []);

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="block w-full"
      role="group"
      aria-label="Map of the United Arab Emirates, seven selectable emirates"
    >
      <defs>
        <clipPath id={clipId}>
          <path d={coastline} />
        </clipPath>
        <pattern id={gridId} width={20} height={20} patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--color-accent)" strokeOpacity={0.08} strokeWidth={1} />
        </pattern>
        <pattern id={hatchId} width={7} height={7} patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1={0} y1={0} x2={0} y2={7} stroke="var(--color-navy)" strokeOpacity={0.16} strokeWidth={1} />
        </pattern>
      </defs>

      <rect x={0} y={0} width={W} height={H} fill={`url(#${gridId})`} />

      <g clipPath={`url(#${clipId})`}>
        {cells.map((c) => {
          const isSel = c.key === selected;
          const em = emirates.find((e) => e.key === c.key)!;
          return (
            <path
              key={c.key}
              d={c.d}
              tabIndex={0}
              role="button"
              aria-pressed={isSel}
              aria-label={`${em.name}, from AED ${em.from}`}
              onClick={() => onSelect(c.key)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelect(c.key);
                }
              }}
              fill={isSel ? undefined : `url(#${hatchId})`}
              className={[
                "cursor-pointer outline-none transition-colors focus-visible:stroke-[2]",
                isSel ? "fill-accent/45 stroke-navy/70" : "stroke-navy/25 hover:fill-accent/15",
              ].join(" ")}
              strokeWidth={isSel ? 1.1 : 0.75}
              strokeDasharray={isSel ? undefined : "3,2"}
            />
          );
        })}
      </g>

      <path
        d={coastline}
        fill="none"
        stroke="var(--color-navy)"
        strokeWidth={1.3}
        strokeLinejoin="round"
        pointerEvents="none"
      />

      {cells.map((c) => (
        <g key={c.key} transform={`translate(${c.x.toFixed(2)}, ${c.y.toFixed(2)})`} className="pointer-events-none">
          <line x1={-6} y1={0} x2={6} y2={0} stroke="var(--color-navy)" strokeOpacity={0.5} strokeWidth={0.6} />
          <line x1={0} y1={-6} x2={0} y2={6} stroke="var(--color-navy)" strokeOpacity={0.5} strokeWidth={0.6} />
          <rect
            x={-9}
            y={-9}
            width={18}
            height={18}
            className={c.key === selected ? "fill-navy" : "fill-accent"}
            stroke="var(--color-navy)"
            strokeWidth={0.6}
          />
          <text
            x={0}
            y={3.5}
            textAnchor="middle"
            className="fill-[#f5f5f8]"
            style={{ font: "10px ui-monospace, monospace", letterSpacing: "0.02em" }}
          >
            {emirates.find((e) => e.key === c.key)?.n}
          </text>
        </g>
      ))}
    </svg>
  );
}
