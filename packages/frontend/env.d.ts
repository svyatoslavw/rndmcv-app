declare namespace NodeJS {
  interface ProcessEnv {
    APP_URL: string
    SERVER_URL: string
    GOOGLE_ANALYTICS_ID: string
    STRIPE_PUBLISHABLE_KEY: string
    STRIPE_SECRET_KEY: string
  }
}
