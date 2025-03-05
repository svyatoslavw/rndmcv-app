"use client"

import { type Locale } from "@/i18n/config"
import { setUserLocale } from "@/shared/config/locale.config"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@rndm/ui/components"
import { useTransition } from "react"

const ChangeLanguage = ({ currentLocale }: { currentLocale: Locale }) => {
  const [isPending, startTransition] = useTransition()

  const handleChangeLanguage = (language: string) => {
    const locale = language as Locale
    startTransition(() => {
      setUserLocale(locale)
    })
  }

  return (
    <Select defaultValue={currentLocale} name="theme" onValueChange={handleChangeLanguage}>
      <SelectTrigger className="relative w-full">
        <SelectValue placeholder="Select a theme" />
      </SelectTrigger>
      <SelectContent className="font-default">
        <SelectGroup>
          <SelectLabel>Language</SelectLabel>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="ua">Українська</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export { ChangeLanguage }
