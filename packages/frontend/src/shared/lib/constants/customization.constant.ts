import {
  TypeBorderSize,
  TypeHeadingIcon,
  TypeHeadingSize,
  TypeHeadingStyle,
  TypeJobSize,
  TypeNameSize,
  TypePosition
} from "../types"

export const LAYOUT_DATA: TypePosition[] = [
  { pos: "left", class: "flex-row" },
  { pos: "top", class: "flex-col" },
  { pos: "right", class: "flex-row-reverse" }
]

export const HEADING_STYLES: TypeHeadingStyle[] = [
  "box",
  "underline",
  "simple",
  "line",
  "shortUnderline"
]

export const HEADING_SIZES: TypeHeadingSize[] = [12, 16, 20, 24, 28]
export const BORDER_SIZES: TypeBorderSize[] = [4, 8, 12]
export const NAME_SIZES: TypeNameSize[] = [0, 4, 8, 12, 16]
export const JOB_SIZES: TypeJobSize[] = [0, 2, 6, 10, 14]
export const HEADING_ICONS: TypeHeadingIcon[] = ["none", "outline", "filled"]
