import { Metadata } from "next"

export const APP_NAME = {
  SHORT: "ADMIN",
  FULL: "RNDMCV ADMIN"
}

export const APP_URL = process.env.APP_URL || "http://localhost:3000"

const SEO = {
  CREATOR: "svyatoslavw",
  GITHUB_URL: "https://github.com/svyatoslavw",
  SITE_KEYWORDS: ["Admin", "Dashboard", "RNDMCV", "Resume"]
}

export const APP_TITLE = `${APP_NAME.FULL} - Admin Dashboard`

export const APP_METADATA: Metadata = {
  description: "Dashboard for rndmcv",
  icons: {
    icon: "/icons/512x512.png",
    shortcut: "/icons/256x256.png"
  },
  metadataBase: new URL(APP_URL),
  applicationName: APP_NAME.SHORT,
  creator: SEO.CREATOR,
  authors: {
    name: SEO.CREATOR,
    url: SEO.GITHUB_URL
  },
  keywords: SEO.SITE_KEYWORDS,
  openGraph: {
    type: "website",
    description: "Admin dashboard for rndmcv",
    url: APP_URL,
    locale: "en-US",
    siteName: APP_NAME.SHORT,
    emails: `example@${APP_NAME.SHORT}`,
    images: [
      {
        url: `${APP_URL}/images/opengraph.png`,
        width: 1280,
        height: 640,
        alt: APP_NAME.FULL
      }
    ]
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: APP_NAME.SHORT,
    startupImage: {
      url: "/icons/256x256.png"
    }
  },
  robots: {
    index: false,
    follow: false
  },
  alternates: {
    canonical: APP_URL
  }
}
