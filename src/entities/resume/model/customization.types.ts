export type TBlockOrder = "person" | "education" | "experience" | "projects" | "skills"

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
export type THeadingValuePayload = THeadingStyle | TNameSize | THeadingIcon

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
  text: string
  accent: string
  background: string
}

export type TColorSides = {
  left: TColorSide
  right: TColorSide
}

export type TColors = {
  applyAccent: TApplyAccent
  mode: TColorMode
  type: TColorType
  side: {
    left: TColorSide
    right: TColorSide
  }
}

export type TLayout = {
  layout: TPosition
  columns: {
    left: TBlockOrder[]
    right: TBlockOrder[]
  }
  columnsWidth: {
    left: number
    right: number
  }
}

export type TSpacing = {
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
  left: TBlockOrder[]
  right: TBlockOrder[]
}

export type UpdateColumnsWidthPayload = "left" | "right"

export type UpdateColorsPayload = {
  side: {
    left: TColorSide
    right: TColorSide
  }
}

export type UpdateHeadingStylePayload = {
  key: "style"
  value: THeadingStyle
}

export type UpdateHeadingSizePayload = {
  key: "size"
  value: TNameSize
}

export type UpdateHeadingIconPayload = {
  key: "icons"
  value: THeadingIcon
}

export type UpdateHeadingPayload =
  | UpdateHeadingStylePayload
  | UpdateHeadingSizePayload
  | UpdateHeadingIconPayload

export type UpdateSpacingPayload = { key: keyof TSpacing; value: number }

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
