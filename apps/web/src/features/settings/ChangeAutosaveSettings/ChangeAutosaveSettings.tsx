"use client"

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
} from "@rndm/ui/components"

import { changeAutosave, changeAutosaveInterval } from "@/entities/user"
import { useAppDispatch, useAppSelector } from "@/shared/lib/store"
import { formatSeconds } from "@/shared/lib/utils"

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
        <SelectTrigger className="relative w-full">
          <SelectValue placeholder="Select interval" />
        </SelectTrigger>
        <SelectContent className="font-default">
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
  )
}

export { ChangeAutosaveSettings }
