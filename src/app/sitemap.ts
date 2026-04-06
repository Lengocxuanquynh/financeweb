import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = [
    '/blog/cach-toi-uu-thue-2026',
  ];

  const routes = [
    "",
    "/investment",
    "/insurance",
    "/credit-cards",
    "/blog",
    ...posts
  ].map((route) => {
    const isBlog = route.startsWith('/blog');
    return {
      url: `${siteConfig.url}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: (isBlog ? "monthly" : "weekly") as "monthly" | "weekly",
      priority: route === "" ? 1 : isBlog ? 0.6 : 0.8,
    };
  });

  return routes;
}
