import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/public/", "/data/", "/components/", "/lib/"],
    },
    sitemap: "https://localhost:4001/sitemap.xml",
  };
}
