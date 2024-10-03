export const PUBLIC_URL = {
  root: (url = "") => `${url ? "/" + url : ""}`,

  home: () => "/",
  settings: () => "/settings",
  pricing: () => "/pricing",
  auth: () => "/auth",

  sitemap: () => "/sitemap.xml"
}

export const RESUME_URL = {
  root: (url = "") => `/resume${url ? "/" + url : ""}`,
  content: () => RESUME_URL.root("content"),
  customize: () => RESUME_URL.root("customize"),
  create: () => RESUME_URL.root("create"),
  items: (url = "") => `/items${url ? "/" + url : ""}`
}
