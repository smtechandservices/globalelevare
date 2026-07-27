import { readFileSync } from "fs";
import { join } from "path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Elevare Global | UAE Company Formation & Business Setup";

const barlowCondensedSemiBold = readFileSync(
  join(process.cwd(), "src/app/fonts/BarlowCondensed-SemiBold.ttf")
);
const barlowRegular = readFileSync(join(process.cwd(), "src/app/fonts/Barlow-Regular.ttf"));
const barlowMedium = readFileSync(join(process.cwd(), "src/app/fonts/Barlow-Medium.ttf"));
const logoData = readFileSync(join(process.cwd(), "src/app/og-logo.png"));
const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

export async function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#1c1a33",
          position: "relative",
          fontFamily: "Barlow",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: 14,
            background: "linear-gradient(90deg, #7c5cef 0%, #4f7fe0 55%, #33c9d4 100%)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            padding: "64px 80px",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} width={260} height={96} alt="Elevare Global" />
          </div>

          <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
            <div
              style={{
                display: "flex",
                fontSize: 22,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: "#9aa3e8",
                marginBottom: 20,
              }}
            >
              UAE Company Formation · Est. 2011
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontFamily: "Barlow Condensed SemiBold",
                fontSize: 66,
                lineHeight: 1.05,
                textTransform: "uppercase",
                color: "#f5f5f8",
              }}
            >
              <span style={{ display: "flex" }}>Elevare,</span>
              <span style={{ display: "flex" }}>Defining</span>
              <span style={{ display: "flex", color: "#5fd0e0" }}>Global Excellence.</span>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 28,
                color: "#c9cdf5",
                marginTop: 28,
                maxWidth: 820,
              }}
            >
              Fixed quotes, one advisor, licence to bank account.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              width: "100%",
              borderTop: "1px solid rgba(245,245,248,0.18)",
              paddingTop: 28,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", gap: 56 }}>
              {[
                ["500+", "CLIENTS"],
                ["45+", "COUNTRIES"],
                ["15+", "YEARS"],
                ["98%", "APPROVAL"],
              ].map(([n, label]) => (
                <div key={label} style={{ display: "flex", flexDirection: "column" }}>
                  <div
                    style={{
                      display: "flex",
                      fontFamily: "Barlow Condensed SemiBold",
                      fontSize: 40,
                      color: "#b9c6ff",
                      lineHeight: 1,
                    }}
                  >
                    {n}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      fontSize: 16,
                      letterSpacing: 2,
                      color: "#9aa3e8",
                      marginTop: 6,
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 20,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "#9aa3e8",
              }}
            >
              globalelevare.com
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Barlow", data: barlowRegular, style: "normal", weight: 400 },
        { name: "Barlow", data: barlowMedium, style: "normal", weight: 500 },
        { name: "Barlow Condensed SemiBold", data: barlowCondensedSemiBold, style: "normal", weight: 600 },
      ],
    }
  );
}
