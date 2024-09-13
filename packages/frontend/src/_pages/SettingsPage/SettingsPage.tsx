"use client"

import { useLocale, useTranslations } from "next-intl"
import { useTransition } from "react"

import { changeTheme } from "@/entities/user"
import { selectSettingsTheme } from "@/entities/user/model/settings.selectors"
import { TThemeKeys } from "@/shared/lib/hooks"
import { TypeLocale, locales } from "@/shared/lib/i18n"
import { setLanguage } from "@/shared/lib/i18n/i18n-servise"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { convertValueFromObject } from "@/shared/lib/utils"
import {
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Switch
} from "@/shared/ui"

const themes: Array<{ palette: TThemeKeys; label: string }> = [
  { palette: "theme-green", label: "Green" },
  { palette: "theme-blue", label: "Blue" },
  { palette: "theme-violet", label: "Violet" },
  { palette: "theme-rose", label: "Rose" },
  { palette: "theme-orange", label: "Orange" },
  { palette: "theme-red", label: "Red" },
  { palette: "theme-black", label: "Black" }
]

const languages: Record<TypeLocale, string> = {
  en: "English",
  ua: "Українська"
}

const seconds = [20, 30, 40, 50, 60, 120]

const SettingsPage = () => {
  const dispatch = useAppDispatch()
  const [isPending, startTransition] = useTransition()
  const locale = useLocale()
  const t = useTranslations("settingspage")

  const theme = useAppSelector(selectSettingsTheme)

  const onChangeLanguage = (locale: TypeLocale) => {
    startTransition(() => {
      setLanguage(locale)
    })
  }

  const onChangeTheme = (theme: TThemeKeys) => {
    dispatch(changeTheme(theme))
  }

  return (
    <div className="flex w-full flex-col items-center space-y-5 px-20">
      <h1 className="text-4xl font-bold">{t("title")}</h1>
      <div className="w-96 space-y-4">
        <div>
          <h2 className="text-2xl font-bold">{t("general.title")}</h2>
          <p className="text-sm text-gray-400">{t("general.description")}</p>
        </div>
        <div>
          <h3 className="text-base font-bold">{t("general.theme.title")}</h3>
          <p className="mb-2 text-sm">{t("general.theme.description")}</p>
          <Select onValueChange={onChangeTheme} name="color" defaultValue={theme}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a color" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Color</SelectLabel>
                {themes.map((theme) => (
                  <SelectItem key={theme.palette} value={theme.palette} className="cursor-pointer">
                    {theme.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <h3 className="text-base font-bold"> {t("general.autosave.title")}</h3>
          <p className="mb-2 text-sm">{t("general.theme.description")}</p>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Switch id="airplane-mode" />
              <Label htmlFor="airplane-mode">{t("general.autosave.title")}</Label>
            </div>
            <Select onValueChange={onChangeTheme} name="color" defaultValue={theme}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a color" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Color</SelectLabel>
                  {themes.map((theme) => (
                    <SelectItem
                      key={theme.palette}
                      value={theme.palette}
                      className="cursor-pointer"
                    >
                      {theme.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <h3 className="text-base font-bold">{t("general.languages.title")}</h3>
          <p className="mb-2 text-sm">{t("general.languages.description")}</p>
          <Select onValueChange={onChangeLanguage} name="language" defaultValue={locale}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a color" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>{t("general.languages.title")}</SelectLabel>
                {locales.map((locale) => (
                  <SelectItem key={locale} value={locale} className="cursor-pointer">
                    {convertValueFromObject(locale, languages)}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="w-96 space-y-2">
        <div>
          <h2 className="text-xl font-bold">{t("account.title")}</h2>
          <p className="text-sm text-gray-400">{t("account.description")}</p>
        </div>
      </div>
    </div>
  )
}
export { SettingsPage }
