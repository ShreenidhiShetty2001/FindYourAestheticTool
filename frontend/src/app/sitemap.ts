import type { MetadataRoute } from "next";
import { AESTHETICS_CONTENT } from "@/lib/aesthetics-content";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/quiz",
    "/aesthetics",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/affiliate-disclosure",
    "/data-deletion",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));

  const aestheticRoutes = Object.keys(AESTHETICS_CONTENT).map((slug) => ({
    url: `${SITE_URL}/aesthetics/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...aestheticRoutes];
}
