import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ffffff",
          fontFamily: "sans-serif",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            letterSpacing: 4,
            color: "#ad8638",
            textTransform: "uppercase",
          }}
        >
          Style &amp; Aesthetic DNA
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 700,
            color: "#18181b",
            marginTop: 24,
            textAlign: "center",
          }}
        >
          Find Your Aesthetic
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#71717a",
            marginTop: 24,
            textAlign: "center",
          }}
        >
          Discover your fashion, makeup, and style archetype in 3 minutes.
        </div>
      </div>
    ),
    size
  );
}
