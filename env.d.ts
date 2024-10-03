declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string
    DIRECT_URL: string
    OPENAI_API_KEY: string
    AUTH_SECRET: string
    APP_URL: string
    SERVER_URL: string
    GOOGLE_ANALYTICS_ID: string
    STRIPE_PUBLISHABLE_KEY: string
    STRIPE_SECRET_KEY: string
    AUTH_GOOGLE_ID: string
    AUTH_GOOGLE_SECRET: string
  }
}
