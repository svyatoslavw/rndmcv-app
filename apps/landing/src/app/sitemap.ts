import { MetadataRoute } from "next"

import { APP_URL, PUBLIC_URLS } from "@/shared/config"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: APP_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0
    },
    {
      url: `${APP_URL}${PUBLIC_URLS.ABOUT}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8
    },
    {
      url: `${APP_URL}${PUBLIC_URLS.PRIVACY}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6
    },
    {
      url: `${APP_URL}${PUBLIC_URLS.TERMS}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.6
    }
  ]
}
