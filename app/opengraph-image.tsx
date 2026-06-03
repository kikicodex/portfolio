import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Keerthana K R — Full-Stack Engineer & AppSec Enthusiast";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          padding: "80px 96px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Purple glow blob */}
        <div
          style={{
            position: "absolute",
            top: -120,
            left: -80,
            width: 560,
            height: 560,
            borderRadius: "50%",
            background: "rgba(255,107,107,0.28)",
            filter: "blur(110px)",
          }}
        />
        {/* Cyan glow blob */}
        <div
          style={{
            position: "absolute",
            bottom: -80,
            right: 100,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "rgba(255,154,154,0.18)",
            filter: "blur(90px)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: 20, position: "relative" }}>
          {/* URL label */}
          <span
            style={{
              fontSize: 18,
              color: "#ff6b6b",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            keerthanakr.vercel.app
          </span>

          {/* Name */}
          <span
            style={{
              fontSize: 88,
              fontWeight: 900,
              color: "#f5f5f5",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Keerthana K R
          </span>

          {/* Role */}
          <span
            style={{
              fontSize: 34,
              color: "#a1a1aa",
              fontWeight: 300,
              letterSpacing: "-0.01em",
            }}
          >
            Full-Stack Engineer &amp; AppSec Enthusiast
          </span>

          {/* Tags */}
          <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
            {["Next.js", "TypeScript", "React Native", "AppSec"].map((tag) => (
              <span
                key={tag}
                style={{
                  padding: "8px 20px",
                  borderRadius: 24,
                  border: "1px solid rgba(255,107,107,0.45)",
                  color: "#ffb3b3",
                  fontSize: 20,
                  fontWeight: 500,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
