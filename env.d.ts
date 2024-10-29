declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string
    DIRECT_URL: string
    AUTH_SECRET: string
    APP_URL: string
    SERVER_URL: string
    GOOGLE_ANALYTICS_ID: string
    STRIPE_PUBLISHABLE_KEY: string
    STRIPE_SECRET_KEY: string
    AUTH_GOOGLE_ID: string
    AUTH_GOOGLE_SECRET: string
    NEXT_PUBLIC_SENTRY_DSN: string
    SENTRY_AUTH_TOKEN: string
    SENTRY_SUPPRESS_TURBOPACK_WARNING: string
  }
}
