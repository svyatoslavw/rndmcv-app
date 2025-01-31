import { PUBLIC_URLS } from "../config"

export const RESPONSE_STATUS = {
  SUCCESS: "success",
  ERROR: "error"
}

export const RESPONSE_MESSAGE = {
  UNAUTHORIZED: "UNAUTHORIZED",
  SERVER_ERROR: "SERVER ERROR",
  NOT_FOUND: (entity: string) => `${entity} not found`,
  CUSTOM: (entity: string) => `${entity}`
}

export const HEADER_LINKS = [
  { text: "Home", href: PUBLIC_URLS.HOME, isExternal: false },
  { text: "Builder", href: PUBLIC_URLS.BUILDER, isExternal: false },
  { text: "How it works", href: PUBLIC_URLS.HOW_IT_WORKS, isExternal: false }
]
