import { ImageResponse } from "next/og";
import { AESTHETICS_CONTENT } from "@/lib/aesthetics-content";
import { decodeShareableResult } from "@/lib/share";

function nameFor(slug: string): string {
  return AESTHETICS_CONTENT[slug]?.name ?? slug;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const r = searchParams.get("r");
  const shareable = r ? decodeShareableResult(r) : null;

  const primaryName = shareable?.dna[0] ? nameFor(shareable.dna[0].slug) : "Find Your Aesthetic";
  const fantasyNames = shareable?.fantasy.map(nameFor).join(" x ") ?? "";
  const wearableNames = shareable?.wearable.map(nameFor).join(" x ") ?? "";

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
            fontSize: 28,
            letterSpacing: 4,
            color: "#ad8638",
            textTransform: "uppercase",
          }}
        >
          Your Aesthetic DNA
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 700,
            color: "#ad8638",
            marginTop: 20,
            textAlign: "center",
          }}
        >
          {primaryName}
        </div>
        {fantasyNames && wearableNames ? (
          <div style={{ display: "flex", gap: 80, marginTop: 60 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ display: "flex", fontSize: 20, color: "#ad8638", textTransform: "uppercase", letterSpacing: 2 }}>
                Fantasy
              </div>
              <div style={{ display: "flex", fontSize: 32, marginTop: 8, color: "#18181b" }}>{fantasyNames}</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ display: "flex", fontSize: 20, color: "#71717a", textTransform: "uppercase", letterSpacing: 2 }}>
                Wearable
              </div>
              <div style={{ display: "flex", fontSize: 32, marginTop: 8, color: "#18181b" }}>{wearableNames}</div>
            </div>
          </div>
        ) : null}
        <div style={{ display: "flex", fontSize: 24, color: "#a1a1aa", marginTop: 80 }}>
          Find Your Aesthetic · Take the quiz
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
