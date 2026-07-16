import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mercuryparts.in";
  const now = new Date();

  const sections = [
    "",
    "#search-vehicle",
    "#categories",
    "#products",
    "#brands",
    "#why",
    "#how-it-works",
    "#articles",
    "#love",
    "#contact",
  ];

  return sections.map((path) => ({
    url: `${base}/${path}`,
    lastModified: now,
    changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "" ? 1 : 0.7,
  }));
}
