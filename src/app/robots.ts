import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.ooboogoo.com/sitemap.xml",
    host: "https://www.ooboogoo.com",
  };
}
