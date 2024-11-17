export const PUBLIC_URL = {
  root: (url = "") => `${url ? "/" + url : ""}`,

  home: () => "/",
  settings: () => "/settings",
  auth: () => "/auth",
  issues: () => "https://github.com/svyatoslavw/cv-editor/issues",

  sitemap: () => "/sitemap.xml",

  content: () => "/resume/content",
  customize: () => "/resume/customize",
  create: () => "/resume/create",

  coffee: () => "https://ko-fi.com/svyatoslavw",
  github: () => "https://github.com/svyatoslavw/rndmcv-app"
}
