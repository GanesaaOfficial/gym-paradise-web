import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://gymparadise.ominotech.com.my";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = ["", "/facilities", "/pricing", "/gallery", "/contact"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
