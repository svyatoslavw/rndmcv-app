import { PUBLIC_URLS } from "../config"

export const RESPONSE_STATUS = {
  SUCCESS: "success",
  ERROR: "error"
}

export const HEADER_LINKS = [
  { text: "Home", href: PUBLIC_URLS.HOME, isExternal: false },
  { text: "Create", href: PUBLIC_URLS.CREATE, isExternal: false },
  { text: "How it works", href: PUBLIC_URLS.HOW_IT_WORKS, isExternal: false }
]
