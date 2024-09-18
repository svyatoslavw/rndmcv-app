"use client"

import { useState } from "react"

import { useAppDispatch, useAppSelector } from "@/app/store"
import { changeAutosave, changeAutosaveInterval, changeTheme } from "@/entities/user"
import { selectSettings } from "@/entities/user/model/settings.selectors"
import { TypeThemeKey } from "@/shared/lib/types"
import { formatSeconds } from "@/shared/lib/utils"
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

const themes: Array<{ palette: TypeThemeKey; label: string }> = [
  { palette: "theme-green", label: "Green" },
  { palette: "theme-blue", label: "Blue" },
  { palette: "theme-violet", label: "Violet" },
  { palette: "theme-rose", label: "Rose" },
  { palette: "theme-orange", label: "Orange" },
  { palette: "theme-red", label: "Red" },
  { palette: "theme-black", label: "Black" }
]

const seconds = ["15", "30", "45", "60", "120"]

const SettingsPage = () => {
  const dispatch = useAppDispatch()
  const [isEnabled, setIsEnabled] = useState(false)

  const { autosave, theme } = useAppSelector(selectSettings)

  const onChangeTheme = (theme: TypeThemeKey) => {
    dispatch(changeTheme(theme))
  }

  const onChangeAutoSave = (isEnabled: boolean) => {
    dispatch(changeAutosave({ isEnabled }))
  }

  const onChangeAutoSaveInterval = (interval: string) => {
    dispatch(changeAutosaveInterval({ interval: +interval }))
  }

  return (
    <div className="flex w-full flex-col items-center space-y-5 px-20">
      <h1 className="text-4xl font-bold">Settings</h1>
      <div className="w-96 space-y-4">
        <div>
          <h2 className="text-2xl font-bold">General</h2>
          <p className="text-sm text-gray-400">Configure your general preferences.</p>
        </div>
        <div>
          <h3 className="text-base font-bold">Theme</h3>
          <p className="mb-2 text-sm">
            Select your favorite theme to give the app a new look that matches your style.
          </p>
          <Select onValueChange={onChangeTheme} name="theme" defaultValue={theme}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a theme" />
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
          <h3 className="text-base font-bold">Auto Save</h3>
          <p className="mb-2 text-sm">
            Select whether auto-save is required and at what interval it will work.
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Switch
                id="auto-save"
                checked={autosave.isEnabled}
                onCheckedChange={onChangeAutoSave}
              />
              <Label htmlFor="auto-save">Auto Save</Label>
            </div>

            <Select
              disabled={!autosave.isEnabled}
              defaultValue={autosave.interval.toString()}
              onValueChange={onChangeAutoSaveInterval}
              name="auto-save"
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select interval" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Interval</SelectLabel>
                  {seconds.map((sec) => (
                    <SelectItem key={sec} value={sec} className="cursor-pointer">
                      {formatSeconds(+sec)}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <div className="w-96 space-y-2">
        <div>
          <h2 className="text-xl font-bold">Account</h2>
          <p className="text-sm text-gray-400">Change your account preferences.</p>
        </div>
      </div>
    </div>
  )
}
export { SettingsPage }
