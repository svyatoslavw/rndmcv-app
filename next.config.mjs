/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APP_URL: process.env.APP_URL,
    AUTH_SECRET: process.env.AUTH_SECRET,
    DATABASE_URL: process.env.DATABASE_URL,
    DIRECT_URL: process.env.DIRECT_URL,
    AUTH_GOOGLE_ID: process.env.AUTH_GOOGLE_ID,
    AUTH_GOOGLE_SECRET: process.env.AUTH_GOOGLE_SECRET,
    SERVER_URL: process.env.SERVER_URL,
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY
  },
  images: {
    remotePatterns: [
      {
        hostname: "rndmcv-uploader.s3.eu-north-1.amazonaws.com",
        protocol: "https",
        pathname: "/**"
      },
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
      }
    ]
  }
  // experimental: {
  //   serverComponentsExternalPackages: ["@prisma/client", "bcrypt"]
  // }
}

export default nextConfig
