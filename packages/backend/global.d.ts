namespace Express {
  interface Request {
    user?: { id: string }
  }
}

declare namespace NodeJS {
  export interface ProcessEnv {
    DATABASE_URL: string
    JWT_SECRET: string
    SESSION_SECRET: string

    MAILER_HOST: string
    MAILER_USER: string
    MAILER_PASSWORD: string

    TWILIO_ACCOUNT_SID: string
    TWILIO_AUTH_TOKEN: string
    TWILIO_VERIFICATION_SERVICE_SID: string

    GOOGLE_CLIENT_ID: string
    GOOGLE_SECRET: string

    GITHUB_CLIENT_ID: string
    GITHUB_SECRET: string
  }
}
