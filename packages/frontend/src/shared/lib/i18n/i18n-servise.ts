"use server"

import { cookies } from "next/headers"

import { TypeLocale, defaultLocale } from "./i18n-config"

const COOKIE_NAME = "RNDMCV_LOCALE"

export async function getLanguage() {
  return cookies().get(COOKIE_NAME)?.value || defaultLocale
}

export async function setLanguage(locale: TypeLocale) {
  cookies().set(COOKIE_NAME, locale)
}
