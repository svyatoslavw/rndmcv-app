import { withSentryConfig } from "@sentry/nextjs"
import createNextIntlPlugin from "next-intl/plugin"

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APP_URL: process.env.APP_URL,
    AUTH_SECRET: process.env.AUTH_SECRET,
    POSTGRES_URL: process.env.POSTGRES_URL,
    AUTH_GOOGLE_ID: process.env.AUTH_GOOGLE_ID,
    AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET,
    AUTH_GITHUB_ID: process.env.AUTH_GITHUB_ID,
    AUTH_GITHUB_SECRET: process.env.AUTH_GITHUB_SECRET,
    SERVER_URL: process.env.SERVER_URL,
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
    SENTRY_AUTH_TOKEN: process.env.SENTRY_AUTH_TOKEN,
    GROQ_API_KEY: process.env.GROQ_API_KEY,
    SENTRY_SUPPRESS_TURBOPACK_WARNING: process.env.SENTRY_SUPPRESS_TURBOPACK_WARNING
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.googleusercontent.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "**.githubusercontent.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/**"
      }
    ]
  },
  // webpack: (config) => {
  //   config.module.rules.push({
  //     test: /\.svg$/i,
  //     use: ["@svgr/webpack"]
  //   })
  //   return config
  // },
  serverExternalPackages: ["@sentry/nextjs"],
  transpilePackages: ["@rndm/ui"]
}

const isProduction = process.env.NODE_ENV === "production"

const nextConfigWithSentry = withSentryConfig(nextConfig, {
  org: "svyatoslavw",
  project: "rndmcv",
  widenClientFileUpload: true,
  tunnelRoute: "/monitoring",
  hideSourceMaps: true,
  disableLogger: true
})

const withNextIntl = createNextIntlPlugin()

export default isProduction ? withNextIntl(nextConfigWithSentry) : withNextIntl(nextConfig)
