import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title =
    searchParams.get("title") ?? "Automated Growth for Dental Clinics";
  const subtitle =
    searchParams.get("subtitle") ??
    "WhatsApp reminders, Google presence, and patient follow-ups — automated.";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "linear-gradient(135deg, #0C3B4C 0%, #1A5F7A 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Logo text */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "10px",
              background: "#22A7B5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
          <span
            style={{
              fontSize: "28px",
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.02em",
            }}
          >
            DentalOS
          </span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: "52px",
            fontWeight: 700,
            color: "white",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            margin: 0,
            maxWidth: "900px",
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "24px",
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.5,
            marginTop: "20px",
            maxWidth: "800px",
          }}
        >
          {subtitle}
        </p>

        {/* Bottom accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "#22A7B5",
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
