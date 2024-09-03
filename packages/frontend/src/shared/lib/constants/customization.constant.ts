import {
  THeadingIcon,
  THeadingSize,
  THeadingStyle,
  TJobSize,
  TNameSize,
  TPosition
} from "@/entities/resume"

export const LAYOUT_DATA: TPosition[] = [
  { pos: "left", class: "flex-row" },
  { pos: "top", class: "flex-col" },
  { pos: "right", class: "flex-row-reverse" }
]

export const HEADING_STYLES: THeadingStyle[] = [
  "box",
  "underline",
  "simple",
  "line",
  "shortUnderline"
]

export const HEADING_SIZES: THeadingSize[] = [12, 16, 20, 24, 28]
export const NAME_SIZES: TNameSize[] = [0, 4, 8, 12, 16]
export const JOB_SIZES: TJobSize[] = [0, 2, 6, 10, 14]
export const HEADING_ICONS: THeadingIcon[] = ["none", "outline", "filled"]
