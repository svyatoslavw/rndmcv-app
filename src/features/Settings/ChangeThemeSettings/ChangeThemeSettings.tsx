"use client"

import { useTheme } from "next-themes"

import { SettingsSection } from "@/entities/user"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/shared/ui"

const ChangeThemeSettings = () => {
  const { theme, setTheme } = useTheme()

  return (
    <SettingsSection
      heading="Theme"
      description="Select your favorite theme to give the app a new look that matches your style."
    >
      <Select onValueChange={setTheme} name="theme" defaultValue={theme}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select a theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Theme</SelectLabel>
            <SelectItem value="system">System</SelectItem>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </SettingsSection>
  )
}

export { ChangeThemeSettings }
