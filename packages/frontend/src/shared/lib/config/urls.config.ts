export const PUBLIC_URL = {
  root: (url = "") => `${url ? "/" + url : ""}`,

  home: () => "/",
  settings: () => "/settings",
  pricing: () => "/pricing"
}

export const RESUME_URL = {
  root: (url = "") => `/resume${url ? "/" + url : ""}`,
  content: () => RESUME_URL.root("content"),
  customize: () => RESUME_URL.root("customize"),
  items: (url = "") => `/items${url ? "/" + url : ""}`
}
