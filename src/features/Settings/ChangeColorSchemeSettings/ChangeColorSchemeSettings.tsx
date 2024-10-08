"use client"

import { useAppDispatch, useAppSelector } from "@/app/store"
import { SettingsSection, changeTheme } from "@/entities/user"
import type { TypeThemeKey } from "@/shared/lib/types"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/shared/ui"

const colors: Array<{ palette: TypeThemeKey; label: string }> = [
  { palette: "theme-green", label: "Green" },
  { palette: "theme-blue", label: "Blue" },
  { palette: "theme-violet", label: "Violet" },
  { palette: "theme-rose", label: "Rose" },
  { palette: "theme-orange", label: "Orange" },
  { palette: "theme-red", label: "Red" },
  { palette: "theme-black", label: "Black" }
]

const ChangeColorSchemeSettings = () => {
  const dispatch = useAppDispatch()

  const theme = useAppSelector((state) => state.settings.theme)

  const onChangeColorScheme = (theme: TypeThemeKey) => {
    dispatch(changeTheme(theme))
  }

  return (
    <SettingsSection
      heading="Theme"
      description="Select your favorite theme to give the app a new look that matches your style."
    >
      <Select onValueChange={onChangeColorScheme} name="theme" defaultValue={theme}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Color</SelectLabel>
            {colors.map((color) => (
              <SelectItem key={color.palette} value={color.palette} className="cursor-pointer">
                {color.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </SettingsSection>
  )
}

export { ChangeColorSchemeSettings }
