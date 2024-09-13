export type TypeLocale = (typeof locales)[number]

export const locales = ["en", "ua"] as const
export const defaultLocale: TypeLocale = "en"
