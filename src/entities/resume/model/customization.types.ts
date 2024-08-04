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
export type THeadingSize = 16 | 18 | 20 | 22 | 24
export type THeadingIcon = "none" | "outline" | "filled"
export type THeadingValuePayload = THeadingStyle | THeadingSize | THeadingIcon

export type TLayoutPosition = {
  position: "top" | "left" | "right"
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
  value: THeadingSize
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

export type IInitialStateCustomization = {
  layout: TLayoutPosition
  columns: {
    left: TBlockOrder[]
    right: TBlockOrder[]
  }
  columnsWidth: {
    left: number
    right: number
  }
  colors: {
    applyAccent: TApplyAccent
    mode: TColorMode
    type: TColorType
    side: {
      left: TColorSide
      right: TColorSide
    }
  }
  spacing: TSpacing
  heading: THeading
}
