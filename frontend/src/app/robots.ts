import type { MetadataRoute } from "next";

const SITE_URL = "https://find-your-aesthetic-tool.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/result",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
