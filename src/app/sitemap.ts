import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://www.exemple-docteur-fes.com/", lastModified: new Date() }];
}
