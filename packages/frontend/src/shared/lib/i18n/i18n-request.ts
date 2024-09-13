import { getRequestConfig } from "next-intl/server"

import { getLanguage } from "./i18n-servise"

export default getRequestConfig(async () => {
  const locale = await getLanguage()

  return {
    locale,
    messages: (await import(`../dictionaries/${locale}.json`)).default
  }
})
