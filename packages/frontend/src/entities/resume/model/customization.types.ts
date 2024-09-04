// To display a new block it should be added to this type
import { TSectionKey } from "@/shared/lib/types"

export type TColorMode = "basic" | "advanced" | "border"
export type TColorType = "accent" | "multicolor" | "image"

export type THeadingStyle =
  | "box"
  | "topBottomLine"
  | "underline"
  | "simple"
  | "line"
  | "shortUnderline"

export type THeadingSize = 12 | 16 | 20 | 24 | 28
export type TNameSize = 0 | 4 | 8 | 12 | 16
export type TJobSize = 0 | 2 | 6 | 10 | 14
export type THeadingIcon = "none" | "outline" | "filled"

export type TPosition = {
  pos: "top" | "left" | "right"
  class: "flex-col" | "flex-row" | "flex-row-reverse"
}

export type TApplyAccent = {
  name: boolean
  headings: boolean
  headingsLines: boolean
  headerIcons: boolean
  dots: boolean
  dates: boolean
  linkIcons: boolean
}

export type TColorSide = {
  text?: string
  accent?: string
  background?: string
}

export type TColorSides = {
  left: TColorSide
  right: TColorSide
}

type TColors = {
  isAccent: TApplyAccent
  mode: TColorMode
  type: TColorType
  side: {
    left: TColorSide
    right: TColorSide
  }
}

type TLayout = {
  layout: TPosition
  columns: {
    left: TSectionKey[]
    right: TSectionKey[]
  }
  columnsWidth: {
    left: number
    right: number
  }
}

type TSpacing = {
  fontSize: number
  lineHeight: number
  marginX: number
  marginY: number
}

export type THeading = {
  style: THeadingStyle
  size: THeadingSize
  icons: THeadingIcon
}

export type TName = {
  size: TNameSize
  isBold: boolean
  font: string
}
export type TJob = {
  size: TJobSize
  isItalic: boolean
}

export type UpdateColumnsPayload = {
  left: TSectionKey[]
  right: TSectionKey[]
}

export type UpdateCustomizationPayload =
  | { key: "layout"; value: Partial<TLayout> }
  | { key: "colors"; value: Partial<TColors> }
  | { key: "spacing"; value: Partial<TSpacing> }
  | { key: "heading"; value: Partial<THeading> }
  | { key: "name"; value: Partial<TName> }
  | { key: "job"; value: Partial<TJob> }

export type IInitialStateCustomization = {
  layout: TLayout
  colors: TColors
  spacing: TSpacing
  heading: THeading
  name: TName
  job: TJob
}
