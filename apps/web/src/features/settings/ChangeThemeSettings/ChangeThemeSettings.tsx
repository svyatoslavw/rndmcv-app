"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@rndm/ui/components"
import { useTheme } from "next-themes"

const ChangeThemeSettings = () => {
  const { theme, setTheme } = useTheme()

  return (
    <Select defaultValue={theme} name="theme" onValueChange={setTheme}>
      <SelectTrigger className="relative w-full">
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
  )
}

export { ChangeThemeSettings }
