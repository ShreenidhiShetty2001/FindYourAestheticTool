export type ShareableResult = {
  dna: { slug: string; percentage: number }[];
  fantasy: string[];
  wearable: string[];
  style_formula: string;
};

function toBase64Url(input: string): string {
  return btoa(input).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromBase64Url(input: string): string {
  const restored = input.replace(/-/g, "+").replace(/_/g, "/");
  const padding = restored.length % 4 === 0 ? "" : "=".repeat(4 - (restored.length % 4));
  return atob(restored + padding);
}

export function encodeShareableResult(shareable: ShareableResult): string {
  return toBase64Url(JSON.stringify(shareable));
}

export function decodeShareableResult(encoded: string): ShareableResult | null {
  try {
    return JSON.parse(fromBase64Url(encoded)) as ShareableResult;
  } catch {
    return null;
  }
}
