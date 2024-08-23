import { CustomizeJobItalic, CustomizeJobSize } from "@/features"
import { useTheme } from "@/shared/lib"
import {
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/shared/ui"
import { CustomizeWrapper } from "@/shared/ui/customize-wrapper"

const themes = [
  { palette: "theme-green", label: "Green" },
  { palette: "theme-blue", label: "Blue" },
  { palette: "theme-violet", label: "Violet" },
  { palette: "theme-yellow", label: "Yellow" },
  { palette: "theme-orange", label: "Orange" },
  { palette: "theme-red", label: "Red" }
] as const
const CustomizeJobList = () => {
  const { theme, changeTheme } = useTheme()
  return (
    <CustomizeWrapper heading="Job title">
      <CustomizeJobSize />
      <CustomizeJobItalic />
      <div className="space-y-1">
        <Label>Color Scheme</Label>
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
    </CustomizeWrapper>
  )
}

export { CustomizeJobList }
