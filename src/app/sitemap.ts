import { MetadataRoute } from "next"

import { APP_URL, PUBLIC_URL, RESUME_URL } from "@/shared/lib/config"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: APP_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0
    },
    {
      url: `${APP_URL}${PUBLIC_URL.pricing()}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8
    },
    {
      url: `${APP_URL}${RESUME_URL.content()}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8
    },
    {
      url: `${APP_URL}${RESUME_URL.customize()}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8
    },
    {
      url: `${APP_URL}${PUBLIC_URL.auth()}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.6
    },
    {
      url: `${APP_URL}${PUBLIC_URL.settings()}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6
    }
  ]
}
