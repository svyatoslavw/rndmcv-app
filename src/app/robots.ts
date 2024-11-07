import { MetadataRoute } from "next"

import { APP_URL } from "@/shared/config"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${APP_URL}/sitemap.xml`
  }
}
