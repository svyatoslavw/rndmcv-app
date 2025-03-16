import { Metadata } from "next"

export const enum APP_NAME {
  FULL = "RNDMCV App",
  SHORT = "RNDMCV"
}

export const APP_URL = process.env.APP_URL as string

const SEO = {
  CREATOR: "svyatoslavw",
  GITHUB_URL: "https://github.com/svyatoslavw",
  SITE_KEYWORDS: [
    "Next.js",
    "ReactJS",
    "Javascript",
    "Typescript",
    "Web developing",
    "Programming community",
    "Ukraine",
    "Frontend",
    "AI resume builder",
    "AI CV builder",
    "Create resume with AI",
    "Resume generator with AI",
    "CV generator with AI",
    "AI-powered resume builder",
    "Automated resume creation",
    "Smart resume builder",
    "AI resume writing tool",
    "Professional resume online",
    "Free resume builder",
    "Free CV builder",
    "Create resume online",
    "Create CV online",
    "Resume templates",
    "CV templates",
    "Online resume generator",
    "Online CV generator",
    "Resume maker",
    "CV maker",
    "Automated CV creation",
    "Resume creation with AI",
    "Resume tips and tricks",
    "Job hunting",
    "Career development",
    "Resume optimization",
    "Build resume for free",
    "Customizable resume templates",
    "Resume builder for students",
    "Resume builder for professionals",
    "Resume builder for job seekers",
    "Online resume creation",
    "Easy resume creation",
    "Quick CV generator",
    "AI job application tools",
    "AI resume customization",
    "Generate resume automatically"
  ]
}

export const APP_TITLE = `${APP_NAME.SHORT} - Your Personal Resume Builder`

export const APP_METADATA: Metadata = {
  description: "AI-powered resume builder",
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
    description: "AI-powered resume builder for job seekers",
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
    index: true,
    follow: true,
    googleBot: {
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  alternates: {
    canonical: APP_URL
  }
}
