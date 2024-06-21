import { MetadataRoute } from "next";
import { POSTS } from "../data/postData";

const SITE_URL = "https://localhost:4001";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
    },
    ...POSTS.map((post) => ({
      url: `${SITE_URL}/post/${post.slug}`,
      lastModified: new Date(post.publishDate),
    })),
  ];
}
