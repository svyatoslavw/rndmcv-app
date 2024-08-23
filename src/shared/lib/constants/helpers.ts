import { THeading, TJob, TName, TPosition } from "@/entities/resume"

export const LAYOUT_DATA: TPosition[] = [
  { pos: "left", class: "flex-row" },
  { pos: "top", class: "flex-col" },
  { pos: "right", class: "flex-row-reverse" }
]

export const HEADING_STYLES: THeading["style"][] = [
  "box",
  "underline",
  "simple",
  "line",
  "shortUnderline"
]

export const HEADING_SIZES: THeading["size"][] = [12, 16, 20, 24, 28]
export const NAME_SIZES: TName["size"][] = [0, 4, 8, 12, 16]
export const JOB_SIZES: TJob["size"][] = [0, 2, 6, 10, 14]
export const HEADING_ICONS: THeading["icons"][] = ["none", "outline", "filled"]
