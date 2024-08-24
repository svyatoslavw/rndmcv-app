"use client"

import { useTheme } from "@/shared/lib"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/shared/ui"

const themes = [
  { palette: "theme-green", label: "Green" },
  { palette: "theme-blue", label: "Blue" },
  { palette: "theme-violet", label: "Violet" },
  { palette: "theme-rose", label: "Rose" },
  { palette: "theme-orange", label: "Orange" },
  { palette: "theme-red", label: "Red" }
] as const

export default function Settings() {
  const { theme, changeTheme } = useTheme()

  return (
    <div className="flex w-full flex-col items-center space-y-5 px-20">
      <h1 className="text-4xl font-bold">Settings</h1>
      <div className="w-96 space-y-2">
        <div>
          <h2 className="text-xl font-bold">General</h2>
          <p className="text-sm text-gray-400">Configure your general preferences.</p>
        </div>
        <Select onValueChange={changeTheme} name="color" defaultValue={theme}>
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
      <div className="w-96 space-y-2">
        <div>
          <h2 className="text-xl font-bold">Account</h2>
          <p className="text-sm text-gray-400">Change your account preferences.</p>
        </div>
        <Select name="language" defaultValue="en">
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a language" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Language</SelectLabel>
              <SelectItem value="en" className="cursor-pointer">
                English
              </SelectItem>
              <SelectItem value="ua" className="cursor-pointer">
                Українська
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
