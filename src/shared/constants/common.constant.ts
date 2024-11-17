import { PUBLIC_URL } from "../config"

export const RESPONSE_STATUS = {
  SUCCESS: "success",
  ERROR: "error"
}

export const HEADER_LINKS = [
  { text: "Home", href: PUBLIC_URL.home(), isExternal: false },
  { text: "Resumes", href: PUBLIC_URL.create(), isExternal: false },
  { text: "Settings", href: PUBLIC_URL.settings(), isExternal: false },
  { text: "Issues", href: PUBLIC_URL.issues(), isExternal: true }
]
