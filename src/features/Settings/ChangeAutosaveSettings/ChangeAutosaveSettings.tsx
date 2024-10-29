"use client"

import { useAppDispatch, useAppSelector } from "@/app/store"
import { SettingsSection, changeAutosave, changeAutosaveInterval } from "@/entities/user"
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

const seconds = ["15", "30", "45", "60", "120"]

const ChangeAutosaveSettings = () => {
  const dispatch = useAppDispatch()
  const autosave = useAppSelector((state) => state.settings.autosave)

  const onChangeAutoSave = (isEnabled: boolean) => {
    dispatch(changeAutosave({ isEnabled }))
  }

  const onChangeAutoSaveInterval = (interval: string) => {
    dispatch(changeAutosaveInterval({ interval: +interval }))
  }

  return (
    <SettingsSection
      description="Select your favorite theme to give the app a new look that matches your style."
      heading="Theme"
    >
      <div className="space-y-3">
        <Label className="flex items-center space-x-2">
          <Switch checked={autosave.isEnabled} onCheckedChange={onChangeAutoSave} />
          <span>Auto Save</span>
        </Label>

        <Select
          defaultValue={autosave.interval.toString()}
          disabled={!autosave.isEnabled}
          name="auto-save"
          onValueChange={onChangeAutoSaveInterval}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select interval" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Interval</SelectLabel>
              {seconds.map((sec) => (
                <SelectItem key={sec} className="cursor-pointer" value={sec}>
                  {formatSeconds(+sec)}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </SettingsSection>
  )
}

export { ChangeAutosaveSettings }
