import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/catalog", "/collections", "/about", "/delivery", "/contact", "/privacy", "/terms"];
  return routes.map((route) => ({ url: `https://bosheq.com${route}`, lastModified: new Date() }));
}
